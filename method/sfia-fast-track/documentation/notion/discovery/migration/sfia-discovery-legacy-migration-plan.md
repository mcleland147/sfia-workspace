# Plan de migration legacy → Discovery — SFIA Notion (PD-07A)

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — plan Git · non exécuté |
| **Cycle** | PD-07A (préparation Git — migration legacy) |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **Source de vérité** | Git |
| **Branche** | `documentation/sfia-discovery-legacy-migration-plan` |
| **HEAD / base** | `9dd9dcfb4325b1b0fefaa39ba9c25899709b675c` |
| **Horodatage** | 2026-07-15 22:30 Europe/Paris (CEST) |
| **Inventaire lié** | [sfia-discovery-legacy-content-inventory.md](sfia-discovery-legacy-content-inventory.md) |
| **Exécution Notion** | **Interdite** dans PD-07A — réservée à PD-07B |

---

## 1. Objectif

Préparer une migration **vérifiable et réversible** des pages Notion legacy P0 (§00–11) vers l'architecture Discovery (Hub + Actes I–VII), sans perte documentaire, sans exposition excessive de méthode interne, et sans suppression.

---

## 2. Principes de migration

| # | Principe |
|---|----------|
| P1 | **Git prime** — les drafts et Actes Discovery restent la référence éditoriale |
| P2 | **Aucune suppression** — pas de DELETE |
| P3 | **Archivage uniquement après GO Morris** — Lot 5 · réversible |
| P4 | **Redirection avant archivage** — préserver les liens entrants |
| P5 | **Contenu unique d'abord** — reporter ou garder en annexe |
| P6 | **Confidentialité** — pas de prompt catalog, protected paths ni routage exhaustif dans le parcours Discovery |
| P7 | **Baseline v2.4** — cycles élargis = Candidate |
| P8 | **Discovery Candidate** — parcours pédagogique, non doctrine validée |
| P9 | **Lots ordonnés** — stop possible à chaque checkpoint |
| P10 | **Observation ≠ décision** — chaque archivage = décision page par page |

---

## 3. État source et état cible

### État source (legacy P0)

- Architecture page §00–11 définie dans Product Vision / Information Architecture / editorial P0.
- Brouillons Git présents pour §00–08 et §11.
- §09 absent (P1) · §10 sans draft Markdown (vue Base prévue).
- Espace Notion runtime : **à inventorier en Lot 0** (PD-07B).

### État cible (Discovery)

```text
Hub → I → II → III → IV → V → VI → VII
          + annexes Acte VII (cycles, routage, templates index, gouvernance,
            setup, documents référence, glossaire)
          + bases Référentiel / Cycles (embeds)
```

Sources cibles mergées (PR #196–#200) sous :

`method/sfia-fast-track/documentation/notion/discovery/editorial/`

---

## 4. Lexique des stratégies

| Code | Signification | Action Notion future |
|------|---------------|----------------------|
| KEEP_PRIMARY | Rester primaire temporairement | Aucune jusqu'à redirection |
| KEEP_ANNEX | Annexe sous / liée à Acte VII | Rattacher ou banner annexe |
| REDIRECT_TO_DISCOVERY | Pointer vers Hub / Acte | Bannière + lien · URL inchangée si possible |
| REPLACE_IN_PRIMARY_NAVIGATION | Retirer du parcours primaire | Nav cible = Discovery |
| MERGED_CONTENT_PRESERVED | Contenu absorbé | Redirection · conserver page jusqu'à Lot 5 |
| ARCHIVE_CANDIDATE_AFTER_VALIDATION | Archive Candidate | Lot 5 seulement · réversible |
| OUTSIDE_DISCOVERY_SCOPE | Hors parcours | Ne pas créer · ne pas forcer |
| NEEDS_MORRIS_DECISION | Ambigu | Stop gate Morris |

**DELETE interdit.**

---

## 5. Matrice complète §00–11

| Legacy | Action proposée | Destination Notion cible | Contenu unique à reporter | Stratégie |
|--------|-----------------|--------------------------|---------------------------|-----------|
| §00 Accueil | Remplacer parcours primaire | Hub Discovery | Aucun critique si Hub complet | REPLACE_IN_PRIMARY_NAVIGATION + REDIRECT_TO_DISCOVERY → ARCHIVE_CANDIDATE_AFTER_VALIDATION |
| §01 Comprendre | Fusion déjà réalisée | Acte II · extrait Acte V | Formulations uniques Lot 4 | MERGED_CONTENT_PRESERVED + REDIRECT_TO_DISCOVERY |
| §02 Valeur | Fusion déjà réalisée | Acte I · Acte VI | Anti-patterns Lot 4 | MERGED_CONTENT_PRESERVED + REDIRECT_TO_DISCOVERY |
| §03 Cycle | Déplacer / fusion | Acte III · Acte VII | Schéma cycle si absent Acte III | MERGED_CONTENT_PRESERVED + KEEP_ANNEX temporaire si besoin |
| §04 Cycles/profils | Renommer + simplifier | Acte VII Porte 1 · Base Cycles | Tableau 15 cycles Candidate | KEEP_ANNEX |
| §05 Routage | Réduire | Acte VII Porte 2 | Orientation categories | KEEP_ANNEX + REDIRECT_TO_DISCOVERY |
| §06 Templates/prompts | Index seulement | Acte VII Porte 3 · Référentiel | Index (pas catalog) | KEEP_ANNEX · NEEDS_MORRIS_DECISION si sur-exposition |
| §07 Gouvernance | Fusion | Acte V · Meta · Acte VII Porte 4 | Aucun critique attendu | MERGED_CONTENT_PRESERVED + REDIRECT_TO_DISCOVERY |
| §08 Mise en place | Conserver annexe | Acte VII Porte 5 | Checklists setup | KEEP_ANNEX |
| §09 Cas d'usage | Hors scope | P1 futur | N/A (absent Git) | OUTSIDE_DISCOVERY_SCOPE |
| §10 Docs référence | Conserver / créer vue | Acte VII Porte 6 · Base Référentiel | Index documents | KEEP_ANNEX ou NEEDS_MORRIS_DECISION |
| §11 Glossaire | Conserver annexe | Acte VII Porte 7 | Ensemble des termes | KEEP_ANNEX |

---

## 6. Liens entrants et sortants

### Liens entrants à préserver

| Source probable | Cible legacy | Traitement PD-07B |
|-----------------|--------------|-------------------|
| Favoris · bookmarks · embeds | §00–§08 · §11 | Redirection banner vers Hub / Acte |
| Pages internes legacy croisées | §00 ↔ §11 | Mettre à jour liens vers Discovery **ou** maintenir pages annexes |
| Bases / vues | §04 · §10 | Ne pas casser les embeds |

### Liens sortants à mettre à jour

| Depuis | Vers | Action |
|--------|------|--------|
| Hub Discovery | Annexes §04–§08 · §11 | Liens Acte VII prioraires · fallback legacy si besoin |
| Acte VII | Git / bases | Chemins orientation seulement · pas chemins protégés |
| Pages legacy post-Lot 1 | Hub · Actes | Bannière obligatoire |

**Lot 0** doit lister tous les backlinks Notion avant Lot 1.

---

## 7. Stratégie de redirection

1. **Ne jamais supprimer l'URL** avant redirection et période de coexistence.
2. En tête de page legacy : bloc fixe —

> Cette page fait partie de l'ancien parcours P0. Le parcours recommandé est **SFIA Discovery** (Hub → Actes I–VII). Lien : [Hub].

3. Lien principal vers la destination matrice §5.
4. Conserver le corps legacy jusqu'à Lot 5 (sauf GO Morris contraire).
5. Documenter URL / page ID dans le review pack PD-07B.

---

## 8. Stratégie d'archivage réversible

| Règle | Détail |
|-------|--------|
| Prérequis | Lots 0–4 PASS · GO Morris explicite page par page |
| Méthode | Archivage Notion (ou dossier Archive) — **pas** delete |
| Preuve | Capture avant/après · ID page · date · décideur |
| Restauration | Désarchiver / déplacer hors Archive |
| Contenu unique | Doit déjà être dans Discovery ou annexe conservée |

---

## 9. Ordre d'exécution PD-07B (lots)

### Lot 0 — Pré-check (non destructif)

| Action | Preuve |
|--------|--------|
| Inventaire Notion réel (§00–11 + orphelines) | Table ID · URL · parent · statut publié |
| Captures d'écran Accueil · Hub · Actes | Avant |
| Cartographie liens entrants / sortants | Export ou table manuelle |
| Bases Référentiel et Cycles | ID · vues · embeds Acte VII |
| Écarts vs inventaire Git PD-07A | Liste absences / surplus |

**Stop si :** page critique absente de Discovery · contenu unique sans destination · §06 expose le prompt catalog.

### Lot 1 — Navigation non destructive

| Action | Preuve |
|--------|--------|
| Bannière redirection sur §00–§03 · §07 (et autres selon Lot 0) | Capture |
| Vérifier Hub + parcours I–VII intact | Checklist navigation |
| Aucune page déplacée | Status Notion |

**Rollback :** retirer bannières · restaurer texte original depuis Git / capture.

### Lot 2 — Annexes

| Action | Preuve |
|--------|--------|
| Orienter §04–§08 · §10–§11 vers Acte VII | Liens · nav |
| Vérifier embeds Bases | Vues |
| Filtrer §06 à l'index | Contrôle confidentialité |

**Rollback :** retirer liens ajoutés · restaurer parents.

### Lot 3 — Pages absorbées

| Action | Preuve |
|--------|--------|
| §00–§03 · §07 : redirection claire vers Hub / Actes | Bannière + lien cible |
| Ne pas archiver | Pages toujours accessibles |

**Rollback :** désactiver bannières · restauration copie Git.

### Lot 4 — Validation Morris

| Action | Preuve |
|--------|--------|
| Relecture visuelle parcours Discovery | Checklist |
| Contrôle contenu unique (§11 · §04 · §08 · schéma §03) | Matrice |
| Contrôle liens | Table |
| Décision page par page | Décision Morris documentée |

**Stop si :** contenu unique sans destination · lien critique cassé · exposition §06.

### Lot 5 — Archivage éventuel

| Action | Preuve |
|--------|--------|
| Uniquement pages GO Morris | Décision + capture |
| Archivage réversible | ID Archive |
| Aucun delete | Confirmation |

**Rollback :** désarchivage immédiat · décision Morris.

---

## 10. Rollback par lot (synthèse)

| Lot | État initial | Action | Rollback | GO Morris |
|-----|--------------|--------|----------|-----------|
| 0 | Inventaire | Lecture seule | N/A | Non |
| 1 | Pages sans bannière | Bannières | Retirer bannières | Non (sauf stop) |
| 2 | Annexes autonomes | Liens Acte VII | Retirer liens | Si conflit bases |
| 3 | Pages absorbées intactes | Redirections | Retirer redirects | Si perte perçue |
| 4 | Pré-archivage | Décisions | Maintenir coexistence | **Oui** pour suite |
| 5 | Pages actives | Archive | Unarchive | **Oui explicite** |

---

## 11. Critères d'arrêt (PD-07B)

Stopper et escalader Morris si :

- contenu unique sans destination Discovery / annexe ;
- backlink massif non traitable sans casse ;
- §06 (ou autre) expose prompts / secrets / protected paths ;
- Hub ou Actes I–VII endommagés ;
- Base Référentiel / Cycles cassées ;
- demande de DELETE ;
- divergence Git ↔ Notion non qualifiable.

---

## 12. Contrôles attendus PD-07B

### Contrôles visuels

| # | Contrôle |
|---|----------|
| V1 | Hub Discovery lisible · hero / parcours |
| V2 | Actes I–VII accessibles · navigation précédente / suivante |
| V3 | Bannière legacy visible et non intrusive |
| V4 | Annexes Acte VII ouvrables |
| V5 | Glossaire complet accessible |

### Contrôles de navigation

| # | Contrôle |
|---|----------|
| N1 | Parcours Hub → VII sans cul-de-sac |
| N2 | Liens legacy → Discovery fonctionnels |
| N3 | Favoris URL legacy atterrissent sur page avec redirection |
| N4 | Retour Hub depuis Acte VII |

### Contrôle de confidentialité

| # | Contrôle |
|---|----------|
| C1 | Pas de prompt catalog intégral |
| C2 | Pas de protected paths détaillés |
| C3 | Pas de matrice de routage exhaustive |
| C4 | Pas de secrets / tokens |
| C5 | §06 = index seulement |

### Bases Référentiel et Cycles

| # | Contrôle |
|---|----------|
| B1 | Embeds Acte VII opérationnels |
| B2 | Vues non cassées après Lot 2 |
| B3 | Badge Candidate sur cycles élargis |

---

## 13. Actions explicitement interdites (PD-07A et PD-07B)

| Interdit |
|----------|
| Delete de page |
| Archivage sans GO Morris |
| Force overwrite du corpus Discovery Actes I–VII |
| Publication prompt catalog |
| Promotion SFIA v2.5 en baseline |
| Ouverture PD-08 / PD-09 dans ce cycle |
| Modification doctrine method/core |

---

## 14. Gates Morris PD-07B

| Gate | Objet | Statut initial |
|------|-------|----------------|
| M0 | Lot 0 inventaire Notion PASS | À ouvrir |
| M1 | Lot 1 redirections non destructives | Fermée |
| M2 | Lot 2 annexes + bases | Fermée |
| M3 | Lot 3 pages absorbées | Fermée |
| M4 | Lot 4 validation contenu unique / liens | Fermée |
| M5 | Lot 5 archivage page par page | Fermée · **GO explicite** |
| M6 | Revue pack + preuves | Fermée |
| M7 | Clôture migration · entrée PD-08 | Fermée |

---

## 15. Review pack attendu pour PD-07B

Chaque lot PD-07B doit produire :

- horodatage Europe/Paris ;
- lot exécuté ;
- pages touchées (ID · URL · action) ;
- captures avant / après ;
- écarts vs plan PD-07A ;
- contrôle confidentialité ;
- rollback disponible (oui/non) ;
- décision Morris ;
- verdict lot.

---

## 16. Verdicts possibles (PD-07B)

| Verdict | Condition |
|---------|-----------|
| **LOT PASS — CONTINUE** | Contrôles du lot OK |
| **LOT STOP — MORRIS DECISION** | Ambiguïté / risque |
| **MIGRATION READY FOR ARCHIVE DECISIONS** | Lots 0–4 PASS |
| **MIGRATION COMPLETE — REVERSIBLE ARCHIVE DONE** | Lot 5 selon GO |
| **MIGRATION FAILED — ROLLBACK REQUIRED** | Casse navigation / perte |

---

## 17. Hors périmètre PD-07A

- Toute action Notion ;
- Archivage ou suppression ;
- Modification Actes I–VII ;
- PD-08 QA narrative ;
- PD-09 capitalisation ;
- Création page §09.

---

## 18. Critères d'acceptation PD-07A

| # | Critère | Statut |
|---|---------|--------|
| A1 | Inventaire §00–11 complet | ✓ |
| A2 | §09 et §10 qualifiés malgré absence draft | ✓ |
| A3 | Matrice stratégies sans DELETE | ✓ |
| A4 | Lots 0–5 + rollback | ✓ |
| A5 | Contrôles PD-07B listés | ✓ |
| A6 | Aucune action Notion | ✓ |

**Verdict plan :** plan Candidate prêt pour relecture ChatGPT — **exécution Notion fermée**.
