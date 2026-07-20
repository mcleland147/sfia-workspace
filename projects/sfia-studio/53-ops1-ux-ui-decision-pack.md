# SFIA Studio — Decision pack UX/UI OPS1

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `53-ops1-ux-ui-decision-pack.md` |
| **Cycle** | 4 — UX/UI |
| **Profil** | Standard |
| **Gate d’ouverture** | `G-OPS1-UX` — consommé |
| **Gate de validation** | `G-OPS1-UX-VAL` — **consommé** — Morris — 2026-07-20 16:52 CEST — **VALIDATION AVEC RÉSERVES** |
| **Baseline Git** | `origin/main` @ `bfa2cdf949f417fcbce47d1687824c223eeed8f7` |
| **Branche** | `design/sfia-studio-ops1-ux-ui` |
| **Statut** | `ux-decisions-validated-with-reservations` |
| **Companions** | [`51`](./51-ops1-ux-ui-contract.md) · [`52`](./52-ops1-visual-contract-and-figma-spec.md) |
| **Horodatage production** | 2026-07-20 16:15 CEST |
| **Horodatage validation Morris** | 2026-07-20 16:52 CEST |

> Décisions `OPS1-UX-CAND-01`…`20` **VALIDATED WITH RESERVATIONS** sous `G-OPS1-UX-VAL` (2026-07-20 16:52 CEST).
> Identifiants `OPS1-UX-CAND-*` **conservés** (suffixe historique stable).
> Réserves UX-R01…UX-R04 et FD-CAND-13/15/20/26 **ouvertes**. Aucun cycle suivant ouvert automatiquement.

---

## Convention

Chaque décision : observation · héritage · hypothèse · options · recommandation · décision candidate · impacts · risques · dette · réserves · sujets routés · décision Morris · statut.

---

## OPS1-UX-CAND-01 — Architecture générale de l’espace OPS1

| Champ | Contenu |
|-------|---------|
| **Observation** | OPS1 exige conversation + action + gate + preuves dans un shell gouverné. |
| **Héritage** | FA-CAND-16/19 ; shell P0 validé historiquement |
| **Hypothèse** | Continuité Product premium réduit la dette cognitive. |
| **Options** | (A) Shell neuf ; (B) Shell P0 + zoning OPS1 |
| **Recommandation** | (B) |
| **Décision candidate** | Espace OPS1 = shell P0 (rail/topbar/workspace/copilote) + zones OPS1. |
| **Impacts** | Frames clonées ; copilote advisory |
| **Risques** | Résidus microcopy P0 |
| **Dette** | Polish libellés hérités |
| **Réserves** | — |
| **Routé** | Delivery UI ultérieur |
| **Morris attendu** | Valider continuité shell |
| **Décision Morris** | GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST` |

## OPS1-UX-CAND-02 — Conversation comme surface principale

| Champ | Contenu |
|-------|---------|
| **Observation** | Framing : conversation-first, pas formulaire. |
| **Héritage** | OPS1-CAND conversation ; CAP-03–05 |
| **Options** | (A) Formulaire dominant ; (B) Fil dominant |
| **Recommandation** | (B) |
| **Décision candidate** | Le fil conversationnel occupe l’espace principal. |
| **Impacts** | Abandon UX « Nouvelle demande » comme cible OPS1 |
| **Risques** | Friction vs P0 form |
| **Dette** | Purge hero qualification |
| **Décision Morris** | GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST` |

## OPS1-UX-CAND-03 — Action séparée du dialogue

| Champ | Contenu |
|-------|---------|
| **Observation** | Chat ≠ GO ; ProposedAction objet distinct. |
| **Héritage** | FR-003 ; FA-CAND-03 |
| **Options** | (A) Action dans bulles ; (B) Panneau séparé |
| **Recommandation** | (B) |
| **Décision candidate** | Panneau « Action candidate — NON AUTORISÉE » séparé. |
| **Décision Morris** | GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST` |

## OPS1-UX-CAND-04 — Présentation de l’allowlist

| Champ | Contenu |
|-------|---------|
| **Observation** | Allowlist exhaustive 1..n ; éligible ≠ global. |
| **Héritage** | FR-026–032 ; FD-CAND-20/26 OPEN |
| **Options** | (A) Résumé flou ; (B) Liste chemins + modes |
| **Recommandation** | (B) avec placeholders si chemins OPEN |
| **Décision candidate** | Allowlist lisible avant GO ; modes CONSULT/CREATE/MODIFY. |
| **Réserves** | Chemins exacts SCENARIO-VAL |
| **Décision Morris** | GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST` |

## OPS1-UX-CAND-05 — Positionnement du gate Morris

| Champ | Contenu |
|-------|---------|
| **Observation** | Quatre actions explicites requises. |
| **Héritage** | VS-UX-04 pattern ; FR-004 |
| **Options** | (A) Modale seule ; (B) Vue gate dédiée + strip |
| **Recommandation** | (B) |
| **Décision candidate** | Gate séparé ; strip GO / NO-GO / CORRIGER / ABANDONNER (`62:2`). |
| **Décision Morris** | GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST` |

## OPS1-UX-CAND-06 — Mécanisme de correction de l’action

| Champ | Contenu |
|-------|---------|
| **Observation** | CORRIGER et raffinement chat/structuré. |
| **Héritage** | FLOW-07/08 |
| **Décision candidate** | Raffinement via chat et/ou panneau (UX-04) ; CORRIGER ramène ici. |
| **Décision Morris** | GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST` |

## OPS1-UX-CAND-07 — Visualisation harness et Cursor

| Champ | Contenu |
|-------|---------|
| **Observation** | Harness fail-closed ; Cursor borné. |
| **Décision candidate** | États VALIDATING/REFUSED/EXECUTING visibles ; STOP sur exec. |
| **Décision Morris** | GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST` |

## OPS1-UX-CAND-08 — Rapport et diff multi-fichiers

| Champ | Contenu |
|-------|---------|
| **Héritage** | FR-031 ; CAP-15–16 |
| **Décision candidate** | Vue consolidée + détail par fichier ; incomplet bloque CLOSE. |
| **Décision Morris** | GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST` |

## OPS1-UX-CAND-09 — STOP

| Champ | Contenu |
|-------|---------|
| **Décision candidate** | STOP toujours distinct et accessible ; ≠ ABANDONNER / NO-GO. |
| **Décision Morris** | GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST` |

## OPS1-UX-CAND-10 — Erreurs et fail-closed

| Champ | Contenu |
|-------|---------|
| **Décision candidate** | Bandeaux FAIL-CLOSED non masqués (VAR-B/D/G) ; timeout ≠ GO. |
| **Décision Morris** | GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST` |

## OPS1-UX-CAND-11 — Historique et reprise

| Champ | Contenu |
|-------|---------|
| **Décision candidate** | Reprise = restauration journal + check Git ; ambiguïté → read-only/STOP. |
| **Décision Morris** | GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST` |

## OPS1-UX-CAND-12 — CLOSED lecture seule

| Champ | Contenu |
|-------|---------|
| **Héritage** | CLOSED immutable |
| **Décision candidate** | UX-10 lecture seule ; pas d’édition silencieuse. |
| **Décision Morris** | GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST` |

## OPS1-UX-CAND-13 — Continuation après CLOSE (option candidate)

| Champ | Contenu |
|-------|---------|
| **Observation** | FD-CAND-13 OPEN. |
| **Options** | (A) Résoudre mécanisme ; (B) Placeholder UX |
| **Recommandation** | (B) |
| **Décision candidate** | CTA « Continuer / session liée » **candidat** sans figer le mécanisme. |
| **Réserves** | **FD-CAND-13** |
| **Décision Morris** | GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST` |

## OPS1-UX-CAND-14 — FinOps

| Champ | Contenu |
|-------|---------|
| **Décision candidate** | Surfaces compteurs / alerte / confirmation ; chiffres = « À définir ». |
| **Réserves** | **FD-CAND-15** |
| **Décision Morris** | GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST` |

## OPS1-UX-CAND-15 — Responsive

| Champ | Contenu |
|-------|---------|
| **Décision candidate** | Desktop 1440×1024 storyboard ; tablette/mobile = règles doc 51, frames ultérieures. |
| **Dette** | Frames non desktop |
| **Décision Morris** | GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST` |

## OPS1-UX-CAND-16 — Accessibilité

| Champ | Contenu |
|-------|---------|
| **Décision candidate** | Clavier, focus, annonces, non-couleur-seule, contrastes AA cibles — contrat 51 §20. |
| **Décision Morris** | GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST` |

## OPS1-UX-CAND-17 — Design system et composants réutilisés

| Champ | Contenu |
|-------|---------|
| **Observation** | `search_design_system` vide ; pas de Code Connect. |
| **Décision candidate** | Réutiliser shell P0 par clone ; overlays AL locaux ; pas de nouvelle library publiée ce cycle. |
| **Dette** | Publication DS / tokens variables |
| **Décision Morris** | GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST` |

## OPS1-UX-CAND-18 — Liste et dimensions des frames

| Champ | Contenu |
|-------|---------|
| **Décision candidate** | 10 frames + 7 variantes @ **1440×1024** confirmées MCP — inventaire doc 52. |
| **Décision Morris** | GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST` |

## OPS1-UX-CAND-19 — États ≠ routes

| Champ | Contenu |
|-------|---------|
| **Héritage** | VS-UX-CAND-02 |
| **Décision candidate** | Storyboard ≠ routes ; mapping ≤4 vues P0. |
| **Décision Morris** | GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST` |

## OPS1-UX-CAND-20 — Verdict UX

| Champ | Contenu |
|-------|---------|
| **Décision candidate** | Contrats 51–52 + frames validés avec réserves sous `G-OPS1-UX-VAL`. |
| **Morris attendu** | _(consommé)_ Valider / corriger / rejeter — sans ouvrir backlog/tech/delivery. |
| **Décision Morris** | GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST` |

---

## Synthèse des statuts

| ID | Statut |
|----|--------|
| OPS1-UX-CAND-01…20 | **VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL** |

- **20** décisions validées avec réserves.
- **Aucune** décision UX candidate restante dans ce pack.
- `G-OPS1-UX-VAL` **consommé**.
- Réserves **UX-R01…UX-R04** ouvertes.
- Aucune ouverture automatique des cycles suivants.

### Association réserves (indicatif)

| Décisions | Réserves associées |
|-----------|-------------------|
| UX-CAND-15 (responsive) | UX-R01 |
| UX-CAND-01/17 (shell / DS) | UX-R02, UX-R03 |
| UX-CAND-13/14 (CLOSE / FinOps) | UX-R04 · FD-CAND-13/15 |
| UX-CAND-04 (allowlist / Campus360) | UX-R04 · FD-CAND-20/26 |
| Ensemble | UX-R04 (live, CI, isolation) |

---

## Gates

| Gate | État |
|------|------|
| `G-OPS1-UX` | Consommé (ouverture) |
| `G-OPS1-UX-VAL` | **Consommé** — Morris — 2026-07-20 16:52 CEST |
| `G-OPS1-SCENARIO-VAL` | Fermé |
| `G-OPS1-TECH-ARCH` | Fermé |
| `G-OPS1-BACKLOG` | Fermé |
| Delivery / live / MVP / production | Fermés |
| Commit / push / PR / merge | Fermés (jusqu’à GO distinct) |

---

## Réserves maintenues

**UX-R01…UX-R04** · FD-CAND-13/15/20/26 · FinOps numériques · cartographie Campus360 · branche · live · CI · isolation.

---

## Anti-claims

Pas de READY FOR DELIVERY · PRODUCTION READY · OPS1 PROVEN · MVP DEFINED · responsive implémenté · design system publié · FinOps/Campus360/live/CI/isolation résolus · backlog ou tech arch ouverts.

---

## Verdict

`ux-decisions-validated-with-reservations`

`SFIA STUDIO OPS1 UX/UI DECISIONS VALIDATED WITH RESERVATIONS`

20 décisions `OPS1-UX-CAND-01…20` validées avec réserves sous `G-OPS1-UX-VAL` (2026-07-20 16:52 CEST).
