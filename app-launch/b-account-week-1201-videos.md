# B 自律号 · GA 周简短小视频包（11/30 – 12/6 · 视频版）

> 配套：`b-account-week-1201.md`（叙事节拍/比分/人设卡的母本）+ `v1-ai-video-prompts.md` V2（场景基准照方案）。
> **本文档 = 周包每一天的视频实现版**：每天一条 15-24 秒简短小视频，书桌戏、无真人开口、AI 配音（ElevenLabs），LibTV 图生视频（**AI 生成的桌面基准图做首帧**，单次 ≤30s）。
> 人设/比分/倒计时**直接从周包母本取数**，不另起炉灶——视频版和图集版是同一故事的两种格式（视频发 TikTok/Shorts，图集版发 IG 轮播，双版本 A/B）。
> **⚠️ V-M1（2026-11-24 v10 定稿）口径，后续 V-M2~V-M5 待同步**：
> ①**Day N of 14，days left = 15 − N**（Day 1 = 14 days left；Day 14 = 1 day left；12/14 第一场期末开考 = 结算）；
> ②**比分只有一套：任务得分，每项任务 1-3 分**（Day 1 = 3 : 0），不设让分、不做"她 40 小时 vs 我 0"这类第二套数字；
> ③**每集必须演一个当天发生的事件**，不演"我打算开始"；
> ④**人物动机一句话**：我要用她的标准赢她（所以把裁判权递给她，同时不服她）；
> ⑤**任务 = 可交付的成果，不是时长**（20 道题、一章笔记、一套卷子）——**全季禁止"我学了 X 小时"当证据**；
> ⑥**补救路径只有一条**：驳回**不可申诉**（争辩没用），但**可以修改申报/补证据后重新提交**——不许演"申诉成功"；
> ⑦**生成规范（v10 起全季执行）**：**一条提示词一次生成整条片**（不拆分拼接）；**纸面零文字**（只允许她的 ✗ 和 ✓，笔记本只给页边）；**真人场景零 UI**（手机屏幕朝下）；**禁止用后期糊字救画面**。

---

## 〇、先决条件（同 V2 提示词包）

1. **4 张桌面基准图已生成**存 `app-launch/scene-assets/`（`desk-main` / `desk-side` / `desk-phone` / `desk-low`）——提示词见 V-M1「桌面基准图」节，**一天内一次做完，全季复用**
2. **补一张晨光版**：`desk-main-morning.jpg`（用 `desk-main.jpg` 做图生图，只把光线换成拉开窗帘的清晨冷光、物件一点不动——周二那支用）
3. **拍摄制服（强制项）**：我=深灰连帽衫、她=米白针织开衫，两件固定不换——不露脸的内容里，**袖口就是角色身份**，跨视频必须一致
4. 场景一致性铁律：**锁的是桌子和物件；光线可以按剧情换（夜=台灯暖光，晨=窗帘冷光），但物件位置一根笔都不许挪**
5. **生成方式（v10 起）**：每条片 = **一条提示词 + 一次生成**，首帧固定为基准图；**不做分段拼接**，出错整条重跑

**每周生成量**：4 支 AI 视频（周三是纯录屏，不用 AI），**每条 3-5 次重跑预留 ≈ 12-20 次生成**，周日一次批量跑完。

---

## 周一 11/30 · V-M1【起源篇·14 天宣战】⭐⭐ 本周旗舰 · 全周标准样板

> **本篇已按 2026-11-24 v10 定稿**：定位为**开赛第一天（Day 1 / 14 天起点）**，只演 Day 1 当天的事——**交权 → "学了 3 小时"被驳 → 改交实物成果 → 她拨页验收 → 3 分**。三个关键调整：**①一条提示词生成整条 24 秒（不拼接）；②纸面彻底零文字（便签只有她的 ✗/✓，笔记本只给页边，你不需要后期糊任何东西）；③真人场景零 UI（手机屏幕朝下，产品展示交给 V-M3 纯录屏流）**。
> **下面所有写法（基准图提示词、整段提示词颗粒度、手部/服装一致性、验收清单）就是后续四篇的标准模板。**

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

**对的地基（v10）**
> 任务 = **"Chapter 5 的 20 道练习题"**（一个可交付的成果）→ 证据 = **一叠用过的纸**（她翻得动、能验）→ 她认可的是**你做出来的东西**

这一改，三个问题同时解决：

1. **逻辑成立**：她**拨动纸页**（不是读内容）就有资格打勾——观众看到她真的在验东西
2. **产品差异化第一次被讲清楚**：番茄钟记录你**坐了多久**，这个 app 要你**交出东西**——"认可"这个机制之所以成立，是因为有实物可认
3. **你问的"落地结果"有了答案**：结果是**做完的东西**（和 3 分），不是"三小时"这个空气数字

> **为什么"只翻不看"反而更好**：观众看的是"她真的在检查"，不是"她在读什么"。而且纸面从不正对镜头 → **AI 没有画字的机会 → 零文字风险 → 零后期修补**。内容细节交给配音一句 "she flipped through it"，比任何特写都清楚。

**所以剧情必须演"从时长到成果"的转变**——这才是第一集真正的成长弧：

| 拍 | 我做了什么 | 她的反应 | 观众学到什么 |
|----|-----------|---------|-------------|
| 第一次申报 | "学了 3 小时"（比三根手指） | 摆手 → 画叉 | **时长不算数** |
| 我改 | 不辩解了，直接推过去**一叠用过的纸** | 拨动页边验 → 打勾 | **成果才算数** |

**金句（段 2 大字，也是这条视频的核）**：**"claimed 3 hrs. she asked: 3 hrs of WHAT?"**（我申报三小时。她问：三小时的**什么**？）
这一句把产品价值一次说完——**不是"你花了多久"，是"你做出了什么"**。它比任何"记录你的努力"式文案都锋利，而且天然带争议（有人会站我："三小时也是努力啊"）。

**这才是完整链条**：交权 → 我被"3 小时"驳回 → 我不吵了、交出实物 → 她拨页验收 → 3 分入账 → 字幕宣布比分。

> **v10 的一处删减**：原稿段 3 有"划掉旧行、写新行"（表达"改申报重新提交"），已删除——**那需要纸面正对镜头，等于把文字风险请回来**。改成**沉默地把成果推过去**：动作更少、更好生成，而且"不辩解、直接交东西"比"改写申报表"更有骨气，戏剧性更强。规则（可修改重交）由配音/字幕承担，不靠画面演。

**产品规则口径卡（全季统一，不许改写）**
> ①任务 = **可交付的成果**（不是时长、不是"我在学"）；
> ②得分只来自**被对方认可**的任务，不认可不入账；
> ③**驳回不可申诉**（争辩没用），但**可以修改申报/补证据后重新提交**；
> ④每项任务 **1-3 分**（按难度），胜负只看这 14 天的任务得分；
> ⑤不出现"让分""加分""赛季奖励"，也不出现**只用时长当证据**的情节——产品里没有的规则一条都不许编。

---

### 成品规格

**24 秒 ｜ 一条 AI 视频（单次生成，不拼接、不分段）｜ 竖屏 1080×1920 ｜ 只有手 ｜ ElevenLabs 配音 ｜ BGM 低调 phonk 20%**

> **三个"零"**：**零文字、零 UI、零后期修补**。
> 全片纸面上只出现**两种符号**（一个红叉、一个红勾），没有一个字母、没有一个数字、没有一个汉字——**AI 没有机会生成伪文字**，你也不需要后期去做任何一处模糊。

---

### 三个硬约束（先立住，再看脚本）

| # | 约束 | 做法 | 为什么 |
|---|------|------|--------|
| **① 一段生成** | 一条提示词、一次推理生成 24 秒连续画面 | 桌面/光线/袖口/道具在**同一次推理里天然一致**。分段拼接必漂移（物件挪位、光线变色、袖口换色），而且漂移了后期根本修不回来 |
| **② 只翻不看** | 笔记本**只以"页边"入画**，她只是用拇指拨动纸页、从不"读"；纸面永远不正对镜头 | 你要的正是这个：观众只需看懂"她检查了成果"，不需要看懂内容。**生成阶段不给模型画字的机会**，所以后期一次都不用修 |
| **③ 零 UI** | 手机全程屏幕朝下扣在桌上；产品界面一个像素都不出现 | 你定的"真人场景不演 app"，同时躲掉 AI 生成 UI 必乱码。**产品展示交给 V-M3 纯录屏流**（一条 15 秒全界面视频，比塞 3 秒更有效） |

> **唯一还需要后期的是"叠加"类工作**：大字字幕、配音、BGM、音效——这些是往上加东西，不是修画面。

---

### 桌面基准图（先生成 4 张，全季所有视频都引用）

**逻辑**：LibTV 图生视频 → **首帧图决定桌面长相**。基准图一旦定下来，后面每条视频的桌子、台灯、水杯、笔、纸的位置 100% 不变，一致性问题在源头解决。

#### 生成顺序（这一步别搞错，顺序决定一致性）

1. **先生成主图**（俯拍 45°）——这是唯一一张"从零生成"的
2. **再用主图做图生图**，只改机位、其余描述原样不动，得到侧图 / 手机视角 / 低角度

> 为什么不四张都从零生成：四段独立提示词出来的桌面，木纹走向、水杯位置、台灯角度一定不同，四张图互相对不上，等于白做。**一张主图派生出全部机位**，物件布局天然一致。

#### 图 1 · 主图（俯拍 45°，90% 的镜头都用这张）

```
Realistic photo, shot on iPhone 15 Pro main camera, vertical 9:16, 3024x4032, f/1.8,
natural indoor lighting, no filter, no color grading, slight sensor noise.

Subject: a small wooden desk in a student room, shot from above at a 45-degree angle,
the desk filling the lower two thirds of the frame, a dark blurred room in the upper third.

Desk surface: light oak wood, fine straight grain running left to right, matte finish,
faint water ring near the right edge, two or three shallow scratches, one small dark
knot in the grain near the bottom left corner.

Objects, fixed positions (this exact arrangement must never change):
- upper left: a matte black metal desk lamp with a round flat base and a short adjustable
  arm, warm 3200K light spilling from it across the desk toward the lower right
- upper right: a white ceramic mug, handle pointing right, a thin dried coffee ring
  inside the rim
- centre: a small plain notepad with faint horizontal rules, blank, no writing
- lower left (the owner's side): a stack of about twenty used loose sheets with slightly
  curled uneven edges, seen edge-on, and two pens lying parallel beside it, one black,
  one dark blue, caps on
- lower right: a dark phone lying face down, screen not visible
- at the far right edge, half out of frame: a folded pair of grey socks

Light: single warm lamp from the upper left, sharp falloff toward the lower right
corner which sits in soft shadow; faint cool spill from an off-frame window at the far
left. Late evening, quiet, lived-in.

Camera: static, slightly off-axis (not perfectly centred), moderate depth of field with
the desk surface in focus and the background room falling into soft blur.

No people, no hands, no text anywhere.
```

**中文要点**：浅橡木桌面、木纹横向、右缘一道水渍环、左下一个小木节；**台灯在左上**（黑色圆盘底座、暖光向右下衰减）、**马克杯右上**（杯口有咖啡渍环）、便签本居中（横线、空白、**不写字**）、**左下角 = 我的地盘**（约二十张用过的纸，只看得到页边卷角 + 两支笔平行放）、手机右下**屏幕朝下**、最右缘一双灰袜子半出画。

> **左右分区是这一版新加的关键**：**我在左下、她在右上**。这条一旦定下来，"我推过去→她接→推回来"整个动作逻辑就有方向了；不定的话 AI 会把两只手随机丢在画面里，动作看起来像两个人抢东西。

#### 图 2 · 侧 45°（用于"推东西过去"这类横向动作）

用图 1 做图生图，只替换这段相机描述：

```
Change only the camera: now a three-quarter side view at 45 degrees from the left,
lens height about 25 cm above the desk, the same desk and the same objects in exactly
the same positions, the lamp now in the left foreground slightly out of focus, the room
behind falling into soft blur. Everything else identical to the reference image.
```

#### 图 3 · 手机视角（平板高度，俯视 70°，用于"她审我"的压迫感）

```
Change only the camera: now a near-overhead view at about 70 degrees, lens height
roughly 40 cm, framing tighter so the notepad and the stack of sheets fill the centre,
the lamp glow entering from the top left corner. Same desk, same objects, same positions.
```

#### 图 4 · 低角度（桌沿平视，用于结尾定格）

```
Change only the camera: now a low angle with the lens almost level with the desk
surface, roughly 8 cm above it, looking across the desk toward the blurred room,
the mug and the stack of sheets in the foreground slightly blurred, the notepad edge
in the middle, warm lamp light raking across the wood grain. Same objects, same positions.
```

#### 存图与引用规则（全季固定）

| 项 | 规则 |
|----|------|
| 文件名 | `desk-main.jpg` / `desk-side.jpg` / `desk-phone.jpg` / `desk-low.jpg`，存 `app-launch/scene-assets/` |
| 首帧 | **每条视频、每个生成请求都用 `desk-main.jpg` 做首帧**（除特殊机位） |
| 提示词第一句 | 永远固定为 `Continue exactly from the provided reference frame.` |
| 参数 | 首帧一致性/参考强度**拉到最高**；只要桌面开始漂移（物件挪位、木纹变色）就立刻停下重来，**不要试图后期修** |
| 换季 | 换赛季才换桌面档案；赛季中换道具 = 重出 4 张基准图（旧视频不复用） |

---

### 手部身份证 + 本集道具

| 角色 | 袖口 | 饰品 | 用手 |
|------|------|------|------|
| 我 | **深灰连帽衫袖口**（全程不换） | 无戒指 | 右手 |
| 她 | **米白针织开衫袖口**（全程不换） | 无戒指 | 右手 |

> 不露脸的内容里，**袖口就是角色身份**，整个赛季保持一致。

| 道具 | 作用（观众一眼看懂） | 关键约束 |
|------|-------------------|---------|
| **空白横线便签**（一张） | 我申报的载体；她的判决写在上面 | **原本空白**——上面只会出现她画的**一个叉、一个勾**，没有字 |
| **红色粗头笔** | 她的判决工具 | 叉两道、勾一个 |
| **一叠用过的纸（约二十张）** | **我的成果**（她检查的对象） | **只以页边/侧面入画**，纸面永不正对镜头 |
| 手机（**屏幕朝下**） | 场景固定件，不承载信息 | 全程不翻面、不亮屏 |
| 台灯、水杯、两支笔 | 场景固定件，不动 | 与基准图完全一致 |

> **⚠️ 计时器、手机屏、任何"字"——全部不在本片出现。**
> 纸面上只有两种符号：**✗ 和 ✓**。这就是本片"零文字"的全部内容。

#### 为什么不用后期改模糊（原则）

- 后期糊字是**补救**，不是**方案**：糊得轻还能认出字母，糊得重纸面就变成一块脏斑，观众照样觉得假
- 而且一旦要糊，说明生成阶段就不可控——**下一次还是不可控**，每集都得修，成本复利
- 本片的做法是**让文字根本不进入画面**：纸面内容 = 一个叉、一个勾；笔记本 = 只有页边。模型没有任何机会画字，你没有任何一处需要修

---

### 全片节拍（24 秒 · 5 拍 · 每拍一个字面因果）

| 拍 | 时间 | 画面动作（字面可读，不需要解释） | 屏幕大字 | 观众看到的因果 |
|----|------|------------------------------|---------|--------------|
| **1 · 交权** | 0-4s | 灰袖手把**空白便签**推到桌子右侧 → 米白袖手**接过、拿起红笔**（笔尖悬着没落） | "I gave my roommate the power to reject my homework." → "Day 1. She already used it." | 权力真的交到她手上了 |
| **2 · 驳回** | 4-9s | 灰袖手在桌面上**举起三根手指** → 米白袖手**手掌朝下左右摆两下**（不行）→ **红笔画两道叉** → 便签推回左侧 | **"claimed 3 hrs. she asked: 3 hrs of WHAT? ✗"** | 报时长 → 被否 → 驳了 |
| **3 · 我改** | 9-14s | 灰袖手把那**一叠用过的纸推到她面前**，便签压在纸上 → 手退回画外 | "no appeals. so I stopped counting hours." | 我不吵了，我交东西 |
| **4 · 认可** | 14-19s | 米白袖手拇指**拨动纸页边缘、快拨三下**（纸页成扇形掀起，只见页边）→ 拿起红笔**打一个勾** | "she checked the work. ✓" | 她验的是成果 → 通过 |
| **5 · 比分** | 19-24s | 米白袖手把便签**翻过来（叉朝下）** → 灰袖手**食指在桌面敲两下** → 定格 | "day 1: me 3 · her 0. who's trying this? lmk 👇" | 判决结束，第一天我领先 |

**五拍的因果链（自查用）**：
1. 我推单子 → 她接、拿笔 = **权力在她**
2. 我举三指 → 她摆手 → 画叉 → 推回 = **三小时不算数**
3. 我推一叠纸 = **我换成交实物**
4. 她拨页边看 → 打勾 = **东西过关**
5. 翻面 + 敲两下 = **本集结束**（比分交给字幕）

> **全片最强的两个动作**：①她**手掌在桌面左右摆两下**（最生活化的否定，比摇头更适合只有手的画面）；②她**拇指拨动纸页边缘**——这一拨，观众立刻懂"她在验收成果"，产品的价值不用一句台词就讲完，而且**纸面从来没有正对过镜头**。

---

### 整段视频提示词（一条 · 直接粘贴 LibTV · 24 秒）

> 首帧图：`desk-main.jpg` ｜ 一致性拉到最高 ｜ 时长 24s ｜ 9:16

```
Continue exactly from the provided reference frame. One single continuous shot,
no cuts, no scene changes.

TECHNICAL
Vertical 9:16, 1080x1920, 24 fps, shot on iPhone 15 Pro main lens, f/2.0, natural
available light only, no filter, no color grading, subtle sensor grain, realistic skin
texture with visible pores and fine lines, short unpolished fingernails, slight natural
handheld micro-movement, the camera essentially static with only breathing-level drift.

SCENE (locked)
The wooden student desk from the reference frame, unchanged: light oak with fine
horizontal grain, matte black desk lamp at the top left throwing warm 3200K light toward
the lower right, white ceramic mug with a dried coffee ring at the top right, a small
plain ruled notepad in the centre, a black pen and a dark blue pen lying parallel on the
left, a stack of about twenty used loose sheets on the right with slightly curled edges,
a dark phone lying face down at the bottom right, faint cool window spill from the far
left. Late evening, lived-in room, background falling into soft blur.
Do not add, remove, or move any object. Do not change the composition.

CAST (hands only, never above the wrist)
The owner, wearing a dark grey hoodie cuff, sits at the LOWER LEFT and every one of his
actions enters the frame from the lower left corner.
The roommate, wearing a cream knit cardigan cuff, sits at the UPPER RIGHT and every one of
her actions enters the frame from the upper right corner.
Their hands never overlap, never cross, and never swap sides.
No rings, no watches, no jewellery. Each actor uses only the right hand. Maximum two hands
in frame at any moment.

BEATS
0.0-4.0s  A dark grey hoodie sleeve slides in from the lower left and pushes a small blank
          ruled notepad into the centre of the desk. A cream cardigan sleeve comes down
          from the upper right, takes the notepad, and picks up a red marker, the tip
          hovering above the paper without touching it.
4.0-9.0s  The grey sleeve raises three fingers, held low above the wood on the left side.
          The cream sleeve rotates a flat palm and sweeps it left and right twice above the
          centre, a clear refusal. The red marker then draws a firm X across the notepad,
          one stroke, then a second stroke crossing it, and the cream sleeve pushes the
          notepad back toward the lower left.
9.0-14.0s The grey sleeve slides the stack of used sheets from the lower left up into the
          centre, the notepad resting on top of the stack, then withdraws back out of frame.
14.0-19.0s The cream sleeve's thumb riffles the edge of the paper stack three times, the
          pages fanning open briefly so only their edges are visible, the flat faces never
          turning toward the lens. The hand then picks up the red marker and draws a single
          check mark on the notepad.
19.0-24.0s The cream sleeve turns the notepad over, face down, covering the X, and
          withdraws to the upper right. A grey hoodie index finger comes in from the lower
          left and taps the wood twice, then the frame holds still, the warm lamp light
          settling on the desk.

CAMERA
Fixed-offset overhead angle at roughly 45 degrees, lens height about 30 cm, moderate depth
of field with the desk and hands sharp and the room blurred behind. The notepad stays in
the centre of the frame throughout, the lower left corner reserved for the owner's hand and
the upper right corner for the roommate's hand. No zoom, no pan, no dolly, no rack focus,
no handheld shake beyond breathing level, no camera movement of any kind.

LOOK
Warm single-source lamp light from upper left with realistic falloff into shadow at the
lower right, soft cool fill from the far left, skin lit warmly on the near side, contact
shadows under the hands and the paper, slight grain, documentary realism, ordinary
unstyled student desk, no glamour.

FORBID
Faces, heads, arms longer than the wrist, any visible forearm or body;
any text, letters, numbers, words, handwriting, printed characters, symbols other than
the single red X and the single red check, decorative patterns on paper, visible content
on the paper stack;
phone screens, app interfaces, UI elements, notifications, glowing screens, readable
displays, watch faces;
extra hands, extra fingers, fused or melting fingers, distorted wrists, more than two
hands at once;
duplicated or teleporting objects, changing mug or lamp position, changing wood grain or
colour temperature, objects entering or leaving the frame unexpectedly;
cuts, transitions, camera pans, zooms, drone shots, time-lapse, speed ramps;
subtitle text, captions, watermarks, logos, borders, split screen;
plastic or smoothed skin, beauty filter, oversaturated colour, studio lighting, HDR glow,
perfectly clean surfaces, artificial studio perfection.
```

#### 中文对照（逐条对齐检查用）

| 区块 | 内容 |
|------|------|
| 起手 | "完全延续给定参考帧"——桌面长相 100% 来自基准图 |
| 技术 | 9:16 / 1080×1920 / 24fps / iPhone 主摄 f2.0 / 自然光 / 无滤镜 / 微颗粒 / 真实皮肤毛孔 / 指甲短而不修边 / 呼吸级微抖 |
| 场景锁定 | 复述基准图每一个物件与位置，并明确"不许加、删、移动任何物件，不许改构图" |
| 角色 | **只到袖口，不许出现手腕以上**；灰=我、米白=她；每人只用右手；画面同时最多两只手 |
| 节拍 | 五拍时间码，动作全部可执行、字面因果 |
| 机位 | 固定 45° 俯拍、高 30cm、无任何运镜（**AI 默认爱推拉，必须明令禁止**） |
| 观感 | 单光源暖光+左侧冷补、真实接触阴影、纪实感、普通学生桌面、不打光美化 |
| 禁止项 | 脸/手臂/任何文字数字/**除一个叉一个勾以外的任何符号**/手机屏与 UI/多余手与手指/物件漂移/剪辑运镜/字幕水印/塑料皮肤 |

#### 生成参数（照着填）

| 参数 | 值 | 说明 |
|------|----|------|
| 时长 | **24s**（上限 30s，别顶满） | 留余量给模型收尾，顶满容易在最后一秒变形 |
| 首帧图 | `desk-main.jpg` | 一致性/参考强度**拉到最高** |
| 分辨率 | 1080×1920（9:16） | |
| 运动幅度 / 动态强度 | **中等偏低** | 长镜头动作一多就糊、手就变形；宁可动作慢半拍 |
| 随机种子 | **成功那次记下 seed** | 后续每条视频用同 seed，观感（颗粒/色彩/光线）最接近 |

#### 三个操作铁律

1. **一次出整条 24 秒**，不要中途切成两段——切了就漂移
2. 若某一拍出错（手指数量、物件挪位、画出多余符号）：**整条重跑，不要只修那一段**（修了必然接不上）
3. 失败率按 40% 预估，预留 **3-4 次重跑**；只在"桌面漂移 / 出现文字 / 手指数错"这三种情况下重跑，光影小差异可以接受

---

### 配音稿（24 秒 · 冷静嘴硬 + 轻微自嘲的年轻声 · 语速 0.95）

> "Day one of fourteen. I gave my straight-A roommate the power to reject my homework. I said I studied three hours. She asked — three hours of what? Rejected. No appeals. So I stopped counting hours and handed her the work instead. She flipped through it. Approved. Three points. Day one: me three, her zero. Fourteen days, highest score wins. Who's trying this with their roommate? Let me know."

> （14 天的第 1 天。我把驳回我作业的权力，交给了我那个全 A 室友。我说我学了三小时。她问——三小时的什么？驳回。不许申诉。所以我不再数小时了，我把做的东西交给她。她翻了翻。通过。三分。第一天：我三，她零。14 天，任务得分高者胜。谁想跟室友来一场？评论区说。）

> **"three hours of what?"** 是全片转折点：这里留 **0.4 秒停顿**（像被问住了），BGM 同步归零。

---

### 后期（只有叠加，没有修图）

| 项 | 做法 |
|----|------|
| 大字字幕 | 画面中下部（胸口位置），白色粗体+黑描边，逐句弹入；两句钩子字号最大 |
| 系列角标 | **"DAY 1 / 14"** 固定右上角，半透明，全季每集只改数字 |
| 关键数字 | 字幕里的 **"3 hrs"、"3 · 0"** 放大一号；**"WHAT?"** 单独加大、"?" 闪一下 |
| 音效 | 举三指无音效（留白）；**摆手时一声轻微"嗒"**（手掌擦桌）；画叉两道（第二道 75%）；推纸的摩擦声；**拨页声放大到 70%**（本片的隐藏爽点）；打勾一声轻"叮"；结尾敲桌两下对齐 beat |
| BGM | 低调 phonk 20%；**"what?" 那一下归零 0.4 秒** |
| 调色 | **不做**。最多统一一次亮度（±3 以内），不要套 LUT——一调色就和下一条对不上 |
| 结尾 | 定格 0.5 秒，让 "who's trying this? lmk" 有反应时间 |
| **不要做的** | 不要糊纸面、不要换手机屏、不要叠 UI、不要加转场——**画面一个字都不许修** |

**Caption**：`day 1 of 14. I told my straight-A roommate I studied 3 hours. she asked "3 hours of WHAT?" ... she was right 😭`
**置顶评论**：`she rejected "3 hours" and approved the actual work in the same minute. brutal but fair`
**标签**：#studytok #finalsweek #deadweek #collegelife #studymotivation

> 置顶评论故意把核心观念（时长 vs 成果）压成一句，而且 "brutal but fair" 会让两派人在评论区吵——一派觉得她太苛刻，一派觉得她说得对。

---

### 验收清单（这条不过关就别发）

**逻辑**
- [ ] 全片只讲 Day 1 当天的事：交权 → "3 小时"被驳 → 交实物 → 拨页认可 → 3 分
- [ ] 第一次被驳的理由**可视**：三根手指 + 她摆手，不是"莫名其妙不批"
- [ ] 通过的证据是**实物成果**（一叠用过的纸），不是时长、不是屏幕
- [ ] "解释"是**失败的**（摆手、画叉），没有演成申诉成功
- [ ] 计分只有一套：**任务 1-3 分制，我 3、她 0**，全部由字幕承担
- [ ] 角标 "DAY 1 / 14"，Day 1 = 14 days left
- [ ] **全片没有计时器、没有手机屏、没有任何字**

**生成质量（一次过，不修）**
- [ ] 桌面木纹、台灯、水杯、两支笔、纸堆位置与 `desk-main.jpg` 一致（逐帧比对）
- [ ] 任意时刻**最多两只手**，无第三只手、无多指、无融合、无手腕以上部位入画
- [ ] **纸面没有任何可读内容**：便签只有 ✗ 和 ✓；纸堆只有页边（放大 200% 也读不出任何字母/数字）
- [ ] 拨页三下时纸页成扇形，**平面从未转向镜头**
- [ ] 光线方向一致：暖光始终从左上来
- [ ] "举三根手指"正好三根（AI 高发错误）
- [ ] 手机全程屏幕朝下、没有亮屏
- [ ] 全片无运镜（无推拉、无变焦、无摇移）

**叙事一致性**
- [ ] 袖口对：我=深灰连帽衫、她=米白针织（全片不能混）
- [ ] 结尾是"你也想试"的邀请式 CTA（不是"求下载"）
- [ ] 全片没出现 app 名字、没出现具体日期或校名

**发布前**
- [ ] 钩子句在前 4 秒内说完，画面同步是"她接过便签、拿起红笔"
- [ ] "three hours of what?" 前后各留 0.4 秒空白，BGM 确实归零
- [ ] 产品引导已就位：**主页置顶 = V-M3 录屏流**，评论区问 app 名就回 "it's in my bio 🎯"
- [ ] 美东 19-22 点定时，TikTok 首发 → 24h 后 YT Shorts + IG Reels

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

| 日 | 视频素材 | 时长 | 美东 | 生成方式 |
|----|---------|------|------|---------|
| 周一 11/30 | V-M1 起源篇·14 天宣战 | **24s** | 19-22 | **一条提示词一次生成**（预留 3-4 次重跑） |
| 周二 12/1 | V-M2 差距羞辱（GA 日） | 15s | 19-22 | 一条提示词一次生成 |
| 周三 12/2 | V-M3 录屏静音流 | 15s | 12-13 或 19-22 | **不用 AI**（真实录屏 + CapCut） |
| 周四 12/3 | V-M4 陪审团驳回 | 18s | 19-22 | 一条提示词一次生成 |
| 周五 12/4 | V-M5 周末赌注 | 15s | 19-22 | 一条提示词一次生成 |
| 周六-日 | 连胜卡图集填充 | — | 平峰 | 不用 AI（图集） |

> **⚠️ 全季统一改成"一条提示词 = 一条片"（v10 起）**：不再拆镜头分段生成——分段必漂移（桌面物件挪位、光线变色、袖口换色），且漂移了没法后期修。每条片以基准图做首帧、一次生成到底，出错**整条重跑**。

**平台分发**：TikTok 首发 → 24h 后 YT Shorts + IG Reels（IG 上同时发图集版轮播，双版本 A/B 测格式）。周日批量生成（4 条 × 3-4 次重跑 ≈ 12-16 次），周一-周五每天只需 CapCut 叠字幕+配音 20 分钟。

## 一致性检查（每周视频发出前过一遍）

- [ ] 桌面物件与 `desk-main.jpg` 一致（笔/杯/台灯/纸堆位置没漂移）
- [ ] **袖口身份对**（我=深灰连帽衫 / 她=米白针织，每支视频都不能混）
- [ ] 比分与主表连续（**V-M1 从 me 3 : her 0 开局** → 后续每天只增不减，分差自然拉开）
- [ ] 倒计时数字正确（**day 1 = 14 days**：14 → 13 → 12 → 10）
- [ ] **一周视频一起过一遍**：四条片摆在一起看，桌面颜色/亮度不能有明显跳变
- [ ] **纸面零文字**：任何一帧放大 200% 都读不出字母、数字、汉字（只允许红 ✗ / 红 ✓）
- [ ] **无后期修图痕迹**：字幕干净、纸面没有糊斑、手机屏没有贴图错位
- [ ] 每支结尾都有 "lmk" 系 CTA
