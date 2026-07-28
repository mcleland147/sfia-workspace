# 12 — F11.2 completion surface & gaps

| Champ | Valeur |
|-------|--------|
| **Document** | `12-f11-2-completion-surface-and-gaps.md` |
| **Date/heure/fuseau** | 2026-07-28 22:45:18 CEST (+0200) |
| **Décision parent** | D-T-A7-F11 = **F11.2** (`DECIDED`) |
| **Gate N3** | `GO DECIDE T-A7 NEXT BLOCKER-REDUCTION LOT — SELECT N3 …` · **N3 DECIDED** |
| **Base Git** | `origin/main` @ `770605bcfa4cc3e403ee2c4615c1a115ccd38458` |
| **Implémentation** | **interdite** dans ce cycle |
| **Statut F11.2** | fondation lot 1 intégrée · **API finale non complète** |

---

## 1. État actuel (main)

| Élément | Preuve | Limite |
|---------|--------|--------|
| Module | `app/lib/d1/operationalReadiness.ts` | interne TypeScript |
| Entrée | `queryOperationalReadiness(input?)` | pas de route HTTP |
| Snapshot | `schemaVersion: t-a7-f11.2-lot1` · frozen | `completeness: BOUNDED_LOT_1` |
| Flags | `mutable=false` · `adminUi=false` · `writeCommands=false` | contrats RO |
| Hold | lu via `readMethodModeHold` / `decideMethodModeTransition` | défaut ACTIVE |
| History | résumé F13 page (`availability`, `returned`, `gitCanonical`) | pas d’items complets |
| Health | `SIMULATED` | pas de probe prod |
| Migration | `NOT_STARTED` | pas de schéma |
| Tests | `t-a7-operational-readiness.test.ts` | fondation seulement |
| Barrel | exporté depuis `lib/d1/index.ts` (API produit lecture) | ≠ HTTP public |

**Anti-claim :** fondation ≠ API F11.2 complète · ≠ cutover ready · ≠ IAM.

---

## 2. Finalité cible F11.2

Exigence décidée (pack F03/F11/F13) : **API minimale de lecture / readiness sans UI admin dédiée**, avant tout cutover futur.

Finalité :

- exposer un **état opérationnel observé** (MethodMode, hold, blockers, deps legacy, migration, health, historique borné) ;
- séparer **observed / decision / recommendation / authorization** ;
- rester **strictement read-only** ;
- permettre audit / support / gouvernance **sans** mutation ni console admin.

Consommateurs candidats (non autorisés ici) :

| Consommateur | Besoin | Statut |
|--------------|--------|--------|
| Services serveur internes OA/D1 | snapshot local | partiel (appel direct) |
| Opérateur / Morris (via surface future) | lecture gouvernée | **non exposé** |
| CI / probes | non-régression RO | tests unitaires existants |
| UI admin | — | **hors F11.2** (F11.3 non retenue) |
| Clients HTTP externes | — | **non sélectionné** |

---

## 3. Contrat fonctionnel cible (minimal)

### 3.1 Données exposées (cible)

| Domaine | Fondation actuelle | Cible minimale complète | Gap |
|---------|--------------------|-------------------------|-----|
| Identity projet | `projectId` optionnel injecté | résolution projet bornée documentée | qui fournit le projet ? |
| MethodMode | mode + state si projet fourni | lecture mode/state stable + version/optimistic si pertinent | pas de binding session OA |
| Hold | actif + reasons codes | hold + provenance + evaluatedAt + codes stables | OK partiel |
| Blockers | codes hold | mapping explicite B5/R1/R-M01/HARD ≠ fermeture | OK partiel |
| Legacy deps | METHOD_MODES + canonical paths | inventaire versionné / digest éventuel | digest non exposé |
| Migration | NOT_STARTED | enum élargi + détail non-bavard | pas de pipeline |
| Health | SIMULATED | états observés documentés (local/unknown/degraded) | pas de probe |
| History summary | availability/returned | lien stable vers page F13 + fraîcheur | pas de cursor/page id |
| Decision layer | BLOCK/ALLOW + authz strings | inchangé fonctionnellement | OK |
| Audit lecture | absente | événement borné (qui/quand/quoi résumé) | **MISSING** |

### 3.2 Contrat read-only (normatif)

- `mutable=false` · `adminUi=false` · `writeCommands=false` obligatoires ;
- aucune commande write via cette surface ;
- aucune mutation MethodMode / history / DB via F11.2 ;
- résultat immuable (freeze / copie) ;
- erreurs non bavardes (pas de secrets, pas de chemins utilisateur absolus).

### 3.3 Erreurs / disponibilité / fraîcheur

| Aspect | Fondation | Cible | Gap |
|--------|-----------|-------|-----|
| Erreurs | throw D1Error côté hold transitions (pas F11 query) | codes readiness explicites (INVALID_INPUT, UNAVAILABLE, FORBIDDEN_IF_IAM) | codes non formalisés |
| Disponibilité | toujours local-sync | documenter dégradé si provider history/hold unavailable | partiel (history provider injectable) |
| Fraîcheur | `evaluatedAt` ISO Z | TTL/freshness note (sans SLA prod) | pas de TTL |
| Observabilité | logs D1 hold séparés | event `readiness_queried` borné | **MISSING** |

---

## 4. IAM / sécurité / RGPD

| Frontière | Statut | Note |
|-----------|--------|------|
| Authentification | **NOT SELECTED** | pas d’identité d’acteur sur la query actuelle |
| Autorisation | hold ≠ IAM | `authorization` = décision hold, **pas** ACL produit |
| IAM production | **NOT SELECTED** | décision Morris future obligatoire avant exposition HTTP |
| Path-policy | distincte IAM | inchangée par F11.2 |
| Données | métadonnées gouvernance / ids projet | pas de PII documentée ; minimisation requise |
| RGPD production | **NOT VALIDATED** | si HTTP/UI futurs → DPIA/cycle distinct |

**Règle N3 :** ne **pas** sélectionner de mécanisme IAM dans ce document.

---

## 5. Gaps / dépendances / blockers

| ID | Type | Description | Bloque | Décision Morris ? |
|----|------|-------------|--------|-------------------|
| G-F11-01 | gap fonc. | pas d’API HTTP / port serveur formalisé | « API finale » | oui (lot futur) |
| G-F11-02 | gap fonc. | pas d’audit de lecture | conformité F11 normative | oui/non selon lot |
| G-F11-03 | gap tech. | health SIMULATED seulement | readiness prod claim | oui (probe) |
| G-F11-04 | dépendance | F13 summary → fondation F13.4 | cohérence historique | N3 (ce pack) |
| G-F11-05 | dépendance | hold MethodMode | décision transition | déjà lot 1 |
| G-F11-06 | blocker | IAM NOT SELECTED | exposition multi-acteur | **oui avant HTTP** |
| G-F11-07 | blocker | B5/HARD OPEN | delivery/cutover | ne pas fermer |
| G-F11-08 | gap | pas de binding session OA (P06) | cutover | hors N3 impl |

---

## 6. Critères de complétion F11.2 (documentaires)

F11.2 peut être déclaré **complete** seulement si **toutes** les conditions suivantes sont vraies sous preuves Git + gate Morris d’implémentation/validation :

1. contrat read-only normatif respecté runtime ;
2. surface d’accès **décidée et validée** (interne-only **ou** HTTP — choix Morris) ;
3. champs cibles §3.1 exposés avec provenance ;
4. audit de lecture minimal présent **ou** explicitement différé par décision Morris ;
5. health non-simulé **ou** statut UNKNOWN/DEGRADED honnête documenté pour le niveau revendiqué ;
6. tests de non-régression RO + frontières import ;
7. IAM : soit surface server-only mono-opérateur documentée, soit IAM sélectionné+validé ;
8. **aucune** claim delivery/cutover.

**Statut actuel :** `NOT COMPLETE`.

---

## 7. Non-objectifs

- UI admin (F11.3) ;
- mutations / write commands ;
- sélection IAM/persistence ;
- fermeture B5/R1/R-M01/HARD ;
- product-complete API OA (A3.2) ;
- delivery / cutover.

---

## 8. Stop conditions

- besoin d’écrire via readiness ;
- besoin d’UI admin pour « compléter » F11.2 ;
- sélection IAM forcée sans gate ;
- claim « F11.2 complete » sans preuves §6 ;
- modification OPS1 / `method/**` pour readiness.

---

## 9. Questions d’arbitrage Morris

1. Surface d’accès cible : **server-internal only** vs **HTTP read** (sans UI) ?
2. Audit de lecture : **requis pour complete** vs **différé** ?
3. Health : accepter **UNKNOWN/SIMULATED** comme complete documentaire, ou exiger probe ?
4. Faut-il un lot technique F11-only avant tout lot HTTP ?

Toutes réponses = futurs GO · `RECOMMENDED — NOT DECIDED` hors N3.
