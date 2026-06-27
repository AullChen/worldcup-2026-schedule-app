# 2026 World Cup Schedule App

一个无框架单页应用，用于查看 2026 FIFA World Cup 赛程、同步公开比分、模拟结果、推导小组出线和淘汰赛路径。

## 功能

- 104 场比赛：72 场小组赛 + 32 场淘汰赛。
- 联网同步：Worker 部署时通过 `/api/sync` 抓取 FIFA 官方赛程页，失败后尝试 ESPN public scoreboard。
- 本地缓存：同步结果、预测比分、淘汰赛候选选择和页面偏好会写入 `localStorage`，二次打开优先读取缓存。
- 多语言球队名：页面右上角可在中文、English、Español 之间切换国家/地区名称，并显示旗帜和球队缩写。
- 小组赛视图：支持按比赛时间或按分组排列。
- 淘汰赛树：提供从 32 强到决赛的阶梯式轮次排布，使用 `+` / `-` 缩放，并支持拖拽移动画布；未确定席位会根据已有结果/预测列出候选球队，便于继续模拟。
- 淘汰赛预测联动：先选择后续轮次球队时会沿来源路径同步到上游候选；若上游预测让球队出局，后续胜者路径会自动清理该球队。
- 详情弹窗：显示状态、比分、阶段、日期、场馆、球队 FIFA 排名、数据来源和逐事件信息。
- 数据榜单：根据同步源提供的事件数据汇总进球、助攻、黄牌、红牌、换人、点球、球队牌数；并根据比分汇总球队进球。
- GitHub Pages：构建时导出静态 `dist/index.html`，并通过 GitHub Actions 部署。

## 运行与验证

```sh
npm run build
npm run validate
```

本地快速预览 Worker：

```sh
node --input-type=module -e "import worker from './worker/index.js'; import http from 'node:http'; http.createServer(async (req,res)=>{const r=await worker.fetch(new Request('http://localhost:8787'+req.url,{method:req.method}),{},{}); res.writeHead(r.status,Object.fromEntries(r.headers)); res.end(Buffer.from(await r.arrayBuffer()));}).listen(8787,()=>console.log('http://127.0.0.1:8787'))"
```

## GitHub Pages 部署

`.github/workflows/pages.yml` 会在 push 到 `main`、手动触发和定时触发时：

1. 定时触发先执行 `npm run refresh:check`。它每 5 分钟被唤醒一次，但只在命中刷新窗口时继续。
2. 刷新窗口包括：每场比赛开赛后 5/30/60/90/120 分钟；淘汰赛额外包括 150/180/210 分钟；以及开幕式到决赛后第二天期间每日 00:00/12:00 UTC。
3. 命中窗口后执行 `npm run build` 生成 `dist/`。
4. 执行 `npm run refresh:data`，尽力刷新 `dist/data/sync-cache.json`。
5. 将 `dist/` 发布到 GitHub Pages。

GitHub Pages 是静态环境，没有服务端 `/api/sync`。页面会先尝试 `/api/sync`，不可用时读取 `data/sync-cache.json`，并继续使用浏览器本地缓存。若需要点击“联网更新”实时拉取数据，建议部署为 Worker 或其他支持服务端 fetch 的环境。

部署完成后的默认访问地址：

- 项目站点：`https://<你的 GitHub 用户名或组织名>.github.io/<仓库名>/`
- 如果仓库名是 `<用户名>.github.io`，则是用户站点：`https://<用户名>.github.io/`
- 也可以在仓库 `Settings -> Pages` 里点击 `Visit site` 查看最终地址。

如果要让“联网更新”实时可用，推荐把 Worker 部署到 Cloudflare Workers 或 Cloudflare Pages Functions 的免费额度内，然后让 GitHub Pages 前端请求这个 Worker 代理接口。GitHub Pages 本身只托管静态文件，不提供常驻服务端接口。

## 数据源说明

内置赛程骨架来自 FIFA 官方赛程和 FIFA World Cup 26 Regulations。点击“联网更新”时，Worker 按以下顺序尝试：

1. FIFA official fixtures page
2. ESPN public scoreboard API

完整进球、助攻、换人、红黄牌等逐事件数据通常需要授权体育数据 API。本项目会展示同步源实际提供的事件，不会自行编造球员事件。

## 关键文件

- `worker/index.js`：页面、赛程数据、同步 API、预测和规则计算。
- `docs/deployment.md`：GitHub Pages 和可选 Worker 后端部署说明。
- `scripts/build.mjs`：生成 Worker 产物和 GitHub Pages 静态产物。
- `scripts/build.sh`：Unix 环境下调用 Node 构建脚本的薄包装。
- `scripts/export-static.mjs`：导出 `dist/index.html` 和静态数据文件。
- `scripts/should-refresh-data.mjs`：判断 GitHub Pages 定时任务是否命中比赛/每日刷新窗口。
- `scripts/refresh-sync-cache.mjs`：构建期刷新静态同步缓存。
- `.github/workflows/pages.yml`：GitHub Pages 部署工作流。

## 开源协作

- `LICENSE`：MIT License。
- `CONTRIBUTING.md`：贡献流程和本地校验命令。
- `SECURITY.md`：安全问题报告方式。
- `CODE_OF_CONDUCT.md`：项目行为准则。
