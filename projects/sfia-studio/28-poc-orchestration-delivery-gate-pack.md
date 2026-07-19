# SFIA Studio — Gate pack delivery POC S1 (POC-G9 harness-only)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `28-poc-orchestration-delivery-gate-pack.md` |
| **Cycle** | 9 — QA corrective documentaire (statuts) ; fond Cycle 5 |
| **Profil** | Critical |
| **POC-G8** | **CONSOMMÉ** (backlog produit) |
| **POC-G9** | **CONSOMMÉ** — harness-only local |
| **POC** | **NON LANCÉ** (pas d’autonomie permanente) |
| **Delivery** | Harness versionné via **draft PR** (Cycle 13) — merge **fermé** |
| **Allowlist** | **VALIDÉE** pour incrément harness-only S1 |
| **Cursor** | **fixture** uniquement (réel **fermé**) |
| **Docker** | **Non retenu** pour l’incrément ; option future = gate Morris |
| **Base** | `main` @ `d45cc54…` |
| **Architecture** | Option B minimale (inchangée) |

> POC-G9 **consommé** pour harness-only. Code sous `harness/`. `app/**` intact. Cursor fixture only. Docker non retenu. Commit/PR delivery = gates séparés.

---

## 1. Couverture backlog

| Epic | Couvert dans `26` | Ready pour instruction delivery ? |
|------|-------------------|-----------------------------------|
| E1 Contrats | Oui | Couvert harness-only local |
| E2 Harness | Oui | Oui |
| E3 GitReader | Oui | Oui |
| E4 CursorPort | Oui | Oui — réel = spike |
| E5 Policy | Oui + `27` | Allowlist initiale **validée** harness-only |
| E6 Adaptateur | Oui | Oui — protocole ouvert |
| E7 Cockpit | Oui | **Fermé** — `app/**` interdit (POC-G9 harness-only) |
| E8 Sécurité | Oui | Oui |
| E9 Observabilité | Oui | Oui |
| E10 QA | Oui | Oui |
| E11 Démo | Oui | Should |

---

## 2. Prérequis POC-G9 — statut après consommation harness-only

Checklist **consommée** pour l’incrément harness-only :

1. Backlog `26` validé / intégré (#223) — **fait**.
2. Allowlist/denylist `27` **VALIDÉE POUR L’INCRÉMENT HARNESS-ONLY S1** — **fait** ; élargissement = nouveau GO.
3. Option B confirmée : Studio cockpit / adaptateur fin / harness autonome — architecture inchangée ; Studio/adaptateur **non** livrés dans cet incrément.
4. Hors périmètre confirmé : no remote write, no L5 global, no MVP — **en vigueur**.
5. Modes Cursor pour cet incrément : **fixture uniquement** — **fait** ; manuel/réel **fermés**.
6. Touch `app/**` : **non** — harness-only ; `app/**` **fermé**.
7. Stratégie de preuve (§5) — preuves locales harness produites ; relecture evidence requise.
8. Plan de réversibilité (§7) — **en vigueur**.
9. Techno/protocole non présentés comme définitifs — **en vigueur**.

**POC-G9 = CONSOMMÉ** pour harness-only local.
**Restent fermés :** UI/`app/**` · Cursor réel · Docker (non retenu) · **merge** · lancement autonome / industrialisation. *(commit/push/draft PR = GO Cycle 13 consommé)*
**POC global :** **non** validé comme réussi.

---

## 3. Risques delivery (harness-only / élargissements futurs)

| Risque | Sévérité | Mitigation |
|--------|----------|------------|
| Dérive Option C (orch. dans app) | Haute | Revues ; orch. hors `app/**` |
| Allowlist trop large | Haute | Allowlist initiale validée bornée ; défaut deny ; élargissement = GO |
| API Cursor inventée | Haute | Port + fixture ; spike avant « réel » |
| Seconde vérité UI | Haute | Statut dérivé journal |
| Écriture Git accidentelle | Haute | Denylist + tests A2 |
| Service permanent inutile | Moyenne | Processus local à la demande |
| Scope creep multi-scénario | Moyenne | S1 only |

---

## 4. Réserves conservées (architecture)

1. Cursor réel non prouvé — **fermé** pour cet incrément (fixture only).
2. Technologie harness ouverte (Node/TS candidat POC, pas Runtime produit définitif).
3. Protocole adaptateur ouvert — adaptateur/UI non livrés.
4. Allowlist initiale S1 **validée** pour le harness-only livré localement. Tout élargissement de chemins, commandes, modes Cursor ou effets Git nécessite un **nouveau GO Morris**.
5. `app/**` **fermé** — POC-G9 harness-only n’autorise pas `app/**`.
6. QA non-seconde-vérité.
7. Clôture AF séparée.
8. POC-G9 **consommé** pour harness-only ; draft PR Cycle 13 ; **merge** / lancement autonome / industrialisation **fermés**.
9. **Docker** n’est pas utilisé pour l’incrément harness-only. Toute introduction ultérieure nécessite une décision Morris distincte. Docker n’est ni retenu ni définitivement exclu pour la trajectoire future.

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

## 9. Décisions Morris — consommées / restantes

### Consommées (POC-G9 harness-only)

1. Allowlist `27` **validée** pour l’incrément harness-only S1.
2. Premier incrément **harness-only** autorisé (`app/**` intact / fermé).
3. Mode Cursor : **fixture uniquement**.
4. Commit/push/draft PR delivery = **CONSOMMÉ** (Cycle 13) ; **merge** = **fermé**.

### Restantes (nouveau GO requis)

1. Review / re-review des preuves harness.
2. Merge delivery (après review) — **non autorisé** ici.
3. Toute surface `app/**` / UI Studio.
4. Cursor manuel ou réel (spike + preuve).
5. Introduction Docker.
6. Tout élargissement allowlist.
7. Lancement autonome / industrialisation / clôture AF.

---

## 10. Verdicts

Verdict **futur candidat** (après preuves validées + démo + décisions Morris) — **non actuel** :

`POC S1 EVIDENCE COMPLETE — MORRIS POST-POC DECISION REQUIRED`

**Verdict documentaire courant (Cycle 9 QA) :**

`DOCUMENTARY GATE ALIGNMENT COMPLETE — HARNESS DELIVERY READY FOR EVIDENCE RE-REVIEW`

Le POC global n’est **pas** déclaré réussi, lancé en autonomie ou industrialisé.

---

## 11. Actions interdites (rappel)

`app/**` · Cursor réel · Docker (cet incrément) · **merge** delivery · lancement autonome / industrialisation · L5 · writes Git distantes · élargissement allowlist sans nouveau GO · choix techno/protocole définitifs sans preuve

*(POC-G9 harness-only déjà consommé — ne pas relire comme « ouverture interdite » du harness local.)*

---

*Gate pack — POC-G9 CONSOMMÉ harness-only — allowlist VALIDÉE (incrément) — draft PR Cycle 13 — merge FERMÉ — POC NON LANCÉ.*
