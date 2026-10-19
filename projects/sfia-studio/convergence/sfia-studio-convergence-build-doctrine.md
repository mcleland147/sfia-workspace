# SFIA Studio Convergence / Build Doctrine

| Métadonnée | Valeur |
| --- | --- |
| **Rôle** | Doctrine de **construction / convergence** de SFIA Studio |
| **Statut** | **VALIDATED — ACTIVE ON MAIN** — gouvernance de construction SFIA Studio validée par Morris · **R22 OpenAI-native-first = VALIDATED — ACTIVE ON MAIN** via PR **#453** |
| **Portée** | Travaux de construction / évolution de **SFIA Studio uniquement** |
| **Git SoT** | Repository `mcleland147/sfia-workspace` — Git courant prime |
| **Doctrine produit associée** | SFIA Studio v3 framing `30`–`37` = **CE QUE** Studio doit être |
| **Roadmap associée** | [`sfia-studio-convergence-roadmap.md`](./sfia-studio-convergence-roadmap.md) = **OÙ** en est la construction |
| **Trajectoire cognitive Nora associée** | [`08-nora-openai-native-first-cognitive-trajectory.md`](../nora-cognitive-completion/08-nora-openai-native-first-cognitive-trajectory.md) = **COMMENT qualifier les primitives cognitives OpenAI et la trajectoire model/reasoning MW2→MW6** · **VALIDATED — ACTIVE ON MAIN** via PR **#453** |
| **Processus opérationnel actuel** | SFIA **v2.6** = baseline ChatGPT ↔ Cursor externe |
| **Runtime v3** | **NON ADOPTED** tant que preuves/gates manquent |
| **Snapshot création** | HEAD `4b1a058050ae81d56cb6d96b88e8a57380799a86` · 2026-08-12 21:52:01 CEST (+0200) *(historique)* |
| **Validation Morris** | 2026-08-13 02:05 +0200 (Europe/Paris) — Build Doctrine + Convergence Roadmap officiellement validées comme gouvernance de construction SFIA Studio |
| **Intégration Git** | PR #334 · merge commit `1d09e4159932b3885817911e10a2d29a82ae9ea7` · **R22 + trajectoire Nora OpenAI-native-first intégrés via PR #453** · merge `d640b5ba7210b9da3593bea9eeae2100c6da6c09` · post-merge CI `33530815963` **SUCCESS** · Required Gate **PASS** |
| **Source Product Completion structurante** | C1 validé et intégré sur `main` via PR #364 · merge `d83be84ab93650f23bfe54870790cc2e839be095` · `projects/sfia-studio/product-completion/01-product-completion-cadrage.md` |

## A1. Anti-claims (ouverts)

Ce document **n’est pas** :

- une doctrine produit runtime remplaçant `sfia-v3-framing/30`–`37` ;
- une autorisation d’adoption runtime v3 ;
- une baseline méthodologique globale remplaçant SFIA v2.6 ;
- une décision d’architecture technique **consommée hors de ce fichier** (G0-A **ADOPTED** — OA Native Backbone + Harvest OPS1 Cursor ; source : décision Morris + `sfia-studio-g0-architecture-persistence-decision-pack.md` / Roadmap) ;
- une sélection Product persistence **consommée hors de ce fichier** (G0-B **ADOPTED** — `node:sqlite` Product Store OA ; même source) ;
- une autorisation Cursor REAL / Gate D ;
- le contenu des Instructions projet ChatGPT (couche 1 = **ACTIVE** — couche externe, hors contenu de ce fichier) ;
- une sélection permanente d’un modèle, tier, reasoning effort ou service OpenAI particulier.

## A2. Finalité

> La doctrine produit **SFIA Studio v3** fixe la **destination**.
> La **Build Doctrine** fixe les **lois de construction** qui empêchent de perdre cette destination.
> La **Convergence Roadmap** fixe l’**état factuel** et la **prochaine capacité** à obtenir.

## A3. Cible produit (boucle métier)

Décision Morris explicite — cible produit Studio (≠ runtime ADOPTED). **Pilote** est le rôle runtime fonctionnel générique ; Morris reste l’autorité de construction / gouvernance de SFIA Studio et peut utiliser le produit en tant que Pilote sans devenir un persona runtime spécifique.

**Amendement d’autorité d’exécution — D-P6-SHE-01** (2026-10-18) — **SINGLE HUMAN EXECUTE / OPTION A** — **TARGET ARCHITECTURE — ADOPTED BY MORRIS**. Cible documentaire ≠ runtime implémenté ; ≠ P6 PASS ; ≠ runtime v3 ADOPTED. Ne confond pas une **HumanDecision de trajectoire** (gates propres) avec l’autorisation d’un **ExecutionContract** générique.

Ordre d’autorité d’exécution aligné sur Product Completion C2 + Functional Architecture, **amendé** par D-P6-SHE-01 (≠ spécification technique) :

```text
Pilote
  → SFIA Studio / Nora
  → connaissance + contexte v3 (DoctrinePackage / CKC)
  → qualification cycle / profil / lenses
  → analyse / clarification
  → Living Project State
  → ProjectTrajectory / options / recommandation
  → HumanDecision du Pilote (trajectoire / vérité Project structurelle — gates propres)
  → [Generic Execution — D-P6-SHE-01]
       Nora/Studio PREPARE ExecutionContract (inspectable ; sans HD préalable obligatoire)
       → Pilote INSPECT (contrat / effets / réserves)
       → Pilote EXECUTE (seul clic explicite sur la version inspectée)
       → Studio : HD / Confirmation applicables (transitions OA internes) + autorité effective
       → Cursor / agent sous contrat SI admissible ; sinon STOP sans Attempt
  → Evidence / ReviewBundle / Git
  → analyse Nora
  → mise à jour LPS / ProjectTrajectory / replanification
  → décision Pilote
  → cycle suivant
```

Clarifications minimales (gouvernance d’exécution — ≠ implémentation) :

- **PREPARE ≠ AUTHORIZE ≠ EXECUTE** (D-ER-18 conservé ; timing amendé par D-P6-SHE-01) ;
- PREPARE d’un ExecutionContract générique **n’exige pas** de HumanDecision préalable (structurant ou non) — le contrat peut être **inspectable** sans être **autorisé** ;
- Inspection ≠ consentement à exécuter ;
- le clic **Exécuter** est l’acte Pilote explicite sur le **contrat inspecté** (identité / version / empreinte) ;
- HD / Confirmation applicables restent des **transitions OA distinctes**, consommées **dans** le geste Exécuter lorsque requis — **pas** de CTA humain supplémentaire après ce clic pour le même contrat inspecté ;
- Confirmation porte sur le **contrat / les effets inspectés** ;
- Confirmation est **conditionnelle** — jamais une étape obligatoire gratuite ;
- aucune Confirmation ne précède l’**inspection** du contrat qu’elle autorise ;
- l’**autorité effective** est résolue **avant** tout lancement Cursor ; absence d’autorité → STOP sans Attempt ;
- l’absence de Confirmation requise **n’empêche pas** le calcul d’autorité ;
- aucune couche ne peut élargir seule l’autorité ;
- gates Morris de **construction** (doctrine, promotion, chemins protégés Studio, push/PR/merge repo Studio) **≠** autorisation runtime Pilote.

Référence fonctionnelle d’autorité :

```text
valid human authorization
∩ ExecutionContract scope
∩ AgentCapability / policy
∩ runtime guardrails
∩ valid required Confirmations
= effective authority
```

Fondations doctrine produit associées : **V3-F01…V3-F15** (VALIDATED doctrine ; runtime coverage progressive via Roadmap).

## A4. Règles fondatrices de construction (R1–R24)

| ID | Règle |
| --- | --- |
| **R1** | Tout développement doit avoir un **lien direct** avec une capacité v3 (fondation V3-Fxx et/ou étape de la boucle A3). |
| **R2** | La **boucle métier complète** prime sur la profondeur locale non bloquante. |
| **R3** | **Réutiliser** l’existant utile ; **ne jamais** conserver uniquement par inertie / coût passé. |
| **R4** | Classifier les actifs : **KEEP / ADAPT / COMPLETE / HARVEST / CONSOLIDATE / REPLACE / FREEZE / RETIRE LATER**. |
| **R5** | Une étape **intermédiaire** n’est autorisée qu’avec justification, cible, condition de sortie et trajectoire de sortie. |
| **R6** | Une impasse ou **architecture parallèle** sans cible explicite est **interdite** comme chemin de construction par défaut. |
| **R7** | Aucun **POC / fixture / spike gratuit** sur le chemin critique. |
| **R8** | Construire par **capacités utilisateur end-to-end**, pas par accumulation de micro-composants. |
| **R9** | La roadmap est une **roadmap de convergence** (état → capacité → preuve), pas un catalogue de tickets. |
| **R10** | Le **chemin critique** doit rester visible à tout moment (Roadmap B10). |
| **R11** | Pas de dette volontaire sans propriétaire + condition de remboursement ou de retrait. |
| **R12** | **Git** reste la vérité technique et documentaire. |
| **R13** | La **décision structurante** reste humaine : HumanDecision du **Pilote** dans le runtime produit ; Morris conserve les décisions de construction, promotion et gates structurants de SFIA Studio. |
| **R14** | GPT/Nora **raisonne, challenge, recommande** ; il/elle ne transforme pas une recommandation en décision. |
| **R15** | Cursor/agent **exécute uniquement** dans un périmètre/contrat gouverné. |
| **R16** | Automatiser le **répétable**, pas l’arbitrage structurant. |
| **R17** | Ne pas élargir un chantier uniquement pour « préparer le futur » sans lien trajectoire. |
| **R18** | Fermer dans un **même lot** les gaps cohérents servant une seule capacité utilisateur, sauf raison de scission. |
| **R19** | Aucun claim de maturité / READY / ADOPTED sans **preuve**. |
| **R20** | Toute brique **temporaire** doit rendre visible sa **sortie**. |
| **R21** | **Fidélité Fake/Real.** Un fake/fixture substitue une **frontière externe**, pas un second chemin produit. Preuve déterministe ≠ preuve REAL. REAL-shaped deterministic reste DETERMINISTIC PROVEN. Les realism gaps restent visibles. Une frontière REAL significative se prouve **progressivement** (déterministe → REAL borné → end-to-end REAL). Aucun claim supérieur à la preuve. Aucun REAL automatique. |
| **R22** | **Nora OpenAI-native-first.** Pour tout besoin cognitif Nora, qualifier d’abord les capacités OpenAI courantes pertinentes avant de développer un équivalent interne. Si une primitive OpenAI satisfait les exigences fonctionnelles/cognitives, la frontière Studio↔Nora↔Pilote, les contraintes de gouvernance/autorité, de preuve, sécurité/confidentialité, coût/latence et réversibilité applicables, **préférer son usage ou son adaptation minimale**. Si la couverture est partielle, combiner la primitive avec le **delta réellement spécifique à SFIA**. Construire une mécanique cognitive générique interne seulement si l’insuffisance/incompatibilité OpenAI est qualifiée. Une primitive OpenAI n’acquiert jamais l’autorité métier SFIA. Les capacités fournisseur doivent être revalidées quand le claim en dépend ; un snapshot OpenAI courant **≠ doctrine permanente**. |
| **R23** | **Architecture-informed development (Studio).** Toute analyse, conception, correction, évolution, rationalisation ou validation pertinente de SFIA Studio doit s’appuyer sur une compréhension **actuelle et vérifiable** des mécanismes existants. Le niveau d’investigation est **proportionné** au risque. Les références architecturales applicables (`production-runtime-reference/**` et volumes concernés) sont consultées avant recommandation ou intervention. **Git courant et preuves primaires** priment sur la documentation descriptive ; toute contradiction devient un **gap** explicitement qualifié. |
| **R24** | **Architecture documentation continuity.** Toute intervention Studio doit évaluer ses **impacts documentaires**. Toute modification du fonctionnement réel doit déclencher la synchronisation des sections architecturales concernées (contrat living PRR). L’absence d’impact sémantique doit être explicitement qualifiée (`NO SEMANTIC IMPACT`) lorsqu’applicable. Un digest PRR conforme **ne prouve pas** la validité sémantique du référentiel. |

> **Lifecycle R22 : ACTIVE ON MAIN.** Principe de trajectoire explicitement consommé par Morris le 2026-09-01, intégré via PR **#453**, merge `d640b5ba7210b9da3593bea9eeae2100c6da6c09`, post-merge CI `33530815963` **SUCCESS**, Required Gate **PASS**.

> **Lifecycle R23 / R24 — snapshot d’authoring AKG-M0 (2026-10-19) :**
> - **Contenu des règles R23 / R24 :** fixé dans ce document sous GO M0 DOCUMENTARY AUTHORING (contenu autorisé).
> - **Statut au moment de l’authoring local :** présentes dans le worktree documentaire `docs/sfia-studio-akg-m0-documentary-authoring` — **≠** intégrées sur `origin/main` — **≠** ACTIVE ON MAIN.
> - **Activation effective :** dépend d’une **intégration Git** ultérieure (commit/PR/merge sous gates Morris distincts) puis d’une **vérification post-merge** que `origin/main` contient bien ces règles.
> - **Interprétation durable :** ne pas lire cette note comme une affirmation permanente « R23/R24 never active ». Après merge vérifié, le tip Roadmap / post-merge truth-sync doivent requalifier le lifecycle ; jusqu’alors, traiter R23/R24 comme **AUTHORING LOCAL / NOT YET ACTIVE ON MAIN**.
> - **Ne pas** déclarer ACTIVE ON MAIN avant intégration + vérification Git.

## A5. Challenge obligatoire avant tout chantier Studio

Avant cadrage / prompt Cursor / delivery Studio, répondre :

1. Quelle **capacité v3** ce travail débloque-t-il ?
2. Est-ce utile **maintenant** (chemin critique) ?
3. Existe-t-il déjà une brique **réutilisable** (KEEP/ADAPT/HARVEST) ?
4. Créons-nous une **architecture ou un moteur parallèle** ?
5. Peut-on fermer **plusieurs petits gaps** dans le même lot cohérent ?
6. Quelle **preuve end-to-end** permettra de déclarer la capacité obtenue ?
7. Quelle capacité ou décision vient **ensuite** ?
8. Quelle **dette** est créée ?
9. Action **répétable/automatisable** ou **arbitrage humain** ?
10. Un **gate Morris** est-il nécessaire ?
11. Y a-t-il une **frontière fake/mock/fixture** ? Substitue-t-elle la frontière externe, ou crée-t-elle un **chemin produit parallèle** ?
12. Quel **niveau de preuve** ce chantier peut-il honnêtement atteindre (DETERMINISTIC / REAL BOUNDARY / END-TO-END REAL) ? Quels **realism gaps** restent ouverts ?
13. **Si le chantier touche la cognition Nora : quelles capacités OpenAI courantes pertinentes ont été évaluées avant toute solution interne équivalente ? Quelle disposition USE/KEEP · ADAPT · COMBINE · COMPLETE/BUILD · DEFER/REJECT est retenue et pourquoi ?**
14. Quelles **références PRR** (README / volumes / objets / flows / invariants / gaps) ont été consultées ? Si **N/A**, justification explicite.
15. Quels **composants, flows et invariants** sont concernés ? Impacts **directs** et **indirects** (proportionnés) ?
16. Quel **statut de couverture** documentaire pour les domaines touchés (DOCUMENTED / COVERAGE VERIFIED / BEHAVIOR PROVEN / KNOWN GAP) ?
17. Quel **impact documentaire** : `NO SEMANTIC IMPACT` / `UPDATE REQUIRED` / gap à ouvrir ?
18. Y a-t-il un candidat **KEEP / ADAPT / COMPLETE / HARVEST / CONSOLIDATE / REPLACE / FREEZE / RETIRE LATER** fondé sur preuves (pas sur inertie) ? Une **suppression structurante** est-elle envisagée (→ STOP + GO Morris) ?

Si **1** ou **7** n’a pas de réponse exploitable :

```text
STOP — TRAJECTORY LINK MISSING
```

Pour un chantier cognitif Nora, l’absence du point **13** empêche de qualifier honnêtement la solution de construction : effectuer l’OpenAI Capability Fit Check avant design interne équivalent.

Lorsque le chantier touche le **fonctionnement Studio** (analyse, conception, architecture, impact, rationalisation — même en lecture seule) et que le point **14** est absent sans justification N/A :

```text
STOP — ARCHITECTURE CONTEXT NOT LOADED
```

## A6. Politique POC / prototype / fixture

| Cas | Règle |
| --- | --- |
| Historique existant | Exploitable comme **preuve / harvest**, pas comme produit final. |
| Nouvelle création | **Interdite par défaut** sur chemin critique. |
| Exception | Uniquement risque technique précis non résoluble autrement + exit explicite. |
| Gate | Morris gate si l’exception ouvre une branche de trajectoire. |
| Interdit | Traiter POC/fixture comme produit final ou comme preuve REAL silencieuse. |
| Fake / fixture de frontière | **KEEP** comme substitution d’adapter. Même orchestration, mêmes états produit, même Evidence pipeline. |
| Chemin produit parallèle fixture | **Interdit** si le REAL traverse des états significativement différents (ex. succeeded immédiat vs running asynchrone). Qualifier **REALISM GAP**. |
| REAL-shaped deterministic | Reste **DETERMINISTIC PROVEN** — jamais REAL BOUNDARY PROVEN. |
| Tooling QA | S’il ne peut pas reproduire un état REAL significatif du chemin critique : **INCOMPLETE / TOOLING GAP**, puis requalification Delivery — pas un claim inférieur. |

## A7. Politique d’intermédiaire

| Label | Autorisé ? | Exigence |
| --- | --- | --- |
| **TEMPORARY WITH EXIT** | OUI | Justification + cible + preuve de sortie + owner |
| **TEMPORARY WITHOUT EXIT** | NON | Interdit (R5/R11/R20) |

## A8. Politique de classification des actifs

| Classe | Sens | Conditions | Conséquence roadmap | Preuve |
| --- | --- | --- | --- | --- |
| **KEEP** | Conserver tel quel sur le chemin | Utile à la boucle v3 ; pas de dette structurante | Aucun rewrite ; usage direct | Présence Git + usage actuel |
| **ADAPT** | Conserver + adapter interfaces | Cœur utile ; frontières à aligner | Lot d’adaptation borné | Contrat/port clarifié |
| **COMPLETE** | Combler un trou d’une brique presque prête | Manque wiring/durabilité/UI | Milestone COMPLETE | Capacité e2e démontrée |
| **HARVEST** | Extraire une capacité d’un système parallèle | Valeur isolable (ex. Cursor spawn) | Anti-corruption adapter | Adapter branché sans dual-product |
| **CONSOLIDATE** | Fusionner / simplifier des briques redondantes **sans** remplacer le cœur utile | Preuve de redondance + dépendances mappées + pas de perte de capacité utilisateur | Lot borné de consolidation | Avant/après capacité e2e + impact PRR |
| **REPLACE** | Remplacer par équivalent cible | Brique incompatible / non alignée | Migration + exit ancien | Ancien hors chemin critique |
| **FREEZE** | Ne plus étendre | N’aide pas le chemin critique | STOP DOING recommandé jusqu’à GO | Recommandation ≠ décision tant que Morris n’a pas tranché |
| **RETIRE LATER** | Retrait différé gouverné | Remplacé ou inutile après milestone | Disposition gate + **conditions de sortie** | Plan de retrait + preuve non-régression + **GO Morris** pour suppression structurante |

> **Distinctions obligatoires (CP01 / P3).** Classifier un actif **≠** recommander une suppression **≠** décider Morris **≠** autoriser l’exécution du retrait. **CONSOLIDATE** n’est pas une suppression. **RETIRE LATER** reste une disposition gouvernée. **Evidence-based rationalization (P3)** : aucun actif n’est conservé uniquement par inertie historique ou coût passé (aligné R3). Toute consolidation, substitution ou suppression doit être justifiée par besoins fonctionnels, responsabilités, dépendances, impacts, risques, preuves et stratégie de sortie. Une **suppression structurante** exige un **GO Morris** spécifique.

## A9. Chemin critique (priorité)

```text
capacité utilisateur complète
  > hardening local non bloquant
  > transverse non bloquant
  > expérimentation
```

## A10. Preuve de sortie

Une milestone **ne se termine pas** parce qu’un composant « existe ».
Elle se termine lorsqu’une **capacité utilisateur** ou une **précondition structurante** explicitement définie est **démontrée** (preuve Git / handoff / parcours UI).

`technical SUCCESS ≠ functional READY ≠ V3 RUNTIME ADOPTED`.

`DETERMINISTIC PROVEN ≠ REAL BOUNDARY PROVEN ≠ END-TO-END REAL PROVEN`.
`DETERMINISTIC PROVEN ≠ READY FOR REAL`.

## A11. Gouvernance des sources

| Source | Rôle |
| --- | --- |
| Git + décisions Morris explicites | Vérité + autorité |
| Doctrine produit v3 (`30`–`37`) | Destination produit |
| **Build Doctrine (ce document)** | Lois de construction |
| **Convergence Roadmap** | État + prochaine capacité |
| **Product Completion C1 intégré** | Cible / scope / trajectoire adoptés explicitement par Morris |
| **Nora OpenAI-native-first trajectory** | **ACTIVE ON MAIN** · trajectoire transverse cognitive MW2→MW6 · capability-fit/model-reasoning policy · intégrée via PR **#453** |
| **Production Runtime Reference (PRR)** | SoT **documentaire CURRENT as-implemented** du runtime Studio — **subordonnée** à Git + preuves primaires (R23 / CP03) |
| Sources cycle / repo | Preuves locales du chantier |
| Mémoire conversationnelle | Non SoT |

## A12. Trois couches de vérification

| Couche | Rôle | Statut courant |
| --- | --- | --- |
| **1. Instructions projet ChatGPT** | Déclenche la consultation | **ACTIVE** |
| **2. Repo / Source Routing** | Indique quoi consulter et dans quel ordre | **VALIDATED — ACTIVE ON MAIN** (routing guide + Knowledge Layer) |
| **3. Template Cursor canonique** | Empêche génération de prompt Studio sans contexte convergence | **VALIDATED — ACTIVE ON MAIN** |

Séquence attendue :

```text
Repo-informed pre-check
  → si Studio trigger : Convergence pre-check
  → si fonctionnement Studio concerné (analyse/conception/architecture/impact/rationalisation, même lecture seule) :
      PRR volumes applicables (R23) — sinon N/A justifié
  → qualification cycle
  → si Nora cognitive : OpenAI Capability Fit Check (R22)
  → CKC/process guidance applicable (v2.6 process only)
  → sources spécifiques
  → instanciation prompt Cursor
```

## A13. Anti-patterns

- micro-hardening sans blocker utilisateur ;
- troisième moteur parallèle ;
- POC sans exit ;
- dette « on verra plus tard » ;
- conservation par sunk cost ;
- fonctionnalité fictive pour tester un concept déjà cadré ;
- roadmap par composants sans user outcome ;
- décision candidate présentée comme acquise ;
- mass rewrite historique ;
- Build Doctrine transformée en doctrine runtime ;
- fake/fixture présenté comme preuve REAL ;
- chemin produit parallèle fixture non qualifié ;
- DETERMINISTIC PROVEN promu READY FOR REAL ;
- **reconstruire une mécanique cognitive générique Nora alors qu’une capacité OpenAI pertinente existe, sans OpenAI Capability Fit Check ni justification de rejet/complément** ;
- **traiter une primitive OpenAI comme HumanDecision, Evidence, Truth C ou autorité métier SFIA** ;
- **figer un snapshot fournisseur/modèle courant comme doctrine permanente sans gate/preuve** ;
- intervention Studio sur le fonctionnement sans consultation PRR / code lorsque applicable (R23) ;
- digest PRR rafraîchi présenté comme validation sémantique (R24) ;
- conservation d’un composant « parce qu’il existe déjà » sans classification evidence-based (P3) ;
- **CONSOLIDATE** ou **RETIRE LATER** présentés comme autorisation de suppression immédiate ;
- suppression structurante sans GO Morris / plan de retrait ;
- second référentiel architectural parallèle à la PRR.

## A14. Stop markers

```text
STOP — TRAJECTORY LINK MISSING
STUDIO WORK NOT QUALIFIED — CONVERGENCE CONTEXT NOT LOADED
PROMPT NOT GENERATED — SFIA STUDIO CONVERGENCE PRE-CHECK INCOMPLETE
STOP — ARCHITECTURE CONTEXT NOT LOADED
STOP — STRUCTURAL RETIREMENT REQUIRES MORRIS GO
```

> Les marqueurs historiques sont **préservés**. `STOP — ARCHITECTURE CONTEXT NOT LOADED` aligne Build Doctrine, routing et template lorsqu’un contexte PRR obligatoire est absent. Ne pas multiplier des STOP sémantiquement équivalents.

## A15. Gouvernance d’évolution

- Document **stable** : modification uniquement via cycle explicite + impact analysé + décision Morris.
- La **Roadmap** évolue plus souvent (après décisions, milestones, preuves, dépendances).
- Les capacités/modèles OpenAI évoluent : leurs snapshots appartiennent aux sources de campagne/trajectoire vivante, **pas** aux invariants de cette doctrine.
- Ne pas appliquer automatiquement A+B à des projets SFIA **sans rapport** avec la construction de SFIA Studio.

## Références

- Roadmap : [`sfia-studio-convergence-roadmap.md`](./sfia-studio-convergence-roadmap.md)
- Product Completion C1 : [`../product-completion/01-product-completion-cadrage.md`](../product-completion/01-product-completion-cadrage.md)
- Nora OpenAI-native-first trajectory : [`../nora-cognitive-completion/08-nora-openai-native-first-cognitive-trajectory.md`](../nora-cognitive-completion/08-nora-openai-native-first-cognitive-trajectory.md)
- Doctrine produit : `projects/sfia-studio/sfia-v3-framing/30`–`37`
- Routing : `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- Knowledge Layer : `method/sfia-fast-track/core/sfia-knowledge-layer.md`
- Template : `prompts/templates/sfia-cycle-execution-template.md`
- Production Runtime Reference : `projects/sfia-studio/production-runtime-reference/`
