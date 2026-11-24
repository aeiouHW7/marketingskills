# B 自律号 · GA 周简短小视频包（11/30 – 12/6 · 视频版）

> 配套：`b-account-week-1201.md`（叙事节拍/比分/人设卡的母本）+ `v1-ai-video-prompts.md` V2（场景基准照方案）。
> **本文档 = 周包每一天的视频实现版**：每天一条 12-18 秒简短小视频，书桌戏、无真人开口、AI 配音（ElevenLabs），LibTV 图生视频（基准照首帧，单次 ≤30s）。
> 人设/比分/倒计时**直接从周包母本取数**，不另起炉灶——视频版和图集版是同一故事的两种格式（视频发 TikTok/Shorts，图集版发 IG 轮播，双版本 A/B）。
> **⚠️ V-M1（2026-11-23 v9 定稿）口径，后续 V-M2~V-M5 待同步**：
> ①**Day N of 14，days left = 15 − N**（Day 1 = 14 days left；Day 14 = 1 day left；12/14 第一场期末开考 = 结算）；
> ②**比分只有一套：任务得分，每项任务 1-3 分**（Day 1 = 3 : 0），不设让分、不做"她 40 小时 vs 我 0"这类第二套数字；
> ③**每集必须演一个当天发生的事件**，不演"我打算开始"；
> ④**人物动机一句话**：我要用她的标准赢她（所以把裁判权递给她，同时不服她）；
> ⑤**任务 = 可交付的成果，不是时长**（20 道题、一章笔记、一套卷子）——**全季禁止"我学了 X 小时"当证据**；
> ⑥**补救路径只有一条**：驳回**不可申诉**（争辩没用），但**可以修改申报/补证据后重新提交**——不许演"申诉成功"。

---

## 〇、先决条件（同 V2 提示词包）

1. 4 张基准照已拍好存 `app-launch/scene-assets/`（desk-overhead / desk-side / desk-phone-closeup / desk-lowangle）
2. **补拍一张**：`desk-side-morning.jpg`（同一张桌子、同一机位、拉开窗帘的清晨冷光——周二那支用。桌子物件一点不动，只换光线）
3. **拍摄制服（新增强制项）**：我=深灰连帽衫、她=米白针织开衫，两件固定不换——不露脸的内容里，**袖口就是角色身份**，跨视频必须一致
4. 场景一致性铁律不变：**锁的是桌子和物件；光线可以按剧情换（夜=台灯暖光，晨=窗帘冷光），但物件位置一根笔都不能挪**

**每周生成量**：4 支 AI 视频（周三是纯录屏，不用 AI）× 3-4 镜头 ≈ 15 次生成，周日一次批量跑完。

---

## 周一 11/30 · V-M1【起源篇·14 天宣战】⭐⭐ 本周旗舰 · 全周标准样板

> **本篇已按 2026-11-23 用户意见重做（v9）**：定位为**开赛第一天（Day 1 / 14 天起点）**，全片只演 Day 1 当天的事，核心是**"时长不算数，成果才算数"**这一转：**交权 → "学了 3 小时"被驳 → 改成"20 道题"并交出写满的笔记本 → 她翻页认可 → 3 分**。手戏段零 UI，**产品只在最后 3 秒真实录屏里出现**。**下面所有写法（镜头结构、提示词颗粒度、手部/服装一致性、验收清单）就是后续四篇的标准模板。**

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

**v9：先解决一个比脚本更底层的问题——"这项任务到底是什么"**

你这一问揭穿了我前面几版的地基是空的。我一直让"手机/计时器"当证据，但**计时器只能证明手机开着三个小时，不能证明我学了任何东西**。她凭什么给通过？她给不了。所以"她看一眼计时器就批了"这个情节，逻辑上根本不成立——**观众里的聪明人一眼就会发现这个 app 是假的**。

**错的地基（我前几版）**
> 任务 = "学习 3 小时" → 证据 = 计时器 → 她认可时长

问题：时长**不可验证**，也不是任何人想要的结果。全世界所有计时器 app 都能干这事，凭什么用你的？

**对的地基（v9）**
> 任务 = **"Chapter 5 的 20 道练习题"**（一个可交付的成果）→ 证据 = **写满 20 道题的笔记本**（她能翻、能看、能判）→ 她认可的是**你做出来的东西**

这一改，三个问题同时解决：

1. **逻辑成立**：她翻一页、看到写满的字，才有资格打勾
2. **产品差异化第一次被讲清楚**：番茄钟记录你**坐了多久**，这个 app 要你**交出东西**——"认可"这个机制之所以成立，是因为有实物可认
3. **你问的"落地结果"有了答案**：结果是**一页写满的题**（和 3 分），不是"三小时"这个空气数字

**所以剧情必须演"从时长到成果"的转变**——这才是第一集真正的成长弧：

| 拍 | 我做了什么 | 她的反应 | 观众学到什么 |
|----|-----------|---------|-------------|
| 第一次申报 | "学了 3 小时"（比三根手指） | 摆手 → 画叉 | **时长不算数** |
| 我改 | 划掉"3 小时"，写"20 道题"，推过去写满的笔记本 | 翻页看 → 打勾 | **成果才算数** |

**金句（段 2 大字，也是这条视频的核）**：**"claimed 3 hrs. she asked: 3 hrs of WHAT?"**（我申报三小时。她问：三小时的**什么**？）
这一句把产品价值一次说完——**不是"你花了多久"，是"你做出了什么"**。它比任何"记录你的努力"式文案都锋利，而且天然带争议（有人会站我："三小时也是努力啊"）。

**这才是完整链条**：交权 → 我被"3 小时"驳回 → 我改成"20 道题"并交出实物 → 她翻页认可 → 3 分入账 → 录屏交付。

**产品规则口径卡（全季统一，不许改写）**
> ①任务 = **可交付的成果**（不是时长、不是"我在学"）；
> ②得分只来自**被对方认可**的任务，不认可不入账；
> ③**驳回不可申诉**（争辩没用），但**可以修改申报/补证据后重新提交**；
> ④每项任务 **1-3 分**（按难度），胜负只看这 14 天的任务得分；
> ⑤不出现"让分""加分""赛季奖励"，也不出现**只用时长当证据**的情节——产品里没有的规则一条都不许编。

---

### 成品规格

**23 秒 ｜ 4 段（3 段 AI 手戏 + 1 段真实录屏） ｜ 竖屏 1080×1920 ｜ 无真人露脸（只有手） ｜ ElevenLabs 配音 ｜ BGM 低调 phonk 20%**

> 全片只有**实物道具**（单子、笔、笔记本），手戏段零 UI；产品界面只在最后 3 秒真实录屏出现。

### 前 4 秒钩子（交权 + 已发生，两个钩子叠在 4 秒里）

| 时间 | 大字 | 作用 |
|------|------|------|
| 固定角标 | **"DAY 1 / 14"**（右上角，全季每集只改数字） | 追更符号 + 一眼看出是连载 |
| 0-3s | **"I gave my roommate the power to reject my homework."** | 钩子一：**反常识的决定**（谁会干这事？他图什么？） |
| 3-4s | **"Day 1. She already used it."** | 钩子二：**后果已发生**（她真用了——立刻想看怎么用的） |

> **钩子铁律**：①前 4 秒不提 app 名；②第一句是**一个决定**，第二句是**这个决定的后果**；③画面同步：说到 "power to reject" 时她的手正接过单子、拿起红笔。

**配音稿**（23 秒，冷静嘴硬 + 轻微自嘲的年轻声）：
> "Day one of fourteen. I gave my straight-A roommate the power to reject my homework. I said I studied three hours. She asked — three hours of what? Rejected. No appeals. So I stopped counting hours. Twenty problems, done. She checked every page. Approved. Three points. Day one: me three, her zero. Fourteen days, highest score wins. Who's trying this with their roommate? Let me know."
> （14 天的第 1 天。我把驳回我作业的权力，交给了我那个全 A 室友。我说我学了三小时。她问——三小时的什么？驳回。不许申诉。所以我停止数小时了。二十道题，做完了。她把每一页都翻了。通过。三分。第一天：我三，她零。14 天，任务得分高者胜。谁想跟室友来一场？评论区说。）

> **"She asked — three hours of what?"** 是全片情绪的转折点，配音这里要有 0.4 秒的停顿（像被问住了）。

### 全片统一的"手部身份证"

| 角色 | 袖口 | 饰品 | 用手 |
|------|------|------|------|
| 我 | **深灰连帽衫袖口**（全程不换） | 无戒指 | 右手 |
| 她 | **米白针织开衫袖口**（全程不换） | 无戒指 | 右手 |

> 不露脸的内容里，**袖口就是角色身份**，整个赛季保持一致。

### 本集道具（每个都字面可见，不做隐喻）

| 道具 | 作用（观众一眼看懂） | 出现段 |
|------|-------------------|-------|
| 一张横线任务单（字迹模糊不可读）+ 蓝色笔 | 我申报的内容；蓝笔用来**划掉旧的、写新的** | 1、2、3 |
| **红色粗头笔** | 她的判决工具（摆手 / 画叉 / 打勾） | 1、2、4 |
| **摊开的笔记本（写满字迹、不可读）** | **我的成果**——这是"认可"能成立的关键实物 | 3、4 |
| 手机（**屏幕朝下或不朝向镜头**） | 只在段 4 转向镜头，接真实录屏 | 4 |
| 黑色笔 | 写比分 | 4 |
| 台灯、水杯（场景固定件，不动） | 场景一致 | 全部 |

> **⚠️ 计时器彻底删掉**：它是弱证据（只证明手机开着），也是这段逻辑崩塌的根源。
> **⚠️ 手戏段手机屏幕一律拍不到**：朝下放、或推向她时屏幕朝她。UI 只在段 4 的真实录屏里出现。

---

### 逐段脚本

| 段 | 时间 | 首帧 | 画面动作（起→止，字面可读） | 屏幕大字 | 配音对齐 |
|----|------|------|--------------------------|---------|---------|
| **1·钩子：交权** | 0-4s | desk-overhead.jpg | 灰袖手把任务单**推到桌子右侧** → 米白袖手**接过单子、拿起红笔** | "I gave my roommate the power to reject my homework." → "Day 1. She already used it." | 第一、二句 |
| **2·驳回：时长不算数** | 4-10s | desk-overhead.jpg | 灰袖手指尖**点单子上的那行**，然后**举起三根手指**（辩解：三小时）→ 米白袖手**手掌在桌面上左右摆两下（摆手：不行）** → **红笔重重画叉（两道）** → 单子**推回画面左侧** | **"claimed 3 hrs. she asked: 3 hrs of WHAT? ❌"** | 第三至五句 |
| **3·我改：从时长改成成果** | 10-16s | desk-side.jpg | 灰袖手拿**蓝笔把单子上那行划掉**、在下行**写新的**（写两秒）→ 把**摊开的笔记本（写满）推到她面前**、单子压在笔记本上 | **"no appeals. so I stopped counting hours."** | 第六、七、八句 |
| **4·通过 + 真实录屏 + 比分** | 16-23s | desk-overhead.jpg → 录屏 | 米白袖手**翻一页**（看内容，1.2s）→ **红笔打一个勾**（0.8s）→ 灰袖手把手机**转过来面对镜头**（0.8s）→ **切全屏真实录屏 3s**：任务 `Ch.5 · 20 problems` → 绿勾 `APPROVED +3` → 比分条 `me 3 · her 0` → 切回手戏：黑笔写 **"3 : 0"** | 录屏段："this is what counts"<br>结尾："day 1: me 3 · her 0. who's trying this? lmk 👇" | 第九句至结尾 |

**每一段的因果（自查用，观众不需要任何解释就要看懂）**：
1. 我把单子推过去 → 她接过、拿起红笔 = **权力真的在她手上**
2. 我举三根手指（三小时）→ **她摆手** → 画叉 → 单子推回 = **三小时不够，被驳**
3. 我划掉那行、写新的 → 把**写满的笔记本**推过去 = **我不再报时间，我交东西**
4. 她翻页 → 打勾 → 手机转向镜头 → 3 : 0 = **东西过关了，我拿 3 分**

> **全片最强的两个动作**：①她**手掌左右摆两下**（"摆手"是最生活化的否定，比摇头更适合只有手的画面）；②她把**笔记本翻一页**（这一翻，观众立刻明白"她在看实际做的东西"——产品的价值不用一句台词就讲完了）。

**分段时间预算（剪辑时按这个卡）**

| 段 | 时长 | 说明 |
|----|------|------|
| 1 钩子 | 4s | 两句钩子必须说完 |
| 2 驳回 | 6s | 含"举三指"0.8s + "摆手"0.6s + 画叉 1s |
| 3 我改 | 6s | 划掉 1s + 写 2s + 推笔记本 1.5s |
| 4 通过+录屏+比分 | 7s | 翻页 1.2s + 打勾 0.8s + 转手机 0.8s + 录屏 3s + 写比分 1.2s |

---

### Day 与比分口径（全季统一，不许再变）

| 项 | 规则 |
|----|------|
| Day 编号 | **Day N of 14；days left = 15 − N**（Day 1 = 14 days left；Day 14 = 1 day left） |
| 赛季结算 | **12/14 第一场期末开考 = 结算日**（不算在 14 天内，是"审判日"） |
| 任务定义 | **可交付成果**（20 道题、一章笔记、一套模拟卷），**不是时长** |
| 计分 | **每项任务 1-3 分**（按难度），只有**被对方认可**的任务才计分 |
| Day 1 比分 | **me 3 · her 0**（我通过了"Ch.5 二十道题"= 满档 3 分；她今晚才申报） |
| 补救路径 | **驳回不可申诉，但可修改申报重新提交**——内容里必须这么演 |

### 提示词

> **⏸ 待脚本确认后重写**：按上面 4 个生成镜头（段 1 交权、段 2 点单+举三指+摆手+画叉、段 3 划掉重写+推笔记本、段 4 翻页+打勾+转手机）以 LOCK / SCENE / ACTION / CAMERA / LOOK / FORBID 六级结构产出。**段 4 的录屏不用生成**，直接真实录屏。
> 高难镜预判：段 2 一镜里五个动作（点单→举三指→她摆手→画叉→推回），**必须拆成 2a（我举三指）/ 2b（她摆手）/ 2c（画叉推回）三个生成片段**；段 3 的"划掉一行再写一行"拆成 3a/3b。

### 后期（CapCut）

| 项 | 做法 |
|----|------|
| 大字字幕 | 放画面中下部（胸口位置），白色粗体+黑色描边，逐句弹入；两句钩子字号最大 |
| 系列角标 | **"DAY 1 / 14"** 固定右上角，半透明，全季每集只改数字 |
| 关键数字 | **"3 hrs"、"20"、"3 : 0"** 放大一号；**"WHAT?"** 单独加大+"?"闪一下 |
| 录屏段 | **真实录屏 3 秒，不加速、不加特效**；只做两件事：①比分条放大到画面中央 ②绿勾出现时加一声"叮" |
| 界面叠画 | 段 1-3 **完全不叠 UI**；UI 只在录屏段出现 |
| 音效 | 举手指时无音效（留白）；**摆手时一声轻微的"嗒"**（手掌拍桌）；画叉两道（第二道 75%）；翻页声（真实、放大）；蓝笔写字；绿勾"叮"对齐 +3 |
| 配音 | ElevenLabs，语速 0.95；"three hours of what?" 前留 0.4 秒空白 |
| BGM | 低调 phonk 20%；"WHAT?" 那一下**归零 0.4 秒**；段 4 录屏时回到 25% |
| 结尾 | 定格 0.5 秒，让 "who's trying this? lmk" 有反应时间 |

**Caption**：`day 1 of 14. I told my straight-A roommate I studied 3 hours. she asked "3 hours of WHAT?" ... she was right 😭`
**置顶评论**：`she rejected "3 hours" and approved "20 problems" in the same minute. brutal but fair`
**标签**：#studytok #finalsweek #deadweek #collegelife #studymotivation

> 置顶评论这条是故意的：它把这条视频的**核心观念**（时长 vs 成果）浓缩成一句，而且"brutal but fair"会让两派人在评论区吵——一派觉得她太苛刻，一派觉得她说得对。

---

### 验收清单（这条不过关就别发）

**逻辑（第一集最要紧）**
- [ ] 全片只讲 Day 1 当天的事：交权 → "3 小时"被驳 → 改成 20 道题 + 交实物 → 翻页认可 → 3 分
- [ ] **第一次被驳的理由是可视的**：她摆手 + 我举三根手指（时长），不是"她莫名其妙不批"
- [ ] **通过的证据是实物成果**（写满的笔记本），不是时长、不是屏幕截图
- [ ] "解释"必须是**失败的**（摆手/画叉），不能演成申诉成功
- [ ] 计分只有一套：**任务 1-3 分制，我 3 分、她 0 分**
- [ ] **全片没有计时器**，也没有任何"用时长当证据"的画面
- [ ] Day 1 = 14 days left，角标 "DAY 1 / 14"

**生成质量**
- [ ] 桌面木纹、台灯、水杯位置与基准照一致
- [ ] 每镜最多两只手，无第三只手、无多指、无融合
- [ ] 手戏段**没有任何可读文字/乱码**（单子、笔记本上的字必须模糊不可读）
- [ ] 光线方向一致：暖光始终从左来
- [ ] "举三根手指"那镜检查手指数量（AI 高发错误，必须正好三根）

**叙事一致性**
- [ ] 袖口对：我=深灰连帽衫、她=米白针织（全片不能混）
- [ ] 结尾是"你也想试"的邀请式 CTA（不是"求下载"）
- [ ] 全片没出现 app 名字、没出现具体日期或校名
- [ ] **录屏里没有"下载""sign up""免费"字样**（会被判广告降流）

**发布前**
- [ ] 钩子句在前 4 秒内说完，画面同步是"她接过单子拿红笔"
- [ ] "three hours of what?" 前后各留 0.4 秒空白，BGM 确实归零
- [ ] 录屏是**真实版本**（不是设计稿——观众会去下载核对）
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
- [ ] 比分与主表连续（**V-M1 从 me 3 : her 0 开局** → 后续每天只增不减，分差自然拉开）
- [ ] 倒计时数字正确（**day 1 = 14 days**：14 → 13 → 12 → 10）
- [ ] 周二手持晨光版基准照已补拍
- [ ] 每支结尾都有 "lmk" 系 CTA
