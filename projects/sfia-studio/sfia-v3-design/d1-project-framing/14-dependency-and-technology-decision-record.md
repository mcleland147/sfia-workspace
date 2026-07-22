# 14 — Dependency and technology decision record

Toutes les décisions sont **candidates** jusqu’au gate humain. Aucune install / modif package.json dans ce cycle.

| ID | Domaine | Contexte | Options | Recommandation | Impacts | Dette | Réversibilité | Gate |
|----|---------|----------|---------|----------------|---------|-------|---------------|------|
| T-01 | Architecture | D1 dans Studio | micro / modular mono / hybrid | **Modular monolith** | simple ops | extract later | haute | readiness |
| T-02 | Web | existant Next 15 | Next / other | **Next.js 15 App Router** | align CT | — | basse | — |
| T-03 | API | mutations | REST / SA+handlers / tRPC | **Server Actions + handlers** | testable | versioning | moyenne | readiness |
| T-04 | Persistence | OPS1 sqlite | sqlite / PG / both-abs | **sqlite node:sqlite I1** ; SQL portable | fast | PG later | moyenne | impl I1 |
| T-05 | ORM | none in pkg | raw SQL / drizzle / prisma | **raw SQL repositories** | explicite | ORM later | haute | — |
| T-06 | SQL engine prod | future | PG / other | **PG candidate later** | multi-user | dual-run | moyenne | sécu/run |
| T-07 | JSON Schema | ajv6 present | draft-07 / 2020-12+ajv8 | **Draft-07 + ajv6** | no install | migrate | moyenne | modeled |
| T-08 | UI state | React 19 | RSC+SA / client stores | **RSC + SA ; local client state minimal** | simple | — | haute | — |
| T-09 | Event journal | D5 hybrid | ES full / append table | **append audit table** | align doctrine | no replay engine | haute | — |
| T-10 | Jobs | expirations | sync lazy / queue | **lazy expire + optional cron later** | simple | missed expire delay | haute | I8 |
| T-11 | Auth | mono-op | stub / IdP | **stub assignments I1** ; IdP later | risk SoD | sécu cycle | moyenne | sécu |
| T-12 | Observability | none product | console / OTEL | **structured logs + metrics hooks** | enough D1 | OTEL later | haute | I8 |
| T-13 | Artifacts | review export | MD file / blob store | **MD export + DB sealed JSON** | v2.6 handoff | object store | haute | I7 |
| T-14 | Tests | vitest+playwright | keep | **keep** | align | — | — | — |
| T-15 | GPT | openai sdk | keep | **keep openai provider pattern** | cost | model pin | moyenne | I2 |

## Interdits technologiques ce cycle

Installer deps · modifier lockfiles · choisir définitivement PG · introduire broker · MCP universel.
