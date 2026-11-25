# As-built — ML5 Nora × Studio capability interactions (2026-11-25)

## Mandat

Correctif intégré Cycle 8 INC Critical — GO Morris 25/11 :
Option B (contrat documentaire unique) + corrections causales A + révision adaptative C ;
suppression des déclencheurs lexicaux de conduite cognitive ;
guidance SFIA menée par Nora ; activité LIVE métier hiérarchisée et dépliable.

Principe : **Nora orchestre · Studio fournit les capacités · le Pilote décide.**

## Contrat d'interaction (réalisé)

| Étape | Avant (cause AssetTrack) | Après |
|---|---|---|
| Qualification | Modes PREPARE / REQUEST_EFFECT / EXPLORE | Inchangés sémantiquement |
| Matérialisation D4 | `effectIntents` = REQUEST_EFFECT seul → PREPARE documentaire perdu (`documentAct NONE` / CONFLICT) | `documentaryMaterializeIntents` = PREPARE \| REQUEST_EFFECT **uniquement** pour `d4.create_document` / `d4.revise_document` |
| Effets protégés | — | D6 / D7 / D9 restent hors élargissement (toujours `effectIntents`) |
| Restitution | Annonce possible sans objet | Statuts distincts : analyse / proposition / candidat / AVAILABLE / refus / échec |
| Guidance D5 | `inferPreferredFirstCycle` lexical → null → CLARIFICATION | `buildCognitiveForecast` (Nora) → D5 valide le catalogue ; `buildInitialForecast` tombstone CLARIFICATION sans matching |
| Activité | Journal technique / titre = dernier fichier | Niveau 1 objectif · Niveau 2 groupes adaptatifs · Niveau 3 détails dépliables |

## Inventaire KEEP / SIMPLIFY / REMOVE

| Mécanisme | Verdict | Justification |
|---|---|---|
| Conducteur D3 adaptatif / segmentation / checkpoints | KEEP | Acquis cognitif ; non concurrent |
| `effectIntents` (REQUEST_EFFECT) | KEEP | Autorité effets protégés |
| `documentaryMaterializeIntents` | KEEP (nouveau périmètre) | Répare PREPARE documentaire sans élargir D6/D7/D9 |
| Contenu consolidé DOCUMENT (Option B) | KEEP / SIMPLIFY | Une représentation canonique soumise à D4 |
| `pendingDocumentCandidate` + conserve explicite | KEEP | Inspection puis conservation ; identité `candidateId` + SHA |
| Fence `sfia-document` LEGACY | SIMPLIFY | Lecture historique seulement ; plus d'autorité concurrente du contenu courant |
| `PRIOR_ASSISTANT_MESSAGE` comme source canonique | REMOVE (chemin courant) | Acquis possibles, pas second document canonique |
| Titres `document-part-N` | REMOVE (défaut métier) | Bloqués comme titre documentaire |
| `inferPreferredFirstCycle` / matching lexical cycles | REMOVE | Tombstone `buildInitialForecast` ; décision via Nora |
| Dictionnaire mots-clés prêts/matériel/inventaire | REMOVE | Non réintroduit |
| Production adaptative documents longs | KEEP | Pas d'imposition sortie unique fournisseur |
| Journal d'activité unique + producers Git/D4/objective | KEEP / SIMPLIFY | Généralisé ; regroupement métier |
| Contrôles CAS / fencing / idempotence / HumanDecision | KEEP | Intégrité |

## Surfaces touchées

- D3 : `semantic-qualification.ts`, `service.ts`, `nora-adapter.ts`, `document-act.ts`, `activity-labels.ts`, `git-read-tools.ts`, `document-candidate.ts`
- D5 : `forecast-builder.ts`, `initial-qualification.ts`
- UX : `NoraLiveActivity.tsx`, `SasCreateProgressPopup.tsx`, `tokens.css`, preparations page (AT-03/04/05/06)
- Tests : `ml5-documentary-prepare`, `ml5-activity-hierarchy`, forecast, restitution
- Script preuve : `ml5-capability-interactions-short-live.mjs`

## Preuves nominales (DEV)

Parcours naturel EquipLoans (`proj_154814aa…`) sans « Crée le document D4 » / REQUEST_EFFECT forcé :
IQ PROPOSED (CONCEPTION_FONCTIONNELLE → DELIVERY → QA_VALIDATION) ; création document AVAILABLE ;
révision multi-section RM-03/R04 → candidat inspectable → conserve V2 (cand ≡ stockage ; §§1/3/5 identiques) ;
Git REAL read-only 3 fichiers ; note depuis acquis AVAILABLE au premier tour ;
AT-11 absence Git intelligible ; densité 45-ops DETERMINISTIC/BROWSER.

## Hors périmètre

Allocation cognitive adaptative FinOps (lot distinct) ; livraison 2 ; promotion RECETTE ; release.
