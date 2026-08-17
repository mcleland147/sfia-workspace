# SFIA Review Pack — FULL — Cycle 13 PR readiness — Fake/Real Fidelity & Progressive Proof

## 1. Timestamp (Europe/Paris)

2026-08-17 14:07:07 CEST (+0200)

## 2. Cycle

**13 — PR readiness**

## 3. Profil

**Critical**

Justification : le diff porte sur Engineering Principles, Rules & Guardrails, Operating Model, template v2.6 et Build Doctrine Studio — règles qui gouverneront les futurs cycles.

## 4. Typologie

**CAPA** (v2.4)

Source de capitalisation : Cycle 15 — Fake/Real Fidelity & Progressive Proof.

## 5. GO Morris consommé

```text
GO MORRIS —
COMMIT + PUSH + PR
SFIA FAKE/REAL FIDELITY & PROGRESSIVE PROOF
```

Autorise : correction éditoriale mineure ; git add explicite des 5 fichiers ; commit ; push branche docs ; PR DRAFT vers main ; validations PR ; handoff L3.

N'autorise PAS : merge ; suppression de branche ; force push ; modification de main ; candidat Studio Pre-M6 ; runtime/code/tests/harness ; REAL Cursor ; OpenAI LIVE ; v2.7 ; runtime v3 ADOPTED ; reprise blocker Studio.

## 6. Git Truth initial

| Contrôle | Valeur |
|---|---|
| worktree | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/worktrees/sfia-fake-real-progressive-proof` |
| branche | `docs/sfia-fake-real-progressive-proof` |
| HEAD départ | `0d33478566627a9bf507d5a06323962d349308ee` |
| origin/main | `0d33478566627a9bf507d5a06323962d349308ee` |
| origin/sfia/review-handoff (entrée) | `6be8ba198f9825b8362ab528e9c87b8711258c4b` |
| origin/docs/sfia-fake-real-progressive-proof avant push | **ABSENT** |
| staged initial | vide |
| dirty initial | exactement 5 fichiers autorisés |

Git Truth Check : **PASS**.

## 7. Parent handoff

- Commit : `6be8ba198f9825b8362ab528e9c87b8711258c4b`
- Path : `sfia-review-handoff/latest-chatgpt-review.md`
- Titre : Cycle 15 Fake/Real fidelity & progressive proof capitalization
- Verdict ChatGPT : `PASS WITH MINOR EDITORIAL RESERVE — FAKE/REAL FIDELITY & PROGRESSIVE PROOF DOCTRINE CANDIDATE ACCEPTED`

## 8. Source Cycle 15

Candidat local = 5 fichiers du handoff `6be8ba198f9825b8362ab528e9c87b8711258c4b`. Liste et stat identiques (5 files, +329 / −11). Comparaison §15 : le pack Cycle 15 a `rstrip` les espaces de contexte git ; le working tree était le candidat accepté. Aucune divergence documentaire hors la réserve éditoriale absorbée ci-dessous.

## 9. Réserve éditoriale ChatGPT

Dans `prompts/templates/sfia-cycle-execution-template.md`, harmoniser le champ Fake / Real Qualification :

`applicable : oui / non` → `applicable : oui / non / N/A`

Aucune autre réserve.

## 10. Correction exacte effectuée

Quatre occurrences du champ Fake/Real `applicable` (squelette §3, prompt généré, §6.16, rapport §9.1 champ 20). Déjà conformes avant correction : mini-fiche §2.0.D et Git Review Index.

Occurrences finales du champ :

- L130: `- applicable : oui / non / N/A`
- L368: `applicable :                  [oui / non / N/A]`
- L519: `- applicable : oui / non / N/A`
- L1045: `- applicable : oui / non / N/A`
- L1245: `- Fake/Real applicable : oui / non / N/A`
- L1760: `- applicable : oui / non / N/A`

Non modifiés : « doctrine v3 applicable », « Typologie v2.4 si applicable », « Fake/Real Qualification si applicable », « bounded REAL proof … non applicable », « gate Morris REAL : [oui / non / N/A] ».

## 11. Fake/Real Qualification (ce cycle)

- applicable : **N/A**
- justification : cycle documentaire / Git / PR uniquement ; aucune frontière runtime
- niveau de preuve produit : N/A
- interdit : présenter ce cycle comme preuve REAL ou déterministe du runtime Studio

## 12. Liste des 5 fichiers

```text
M	docs/foundation/sfia-engineering-principles.md
M	method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
M	method/sfia-fast-track/core/sfia-rules-and-guardrails.md
M	projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
M	prompts/templates/sfia-cycle-execution-template.md
```

Aucun fichier créé/supprimé.

## 13. Diff final complet (`origin/main...HEAD`)

### 13.1 `docs/foundation/sfia-engineering-principles.md`

```diff
diff --git a/docs/foundation/sfia-engineering-principles.md b/docs/foundation/sfia-engineering-principles.md
index 097fcca..396ce12 100644
--- a/docs/foundation/sfia-engineering-principles.md
+++ b/docs/foundation/sfia-engineering-principles.md
@@ -315,6 +315,39 @@ Evidence can include:
 - REX;
 - documented reserve resolution.

+## 12. Fake/Real fidelity and progressive proof
+
+Fake, mock, fixture and test adapters remain **essential** SFIA tools. They are not a defect to eliminate.
+
+A fake must substitute the **external boundary**, not create a second product path. The intended architecture is:
+
+same product orchestration → same state machine → same persistence → same Evidence pipeline → adapter/boundary → fake **or** REAL.
+
+Avoid a fixture-specific product path that synthesizes success when the real boundary traverses significantly different states.
+
+When a fake represents a real boundary, preserve **semantic parity** for the product-relevant contract: inputs/outputs, statuses, transitions, errors, relevant temporality, async/pending/completion, persistence, idempotence, retry/recovery and Evidence semantics. Parity does not require reproducing real external costs or irreversible effects.
+
+Any known difference that can change observable behaviour is a **realism gap**. It must name the difference, the potential impact, the deterministic proof available, the REAL proof missing, and the closure condition. Green deterministic tests do not close a blocking realism gap.
+
+Proof levels are distinct and non-transitive:
+
+- **NOT PROVEN**
+- **DETERMINISTIC PROVEN** — logic proven with a controlled fake, mock, fixture or test adapter
+- **REAL BOUNDARY PROVEN** — the real external boundary was exercised in a bounded way and the relevant contractual behaviour was observed
+- **END-TO-END REAL PROVEN** — the user/capability path actually crossed the concerned boundaries to an observable persisted result
+
+A lower level never implies a higher one. **REAL-shaped deterministic remains DETERMINISTIC PROVEN**, never REAL BOUNDARY PROVEN.
+
+When a capability depends on a significant external boundary, proof should progress **proportionally** to risk:
+
+deterministic → bounded REAL boundary proof → deterministic hardening → further bounded REAL if needed → end-to-end REAL.
+
+This trajectory **never automatically authorizes REAL**. Morris remains the REAL gate. REAL proofs must be small, bounded, reversible as far as possible, and submitted to existing gates.
+
+If QA tooling cannot reproduce a significant REAL state needed on the critical path, the honest verdict is **INCOMPLETE / TOOLING GAP** — not a quieter claim.
+
+Operational constraints: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. Prompt enforcement: `prompts/templates/sfia-cycle-execution-template.md`.
+
 ## v1.1 Anti-patterns

 | Anti-pattern | Risk |
@@ -329,6 +362,9 @@ Evidence can include:
 | Raw Notion sync | Non-curated and misleading publication |
 | Automation before guardrails | Loss of control |
 | Decision without evidence | Weak governance |
+| Unqualified fake/REAL divergence | Deterministic green tests hide a missing REAL path |
+| Treating REAL-shaped data as REAL proof | False readiness / premature REAL |
+| Parallel fixture product path | Product behaves differently from the REAL orchestration |

 ## v1.1 Related Documents

```

### 13.2 `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`

```diff
diff --git a/method/sfia-fast-track/core/sfia-rules-and-guardrails.md b/method/sfia-fast-track/core/sfia-rules-and-guardrails.md
index 2e99a5d..675de2d 100644
--- a/method/sfia-fast-track/core/sfia-rules-and-guardrails.md
+++ b/method/sfia-fast-track/core/sfia-rules-and-guardrails.md
@@ -62,6 +62,7 @@ They must be interpreted as implementation constraints derived from the Engineer
 | Documentation routing before prompt | Le prompt doit identifier les sources à lire et les dossiers à alimenter |
 | Guardrails before automation | Les garde-fous précèdent l'automatisation |
 | Capitalization by default | Les apprentissages sont capitalisés |
+| Fidélité Fake/Real | Fake substitue la frontière externe ; la preuve déterministe n'est pas une preuve REAL |
 | No raw Notion sync | Notion n'est pas un miroir brut |
 | Traceability by default | Les décisions et changements sont traçables |
 | Platform over projects | Chaque projet doit renforcer SFIA |
@@ -216,6 +217,9 @@ SFIA utilise les décisions suivantes :
 | Rapport Cursor sans review pack light/full | Cycle incomplet — `PROMPT INCOMPLETE — MANDATORY REVIEW HANDOFF MISSING` |
 | Rapport Cursor avec handoff `not required` ou `none` | Ambiguïté interdite — publication handoff obligatoire |
 | Review pack light/full sans publish-in-cycle | Cycle incomplet — pas de publication remote |
+| Fake présenté comme preuve REAL | Fausse maturité ; GO REAL implicite |
+| Chemin produit parallèle fixture | Le déterministe ne traverse plus les mêmes états que le REAL |
+| Tests verts masquant un realism gap | Réserve bloquante adoucie |

 ## 13.1 Review Handoff Git — règle transverse (absorbée v2.6 — origine capitalisation v2.5)

@@ -233,6 +237,98 @@ SFIA utilise les décisions suivantes :
 | **Instruction ChatGPT** | Bloc §9.1 obligatoire dans rapport final Cursor pour tout rapport Cursor |
 | **Baseline** | Règle **absorbée dans SFIA v2.6 (baseline opérationnelle)** — origine capitalisation v2.5 ; v2.6 active sur `main` après merge PR #204 — alignement mandatory routing en attente de merge méthode |

+## 13.2 Fidélité Fake/Real et preuve progressive
+
+> **Référence principe :** Engineering Principles v1.1 §12. **Enforcement prompts :** template v2.6 — Fake/Real Qualification.
+> Fake / mock / fixture / simulateur restent des **outils essentiels**. Le problème traité est la **divergence non qualifiée** entre fake et REAL — pas l'usage du fake.
+
+### Trigger (proportionnalité)
+
+La qualification Fake/Real est **obligatoire** lorsqu'un cycle implique au moins une frontière simulée ou réelle parmi :
+
+API externe ; provider IA ; agent ; subprocess ; réseau ; stockage externe ; auth externe ; cloud/service managé ; connecteur ; hardware ; ou toute frontière fake/mock/fixture/simulator/test adapter.
+
+Si aucune frontière pertinente : **N/A**. Ne pas imposer un test REAL à chaque cycle.
+
+### Substitution de frontière
+
+Un fake/mock/fixture doit remplacer en priorité la **frontière externe**, pas créer un second comportement produit.
+
+Cible : même orchestration, même machine d'états, même persistence, même pipeline Evidence → adapter/boundary → fake **ou** REAL.
+
+Éviter : chemin fixture spécifique → succès synthétique, si le REAL traverse des états significativement différents.
+
+### Parité sémantique
+
+Quand un fake représente une frontière réelle, préserver autant que raisonnablement possible : contrats d'entrée/sortie ; statuts ; transitions ; erreurs ; temporalité pertinente ; async/pending/completion ; persistence ; idempotence ; retry/recovery ; sémantique Evidence.
+
+La parité **n'exige pas** de reproduire les coûts ou effets externes réels.
+
+### Realism gap
+
+Toute différence intentionnelle ou connue entre fake et REAL qui peut modifier le comportement observable doit être qualifiée **REALISM GAP**, avec :
+
+- différence ;
+- impact potentiel ;
+- preuve déterministe disponible ;
+- preuve REAL manquante ;
+- condition de fermeture.
+
+Un realism gap **bloquant** ne peut pas être masqué par des tests verts.
+
+Si le REAL introduit un état significatif (running, pending, timeout, partial completion, retry, rate limit, async callback, process death, network failure, eventual consistency, etc.) et que cet état appartient au comportement produit attendu, le déterministe doit pouvoir le représenter. Sinon : **REALISM GAP**.
+
+### Niveaux de preuve
+
+| Niveau | Signification |
+|--------|---------------|
+| **NOT PROVEN** | Non démontré |
+| **DETERMINISTIC PROVEN** | Logique prouvée avec fake/mock/fixture/test adapter contrôlé |
+| **REAL BOUNDARY PROVEN** | La vraie frontière externe a été exercée de manière **bornée** ; comportement contractuel pertinent observé |
+| **END-TO-END REAL PROVEN** | Le parcours utilisateur/capacité traverse réellement les frontières concernées jusqu'au résultat observable/persisté |
+
+Règles dures :
+
+- un niveau inférieur **ne vaut jamais** automatiquement le niveau supérieur ;
+- **REAL-shaped deterministic** reste **DETERMINISTIC PROVEN**, jamais REAL BOUNDARY PROVEN ;
+- une fixture, mock, fake provider ou simulateur **ne peut pas** être présenté comme preuve REAL ;
+- **DETERMINISTIC PROVEN ⇒ READY FOR REAL** est **interdit** sans gate Morris et niveau de preuve explicite.
+
+Labels de provenance (adapter si une terminologie projet plus simple existe, sans perdre la distinction) :
+
+UI-DRIVEN ; HARNESS-SEEDED ; COMPONENT-PROVEN ; DOMAIN-INTEGRATION-PROVEN ; REAL-BOUNDARY-PROVEN ; END-TO-END-REAL-PROVEN ; NOT PROVEN.
+
+### Preuve progressive
+
+Lorsqu'une capacité dépend d'une frontière externe significative, ne pas attendre la fin de nombreux cycles pour découvrir son comportement réel.
+
+Trajectoire recommandée selon risque :
+
+deterministic → bounded REAL boundary proof → deterministic hardening → nouvelle bounded REAL proof si nécessaire → end-to-end REAL proof.
+
+Les preuves REAL doivent être petites, bornées, réversibles autant que possible, proportionnées au risque, et soumises aux **gates existants**.
+
+Cette règle **n'autorise JAMAIS automatiquement** le REAL. Le GO REAL reste **humain / Morris**, distinct de tout GO déterministe.
+
+### Tooling gap
+
+Si le harness QA ne permet pas de reproduire un état REAL significatif nécessaire à la preuve du chemin critique :
+
+- ne pas contourner par un claim inférieur ;
+- verdict : **INCOMPLETE / TOOLING GAP** ;
+- puis requalification Delivery du tooling de preuve si ce tooling est nécessaire au chemin critique.
+
+### Anti-claims
+
+Interdit de déclarer, sur la seule base déterministe :
+
+- READY FOR REAL ;
+- FULL REAL PRODUCT LOOP PROVEN ;
+- fake = REAL ;
+- deterministic = REAL.
+
+Fake n'est **pas** interdit. Fixture n'est **pas** interdite. La preuve déterministe n'est **pas** inutile.
+
 ## 14. Documents associés

 - `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
```

### 13.3 `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`

```diff
diff --git a/method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md b/method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
index cce876d..673545f 100644
--- a/method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
+++ b/method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
@@ -80,6 +80,7 @@ Ils forment une boucle opératoire contrôlée par l'humain.
 | No raw Notion sync | Notion n'est jamais synchronisé brutalement |
 | Controlled automation | L'automatisation progresse par niveaux, sans supprimer la validation humaine |
 | Guardrails before execution | Les garde-fous sont posés avant exécution |
+| Fidélité Fake/Real | ChatGPT qualifie frontières et niveaux de preuve ; Cursor n'élargit pas vers REAL ; Morris garde le GO REAL |

 ## 3.1 Routage des cycles

@@ -106,6 +107,27 @@ Règle :

 Tout statut candidate doit rester **visible**. Réf. routing guide §4.4.5 ; template §2.0 / §2.1.

+## 3.2 Fidélité Fake/Real — qualification opératoire
+
+> **Référence :** Engineering Principles v1.1 §12 ; Rules & Guardrails §13.2 ; template v2.6 Fake/Real Qualification.
+> Ne modifie **pas** les niveaux d'automatisation (§2 / §15).
+
+Lorsque le cycle touche une frontière fake/mock/fixture/simulée ou une frontière externe réelle, la boucle ChatGPT ↔ Cursor **doit** qualifier explicitement Fake/Real **avant** exécution et **dans** le rapport.
+
+| Acteur | Comportement |
+|--------|----------------|
+| **ChatGPT** | Qualifie les frontières, le fake utilisé, la parité attendue, les realism gaps, le niveau de preuve d'entrée / attendu / hors scope, et si une bounded REAL proof est requise (ce cycle / cycle suivant / N/A). Recommande — **ne décide pas** le GO REAL. |
+| **Cursor** | Exécute le niveau de preuve **autorisé par le prompt**. N'élargit **pas** vers REAL. Ne présente **pas** un état REAL-shaped déterministe comme REAL BOUNDARY PROVEN. Sépare preuve déterministe et preuve REAL dans le rapport. |
+| **Morris** | Seule autorité du **GO REAL**. Distinct de tout GO déterministe, QA ou delivery. |
+
+Règles opératoires :
+
+- un niveau de preuve inférieur ne vaut jamais le niveau supérieur ;
+- REAL-shaped deterministic = DETERMINISTIC PROVEN ;
+- DETERMINISTIC PROVEN **n'implique pas** READY FOR REAL ;
+- la preuve progressive (déterministe → frontière REAL bornée → end-to-end REAL) est une **règle opératoire**, pas une autorisation automatique ;
+- si le tooling de preuve ne peut pas reproduire un état REAL significatif du chemin critique : INCOMPLETE / TOOLING GAP — pas un claim inférieur.
+
 ## 4. Rôles dans la boucle

 | Acteur | Rôle | Responsabilités |
@@ -125,6 +147,7 @@ L'humain reste le décideur final sur :
 - le GO / NO-GO avant commit, push, PR et merge ;
 - la revue visuelle (UI premium, Figma Design-first) ;
 - les arbitrages métier et architecture sensibles ;
+- **tout GO REAL** (frontière réelle, Cursor REAL, OpenAI LIVE, subprocess live) ;
 - toute publication ou synchronisation Notion ;
 - toute modification de zones interdites (code applicatif, CI, outillage transverse).

@@ -139,7 +162,8 @@ Il produit :
 - les prompts Cursor structurés ;
 - les recommandations de validation ;
 - les synthèses post-exécution ;
-- les documents de capitalisation et post-merge.
+- les documents de capitalisation et post-merge ;
+- la **qualification Fake/Real** (frontières, niveaux de preuve, realism gaps) lorsqu'applicable.

 ### 4.3. Cursor

@@ -155,6 +179,8 @@ Il :

 Cursor ne doit pas improviser hors du contrat d'exécution.

+Cursor n'élargit **pas** un cycle déterministe vers REAL. Le rapport sépare preuve déterministe et preuve REAL.
+
 ## 5. Boucle opératoire standard

 La boucle ChatGPT ↔ Cursor suit le flux suivant :
@@ -520,6 +546,7 @@ Ces documents ne doivent être créés qu'**après validation** du présent Oper
 | Dette documentaire | Livrables non capitalisés | Post-merge + capitalisation |
 | Suppression abusive | Perte historique | Archive ou `git mv` |
 | PR non maîtrisée | Livraison trop large ou non revue | PR humaine et traçable |
+| Fake/REAL non qualifié | Preuve déterministe prise pour preuve REAL | Qualification Fake/Real + niveaux de preuve + GO Morris distinct |

 ## 18. Critères de maturité

@@ -653,9 +680,9 @@ Cycle visant à transformer apprentissage, REX, pratique ou décision en actif m

 | Acteur | Responsabilités | Limites |
 |--------|-----------------|---------|
-| **ChatGPT** | Qualifie le profil ; distingue type cycle et profil ; cadre ; sélectionne références ; produit prompt contractuel ; identifie risques ; recommande décision ; limite sollicitations Morris aux gates listés | **Recommande — ne décide pas** ; pas push / PR / merge / actation version |
-| **Cursor** | Local Git Truth Check ; exécute périmètre ; contrôle fichiers touchés ; rapport structuré ; PR-ready si demandé ; signale écarts profil / type incohérents ; **review pack exploitable** — contenu complet créés, sections/diff modifiés (§7.2.1 template) | **Exécute — ne change pas le scope** ; pas d'arbitrage implicite ; **pas de synthèse-only** dans review pack si fichiers créés/modifiés |
-| **Morris** | Gates structurants ; doctrine, scope, version, PR, merge, pilote | Autorité L0 — arbitrage structurant jamais automatisé |
+| **ChatGPT** | Qualifie le profil ; distingue type cycle et profil ; cadre ; sélectionne références ; produit prompt contractuel ; identifie risques ; recommande décision ; limite sollicitations Morris aux gates listés ; **qualifie Fake/Real** lorsque trigger | **Recommande — ne décide pas** ; pas push / PR / merge / actation version ; **pas GO REAL** |
+| **Cursor** | Local Git Truth Check ; exécute périmètre ; contrôle fichiers touchés ; rapport structuré ; PR-ready si demandé ; signale écarts profil / type incohérents ; **review pack exploitable** — contenu complet créés, sections/diff modifiés (§7.2.1 template) ; **sépare preuve déterministe et REAL** | **Exécute — ne change pas le scope** ; pas d'arbitrage implicite ; **pas de synthèse-only** dans review pack si fichiers créés/modifiés ; **n'élargit pas vers REAL** |
+| **Morris** | Gates structurants ; doctrine, scope, version, PR, merge, pilote ; **GO REAL** | Autorité L0 — arbitrage structurant jamais automatisé |

 #### 18.2.5 Stop conditions (v2.5 candidate)

```

### 13.4 `prompts/templates/sfia-cycle-execution-template.md`

```diff
diff --git a/prompts/templates/sfia-cycle-execution-template.md b/prompts/templates/sfia-cycle-execution-template.md
index 85ca739..948156a 100644
--- a/prompts/templates/sfia-cycle-execution-template.md
+++ b/prompts/templates/sfia-cycle-execution-template.md
@@ -126,6 +126,25 @@ Repo-informed pre-check ChatGPT
 - limites / incertitudes :
 - verdict : PROMPT CURSOR READY / NEED MORRIS CLARIFICATION

+Fake / Real Qualification :
+- applicable : oui / non / N/A
+- trigger : fake/mock/fixture/simulator/test adapter/external boundary — oui / non
+- frontières externes concernées :
+- fake/mock/fixture utilisé :
+- frontière REAL correspondante :
+- parité attendue :
+- différences connues :
+- realism gaps :
+- états REAL significatifs :
+- niveau de preuve d'entrée : NOT PROVEN / DETERMINISTIC PROVEN / REAL BOUNDARY PROVEN / END-TO-END REAL PROVEN
+- niveau de preuve attendu ce cycle :
+- niveau de preuve explicitement hors scope :
+- bounded REAL proof requis : dans ce cycle / cycle suivant / non applicable
+- gate Morris REAL : oui / non / N/A
+- claims autorisés :
+- claims interdits :
+- règle dure : DETERMINISTIC PROVEN n'implique PAS READY FOR REAL
+
 SFIA Studio Convergence Pre-check :
 - triggered : oui / non
 - Build Doctrine :
@@ -230,7 +249,8 @@ Clarifications : Build Doctrine + Roadmap = gouvernance de **construction** ; do
 3. **Identifier le profil SFIA** — Light / Standard / Critical / Capitalization
 4. **Justifier le profil** — obligatoire si Critical ; recommandé sinon
 5. **Activer les blocs pertinents** — §6 selon type, risque, transverses
-6. **Identifier les gates Morris** — liste fermée ; pas de gate implicite
+5bis. **Qualifier Fake/Real** — §6.16 si fake/mock/fixture/simulator/test adapter/external boundary ; sinon N/A. Interdit : DETERMINISTIC PROVEN ⇒ READY FOR REAL
+6. **Identifier les gates Morris** — liste fermée ; pas de gate implicite ; GO REAL distinct si applicable
 7. **Définir le périmètre Git/documentaire** — fichiers autorisés, interdits, protégés
 8. **Décider review pack** — §7 : pour tout cycle Cursor **produisant un rapport** → **light** ou **full** obligatoire (jamais `none`) ; opération read-only sans rapport Cursor → hors contrat review pack
 9. **Décider Review Handoff Git** — §7.10–§7.11 : pour tout cycle Cursor **produisant un rapport** → **required** + Mode **`publish-in-cycle`** + `Push handoff autorisé = oui — L3 borné` **automatiques** ; `local-only` = exception technique documentée uniquement (§7.10.3) — jamais `not required` pour un rapport Cursor ; combinaison invalide (rapport + none / not required / local-only non conforme) → `PROMPT INCOMPLETE — MANDATORY REVIEW HANDOFF MISSING` ; mode contradictoire → `PROMPT INCOMPLETE — REVIEW HANDOFF MODE INCONSISTENT`
@@ -270,6 +290,9 @@ Clarifications : Build Doctrine + Roadmap = gouvernance de **construction** ; do
 - Inventer un CKC absent pour un cycle sans pilote
 - Bloquer un cycle uniquement parce qu'un CKC détaillé n'existe pas (fallback obligatoire)
 - Exposer la structure CKC brute comme questionnaire utilisateur / UI
+- Traiter DETERMINISTIC PROVEN comme READY FOR REAL
+- Présenter des données REAL-shaped déterministes comme REAL BOUNDARY PROVEN
+- Omettre Fake/Real Qualification alors qu'un fake/mock/fixture/frontière externe est utilisé

 ---

@@ -340,6 +363,24 @@ Règle centrale : RAPPORT CURSOR = REVIEW PACK OBLIGATOIRE = PUBLICATION HANDOFF
 Stop conditions spécifiques :
 Rapport Cursor attendu :        [Light / Standard / Critical / Capitalization — §9]
 Verdict attendu :               [ex. READY FOR PR READINESS / READY FOR COMMIT / STOP …]
+
+Fake / Real Qualification :
+  applicable :                  [oui / non / N/A]
+  frontières externes concernées :
+  fake/mock/fixture utilisé :
+  frontière REAL correspondante :
+  parité attendue :
+  différences connues :
+  realism gaps :
+  états REAL significatifs :
+  niveau de preuve d'entrée :
+  niveau de preuve attendu ce cycle :
+  niveau de preuve explicitement hors scope :
+  bounded REAL proof requis :   [dans ce cycle / cycle suivant / non applicable]
+  gate Morris REAL :            [oui / non / N/A]
+  claims autorisés :
+  claims interdits :
+  règle : DETERMINISTIC PROVEN n'implique PAS READY FOR REAL
 ```

 ---
@@ -464,6 +505,9 @@ Garde-fous :
 - Ne pas déclarer une candidate non mergée comme baseline officielle
 - Ne pas relancer SFIA 3.0
 - Git = source de vérité
+- Ne pas traiter DETERMINISTIC PROVEN comme READY FOR REAL
+- Ne pas présenter REAL-shaped deterministic comme REAL BOUNDARY PROVEN
+- Ne pas élargir vers REAL sans GO Morris distinct
 - [Garde-fous spécifiques au cycle]

 Stop conditions :
@@ -471,6 +515,26 @@ Stop conditions :

 ---

+Fake / Real Qualification (obligatoire si fake/mock/fixture/simulator/test adapter/external boundary ; sinon N/A) :
+- applicable : oui / non / N/A
+- frontières externes concernées :
+- fake/mock/fixture utilisé :
+- frontière REAL correspondante :
+- parité attendue :
+- différences connues :
+- realism gaps :
+- états REAL significatifs :
+- niveau de preuve d'entrée :
+- niveau de preuve attendu ce cycle :
+- niveau de preuve explicitement hors scope :
+- bounded REAL proof requis : dans ce cycle / cycle suivant / non applicable
+- gate Morris REAL :
+- claims autorisés :
+- claims interdits :
+Règle dure : DETERMINISTIC PROVEN n'implique PAS READY FOR REAL.
+
+---
+
 [BLOCS ACTIVABLES — injecter depuis §6]

 ---
@@ -946,6 +1010,68 @@ Lorsqu'un **post-merge check** est demandé par Morris après une PR mergée, le

 > **Capitalization ≠ poursuivre toutes les réserves.** Le profil Capitalization qualifie l'intention de capitaliser — pas l'obligation de clore chaque réserve ouverte.

+### 6.16 Fake / Real Qualification — fidélité et preuve progressive
+
+> **Référence :** Engineering Principles v1.1 §12 ; Rules & Guardrails §13.2 ; operating model §3.2.
+> Fake / mock / fixture restent des **outils essentiels**. Le problème traité est la **divergence non qualifiée** entre fake et REAL.
+
+| Élément | Contenu |
+|---------|---------|
+| **Activer si** | fake, mock, fixture, simulator, test adapter, ou frontière externe (API, provider IA, agent, subprocess, réseau, stockage externe, auth externe, cloud/service managé, connecteur, hardware) |
+| **Sinon** | N/A — ne pas imposer un test REAL |
+| **Cycles** | Tous types — surtout delivery, QA, architecture technique, DevOps, observabilité |
+| **Consignes** | Substitution de frontière (pas de chemin produit parallèle) ; parité sémantique ; realism gaps nommés ; niveaux de preuve non transitifs ; preuve progressive proportionnée ; GO REAL Morris distinct |
+| **Livrables** | Bloc Fake/Real Qualification rempli ; labels de provenance de preuve ; realism gaps avec condition de fermeture |
+| **Gates Morris** | GO REAL **distinct** si bounded REAL ou end-to-end REAL demandé |
+| **Stop** | DETERMINISTIC PROVEN présenté comme READY FOR REAL ; REAL-shaped deterministic présenté comme REAL BOUNDARY PROVEN ; realism gap bloquant masqué ; tooling gap contourné par un claim inférieur |
+
+**Niveaux de preuve (non transitifs) :**
+
+- NOT PROVEN
+- DETERMINISTIC PROVEN
+- REAL BOUNDARY PROVEN
+- END-TO-END REAL PROVEN
+
+**REAL-shaped deterministic** reste DETERMINISTIC PROVEN.
+
+**Preuve progressive (recommandée, jamais automatique) :**
+
+deterministic → bounded REAL boundary proof → deterministic hardening → nouvelle bounded REAL si nécessaire → end-to-end REAL.
+
+**Champs minimaux à injecter dans le prompt généré :**
+
+```text
+Fake / Real Qualification
+- applicable : oui / non / N/A
+- frontières externes concernées :
+- fake/mock/fixture utilisé :
+- frontière REAL correspondante :
+- parité attendue :
+- différences connues :
+- realism gaps :
+- états REAL significatifs :
+- niveau de preuve d'entrée :
+- niveau de preuve attendu ce cycle :
+- niveau de preuve explicitement hors scope :
+- bounded REAL proof requis : dans ce cycle / cycle suivant / non applicable
+- gate Morris REAL :
+- claims autorisés :
+- claims interdits :
+```
+
+**Règle dure :**
+
+```text
+DETERMINISTIC PROVEN n'implique PAS READY FOR REAL
+sans gate Morris REAL et niveau de preuve explicite.
+```
+
+Si le harness ne peut pas reproduire un état REAL significatif du chemin critique :
+
+```text
+INCOMPLETE / TOOLING GAP
+```
+
 ---

 ## 7. Review pack proportionné
@@ -1090,14 +1216,14 @@ Le review pack **ne peut pas** être considéré complet dans ce cas.
 | Champ | Contenu |
 |-------|---------|
 | **Usage** | Cycle standard borné ; Git accessible ; peu de fichiers ; diff suffisant |
-| **Contenu attendu** | Date/heure ; objectif ; Git Review Index (§7.4) ; fichiers consultés avec rôle et sections **sans copie intégrale** ; fichiers créés/modifiés avec contenu complet ou sections/diff utiles ; validations ; réserves ; décisions Morris ; verdict |
+| **Contenu attendu** | Date/heure ; objectif ; Git Review Index (§7.4) ; fichiers consultés avec rôle et sections **sans copie intégrale** ; fichiers créés/modifiés avec contenu complet ou sections/diff utiles ; Fake/Real Qualification si applicable (§6.16) ; validations ; réserves ; décisions Morris ; verdict |

 #### full

 | Champ | Contenu |
 |-------|---------|
 | **Usage** | Capitalisation ; modification méthode/template/règle ; décision structurante ; sources non accessibles Git ; auditabilité forte |
-| **Contenu attendu** | Date/heure ; objectif ; Local Git Truth Check ; Git Review Index (§7.4) ; sources consultées avec rôle, sections et extraits courts utiles ; contenu complet des fichiers créés ; sections complètes modifiées ou diff utile complet pour fichiers modifiés ; proposition d'instruction projet ChatGPT si concernée ; garde-fous ; réserves ; décisions Morris requises ; verdict |
+| **Contenu attendu** | Date/heure ; objectif ; Local Git Truth Check ; Git Review Index (§7.4) ; sources consultées avec rôle, sections et extraits courts utiles ; contenu complet des fichiers créés ; sections complètes modifiées ou diff utile complet pour fichiers modifiés ; Fake/Real Qualification si applicable (§6.16) ; proposition d'instruction projet ChatGPT si concernée ; garde-fous ; réserves ; décisions Morris requises ; verdict |

 ### 7.4 Git Review Index

@@ -1116,6 +1242,9 @@ Git Review Index
 - diff name-status :
 - décisions Morris requises :
 - review pack : light / full (obligatoire si rapport Cursor)
+- Fake/Real applicable : oui / non / N/A
+- niveau de preuve déclaré :
+- realism gaps :
 - réserves :
 ```

@@ -1572,8 +1701,14 @@ Cursor doit **stopper** et demander Morris si :
 40. **Review Handoff** : Cursor annonce publié mais remote ancien/absent/incomplet — `REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED`
 41. **Review Handoff** : force push requis ou divergence incompatible — `STOP — REVIEW HANDOFF REMOTE DIVERGENCE`
 42. **Review Handoff** : s'arrêter après review pack / handoff local alors que `publish-in-cycle` est requis — cycle incomplet
-39. **Review Handoff** : rapport final sans bloc **Instruction ChatGPT obligatoire** alors que handoff required
-40. **Review Handoff** : handoff distant **obsolète** (cycle / branche / HEAD incohérents avec rapport Cursor)
+43. **Review Handoff** : rapport final sans bloc **Instruction ChatGPT obligatoire** alors que handoff required
+44. **Review Handoff** : handoff distant **obsolète** (cycle / branche / HEAD incohérents avec rapport Cursor)
+45. **Fake/Real** : DETERMINISTIC PROVEN présenté comme READY FOR REAL
+46. **Fake/Real** : données REAL-shaped déterministes présentées comme REAL BOUNDARY PROVEN ou END-TO-END REAL PROVEN
+47. **Fake/Real** : Fake/Real Qualification omise alors que fake/mock/fixture/frontière externe est utilisé
+48. **Fake/Real** : élargissement vers REAL sans GO Morris distinct
+49. **Fake/Real** : realism gap bloquant masqué par tests verts
+50. **Fake/Real** : tooling gap contourné par un claim inférieur — verdict requis `INCOMPLETE / TOOLING GAP`

 ---

@@ -1621,6 +1756,16 @@ Chaque rapport final Cursor doit indiquer la **date et l'heure du rapport** (fus
     - contenu modifié couvert : yes / no / N/A
     - verdict handoff : (voir §7.11 — inclure REMOTE PUBLICATION NOT PERFORMED / REMOTE VERIFICATION MISSING / CANONICAL REMOTE NOT UPDATED si applicable)
 19. Verdict — **interdit** d'émettre un READY métier/documentaire si `publish-in-cycle` non achevé
+20. **Fake / Real Qualification** (si applicable — sinon N/A) :
+    - applicable : oui / non / N/A
+    - fake/mock/fixture utilisé
+    - frontière REAL correspondante
+    - realism gaps
+    - niveau de preuve d'entrée / attendu / hors scope
+    - bounded REAL proof requis : ce cycle / cycle suivant / N/A
+    - gate Morris REAL
+    - claims autorisés / interdits
+    - confirmation : DETERMINISTIC PROVEN n'a **pas** été présenté comme READY FOR REAL

 Si `synthesis only = yes` → verdict **ne peut pas** être READY.

@@ -1719,6 +1864,7 @@ Si Mode = **`local-only`** : indiquer clairement que la revue Git distante **n'e
 | `STOP — REVIEW HANDOFF SCOPE MISMATCH` | Périmètre handoff multi-fichier / mauvais chemin |
 | `STOP — REVIEW HANDOFF REMOTE DIVERGENCE` | Divergence incompatible ou force push requis |
 | `HANDOFF PUBLICATION BLOCKED — REGULARIZATION REQUIRED` | Exception technique local-only — régularisation requise |
+| `INCOMPLETE / TOOLING GAP` | Harness incapable de reproduire un état REAL significatif du chemin critique |

 ---

```

### 13.5 `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`

```diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md b/projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
index a0d95f4..eaee535 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
@@ -57,7 +57,7 @@ Morris

 Fondations doctrine produit associées : **V3-F01…V3-F15** (VALIDATED doctrine ; runtime coverage progressive via Roadmap).

-## A4. Règles fondatrices de construction (R1–R20)
+## A4. Règles fondatrices de construction (R1–R21)

 | ID | Règle |
 | --- | --- |
@@ -81,6 +81,7 @@ Fondations doctrine produit associées : **V3-F01…V3-F15** (VALIDATED doctrine
 | **R18** | Fermer dans un **même lot** les gaps cohérents servant une seule capacité utilisateur, sauf raison de scission. |
 | **R19** | Aucun claim de maturité / READY / ADOPTED sans **preuve**. |
 | **R20** | Toute brique **temporaire** doit rendre visible sa **sortie**. |
+| **R21** | **Fidélité Fake/Real.** Un fake/fixture substitue une **frontière externe**, pas un second chemin produit. Preuve déterministe ≠ preuve REAL. REAL-shaped deterministic reste DETERMINISTIC PROVEN. Les realism gaps restent visibles. Une frontière REAL significative se prouve **progressivement** (déterministe → REAL borné → end-to-end REAL). Aucun claim supérieur à la preuve. Aucun REAL automatique. |

 ## A5. Challenge obligatoire avant tout chantier Studio

@@ -96,6 +97,8 @@ Avant cadrage / prompt Cursor / delivery Studio, répondre :
 8. Quelle **dette** est créée ?
 9. Action **répétable/automatisable** ou **arbitrage humain** ?
 10. Un **gate Morris** est-il nécessaire ?
+11. Y a-t-il une **frontière fake/mock/fixture** ? Substitue-t-elle la frontière externe, ou crée-t-elle un **chemin produit parallèle** ?
+12. Quel **niveau de preuve** ce chantier peut-il honnêtement atteindre (DETERMINISTIC / REAL BOUNDARY / END-TO-END REAL) ? Quels **realism gaps** restent ouverts ?

 Si **1** ou **7** n’a pas de réponse exploitable :

@@ -112,6 +115,10 @@ STOP — TRAJECTORY LINK MISSING
 | Exception | Uniquement risque technique précis non résoluble autrement + exit explicite. |
 | Gate | Morris gate si l’exception ouvre une branche de trajectoire. |
 | Interdit | Traiter POC/fixture comme produit final ou comme preuve REAL silencieuse. |
+| Fake / fixture de frontière | **KEEP** comme substitution d’adapter. Même orchestration, mêmes états produit, même Evidence pipeline. |
+| Chemin produit parallèle fixture | **Interdit** si le REAL traverse des états significativement différents (ex. succeeded immédiat vs running asynchrone). Qualifier **REALISM GAP**. |
+| REAL-shaped deterministic | Reste **DETERMINISTIC PROVEN** — jamais REAL BOUNDARY PROVEN. |
+| Tooling QA | S’il ne peut pas reproduire un état REAL significatif du chemin critique : **INCOMPLETE / TOOLING GAP**, puis requalification Delivery — pas un claim inférieur. |

 ## A7. Politique d’intermédiaire

@@ -148,6 +155,9 @@ Elle se termine lorsqu’une **capacité utilisateur** ou une **précondition st

 `technical SUCCESS ≠ functional READY ≠ V3 RUNTIME ADOPTED`.

+`DETERMINISTIC PROVEN ≠ REAL BOUNDARY PROVEN ≠ END-TO-END REAL PROVEN`.
+`DETERMINISTIC PROVEN ≠ READY FOR REAL`.
+
 ## A11. Gouvernance des sources

 | Source | Rôle |
@@ -189,7 +199,10 @@ Repo-informed pre-check
 - roadmap par composants sans user outcome ;
 - décision candidate présentée comme acquise ;
 - mass rewrite historique ;
-- Build Doctrine transformée en doctrine runtime.
+- Build Doctrine transformée en doctrine runtime ;
+- fake/fixture présenté comme preuve REAL ;
+- chemin produit parallèle fixture non qualifié ;
+- DETERMINISTIC PROVEN promu READY FOR REAL.

 ## A14. Stop markers

```

## 14. Validations pre-commit

- `git diff --check` : OK
- scope : exactement 5 fichiers ; 0 framing ; 0 Roadmap ; 0 runtime
- markdownlint : **N/A** (absent du repo)
- `READY FOR REAL` uniquement comme anti-claim
- pas de v2.7 / baseline / runtime v3 ADOPTED
- Fake/Real `applicable` harmonisé oui / non / N/A

## 15. Staged scope

`git add` explicite des 5 chemins. `git add -A` / `.` / `commit -a` non utilisés.
`git diff --cached --name-status` = 5 fichiers avant commit.

## 16. Commit SHA

`085828e14c66b6d4f2355559d6f2716f1c0eca53`

Parent : `0d33478566627a9bf507d5a06323962d349308ee` (descendant direct de origin/main). Un seul commit ahead.

## 17. Commit diff/stat

```text
commit 085828e14c66b6d4f2355559d6f2716f1c0eca53
Author:     Morris Cleland <morris@macbook-air1.home>
AuthorDate: Mon Aug 17 14:03:44 2026 +0200
Commit:     Morris Cleland <morris@macbook-air1.home>
CommitDate: Mon Aug 17 14:03:44 2026 +0200

    docs(sfia): add fake-real fidelity and progressive proof

 docs/foundation/sfia-engineering-principles.md     |  36 +++++
 .../core/sfia-chatgpt-cursor-operating-model.md    |  35 ++++-
 .../core/sfia-rules-and-guardrails.md              |  96 +++++++++++++
 .../sfia-studio-convergence-build-doctrine.md      |  17 ++-
 prompts/templates/sfia-cycle-execution-template.md | 156 ++++++++++++++++++++-
 5 files changed, 329 insertions(+), 11 deletions(-)
```

```text
 docs/foundation/sfia-engineering-principles.md     |  36 +++++
 .../core/sfia-chatgpt-cursor-operating-model.md    |  35 ++++-
 .../core/sfia-rules-and-guardrails.md              |  96 +++++++++++++
 .../sfia-studio-convergence-build-doctrine.md      |  17 ++-
 prompts/templates/sfia-cycle-execution-template.md | 156 ++++++++++++++++++++-
 5 files changed, 329 insertions(+), 11 deletions(-)
```

## 18. Push remote branch SHA

- branche : `docs/sfia-fake-real-progressive-proof`
- `HEAD` = `origin/docs/sfia-fake-real-progressive-proof` = `085828e14c66b6d4f2355559d6f2716f1c0eca53`
- force push : non

## 19. PR number

**#360**

## 20. PR URL

https://github.com/mcleland147/sfia-workspace/pull/360

## 21. Base / head

- base : `main`
- head : `docs/sfia-fake-real-progressive-proof`
- head SHA : `085828e14c66b6d4f2355559d6f2716f1c0eca53`
- title : `docs(sfia): add fake-real fidelity and progressive proof`

## 22. Draft

`isDraft` = **true** · `state` = OPEN

## 23. Remote diff

`gh pr diff --name-only` = exactement les 5 fichiers du §12.

## 24. Checks / CI

Workflow `SFIA Studio CI` run `32027977111` :

| Check | Conclusion | Durée |
|---|---|---|
| Detect SFIA Studio changes | SUCCESS | 8s |
| Build and validate SFIA Studio | SUCCESS | 2m19s |
| SFIA Studio Required Gate | SUCCESS | 4s |

CI **PASS**. Absence de check ≠ preuve de contenu — ici les checks existent et sont verts.

## 25. Mutation Studio

- runtime change = 0
- worktree Studio reste `delivery/sfia-studio-pre-m6-ui-option-a` @ `0d33478566627a9bf507d5a06323962d349308ee`
- les 5 fichiers méthode **absents** du diff Studio
- aucun `reset --hard` / `clean` / stash Studio

## 26. REAL

**0** — aucun Cursor REAL, aucun OpenAI LIVE.

## 27. Promotion baseline

**aucune** — v2.6 inchangé ; Principles v1.1 inchangé ; pas de v2.7.

## 28. Merge

**NON AUTORISÉ** dans ce cycle. PR reste DRAFT. Décision Morris distincte.

## 29. Réserves

1. Doctrine **candidate** jusqu'au merge Morris.
2. Routing guide §5.9 dit qu'un cycle PR readiness seul ne crée pas de PR ; ce cycle a consommé un GO Morris **explicite** commit+push+PR DRAFT — le GO prime.
3. Pre-M6 Studio **NON COMPLETE** ; blocker tooling browser **non repris**.

## 30. Verdict

```text
PASS —
SFIA FAKE/REAL FIDELITY & PROGRESSIVE PROOF PR CREATED
MINOR EDITORIAL RESERVE CLOSED
EXACT 5-FILE DOCUMENTARY SCOPE
REMOTE BRANCH VERIFIED
DRAFT PR VERIFIED
CI PASS
NO RUNTIME CHANGE
NO BASELINE PROMOTION
READY FOR MORRIS MERGE DECISION
```

## 31. Prochain gate Morris

**GO / NO-GO MERGE PR #360**

Puis seulement post-merge, puis reprise Studio : DELIVERY REQUALIFICATION FOR DETERMINISTIC BROWSER PROOF TOOLING. Aucun REAL.

---

## Git Review Index

```text
Git Review Index
- date/heure : 2026-08-17 14:07:07 CEST (+0200)
- cycle : 13 — PR readiness
- profil : Critical
- typologie : CAPA
- branche : docs/sfia-fake-real-progressive-proof
- HEAD : 085828e14c66b6d4f2355559d6f2716f1c0eca53
- origin/main : 0d33478566627a9bf507d5a06323962d349308ee
- review pack : full
- Fake/Real applicable : N/A
- fichiers créés : 0
- fichiers modifiés : 5 (diffs §13)
- PR : #360 DRAFT
- handoff : required / publish-in-cycle / L3
```

## Review pack content coverage

- created files : N/A
- modified files : yes — diffs complets §13
- synthesis only : **no**
- review pack verdict : **complete**
- reset at start of this write : **yes**
