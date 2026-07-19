# SFIA Studio — Gate pack delivery POC S1 (prérequis POC-G9)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `28-poc-orchestration-delivery-gate-pack.md` |
| **Cycle** | 5 — Backlog |
| **Profil** | Critical |
| **POC-G8** | **CONSOMMÉ** (backlog produit) |
| **POC-G9** | **FERMÉ** — décision Morris distincte |
| **POC** | **NON LANCÉ** |
| **Delivery** | **NON AUTORISÉ** |
| **Base** | `main` @ `60e6880…` |
| **Architecture** | Option B minimale (inchangée) |

> Ce document **prépare** POC-G9. Il ne l’ouvre pas. Il n’autorise ni code, ni `app/**`, ni lancement.

---

## 1. Couverture backlog

| Epic | Couvert dans `26` | Ready pour instruction delivery ? |
|------|-------------------|-----------------------------------|
| E1 Contrats | Oui | Oui (après validation Morris backlog) |
| E2 Harness | Oui | Oui |
| E3 GitReader | Oui | Oui |
| E4 CursorPort | Oui | Oui — réel = spike |
| E5 Policy | Oui + `27` | Oui — allowlist candidate |
| E6 Adaptateur | Oui | Oui — protocole ouvert |
| E7 Cockpit | Oui | Oui — `app/**` seulement si POC-G9 |
| E8 Sécurité | Oui | Oui |
| E9 Observabilité | Oui | Oui |
| E10 QA | Oui | Oui |
| E11 Démo | Oui | Should |

---

## 2. Prérequis POC-G9 (checklist)

Avant tout GO delivery, Morris doit disposer de :

1. Backlog `26` validé (ou corrections actées).
2. Allowlist/denylist `27` **validée** (plus seulement candidate).
3. Confirmation Option B : Studio cockpit / adaptateur fin / harness autonome.
4. Confirmation hors périmètre : no remote write, no L5 global, no MVP.
5. Décision explicite sur modes Cursor acceptés pour le 1er incrément (fixture±manual).
6. Décision sur touch `app/**` (oui borné / non — harness-only d’abord).
7. Stratégie de preuve acceptée (§5).
8. Plan de réversibilité (§7).
9. Aucune techno/protocole présentée comme définitive sans preuve.

**POC-G9 reste FERMÉ jusqu’à GO Morris explicite.**

---

## 3. Risques delivery (à traiter si POC-G9)

| Risque | Sévérité | Mitigation |
|--------|----------|------------|
| Dérive Option C (orch. dans app) | Haute | Revues ; orch. hors `app/**` |
| Allowlist trop large | Haute | Validation `27` ; défaut deny |
| API Cursor inventée | Haute | Port + fixture ; spike avant « réel » |
| Seconde vérité UI | Haute | Statut dérivé journal |
| Écriture Git accidentelle | Haute | Denylist + tests A2 |
| Service permanent inutile | Moyenne | Processus local à la demande |
| Scope creep multi-scénario | Moyenne | S1 only |

---

## 4. Réserves conservées (architecture)

1. Cursor réel non prouvé.
2. Technologie harness ouverte (Node/TS candidat).
3. Protocole adaptateur ouvert.
4. Allowlist détaillée = candidate jusqu’à validation Morris.
5. `app/**` uniquement delivery borné.
6. QA non-seconde-vérité.
7. Clôture AF séparée.
8. POC-G9 / lancement non autorisés ici.
9. **Docker** : option / spike d’évaluation possible avant POC-G9 — **non décidé**, ni obligatoire ni exclu.

---

## 5. Stratégie de preuve (delivery futur)

| Phase | Preuve |
|-------|--------|
| Harness-only | A1, A2, A4, A5 (`27`) verts |
| Sécurité | Matrice AB-01…08 |
| Option B UI | A1 + A6 + preuve statut dérivé |
| Démo Morris | Pack E11 |

Outils de test : ouverts (alignement repo). Pas de CI Studio imposée dans ce pack.

---

## 6. Sécurité (gate)

- Authority : Morris L0 ; harness revalide.
- Intégrité : `contractHash`.
- Replay : détection GO consommé.
- Injection : paths/commands.
- Fail-closed : défaut deny.
- Journal : pas de secrets.
- STOP : prioritaire.

---

## 7. Observabilité / réversibilité

| Thème | Exigence |
|-------|----------|
| Journal | JSONL corrélé |
| Preuves | Locales sous proofDir |
| Corrélation | request/execution/gate IDs |
| Erreurs | Explicitement journalisées |
| Reprise | Nouveau GO après rejet |
| Réversibilité | Pas d’effet distant ; cleanup local preuves possible |
| Mode dégradé | Option A sans Studio |

---

## 8. FinOps / GreenOps

- Local macOS.
- Pas de composant managé.
- Pas de daemon permanent non nécessaire.
- Protocole simple.
- Dette minimale.

---

## 9. Décision Morris attendue (future)

### Question POC-G9

Autorisez-vous le **delivery** du POC S1 Option B selon `26`/`27`/`28` ?

Sous-questions :

1. Validez-vous l’allowlist `27` ?
2. Autorisez-vous un premier incrément **harness-only** (sans `app/**`) ?
3. Si UI : quelles surfaces `app/**` minimales ?
4. Modes Cursor : fixture seulement / + manual / spike réel ?
5. Commit/push/PR delivery = gates séparés après POC-G9.

### Conséquences

| Décision | Effet |
|----------|-------|
| GO POC-G9 | Delivery documentaire+code borné possible (cycle dédié) |
| NO-GO | Backlog reste ; pas d’implémentation |
| GO harness-only | `app/**` reste intact |
| Claim Cursor réel | Spike + preuve obligatoires |

---

## 10. Verdict futur (non actuel)

Verdict **candidat** après POC-G9 réussi + démo :

`POC S1 EVIDENCE COMPLETE — MORRIS POST-POC DECISION REQUIRED`

**Verdict actuel de ce cycle :**

`POC BACKLOG COMPLETE WITH RESERVES — POC-G8 CONSUMED — POC-G9 DECISION REQUIRED`

---

## 11. Actions interdites (rappel)

code · `app/**` · commit/push/PR · merge · ouverture POC-G9 · lancement POC · L5 · writes Git distantes · choix techno/protocole définitifs sans preuve

---

*Gate pack delivery — prépare POC-G9 — ne l’ouvre pas — POC NON LANCÉ.*
