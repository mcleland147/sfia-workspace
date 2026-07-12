# Famille de prompts — Figma Fidelity Gate / Spike

**Type :** Prompts Cursor / IA
**Domaine :** UX/UI — fidélité Figma design-to-code
**Statut :** Draft — capitalisé depuis Chantiers360 v2 (PR #104, #105)
**Usage :** Réutilisable
**Standard associé :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-figma-fidelity-gate-standard.md`
**Dossier :** `prompts/ux-ui/`

> **Référence d'application :** Chantiers360 v2 — `projects/chantiers360-v2/06-figma-fidelity-spike/`, PR #104 (spike), PR #105 (alignement post-spike).

---

## 1. Objectif

Cette famille de prompts couvre le **micro-cycle Figma Fidelity Spike** :

- ouvrir un spike borné (une frame, mock data) ;
- documenter la revue Morris D1/D2/D3 ;
- préparer PR readiness ;
- réaliser post-merge check ;
- aligner la documentation projet post-merge si nécessaire.

Ces prompts **ne doivent pas** :

- lancer delivery INC-01 ou delivery applicatif ;
- ajouter DB / Drizzle / SQL / migration / auth ;
- modifier backlog, design, captures Figma ;
- inférer GO delivery depuis validation spike ;
- consulter Chantiers360 V0.

---

## 2. Règles générales

- **Une tâche Cursor** = un périmètre explicite (ouverture spike, revue, readiness, post-merge, alignment).
- **Git** = source de vérité.
- **Morris** = D1/D2/D3 et GO delivery séparé.
- **Pas de push / PR / merge** sans demande explicite Morris.
- Spike validé **≠** GO delivery.

---

## 3. Prompts de la famille

### PROMPT-FFG-001 — Ouvrir Figma Fidelity Spike

**Usage :** Démarrer le micro-cycle spike après design P1 et architecture technique validés.

**Entrées :** frame cible, node ID, capture repo, stack validée, garde-fous M8/M9.

**Actions :** créer branche `cycle/<project>-figma-fidelity-spike` ; implémenter route minimale + composants + mock data ; docs `06-figma-fidelity-spike/` ; `npm run lint` + `npm run build`.

**Interdit :** INC-01, DB, auth, autres routes, modification `03-backlog/` / `04-design/`.

**Référence pilote :** commit `dc5cb58` — Chantiers360 v2.

---

### PROMPT-FFG-002 — Revue Morris D1/D2/D3

**Usage :** Après revue visuelle capture vs `npm run dev`.

**Actions :** documenter D1 (fidélité pixel-close), D2 (corrections bloquantes), D3 (GO delivery — séparé) dans `2026-07-06-spike-decisions.md` ; mettre à jour `2026-07-06-visual-comparison-report.md`.

**Invariant :** D3 non accordé par défaut si Morris n'a pas explicitement donné GO delivery.

**Référence pilote :** commit `6d44882` — Chantiers360 v2.

---

### PROMPT-FFG-003 — PR Readiness Figma Fidelity Spike

**Usage :** Avant push et création PR spike.

**Actions :** vérifier branche, diff limité au périmètre spike, garde-fous, lint/build, docs 5/5, D1/D2/D3 documentés ; rapport READY / NOT READY.

**Interdit :** push, PR, merge sans demande.

---

### PROMPT-FFG-004 — Post-merge Figma Fidelity Spike

**Usage :** Après merge PR spike sur `main`.

**Actions :** `git pull` main ; vérifier spike présent ; relancer lint/build ; confirmer gates M8/M9 ; confirmer D3/M7 non accordé ; rapport POST-MERGE OK / WITH RESERVES / NOT OK.

**Interdit :** lancer delivery ; modifier code sauf si écart bloquant signalé à Morris.

---

### PROMPT-FFG-005 — Alignement documentaire post-spike

**Usage :** Si statut projet obsolète après merge spike (ex. « PR readiness à préparer », « app non créée »).

**Actions :** branche `docs/<project>-post-spike-alignment` ; mettre à jour README, framing, spike-readiness, validation-and-delivery-readiness — **documentation uniquement**.

**Interdit :** modifier `app/`, code, package, backlog, design.

**Référence pilote :** PR #105 — Chantiers360 v2.

---

## 4. Liens avec le Prompt Catalog v1.1

| Prompt FFG | Prompt cards génériques complémentaires |
|------------|----------------------------------------|
| FFG-003 | Validate PR Readiness, Prepare PR Summary |
| FFG-004 | Write Post-Merge Status |
| FFG-005 | Execute Documentation Change |
| Capitalisation | Capitalize Method Asset |

Templates : `prompts/templates/2026-07-04-05-validate-pr-readiness.md`, `07-write-post-merge-status.md`, `08-capitalize-method-asset.md`.

**Templates FFG dédiés longs :** cycle ultérieur — cette famille documente les intentions opérationnelles.

---

## 5. Statut

| Élément | Statut |
|---------|--------|
| Famille documentée | ✅ Draft |
| Templates complets FFG-001 à 005 | ⏳ Cycle ultérieur |
| Intégration Prompt Catalog v1.1 | ⏳ Réconciliation future |

---

*Référentiel SFIA — Figma Fidelity Gate prompt family — capitalisé depuis pilote Chantiers360 v2.*
