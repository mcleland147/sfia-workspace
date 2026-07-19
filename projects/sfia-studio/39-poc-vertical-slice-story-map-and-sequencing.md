# SFIA Studio — Story map et séquencement du vertical slice POC

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `39-poc-vertical-slice-story-map-and-sequencing.md` |
| **Cycle** | 5 — Backlog / user stories |
| **Profil** | Standard |
| **Statut** | `validated-for-versioning` — story map et séquencement A–E **validés Morris** ; incrément A **retenu** ; delivery non autorisé |
| **Branche** | `backlog/sfia-studio-poc-vertical-slice` |
| **Base Git** | `722f586855743f87a6d3318ccec2dd6224676e28` |
| **Companion** | [`38`](./38-poc-vertical-slice-backlog.md) · [`40`](./40-poc-vertical-slice-backlog-decision-pack.md) |
| **Décisions Morris** | `VS-BL-CAND-01` (A→E) · `VS-BL-CAND-03` (Incr. A premier périmètre) validées |

> Story map des **dix états** sur **quatre vues P0**.
> Séquencement A–E validé ; **delivery** de chaque incrément soumis à GO Morris distinct.

---

## 1. Backbone — dix étapes / états

```text
01 Nouvelle demande
 → 02 Qualification en cours
 → 03 Qualification proposée
 → 04 Gate Morris
 → 05 Exécution
 → 06 Rapport disponible
 → 07 Analyse GPT
 → 08 Verdict proposé
 → 09 Décision Morris
 → 10 Clôture
```

Variantes transverses : Loading · Erreur fail-closed · STOP · GO invalide.

---

## 2. Mapping états → quatre vues P0

| Vue P0 (route existante) | États VS-UX | Stories principales |
|--------------------------|-------------|---------------------|
| **Nouvelle demande** `/nouvelle-demande` | 01, 02, 03 | 001–008, 005, 006, 030, 032 |
| **Décision Morris / Gate** `/decision` | 04 | 009–012, 032 |
| **Cycle actif** `/cycle-actif` | 05, 06, 07, 08 | 017–024, 019, 020, 032 |
| **Décision finale** `/decision` (phase post-verdict) | 09 | 025, 027 |
| **Vue synthèse / clôture** `/synthese` | 10 | 026 |

**Règle :** états / panneaux / transitions — **pas** dix routes.
Toute 5e route VS = STOP / arbitrage Morris.

---

## 3. Story map (backbone × stories)

| Étape | Stories | Dépendances verticales |
|-------|---------|------------------------|
| 01 | 001, 002, 003 (abandon pré-qualif), 031 | — |
| 02 | 004, 005, 006, 030, 032 | 001 |
| 03 | 007, 008 | 004–006 |
| 04 | 009, 010, 011 (4 actions · VS-FR-04 / VS-UX-FR-15/16), 012, 032 | 007, 009 |
| 05 | 013*, 014, 017, 018, 019, 020, 032 | 011 GO, 017 |
| 06 | 021, 022 | 018 |
| 07 | 023, 030, 032 | 021–022 |
| 08 | 024 | 023 |
| 09 | 025, 027 | 024 |
| 10 | 026 | 025 |
| Transverse | 015, **016 (N16 reprise session)**, 028, 029, 033 | Continu |

\*013 adaptateur commence Incr. B, critique avant live.

**Traçabilité N16 :** couverture primaire = **VS-BL-US-016** (+ US-033 QA) — **pas** US-003.

---

## 4. Dépendances horizontales

| Lien | Nature |
|------|--------|
| 002 IDs ↔ toutes | Corrélation obligatoire |
| 013 adaptateur ↔ 014/017/018 | Pas de live UI sans adaptateur contrôlé |
| 012 invalidation ↔ 017 | Même ancrage |
| 022 pack ↔ 023/025 | Blocage positif |
| 015 harness autonome ↔ 018 | Chemin de contrôle parallèle |
| 028 secrets ↔ toutes | Non-négociable |

---

## 5. Chemin critique

```text
US-001 → 004 → 007 → 009/011 → 013/017 → 018 → 021/022 → 023/024 → 025 → 026
```

Parallélisable avec prudence : 028/029 (transverse), 015 (harness-only), 031 (shell mapping A).

**Ne pas paralléliser :** gate (011) avec spawn (018) ; analyse (023) avant pack (022) ; live GPT/Cursor avant Incr. B.

---

## 6. Incréments A–E (séquencement validé Morris ; delivery non autorisé)

> **Incrément A** = premier périmètre delivery **futur** retenu (`VS-BL-CAND-03`). Aucun GO delivery consommé ici.

### Incrément A — Cockpit statique gouverné (**retenu** — premier périmètre futur)

| Champ | Contenu |
|-------|---------|
| Objectif | Prouver mapping 10 états / 4 vues avec données mockées |
| Stories | 001–003, 007*, 010*, 011*, 026*, 031, 032 (UI mock), 028 (checklist) |
| Live | Aucun |
| Sortie | Parcours UI navigable ; Abandonner visible ; clôture slice-only mock ; **pas** 10 routes |
| Gate suivant | Revue visuelle + GO Incr. B (après G-VS-DEL-A) |
| Preuve | Screenshots / Playwright états |

\*Versions mock du dossier gate / qualif.

### Incrément B — Studio ↔ harness contrôlé non live

| Champ | Contenu |
|-------|---------|
| Objectif | Contrat, gates, journal, événements via ports fixture |
| Stories | 009, 012–017, 014, 015, 016, 019 (STOP simulé), 021–022 (fixture), 029, 033 (N fixture) |
| Live | Aucun GPT/Cursor réel |
| Sortie | BeB fixture Studio→harness→preuves ; harness autonome OK |
| Gate | GO avant Incr. C |
| Preuve | Journal + proofStore + tests harness existants |

### Incrément C — Qualification GPT réelle bornée

| Champ | Contenu |
|-------|---------|
| Objectif | Qualif live fail-closed + FinOps |
| Stories | 004–008, 005, 006, 030 (qualif) |
| Live | GPT qualif uniquement (flags) |
| Sortie | QualificationCandidate validée ou rejetée ; compteur ; no retry ; plafond À définir |
| Gate | **G-VS-LIVE-GPT** |
| Preuve | Observation GPT + UI |

### Incrément D — Cursor sandbox réel

| Champ | Contenu |
|-------|---------|
| Objectif | Markdown sandbox après GO revalidé |
| Stories | 017–021, 019, 020, 012 (runtime) |
| Live | Cursor sandbox |
| Sortie | output.md · remote=0 · STOP/timeout · rapport |
| Gate | **G-VS-LIVE-CURSOR** |
| Preuve | Fichier sandbox + rapport (capitaliser spike 31) |

### Incrément E — Analyse GPT et clôture

| Champ | Contenu |
|-------|---------|
| Objectif | Verdict candidat + décision Morris + clôture |
| Stories | 022–027, 023, 024, 030 (analyse) |
| Live | GPT analyse |
| Sortie | GptVerdictCandidate · MorrisFinalDecision · CycleSummary · réserves |
| Gate | Clôture humaine ; pas de claim MVP |
| Preuve | Verdict + décision journalisés |

---

## 7. Ordre delivery recommandé

```text
A (cockpit mock)
 → B (adaptateur + fixtures)
 → C (GPT qualif live)
 → D (Cursor live)
 → E (analyse + clôture)
```

Gates humains entre A→B, B→C, C→D, D→E.

---

## 8. Challenge du séquencement

| Question | Réponse conception backlog |
|----------|----------------------------|
| Utile maintenant ? | Oui — isole UI avant live |
| Dette créée ? | Adaptateur B = dette acceptée si reporté |
| Plus simple ? | Harness-only déjà prouvé ; A+B ajoutent Studio gouverné |
| Intégration trop précoce ? | Évitée : live seulement C/D/E sous gates |
| Gate Morris visible ? | Oui — 011 dès A mock, réel dès B/D |
| Preuve mesurable ? | Oui par incrément |
| MVP implicite ? | Non — scénario Markdown preuve + claims interdits |

**Option alternative (candidat VS-BL-CAND) :** B avant A partiel (CLI d’abord) — plus rapide tech, moins de preuve UX Studio. Non retenue comme reco principale.

---

## 9. Risques de parallélisation

| Parallelisme | Risque | Conseil |
|--------------|--------|---------|
| A ∥ B | Divergence contrat UI | Sérialiser A puis B ou sync contrat |
| C ∥ D | Double live + FinOps | Interdit sans GO |
| E avant D | Verdict sans exécution | Interdit |
| 031 ∥ 013 | Routes vs adaptateur | 031 d’abord (A) |

---

## 10. Critères de sortie par incrément

| Incr. | Sortie minimale |
|-------|-----------------|
| A | 10 états mock dans 4 vues ; Abandonner ; clôture slice-only |
| B | GO hash/HEAD fixture ; journal ; harness sans Studio |
| C | Qualif live fail-closed ; FinOps visible |
| D | Markdown sandbox ; STOP/timeout ; remote=0 |
| E | Verdict candidat ; clôture Morris ; pack complet |

**Critères « slice prouvé » (`VS-BL-CAND-10` validée) :** A–E complétés sous gates + VS-AC-01…12 avec réserves documentées — **≠** MVP ; déclaration future uniquement après deliveries sous GO.

---

## 11. Observations code (lecture seule)

| Actif | Usage incrément |
|-------|-----------------|
| 4 routes + shell + UI kit | A |
| Fixtures app | A |
| Harness GateValidator / fixtures GPT-Cursor / journal | B |
| openaiRealSpike / cursorRealSpike / e2e sandbox | C/D (sous flags) |
| Pas d’adaptateur Studio↔harness | B (à créer en delivery) |
| Pas de CI Studio | Hors backlog delivery POC |

---

## 12. Synthèse

| Élément | Valeur |
|---------|--------|
| Vues | 4 |
| États | 10 + 4 variantes |
| Stories mappées | 33 |
| Incréments A–E | Séquencement **validé** ; Incr. A **retenu** ; delivery = GO distinct |
| Versionnement | Commit / push / draft PR autorisés ; merge = GO distinct |
