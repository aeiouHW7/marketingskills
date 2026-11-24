# B 自律号 · GA 周简短小视频包（11/30 – 12/6 · 视频版）

> 配套：`b-account-week-1201.md`（叙事节拍/比分/人设卡的母本）+ `v1-ai-video-prompts.md` V2（场景基准照方案）。
> **本文档 = 周包每一天的视频实现版**：每天一条 12-18 秒简短小视频，书桌戏、无真人开口、AI 配音（ElevenLabs），LibTV 图生视频（基准照首帧，单次 ≤30s）。
> 人设/比分/倒计时**直接从周包母本取数**，不另起炉灶——视频版和图集版是同一故事的两种格式（视频发 TikTok/Shorts，图集版发 IG 轮播，双版本 A/B）。
> **⚠️ V-M1（2026-11-23 v6 定稿）口径，后续 V-M2~V-M5 待同步**：
> ①**Day N of 14，days left = 15 − N**（Day 1 = 14 days left；Day 14 = 1 day left；12/14 第一场期末开考 = 结算）；
> ②**比分只有一套：任务得分**（Day 1 = 20 : 0），不设让分、不做"她 40 小时 vs 我 0"这类第二套数字；
> ③**每集必须演一个当天发生的事件**，不演"我打算开始"；
> ④**人物动机一句话**：我要用她的标准赢她（所以把裁判权递给她，同时不服她）。

## 〇、先决条件（同 V2 提示词包）

1. 4 张基准照已拍好存 `app-launch/scene-assets/`（desk-overhead / desk-side / desk-phone-closeup / desk-lowangle）
2. **补拍一张**：`desk-side-morning.jpg`（同一张桌子、同一机位、拉开窗帘的清晨冷光——周二那支用。桌子物件一点不动，只换光线）
3. **拍摄制服（新增强制项）**：我=深灰连帽衫、她=米白针织开衫，两件固定不换——不露脸的内容里，**袖口就是角色身份**，跨视频必须一致
4. 场景一致性铁律不变：**锁的是桌子和物件；光线可以按剧情换（夜=台灯暖光，晨=窗帘冷光），但物件位置一根笔都不能挪**

**每周生成量**：4 支 AI 视频（周三是纯录屏，不用 AI）× 3-4 镜头 ≈ 15 次生成，周日一次批量跑完。

---

## 周一 11/30 · V-M1【起源篇·14 天宣战】⭐⭐ 本周旗舰 · 全周标准样板

> **本篇已按 2026-11-23 用户意见重做（v6）**：定位为**开赛第一天（Day 1 / 14 天起点）**，全片只演 Day 1 当天发生的事（被驳 → 补证据 → 通过 → 20 分），不演"我打算开始"。**下面所有写法（镜头结构、提示词颗粒度、手部/服装一致性、验收清单）就是后续四篇的标准模板。**

### 选题依据（美国真实校历，2026-11-23 查证）

| 事实 | 来源 |
|------|------|
| 全美 12 校期末窗口：**12/3（UGA）—12/22（Rutgers）** | 各校 registrar 页面，2026-11-09 读取 |
| **12/14 是单日最密集的期末起点**：Penn State、Michigan、Michigan State、Indiana Bloomington 全部 12/14-18；IU South Bend 12/14-18 | 同上 |
| 11/30（发布日）+ 14 天 = **12/14** | 与最密集校历精确对齐 |

**辩证分析（为什么 14 天比原来的 10 天好）**：
1. **更贴近真实**——12/14 是四所 Big Ten 大校的共同期末起点，学生基数最大；10 天（12/10）只对应 Hartford/Ohio State 等少数校
2. **留出两周内容跑道**——14 天 = 两个完整内容周（11/30-12/6 + 12/7-13），比 10 天多一周铺垫，赛季结算那天才有"追了两周终于开考"的兑现感
3. **但必须承认一个风险**：UGA（12/3）、UF（12/5）、UCLA（12/7）的学生此时已经在考了——**所以内容里绝不出现具体日期或校名**，倒计时是"我自己的日历"，观众各按自己的校历代入情绪（这是通用的，不是事实陈述）
4. **叙事从"中段"改成"第一集"**：GA 周涌进来的新观众没见过前面的内容，"我们把它变成了比赛"是没头没尾的中段剧情；而 Day 1 当天的一件具体事（申报被驳 → 补证据 → 通过）是自带前因后果的**起源篇**，路人一次看懂，这是 GA 周最该发的结构

**逻辑审查（这一条是 Day 1 = 开赛第一天，逐拍查出来的六个漏洞）**

| # | 漏洞 | 为什么是硬伤（不是小瑕疵） |
|---|------|------------------------|
| **1（致命）** | **Day 1 却没有任何 Day 1 的事件** | 第 2、3 拍全是"赛前状态"（我什么都没准备、她已复习 40 小时）。这是开赛**前**的画面。整条视频只发生了"我要开始比赛"这个宣告，**没有发生任何事**——它是预告片，不是第一集 |
| **2（致命）** | **人物动机自相矛盾** | 拍 1：我把驳回权交给她（求她管我、承认她强）；拍 4：我要暴学超过她（不服她、要打败她）。同一个 18 秒里又跪又战，观众看不懂这人到底想干嘛 |
| **3** | **两套数字打架** | 比分牌写 `0 : 0`，画面又在说"她 40 小时、我 0"。观众读成"她领先"，可比赛今天才开始，她那 40 小时根本不计分——这个对比到底在证明什么，没人说得清 |
| **4** | **宣言没有证据** | 喊"我要暴学超过她"，画面是我翻两页空白本。宣言与证据相反，观众不信，也不会期待后续（因为没看到任何能力） |
| **5** | **机制只演了一半** | 只有"驳回"，没有"认可→加分"。第一集是拉新主力，观众看完不知道这产品用起来爽在哪，只看到我挨骂 |
| **6** | **Day 编号与倒计时是两套算法** | 前面写 "day 3/10"、这里写 "14 days"，换算关系从没定义。追更内容只要数字对不上，观众立刻出戏 |

**编剧解法：先定一句核心戏剧问题，把矛盾变成人物宣言**

> **"我要用她的标准赢她。"**（I want to beat her at her own game.）

这一句同时锁死三件事：
- **为什么把驳回权交给她**——不是求她管我，是因为**只有她认可的分才算分**。用她的标准赢，才是真的赢，也是最难的赢法
- **为什么不服从**——我挑她，就是因为不服她
- **为什么这事值得看**——她十月就开始复习，我赢她才值钱

矛盾（求管 vs 宣战）不是被抹掉了，而是**成了这个人物的性格**：嘴上是挑战，做法是把裁判权双手递过去。这是编剧上正确的处理——矛盾变成张力，而不是逻辑漏洞。

**第一集必须有事件**：Day 1 我交第一份任务 → 被驳（没证据）→ 补证据 → 通过 → 比分 20 : 0。挫败→扳回，26 秒走完一次完整闭环，机制也就演全了（驳回、不可申诉、认可入账、+分）。

**顺手把两套数字合并成一套**：

| Day | 日期 | 屏幕倒计时 | 说明 |
|-----|------|-----------|------|
| Day 1 | 11/30 | **14 days left** | 本集。比分 20 : 0 开局 |
| Day 2 | 12/1 | 13 days left | V-M2 待按本口径重定 |
| … | … | … | 每天只增不减 |
| Day 14 | 12/13 | **1 day left** | 赛季最后一天 |
| — | 12/14 | **0 · first final starts** | 期末铃响 = 赛季结算（不算在赛季天数内，是审判日） |

> 换算关系固定：**days left = 15 − Day**。以后所有内容只报这两个数字，不再出现别的口径。

---

### 成品规格

**26 秒 ｜ 4 镜头 ｜ 竖屏 1080×1920 ｜ 无真人露脸（只有手） ｜ ElevenLabs 配音 ｜ BGM 低调 phonk 20%**

> 从 18 秒加到 26 秒，是因为第一集必须把"驳回→补证据→通过"这个循环演完——这 8 秒是这条视频能不能教会观众产品怎么用、决定下载的关键。

### 前 4 秒钩子（先给结果，再讲原因）

| # | 钩子文案 | 为什么这样写 |
|---|---------|-------------|
| **①（定稿）** | **"Day 1 of 14. She already rejected my homework."**（14 天的第 1 天。她已经把我的作业驳回了） | **先给结果**——第一句就把冲突摆出来，观众留下来是为了知道"凭什么驳""这人怎么办"。同时一句话交代赛制（14 天）和机制（她能驳我） |
| ②（备选） | "I gave my straight-A roommate the power to reject my homework." | 反常识够强，但它只是"交权"，没说后续，留人动力弱于① |
| ③（备选） | "My roommate's been studying since October. I started today. 14 days." | 纯差距羞辱，拖延者代入快，但没说清"比赛"是啥 |

> **钩子铁律**：①前 4 秒不提 app 名；②第一句必须是**已经发生的事**（不是打算、不是设定）；③画面同步有实物动作（红笔正在画叉），不能只有字幕飘。

**配音稿**（26 秒，冷静嘴硬 + 轻微自嘲的年轻声）：
> "Day one of fourteen. My straight-A roommate already rejected my homework. I claimed two hours of studying — no proof. Rejected. No appeals. So I actually studied: timer, notes, the whole thing. Approved. Twenty to zero. She'll log tonight, she always does. Fourteen days, highest task score wins. One day up means nothing. But I'm out-studying her. Am I delusional? Let me know."
> （14 天的第 1 天。我那个全 A 室友已经把我的作业驳回了。我申报学习两小时——没证据。驳回。不许申诉。所以我就真去学了：计时器、笔记，全套。通过。20 比 0。她今晚会申报的，她从不落。14 天，任务得分高者胜。领先一天什么都不算。但我要暴学超过她。我是不是疯了？评论区说。）

**叙事自查（这条视频必须自圆其说的三句话）**：
1. 我为什么把审判权给她 → **因为她的标准才算数，用她的标准赢才算赢**
2. 我今天干了什么 → **申报被驳 → 补证据 → 通过 → 20 分**
3. 我下一步要什么 → **守住这个领先，14 天后总分赢她**

### 全片统一的"手部身份证"

| 角色 | 袖口 | 饰品 | 用手 |
|------|------|------|------|
| 我 | **深灰连帽衫袖口**（全程不换） | 无戒指 | 右手 |
| 她 | **米白针织开衫袖口**（全程不换） | 无戒指 | 右手 |

> 不露脸的内容里，**袖口就是角色身份**，整个赛季保持一致。

### 本集道具（每个都字面可见，不做隐喻）

| 道具 | 作用（观众一眼看懂） | 出现镜头 |
|------|-------------------|---------|
| 一张横线任务单（字迹模糊不可读）+ 蓝色笔 | 我申报的任务 | 1、2、3 |
| 红色粗头笔 | 她的审判工具（画叉 / 打勾） | 1、2、3 |
| 手机（屏幕朝上、无可读文字） | 我的证据（后期叠计时器/笔记截图） | 2、3、4 |
| 摊开的笔记本 + 笔 | 我真的学了（镜头 3 里作背景证据） | 3 |
| 黑色笔 | 写比分 | 4 |
| 台灯、水杯（场景固定件，不动） | 场景一致 | 全部 |

---

### 逐镜头脚本

| 镜头 | 时长 | 首帧 | 画面动作（起→止，字面可读） | 屏幕大字 | 配音对齐 |
|------|------|------|--------------------------|---------|---------|
| **1·结果先行：已经被驳** | 0-4s | desk-overhead.jpg | 桌上摊着任务单，**米白袖手拿红笔重重画一个大叉**，笔一放 → **把单子推回画面左侧**（驳回到我这边） | **"Day 1 of 14. She already rejected my homework."** | 第一、二句 |
| **2·为什么被驳：没证据** | 4-10s | desk-phone-closeup.jpg | 灰袖手指尖点着单子上那行（辩解）→ **米白袖手把手机推过来、屏幕朝上（空白/无记录）**，再用红笔在单子上划第二道 → 手收回 | **"claimed 2 hrs. no proof. REJECTED ❌ no appeals"** | 第三、四、五句 |
| **3·补证据→通过→入账** | 10-18s | desk-overhead.jpg | 灰袖手把手机推向右侧（屏幕亮）→ 米白袖手看一眼，**红笔在单子上打一个勾** → 灰袖手拿回手机，拇指上划一下（看比分） | **"re-submitted: timer + notes. APPROVED ✅ +20"** | 第六、七、八句 |
| **4·比分 + 宣战** | 18-26s | desk-lowangle.jpg | 灰袖手用黑笔写下 **"me 20 · her 0"**，笔尖在下面**划两道加重下划线**（下战书）→ 笔尖敲纸两下 → 手机屏亮起 | **"day 1: me 20 · her 0. 14 days. highest score wins. can I hold it? lmk 👇"** | 第九句至结尾 |

**每一拍的因果（自查用，观众不需要任何解释就要看懂）**：
1. 红笔划叉 + 单子推回来 = **我申报的东西被驳了**
2. 她推手机给我看（空的）+ 再划一道 = **因为我没有证据**
3. 我推手机过去（有记录）→ 她打勾 → 我看手机 = **补了证据就通过，分入账了**
4. 写下 20 : 0 并加重划线 = **第一天我 20 她 0，我要守住**

> 四个动作全部字面因果。特别注意：**"叉"在镜头 1 出现一次、镜头 2 再划一道**，是加重而非重复——第一次是结果，第二次是原因，观众看到第二道才明白"哦，是因为没证据"。

---

### 提示词

> **⏸ 待脚本确认后重写**：按上面 4 镜（Shot 1 = 画叉+推回、Shot 3 = 推手机+打勾的连贯动作）以 LOCK / SCENE / ACTION / CAMERA / LOOK / FORBID 六级结构产出。这两个连贯动作是全片难度最高的两镜，会给单独的容错方案。

### 后期（CapCut）

| 项 | 做法 |
|----|------|
| 大字字幕 | 4 句按镜头时间点放画面中下部（胸口位置），白色粗体+黑色描边，逐句弹入；钩子那句（0-4s）字号最大、词对词高亮 |
| 关键数字 | **"Day 1"、"14"、"2 hrs"、"20 · 0"** 放大一号单独强调（观众只记数字） |
| 界面叠画 | 镜头 2/3 的手机屏用真实截图叠：任务卡（Pending）→ 驳回红标 → 计时器+笔记照 → 绿勾 +20。**不用 AI 生成界面** |
| 音效 | 红笔划纸两道（第二道最响，70%）、手机推过桌面、勾选"叮"一声（对齐 +20 出现）；笔尖敲纸两次对齐 beat |
| 配音 | ElevenLabs 粘贴上面稿子，语速压到 0.95，句间留 0.25 秒 |
| BGM | 低调 phonk，20%；"No appeals" 和打勾那一下各留 0.3 秒静音 |
| 结尾 | 最后一帧定格 0.5 秒，让 "can I hold it? lmk" 有反应时间 |

**Caption**：`day 1 of 14 and she already rejected my homework. so I actually studied 😤 watch me try to out-study her`
**置顶评论**：`she rejected 2 hours because my timer screenshot was blurry. blurry.`
**标签**：#studytok #finalsweek #deadweek #collegelife #studymotivation

---

### 验收清单（这条不过关就别发）

**逻辑（第一集最要紧，逐条过）**
- [ ] 整条只讲**一天之内发生的事**：被驳 → 补证据 → 通过 → 20 分（不是"我打算开始"）
- [ ] 比分只有一个系统：**任务得分 20 : 0**，不再出现"40 小时"之类的第二套数字
- [ ] 人物动机能一句话说清：**我要用她的标准赢她**
- [ ] 机制演全了：驳回、不许申诉、认可才入账、+20 入账
- [ ] Day 1 = 14 days left（换算 = 15 − Day），全片只有一个口径

**生成质量**
- [ ] 桌面木纹、台灯位置、水杯位置与基准照一致（可截图并排比对）
- [ ] 每镜最多两只手（Shot 1/3 是双手交接），且不能出现第三只手
- [ ] 手指数量正常、无融合、无多指
- [ ] 没有任何可读文字/乱码（所有文字后期加）
- [ ] 光线方向一致：暖光始终从左来

**叙事一致性**
- [ ] 袖口对：我=深灰连帽衫、她=米白针织（全片不能混）
- [ ] 结尾有 "lmk" 系 CTA
- [ ] 全片没出现 app 名字、没出现具体日期或校名

**发布前**
- [ ] 钩子句（"She already rejected my homework"）在前 4 秒内完整出现，画面同步是红笔画叉（完播率生死线）
- [ ] 配音与字幕完全同步，无错位
- [ ] 美东 19-22 点定时，TikTok 首发
---

## 周二 12/1 · V-M2【差距羞辱】⭐ GA 日（15s · 3 镜头）

**叙事**：路人也看得懂的差距羞辱——"she studied 6 hours before I woke up."
**配音**（约 13s，刚睡醒的含糊→清醒的绝望）：
> "Nine a.m. She studied six hours before I woke up. Six. Her log is all green checkmarks. Mine is one rejection and a screen-time intervention. Wake-up-early people, is it worth it? Let me know."
> （早上九点。她在我睡醒前学了6小时。六小时。她的记录全是绿勾。我的是一次驳回和一份屏幕时间检讨。早起党，值得吗？评论区说。）

| 镜头 | 时长 | 首帧 | 画面动作 | 屏幕大字（后期） |
|------|------|------|---------|----------------|
| 1 | 0-5s | desk-side-morning.jpg | 冷调晨光里，手迟缓地伸过来按掉手机闹钟（starts reaching, ends palm flat on phone），动作慢半拍 | "9:04 am." |
| 2 | 5-10s | desk-phone-closeup.jpg | 手拿起手机看，拇指缓慢滑动两下，肩膀微微一僵（ends frozen hold） | "her log: ✅✅✅✅ / mine: ❌" |
| 3 | 10-15s | desk-lowangle.jpg | 手机屏幕光渐亮，手把手写便签拍在桌上（starts held, ends flat），手撤出 | "she's up 19. is morning worth it? lmk 👇" |

**Shot 1 提示词**：
```
Image-to-video from the morning side desk reference photo. Keep desk, props and object positions exactly as in the photo; the light is cool dim morning window light, slightly hazy.
Action: a drowsy hand reaches slowly across the desk and pats the phone face-down to stop an alarm (starts hand reaching from edge, ends palm resting flat on the phone), movements sluggish and half-asleep.
Camera: locked side view, subtle handheld micro-shake.
Cool bluish morning light with soft window haze, realistic tired-hand slowness, no energy, no readable text, no watermark.
```
**Shot 2 提示词**：
```
Image-to-video from the phone close-up reference photo. Keep hand position, phone orientation and background exactly as in the photo; ambient light is cool morning tone.
Action: the hand lifts the phone slightly and scrolls twice with slow thumb swipes (starts phone resting, ends held with thumb mid-screen), then the hand freezes for two seconds as if stunned.
Camera: locked close-up, subtle handheld micro-shake.
Screen glow as key light on fingers, cool ambient fill, realistic skin texture and fingernail detail, quiet dread mood, no readable text, no watermark.
```
**Shot 3 提示词**：
```
Image-to-video from the low-angle desk reference photo. Keep the flat phone, notebook and morning lighting exactly as in the photo.
Action: a hand presses a small handwritten sticky-note sheet flat onto the desk beside the phone (starts held, ends flat), then withdraws; the phone screen glows brighter softly (no readable text).
Camera: slow push-in toward the glowing screen, subtle handheld micro-shake.
Cool morning light with warm screen glow as accent, realistic paper physics, resigned defeat mood, no text, no watermark.
```

**Caption**：`I set 5 alarms. she needs 0. this is class warfare.`
**置顶评论**：`she was on her SECOND coffee before I opened my eyes.`
**标签**：#studytok #finalsweek #collegediary #morningroutine
**备注**：GA 日发布，这条是全周"路人完成度"最高的一支——早上冷光+夜灯暖光的反差本身就是钩子

---

## 周三 12/2 · V-M3【录屏静音流】15s · 纯后期，不用 AI 生成

**叙事**：她驳回了我"去上课了"。我人在现场。
**制作**：完全用 app 截图 + CapCut 动画拼（Pending→APPROVED 绿勾流 vs REJECTED 红字定格），静音字幕流 + ElevenLabs 配音。秒表和文案**直接用周包素材 3**（0-3 钩子 / 3-8 认证记录对比 / 8-12 比分特写 / 12-15 CTA），配音稿周包已给。
**要点**：比分数字做 CapCut 缓动数字动画（me 233 · her 252）；这条零 AI 成本、15 分钟出片。

---

## 周四 12/3 · V-M4【陪审团驳回】⭐ 互动担当（18s · 4 镜头）

**叙事**："she rejected my 'attended lecture' claim"——判决权交给观众。
**配音**（约 15s，委屈+不服）：
> "I submitted 'attended lecture'. I was there. Physically. My proof was a photo of me asleep in the lecture hall. She rejected it. Her words: physical presence does not equal consciousness. Day three of ten. You're the jury. Let me know."
> （我申报了"去上课"。我在场。物理意义上。我的证据是我在阶梯教室睡着的照片。她驳回了。她的原话：人在不等于意识在。第3天。你们是陪审团。评论区说。）

| 镜头 | 时长 | 首帧 | 画面动作 | 屏幕大字（后期） |
|------|------|------|---------|----------------|
| 1 | 0-4s | desk-phone-closeup.jpg | 手把手机屏转向镜头展示，缓慢稳持 2 秒（ends steady hold） | "I submitted 'attended lecture'. I was there." |
| 2 | 4-8s | desk-phone-closeup.jpg | 手持手机轻微下坠一寸（像泄气），拇指无力垂落（ends slumped hold） | "REJECTED ❌ 'physical presence ≠ consciousness'" |
| 3 | 8-13s | desk-side.jpg | 手把头往后一仰再回来（画外，只拍肩膀投影），然后愤愤地在纸上狂写两笔（ends mid-scribble） | "she said I wasn't CONSCIOUS" |
| 4 | 13-18s | desk-lowangle.jpg | 手机屏发光，手把一支笔横拍在桌上（starts held, ends pen resting） | "day 3/10 — does sleeping in lecture count? you're the jury 👇" |

**Shot 1/2 提示词**（同一首帧，分两条生成）：
```
Shot 1: Image-to-video from the phone close-up reference photo. Keep hand, phone and bokeh exactly as in the photo. Action: the hand rotates the phone screen to face the camera and holds it steady for two seconds (starts angled away, ends screen facing camera). Camera locked, subtle handheld micro-shake. Cool screen glow on fingers, warm lamp rim light, realistic skin texture, hopeful presentation mood, no readable text, no watermark.
Shot 2: same reference photo. Action: the hand holding the phone sinks one inch downward in a deflated slump, thumb going limp (starts steady hold, ends slumped hold). Camera locked, subtle handheld micro-shake. Screen glow dims slightly, deflated defeated mood, no readable text, no watermark.
```
**Shot 3 提示词**：
```
Image-to-video from the side desk reference photo. Keep desk, props and lighting exactly as in the photo. Action: a hand scribbles angrily on the notebook twice with heavy pen pressure, page trembling slightly (starts pen on paper, ends mid-scribble). Camera locked side view with subtle handheld micro-shake. Realistic heavy pen strokes tearing slightly at paper texture, indignant mood, warm lamp light, no readable text, no watermark.
```
**Shot 4 提示词**：
```
Image-to-video from the low-angle desk reference photo. Keep the flat phone, notebook and lighting exactly as in the photo. Action: a hand places a pen horizontally onto the desk with a decisive small tap (starts held above, ends pen resting on desk), then withdraws; phone screen glows softly (no readable text). Camera slow push-in, subtle handheld micro-shake. Quiet challenge mood, warm-cool mixed light, no text, no watermark.
```

**Caption**：`the jury has failed me. EVERYONE falls asleep in econ.`
**置顶评论**：`her exact words: "physical presence ≠ consciousness" 💀`
**标签**：#studytok #collegelife #finalsweek #funny

---

## 周五 12/4 · V-M5【周末赌注】（15s · 3 镜头）

**叙事**："we bet our weekend on this one"——赌注：输的洗一整个期末周的衣服。
**配音**（约 13s，紧张+自嘲）：
> "We bet our weekend. Whoever logs fewer study hours does the other's laundry for all of finals week. Her plan: seventeen hours. My plan: one library visit and a mental breakdown. What should the next bet be? Let me know."
> （我们押上了周末。学习时长少的，给对方洗整个期末周的衣服。她的计划：17小时。我的计划：去一次图书馆+精神崩溃。下一个赌注该赌什么？评论区说。）

| 镜头 | 时长 | 首帧 | 画面动作 | 屏幕大字（后期） |
|------|------|------|---------|----------------|
| 1 | 0-5s | desk-overhead.jpg | 两只手先后入画，先后把两张纸条拍在桌上左右两侧（ends both flat，一左一右对峙感） | "we bet our weekend on this one" |
| 2 | 5-10s | desk-side.jpg | 手在纸上写下大字一行，写完把笔一放，靠椅背（画外）长出一口气——只拍手部松开笔（ends pen released） | "her plan: 6+6+5 hrs / mine: one library visit + a mental breakdown" |
| 3 | 10-15s | desk-lowangle.jpg | 手机屏发光脉冲，手在手机前犹豫悬停两秒然后缩回（ends hand withdrawn, phone untouched） | "me 236 · her 261 — day 5/10. next bet? lmk 👇" |

**Shot 1 提示词**：
```
Image-to-video from the overhead desk reference photo. Keep desk, props, lamp and lighting exactly as in the photo, do not redesign anything.
Action: one hand places a small folded note flat on the left side of the desk, then a second hand places another note flat on the right side, ending in a face-off arrangement (starts empty center, ends two notes left and right).
Camera: locked overhead, subtle handheld micro-shake.
Two different hand sizes for two different people, realistic paper physics, warm lamp light, playful tension like a duel setup, no readable text (notes stay blurred), no watermark.
```
**Shot 2 提示词**：
```
Image-to-video from the side desk reference photo. Keep desk, props and lighting exactly as in the photo.
Action: the hand writes one large line on the note with heavy pressure, then releases the pen letting it roll slightly and pulls away in surrender (starts writing, ends pen released and hand withdrawn).
Camera: locked side view, subtle handheld micro-shake.
Realistic heavy pen pressure, pen rolling physics on wood, resigned comedic mood, warm lamp light, no readable text, no watermark.
```
**Shot 3 提示词**：
```
Image-to-video from the low-angle desk reference photo. Keep the flat phone, notebook and lighting exactly as in the photo.
Action: a hand hovers hesitantly above the glowing phone for two seconds, twitches, then retreats without touching it (starts hand hovering, ends hand withdrawn, phone untouched); screen glow pulses softly (no readable text).
Camera: slow push-in toward the screen, subtle handheld micro-shake.
Hesitant fear mood, warm-cool mixed light, realistic hand tremor, no text, no watermark.
```

**Caption**：`the laundry bet was HER idea. she's never lost a bet. I live in fear.`
**置顶评论**：`drop your worst bet ideas below — she reads the comments 👀`
**标签**：#studytok #finalsweek #roommatestory #collegelife

---

## 周六-周日 · 连胜卡填充（维持原样）

连胜卡是单图 5 分钟填充，**不转视频**（性价比不合适）——直接用周包的 7 条文案池发图。若某天想发视频填充，复用 V-M4 Shot 4 的"笔拍桌"镜头换字幕即可，不用新拍。

## 本周时刻表（格式替换后）

| 日 | 视频素材 | 时长 | 美东 | 生成镜头数 |
|----|---------|------|------|-----------|
| 周一 11/30 | V-M1 起源篇·14 天宣战 | 18s | 19-22 | 4 |
| 周二 12/1 | V-M2 差距羞辱（GA 日） | 15s | 19-22 | 3 |
| 周三 12/2 | V-M3 录屏静音流 | 15s | 12-13 或 19-22 | 0（纯后期） |
| 周四 12/3 | V-M4 陪审团驳回 | 18s | 19-22 | 4 |
| 周五 12/4 | V-M5 周末赌注 | 15s | 19-22 | 3 |
| 周六-日 | 连胜卡图集填充 | — | 平峰 | 0 |

**平台分发**：TikTok 首发 → 24h 后 YT Shorts + IG Reels（IG 上同时发图集版轮播，双版本 A/B 测格式）。周日批量生成全周镜头（14 次 AI 生成），周一-周五每天只需 CapCut 组装 20 分钟。

## 一致性检查（每周视频发出前过一遍）

- [ ] 桌面物件与基准照一致（笔/杯/台灯位置没漂移）
- [ ] **袖口身份对**（我=深灰连帽衫 / 她=米白针织，每支视频都不能混）
- [ ] 比分与主表连续（**V-M1 从 0 : 0 开局** → 后续每天只增不减，分差自然拉开）
- [ ] 倒计时数字正确（**day 1 = 14 days**：14 → 13 → 12 → 10）
- [ ] 周二手持晨光版基准照已补拍
- [ ] 每支结尾都有 "lmk" 系 CTA
