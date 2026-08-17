# SFIA Studio Convergence / Build Doctrine

| Métadonnée | Valeur |
| --- | --- |
| **Rôle** | Doctrine de **construction / convergence** de SFIA Studio |
| **Statut** | **VALIDATED — ACTIVE ON MAIN** — gouvernance de construction SFIA Studio validée par Morris |
| **Portée** | Travaux de construction / évolution de **SFIA Studio uniquement** |
| **Git SoT** | Repository `mcleland147/sfia-workspace` — Git courant prime |
| **Doctrine produit associée** | SFIA Studio v3 framing `30`–`37` = **CE QUE** Studio doit être |
| **Roadmap associée** | [`sfia-studio-convergence-roadmap.md`](./sfia-studio-convergence-roadmap.md) = **OÙ** en est la construction |
| **Processus opérationnel actuel** | SFIA **v2.6** = baseline ChatGPT ↔ Cursor externe |
| **Runtime v3** | **NON ADOPTED** tant que preuves/gates manquent |
| **Snapshot création** | HEAD `4b1a058050ae81d56cb6d96b88e8a57380799a86` · 2026-08-12 21:52:01 CEST (+0200) *(historique)* |
| **Validation Morris** | 2026-08-13 02:05 +0200 (Europe/Paris) — Build Doctrine + Convergence Roadmap officiellement validées comme gouvernance de construction SFIA Studio |
| **Intégration Git** | PR #334 · merge commit `1d09e4159932b3885817911e10a2d29a82ae9ea7` |

## A1. Anti-claims (ouverts)

Ce document **n’est pas** :

- une doctrine produit runtime remplaçant `sfia-v3-framing/30`–`37` ;
- une autorisation d’adoption runtime v3 ;
- une baseline méthodologique globale remplaçant SFIA v2.6 ;
- une décision d’architecture technique **consommée hors de ce fichier** (G0-A **ADOPTED** — OA Native Backbone + Harvest OPS1 Cursor ; source : décision Morris + `sfia-studio-g0-architecture-persistence-decision-pack.md` / Roadmap) ;
- une sélection Product persistence **consommée hors de ce fichier** (G0-B **ADOPTED** — `node:sqlite` Product Store OA ; même source) ;
- une autorisation Cursor REAL / Gate D ;
- le contenu des Instructions projet ChatGPT (couche 1 = **ACTIVE** — couche externe, hors contenu de ce fichier).

## A2. Finalité

> La doctrine produit **SFIA Studio v3** fixe la **destination**.
> La **Build Doctrine** fixe les **lois de construction** qui empêchent de perdre cette destination.
> La **Convergence Roadmap** fixe l’**état factuel** et la **prochaine capacité** à obtenir.

## A3. Cible produit (boucle métier)

Décision Morris explicite — cible produit Studio (≠ runtime ADOPTED) :

```text
Morris
  → SFIA Studio / Nora
  → connaissance + contexte v3 (DoctrinePackage / CKC)
  → qualification cycle / profil / lenses
  → analyse / clarification
  → Living Project State
  → trajectoire / options / recommandation
  → HumanDecision Morris
  → Confirmation (si requise)
  → ExecutionContract
  → Cursor / agent sous contrat
  → Evidence / ReviewBundle / Git
  → analyse Nora
  → mise à jour LPS / replanification
  → décision Morris
  → cycle suivant
```

Fondations doctrine produit associées : **V3-F01…V3-F15** (VALIDATED doctrine ; runtime coverage progressive via Roadmap).

## A4. Règles fondatrices de construction (R1–R21)

| ID | Règle |
| --- | --- |
| **R1** | Tout développement doit avoir un **lien direct** avec une capacité v3 (fondation V3-Fxx et/ou étape de la boucle A3). |
| **R2** | La **boucle métier complète** prime sur la profondeur locale non bloquante. |
| **R3** | **Réutiliser** l’existant utile ; **ne jamais** conserver uniquement par inertie / coût passé. |
| **R4** | Classifier les actifs : **KEEP / ADAPT / COMPLETE / HARVEST / REPLACE / FREEZE / RETIRE LATER**. |
| **R5** | Une étape **intermédiaire** n’est autorisée qu’avec justification, cible, condition de sortie et trajectoire de sortie. |
| **R6** | Une impasse ou **architecture parallèle** sans cible explicite est **interdite** comme chemin de construction par défaut. |
| **R7** | Aucun **POC / fixture / spike gratuit** sur le chemin critique. |
| **R8** | Construire par **capacités utilisateur end-to-end**, pas par accumulation de micro-composants. |
| **R9** | La roadmap est une **roadmap de convergence** (état → capacité → preuve), pas un catalogue de tickets. |
| **R10** | Le **chemin critique** doit rester visible à tout moment (Roadmap B10). |
| **R11** | Pas de dette volontaire sans propriétaire + condition de remboursement ou de retrait. |
| **R12** | **Git** reste la vérité technique et documentaire. |
| **R13** | La **décision structurante** reste humaine (Morris). |
| **R14** | GPT/Nora **raisonne, challenge, recommande** ; il/elle ne transforme pas une recommandation en décision. |
| **R15** | Cursor/agent **exécute uniquement** dans un périmètre/contrat gouverné. |
| **R16** | Automatiser le **répétable**, pas l’arbitrage structurant. |
| **R17** | Ne pas élargir un chantier uniquement pour « préparer le futur » sans lien trajectoire. |
| **R18** | Fermer dans un **même lot** les gaps cohérents servant une seule capacité utilisateur, sauf raison de scission. |
| **R19** | Aucun claim de maturité / READY / ADOPTED sans **preuve**. |
| **R20** | Toute brique **temporaire** doit rendre visible sa **sortie**. |
| **R21** | **Fidélité Fake/Real.** Un fake/fixture substitue une **frontière externe**, pas un second chemin produit. Preuve déterministe ≠ preuve REAL. REAL-shaped deterministic reste DETERMINISTIC PROVEN. Les realism gaps restent visibles. Une frontière REAL significative se prouve **progressivement** (déterministe → REAL borné → end-to-end REAL). Aucun claim supérieur à la preuve. Aucun REAL automatique. |

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

Si **1** ou **7** n’a pas de réponse exploitable :

```text
STOP — TRAJECTORY LINK MISSING
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
| **REPLACE** | Remplacer par équivalent cible | Brique incompatible / non alignée | Migration + exit ancien | Ancien hors chemin critique |
| **FREEZE** | Ne plus étendre | N’aide pas le chemin critique | STOP DOING recommandé jusqu’à GO | Recommandation ≠ décision tant que Morris n’a pas tranché |
| **RETIRE LATER** | Retrait différé | Remplacé ou inutile après milestone | Disposition gate | Plan de retrait + preuve non-régression |

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
  → qualification cycle
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
- DETERMINISTIC PROVEN promu READY FOR REAL.

## A14. Stop markers

```text
STOP — TRAJECTORY LINK MISSING
STUDIO WORK NOT QUALIFIED — CONVERGENCE CONTEXT NOT LOADED
PROMPT NOT GENERATED — SFIA STUDIO CONVERGENCE PRE-CHECK INCOMPLETE
```

## A15. Gouvernance d’évolution

- Document **stable** : modification uniquement via cycle explicite + impact analysé + décision Morris.
- La **Roadmap** évolue plus souvent (après décisions, milestones, preuves, dépendances).
- Ne pas appliquer automatiquement A+B à des projets SFIA **sans rapport** avec la construction de SFIA Studio.

## Références

- Roadmap : [`sfia-studio-convergence-roadmap.md`](./sfia-studio-convergence-roadmap.md)
- Doctrine produit : `projects/sfia-studio/sfia-v3-framing/30`–`37`
- Routing : `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- Knowledge Layer : `method/sfia-fast-track/core/sfia-knowledge-layer.md`
- Template : `prompts/templates/sfia-cycle-execution-template.md`
