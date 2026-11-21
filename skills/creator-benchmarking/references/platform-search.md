# Platform Search Recipes

Per-platform query syntax, filters, manual verification, and metric normalization. The goal is a dataset that is comparable across platforms — not four separate piles of screenshots.

---

## Contents

- Universal Rules
- Douyin (抖音)
- Xiaohongshu (小红书)
- X
- TikTok
- Cross-Platform Normalization
- Account Scoring Worksheet
- Data Collection Schema
- Verification Checklist

---

## Universal Rules

1. **Search suggestions first.** The autocomplete list is the platform telling you what people actually type. Record every suggestion for the core keyword before running deeper queries.
2. **Use a fixed time window.** Default to the last 90 days. Note the window in every output.
3. **Separate discovery from measurement.** Find candidates with search; verify metrics on the creator profile or post detail.
4. **One query, one raw file.** Name files by platform, date, and query slug.
5. **Record what you cannot see.** A missing follower count is "N/A", never an estimate presented as fact.
6. **Do not mix absolute and relative metrics.** Rank outliers by multiple vs. the creator's own baseline; use absolute floors only as a gate.

---

## Douyin (抖音)

### Search surfaces

| Surface | What it is good for |
|---------|---------------------|
| Keyword search | Broad topic and long-tail demand |
| Hashtag/topic page | Format and trend clusters |
| Creator search | Finding accounts directly by name or niche |
| Sound/music page | Trend-driven formats and remix patterns |
| Hot list / 热点榜 | Current demand spikes (use RedFox hotspot API or the app) |
| Search suggestion / 下拉词 | Exact audience phrasing |

### In-app filters

- **Sort**: 综合 (relevance), 最新 (newest), 最多点赞 (most liked)
- **Publish time**: 不限 / 一天内 / 一周内 / 半年内
- **Duration**: 不限 / 1 分钟以内 / 1–5 分钟 / 5 分钟以上

Suggested defaults for benchmarking: **最多点赞 + 一周内 or 半年内 + 1 分钟以内**, then repeat with **最新** to catch rising formats.

### Query patterns

```
核心词
核心词 + 人群        (新手 / 宝妈 / 租房 / 大学生)
核心词 + 场景        (搬家 / 通勤 / 睡前 / 周末)
核心词 + 问题        (踩坑 / 翻车 / 后悔 / 智商税)
核心词 + 结果        (一周 / 100元 / 不用断舍离)
核心词 + 疑问        (怎么 / 为什么 / 值不值)
```

### What to collect

- Video URL (`opusUrl`), author, author ID, publish time
- Likes, comments, shares, saves/collects
- Duration, video type (video / image set / livestream clip)
- Hashtags, cover image, first line of caption
- Author follower count (`authorFansCount`, returned inline by `douyin-search`)

### Watch out for

- Like counts are public; **play counts are not consistently exposed** in search results. Do not invent a completion rate.
- Image-set posts (`videoType = 68`) behave differently from videos; keep them in a separate bucket.
- Duplicates appear across queries. Deduplicate by `videoId`.

---

## Xiaohongshu (小红书)

### Search surfaces

| Surface | What it is good for |
|---------|---------------------|
| Keyword search | Core demand and long-tail phrases |
| Related searches / 相关搜索 | Adjacent intents the audience also has |
| Hashtag/topic page | Community and format clusters |
| Note comments | Objections, questions, vocabulary |
| Creator search | Direct account discovery |

### In-app filters

- **Sort**: 综合 / 最新 / 最热
- **Type**: 不限 / 视频 / 图文
- **Time**: 不限 / 一天内 / 一周内 / 半年内
- **Location** (when relevant): city-level demand

Suggested defaults: **最热 + 半年内**, then **最新 + 一周内** for rising formats, then **图文 vs 视频** separately.

### Query patterns

Xiaohongshu rewards natural, specific language:

```
核心词 + 人群身份
核心词 + 价格/预算
核心词 + 场景 + 痛点
核心词 + 避雷 / 踩坑 / 真实测评
核心词 + 平价 / 学生党 / 租房
核心词 + 前后对比
```

### "低粉爆款" search (low-follower viral)

This is the highest-value query type on Xiaohongshu:

1. Search a keyword with **最热** sorting.
2. Filter to notes with strong engagement.
3. Keep only notes whose `authorFans` is under ~10k — the field is in the search results, so no profile visit is required.
4. Record the note's engagement and the author's baseline.

A note with 2,000 likes from a 3,000-follower account is a far better template than 20,000 likes from a 500k account.

### What to collect

- Note URL (`shareInfoLink`), title, description, cover
- Author nickname and user ID
- Publish time, note type
- Likes, comments, saves/collects, shares, `interactiveCount`
- Hashtags (`topicsName`), first line/title
- Author follower count (`authorFans`, returned inline by `xiaohongshu-search`)

---

## X

### Advanced search operators

| Operator | Meaning | Example |
|----------|---------|---------|
| `"phrase"` | Exact phrase | `"AI agent"` |
| `OR` | Either term | `agent OR workflow` |
| `-term` | Exclude | `agent -crypto` |
| `from:handle` | Posts by account | `from:danshipper` |
| `to:handle` | Replies to account | `to:naval` |
| `since:` / `until:` | Date range | `since:2026-07-01 until:2026-10-31` |
| `min_faves:N` | Minimum likes | `min_faves:500` |
| `min_retweets:N` | Minimum reposts | `min_retweets:100` |
| `filter:links` | Only posts with links | `filter:links` |
| `filter:media` | Only posts with media | `filter:media` |
| `lang:en` | Language | `lang:en` |
| `#tag` | Hashtag | `#buildinpublic` |

### Tabs and surfaces

- **Top** for proven reach; **Latest** for rising signals
- **Lists** for curated sets of accounts in a niche
- **Replies** to top posts — this is where objections and demand language live
- **Who to follow** and "similar accounts" for discovery

### Query patterns

```
"核心短语" min_faves:300
"核心短语" filter:media min_faves:100
from:known_creator "topic"
"topic" since:2026-07-01 -crypto
"topic" lang:en min_retweets:50
```

### What to collect

- Post URL, author handle, author followers
- Publish time, format (text / image / video / link)
- Likes, reposts, replies, bookmarks (if visible)
- Hook (first line), thread length, media type
- Quoted/replied-to post if the format depends on it

### Watch out for

- X API access is restricted and often paid. If RedFox's Twitter/X package is not installed, use the web UI manually and label the source.
- Bookmarks are not always publicly visible; do not report them as if they were.
- Reposts inflate reach; separate original posts from reposts when computing an account's baseline.

---

## TikTok

### Search surfaces

| Surface | What it is good for |
|---------|---------------------|
| Keyword search | Broad and long-tail demand |
| Hashtag pages | Challenge and format clusters |
| Sound pages | Trend audio and remix behavior |
| Creator search | Direct account discovery |
| TikTok Creative Center | Free trend, hashtag, song, creator, and top-ad data |
| "Others also watched" | Adjacency mapping |

### In-app filters

- **Sort**: relevance / most liked
- **Date posted**: last 24 hours / 7 days / 30 days / 3 months / 6 months
- **Duration**: under 1 min / 1–5 min / 5+ min

Suggested defaults: **most liked + last 3 months**, then **relevance + last 7 days**.

### Creative Center queries

Use the free Creative Center for:

- **Top Ads** — what advertisers are scaling right now
- **Trends → Hashtags** — rising hashtags with post and view counts
- **Trends → Songs** — sounds with usage growth
- **Trends → Creators** — fast-growing creators by region and category
- **Keyword Insights** — related keywords and audience interest

### Query patterns

```
core keyword
core keyword + beginner / no equipment / 15 minute
core keyword + "what I eat" / "day in the life" / "how I"
hashtag + niche
sound name + niche
```

### What to collect

- Video URL, author handle, author followers
- Publish time, duration, format
- Views, likes, comments, shares, saves
- Hook (first 1–3 seconds), on-screen text, sound
- Hashtags and caption

### Watch out for

- TikTok exposes views, which makes engagement-rate normalization easier than on Douyin/Xiaohongshu. Use views as the denominator when followers are unavailable.
- Sounds travel across niches; a video can be an outlier because of the sound, not the topic. Record the sound.
- Regional differences are large. Pin the region and language.

---

## Cross-Platform Normalization

### Common schema

| Field | Type | Notes |
|-------|------|-------|
| `platform` | string | douyin / xiaohongshu / x / tiktok |
| `content_id` | string | Deduplicate key |
| `url` | string | Canonical post URL |
| `author_name` | string | Display name |
| `author_id` | string | Platform ID |
| `author_followers` | number | Fetch from profile |
| `published_at` | date | ISO date |
| `format` | string | video / image-text / text-thread / link |
| `duration_sec` | number | Video only |
| `title_or_hook` | string | First line / title / first 3 seconds |
| `likes` | number | |
| `comments` | number | |
| `shares` | number | |
| `saves` | number | Collects/bookmarks; N/A if not exposed |
| `views` | number | TikTok usually; others often N/A |
| `hashtags` | string[] | |
| `observed_at` | date | When you pulled it |

### Derived metrics

```
engagement        = likes + comments + shares + saves
engagement_rate   = engagement / author_followers
save_rate         = saves / likes
share_rate        = shares / likes
comment_rate      = comments / likes
outlier_multiple  = engagement / author_median_engagement
```

Rules:

- If `author_followers` is missing, compute engagement rate against views (TikTok) or mark `N/A`.
- Compute `author_median_engagement` from the creator's last 30–90 days, not from the single post.
- Use **save_rate** as the utility proxy, **share_rate** as the social-currency proxy, and **comment_rate** as the debate/identity proxy.
- Do not compare raw likes across platforms. Compare rates and outlier multiples.

### Platform-specific caveats

| Platform | Views | Saves | Follower visibility | Notes |
|----------|-------|-------|---------------------|-------|
| Douyin | Often unavailable in search | Collects exposed | In search results (`authorFansCount`) | Image sets are a separate format |
| Xiaohongshu | Not exposed | Collects exposed | In search results (`authorFans`) | Saves are a strong quality signal |
| X | Impressions often unavailable | Bookmarks not always public | Public | Reposts inflate reach |
| TikTok | Usually exposed | Saves exposed | Public | Sound can drive the outlier |

---

## Account Scoring Worksheet

Fill one row per candidate. Score 0–5 per dimension.

| Dimension | 0–5 anchor |
|-----------|-----------|
| Audience overlap | 5 = same person, problem, and stage; 0 = unrelated |
| Engagement vs. baseline | 5 = consistently 2× niche median; 0 = below median |
| Growth velocity | 5 = fast growth relative to account age; 0 = flat or declining |
| Format repeatability | 5 = you can produce it this week; 0 = needs a team/budget you lack |
| Monetization path | 5 = a route you would actually use; 0 = no path or unethical |
| Content freshness | 5 = posting within 7 days; 0 = dormant |

```
score = overlap*5 + engagement*4 + velocity*3 + repeatability*4 + monetization*2 + freshness*2
```

Because each dimension is 0–5, the weighted sum is already on a 0–100 scale (max 100). Re-check the arithmetic: `(5*5)+(5*4)+(5*3)+(5*4)+(5*2)+(5*2) = 25+20+15+20+10+10 = 100`.

---

## Data Collection Schema

Store raw responses as JSON, then flatten into CSV with the common schema. Example query manifest:

```json
{
  "platform": "xiaohongshu",
  "query": "出租屋收纳 不打孔",
  "sort": "最热",
  "window": "2026-07-01..2026-10-31",
  "collected_at": "2026-10-31",
  "source": "redfox",
  "tool": "xiaohongshu-search",
  "params": { "pageSize": 50, "startDate": "2026-07-01", "endDate": "2026-10-31" },
  "count": 40
}
```

Keep the manifest next to the raw file. It makes re-runs and audits possible.

---

## Verification Checklist

- [ ] Platform, query, sort, and time window recorded
- [ ] Duplicates removed by content ID
- [ ] Author follower count captured for every shortlisted account (search results or profile)
- [ ] Creator baseline computed from 30–90 days of posts
- [ ] Outliers defined by multiple vs. baseline, not absolute likes
- [ ] Low-follower viral hits included
- [ ] Missing metrics labeled N/A, not estimated
- [ ] Observation date on every row
- [ ] Public data only; no gated or private sources
