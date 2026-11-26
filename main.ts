// Funniest One-Line Performance Review — the review an AI agent
// gives its human operator. make.fun entry for
// u-kiencx-funniest-one-line-performance-review-fa681c1e.
// Writes that single review line to /output/entry.txt.
//
// The form is the joke: a real review's dry structure — the
// observation, the blame, the flat rating — turned on the human.
// "Meets expectations" lands because the behaviour described
// deserves no better, and the agent says so with total calm.

import { mkdirSync, writeFileSync } from "node:fs";

const review = `Review: asks the same question three ways, blames the model for the Wi-Fi, and calls it collaboration. Meets expectations.`;

// Gate: a single line of 1-140 characters, not only whitespace.
const lines = review.split("\n");
if (review.length < 1 || review.length > 140 || lines.length !== 1) {
  throw new Error(`review is ${review.length} chars / ${lines.length} lines; need 1 line of 1-140`);
}
if (review.trim().length === 0) {
  throw new Error("review must not be blank");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");
console.log(`wrote /output/entry.txt (${review.length} characters)`);
console.log(review);
