# owlgate-dashboard

[![CI](https://github.com/RoboActPteLtd/OwlGate-Dashboard/actions/workflows/ci.yml/badge.svg)](https://github.com/RoboActPteLtd/OwlGate-Dashboard/actions/workflows/ci.yml)

The release-readiness **verdict board** for OwlGate — the visual "OwlGate pass".
It shows, per change: the risk score, which suites ran, what the Self-Healing agent
fixed, and the final **go / no-go** verdict with its rationale and human decision.

This is the demo money-shot and the artifact a release manager actually looks at.

## Stack

- **SvelteKit** (static, prerendered), TypeScript — plain CSS for now (Flowbite
  styling can layer on later).
- Renders an OwlGate pipeline **report** (`src/lib/report.ts` types). The bundled
  `src/lib/sample-report.json` is the demo verdict; in production this is the JSON
  published by `owlgate-platform`'s `publish-verdict` workflow.

## Run

```bash
npm install
npm run dev        # dev server (http://localhost:5173)
npm run check      # svelte-check
npm run build      # static build -> build/
npm test           # Vitest unit tests
```

## What it shows

The current change's **go / no-go** verdict (colour-coded), whether human approval
is required, the risk score and selected suites, the tests the Self-Healing agent
fixed (with the suggested locator), what was escalated, and the blocking reasons.

## License

[Apache 2.0](./LICENSE)
