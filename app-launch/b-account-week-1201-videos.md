# B 自律号 · GA 周简短小视频包（11/30 – 12/6 · 视频版）

> 配套：`b-account-week-1201.md`（叙事节拍/比分/人设卡的母本）+ `v1-ai-video-prompts.md` V2（场景基准照方案）。
> **本文档 = 周包每一天的视频实现版**：每天一条 12-18 秒简短小视频，书桌戏、无真人开口、AI 配音（ElevenLabs），LibTV 图生视频（基准照首帧，单次 ≤30s）。
> 人设/比分/倒计时**直接从周包母本取数**，不另起炉灶——视频版和图集版是同一故事的两种格式（视频发 TikTok/Shorts，图集版发 IG 轮播，双版本 A/B）。

## 〇、先决条件（同 V2 提示词包）

1. 4 张基准照已拍好存 `app-launch/scene-assets/`（desk-overhead / desk-side / desk-phone-closeup / desk-lowangle）
2. **补拍一张**：`desk-side-morning.jpg`（同一张桌子、同一机位、拉开窗帘的清晨冷光——周二那支用。桌子物件一点不动，只换光线）
3. 场景一致性铁律不变：**锁的是桌子和物件；光线可以按剧情换（夜=台灯暖光，晨=窗帘冷光），但物件位置一根笔都不能挪**

**每周生成量**：4 支 AI 视频（周三是纯录屏，不用 AI）× 3-4 镜头 ≈ 15 次生成，周日一次批量跑完。

---

## 周一 11/30 · V-M1【倒计时开局】⭐ 本周旗舰（15s · 3 镜头）

**叙事**：劣势追赶开局——"10 days until finals. we made it a competition."
**配音**（约 12s，冷静嘴硬男声/女声）：
> "Ten days until finals. We turned it into a competition. I'm twenty-three percent behind her. I have a plan. It's a bad plan. Who won? Let me know."
> （距期末10天。我们把它变成了比赛。我落后她23%。我有个计划。一个很烂的计划。谁赢了？评论区说。）

| 镜头 | 时长 | 首帧 | 画面动作 | 屏幕大字（后期） |
|------|------|------|---------|----------------|
| 1 | 0-5s | desk-overhead.jpg | 手把一张手写作战表拍在桌面中央（starts held above desk, ends flat），压上一支笔 | "10 days until finals. we made it a competition" |
| 2 | 5-10s | desk-side.jpg | 手在作战表上逐条打勾 2 次、写到第 3 条停住，笔尖悬停（ends pen hovering） | "my plan: ✅✅⬜ (day 1/10)" |
| 3 | 10-15s | desk-lowangle.jpg | 手机屏脉冲发光，手入画把手机往镜头方向推近半寸后撤出（ends hand withdrawn） | "me 231 · her 244. am I cooked? lmk 👇" |

**Shot 1 提示词**：
```
Image-to-video from the overhead desk reference photo. Keep desk, props, lamp and lighting exactly as in the photo, do not redesign anything.
Action: a hand enters from the bottom holding a handwritten study schedule sheet, places it flat in the center of the desk (starts held above desk, ends flat), then sets a pen on top of it and exits frame.
Camera: locked overhead, subtle handheld micro-shake, no panning.
Realistic hand skin texture, natural knuckle wrinkles, warm lamp light falloff, realistic paper physics (slight bend on placement), cozy late-night study mood, no readable text on the sheet (blur the handwriting), no watermark.
```
**Shot 2 提示词**：
```
Image-to-video from the side desk reference photo. Keep desk surface, props, mug, lamp and warm lighting exactly as in the photo.
Action: the hand ticks two checkboxes on the schedule sheet with quick confident strokes (starts unticked, ends two ticks drawn), then writes one more line and stops with the pen tip hovering above the paper (ends pen hovering, hand still).
Camera: locked side view, subtle handheld micro-shake.
Realistic pen pressure and paper indentation, warm lamp key light from the left with natural falloff, focused determined mood, handwriting stays blurred and unreadable, no watermark.
```
**Shot 3 提示词**：
```
Image-to-video from the low-angle desk reference photo. Keep the flat phone, notebook and lighting exactly as in the photo.
Action: the phone screen pulses with a soft bright glow (no readable text), then a hand slides the phone half an inch toward the camera and withdraws (starts hand off-screen, ends hand withdrawn, phone slightly closer).
Camera: very slow push-in toward the glowing screen, subtle handheld micro-shake.
Cool screen glow mixing with warm lamp light, realistic glass reflections, quiet competitive tension, no text, no watermark.
```

**Caption**：`she started studying for finals in OCTOBER. who does that 😭`
**置顶评论**：`update: she color-codes her notes. I color-code my panic.`
**标签**：#studytok #finalsweek #deadweek #collegelife #studymotivation

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
| 周一 11/30 | V-M1 倒计时开局 | 15s | 19-22 | 3 |
| 周二 12/1 | V-M2 差距羞辱（GA 日） | 15s | 19-22 | 3 |
| 周三 12/2 | V-M3 录屏静音流 | 15s | 12-13 或 19-22 | 0（纯后期） |
| 周四 12/3 | V-M4 陪审团驳回 | 18s | 19-22 | 4 |
| 周五 12/4 | V-M5 周末赌注 | 15s | 19-22 | 3 |
| 周六-日 | 连胜卡图集填充 | — | 平峰 | 0 |

**平台分发**：TikTok 首发 → 24h 后 YT Shorts + IG Reels（IG 上同时发图集版轮播，双版本 A/B 测格式）。周日批量生成全周镜头（13 次 AI 生成），周一-周五每天只需 CapCut 组装 20 分钟。

## 一致性检查（每周视频发出前过一遍）

- [ ] 桌面物件与基准照一致（笔/杯/台灯位置没漂移）
- [ ] 比分与主表连续（V-M1 231:244 → V-M2 233:252 → V-M4 不变 → V-M5 236:261）
- [ ] 倒计时数字正确（day 1 → 2 → 3 → 5 / 10）
- [ ] 周二手持晨光版基准照已补拍
- [ ] 每支结尾都有 "lmk" 系 CTA
