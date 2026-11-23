# V1《成瘾方法》AI 直出提示词包

> 配套脚本：`scripts-account-a-b.md` 二·七 V1。本文档把 25 秒脚本拆成 AI 可直接生成的镜头提示词。
>
> **生成工具**：内置视频生成（写完提示词一键出片）或外部工具（即梦/Kling/Veo/Sora/Runway，提示词直接粘贴可用，英文版效果最好）。

## 一、生成策略（先读这个）

**AI 直出不等于 25 秒一次生成**——当前视频模型单次最稳 4-15 秒，且有三条硬约束：

| 约束 | 应对 |
|------|------|
| 复杂文字必乱码 | 所有屏幕大字/字幕 **不在生成时出现**，全部 CapCut 后期加（这也正是脚本设计——字幕本来就要放胸口位置） |
| App 界面无法精确还原 | 镜头 3/5 的手机屏内容用**截图+CapCut 叠画**做，AI 只生成"手持手机+屏幕发光"的物理动作 |
| 单条运动 ≤1-2 种 | 每个提示词只保留 1 种镜头运动 + 1 种主体动作 |

**分工表**：

| 镜头 | AI 生成 | 后期（CapCut） |
|------|--------|---------------|
| 1 扣手机 | ✅ 俯拍动作 | 加大字 + 配音 |
| 2 十分钟启动 | ✅ 侧面写字 | 加大字 + 配音 |
| 3 认证审判 | ✅ 手持手机+摊手（屏幕留白发光） | 叠 app 界面截图动画（Pending→REJECTED）+ 大字 + 配音 |
| 4 成瘾循环 | ✅ 快速书写推进 | 叠 ✅ 弹出动画 + 比分 +100 特效 + 大字 + 配音 |
| 5 比分收尾 | ✅ 手机屏发光缓慢推进 | 叠比分截图 + 大字 CTA + 配音 |

**预算参考**：4 条 AI 片段（每条 5-6 秒），内置生成约消耗 200-400 积分；外部工具同理按条计费。预留 10% 失败率，失败的单独重roll。

## 二、逐镜头提示词（英文版为主，中文对照）

> 统一规格：**9:16 竖屏，24fps，写实生活感，浅景深，暖色台灯光（3200K），夜自习氛围**。同一书桌贯穿全部镜头（后期拼接才连贯）。

### Shot 1 · 扣手机（3s）

```
Vertical 9:16, 24fps, realistic smartphone footage look, shallow depth of field.
Overhead top-down shot of a warm wooden study desk at night. Foreground: a closed textbook and an open snack bag. Background: soft lamp glow, blurred bookshelf.
A young hand enters from bottom, places a smartphone face-down on the desk firmly, then pushes the snack bag out of frame to the right.
Camera locked overhead, no camera movement. Single warm desk lamp light from upper left, 3200K, cozy night-study mood.
Cozy realistic late-night study vlog style, no text, no watermark.
```

中文：竖屏 9:16，写实手机拍摄质感，浅景深。夜晚暖木书桌正上方俯拍，前景合上的课本和拆开的零食袋，背景台灯柔光虚化书架。一只手从下方入画，把手机屏幕朝下扣在桌上，再把零食袋推出画面右侧。镜头完全固定，单一暖色台灯从左上打光，夜自习氛围。无文字无水印。

### Shot 2 · 十分钟启动（5s）

```
Vertical 9:16, 24fps, realistic smartphone footage look, shallow depth of field.
Side close-up of the same warm wooden desk at night. A smartphone lying face-up with a bright timer screen (screen content overexposed glow, no legible text), next to a thick open textbook.
A hand opens the book wider, picks up a pen and starts writing notes steadily. Fingers adjust grip naturally.
Camera locked side view. Warm desk lamp from left, 3200K, focused studying mood, slight steam from a coffee mug in blurred background.
Realistic study-with-me aesthetic, no text, no watermark.
```

中文：竖屏 9:16，写实质感，浅景深。同一书桌侧面近景：手机平放屏幕朝上（屏幕过曝发光、无可见文字），旁边摊开的厚课本。一只手翻开书页、拿笔开始稳定书写，手指自然调整握姿。镜头固定侧面，台灯暖光从左侧来，背景虚化处一杯冒热气的咖啡。真实 study-with-me 氛围。无文字无水印。

### Shot 3 · 认证审判（6s，物理部分）

```
Vertical 9:16, 24fps, realistic smartphone footage look, shallow depth of field.
Extreme close-up: a hand holds a smartphone upright facing the camera, screen glowing bright white-blue (screen shows only a soft glowing blank interface, no readable text). The desk lamp bokeh in background.
The hand holds the phone still for two seconds, then slowly turns palm-up away from camera in a helpless shrug gesture, phone tilting with it.
Camera locked, very subtle slow push-in within 10%. Single cool screen-glow key light on the hand mixed with warm lamp rim light.
Dramatic trial-like tension, realistic feel, no text, no watermark.
```

中文：竖屏 9:16，写实质感。大特写：手持手机竖立面向镜头，屏幕发出白蓝光（界面只是柔和发光的空白，无可读文字），背景台灯光斑虚化。手持稳两秒后，缓慢翻转成掌心向上的摊手无奈姿势。镜头锁定，仅 10% 内缓慢推进。屏幕冷光为主光混暖色台灯轮廓光，审判般的紧张感。无文字无水印。

### Shot 4 · 成瘾循环（5s）

```
Vertical 9:16, 24fps, realistic smartphone footage look, shallow depth of field.
Close-up of the same desk: a hand writing in a notebook energetically, pages slightly rustling, pen strokes quick and confident. A smartphone face-up beside with bright glowing screen (no readable text).
Very slow camera push-in toward the writing hand over 5 seconds. Warm desk lamp key light from left, 3200K.
Motivated late-night study grind mood, realistic aesthetic, no text, no watermark.
```

中文：竖屏 9:16，写实质感。同一书桌近景：手在笔记本上快速自信地书写，纸页微响，旁边手机屏幕朝上发光（无可读文字）。镜头 5 秒内朝书写的手缓慢推进。台灯暖光从左侧主光。深夜苦学上头的氛围。无文字无水印。

### Shot 5 · 比分收尾（6s）

```
Vertical 9:16, 24fps, realistic smartphone footage look, shallow depth of field.
Night study desk seen from a low angle: the smartphone lies flat on the desk, screen glowing upward with a bright score interface (overexposed glow, no readable text). Notebook and pen resting beside it.
Camera slowly pushes down and in toward the glowing phone screen over 6 seconds, ending slightly above the screen. Warm lamp light, cool screen glow as secondary light.
Quiet competitive tension, cliffhanger ending mood, realistic feel, no text, no watermark.
```

中文：竖屏 9:16，写实质感。低角度夜自习书桌：手机平放、屏幕朝上发出明亮比分界面光（过曝无可读文字），笔记本和笔在旁。镜头 6 秒缓慢下沉推进至手机屏上方收尾。台灯暖光+屏幕冷光双光源。安静的较劲张力、悬念收尾氛围。无文字无水印。

## 三、CapCut 组装清单（AI 片段 → 成片）

1. **拼接**：5 条片段按 3s/5s/6s/5s/6s 排入时间轴（AI 生成多余的帧剪掉）
2. **屏幕内容**：镜头 3 叠 app 界面截图动画（Pending 1.5s → REJECTED 弹出+红框抖动 0.5s）；镜头 5 叠比分截图 `me 236 · her 261`
3. **大字字幕**（脚本逐镜头英文+时间点，放画面中下部胸口位置，白字黑描边）：
   - 0-3s "I stopped needing motivation to study."
   - 3-8s "step 1: 10 minutes. not 3 hours."
   - 8-14s "step 2: she has to approve it. no appeals."
   - 14-19s "every approval = dopamine. I'm hooked."
   - 19-25s "she's still winning. day 3/10. who won? lmk 👇"
4. **配音**：ElevenLabs 粘贴二·七节的 5 段英文配音稿（冷静略毒年轻声），逐段对齐镜头
5. **特效**：镜头 3 REJECTED 弹出时加轻微 zoom punch + 红色描边闪烁；镜头 4 比分 +100 用 CapCut 文字动画
6. **BGM**：低调 phonk，音量 20%，REJECTED 弹出那拍留 0.3s 静音（ Beat drop）
7. **导出**：1080×1920，30fps，发布走二·七节的时刻表

## 四、生成方式

**方式 A：跟我说"生成镜头 1"**（需先配置红狐 API Key：redfox.hk 注册 → 拿 `ak_xxx` → 告诉我，我帮你写入环境变量）——我按上面提示词逐条生成 MP4 存到本地，你直接进 CapCut 组装。

**方式 B：外部工具**（即梦/Kling/Veo/Sora）——把每条英文提示词原样粘贴，9:16、5-6 秒、每条单独生成。失败率高的话按技能诊断规则：运动减到 1 种、或把"slow push-in"删掉改固定镜头。
