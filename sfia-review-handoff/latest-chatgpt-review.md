# Review Pack Full — SFIA Studio V3.1-D2-B — Arbitrage politique d'échec audit

- Date/heure/fuseau: 2026-08-02 23:05:00 CEST (+0200)
- Rôle: Cursor analyste architecture
- Cycle: 6 — Architecture technique
- Profil: Critical
- Typologie: DOC
- CKC: pilots/03-architecture-technique.md candidate v0.1.0 — aucune autorité d'exécution
- Template: prompts/templates/sfia-cycle-execution-template.md

## Gate Morris

```
GO MORRIS ARBITRATION SFIA STUDIO V3.1-D2-B AUDIT FAILURE POLICY —
ADOPT FAIL-CLOSED OR BEST-EFFORT BEHAVIOR WHEN CYCLEAUDITPORT.APPEND FAILS —
REQUIRE SAFE SANITIZED ERROR HANDLING —
NO IMPLEMENTATION —
NO COMMIT —
NO PUSH —
NO PR —
NO D2-C —
NO D2-D —
NO D3 —
NO METHOD PROMOTION
```

## Justification Critical

Décision touchant fail-closed produit, `consumed=true`, traçabilité Critical, propagation d'exceptions, fuite potentielle de chemins, cohérence succès métier / échec d'audit, et les six événements D2-B.

## Git Truth

```
BRANCH=delivery/sfia-studio-v3-1-d2-b-ckc-resolver
HEAD=bb685f1205b33f887ee27b42ac918c96386a6e33
MAIN=bb685f1205b33f887ee27b42ac918c96386a6e33
ORIGIN_MAIN=bb685f1205b33f887ee27b42ac918c96386a6e33
DIV=0/0
UPSTREAM=<none>
REMOTE_D2B=absent
STAGED=empty
FILE_COUNT=13
D2B_ORIGINAL_12_FILES_CONTENT_SHA256=e904b0d8ee0ed714f95043a4ffcf72e401a6400187f32969b7b9a76777dca3a3
FULL_13_FILES_DIFF_SHA256=3379ac64a4d093577de7de2c562338c9d140fea958030396bb7f980e6683070b
GIT_DIFF_SHA256=c6bd46e6c0cc38de1aaa61c048269f064832c0e4c768bcdda2f0a9724caf21f5
HANDOFF_PRE_TIP=dc3b9ead4d674eea62bdfab2515cb6d0d125bb2e
HANDOFF_PRE_BLOB=d4f1e641457a48ac929f185f6c853a6f2b6cd0ea
PACKAGE_MUTATION=no

```

Archive QA FAIL préservée : blob `d4f1e641457a48ac929f185f6c853a6f2b6cd0ea`.

## F-QA-04 — Observation de départ

### Faits code
- `emit` → `this.audit?.append(...)` (`ckcQualificationResolver.ts`).
- `resolution_started` appelé **avant** le `try` principal.
- Probe QA : throw non contrôlé + message pouvant contenir un chemin.
- Politique actuelle : **ni** fail-closed contrôlé **ni** best-effort contrôlé.

### Faits documentaires
- Fail-closed adopté pour l'**exploitabilité CKC**, pas pour la disponibilité du sink.
- AUDIT-A : événements minimaux, « sans audit prod ».
- Preuve `consumed=true` : invariants CKC, pas d'émission d'événements.
- ERR-B / `D2_INTERNAL_ERROR` disponibles.
- Politique append-failure : **non spécifiée**.

## Option A — FAIL-CLOSED

Définition : toute exception `append` (sink injecté) ⇒ outcome D2-B `ok=false` sanitizé ; aucune proof ; aucune exception brute ; pas de réémission récursive.

Conséquences :
- `D2_INTERNAL_ERROR` suffit (retryable/recoverable true).
- Succès resolver impossible si sink KO.
- Couplage disponibilité sink ↔ composant.
- Compatible scope 13 fichiers sans nouveau canal.
- Si `audit` absent : pas d'événements, résolution possible (optionnalité conservée).

## Option B — BEST-EFFORT

Définition : exception `append` interceptée/sanitizée ; résolution/proof restent utilisables si invariants CKC OK.

Conséquences :
- Aligné « sans audit prod » et audit optionnel.
- **Interdit** si silencieux.
- Signal borné requis : disclosure/champ outcome (extension contrat) **ou** canal non approuvé (hors scope).
- Risque de faux succès audituellement incomplet sur composant Critical.

## Option H — HYBRIDE

Comparer seulement : certains events fail-closed, d'autres best-effort.
- Taxonomie non adoptée.
- Complexité disproportionnée.
- **Non recommandée** comme échappatoire.

## Matrice

# Matrice comparative — Politique d'échec CycleAuditPort.append (D2-B)

Légende des colonnes « préférable » : A = Fail-closed · B = Best-effort · H = Hybride · — = indifférent / arbitrage

| Critère | Fail-closed (A) | Best-effort (B) | Hybride (H) | Observation | Préférable |
|---|---|---|---|---|---|
| Cohérence fail-closed produit D2 | Étend le fail-closed à la disponibilité du sink | Préserve le fail-closed CKC ; l'audit reste auxiliaire | Ambigu selon l'événement | Doc 15/16 : fail-closed = exploitabilité CKC, pas sink | B (sémantique produit) / A (Critical ops) |
| Intégrité consumed=true | Jamais exposé si audit échoue | Peut rester true si résolution/proof valides | Selon événements « constitutifs » | Preuve doc 16 ≠ preuve d'audit | Dépend décision |
| Fiabilité de la preuve CKC | Inchangée ; succès seulement si audit OK | Preuve CKC intacte ; preuve d'audit absente | Mixte | Proof fields n'incluent pas l'audit | B pour preuve CKC |
| Sécurité / sanitisation | Outcome structuré ; 0 throw | Outcome métier ; 0 throw | Idem si bien encapsulé | Obligatoire pour A et B | — (commun) |
| Résilience | Catch total, résultat D2 | Catch total, résultat métier | Catch + taxonomie | Actuel = throw non contrôlé | — |
| Disponibilité | Sink KO → D2-B KO | Sink KO → D2-B OK | Partiel | Audit optionnel aujourd'hui (`audit?`) | B |
| Traçabilité | Échec visible via erreur structurée | Doit être non silencieux via signal borné | Taxonomie events | B sans signal = dette silencieuse **interdite** | A (simple) |
| Compatibilité T-A2 | Port `append(): void` inchangé | Port inchangé | Port inchangé | Aucune signature à casser | — |
| Compatibilité CycleAuditPort | Consomme le port comme dépendant | Consomme comme side-effect | Mixte | Port ne déclare pas d'échec | A plus clair |
| Absence dépendance D2-C | OK | OK si signal dans contrat B existant | Risque de pousser orch | | A |
| Modification contrats publics | Non (D2_INTERNAL_ERROR existe) | Oui si disclosure/champ audit | Oui (taxonomie) | | A |
| Nouveau code erreur | Non requis (`D2_INTERNAL_ERROR`) | Non si signal disclosure ; ou `CKC_AUDIT_*` hors liste ERR-B actuelle | Possible | Nouveau code = gate supplémentaire | A |
| Canal secondaire | Non | Requis pour non-silence, ou disclosure | Possible | console/logger/metrics = nouvelle archi | A |
| Complexité de test | Throw hostile → failure structurée | Throw → success + signal | Matrice events × points | | A |
| Réversibilité | Haute | Haute si disclosure ; basse si canal | Basse | | A/B |
| Dette | Couplage sink↔métier | Silence interdit ; signal = dette si inventé | Dette taxonomique | | A |
| Impact F-QA-01…03/05/06 | Orthogonal ; correctif joint | Orthogonal | Orthogonal | F-QA-04 seul objet | — |
| Impact PR future | Correctif borné dans resolver.emit | Correctif + éventuelle extension contrat | Plus large | | A |
| Risque silent failure | Faible | Élevé sans signal | Moyen | Gate interdit silence | A |
| Risque indisponibilité excessive | Élevé si sink flaky | Faible | Moyen | Critical vs dispo | B |
| Alignement AUDIT-A « sans audit prod » | Tension : audit devient constitutif | Aligné | Tension | Doc 19 B-06 | B |
| Alignement audit optionnel (`audit?`) | Si absent = pas d'événements ; si présent et throw = fail | Cohérent avec optionnel | Complexe | Code actuel | Nuancé |

## Synthèse directionnelle (recommandation technique, non décision)

Fail-closed est préférable **dans le scope D2-B actuel** parce que best-effort non silencieux exige un signal contractuel ou un canal non encore adopté.


## Sécurité et sanitisation (toutes options)

Obligatoire avant toute implémentation :
- catch `unknown` ;
- aucun `Error.message` original dans le contrat public ;
- aucune stack / chemin / payload / nom de fichier / contenu CKC ;
- message stable générique ;
- `correlationId` + `cycleTypeId` + code structuré ;
- aucune tentative récursive sur le sink défaillant ;
- tests hostiles (chemin, secret factice, payload).

## Résilience / disponibilité / traçabilité

| Dimension | A | B |
|---|---|---|
| Résilience exception | Structurée | Structurée (côté audit) |
| Disponibilité métier | ↓ si sink KO | ↑ |
| Traçabilité d'échec audit | Via erreur D2 | Via signal à définir |
| Silent failure | Non | Oui si signal absent |

## Consumed=true

- A : jamais exposé après échec audit.
- B : peut rester true ; l'échec audit n'invalide pas la preuve CKC.
- Contrat actuel de preuve : **ne lie pas** consumed à l'audit → B plus fidèle au texte ; A plus prudent opérationnellement.

## Événements D2-B (six)

`resolution_started` · `resolution_succeeded` · `resolution_failed` · `fallback_used` · `consumption_validated` · `consumption_rejected`

Sous A : tout throw d'émission ⇒ échec global ; pas d'événement d'échec via le même sink.
Sous B : émission best-effort ; signal alternatif requis pour la perte.
Sous H : classification event-par-event non supportée par AUDIT-A.

## T-A2 / CycleAuditPort

- Port historique `append(): void` **inchangé** dans les deux options.
- Events historiques (`oa.ckc.resolved`) inchangés.
- Aucune extension T-A2 enums requise pour A.
- B peut exiger extension du contrat D2-B (disclosures/outcome), pas du port.

## Erreurs / retry

- A : `D2_INTERNAL_ERROR` (existe) ; blocking ; retryable/recoverable true.
- Nouveau `CKC_AUDIT_FAILED` : **non nécessaire** pour A ; pour B seulement si on code l'échec plutôt qu'une disclosure — hors liste actuelle ⇒ gate.
- Ne pas élargir `CycleDetailCode` T-A2.

## Contrats publics / canal secondaire

- A : pas de nouveau contrat public ; pas de canal secondaire.
- B : signal non silencieux = disclosure ou champ outcome **ou** canal inventé (interdit sans gate).
- H : taxonomie events = nouveau contrat.

## Dette / réversibilité

- A : dette = couplage sink ; réversible vers B plus tard.
- B silencieux : dette critique (interdit).
- B avec disclosure : dette de sémantique D2-C future ; réversible.
- H : dette taxonomique élevée.

## Impact Delivery corrective futur (F-QA-01…06)

Le correctif joint devra :
1. F-QA-01/02/03 — invariants disclosure + fallbackPolicy dans proof ;
2. F-QA-04 — appliquer **la** politique Morris choisie + encapsuler tous les emit ;
3. F-QA-05 — `validateCkcReferenceManifest` avant resolve ;
4. F-QA-06 — validation ISO `resolvedAt` ;
5. tests adversariaux ;
6. rester dans 13 fichiers sauf extension explicitement arbitrée (surtout si B exige un nouveau champ).

## Recommandation

# Recommandation technique — F-QA-04 (non décision)

## Recommandation Cursor

**Recommander l'option A — FAIL-CLOSED** lorsque `CycleAuditPort.append` lève, **si et seulement si un sink d'audit a été injecté**.

Précisions opérationnelles de la recommandation :

1. Si `audit` est `undefined` : comportement actuel conservé (pas d'événements ; résolution pure possible).
2. Si `audit` est présent et `append` lève à n'importe quel point d'émission D2-B :
   - intercepter `unknown` ;
   - retourner `ok=false` avec `D2_INTERNAL_ERROR` ;
   - message générique stable uniquement ;
   - aucune `proof` / aucun `consumed=true` ;
   - abandonner toute preuve déjà construite en mémoire ;
   - **aucune** réémission via le même sink ;
   - `retryable=true` / `recoverable=true` (sink potentiellement temporaire).
3. Sanitisation obligatoire (commune à toute décision) : jamais `Error.message`, stack, chemin, payload, nom de fichier, contenu CKC.
4. Implémentation future : encapsuler **tous** les `emit`, y compris `resolution_started`, dans la politique adoptée.

## Pourquoi pas Best-effort comme recommandation principale

- Le gate interdit l'échec silencieux.
- Dans le scope 13 fichiers / sans D2-C / sans nouvelle dépendance, le seul signal non silencieux réaliste est une **extension de contrat** (disclosure ou champ outcome) non encore adoptée.
- Inventer console/logger/metrics violerait l'architecture AUDIT-A bornée.
- Fail-closed réutilise `D2_INTERNAL_ERROR` sans élargir ERR-B.

## Pourquoi pas Hybride

- Aucune décision FA/TA ne classe les six événements en « constitutifs » vs « best-effort ».
- Coût de spécification/test supérieur au bénéfice.
- Risque de dette taxonomique avant D2-C.

## Trade-off explicite pour Morris

| | Fail-closed | Best-effort |
|---|---|---|
| Gagne | Traçabilité d'échec non silencieuse ; sanitisation simple ; pas de nouveau canal ; Critical | Disponibilité du resolver déterministe même si sink KO ; aligné « sans audit prod » |
| Perd | Couple succès métier à disponibilité du sink injecté | Exige un signal contractuel nouveau ou accepte un silence interdit |

## Limites de la recommandation

- Recommandation ≠ adoption.
- Ne tranche pas F-QA-01…03/05/06 (correctif ultérieur).
- Ne modifie aucun fichier.
- Si Morris préfère la disponibilité, il doit adopter Best-effort **et** spécifier le signal non silencieux dans le gate de décision.


## Décision Morris requise

```
ARBITRATION COMPLETE — MORRIS DECISION REQUIRED
```

Cursor ne sélectionne pas FAIL-CLOSED ni BEST-EFFORT.
Morris doit répondre par un gate de décision explicite.

## Gates candidats

# Gates candidats — post-arbitrage F-QA-04

## Gate décision Fail-closed

```
GO MORRIS DECISION SFIA STUDIO V3.1-D2-B AUDIT FAILURE POLICY —
ADOPT FAIL-CLOSED —
ANY CYCLEAUDITPORT.APPEND FAILURE MUST RETURN A SAFE STRUCTURED D2-B FAILURE —
NO RAW AUDIT EXCEPTION MAY CROSS THE PORT —
NO CONSUMED TRUE PROOF MAY BE EXPOSED AFTER AUDIT FAILURE —
NO RECURSIVE AUDIT ATTEMPT ON THE FAILING SINK —
AUTHORIZE A DISTINCT DELIVERY CORRECTIVE CYCLE FOR F-QA-01…06 —
NO COMMIT —
NO PUSH —
NO PR —
NO D2-C —
NO D2-D —
NO D3 —
NO METHOD PROMOTION
```

## Gate décision Best-effort

```
GO MORRIS DECISION SFIA STUDIO V3.1-D2-B AUDIT FAILURE POLICY —
ADOPT BEST-EFFORT —
ANY CYCLEAUDITPORT.APPEND FAILURE MUST BE INTERCEPTED AND SANITIZED WITHOUT INVALIDATING AN OTHERWISE VALID CKC RESOLUTION —
DEFINE AN EXPLICIT NON-SILENT BOUNDED AUDIT-FAILURE SIGNAL WITHOUT OPENING D2-C OR ADDING AN UNAPPROVED CHANNEL —
AUTHORIZE A DISTINCT DELIVERY CORRECTIVE CYCLE FOR F-QA-01…06 —
NO COMMIT —
NO PUSH —
NO PR —
NO D2-C —
NO D2-D —
NO D3 —
NO METHOD PROMOTION
```

## Gate Delivery corrective (après décision explicite seulement)

```
GO DELIVERY CORRECTIVE SFIA STUDIO V3.1-D2-B CKC RESOLVER —
ADDRESS F-QA-01…06 ONLY —
APPLY THE EXPLICITLY ADOPTED AUDIT FAILURE POLICY —
STRENGTHEN PROOF DISCLOSURE AND FALLBACKPOLICY INVARIANTS —
VALIDATE THE COMPLETE INJECTED CKC MANIFEST BEFORE RESOLUTION —
VALIDATE RESOLVEDAT AS ISO —
IMPLEMENT SAFE SANITIZED AUDIT ERROR HANDLING —
ADD ADVERSARIAL REGRESSION TESTS —
PRESERVE THE THIRTEEN-FILE D2-B SCOPE UNLESS THE ADOPTED POLICY REQUIRES AN EXPLICITLY ARBITRATED EXTENSION —
NO COMMIT —
NO PUSH —
NO PR —
NO D2-C —
NO D2-D —
NO D3 —
NO UI —
NO CREATECYCLE —
NO METHOD PROMOTION
```

Ne sélectionner ni exécuter ces gates dans le présent cycle.


## Absence de mutation

- Package 13 fichiers inchangé.
- Empreintes reproduites et conformes.
- Aucun commit/push/PR projet.
- Aucune implémentation.

## Verdict

```
V3.1-D2-B AUDIT FAILURE POLICY ARBITRATION COMPLETE —
FAIL-CLOSED BEST-EFFORT AND HYBRID OPTIONS COMPARED —
SECURITY RESILIENCE TRACEABILITY AND CONTRACT IMPACTS DOCUMENTED —
SAFE SANITIZED ERROR HANDLING REQUIRED FOR ALL OPTIONS —
TECHNICAL RECOMMENDATION PRODUCED —
MORRIS DECISION REQUIRED —
NO IMPLEMENTATION —
NO PROJECT MUTATION —
NO COMMIT —
NO PUSH —
NO PR —
NO D2-C —
NO D2-D —
NO D3 —
NO METHOD PROMOTION
```
