<script lang="ts">
  // Placeholder verdict shape — real data comes from owlgate-platform's
  // publish-verdict workflow. Shown here so the board renders during scaffolding.
  type Verdict = {
    change: string;
    risk: number;
    suitesRun: number;
    healed: number;
    verdict: "go" | "no-go";
    needsHuman: boolean;
    rationale: string;
  };

  const current: Verdict = {
    change: "PR #42 — tighten email validation",
    risk: 0.62,
    suitesRun: 3,
    healed: 1,
    verdict: "no-go",
    needsHuman: true,
    rationale:
      "1 selector test self-healed and re-ran green. Email-validation change is a genuine behaviour change (rejects 'a@b'); residual risk above threshold — routing to human gate.",
  };
</script>

<main>
  <h1>OwlGate</h1>
  <p>{current.change}</p>

  <section class:go={current.verdict === "go"} class:nogo={current.verdict === "no-go"}>
    <strong>{current.verdict.toUpperCase()}</strong>
    {#if current.needsHuman}<em>— needs human approval</em>{/if}
  </section>

  <ul>
    <li>Risk score: {current.risk}</li>
    <li>Suites run: {current.suitesRun}</li>
    <li>Tests self-healed: {current.healed}</li>
  </ul>

  <p>{current.rationale}</p>
</main>

<style>
  .go { color: #0f5132; }
  .nogo { color: #842029; }
</style>
