# 2026 World Cup Schedule App

一个无框架单页应用，用于查看 2026 FIFA World Cup 赛程、同步公开比分、模拟比赛结果、推导小组出线和淘汰赛路径。

## 功能

- 104 场比赛：72 场小组赛 + 32 场淘汰赛，内置开球时间、场馆、分组和淘汰赛种子路径。
- 本地缓存：同步结果、预测比分、淘汰赛候选选择和页面偏好会写入 `localStorage`，二次打开优先读取缓存。
- 多语言界面：右上角可在中文、English、Español 之间切换，界面文案和球队名会一起切换，并显示旗帜和球队缩写。
- 冠军庆祝：每个浏览器会话首次打开时展示西班牙夺冠庆祝层，包含礼花、奖杯、国旗与冠军球员画面；支持减少动态效果的系统设置。
- 夺冠回顾：独立页面逐场展示西班牙从小组赛到决赛的 8 场比赛、比分、进球球员、场馆、比赛叙事和资料来源。
- `What if...` 全赛程模拟：从六大区的 93 场简化预选赛开始，继续模拟 72 场世界杯小组赛与 32 场淘汰赛；上游结果改变后会清理失效的后续比分。
- 小组赛视图：支持按比赛时间或按分组排列。
- 淘汰赛视图：从 32 强到决赛的阶梯式轮次排布，支持 `+` / `-` 缩放和拖拽移动画布；未确定席位会根据已有结果/预测列出候选球队。
- 淘汰赛预测联动：后续轮次选择会同步到上游来源路径；如果上游结果让球队出局，后续不可能的预测会自动清理。32 强对阵同步为真实球队后，页面会移除对应自选候选。
- 详情弹窗：显示状态、比分、阶段、精确开球时间、场馆、球队 FIFA 排名、数据来源和逐事件信息。
- 数据榜单：根据同步源提供的事件数据汇总进球、助攻、黄牌、红牌、换人、点球、球队牌数；并根据比分汇总球队进球。
- GitHub Pages：构建时导出静态 `dist/index.html`、图片资源和 `dist/data/sync-cache.json`，并通过 GitHub Actions 部署。

## 冠军回顾资料与图片

冠军路径使用项目内置的静态赛后资料，不依赖比分 API 才能显示。比赛结果的主要参考链接会直接展示在回顾页面底部，包括 FIFA 决赛战报、淘汰赛对阵表和完整赛果汇总。

`assets/spain-champions-hero.png` 与 `assets/spain-champions-portraits.png` 是为本项目生成的原创编辑性图片，不是从第三方图库复制的素材。页面中的外部比赛资料仅以链接形式引用。

“如果……”中的预选赛是面向完整模拟体验的简化赛制：保留六大洲足联与各区晋级名额，但不逐轮复刻各足联实际使用的全部预选赛规则。世界杯小组赛和淘汰赛阶段仍按 48 队、12 组和 32 队淘汰赛推进。

## 本地运行

校验和构建：

```sh
npm run build
npm run validate
```

本地快速预览 Worker：

```sh
node --input-type=module -e "import worker from './worker/index.js'; import http from 'node:http'; http.createServer(async (req,res)=>{const r=await worker.fetch(new Request('http://localhost:8787'+req.url,{method:req.method}),{},{}); res.writeHead(r.status,Object.fromEntries(r.headers)); res.end(Buffer.from(await r.arrayBuffer()));}).listen(8787,()=>console.log('http://127.0.0.1:8787'))"
```

然后访问 `http://127.0.0.1:8787`。

## GitHub Pages 部署

1. 将项目推送到 GitHub 仓库，默认分支建议使用 `main`。
2. 在 GitHub 仓库里进入 `Settings -> Pages`。
3. 在 `Build and deployment` 下将 `Source` 设置为 `GitHub Actions`。这是必须步骤，否则 `.github/workflows/pages.yml` 不会作为 Pages 发布源。
4. 推送到 `main`，或进入 `Actions -> Deploy GitHub Pages -> Run workflow` 手动触发一次部署。
5. 工作流完成后，在 `Settings -> Pages` 点击 `Visit site` 查看站点。

部署完成后的默认访问地址：

- 项目站点：`https://<你的 GitHub 用户名或组织名>.github.io/<仓库名>/`
- 用户或组织站点：如果仓库名是 `<用户名>.github.io`，访问地址是 `https://<用户名>.github.io/`

## GitHub Actions 刷新策略

`.github/workflows/pages.yml` 会在以下场景运行：

- `push` 到 `main`：完整构建并部署。
- `workflow_dispatch`：手动完整构建并部署。
- `schedule`：每 5 分钟唤醒一次，但先由 `npm run refresh:check` 判断是否命中刷新窗口。

刷新窗口包括：

- 每场比赛开赛后 5/30/60/90/120 分钟。
- 淘汰赛额外包括 150/180/210 分钟，以覆盖加时和点球大战后的结果更新。
- 从首场比赛前一天到决赛后第二天期间，每天 00:00 和 12:00 UTC 固定刷新。

GitHub 的定时任务不是严格准点执行，可能延迟或在高负载时跳过。为减少错过比赛刷新点的概率，`scripts/should-refresh-data.mjs` 默认使用 29 分钟容错窗口；这可能让同一个刷新点附近出现多次构建，但比漏掉关键比分更新更可靠。

## 静态 Pages 与实时同步

GitHub Pages 只托管静态文件，没有常驻服务端接口。页面点击“联网更新”时会先尝试 `/api/sync`，在 Pages 环境不可用时会读取 `data/sync-cache.json`，再结合浏览器本地缓存显示。

如果需要点击“联网更新”就实时抓取数据，可以额外部署 Worker 后端：

- Cloudflare Workers：有免费额度，适合部署 `worker/index.js` 这种轻量 fetch 代理。
- Cloudflare Pages Functions：也可在免费额度内提供动态接口。
- 其他支持服务端 `fetch` 的平台也可以，只要把前端请求代理到同样的同步逻辑。

## 数据源说明

内置赛程骨架来自 FIFA 官方赛程和 FIFA World Cup 26 Regulations。同步时按以下顺序尝试：

1. FIFA official fixtures page
2. ESPN public scoreboard API

完整进球、助攻、换人、红黄牌等逐事件数据通常需要授权体育数据 API。本项目会展示同步源实际提供的数据，不会自行编造球员事件。

## 关键文件

- `worker/index.js`：页面、赛程数据、同步 API、预测和规则计算。
- `docs/deployment.md`：GitHub Pages 和可选 Worker 后端部署说明。
- `scripts/build.mjs`：生成 Worker 产物和 GitHub Pages 静态产物。
- `scripts/export-static.mjs`：导出 `dist/index.html`、静态数据文件和图片资源。
- `assets/`：冠军庆祝与回顾页面使用的原创图片。
- `scripts/should-refresh-data.mjs`：判断定时任务是否命中比赛/每日刷新窗口。
- `scripts/refresh-sync-cache.mjs`：构建期刷新静态同步缓存。
- `.github/workflows/pages.yml`：GitHub Pages 部署工作流。

## 开源协作

- `LICENSE`：MIT License。
- `CONTRIBUTING.md`：贡献流程和本地校验命令。
- `SECURITY.md`：安全问题报告方式。
- `CODE_OF_CONDUCT.md`：项目行为准则。
