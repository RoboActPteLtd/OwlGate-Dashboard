<script lang="ts">
  import report from "$lib/sample-report.json";
  import { scorePercent, verdictTone, type Report } from "$lib/report";

  const data = report as unknown as Report & { change: string };
  const tone = verdictTone(data.verdict);
</script>

<header>
  <h1>🦉 OwlGate</h1>
  <p class="change">{data.change}</p>
</header>

<section class="verdict {tone}">
  <div class="badge">{data.verdict.verdict.toUpperCase()}</div>
  <div class="meta">
    {#if data.verdict.needs_human}
      <span class="human">Human approval required</span>
    {/if}
    <p>{data.verdict.rationale}</p>
  </div>
</section>

<div class="grid">
  <article>
    <h2>Risk</h2>
    <div class="score">{scorePercent(data.risk.score)}<span>%</span></div>
    <p class="muted">{data.risk.high_risk ? "Above threshold" : "Below threshold"}</p>
    <p>Suites selected: {data.risk.suites.join(", ") || "none"}</p>
    {#if data.risk.untested.length}
      <p class="warn">Coverage gap: {data.risk.untested.join(", ")}</p>
    {/if}
    <p class="muted small">{data.risk.rationale}</p>
  </article>

  <article>
    <h2>Tests</h2>
    <p><strong>{data.results.passed}</strong> passed · <strong>{data.results.failed}</strong> failed</p>
    <p><strong>{data.healed.length}</strong> self-healed · <strong>{data.escalated.length}</strong> escalated</p>
  </article>
</div>

{#if data.healed.length}
  <section>
    <h2>Self-healed</h2>
    {#each data.healed as h}
      <article class="card ok">
        <h3>{h.suite} <span class="tag">{h.kind}</span></h3>
        <p>{h.summary}</p>
        <p class="suggestion">{h.suggestion}</p>
        <p class="muted small">confidence {Math.round(h.confidence * 100)}%</p>
      </article>
    {/each}
  </section>
{/if}

{#if data.escalated.length}
  <section>
    <h2>Escalated to human</h2>
    {#each data.escalated as e}
      <article class="card bad">
        <h3>{e.suite}</h3>
        <p>{e.reason}</p>
      </article>
    {/each}
  </section>
{/if}

{#if data.verdict.blocking.length}
  <section>
    <h2>Blocking</h2>
    <ul>
      {#each data.verdict.blocking as b}<li>{b}</li>{/each}
    </ul>
  </section>
{/if}

<style>
  :global(body) {
    margin: 0;
    background: #f6f7f9;
    color: #1c2530;
    font-family: system-ui, sans-serif;
  }
  header,
  section,
  .grid {
    max-width: 52rem;
    margin: 1rem auto;
    padding: 0 1.25rem;
  }
  h1 {
    margin: 1.5rem auto 0;
    font-size: 1.8rem;
  }
  .change {
    color: #5b6b7b;
    margin-top: 0.25rem;
  }
  .verdict {
    display: flex;
    gap: 1.25rem;
    align-items: center;
    border-radius: 0.75rem;
    padding: 1.25rem 1.5rem;
    color: #fff;
  }
  .verdict.go {
    background: #0f8a4f;
  }
  .verdict.nogo {
    background: #b3261e;
  }
  .badge {
    font-size: 1.6rem;
    font-weight: 800;
    letter-spacing: 0.04em;
  }
  .human {
    display: inline-block;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 1rem;
    padding: 0.1rem 0.6rem;
    font-size: 0.8rem;
    margin-bottom: 0.35rem;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  article {
    background: #fff;
    border: 1px solid #e3e7ec;
    border-radius: 0.75rem;
    padding: 1rem 1.25rem;
  }
  .score {
    font-size: 2.4rem;
    font-weight: 800;
  }
  .score span {
    font-size: 1rem;
    font-weight: 500;
    color: #5b6b7b;
  }
  .card {
    margin: 0.75rem 0;
  }
  .card.ok {
    border-left: 4px solid #0f8a4f;
  }
  .card.bad {
    border-left: 4px solid #b3261e;
  }
  .tag {
    font-size: 0.7rem;
    background: #eef1f4;
    border-radius: 0.5rem;
    padding: 0.1rem 0.4rem;
    vertical-align: middle;
  }
  .suggestion {
    font-family: ui-monospace, monospace;
    font-size: 0.85rem;
    background: #f3f5f7;
    padding: 0.5rem 0.6rem;
    border-radius: 0.4rem;
  }
  .muted {
    color: #5b6b7b;
  }
  .small {
    font-size: 0.8rem;
  }
  .warn {
    color: #b3261e;
  }
</style>
