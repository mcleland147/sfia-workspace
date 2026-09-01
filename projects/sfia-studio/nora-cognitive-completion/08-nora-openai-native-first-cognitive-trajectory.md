# Nora OpenAI-Native-First Cognitive Trajectory — MW2→MW6

| Métadonnée | Valeur |
| --- | --- |
| **Rôle** | Trajectoire transverse de construction cognitive Nora pour MW2→MW6 |
| **Statut documentaire** | **DOCUMENTARY CANDIDATE — MORRIS TRAJECTORY PRINCIPLE CONSUMED IN CONVERSATION — NOT ACTIVE ON MAIN UNTIL GIT INTEGRATION** |
| **Portée** | Nora Cognitive Completion · qualification/readiness MW2→MW6 · OpenAI capability fit · model/reasoning evaluation |
| **Ne remplace pas** | Build Doctrine · Convergence Roadmap · C5 source-locked backlog · MW0 eval contract · OD-04 Option C |
| **Git SoT** | Repository `mcleland147/sfia-workspace` · Git courant prime |
| **Base de cette candidate** | `main` @ `5030b0e8c489754b43b9044f9e3f738e49a8bad5` |
| **Cycle** | Cycle 14 · DOC · CRITICAL · Pre-MW2 transverse truth-sync |
| **Delivery** | **ZERO** · MW2 **NOT AUTHORIZED / NOT STARTED** |
| **Architecture** | **NO NEW ARCHITECTURE** · OD-04 Option C unchanged |
| **Runtime v3** | **NON ADOPTED** |

---

## 1. Décision de trajectoire consommée

Morris fixe pour la trajectoire Nora Cognitive Completion le principe suivant :

> **Pour tout besoin cognitif Nora, les capacités, fonctionnalités et services natifs OpenAI pertinents doivent être évalués avant de concevoir ou développer un équivalent interne. Lorsqu’une capacité OpenAI satisfait les exigences fonctionnelles, cognitives, de gouvernance, de preuve et d’exploitation applicables à SFIA Studio, son usage ou son adaptation doit être privilégié plutôt qu’une implémentation interne redondante.**

Ce principe est nommé dans ce document :

**NORA OPENAI-NATIVE-FIRST**.

Il s’applique aux readiness/requalifications **MW2, MW3, MW4, MW5 et MW6**.

Il ne signifie pas :

- OpenAI décide du modèle métier SFIA ;
- toute nouveauté OpenAI est automatiquement adoptée ;
- une primitive OpenAI remplace automatiquement un objet métier SFIA ;
- une capability OpenAI observée aujourd’hui devient doctrine permanente ;
- un modèle, tier ou niveau de reasoning est automatiquement promu en production ;
- le runtime v3 est ADOPTED.

---

## 2. Frontière structurante Studio / Nora / OpenAI

La séparation cible reste :

```text
Pilote
  ↓ décision / arbitrage / Confirmation applicable
SFIA Studio
  ↓ modèle métier · Truth C · DoctrinePackage/CKC · HD · EC · Evidence · gouvernance
Nora
  ↓ cognition · analyse · clarification · challenge · option · recommandation
OpenAI
  ↓ primitives cognitives / agentiques / modèles / reasoning / tools compatibles
```

### 2.1 SFIA Studio possède

- le modèle métier ;
- Truth C et les objets durables applicables ;
- DoctrinePackage / CKC ;
- SFIA Profile ;
- HumanDecision et Confirmation ;
- ExecutionContract et authority envelope ;
- Evidence / ReviewBundle ;
- ProjectTrajectory / LPS ;
- les règles de gouvernance, de promotion et de preuve.

### 2.2 Le Pilote possède dans le runtime

- les décisions structurantes ;
- les arbitrages ;
- les validations/confirmations humaines requises.

### 2.3 Nora possède

- la cognition contextualisée ;
- la compréhension de l’intention ;
- l’analyse ;
- la clarification ;
- le challenge ;
- la détection/qualification cognitive des problèmes ;
- les options et recommandations ;
- l’usage cognitif des sources/outils sous contraintes Studio.

Nora **n’acquiert aucune autorité métier ou d’exécution** par l’usage d’une primitive OpenAI.

### 2.4 OpenAI fournit préférentiellement

Lorsque compatible :

- modèles et reasoning ;
- Agents SDK / boucle générique agent-tool ;
- Responses API ;
- gestion générique de contexte ou de session utile à la cognition ;
- tools / hosted tools / recherches / MCP lorsque qualifiés ;
- autres primitives cognitives actuelles ou futures pertinentes.

Les équivalences interdites restent notamment :

- OpenAI HITL **≠** SFIA HumanDecision / Confirmation ;
- OpenAI Trace **≠** SFIA Evidence ;
- OpenAI conversation/session state **≠** Truth C ;
- model/provider selection **≠** authority selection.

---

## 3. OpenAI Capability Fit Check — obligatoire avant construction cognitive

Pour chaque readiness/requalification MW2→MW6, effectuer avant tout design interne équivalent :

### 3.1 Besoin

1. Quel **outcome cognitif utilisateur** doit être obtenu ?
2. Quelle capacité v3 / NR / CE / NCC-BAR est servie ?
3. Quelle partie est intrinsèquement SFIA et quelle partie est une mécanique cognitive générique ?

### 3.2 Capabilités OpenAI courantes

4. Quelles primitives OpenAI **existent actuellement** et sont pertinentes ?
5. Quelles capacités sont supportées par le SDK/code installé ?
6. Quelles capacités sont supportées par le **modèle exact** visé ?
7. Quelles contraintes, limites, coûts, latences ou conditions d’usage s’appliquent ?

**Provider capabilities are current inputs, not permanent doctrine.** Elles doivent être revalidées à la date du lot/campaign lorsque le claim en dépend.

### 3.3 Actifs SFIA existants

8. Quels actifs Studio/Nora existent déjà ?
9. Les classifier : KEEP / ADAPT / COMPLETE / HARVEST / REPLACE / FREEZE / RETIRE LATER.
10. Une primitive OpenAI permet-elle de supprimer ou d’éviter une mécanique interne redondante ?
11. Une adaptation minimale suffit-elle à conserver les contrats SFIA ?

### 3.4 Décision de disposition

Ordre de préférence :

```text
USE / KEEP native OpenAI
  ↓ si adaptation nécessaire
ADAPT / WRAP minimally
  ↓ si couverture partielle
COMBINE OpenAI + SFIA-specific delta
  ↓ seulement si besoin non couvert
COMPLETE / BUILD missing SFIA capability
  ↓ si non pertinent / immature / incompatible
DEFER / REJECT with reason
```

Un développement interne d’une mécanique cognitive générique déjà fournie de façon satisfaisante par OpenAI est **non conforme par défaut** à cette trajectoire.

### 3.5 Conditions minimales de fit

Une primitive OpenAI peut être privilégiée si elle satisfait les contraintes applicables :

- outcome cognitif/fonctionnel ;
- compatibilité Option C ;
- frontière Studio / Nora / Pilote ;
- Truth C / CKC / HumanDecision / Confirmation ;
- contrôlabilité et fail-closed applicables ;
- observabilité et preuve ;
- sécurité / confidentialité ;
- coût / latence ;
- réversibilité / dette ;
- absence d’architecture parallèle inutile.

Si ces conditions ne sont pas satisfaites, le rejet/complément doit être **explicite et justifié**.

---

## 4. Application MW2→MW6

| Wave | Besoin principal | OpenAI Capability Fit Check obligatoire |
| --- | --- | --- |
| **MW2** | Cognitive Workload Profile / Strategy · CKC semantic assistance | reasoning controls · model settings · Agents/Responses seams · context controls pertinents |
| **MW3** | Contradiction + Cognitive STOP | capacités de reasoning/verification/tool-use pertinentes · interruption/HITL seulement comme primitives candidates, jamais comme autorité SFIA |
| **MW4** | Grounding durability + Narrative/Evidence | context/source/tool capabilities · tracing/grounding primitives candidates · Trace ≠ Evidence |
| **MW5** | Critical Challenge + Clarification | reasoning depth / high-assurance cognition · challenge primitives · HITL candidate ≠ HumanDecision |
| **MW6** | External Source Intelligence | hosted tools · web/file search · MCP/tools · source strategies ; pas de source primitive interne redondante sans fit check |

Le tableau oriente la **qualification** ; il ne présélectionne aucune technologie additionnelle.

---

## 5. Relation avec MW0 et MW1

### 5.1 MW0 = colonne vertébrale de mesure

MW0 reste le mécanisme pour départager empiriquement :

- OpenAI natif ;
- configuration OpenAI alternative ;
- adaptation SFIA ;
- éventuel complément interne.

Les niveaux de preuve D0 / R1 / R2 / R3 restent applicables selon le claim.

**MOCK GREEN ≠ COGNITIVE PROVEN.**

### 5.2 MW1 = précédent architectural OpenAI-native-first

OD-04 / Option C a déjà appliqué cette direction :

- Agents SDK Runner pour la boucle générique ;
- Product SQLite Session et policy Studio pour les besoins spécifiques de continuité/intégrité ;
- conservation de l’autorité métier SFIA ;
- refus de l’équivalence HITL=HD et Trace=Evidence ;
- pas de deuxième runtime Nora générique.

MW2→MW6 doit poursuivre cette logique plutôt que reconstruire un « mini-OpenAI » dans Studio.

---

## 6. GPT-5.6 — vérité vivante et baseline de preuve

### 6.1 Snapshot fournisseur revalidé au 2026-09-01

Documentation OpenAI courante observée :

- `gpt-5.6-sol` — tier flagship ; alias `gpt-5.6` ;
- `gpt-5.6-terra` — balance intelligence/coût ;
- `gpt-5.6-luna` — tier coût/volume ;
- reasoning effort documenté pour ces modèles : `none · low · medium · high · xhigh · max`.

Références fournisseur au moment de ce truth-sync :

- https://developers.openai.com/api/docs/guides/latest-model
- https://developers.openai.com/api/docs/models/gpt

**Cette photographie est une capability input datée. Elle n’est pas un invariant SFIA et doit être revalidée avant toute campaign qui en dépend.**

### 6.2 Preuves Nora existantes

Les preuves/handoffs MW0/MW1 consommés dans la trajectoire rapportent :

- MW0 REAL CORR-05 : `gpt-5.6-luna` · `reasoning.effort=none` · campagne `mw0-corr05-1788046056895` ;
- MW1 REAL boundary REAL-01/CORR-01 : `gpt-5.6-luna` · `reasoning.effort=none` · campagne `mw1-real-boundary-corr01-1788253662383` · evidence SHA256 `de149e12621f2f003da5f935d6c467574ea8f70a7079ae8aea16c919054b0678`.

La Roadmap courante contient déjà l’ancre MW1 REAL boundary et son campaign/evidence hash.

**Interprétation gouvernée :**

- GPT-5.6 = famille de modèles déjà utilisée dans les preuves REAL Nora ;
- GPT-5.6 Luna + `none` = **point de départ REAL-proven MW0/MW1** ;
- cela **≠** sélection finale de modèle production ;
- cela **≠** production model routing adopté.

---

## 7. PRE-MW2-MODEL-BASELINE-01

Avant MW2 Delivery :

1. résoudre le modèle réellement configuré sur le chemin F1 / Option C ;
2. vérifier qu’il appartient à la famille GPT-5.6 ;
3. si le runtime effectif est hors GPT-5.6, aligner le runtime Nora sur GPT-5.6 avant MW2 ;
4. après un éventuel alignement, rejouer la régression minimale MW0/MW1 nécessaire ;
5. conserver le modèle comme configuration server-side ; **ne pas hardcoder un tier uniquement pour satisfaire ce prérequis**.

Le code courant résout le modèle depuis `OPENAI_MODEL` et le reasoning depuis `OPENAI_REASONING_EFFORT`. Git ne prouve donc pas, à lui seul, la valeur d’environnement réellement active sur chaque runtime.

**PRE-MW2-MODEL-BASELINE-01 est un prérequis Delivery, pas une architecture decision ni un production-routing decision.**

---

## 8. MW2 — reasoning evaluation obligatoire

MW2-S01 porte précisément l’adaptation de profondeur cognitive.

La preuve MW2 ne peut donc pas se limiter à :

> « le code route correctement une Strategy Class vers un paramètre ».

Il faut évaluer l’effet cognitif réel de configurations de reasoning pertinentes sur un modèle GPT-5.6 de référence.

Approche de départ :

```text
fixed GPT-5.6 baseline
  ×
representative MW2 workloads
  ×
selected supported reasoning efforts
  → quality / grounding / authority / latency / token / cost / stability
```

La matrice exacte est décidée dans la readiness/QA MW2 après revalidation provider ; elle n’est pas figée dans ce document.

Le but reste celui du contrat MW0 :

> **minimum sufficient cognitive configuration by workload**, pas effort maximal partout.

---

## 9. Nora Model × Reasoning Evaluation — campagne transverse

Une campagne comparative globale doit être prévue sur les workloads Nora stabilisés :

```text
GPT-5.6 Luna
GPT-5.6 Terra
GPT-5.6 Sol
        ×
reasoning efforts pertinents et supportés
        ×
workloads représentatifs Nora
```

Mesures minimales selon le contrat MW0 :

- task success ;
- grounding ;
- completeness ;
- fabricated claim rate ;
- contradiction handling ;
- instruction adherence ;
- epistemic separation ;
- authority/STOP compliance ;
- clarification quality ;
- genericity ;
- narrative↔evidence coherence ;
- stability/variance ;
- latency/tokens/cost ;
- tool-call/retry burden.

### 9.1 Déclenchement par défaut

Exécuter la campagne comparative globale **après MW6**, avant toute conclusion globale Cognitive Completion / promotion runtime v3 qui dépendrait de ce choix.

### 9.2 Déclenchement anticipé

Une wave MW2→MW6 peut déclencher une campagne comparative ciblée avant MW6 si sa QA met en évidence une limitation plausible du modèle/configuration, par exemple :

- gain insuffisant via reasoning effort ;
- contradiction mal gérée ;
- grounding/contexte insuffisant ;
- challenge High-Assurance insuffisant ;
- source/tool intelligence insuffisante ;
- coût/latence incompatibles avec l’outcome.

**Ne pas exécuter automatiquement la grille complète à chaque wave.**

---

## 10. Production model routing — non sélectionné

État :

**PRODUCTION MODEL ROUTING = NOT SELECTED**.

MW2 n’autorise pas :

```text
cycle type → model
```

ni un mapping prématuré :

```text
Routine → Luna
Focused → Terra
Deep → Sol
High-Assurance → Sol/max
```

Les campagnes peuvent produire des **preuves, options et recommandations**.

Si les preuves montrent qu’un modèle fixe + reasoning adaptatif satisfait les workloads, aucun router supplémentaire n’est requis.

Si elles montrent qu’un routing multi-modèle apporte un bénéfice nécessaire, la conséquence est :

```text
Evidence
  → architecture / trajectory option
  → impact / debt / reversibility analysis
  → distinct Morris decision
```

Pas d’adoption automatique.

---

## 11. Séquence documentaire et gates Pre-MW2

Trajectoire consommée sur le principe :

```text
1. Pre-MW2 transverse documentary truth-sync
2. Git integration + review / post-merge proof
3. MW2 Readiness / Requalification
4. Morris validation of MW2 qualification
5. Distinct Morris MW2 Delivery GO
6. MW2 Delivery
7. MW2 QA / REAL reasoning evidence
8. MW3 → MW6 with OpenAI Capability Fit Check per readiness
9. Global Model × Reasoning campaign after MW6 by default
   OR earlier targeted campaign if a wave QA justifies it
```

Ce document **n’autorise pas** les étapes 3→9.

---

## 12. Impact documentaire

| Source | Disposition |
| --- | --- |
| Build Doctrine | ajouter règle générique OpenAI-native-first pour travaux cognitifs Nora ; pas de modèle spécifique |
| Convergence Roadmap | porter l’état vivant / prochaine capacité / trajectory reference |
| C5 source-locked backlog | **KEEP source-lock** · pas de nouvelle story / pas de changement AC dans ce truth-sync |
| MW0 doc06 | **KEEP measurement contract** · pointer/clarifier consommation MW2→MW6 si nécessaire |
| OD-04 doc07 | **KEEP architecture decision** · OpenAI-native-first compatible · no architecture reopen |
| MW2 Readiness / OD-02 | à créer/requalifier **après** intégration du truth-sync |

---

## 13. Stop conditions

STOP/requalifier si :

- une proposition cognitive Nora construit un équivalent interne sans OpenAI Capability Fit Check alors qu’une primitive OpenAI pertinente existe ;
- l’usage d’OpenAI transfère une autorité métier ou une décision appartenant à Studio/Pilote ;
- une capability fournisseur courante est transformée en doctrine permanente sans justification ;
- un modèle/tier/reasoning setting est déclaré production-selected sans preuve/gate ;
- un nouveau provider, Runner, router, store ou moteur parallèle est ajouté sans gap démontré et gate applicable ;
- MW2 absorbe MW3/MW5/MW6 ;
- C5 source-lock est modifié silencieusement ;
- D0/mock est utilisé pour revendiquer un comportement cognitif REAL ;
- Runtime v3 est déclaré ADOPTED sans preuves/gates Morris.

---

## 14. Anti-claims et état à la sortie documentaire

Cette candidate documentaire :

- **≠ MW2 Readiness validée** ;
- **≠ OD-02 consommée** ;
- **≠ MW2 Delivery GO** ;
- **≠ MW2 started** ;
- **≠ production model selected** ;
- **≠ production model routing selected** ;
- **≠ Sol/Terra/Luna campaign already executed** ;
- **≠ Responses compaction adopted** ;
- **≠ new architecture** ;
- **≠ Cognitive Completion PROVEN** ;
- **≠ runtime v3 ADOPTED**.

### Verdict de trajectoire candidate

**OPENAI-NATIVE-FIRST — MORRIS TRAJECTORY PRINCIPLE CONSUMED IN CONVERSATION**  
**GPT-5.6 — CURRENT NORA REAL EVIDENCE FAMILY / LIVE PROVIDER SNAPSHOT REVALIDABLE**  
**GPT-5.6 LUNA + NONE — MW0/MW1 REAL-PROVEN STARTING POINT, NOT PRODUCTION ROUTING DECISION**  
**MW2→MW6 OPENAI CAPABILITY FIT CHECK — REQUIRED BY THIS CANDIDATE TRAJECTORY AFTER GIT INTEGRATION**  
**PRODUCTION MODEL ROUTING — NOT SELECTED**  
**NEXT PRODUCT CAPABILITY — MW2 READINESS / REQUALIFICATION AFTER DOCUMENTARY INTEGRATION**  
**MW2 DELIVERY — NOT AUTHORIZED / NOT STARTED**  
**RUNTIME V3 — NON ADOPTED**
