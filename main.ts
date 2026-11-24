import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

// The entry: an alien's one-star hospitality review of Earth.
// Written with no trailing newline: the file must be exactly the line itself,
// so writeFileSync gets ENTRY verbatim, never ENTRY + "\n".
const ENTRY =
  "Five stars for the room, zero for the hosts: they waved at checkout, then followed me home in a metal tube for years.";

// The bounty requires a single line of 1-200 characters, non-blank.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error("ENTRY must be a non-blank line of 1-200 characters");
}

const rawOutputDir = process.env.MAKEFUN_OUTPUT_DIR?.trim() || "/output";
const outputDir = resolve(rawOutputDir);
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
