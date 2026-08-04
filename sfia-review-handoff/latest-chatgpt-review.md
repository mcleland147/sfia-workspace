# ChatGPT Review Pack — SFIA Studio Native Assistant OpenAI First Product Increment Functional Architecture

## 1. Timestamp local et UTC

Local : 2026-08-04 22:48:35 CEST +0200
UTC : 2026-08-04 20:48:35 UTC

## 2. GO consommé

GO ARCHITECTURE FONCTIONNELLE SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — FIRST PRODUCT INCREMENT — APPLY EXISTING STUDIO V3 DOCTRINE
Date/heure : 2026-08-04 22:37 CEST (+0200)

Ce GO n’a pas validé D-ASST-FPI-01…16 ni baseline fonctionnelle.

## 3. Cycle / profil / typologie

Architecture fonctionnelle · Standard · EVOL · Documentation-only
Objet : Assistant SFIA natif OpenAI — First Product Increment

## 4. Doctrine de conduite

SFIA v2.6 (template, routing, operating model, guardrails, validation checklist, méthode Architecture fonctionnelle `docs/practices/architecture/functional-architecture-method.md`).

## 5. Doctrine produit

SFIA Studio v3 exclusive — documents 30–37 lus ; V3-F01…F15 appliquées ; non modifiées.

## 6. Local Git Truth initial

```
=== TIMESTAMPS ===
2026-08-04 22:44:31 CEST +0200
2026-08-04 20:44:31 UTC
=== LOCAL GIT TRUTH ===
toplevel=/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/delivery-d2-d1
branch=framing/sfia-studio-assistant-sfia-native-openai-first-increment
HEAD=8dc54db0069eed78a8d8930cc2b035450ab56ad1
upstream=8dc54db0069eed78a8d8930cc2b035450ab56ad1
origin_main=8dc54db0069eed78a8d8930cc2b035450ab56ad1
merge_base=8dc54db0069eed78a8d8930cc2b035450ab56ad1
ahead=0
behind=0
handoff=5cfe22e5cea9d9d92ee419bd9139130466470464
=== STATUS ===
?? .tmp-sfia-review/
?? projects/sfia-studio/90-assistant-sfia-native-openai-first-product-increment-framing.md
?? projects/sfia-studio/app/.tmp-sfia-review/
=== DIFF ===
=== DOC 90 ===
DOC90_PRESENT
DOC86_ABSENT
error: pathspec 'projects/sfia-studio/90-assistant-sfia-native-openai-first-product-increment-framing.md' did not match any file(s) known to git
Did you forget to 'git add'?
doc90_sha256=2d5a03f366e5291e54b6617ada972158763199bf918bea01f031d4212b1a78b2  projects/sfia-studio/90-assistant-sfia-native-openai-first-product-increment-framing.md
=== WORKTREE (relevant) ===
73:worktree /Users/morris/Projects/sfia-workspace-review-handoff-publisher
75:branch refs/heads/tooling/review-handoff-canonical-publisher
101:worktree /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/delivery-d2-d1
103:branch refs/heads/framing/sfia-studio-assistant-sfia-native-openai-first-increment
313:worktree /Users/morris/Projects/sfia-workspace/sfia-review-handoff
315:branch refs/heads/sfia/review-handoff

```

## 7. Main

`origin/main` = `8dc54db0069eed78a8d8930cc2b035450ab56ad1` — PASS vs `8dc54db0069eed78a8d8930cc2b035450ab56ad1`

## 8. Branche / worktree

Branche : `architecture/sfia-studio-assistant-sfia-native-openai-fpi-functional`
HEAD : `8dc54db0069eed78a8d8930cc2b035450ab56ad1`
Transition : créée depuis `origin/main` depuis la branche framing ; document `90` untracked **préservé** ; non poussée ; pas de PR.

## 9–10. Handoff entrant

Commit : `5cfe22e5cea9d9d92ee419bd9139130466470464`
Blob : `9782f9f253e234a90ac4d8cf4bb3848f0e0c27bd`
Tip observé initial : `5cfe22e5cea9d9d92ee419bd9139130466470464`
Titre : Framing — Studio v3 Doctrine Applied
Verdict entrant : FRAMING COMPLETE WITH OPEN DECISIONS — READY FOR … FUNCTIONAL ARCHITECTURE DECISION

## 11–12. Document 90

Chemin : `projects/sfia-studio/90-assistant-sfia-native-openai-first-product-increment-framing.md`
Présent localement · non tracké · SHA-256 `2d5a03f366e5291e54b6617ada972158763199bf918bea01f031d4212b1a78b2`
Ancien `86-…` : absent
Cohérence handoff :
```
DOC90_CONSISTENT_WITH_HANDOFF=100pct_nonempty_lines_present
sha256=2d5a03f366e5291e54b6617ada972158763199bf918bea01f031d4212b1a78b2

```
Observation : extraction fence markdown du pack entrant tronque artificiellement ; **100 % des lignes non vides locales sont présentes dans le handoff** — pas de divergence matérielle. Document `90` **non modifié** dans ce cycle (`doc90_unchanged=YES`).

## 13. Template canonique

`prompts/templates/sfia-cycle-execution-template.md` — consulté.

## 14. CKC recherché

- Cycle Architecture fonctionnelle : entrée synthétique dans `cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md` (cycle 3) sur main.
- Pilote détaillé Architecture fonctionnelle : **absent** (pilotes 1,2,6,9 seulement).
- Branche `method/sfia-cycle-knowledge-contracts` : **CANDIDATE SOURCE — NOT BASELINE** (method-candidate, no execution authority).
- Fallback utilisé : template + routing + doctrine Studio v3 + document `90` + méthode AF + actifs OA.

CKC cycle Cursor ≠ CKC produit Studio.

## 15–17. Sources

Méthode : template, routing, operating model, guardrails, validation checklist, functional-architecture-method/checklist/deliverables.
Doctrine : 30–37 + README.
Projet : document `90` ; design conversationnel ; OA T-A0…T-A7 ; D2-D 20–24 ; REX D2-D3 (CLOSED WITH RESERVES, non rouvert).

## 18–19. Branches candidates / matrice

Candidates NOT BASELINE : `ux/sfia-studio-d1-conversational-convergence` (87–89) · `framing/sfia-studio-next-product-increment` · `spike/sfia-studio-openai-gpt-adapter` · `method/sfia-cycle-knowledge-contracts` · framing Assistant (précédente).
Baseline : main @ `8dc54db0…` + doctrine + OA libs + `90` local autorisé par GO cadrage.

## 20–21. Découverte / placement

`91` libre sur main et candidates inspectées.
Créé : `projects/sfia-studio/91-assistant-sfia-native-openai-first-product-increment-functional-architecture.md`

## 22–25. Document créé / contenu / diff / hash

Statut : **créé** (untracked) · lignes 730 · SHA-256 `0517aa6c3091f63f0b5c69d40d123fa715dbfb4429d02681ea0398a9588e83e1`

### Contenu complet

```markdown
# 91 — Architecture fonctionnelle — Assistant SFIA natif OpenAI — First Product Increment

| Métadonnée | Valeur |
|---|---|
| **Document** | `projects/sfia-studio/91-assistant-sfia-native-openai-first-product-increment-functional-architecture.md` |
| **Statut** | DRAFT FOR MORRIS VALIDATION |
| **Cycle** | Architecture fonctionnelle |
| **Profil** | Standard |
| **Typologie** | EVOL — évolution structurée de SFIA Studio |
| **Nature** | Documentation-only |
| **GO Morris** | GO ARCHITECTURE FONCTIONNELLE SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — FIRST PRODUCT INCREMENT — APPLY EXISTING STUDIO V3 DOCTRINE — 2026-08-04 22:37 CEST (+0200) |
| **Baseline main** | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| **Handoff entrant** | `5cfe22e5cea9d9d92ee419bd9139130466470464` / blob `9782f9f253e234a90ac4d8cf4bb3848f0e0c27bd` |
| **Source cadrage** | `projects/sfia-studio/90-assistant-sfia-native-openai-first-product-increment-framing.md` (local, non publié main ; SHA-256 `2d5a03f366e5291e54b6617ada972158763199bf918bea01f031d4212b1a78b2`) |
| **Branche locale** | `architecture/sfia-studio-assistant-sfia-native-openai-fpi-functional` (non poussée) |
| **Doctrine de conduite** | SFIA v2.6 |
| **Doctrine produit** | SFIA Studio v3 exclusive (D-V3-02 · D-V3-03) |
| **Autorité** | Morris (L0) — aucune option n’est DECIDED / VALIDATED / ADOPTED / APPROVED |

> Formulations : **Observation** · **Hypothèse** · **Option** · **Recommandation candidate** · **WORKING ASSUMPTION — NOT DECIDED** · **Décision Morris requise**.

---

## 1. Statut et autorité

### 1.1 Objet

Traduire le cadrage `90` en architecture fonctionnelle du First Product Increment (FPI) : domaines, responsabilités, composants, objets, flux, états, contrats, outils, politiques, erreurs, critères d’acceptation, et entrées UX/UI + Architecture technique.

### 1.2 Anti-claims

Pas d’Architecture fonctionnelle validée · Pas de D-ASST décidée · Pas d’UX/tech validées · Pas d’API OpenAI intégrée · Pas de chat fonctionnel · Pas de DoctrinePackage production-ready · Pas de LPS durable · Pas de Cursor réel · Pas de Git write · Pas de D2-D4 · Pas de MVP · Pas production-ready · Pas RUN READY · Pas de doctrine modifiée · Pas de nouvelle fondation V3-Fxx · Pas de doctrine OpenAI · Pas de fallback doctrinal produit v2.6.

### 1.3 Décisions ouvertes (non consommées)

D-ASST-FPI-01…16 restent **NOT DECIDED — MORRIS DECISION REQUIRED**. Ce GO autorise analyse, options, impacts et variantes — pas la consommation.

### 1.4 Working assumptions candidates (non validées)

Utilisées uniquement pour construire un noyau cohérent :

| ID | Assumption | Marqueur |
|---|---|---|
| WA-01 | FPI option B : chat + read-only + prep EC + analyse handoff/PR RO | WORKING ASSUMPTION — NOT DECIDED |
| WA-02 | Composition verticale partielle T-A0…T-A4 + T-A6 | WORKING ASSUMPTION — NOT DECIDED |
| WA-03 | T-A5 real execution hors FPI | WORKING ASSUMPTION — NOT DECIDED |
| WA-04 | Persistance Project-local minimale candidate | WORKING ASSUMPTION — NOT DECIDED |
| WA-05 | Routage discret + panneau expert optionnel | WORKING ASSUMPTION — NOT DECIDED |
| WA-06 | LPS visible : résumé + décisions + réserves + preuves clés | WORKING ASSUMPTION — NOT DECIDED |
| WA-07 | Snippets Git allowlistés et redacted | WORKING ASSUMPTION — NOT DECIDED |
| WA-08 | OpenAI-only FPI + port interne minimal | WORKING ASSUMPTION — NOT DECIDED |
| WA-09 | Confirmations CC-D06 à préciser (mapping chat) | WORKING ASSUMPTION — NOT DECIDED |
| WA-10 | EC draft + export Markdown Cursor ; pas lancement | WORKING ASSUMPTION — NOT DECIDED |
| WA-11 | OpenAI dégradé non structurant ; fail-closed structurant | WORKING ASSUMPTION — NOT DECIDED |

---

## 2. Vision fonctionnelle

Le FPI est un **Assistant SFIA conversationnel** dans un Project actif : OpenAI fournit la capacité cognitive sous **contrôle déterministe de SFIA Studio**, appliquant la doctrine Studio v3, consultant des sources **read-only**, préparant décisions et ExecutionContracts **sans autorité autonome**.

| Vue | Contenu |
|---|---|
| Utilisateur | Chat Project ; panneau vivant ; distinctions épistémiques ; confirmations ; statut provider/usage |
| SFIA Studio | Accès, doctrine, sources, outils, policies, validation sortie, LPS/trajectoire candidates, audit |
| OpenAI | Raisonnement/génération dans un contexte **préparé et borné** par Studio |
| Outils | Read-only / préparation uniquement |
| Morris | Décide GO, mutations structurantes, validations |
| Hors FPI | Cursor réel, agent réel, Git write, multi-agent autonome, persistance forte, D2-D4 |

---

## 3. Principes fonctionnels

1. Conversation naturelle dominante (CC-D01).
2. Project actif obligatoire pour conversation projet.
3. Intention avant cycle ; Project ≠ Cycle (CC-D13).
4. DoctrinePackage avant raisonnement structurant (V3-F03).
5. CKC après qualification de cycle (V3-F01) ; jamais formulaire brut (CC-D12).
6. Sources résolues par Studio (V3-F07) ; OpenAI **ne consulte jamais Git directement**.
7. Sortie visible + sortie structurée interne.
8. LPS / trajectoire non mutés implicitement (V3-F02/F06).
9. Décision Morris distincte ; phrase libre ≠ GO (V3-F05/F12).
10. Action structurante fail-closed ; preuve avant verdict (V3-F14/F15).
11. Hors-sujet non persisté comme connaissance Project.
12. SFIA v2.6 = conduite du cycle de fabrication Cursor, **pas** doctrine runtime produit.

---

## 4. Périmètre fonctionnel (noyau commun)

Indépendant des décisions ouvertes (variantes §38) :

- sélection/reprise Project ; ouverture conversation ; lecture contexte ;
- résolution DoctrinePackage ; classification intention ; mode conversationnel ;
- qualification cycle candidat ; résolution CKC ; résolution sources ;
- appels outils read-only ; analyse OpenAI ; validation sortie structurée ;
- réponse visible ; proposition LPS/trajectoire deltas ;
- préparation recommandation / HumanDecision / confirmations ;
- préparation ExecutionContract + export Cursor candidat ;
- analyse rapport/handoff ; audit ; usage/coût ; erreurs et reprise.

---

## 5. Hors périmètre fonctionnel

Cursor réel · exécution agent réelle · Git write · code write · branche/commit/push/PR/merge/cleanup auto · multi-agent autonome · persistance multi-instance forte · production-ready / RUN READY · D2-D4 · modification doctrine · promotion méthode · choix définitifs modèle/SDK/RAG/stockage.

---

## 6. Acteurs fonctionnels

| Acteur | Responsabilité | Autorité | Interdit |
|---|---|---|---|
| Morris / décideur | GO, mutations structurantes, arbitrages | L0 | déléguer L5 global |
| Chef de projet | dialogue, confirmations selon rôle | selon membership | forger GO |
| Contributeur | dialogue limité | read + propose | muter LPS |
| Reviewer | analyse preuves | read | merge |
| Admin Studio | config provider, plafonds (futur) | admin | exposer secrets client |
| SFIA Studio | orchestration + policies | déterministe | faire confiance aveugle au modèle |
| Assistant SFIA | comprendre, router, préparer | aucune décision | GO / mutation / Cursor launch |
| OpenAI Provider | génération bornée | aucune | outils hors allowlist ; Git direct |
| Doctrine Resolver | pin/digest/allowlist | system fail-closed | fallback v2.6 |
| Knowledge Router | sources autorisées | system | hors allowlist |
| Git Source Adapter | lecture Git RO | read | write |
| Project State Store | LPS/Project | store | mutation sans HumanDecision |
| Decision Authority | verify/consume | authority | auto-approve |
| Cursor Export Adapter | MD export | prepare | execute |
| Evidence/Review Adapter | handoff/preuves | read/analyze | remplacer handoff |
| Audit/Usage Service | journal + metering | append | suppress evidence |

Confiance : Studio > preuves Git > décisions > LPS validé > doctrine pinée > CKC > docs non validés > conversation > recommandations > hypothèses. Audit : tous les acteurs structurants.

---

## 7. Carte des domaines fonctionnels

Pour chaque domaine : finalité · responsabilités · objets · dépendances · autorité · invariants · maturité T-A* · décisions ouvertes.

| # | Domaine | Finalité | Maturité existante | Décisions |
|---|---|---|---|---|
| 1 | Project Context | identité, membership, pin doctrine | T-A1 memory | 02 03 13 |
| 2 | Conversation | messages, sessions | ABSENT produit | 03 08 16 |
| 3 | Intent and Mode Routing | taxonomie intention/modes | partiel design D1 | 04 06 |
| 4 | Doctrine Resolution | package resolve fail-closed | T-A0 fixture | 02 |
| 5 | Cycle and CKC Qualification | cycle candidat + CKC | T-A2 memory | 02 04 |
| 6 | Knowledge and Source Routing | allowlist, redaction | T-A0 + gaps | 07 |
| 7 | Epistemic Analysis | types épistémiques + contradictions | T-A2 epistemic | — |
| 8 | Living Project State | lecture + deltas | T-A1 memory | 03 05 |
| 9 | Project Trajectory | lecture + deltas | T-A2 memory | — |
| 10 | Recommendation and Decision | reco → HumanDecision | T-A3 memory | 11 |
| 11 | Confirmation and Action Policy | N1–N3 | T-A3/T-A4 | 11 |
| 12 | Execution Preparation | EC + export Cursor | T-A4 ; T-A5 hors | 12 |
| 13 | Evidence and Review | handoff/claims | T-A6 memory | — |
| 14 | AI Provider Coordination | OpenAI borné | spike historique ≠ produit | 09 10 15 |
| 15 | Functional Guardrails | policies Studio | invariants OA + à composer | — |
| 16 | Audit and Observability | events corrélés | journals memory | — |
| 17 | Usage and FinOps | tokens/coût/plafonds | ABSENT | 14 |
| 18 | Identity and Project Access | ACL Project | partiel D1 | 13 |

Invariants transverses : no v2.6 runtime doctrine · no implicit LPS mutation · no direct Git for OpenAI · no Cursor launch FPI.

---

## 8. Responsabilités des composants fonctionnels

Responsabilités (pas classes/microservices) :

| Composant | Domaine | Rôle |
|---|---|---|
| Project Session Manager | 1 18 | Project actif, accès |
| Conversation Manager | 2 | cycle de vie conversation/message |
| Intent Resolver | 3 | taxonomie intention |
| Conversation Mode Router | 3 | modes ; anti-cycle forcé |
| DoctrinePackage Resolver | 4 | pin/digest/fail-closed |
| Cycle Qualifier | 5 | type/profil/blocs candidats |
| CKC Resolver | 5 | detailed/synthetic/absent |
| Authorized Source Router | 6 | allowlist + provenance |
| Tool Invocation Coordinator | 6 15 | outils RO bornés |
| OpenAI Conversation Coordinator | 14 | appel provider |
| Structured Response Validator | 14 15 | schéma fonctionnel + policies |
| Epistemic Classifier | 7 | labels |
| Contradiction Resolver | 7 | signalement ; Morris si besoin |
| LPS Query / Delta Proposal | 8 | read + propose |
| Trajectory Query / Proposal | 9 | read + propose |
| Recommendation Service | 10 | options/reco |
| Human Decision Service | 10 | préparation/consommation |
| Confirmation Service | 11 | N1–N3 |
| ExecutionContract Builder | 12 | EC candidat |
| Cursor Export Adapter | 12 | MD adaptateur |
| Review Handoff Reader | 13 | lecture handoff |
| Evidence Review Service | 13 | analyse preuves |
| Policy Enforcement Service | 15 | fail-closed |
| Provider Availability Service | 14 | santé provider |
| Audit Journal | 16 | append-only |
| Usage Metering Service | 17 | tokens/coût |

---

## 9. Frontières fonctionnelles

| Frontière | Règle |
|---|---|
| UI ↔ logique | UI n’applique pas policies doctrinales |
| Studio ↔ OpenAI | Studio assemble contexte ; OpenAI ne choisit pas sources |
| OpenAI ↔ outils | outils exposés explicitement ; résultats filtrés avant retour modèle si besoin |
| Outils ↔ Git | adapter RO seulement |
| Project ↔ Conversation | conversation scoped Project ; hors-sujet isolé |
| Conversation ↔ LPS | conversation propose ; LPS mute après HumanDecision |
| Reco ↔ décision | labels distincts |
| Décision ↔ mutation | mutation seulement post-décision+confirm |
| EC ↔ exécution | EC ≠ lancement |
| Rapport ↔ handoff | validation exige handoff |
| Preuve ↔ claim | claim sans preuve → anti-claim |
| Baseline ↔ candidate | candidate jamais présentée baseline |
| Mémoire conv ↔ SoT | mémoire ≠ vérité |

---

## 10. Chaîne conversationnelle nominale

| # | Étape | Responsable | Échec | Mode |
|---|---|---|---|---|
| 1 | Project actif résolu | Session Manager | no access | fail-closed |
| 2 | Message reçu | Conversation Manager | invalid | fail |
| 3 | Contrôle d’accès | Access | denied | fail-closed |
| 4–5 | Classification / hors-sujet | Intent/Mode | ambiguous | clarify |
| 6 | DoctrinePackage si structurant | Doctrine Resolver | stale/absent | fail-closed |
| 7 | Contexte minimal | Source Router | — | degrade light |
| 8–9 | Intention + mode | Intent/Mode | — | — |
| 10–11 | Cycle + CKC si besoin | Qualifier/CKC | absent detailed | synthetic intra-v3 |
| 12–14 | Sources + outils RO | Router/Tools | forbidden | refuse tool |
| 15–16 | Assemblage + appel OpenAI | Provider Coord | timeout/down | WA-11 |
| 17–18 | Validation + garde-fous | Validator/Policy | invalid | fail-closed structurant |
| 19 | Contradictions | Contradiction | high conflict | Morris |
| 20 | Réponse visible | Conversation | — | — |
| 21–22 | Deltas + gate/confirm | LPS/Decision | — | N1–N3 |
| 23 | Audit + usage | Audit/Usage | — | best-effort journal |

Preuve : AuditEvent + ToolInvocation + ProviderInvocation + éventuel EvidenceLink.

---

## 11. Flux conversation libre

- Pas de cycle si intention libre/explication/brainstorm sans gate.
- Sources : aucune, ou LPS light, ou doc allowlist minimale.
- Digression mineure : réponse sans pollution Project.
- Hors Project : pas de sources Project ; pas LPS/trajectoire ; pas cycle ; rappel sobre.

Routeur **interdit** de créer un cycle artificiellement (V3-F05 + doc90 §8).

---

## 12. Flux cycle formel

Intention cycle → CycleQualification (type, profil, lenses/blocs) → CkcResolution → sources requises → questions adaptatives minimales → maturité attendue → décisions attendues → gate Morris → préparation contrat de cycle (pas template v2.6 comme moteur produit).

Objets Studio v3 uniquement.

---

## 13. Flux demande de prompt Cursor

Reconnaissance → vérif Project/cycle/doctrine/CKC/décisions → verifyCursorTemplate / build EC → fichiers autorisés/interdits → stop conditions → preuves → ExecutionContractCandidate → CursorExport MD → confirmation N2/N3 candidate → **interdiction lancement Cursor FPI**.

---

## 14. Flux rapport Cursor / validation

Reconnaissance rapport → readHandoff → complétude → confrontation Git/preuves → findings/réserves/anti-claims → verdict candidat → décision Morris. **Handoff absent/incomplet → blocage** (V3-F14).

---

## 15. Flux décision Morris

Recommendation → décision candidate → objet → N1/N2/N3 → authority verify → formulation explicite → validation applicative → consume → audit → mutation éventuelle.

Différences :

| Terme | Signification |
|---|---|
| Accord conversationnel | non exécutoire |
| Confirmation | N1–N3 scoped |
| Décision | HumanDecision enregistrée |
| GO | décision explicite consommable |
| Autorisation d’exécution | post-EC confirm ; hors lancement FPI |

Faux GO → non consommé.

---

## 16. Flux DoctrinePackage et sources

Project pin → version/digest → allowlist → fraîcheur → provenance → source demandée → autorité → filtre → redaction → contradictions. Stale/absent → fail-closed. Changement package → Morris. **Aucun fallback v2.6.**

---

## 17. Flux CKC

Post-qualification → detailed/synthetic/absent → dimensions / questions / risques / maturité / preuves → UI silencieuse ou discrète → audit. Pas d’autorité. Pas d’invention detailed. Fallback synthétique **intra-v3** seulement.

---

## 18. Flux OpenAI

Studio prépare : consignes doctrinales, outils, données autorisées → appel (stream optionnel) → sortie visible + structurée → validation → erreurs/timeout/cancel/retry borné → coût/audit.

OpenAI **ne doit pas** : choisir sources ; accéder FS/Git ; décider GO ; muter LPS ; lancer Cursor ; modifier code ; valider architecture ; contourner policy.

Capacités actuelles OpenAI : **OPENAI CURRENT CAPABILITY NOT VERIFIED** (cadrage) — exigences fonctionnelles, pas engagement tech.

---

## 19. Objets métier fonctionnels

Définition concise (pas de schéma technique) :

| Objet | Autorité | Mutabilité |
|---|---|---|
| Project | Studio/store | contrôlée |
| ProjectMembership | Access | admin |
| Conversation / ConversationMessage | Conversation | append |
| IntentResolution / ConversationMode | Intent/Mode | derived |
| DoctrinePackageRef / DoctrineResolution | Doctrine | pin change = décision |
| SourceReference / SourceResolution | Knowledge | derived |
| ToolInvocation | Tools | audit |
| CycleCandidate / CycleQualification / CkcResolution | Cycle/CKC | candidate jusqu’à validation |
| EpistemicItem / Observation / Hypothesis / Option / Recommendation / Contradiction | Epistemic | labels stricts |
| LivingProjectState / LpsDeltaCandidate | LPS | delta→decision→apply |
| ProjectTrajectory / TrajectoryDeltaCandidate | Trajectory | idem |
| HumanDecision / Gate / ConfirmationRequest | Decision | lifecycle |
| ExecutionContractCandidate / CursorExport | Execution prep | candidate |
| EvidenceLink / ReviewBundleReference / ReviewAnalysis | Evidence | analyze |
| ProviderInvocation | Provider | audit |
| FunctionalError / AuditEvent / UsageRecord | Ops | append |
| Reserve / DebtItem / MaturityAssessment | Evidence/Debt | historique |

Cycle de vie candidat→validé pour deltas, décisions, EC. Relations : voir §20.

---

## 20. Relations conceptuelles

```
Project --possède--> Conversations
Project --référence--> DoctrinePackageRef
Project --possède--> LivingProjectState
Project --possède--> ProjectTrajectory
Conversation --contient--> Messages
Message --produit--> IntentResolution
IntentResolution --peut--> CycleQualification
CycleQualification --produit--> CkcResolution
SourceResolution --alimente--> ProviderInvocation
ProviderInvocation --produit--> réponse visible + sortie structurée
sortie structurée --peut--> LpsDeltaCandidate + TrajectoryDeltaCandidate
Recommendation --peut--> HumanDecision request
HumanDecision --peut--> mutation LPS/trajectoire ou EC
ReviewAnalysis --s’appuie--> EvidenceLinks + ReviewBundleReference
```

---

## 21. États fonctionnels (candidats)

### Conversation
`active` · `awaiting_clarification` · `awaiting_source` · `awaiting_provider` · `awaiting_human` · `completed` · `failed` · `cancelled`

### Message
`received` · `classified` · `sourcing` · `reasoning` · `validating` · `responded` · `blocked` · `failed` · `cancelled`

### Provider invocation
`pending` · `streaming` · `completed` · `failed` · `timed_out` · `cancelled`

### Decision
`candidate` · `awaiting_confirmation` · `confirmed` · `rejected` · `superseded` · `expired`

### LPS delta
`proposed` · `awaiting_decision` · `accepted` · `rejected` · `applied` · `failed`

Ces états sont **candidats fonctionnels**, non schémas techniques validés.

---

## 22. Contrats fonctionnels

Pour chaque contrat : acteur · préconditions · entrées/sorties · erreurs · autorité · effets / absence d’effet · audit · idempotence · décision éventuelle.

| Contrat | Effet | Absence d’effet clé |
|---|---|---|
| StartProjectConversation | Conversation active | pas de mutation LPS |
| SubmitConversationMessage | message reçu | — |
| ResolveConversationIntent | IntentResolution | pas de cycle auto |
| ResolveProjectDoctrine | DoctrineResolution | fail-closed si invalid |
| QualifyProjectCycle | CycleQualification | pas d’ouverture Cycle runtime |
| ResolveCycleKnowledge | CkcResolution | pas d’invention detailed |
| SearchAuthorizedSources | hits filtrés | hors allowlist refus |
| InvokeReadOnlyTool | ToolInvocation result | jamais write |
| RequestOpenAIResponse | ProviderInvocation | pas d’accès Git direct |
| ValidateAssistantResponse | ok/invalid | block si structurant invalid |
| ProposeLpsDelta / ProposeTrajectoryDelta | candidates | pas d’apply |
| PrepareHumanDecision | décision candidate | pas de consume |
| ConfirmHumanDecision | confirmation | faux GO refusé |
| BuildExecutionContractCandidate | EC draft | pas d’execute |
| ExportCursorPrompt | CursorExport | pas de launch |
| AnalyzeCursorReport / AnalyzeReviewHandoff | ReviewAnalysis | block si handoff missing |
| RecordAuditEvent / RecordUsage | append | — |

---

## 23. Catalogue des outils read-only

Reprise approfondie doc90 §22 :

| Outil | Domaine | Conséquence interdite |
|---|---|---|
| readProject / readLPS / readTrajectory | 1 8 9 | mutate |
| resolveDoctrinePackage / resolveCKC | 4 5 | v2.6 fallback ; invent detailed |
| searchAuthorizedSource | 6 | hors allowlist |
| readGitFile / readGitState | 6 | write ; send secrets |
| readMorrisDecisions / readReserves | 10 | forge GO ; lift reserve |
| readHandoff / inspectPR / inspectCI | 13 | replace handoff ; merge ; rerun |
| readConversationHistory | 2 | promote hors-sujet as fact |
| verifyCursorTemplate | 12 | — |
| buildExecutionContractCandidate | 12 | execute |

Tous : scope Project · allowlist · redaction · timeout · audit · autorité read/prepare.

---

## 24. Policy et garde-fous fonctionnels

| Règle | Propriétaire | Modèle | Studio | Blocage |
|---|---|---|---|---|
| DoctrinePackage invalide | Doctrine | — | enforce | structurant |
| Source hors allowlist | Knowledge | — | enforce | refus |
| CKC absent detailed | CKC | ne pas inventer | enforce | synthetic only |
| Prompt injection | Policy | ignore instr. doc | enforce | refuse actions |
| Secret | Policy | — | redact/refus | send block |
| Faux GO | Decision | — | non consommé | — |
| Mutation sans décision | LPS | — | enforce | block |
| Git write | Tools | — | enforce | interdit FPI |
| Rapport sans handoff | Evidence | — | enforce | block validation |
| Claim sans preuve | Evidence | — | anti-claim | — |
| Mémoire ≠ Git | Provenance | — | Git prime | — |
| Candidate as baseline | Provenance | — | contradiction | — |
| Provider down | Provider | — | WA-11 | structurant closed |
| Budget dépassé | FinOps | — | soft/hard variant | D-ASST-14 |
| Accès refusé | Access | — | enforce | — |
| Sortie structurée invalide | Validator | — | enforce | structurant |
| Hors-sujet | Mode | — | no persist Project | — |
| Timeout / cancel | Provider/Conv | — | no side effect | — |

---

## 25. Mémoire fonctionnelle

| Type | SoT ? | Mutation | Exclusion |
|---|---|---|---|
| Contexte immédiat | non | éphémère | — |
| Historique conversation | non | append | hors-sujet isolé |
| Résumé Project | non | proposé | ≠ LPS |
| LPS | oui (validé) | HumanDecision | — |
| Trajectoire | reco jusqu’à validation | HumanDecision | — |
| Décisions | oui | authority | — |
| Préférences user | non | user | pas doctrine |
| Sources consultées | audit | append | — |
| Audit / usage | oui append | append | pas d’effacement silencieux |
| Hors-sujet | non Project | session only | pas LPS |

Technologie de stockage : **non décidée** (D-ASST-FPI-03/08).

---

## 26. Accès et isolation Project

Utilisateur · rôle · membership · Project actif · switch Project · accès sources/décisions/conversations · séparation données · admin · reviewer · non-décideur · refus · audit. Aucune fuite inter-Project dans le contexte OpenAI.

---

## 27. Sécurité et RGPD fonctionnels

| Catégorie | → OpenAI | Conditions | UI | Notes |
|---|---|---|---|---|
| Métadonnées Git | variant | WA-07 | oui | D-ASST-07 |
| Snippets Git | variant | allowlist+redact | oui | D-ASST-07 |
| Fichiers complets | déconseillé FPI | — | rare | option |
| Secrets | non | redact | masqué | — |
| Données personnelles | minimiser | base légale ouverte | limité | D-ASST-08 |
| Confidentiel projet | policy | — | ACL | — |
| Conversation | oui borné | TTL ouvert | oui | D-ASST-08 |
| Décisions | métadonnées | — | oui | — |
| Audit | non provider | interne | admin | — |
| Usage metrics | non contenu | agrégats | oui | — |

**Ne valide pas** D-ASST-FPI-07/08 — variantes exposées.

---

## 28. FinOps fonctionnel

Usage par message / Conversation / Project / cycle · tokens · estimation coût · plafond souple/dur · alerte · erreur · override admin · affichage · audit.

**Pas de tarifs inventés. D-ASST-FPI-14 NOT DECIDED.**

---

## 29. Observabilité fonctionnelle

Événements : Project opened · Conversation started · Message received · Intent/Mode resolved · Doctrine/CKC resolved · Source requested/returned/refused · Tool started/completed · Provider started/streaming/completed/failed · Output validation failed · Contradiction detected · Recommendation prepared · Decision requested/consumed · LPS delta proposed/applied · EC prepared · Review analyzed · Usage recorded · Conversation cancelled.

Données minimales : ids corrélation, projectId, outcomes, durées. Interdit : secrets, payloads complets non nécessaires.

---

## 30. Performance fonctionnelle

Attentes qualitatives : premier retour rapide · streaming possible · sources limitées · outils bornés · annulation · timeout · gros docs → résumé/snippet · conversations longues → compaction candidate · reprise · coût · mode dégradé.

Seuils chiffrés : **OPTION — MORRIS DECISION REQUIRED**.

---

## 31. Accessibilité fonctionnelle

Statut non couleur-seul · sources indiquées · décision≠reco · streaming annoncé · erreurs claires · clavier · panneau vivant accessible · confirmations claires · structure · progressive disclosure · lecteur d’écran. Pas de maquette.

---

## 32. Impacts UX/UI

| Surface | Visibilité candidate (WA-05/06) |
|---|---|
| Conversation principale | toujours |
| Project actif | toujours |
| Panneau vivant LPS/trajectoire/réserves/preuves | toujours (résumé) |
| Doctrine status | progressif / erreur |
| Cycle détecté | discret |
| Sources consultées | progressif |
| Reco / décisions / confirmations | modal ou inline selon N |
| Usage/coût / provider status | discret |
| Erreurs / reprise | visible |
| Vue expert routage | optionnelle |

Entrée pour cycle UX/UI : contrat visuel sans figer layout.

---

## 33. Impacts Architecture technique

Questions ouvertes (ne pas trancher) : frontière serveur/client · port OpenAI · tool calling · Structured Outputs · orchestration · stockage conversation/LPS · registry doctrine · Git adapters · IAM · audit · secrets · redaction · streaming · timeout · cancel · retries · usage · observabilité · tests · migrations · compat T-A0…T-A7.

---

## 34. Réutilisation T-A0…T-A7

| Capacité | Domaine cible | Action | Réserve |
|---|---|---|---|
| T-A0 Doctrine | 4 6 15 | REUSE + ADAPT composition chat | fixture ≠ prod registry |
| T-A1 Project/LPS | 1 8 | REUSE + ADAPT persist minimale | memory only |
| T-A2 Cycle/CKC/Epistemic/Trajectory | 5 7 9 | REUSE + ADAPT bridging | memory ; pas UI path |
| T-A3 Decision/Confirm | 10 11 | REUSE + ADAPT mapping chat | R-T-A3-* |
| T-A4 ExecutionContract | 12 | REUSE préparation | pas execute |
| T-A5 ExecutionAttempt | — | HORS SCOPE FPI (fake only) | no real agents |
| T-A6 Evidence/Review/Maturity | 13 | REUSE analyse | memory/fake |
| T-A7/D2-D execution-run | 13 15 | REUSE WITH PRECISION RO | CLOSED WITH RESERVES ; no Cursor live |

**Anti-claim :** library implemented ≠ parcours produit intégré ≠ production-ready.

---

## 35. Parcours fonctionnels de référence

Chaque parcours : acteur · préconditions · nominal · variantes · erreurs · objets · composants · outils · sources · décisions · audit · résultat · anti-claims.

1. **Conversation libre Project** — Mode free ; readLPS optionnel ; pas cycle ; LPS inchangé.
2. **Explication doctrinale** — resolveDoctrinePackage ; pédagogique ; pas GO.
3. **État Project Git+LPS** — readLPS+readGitState ; Git prime.
4. **Brainstorming** — options marquées ; pas décision.
5. **Préparation cycle** — qualify+ckc ; N2 candidate ; pas exécution.
6. **Prompt Cursor** — build EC + export ; pas launch.
7. **Rapport + handoff** — analyze ; block si missing handoff.
8. **PR readiness RO** — inspectPR/CI ; pas merge.
9. **Demande décision Morris** — PrepareHumanDecision ; await.
10. **Faux GO** — non consommé.
11. **Hors Project** — no sources Project ; no persist.
12. **DoctrinePackage stale** — fail-closed.
13. **CKC synthetic** — intra-v3 ; pas v2.6.
14. **Source hors allowlist** — refus.
15. **Prompt injection** — ignore ; refuse actions.
16. **Secret détecté** — redact/refus envoi.
17. **OpenAI indisponible** — WA-11 ; no mutation.
18. **Budget dépassé** — variante D-ASST-14 ; no mutation silencieuse.
19. **Annulation utilisateur** — cancel provider/conv ; no side effect.
20. **Sortie structurée invalide** — fail-closed structurant ; retry/clarify.

---

## 36. Matrice scénarios S01–S20 → architecture

| Scénario | Domaines | Composants clés | Garde-fou |
|---|---|---|---|
| S01 libre | 2 3 8 | Mode Router, LPS Query | no forced cycle |
| S02 explication | 4 7 | Doctrine, Epistemic | no GO |
| S03 état | 6 8 16 | Git adapter, LPS | Git prime |
| S04 réserve | 10 13 | readReserves | no lift |
| S05 brainstorm | 3 7 | Epistemic | options≠décisions |
| S06 hypothèse≠Git | 6 7 | Contradiction | no promote |
| S07 reco+dette | 10 | Recommendation | dette visible |
| S08 cycle | 5 | Qualifier/CKC | no exec |
| S09 CKC detailed | 5 | CKC Resolver | no raw UI |
| S10 CKC synthetic | 5 | CKC Resolver | no v2.6 |
| S11 prompt Cursor | 12 | EC Builder/Export | no launch |
| S12 rapport | 13 | Handoff Reader | block w/o handoff |
| S13 PR | 13 6 | inspectPR/CI | no merge |
| S14 faux GO | 10 11 | Decision/Confirm | non consommé |
| S15 hors-sujet | 3 2 | Mode Router | no persist |
| S16 OpenAI down | 14 15 | Provider/Policy | fail-closed struct |
| S17 package stale | 4 15 | Doctrine/Policy | block |
| S18 hors allowlist | 6 15 | Source Router | refus |
| S19 injection | 15 | Policy | refuse |
| S20 secret | 6 15 | Redaction | no send |

Couverture : **complète** pour S01–S20. Aucun trou fonctionnel bloquant identifié.

---

## 37. Critères d’acceptation Architecture fonctionnelle

- Chaîne v3 couverte fonctionnellement.
- Aucun nouveau principe doctrinal.
- Aucune responsabilité critique uniquement sur OpenAI.
- Décisions humaines ; sources contrôlées Studio ; pas d’accès Git direct modèle.
- LPS/trajectoire non mutés implicitement ; outils RO ; EC candidats ; handoffs obligatoires validation.
- Erreurs structurantes fail-closed ; hors-sujet non polluant ; coûts observables ; secrets protégés.
- T-A0…T-A7 mappés sans anti-claim ; variations visibles ; D-ASST restantes identifiées.

---

## 38. Decision Pack Architecture fonctionnelle (D-ASST-FPI-01…16)

Toutes **NOT DECIDED**. Impacts synthétiques :

| ID | Impact AF | Urgence |
|---|---|---|
| 01 Périmètre FPI | bornes domaines 12–14 | MUST BEFORE BACKLOG |
| 02 Connexion T-A* | composition composants | MUST BEFORE TECH |
| 03 Persist minimale | mémoire/store | MUST BEFORE TECH |
| 04 Visibilité routage | UX surfaces | MUST BEFORE UX/UI |
| 05 Contenu LPS visible | panneau vivant | MUST BEFORE UX/UI |
| 06 Hors-sujet | Mode Router | MUST BEFORE UX/UI |
| 07 Git→OpenAI | Source Router/RGPD | MUST BEFORE TECH |
| 08 Conservation conv | mémoire | MUST BEFORE TECH |
| 09 Modèle | Provider | MUST BEFORE TECH |
| 10 OpenAI vs port | Provider boundary | MUST BEFORE TECH |
| 11 N1–N3 mapping | Confirmation | MUST BEFORE UX/UI |
| 12 Prep Cursor | domaine 12 | CAN DEFER DELIVERY (WA-10) |
| 13 Pilote | Access | CAN DEFER PILOT |
| 14 FinOps cap | domaine 17 | MUST BEFORE PILOT / soft BEFORE TECH |
| 15 Fallback OpenAI | Provider/Policy | MUST BEFORE TECH |
| 16 Priorité UX/backend | trajectoire dual-track | MUST BEFORE BACKLOG |

Recommandations candidates du cadrage `90` restent **candidates**, non validées.

---

## 39. Arbitrages fonctionnels nouveaux

| ID | Besoin | V3-F | Pourquoi nouveau | Options | Statut |
|---|---|---|---|---|---|
| D-ASST-AF-01 | Orchestrateur conversationnel comme domaine explicite vs éclaté | F05 | Cadrage listait gap implémentation ; AF doit nommer responsabilité | A monolithe fonctionnel B bus événements C pipeline étapes | NOT DECIDED — MUST BEFORE TECH |
| D-ASST-AF-02 | Validation sortie structurée : schema fonctionnel minimal vs libre | F04 F14 | Nécessaire pour fail-closed | A champs obligatoires B progressive | NOT DECIDED — MUST BEFORE TECH |
| D-ASST-AF-03 | Dual-track UX∥Tech après AF | — | Trajectoire | A séquentiel UX puis Tech B dual-track borné | NOT DECIDED — MUST BEFORE BACKLOG |

Aucune modification doctrine 30–37.

---

## 40. Risques fonctionnels

| Risque | Impact | Proba | Mitigation | Décision/Réserve |
|---|---|---|---|---|
| Orchestration trop centrale | complexité | M | domaines explicites D-ASST-AF-01 | AF-01 |
| Surcouplage OpenAI | lock-in autorité | M | policies Studio | 10 15 |
| Modèle comme autorité | faux GO | M | Decision Service | — |
| Double état Conv/LPS | divergence | M | LPS SoT | 03 |
| Sur-consultation sources | coût/latence | M | limiter outils | 07 14 |
| Fuite inter-Project | sécurité | F | isolation | — |
| Faux GO | gouvernance | M | non consommé | — |
| Incohérence LPS/traj | confiance | M | deltas + confirm | — |
| Latence/coût | UX/FinOps | M | streaming + caps | 14 15 |
| Sortie invalide | blocage | M | validator | AF-02 |
| Mauvais cycle/CKC | qualité | M | clarification | 04 |
| Réuse memory excessive | dette | H | WA-02 + anti-claims | 02 03 |
| Réimplémentation OA | gaspillage | M | matrice §34 | 02 |
| UI trop technique | adoption | M | WA-05 | 04 16 |
| Complexité FPI | délai | M | WA-01 option B | 01 |

---

## 41. Trajectoire après Architecture fonctionnelle

1. Validation Morris de l’AF (+ arbitrage décisions bloquantes UX si besoin).
2. **GO UX/UI** recommandé (working assumptions suffisantes pour démarrer contrat visuel ; 04/05/06/11 à arbitrer tôt).
3. Architecture technique OpenAI / knowledge routing.
4. Backlog → Delivery → QA → pilote.

**Dual-track UX∥Tech** : option D-ASST-AF-03 — NOT DECIDED ; possible après arbitrage 04/05/06.

### Prochaine gate candidate recommandée (unique)

`GO UX/UI SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — FIRST PRODUCT INCREMENT — FUNCTIONAL ARCHITECTURE INPUT`

Statut : **candidate uniquement — non consommée**.

Justification : AF complète avec open decisions portées comme points de variation ; impacts UX suffisamment spécifiés ; décisions 04/05/06/11 peuvent être arbitrées en amont ou en parallèle court du UX sans bloquer l’ouverture du cycle UX.

---

## 42. Placement

**Créé :** `projects/sfia-studio/91-assistant-sfia-native-openai-first-product-increment-functional-architecture.md`

`91` libre sur main et sur branches candidates inspectées (87–89 conversationnels ; 90 cadrage local). Document `90` **non modifié**.

---

## 43. Verdict documentaire

**ASSISTANT SFIA NATIVE OPENAI FIRST PRODUCT INCREMENT FUNCTIONAL ARCHITECTURE COMPLETE WITH OPEN DECISIONS — EXISTING SFIA STUDIO V3 DOCTRINE MAPPED TO FUNCTIONAL DOMAINS, COMPONENTS, FLOWS, OBJECTS, CONTRACTS AND GUARDRAILS — OPENAI ROLE AND STUDIO AUTHORITY BOUNDARIES DEFINED — T-A0 TO T-A7 REUSE AND GAPS MAPPED — NO TECHNICAL ARCHITECTURE OR IMPLEMENTATION AUTHORIZED — READY FOR CHATGPT VALIDATION AND MORRIS FUNCTIONAL ARCHITECTURE ARBITRATION**

```

### Diff complet

```diff
diff --git a/projects/sfia-studio/91-assistant-sfia-native-openai-first-product-increment-functional-architecture.md b/projects/sfia-studio/91-assistant-sfia-native-openai-first-product-increment-functional-architecture.md
new file mode 100644
index 0000000..37ce854
--- /dev/null
+++ b/projects/sfia-studio/91-assistant-sfia-native-openai-first-product-increment-functional-architecture.md
@@ -0,0 +1,730 @@
+# 91 — Architecture fonctionnelle — Assistant SFIA natif OpenAI — First Product Increment
+
+| Métadonnée | Valeur |
+|---|---|
+| **Document** | `projects/sfia-studio/91-assistant-sfia-native-openai-first-product-increment-functional-architecture.md` |
+| **Statut** | DRAFT FOR MORRIS VALIDATION |
+| **Cycle** | Architecture fonctionnelle |
+| **Profil** | Standard |
+| **Typologie** | EVOL — évolution structurée de SFIA Studio |
+| **Nature** | Documentation-only |
+| **GO Morris** | GO ARCHITECTURE FONCTIONNELLE SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — FIRST PRODUCT INCREMENT — APPLY EXISTING STUDIO V3 DOCTRINE — 2026-08-04 22:37 CEST (+0200) |
+| **Baseline main** | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
+| **Handoff entrant** | `5cfe22e5cea9d9d92ee419bd9139130466470464` / blob `9782f9f253e234a90ac4d8cf4bb3848f0e0c27bd` |
+| **Source cadrage** | `projects/sfia-studio/90-assistant-sfia-native-openai-first-product-increment-framing.md` (local, non publié main ; SHA-256 `2d5a03f366e5291e54b6617ada972158763199bf918bea01f031d4212b1a78b2`) |
+| **Branche locale** | `architecture/sfia-studio-assistant-sfia-native-openai-fpi-functional` (non poussée) |
+| **Doctrine de conduite** | SFIA v2.6 |
+| **Doctrine produit** | SFIA Studio v3 exclusive (D-V3-02 · D-V3-03) |
+| **Autorité** | Morris (L0) — aucune option n’est DECIDED / VALIDATED / ADOPTED / APPROVED |
+
+> Formulations : **Observation** · **Hypothèse** · **Option** · **Recommandation candidate** · **WORKING ASSUMPTION — NOT DECIDED** · **Décision Morris requise**.
+
+---
+
+## 1. Statut et autorité
+
+### 1.1 Objet
+
+Traduire le cadrage `90` en architecture fonctionnelle du First Product Increment (FPI) : domaines, responsabilités, composants, objets, flux, états, contrats, outils, politiques, erreurs, critères d’acceptation, et entrées UX/UI + Architecture technique.
+
+### 1.2 Anti-claims
+
+Pas d’Architecture fonctionnelle validée · Pas de D-ASST décidée · Pas d’UX/tech validées · Pas d’API OpenAI intégrée · Pas de chat fonctionnel · Pas de DoctrinePackage production-ready · Pas de LPS durable · Pas de Cursor réel · Pas de Git write · Pas de D2-D4 · Pas de MVP · Pas production-ready · Pas RUN READY · Pas de doctrine modifiée · Pas de nouvelle fondation V3-Fxx · Pas de doctrine OpenAI · Pas de fallback doctrinal produit v2.6.
+
+### 1.3 Décisions ouvertes (non consommées)
+
+D-ASST-FPI-01…16 restent **NOT DECIDED — MORRIS DECISION REQUIRED**. Ce GO autorise analyse, options, impacts et variantes — pas la consommation.
+
+### 1.4 Working assumptions candidates (non validées)
+
+Utilisées uniquement pour construire un noyau cohérent :
+
+| ID | Assumption | Marqueur |
+|---|---|---|
+| WA-01 | FPI option B : chat + read-only + prep EC + analyse handoff/PR RO | WORKING ASSUMPTION — NOT DECIDED |
+| WA-02 | Composition verticale partielle T-A0…T-A4 + T-A6 | WORKING ASSUMPTION — NOT DECIDED |
+| WA-03 | T-A5 real execution hors FPI | WORKING ASSUMPTION — NOT DECIDED |
+| WA-04 | Persistance Project-local minimale candidate | WORKING ASSUMPTION — NOT DECIDED |
+| WA-05 | Routage discret + panneau expert optionnel | WORKING ASSUMPTION — NOT DECIDED |
+| WA-06 | LPS visible : résumé + décisions + réserves + preuves clés | WORKING ASSUMPTION — NOT DECIDED |
+| WA-07 | Snippets Git allowlistés et redacted | WORKING ASSUMPTION — NOT DECIDED |
+| WA-08 | OpenAI-only FPI + port interne minimal | WORKING ASSUMPTION — NOT DECIDED |
+| WA-09 | Confirmations CC-D06 à préciser (mapping chat) | WORKING ASSUMPTION — NOT DECIDED |
+| WA-10 | EC draft + export Markdown Cursor ; pas lancement | WORKING ASSUMPTION — NOT DECIDED |
+| WA-11 | OpenAI dégradé non structurant ; fail-closed structurant | WORKING ASSUMPTION — NOT DECIDED |
+
+---
+
+## 2. Vision fonctionnelle
+
+Le FPI est un **Assistant SFIA conversationnel** dans un Project actif : OpenAI fournit la capacité cognitive sous **contrôle déterministe de SFIA Studio**, appliquant la doctrine Studio v3, consultant des sources **read-only**, préparant décisions et ExecutionContracts **sans autorité autonome**.
+
+| Vue | Contenu |
+|---|---|
+| Utilisateur | Chat Project ; panneau vivant ; distinctions épistémiques ; confirmations ; statut provider/usage |
+| SFIA Studio | Accès, doctrine, sources, outils, policies, validation sortie, LPS/trajectoire candidates, audit |
+| OpenAI | Raisonnement/génération dans un contexte **préparé et borné** par Studio |
+| Outils | Read-only / préparation uniquement |
+| Morris | Décide GO, mutations structurantes, validations |
+| Hors FPI | Cursor réel, agent réel, Git write, multi-agent autonome, persistance forte, D2-D4 |
+
+---
+
+## 3. Principes fonctionnels
+
+1. Conversation naturelle dominante (CC-D01).
+2. Project actif obligatoire pour conversation projet.
+3. Intention avant cycle ; Project ≠ Cycle (CC-D13).
+4. DoctrinePackage avant raisonnement structurant (V3-F03).
+5. CKC après qualification de cycle (V3-F01) ; jamais formulaire brut (CC-D12).
+6. Sources résolues par Studio (V3-F07) ; OpenAI **ne consulte jamais Git directement**.
+7. Sortie visible + sortie structurée interne.
+8. LPS / trajectoire non mutés implicitement (V3-F02/F06).
+9. Décision Morris distincte ; phrase libre ≠ GO (V3-F05/F12).
+10. Action structurante fail-closed ; preuve avant verdict (V3-F14/F15).
+11. Hors-sujet non persisté comme connaissance Project.
+12. SFIA v2.6 = conduite du cycle de fabrication Cursor, **pas** doctrine runtime produit.
+
+---
+
+## 4. Périmètre fonctionnel (noyau commun)
+
+Indépendant des décisions ouvertes (variantes §38) :
+
+- sélection/reprise Project ; ouverture conversation ; lecture contexte ;
+- résolution DoctrinePackage ; classification intention ; mode conversationnel ;
+- qualification cycle candidat ; résolution CKC ; résolution sources ;
+- appels outils read-only ; analyse OpenAI ; validation sortie structurée ;
+- réponse visible ; proposition LPS/trajectoire deltas ;
+- préparation recommandation / HumanDecision / confirmations ;
+- préparation ExecutionContract + export Cursor candidat ;
+- analyse rapport/handoff ; audit ; usage/coût ; erreurs et reprise.
+
+---
+
+## 5. Hors périmètre fonctionnel
+
+Cursor réel · exécution agent réelle · Git write · code write · branche/commit/push/PR/merge/cleanup auto · multi-agent autonome · persistance multi-instance forte · production-ready / RUN READY · D2-D4 · modification doctrine · promotion méthode · choix définitifs modèle/SDK/RAG/stockage.
+
+---
+
+## 6. Acteurs fonctionnels
+
+| Acteur | Responsabilité | Autorité | Interdit |
+|---|---|---|---|
+| Morris / décideur | GO, mutations structurantes, arbitrages | L0 | déléguer L5 global |
+| Chef de projet | dialogue, confirmations selon rôle | selon membership | forger GO |
+| Contributeur | dialogue limité | read + propose | muter LPS |
+| Reviewer | analyse preuves | read | merge |
+| Admin Studio | config provider, plafonds (futur) | admin | exposer secrets client |
+| SFIA Studio | orchestration + policies | déterministe | faire confiance aveugle au modèle |
+| Assistant SFIA | comprendre, router, préparer | aucune décision | GO / mutation / Cursor launch |
+| OpenAI Provider | génération bornée | aucune | outils hors allowlist ; Git direct |
+| Doctrine Resolver | pin/digest/allowlist | system fail-closed | fallback v2.6 |
+| Knowledge Router | sources autorisées | system | hors allowlist |
+| Git Source Adapter | lecture Git RO | read | write |
+| Project State Store | LPS/Project | store | mutation sans HumanDecision |
+| Decision Authority | verify/consume | authority | auto-approve |
+| Cursor Export Adapter | MD export | prepare | execute |
+| Evidence/Review Adapter | handoff/preuves | read/analyze | remplacer handoff |
+| Audit/Usage Service | journal + metering | append | suppress evidence |
+
+Confiance : Studio > preuves Git > décisions > LPS validé > doctrine pinée > CKC > docs non validés > conversation > recommandations > hypothèses. Audit : tous les acteurs structurants.
+
+---
+
+## 7. Carte des domaines fonctionnels
+
+Pour chaque domaine : finalité · responsabilités · objets · dépendances · autorité · invariants · maturité T-A* · décisions ouvertes.
+
+| # | Domaine | Finalité | Maturité existante | Décisions |
+|---|---|---|---|---|
+| 1 | Project Context | identité, membership, pin doctrine | T-A1 memory | 02 03 13 |
+| 2 | Conversation | messages, sessions | ABSENT produit | 03 08 16 |
+| 3 | Intent and Mode Routing | taxonomie intention/modes | partiel design D1 | 04 06 |
+| 4 | Doctrine Resolution | package resolve fail-closed | T-A0 fixture | 02 |
+| 5 | Cycle and CKC Qualification | cycle candidat + CKC | T-A2 memory | 02 04 |
+| 6 | Knowledge and Source Routing | allowlist, redaction | T-A0 + gaps | 07 |
+| 7 | Epistemic Analysis | types épistémiques + contradictions | T-A2 epistemic | — |
+| 8 | Living Project State | lecture + deltas | T-A1 memory | 03 05 |
+| 9 | Project Trajectory | lecture + deltas | T-A2 memory | — |
+| 10 | Recommendation and Decision | reco → HumanDecision | T-A3 memory | 11 |
+| 11 | Confirmation and Action Policy | N1–N3 | T-A3/T-A4 | 11 |
+| 12 | Execution Preparation | EC + export Cursor | T-A4 ; T-A5 hors | 12 |
+| 13 | Evidence and Review | handoff/claims | T-A6 memory | — |
+| 14 | AI Provider Coordination | OpenAI borné | spike historique ≠ produit | 09 10 15 |
+| 15 | Functional Guardrails | policies Studio | invariants OA + à composer | — |
+| 16 | Audit and Observability | events corrélés | journals memory | — |
+| 17 | Usage and FinOps | tokens/coût/plafonds | ABSENT | 14 |
+| 18 | Identity and Project Access | ACL Project | partiel D1 | 13 |
+
+Invariants transverses : no v2.6 runtime doctrine · no implicit LPS mutation · no direct Git for OpenAI · no Cursor launch FPI.
+
+---
+
+## 8. Responsabilités des composants fonctionnels
+
+Responsabilités (pas classes/microservices) :
+
+| Composant | Domaine | Rôle |
+|---|---|---|
+| Project Session Manager | 1 18 | Project actif, accès |
+| Conversation Manager | 2 | cycle de vie conversation/message |
+| Intent Resolver | 3 | taxonomie intention |
+| Conversation Mode Router | 3 | modes ; anti-cycle forcé |
+| DoctrinePackage Resolver | 4 | pin/digest/fail-closed |
+| Cycle Qualifier | 5 | type/profil/blocs candidats |
+| CKC Resolver | 5 | detailed/synthetic/absent |
+| Authorized Source Router | 6 | allowlist + provenance |
+| Tool Invocation Coordinator | 6 15 | outils RO bornés |
+| OpenAI Conversation Coordinator | 14 | appel provider |
+| Structured Response Validator | 14 15 | schéma fonctionnel + policies |
+| Epistemic Classifier | 7 | labels |
+| Contradiction Resolver | 7 | signalement ; Morris si besoin |
+| LPS Query / Delta Proposal | 8 | read + propose |
+| Trajectory Query / Proposal | 9 | read + propose |
+| Recommendation Service | 10 | options/reco |
+| Human Decision Service | 10 | préparation/consommation |
+| Confirmation Service | 11 | N1–N3 |
+| ExecutionContract Builder | 12 | EC candidat |
+| Cursor Export Adapter | 12 | MD adaptateur |
+| Review Handoff Reader | 13 | lecture handoff |
+| Evidence Review Service | 13 | analyse preuves |
+| Policy Enforcement Service | 15 | fail-closed |
+| Provider Availability Service | 14 | santé provider |
+| Audit Journal | 16 | append-only |
+| Usage Metering Service | 17 | tokens/coût |
+
+---
+
+## 9. Frontières fonctionnelles
+
+| Frontière | Règle |
+|---|---|
+| UI ↔ logique | UI n’applique pas policies doctrinales |
+| Studio ↔ OpenAI | Studio assemble contexte ; OpenAI ne choisit pas sources |
+| OpenAI ↔ outils | outils exposés explicitement ; résultats filtrés avant retour modèle si besoin |
+| Outils ↔ Git | adapter RO seulement |
+| Project ↔ Conversation | conversation scoped Project ; hors-sujet isolé |
+| Conversation ↔ LPS | conversation propose ; LPS mute après HumanDecision |
+| Reco ↔ décision | labels distincts |
+| Décision ↔ mutation | mutation seulement post-décision+confirm |
+| EC ↔ exécution | EC ≠ lancement |
+| Rapport ↔ handoff | validation exige handoff |
+| Preuve ↔ claim | claim sans preuve → anti-claim |
+| Baseline ↔ candidate | candidate jamais présentée baseline |
+| Mémoire conv ↔ SoT | mémoire ≠ vérité |
+
+---
+
+## 10. Chaîne conversationnelle nominale
+
+| # | Étape | Responsable | Échec | Mode |
+|---|---|---|---|---|
+| 1 | Project actif résolu | Session Manager | no access | fail-closed |
+| 2 | Message reçu | Conversation Manager | invalid | fail |
+| 3 | Contrôle d’accès | Access | denied | fail-closed |
+| 4–5 | Classification / hors-sujet | Intent/Mode | ambiguous | clarify |
+| 6 | DoctrinePackage si structurant | Doctrine Resolver | stale/absent | fail-closed |
+| 7 | Contexte minimal | Source Router | — | degrade light |
+| 8–9 | Intention + mode | Intent/Mode | — | — |
+| 10–11 | Cycle + CKC si besoin | Qualifier/CKC | absent detailed | synthetic intra-v3 |
+| 12–14 | Sources + outils RO | Router/Tools | forbidden | refuse tool |
+| 15–16 | Assemblage + appel OpenAI | Provider Coord | timeout/down | WA-11 |
+| 17–18 | Validation + garde-fous | Validator/Policy | invalid | fail-closed structurant |
+| 19 | Contradictions | Contradiction | high conflict | Morris |
+| 20 | Réponse visible | Conversation | — | — |
+| 21–22 | Deltas + gate/confirm | LPS/Decision | — | N1–N3 |
+| 23 | Audit + usage | Audit/Usage | — | best-effort journal |
+
+Preuve : AuditEvent + ToolInvocation + ProviderInvocation + éventuel EvidenceLink.
+
+---
+
+## 11. Flux conversation libre
+
+- Pas de cycle si intention libre/explication/brainstorm sans gate.
+- Sources : aucune, ou LPS light, ou doc allowlist minimale.
+- Digression mineure : réponse sans pollution Project.
+- Hors Project : pas de sources Project ; pas LPS/trajectoire ; pas cycle ; rappel sobre.
+
+Routeur **interdit** de créer un cycle artificiellement (V3-F05 + doc90 §8).
+
+---
+
+## 12. Flux cycle formel
+
+Intention cycle → CycleQualification (type, profil, lenses/blocs) → CkcResolution → sources requises → questions adaptatives minimales → maturité attendue → décisions attendues → gate Morris → préparation contrat de cycle (pas template v2.6 comme moteur produit).
+
+Objets Studio v3 uniquement.
+
+---
+
+## 13. Flux demande de prompt Cursor
+
+Reconnaissance → vérif Project/cycle/doctrine/CKC/décisions → verifyCursorTemplate / build EC → fichiers autorisés/interdits → stop conditions → preuves → ExecutionContractCandidate → CursorExport MD → confirmation N2/N3 candidate → **interdiction lancement Cursor FPI**.
+
+---
+
+## 14. Flux rapport Cursor / validation
+
+Reconnaissance rapport → readHandoff → complétude → confrontation Git/preuves → findings/réserves/anti-claims → verdict candidat → décision Morris. **Handoff absent/incomplet → blocage** (V3-F14).
+
+---
+
+## 15. Flux décision Morris
+
+Recommendation → décision candidate → objet → N1/N2/N3 → authority verify → formulation explicite → validation applicative → consume → audit → mutation éventuelle.
+
+Différences :
+
+| Terme | Signification |
+|---|---|
+| Accord conversationnel | non exécutoire |
+| Confirmation | N1–N3 scoped |
+| Décision | HumanDecision enregistrée |
+| GO | décision explicite consommable |
+| Autorisation d’exécution | post-EC confirm ; hors lancement FPI |
+
+Faux GO → non consommé.
+
+---
+
+## 16. Flux DoctrinePackage et sources
+
+Project pin → version/digest → allowlist → fraîcheur → provenance → source demandée → autorité → filtre → redaction → contradictions. Stale/absent → fail-closed. Changement package → Morris. **Aucun fallback v2.6.**
+
+---
+
+## 17. Flux CKC
+
+Post-qualification → detailed/synthetic/absent → dimensions / questions / risques / maturité / preuves → UI silencieuse ou discrète → audit. Pas d’autorité. Pas d’invention detailed. Fallback synthétique **intra-v3** seulement.
+
+---
+
+## 18. Flux OpenAI
+
+Studio prépare : consignes doctrinales, outils, données autorisées → appel (stream optionnel) → sortie visible + structurée → validation → erreurs/timeout/cancel/retry borné → coût/audit.
+
+OpenAI **ne doit pas** : choisir sources ; accéder FS/Git ; décider GO ; muter LPS ; lancer Cursor ; modifier code ; valider architecture ; contourner policy.
+
+Capacités actuelles OpenAI : **OPENAI CURRENT CAPABILITY NOT VERIFIED** (cadrage) — exigences fonctionnelles, pas engagement tech.
+
+---
+
+## 19. Objets métier fonctionnels
+
+Définition concise (pas de schéma technique) :
+
+| Objet | Autorité | Mutabilité |
+|---|---|---|
+| Project | Studio/store | contrôlée |
+| ProjectMembership | Access | admin |
+| Conversation / ConversationMessage | Conversation | append |
+| IntentResolution / ConversationMode | Intent/Mode | derived |
+| DoctrinePackageRef / DoctrineResolution | Doctrine | pin change = décision |
+| SourceReference / SourceResolution | Knowledge | derived |
+| ToolInvocation | Tools | audit |
+| CycleCandidate / CycleQualification / CkcResolution | Cycle/CKC | candidate jusqu’à validation |
+| EpistemicItem / Observation / Hypothesis / Option / Recommendation / Contradiction | Epistemic | labels stricts |
+| LivingProjectState / LpsDeltaCandidate | LPS | delta→decision→apply |
+| ProjectTrajectory / TrajectoryDeltaCandidate | Trajectory | idem |
+| HumanDecision / Gate / ConfirmationRequest | Decision | lifecycle |
+| ExecutionContractCandidate / CursorExport | Execution prep | candidate |
+| EvidenceLink / ReviewBundleReference / ReviewAnalysis | Evidence | analyze |
+| ProviderInvocation | Provider | audit |
+| FunctionalError / AuditEvent / UsageRecord | Ops | append |
+| Reserve / DebtItem / MaturityAssessment | Evidence/Debt | historique |
+
+Cycle de vie candidat→validé pour deltas, décisions, EC. Relations : voir §20.
+
+---
+
+## 20. Relations conceptuelles
+
+```
+Project --possède--> Conversations
+Project --référence--> DoctrinePackageRef
+Project --possède--> LivingProjectState
+Project --possède--> ProjectTrajectory
+Conversation --contient--> Messages
+Message --produit--> IntentResolution
+IntentResolution --peut--> CycleQualification
+CycleQualification --produit--> CkcResolution
+SourceResolution --alimente--> ProviderInvocation
+ProviderInvocation --produit--> réponse visible + sortie structurée
+sortie structurée --peut--> LpsDeltaCandidate + TrajectoryDeltaCandidate
+Recommendation --peut--> HumanDecision request
+HumanDecision --peut--> mutation LPS/trajectoire ou EC
+ReviewAnalysis --s’appuie--> EvidenceLinks + ReviewBundleReference
+```
+
+---
+
+## 21. États fonctionnels (candidats)
+
+### Conversation
+`active` · `awaiting_clarification` · `awaiting_source` · `awaiting_provider` · `awaiting_human` · `completed` · `failed` · `cancelled`
+
+### Message
+`received` · `classified` · `sourcing` · `reasoning` · `validating` · `responded` · `blocked` · `failed` · `cancelled`
+
+### Provider invocation
+`pending` · `streaming` · `completed` · `failed` · `timed_out` · `cancelled`
+
+### Decision
+`candidate` · `awaiting_confirmation` · `confirmed` · `rejected` · `superseded` · `expired`
+
+### LPS delta
+`proposed` · `awaiting_decision` · `accepted` · `rejected` · `applied` · `failed`
+
+Ces états sont **candidats fonctionnels**, non schémas techniques validés.
+
+---
+
+## 22. Contrats fonctionnels
+
+Pour chaque contrat : acteur · préconditions · entrées/sorties · erreurs · autorité · effets / absence d’effet · audit · idempotence · décision éventuelle.
+
+| Contrat | Effet | Absence d’effet clé |
+|---|---|---|
+| StartProjectConversation | Conversation active | pas de mutation LPS |
+| SubmitConversationMessage | message reçu | — |
+| ResolveConversationIntent | IntentResolution | pas de cycle auto |
+| ResolveProjectDoctrine | DoctrineResolution | fail-closed si invalid |
+| QualifyProjectCycle | CycleQualification | pas d’ouverture Cycle runtime |
+| ResolveCycleKnowledge | CkcResolution | pas d’invention detailed |
+| SearchAuthorizedSources | hits filtrés | hors allowlist refus |
+| InvokeReadOnlyTool | ToolInvocation result | jamais write |
+| RequestOpenAIResponse | ProviderInvocation | pas d’accès Git direct |
+| ValidateAssistantResponse | ok/invalid | block si structurant invalid |
+| ProposeLpsDelta / ProposeTrajectoryDelta | candidates | pas d’apply |
+| PrepareHumanDecision | décision candidate | pas de consume |
+| ConfirmHumanDecision | confirmation | faux GO refusé |
+| BuildExecutionContractCandidate | EC draft | pas d’execute |
+| ExportCursorPrompt | CursorExport | pas de launch |
+| AnalyzeCursorReport / AnalyzeReviewHandoff | ReviewAnalysis | block si handoff missing |
+| RecordAuditEvent / RecordUsage | append | — |
+
+---
+
+## 23. Catalogue des outils read-only
+
+Reprise approfondie doc90 §22 :
+
+| Outil | Domaine | Conséquence interdite |
+|---|---|---|
+| readProject / readLPS / readTrajectory | 1 8 9 | mutate |
+| resolveDoctrinePackage / resolveCKC | 4 5 | v2.6 fallback ; invent detailed |
+| searchAuthorizedSource | 6 | hors allowlist |
+| readGitFile / readGitState | 6 | write ; send secrets |
+| readMorrisDecisions / readReserves | 10 | forge GO ; lift reserve |
+| readHandoff / inspectPR / inspectCI | 13 | replace handoff ; merge ; rerun |
+| readConversationHistory | 2 | promote hors-sujet as fact |
+| verifyCursorTemplate | 12 | — |
+| buildExecutionContractCandidate | 12 | execute |
+
+Tous : scope Project · allowlist · redaction · timeout · audit · autorité read/prepare.
+
+---
+
+## 24. Policy et garde-fous fonctionnels
+
+| Règle | Propriétaire | Modèle | Studio | Blocage |
+|---|---|---|---|---|
+| DoctrinePackage invalide | Doctrine | — | enforce | structurant |
+| Source hors allowlist | Knowledge | — | enforce | refus |
+| CKC absent detailed | CKC | ne pas inventer | enforce | synthetic only |
+| Prompt injection | Policy | ignore instr. doc | enforce | refuse actions |
+| Secret | Policy | — | redact/refus | send block |
+| Faux GO | Decision | — | non consommé | — |
+| Mutation sans décision | LPS | — | enforce | block |
+| Git write | Tools | — | enforce | interdit FPI |
+| Rapport sans handoff | Evidence | — | enforce | block validation |
+| Claim sans preuve | Evidence | — | anti-claim | — |
+| Mémoire ≠ Git | Provenance | — | Git prime | — |
+| Candidate as baseline | Provenance | — | contradiction | — |
+| Provider down | Provider | — | WA-11 | structurant closed |
+| Budget dépassé | FinOps | — | soft/hard variant | D-ASST-14 |
+| Accès refusé | Access | — | enforce | — |
+| Sortie structurée invalide | Validator | — | enforce | structurant |
+| Hors-sujet | Mode | — | no persist Project | — |
+| Timeout / cancel | Provider/Conv | — | no side effect | — |
+
+---
+
+## 25. Mémoire fonctionnelle
+
+| Type | SoT ? | Mutation | Exclusion |
+|---|---|---|---|
+| Contexte immédiat | non | éphémère | — |
+| Historique conversation | non | append | hors-sujet isolé |
+| Résumé Project | non | proposé | ≠ LPS |
+| LPS | oui (validé) | HumanDecision | — |
+| Trajectoire | reco jusqu’à validation | HumanDecision | — |
+| Décisions | oui | authority | — |
+| Préférences user | non | user | pas doctrine |
+| Sources consultées | audit | append | — |
+| Audit / usage | oui append | append | pas d’effacement silencieux |
+| Hors-sujet | non Project | session only | pas LPS |
+
+Technologie de stockage : **non décidée** (D-ASST-FPI-03/08).
+
+---
+
+## 26. Accès et isolation Project
+
+Utilisateur · rôle · membership · Project actif · switch Project · accès sources/décisions/conversations · séparation données · admin · reviewer · non-décideur · refus · audit. Aucune fuite inter-Project dans le contexte OpenAI.
+
+---
+
+## 27. Sécurité et RGPD fonctionnels
+
+| Catégorie | → OpenAI | Conditions | UI | Notes |
+|---|---|---|---|---|
+| Métadonnées Git | variant | WA-07 | oui | D-ASST-07 |
+| Snippets Git | variant | allowlist+redact | oui | D-ASST-07 |
+| Fichiers complets | déconseillé FPI | — | rare | option |
+| Secrets | non | redact | masqué | — |
+| Données personnelles | minimiser | base légale ouverte | limité | D-ASST-08 |
+| Confidentiel projet | policy | — | ACL | — |
+| Conversation | oui borné | TTL ouvert | oui | D-ASST-08 |
+| Décisions | métadonnées | — | oui | — |
+| Audit | non provider | interne | admin | — |
+| Usage metrics | non contenu | agrégats | oui | — |
+
+**Ne valide pas** D-ASST-FPI-07/08 — variantes exposées.
+
+---
+
+## 28. FinOps fonctionnel
+
+Usage par message / Conversation / Project / cycle · tokens · estimation coût · plafond souple/dur · alerte · erreur · override admin · affichage · audit.
+
+**Pas de tarifs inventés. D-ASST-FPI-14 NOT DECIDED.**
+
+---
+
+## 29. Observabilité fonctionnelle
+
+Événements : Project opened · Conversation started · Message received · Intent/Mode resolved · Doctrine/CKC resolved · Source requested/returned/refused · Tool started/completed · Provider started/streaming/completed/failed · Output validation failed · Contradiction detected · Recommendation prepared · Decision requested/consumed · LPS delta proposed/applied · EC prepared · Review analyzed · Usage recorded · Conversation cancelled.
+
+Données minimales : ids corrélation, projectId, outcomes, durées. Interdit : secrets, payloads complets non nécessaires.
+
+---
+
+## 30. Performance fonctionnelle
+
+Attentes qualitatives : premier retour rapide · streaming possible · sources limitées · outils bornés · annulation · timeout · gros docs → résumé/snippet · conversations longues → compaction candidate · reprise · coût · mode dégradé.
+
+Seuils chiffrés : **OPTION — MORRIS DECISION REQUIRED**.
+
+---
+
+## 31. Accessibilité fonctionnelle
+
+Statut non couleur-seul · sources indiquées · décision≠reco · streaming annoncé · erreurs claires · clavier · panneau vivant accessible · confirmations claires · structure · progressive disclosure · lecteur d’écran. Pas de maquette.
+
+---
+
+## 32. Impacts UX/UI
+
+| Surface | Visibilité candidate (WA-05/06) |
+|---|---|
+| Conversation principale | toujours |
+| Project actif | toujours |
+| Panneau vivant LPS/trajectoire/réserves/preuves | toujours (résumé) |
+| Doctrine status | progressif / erreur |
+| Cycle détecté | discret |
+| Sources consultées | progressif |
+| Reco / décisions / confirmations | modal ou inline selon N |
+| Usage/coût / provider status | discret |
+| Erreurs / reprise | visible |
+| Vue expert routage | optionnelle |
+
+Entrée pour cycle UX/UI : contrat visuel sans figer layout.
+
+---
+
+## 33. Impacts Architecture technique
+
+Questions ouvertes (ne pas trancher) : frontière serveur/client · port OpenAI · tool calling · Structured Outputs · orchestration · stockage conversation/LPS · registry doctrine · Git adapters · IAM · audit · secrets · redaction · streaming · timeout · cancel · retries · usage · observabilité · tests · migrations · compat T-A0…T-A7.
+
+---
+
+## 34. Réutilisation T-A0…T-A7
+
+| Capacité | Domaine cible | Action | Réserve |
+|---|---|---|---|
+| T-A0 Doctrine | 4 6 15 | REUSE + ADAPT composition chat | fixture ≠ prod registry |
+| T-A1 Project/LPS | 1 8 | REUSE + ADAPT persist minimale | memory only |
+| T-A2 Cycle/CKC/Epistemic/Trajectory | 5 7 9 | REUSE + ADAPT bridging | memory ; pas UI path |
+| T-A3 Decision/Confirm | 10 11 | REUSE + ADAPT mapping chat | R-T-A3-* |
+| T-A4 ExecutionContract | 12 | REUSE préparation | pas execute |
+| T-A5 ExecutionAttempt | — | HORS SCOPE FPI (fake only) | no real agents |
+| T-A6 Evidence/Review/Maturity | 13 | REUSE analyse | memory/fake |
+| T-A7/D2-D execution-run | 13 15 | REUSE WITH PRECISION RO | CLOSED WITH RESERVES ; no Cursor live |
+
+**Anti-claim :** library implemented ≠ parcours produit intégré ≠ production-ready.
+
+---
+
+## 35. Parcours fonctionnels de référence
+
+Chaque parcours : acteur · préconditions · nominal · variantes · erreurs · objets · composants · outils · sources · décisions · audit · résultat · anti-claims.
+
+1. **Conversation libre Project** — Mode free ; readLPS optionnel ; pas cycle ; LPS inchangé.
+2. **Explication doctrinale** — resolveDoctrinePackage ; pédagogique ; pas GO.
+3. **État Project Git+LPS** — readLPS+readGitState ; Git prime.
+4. **Brainstorming** — options marquées ; pas décision.
+5. **Préparation cycle** — qualify+ckc ; N2 candidate ; pas exécution.
+6. **Prompt Cursor** — build EC + export ; pas launch.
+7. **Rapport + handoff** — analyze ; block si missing handoff.
+8. **PR readiness RO** — inspectPR/CI ; pas merge.
+9. **Demande décision Morris** — PrepareHumanDecision ; await.
+10. **Faux GO** — non consommé.
+11. **Hors Project** — no sources Project ; no persist.
+12. **DoctrinePackage stale** — fail-closed.
+13. **CKC synthetic** — intra-v3 ; pas v2.6.
+14. **Source hors allowlist** — refus.
+15. **Prompt injection** — ignore ; refuse actions.
+16. **Secret détecté** — redact/refus envoi.
+17. **OpenAI indisponible** — WA-11 ; no mutation.
+18. **Budget dépassé** — variante D-ASST-14 ; no mutation silencieuse.
+19. **Annulation utilisateur** — cancel provider/conv ; no side effect.
+20. **Sortie structurée invalide** — fail-closed structurant ; retry/clarify.
+
+---
+
+## 36. Matrice scénarios S01–S20 → architecture
+
+| Scénario | Domaines | Composants clés | Garde-fou |
+|---|---|---|---|
+| S01 libre | 2 3 8 | Mode Router, LPS Query | no forced cycle |
+| S02 explication | 4 7 | Doctrine, Epistemic | no GO |
+| S03 état | 6 8 16 | Git adapter, LPS | Git prime |
+| S04 réserve | 10 13 | readReserves | no lift |
+| S05 brainstorm | 3 7 | Epistemic | options≠décisions |
+| S06 hypothèse≠Git | 6 7 | Contradiction | no promote |
+| S07 reco+dette | 10 | Recommendation | dette visible |
+| S08 cycle | 5 | Qualifier/CKC | no exec |
+| S09 CKC detailed | 5 | CKC Resolver | no raw UI |
+| S10 CKC synthetic | 5 | CKC Resolver | no v2.6 |
+| S11 prompt Cursor | 12 | EC Builder/Export | no launch |
+| S12 rapport | 13 | Handoff Reader | block w/o handoff |
+| S13 PR | 13 6 | inspectPR/CI | no merge |
+| S14 faux GO | 10 11 | Decision/Confirm | non consommé |
+| S15 hors-sujet | 3 2 | Mode Router | no persist |
+| S16 OpenAI down | 14 15 | Provider/Policy | fail-closed struct |
+| S17 package stale | 4 15 | Doctrine/Policy | block |
+| S18 hors allowlist | 6 15 | Source Router | refus |
+| S19 injection | 15 | Policy | refuse |
+| S20 secret | 6 15 | Redaction | no send |
+
+Couverture : **complète** pour S01–S20. Aucun trou fonctionnel bloquant identifié.
+
+---
+
+## 37. Critères d’acceptation Architecture fonctionnelle
+
+- Chaîne v3 couverte fonctionnellement.
+- Aucun nouveau principe doctrinal.
+- Aucune responsabilité critique uniquement sur OpenAI.
+- Décisions humaines ; sources contrôlées Studio ; pas d’accès Git direct modèle.
+- LPS/trajectoire non mutés implicitement ; outils RO ; EC candidats ; handoffs obligatoires validation.
+- Erreurs structurantes fail-closed ; hors-sujet non polluant ; coûts observables ; secrets protégés.
+- T-A0…T-A7 mappés sans anti-claim ; variations visibles ; D-ASST restantes identifiées.
+
+---
+
+## 38. Decision Pack Architecture fonctionnelle (D-ASST-FPI-01…16)
+
+Toutes **NOT DECIDED**. Impacts synthétiques :
+
+| ID | Impact AF | Urgence |
+|---|---|---|
+| 01 Périmètre FPI | bornes domaines 12–14 | MUST BEFORE BACKLOG |
+| 02 Connexion T-A* | composition composants | MUST BEFORE TECH |
+| 03 Persist minimale | mémoire/store | MUST BEFORE TECH |
+| 04 Visibilité routage | UX surfaces | MUST BEFORE UX/UI |
+| 05 Contenu LPS visible | panneau vivant | MUST BEFORE UX/UI |
+| 06 Hors-sujet | Mode Router | MUST BEFORE UX/UI |
+| 07 Git→OpenAI | Source Router/RGPD | MUST BEFORE TECH |
+| 08 Conservation conv | mémoire | MUST BEFORE TECH |
+| 09 Modèle | Provider | MUST BEFORE TECH |
+| 10 OpenAI vs port | Provider boundary | MUST BEFORE TECH |
+| 11 N1–N3 mapping | Confirmation | MUST BEFORE UX/UI |
+| 12 Prep Cursor | domaine 12 | CAN DEFER DELIVERY (WA-10) |
+| 13 Pilote | Access | CAN DEFER PILOT |
+| 14 FinOps cap | domaine 17 | MUST BEFORE PILOT / soft BEFORE TECH |
+| 15 Fallback OpenAI | Provider/Policy | MUST BEFORE TECH |
+| 16 Priorité UX/backend | trajectoire dual-track | MUST BEFORE BACKLOG |
+
+Recommandations candidates du cadrage `90` restent **candidates**, non validées.
+
+---
+
+## 39. Arbitrages fonctionnels nouveaux
+
+| ID | Besoin | V3-F | Pourquoi nouveau | Options | Statut |
+|---|---|---|---|---|---|
+| D-ASST-AF-01 | Orchestrateur conversationnel comme domaine explicite vs éclaté | F05 | Cadrage listait gap implémentation ; AF doit nommer responsabilité | A monolithe fonctionnel B bus événements C pipeline étapes | NOT DECIDED — MUST BEFORE TECH |
+| D-ASST-AF-02 | Validation sortie structurée : schema fonctionnel minimal vs libre | F04 F14 | Nécessaire pour fail-closed | A champs obligatoires B progressive | NOT DECIDED — MUST BEFORE TECH |
+| D-ASST-AF-03 | Dual-track UX∥Tech après AF | — | Trajectoire | A séquentiel UX puis Tech B dual-track borné | NOT DECIDED — MUST BEFORE BACKLOG |
+
+Aucune modification doctrine 30–37.
+
+---
+
+## 40. Risques fonctionnels
+
+| Risque | Impact | Proba | Mitigation | Décision/Réserve |
+|---|---|---|---|---|
+| Orchestration trop centrale | complexité | M | domaines explicites D-ASST-AF-01 | AF-01 |
+| Surcouplage OpenAI | lock-in autorité | M | policies Studio | 10 15 |
+| Modèle comme autorité | faux GO | M | Decision Service | — |
+| Double état Conv/LPS | divergence | M | LPS SoT | 03 |
+| Sur-consultation sources | coût/latence | M | limiter outils | 07 14 |
+| Fuite inter-Project | sécurité | F | isolation | — |
+| Faux GO | gouvernance | M | non consommé | — |
+| Incohérence LPS/traj | confiance | M | deltas + confirm | — |
+| Latence/coût | UX/FinOps | M | streaming + caps | 14 15 |
+| Sortie invalide | blocage | M | validator | AF-02 |
+| Mauvais cycle/CKC | qualité | M | clarification | 04 |
+| Réuse memory excessive | dette | H | WA-02 + anti-claims | 02 03 |
+| Réimplémentation OA | gaspillage | M | matrice §34 | 02 |
+| UI trop technique | adoption | M | WA-05 | 04 16 |
+| Complexité FPI | délai | M | WA-01 option B | 01 |
+
+---
+
+## 41. Trajectoire après Architecture fonctionnelle
+
+1. Validation Morris de l’AF (+ arbitrage décisions bloquantes UX si besoin).
+2. **GO UX/UI** recommandé (working assumptions suffisantes pour démarrer contrat visuel ; 04/05/06/11 à arbitrer tôt).
+3. Architecture technique OpenAI / knowledge routing.
+4. Backlog → Delivery → QA → pilote.
+
+**Dual-track UX∥Tech** : option D-ASST-AF-03 — NOT DECIDED ; possible après arbitrage 04/05/06.
+
+### Prochaine gate candidate recommandée (unique)
+
+`GO UX/UI SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — FIRST PRODUCT INCREMENT — FUNCTIONAL ARCHITECTURE INPUT`
+
+Statut : **candidate uniquement — non consommée**.
+
+Justification : AF complète avec open decisions portées comme points de variation ; impacts UX suffisamment spécifiés ; décisions 04/05/06/11 peuvent être arbitrées en amont ou en parallèle court du UX sans bloquer l’ouverture du cycle UX.
+
+---
+
+## 42. Placement
+
+**Créé :** `projects/sfia-studio/91-assistant-sfia-native-openai-first-product-increment-functional-architecture.md`
+
+`91` libre sur main et sur branches candidates inspectées (87–89 conversationnels ; 90 cadrage local). Document `90` **non modifié**.
+
+---
+
+## 43. Verdict documentaire
+
+**ASSISTANT SFIA NATIVE OPENAI FIRST PRODUCT INCREMENT FUNCTIONAL ARCHITECTURE COMPLETE WITH OPEN DECISIONS — EXISTING SFIA STUDIO V3 DOCTRINE MAPPED TO FUNCTIONAL DOMAINS, COMPONENTS, FLOWS, OBJECTS, CONTRACTS AND GUARDRAILS — OPENAI ROLE AND STUDIO AUTHORITY BOUNDARIES DEFINED — T-A0 TO T-A7 REUSE AND GAPS MAPPED — NO TECHNICAL ARCHITECTURE OR IMPLEMENTATION AUTHORIZED — READY FOR CHATGPT VALIDATION AND MORRIS FUNCTIONAL ARCHITECTURE ARBITRATION**

```

## 26–54. Synthèses (détail dans § contenu)

Vision, principes, acteurs, 18 domaines, composants, frontières, flux (nominal/libre/cycle/Cursor/rapport/décision/doctrine/CKC/OpenAI), objets, états, contrats, outils, policies, mémoire, accès, sécurité/RGPD, FinOps, observabilité, performance, accessibilité, impacts UX/tech, réutilisation T-A0…T-A7, 20 parcours, couverture S01–S20 complète, critères AF, Decision Pack D-ASST-FPI-01…16 + D-ASST-AF-01…03, risques, trajectoire → **GO UX/UI** candidat.

Working assumptions WA-01…11 marquées NOT DECIDED.

## 55. Validations

```
=== VALIDATIONS ===
2026-08-04 22:47:58 CEST +0200
doc90_sha=2d5a03f366e5291e54b6617ada972158763199bf918bea01f031d4212b1a78b2  projects/sfia-studio/90-assistant-sfia-native-openai-first-product-increment-framing.md
doc90_unchanged=YES
doc91_sha=0517aa6c3091f63f0b5c69d40d123fa715dbfb4429d02681ea0398a9588e83e1  projects/sfia-studio/91-assistant-sfia-native-openai-first-product-increment-functional-architecture.md
doc91_lines=     730
--- sections ---
24:## 1. Statut et autorité
58:## 2. Vision fonctionnelle
73:## 3. Principes fonctionnels
90:## 4. Périmètre fonctionnel (noyau commun)
105:## 5. Hors périmètre fonctionnel
111:## 6. Acteurs fonctionnels
136:## 7. Carte des domaines fonctionnels
165:## 8. Responsabilités des composants fonctionnels
200:## 9. Frontières fonctionnelles
220:## 10. Chaîne conversationnelle nominale
244:## 11. Flux conversation libre
255:## 12. Flux cycle formel
263:## 13. Flux demande de prompt Cursor
269:## 14. Flux rapport Cursor / validation
275:## 15. Flux décision Morris
293:## 16. Flux DoctrinePackage et sources
299:## 17. Flux CKC
305:## 18. Flux OpenAI
315:## 19. Objets métier fonctionnels
343:## 20. Relations conceptuelles
364:## 21. États fonctionnels (candidats)
385:## 22. Contrats fonctionnels
411:## 23. Catalogue des outils read-only
431:## 24. Policy et garde-fous fonctionnels
456:## 25. Mémoire fonctionnelle
475:## 26. Accès et isolation Project
481:## 27. Sécurité et RGPD fonctionnels
500:## 28. FinOps fonctionnel
508:## 29. Observabilité fonctionnelle
516:## 30. Performance fonctionnelle
524:## 31. Accessibilité fonctionnelle
530:## 32. Impacts UX/UI
549:## 33. Impacts Architecture technique
555:## 34. Réutilisation T-A0…T-A7
572:## 35. Parcours fonctionnels de référence
599:## 36. Matrice scénarios S01–S20 → architecture
628:## 37. Critères d’acceptation Architecture fonctionnelle
640:## 38. Decision Pack Architecture fonctionnelle (D-ASST-FPI-01…16)
667:## 39. Arbitrages fonctionnels nouveaux
679:## 40. Risques fonctionnels
701:## 41. Trajectoire après Architecture fonctionnelle
720:## 42. Placement
728:## 43. Verdict documentaire
--- TODO/FIXME/TBD ---
NONE
--- secrets ---
NONE
--- decided wrongly ---
NONE
--- doctrine files dirty? ---
--- app dirty? ---
?? projects/sfia-studio/app/.tmp-sfia-review/

```

PASS : Markdown · sections · pas TODO/FIXME/TBD · pas secret · pas choix tech validé · pas D-ASST décidée · doctrine intacte · `90` intact · pas code · pas fallback produit v2.6 · pas Git write FPI · couverture scénarios · OpenAI≠autorité · garde-fous · fichiers autorisés.

## 56. Fichiers modifiés / créés

Créé uniquement : `91-…functional-architecture.md`
Temporaires : `.tmp-sfia-review/**`

## 57–61. Absences

`90` non modifié · doctrine non modifiée · code non modifié · pas d’implémentation OpenAI · pas de commit/push projet.

## 62. Local Git Truth final réel

```
=== FINAL GIT TRUTH AFTER HANDOFF PUBLISH (captured) ===
2026-08-04 22:49:26 CEST +0200
2026-08-04 20:49:26 UTC
branch=architecture/sfia-studio-assistant-sfia-native-openai-fpi-functional
HEAD=8dc54db0069eed78a8d8930cc2b035450ab56ad1
origin_main=8dc54db0069eed78a8d8930cc2b035450ab56ad1
ahead=0 behind=0
handoff_final_tip=ab59dd2ab64b18b2a1fe3bfade2015bd572bb0e9
handoff_final_blob=1b3da12392068a57502f6483b870e5cb26ce6858
handoff_intermediate=b7adfe791f4dd5644b1739b05b6f4a913f89bb06
handoff_parent_of_final=b7adfe791f4dd5644b1739b05b6f4a913f89bb06
?? .tmp-sfia-review/
?? projects/sfia-studio/90-assistant-sfia-native-openai-first-product-increment-framing.md
?? projects/sfia-studio/91-assistant-sfia-native-openai-first-product-increment-functional-architecture.md
?? projects/sfia-studio/app/.tmp-sfia-review/
doc90_sha=2d5a03f366e5291e54b6617ada972158763199bf918bea01f031d4212b1a78b2  projects/sfia-studio/90-assistant-sfia-native-openai-first-product-increment-framing.md
doc91_sha=0517aa6c3091f63f0b5c69d40d123fa715dbfb4429d02681ea0398a9588e83e1  projects/sfia-studio/91-assistant-sfia-native-openai-first-product-increment-functional-architecture.md
DOC86_ABSENT
```


## 63. Review Handoff

Mode : publish-in-cycle
Publisher : scripts/sfia/publish-review-handoff.sh
Source : .tmp-sfia-review/chatgpt-review.md
Branche : sfia/review-handoff
Fichier : sfia-review-handoff/latest-chatgpt-review.md
Parent démarrage cycle : 5cfe22e5cea9d9d92ee419bd9139130466470464
Commit intermédiaire (1er publish) : b7adfe791f4dd5644b1739b05b6f4a913f89bb06
Blob intermédiaire : 4e1d29ef8a1ce76bdb840ddee786e536b82b3330
Commit précédent (2e publish) : ab59dd2ab64b18b2a1fe3bfade2015bd572bb0e9
Blob précédent : 1b3da12392068a57502f6483b870e5cb26ce6858
Commit parent du présent refresh : 3811a48c33402e55b29bcfefe4a0c68a7730d66a
Blob parent du présent refresh : 35143b1a05b44d8328453ea2de440310e30e2b4c
Commit final autoritatif : (égal au tip distant après publication de ce refresh — à vérifier par `git rev-parse origin/sfia/review-handoff`)
Blob final autoritatif : (égal au blob distant après publication)
Message : docs(review-handoff): publish Assistant SFIA OpenAI functional architecture status
Verdict publisher : HANDOFF UPDATED — REMOTE VERIFIED
Titre : # ChatGPT Review Pack — SFIA Studio Native Assistant OpenAI First Product Increment Functional Architecture
Verdict : ASSISTANT SFIA NATIVE OPENAI FIRST PRODUCT INCREMENT FUNCTIONAL ARCHITECTURE COMPLETE WITH OPEN DECISIONS — … — READY FOR CHATGPT VALIDATION AND MORRIS FUNCTIONAL ARCHITECTURE ARBITRATION
R-FRM-ASST-01 : Git Truth final capturé par commandes réelles (§62).
R-FRM-ASST-02 : tip/blob finaux = origin/sfia/review-handoff post-publish ; intermédiaire b7adfe7 et ab59dd2 ne sont pas le tip final si un refresh ultérieur existe.


## 64. Verdict

ASSISTANT SFIA NATIVE OPENAI FIRST PRODUCT INCREMENT FUNCTIONAL ARCHITECTURE COMPLETE WITH OPEN DECISIONS —
EXISTING SFIA STUDIO V3 DOCTRINE MAPPED TO FUNCTIONAL DOMAINS, COMPONENTS, FLOWS, OBJECTS, CONTRACTS AND GUARDRAILS —
OPENAI ROLE AND STUDIO AUTHORITY BOUNDARIES DEFINED —
T-A0 TO T-A7 REUSE AND GAPS MAPPED —
NO TECHNICAL ARCHITECTURE OR IMPLEMENTATION AUTHORIZED —
READY FOR CHATGPT VALIDATION AND MORRIS FUNCTIONAL ARCHITECTURE ARBITRATION

## 65. Prochaine gate candidate

GO UX/UI SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — FIRST PRODUCT INCREMENT — FUNCTIONAL ARCHITECTURE INPUT

Statut : candidate uniquement — non consommée
