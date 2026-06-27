import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import worker, { initialData } from "../worker/index.js";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const distRoot = resolve(projectRoot, "dist");
const dataRoot = resolve(distRoot, "data");

await mkdir(dataRoot, { recursive: true });

const response = await worker.fetch(new Request("https://worldcup-2026.local/"), {}, {});
if (!response.ok) {
  throw new Error(`Static export failed with HTTP ${response.status}`);
}

const html = await response.text();
await writeFile(resolve(distRoot, "index.html"), html, "utf8");
await writeFile(resolve(distRoot, ".nojekyll"), "", "utf8");
await writeFile(resolve(dataRoot, "schedule.json"), JSON.stringify(initialData, null, 2), "utf8");
await writeFile(
  resolve(dataRoot, "sync-cache.json"),
  JSON.stringify(
    {
      fetchedAt: initialData.generatedAt,
      source: "Build-time static schedule cache",
      updatedMatches: 0,
      matches: [],
      note:
        "This file is a static fallback for GitHub Pages. A scheduled workflow can overwrite it with public sync data when the sources are reachable.",
    },
    null,
    2,
  ),
  "utf8",
);

console.log("Exported static GitHub Pages files");
