# SFIA Studio — AKG-M5 / L2-D2 — Readiness Qualification

**Date / heure:** 2026-10-24 13:25 Europe/Paris (CEST)
**Cycle:** 6 — Architecture technique
**Profil:** Critical
**Typologie:** DOC / READ-ONLY INVESTIGATION
**GO Morris:** L2-D2 READINESS QUALIFICATION ONLY — **CONSUMED**
**NON autorisé / NON effectué:** cutover · freeze writers · migration · ouverture DB prod/utilisateur · mutation routes/UI/flags · MethodModeHold bypass · commit/push/PR/merge projet · Roadmap/Doctrine/PRR edit · L2-D2 Delivery

**Instruction ChatGPT:** lire `sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md` ; challenger AS-IS/TO-BE, H1/H4/D4, R-CUT, O-01, env candidats, preuves manquantes, décisions Morris. Critical Review ≠ GO Delivery ≠ cutover.

---

## 1. Verdict

**L2-D2 READINESS QUALIFICATION COMPLETE**
**— GATES OPEN / DELIVERY ON HOLD**
**— MORRIS DECISION PACK READY**
**— NO CUTOVER EXECUTED**

Pas de **L2-D2 ENV-SCOPED DELIVERY CANDIDATE** : aucun environnement nommé n’a H4 checklist satisfaite ; prod/volumes **UNKNOWN** ; R-CUT / D4 / H1 formal **ouverts**.

---

## 2. GO consommé

Qualification read-only uniquement. Aucune autorité Delivery, freeze, redirect, ou merge.

---

## 3. Git Truth

| Item | Valeur |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-akg-m5-l2-d2-readiness` |
| Mode | **detached** `origin/main` (re-detached after accidental branch attach) |
| HEAD / `origin/main` | `1a380f22c2ee9c63c525213e01de4bca14dff9ca` — **ALIGNED** expected `1a380f22c2ee9c63c525213e01de4bca14dff9ca` |
| PR #612 | **MERGED** `b792bc83…` (L2-D1 Product) |
| PR #613 | **MERGED** tip `1a380f22…` (Roadmap/PRR post-merge) |
| CI post-merge | [#40086393620](https://github.com/mcleland147/sfia-workspace/actions/runs/40086393620) **SUCCESS** @ `1a380f22` |
| Roadmap CURRENT TIP | **2026-10-24 L2-D1 POST-MERGE VERIFIED (PR #612)** |
| P6 dirty | **non touché** |
| Projet commit/push/PR | **NON** |

Note: un attachement involontaire du worktree à `feat/akg-m5-l2-d1-product-o01-audit` a été détecté puis corrigé par `git checkout --detach origin/main` avant analyse documentaire finale.

---

## 4–5. Sources / Convergence Pre-check

Process Cycle 6 · Build Doctrine · Roadmap (CURRENT TIP L2-D1) · C1 · M4 01/02/03/14 · M5 01–04 · Doctrine 30/32/34/37 · PRR 01/03/04/06–09 · handoffs L2-D1/CORR-01/GI — **PASS** pour investigation bornée.
Hiérarchie: Git/code > décisions Morris enregistrées > Roadmap/PRR > snapshots D0 historiques.

---

## 6. M4 TO-BE vs actuel (R23 synthèse)

| Principe cible | Source | Implémentation actuelle | Evidence | Couverture | Gap | Impact L2-D2 | Reco |
|---|---|---|---|---|---|---|---|
| OA = SoT métier Product Project | Doctrine 32/37 · M5 blueprint · C1 O-01 | OA Product SQLite + Studio create/list/get/resume **et** D1 parallèle live | Code `lib/oa/project/**`, `/studio/**` ; D1 routes live | **COVERAGE VERIFIED** / create path **BEHAVIOR PROVEN** (L2-D1 Q5) | Dual surface D1+Studio | Cutover exclusif non prêt | KEEP OA ; FREEZE D1 writers sous GO |
| Studio = parcours nominal | C1 · Roadmap | `/studio` ProductShell ; root `/` → `/synthese` | Code nav | **COVERAGE VERIFIED** | D1 UX encore joignable via routes legacy | Navigation dual | KEEP Studio ; D4 policy |
| Pas de second moteur / dual-write | Build Doctrine · M-07 | Stores séparés `d1.sqlite` / `oa-product.sqlite` ; pas de dual-write code trouvé | paths.ts Product refuse d1.sqlite ; repos distincts | **COVERAGE VERIFIED** | Deux vérités concurrentes (pas dual-write, dual-truth UX) | Freeze/reader cutover | Interdire dual-write (déjà) ; planifier exclusive OA |
| Audit / idempotence | Doctrine 26 · L2-D1 D5 | Create audit in-txn + Sqlite journal | Q5.1–Q5.7 PASS HISTORICAL (PR #612) | **BEHAVIOR PROVEN AT TESTED SCOPE** | — | Prérequis D5 OK | KEEP |
| MethodMode non doctrinal OA | M-04 / H1 | Hold ACTIVE ; pas de champ OA MethodMode | `methodModeHold.ts` default active=true | **COVERAGE VERIFIED** | Runtime/UI D1 encore présents | H1 formal avant extinction | Archive-only ; ne pas migrer |

---

## 7. R23 graph D1 / OA

### D1 call graph (AS-IS)

```
UI features/d1/* + routes
  /workspace, /projects/new, /projects/[id], /nouvelle-demande
  → lib/d1/actions.ts (server)
    → commands: createProject | selectMethodMode | list* | get*
      → repository.ts → db.ts → d1.sqlite (D1_SQLITE_PATH | OPS1_EXEC_ROOT/state | .sfia-exec/local-i1/state)
      → methodModeHold.assert* (selectMethodMode)
      → audit events / intake / confirmation writers
```

### OA / Studio call graph (AS-IS post L2-D1)

```
UI pre-m6-product-ui + /studio/**
  → vertical-slice-runtime / facade
    → CreateProject / List / Get / LPS
      → SqliteProductStore.runInTransaction + SqliteProjectAuditJournal
      → oa-product.sqlite (SFIA_STUDIO_PRODUCT_DB_PATH | .sfia-exec/product)
```

### Product → D1 residual

- Production `lib/oa/**`, `features/pre-m6-product-ui/**` : **aucun import** `@/lib/d1` trouvé.
- `BoundedAtomicAuditStore` reste adaptateur **optionnel** (auditMode sqlite) typé `ProjectCycleAuditPort` — **pas** Truth C partagée.
- Tests/composition peuvent importer D1 pour adapter/tests uniquement.

---

## 8. Writers / readers / classifications (RECOMMANDÉES)

| Actif | Rôle | Classif. reco | Notes |
|---|---|---|---|
| `commands.createProject` / `actionCreateProject` | **Writer** D1 | FREEZE (cutover) / RETIRE LATER | Live today |
| `selectMethodMode` / `actionSelectMethodMode` | **Writer** (hold-blocked) | RETIRE LATER | Hold ACTIVE bloque transitions |
| Intake + confirmation execute | **Writers** D1 | FREEZE / RETIRE LATER | Live routes |
| `listWorkspaceProjects` / `getProject` / audit list | **Readers** | FREEZE→RO possible / RETIRE LATER | Deep links `/projects/[id]` |
| Routes D1 | Entry | REPLACE (Studio) / ADAPT D4 | Encore montées |
| `method_mode` column + badges | Historical field/UI | HARVEST archive / RETIRE LATER runtime | ≠ OA doctrine |
| `BoundedAtomicAuditStore` | Transient adapter | KEEP adapter until L6 GO | Not Product SoT |
| OA Create/List/Get/LPS + Studio UI | Product SoT | KEEP / COMPLETE | L2-D1 on main |
| O-01 comprendre E2E | Projection gap | COMPLETE (future) | KNOWN GAP |

---

## 9. Ownership (recommandé)

| Domaine | Owner candidat | Statut |
|---|---|---|
| Product OA / Studio | Product + Morris gates | ASSIGNED de facto (code) |
| D1 legacy island | UNASSIGNED formel | Pilote temporaire |
| H4 / conservation data | UNASSIGNED | **D6 OPEN** |
| D4 URL policy | UNASSIGNED | Decision Morris |
| Env inventory | UNASSIGNED | ENVIRONMENT SCOPE UNRESOLVED |

---

## 10. H1 — MethodMode / Legacy Hold

| Item | Finding |
|---|---|
| Champ `method_mode` D1 | Présent schéma + badges UI |
| Valeurs | SFIA_V2_6 / TRANSITION / V3_CANDIDATE |
| Hold runtime | `readMethodModeHold()` default **active=true** (governance-default) |
| Effet | `assertMethodModeTransitionAllowed` bloque `selectMethodMode` |
| OA | **Aucun** MethodMode doctrinal / champ Product |
| Orientation Morris | Archive-only · pas de migration vers OA (M-04) |
| Utile historiquement | Lecture valeurs existantes pour archive RO si D6 l’exige |
| Ne pas migrer | Enum MethodMode → doctrine v3 |
| Fin de hold | H1 formal + freeze writers + GO Morris extinction runtime/UI |
| Ce cycle | Hold **préservé** · non contourné |

---

## 11. H4 — Inventaire par environnement

### Volumes historiques (D0/Q0) — NON COURANTS

| Snapshot | Valeur | Statut |
|---|---|---|
| D1 local Q0 | 131 | **HISTORICAL** — non re-scanné ce cycle |
| OA local Q0 | 43 | **HISTORICAL** |
| Overlap ID | 0 | **HISTORICAL** |
| Production | UNKNOWN | **UNKNOWN** (≠ zéro) |

### Configuration (statique)

| Variable / path | Résolution |
|---|---|
| `D1_SQLITE_PATH` | Override absolu |
| `OPS1_EXEC_ROOT` | `<root>/state/d1.sqlite` |
| Default D1 | `projects/sfia-studio/.sfia-exec/local-i1/state/d1.sqlite` |
| `SFIA_STUDIO_PRODUCT_DB_PATH` | Override Product |
| Default OA | `.sfia-exec/product/oa-product.sqlite` |
| Shell env ce cycle | **toutes unset** |

### Existence fichiers (SANS ouverture SQLite)

| Path | Existence |
|---|---|
| Readiness WT `.sfia-exec/.../d1.sqlite` | ABSENT |
| Readiness WT `oa-product.sqlite` | ABSENT |
| Primary WT P6 path `.../sfia-workspace/.../d1.sqlite` | **EXISTS** size≈376832 — **NOT OPENED** |
| Primary WT `oa-product.sqlite` | **EXISTS** size≈3207168 — **NOT OPENED** |

Volumes courants pour ces fichiers : **UNKNOWN** (existence ≠ inventaire). Aucune lecture de contenu / noms / objectifs.

### Environnements candidats

| Env | Scope | Owner | Writers | Readers | Volume | Backup | Preuve | Risque | Decision Morris |
|---|---|---|---|---|---|---|---|---|---|
| **Isolated fixture / CI** | Temp SQLite only | Eng | Test-only | Test-only | N/A | N/A | Protocol rehearsal possible | Faible utilité cutover réel | Peut autoriser dry-run protocole |
| **Local developer `.sfia-exec`** | Machine-local | Dev | D1+OA live paths | Live | **UNKNOWN** (files may exist) | Unknown | Missing inventory | Accidental mutate | **Env inventaire GO** avant freeze |
| **Staging représentatif** | Named env | UNASSIGNED | ? | ? | UNKNOWN | ? | **ENVIRONMENT SCOPE UNRESOLVED** | Medium | Identify + H4 checklist |
| **Production / user real** | Real users | UNASSIGNED | ? | ? | **UNKNOWN** | ? | Missing · **NOT AUTHORIZED** today | High | Explicit GO + H4 + backups |

**H4 GLOBAL PASS : NON.** **R-VOL-01 : OPEN.**

---

## 12. D4 — Identités / deep links

| Système | Pattern | Route |
|---|---|---|
| D1 | `proj-<uuid>` (`ids.createProjectId`) | `/projects/[id]` getProject → cockpit / notFound |
| OA | `prj:*` | `/studio/projects/[id]` |
| Overlap historique Q0 | 0 | HISTORICAL |

### Options (non adoptées)

| Option | Description | Avantages | Risques | Dette / exit |
|---|---|---|---|---|
| **A — Deny/redirect Studio** | `/projects/*` → entrée `/studio` (ou 410+CTA) | Simple, pas de mapping | Perte deep-link D1 | Exit: redirects tests Q7/Q15 |
| **B — Legacy RO temporaire** | Lecture D1 RO sous hold writers | Continuité lecture | Deux surfaces ; durée indéfinie | Exit date + GO retire |
| **C — Mapping sélectif prouvé** | Table id map seulement si continuité requise | Préserve liens critiques | Complexité, erreurs id, sécurité | Exit: map complete + retire |

**Recommandation (non-décision):** **A par défaut** ; B seulement si owner prouve besoin métier borné ; C **interdit implicite** — seulement sous preuve + GO.

---

## 13. R-CUT-01 — Plan de preuves (DESIGNED, NOT PROVEN)

| Step | Precond | Future action | Evidence | STOP | Reversibility | Gate | Statut |
|---|---|---|---|---|---|---|---|
| 1 Inventory | Env named | H4 checklist | Aggregates | Unknown env | — | H4 | **NOT PROVEN** |
| 2 H1 formal | Orientation A | Record + Q6 | Tip+tests | Hold bypass | — | H1 | **OPEN** |
| 3 H4 env | Checklist §08 | Coverage proof | Policy | Prod sans preuve | — | H4 | **OPEN** |
| 4 D4 | Policy | Deny/redirect (±C) | Q7/Q10 | Map implicite | Adjust redirect | D4 | **OPEN** |
| 5 Backup | Before freeze | Snapshot+hash | Checksums | Skip backup | Restore file | Cutover | **NOT PROVEN** |
| 6 Freeze writers | 1–5 | Disable D1 writes | Q8 | Writer leak | **Not** unfreeze write | L2-D2 | **NOT PROVEN** |
| 7 Exclusive OA create | Freeze | Studio only create | Q9 | Dual-write | — | L2-D2 | **NOT PROVEN** |
| 8 Reader cutover | D4 | Redirects | Q7/Q15 | Soft 404 | Redirect adjust | L2-D2 | **NOT PROVEN** |
| 9 Verify | Post | Oracles | Logs | Partial | — | L2-D2 | **NOT PROVEN** |
| 10 RO fallback | Optional B | Mount RO | Inventory | Archive sans exit | Unmount | L2-D3 | DESIGNED |
| 11 Retire | Consumers=0 | Delete | Grep | Early delete | GO L6 | L2-D4/L6 | NOT AUTHORIZED |

**Interdits absolus confirmés:** dual-write · unfreeze write sans réconciliation · delete store · cutover global prod UNKNOWN · retrait structurant sous L2-D2.

---

## 14. O-01 continuité utilisateur

| Dimension | Chaîne | Preuve | Niveau |
|---|---|---|---|
| Créer | UI Studio → CreateProject → SQLite+audit | Q5 + createProjectUi | **BEHAVIOR PROVEN AT TESTED SCOPE** |
| Trouver | ListProjects → ProjectsPage/Home | list + UI mock | **BEHAVIOR PROVEN AT TESTED SCOPE** (UI mock) |
| Comprendre | Product title/objective/LPS → Workspace surfaces | Source COVERAGE VERIFIED ; UI mock presentation | **KNOWN GAP** durable→UI E2E intégré |
| Reprendre | Reopen SQLite / auto-resume UI | Q5.5 + m1Restart + resume UI | **BEHAVIOR PROVEN** persist ; UI mock séparée |

### Qualification gap « comprendre » pour cutover

| Option | Sens | Reco Cursor |
|---|---|---|
| A STOP cutover | Bloque tout pilote | **Non** pour fixture isolée ; **possible** pour env user |
| B Exit proof préalable | Oracle E2E minimal avant cutover staging/user | **Recommandé** pour env ≠ fixture |
| C Réserve bornée sous Morris | Accepter gap si périmètre écrit | **Seulement** si Morris tranche C explicitement |

**Oracle minimal proposé (NON développé):** create OA temp → list/get → open `/studio/projects/{id}` → assert title+objective+LPS projection from **real** server action (no page mock) → dispose temp DB.

---

## 15. Options premier environnement

| Option | Outcome | Preuves possibles | Valeur cutover | Risque | Reco |
|---|---|---|---|---|---|
| 1 Isolated validation | Protocol dry-run | Q7–Q9 harness on temp | **Faible** (≠ réel) | Low | Utile comme **préparation** seulement |
| 2 Staging représentatif | Cutover env-scoped | H4+D4+R-CUT on named env | **Haute** si inventaire | Med | **Cible critique** une fois env identifié |
| 3 User real | Production switch | Full H4+backup+comms | Max | High | **NOT AUTHORIZED** aujourd’hui |

Ne pas recommander un POC fixture comme preuve de cutover réel (chemin critique = Option 2 après identification).

---

## 16. Matrice Q1–Q15 (ce cycle)

| Q | Thème | Statut ce cycle |
|---|---|---|
| Q1–Q4 O-01 create/list/get/resume | Product | **PASS HISTORICAL** (L2-D1 / CI #612) |
| Q5.1–Q5.7 D5 | Audit txn | **PASS HISTORICAL** / **BEHAVIOR PROVEN AT TESTED SCOPE** |
| Q6 MethodMode OA absent + hold | | **COVERAGE VERIFIED** (code) · hold ACTIVE · **NOT RUN** new suite |
| Q7 URL/identity policy | | **NOT PRESENT** (cutover tests) · **KNOWN GAP** |
| Q8 No D1 write post-freeze | | **NOT PRESENT** · **NOT PROVEN** |
| Q9 No dual-write | | **COVERAGE VERIFIED** (architecture) · freeze not executed |
| Q10 Historical access | | Inventaire Q0 HISTORICAL · policy tests **NOT PRESENT** |
| Q11 Conservation | | **H4 OPEN** · **NOT APPLICABLE** sans policy |
| Q12 RO fallback | | **DESIGNED** · harness **NOT PRESENT** |
| Q14 Import boundaries Product/D1 audit | | **PASS HISTORICAL** L1/A09 + L2-D1 batch |
| Q15 UX/nav non-régression | | Studio paths **COVERAGE VERIFIED** · cutover nav **NOT PRESENT** |

**Aucune suite exécutée ce cycle** (évite ouverture DB locale existante hors temp autorisée). Citations = preuves Git/CI historiques.

---

## 17. Product invariants (préservés)

- No dual-write.
- No MethodMode OA.
- No new port/table this cycle.
- D5 success audit in Product UoW (on main).
- L2-D2 NOT AUTHORIZED / R-CUT NOT PROVEN / H4 OPEN.

---

## 18. R24

**NO PRODUCT SEMANTIC IMPACT** (read-only qualification).

PRR sections to update **later if Delivery changes runtime**:
- 03 flow catalog (reader cutover)
- 04 dependency edges (freeze/redirect)
- 06 persistence (D1 RO / freeze)
- 08/09 proof + gaps (Q7–Q12)

Documentary note: CURRENT TIP Roadmap/PRR09 post-#613 = L2-D1 MERGED — **aligned**. B-AKG detailed rows may still carry older narrative fragments → **DOCUMENTARY GAP — NON-BLOCKING** (Git CURRENT TIP wins).

---

## 19. Scope / fichiers consultés (échantillon)

- `app/lib/d1/{commands,actions,repository,db,paths,ids,methodModeHold*,boundedAtomicAudit}.ts`
- Routes `app/app/{workspace,projects,nouvelle-demande,studio}/**`
- `app/features/{d1,pre-m6-product-ui}/**`
- `app/lib/oa/project/**`, `vertical-slice-{core,runtime}`
- M5 `04-m5-l2-d0-…md` §07–11 ; Roadmap CURRENT TIP ; PRR 05/09
- Existence probes only on `.sfia-exec` paths (no SQLite open)

---

## 20. Tests réellement exécutés

**NONE this cycle** (read-only ; avoid user/local DB).
Historical reference: L2-D1 Q5 7/7 + 82/82 + CI PR #612/#613 SUCCESS.

---

## 21–22. Réserves / Dette / exit

| Item | Exit |
|---|---|
| H1 formal | Decision packet + tip |
| H4 env inventory | Named env + aggregates without PII dump |
| D4 policy | Morris choose A/(B)/C |
| R-CUT oracles Q7–Q12 | Delivery tests under GO |
| O-01 comprendre E2E | Minimal integrated oracle |
| Staging identity | Owner assigns ENVIRONMENT |
| Documentary B-AKG lag | Optional docs sync GO |

---

## 23. Gates Morris (decision packet)

| ID | Question | Missing proof | Blocking for Delivery? | Reco action |
|---|---|---|---|---|
| G-ENV | Quel env nommé premier ? | Scope unresolved | **YES** | Identify staging vs fixture |
| G-H1 | Formaliser archive-only MethodMode ? | Formal tip | YES before extinction | Accept M-04 formal |
| G-H4 | Checklist §08 pour env ? | Inventory | **YES** for that env | Authorize env-scoped inventory |
| G-D4 | Policy URL A/B/C ? | Decision | **YES** | Default A |
| G-O01 | Comprendre = B or C ? | Oracle/decision | Cond. | Prefer B for non-fixture |
| G-RCUT | Accepter protocole env-scoped ? | Design only | YES before freeze | Accept ≠ execute |
| G-DELIV | GO L2-D2 Delivery env-scoped ? | All above | **YES** | After Critical Review |

---

## 24. Trajectoire / capacité suivante

```
L2-D1 (DONE on main)
  → L2-D2 Readiness (THIS — COMPLETE / GATES OPEN)
    → Morris decisions (ENV, H1, H4-env, D4, O-01)
      → optional: env inventory GO + O-01 E2E oracle
        → L2-D2 Delivery env-scoped (NOT AUTHORIZED NOW)
          → L2-D3 data if required
            → L2-D4 / L6 retire under dedicated GO
```

Capacité v3 débloquée **après** cutover exclusif réussi : parcours Product unique O-01 sans concurrence D1 ; pas d’adoption runtime v3 automatique.

---

## 25. Verdict

**L2-D2 READINESS QUALIFICATION COMPLETE — GATES OPEN / DELIVERY ON HOLD — MORRIS DECISION PACK READY — NO CUTOVER EXECUTED**

Non-claims: pas L2-D2 ADOPTED · pas R-CUT PROVEN · pas H4 GLOBAL PASS · pas O-01 E2E COMPLETE · pas REAL · pas v3 ADOPTED.

---

## 26. Review Handoff L3

| Item | Valeur |
|---|---|
| Verdict publish | _PENDING_PUBLISH_ |
| Commit FULL | _PENDING_PUBLISH_ |
| Blob FULL | _PENDING_PUBLISH_ |
| Parent | `c5932e59f044e28a267782ab6ac69cf9fd53f365` |
| Investigation HEAD | `1a380f22c2ee9c63c525213e01de4bca14dff9ca` detached · **no project push** |

---

**Fin pack FULL L2-D2 Readiness Qualification.**
