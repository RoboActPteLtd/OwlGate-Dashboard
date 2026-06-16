# owlgate-dashboard

The release-readiness **verdict board** for OwlGate — the visual "OwlGate pass".
It shows, per change: the risk score, which suites ran, what the Self-Healing agent
fixed, and the final **go / no-go** verdict with its rationale and human decision.

This is the demo money-shot and the artifact a release manager actually looks at.

## Stack

- **SvelteKit + Flowbite** (static SPA), TypeScript — consistent with the RoboAct
  admin panels.
- Reads verdicts published by `owlgate-platform`'s `publish-verdict` workflow.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
```

## Views

- **Gate** — the current change's verdict, rationale, and approve/override trail.
- **History** — past verdicts, heal rate, flaky-suite trends.

## License

[MIT](./LICENSE)
