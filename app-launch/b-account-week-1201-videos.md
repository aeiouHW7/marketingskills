# B 自律号 · GA 周简短小视频包（11/30 – 12/6 · 视频版）

> 配套：`b-account-week-1201.md`（叙事节拍/比分/人设卡的母本）+ `v1-ai-video-prompts.md` V2（场景基准照方案）。
> **本文档 = 周包每一天的视频实现版**：每天一条 12-18 秒简短小视频，书桌戏、无真人开口、AI 配音（ElevenLabs），LibTV 图生视频（基准照首帧，单次 ≤30s）。
> 人设/比分/倒计时**直接从周包母本取数**，不另起炉灶——视频版和图集版是同一故事的两种格式（视频发 TikTok/Shorts，图集版发 IG 轮播，双版本 A/B）。
> **⚠️ V-M1（2026-11-23 重做后）已改为新口径：倒计时 14 天（对齐 12/14 真实期末起点）+ 比分从 Season 1 零起点计（她 +13 让子）。后续 V-M2~V-M5 待按 V-M1 标准同步重写时，一并改用这套口径。**

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

**辩证分析（新叙事的一个必须处理的问题）**：
"带我进步"这个说法会**削弱对抗张力**——如果室友变成了辅导老师，比赛就不好看了。处理方法：**表面求进步，实际死要面子**——宣战的理由是"我需要有人盯着我"，但执行上必须是"她审批、她不给面子、分高者胜"。观众看出的是较劲，不是师徒。这是全篇的喜剧引擎，脚本里用"她审批我的每个任务 / 不许申诉"来实现。

**比分口径调整（重要，与周包母本不同）**：起源篇如果还写 `me 231 · her 244`，新观众会觉得是造假的中段数字。改为 **Season 1 从今天开始计分，她带 +13 分让子**（她十月就开始复习）：
- 视觉更干净：`her 13 · me 0`
- 张力不减：落后 13 分就是"她十月的努力 vs 我 14 天的挣扎"
- 后续四篇沿用这个新基线递增（V-M2 起同步改，不再用 231/244 系）

---

### 成品规格

**18 秒 ｜ 4 镜头 ｜ 竖屏 1080×1920 ｜ 无真人露脸（只有手） ｜ ElevenLabs 配音 ｜ BGM 低调 phonk 20%**

**配音稿**（约 16 秒，冷静嘴硬、略带自嘲的年轻声）：
> "Fourteen days until finals. I have done nothing. So I challenged my roommate — the straight-A one — to a season. She approves every task I claim. No appeals. She gets a thirteen-point head start. I get fourteen days. Who's cooked? Let me know."
> （距期末 14 天。我什么都没做。所以我向室友宣战——就是那个全 A 的——打一个赛季。我申报的每个任务都要她审批。不许申诉。她带 13 分让子。我只有 14 天。我完了吗？评论区说。）

### 全片统一的"手部身份证"（跨镜头一致性关键）

| 角色 | 袖口 | 手部饰品 | 用手 |
|------|------|---------|------|
| 我 | **深灰连帽衫袖口**（全程不换） | 无戒指 | 右手 |
| 她 | **米白针织开衫袖口**（全程不换） | 无戒指 | 右手 |

> 不露脸的前提下，**袖口就是角色身份**。这两件衣服要在整个赛季所有视频里保持一致——建议直接固定成"拍摄制服"，拍完不用洗回衣柜。

### 本集道具清单（拍前摆好，位置写死）

| 道具 | 位置 | 出现镜头 |
|------|------|---------|
| 摊开的笔记本（**左页全空白**——"什么都没准备"的视觉证据） | 桌面左半区中央 | 1, 3, 4 |
| 折好的纸条（宣战书，字迹拍不到） | 桌面中央 | 2 |
| 红色签字笔 | 桌面右侧 | 3 |
| 黑色笔 | 桌面左半区 | 4 |
| 手机（屏幕朝上，不显示可读内容） | 桌面右下角 | 4 |
| 台灯、水杯（场景固定件，位置不动） | 见基准照 | 全部 |

---

### 逐镜头

| 镜头 | 时长 | 首帧 | 画面动作（起→止） | 屏幕大字（后期） |
|------|------|------|------------------|----------------|
| 1 | 0-4s | desk-overhead.jpg | 灰袖手把笔记本**空白左页**翻过来又翻回去，两页都是白的；手指在空白页上敲两下 | **"14 days until finals. I've done nothing."** |
| 2 | 4-9s | desk-overhead.jpg | 灰袖手把折好的纸条推到桌面右侧，**米白袖手**入画拿起纸条（两双手不同时大幅动作） | **"so I challenged the straight-A roommate"** |
| 3 | 9-14s | desk-side.jpg | 米白袖手拿红笔在我的清单行上划两道**叉**，笔尖按得重；灰袖手在旁把纸压平（被驳回的无力感） | **"her approval or it doesn't count. no appeals."** |
| 4 | 14-18s | desk-lowangle.jpg | 灰袖手用黑笔在纸上写 "13 : 0"，写完笔尖点两下纸，手机屏亮起 | **"she starts +13. I get 14 days. who's cooked? lmk 👇"** |

#### Shot 1 提示词（复制粘贴用）

```
Image-to-video from the overhead desk reference photo (desk-overhead.jpg).
LOCK: keep the wooden desk surface, wood grain, lamp position at the left, mug position, all existing objects and the warm 3200K lamp lighting EXACTLY as in the reference photo. Do not add, remove, move or restyle anything. Do not change the camera framing. Do not create any new props.
SCENE: night study desk seen straight from above, open notebook in the left-center of frame, blank white pages.
ACTION: a right hand wearing a dark grey hoodie cuff and no rings enters from the bottom edge, flips one blank page over and back once with the fingertips (starts page flat blank, ends page flat blank), then taps the blank page twice with the index finger and stops.
CAMERA: locked overhead, only subtle handheld micro-shake, no pan, no zoom, no tilt.
LOOK: realistic hand skin texture, visible knuckle wrinkles, short natural nails, soft shadow from the lamp, natural uneven light falloff toward the right edge, mild film grain.
FORBID: no face, no second hand, no text, no handwriting, no logos, no watermark, no UI, no added objects, no brightness change.
```

#### Shot 2 提示词

```
Image-to-video from the overhead desk reference photo (desk-overhead.jpg).
LOCK: keep desk surface, wood grain, lamp at left, mug, notebook position and warm 3200K lighting EXACTLY as in the photo. Do not redesign the scene or reframe.
SCENE: night study desk from above; a small folded paper note rests at the center of the desk.
ACTION: a right hand with a dark grey hoodie cuff slides the folded note to the right side of the desk with two short pushes (starts note at center, ends note at right third of frame), holds for a beat then withdraws out of the right edge; after it leaves, a right hand with a cream knit sleeve enters from the right and picks the note up (starts note flat, ends note lifted out of frame). The two hands never move at the same time.
CAMERA: locked overhead, subtle handheld micro-shake only.
LOOK: realistic skin texture on both hands, realistic paper friction on the wood, warm lamp key light from the left, natural falloff, mild grain.
FORBID: no faces, no arms beyond the wrists, no simultaneous two-hand motion, no text, no legible writing, no logos, no watermark, no new objects.
```

#### Shot 3 提示词

```
Image-to-video from the side desk reference photo (desk-side.jpg).
LOCK: keep desk surface, props, mug, lamp at left and the warm 3200K lighting EXACTLY as in the photo. Do not move the camera.
SCENE: side view of a night study desk; an open notebook with a short blurred checklist lies in the foreground.
ACTION: a right hand with a cream knit sleeve holds a red pen and draws two heavy crossing strokes through one checklist line (starts pen above the line, ends two strokes drawn, pen lifting slightly), pressing firmly enough that the page dimples; a second hand with a dark grey hoodie cuff rests flat on the page edge and presses it down once (starts resting, ends pressing), staying still while the red pen works.
CAMERA: locked side view, subtle handheld micro-shake, no zoom.
LIGHT: single warm lamp key light from the left with natural falloff, cool screen bounce absent, soft shadow under the hands.
LOOK: realistic pen pressure denting the paper, red ink slightly bleeding into the paper fiber, realistic skin texture, mild grain.
FORBID: no faces, no full arms, no legible text or handwriting, no logos, no watermark, no camera movement beyond micro-shake.
```

#### Shot 4 提示词

```
Image-to-video from the low-angle desk reference photo (desk-lowangle.jpg).
LOCK: keep the flat phone, notebook, mug, lamp position and lighting EXACTLY as in the photo. Do not reframe or add objects.
SCENE: low angle across the desk at night, the phone lying face-up at the right, screen glowing softly with no readable content.
ACTION: a right hand with a dark grey hoodie cuff writes a short line on the paper with a black pen (starts pen on paper, ends pen lifted), then taps the pen tip on the paper twice decisively and holds still (ends static hold); the phone screen brightens softly during the taps.
CAMERA: very slow push-in of no more than 5% over the shot, subtle handheld micro-shake.
LIGHT: warm lamp key light from the left mixing with cool screen glow from the right as fill.
LOOK: realistic pen pressure, natural reflections on the phone glass, quiet defiant mood, mild grain.
FORBID: no face, no legible writing or numbers, no text, no logos, no watermark, no zoom beyond 5%.
```

> **双手镜头的止损规则**：Shot 2/3 如果重roll 两次仍有鬼畜或第三只手，改成单人版——Shot 2 只拍"灰袖手推走纸条后撤出"，Shot 3 只拍"米白袖手划叉"。剧情不损失，一致性更好拿。

---

### 后期（CapCut）

| 项 | 做法 |
|----|------|
| 大字字幕 | 五句按镜头时间点放画面中下部（胸口位置），白色粗体+黑色描边，逐句弹入 |
| 关键数字 | "14 days"、"13" 用放大一号字体单独强调（观众只记数字） |
| 音效 | 翻纸声、纸条摩擦、红笔划纸三道声音放大到 60%（ASMR 感是这个赛道的隐性钩子）；笔尖敲纸两次对齐 beat |
| 配音 | ElevenLabs 粘贴上面稿子，语速压到 0.95，句间留 0.3 秒 |
| BGM | 低调 phonk，20%；"No appeals" 那一下留 0.4 秒静音 |
| 结尾 | 最后一帧定格 0.5 秒，让 "who's cooked? lmk" 有反应时间 |

**Caption**：`14 days out and I've done literally nothing. so I made it her problem 😭`
**置顶评论**：`she said "fine, but I'm not going easy." I'm scared.`
**标签**：#studytok #finalsweek #deadweek #collegelife #studymotivation

---

### 验收清单（这条不过关就别发）

**生成质量**
- [ ] 桌面木纹、台灯位置、水杯位置与基准照一致（可截图与基准照并排比对）
- [ ] 只有一只手出镜（Shot 2/3 双手镜头除外，且不能出现第三只手）
- [ ] 手指数量正常、无融合、无多指
- [ ] 没有任何可读文字/乱码（所有文字后期加）
- [ ] 光线方向一致：暖光始终从左来

**叙事一致性**
- [ ] 袖口对：我=深灰连帽衫、她=米白针织（全片不能混）
- [ ] 倒计时数字=14，比分=她 13 : 我 0
- [ ] 结尾有 "lmk" 系 CTA
- [ ] 全片没出现 app 名字、没出现具体日期或校名

**发布前**
- [ ] 前 1.5 秒内出现"14 days"大字（完播率生死线）
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
- [ ] 比分与主表连续（**V-M1 她 13 : 我 0 新基线** → 后续同此口径递增）
- [ ] 倒计时数字正确（**day 1 = 14 days 起算**：14 → 13 → 12 → 10）
- [ ] 周二手持晨光版基准照已补拍
- [ ] 每支结尾都有 "lmk" 系 CTA
