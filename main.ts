import { writeFileSync, mkdirSync } from "node:fs";

const ENTRY =
  "Maximum load: eight people, or one man with a 90-kilo dog named Kevin. I have stopped asking.";

// Gate guard: 1–120 chars, one line, no control characters, not whitespace-only.
if (
  [...ENTRY].length < 1 ||
  [...ENTRY].length > 120 ||
  /[\u0000-\u001f\u007f]/.test(ENTRY) ||
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n")
) {
  throw new Error("entry fails the 1-120 character gate");
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, ENTRY, "utf8");
console.log(`saved ${[...ENTRY].length} characters to entry.txt`);
