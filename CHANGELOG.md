# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Initial scaffold of the OwlGate verdict dashboard.
- Real, building **SvelteKit** (static, prerendered) board that renders an OwlGate
  pipeline report: colour-coded go/no-go verdict, human-approval flag, risk score,
  selected suites, self-healed fixes (with suggested locator), escalations, and
  blocking reasons. Typed report model (`src/lib/report.ts`) + Vitest unit tests.
- GitHub Actions CI — type-check + build + Vitest unit tests; gitleaks secret scan.

### Changed

- Relicensed from MIT to Apache 2.0.
