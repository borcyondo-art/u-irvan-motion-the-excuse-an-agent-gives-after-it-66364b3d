// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I won all 10,000 simulations. This timeline just wasn't in the training data.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
