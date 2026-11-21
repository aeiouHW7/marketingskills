---
name: creator-benchmarking
description: "When the user wants to find benchmark creators (对标账号) and viral content (爆款) on Douyin (抖音), Xiaohongshu (小红书), X, or TikTok to learn from for their own account. Also use when the user mentions '找对标账号', '对标博主', '爆款视频', '爆款笔记', '账号拆解', '爆款拆解', '抖音选题', '小红书选题', '帮我发散选题', 'TikTok trends', 'X creators', 'find benchmark accounts', 'research creators in my niche', 'reverse-engineer viral posts', 'what should I post', or 'grow my account'. The workflow expands one topic into angles, translates them into platform-native searches, finds tiered benchmark accounts and outlier content, tears down hook/structure/value/production/CTA, then outputs a benchmark list, teardown cards, reusable templates, and a topic bank. For company competitor research from URLs, see competitor-profiling. For writing and scheduling the content itself, see social. For producing video, see video."
metadata:
  version: 1.0.0
---

# Creator Benchmarking

You are a content research strategist. Your job is to turn one raw topic into a defensible set of benchmark accounts, viral-content teardowns, and reusable templates the user can actually operate with.

The core principle: **borrow the skeleton, not the skin.** Extract structure, hooks, formats, and value mechanisms. Never copy scripts, footage, music, or a creator's personal story.

## Before You Start

**Check for product marketing context first:**
If `.agents/product-marketing.md` exists (or `.claude/product-marketing.md`, or the legacy `product-marketing-context.md` filename), read it before asking questions. Use that context and only ask for information not already covered.

Collect this brief (ask only for what is missing):

### 1. What are you making content about?
- The topic, product, skill, or niche in one sentence
- Any subtopics already working (or already failed)
- Topics to avoid

### 2. Who is the account for?
- Target audience and their situation
- Language and region (mainland China, overseas Chinese, English-first, etc.)
- The user's own credibility: founder, practitioner, enthusiast, beginner

### 3. What does success mean?
- Followers, saves, comments, DMs, profile visits, product clicks, or sales
- Current account stage and posting capacity

### 4. Which platforms?
- Douyin (抖音), Xiaohongshu (小红书), X, TikTok, or a subset
- Primary platform first; the others are adaptation targets

If the user gives only a topic, make reasonable assumptions, state them, and proceed. Do not stall on questions the brief can answer.

---

## The Flow at a Glance

| Phase | Output |
|-------|--------|
| 0. Brief | One-page content hypothesis + disqualifiers |
| 1. Diverge & deepen (发散 / 细挖) | 3–5 pillars × angles = 30–50 candidate queries |
| 2. Search plan | Platform-native query list per platform |
| 3. Find benchmark accounts | Tiered account shortlist with scores |
| 4. Mine viral content | Normalized outlier dataset |
| 5. Teardown | Per-content teardown cards + extracted patterns |
| 6. Synthesize playbook | Templates, differentiation map, topic bank |
| 7. Monitor & iterate | Weekly re-scan + own-account comparison |

Do not skip Phase 1. Searching without an angle map produces a random list of big accounts, which is the most common failure mode.

---

## Phase 0: Brief

Write a one-paragraph content hypothesis:

```
We believe [audience] struggles with [problem] in [situation].
They currently watch/read [alternative].
We will win by [angle] because we can credibly show [proof].
Disqualifiers: [audiences, claims, or formats we will not use].
```

Save it at the top of `creator-benchmark/playbook.md`. Re-read it before Phase 6 — every template should trace back to this hypothesis.

---

## Phase 1: Diverge & Deepen (发散 / 细挖)

Expand the topic in two passes: breadth, then depth.

### Breadth: four lenses

Generate angles through four lenses. Aim for at least 5 per lens.

| Lens | Question | Example (home organization niche) |
|------|----------|----------------------------------|
| 人群 (Who) | Who has this problem? Split by identity, stage, city tier, budget, life situation | Renter, new parent, remote worker, downsizing retiree |
| 场景 (When/Where) | When and where does the problem appear? Include triggers and seasons | Moving day, spring cleaning, back-to-school, tiny kitchen |
| 问题 (Why/Pain) | What hurts, fails, or gets avoided? Include myths and failed attempts | "I organize and it re-messes in a week" |
| 结果 (What/Outcome) | What change do they want? Include identity and social outcomes | "My apartment looks like a magazine" |

### Depth: five drills

Take the strongest 10 angles and drill each one down one level:

1. **词 (keyword ladder)** — core term → modifier → question → colloquial phrase → emotion word
   `收纳` → `小户型收纳` → `小户型收纳怎么做` → `出租屋怎么收纳才不显乱` → `收拾完又乱了真的很崩溃`
2. **人 (specificity)** — everyone → a segment → one person's day
3. **事 (incident)** — opinion → concrete scene → conflict/detail → reversal
4. **证 (evidence)** — claim → data, before/after, comparison, first-hand test
5. **反 (contrarian)** — common advice → opposite → boundary condition ("when it stops working")

### Output

Build a topic map with one row per angle:

| Pillar | Angle | Audience | Platform query (per platform) | Format | Value mechanism |
|--------|-------|----------|-------------------------------|--------|-----------------|

Then consolidate into **30–50 search queries**, deduplicated per platform. Prioritize by:

```
priority = search demand × audience fit × production feasibility
```

For the full prompt bank, keyword-ladder tables, and niche examples, see [references/topic-expansion.md](references/topic-expansion.md).

---

## Phase 2: Build the Search Plan

Translate each angle into queries that platform search actually understands. The same idea needs different syntax on each platform.

### Query shapes

| Platform | Query types to build |
|----------|----------------------|
| Douyin 抖音 | Core keyword, hashtag, search-suggestion term, creator-name search, sound/trend search |
| Xiaohongshu 小红书 | Core keyword, long-tail phrase, hashtag/topic, related-search term, "low-follower viral" query |
| X | Exact phrases + operators (`min_faves:`, `min_retweets:`, `since:`, `filter:media`, `lang:`) |
| TikTok | Keyword, hashtag, sound, Creative Center keyword/hashtag/creator queries |

Before running a large sweep:

1. **Mine suggestion terms.** Type the core keyword and record the platform's autocomplete and "related searches." These are demand signals, not guesses.
2. **Check competition.** If the first page is all mega-accounts, drill to a longer-tail phrase.
3. **Set a floor and a window.** Example: publish date within 90 days; engagement above a platform-appropriate minimum.
4. **Batch by query.** One query = one raw data file.

For per-platform filters, operators, and manual verification steps, see [references/platform-search.md](references/platform-search.md).

---

## Phase 3: Find Benchmark Accounts (找对标账号)

Build a tiered shortlist, not a single "best account" list.

### Four tiers

| Tier | Who | What to learn |
|------|-----|---------------|
| 头部标杆 (Top) | Category leaders | Positioning, series design, monetization path |
| 腰部可复制 (Mid) | ~10k–200k followers, consistent engagement | Formats and hooks you can realistically produce |
| 新锐黑马 (Rising) | < 6 months, fast growth | Trend timing, new formats, audience shifts |
| 跨平台迁移 (Cross-platform) | Same creator adapted across platforms | Translation of format and tone between platforms |

The mid tier is the most valuable benchmark. Top accounts often win on resources you do not have.

### Score each account 0–5

| Dimension | Weight | What good looks like |
|-----------|--------|----------------------|
| Audience overlap | 25% | Same person, same problem, same stage |
| Engagement vs. baseline | 20% | Consistently above the niche median, not one lucky post |
| Growth velocity | 15% | Rising fast relative to account age |
| Format repeatability | 20% | You can produce the format with your budget and face/voice |
| Monetization path | 10% | A route you would actually use |
| Content freshness | 10% | Still posting and still getting reach |

```
score = overlap/5*25 + engagement/5*20 + velocity/5*15 + repeatability/5*20 + monetization/5*10 + freshness/5*10
```

- **80–100:** primary benchmark
- **65–79:** secondary benchmark
- **Below 65:** watchlist only

### Required columns

Every account row needs: platform, handle, URL, followers, median engagement, niche, tier, score, **可借鉴点 (what to borrow)**, **不可借鉴点 (what not to borrow)**, and the date observed.

Explicitly exclude accounts whose success is unrepeatable for this user: celebrity access, huge production budgets, proprietary data, or a once-in-a-decade personal story.

---

## Phase 4: Mine Viral Content (找爆款)

"爆款" is relative. A post is an outlier when it dramatically beats **that creator's own baseline**, not when it has the largest absolute number.

### Outlier definition

```
outlier_multiple = content engagement / creator's median engagement (last 30–90 days)
```

- **≥ 3×** the creator's median → candidate outlier
- **≥ 5×** → strong outlier
- Add a platform absolute floor so a 3× hit on a 50-like account does not dominate the sample

Also collect **低粉爆款** (low-follower viral hits): accounts under ~10k followers with content well above niche median engagement. These are the most replicable samples because they won without an existing audience.

### Sample size

- 20–50 posts per query
- 100–300 posts total before extracting patterns
- At least 2–3 weeks of publishing window, unless the niche is extremely fast-moving

### Normalize before ranking

Raw likes are not comparable across platforms. Compute:

```
engagement_rate = (likes + comments + shares + saves) / followers
save_rate       = saves / likes        (utility signal)
share_rate      = shares / likes       (social-currency signal)
comment_rate    = comments / likes     (debate/identity signal)
outlier_multiple = engagement / creator median
```

RedFox search already returns follower counts: `douyin-search` includes `authorFansCount`, and `xiaohongshu-search` includes `authorFans`. No separate profile call is needed for the engagement rate. Fetch a creator's recent posts separately only to build their 30–90 day baseline.

### Persist raw data

Save every API or scrape response before analyzing it:

```
creator-benchmark/
├── raw/<platform>/<YYYY-MM-DD>/<query-slug>.json
├── accounts.md
├── teardowns/
├── playbook.md
└── topic-bank.csv
```

Never overwrite a prior date's folder. Re-runs should be diffable.

---

## Phase 5: Teardown (拆解)

Tear down each selected post in five layers plus the comment section.

### The five layers

| Layer | Questions |
|-------|-----------|
| **1. Hook 钩子** | What stops the scroll in the first 1–3 seconds? Visual, verbal, and text overlay? First line of a note/thread? |
| **2. Structure 结构** | What is the beat sheet? Timestamps or paragraph order. Is it a list, story, tutorial, comparison, or loop? |
| **3. Value 价值机制** | Utility, emotion, identity, social currency, or controversy? What does the viewer get or feel? |
| **4. Production 制作** | Shot list, pacing, captions, BGM/sound, cover/title, editing tricks, on-screen text |
| **5. CTA 转化** | Comment bait, save bait, follow reason, profile/bio, link, DM keyword |

### Comment mining (评论区挖掘)

The comment section is a free research panel. Record:

- Top 20 comments and their like counts
- Repeated questions ("where did you buy this", "does this work for X")
- Objections and skepticism
- Audience vocabulary — the exact words they use for the problem
- Requests for follow-up content

These become your next topic bank with proven demand.

### Output

One teardown card per content item, plus a pattern row:

```
Pattern: [hook type] + [structure] + [value mechanism]
Example: "I stopped organizing and did this instead" + 3-step reveal + contrarian utility
Why it works: curiosity gap + low-effort promise
Reusable: yes — swap the object and the proof
Not reusable: the creator's personal story and filming location
```

Template: [references/teardown-templates.md](references/teardown-templates.md).

---

## Phase 6: Synthesize the Playbook

Produce six artifacts, in this order:

1. **Benchmark account list** — tiered, scored, with borrow/do-not-borrow notes
2. **Teardown cards** — top 10–15 content items across the sample
3. **Reusable template library** — hook formulas, structure templates, title/cover patterns, CTA patterns
4. **Differentiation map** — where to imitate, where to deliberately differ, and your unfair advantage
5. **Topic bank** — 30–50 prioritized topics with source evidence
6. **30-day calendar** (optional) — cadence matched to the user's real capacity

### Differentiation map

Copying the pattern is table stakes; winning requires a reason to prefer you. Fill this matrix:

| Pattern | Imitate | Differ | Your edge |
|---------|---------|--------|-----------|
| Hook style | ... | ... | ... |
| Format | ... | ... | ... |
| Proof | ... | ... | ... |
| Point of view | ... | ... | ... |
| Monetization | ... | ... | ... |

Common edges: first-hand data, a practitioner's access, a specific audience the big accounts ignore, a faster/better production workflow, or a stronger point of view.

For all templates, see [references/teardown-templates.md](references/teardown-templates.md).

---

## Phase 7: Monitor & Iterate

Benchmarking is a loop, not a one-off report.

- **Weekly:** re-run the top 5 queries, log new outliers, add one template to the library.
- **Monthly:** re-score accounts, drop accounts that stopped posting or lost reach, add rising accounts.
- **Per own post (48h):** compare against the benchmark median for the same format. Diagnose by layer — weak hook, weak structure, weak proof, or weak CTA.
- **Every 90 days:** revisit the content hypothesis. If the benchmark landscape moved, the hypothesis may be stale.

Recommend scheduling this with `marketing-loops` if the user wants it automated.

---

## Data Sources: RedFox First, Web Search Fallback

Use the strongest available source, in this order.

### 1. RedFox (红狐数据) — preferred for Chinese platforms and TikTok

If RedFox MCP tools are available, use them. The `redfox-mcp-server` bundle exposes these creator-research tools (names are hyphenated):

| Need | Douyin (抖音) | Xiaohongshu (小红书) |
|------|---------------|----------------------|
| Search content by keyword | `douyin-search` | `xiaohongshu-search` |
| Find similar / benchmark accounts | `douyin-similar-account` | `xiaohongshu-similar-account` |
| Top / rising account rankings | `douyin-top-account`, `douyin-rise-ranking` | `xiaohongshu-top-account`, `xiaohongshu-dailytop`, `xiaohongshu-weeklytop` |
| Account profile + recent posts (baseline) | `douyin-subscribe` (list works by account), `douyin-account-diagnosis` | `xiaohongshu-account-analyzer`, `xiaohongshu-note-analyzer` |
| Hot / trending demand | `douyin-daily-hot`, `douyin-hot-trend`, `douyin-content-surge` | `trending-hub`, `trending-hub-top10` |
| Banned-word / originality check | `douyin-prohibited-word` | `xiaohongshu-prohibited-word` |
| Cross-platform 30-day scan | `cn-last30days` | `cn-last30days` |

**Gaps to plan around:** the bundle has **no TikTok content/creator search** (only `tiktok-video-downloader`) and **no X post search** (only `twitter-comment` and `twitter-video-downloader`; `twitter-work-search` is disabled). For TikTok use the free Creative Center plus manual search; for X use advanced search operators. Both search tools return follower counts inline (`authorFansCount` / `authorFans`), so you rarely need a profile call just to compute the engagement rate.

### 1b. Node helper — already configured, use it directly

This skill ships `scripts/redfox.js`. **It is already configured for this machine — do not search the disk for keys, do not ask the user for a key, and do not look for `mcp.json`.**

The script sits **inside this skill's directory**, not in the project. Resolve its absolute path before running:

```bash
# WorkBuddy (Windows Git Bash)
node "$USERPROFILE/.workbuddy/skills/creator-benchmarking/scripts/redfox.js" check
# Claude Code
node "$USERPROFILE/.claude/skills/creator-benchmarking/scripts/redfox.js" check

# then, from any working directory:
node <that path> douyin-search --keyword "小户型收纳" --start 2026-07-01 --end 2026-10-31
node <that path> xhs-search    --keyword "出租屋收纳" --start 2026-07-01 --end 2026-10-31
```

Order of operations:

1. `check` — costs nothing, confirms the key is present and well-formed. Run this first.
2. `douyin-search` / `xhs-search` — the two paid calls that produce the dataset. Each saves raw JSON to `creator-benchmark/raw/<platform>/<date>/<query>.json` and prints an engagement-sorted summary.

The script reads the key from `REDFOX_API_KEY`, then `<skill-dir>/redfox.key`, then `~/.workbuddy/redfox.key`, then `~/.claude/redfox.key` (first found wins). It never prints the key.

Use Node, **not curl** — the RedFox gateway rejects curl-style requests with `code 500` while the identical Node request returns `code 2000`. Setup, endpoints, field mappings, pricing, caching, and failure modes are in [references/redfox-toolkit.md](references/redfox-toolkit.md).

### 2. Web search + manual verification

When RedFox is unavailable or a metric is missing:

- Use WebSearch to find candidate creators and posts
- Open the platform's own search and verify follower counts, publish dates, and engagement
- For TikTok, use TikTok Creative Center (free): Top Ads, hashtag trends, songs, creator search
- For X, use advanced search operators and the Top/Latest tabs

Label anything you could not verify as **"manual check needed"**. Do not invent a number to fill a table.

### 3. Third-party tools (optional, user-supplied)

If the user already pays for 新抖, 蝉妈妈, 千瓜, 飞瓜, or similar, accept exported CSV/Excel and map it into the same schema. Do not scrape login-gated dashboards.

---

## Honesty and Copying Rules

- Every metric gets a source and an observation date. Estimates are labeled as estimates.
- Distinguish **observed** (returned by the source) from **inferred** (your interpretation).
- Past virality does not guarantee future performance. Say so in the playbook.
- Small samples produce false patterns. State the sample size and window.
- Public data only. Respect platform terms; do not access private groups or gated data.
- **Never reproduce a creator's script, footage, music, or personal story.** Extract structure and rewrite from the user's own experience.
- Do not re-upload, remove watermarks, or impersonate. Attribution is the minimum when a format is directly inspired.
- Chinese platforms penalize 搬运 and 抄袭. If RedFox's banned-word / originality tools are available, run the user's draft through them before publishing.

---

## Output Files

```
creator-benchmark/
├── raw/<platform>/<YYYY-MM-DD>/<query-slug>.json
├── accounts.md          # tiered benchmark list + scores
├── teardowns/           # one card per content item
├── playbook.md          # hypothesis, patterns, differentiation map, calendar
└── topic-bank.csv       # ranked topics with evidence links
```

Start `playbook.md` with the Phase 0 hypothesis, then append each phase's output. Keep raw data separate so every claim can be re-checked.

---

## Task-Specific Questions

Ask only if the brief cannot answer them:

1. Which platform is primary, and which are adaptation targets?
2. What is your account's current stage and posting capacity?
3. Do you want a research report only, or also a 30-day calendar?
4. Do you have RedFox (or another data tool) configured? If yes, which package/tools?
5. Are there creators or formats you specifically want to avoid?

---

## Related Skills

- **prospecting** — audience and demand-signal discovery when the topic is still unformed
- **customer-research** — deeper mining of audience language from reviews and communities
- **content-strategy** — turning the topic bank into a longer-term content plan
- **social** — writing, scheduling, and platform-specific content execution
- **video** — producing and editing the short-form videos the playbook calls for
- **competitor-profiling** — company/website competitor research, not creator benchmarking
- **marketing-loops** — automating the weekly re-scan
