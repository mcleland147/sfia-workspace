# SFIA Studio — Decision pack conception fonctionnelle OPS1

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `47-ops1-functional-decision-pack.md` |
| **Cycle** | 2 — Conception fonctionnelle |
| **Profil** | Standard |
| **Gates consommés** | `G-OPS1-FUNC-DESIGN` · `G-OPS1-FUNC-DESIGN-VAL` |
| **Baseline Git** | `62eb23f0b1934afbecc517fc83aff90493fb8f29` |
| **Branche** | `design/sfia-studio-ops1-functional` |
| **Statut** | `functional-design-validated-with-reservations` — validé Morris (2026-07-20 13:46 CEST) |
| **Autorité** | Morris (L0) |
| **Companions** | [`45`](./45-ops1-functional-design.md) · [`46`](./46-ops1-functional-flows-and-rules.md) |
| **Cadrage** | [`41`](./41-operational-vertical-slice-1-framing.md) · [`42`](./42-operational-vertical-slice-1-flow-and-session-model.md) · [`43`](./43-operational-vertical-slice-1-scope-and-success-criteria.md) · [`44`](./44-operational-vertical-slice-1-decision-pack.md) |
| **Horodatage** | 2026-07-20 13:10 CEST |
| **Amendement** | 2026-07-20 13:23 CEST — Campus360 ; réserves / routage ; FD-CAND-13/20–26 |
| **Amendement final** | 2026-07-20 13:36 CEST — multi-fichiers + allowlist ; FD-CAND-20/24–27 |
| **Validation Morris** | 2026-07-20 13:46 CEST — `G-OPS1-FUNC-DESIGN-VAL` consommé ; `OPS1-FD-CAND-01`…`27` validées |
| **Projet pilote** | Campus360 exclusivement |

> Pack de **décisions de conception fonctionnelle OPS1 validées avec réserves**.
> Gate `G-OPS1-FUNC-DESIGN-VAL` **consommé** — Morris — 2026-07-20 13:46 CEST.
> Les `OPS1-CAND-*` du cadrage restent l’héritage validé ; les `OPS1-FD-CAND-01`…`27` sont **validées** (réserves sur 13, 15, 20, 26).
> Scénario pilote : **Campus360** uniquement ; Markdown documentaires non protégés **éligibles** (multi-fichiers) ; **allowlist par action** ; cartographie/branche sous `G-OPS1-SCENARIO-VAL`.
> Architecture fonctionnelle et UX = cycles distincts **normaux** ; stack/BDD/API/protocole **routés** vers architecture technique.
> Aucun claim MVP / PRODUCTION READY / READY FOR DELIVERY / OPS1 prouvé. Aucun cycle suivant ouvert automatiquement.

---

## 1. Synthèse

| Élément | Valeur |
|---------|--------|
| Livrables | `45`, `46`, `47` |
| Gate d’ouverture | `G-OPS1-FUNC-DESIGN` **consommé** (production) |
| Gate de validation conception | **Non ouvert / non consommé** |
| Décisions | `OPS1-FD-CAND-01`…`27` **validées** (avec réserves 13/15/20/26) |
| Règles | `OPS1-FR-001`…`025` |
| Flux | `OPS1-FLOW-01`…`32` |
| Commit / push / PR projet | **Absents** (ce cycle) |
| Architecture / UX / backlog / delivery / live / MVP | **Fermés** |

---

## 2. Distinctions de statut

| Statut autorisé | Usage |
|-----------------|-------|
| `VALIDATED` | Décision de conception validée Morris |
| `VALIDATED WITH RESERVATION` | Validée avec réserve explicite maintenue |
| `OPEN` | Non tranché (hors décisions 01–27) |
| `OUT OF SCOPE` | Hors conception |

**Interdits :** `READY FOR DELIVERY`, `READY FOR BACKLOG`, `MVP DEFINED`, `PRODUCTION READY`, `OPS1 PROVEN`.
Toutes les `OPS1-FD-CAND-01`…`27` sont validées sous `G-OPS1-FUNC-DESIGN-VAL` (2026-07-20 13:46 CEST) ; amendement multi-fichiers tracé (2026-07-20 13:36 CEST).

---

## 3. Héritage cadrage (non altéré)

`OPS1-CAND-01`…`14` demeurent au statut fixé par `G-OPS1-FRAMING-VAL` (voir [`44`](./44-operational-vertical-slice-1-decision-pack.md)).
La conception **instancie** sans promouvoir de nouvelles validations de cadrage.

Formulation structurante **préservée** :

```text
Conversation réelle et libre
  → compréhension et qualification GPT
  → action facultative proposée et structurée
  → gate Morris explicite
  → exécution strictement bornée
  → rapport et preuves
  → reprise de la conversation
  → décision Morris finale
```

---

## 4. Décisions `OPS1-FD-CAND-*` (validées)

### OPS1-FD-CAND-01 — Périmètre fonctionnel final de la conception

| Élément | Contenu |
|---------|---------|
| **Observation** | Observation: le cadrage 41–44 fixe conversation réelle + action Markdown gouvernée. |
| **Héritage validé (cadrage)** | Héritage: OPS1-CAND-02,03,05,06,11 VALIDÉS. |
| **Option** | Option: concevoir OPS1 comme spécialisation de 08–10 sans les invalider. |
| **Recommandation** | Recommandation: adopter le périmètre §1 doc 45. |
| **Décision candidate** | Décision candidate: le périmètre de conception OPS1 = capacités CAP-01…21 et flux 01…32, hors stack/UX visuelle/backlog/delivery. |
| **Réserve** | Réserve: validation Morris de la conception non consommée. |
| **Statut** | `VALIDATED` — Morris — 2026-07-20 13:46 CEST — `G-OPS1-FUNC-DESIGN-VAL` |
| **Décision Morris attendue** | Valider le périmètre de conception sans ouvrir les cycles suivants. |

### OPS1-FD-CAND-02 — Modèle fonctionnel CycleSession

| Élément | Contenu |
|---------|---------|
| **Observation** | Observation: CycleSession conceptuel validé au cadrage (OPS1-CAND-07). |
| **Héritage validé (cadrage)** | Héritage: journal, actions, gates, contrats, preuves, FinOps. |
| **Option** | Option: ajuster noms de champs en conception. |
| **Recommandation** | Recommandation: retenir l’agrégat §4.1 doc 45 comme contrat fonctionnel candidat. |
| **Décision candidate** | Décision candidate: CycleSession est l’agrégat OPS1 ; Git reste vérité pour HEAD/diffs. |
| **Réserve** | Stack/BDD **routées** vers architecture technique (≠ réserve conception). |
| **Statut** | `VALIDATED` — Morris — 2026-07-20 13:46 CEST — `G-OPS1-FUNC-DESIGN-VAL` |
| **Décision Morris attendue** | Valider le modèle agrégat ; confirmer routage stack hors conception. |

### OPS1-FD-CAND-03 — Séparation des quatre couches d’état

| Élément | Contenu |
|---------|---------|
| **Observation** | Observation: rigidité message→transition à éviter. |
| **Héritage validé (cadrage)** | Héritage: OPS1-CAND-13 VALIDÉ AVEC RÉSERVE. |
| **Option** | Option: libellés candidats doc 45 §5. |
| **Recommandation** | Recommandation: quatre couches indépendantes + interdiction AUTHORIZED implicite. |
| **Décision candidate** | Décision candidate: adopter couches session / conversation / action / exécution telles que §5. |
| **Réserve** | Réserve: noms ajustables. |
| **Statut** | `VALIDATED` — Morris — 2026-07-20 13:46 CEST — `G-OPS1-FUNC-DESIGN-VAL` |
| **Décision Morris attendue** | Valider la séparation de couches. |

### OPS1-FD-CAND-04 — Relation conversation libre / action structurée

| Élément | Contenu |
|---------|---------|
| **Observation** | Observation: chat formulaire = anti-pattern. |
| **Héritage validé (cadrage)** | Héritage: OPS1-CAND-03,05. |
| **Option** | Option: surface action toujours visible vs à la demande. |
| **Recommandation** | Recommandation: action en panneau séparé, créé seulement quand proposition structurée. |
| **Décision candidate** | Décision candidate: dialogue libre ; action = objet séparé ; chat ≠ GO. |
| **Réserve** | Réserve: détail UX sous G-OPS1-UX. |
| **Statut** | `VALIDATED` — Morris — 2026-07-20 13:46 CEST — `G-OPS1-FUNC-DESIGN-VAL` |
| **Décision Morris attendue** | Valider la séparation conversation/action. |

### OPS1-FD-CAND-05 — Cas ACTION_NOT_REQUIRED

| Élément | Contenu |
|---------|---------|
| **Observation** | Observation: succès OPS1 exige pouvoir conclure sans action. |
| **Héritage validé (cadrage)** | Héritage: OPS1-CAND-06 ; critère 6. |
| **Option** | Option: statut dédié vs simple NONE. |
| **Recommandation** | Recommandation: statut ACTION_NOT_REQUIRED explicite, chat continuable. |
| **Décision candidate** | Décision candidate: retenir ACTION_NOT_REQUIRED comme signal de premier ordre. |
| **Réserve** | Réserve: libellé ajustable. |
| **Statut** | `VALIDATED` — Morris — 2026-07-20 13:46 CEST — `G-OPS1-FUNC-DESIGN-VAL` |
| **Décision Morris attendue** | Valider le cas sans action. |

### OPS1-FD-CAND-06 — Modèle de sources et contexte Git sélectionnés

| Élément | Contenu |
|---------|---------|
| **Observation** | Observation: ingestion dépôt entier = risque injection/coût. |
| **Héritage validé (cadrage)** | Héritage: sécurité 43 §5.1 ; FR-021. |
| **Option** | Option: sélection manuelle seule vs suggestions GPT. |
| **Recommandation** | Recommandation: sélection Morris obligatoire ; GPT peut proposer. |
| **Décision candidate** | Décision candidate: SourceReference explicite ; pas d’auto-ingest repo. |
| **Réserve** | Réserve: UI de sélection future. |
| **Statut** | `VALIDATED` — Morris — 2026-07-20 13:46 CEST — `G-OPS1-FUNC-DESIGN-VAL` |
| **Décision Morris attendue** | Valider le modèle de sources explicites. |

### OPS1-FD-CAND-07 — Reprise et condensation du contexte

| Élément | Contenu |
|---------|---------|
| **Observation** | Observation: contexte dérivé ≠ vérité. |
| **Héritage validé (cadrage)** | Héritage: OPS1-CAND-08 ; FR-014. |
| **Option** | Option: condensation auto silencieuse vs explicite. |
| **Recommandation** | Recommandation: condensation contrôlée et visible ; journal append-only. |
| **Décision candidate** | Décision candidate: reprise sans invention ; condensation explicite. |
| **Réserve** | Algorithme de condensation OPEN ; stack de persistance **routée** archi technique. |
| **Statut** | `VALIDATED` — Morris — 2026-07-20 13:46 CEST — `G-OPS1-FUNC-DESIGN-VAL` |
| **Décision Morris attendue** | Valider principes reprise/condensation. |

### OPS1-FD-CAND-08 — Modèle de gate et décisions Morris

| Élément | Contenu |
|---------|---------|
| **Observation** | Observation: GO doit être ancré. |
| **Héritage validé (cadrage)** | Héritage: formulation structurante validée. |
| **Option** | Option: motif obligatoire vs optionnel. |
| **Recommandation** | Recommandation: motif recommandé ; horodatage+tz obligatoire ; panneau gate indépendant. |
| **Décision candidate** | Décision candidate: ActionGate + MorrisDecision selon §4.6–4.7 et FLOW-10…14. |
| **Réserve** | Réserve: — |
| **Statut** | `VALIDATED` — Morris — 2026-07-20 13:46 CEST — `G-OPS1-FUNC-DESIGN-VAL` |
| **Décision Morris attendue** | Valider le modèle de gate. |

### OPS1-FD-CAND-09 — Revalidation harness avant exécution

| Élément | Contenu |
|---------|---------|
| **Observation** | Observation: harness indépendant du texte GPT. |
| **Héritage validé (cadrage)** | Héritage: Option B ; FR-005. |
| **Option** | Option: revalidation synchrone obligatoire. |
| **Recommandation** | Recommandation: FLOW-15/16 obligatoires entre AUTHORIZED et EXECUTING. |
| **Décision candidate** | Décision candidate: aucune exécution sans revalidation réussie. |
| **Réserve** | Réserve: protocole technique non décidé. |
| **Statut** | `VALIDATED` — Morris — 2026-07-20 13:46 CEST — `G-OPS1-FUNC-DESIGN-VAL` |
| **Décision Morris attendue** | Valider l’exigence de revalidation. |

### OPS1-FD-CAND-10 — STOP / FAILED / rapport incomplet

| Élément | Contenu |
|---------|---------|
| **Observation** | Observation: résilience cadrage. |
| **Héritage validé (cadrage)** | Héritage: 43 §5.4 ; FR-011–013,025. |
| **Option** | Option: FAILED global vs EXECUTION_FAILED couche. |
| **Recommandation** | Recommandation: couches distinctes + priorité STOP ; rapport incomplet bloquant. |
| **Décision candidate** | Décision candidate: adopter règles §5.5 et FLOW-14/19. |
| **Réserve** | Réserve: — |
| **Statut** | `VALIDATED` — Morris — 2026-07-20 13:46 CEST — `G-OPS1-FUNC-DESIGN-VAL` |
| **Décision Morris attendue** | Valider gestion STOP/FAILED/incomplet. |

### OPS1-FD-CAND-11 — Conversation post-exécution

| Élément | Contenu |
|---------|---------|
| **Observation** | Observation: obligatoire dans BeB. |
| **Héritage validé (cadrage)** | Héritage: OPS1-CAND-06 ; critère 9 ; FR-019. |
| **Option** | Option: phase dédiée vs simple continuation. |
| **Recommandation** | Recommandation: phase POST_EXECUTION_CONVERSATION dédiée. |
| **Décision candidate** | Décision candidate: post-exec obligatoire après exécution dans parcours nominal OPS1. |
| **Réserve** | Réserve: — |
| **Statut** | `VALIDATED` — Morris — 2026-07-20 13:46 CEST — `G-OPS1-FUNC-DESIGN-VAL` |
| **Décision Morris attendue** | Valider l’obligation post-exec. |

### OPS1-FD-CAND-12 — Analyse GPT candidate

| Élément | Contenu |
|---------|---------|
| **Observation** | Observation: verdict ≠ décision. |
| **Héritage validé (cadrage)** | Héritage: critère 16 ; FR-020 ; héritage incrément E. |
| **Option** | Option: analyse auto vs sur demande. |
| **Recommandation** | Recommandation: sur demande ou suggestion, toujours candidateOnly. |
| **Décision candidate** | Décision candidate: AnalysisCandidate jamais auto-CLOSING. |
| **Réserve** | Réserve: — |
| **Statut** | `VALIDATED` — Morris — 2026-07-20 13:46 CEST — `G-OPS1-FUNC-DESIGN-VAL` |
| **Décision Morris attendue** | Valider candidateOnly. |

### OPS1-FD-CAND-13 — Clôture et continuation après CLOSE

| Élément | Contenu |
|---------|---------|
| **Observation** | Une session clôturée ne doit pas être mutée silencieusement. |
| **Héritage validé (cadrage)** | Critère 17 ; CAP-19/20. |
| **Option** | Réouverture mutante de la même session vs continuation / nouvelle session liée. |
| **Recommandation** | Session `CLOSED` **immuable** ; consultation possible ; reprendre une activité crée une **continuation** ou une **nouvelle session liée** ; mécanisme exact à confirmer en architecture fonctionnelle / UX. |
| **Décision candidate** | Clôture explicite ; **aucune** réouverture silencieuse ; préférence continuation / session liée. |
| **Réserve** | Mécanisme exact de lien/continuation OPEN (à trancher hors validation fonctionnelle pure). |
| **Statut** | `VALIDATED WITH RESERVATION` — Morris — 2026-07-20 13:46 CEST — `G-OPS1-FUNC-DESIGN-VAL` |
| **Décision Morris attendue** | Valider le principe d’immutabilité + continuation liée ; laisser le mécanisme détaillé aux cycles suivants. |

### OPS1-FD-CAND-14 — Traçabilité des preuves

| Élément | Contenu |
|---------|---------|
| **Observation** | Observation: corrélations session/message/action/contrat. |
| **Héritage validé (cadrage)** | Héritage: 43 §5.2 ; EvidenceReference. |
| **Option** | Option: pack export souhaitable. |
| **Recommandation** | Recommandation: EvidenceReference obligatoire pour rapport/diff ; export pack candidat. |
| **Décision candidate** | Décision candidate: preuves référencées consultables ; originKind tracé. |
| **Réserve** | Réserve: format export non décidé. |
| **Statut** | `VALIDATED` — Morris — 2026-07-20 13:46 CEST — `G-OPS1-FUNC-DESIGN-VAL` |
| **Décision Morris attendue** | Valider exigences de preuve. |

### OPS1-FD-CAND-15 — Principes fonctionnels FinOps

| Élément | Contenu |
|---------|---------|
| **Observation** | Libre ≠ illimité ; chiffres non encore arbitrés. |
| **Héritage validé (cadrage)** | OPS1-CAND-14 VALIDÉ AVEC RÉSERVE. |
| **Option** | Fixer seuils maintenant vs plus tard. |
| **Recommandation** | Valider principes (compteurs séparés, alertes, no retry, confirmation coût élevé) ; **garder OPEN** valeurs numériques, seuils, modèles, plafonds session/jour. |
| **Décision candidate** | Principes FR-023 / FLOW-29 retenus ; chiffres OPEN ; **non bloquants** pour `G-OPS1-FUNC-DESIGN-VAL` ; **à décider avant live**. |
| **Réserve** | Valeurs numériques À définir sous GO distinct avant live. |
| **Statut** | `VALIDATED WITH RESERVATION` — Morris — 2026-07-20 13:46 CEST — `G-OPS1-FUNC-DESIGN-VAL` |
| **Décision Morris attendue** | Valider principes FinOps ; confirmer non-blocage pour validation fonctionnelle. |

### OPS1-FD-CAND-16 — Principes fonctionnels RGPD

| Élément | Contenu |
|---------|---------|
| **Observation** | Observation: messages peuvent contenir des données personnelles. |
| **Héritage validé (cadrage)** | Héritage: NFR conception. |
| **Option** | Option: durée de rétention. |
| **Recommandation** | Recommandation: minimisation + finalité + journal proportionné ; pas de claim conformité. |
| **Décision candidate** | Décision candidate: principes §7.2 doc 45 ; purge/export OPEN. |
| **Réserve** | Réserve: pas de conformité validée. |
| **Statut** | `VALIDATED` — Morris — 2026-07-20 13:46 CEST — `G-OPS1-FUNC-DESIGN-VAL` |
| **Décision Morris attendue** | Valider principes RGPD fonctionnels sans claim légal. |

### OPS1-FD-CAND-17 — Exigences d’accessibilité

| Élément | Contenu |
|---------|---------|
| **Observation** | Observation: surfaces conversation/gate doivent être utilisables. |
| **Héritage validé (cadrage)** | Héritage: besoins UX cadrage. |
| **Option** | Option: niveau WCAG cible. |
| **Recommandation** | Recommandation: exigences fonctionnelles §7.4 sans standard chiffré inventé. |
| **Décision candidate** | Décision candidate: clavier, annonces d’état, distinction non visuelle, historique consultable. |
| **Réserve** | Cible normative = cycle UX (normal), pas réserve anormale de conception. |
| **Statut** | `VALIDATED` — Morris — 2026-07-20 13:46 CEST — `G-OPS1-FUNC-DESIGN-VAL` |
| **Décision Morris attendue** | Valider besoins a11y fonctionnels. |

### OPS1-FD-CAND-18 — Exigences de performance perçue

| Élément | Contenu |
|---------|---------|
| **Observation** | Observation: latence GPT/Cursor attendue. |
| **Héritage validé (cadrage)** | Héritage: §7.5. |
| **Option** | Option: SLA. |
| **Recommandation** | Recommandation: feedback d’état + timeouts ; **aucun SLA inventé**. |
| **Décision candidate** | Décision candidate: performance perçue qualitative selon §7.5. |
| **Réserve** | Réserve: mesures chiffrées OPEN. |
| **Statut** | `VALIDATED` — Morris — 2026-07-20 13:46 CEST — `G-OPS1-FUNC-DESIGN-VAL` |
| **Décision Morris attendue** | Valider exigences perçues sans SLA. |

### OPS1-FD-CAND-19 — Observabilité fonctionnelle

| Élément | Contenu |
|---------|---------|
| **Observation** | Observation: besoin de corrélation pour review. |
| **Héritage validé (cadrage)** | Héritage: 43 §5.2. |
| **Option** | Option: détail logs techniques. |
| **Recommandation** | Recommandation: corrélations + fuseau + originKind ; logs techniques hors conception. |
| **Décision candidate** | Décision candidate: observabilité fonctionnelle §7.6. |
| **Réserve** | Tooling technique → architecture technique (routé). |
| **Statut** | `VALIDATED` — Morris — 2026-07-20 13:46 CEST — `G-OPS1-FUNC-DESIGN-VAL` |
| **Décision Morris attendue** | Valider corrélations fonctionnelles. |

### OPS1-FD-CAND-20 — Périmètre Markdown pilote Campus360 (éligibilité multi-fichiers)

| Élément | Contenu |
|---------|---------|
| **Observation** | Un plafond mono-fichier crée une contrainte artificielle. |
| **Héritage validé (cadrage)** | OPS1-CAND-01 (action Markdown locale étroite) ; `G-OPS1-SCENARIO-VAL`. |
| **Option** | Mono-fichier obligatoire vs multi-fichiers avec allowlist. |
| **Recommandation** | Multi-fichiers Markdown Campus360 **éligibles** ; allowlist explicite par action ; pas d’autorisation globale. |
| **Décision Morris** | **Validée** — 2026-07-20 13:36 CEST — gate `G-OPS1-FUNC-DESIGN-VAL` (amendement final) : Markdown documentaires Campus360 non protégés **éligibles** ; action 1..n fichiers ; GO porte sur allowlist ; Campus360 ≠ autorisation globale ; chemins protégés exclus ; pas de remote auto. |
| **Portée exacte** | Contrat fonctionnel d’éligibilité + allowlist ; **pas** cartographie de chemins réels ni branche. |
| **Réserve** | Cartographie chemins/catégories éligibles + convention de branche sous `G-OPS1-SCENARIO-VAL`. |
| **Statut** | `VALIDATED WITH RESERVATION` — Morris — 2026-07-20 13:46 CEST — `G-OPS1-FUNC-DESIGN-VAL` |
| **Décision Morris attendue** | Aucune supplémentaire sur ce point ; SCENARIO-VAL pour cartographie/branche. |

### OPS1-FD-CAND-21 — Passage vers architecture fonctionnelle (cycle distinct normal)

| Élément | Contenu |
|---------|---------|
| **Observation** | L’architecture fonctionnelle n’est pas une dette de la conception. |
| **Héritage validé (cadrage)** | Séquence méthode SFIA ; `G-OPS1-FUNC-ARCH` fermé. |
| **Option** | Traiter l’absence d’archi fct comme réserve anormale (rejeté). |
| **Recommandation** | Qualifier le passage comme **cycle distinct normal** après `G-OPS1-FUNC-DESIGN-VAL`. |
| **Décision candidate** | Critères §12 doc 45 ; **pas** une réserve de conception. |
| **Réserve** | — |
| **Statut** | `VALIDATED` — Morris — 2026-07-20 13:46 CEST — `G-OPS1-FUNC-DESIGN-VAL` |
| **Décision Morris attendue** | Confirmer le séquencement normal vers `G-OPS1-FUNC-ARCH`. |

### OPS1-FD-CAND-22 — Passage vers UX/UI (cycle distinct normal)

| Élément | Contenu |
|---------|---------|
| **Observation** | Figma / UX visuelle hors cycle conception. |
| **Héritage validé (cadrage)** | `G-OPS1-UX` fermé. |
| **Option** | Traiter l’absence d’UX comme réserve anormale (rejeté). |
| **Recommandation** | Besoins de surfaces déjà listés ; UX = **cycle distinct normal**. |
| **Décision candidate** | Passage UX selon §12 ; pas de Figma ici ; **pas** une réserve de conception. |
| **Réserve** | Ordre exact vs archi fct OPEN (arbitrage de trajectoire, pas dette). |
| **Statut** | `VALIDATED` — Morris — 2026-07-20 13:46 CEST — `G-OPS1-FUNC-DESIGN-VAL` |
| **Décision Morris attendue** | Confirmer le séquencement normal vers `G-OPS1-UX`. |

### OPS1-FD-CAND-23 — Passage vers backlog

| Élément | Contenu |
|---------|---------|
| **Observation** | I1–I7 = trajectoire cadrage, pas backlog. |
| **Héritage validé (cadrage)** | OPS1-CAND-10 réserve. |
| **Option** | Transformer I1–I7 en stories maintenant. |
| **Recommandation** | Interdit tant que `G-OPS1-BACKLOG` fermé. |
| **Décision candidate** | Backlog seulement sous GO distinct après conception (+ UX/archi fct éventuelles). |
| **Réserve** | — |
| **Statut** | `VALIDATED` — Morris — 2026-07-20 13:46 CEST — `G-OPS1-FUNC-DESIGN-VAL` |
| **Décision Morris attendue** | Confirmer non-ouverture backlog. |

### OPS1-FD-CAND-24 — Réserves de conception (liste amendée finale)

| Élément | Contenu |
|---------|---------|
| **Observation** | La réserve « fichier Markdown exact unique » est obsolète après décision multi-fichiers. |
| **Héritage validé (cadrage)** | Réserves cadrage 44 §7. |
| **Option** | Conserver le mono-fichier comme réserve (rejeté). |
| **Recommandation** | **Réserves conception :** FinOps numériques ; continuation après CLOSE ; **cartographie** chemins Campus360 éligibles ; convention de branche ; preuve live ; CI distante ; isolation OS/réseau. **Supprimé :** fichier Markdown exact unique. **Non-réserves :** archi fct / UX (cycles normaux) ; stack/BDD/API/protocole (routés). |
| **Décision candidate** | Adopter §1.7–1.8 doc 45 (amendement final). |
| **Réserve** | Les réserves listées restent ouvertes. |
| **Statut** | `VALIDATED` — Morris — 2026-07-20 13:46 CEST — `G-OPS1-FUNC-DESIGN-VAL` |
| **Décision Morris attendue** | Confirmer la liste finale des réserves. |

### OPS1-FD-CAND-25 — Verdict candidat de conception (amendement final)

| Élément | Contenu |
|---------|---------|
| **Observation** | Conception produite, amendée (Campus360/routage/CLOSE), puis amendement final multi-fichiers + allowlist. |
| **Héritage validé (cadrage)** | Cadrage validé avec réserves ; docs 41–44 sur main. |
| **Option** | Claim READY FOR DELIVERY (interdit). |
| **Recommandation** | Intégrer l’arbitrage Morris ; préparer versionnement sous GO distinct. |
| **Décision candidate** | Verdict : `SFIA STUDIO OPS1 FUNCTIONAL DESIGN FINAL AMENDMENT INTEGRATED — READY FOR VERSIONING`. |
| **Réserve** | Versionnement / PR non faits ; pas OPS1 prouvé ; live non ouvert. |
| **Statut** | `VALIDATED` — Morris — 2026-07-20 13:46 CEST — `G-OPS1-FUNC-DESIGN-VAL` |
| **Décision Morris attendue** | Autoriser éventuellement le versionnement ; ne pas ouvrir delivery/live/MVP. |
| **Traçabilité amendement final** | Morris — 2026-07-20 13:36 CEST — `G-OPS1-FUNC-DESIGN-VAL` (allowlist multi-fichiers). |

### OPS1-FD-CAND-26 — Contexte projet du scénario pilote (Campus360)

| Élément | Contenu |
|---------|---------|
| **Observation** | Sans ancrage projet, le pilote Markdown reste ambigu. |
| **Héritage validé (cadrage)** | Action Markdown locale (OPS1-CAND-01). |
| **Option** | Projet libre vs Campus360 exclusif vs multi-projets. |
| **Recommandation** | **Campus360 exclusivement** ; plusieurs Markdown peuvent être **éligibles** ; chaque action gouvernée par **sa** allowlist ; OPS1 = capacité SFIA Studio. |
| **Décision Morris** | Ancrage Campus360 exclusif + éligibilité multi-fichiers (voir FD-CAND-20/27) — 2026-07-20 13:36 CEST. |
| **Décision candidate / portée** | Pilote OPS1 **uniquement** Campus360 ; pas d’autorisation globale implicite. |
| **Réserve** | Cartographie chemins + branche sous `G-OPS1-SCENARIO-VAL`. |
| **Statut** | `VALIDATED WITH RESERVATION` — Morris — 2026-07-20 13:46 CEST — `G-OPS1-FUNC-DESIGN-VAL` |
| **Décision Morris attendue** | SCENARIO-VAL pour cartographie/branche. |


### OPS1-FD-CAND-27 — Modèle d’éligibilité et allowlist par action

| Élément | Contenu |
|---------|---------|
| **Observation** | Le mono-fichier crée une contrainte artificielle et confond éligibilité projet et autorisation d’exécution. |
| **Héritage validé (cadrage)** | Exécution étroite, réversible, sans remote automatique ; chat ≠ GO ; harness fail-closed. |
| **Option** | Allowlist globale Campus360 vs allowlist **par action**. |
| **Décision Morris** | **Validée** — 2026-07-20 13:36 CEST / confirmation 2026-07-20 13:46 CEST — `G-OPS1-FUNC-DESIGN-VAL` : Markdown Campus360 documentaires non protégés éligibles ; allowlist exacte par action ; GO porte sur allowlist ; extension après GO = nouveau gate ; hors allowlist = refus même si éligible ; absence d’autorisation globale. |
| **Règle** | Périmètre éligible ≠ autorisation d’exécution (FR-026…032). |
| **Portée exacte** | Contrat fonctionnel ; pas de sélection de chemins réels dans ce cycle. |
| **Réserve** | Cartographie de chemins / catégories et convention de branche sous `G-OPS1-SCENARIO-VAL`. |
| **Statut** | `VALIDATED` — Morris — 2026-07-20 13:46 CEST — `G-OPS1-FUNC-DESIGN-VAL` |
| **Décision Morris attendue** | Aucune supplémentaire sur le modèle ; SCENARIO-VAL pour cartographie. |



---

## 5. Matrice de couverture rapide

| Sujet demandé | ID |
|---------------|-----|
| Périmètre conception | 01 |
| CycleSession | 02 |
| Quatre couches d’état | 03 |
| Conversation / action | 04 |
| ACTION_NOT_REQUIRED | 05 |
| Sources Git | 06 |
| Reprise / condensation | 07 |
| Gate Morris | 08 |
| Revalidation harness | 09 |
| STOP / FAILED / incomplet | 10 |
| Post-exécution | 11 |
| Analyse candidate | 12 |
| Clôture / réouverture | 13 |
| Preuves | 14 |
| FinOps | 15 |
| RGPD | 16 |
| Accessibilité | 17 |
| Performance perçue | 18 |
| Observabilité | 19 |
| Périmètre Markdown Campus360 multi-fichiers | 20 |
| Passage archi fonctionnelle (cycle normal) | 21 |
| Passage UX/UI (cycle normal) | 22 |
| Passage backlog | 23 |
| Réserves conception amendées finales | 24 |
| Verdict candidat amendement final | 25 |
| Contexte projet pilote Campus360 | 26 |
| Éligibilité + allowlist par action | 27 |

---

## 6. Blocs

| Bloc | Statut dans ce cycle |
|------|----------------------|
| Sécurité | **Activé** (fonctionnel) |
| FinOps | **Activé** (principes ; chiffres OPEN non bloquants) |
| RGPD | **Activé** (principes ; pas de claim conformité) |
| Accessibilité | **Activé** (besoins) |
| Performance | **Activé** (perçue) |
| Observabilité | **Activé** (fonctionnelle) |
| Architecture technique | **Désactivé** — sujets stack/BDD/API/protocole **routés** (cycle 6) |
| Architecture fonctionnelle / UX Figma | **Désactivés ici** — cycles distincts **normaux** (pas réserves) |
| DevOps / déploiement | **Désactivé** |
| GreenOps détaillé | **Désactivé** |
| Delivery applicatif | **Désactivé** |

---

## 7. Décisions Morris — état post-validation

1. `G-OPS1-FUNC-DESIGN-VAL` **consommé** (2026-07-20 13:46 CEST) — conception validée avec réserves.
2. `OPS1-FD-CAND-01`…`27` validées (WITH RESERVATION : 13, 15, 20, 26).
3. `G-OPS1-SCENARIO-VAL` reste **fermé** : cartographie chemins/catégories, exclusions, branche, règles allowlist, scénario de preuve.
4. Aucun cycle suivant ouvert automatiquement (FUNC-ARCH, UX, BACKLOG, TECH-ARCH, delivery, live, MVP).
5. Versionnement local autorisé sous GO distinct ; push/PR non autorisés dans le cycle de versionnement local seul.


---

## 8. Anti-claims

Interdits : OPS1 prouvé ; MVP DEFINED/READY ; PRODUCTION READY ; INDUSTRIALIZATION ; READY FOR DELIVERY/BACKLOG ; stack/BDD/API décidées ; liste globale définitive de chemins ; autorisation globale Campus360 ; remote auto.

---

## 9. Verdict

`functional-design-validated-with-reservations`

`SFIA STUDIO OPS1 FUNCTIONAL DESIGN VALIDATED WITH RESERVATIONS`

Gate `G-OPS1-FUNC-DESIGN-VAL` consommé — Morris — 2026-07-20 13:46 CEST.
`OPS1-FD-CAND-01`…`27` validées. Aucun cycle suivant ouvert automatiquement.
