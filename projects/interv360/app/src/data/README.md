# Data layer

Cette couche portera la persistance locale structurée pour INC-01.

Garde-fous :

- données fictives uniquement ;
- pas de CRM ;
- pas d'API externe ;
- pas de base serveur ;
- pas de SQL / DDL / migration.

## Current decision

INC-01 will use browser **localStorage** as the first local persistence mechanism.

Convention :

- key prefix: `interv360-inc01:` ;
- serialized JSON state for INC-01 conceptual objects ;
- all storage access must go through this data layer — not from UI components.

This choice is limited to the demo foundation and mono-session use. It can be revisited later (e.g. IndexedDB) if volume or query needs grow.

See [`2026-06-30-inc-01-local-persistence-decision.md`](../../../07-delivery/2026-06-30-inc-01-local-persistence-decision.md).
