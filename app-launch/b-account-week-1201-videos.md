# B 自律号 · GA 周简短小视频包（11/30 – 12/6 · 视频版）

> 配套：`b-account-week-1201.md`（叙事节拍/比分/人设卡的母本）+ `v1-ai-video-prompts.md` V2（场景基准照方案）。
> **本文档 = 周包每一天的视频实现版**：每天一条 12-18 秒简短小视频，书桌戏、无真人开口、AI 配音（ElevenLabs），LibTV 图生视频（基准照首帧，单次 ≤30s）。
> 人设/比分/倒计时**直接从周包母本取数**，不另起炉灶——视频版和图集版是同一故事的两种格式（视频发 TikTok/Shorts，图集版发 IG 轮播，双版本 A/B）。
> **⚠️ V-M1（2026-11-23 定稿）新口径：倒计时 14 天（对齐 12/14 真实期末起点）+ 比分 0 : 0 开局（不设让分，差距用"她已复习约 40 小时 vs 我 0"作事实对比）。后续 V-M2~V-M5 待按 V-M1 标准同步重写时，一并改用这套口径。**

## 〇、先决条件（同 V2 提示词包）

1. 4 张基准照已拍好存 `app-launch/scene-assets/`（desk-overhead / desk-side / desk-phone-closeup / desk-lowangle）
2. **补拍一张**：`desk-side-morning.jpg`（同一张桌子、同一机位、拉开窗帘的清晨冷光——周二那支用。桌子物件一点不动，只换光线）
3. **拍摄制服（新增强制项）**：我=深灰连帽衫、她=米白针织开衫，两件固定不换——不露脸的内容里，**袖口就是角色身份**，跨视频必须一致
4. 场景一致性铁律不变：**锁的是桌子和物件；光线可以按剧情换（夜=台灯暖光，晨=窗帘冷光），但物件位置一根笔都不能挪**

**每周生成量**：4 支 AI 视频（周三是纯录屏，不用 AI）× 3-4 镜头 ≈ 15 次生成，周日一次批量跑完。

---

## 周一 11/30 · V-M1【起源篇·14 天宣战】⭐⭐ 本周旗舰 · 全周标准样板

> **本篇已按 2026-11-23 用户意见重做**：倒计时改 14 天、叙事改为"零准备的我向学霸室友宣战、逼自己进步"、提示词细化到每个道具与光源。**下面所有写法（镜头结构、提示词颗粒度、手部/服装一致性、验收清单）就是后续四篇的标准模板。**

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
4. **叙事从"中段"改成"第一集"**：GA 周涌进来的新观众没见过前面的内容，"我们把它变成了比赛"是没头没尾的中段剧情；而"零准备 + 向学霸室友宣战"是自带前因后果的**起源篇**，路人一次看懂，这是 GA 周最该发的结构

**辩证分析一：13 分到底要不要强调——结论是不用，改 0 : 0 开局**

| 支持强调 13 分 | 反对（我的判断） |
|---------------|-----------------|
| 有具体数字，落后感更强 | **它是条编出来的规则**——产品里没有"让分"机制。观众记的是假规则，后面视频比分一涨就自相矛盾，等于给自己挖坑 |
| 数字能引发评论争议（"不公平"） | **解释它要花掉半句到一句动画时间**（"因为她十月就开始复习"），18 秒里这一句本来该用来讲"她审批我"这个真正的卖点 |
| 让赛季第一天就有比分 | **让分恰恰削弱"公平对决"**——产品最值钱的就是同一套规则下互相审批，让分一出现，比赛像安排的 |
| — | 新观众无从核对 13 分，反而显得假；而 `0 : 0` 谁都一秒看懂，且后面每天数字往上涨本身就是追更燃料 |

**但"差距"这个情绪必须留**——只是换成**事实性对比**而非规则发明：
> "She's forty hours in. I'm at zero."（她已经干了四十小时。我零小时。）

她十月开始复习是事实，说"四十小时"是量级描述，不涉及任何规则，也不会和后面比分冲突。**强调差距，但不强调让分。**

**辩证分析二：上一稿为什么看不懂——道具是"符号"不是"动作"**

上一稿的"折起来的纸条从你手交到她手"试图表达"交出权力"，但**符号只有创作者懂，观众只看到一张纸被拿走**——没有前因后果，也没有情绪。接着又变成"我在空白纸上敲打"，观众更懵：这张纸到底是啥？

**修正原则（以后所有脚本都按这条）**：**每个动作必须是字面意思，观众不需要任何解释就能看懂因果**。
- ❌ 折纸条被拿走 = 交出权力（符号）
- ✅ 我把一张任务单推到她面前，她当场在上面画一个红色大叉 = 我申报，她驳回（字面）

**叙事口径（定稿）**：不做"她带我进步"这一层。零准备的我，主动向全 A 室友宣战，理由只有一个——我不服她。规则是硬的：**任务需对方认可才入账、驳回不可申诉、14 天结束时任务得分高者胜**；结尾立场是**进攻**——"我要暴学超过她"，不是"我完了"。

> **产品规则口径卡（所有内容统一，不许改写）**：得分只来自**被对方认可的任务**；不认可不入账；驳回不能申诉；胜负只看**这 14 天的任务得分**。不出现"让分""加分""赛季奖励"等产品里没有的规则。

---

### 成品规格

**18 秒 ｜ 4 镜头 ｜ 竖屏 1080×1920 ｜ 无真人露脸（只有手） ｜ ElevenLabs 配音 ｜ BGM 低调 phonk 20%**

### 前 3 秒钩子（三条候选，推荐第 1 条）

| # | 钩子文案 | 为什么会钩住人 |
|---|---------|---------------|
| **①（推荐）** | **"I gave my straight-A roommate the power to reject my homework."**（我把驳回我作业的权力，交给了我那个全 A 室友） | 反常识 + 后果预告 + 产品独有机制，一句话三层钩；而且画面能同步演出来（递过去→当场画叉） |
| ② | "My roommate started reviewing for finals in October. I started today." | 纯差距羞辱，拖延者一秒代入 |
| ③ | "14 days until finals and I've done literally nothing. So I declared war." | 认输+反转，情绪落差大 |

> **钩子铁律**：①前 3 秒不提 app 名；②第一句必须含冲突或代价（"power to reject"是代价）；③画面必须有对应实物动作同步发生，不能只有字幕在飘。

**配音稿**（约 17 秒，冷静嘴硬、略带自嘲的年轻声）：
> "I gave my straight-A roommate the power to reject my homework. She said yes. Fourteen days to finals, and I've done nothing. She's forty hours in — I'm at zero. Same rules: every task I log needs her approval. No appeals. Fourteen days, highest task score wins. And I'm out-studying her. Am I delusional? Let me know."
> （我把驳回我任务的权力交给了我那个全 A 室友。她答应了。距期末 14 天，我一个字没看。她已经干了四十小时，我零小时。同一套规则：我每条任务都要她认可。不许申诉。14 天，任务得分高者胜。而我要暴学超过她。我是不是疯了？评论区说。）

### 全片统一的"手部身份证"

| 角色 | 袖口 | 饰品 | 用手 |
|------|------|------|------|
| 我 | **深灰连帽衫袖口**（全程不换） | 无戒指 | 右手 |
| 她 | **米白针织开衫袖口**（全程不换） | 无戒指 | 右手 |

> 不露脸的内容里，**袖口就是角色身份**，整个赛季保持一致。

### 本集道具（每个都字面可见，不做隐喻）

| 道具 | 作用（观众一眼看懂） | 出现镜头 |
|------|-------------------|---------|
| 一张横线任务单（字迹模糊不可读）+ 蓝色笔 | 我申报的任务 | 1 |
| 红色粗头笔 | 她的驳回 | 1 |
| 摊开的笔记本（**两页全空白**） | 我什么都没准备 | 2 |
| 一厚叠便利贴/卡片（她整理好的复习资料） | 她已经干了很多 | 3 |
| 黑色笔 + 手机（屏幕朝上、无可读内容） | 记分 + 赛季界面 | 4 |
| 台灯、水杯（场景固定件，不动） | 场景一致 | 全部 |

---

### 逐镜头脚本

| 镜头 | 时长 | 首帧 | 画面动作（起→止，字面可读） | 屏幕大字 | 配音对齐 |
|------|------|------|--------------------------|---------|---------|
| **1·钩子：我申报，她当场驳回** | 0-3s | desk-overhead.jpg | 灰袖手把横线任务单推到桌子右侧 → **米白袖手拿红笔立刻在单子上画一个大叉**，笔一放（我递→她驳，因果一眼看懂） | **"I gave my straight-A roommate the power to reject my homework."** | 第一、二句 |
| **2·代价：空白页** | 3-8s | desk-overhead.jpg | 灰袖手连翻两页笔记本，**两页都是空白**；手指在空白处敲两下，停住 | **"14 days to finals. I've done nothing."** | 第三句 |
| **3·差距：四十小时 vs 零** | 8-13s | desk-side.jpg | 米白袖手把**一厚叠便利贴**放到我的空白笔记本旁边（一厚一空同框）；灰袖手把自己的笔放下 | **"she's 40 hrs in. I'm at zero."** | 第四句 |
| **4·规则 + 宣战** | 13-18s | desk-lowangle.jpg | 灰袖手用黑笔写下 "0 : 0"，笔尖**在下面划两道加重下划线**（下战书），笔尖敲两下；手机屏亮起 | **"14 days. highest task score wins. I'm out-studying her. am I delusional? lmk 👇"** | 第五句至结尾 |

**每一拍的因果（自查用）**：
1. 我递任务单 → 她画叉 = **我的任务要她批**
2. 翻两页都是白 = **我零准备**
3. 一厚叠 vs 一本空白 = **差距有多大**
4. 写下 0:0 并加重划线 → **从零开始，14 天后任务得分高者胜，而我打算暴学**

> 四个动作全部是字面因果，不需要任何解释；没有一张纸代表"权力"这种抽象设计。

---

### 提示词

> **⏸ 待脚本确认后重写**：按上面 4 镜（Shot 1 = 递单→画叉的连贯动作）以 LOCK / SCENE / ACTION / CAMERA / LOOK / FORBID 六级结构产出。旧版留在 git 历史。

### 后期（CapCut）

| 项 | 做法 |
|----|------|
| 大字字幕 | 4 句按镜头时间点放画面中下部（胸口位置），白色粗体+黑色描边，逐句弹入；钩子那句（0-3s）字号最大、词对词高亮 |
| 关键数字 | "14 days"、"40 hrs"、"0 : 0" 用放大一号字体单独强调（观众只记数字） |
| 音效 | 翻纸声、红笔划纸（最响，放大到 70%）、便利贴落桌三道声音；笔尖敲纸两次对齐 beat（ASMR 是这个赛道的隐性钩子） |
| 配音 | ElevenLabs 粘贴上面稿子，语速压到 0.95，句间留 0.3 秒 |
| BGM | 低调 phonk，20%；红笔画叉那一下留 0.4 秒静音 |
| 结尾 | 最后一帧定格 0.5 秒，让 "am I delusional? lmk" 有反应时间（自嘲式提问比"我完了"更能钩评论） |

**Caption**：`14 days out and I've done literally nothing. watch me try to out-study her 😭`
**置顶评论**：`she said "you have 14 days. good luck." the disrespect.`
**标签**：#studytok #finalsweek #deadweek #collegelife #studymotivation

---

### 验收清单（这条不过关就别发）

**生成质量**
- [ ] 桌面木纹、台灯位置、水杯位置与基准照一致（可截图与基准照并排比对）
- [ ] 每镜最多两只手（Shot 1 递单+画叉、Shot 3 放便利贴），且不能出现第三只手
- [ ] 手指数量正常、无融合、无多指
- [ ] 没有任何可读文字/乱码（所有文字后期加）
- [ ] 光线方向一致：暖光始终从左来

**叙事一致性**
- [ ] 袖口对：我=深灰连帽衫、她=米白针织（全片不能混）
- [ ] 倒计时=14 天，比分=**0 : 0 开局**（本篇不出现让分）
- [ ] 结尾有 "lmk" 系 CTA
- [ ] 全片没出现 app 名字、没出现具体日期或校名

**发布前**
- [ ] 钩子句（"power to reject my homework"）在前 3 秒内完整出现，且画面同步完成"递单→红笔画叉"（完播率生死线）
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
