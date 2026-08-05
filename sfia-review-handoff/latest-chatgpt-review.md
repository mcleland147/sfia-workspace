# Review Pack Full — Assistant SFIA natif OpenAI — LOT-IP-0A Implementation Preparation

## Meta

| Champ | Valeur |
|---|---|
| **Date locale** | 2026-08-05 15:33:35 CEST +0200 |
| **Date UTC** | 2026-08-05 13:33:35 UTC |
| **Niveau** | Full |
| **GO Morris** | `GO IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — EXECUTE LOT-IP-0A (TB-00-01, TB-00-02, TB-00-03, TB-00-06)` |
| **Consommation GO** | 2026-08-05 15:17 CEST (+0200) / 13:17 UTC |
| **Cycle** | 6 — Architecture technique — Implementation Preparation LOT-IP-0A |
| **Profil** | **Critical** |
| **Typologie** | EVOL / DOC |
| **CKC** | recherché · contrat détaillé spécifique absent · fallback méthode SFIA v2.6 |
| **Review pack content coverage** | created files full content : yes · modified sections complete : yes · useful diff included : yes · synthesis only : no · review pack verdict : complete |

---

## Instruction ChatGPT obligatoire

Avant de répondre à Morris, consulter :

- branche : `sfia/review-handoff`
- fichier : `sfia-review-handoff/latest-chatgpt-review.md`

Vérifier : GO · cycle/profil · branche initiale + branche IP · HEAD/origin/main · hashes 100–104 entrants · **105 complet** · **106 complet** · 103 modifié · TB-00-01/02/03/06 · preuves · options candidates · D-ASST-IP0A-* toutes NOT DECIDED · pas de techno · pas de 107 · graphe 33/56 · A2/ADR · 21 impacts · réserves · non-sélections · LOT-IP-0B/0C DEFERRED · LOT-D* NOT AUTHORIZED · Delivery NOT-CONSUMED · handoff tip/blob.

Si 105/106 ou mods 103 absents : `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING`.

---

## Local Git Truth — initial

| Champ | Valeur |
|---|---|
| **Branche initiale** | `backlog/sfia-studio-assistant-sfia-native-openai-technical-implementation-backlog` |
| **Branche IP créée** | `implementation-preparation/sfia-studio-assistant-sfia-native-openai-lot-ip-0a` |
| **HEAD** | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| **origin/main** | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| **merge-base** | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| **ahead/behind** | 0 / 0 |
| **handoff tip entrant** | `adc95219050844620d15a0eef1dd43d29241ef5b` |
| **handoff blob entrant** | `945a60fae70d4026ee0a18065768a8dda54290d1` |
| **105/106/107 avant** | absents |

---

## Sources consultées

Méthode (main) · handoff entrant · docs 90–104 · code `app/package.json` · `app/lib/oa/execution-run/**` · `app/lib/oa/decision/**` · `app/lib/d1/authz.ts` · `app/lib/ops1/**` · secrets adapters · tests anti-fuite · PR #308–#311.

---

## Index des preuves Git

```markdown
# Git Evidence Index — LOT-IP-0A

| ID | Preuve | Chemin |
|---|---|---|
| E-AUTH-01 | package.json deps sans auth | projects/sfia-studio/app/package.json |
| E-AUTH-02 | absence middleware | (aucun middleware.ts) |
| E-AUTH-03 | HumanDecisionGate type | app/lib/oa/execution-run/domain/types.ts |
| E-AUTH-04 | AuthorityResolver anti-spoof | app/lib/oa/decision/ports/authorityResolver.ts |
| E-AUTH-05 | MemoryAuthorityResolver | app/lib/oa/decision/infrastructure/memoryAuthorityResolver.ts |
| E-AUTH-06 | D1 mono-operator stub | app/lib/d1/authz.ts |
| E-AUTH-07 | OPS1 decided_by Morris hardcodé | app/lib/ops1/db.ts / executionContractService.ts |
| E-AJV-01 | ajv ^6.15.0 | app/package.json |
| E-AJV-02 | AjvExecutionRunSchemaValidation | app/lib/oa/execution-run/infrastructure/ajvExecutionRunSchemaValidation.ts |
| E-AJV-03 | 13 schémas ExecutionRun | app/lib/oa/execution-run/schemas/*.json |
| E-AJV-04 | create fail-closed order | app/lib/oa/execution-run/application/createExecutionRun.ts |
| E-AJV-05 | doctrine 2e adapter AJV | app/lib/oa/doctrine/infrastructure/ajvSchemaValidationAdapter.ts |
| E-STORE-01 | ExecutionRunRepositoryPort | app/lib/oa/execution-run/ports/executionRunRepository.ts |
| E-STORE-02 | Memory Map store | app/lib/oa/execution-run/infrastructure/memoryExecutionRunStore.ts |
| E-STORE-03 | durable:false disclosure | app/lib/oa/execution-run/server/composeExecutionRunMemory.ts |
| E-SEC-01 | SecretSourcePort opaque | app/lib/oa/execution-run/ports/secretSourcePort.ts |
| E-SEC-02 | EnvSecretSourceAdapter | app/lib/oa/execution-run/infrastructure/secrets/envSecretSourceAdapter.ts |
| E-SEC-03 | serverOnly materializer | app/lib/oa/execution-run/infrastructure/secrets/serverOnlySecretMaterializer.ts |
| E-SEC-04 | anti-leak tests | app/__tests__/oa/execution-run/adapter.secrets.opaque.test.ts |
```

---

## Synthèses d’analyse (détail complet dans 105)

### TB-00-01 Auth
Auth end-user ABSENTE · OA AuthorityResolver REUSE/EXTEND · HumanDecisionGate ≠ IAM · AuthorityGate/Admin ABSENTS code · reco candidate AUTH option A.

### TB-00-02 AJV
Verdict technique **FIT WITH EXTENSIONS** · ajv 6.15 Draft-07 · 13 schémas ≠ N2/N3 · reco candidate AJV option A.

### TB-00-03 Store A2
Memory non durable · classes A/B/D · C éliminé · reco candidate classe SQL managé (non vendor).

### TB-00-06 Secrets
SecretSourcePort opaque REUSE · catalogue Admin NEW · reco candidate SECRETS option A · aucun secret exposé.

### REUSE / EXTEND / NEW
Voir document 105 §15.

---

## SHA / lignes 100–106

| Doc | SHA-256 | Lignes |
|---|---|---|
| 100 | `9244ec46bc7b0ea212c03f1e59f05f80521e87c6a8e27c07de801e10b8e2cc20` | 1432 |
| 101 | `698d1e0388cbf2f93b7ae0c983ee66d84a50e4143fd79b4ec92f23ea9918d114` | 1164 |
| 102 | `b5e06cd6cb0f74c3278afc041f22a27bd39f5bcbac54fa851a952b4c810577b1` | 774 |
| 103 avant | `7a0ab8c76bd58239d3407568621c0e6b546eddcae11b0c1a0d3caa36ab98c407` | 1457 |
| 103 après | `9bf223dbcb81e6f9ceec4ad1ab298470e8c14d350127a0030a0fe6af3a4783cb` | 1492 |
| 104 | `48859ae1f54d4f5d64a39099e00fe9af3e89b6f1cf38a24bc12c58b5dbf11802` | 484 |
| 105 créé | `bfdb737713b9d93204aa870c2842ae8246eec6d2f70535b7efae136ecf0694a9` | 565 |
| 106 créé | `7f009bfef42dd020fe22bdd7ba718ab647f54695adf2eeea9bcdd22cbf1ceb17` | 286 |

90–102 et 104 byte-identical. Document 107 absent.

---

## Validation graphe / backlog

| Contrôle | Résultat |
|---|---|
| Nœuds / arêtes | 33 / 56 |
| Acyclique / topo | oui / 33/33 |
| Priorités | P0=6 P1=13 P2=13 P3=1 inchangées |
| Items DONE | 0 |
| LOT-IP-0B/0C | DEFERRED |
| LOT-D1…D5 | NOT AUTHORIZED |
| Delivery | NOT-CONSUMED |
| A2 + 10 ADR | préservés |
| 21 impacts | COVERED |
| Réserves | KEEP-OPEN |
| Secret scan 105/106 | 0 hits |

---

## Décisions candidates

| ID | Statut | Reco candidate |
|---|---|---|
| D-ASST-IP0A-AUTH-01 | NOT DECIDED | A |
| D-ASST-IP0A-AJV-01 | NOT DECIDED | A |
| D-ASST-IP0A-STORE-01 | NOT DECIDED | A (classe SQL managé) |
| D-ASST-IP0A-SECRETS-01 | NOT DECIDED | A |

---

## Document 105 — contenu complet

```markdown
# SFIA Studio — Assistant SFIA natif OpenAI — Implementation Preparation LOT-IP-0A

## 1. Statut et anti-claims

**LOT-IP-0A IMPLEMENTATION PREPARATION EXECUTED —**
**TB-00-01 AUTH INVENTORY COMPLETE —**
**TB-00-02 AJV N2/N3 FIT ASSESSED —**
**TB-00-03 A2 DURABLE STORE DECISION PACK PREPARED —**
**TB-00-06 SERVER-ONLY SECRETS AND ADMIN CONFIG PREPARATION COMPLETE —**
**DECISION PACK READY — NOT DECIDED —**
**NO TECHNOLOGY SELECTED —**
**NO SECRET CREATED OR EXPOSED —**
**NO CODE OR PACKAGE CHANGE —**
**DELIVERY NOT-CONSUMED**

### Anti-claims

| Anti-claim | Statut |
|---|---|
| LOT-IP-0A exécuté ≠ décisions du Decision Pack adoptées | vrai |
| Aucune authentification IAM sélectionnée | vrai |
| Aucun store / fournisseur / ORM sélectionné | vrai |
| Aucun secret manager sélectionné | vrai |
| Aucun modèle / endpoint OpenAI sélectionné | vrai |
| Memory adapter ≠ persistance durable A2 | vrai |
| HumanDecisionGate ≠ authentification | vrai |
| Les 13 schémas ExecutionRun ≠ contrats Assistant N2/N3 | vrai |
| Sécurité / RGPD / FinOps non validés opérationnellement | vrai |
| Aucun item backlog DONE | vrai |
| LOT-IP-0B / 0C / LOT-D* non consommés | vrai |

| Champ | Valeur |
|---|---|
| **Document** | `projects/sfia-studio/105-assistant-sfia-native-openai-implementation-preparation-lot-ip-0a.md` |
| **Rôle** | Analyse, inventaire, preuves et préparation des décisions LOT-IP-0A |
| **Decision Pack** | `projects/sfia-studio/106-assistant-sfia-native-openai-implementation-preparation-lot-ip-0a-decision-pack.md` |
| **Recommandations** | **candidates uniquement** — jamais des décisions |

---

## 2. GO Morris exact et horodatage

```text
GO IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — EXECUTE LOT-IP-0A (TB-00-01, TB-00-02, TB-00-03, TB-00-06)
```

| Champ | Valeur |
|---|---|
| **Autorité** | Morris |
| **Consommation (local)** | 2026-08-05 15:17 CEST (+0200) |
| **Consommation (UTC)** | 2026-08-05 13:17 UTC |
| **Application Cursor (local)** | 2026-08-05 15:25 CEST (+0200) |
| **Application Cursor (UTC)** | 2026-08-05 13:25 UTC |

### Effet autorisé

Exécution **documentaire** du LOT-IP-0A : inventaires, gaps, options, recommandations candidates, Decision Pack, mise à jour 103, Review Handoff.

### Non-effet

Pas de décision finale auth/AJV/store/secrets · pas de code · pas de Delivery · pas de LOT-IP-0B/0C · pas de LOT-D* · pas de commit/push projet.

---

## 3. Cycle, profil, typologie et blocs

| Champ | Valeur |
|---|---|
| **Type** | 6 — Architecture technique |
| **Mode** | Implementation Preparation / Decision Preparation — LOT-IP-0A |
| **Profil SFIA** | **Critical** |
| **Typologie** | EVOL / DOC |
| **CKC** | recherché · contrat détaillé spécifique **absent** · fallback carte synthétique + méthode SFIA v2.6 · aucune autorité d’exécution additionnelle |
| **Blocs activés** | Sécurité/RSSI · FinOps · RGPD · performance · architecture · garde-fous décision · observabilité (critère d’évaluation uniquement) |
| **Blocs désactivés** | UX/UI · accessibilité · Delivery · DevOps · déploiement · RUN · PR readiness · post-merge · capitalisation |

---

## 4. Autorité Morris

Morris décide. Cursor analyse et prépare. Toute option « recommandée » reste **candidate**. Le GO exécute le lot documentaire ; il **n’adopte pas** les décisions du document 106.

---

## 5. Sources et hiérarchie de preuve

1. Git `origin/main` = `8dc54db0069eed78a8d8930cc2b035450ab56ad1` — code réel ;
2. GO Morris courant ;
3. Review Handoff entrant tip `adc95219050844620d15a0eef1dd43d29241ef5b` / blob `945a60fae70d4026ee0a18065768a8dda54290d1` ;
4. documents 100–104 (hashes entrants vérifiés) ;
5. documents 90–99 (contexte FPI / AF / UX / prérequis) ;
6. PR #308–#310 (fondations ExecutionRun) ; PR #311 (base main) ;
7. méthode SFIA v2.6 / template cycle / Review Pack & Handoff.

**Règle —** une capacité absente du code est **GAP**, pas une hypothèse positive. Toute donnée externe non prouvée localement : `EXTERNAL VALIDATION REQUIRED — NOT PROVEN IN REPO`.

---

## 6. Git Truth initial

| Champ | Valeur |
|---|---|
| **Branche initiale** | `backlog/sfia-studio-assistant-sfia-native-openai-technical-implementation-backlog` |
| **Branche IP** | `implementation-preparation/sfia-studio-assistant-sfia-native-openai-lot-ip-0a` |
| **HEAD** | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| **origin/main** | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| **Merge-base** | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| **Ahead / behind** | 0 / 0 |
| **Upstream** | aucun |
| **105/106/107 avant** | absents |

Hashes entrants 100–104 : **PASS** (identiques aux valeurs obligatoires du GO).

---

## 7. Périmètre LOT-IP-0A

| Item | Objectif borné |
|---|---|
| TB-00-01 | Inventaire auth/authz réel et réutilisabilité Admin/Morris / AuthorityGate |
| TB-00-02 | Adéquation pile AJV Draft-07 aux futurs contrats N2/N3 |
| TB-00-03 | Instruction Decision Pack store externe durable A2 |
| TB-00-06 | Frontière secrets server-only + catalogue logique config Admin |

Hors périmètre : LOT-IP-0B (TB-00-04/05) · LOT-IP-0C (TB-04-04) · LOT-D1…D5 · code · migrations · sélection techno.

---

## 8. Matrice des quatre items

| ID | Objectif | Sources | Capacité existante | Gap | Preuve | Résultat cycle | Décision encore requise | Conséquence lots aval |
|---|---|---|---|---|---|---|---|---|
| TB-00-01 | Inventaire auth | package.json · lib/oa/decision · lib/d1 · lib/ops1 · docs 102 | OA AuthorityResolver + anti-spoof ; HumanDecisionGate workflow ; stubs D1/OPS1 | Pas d’auth end-user ; pas middleware ; Admin absent ; AuthorityGate absent code ; Server Actions non gardés | E-AUTH-01…07 | Inventaire + options | D-ASST-IP0A-AUTH-01 | Bloque TB-03-01/02 ; ADR ADMIN-AUTHZ=B à réconcilier |
| TB-00-02 | Fit AJV N2/N3 | ajv 6.15 · AjvExecutionRun* · 13 schemas · tests · docs 100/102 | Fail-closed Draft-07 prouvé sur ExecutionRun | Pas de schémas Assistant N2/N3 ; AF-02 OPEN ; 2e pipeline doctrine | E-AJV-01…05 | Verdict **FIT WITH EXTENSIONS** | D-ASST-IP0A-AJV-01 | Bloque TB-02-03 |
| TB-00-03 | Store A2 | RepositoryPort · Memory · disclosure · docs 102 A2 | Port repository générique ; memory non durable | Pas d’adapter durable ; pas migrations ; pas unicité/CAS sur port | E-STORE-01…03 | Classes d’options + reco candidate | D-ASST-IP0A-STORE-01 | Bloque LOT-IP-0B · LOT-D1 · TB-01-* |
| TB-00-06 | Secrets/config | SecretSourcePort · Env/Fake · materializer · tests | Opaque resolve + server-only materialize + redaction | Catalogue Admin NEW ; Env non wiré compose ; OPENAI_* hors port | E-SEC-01…04 | Catalogue logique + reco | D-ASST-IP0A-SECRETS-01 | Impact TB-02-01 · config TTL |

---

## 9. Analyse TB-00-01 — Authentification et autorisation

### 9.1 Observations (preuves)

| Observation | Preuve |
|---|---|
| Aucune dépendance auth dans `package.json` (pas next-auth, clerk, lucia, jose, iron-session) | E-AUTH-01 |
| Aucun `middleware.ts` | E-AUTH-02 |
| Aucun Route Handler `route.ts` sous app | inventaire glob |
| Aucune session cookie / JWT Next.js | grep `next/headers` cookies |
| `HumanDecisionGate` = gate workflow ExecutionRun (`gateId`, `question`, `decision`) | E-AUTH-03 |
| `AuthorityGate` : **0** occurrence sous `app/**` (docs seulement) | grep |
| `Admin` : **0** occurrence sous `app/**` | grep |
| `AuthorityResolverPort` ignore authorityLevel/displayName client ; Morris = N3 ∧ `canActAsMorris` | E-AUTH-04 |
| `MemoryAuthorityResolver` in-memory, utilisé surtout tests | E-AUTH-05 |
| D1 `requireMonoOperator` fixe `actor-mono-i1` | E-AUTH-06 |
| OPS1 persiste `decided_by = 'Morris'` sans vérifier l’appelant | E-AUTH-07 |
| Server Actions présents sans garde d’identité à la frontière | `lib/*/actions.ts` |

### 9.2 Diagramme textuel du flux d’identité actuel

```text
[Browser]
   |  (pas de login / cookie / JWT)
   v
[App Router pages]
   |
   | Server Actions (non authentifiés)
   +-- D1 --> requireMonoOperator(actor-mono-i1)   [stub I1]
   +-- OPS1 --> sessionId format + decided_by='Morris' [label]
   +-- OA libs (AuthorityResolver / RecordHumanDecision)
        [disponibles en bibliothèque, non branchés sur Actions]
   |
   v
[SQLite OPS1/D1 locaux | Memory OA]  ≠ A2 durable Project store
```

### 9.3 Frontières de confiance (Sécurité / RSSI)

| Frontière | État |
|---|---|
| Identité end-user | **ABSENTE** |
| Autorisation domaine OA (N1/N2/N3/Morris) | **PRÉSENTE en lib** · **NON ENFORCÉE** à la frontière HTTP/Actions |
| Autorité Morris | Label / flag `canActAsMorris` · **pas** principal authentifié |
| Spoofing | Protégé **dans** OA resolver · **non** à la frontière Server Actions |
| Provider | Anti-provider-authority préservé conceptuellement (docs) · non retesté ici comme IAM |

**Conclusion RSSI candidate —** ne pas conclure « sécurité validée ». Cartographie de confiance : **trust-by-local-UI** aujourd’hui.

### 9.4 Capacités réutilisables (REUSE / EXTEND)

| Élément | Classe |
|---|---|
| AuthorityResolverPort + anti-spoof | REUSE / EXTEND |
| RecordHumanDecision / VerifyAuthority | EXTEND (brancher derrière auth) |
| HumanDecisionGate + transitions | EXTEND (consommation AuthorityGate future) |
| ActorReference roles | EXTEND (pas de rôle `admin`) |
| Audit decision ports | REUSE |

### 9.5 Gaps

1. Mécanisme d’authentification end-user **ABSENT** alors que ADR-ASST-ADMIN-AUTHZ-01=B suppose une auth existante à étendre.
2. Middleware / session / mapping user→actorId **ABSENT**.
3. Rôle Admin **ABSENT**.
4. AuthorityGate nommé **ABSENT** du code.
5. Garde Server Actions **ABSENTE**.
6. Evidence d’autorité durable (non-memory) **ABSENTE**.

### 9.6 Options candidates (non décidées)

| Option | Contenu | Commentaire |
|---|---|---|
| **A** | Établir une fondation d’authentification minimale, puis appliquer ADMIN-AUTHZ=B (rôles Admin/Morris) | Réconcilie l’écart ADR vs réalité |
| **B** | Ré-arbitrer ADMIN-AUTHZ (nouveau jeu d’options) car « existing auth » est factuellement absent | Si Morris refuse d’introduire une auth dans le FPI |
| **C** | Frontière trust locale explicite (mono-opérateur) **bornée hors pilote** | Dette de sécurité assumée · non production-ready |

### 9.7 Recommandation candidate

**Option A** — sans sélection de produit IAM : inventorier puis décider le mécanisme dans un cycle ultérieur borné ; réutiliser OA AuthorityResolver pour l’autorisation domaine.

### 9.8 Décision Morris requise

`D-ASST-IP0A-AUTH-01` — stratégie d’authentification / autorisation (document 106).

---

## 10. Analyse TB-00-02 — Adéquation AJV N2/N3

### 10.1 Observations

| Observation | Preuve |
|---|---|
| `ajv@^6.15.0` locké 6.15.0 | E-AJV-01 |
| Draft-07 · `allErrors: true` · `format: "full"` · `unknownFormats: "ignore"` · max 20 erreurs | E-AJV-02 |
| Port `ExecutionRunSchemaValidation` + adapter AJV | E-AJV-02 |
| 13 schémas ExecutionRun Draft-07 | E-AJV-03 |
| Ordre create : validate input → metadata/id → validate run → save | E-AJV-04 |
| Deuxième adapter AJV doctrine déjà présent | E-AJV-05 |
| Aucun schéma Assistant N2/N3 sous `app/**` | inventaire |
| `R-TECH-AF02-BOUNDARY-01` KEEP-OPEN | doc 102/103 |

### 10.2 Matrice besoins N1 / N2 / N3 vs capacité AJV

| Besoin | Capacité AJV 6.15 | État |
|---|---|---|
| N1 progressif (texte) | Hors chemin AJV strict | Boundary AF-02 OPEN |
| N2 delta structuré complet fail-closed | Draft-07 object/enum/additionalProperties/oneOf **prouvé** | Capable · schéma NEW manquant |
| N3 DecisionCandidate fail-closed | Même capacité | Capable · schéma NEW manquant |
| Pas d’appliquer partiel | Completeness + fail-closed ExecutionRun | Pattern réutilisable |

### 10.3 Matrice fail-closed

| Contrainte | Prouvé ExecutionRun | Requis Assistant |
|---|---|---|
| Validate `unknown` avant metadata/persist | oui | oui |
| Reject → pas de save | oui | oui |
| Nested validate | oui | oui |
| Erreurs normalisées (pas throw AJV brut) | oui | oui |

### 10.4 Verdict technique

**FIT WITH EXTENSIONS**

Preuve : la bibliothèque et le pattern fail-closed portent des contrats structurés Draft-07 de forme N2/N3. Extensions requises : schémas Assistant NEW · port généralisé ou twin · tests de conformance · clôture/arbitrage AF-02. Ce verdict **n’est pas** une décision Morris d’implémentation.

### 10.5 Risque double pipeline

Deux `new Ajv(` existent déjà (ExecutionRun + Doctrine). TB-02-03 interdit une **troisième** pipeline silencieuse pour Assistant. Stratégie candidate : étendre le **pattern** ExecutionRun (un surface de composition) sans nouvelle bibliothèque.

### 10.6 Options candidates

| Option | Contenu |
|---|---|
| **A** | EXTEND pattern ExecutionRun : nouveaux schémas N2/N3 + port/wiring dédié Assistant · même AJV6 |
| **B** | Factory AJV partagée (ExecutionRun + Doctrine + Assistant) pour hygiène |
| **C** | Ré-arbitrer VALIDATE-LIB si Draft-07 insuffisant (chemin NOT FIT) — seulement si preuve contraire |

### 10.7 Recommandation candidate

**Option A** (+ hygiène B optionnelle). Ne pas sélectionner une autre bibliothèque.

### 10.8 Décision Morris requise

`D-ASST-IP0A-AJV-01`.

---

## 11. Analyse TB-00-03 — Store externe durable A2

### 11.1 Observations

| Observation | Preuve |
|---|---|
| `ExecutionRunRepositoryPort` : save / getById / listByCorrelationId | E-STORE-01 |
| Adapter unique : Memory `Map` + structuredClone | E-STORE-02 |
| Disclosure `durable: false` · `multiInstance: false` · `restartSafe: false` | E-STORE-03 |
| Pas d’adapter sqlite/postgres/file pour ExecutionRun | inventaire |
| Pas d’outil de migration dans package.json / app | inventaire |
| Port sans transaction / CAS / unicité / idempotence key | E-STORE-01 |
| A2 : `external-durable-store;explicit-concurrency;no-embedded` | doc 102 |
| PERSIST=B déjà DECIDED | doc 102 |

**Anti-claim —** memory/fixture ≠ store A2.

### 11.2 Critères éliminatoires A2

1. Store **externe** (pas embedded ops).
2. **Durable** et **restart-safe**.
3. Compatible **multi-instance** / serverless.
4. Concurrence / unicité / idempotence **explicables**.
5. Migrations / backup-restore **envisageables**.
6. Séparation lane audit (AUDIT-STORE=B) possible.
7. Réversibilité / pas de lock-in inutile.

### 11.3 Classes d’options (pas de vendors)

| Classe | Description | Fit A2 | Statut |
|---|---|---|---|
| **A** | SQL relationnel managé avec transactions | Fort | EXTERNAL VALIDATION REQUIRED pour produit |
| **B** | Document/KV managé — cohérence forte à prouver | Possible avec caveats | EXTERNAL VALIDATION REQUIRED |
| **C** | Embedded / local-only (SQLite fichier, FS) | **Éliminé** pour store ops A2 (`no-embedded`) | Éliminé |
| **D** | Journal append-only + store requête | Complément audit ; rarement seul | EXTERNAL VALIDATION REQUIRED si primaire |

### 11.4 Matrice comparative (critères)

| Critère | A | B | C | D |
|---|---|---|---|---|
| Externe | oui* | oui* | non ops | dépend |
| Durable / restart | oui* | oui* | non multi-instance | dépend |
| Multi-instance | oui* | caveat | non | caveat |
| Transactions | fort | variable* | local | faible |
| Unicité / idempotence | fort | app-owned* | local | app-owned |
| Migrations | mature* | variable* | local | custom |
| Backup/restore | mature* | variable* | local | custom |
| FinOps facteurs | storage · query · egress · backup · ops | idem | faible local / interdit A2 | storage+ops |
| Testabilité locale | via conteneur/dev* | via émulateur* | facile mais interdit ops | custom |

\* = `EXTERNAL VALIDATION REQUIRED — NOT PROVEN IN REPO` pour offre concrète, SLA, prix.

### 11.5 FinOps (facteurs, pas de tarifs)

| Facteur | Nature |
|---|---|
| Stockage durable Project + audit | fixe / volume |
| Requêtes / compute | variable |
| Egress instance↔store | variable (serverless) |
| Backup / restore | fixe + ops |
| Exploitation multi-instance | ops |

Aucun tarif inventé. `R-TECH-FINOPS-HARD-01` KEEP-OPEN. TB-04-04 hors lot.

### 11.6 RGPD (technique, pas juridique)

Catégories potentielles : métadonnées projet · contenus conversationnels · audit provider · preuves d’exécution. Impacts : stockage · audit lane · purge/TTL · backup. **Pas** de durée · **pas** de base légale · `R-TECH-TTL-01` KEEP-OPEN.

### 11.7 Performance

Volumes cibles : `UNKNOWN — MORRIS OR PRODUCT INPUT REQUIRED`. Critères éliminatoires : transactions + concurrence explicite. Pas de SLO.

### 11.8 Impacts aval

| Aval | Effet |
|---|---|
| TB-00-04 / TB-00-05 / LOT-IP-0B | bloqués jusqu’à décision store |
| LOT-D1 | NOT AUTHORIZED jusqu’à décision |
| TB-01-* | ports durables ≠ memory |

### 11.9 Recommandation candidate

**Classe A** (SQL relationnel managé avec transactions) comme option de tête A2-compatible. **Classe C éliminée** pour ops. **Aucune technologie nommée comme choisie.**

### 11.10 Décision Morris requise

`D-ASST-IP0A-STORE-01`.

---

## 12. Analyse TB-00-06 — Secrets server-only et configuration Admin

### 12.1 Observations

| Observation | Preuve |
|---|---|
| `SecretSourcePort.resolve` opaque (`id`, `present`) — pas de string secret | E-SEC-01 |
| `EnvSecretSourceAdapter` + `FakeSecretSourceAdapter` | E-SEC-02 |
| `ServerOnlySecretMaterializer` hors barrel public | E-SEC-03 |
| Tests anti-fuite opaque / redaction events | E-SEC-04 |
| Compose providers wire **Fake** par défaut ; Env non branché | composeExecutionRunProviders |
| `OPENAI_API_KEY` lu côté platform AI, hors SecretSourcePort aujourd’hui | platform/ai/config.ts |
| ADR SECRETS=A (env server-only) DECIDED | doc 102 |

### 12.2 Catalogue logique (aucune valeur)

| Identifiant logique | Nature | Consommateur | Propriétaire décision | Emplacement logique | Matérialisation | Exposition interdite | Validation | Statut | Réserve |
|---|---|---|---|---|---|---|---|---|---|
| `openai.api_key` | secret | adapter AI | Morris (existence) / Ops deploy | env server-only / futur manager | server-only materialize | browser · logs · events · evidence · ports publics | fail-closed présence | NOT SELECTED valeur | — |
| `openai.model` | non-secret | AI config / Admin | Admin | config | lecture config | credential-like leak N/A | format/enum futur | NOT SELECTED | — |
| `git.read_token` | secret | git read adapter | Ops | env | server-only | idem secrets | présence | existant platform | — |
| `test.secret` | secret fixture | tests | Engineering | Fake | opaque fake | idem | conformance | fixture | — |
| `admin.ttl` | non-secret | purge | Admin | config durable après store | config | — | bornes futures | NOT SELECTED · R-TECH-TTL-01 | KEEP-OPEN |
| `admin.soft_cap` | non-secret | metering | Admin | config | config | — | bornes | NOT SELECTED | — |
| `admin.hard_cap` | non-secret policy | FinOps | Morris | Decision Pack futur | — | — | — | DEFER · R-TECH-FINOPS-HARD-01 | KEEP-OPEN |
| `secret_manager.*` | secret futur | replace env | Morris gate | futur adapter même port | futur | idem | — | NOT SELECTED | — |

### 12.3 Gaps

1. Catalogue Admin (TTL, modèle, soft cap) **NEW** — non implémenté.
2. Alignement platform `OPENAI_*` vers SecretSourcePort **GAP**.
3. Secret manager **NOT SELECTED** (trajectoire future ADR).
4. Aucun `.env` à créer dans ce cycle.

### 12.4 Options candidates

| Option | Contenu |
|---|---|
| **A** | REUSE SecretSourcePort + materializer server-only · EXTEND catalogue Admin non-secret séparé · wire Env en Delivery future |
| **B** | Introduire secret manager dès maintenant | Premature · EXTERNAL VALIDATION |
| **C** | Laisser `OPENAI_*` hors port indéfiniment | Dette de frontière |

### 12.5 Recommandation candidate

**Option A**.

### 12.6 Décision Morris requise

`D-ASST-IP0A-SECRETS-01`.

---

## 13. Matrice consolidée des dépendances

| Décision / item | Dépend de | Débloque |
|---|---|---|
| AUTH-01 | inventaire (fait) | TB-03-01 · TB-03-02 |
| AJV-01 | inventaire (fait) · VALIDATE-LIB=A | TB-02-03 |
| STORE-01 | A2 + PERSIST=B | TB-00-04/05 · LOT-IP-0B · LOT-D1 · TB-01-* |
| SECRETS-01 | SECRETS=A | TB-02-01 config · Admin catalog |
| STORE-01 avant data-access/platform | obligatoire | LOT-IP-0B |

Ordre d’arbitrage recommandé : **STORE-01 → AUTH-01 → SECRETS-01 → AJV-01** (store conditionne le plus d’aval ; AJV peut être parallèle après STORE si Morris le souhaite).

---

## 14. Matrice des risques et dettes évitées

| Risque évité par ce cycle | Comment |
|---|---|
| Seconde pile auth inventée sans inventaire | inventaire factuel |
| Seconde pipeline AJV silencieuse | verdict FIT WITH EXTENSIONS + options |
| Memory présenté comme durable | anti-claim + disclosure |
| Sélection store implicite | classes only · Decision Pack |
| Fuite secrets dans docs | catalogue logique sans valeurs |
| Consommation LOT-IP-0B/D1 | explicite NOT AUTHORIZED |

---

## 15. Matrice REUSE / EXTEND / NEW DOMAIN-SPECIFIC / N/A

| Capacité | Classe | Notes |
|---|---|---|
| AuthorityResolver / anti-spoof | REUSE/EXTEND | brancher après auth |
| HumanDecisionGate | EXTEND | ≠ IAM |
| Server Actions guards | NEW | après AUTH-01 |
| Middleware / session | NEW | si option A auth |
| Admin role | NEW | absent code |
| AuthorityGate nommé | NEW | docs only |
| AJV 6.15 + pattern fail-closed | REUSE/EXTEND | schémas Assistant NEW |
| 13 schémas ExecutionRun | N/A pour N2/N3 | preuve de stack seulement |
| ExecutionRunRepositoryPort | EXTEND | adapter durable NEW après STORE |
| Memory repository | N/A durable | fixture only |
| SecretSourcePort / materializer | REUSE/EXTEND | |
| Catalogue Admin non-secret | NEW | |
| ORM / migration tool | N/A | NOT SELECTED · LOT-IP-0B |

---

## 16. Impacts sur A2 et les dix ADR

| Élément | Impact LOT-IP-0A |
|---|---|
| A2 constraints | Confirmés ; memory incompatible ; store Decision Pack préparé |
| TOPO=A | préservé |
| PERSIST=B | Decision Pack store instruit · non sélectionné |
| SERVER=C | préservé · dépendra plateforme après store |
| PURGE=C | préservé · TTL KEEP-OPEN |
| AUDIT-STORE=B | lane logique à respecter dans store |
| STREAM=A | hors lot |
| VALIDATE-LIB=A | fit WITH EXTENSIONS · pas de lib alternative |
| SECRETS=A | REUSE confirmé · catalogue Admin NEW |
| ADMIN-AUTHZ=B | **tension** : auth existante absente → AUTH-01 |
| HEALTH=C | hors lot |

---

## 17. Impacts sur les 21 impacts techniques

Les 21 impacts du document 102 restent **COVERED** par le backlog 103. LOT-IP-0A prépare les décisions pour les impacts auth, validation, store, secrets **sans** les implémenter.

---

## 18. Réserves et non-sélections

### Réserves KEEP-OPEN

| Réserve | Lien |
|---|---|
| R-TECH-TTL-01 | TB-00-06 · Admin TTL |
| R-TECH-FINOPS-HARD-01 | hors lot · TB-04-04 / LOT-IP-0C |
| R-TECH-AF02-BOUNDARY-01 | TB-00-02 |
| R-UX-FPI-02/03/04 · R-UX-04 | préservées |

### Non-sélections préservées

store · fournisseur · ORM · migration tool · cloud · région · instances · IAM · observabilité vendor · secret manager · modèle OpenAI · endpoint · TTL valeur · hard cap · tarifs · SLO · schéma physique · IaC.

---

## 19. Conditions de passage après arbitrage Morris

Avant LOT-IP-0B / LOT-D1 / code :

1. ChatGPT valide 105/106 ;
2. Morris arbitre document 106 (`ARBITRATE LOT-IP-0A DECISION PACK`) ;
3. STORE-01 décidé si LOT-IP-0B/D1 visés ;
4. AUTH-01 décidé avant AuthorityGate Delivery ;
5. AJV-01 décidé avant TB-02-03 ;
6. SECRETS-01 décidé avant wiring secrets live ;
7. Delivery reste NOT-CONSUMED jusqu’à GO Delivery distinct.

---

## 20. Actions autorisées et interdites

### Autorisées (ce cycle)

Créer 105/106 · mettre à jour 103 · Review Pack · handoff L3.

### Interdites

Décider les options 106 · code · packages · .env · secrets · migrations · SQL · sélection techno · fermer réserve · LOT-IP-0B/0C · LOT-D* · Delivery · commit/push projet · PR/merge · créer 107.

---

## 21. Verdict

**LOT-IP-0A IMPLEMENTATION PREPARATION EXECUTED —**
**TB-00-01 AUTH INVENTORY COMPLETE —**
**TB-00-02 AJV N2/N3 FIT ASSESSED (FIT WITH EXTENSIONS) —**
**TB-00-03 A2 DURABLE STORE DECISION PACK PREPARED —**
**TB-00-06 SERVER-ONLY SECRETS AND ADMIN CONFIG PREPARATION COMPLETE —**
**DOCUMENT 105 CREATED — DOCUMENT 106 DECISION PACK READY —**
**ALL D-ASST-IP0A DECISIONS NOT DECIDED —**
**RECOMMENDATIONS REMAIN CANDIDATE —**
**NO TECHNOLOGY SELECTED —**
**DELIVERY NOT-CONSUMED —**
**READY FOR CHATGPT VALIDATION AND MORRIS LOT-IP-0A DECISION PACK ARBITRATION**

---

## 22. Prochaine gate candidate

```text
GO DECISIONS IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — ARBITRATE LOT-IP-0A DECISION PACK
```

**Non consommée.** N’autorise ni code, ni Delivery, ni LOT-IP-0B, ni LOT-D1 sans décisions Morris explicites.
```

---

## Document 106 — contenu complet

```markdown
# SFIA Studio — Assistant SFIA natif OpenAI — LOT-IP-0A Decision Pack

## 1. Statut

**DECISION PACK READY — NOT DECIDED — MORRIS ARBITRATION REQUIRED**

| Champ | Valeur |
|---|---|
| **Document** | `projects/sfia-studio/106-assistant-sfia-native-openai-implementation-preparation-lot-ip-0a-decision-pack.md` |
| **Analyse source** | `projects/sfia-studio/105-assistant-sfia-native-openai-implementation-preparation-lot-ip-0a.md` |
| **GO d’exécution** | `EXECUTE LOT-IP-0A` — consommé · n’adopte **aucune** option ci-dessous |
| **Document decisions-applied** | **non créé** (interdit dans ce cycle) |

Toute option « recommandée » est **candidate**. Aucune case n’est précochée comme adoptée.

---

## 2. GO et autorité

```text
GO IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — EXECUTE LOT-IP-0A (TB-00-01, TB-00-02, TB-00-03, TB-00-06)
```

Consommé : 2026-08-05 15:17 CEST / 13:17 UTC.

Gate suivante candidate :

```text
GO DECISIONS IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — ARBITRATE LOT-IP-0A DECISION PACK
```

---

## 3. Ordre d’arbitrage recommandé

1. **D-ASST-IP0A-STORE-01** — conditionne LOT-IP-0B, LOT-D1, TB-01-*
2. **D-ASST-IP0A-AUTH-01** — conditionne TB-03-01/02 ; tension ADMIN-AUTHZ=B
3. **D-ASST-IP0A-SECRETS-01** — frontière secrets/config avant provider live
4. **D-ASST-IP0A-AJV-01** — peut être arbitrée en parallèle de AUTH/SECRETS après STORE

Dépendances : STORE avant data-access/platform ; AUTH avant AuthorityGate Delivery ; AJV avant TB-02-03 ; SECRETS avant wiring live.

---

## 4. Matrice décisions → items

| Décision | Item(s) LOT-IP-0A | Statut |
|---|---|---|
| D-ASST-IP0A-AUTH-01 | TB-00-01 | NOT DECIDED |
| D-ASST-IP0A-AJV-01 | TB-00-02 | NOT DECIDED |
| D-ASST-IP0A-STORE-01 | TB-00-03 | NOT DECIDED |
| D-ASST-IP0A-SECRETS-01 | TB-00-06 | NOT DECIDED |

---

## 5. Matrice décisions → lots

| Décision | LOT-IP-0B | LOT-IP-0C | LOT-D1…D5 | Autres |
|---|---|---|---|---|
| STORE-01 | **débloque** (après décision) | — | **prérequis** LOT-D1 | TB-01-* |
| AUTH-01 | — | — | prérequis gates N3 | TB-03-* |
| AJV-01 | — | — | — | TB-02-03 |
| SECRETS-01 | — | — | — | TB-02-01 |

LOT-IP-0B / 0C restent **DEFERRED**. LOT-D* restent **NOT AUTHORIZED** jusqu’à GOs distincts.

---

## 6. Décision D-ASST-IP0A-AUTH-01

| Champ | Contenu |
|---|---|
| **Statut** | **NOT DECIDED** |
| **Question exacte** | Quelle stratégie d’authentification / autorisation adopter pour Admin/Morris et AuthorityGate, sachant qu’aucune auth end-user n’existe dans le code alors que ADR-ASST-ADMIN-AUTHZ-01=B suppose une auth existante à étendre ? |
| **Contexte** | Inventaire 105 §9 : pas de deps auth, pas de middleware, pas de session ; OA AuthorityResolver présent ; HumanDecisionGate ≠ IAM ; Admin absent ; AuthorityGate absent du code ; Server Actions non gardés. |
| **Preuves** | E-AUTH-01…07 · doc 102 ADMIN-AUTHZ=B |
| **Contraintes** | Anti-spoof OA à préserver · anti-provider-authority · pas de seconde pile auth parallèle aux primitives OA · pas de comptes créés dans ce pack · RSSI : ne pas conclure sécurité validée |

### Options

| Option | Description |
|---|---|
| **A** | Établir une fondation d’authentification minimale (mécanisme à choisir dans un cycle ultérieur borné), puis appliquer ADMIN-AUTHZ=B (rôles Admin/Morris) en réutilisant AuthorityResolver |
| **B** | Ré-arbitrer ADMIN-AUTHZ (nouveau Decision Pack) car la prémisse « existing auth » est factuellement fausse |
| **C** | Maintenir une frontière trust locale / mono-opérateur **explicitement hors pilote**, sans IdP, avec dette de sécurité documentée |

| Champ | Contenu |
|---|---|
| **Option recommandée candidate** | **A** |
| **Justification** | Réconcilie ADR=B avec la réalité Git sans abandonner le modèle d’autorité OA déjà codé |
| **Avantages A** | Alignement ADMIN-AUTHZ=B · réutilise anti-spoof · chemin vers AuthorityGate |
| **Inconvénients A** | Introduit un mécanisme auth (coût) · EXTERNAL VALIDATION sur produit IAM |
| **Risques** | Spoofing tant que Actions non gardés · confusion HumanDecisionGate/IAM |
| **Dette** | Si C : dette sécurité bloquante pilote |
| **Impacts A2** | Auth orthogone au store · evidence durable pourra dépendre du store |
| **Impacts ADR** | ADMIN-AUTHZ=B préservé sous A · reouvert sous B |
| **Impacts backlog** | Débloque TB-03-01/02 après décision |
| **Impacts lots** | Pas LOT-IP-0B · prérequis LOT-D* governance |
| **Réserves** | Aucune fermeture |
| **Validations externes** | Produit IAM / IdP : EXTERNAL VALIDATION REQUIRED |
| **Conséquence de non-décision** | TB-03-* restent bloqués · ADR tension non résolue |
| **Gate Morris** | ARBITRATE LOT-IP-0A DECISION PACK |
| **Réponse attendue** | AUTH-01 = A \| B \| C (+ contraintes éventuelles) |

---

## 7. Décision D-ASST-IP0A-AJV-01

| Champ | Contenu |
|---|---|
| **Statut** | **NOT DECIDED** |
| **Question exacte** | Quelle stratégie de validation structurée N2/N3 retenir, étant donné le verdict technique FIT WITH EXTENSIONS sur AJV 6.15 Draft-07 et l’absence de schémas Assistant en code ? |
| **Contexte** | 105 §10 · VALIDATE-LIB=A · 13 schémas ExecutionRun prouvent la stack, **pas** les contrats Assistant · doctrine a déjà un 2e adapter AJV · AF-02 OPEN |
| **Preuves** | E-AJV-01…05 · tests fail-closed ExecutionRun |
| **Contraintes** | Pas de bibliothèque alternative silencieuse · pas de 3e pipeline ad hoc · Draft 2020-12 non supporté sans nouvelle dep |

### Options

| Option | Description |
|---|---|
| **A** | EXTEND le pattern ExecutionRun : schémas N2/N3 NEW + port/wiring Assistant · même AJV6 |
| **B** | Factory AJV partagée (ExecutionRun + Doctrine + Assistant) en plus de A |
| **C** | Ré-arbitrer VALIDATE-LIB (chemin NOT FIT) si Morris exige des features hors Draft-07 |

| Champ | Contenu |
|---|---|
| **Option recommandée candidate** | **A** (B optionnel hygiène) |
| **Justification** | Preuve fail-closed existante · conforme VALIDATE-LIB=A · minimise dette double pipeline |
| **Avantages** | Réutilisation prouvée · tests clonables |
| **Inconvénients** | Schémas/tests NEW à écrire plus tard · AF-02 encore OPEN |
| **Risques** | Double/triple pipeline si orchestrateur crée son propre `new Ajv` |
| **Dette** | C : coût re-sélection lib |
| **Impacts A2** | Aucun direct |
| **Impacts ADR** | VALIDATE-LIB=A préservé sous A/B |
| **Impacts backlog** | Débloque TB-02-03 après décision |
| **Impacts lots** | — |
| **Réserves** | R-TECH-AF02-BOUNDARY-01 KEEP-OPEN |
| **Validations externes** | N/A repo · schémas N2/N3 à formaliser depuis docs 100 |
| **Conséquence de non-décision** | TB-02-03 bloqué |
| **Gate Morris** | ARBITRATE LOT-IP-0A DECISION PACK |
| **Réponse attendue** | AJV-01 = A \| B \| C |

---

## 8. Décision D-ASST-IP0A-STORE-01

| Champ | Contenu |
|---|---|
| **Statut** | **NOT DECIDED** |
| **Question exacte** | Quelle **classe** de store externe durable adopter pour satisfaire A2 (`external-durable-store;explicit-concurrency;no-embedded`) et PERSIST=B, sans sélectionner encore un fournisseur/ORM/outil de migration ? |
| **Contexte** | 105 §11 · seul adapter ExecutionRun = memory Map · disclosure non durable · migrations ABSENT · LOT-IP-0B attend cette décision |
| **Preuves** | E-STORE-01…03 · doc 102 A2/PERSIST=B |
| **Contraintes** | Embedded ops interdit · pas de prix inventés · AUDIT-STORE=B lane logique · backup/restore avant pilote · RGPD technique sans durée légale |

### Options

| Option | Description |
|---|---|
| **A** | Classe SQL relationnel managé avec transactions |
| **B** | Classe document/KV managé (cohérence/transactions à prouver) |
| **C** | Classe embedded/local-only | **Non viable A2 ops** — option éliminatoire documentée |
| **D** | Classe journal append-only + store requête (si primaire) |

| Champ | Contenu |
|---|---|
| **Option recommandée candidate** | **A** |
| **Justification** | Meilleur alignement transactions / unicité / concurrence / migrations / backup sous A2 |
| **Avantages A** | ACID · outils migration matures* · testabilité via environnements* |
| **Inconvénients A** | Coût ops/egress* · schéma à concevoir plus tard |
| **Risques** | Sélection vendor prématurée · memory confondu avec durable |
| **Dette** | B si cohérence insuffisante · C si choisi malgré A2 |
| **Impacts A2** | Direct — réalise PERSIST=B |
| **Impacts ADR** | PERSIST=B · AUDIT-STORE=B · SERVER=C couplage futur |
| **Impacts backlog** | Débloque TB-00-04/05 · TB-01-* |
| **Impacts lots** | Débloque **préparation** LOT-IP-0B · pas exécution auto · LOT-D1 toujours NOT AUTHORIZED sans GO Delivery |
| **Réserves** | R-TECH-TTL-01 · R-TECH-FINOPS-HARD-01 KEEP-OPEN |
| **Validations externes** | Produit, région, SLA, prix : EXTERNAL VALIDATION REQUIRED |
| **Conséquence de non-décision** | LOT-IP-0B et LOT-D1 restent bloqués |
| **Gate Morris** | ARBITRATE LOT-IP-0A DECISION PACK |
| **Réponse attendue** | STORE-01 = A \| B \| D (C non recommandé) + contraintes |

\* EXTERNAL VALIDATION REQUIRED — NOT PROVEN IN REPO

**Anti-claim —** choisir la classe A **n’est pas** choisir PostgreSQL, Neon, Supabase, SQLite, etc.

---

## 9. Décision D-ASST-IP0A-SECRETS-01

| Champ | Contenu |
|---|---|
| **Statut** | **NOT DECIDED** |
| **Question exacte** | Quelle stratégie secrets server-only et configuration Admin retenir pour FPI, en réutilisant SecretSourcePort sans créer de secret ni sélectionner de secret manager ? |
| **Contexte** | 105 §12 · SECRETS=A DECIDED · port opaque + materializer server-only · Fake wiré · Env présent non wiré · catalogue Admin NEW · OPENAI_* hors port |
| **Preuves** | E-SEC-01…04 · ADR SECRETS=A |
| **Contraintes** | Aucune valeur secret · fail-closed présence · redaction · pas de 2e stack · TTL/hard cap non valorisés |

### Options

| Option | Description |
|---|---|
| **A** | REUSE SecretSourcePort + materializer · EXTEND catalogue Admin non-secret · wire Env en Delivery future · secret manager différé |
| **B** | Introduire un secret manager dès maintenant (vendor EXTERNAL VALIDATION) |
| **C** | Laisser durablement les secrets platform (`OPENAI_*`) hors SecretSourcePort | Dette de frontière |

| Champ | Contenu |
|---|---|
| **Option recommandée candidate** | **A** |
| **Justification** | Conforme SECRETS=A · anti-fuite déjà testée · sépare secret vs config Admin |
| **Avantages** | Moindre surface · trajectoire manager réversible (ADR) |
| **Inconvénients** | Alignement platform OPENAI_* à planifier · catalogue Admin à bâtir |
| **Risques** | Fuite si materialize exporté · confusion secret/config |
| **Dette** | C : deux régimes secrets |
| **Impacts A2** | Config Admin pourra être durable après STORE |
| **Impacts ADR** | SECRETS=A préservé |
| **Impacts backlog** | TB-02-01 · TB-00-06 closure après décision |
| **Impacts lots** | — |
| **Réserves** | R-TECH-TTL-01 · R-TECH-FINOPS-HARD-01 KEEP-OPEN |
| **Validations externes** | Secret manager (si B) : EXTERNAL VALIDATION REQUIRED |
| **Conséquence de non-décision** | Catalogue Admin et wiring live restent indéfinis |
| **Gate Morris** | ARBITRATE LOT-IP-0A DECISION PACK |
| **Réponse attendue** | SECRETS-01 = A \| B \| C |

---

## 10. Matrice des réserves

| Réserve | Effet sur pack | Statut |
|---|---|---|
| R-TECH-TTL-01 | TTL non valorisé · SECRETS/Admin | KEEP-OPEN |
| R-TECH-FINOPS-HARD-01 | hors LOT-IP-0A · LOT-IP-0C | KEEP-OPEN |
| R-TECH-AF02-BOUNDARY-01 | AJV/N1 boundary | KEEP-OPEN |
| R-UX-FPI-02/03/04 · R-UX-04 | hors lot | KEEP-OPEN |

Aucune réserve fermée par ce pack.

---

## 11. Matrice des non-sélections

| Élément | Statut |
|---|---|
| Store fournisseur / produit nommé | NOT SELECTED |
| ORM | NOT SELECTED |
| Outil de migration | NOT SELECTED |
| Cloud / région / instances | NOT SELECTED |
| IAM / IdP produit | NOT SELECTED |
| Secret manager | NOT SELECTED |
| Observabilité vendor | NOT SELECTED |
| Modèle / endpoint OpenAI | NOT SELECTED |
| TTL / hard cap / tarifs / SLO | NOT SELECTED |
| Schéma physique / SQL / IaC | NOT SELECTED |

---

## 12. Conséquences Delivery

`DELIVERY-GATE=NOT-CONSUMED`.

Même après arbitrage de ce pack :

- aucun GO code automatique ;
- LOT-IP-0B nécessite un GO d’exécution distinct ;
- LOT-D1…D5 restent NOT AUTHORIZED jusqu’à GO Delivery ;
- aucune migration / secret / config runtime n’est créée par l’arbitrage seul.

---

## 13. Verdict

**DECISION PACK READY — NOT DECIDED — MORRIS ARBITRATION REQUIRED —**
**FOUR DECISIONS D-ASST-IP0A-* PRESENT —**
**RECOMMENDATIONS CANDIDATE ONLY —**
**NO TECHNOLOGY SELECTED —**
**NO DOCUMENT 107 —**
**DELIVERY NOT-CONSUMED**

---

## 14. Prochaine gate

```text
GO DECISIONS IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — ARBITRATE LOT-IP-0A DECISION PACK
```

Candidate · non consommée · n’autorise ni code, ni Delivery, ni LOT-IP-0B, ni LOT-D1 sans décisions Morris explicites.
```

---

## Document 103 — sections modifiées (complètes)

```markdown
## 1. Statut

**LOT-IP-0A IMPLEMENTATION PREPARATION EXECUTED —**
**DECISION PACK READY — MORRIS ARBITRATION REQUIRED —**
**TECHNICAL BACKLOG PRIORITIES REMAIN VALIDATED —**
**P0=6 / P1=13 / P2=13 / P3=1 —**
**LOT-IP-0B DEFERRED — LOT-IP-0C DEFERRED —**
**LOT-D1 TO LOT-D5 NOT AUTHORIZED —**
**DELIVERY NOT-CONSUMED —**
**NO ITEM DONE — NO TECHNOLOGY SELECTED — NO CODE AUTHORIZED**

| Champ | Valeur |
|---|---|
| **Document** | `projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md` |
| **Items** | 33 |
| **Épics** | 7 (EPIC-TB-00 … EPIC-TB-06) |
| **Documents 90–102** | Inchangés |
| **Delivery** | NOT-CONSUMED |
```

```markdown
## 1ter. GO Morris — exécution LOT-IP-0A

```text
GO IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — EXECUTE LOT-IP-0A (TB-00-01, TB-00-02, TB-00-03, TB-00-06)
```

| Champ | Valeur |
|---|---|
| **Autorité** | Morris |
| **Consommation** | 2026-08-05 15:17 CEST (+0200) / 13:17 UTC |
| **Profil** | **Critical** |
| **Effet** | Exécution **documentaire** LOT-IP-0A · analyses 105 · Decision Pack 106 · Delivery **NOT-CONSUMED** |
| **Non-effet** | Pas d’adoption des options 106 · pas de techno · pas de code · pas de LOT-IP-0B/0C · pas de LOT-D* |

### Historique d’exécution LOT-IP-0A

| Étape | Résultat |
|---|---|
| TB-00-01 | Inventaire auth complet — auth end-user ABSENTE · OA AuthorityResolver REUSE/EXTEND |
| TB-00-02 | Verdict technique **FIT WITH EXTENSIONS** — schémas Assistant NEW requis |
| TB-00-03 | Classes store A2 préparées — reco candidate classe SQL managé (non sélectionnée) |
| TB-00-06 | Catalogue logique secrets/config — REUSE SecretSourcePort |
| Documents | `105-…-lot-ip-0a.md` · `106-…-lot-ip-0a-decision-pack.md` |
| Décisions D-ASST-IP0A-* | **toutes NOT DECIDED** |

---
```

```markdown
## 22. Lots

### LOT-IP-0 (historique)

**SUPERSEDED BY DEPENDENCY-SAFE SPLIT LOT-IP-0A / LOT-IP-0B / LOT-IP-0C**

Motif : le lot historique regroupait TB-00-01…06 + TB-04-04 alors que TB-00-04/05 dépendent de TB-00-03 et TB-04-04 dépend de TB-02-05 (D-ASST-BLG-LOT-STRUCTURE-01).

### LOT-IP-0A — Foundational Decision Preparation

| Champ | Valeur |
|---|---|
| **Items** | TB-00-01 · TB-00-02 · TB-00-03 · TB-00-06 |
| **Dépendances backlog entrantes** | aucune |
| **Nature** | documentation / inventaire / analyse / Decision Pack uniquement |
| **Statut** | **IMPLEMENTATION PREPARATION EXECUTED — DECISION PACK READY — MORRIS ARBITRATION REQUIRED** |
| **Décision de sélection** | D-ASST-BLG-FIRST-LOT-01 (antérieure) |
| **GO d’exécution** | consommé 2026-08-05 15:17 CEST |
| **Analyses** | `projects/sfia-studio/105-assistant-sfia-native-openai-implementation-preparation-lot-ip-0a.md` |
| **Decision Pack** | `projects/sfia-studio/106-assistant-sfia-native-openai-implementation-preparation-lot-ip-0a-decision-pack.md` |
| **Décisions D-ASST-IP0A-*** | **NOT DECIDED** |
| **Items DONE** | **aucun** |
| **Code / techno / Delivery** | toujours interdits |

### LOT-IP-0B — Store-Dependent Decision Preparation

| Champ | Valeur |
|---|---|
| **Items** | TB-00-04 · TB-00-05 |
| **Dépendance** | TB-00-03 |
| **Statut** | **DEFERRED — NOT SELECTED — FUTURE MORRIS GATE REQUIRED** |

### LOT-IP-0C — Pre-Pilot FinOps Decision Preparation

| Champ | Valeur |
|---|---|
| **Items** | TB-04-04 |
| **Dépendance** | TB-02-05 |
| **Statut** | **DEFERRED — NOT SELECTED — FUTURE MORRIS GATE REQUIRED** |
| **Note** | Requis avant pilote · ne bloque pas l’exécution future de TB-02-05 |

### LOT-D1 à LOT-D5

**NOT AUTHORIZED** — inchangés (persist foundation · Assistant N1 · N2/N3 Authority · lifecycle · pilot hardening).

Aucun lot Delivery sélectionné. LOT-IP-0A préparation **documentaire** exécutée · options Decision Pack **non** adoptées.


---
```

```markdown
## 26. Critères de passage

### Vers arbitrage LOT-IP-0A (prochaine)

- validation ChatGPT des documents 105/106 ;
- GO `ARBITRATE LOT-IP-0A DECISION PACK` Morris ;
- décisions D-ASST-IP0A-* encore **NOT DECIDED** jusqu’à ce GO.

### Vers LOT-IP-0B / LOT-D1 (futur)

- STORE-01 décidé ;
- GO d’exécution LOT-IP-0B ou Delivery distinct ;
- LOT-IP-0B reste **DEFERRED** · LOT-D* **NOT AUTHORIZED**.

### Vers Delivery (futur, non consommé)

- priorités validées (**fait**) ;
- LOT-IP-0A préparation exécutée (**fait**) · options 106 **arbitrées** ;
- store / migration / auth / AJV stratégie décidés si requis ;
- lot Delivery sélectionné Morris ;
- fichiers Delivery bornés ;
- réserves bloquantes identifiées ;
- cohérence 93/97/99/102/105/106.

**DELIVERY-GATE=NOT-CONSUMED** (D-ASST-BLG-DELIVERY-01).

---
```

```markdown
## 29. Actions autorisées

Tracer LOT-IP-0A dans 103 · maintenir 105/106 · publier handoff · (futur) arbitrer Decision Pack via GO Morris.

---
```

```markdown
## 30. Actions interdites

Adopter les options 106 sans GO · créer 107 · code · app/** · packages · .env · secrets · sélection techno · fermer réserve · marquer item DONE · exécuter LOT-IP-0B/0C · LOT-D* · Delivery · modifier 90–102/104 · commit/push projet · PR/merge.

---
```

```markdown
## 31. Anti-claims

LOT-IP-0A préparation exécutée **≠** options 106 adoptées · pas de techno choisie · pas d’item DONE · HumanDecisionGate ≠ auth · 13 schémas ExecutionRun ≠ contrats N2/N3 · memory ≠ A2 durable · LOT-IP-0B/0C DEFERRED · LOT-D* NOT AUTHORIZED · Delivery NOT-CONSUMED · réserves ouvertes · pas PR/merge projet.

---
```

```markdown
## 32. Verdict

**LOT-IP-0A IMPLEMENTATION PREPARATION EXECUTED —**
**TB-00-01 AUTH INVENTORY COMPLETE —**
**TB-00-02 AJV N2/N3 FIT ASSESSED —**
**TB-00-03 A2 DURABLE STORE DECISION PACK PREPARED —**
**TB-00-06 SERVER-ONLY SECRETS AND ADMIN CONFIG PREPARATION COMPLETE —**
**DOCUMENT 103 UPDATED — DOCUMENT 105 CREATED — DOCUMENT 106 DECISION PACK CREATED —**
**ALL D-ASST-IP0A DECISIONS NOT DECIDED —**
**RECOMMENDATIONS REMAIN CANDIDATE —**
**NO TECHNOLOGY SELECTED — NO ITEM DONE —**
**LOT-IP-0B DEFERRED — LOT-IP-0C DEFERRED —**
**LOT-D1 TO LOT-D5 NOT AUTHORIZED —**
**DELIVERY NOT-CONSUMED —**
**READY FOR CHATGPT VALIDATION AND MORRIS LOT-IP-0A DECISION PACK ARBITRATION**


---
```

```markdown
## 33. Prochaine gate candidate

```text
GO DECISIONS IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — ARBITRATE LOT-IP-0A DECISION PACK
```

Statut : **candidate uniquement — non consommée**.

N’autorise ni code, ni Delivery, ni LOT-IP-0B, ni LOT-D1 sans décisions Morris explicites.

**LOT-IP-0A PREPARATION RECORDED — MORRIS DECISION PACK ARBITRATION REQUIRED — DELIVERY NOT CONSUMED**
```


---

## Document 103 — useful diff (JSONL)

```jsonl
{"n": 1, "line": "diff --git a/.tmp-sfia-review/lot-ip-0a/103-before.md b/projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md"}
{"n": 2, "line": "index abc4641..2931db5 100644"}
{"n": 3, "line": "--- a/.tmp-sfia-review/lot-ip-0a/103-before.md"}
{"n": 4, "line": "+++ b/projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md"}
{"n": 5, "line": "@@ -2,15 +2,14 @@"}
{"n": 6, "line": " "}
{"n": 7, "line": " ## 1. Statut"}
{"n": 8, "line": " "}
{"n": 9, "line": "-**TECHNICAL BACKLOG PRIORITIES VALIDATED —**"}
{"n": 10, "line": "-**33 ITEM PRIORITIES ADOPTED BY MORRIS —**"}
{"n": 11, "line": "+**LOT-IP-0A IMPLEMENTATION PREPARATION EXECUTED —**"}
{"n": 12, "line": "+**DECISION PACK READY — MORRIS ARBITRATION REQUIRED —**"}
{"n": 13, "line": "+**TECHNICAL BACKLOG PRIORITIES REMAIN VALIDATED —**"}
{"n": 14, "line": " **P0=6 / P1=13 / P2=13 / P3=1 —**"}
{"n": 15, "line": "-**LOT-IP-0 RESTRUCTURED INTO DEPENDENCY-SAFE SUBLOTS —**"}
{"n": 16, "line": "-**LOT-IP-0A SELECTED AS FIRST IMPLEMENTATION-PREPARATION LOT —**"}
{"n": 17, "line": " **LOT-IP-0B DEFERRED — LOT-IP-0C DEFERRED —**"}
{"n": 18, "line": " **LOT-D1 TO LOT-D5 NOT AUTHORIZED —**"}
{"n": 19, "line": " **DELIVERY NOT-CONSUMED —**"}
{"n": 20, "line": "-**NO ITEM DONE — NO TECHNOLOGY SELECTED — NO IMPLEMENTATION AUTHORIZED**"}
{"n": 21, "line": "+**NO ITEM DONE — NO TECHNOLOGY SELECTED — NO CODE AUTHORIZED**"}
{"n": 22, "line": " "}
{"n": 23, "line": " | Champ | Valeur |"}
{"n": 24, "line": " |---|---|"}
{"n": 25, "line": "@@ -48,8 +47,35 @@ GO DECISIONS BACKLOG SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — VALIDATE TE"}
{"n": 26, "line": " "}
{"n": 27, "line": " Record formel : `projects/sfia-studio/104-assistant-sfia-native-openai-technical-implementation-backlog-decisions-applied.md`."}
{"n": 28, "line": " "}
{"n": 29, "line": "+"}
{"n": 30, "line": "+## 1ter. GO Morris — exécution LOT-IP-0A"}
{"n": 31, "line": "+"}
{"n": 32, "line": "+```text"}
{"n": 33, "line": "+GO IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — EXECUTE LOT-IP-0A (TB-00-01, TB-00-02, TB-00-03, TB-00-06)"}
{"n": 34, "line": "+```"}
{"n": 35, "line": "+"}
{"n": 36, "line": "+| Champ | Valeur |"}
{"n": 37, "line": "+|---|---|"}
{"n": 38, "line": "+| **Autorité** | Morris |"}
{"n": 39, "line": "+| **Consommation** | 2026-08-05 15:17 CEST (+0200) / 13:17 UTC |"}
{"n": 40, "line": "+| **Profil** | **Critical** |"}
{"n": 41, "line": "+| **Effet** | Exécution **documentaire** LOT-IP-0A · analyses 105 · Decision Pack 106 · Delivery **NOT-CONSUMED** |"}
{"n": 42, "line": "+| **Non-effet** | Pas d’adoption des options 106 · pas de techno · pas de code · pas de LOT-IP-0B/0C · pas de LOT-D* |"}
{"n": 43, "line": "+"}
{"n": 44, "line": "+### Historique d’exécution LOT-IP-0A"}
{"n": 45, "line": "+"}
{"n": 46, "line": "+| Étape | Résultat |"}
{"n": 47, "line": "+|---|---|"}
{"n": 48, "line": "+| TB-00-01 | Inventaire auth complet — auth end-user ABSENTE · OA AuthorityResolver REUSE/EXTEND |"}
{"n": 49, "line": "+| TB-00-02 | Verdict technique **FIT WITH EXTENSIONS** — schémas Assistant NEW requis |"}
{"n": 50, "line": "+| TB-00-03 | Classes store A2 préparées — reco candidate classe SQL managé (non sélectionnée) |"}
{"n": 51, "line": "+| TB-00-06 | Catalogue logique secrets/config — REUSE SecretSourcePort |"}
{"n": 52, "line": "+| Documents | `105-…-lot-ip-0a.md` · `106-…-lot-ip-0a-decision-pack.md` |"}
{"n": 53, "line": "+| Décisions D-ASST-IP0A-* | **toutes NOT DECIDED** |"}
{"n": 54, "line": "+"}
{"n": 55, "line": " ---"}
{"n": 56, "line": " "}
{"n": 57, "line": "+"}
{"n": 58, "line": " ## 2. GO Morris"}
{"n": 59, "line": " "}
{"n": 60, "line": " ```text"}
{"n": 61, "line": "@@ -1312,9 +1338,14 @@ Motif : le lot historique regroupait TB-00-01…06 + TB-04-04 alors que TB-00-04"}
{"n": 62, "line": " | **Items** | TB-00-01 · TB-00-02 · TB-00-03 · TB-00-06 |"}
{"n": 63, "line": " | **Dépendances backlog entrantes** | aucune |"}
{"n": 64, "line": " | **Nature** | documentation / inventaire / analyse / Decision Pack uniquement |"}
{"n": 65, "line": "-| **Statut** | **SELECTED BY MORRIS — EXECUTION NOT AUTHORIZED** |"}
{"n": 66, "line": "-| **Décision** | D-ASST-BLG-FIRST-LOT-01 |"}
{"n": 67, "line": "-| **Code / techno / Delivery** | interdits |"}
{"n": 68, "line": "+| **Statut** | **IMPLEMENTATION PREPARATION EXECUTED — DECISION PACK READY — MORRIS ARBITRATION REQUIRED** |"}
{"n": 69, "line": "+| **Décision de sélection** | D-ASST-BLG-FIRST-LOT-01 (antérieure) |"}
{"n": 70, "line": "+| **GO d’exécution** | consommé 2026-08-05 15:17 CEST |"}
{"n": 71, "line": "+| **Analyses** | `projects/sfia-studio/105-assistant-sfia-native-openai-implementation-preparation-lot-ip-0a.md` |"}
{"n": 72, "line": "+| **Decision Pack** | `projects/sfia-studio/106-assistant-sfia-native-openai-implementation-preparation-lot-ip-0a-decision-pack.md` |"}
{"n": 73, "line": "+| **Décisions D-ASST-IP0A-*** | **NOT DECIDED** |"}
{"n": 74, "line": "+| **Items DONE** | **aucun** |"}
{"n": 75, "line": "+| **Code / techno / Delivery** | toujours interdits |"}
{"n": 76, "line": " "}
{"n": 77, "line": " ### LOT-IP-0B — Store-Dependent Decision Preparation"}
{"n": 78, "line": " "}
{"n": 79, "line": "@@ -1337,7 +1368,7 @@ Motif : le lot historique regroupait TB-00-01…06 + TB-04-04 alors que TB-00-04"}
{"n": 80, "line": " "}
{"n": 81, "line": " **NOT AUTHORIZED** — inchangés (persist foundation · Assistant N1 · N2/N3 Authority · lifecycle · pilot hardening)."}
{"n": 82, "line": " "}
{"n": 83, "line": "-Aucun lot Delivery sélectionné. LOT-IP-0A n’est **pas** exécuté dans ce cycle."}
{"n": 84, "line": "+Aucun lot Delivery sélectionné. LOT-IP-0A préparation **documentaire** exécutée · options Decision Pack **non** adoptées."}
{"n": 85, "line": " "}
{"n": 86, "line": " "}
{"n": 87, "line": " ---"}
{"n": 88, "line": "@@ -1373,22 +1404,27 @@ TB-00-* (décisions) · TB-01-06 backup/restore · TB-04-02/04 · TB-05-02 · TB"}
{"n": 89, "line": " "}
{"n": 90, "line": " ## 26. Critères de passage"}
{"n": 91, "line": " "}
{"n": 92, "line": "-### Vers exécution LOT-IP-0A (future)"}
{"n": 93, "line": "+### Vers arbitrage LOT-IP-0A (prochaine)"}
{"n": 94, "line": "+"}
{"n": 95, "line": "+- validation ChatGPT des documents 105/106 ;"}
{"n": 96, "line": "+- GO `ARBITRATE LOT-IP-0A DECISION PACK` Morris ;"}
{"n": 97, "line": "+- décisions D-ASST-IP0A-* encore **NOT DECIDED** jusqu’à ce GO."}
{"n": 98, "line": " "}
{"n": 99, "line": "-- validation ChatGPT du record 104 ;"}
{"n": 100, "line": "-- GO `EXECUTE LOT-IP-0A` Morris explicite ;"}
{"n": 101, "line": "-- périmètre borné DOC/DECISION-PREP ;"}
{"n": 102, "line": "-- aucune sélection techno dans le GO d’exécution."}
{"n": 103, "line": "+### Vers LOT-IP-0B / LOT-D1 (futur)"}
{"n": 104, "line": "+"}
{"n": 105, "line": "+- STORE-01 décidé ;"}
{"n": 106, "line": "+- GO d’exécution LOT-IP-0B ou Delivery distinct ;"}
{"n": 107, "line": "+- LOT-IP-0B reste **DEFERRED** · LOT-D* **NOT AUTHORIZED**."}
{"n": 108, "line": " "}
{"n": 109, "line": " ### Vers Delivery (futur, non consommé)"}
{"n": 110, "line": " "}
{"n": 111, "line": " - priorités validées (**fait**) ;"}
{"n": 112, "line": "-- LOT-IP-0A exécuté et Decision Packs produits ;"}
{"n": 113, "line": "-- store / migration / auth / AJV fit décidés si requis ;"}
{"n": 114, "line": "+- LOT-IP-0A préparation exécutée (**fait**) · options 106 **arbitrées** ;"}
{"n": 115, "line": "+- store / migration / auth / AJV stratégie décidés si requis ;"}
{"n": 116, "line": " - lot Delivery sélectionné Morris ;"}
{"n": 117, "line": " - fichiers Delivery bornés ;"}
{"n": 118, "line": " - réserves bloquantes identifiées ;"}
{"n": 119, "line": "-- cohérence 93/97/99/102."}
{"n": 120, "line": "+- cohérence 93/97/99/102/105/106."}
{"n": 121, "line": " "}
{"n": 122, "line": " **DELIVERY-GATE=NOT-CONSUMED** (D-ASST-BLG-DELIVERY-01)."}
{"n": 123, "line": " "}
{"n": 124, "line": "@@ -1408,38 +1444,37 @@ Store tech/fournisseur · cloud · hébergeur · région · instances · ORM ·"}
{"n": 125, "line": " "}
{"n": 126, "line": " ## 29. Actions autorisées"}
{"n": 127, "line": " "}
{"n": 128, "line": "-Enregistrer décisions dans 103/104 · publier handoff · (futur) proposer GO exécution LOT-IP-0A."}
{"n": 129, "line": "+Tracer LOT-IP-0A dans 103 · maintenir 105/106 · publier handoff · (futur) arbitrer Decision Pack via GO Morris."}
{"n": 130, "line": " "}
{"n": 131, "line": " ---"}
{"n": 132, "line": " "}
{"n": 133, "line": " ## 30. Actions interdites"}
{"n": 134, "line": " "}
{"n": 135, "line": "-Exécuter LOT-IP-0A · produire Decision Packs dans ce cycle · code · app/** · packages · sélection techno · Delivery · fermer réserve · marquer item DONE · modifier 90–102 · créer 105 · commit/push projet · PR/merge."}
{"n": 136, "line": "+Adopter les options 106 sans GO · créer 107 · code · app/** · packages · .env · secrets · sélection techno · fermer réserve · marquer item DONE · exécuter LOT-IP-0B/0C · LOT-D* · Delivery · modifier 90–102/104 · commit/push projet · PR/merge."}
{"n": 137, "line": " "}
{"n": 138, "line": " ---"}
{"n": 139, "line": " "}
{"n": 140, "line": " ## 31. Anti-claims"}
{"n": 141, "line": " "}
{"n": 142, "line": "-LOT-IP-0A **sélectionné ≠ exécuté** · pas de Decision Pack produit · pas de techno choisie · pas d’item DONE · LOT-D* NOT AUTHORIZED · Delivery NOT-CONSUMED · memory/fixture ≠ A2 durable · pas OpenAI live · réserves ouvertes · pas PR/merge projet."}
{"n": 143, "line": "+LOT-IP-0A préparation exécutée **≠** options 106 adoptées · pas de techno choisie · pas d’item DONE · HumanDecisionGate ≠ auth · 13 schémas ExecutionRun ≠ contrats N2/N3 · memory ≠ A2 durable · LOT-IP-0B/0C DEFERRED · LOT-D* NOT AUTHORIZED · Delivery NOT-CONSUMED · réserves ouvertes · pas PR/merge projet."}
{"n": 144, "line": " "}
{"n": 145, "line": " ---"}
{"n": 146, "line": " "}
{"n": 147, "line": " ## 32. Verdict"}
{"n": 148, "line": " "}
{"n": 149, "line": "-**TECHNICAL BACKLOG PRIORITIES VALIDATED —**"}
{"n": 150, "line": "-**33 ITEM PRIORITIES ADOPTED BY MORRIS —**"}
{"n": 151, "line": "-**P0=6 / P1=13 / P2=13 / P3=1 —**"}
{"n": 152, "line": "-**LOT-IP-0 RESTRUCTURED INTO DEPENDENCY-SAFE SUBLOTS —**"}
{"n": 153, "line": "-**LOT-IP-0A SELECTED AS FIRST IMPLEMENTATION-PREPARATION LOT —**"}
{"n": 154, "line": "-**LOT-IP-0B DEFERRED —**"}
{"n": 155, "line": "-**LOT-IP-0C DEFERRED —**"}
{"n": 156, "line": "+**LOT-IP-0A IMPLEMENTATION PREPARATION EXECUTED —**"}
{"n": 157, "line": "+**TB-00-01 AUTH INVENTORY COMPLETE —**"}
{"n": 158, "line": "+**TB-00-02 AJV N2/N3 FIT ASSESSED —**"}
{"n": 159, "line": "+**TB-00-03 A2 DURABLE STORE DECISION PACK PREPARED —**"}
{"n": 160, "line": "+**TB-00-06 SERVER-ONLY SECRETS AND ADMIN CONFIG PREPARATION COMPLETE —**"}
{"n": 161, "line": "+**DOCUMENT 103 UPDATED — DOCUMENT 105 CREATED — DOCUMENT 106 DECISION PACK CREATED —**"}
{"n": 162, "line": "+**ALL D-ASST-IP0A DECISIONS NOT DECIDED —**"}
{"n": 163, "line": "+**RECOMMENDATIONS REMAIN CANDIDATE —**"}
{"n": 164, "line": "+**NO TECHNOLOGY SELECTED — NO ITEM DONE —**"}
{"n": 165, "line": "+**LOT-IP-0B DEFERRED — LOT-IP-0C DEFERRED —**"}
{"n": 166, "line": " **LOT-D1 TO LOT-D5 NOT AUTHORIZED —**"}
{"n": 167, "line": "-**DOCUMENT 103 UPDATED — DOCUMENT 104 CREATED —**"}
{"n": 168, "line": "-**A2 AND TEN ADR PRESERVED — 21 IMPACTS COVERED —**"}
{"n": 169, "line": "-**RESERVES KEEP-OPEN — NON-SELECTIONS PRESERVED —**"}
{"n": 170, "line": "-**NO ITEM DONE — NO TECHNOLOGY SELECTED —**"}
{"n": 171, "line": "-**NO CODE OR PACKAGE CHANGE — DELIVERY NOT-CONSUMED —**"}
{"n": 172, "line": "-**READY FOR CHATGPT VALIDATION AND MORRIS LOT-IP-0A EXECUTION DECISION**"}
{"n": 173, "line": "+**DELIVERY NOT-CONSUMED —**"}
{"n": 174, "line": "+**READY FOR CHATGPT VALIDATION AND MORRIS LOT-IP-0A DECISION PACK ARBITRATION**"}
{"n": 175, "line": " "}
{"n": 176, "line": " "}
{"n": 177, "line": " ---"}
{"n": 178, "line": "@@ -1447,11 +1482,11 @@ LOT-IP-0A **sélectionné ≠ exécuté** · pas de Decision Pack produit · pas"}
{"n": 179, "line": " ## 33. Prochaine gate candidate"}
{"n": 180, "line": " "}
{"n": 181, "line": " ```text"}
{"n": 182, "line": "-GO IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — EXECUTE LOT-IP-0A (TB-00-01, TB-00-02, TB-00-03, TB-00-06)"}
{"n": 183, "line": "+GO DECISIONS IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — ARBITRATE LOT-IP-0A DECISION PACK"}
{"n": 184, "line": " ```"}
{"n": 185, "line": " "}
{"n": 186, "line": " Statut : **candidate uniquement — non consommée**."}
{"n": 187, "line": " "}
{"n": 188, "line": "-N’autorise pas Delivery ni sélection technologique au-delà des Decision Packs/analyses explicitement bornés."}
{"n": 189, "line": "+N’autorise ni code, ni Delivery, ni LOT-IP-0B, ni LOT-D1 sans décisions Morris explicites."}
{"n": 190, "line": " "}
{"n": 191, "line": "-**TECHNICAL BACKLOG PRIORITIES AND FIRST LOT RECORDED — MORRIS LOT-IP-0A EXECUTION DECISION REQUIRED — DELIVERY NOT CONSUMED**"}
{"n": 192, "line": "+**LOT-IP-0A PREPARATION RECORDED — MORRIS DECISION PACK ARBITRATION REQUIRED — DELIVERY NOT CONSUMED**"}
```

---

## Document 103 — useful diff RAW (rstrip)

```text
diff --git a/.tmp-sfia-review/lot-ip-0a/103-before.md b/projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md
index abc4641..2931db5 100644
--- a/.tmp-sfia-review/lot-ip-0a/103-before.md
+++ b/projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md
@@ -2,15 +2,14 @@

 ## 1. Statut

-**TECHNICAL BACKLOG PRIORITIES VALIDATED —**
-**33 ITEM PRIORITIES ADOPTED BY MORRIS —**
+**LOT-IP-0A IMPLEMENTATION PREPARATION EXECUTED —**
+**DECISION PACK READY — MORRIS ARBITRATION REQUIRED —**
+**TECHNICAL BACKLOG PRIORITIES REMAIN VALIDATED —**
 **P0=6 / P1=13 / P2=13 / P3=1 —**
-**LOT-IP-0 RESTRUCTURED INTO DEPENDENCY-SAFE SUBLOTS —**
-**LOT-IP-0A SELECTED AS FIRST IMPLEMENTATION-PREPARATION LOT —**
 **LOT-IP-0B DEFERRED — LOT-IP-0C DEFERRED —**
 **LOT-D1 TO LOT-D5 NOT AUTHORIZED —**
 **DELIVERY NOT-CONSUMED —**
-**NO ITEM DONE — NO TECHNOLOGY SELECTED — NO IMPLEMENTATION AUTHORIZED**
+**NO ITEM DONE — NO TECHNOLOGY SELECTED — NO CODE AUTHORIZED**

 | Champ | Valeur |
 |---|---|
@@ -48,8 +47,35 @@ GO DECISIONS BACKLOG SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — VALIDATE TE

 Record formel : `projects/sfia-studio/104-assistant-sfia-native-openai-technical-implementation-backlog-decisions-applied.md`.

+
+## 1ter. GO Morris — exécution LOT-IP-0A
+
+```text
+GO IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — EXECUTE LOT-IP-0A (TB-00-01, TB-00-02, TB-00-03, TB-00-06)
+```
+
+| Champ | Valeur |
+|---|---|
+| **Autorité** | Morris |
+| **Consommation** | 2026-08-05 15:17 CEST (+0200) / 13:17 UTC |
+| **Profil** | **Critical** |
+| **Effet** | Exécution **documentaire** LOT-IP-0A · analyses 105 · Decision Pack 106 · Delivery **NOT-CONSUMED** |
+| **Non-effet** | Pas d’adoption des options 106 · pas de techno · pas de code · pas de LOT-IP-0B/0C · pas de LOT-D* |
+
+### Historique d’exécution LOT-IP-0A
+
+| Étape | Résultat |
+|---|---|
+| TB-00-01 | Inventaire auth complet — auth end-user ABSENTE · OA AuthorityResolver REUSE/EXTEND |
+| TB-00-02 | Verdict technique **FIT WITH EXTENSIONS** — schémas Assistant NEW requis |
+| TB-00-03 | Classes store A2 préparées — reco candidate classe SQL managé (non sélectionnée) |
+| TB-00-06 | Catalogue logique secrets/config — REUSE SecretSourcePort |
+| Documents | `105-…-lot-ip-0a.md` · `106-…-lot-ip-0a-decision-pack.md` |
+| Décisions D-ASST-IP0A-* | **toutes NOT DECIDED** |
+
 ---

+
 ## 2. GO Morris

 ```text
@@ -1312,9 +1338,14 @@ Motif : le lot historique regroupait TB-00-01…06 + TB-04-04 alors que TB-00-04
 | **Items** | TB-00-01 · TB-00-02 · TB-00-03 · TB-00-06 |
 | **Dépendances backlog entrantes** | aucune |
 | **Nature** | documentation / inventaire / analyse / Decision Pack uniquement |
-| **Statut** | **SELECTED BY MORRIS — EXECUTION NOT AUTHORIZED** |
-| **Décision** | D-ASST-BLG-FIRST-LOT-01 |
-| **Code / techno / Delivery** | interdits |
+| **Statut** | **IMPLEMENTATION PREPARATION EXECUTED — DECISION PACK READY — MORRIS ARBITRATION REQUIRED** |
+| **Décision de sélection** | D-ASST-BLG-FIRST-LOT-01 (antérieure) |
+| **GO d’exécution** | consommé 2026-08-05 15:17 CEST |
+| **Analyses** | `projects/sfia-studio/105-assistant-sfia-native-openai-implementation-preparation-lot-ip-0a.md` |
+| **Decision Pack** | `projects/sfia-studio/106-assistant-sfia-native-openai-implementation-preparation-lot-ip-0a-decision-pack.md` |
+| **Décisions D-ASST-IP0A-*** | **NOT DECIDED** |
+| **Items DONE** | **aucun** |
+| **Code / techno / Delivery** | toujours interdits |

 ### LOT-IP-0B — Store-Dependent Decision Preparation

@@ -1337,7 +1368,7 @@ Motif : le lot historique regroupait TB-00-01…06 + TB-04-04 alors que TB-00-04

 **NOT AUTHORIZED** — inchangés (persist foundation · Assistant N1 · N2/N3 Authority · lifecycle · pilot hardening).

-Aucun lot Delivery sélectionné. LOT-IP-0A n’est **pas** exécuté dans ce cycle.
+Aucun lot Delivery sélectionné. LOT-IP-0A préparation **documentaire** exécutée · options Decision Pack **non** adoptées.


 ---
@@ -1373,22 +1404,27 @@ TB-00-* (décisions) · TB-01-06 backup/restore · TB-04-02/04 · TB-05-02 · TB

 ## 26. Critères de passage

-### Vers exécution LOT-IP-0A (future)
+### Vers arbitrage LOT-IP-0A (prochaine)
+
+- validation ChatGPT des documents 105/106 ;
+- GO `ARBITRATE LOT-IP-0A DECISION PACK` Morris ;
+- décisions D-ASST-IP0A-* encore **NOT DECIDED** jusqu’à ce GO.

-- validation ChatGPT du record 104 ;
-- GO `EXECUTE LOT-IP-0A` Morris explicite ;
-- périmètre borné DOC/DECISION-PREP ;
-- aucune sélection techno dans le GO d’exécution.
+### Vers LOT-IP-0B / LOT-D1 (futur)
+
+- STORE-01 décidé ;
+- GO d’exécution LOT-IP-0B ou Delivery distinct ;
+- LOT-IP-0B reste **DEFERRED** · LOT-D* **NOT AUTHORIZED**.

 ### Vers Delivery (futur, non consommé)

 - priorités validées (**fait**) ;
-- LOT-IP-0A exécuté et Decision Packs produits ;
-- store / migration / auth / AJV fit décidés si requis ;
+- LOT-IP-0A préparation exécutée (**fait**) · options 106 **arbitrées** ;
+- store / migration / auth / AJV stratégie décidés si requis ;
 - lot Delivery sélectionné Morris ;
 - fichiers Delivery bornés ;
 - réserves bloquantes identifiées ;
-- cohérence 93/97/99/102.
+- cohérence 93/97/99/102/105/106.

 **DELIVERY-GATE=NOT-CONSUMED** (D-ASST-BLG-DELIVERY-01).

@@ -1408,38 +1444,37 @@ Store tech/fournisseur · cloud · hébergeur · région · instances · ORM ·

 ## 29. Actions autorisées

-Enregistrer décisions dans 103/104 · publier handoff · (futur) proposer GO exécution LOT-IP-0A.
+Tracer LOT-IP-0A dans 103 · maintenir 105/106 · publier handoff · (futur) arbitrer Decision Pack via GO Morris.

 ---

 ## 30. Actions interdites

-Exécuter LOT-IP-0A · produire Decision Packs dans ce cycle · code · app/** · packages · sélection techno · Delivery · fermer réserve · marquer item DONE · modifier 90–102 · créer 105 · commit/push projet · PR/merge.
+Adopter les options 106 sans GO · créer 107 · code · app/** · packages · .env · secrets · sélection techno · fermer réserve · marquer item DONE · exécuter LOT-IP-0B/0C · LOT-D* · Delivery · modifier 90–102/104 · commit/push projet · PR/merge.

 ---

 ## 31. Anti-claims

-LOT-IP-0A **sélectionné ≠ exécuté** · pas de Decision Pack produit · pas de techno choisie · pas d’item DONE · LOT-D* NOT AUTHORIZED · Delivery NOT-CONSUMED · memory/fixture ≠ A2 durable · pas OpenAI live · réserves ouvertes · pas PR/merge projet.
+LOT-IP-0A préparation exécutée **≠** options 106 adoptées · pas de techno choisie · pas d’item DONE · HumanDecisionGate ≠ auth · 13 schémas ExecutionRun ≠ contrats N2/N3 · memory ≠ A2 durable · LOT-IP-0B/0C DEFERRED · LOT-D* NOT AUTHORIZED · Delivery NOT-CONSUMED · réserves ouvertes · pas PR/merge projet.

 ---

 ## 32. Verdict

-**TECHNICAL BACKLOG PRIORITIES VALIDATED —**
-**33 ITEM PRIORITIES ADOPTED BY MORRIS —**
-**P0=6 / P1=13 / P2=13 / P3=1 —**
-**LOT-IP-0 RESTRUCTURED INTO DEPENDENCY-SAFE SUBLOTS —**
-**LOT-IP-0A SELECTED AS FIRST IMPLEMENTATION-PREPARATION LOT —**
-**LOT-IP-0B DEFERRED —**
-**LOT-IP-0C DEFERRED —**
+**LOT-IP-0A IMPLEMENTATION PREPARATION EXECUTED —**
+**TB-00-01 AUTH INVENTORY COMPLETE —**
+**TB-00-02 AJV N2/N3 FIT ASSESSED —**
+**TB-00-03 A2 DURABLE STORE DECISION PACK PREPARED —**
+**TB-00-06 SERVER-ONLY SECRETS AND ADMIN CONFIG PREPARATION COMPLETE —**
+**DOCUMENT 103 UPDATED — DOCUMENT 105 CREATED — DOCUMENT 106 DECISION PACK CREATED —**
+**ALL D-ASST-IP0A DECISIONS NOT DECIDED —**
+**RECOMMENDATIONS REMAIN CANDIDATE —**
+**NO TECHNOLOGY SELECTED — NO ITEM DONE —**
+**LOT-IP-0B DEFERRED — LOT-IP-0C DEFERRED —**
 **LOT-D1 TO LOT-D5 NOT AUTHORIZED —**
-**DOCUMENT 103 UPDATED — DOCUMENT 104 CREATED —**
-**A2 AND TEN ADR PRESERVED — 21 IMPACTS COVERED —**
-**RESERVES KEEP-OPEN — NON-SELECTIONS PRESERVED —**
-**NO ITEM DONE — NO TECHNOLOGY SELECTED —**
-**NO CODE OR PACKAGE CHANGE — DELIVERY NOT-CONSUMED —**
-**READY FOR CHATGPT VALIDATION AND MORRIS LOT-IP-0A EXECUTION DECISION**
+**DELIVERY NOT-CONSUMED —**
+**READY FOR CHATGPT VALIDATION AND MORRIS LOT-IP-0A DECISION PACK ARBITRATION**


 ---
@@ -1447,11 +1482,11 @@ LOT-IP-0A **sélectionné ≠ exécuté** · pas de Decision Pack produit · pas
 ## 33. Prochaine gate candidate

 ```text
-GO IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — EXECUTE LOT-IP-0A (TB-00-01, TB-00-02, TB-00-03, TB-00-06)
+GO DECISIONS IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — ARBITRATE LOT-IP-0A DECISION PACK
 ```

 Statut : **candidate uniquement — non consommée**.

-N’autorise pas Delivery ni sélection technologique au-delà des Decision Packs/analyses explicitement bornés.
+N’autorise ni code, ni Delivery, ni LOT-IP-0B, ni LOT-D1 sans décisions Morris explicites.

-**TECHNICAL BACKLOG PRIORITIES AND FIRST LOT RECORDED — MORRIS LOT-IP-0A EXECUTION DECISION REQUIRED — DELIVERY NOT CONSUMED**
+**LOT-IP-0A PREPARATION RECORDED — MORRIS DECISION PACK ARBITRATION REQUIRED — DELIVERY NOT CONSUMED**
```

---

## Git Review Index

| Élément | État |
|---|---|
| Modifié | 103 (untracked) |
| Créés | 105 · 106 (untracked) |
| Inchangés | 90–102 · 104 |
| Interdits | aucun app/** · packages · 107 |
| Staged / commit / push projet | aucun |

---

## Garde-fous

Sécurité/RSSI · FinOps · RGPD · performance · architecture · décision : respectés. Aucune techno sélectionnée. Aucun secret créé/exposé.

---

## Décision Morris future (candidate)

```text
GO DECISIONS IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — ARBITRATE LOT-IP-0A DECISION PACK
```

Non consommée.

---

## Local Git Truth — final (à compléter après handoff)

Placeholder remplacé après publication.

---

## Verdict Review Pack

**LOT-IP-0A IMPLEMENTATION PREPARATION EXECUTED —**
**TB-00-01 AUTH INVENTORY COMPLETE —**
**TB-00-02 AJV N2/N3 FIT ASSESSED —**
**TB-00-03 A2 DURABLE STORE DECISION PACK PREPARED —**
**TB-00-06 SERVER-ONLY SECRETS AND ADMIN CONFIG PREPARATION COMPLETE —**
**DOCUMENT 103 UPDATED — DOCUMENT 105 CREATED — DOCUMENT 106 DECISION PACK CREATED —**
**ALL D-ASST-IP0A DECISIONS NOT DECIDED —**
**NO TECHNOLOGY SELECTED — DELIVERY NOT-CONSUMED —**
**READY FOR HANDOFF PUBLICATION AND CHATGPT VALIDATION**

Review pack verdict : **complete**
