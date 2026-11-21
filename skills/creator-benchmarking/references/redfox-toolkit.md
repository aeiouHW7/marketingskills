# RedFox Toolkit (红狐数据)

RedFoxHub (`https://redfox.hk`) provides paid data APIs for Douyin, Xiaohongshu, TikTok, X, WeChat, Bilibili, and other platforms. This file covers how to connect it, which tools to use for creator benchmarking, how to map its response fields into the common schema, and what to do when it is unavailable.

All tool names, endpoints, and fields below were verified against `redfox-mcp-server@1.0.6` (88 tools served). Tool names change between releases — run `tools/list` in your client before relying on any name.

---

## Contents

- Connection Options
- API Key and Safety
- MCP Tool Inventory
- Raw HTTP API
- Python SDK
- Field Mapping
- Benchmarking Recipes
- Cost, Caching, and Rate Limits
- Failure Modes and Fallback

---

## Connection Options

### Option A — MCP (recommended for agents)

Add the RedFox MCP server to Claude Code (user scope so it works from any project):

```bash
claude mcp add redfox -e REDFOX_API_KEY=your-key-here -- npx -y redfox-mcp-server@latest
```

Or add it to `.mcp.json`:

```json
{
  "mcpServers": {
    "redfox": {
      "command": "npx",
      "args": ["-y", "redfox-mcp-server@latest"],
      "env": { "REDFOX_API_KEY": "your-key-here" }
    }
  }
}
```

Verify with `claude mcp list` — you want `redfox: npx -y redfox-mcp-server@latest - ✓ Connected`.

Common misconfigurations that silently break calls:
- Pasting the API key into the package argument (`redfox-mcp-server@latestak_...`) instead of `env.REDFOX_API_KEY`.
- Leaving `REDFOX_API_KEY` as a literal placeholder like `"你的key"`.
- Adding the server under one project's `projects` map when you work from another directory.

### Option B — Raw HTTP API

Use this when MCP is not available but a key exists. No SDK required. See "Raw HTTP API" below.

### Option C — Python SDK

RedFox publishes a Python SDK for scripted batch collection. Method names are less stable than the MCP tool names; confirm them in the RedFox docs or the installed package before writing automation. If it is unavailable, use raw HTTP with the same endpoints.

### Option D — Bundled Node helper (no MCP required)

`scripts/redfox.js` in this skill calls the HTTP API directly with Node. Use it when MCP is unavailable — e.g. inside an app that runs with `--strict-mcp-config`, which silently ignores user/project `mcp.json` files.

The script lives inside the skill directory, so resolve an absolute path — running `node scripts/redfox.js` from the project cwd fails with `MODULE_NOT_FOUND`.

```bash
S="$USERPROFILE/.workbuddy/skills/creator-benchmarking/scripts/redfox.js"   # WorkBuddy
# S="$USERPROFILE/.claude/skills/creator-benchmarking/scripts/redfox.js"    # Claude Code

node "$S" check                                                          # free; verifies the key
node "$S" douyin-search --keyword "小户型收纳" --start 2026-07-01 --end 2026-10-31
node "$S" xhs-search    --keyword "出租屋收纳" --start 2026-07-01 --end 2026-10-31
node "$S" raw --path /story/api/dy/data/searchWork --body '{"keyword":"收纳","pageNum":1,"pageSize":50}'
```

Key lookup order (first hit wins): `REDFOX_API_KEY`, `<skill-dir>/redfox.key`, `~/.workbuddy/redfox.key`, `~/.claude/redfox.key`. The script reads it itself and never prints it. When a user says "the API is configured but it still doesn't work", run `check` before anything else — it separates a bad key from a bad path.

`check` output looks like `KEY_OK=true source=... masked=ak_9***0302 len=35`. If `KEY_OK=false`, the key file contains quotes, whitespace, a BOM, or a placeholder.

It saves the raw JSON to `creator-benchmark/raw/<platform>/<YYYY-MM-DD>/<query>.json`, prints a compact engagement-sorted summary, and applies the date window client-side (the search endpoints are rank-scored and do not honor `startDate`/`endDate` reliably).

**Use Node, not curl.** The RedFox gateway returns `code 500 请求异常` for curl requests even with correct headers and `source`; the same request through Node's `https` module returns `code 2000`. If you must debug transport, compare curl vs Node before blaming the key.

---

## API Key and Safety

- Generate a key at `https://redfox.hk/settings/api-keys`.
- Store it in the environment or MCP config. **Never commit it to the repo**, print it in full, or paste it into a package name.
- RedFox bills per call. Batch queries and cache raw responses before analysis.
- Public data only. Do not use the API to access private accounts, private groups, or content the platform does not expose.

---

## MCP Tool Inventory

The bundle serves 88 tools across Douyin, Xiaohongshu, WeChat, Bilibili, Weibo, Kuaishou, X, TikTok, and cross-platform helpers. The creator-research subset:

### Douyin (抖音)

| Tool | What it does | Key args |
|------|--------------|----------|
| `douyin-search` | Search videos/notes by keyword; **returns `authorFansCount`** | `keyword` (required; empty = site-wide hot), `startDate`, `endDate`, `pageNum` (default 1), `pageSize` (default 50, max 50) |
| `douyin-similar-account` | Similar/benchmark accounts for a given account | `accountId` or `accountName` |
| `douyin-top-account` | Top-account rankings by period/category | `query`, `period`, `date`, `category`, `limit` |
| `douyin-rise-ranking` | Fast-rising accounts (涨粉榜) | `rank_type`, `rank_date`, `category`, `top_n` |
| `douyin-account-diagnosis` | Account data + diagnosis report | `accountId` (required) |
| `douyin-subscribe` | A creator's recent works (baseline source) | `name`, `category`, `accounts`, `date-start`, `date-end`, `markdown` |
| `douyin-daily-hot` | Daily hot content | `type`, `start`, `end`, `full` |
| `douyin-hot-trend` | Real-time / dated hot topics | `startDate` / `endDate` (omit for real-time) |
| `douyin-content-surge` / `douyin-weekly-surge` | Content surge rankings | `type`, `start` |
| `douyin-prohibited-word` | Banned-word check on your draft | `content`, `file`, `url` |
| `douyin-video-downloader` | **Not available** in this build (no endpoint) | — |

### Xiaohongshu (小红书)

| Tool | What it does | Key args |
|------|--------------|----------|
| `xiaohongshu-search` | Search hot notes by keyword; **returns `authorFans`**; also returns `relatedSearches`, `hotTopics`, `latestHotArticles` | `keyword` (required), `startDate`, `endDate`, `pageNum` (default 1), `pageSize` (default 50) |
| `xiaohongshu-crawler` | Crawl notes by keyword with sort | `start-date`, `end-date`, `sort-type` |
| `xiaohongshu-similar-account` | Similar accounts; can filter by fan range and level | `red_id` |
| `xiaohongshu-top-account` | Top-account rankings | `query`, `period`, `date`, `category`, `limit` |
| `xiaohongshu-dailytop` / `xiaohongshu-weeklytop` | Daily / 7-day top notes | `rank_date`, `category`, `keyword`, `top_n` |
| `xiaohongshu-account-analyzer` | Account profile + analysis | `user_ids` / `account_name` |
| `xiaohongshu-note-analyzer` | Note-level analysis | `keyword` |
| `xiaohongshu-prohibited-word` | Banned-word check | `content`, `file`, `url` |
| `xiaohongshu-lowtop` | **Not available** in this build (no endpoint). Derive 低粉爆款 from `xiaohongshu-search` + `authorFans` instead. | — |

### TikTok

| Tool | What it does |
|------|--------------|
| `tiktok-video-downloader` | Download a TikTok video by URL only |

**No TikTok content or creator search in the bundle.** Use TikTok's own search and the free Creative Center for discovery, then analyze manually.

### X / Twitter

| Tool | What it does |
|------|--------------|
| `twitter-comment` | Fetch comments for a tweet (`cursor`, `html`) |
| `twitter-video-downloader` | Download a video by URL |
| `twitter-work-search` | **Disabled** in this build (no scripts) |

**No X post search in the bundle.** Use X advanced search manually and feed specific tweet IDs to `twitter-comment`.

### Cross-platform and auxiliary

| Tool | What it does |
|------|--------------|
| `cn-last30days` | Last-N-days cross-platform topic search (Douyin, Xiaohongshu, WeChat and more); args include `platforms`, `count`, `days` |
| `trending-hub` | Hot list by platform, optionally filtered by keyword (`source`, `platforms`) |
| `trending-hub-top10` | Top hot keywords (`start-date`, `end-date`) |
| `multi-content-feed` | Cross-platform top-content feed (`keyword`, `platforms`, `startTime`, `endTime`) |
| `kuaishou-search`, `weibo-*`, `wechat-*`, `bilibili-*` | Other platforms if the niche extends there |

---

## Raw HTTP API

### Common contract

- Base URL: `https://redfox.hk`
- Method: `POST`
- Content-Type: `application/json`
- Auth header: `X-API-KEY: <key>` (the MCP client sends both `X-API-KEY` and `REDFOX_API_KEY`; some endpoints declare `REDFOX_API_KEY`)
- **Always include `"source"` in the JSON body** (the MCP client sends `"source": "mcp"`). Omitting it can return `code: 500` "请求异常".
- Success: `code` is `2000` (the client also treats `200` as success)

### Douyin — keyword search

```bash
curl -X POST "https://redfox.hk/story/api/dy/data/searchWork" \
  -H "Content-Type: application/json" \
  -H "X-API-KEY: $REDFOX_API_KEY" \
  -d '{"keyword":"小户型收纳","source":"mcp","pageNum":1,"pageSize":50}'
```

Response: `data.total`, `data.pageNum`, `data.pageSize`, `data.list[]` with:

`videoId`, `content`, `videoType` (0 = video, 68 = image set, 63 = livestream clip), `duration` (ms), `publishTime`, `coverUrl`, `opusUrl`, `imageUrlList`, `tagList`, `likeCount`, `commentCount`, `shareCount`, `collectCount`, `authorUid`, `authorName`, `authorFansCount`, `authorAvatarUrl`, `authorShortId`, `authorUniqueId`, `authorSecUid`.

### Xiaohongshu — keyword search (scored ranking)

```bash
curl -X POST "https://redfox.hk/story/api/xhs/search/search" \
  -H "Content-Type: application/json" \
  -H "X-API-KEY: $REDFOX_API_KEY" \
  -d '{"keyword":"出租屋收纳","source":"mcp","pageNum":1,"pageSize":50}'
```

Response: `data.total`, `data.keyword`, `data.articles[]`, `data.relatedSearches`, `data.hotTopics`, `data.latestHotArticles`, `data.tips`.

Each `articles[]` item: `id` (note id), `title`, `desc`, `cover`, `shareInfoLink` (note URL), `createTime`, `authorId`, `authorNickname`, `authorFans`, `interactiveCount`, `likedCount`, `collectedCount`, `commentsCount`, `sharedCount`, plus `popularityScore`, `recencyScore`, `relevanceScore`, `totalScore`, `topicsName`.

The bundled search is rank-scored by the API (relevance/recency/popularity), not a raw "newest" feed. Use `xiaohongshu-crawler` with `sort-type` when you need explicit sort control.

> Data lag: some Xiaohongshu data is described as T+1. Do not treat the newest hours as complete.

---

## Python SDK

The SDK is optional. For a small one-off run, MCP or `curl` is enough. For scheduled batch collection, inspect the SDK's client namespace and confirm method names against the current docs rather than assuming they mirror the MCP tool names. Keep the key in `REDFOX_API_KEY`.

---

## Field Mapping

### Douyin → common schema

| RedFox field | Common field | Notes |
|--------------|--------------|-------|
| `videoId` | `content_id` | Deduplicate key |
| `opusUrl` | `url` | |
| `content` | `title_or_hook` | First line is the hook |
| `publishTime` | `published_at` | Normalize to ISO date |
| `videoType` | `format` | 0 video, 68 image set |
| `duration` | `duration_sec` | Divide ms by 1000 |
| `likeCount` | `likes` | |
| `commentCount` | `comments` | |
| `shareCount` | `shares` | |
| `collectCount` | `saves` | |
| `tagList` | `hashtags` | |
| `authorUid` | `author_id` | |
| `authorName` | `author_name` | |
| `authorFansCount` | `author_followers` | **Included in search results** |

### Xiaohongshu → common schema

| RedFox field | Common field | Notes |
|--------------|--------------|-------|
| `id` | `content_id` | |
| `shareInfoLink` | `url` | |
| `title` / `desc` | `title_or_hook` | Title is the primary hook |
| `createTime` | `published_at` | |
| `cover` | `cover_url` | |
| `likedCount` | `likes` | |
| `commentsCount` | `comments` | |
| `sharedCount` | `shares` | |
| `collectedCount` | `saves` | Strong quality signal |
| `interactiveCount` | `engagement` | Pre-summed total |
| `topicsName` | `hashtags` | |
| `authorNickname` | `author_name` | |
| `authorId` | `author_id` | |
| `authorFans` | `author_followers` | **Included in search results** |

Follower counts come back with the search hit, so a separate profile call is only needed when a field is blank or when you want the creator's recent posts for a baseline (`douyin-subscribe`, `xiaohongshu-account-analyzer`).

---

## Benchmarking Recipes

### Recipe 1 — Find low-follower viral notes (小红书)

1. `xiaohongshu-search(keyword)` for each prioritized query.
2. Deduplicate by `id`.
3. Keep notes where `authorFans` is under ~10k — no profile call needed.
4. Compute each note's engagement and compare to the niche median.
5. Keep notes with `outlier_multiple >= 3`; tear down the top 10.
6. If `xiaohongshu-lowtop` were available it would be faster, but it is disabled in this build.

### Recipe 2 — Build a creator baseline (抖音)

1. `douyin-search(keyword, pageSize=50)`.
2. Deduplicate by `videoId`; read `authorFansCount` directly.
3. For shortlisted authors, call `douyin-subscribe(name=..., date-start=..., date-end=...)` for recent posts.
4. Compute median engagement from those recent posts.
5. Rank search results by `outlier_multiple`, not raw likes.

### Recipe 3 — Cross-platform topic scan

1. `cn-last30days(keyword, platforms=[...], days=30)` to see which platforms and angles are hot.
2. Pick 2–3 angles with evidence.
3. Run platform-specific searches for depth.
4. Record which platform over-indexes for each angle — that is your primary format/platform match.

### Recipe 4 — Validate a topic before producing

1. Search the exact phrase on the target platform (`douyin-search` / `xiaohongshu-search`).
2. Read `relatedSearches` and (`douyin-hot-trend` / `trending-hub`) for demand signals.
3. If the top results are all older than 90 days or all mega-accounts, narrow the angle.
4. If low-follower accounts are getting outliers on the phrase, the topic is replicable.

### Recipe 5 — Check a draft before publishing

1. `douyin-prohibited-word(content=...)` and/or `xiaohongshu-prohibited-word(content=...)`.
2. Fix flagged terms, then publish.

---

## Cost, Caching, and Rate Limits

- Pricing is pay-as-you-go. Confirm current pricing in the RedFox console before a large sweep.
- Some Xiaohongshu data is **T+1**; recent data may be incomplete.
- Cache every response to disk before analysis:

```
creator-benchmark/raw/<platform>/<YYYY-MM-DD>/<query-slug>.json
```

- Reuse cached data within a run instead of re-querying. Re-query only when the window or query changes.
- Batch fetches: one search call returns followers for every author in the page — do not call a profile tool per author.
- If you hit a rate limit, back off and reduce `pageSize` rather than retrying immediately.

---

## Failure Modes and Fallback

| Symptom | Likely cause | Action |
|---------|--------------|--------|
| `[NO_API_KEY]` | `REDFOX_API_KEY` not set | Add it to the MCP config or environment; do not hard-code it |
| `[BIZ_ERROR]` or `code != 2000` | Invalid key, no permission, or bad params | Check the key, endpoint, and parameter types |
| `code: 500` "请求异常" on raw HTTP | Missing `source` in the body, or wrong header/endpoint | Add `"source": "mcp"`; send `X-API-KEY`; confirm the endpoint path |
| Empty `list` / `articles` | Query too narrow, T+1 lag, or wrong library | Broaden the query, wait for data, or switch endpoint |
| Tool not found | Wrong package/version installed, or tool disabled | Check `tools/list`; tools like `xiaohongshu-lowtop` and `twitter-work-search` are disabled |
| Connecting fails in one project but not another | Server scoped to the wrong project | Re-add at user scope |
| Server configured in `mcp.json` but never appears | Client runs `--strict-mcp-config`, which blocks USER/PROJECT/LOCAL/PLUGIN scopes (seen in WorkBuddy) | Add the server through the client's MCP UI, or skip MCP and use Option D (`scripts/redfox.js`) |
| Rate limit | Too many calls too fast | Back off, batch, and cache |

### Fallback protocol

If RedFox is unavailable:

1. Tell the user which tool is missing and what it would enable.
2. Use WebSearch to find candidate creators and posts.
3. Verify metrics manually in the platform app.
4. For TikTok, use Creative Center (free).
5. For X, use advanced search operators.
6. Mark every manually verified metric with its date and source. Never fabricate a value.

Do not silently substitute web estimates for measured platform data. The user needs to know which numbers are observed and which are approximate.
