# SFIA Studio — Decision pack architecture fonctionnelle OPS1

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `50-ops1-functional-architecture-decision-pack.md` |
| **Cycle** | 3 — Architecture fonctionnelle |
| **Profil** | Standard |
| **Gate d’ouverture** | `G-OPS1-FUNC-ARCH` — consommé |
| **Gate de validation** | `G-OPS1-FUNC-ARCH-VAL` — **consommé** — Morris — 2026-07-20 15:30 CEST |
| **Baseline Git** | `origin/main` @ `b4b9df577a39fe564c3a787a23501786682e1740` |
| **Branche** | `architecture/sfia-studio-ops1-functional` |
| **Statut** | `functional-architecture-validated-with-reservations` |
| **Companions** | [`48`](./48-ops1-functional-architecture.md) · [`49`](./49-ops1-functional-components-and-interactions.md) |
| **Horodatage production** | 2026-07-20 15:14 CEST |
| **Horodatage validation Morris** | 2026-07-20 15:30 CEST |

> Décisions `OPS1-FA-CAND-01`…`22` **validées** sous `G-OPS1-FUNC-ARCH-VAL` (2026-07-20 15:30 CEST).
> Statut global : `functional-architecture-validated-with-reservations`.
> Hérite des `OPS1-FD-CAND-01…27` **validées** (réserves 13/15/20/26 **OPEN** — **maintenues**).

---

## 1. Convention

Chaque décision : observation · héritage · options · recommandation · décision candidate · impacts · risques · dette · réserves · sujets routés · décision Morris attendue · statut.

---

## 2. Décisions `OPS1-FA-CAND-*` (validées)

### OPS1-FA-CAND-01 — Découpage des domaines fonctionnels

| Élément | Contenu |
|---------|---------|
| **Observation** | CAP/FLOW/FR exigent plusieurs responsabilités distinctes sans imposer de microservices. |
| **Héritage** | FD-CAND-01, 03, 21 |
| **Options** | (A) Monolithe logique unique ; (B) 11 domaines D1–D11 (doc 48) ; (C) découpage technique prématuré |
| **Recommandation** | (B) |
| **Décision Morris** | Adopter les domaines D1–D11 comme carte fonctionnelle OPS1. |
| **Impacts** | Lisibilité ; matrices de couverture |
| **Risques** | Sur-découpage perçu |
| **Dette** | Noms de domaines affinables à la validation |
| **Réserves** | Aucune nouvelle |
| **Routé** | Tech arch si mapping modules |
| **Morris attendu** | Valider / ajuster la carte |
| **Statut** | `VALIDATED — Morris — 2026-07-20 15:30 CEST — `G-OPS1-FUNC-ARCH-VAL`` |

### OPS1-FA-CAND-02 — Responsabilité du Cycle Session Manager

| Élément | Contenu |
|---------|---------|
| **Observation** | Quatre couches d’état doivent rester cohérentes. |
| **Héritage** | FD-CAND-02, 03, 07 |
| **Options** | (A) États dispersés dans l’UI ; (B) Session Manager propriétaire des transitions |
| **Recommandation** | (B) |
| **Décision Morris** | Cycle Session Manager = propriétaire des transitions d’état OPS1. |
| **Impacts** | Reprise, CLOSE immuable |
| **Risques** | God-object si on y met l’exécution |
| **Dette** | — |
| **Réserves** | Continuation CLOSE (FD-CAND-13) reste OPEN |
| **Routé** | — |
| **Morris attendu** | Confirmer la propriété |
| **Statut** | `VALIDATED — Morris — 2026-07-20 15:30 CEST — `G-OPS1-FUNC-ARCH-VAL`` |

### OPS1-FA-CAND-03 — Séparation conversation / action

| Élément | Contenu |
|---------|---------|
| **Observation** | Chat ≠ GO ; ProposedAction objet séparé. |
| **Héritage** | FD-CAND-04, 05, 27 ; FR-003 |
| **Options** | (A) Action dans le fil chat ; (B) Action Proposal Manager dédié |
| **Recommandation** | (B) |
| **Décision Morris** | Maintenir Conversation Workspace ≠ Action Proposal Manager. |
| **Impacts** | PN-05 ; surfaces UX |
| **Risques** | Friction UX (cycle UX) |
| **Dette** | — |
| **Réserves** | — |
| **Routé** | UX pour layout |
| **Morris attendu** | Confirmer |
| **Statut** | `VALIDATED — Morris — 2026-07-20 15:30 CEST — `G-OPS1-FUNC-ARCH-VAL`` |

### OPS1-FA-CAND-04 — Autorité exclusive Morris

| Élément | Contenu |
|---------|---------|
| **Observation** | Seul Morris autorise exécution et clôture. |
| **Héritage** | FD-CAND-08 ; FR-004 |
| **Options** | (A) Auto-GO sous conditions ; (B) Morris Gate Manager exclusif |
| **Recommandation** | (B) |
| **Décision Morris** | Toute autorisation passe par Morris Gate Manager. |
| **Impacts** | Pas d’autonomie GPT |
| **Risques** | Goulot humain (accepté POC) |
| **Dette** | — |
| **Réserves** | — |
| **Routé** | — |
| **Morris attendu** | Confirmer |
| **Statut** | `VALIDATED — Morris — 2026-07-20 15:30 CEST — `G-OPS1-FUNC-ARCH-VAL`` |

### OPS1-FA-CAND-05 — Frontière harness

| Élément | Contenu |
|---------|---------|
| **Observation** | Revalidation indépendante du texte GPT. |
| **Héritage** | FD-CAND-09 ; FR-005,025 |
| **Options** | (A) Contrôles UI seuls ; (B) Harness Validation Boundary obligatoire |
| **Recommandation** | (B) |
| **Décision Morris** | Aucune exécution sans revalidation harness réussie. |
| **Impacts** | FLOW-15/16 ; PN-01 |
| **Risques** | Faux positifs de refus |
| **Dette** | Implémentation → tech arch |
| **Réserves** | — |
| **Routé** | `G-OPS1-TECH-ARCH` |
| **Morris attendu** | Confirmer |
| **Statut** | `VALIDATED — Morris — 2026-07-20 15:30 CEST — `G-OPS1-FUNC-ARCH-VAL`` |

### OPS1-FA-CAND-06 — Frontière Cursor

| Élément | Contenu |
|---------|---------|
| **Observation** | Cursor exécute un contrat, n’étend pas l’allowlist. |
| **Héritage** | FD-CAND-09, 27 ; FR-007,030 |
| **Options** | (A) Cursor libre post-GO ; (B) Cursor Adapter strictement borné |
| **Recommandation** | (B) |
| **Décision Morris** | Cursor Execution Adapter = seul chemin d’exécution Markdown OPS1. |
| **Impacts** | PN-03 ; no remote auto |
| **Risques** | — |
| **Dette** | Adapter technique |
| **Réserves** | Isolation OS/réseau OPEN |
| **Routé** | Tech arch ; live Cursor |
| **Morris attendu** | Confirmer |
| **Statut** | `VALIDATED — Morris — 2026-07-20 15:30 CEST — `G-OPS1-FUNC-ARCH-VAL`` |

### OPS1-FA-CAND-07 — Relation Git / store de session

| Élément | Contenu |
|---------|---------|
| **Observation** | Double vérité = risque. |
| **Héritage** | FD-CAND-02 ; FR-015 |
| **Options** | (A) Store = vérité fichiers ; (B) Git vérité ; store = journal |
| **Recommandation** | (B) |
| **Décision Morris** | Git Truth Adapter = vérité HEAD/fichiers/diffs ; Persistence = journal. |
| **Impacts** | Conflit → Git prime / STOP |
| **Risques** | Complexité reprise |
| **Dette** | — |
| **Réserves** | — |
| **Routé** | Tech arch (stockage) |
| **Morris attendu** | Confirmer |
| **Statut** | `VALIDATED — Morris — 2026-07-20 15:30 CEST — `G-OPS1-FUNC-ARCH-VAL`` |

### OPS1-FA-CAND-08 — Modèle d’événements fonctionnels

| Élément | Contenu |
|---------|---------|
| **Observation** | Orchestration nécessite des événements nommés sans bus technique. |
| **Héritage** | FLOW-01…32 |
| **Options** | (A) Appels ad hoc non nommés ; (B) catalogue d’événements fonctionnels (message, gateDecision, contractValidated, executionFinished, stopSignaled, …) |
| **Recommandation** | (B) |
| **Décision Morris** | Maintenir un catalogue d’événements fonctionnels documenté (doc 49) sans imposer de broker. |
| **Impacts** | Observabilité |
| **Risques** | Catalogue incomplet |
| **Dette** | Enrichissement à la validation |
| **Réserves** | — |
| **Routé** | Tech si messaging |
| **Morris attendu** | Valider le principe |
| **Statut** | `VALIDATED — Morris — 2026-07-20 15:30 CEST — `G-OPS1-FUNC-ARCH-VAL`` |

### OPS1-FA-CAND-09 — Gestion des preuves

| Élément | Contenu |
|---------|---------|
| **Observation** | Rapport/evidence couvrent chaque fichier allowlist. |
| **Héritage** | FD-CAND-14 ; FR-013,031 |
| **Options** | (A) Preuves optionnelles ; (B) Evidence and Result Collector obligatoire post-exec |
| **Recommandation** | (B) |
| **Décision Morris** | Collector obligatoire ; rapport incomplet bloque clôture nominale. |
| **Impacts** | FLOW-19/20 |
| **Risques** | — |
| **Dette** | — |
| **Réserves** | — |
| **Routé** | — |
| **Morris attendu** | Confirmer |
| **Statut** | `VALIDATED — Morris — 2026-07-20 15:30 CEST — `G-OPS1-FUNC-ARCH-VAL`` |

### OPS1-FA-CAND-10 — STOP / FAILED

| Élément | Contenu |
|---------|---------|
| **Observation** | STOP/FAILED doivent préempter. |
| **Héritage** | FD-CAND-10 ; FR-011,012,025 |
| **Options** | (A) Gestion dispersée ; (B) Error and STOP Coordinator |
| **Recommandation** | (B) |
| **Décision Morris** | Coordinator unique pour STOP/FAILED/timeouts/refus. |
| **Impacts** | Cohérence fail-closed |
| **Risques** | Sur-centralisation |
| **Dette** | — |
| **Réserves** | — |
| **Routé** | — |
| **Morris attendu** | Confirmer |
| **Statut** | `VALIDATED — Morris — 2026-07-20 15:30 CEST — `G-OPS1-FUNC-ARCH-VAL`` |

### OPS1-FA-CAND-11 — Reprise et lecture après CLOSE

| Élément | Contenu |
|---------|---------|
| **Observation** | CLOSED immuable ; consultation nécessaire. |
| **Héritage** | FD-CAND-13 (WITH RESERVATION) ; CAP-20 |
| **Options** | (A) Muter CLOSED ; (B) lecture seule + continuation/session liée (mécanisme OPEN) |
| **Recommandation** | (B) sans figer le mécanisme |
| **Décision Morris** | Architecture expose IDLE_READ_ONLY après CLOSE ; mécanisme exact de continuation reste **OPEN**. |
| **Impacts** | Pas de mutation silencieuse |
| **Risques** | Ambiguïté UX |
| **Dette** | Décision FD-CAND-13 ultérieure |
| **Réserves** | **FD-CAND-13** |
| **Routé** | UX ; éventuel amendement conception |
| **Morris attendu** | Confirmer non-mutation ; ne pas clôturer FD-CAND-13 ici |
| **Statut** | `VALIDATED WITH RESERVATIONS — Morris — 2026-07-20 15:30 CEST — `G-OPS1-FUNC-ARCH-VAL`` |

### OPS1-FA-CAND-12 — Non-mutation silencieuse

| Élément | Contenu |
|---------|---------|
| **Observation** | Toute reprise d’activité après CLOSE doit être explicite. |
| **Héritage** | FD-CAND-13 ; framing |
| **Options** | (A) Reprise implicite ; (B) règle architecturale anti-silencieux |
| **Recommandation** | (B) |
| **Décision Morris** | Interdire toute mutation de session CLOSED sans décision Morris explicite de continuation/nouvelle session. |
| **Impacts** | Sécurité métier POC |
| **Risques** | — |
| **Dette** | — |
| **Réserves** | Lié à FD-CAND-13 |
| **Routé** | — |
| **Morris attendu** | Confirmer |
| **Statut** | `VALIDATED — Morris — 2026-07-20 15:30 CEST — `G-OPS1-FUNC-ARCH-VAL`` |

### OPS1-FA-CAND-13 — Traitement FinOps

| Élément | Contenu |
|---------|---------|
| **Observation** | Compteurs et confirmation nécessaires ; seuils OPEN. |
| **Héritage** | FD-CAND-15 (WITH RESERVATION) ; FR-023 |
| **Options** | (A) Ignorer FinOps en archi ; (B) FinOps Guard fonctionnel sans seuils figés |
| **Recommandation** | (B) |
| **Décision Morris** | Composant FinOps Guard ; valeurs numériques hors cycle. |
| **Impacts** | FLOW-29 |
| **Risques** | — |
| **Dette** | GO seuils avant live |
| **Réserves** | **FD-CAND-15** |
| **Routé** | Live / FinOps GO |
| **Morris attendu** | Confirmer composant ; garder seuils OPEN |
| **Statut** | `VALIDATED WITH RESERVATIONS — Morris — 2026-07-20 15:30 CEST — `G-OPS1-FUNC-ARCH-VAL`` |

### OPS1-FA-CAND-14 — Sécurité fonctionnelle et fail-closed

| Élément | Contenu |
|---------|---------|
| **Observation** | Default deny + secrets exclus + contenu non autoritaire. |
| **Héritage** | FD-CAND-16 (principes) ; FR-006,016,024,025 |
| **Options** | (A) Confiance GPT ; (B) fail-closed systématique sur doute |
| **Recommandation** | (B) |
| **Décision Morris** | Politique fail-closed transversale portée par Harness + Error/STOP. |
| **Impacts** | PN-01…06 |
| **Risques** | Refus fréquents |
| **Dette** | — |
| **Réserves** | Isolation OS/réseau OPEN |
| **Routé** | Tech arch / sécurité |
| **Morris attendu** | Confirmer |
| **Statut** | `VALIDATED — Morris — 2026-07-20 15:30 CEST — `G-OPS1-FUNC-ARCH-VAL`` |

### OPS1-FA-CAND-15 — Observabilité

| Élément | Contenu |
|---------|---------|
| **Observation** | Corrélations session/action/contrat requises. |
| **Héritage** | FD-CAND-19 |
| **Options** | (A) Logs ad hoc ; (B) Audit Journal + IDs corrélés |
| **Recommandation** | (B) |
| **Décision Morris** | Audit Journal obligatoire ; corrélations minimales doc 48 §22. |
| **Impacts** | CAP-21 |
| **Risques** | Volume de journal |
| **Dette** | Backend tech |
| **Réserves** | — |
| **Routé** | Tech arch |
| **Morris attendu** | Confirmer |
| **Statut** | `VALIDATED — Morris — 2026-07-20 15:30 CEST — `G-OPS1-FUNC-ARCH-VAL`` |

### OPS1-FA-CAND-16 — Frontières UX

| Élément | Contenu |
|---------|---------|
| **Observation** | Surfaces nécessaires mais Figma hors cycle. |
| **Héritage** | FD-CAND-22 |
| **Options** | (A) Spec visuelle ici ; (B) router vers `G-OPS1-UX` |
| **Recommandation** | (B) |
| **Décision Morris** | Architecture fonctionnelle définit besoins de surfaces ; pas de Figma. |
| **Impacts** | Cycle UX distinct |
| **Risques** | — |
| **Dette** | — |
| **Réserves** | — |
| **Routé** | `G-OPS1-UX` |
| **Morris attendu** | Confirmer routage |
| **Statut** | `VALIDATED — Morris — 2026-07-20 15:30 CEST — `G-OPS1-FUNC-ARCH-VAL`` |

### OPS1-FA-CAND-17 — Frontières architecture technique

| Élément | Contenu |
|---------|---------|
| **Observation** | Stack/BDD/API/protocole hors conception et hors ce cycle. |
| **Héritage** | FD-CAND-21 (archi fct) ; routage stack |
| **Options** | (A) Choisir stack ici ; (B) router vers `G-OPS1-TECH-ARCH` |
| **Recommandation** | (B) |
| **Décision Morris** | Aucun choix technique dans 48–50. |
| **Impacts** | Pureté fonctionnelle |
| **Risques** | — |
| **Dette** | — |
| **Réserves** | CI / isolation OPEN |
| **Routé** | `G-OPS1-TECH-ARCH` |
| **Morris attendu** | Confirmer |
| **Statut** | `VALIDATED — Morris — 2026-07-20 15:30 CEST — `G-OPS1-FUNC-ARCH-VAL`` |

### OPS1-FA-CAND-18 — Traitement des réserves Campus360

| Élément | Contenu |
|---------|---------|
| **Observation** | Allowlist/éligibilité validées ; cartographie/branche OPEN. |
| **Héritage** | FD-CAND-20, 26 (WITH RESERVATION) ; 27 |
| **Options** | (A) Trancher chemins ici ; (B) préserver OPEN → SCENARIO-VAL |
| **Recommandation** | (B) |
| **Décision Morris** | Architecture respecte éligibilité+allowlist ; n’ouvre pas SCENARIO-VAL ; ne liste pas de chemins. |
| **Impacts** | Pas de fausse précision |
| **Risques** | — |
| **Dette** | SCENARIO-VAL |
| **Réserves** | **FD-CAND-20, 26** |
| **Routé** | `G-OPS1-SCENARIO-VAL` |
| **Morris attendu** | Confirmer non-arbitrage |
| **Statut** | `VALIDATED WITH RESERVATIONS — Morris — 2026-07-20 15:30 CEST — `G-OPS1-FUNC-ARCH-VAL`` |

### OPS1-FA-CAND-19 — Critères de passage vers UX

| Élément | Contenu |
|---------|---------|
| **Observation** | UX = cycle normal distinct. |
| **Héritage** | FD-CAND-22 ; doc 45 §12 |
| **Options** | Critères candidats : archi fct validée ; besoins de surfaces stables |
| **Recommandation** | Maintenir critères conception |
| **Décision Morris** | Passage UX seulement après `G-OPS1-FUNC-ARCH-VAL` + GO UX. |
| **Impacts** | Séquençage |
| **Risques** | — |
| **Dette** | — |
| **Réserves** | — |
| **Routé** | UX |
| **Morris attendu** | Confirmer |
| **Statut** | `VALIDATED — Morris — 2026-07-20 15:30 CEST — `G-OPS1-FUNC-ARCH-VAL`` |

### OPS1-FA-CAND-20 — Critères de passage vers architecture technique

| Élément | Contenu |
|---------|---------|
| **Observation** | Tech après besoins stables. |
| **Héritage** | Doc 45 §12 |
| **Options** | Après validation archi fct (+ éventuellement UX partielle) |
| **Recommandation** | Gate tech distinct |
| **Décision Morris** | `G-OPS1-TECH-ARCH` seulement sous GO Morris distinct. |
| **Impacts** | — |
| **Risques** | — |
| **Dette** | — |
| **Réserves** | — |
| **Routé** | Tech |
| **Morris attendu** | Confirmer |
| **Statut** | `VALIDATED — Morris — 2026-07-20 15:30 CEST — `G-OPS1-FUNC-ARCH-VAL`` |

### OPS1-FA-CAND-21 — Critères de passage vers backlog

| Élément | Contenu |
|---------|---------|
| **Observation** | Backlog fermé ; I1–I7 ≠ backlog. |
| **Héritage** | FD-CAND-23 |
| **Options** | (A) Ouvrir backlog maintenant ; (B) attendre GOs archi/UX selon besoin |
| **Recommandation** | (B) |
| **Décision Morris** | Aucun backlog OPS1 ouvert par ce pack. |
| **Impacts** | — |
| **Risques** | — |
| **Dette** | — |
| **Réserves** | — |
| **Routé** | `G-OPS1-BACKLOG` |
| **Morris attendu** | Confirmer |
| **Statut** | `VALIDATED — Morris — 2026-07-20 15:30 CEST — `G-OPS1-FUNC-ARCH-VAL`` |

### OPS1-FA-CAND-22 — Verdict candidat d’architecture fonctionnelle

| Élément | Contenu |
|---------|---------|
| **Observation** | Documents 48–50 produits sous G-OPS1-FUNC-ARCH. |
| **Héritage** | FD-CAND-25 (conception) |
| **Options** | (A) Claim COMPLETE ; (B) CANDIDATE en attente G-OPS1-FUNC-ARCH-VAL |
| **Recommandation** | (B) |
| **Décision Morris** | Statut global `functional-architecture-candidate` ; validation Morris ultérieure. |
| **Impacts** | Pas de push/PR auto |
| **Risques** | — |
| **Dette** | — |
| **Réserves** | Toutes réserves héritées maintenues |
| **Routé** | — |
| **Morris attendu** | Gate `G-OPS1-FUNC-ARCH-VAL` **consommé** — 2026-07-20 15:30 CEST |
| **Statut** | `VALIDATED — Morris — 2026-07-20 15:30 CEST — `G-OPS1-FUNC-ARCH-VAL`` |

---

## 3. Résultat de validation Morris

### Validation globale

- Gate `G-OPS1-FUNC-ARCH-VAL` **consommé** — Morris — 2026-07-20 15:30 CEST.
- Architecture fonctionnelle OPS1 (docs 48–50) **validée avec réserves**.
- 22 décisions `OPS1-FA-CAND-01`…`22` **validées**.

### Validées sans réserve propre

- FA-CAND-01…10, 12, 14…17, 19…22.

### Validées avec réserve explicite maintenue

- FA-CAND-11, 13, 18 (liées FD-CAND-13/15/20/26 et listes associées).

### Clarifications non bloquantes

- Noms exacts des composants (affinables sans changer les responsabilités) ;
- granularité du catalogue d’événements (FA-CAND-08) — non bloquante pour l’architecture fonctionnelle.

### Explicitement hors cycle (toujours routés)

- Seuils FinOps numériques ; cartographie Campus360 / convention branche ;
- stack / BDD / API / protocole ; Figma / backlog / delivery / live / MVP ;
- preuve live GPT/Cursor ; CI distante ; isolation OS/réseau.
- Aucun cycle suivant ouvert automatiquement.

---

## 4. Gates

| Gate | État |
|------|------|
| `G-OPS1-FUNC-ARCH` | Consommé (ouverture) |
| `G-OPS1-FUNC-ARCH-VAL` | **Consommé** — Morris — 2026-07-20 15:30 CEST |
| `G-OPS1-SCENARIO-VAL` | Fermé |
| `G-OPS1-UX` | Fermé |
| `G-OPS1-TECH-ARCH` | Fermé |
| `G-OPS1-BACKLOG` | Fermé |
| delivery / live / MVP / production | Fermés |

---

## 5. Verdict

`functional-architecture-validated-with-reservations`

`OPS1 FUNCTIONAL ARCHITECTURE VALIDATED WITH RESERVATIONS`

22 décisions `OPS1-FA-CAND-01…22` **validées** sous `G-OPS1-FUNC-ARCH-VAL` (2026-07-20 15:30 CEST).
Réserves FD-CAND-13/15/20/26 et listes associées : **OPEN** — maintenues.
Aucun claim MVP / PRODUCTION READY / READY FOR DELIVERY / OPS1 PROVEN.
