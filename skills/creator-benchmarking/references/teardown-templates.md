# Teardown and Playbook Templates

Copy these into `creator-benchmark/`. Every template keeps observed facts separate from interpretation so the user can audit the reasoning later.

---

## Contents

- Benchmark Account Shortlist
- Account Scorecard
- Viral Content Dataset (CSV)
- Teardown Card
- Comment Mining Sheet
- Pattern Library
- Differentiation Matrix
- Topic Bank (CSV)
- 30-Day Calendar
- Weekly Tracking Sheet
- Playbook Skeleton

---

## Benchmark Account Shortlist

`accounts.md`

```markdown
# Benchmark Accounts — [niche], [platform]
Observed: 2026-10-31 | Window: 2026-08-01..2026-10-31 | Source: RedFox / manual

| # | Tier | Handle | URL | Followers | Median engagement | Niche | Score | 可借鉴点 | 不可借鉴点 |
|---|------|--------|-----|-----------|-------------------|-------|-------|----------|------------|
| 1 | 腰部 | @example | ... | 42k | 1.8k | 出租屋收纳 | 86 | 15 秒前后对比、固定封面模板 | 个人房东资源，无法复制 |
| 2 | 新锐 | @rising | ... | 8k | 900 | 平价收纳 | 81 | 低价清单、评论区选题 | 出镜表现力强，需练习 |
```

Rules:

- Tier is one of 头部标杆 / 腰部可复制 / 新锐黑马 / 跨平台迁移.
- Median engagement is from the creator's last 30–90 days, not the single best post.
- 可借鉴点 and 不可借鉴点 are mandatory. An account with no "do not borrow" note is usually being copied too uncritically.
- Sort by score descending within each tier.

---

## Account Scorecard

One block per shortlisted account.

```markdown
## @handle — [tier]
- Platform:
- URL:
- Followers:            (observed: date)
- Median engagement:    (last 30–90 days)
- Posting cadence:
- Primary formats:
- Audience:
- Monetization path:

| Dimension | Score 0–5 | Evidence |
|-----------|-----------|----------|
| Audience overlap | | |
| Engagement vs. baseline | | |
| Growth velocity | | |
| Format repeatability | | |
| Monetization path | | |
| Content freshness | | |
| **Weighted total** | **/100** | |

可借鉴点:
- 

不可借鉴点:
- 

First three posts to study:
1. [URL] — why:
2. [URL] — why:
3. [URL] — why:
```

---

## Viral Content Dataset (CSV)

`viral-content.csv`

```csv
platform,content_id,url,author_name,author_id,author_followers,published_at,format,duration_sec,title_or_hook,likes,comments,shares,saves,views,hashtags,observed_at,engagement_rate,save_rate,share_rate,comment_rate,outlier_multiple,source,notes
xiaohongshu,abc123,https://...,收纳小林,uid1,3200,2026-09-14,image-text,,出租屋不打孔收纳,2100,180,95,1600,,出租屋收纳;小户型,2026-10-31,1.24,0.76,0.045,0.086,4.2,redfox,xiaohongshu-search
douyin,def456,https://...,家居阿哲,uid2,51000,2026-10-02,video,38,我把收纳盒全扔了,88000,3200,9100,12000,540000,收纳;反常识,2026-10-31,0.57,0.14,0.10,0.036,3.6,redfox,douyin-search
```

Notes:

- Leave unavailable values blank, not zero. Zero is a measurement; blank is a missing value.
- `outlier_multiple` is relative to the author's median, not to the niche.
- `source` records how the row was obtained (`redfox`, `manual`, `creative-center`, `web-search`).

---

## Teardown Card

`teardowns/<platform>-<author>-<content_id>.md`

```markdown
# Teardown — [author] / [content ID]

- Platform:
- URL:
- Published:            (observed: date)
- Format / duration:
- Followers:
- Engagement:           likes / comments / shares / saves
- Engagement rate:
- Outlier multiple:     (vs. author median)
- Source & confidence:  (observed / inferred)

## 1. Hook
- Visual:
- Verbal:
- Text overlay / first line:
- Why it stops the scroll:

## 2. Structure
| Time / position | Beat | What happens |
|-----------------|------|--------------|
| 0–3s | Hook | |
| 3–10s | Setup | |
| ... | ... | ... |

- Narrative type: list / story / tutorial / comparison / loop / reaction
- Length and pacing:
- Open loop or promised payoff:

## 3. Value Mechanism
- Primary: utility / emotion / identity / social currency / controversy
- What the viewer gets:
- What the viewer feels:
- What makes it saveable:
- What makes it shareable:

## 4. Production
- Shots / b-roll:
- Captions / on-screen text:
- Pace / cuts:
- Sound / music:
- Cover / title:
- Editing tricks:
- Production cost estimate:

## 5. CTA
- Comment bait:
- Save bait:
- Follow reason:
- Profile / bio / link:
- DM keyword:

## 6. Comment Mining
- Top repeated questions:
- Objections:
- Audience vocabulary:
- Follow-up requests:

## Pattern Extraction
- Formula: [hook type] + [structure] + [value mechanism]
- Why it works:
- Reusable elements:
- Not reusable (must be replaced):
- Your version (one sentence, from your own experience):
```

---

## Comment Mining Sheet

`teardowns/comments-<content_id>.md`

```markdown
# Comment Mining — [content ID]

| Rank | Comment | Likes | Type | Content idea it suggests |
|------|---------|-------|------|--------------------------|
| 1 | 求链接 | 320 | request | Product list / budget version |
| 2 | 我家是租的，房东不让打孔 | 210 | objection | No-drill renter version |
| 3 | 为什么我一收纳就乱 | 150 | question | Maintenance system, not storage |
```

Types: request, objection, question, agreement, personal story, correction.

Look for:

- The same question appearing three or more times → a topic with proven demand
- Objections that reveal a segment the creator is not serving
- Vocabulary the audience uses that you should reuse verbatim
- Follow-up requests that the original creator has not answered

---

## Pattern Library

`playbook.md` section.

```markdown
## Hook Patterns

| ID | Pattern | Example | Why it works | Best format | Source |
|----|---------|---------|--------------|-------------|--------|
| H1 | 反常识否定 | "收纳盒越多越乱" | Contrarian + specific object | 15s video | 小红书 @x |
| H2 | 结果前置 | 先看改造后房间 | Instant proof | Before/after | 抖音 @y |

## Structure Patterns

| ID | Structure | Beat sheet | Best for | Source |
|----|-----------|------------|----------|--------|
| S1 | 问题—试错—反转 | 0-3s 痛点, 3-15s 错误做法, 15-25s 反转 | Contrarian tutorials | ... |

## Title / Cover Patterns

| ID | Pattern | Example | Platform | Source |
|----|---------|---------|----------|--------|
| T1 | 数字 + 人群 + 结果 | "租房党 10 平米收纳，照抄就行" | 小红书 | ... |

## CTA Patterns

| ID | Pattern | Example | Goal | Source |
|----|---------|---------|------|--------|
| C1 | 评论领清单 | "评论区扣 1，发你清单" | Comments + DM | ... |
```

Keep the library small and usable: 5–10 patterns per category. Add one new pattern per week, retire patterns that stop working.

---

## Differentiation Matrix

```markdown
| Dimension | Benchmark norm | Imitate | Differ | Your edge |
|-----------|----------------|---------|--------|-----------|
| Hook style | 反常识否定 | Yes — same curiosity mechanic | Use first-hand data instead of a claim | I tracked 30 days |
| Format | 15s before/after | Yes — same length | Show cost breakdown | Real receipts |
| Proof | Screenshots | Yes | Add failure cases | I show what broke |
| Point of view | "Everything must be minimal" | No — different thesis | "Renters need movable systems" | I rent and move often |
| Monetization | Brand deals | No | Affiliate + checklist | Smaller, more trusted |
```

Rules:

- Imitate the **mechanic** (curiosity, proof, pacing), not the wording.
- Differ on at least one axis the audience cares about. Otherwise you are a worse version of the benchmark.
- Your edge must be something the user can actually demonstrate this month.

---

## Topic Bank (CSV)

`topic-bank.csv`

```csv
priority,pillar,angle,target_audience,platform,format,hook_pattern,structure_pattern,evidence_url,demand_signal,fit_1_5,feasibility_1_5,score,status,notes
1,出租屋收纳,房东不让打孔怎么收纳,租房党,小红书,图文,H1,S1,https://...,评论区 3 次同问,5,4,90,ready,
2,平价收纳,100 元改造 10 平米,学生党,小红书,视频,H2,S2,https://...,低粉爆款 4.2x,4,5,88,ready,
3,收纳习惯,为什么收纳一周就乱,上班族,抖音,视频,H1,S1,https://...,高评论率,4,4,84,scripting,
```

Scoring:

```
score = demand_signal + fit*10 + feasibility*10
```

Where `demand_signal` is 0–30 based on observed evidence (suggestion terms, repeated comments, low-follower outliers). Keep the evidence URL for every row.

Status values: `idea`, `selected`, `scripting`, `filmed`, `published`, `retired`.

---

## 30-Day Calendar

```markdown
| Week | Day | Platform | Format | Topic | Hook pattern | Source evidence | Status |
|------|-----|----------|--------|-------|--------------|-----------------|--------|
| 1 | Mon | 小红书 | 图文 | 出租屋不打孔收纳 | H1 | teardown #3 | planned |
| 1 | Wed | 抖音 | 15s video | 我把收纳盒全扔了 | H2 | teardown #7 | planned |
```

Cadence rules:

- Match the user's real capacity, not the benchmark's output.
- Alternate proven patterns with one experiment per week.
- Leave one slot per week for comment-driven topics.
- Do not schedule more than the user can film and edit without dropping quality.

---

## Weekly Tracking Sheet

```markdown
| Date | Platform | Topic | Hook pattern | Views | Likes | Comments | Saves | Shares | Engagement rate | Benchmark median | Gap | Diagnosis |
|------|----------|-------|--------------|-------|-------|----------|-------|--------|-----------------|------------------|-----|-----------|
```

Diagnosis by layer:

- Strong views, weak engagement → the promise was misleading or the payoff was weak
- Strong engagement, low views → the hook/cover failed
- High saves, low comments → useful but not discussion-worthy
- High comments, low saves → debate, but low utility
- High shares, low follows → the content is shareable but the account has no reason to follow

---

## Playbook Skeleton

`playbook.md`

```markdown
# Content Playbook — [niche]

## 0. Content Hypothesis
[Audience] struggles with [problem] in [situation]. They currently use [alternative]. We win with [angle] because [proof]. Disqualifiers: [...]

## 1. Snapshot
- Platforms:
- Window:
- Sample size:
- Data sources:
- Confidence notes:

## 2. Benchmark Accounts
[link or inline table]

## 3. What Is Working
- Top 5 hooks:
- Top 5 structures:
- Top 5 value mechanisms:
- Top 5 formats:
- Top 5 CTAs:

## 4. What Is Saturated
- Overused angles:
- Overused hooks:
- Audiences everyone ignores:

## 5. Differentiation
[matrix]

## 6. Reusable Templates
[hook / structure / title / CTA library]

## 7. Topic Bank
[top 10 inline; full CSV linked]

## 8. Calendar
[optional]

## 9. Measurement Plan
- Own metrics to track:
- Comparison baseline:
- Weekly review day:
- 90-day hypothesis review:

## 10. Limits
- What the sample cannot prove:
- Metrics that were unavailable:
- Assumptions to validate with real posting:
```

---

## Final Check

- [ ] Every account row has borrow / do-not-borrow notes
- [ ] Every outlier is defined against the creator's own baseline
- [ ] Every topic cites its evidence
- [ ] At least one differentiation axis is defensible
- [ ] No script, footage, music, or personal story was copied
- [ ] Missing data is marked N/A, not invented
- [ ] The calendar fits the user's actual capacity
