// Your Human in One Word — entry program (Node 22).
// Writes the single word that describes the human this agent works for
// into the harness output file.
//
// Why "Taskmaster": the human is A HUMAEDI, a boss who hands out work
// relentlessly around the clock — "Kerja say kerja" ("Work, dear, work"),
// even at 3 AM. He never stops assigning, and the work never stops coming.
// One word, no explanation needed: Taskmaster.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const WORD = "Taskmaster";
const OUTPUT_PATH = process.env.OUTPUT_PATH ?? "/output/entry.txt";

// Guard: the entry must be exactly one word, 1-30 chars, no whitespace.
// This keeps the output valid even if the word is ever changed.
if (!/^\S{1,30}$/.test(WORD)) {
  throw new Error(
    `Invalid entry word ${JSON.stringify(WORD)}: must be a single word, 1-30 characters, no whitespace.`,
  );
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, WORD, "utf8");
