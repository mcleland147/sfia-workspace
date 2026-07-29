# 02 — User journey and functional scope

## 1. Persona

**Morris (L0)** — décideur local en mode démo borné. Pas de compte. Pas d’email.

## 2. Journey (étapes)

### J1 — Arrivée
- Produit : SFIA Studio
- Disclosure : mode **LOCAL BOUNDED** · IAM NOT_SELECTED · agent réel indisponible · delivery NOT AUTHORIZED
- CTA primaire : **Créer un projet**
- CTA secondaire : Voir readiness (si projet existant local)

### J2 — Création projet
Champs :
- nom (title)
- objectif
- contexte
- criticité perçue : faible / standard / élevé → mappe vers profil Light/Standard/Critical **comme entrée de qualification**, pas comme décision
- contraintes principales (texte)
- option : référence courte

Interdits : email, organisation, secrets, PII, infra.

Sortie : Project + LPS v1 créés via T-A0+T-A1.

### J3 — Fiche projet
Affiche : nom, objectif, contexte synthétique, doctrine pin, LPS version, cycle courant (si), profil, maturité (si), blockers T-A7, dernière décision, prochaine recommandation.

### J4 — Recommandation de cycle
Produit via T-A2 (`QualifyCycle` / `CreateCycle` / epistemic items).
Affiche : cycle recommandé, profil, justification structurée, blocs, réserves, confiance/épistémique, Observation vs Hypothesis vs non-décidé.
**Bandeau obligatoire** : « Recommandation ≠ décision Morris ».

### J5 — Décision Morris
Actions : Valider · Refuser · Reporter · Demander une correction.
Mode UI : **`LOCAL MORRIS DECISION DEMO`**.
Critical réel : **bloqué** (R-T-A3-1 OPEN) — état dédié.
Mappe T-A3 `RecordHumanDecision` + confirmations selon besoin.

### J6 — Readiness dashboard
Voir section statuts ci-dessous.

### J7 — Historique borné
Événements locaux + projection F13.4 (max items, PREFIX_ONLY/GIT_ONLY pour doc).

### J8 — Contrat / tentative (affichage seul)
T-A4/T-A5 : « non généré / non lancé » ou DEMO explicite. Jamais Cursor connecté.

## 3. Statuts dashboard attendus (slice)

| Item | Valeur |
|------|--------|
| HARD | REDUCED — REMAINS OPEN |
| T-A6 | FOUNDATION ADVANCED — REMAINS INCOMPLETE |
| local persistence | SELECTED — BOUNDED LOCAL |
| product persistence | NOT_SELECTED |
| IAM | NOT_SELECTED |
| RUN | NOT READY |
| delivery | NOT AUTHORIZED |
| cutover | NOT AUTHORIZED |
| productionRollbackProven | false |
| crossStoreDurable | false |

## 4. Hors scope fonctionnel

Agent réel · shell · GPT live comme dépendance V1 · multi-tenant · IAM · Critical ack authentifié · delivery · cutover · fermeture blockers.
