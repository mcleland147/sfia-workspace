# Demo seed

Cette couche portera le seed fictif de démonstration.

Références autorisées :

- SAV-DEMO-001 ;
- INT-DEMO-001 ;
- Technicien Démo 01.

Aucune donnée réelle ne doit être ajoutée.

## Demo reset

The demo seed must remain resettable.

The initial seed references are:

- SAV-DEMO-001
- INT-DEMO-001
- Technicien Démo 01

Reset strategy (localStorage):

1. remove all keys prefixed `interv360-inc01:` ;
2. reload the initial fictitious seed state ;
3. restore the 5 minimal journal entries from the demo definition.

Reset will be triggered explicitly (e.g. demo reset control) — not on every page load.

See [`2026-06-30-inc-01-local-persistence-decision.md`](../../../07-delivery/2026-06-30-inc-01-local-persistence-decision.md).
