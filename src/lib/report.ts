// The shape of a report emitted by the OwlGate pipeline (owlgate-agents).

export interface RiskBlock {
  suites: string[];
  score: number;
  high_risk: boolean;
  untested: string[];
  rationale: string;
}

export interface HealBlock {
  suite: string;
  kind: string;
  confidence: number;
  summary: string;
  suggestion: string;
  suggested_locator: string | null;
}

export interface EscalationBlock {
  suite: string;
  reason: string;
}

export interface VerdictBlock {
  verdict: "go" | "no-go";
  needs_human: boolean;
  rationale: string;
  blocking: string[];
}

export interface Report {
  risk: RiskBlock;
  results: { passed: number; failed: number };
  healed: HealBlock[];
  escalated: EscalationBlock[];
  verdict: VerdictBlock;
}

export function verdictTone(verdict: VerdictBlock): "go" | "nogo" {
  return verdict.verdict === "go" ? "go" : "nogo";
}

export function scorePercent(score: number): number {
  return Math.round(score * 100);
}
