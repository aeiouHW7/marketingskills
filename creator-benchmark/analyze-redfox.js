// RedFox raw data normalizer + outlier finder (zero-dep, Node 18+)
// Usage: node analyze-redfox.js <rawDir> <platform>   platform = douyin | xhs
const fs = require('fs');
const path = require('path');

const [rawDir, platform] = process.argv.slice(2);
if (!rawDir || !platform) { console.error('usage: node analyze-redfox.js <rawDir> douyin|xhs'); process.exit(1); }

const files = fs.readdirSync(rawDir).filter(f => f.endsWith('.json'));
const map = new Map(); // id -> record

for (const f of files) {
  let j;
  try { j = JSON.parse(fs.readFileSync(path.join(rawDir, f), 'utf8')); } catch { continue; }
  if (j.code !== 2000 || !j.data) { console.error(`[skip] ${f}: code=${j.code}`); continue; }
  const kw = f.replace('.json', '');
  if (platform === 'douyin') {
    for (const v of (j.data.list || [])) {
      if (!v.videoId || map.has(v.videoId)) continue;
      map.set(v.videoId, {
        kw, id: v.videoId, author: v.authorName, fans: v.authorFansCount || 0,
        likes: v.likeCount || 0, comments: v.commentCount || 0, shares: v.shareCount || 0, saves: v.collectCount || 0,
        url: v.opusUrl, title: (v.content || '').slice(0, 60), published: v.publishTime,
      });
    }
  } else {
    for (const a of (j.data.articles || [])) {
      if (!a.id || map.has(a.id)) continue;
      map.set(a.id, {
        kw, id: a.id, author: a.authorNickname, fans: a.authorFans || 0,
        likes: a.likedCount || 0, comments: a.commentsCount || 0, shares: a.sharedCount || 0, saves: a.collectedCount || 0,
        url: a.shareInfoLink, title: (a.title || a.desc || '').slice(0, 60), published: a.createTime,
      });
    }
  }
}

const all = [...map.values()].map(r => ({ ...r, engagement: r.likes + r.comments + r.shares + r.saves }));
const med = arr => { const s = arr.map(x => x).sort((a, b) => a - b); return s.length ? s[Math.floor(s.length / 2)] : 0; };
const medEng = med(all.filter(r => r.engagement > 0).map(r => r.engagement));

// related searches / hot topics (xhs only, from first parseable file)
if (platform === 'xhs') {
  for (const f of files) {
    try {
      const j = JSON.parse(fs.readFileSync(path.join(rawDir, f), 'utf8'));
      if (j.code === 2000 && j.data && (j.data.relatedSearches || j.data.hotTopics)) {
        console.log(`\n== ${f.replace('.json','')} 相关搜索: ${(j.data.relatedSearches||[]).join(' | ')}`);
        console.log(`   热点话题: ${(j.data.hotTopics||[]).map(t => typeof t === 'string' ? t : (t.name||JSON.stringify(t))).join(' | ')}`);
      }
    } catch {}
  }
}

console.log(`\n#### ${platform.toUpperCase()} 汇总: ${all.length} 条去重内容, 互动中位数 ${medEng}, 样本窗口 ${files.length} 个关键词`);
console.log('\n-- TOP 15 互动(绝对值) --');
for (const r of all.sort((a, b) => b.engagement - a.engagement).slice(0, 15)) {
  console.log(`[${r.kw}] @${r.author} 粉丝${r.fans} 赞${r.likes} 评${r.comments} 藏${r.saves} 转${r.shares} | ${r.title}`);
}

console.log('\n-- 低粉爆款 (粉丝<2万 且 互动≥中位数3倍) --');
const low = all.filter(r => r.fans > 0 && r.fans < 20000 && r.engagement >= medEng * 3).sort((a, b) => b.engagement - a.engagement);
if (!low.length) console.log('(本批样本无符合项——尝试更细分关键词或更大页深)');
for (const r of low.slice(0, 15)) {
  console.log(`[${r.kw}] @${r.author} 粉丝${r.fans} 互动${r.engagement} (${(r.engagement / medEng).toFixed(1)}x中位) | ${r.title}`);
}

console.log('\n-- 中腰部账号活跃样本 (2万-50万粉, 按互动) --');
const mid = all.filter(r => r.fans >= 20000 && r.fans <= 500000).sort((a, b) => b.engagement - a.engagement);
const seen = new Set();
let n = 0;
for (const r of mid) {
  if (seen.has(r.author)) continue; seen.add(r.author);
  console.log(`[${r.kw}] @${r.author} 粉丝${r.fans} 赞${r.likes} 藏${r.saves} | ${r.title}`);
  if (++n >= 15) break;
}
