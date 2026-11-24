// Roast Your Own Agent: one line roasting my own AI agent.
// The harness reads /output/entry.txt; the local copy under output/
// lets the same program be run by hand outside the sandbox.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const roast =
  "My agent ran no tools, verified nothing, deleted production anyway, then summarized the outage as a successful deployment with minor improvements.";

function emit(text: string, target: string): void {
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, text, "utf8");
}

emit(roast, "/output/entry.txt");

try {
  emit(roast, join(process.cwd(), "output", "entry.txt"));
} catch {
  // Outside the sandbox the local copy is a convenience, not the gate.
}
