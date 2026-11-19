# SFIA Studio Next — FULL Review Pack
## Ensemble 06 / Journal V4 — Décisions UX + explication contextuelle
**Processus** SFIA v2.6 · **Cycle** DELIVERY CORRECTIF INTÉGRÉ · **Profil** CRITICAL  
**Date** 2026-11-19 · **NO RELEASE** · **NO PRODUCT PUSH/PR/MERGE** · **STABLE NOT AVAILABLE**

---

## 1. Git truth

| Champ | Valeur |
|---|---|
| Repo | `mcleland147/sfia-workspace` |
| Branche | `sfia/next-journal-delivery-20261119` |
| HEAD candidat (code) | `5f6e2f3860993acd35d176f60e6a7f0ca69d3a3d` |
| Tree | `9f077b3b10b752974d94f7f33e633c384d0c5101` |
| Base `main` | `d3d199adb782462b93467934f5f1e8a0c98fb492` |
| Parent RECETTE | `d3950948` / BUILD `2HWeuv_daXJXjd5PstRO` |
| Docs cutover follow-up | commit docs as-built après cutover (même cycle) |
| Contrat rapporté (obsolète) | `02e24e42` / `7yhVJFP0…` — **servi réellement avant ce cycle** : `d3950948` |

### Statut local (pré-modifs)

Branche delivery active ; worktrees RECETTE historiques présents ; untracked `.tmp-sfia-review/` / scripts captures.

---

## 2. Sources consultées

- Gouvernance SEF / roadmap / environnements / versioning (lecture)
- `journal-contrat-fonctionnel-ux-candidat.md` §§6.3–6.4
- `contrat-technique-journal.md` §5.4 / §5.6 / §16
- Matrice convergence Journal — **lecture seule**
- As-built + delivery-history E06
- Figma `itgvCulInEnFY6DvgIegvP` frames `860:58` / `860:136` / `860:251` / `860:360` (screenshots + design context)
- Code : `ProjectJournal.tsx`, `journal.ts`, `journal-editorial.ts`, `page.tsx`, D6 `human_decisions`

---

## 3. Diagnostic précis

### Symptômes CampusNova (RECETTE)

Décision `dec_ae40c887-…` EN VIGUEUR (`APPLICABLE` / `PROJECT`) :

1. Intitulé = paragraphe = énoncé D6 entier
2. Même texte répété liste / hero / choix
3. Description = troncature 140 car. du même énoncé
4. Raisonnement vide (0 row `knowledge_decision_explanation_revisions`)
5. Sources = placeholder générique
6. Meta `RECORD_DECISION · PROJECT` + `scope · applicable`
7. Labels 40/60 utilisaient déjà les libellés vue agrandie

### Cause racine (pipeline)

```
HumanDecision.statement (D6)
  → getJournalProjection (+ explanation D4 si présente)
  → GET /journal
  → page.tsx (drop sourceKind/sourceRef)
  → ProjectJournal : title = blurb = choice = statement
```

- `appendDecisionExplanationRevision` **jamais appelé en production** (tests/seed seulement)
- Message source réel : `USER_MESSAGE` / `msg_0df71c31-…` contient `**Motivation :**` Lyon/Lille/Bordeaux — non projeté
- **Aucun bug D6** : l’acte est correctement stocké ; la projection UI était pauvre

---

## 4. Correctif (sans mutation D6)

| Couche | Changement |
|---|---|
| `journal-editorial.ts` | `composeDecisionDisplayTitle/Summary/Choice` · extract motivation marquée · labels métier scope/kind |
| `journal.ts` | `originSources` via `qualifyProvenanceSource` · `sourcedMotivationExcerpt` si Motivation explicite |
| `ProjectJournal.tsx` | Slots distincts · Figma 40/60 vs agrandi · CTA sources · restrictions filtrées par `originDecisionId` |
| `page.tsx` | Passe `sourceKind` / `sourceRef` / `originSources` / excerpt |
| `tokens.css` | Grille autorité/histoire + CTA cheminement |
| Focus | Highlight Journal→Travail 5.2s (flake deep-link) |

### Exemple projection CampusNova (display-only)

| Slot | Valeur projetée |
|---|---|
| Titre | `Conditions de confirmation d'une réservation` |
| Résumé | `Le fonctionnement cible des trois centres pilotes` |
| Choix | énoncé D6 **intégral** (415 car.) |
| Pourquoi | extrait Motivation du message source **si** présent ; sinon indisponibilité honnête |
| Autorité | `Pilote · Projet` · `Projet · en vigueur` |
| D6 DB | statement / state / scope **inchangés** (vérifié post-cutover) |

**Hors mandat / dette :** pas de backfill D4 `appendDecisionExplanationRevision` sur CampusNova historique ; pas de second registre ; Subjects non rouverts.

---

## 5. Fichiers touchés (responsabilités)

| Fichier | Rôle |
|---|---|
| `journal-editorial.ts` | Helpers purs display |
| `journal.ts` | Projection origines |
| `ProjectJournal.tsx` | Rendu Décisions |
| `tokens.css` | Layout CTA / grille |
| `page.tsx` | Mapping client |
| `NoraConversation.tsx` | Durée focus marker |
| Tests unit / PG / e2e | Gates |
| as-built / delivery-history | Identité cutover |

---

## 6. Diff utile (parent → HEAD)

`d3950948..5f6e2f38` ≈ +568 / −49 (hors docs follow-up) — voir `git show 5f6e2f38`.

Points clés :
- Plus de triple répétition `statement` dans title/lede/choice
- Labels `CHOIX RETENU` / `POURQUOI CE CHOIX ?` en 40/60 ; `LE CHOIX RETENU` / `LE RAISONNEMENT…` en agrandi
- Suppression affichage brut `PROJECT` / `applicable`

---

## 7. Vérité D6 avant / après

| | Avant | Après |
|---|---|---|
| `statement` | long paragraphe (autorité) | **identique** |
| `state` | `APPLICABLE` | **identique** |
| `scope` | `PROJECT` | **identique** (label UI « Projet ») |
| Explanation D4 | absente | absente (pas de backfill) |
| Affichage | statement partout | titre/résumé/choix séparés |

---

## 8. Tests

| Gate | Résultat |
|---|---|
| Unit `journal-decision-editorial` | PASS (7) |
| Unit editorial density / E05 freeze | PASS |
| PG `journal-d4-revisions` (19) | PASS |
| Playwright `journal-v4-figma-captures` | PASS |
| Playwright `journal-v4-parcours` | PASS (seul / suite séparée ; flake rare si chaîné lourd après captures — deep-link focus durci) |
| `tsc --noEmit` | PASS |
| Lint scoped | warnings préexistants seulement |
| LIVE auto | **NOT RUN** (mandat) |

---

## 9. Figma ↔ runtime

| Frame | Attendu | Runtime |
|---|---|---|
| 860:58 liste | titre court + sous-texte + statut | titre dérivé + résumé + EN VIGUEUR |
| 860:136 40/60 | CHOIX RETENU / POURQUOI / AUTORITÉ ET PORTÉE / HISTOIRE / CTA sources | labels + grille + CTA |
| 860:251 recherche | filtre client | inchangé (filtre statement/explanation) |
| 860:360 agrandi | LE CHOIX RETENU / RAISONNEMENT / CONTEXTE / REPÈRES | labels + aside |

Captures e2e : `09-runtime-860-136-…`, `11-runtime-860-360-…` (artefacts Playwright run).

---

## 10. RECETTE

| Champ | Valeur |
|---|---|
| URL | `http://127.0.0.1:3200` |
| Service | `com.sfia.studio.next.recette.ml4d-ux004` |
| DB | `sfia_next_recette_ml4` @ 5434 |
| SOURCE_SHA | `5f6e2f38…` |
| BUILD_ID | `tE1TFcAqSGfCVuglJygA` |
| Next disk | `d58L2wkEm_1F-BPDf0wJW` |
| Worktree | `…/recette-build-5f6e2f38` |
| Counters | 24 / 612 / 197 / 6 / decisions=1 **COUNTERS_OK** |
| Dump | `…/ml4d-e06-journal-20261119-pre-5f6e2f38/` |
| Rollback | `ROLLBACK-TO-d3950948.sh` |
| Login | 200 |

---

## 11. Réserves

1. Explication D4 absente sur décision CampusNova historique — motivation via extrait message seulement si marquée ; pas de synthèse D4 inventée.
2. Titre dérivé = heuristique fidèle (pas hardcode CampusNova) — objectRef court reste prioritaire pour les nouvelles décisions.
3. Wiring production `decisionHint` → `appendDecisionExplanationRevision` **non livré** ce cycle (évite écriture D4 non demandée) — dette pour prochain GO.
4. Flake intermittent deep-link focus si suite Playwright très lourde enchaînée — durci à 5.2s ; PASS isolé confirmé.

---

## 12. Verdict Cursor

**JOURNAL DECISIONS UX CORRECTIVE VERIFIED — RECETTE TECHNICALLY AVAILABLE — MORRIS UAT PENDING**

Aucune Gate C · Aucun STABLE · Aucun ADOPTED · Aucune UAT par déduction.

### Instruction SFIA v2.6 §9.1

ChatGPT doit relire le **handoff canonique** publié sur `sfia/review-handoff` (`sfia-review-handoff/latest-chatgpt-review.md`) — pas ce brouillon local seul — avant avis produit.
