#!/usr/bin/env node
'use strict';

// RedFoxHub HTTP client for environments where the MCP server is unavailable.
// Use Node, not curl: the RedFox gateway rejects curl-style requests with code 500.

const fs = require('fs');
const os = require('os');
const path = require('path');
const https = require('https');

const BASE = 'https://redfox.hk';

const ENDPOINTS = {
  'douyin-search': { path: '/story/api/dy/data/searchWork', platform: 'douyin' },
  'xhs-search': { path: '/story/api/xhs/search/search', platform: 'xiaohongshu' },
};

const KEY_FILE = path.join(__dirname, 'redfox.key');

function findKey() {
  if (process.env.REDFOX_API_KEY) {
    return { key: process.env.REDFOX_API_KEY.trim(), source: 'env:REDFOX_API_KEY' };
  }
  const candidates = [
    KEY_FILE, // key stored next to this script (inside the skill dir)
    path.join(os.homedir(), '.workbuddy', 'redfox.key'),
    path.join(os.homedir(), '.claude', 'redfox.key'),
    path.join(os.homedir(), '.redfox.key'),
  ];
  for (const p of candidates) {
    try {
      const v = fs.readFileSync(p, 'utf8').trim();
      if (v) return { key: v, source: p };
    } catch (_) { /* keep looking */ }
  }
  return { key: null, source: null };
}

function parseArgs(argv) {
  const out = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) {
      const key = a.slice(2);
      const next = argv[i + 1];
      if (next === undefined || next.startsWith('--')) out[key] = true;
      else { out[key] = next; i++; }
    } else out._.push(a);
  }
  return out;
}

function slug(s) {
  return String(s).replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '').slice(0, 60) || 'query';
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function post(apiPath, body, key) {
  const payload = JSON.stringify(Object.assign({ source: 'mcp' }, body));
  const url = new URL(BASE + apiPath);
  const opts = {
    hostname: url.hostname,
    path: url.pathname + url.search,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(payload),
      'X-API-KEY': key,
      'REDFOX_API_KEY': key,
      'Accept': 'application/json',
      'User-Agent': 'redfox-node-client',
    },
  };
  return new Promise((resolve, reject) => {
    const req = https.request(opts, (res) => {
      let data = '';
      res.on('data', (c) => { data += c; });
      res.on('end', () => {
        let json;
        try { json = JSON.parse(data); }
        catch (e) { return reject(new Error(`Non-JSON response (HTTP ${res.statusCode}): ${data.slice(0, 300)}`)); }
        resolve({ status: res.statusCode, json });
      });
    });
    req.on('error', reject);
    req.setTimeout(60000, () => req.destroy(new Error('Request timed out after 60s')));
    req.write(payload);
    req.end();
  });
}

function num(v) {
  return typeof v === 'number' && isFinite(v) ? v : null;
}

function summarizeDouyin(json, limit) {
  const list = json?.data?.list || [];
  const rows = list.map((it) => ({
    id: it.videoId,
    author: it.authorName,
    fans: num(it.authorFansCount),
    likes: num(it.likeCount),
    comments: num(it.commentCount),
    shares: num(it.shareCount),
    saves: num(it.collectCount),
    publish: it.publishTime,
    hook: String(it.content || '').replace(/\s+/g, ' ').slice(0, 50),
    url: it.opusUrl,
  }));
  return { total: json?.data?.total ?? list.length, rows: rows.slice(0, limit) };
}

function summarizeXhs(json, limit) {
  const list = json?.data?.articles || [];
  const rows = list.map((it) => ({
    id: it.id,
    author: it.authorNickname,
    fans: num(it.authorFans),
    likes: num(it.likedCount),
    comments: num(it.commentsCount),
    shares: num(it.sharedCount),
    saves: num(it.collectedCount),
    engagement: num(it.interactiveCount),
    publish: it.createTime,
    hook: String(it.title || it.desc || '').replace(/\s+/g, ' ').slice(0, 50),
    url: it.shareInfoLink,
  }));
  return { total: json?.data?.total ?? list.length, rows: rows.slice(0, limit) };
}

function engagementOf(r) {
  return r.engagement != null
    ? r.engagement
    : (r.likes || 0) + (r.comments || 0) + (r.shares || 0) + (r.saves || 0);
}

function printRows(platform, rows) {
  rows = rows.slice().sort((a, b) => engagementOf(b) - engagementOf(a));
  if (!rows.length) {
    console.log('  (no rows returned — broaden the keyword or widen the date range)');
    return;
  }
  for (const r of rows) {
    const eng = r.engagement != null
      ? r.engagement
      : (r.likes || 0) + (r.comments || 0) + (r.shares || 0) + (r.saves || 0);
    console.log(
      `  ${String(r.author || '?').slice(0, 14).padEnd(14)} | fans ${String(r.fans ?? 'N/A').padStart(8)}` +
      ` | eng ${String(eng).padStart(7)} | ${r.publish || '?'} | ${r.hook}`
    );
  }
  console.log(`  platform=${platform}; use the saved JSON for full fields and URLs.`);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const cmd = args._[0];
  const found = findKey();
  const key = found.key;

  if (cmd === 'check') {
    if (!key) {
      console.error('NO_KEY. Looked for: env REDFOX_API_KEY, then ' + [
        KEY_FILE,
        path.join(os.homedir(), '.workbuddy', 'redfox.key'),
        path.join(os.homedir(), '.claude', 'redfox.key'),
        path.join(os.homedir(), '.redfox.key'),
      ].join(', '));
      process.exit(1);
    }
    const k = key;
    const ok = k.startsWith('ak_') && k.length >= 20 && !/\s/.test(k);
    console.log(`KEY_OK=${ok} source=${found.source} masked=${k.slice(0, 4)}***${k.slice(-4)} len=${k.length}`);
    if (!ok) console.error('Key looks malformed: expected a single ak_... token with no spaces or quotes.');
    process.exit(ok ? 0 : 1);
  }

  if (!key) {
    console.error('No RedFox API key. Run `node redfox.js check`, or set REDFOX_API_KEY, or write the key to ' + KEY_FILE);
    process.exit(2);
  }

  let apiPath, body, platform;
  if (cmd === 'raw') {
    if (!args.path) { console.error('raw requires --path /story/api/... [--body \'{...}\']'); process.exit(2); }
    apiPath = args.path;
    body = args.body ? JSON.parse(args.body) : {};
    platform = args.platform || 'custom';
  } else if (ENDPOINTS[cmd]) {
    if (!args.keyword) { console.error(`${cmd} requires --keyword "..."`); process.exit(2); }
    apiPath = ENDPOINTS[cmd].path;
    platform = ENDPOINTS[cmd].platform;
    body = {
      keyword: args.keyword,
      pageNum: Number(args.page || 1),
      pageSize: Math.min(Number(args.size || 50), 50),
    };
    if (args.start) body.startDate = args.start;
    if (args.end) body.endDate = args.end;
  } else {
    console.error('Usage:');
    console.error('  node redfox.js check');
    console.error('  node redfox.js douyin-search --keyword "小户型收纳" [--start 2026-07-01] [--end 2026-10-31] [--page 1] [--size 50]');
    console.error('  node redfox.js xhs-search    --keyword "出租屋收纳" [--start ...] [--end ...] [--page 1] [--size 50]');
    console.error('  node redfox.js raw --path /story/api/... [--body \'{...}\'] [--platform name]');
    process.exit(2);
  }

  const { status, json } = await post(apiPath, body, key);
  const ok = json && (json.code === 2000 || json.code === 200);
  const outDir = path.join(process.cwd(), 'creator-benchmark', 'raw', platform, today());
  fs.mkdirSync(outDir, { recursive: true });
  const name = `${slug(args.keyword || cmd)}.json`;
  const outFile = path.join(outDir, name);
  fs.writeFileSync(outFile, JSON.stringify(json, null, 2));

  if (!ok) {
    console.error(`FAILED HTTP ${status} code=${json && json.code} msg=${(json && (json.message || json.msg)) || ''}`);
    console.error(`raw saved: ${outFile}`);
    process.exit(1);
  }

  const limit = Number(args.limit || 12);
  const summary = cmd === 'xhs-search' ? summarizeXhs(json, limit * 5) : summarizeDouyin(json, limit * 5);
  // The search endpoints are rank-scored, not date-filtered; apply the window here.
  const inWindow = (p) => {
    if (!p) return true;
    const d = String(p).slice(0, 10);
    if (args.start && d < args.start) return false;
    if (args.end && d > args.end) return false;
    return true;
  };
  const rows = summary.rows.filter((r) => inWindow(r.publish)).slice(0, limit);
  console.log(`OK total=${summary.total} returned=${summary.rows.length} inWindow=${rows.length} (saved: ${outFile})`);
  if (args.start || args.end) console.log(`  window: ${args.start || '...'} .. ${args.end || '...'} (client-side filter)`);
  printRows(platform, rows);
}

main().catch((e) => {
  console.error('ERROR', e.message);
  process.exit(1);
});
