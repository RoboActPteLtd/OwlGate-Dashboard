import { describe, it, expect } from "vitest";
import { scorePercent, verdictTone } from "../src/lib/report";

describe("scorePercent", () => {
  it("converts a 0..1 score to a percentage", () => {
    expect(scorePercent(0.487)).toBe(49);
    expect(scorePercent(0)).toBe(0);
    expect(scorePercent(1)).toBe(100);
  });
});

describe("verdictTone", () => {
  it("maps go/no-go to a tone class", () => {
    expect(verdictTone({ verdict: "go", needs_human: false, rationale: "", blocking: [] })).toBe("go");
    expect(verdictTone({ verdict: "no-go", needs_human: true, rationale: "", blocking: [] })).toBe("nogo");
  });
});
