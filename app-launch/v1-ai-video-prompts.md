# V1《成瘾方法》AI 直出提示词包 V2

> 配套脚本：`scripts-account-a-b.md` 二·七 V1。
> 工具链：**LibTV 视频**（单次最长 30 秒）。红狐只是视频网站爬取 API，不用于生成。
>
> **V2 核心变化**（2026-11-23）：从"纯文字生成"改为**"真实书桌基准照 + 图生视频"**——解决两个致命问题：跨视频场景一致性（长期运营）+ 减少 AI 感（场景是真实拍摄，只有动作是 AI 驱动）。
>
> ---
>
> **⚠️ V3 更新（2026-11-24）——本文档的生成方式已被取代，执行请以 `b-account-week-1201-videos.md` 的 V-M1 v10 为准**：
> 1. **不再分段生成**：整条片 = **一条提示词 + 一次生成**（分段必漂移，且没法后期修）
> 2. **纸面彻底零文字**：便签只出现她的红 ✗ / 红 ✓，笔记本**只给页边、只翻不看**——生成阶段就没有文字，**不需要任何后期模糊**
> 3. **桌面基准图改为 AI 生成**（4 张，一张主图派生出其余机位），提示词在 V-M1「桌面基准图」节
> 4. 本文档保留作为**场景资产思路的来源**，其"分镜头提示词"部分不要再照抄。

## 一、场景资产档案（Scene Bible）——先做这个，一次投入长期复用

**规则：所有镜头都在同一张真实书桌上拍。这张桌子就是你的"片场"，和 A/B 号人设一样是固定资产。**

### 1.1 基准照（今天拍，存到 `app-launch/scene-assets/`）

用手机拍 4 张：

| 编号 | 拍法 | 用途 |
|------|------|------|
| `desk-overhead.jpg` | 正俯拍（手机举在桌子上方正上方） | 镜头 1（扣手机）首帧 |
| `desk-side.jpg` | 侧面 45 度平视 | 镜头 2/4（写字）首帧 |
| `desk-phone-closeup.jpg` | 手持手机怼拍角度 | 镜头 3（审判）首帧 |
| `desk-lowangle.jpg` | 桌面低角度拍手机 | 镜头 5（收尾）首帧 |

**拍照要求（决定所有视频的质感底子）**：
- 开你平时学习时的那盏灯，按真实状态拍，不要特意收拾
- 桌上保留"生活痕迹"：一支用过的笔、微微卷角的便签、水杯——完美桌面反而是 AI 感
- 拍稳、对焦清楚、别开美颜滤镜
- 光线定死一种（推荐开台灯的夜晚状态），以后所有视频都在这个光线下生成

### 1.2 场景卡（拍照后填写，写进每个提示词的固定段）

```
【桌面】材质：____（胡桃木纹/白色烤漆/…）
【固定物件·永不换】台灯（位置：左/右）：____；水杯：____；常用笔：____
【轮换物件】当集道具：零食袋/咖啡/便签堆（每条视频可以换，换完重拍基准照更新档案）
【光源】类型：____（台灯/顶灯/台灯+屏幕光）；方向：____；色温：____（暖黄~3400K）
【背景】桌子后方是什么：____（书架/白墙/窗户+窗帘）
【时段】所有视频统一在____拍基准照（夜自习氛围）
```

### 1.3 一致性铁律

1. **同一赛季内桌子不许变**——观众刷到两条视频，桌面必须一模一样，这是"同一个人同一张桌子"的视觉证据（人设连续性的一部分）
2. **换道具=更新档案**：加/减桌上大件后，重拍基准照替换 `scene-assets/`，场景卡同步改
3. **基准照即片场**：换手机、换灯都要重拍全套 4 张

## 二、生成工作流（LibTV，单次 ≤30 秒）

**图生视频模式**：每个镜头 = 基准照做首帧 + 动作提示词。文字只负责"动起来"，不负责"长什么样"——画面长相由真实照片锁定。

| 镜头 | 首帧参考图 | 生成时长 |
|------|-----------|---------|
| 1 扣手机 | desk-overhead.jpg | 5s |
| 2 十分钟启动 | desk-side.jpg | 6s |
| 3 认证审判 | desk-phone-closeup.jpg | 6s |
| 4 成瘾循环 | desk-side.jpg | 5s |
| 5 比分收尾 | desk-lowangle.jpg | 6s |

> 30 秒上限意味着也可以把镜头 1+2 合成一条 12s 生成——但一次生成里切换动作成功率低，**先按逐镜头跑稳，后期再考虑合并省次数**。

**防 AI 感四件套**（写进每条提示词，缺一不可）：
1. `subtle handheld camera micro-shake`（手持微抖——AI 默认运镜太"滑"，一眼假）
2. `realistic hand skin texture, natural knuckle wrinkles`（手的真实皮肤质感，AI 手最露馅）
3. `natural uneven lighting falloff, slight film grain`（光线自然衰减、轻微颗粒——拒绝无菌棚光）
4. `imperfect real props`（道具带使用痕迹：卷角便签、笔帽没盖严）

**时序红线**：翻页/放下/推走这类动作提示词里写明"起止状态"（如 "starts off-screen, ends flat face-down"），防止 AI 中途鬼畜。

## 三、逐镜头图生视频提示词（英文为主）

### Shot 1 · 扣手机（首帧：desk-overhead.jpg，5s）

```
Image-to-video from the overhead desk reference photo. Keep the desk, props, lamp position and lighting exactly as in the photo, do not redesign anything.
Action: the hand enters from the bottom of frame holding a smartphone, presses it firmly face-down onto the center of the desk (starts off-screen, ends flat face-down), then the same hand slides the snack bag off the right edge of the desk and exits frame.
Camera: locked overhead, subtle handheld micro-shake only, no panning.
Realistic hand skin texture, natural knuckle wrinkles, natural uneven lamp-light falloff, realistic paper physics, cozy late-night study mood, no text, no watermark.
```

### Shot 2 · 十分钟启动（首帧：desk-side.jpg，6s）

```
Image-to-video from the side desk reference photo. Keep desk surface, props, mug, lamp and warm lighting exactly as in the photo.
Action: the hand flips open the textbook two more pages (starts half-open, ends open flat), then picks up the pen resting beside the notebook and writes 3-4 short lines steadily; fingers naturally adjust grip once mid-way. The phone stays face-up untouched beside the book, screen glowing softly without readable text.
Camera: locked side view, subtle handheld micro-shake, very slow breathing zoom within 5%.
Realistic skin texture, realistic pen pressure and paper indentation, natural warm lamp light falloff from the left, focused night-study mood, no text, no watermark.
```

### Shot 3 · 认证审判（首帧：desk-phone-closeup.jpg，6s）

```
Image-to-video from the phone close-up reference photo. Keep the hand position, phone orientation and background bokeh exactly as in the photo.
Action: the hand holds the phone almost still for two seconds (screen glows soft blue-white, no readable text), then slowly rotates the wrist to turn palm-up in a helpless shrug, the phone tilting with the hand until its screen faces slightly upward (starts upright, ends palm-up tilted).
Camera: locked close-up, subtle handheld micro-shake, no movement.
Cool screen glow as key light on fingers mixed with warm lamp rim light from behind, realistic skin texture and fingernail detail, shallow depth of field, quiet trial-like tension, no text, no watermark.
```

### Shot 4 · 成瘾循环（首帧：desk-side.jpg，5s）

```
Image-to-video from the side desk reference photo. Keep desk, props and lighting exactly as in the photo.
Action: the same hand writes faster and more confidently, flipping one page mid-way with a quick natural page turn, then taps the phone screen once with the pen tip (starts writing, ends tapping phone once).
Camera: slow push-in toward the writing hand over 5 seconds with subtle handheld micro-shake.
Realistic pen pressure, slight paper lift during page flip, warm lamp key light from left with natural falloff, energetic late-night grind mood, no text, no watermark.
```

### Shot 5 · 比分收尾（首帧：desk-lowangle.jpg，6s）

```
Image-to-video from the low-angle desk reference photo. Keep the flat phone, notebook and lighting exactly as in the photo.
Action: the phone screen glows brighter softly (pulsing glow, no readable text), a hand rests the pen down beside the notebook and goes still (starts holding pen, ends pen resting on desk, hand withdrawn).
Camera: very slow descent and push-in toward the glowing screen over 6 seconds, subtle handheld micro-shake, ending slightly above the screen.
Warm lamp light mixing with cool screen glow as secondary light, realistic reflections on the phone glass, quiet competitive tension, cliffhanger mood, no text, no watermark.
```

## 四、纯文字提示词（备用——拿不到基准照时才用）

> 仅作兜底。文字生成的桌面无法跨视频一致，长期运营必须回到图生视频方案。

每条在 V1 文字版基础上追加统一"真实感段"：
`shot on a real smartphone, slight handheld micro-shake, realistic skin texture, imperfect used props (worn pen, curled sticky notes), natural uneven lamp falloff, slight film grain, no sterile studio look, no text, no watermark`

## 五、CapCut 组装清单（沿用 V1）

1. 5 条片段按 3s/5s/6s/5s/6s 剪入时间轴
2. 镜头 3 叠 app 截图动画（Pending 1.5s → REJECTED 弹出+红框抖动）；镜头 5 叠比分截图 `me 236 · her 261`
3. 大字字幕五句按时间点放胸口位置（白字黑描边）
4. ElevenLabs 配音逐段对齐（稿子在二·七节）
5. REJECTED 弹出那拍 BGM 留 0.3s 静音做 beat drop；BGM phonk 音量 20%
6. 导出 1080×1920 30fps

## 六、执行顺序（今天到开拍）

1. **今天**：拍 4 张基准照 → 填场景卡 → 存 `app-launch/scene-assets/`
2. **生成**：逐镜头图生视频（LibTV ≤30s，每条 5-6s），失败重roll时只调动作词、不动场景描述
3. **组装**：CapCut 按第五节清单拼装
4. **数据**：发出去看完播率，AI 感重就加微抖/降饱和，一致性问题就查基准照是否过期
