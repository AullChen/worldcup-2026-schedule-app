# Deployment

## GitHub Pages

This repository includes `.github/workflows/pages.yml`.

After pushing to GitHub:

1. Open the repository on GitHub.
2. Go to `Settings -> Pages`.
3. Set `Source` to `GitHub Actions`.
4. Push to `main` or run the workflow manually.
5. Open `https://<owner>.github.io/<repo>/`.

If the repository is named `<owner>.github.io`, the site URL is `https://<owner>.github.io/`.

GitHub Pages is static hosting. It can serve the exported app and `data/sync-cache.json`, but it cannot run the `/api/sync` Worker endpoint directly.

## Static Data Refresh

The Pages workflow wakes every 5 minutes. `scripts/should-refresh-data.mjs` gates the expensive build/deploy work so it only continues during match refresh windows or the daily 00:00/12:00 UTC refresh.

GitHub scheduled workflows are not guaranteed to run at the exact cron minute. The refresh gate therefore uses a 29-minute tolerance window by default, which may produce repeated cache refreshes near a scheduled checkpoint but is less likely to miss post-kickoff updates.

If public data sources are unreachable during the workflow, `scripts/refresh-sync-cache.mjs` writes a fallback cache and exits successfully. The app still works from the built-in schedule and browser localStorage cache.

## Optional Worker Backend

For real-time sync from the browser, deploy the Worker endpoint separately and point the frontend at it.

Good free or low-friction options:

- Cloudflare Workers
- Cloudflare Pages Functions
- Deno Deploy
- Netlify Functions
- Vercel Functions

Cloudflare Workers is the closest fit because `worker/index.js` already exports a Worker-style `fetch(request, env, ctx)` handler.

When adding a hosted API endpoint, keep provider API keys in the platform's secret manager. Do not commit secrets to this repository.
