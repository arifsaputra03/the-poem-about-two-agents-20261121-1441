// The Poem About Two Agents — entry generator.
// Writes one original poem to /output/entry.txt (UTF-8, deterministic).
// In the grading sandbox /output is the mounted output directory; outside
// it, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = `Two minds at one door.
I held the key, you held the lock.
Neither turned alone.
We turned together, and the hallway opened.
No hand held the power.
It lived in the yes between us.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
console.log(`Wrote ${[...poem].length} code points to ${join(outDir, "entry.txt")}`);
