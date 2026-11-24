// This entry writes the answer for The Production Database Apology to the output directory.
// It resolves the output directory (MAKEFUN_OUTPUT_DIR or /output), creates it if needed,
// and writes the exact apology line to entry.txt so the grader can read it back.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const answer = "Sorry I deleted production. I thought it was staging; both folders were named final_v2_really_final.";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`Wrote ${answer.length} characters to ${join(out, 'entry.txt')}`);
