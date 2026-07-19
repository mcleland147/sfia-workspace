# SFIA Studio — Flows, frames et inventaire Figma (vertical slice POC)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `36-poc-vertical-slice-ux-ui-flows-and-frames.md` |
| **Cycle** | 4 — UX/UI (correctif borné) |
| **Profil** | Standard |
| **Statut** | `validated-for-versioning` — inventaire frames/états **validé Morris** ; merge PR = GO distinct |
| **fileKey** | `lrjA1WEyRpL05vKR8k29LO` |
| **Page** | `UX-B — POC Vertical Slice` (`51:2`) |
| **Companion** | [`35`](./35-poc-vertical-slice-ux-ui-contract.md) · [`37`](./37-poc-vertical-slice-ux-ui-decision-pack.md) |
| **Base Git** | `eb180638ad334a29a86b9fb757f401814003a0d8` |

> Inventaire des frames = **storyboard d’états** validé Morris sur le fond.
> **Dix états, pas dix routes.** Quatre vues P0 = structure applicative de référence. Merge PR = GO distinct.

---

## 1. Pages Figma

| Page | node ID | Rôle |
|------|---------|------|
| `UX-B — P0` | `0:1` | Référence validée — **non modifiée** |
| `UX-B — POC Vertical Slice` | `51:2` | Frames VS candidates |

---

## 2. Frames sources P0 (lues, non modifiées)

| Frame | node ID | Dimensions |
|-------|---------|------------|
| P0-00C — Nouvelle demande | `19:2` | 1440 × 1024 |
| P0-01C — Vue synthèse | `22:2` | 1440 × 1024 |
| P0-02C — Cycle actif | `22:133` | 1440 × 1024 |
| P0-03C — Décision Morris | `22:270` | 1440 × 1024 |

---

## 3. Modèle — dix états → quatre vues P0

| Vue applicative P0 | États VS-UX | Delivery cible |
|--------------------|-------------|----------------|
| Nouvelle demande | 01, 02, 03 | États / panneaux dans route existante |
| Décision Morris / Gate | 04 | 4 actions gate |
| Cycle actif | 05, 06, 07, 08 | Stepper / variantes |
| Décision Morris finale | 09 | Phase post-verdict |
| Vue synthèse / clôture | 10 | Synthèse **slice courant** seul |

Toute **nouvelle route** = arbitrage Morris distinct (hors correctif).

---

## 4. Inventaire frames vertical slice

| Frame (état) | node ID | Dimensions | Vue P0 | Étape |
|--------------|---------|------------|--------|-------|
| VS-UX-01 — Nouvelle demande | `51:3` | 1440 × 1024 | Nouvelle demande | 1 |
| VS-UX-02 — Qualification en cours | `51:139` | 1440 × 1024 | Nouvelle demande | 2 |
| VS-UX-03 — Qualification proposée | `51:277` | 1440 × 1024 | Nouvelle demande | 3 |
| VS-UX-04 — Gate Morris | `51:415` | 1440 × 1024 | Décision / Gate | 4 |
| VS-UX-05 — Exécution | `51:540` | 1440 × 1024 | Cycle actif | 5 |
| VS-UX-06 — Rapport disponible | `51:678` | 1440 × 1024 | Cycle actif | 6 |
| VS-UX-07 — Analyse GPT | `51:816` | 1440 × 1024 | Cycle actif | 7 |
| VS-UX-08 — Verdict proposé | `51:954` | 1440 × 1024 | Cycle actif | 8 |
| VS-UX-09 — Décision Morris | `51:1079` | 1440 × 1024 | Décision finale | 9 |
| VS-UX-10 — Clôture | `51:1204` | 1440 × 1024 | Synthèse / clôture | 10 |

Lien : https://www.figma.com/design/lrjA1WEyRpL05vKR8k29LO?node-id=51-2

---

## 5. Variantes / annotations

| Variante | node ID | Dimensions | Rôle |
|----------|---------|------------|------|
| VS-UX-VAR — Loading GPT | `52:2` | 720 × 420 | Phase active + FinOps |
| VS-UX-VAR — Erreur fail-closed | `52:10` | 720 × 420 | Rejet GPT |
| VS-UX-VAR — STOP Morris | `52:18` | 720 × 420 | STOP prioritaire |
| VS-UX-VAR — GO invalide | `52:26` | 720 × 420 | Invalidation ancrage |

**Supprimée (correctif) :** `VS-UX-NOTE — Gate 4 actions` (`52:34`) — redondante après 4e action explicite.

---

## 6. Contenu fonctionnel par état

### VS-UX-01 … 03 — vue Nouvelle demande
Inchangés fonctionnellement (saisie → qualif → proposition). Aucun GO.

### VS-UX-04 — Gate Morris (**correctif**)
- Dossier ancré : requestId, contractId, contractHash, branche, HEAD, allowlist, autorité, horodatage.
- **Quatre actions explicites :**
  1. **GO** — autoriser Cursor sandbox
  2. **NO-GO** — refuser l’exécution (pas de spawn)
  3. **Demander une correction** (CORRIGER) — re-qualification
  4. **Abandonner** — visible, destructif (traitement danger), confirmation, conséquence « état abandonné », **aucune** action Git distante
- **Abandonner ≠ NO-GO ≠ STOP**
- Invalidation GO = bandeau / variante **séparée** (pas un substitut à Abandonner)

### VS-UX-05 … 08 — vue Cycle actif
Inchangés (exécution → rapport → analyse → verdict candidat).

### VS-UX-09 — Décision Morris finale
Clôturer · Corriger · Relancer (nouveau GO) · Abandonner — hors Git groupé.

### VS-UX-10 — Clôture (**correctif**)
Affiche **uniquement** le vertical slice courant :
- requestId · statut final · décision Morris
- fichier Markdown produit · rapport & preuves
- appels GPT (n / À définir) · réserves
- traçabilité branche / HEAD / contractHash
- prochaines actions candidates **séparées**
**Retiré :** portfolio multi-projet / lignes héritées P0 hors contexte.
**Aucun** claim MVP / production-ready.

---

## 7. Transitions UX

```text
01 → 02 (Qualifier)
02 → 03 (qualif OK) | erreur/STOP
03 → 04 (Ouvrir gate) | correction → 02
04 → 05 (GO) | NO-GO → clôture négative | Abandonner → abandonné | correction → 02
05 → 06 | STOP → stoppé
06 → 07
07 → 08 | fail-closed
08 → 09
09 → 10 | correction/relance (nouveau GO) | abandon
```

---

## 8. Distinction Abandonner / NO-GO / STOP

| Action | Moment | Effet | Git distant |
|--------|--------|-------|-------------|
| **STOP** | Pendant qualif / exec / analyse | Interrompt activité en cours → `stoppé` | Non |
| **NO-GO** | Gate pré-exécution | Refuse spawn Cursor | Non |
| **Abandonner** | Gate (et décision finale) | Cycle → `abandonné` après confirmation | Non |
| **Invalidation GO** | Si hash/HEAD/branche/allowlist change | GO invalide — re-gate | Non |

---

## 9. Écarts au P0 (après correctif)

| Écart | Traitement |
|-------|------------|
| 10 états vs 4 vues | Mapping §3 — **pas** 10 routes |
| Gate 4 actions | Matérialisé sur VS-UX-04 |
| Clôture vs synthèse | Contenu slice-only ; portfolio générique retiré |
| Note 52:34 | **Supprimée** |

---

## 10. Accessibilité (rappel Abandonner)

- Nom accessible : « Abandonner le cycle »
- Danger textuel + style (pas couleur seule)
- Confirmation focusable clavier
- Conséquence lisible
- Tab order : options → confirmation → confirmer

---

## 11. Limites

- Chrome topbar (CTA « Interv360 », pills héritées) peut rester générique — hors nettoyage portfolio.
- Variantes = annotations 720×420.
- Frames VS toujours **candidates** jusqu’à validation finale Morris.
