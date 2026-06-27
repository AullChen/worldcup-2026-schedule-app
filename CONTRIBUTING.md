# Contributing

Thanks for helping improve this project.

## Local Checks

Run these before opening a pull request:

```sh
npm run build
npm run validate
```

The app has no runtime npm dependencies. Keep changes focused and avoid adding a framework unless the change clearly needs one.

## Development Notes

- Source lives mainly in `worker/index.js`.
- `scripts/build.mjs` exports both the Worker artifact and the static GitHub Pages artifact.
- `dist/` is generated and should not be committed.
- Public sync sources may be unreachable in some local networks. `npm run refresh:data` is allowed to write a fallback static cache instead of failing the workflow.

## Pull Request Guidelines

- Describe the user-visible change and any tradeoffs.
- Include screenshots or a short screen recording for UI changes when possible.
- Mention which checks you ran.
- Do not commit secrets, local cache directories, or generated `dist/` files.
