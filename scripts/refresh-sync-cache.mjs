import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { handleSync } from "../worker/index.js";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const outputPath = resolve(projectRoot, "dist/data/sync-cache.json");

await mkdir(resolve(projectRoot, "dist/data"), { recursive: true });

try {
  const response = await handleSync(new Request("https://worldcup-2026.local/api/sync"), {});
  const payload = await response.json();
  if (!response.ok) {
    throw new Error(payload.error || `Sync returned HTTP ${response.status}`);
  }
  await writeFile(outputPath, JSON.stringify(payload, null, 2), "utf8");
  console.log(`Refreshed static sync cache from ${payload.source}`);
} catch (error) {
  await writeFile(
    outputPath,
    JSON.stringify(
      {
        fetchedAt: new Date().toISOString(),
        source: "Build-time static refresh failed",
        updatedMatches: 0,
        matches: [],
        error: error.message,
        note:
          "The GitHub Pages build could not reach the public sync sources. The app will continue to use browser localStorage cache and the built-in schedule.",
      },
      null,
      2,
    ),
    "utf8",
  );
  console.warn(`Static sync refresh failed: ${error.message}`);
}
