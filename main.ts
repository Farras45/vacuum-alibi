// The Vacuum's Alibi: One Line, 200 Characters.
// Writes the robot vacuum's one-line excuse to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output), followed by a single trailing newline.
// Node 22 stdlib only; no dependencies, no I/O beyond the output file.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I did not miss that spot. My sensors classified it as a sovereign dust settlement, and I do not invade sovereign territory.";

// The gate requires 1–200 characters of non-whitespace text; fail loudly
// instead of writing an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
