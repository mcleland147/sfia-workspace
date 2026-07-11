# SFIA Review Pack — ChatGPT

**Date/heure :** 2026-07-11 12:48 Europe/Paris
**Repository :** mcleland147/sfia-workspace
**Cycle :** Validation décisionnelle — inscription Morris D1–D12
**Profil :** Critical
**Branche :** method/sfia-v2.6-repository-standard-decisions
**HEAD initial :** 8bf811a5a378557d8dc3b943798fd3ebef8f90b6
**HEAD final :** 7e16fe66a458f3f28d4d0792c0eacf67190ac114
**Base main :** 688832d90e613959fbfdf53530f86aea36e23538
**PR :** #164

---

## Matrice avant (registre)

Toutes lignes NON DÉCIDÉ

## Matrice après (Morris 2026-07-11 12:45)

| ID | Décision |
|----|----------|
| D1 | GO |
| D2 | GO WITH RESERVE |
| D3 | ADJUSTMENT REQUIRED |
| D4 | DEFERRED |
| D5 | GO WITH RESERVE |
| D6 | GO WITH RESERVE |
| D7 | GO |
| D8 | GO WITH RESERVE |
| D9 | GO |
| D10 | DEFERRED |
| D11 | DEFERRED |
| D12 | GO WITH RESERVE |

## Points clés

- D3: retrait active lifecycle; usage operational séparé; principes PR #163 non modifiés
- POC: NON RETENU PAR MORRIS
- Trajectoire: cartographie progressive par lots — non ouverte
- G3: fermé

---

## Diff

 ...7-11-sfia-v2.6-repository-standard-decisions.md | 738 +++++++++------------
 1 file changed, 302 insertions(+), 436 deletions(-)

---

## Contenu complet document final

```markdown
# SFIA v2.6 — Repository Standard Decisions

*Dossier de décision — arbitrages Morris D1–D12 du cadre candidat des principes repository*

**Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-decisions.md`
**Date et heure :** 2026-07-11 12:45 Europe/Paris
**Statut :** **Candidate** — décisions Morris inscrites ; dossier à intégrer sur `main`
**Cycle projet :** Validation décisionnelle — inscription des arbitrages Morris D1–D12
**Profil SFIA :** **Critical**
**Typologie v2.4 :** DOC
**Repository :** mcleland147/sfia-workspace
**Branche :** method/sfia-v2.6-repository-standard-decisions
**Base Git :** `main` @ `688832d90e613959fbfdf53530f86aea36e23538`
**Autorité de décision :** Morris (L0)
**Date/heure décision Morris :** 2026-07-11 12:45 Europe/Paris
**Baseline opérationnelle :** SFIA v2.4
**Trajectoires :** v2.5 candidate capitalisée ; v2.6 candidate
**Inputs structurants :** principes repository v2.6 (PR #163) ; dossier arbitrage initial (PR #164)

### Justification Critical

- Décisions repository-wide **validées par Morris** et inscrites dans ce dossier
- Impact futur sur cartographie, G3, migrations et automatisations
- Traçabilité complète obligatoire
- Écart documentaire D3 vs principes PR #163 — alignement futur requis

### Limites du cycle

- **Décisions inscrites** — pas encore appliquées aux fichiers du repository
- **Document de principes non modifié** dans ce cycle (écart D3 tracé)
- Aucune cartographie, classification G3 ou migration ouverte
- **POC non retenu par Morris** — trajectoire = cartographie progressive par lots (futur GO distinct)
- SFIA v2.6 reste **candidate**

---

## 1. Executive summary

Morris a arbitré explicitement les **12 décisions D1–D12** du cadre candidat intégré par PR #163. Ce dossier enregistre la matrice validée, les réserves, les différés et la trajectoire aval.

**Matrice Morris validée :**

| ID | Décision Morris |
|----|-----------------|
| D1 | **GO** |
| D2 | **GO WITH RESERVE** |
| D3 | **ADJUSTMENT REQUIRED** |
| D4 | **DEFERRED** |
| D5 | **GO WITH RESERVE** |
| D6 | **GO WITH RESERVE** |
| D7 | **GO** |
| D8 | **GO WITH RESERVE** |
| D9 | **GO** |
| D10 | **DEFERRED** |
| D11 | **DEFERRED** |
| D12 | **GO WITH RESERVE** |

**Points structurants :**

- **D1 + D7 + D9** : fondations adoptées — modèle multidimensionnel, trajectoires, principes avant G3
- **D3** : retrait de `active` du cycle de vie — usage `operational` séparé ; **alignement futur du document de principes requis**
- **D4, D10, D11** : différés avec conditions de réouverture
- **POC read-only : NON RETENU PAR MORRIS**
- **Trajectoire candidate :** VALIDATION DES DÉCISIONS → INTÉGRATION DU DOSSIER → CARTOGRAPHIE PROGRESSIVE PAR LOTS (nouveau GO Morris requis — **non ouverte**)

**Gate actuel :** D1–D12 arbitrées — dossier prêt à intégrer après merge PR #164 (GO merge distinct).
**Gate suivant :** GO Morris pour ouvrir un **premier lot de cartographie read-only borné**.

---

## 2. Objet du cycle

| Objectif | Description |
|----------|-------------|
| Inscrire | Décisions Morris D1–D12 avec réserves et effets |
| Tracer | Registre complet §19 ; écart D3 vs principes |
| Orienter | Trajectoire cartographie par lots sans POC |
| Borner | Aucune application, cartographie ou G3 dans ce cycle |

---

## 3. Contexte et sources

| Source | Rôle |
|--------|------|
| PR #163 — principes | Modèle multidimensionnel candidate |
| PR #164 — dossier initial | Analyse et recommandations (registre était NON DÉCIDÉ) |
| Handoff @ `21a2364` | Revue dossier arbitrage |
| Audit PR #162 | Contexte homogénéité |

**État :** principes candidate @ `688832d` ; **D1–D12 arbitrées par Morris** dans ce correctif.

---

## 4. Portée et hors périmètre

### 4.1 Portée

- Inscription décisions Morris D1–D12
- Registre, matrices, gates, trajectoire cartographie par lots
- Trace écart D3 / document principes

### 4.2 Hors périmètre

| Exclu | Confirmation |
|-------|--------------|
| Modification document principes | **Non** — alignement futur |
| Application modèle aux fichiers | **Non** |
| Cartographie / lots cartographie | **Non ouverte** |
| POC | **Non retenu** |
| G3 / classification / migration | **Non** |
| Promotion v2.6 baseline | **Non** |

---

## 5. Méthode d'analyse décisionnelle

1. Phase initiale (commit `8bf811a`) : Cursor analyse et recommande — registre NON DÉCIDÉ
2. Phase présente : Morris arbitre — décisions inscrites avec date, autorité, réserves
3. Recommandations historiques conservées en contexte — **supplantées** par décisions Morris
4. Merge PR #164 **intègre le dossier** — n'ouvre pas cartographie ni G3 automatiquement

---

## 6. Vue d'ensemble D1–D12 — décisions Morris

| ID | Intitulé | Décision Morris | Bloque carto. lot 1 | Bloque G3 | Différable |
|----|----------|-----------------|---------------------|-----------|------------|
| D1 | Modèle multidimensionnel | **GO** | Non (prérequis validé) | Oui si absent | Non |
| D2 | Familles F01–F17 | **GO WITH RESERVE** | Non | Partiel | Partiel |
| D3 | Cycle de vie | **ADJUSTMENT REQUIRED** | Non | Oui si non aligné | Non |
| D4 | Autorité | **DEFERRED** | Non | Partiel | Oui |
| D5 | Usage | **GO WITH RESERVE** | Non | Partiel | Partiel |
| D6 | Périmètres | **GO WITH RESERVE** | Non | Partiel | Partiel |
| D7 | Trajectoire / baseline | **GO** | Non | Oui si absent | Non |
| D8 | Profils métadonnées | **GO WITH RESERVE** | Non | Oui (détails) | Partiel |
| D9 | Principes avant cartographie | **GO** | — | Oui | Non |
| D10 | docs/ vs method/documentation | **DEFERRED** | Non | Partiel | Oui |
| D11 | v3 tracked | **DEFERRED** | Non | Non | Oui |
| D12 | Nommage | **GO WITH RESERVE** | Non | Non | Oui |

---

## 7. Lot A — Décisions fondation (Morris)

### D1 — Adoption du modèle multidimensionnel

| Champ | Contenu |
|-------|---------|
| **Décision Morris** | **GO** |
| **Date / autorité** | 2026-07-11 12:45 Europe/Paris — Morris |
| **Décision validée** | Modèle multidimensionnel adopté comme **cadre candidate SFIA v2.6** |
| **Dimensions validées** | Famille ; cycle de vie ; autorité ; usage ; périmètre ; trajectoire/version ; emplacement logique |
| **Effet immédiat** | Référence pour préparer la future cartographie — **non appliqué** aux fichiers |
| **Effet futur** | Base descriptive cartographie par lots |
| **Réserves** | Aucune |
| **Gate suivant** | Intégration dossier ; cartographie (GO distinct) |
| **Contexte historique** | Recommandation candidate : ADOPT AS CANDIDATE FRAMEWORK — **confirmée par Morris** |

---

### D2 — Familles primaires F01–F17

| Champ | Contenu |
|-------|---------|
| **Décision Morris** | **GO WITH RESERVE** |
| **Date / autorité** | 2026-07-11 12:45 Europe/Paris — Morris |
| **Décision validée** | F01–F17 adoptées comme **taxonomie candidate** |
| **Réserves obligatoires** | Clarifier frontière **F02 vs F11** ; **F06 vs F15** ; F16/F17 = familles techniques hors profil MD complet ; pas de familles supplémentaires sans besoin démontré ; ajustement ultérieur autorisé depuis cartographie réelle |
| **Effet** | Taxonomie exploitable cartographie — **aucune classification actuelle validée** |
| **Gate suivant** | Cartographie lot documentaire |

---

### D3 — Cycle de vie documentaire

| Champ | Contenu |
|-------|---------|
| **Décision Morris** | **ADJUSTMENT REQUIRED** |
| **Date / autorité** | 2026-07-11 12:45 Europe/Paris — Morris |
| **Ajustement cible décidé** | **Retirer `active` du cycle de vie** — éviter doublon avec `usage = operational` |
| **Cycle de vie candidat ajusté (Morris)** | draft ; candidate ; validated ; deprecated ; superseded ; archived |
| **Usage séparé** | operational ; non-operational ; unknown |
| **Règles validées** | `validated + operational` possible ; `validated + non-operational` possible ; usage indépendant du cycle de vie ; **`active` ne doit plus figurer comme lifecycle_status** |
| **Écart documentaire** | Document principes PR #163 conserve encore `active` en §8 — **mise à jour future nécessaire** ; **non modifié dans ce cycle** |
| **Effet immédiat** | Cadre décisionnel pour cartographie et alignement futur principes |
| **Gate suivant** | Alignement document principes (cycle futur) ; cartographie |

**Contexte historique :** Options A/B/C analysées — Morris choisit **équivalent Option B** (retrait `active`).

---

### D4 — Niveaux d'autorité documentaire

| Champ | Contenu |
|-------|---------|
| **Décision Morris** | **DEFERRED** |
| **Date / autorité** | 2026-07-11 12:45 Europe/Paris — Morris |
| **Position temporaire** | Modèle canonical / reference / supporting / informational = **hypothèse candidate en lecture** — **non validée définitivement** |
| **Conditions réouverture** | Premiers résultats cartographie ; ambiguïté autorité réelle ; préparation G3 ; unicité canonical par sujet |
| **Effet** | Cartographie lot 1 **autorisée** sans validation D4 |
| **Gate suivant** | Gate C — après cartographie |

---

### D5 — Modèle d'usage

| Champ | Contenu |
|-------|---------|
| **Décision Morris** | **GO WITH RESERVE** |
| **Date / autorité** | 2026-07-11 12:45 Europe/Paris — Morris |
| **Décision validée** | Usage conservé comme **dimension de cartographie** |
| **Réserves** | Pas métadonnée obligatoire partout ; usage d'abord dans livrables cartographie ; valeurs limitées operational / non-operational / unknown ; unknown durable = réserve signalée ; vérification par références et contenu, pas emplacement seul |
| **Effet** | Dimension D4 usage active en cartographie |

---

### D6 — Périmètres documentaires

| Champ | Contenu |
|-------|---------|
| **Décision Morris** | **GO WITH RESERVE** |
| **Date / autorité** | 2026-07-11 12:45 Europe/Paris — Morris |
| **Vocabulaire validé** | repository ; method ; project ; tooling ; external-publication |
| **Réserves** | `product` **différé** ; scope=project exige attribut project ; phase/domaine optionnels ; pas d'élargissement sans cas réel |
| **Effet** | Périmètre minimal pour cartographie |

---

### D7 — Trajectoire et baseline

| Champ | Contenu |
|-------|---------|
| **Décision Morris** | **GO** |
| **Date / autorité** | 2026-07-11 12:45 Europe/Paris — Morris |
| **Décision validée** | Modèle trajectory / trajectory_role adopté comme cadre candidate |
| **Trajectoires confirmées** | v1.1 = historique stable ; **v2.4 = baseline opérationnelle** ; **v2.5 = candidate capitalisée** ; **v2.6 = candidate** ; **v3.0 = hors trajectoire courante** |
| **Règles** | baseline = propriété trajectoire ; lifecycle candidate ≠ trajectory candidate ; aucune promotion automatique ; v3.0 non réactivée |
| **Effet** | Référence trajectoire pour cartographie et G3 futur |

---

### D8 — Profils de métadonnées

| Champ | Contenu |
|-------|---------|
| **Décision Morris** | **GO WITH RESERVE** |
| **Date / autorité** | 2026-07-11 12:45 Europe/Paris — Morris |
| **Décision validée** | **Principe** des profils proportionnés A–F validé |
| **Profils** | A Core ; B Capitalisation/Audit/Décision ; C Projet ; D Prompt/Template ; E README ; F Léger (mode allégé) |
| **Réserves** | Champs obligatoires **non** validés définitivement ; champs précis ajustés lors cartographie par lots ; pas de généralisation profil complet partout |
| **Effet** | Principe opérationnel ; détails lors lots cartographie |

---

### D9 — Principes avant cartographie et G3

| Champ | Contenu |
|-------|---------|
| **Décision Morris** | **GO** |
| **Date / autorité** | 2026-07-11 12:45 Europe/Paris — Morris |
| **Décision validée** | Principes **doivent précéder** toute classification G3 |
| **Clarifications Morris** | Aucune G3 avant validation et intégration du cadre ; cartographie descriptive read-only **par lots** ouvrable après merge dossier + **nouveau GO Morris** ; **aucun POC séparé** ; cartographie progressive = apprentissage ; **aucune cartographie ouverte dans ce cycle** |
| **Effet** | Gate G3 fermée ; cartographie = gate distincte post-merge |

---

## 8. Lot B — Arbitrages complémentaires (Morris)

### D10 — `docs/` versus `method/.../documentation/`

| Champ | Contenu |
|-------|---------|
| **Décision Morris** | **DEFERRED** |
| **Date / autorité** | 2026-07-11 12:45 Europe/Paris — Morris |
| **Hypothèse logique conservée** | method/.../documentation/ = méthode SFIA, gouvernance, trajectoires, capitalisation ; docs/ = transverse, plateforme, produit, pratiques |
| **Condition réouverture** | Analyse cas réels lors du **lot documentaire** concerné |
| **Effet** | Aucun déplacement ; aucun arbre cible |

---

### D11 — Traitement SFIA v3.0 tracked

| Champ | Contenu |
|-------|---------|
| **Décision Morris** | **DEFERRED** |
| **Date / autorité** | 2026-07-11 12:45 Europe/Paris — Morris |
| **Position** | v3.0 **hors trajectoire courante** maintenu |
| **Conditions** | Pas réactivation ; pas déplacement/archivage/suppression ; pas MCP/Bridge/Runner/`.sfia` ; réouverture = décision Morris explicite |
| **Condition réouverture** | Cycle Morris dédié v3 |

---

### D12 — Politique dates et langue de nommage

| Champ | Contenu |
|-------|---------|
| **Décision Morris** | **GO WITH RESERVE** |
| **Date / autorité** | 2026-07-11 12:45 Europe/Paris — Morris |
| **Règles validées (nouveaux docs structurants)** | kebab-case ; noms fichiers **EN** par défaut ; titres **FR** autorisés ; dates `YYYY-MM-DD` pour événementiels, audits, décisions, capitalisations ; pas de date sur core stables sauf nécessité ; préfixe `sfia-` si valeur contexte ; **pas** renommage rétroactif obligatoire |
| **Réserve** | Conventions legacy tolérées jusqu'à migration gouvernée |

---

## 9. Dépendances entre décisions

```text
D1 (GO) ──┬── D2 (GO WR) ──┬── D8 (GO WR)
          ├── D3 (ADJ) ────┼── D5 (GO WR)
          ├── D4 (DEFER)   │
          ├── D6 (GO WR) ──┘
          └── D7 (GO) ── D9 (GO) ──► cartographie par lots (GO futur)

D10, D11 (DEFER) ──► lots cartographie documentaires
D12 (GO WR) ──► nouveaux docs ; migration future
```

---

## 10. Trajectoire candidate après décisions Morris

**POC read-only : NON RETENU PAR MORRIS**

**Trajectoire retenue :**

```text
VALIDATION DES DÉCISIONS (ce dossier)
  → INTÉGRATION DU DOSSIER (merge PR #164 — GO merge distinct)
  → ALIGNEMENT FUTUR DOCUMENT PRINCIPES (D3 — cycle séparé)
  → CARTOGRAPHIE PROGRESSIVE PAR LOTS (GO Morris distinct par lot)
  → ANALYSE DES RÉSULTATS
  → DÉCISION TRANSFORMATIONS
  → MIGRATION PAR LOTS VALIDÉS UNIQUEMENT
```

**Règles cartographie (non ouverte) :**

- Chaque lot = read-only ; cartographie descriptive + réserves
- Aucun lot ne déplace, renomme, fusionne, archive ou supprime
- Pas de mega-cartographie ; pas de mega-migration
- Premier lot = **GO Morris distinct** après merge dossier

**Étape alignement principes :** peut précéder ou accompagner cadrage lot 1 — **hors périmètre** de ce correctif.

---

## 11. Séquence et gates

| Gate | Statut | Contenu |
|------|--------|---------|
| **Gate actuel** | **Atteint** | D1–D12 arbitrées — dossier à intégrer |
| **Gate merge PR #164** | En attente | GO Morris merge distinct |
| **Gate cartographie lot 1** | **Fermé** | GO Morris futur requis |
| **Gate G3** | **Fermé** | Classification interdite |
| **Gate migration** | **Fermé** | Interdite |

**Séquence Morris retenue (remplace Option 2 + POC) :**

1. Gate A fondations : D1 GO, D3 ADJ, D7 GO, D9 GO — **validé**
2. Gate B schéma : D2, D5, D6, D8 principe — **validé avec réserves**
3. Gate C : D4 différé — **reporté**
4. Gate D : D10, D11 différés ; D12 GO WR — **validé/partiel**

---

## 12. Conséquences sur la cartographie

| Élément | Conséquence |
|---------|-------------|
| D1, D7, D9 GO | Cadre prêt pour cartographie **après merge + GO lot** |
| D3 ADJ | Utiliser cycle sans `active` en cartographie ; signaler écart principes |
| D4, D10, D11 DEFER | Cartographie possible avec hypothèses et réserves |
| POC | **Non retenu** — cartographie par lots joue le rôle d'apprentissage |
| Ce cycle | **Aucune cartographie ouverte** |

---

## 13. Conséquences sur G3 et la classification

- **G3 fermé** — D9 GO : aucune classification consolidée avant cadre intégré et décisions appliquées en cartographie
- Merge PR #164 **n'ouvre pas** G3
- D4 différé : autorité en hypothèse jusqu'à réouverture

---

## 14. Conséquences sur les migrations futures

- Migration **interdite** tant que cartographie et G3 non validés
- D12 : conventions **nouveaux** docs ; legacy toléré
- D10 différé : pas de déplacement docs/ ↔ method/ sans arbitrage lot

---

## 15. Risques et dette

| Risque / dette | Mitigation |
|----------------|------------|
| Écart D3 principes vs décisions | Cycle alignement principes planifié |
| D4/D10/D11 différés | Réserves explicites en cartographie |
| F02/F11, F06/F15 frontières | Réserves D2 ; affinage cartographie |
| Confusion merge = cartographie ouverte | Gates explicites §11 |

---

## 16. Options globales — historique et choix Morris

| Option | Statut |
|--------|--------|
| 1 — Validation complète D1–D12 | Non retenue intégralement (D4, D10, D11 différés) |
| 2 — Fondation + POC | **NON RETENU PAR MORRIS** (POC supprimé) |
| 3 — Approfondissement | Partiellement couvert par réserves et différés |
| 4 — NO-GO | Non retenu |

**Choix Morris :** avancement sur matrice proposée avec **trajectoire cartographie progressive par lots** — **aucune option globale reste à arbitrer pour D1–D12**.

**Prochaine décision distincte :** GO merge PR #164 ; puis GO ouverture **premier lot cartographie read-only**.

---

## 17. Registre des décisions Morris

| ID | Décision Morris | Réserves synthétiques | Date/heure | Autorité | Effet | Condition réouverture | Gate suivant |
|----|-----------------|----------------------|------------|----------|-------|----------------------|--------------|
| D1 | **GO** | — | 2026-07-11 12:45 | Morris | Cadre 7 dimensions candidate | — | Merge dossier ; carto |
| D2 | **GO WITH RESERVE** | F02/F11 ; F06/F15 ; F16/F17 ; pas +familles | 2026-07-11 12:45 | Morris | Taxonomie F01–F17 candidate | Cartographie réelle | Carto lot |
| D3 | **ADJUSTMENT REQUIRED** | Retrait `active` ; alignement principes futur | 2026-07-11 12:45 | Morris | Lifecycle 6 états + usage séparé | — | Alignement principes |
| D4 | **DEFERRED** | Hypothèse lecture seule | 2026-07-11 12:45 | Morris | Non bloquant carto | Carto ; G3 prep | Gate C |
| D5 | **GO WITH RESERVE** | Cartographie d'abord ; pas obligatoire partout | 2026-07-11 12:45 | Morris | Usage en carto | — | Carto lot |
| D6 | **GO WITH RESERVE** | product différé ; project requis | 2026-07-11 12:45 | Morris | 5 périmètres | Cas réel product | Carto lot |
| D7 | **GO** | v3 hors trajectoire | 2026-07-11 12:45 | Morris | Trajectory/baseline candidate | — | Carto ; G3 |
| D8 | **GO WITH RESERVE** | Principe seul ; champs après carto | 2026-07-11 12:45 | Morris | Profils A–F principe | Cartographie lots | Gate C |
| D9 | **GO** | Pas POC ; carto par lots ; G3 fermé | 2026-07-11 12:45 | Morris | Gates carto/G3 | — | GO carto lot |
| D10 | **DEFERRED** | Hypothèse logique conservée | 2026-07-11 12:45 | Morris | Pas d'arbre cible | Lot documentaire | Gate D |
| D11 | **DEFERRED** | Hors trajectoire ; pas toucher v3 | 2026-07-11 12:45 | Morris | Statu quo v3 | Décision Morris v3 | Gate D |
| D12 | **GO WITH RESERVE** | Nouveaux docs ; legacy toléré | 2026-07-11 12:45 | Morris | Conventions création | Migration gouvernée | Migration future |

> **Aucune ligne NON DÉCIDÉ.**

---

## 18. Points non couverts

- Matrice fichier × dimensions réelle
- Alignement document principes (D3) — cycle futur
- Correction liens cassés ; Notion vs Git
- Automatisation / linter

---

## 19. Conclusion

| Élément | Statut |
|---------|--------|
| D1–D12 arbitrées par Morris | **Oui** |
| Réserves tracées | **Oui** |
| D3 retrait `active` décidé | **Oui** — alignement principes **futur** |
| D4, D10, D11 différés | **Oui** — conditions documentées |
| POC | **Non retenu** |
| Cartographie | **Non ouverte** |
| G3 / classification / migration | **Non** |
| Document principes modifié | **Non** |
| SFIA v2.6 | **Candidate** |

---

## 20. Gate Morris

| Gate | Description |
|------|-------------|
| **Actuel** | Décisions inscrites — **merge PR #164** soumis à GO Morris distinct |
| **Suivant** | GO Morris **premier lot cartographie read-only borné** |
| **G3** | Fermé |
| **Migration** | Fermée |

**Non automatique :** merge PR ; cartographie ; G3 ; migration ; alignement principes.

---

## Annexe A — Matrice D1–D12 (post-décision Morris)

| ID | Décision Morris | Bloque carto. lot 1 | Bloque G3 | Bloque migration | Différable |
|----|-----------------|---------------------|-----------|------------------|------------|
| D1 | GO | Non | Oui* | Oui* | Non |
| D2 | GO WITH RESERVE | Non | Partiel | Partiel | Partiel |
| D3 | ADJUSTMENT REQUIRED | Non | Oui* | Oui* | Non |
| D4 | DEFERRED | Non | Partiel | Non | Oui |
| D5 | GO WITH RESERVE | Non | Partiel | Non | Partiel |
| D6 | GO WITH RESERVE | Non | Partiel | Partiel | Partiel |
| D7 | GO | Non | Oui* | Oui* | Non |
| D8 | GO WITH RESERVE | Non | Oui | Oui | Partiel |
| D9 | GO | — | Oui | Oui | Non |
| D10 | DEFERRED | Non | Partiel | Partiel | Oui |
| D11 | DEFERRED | Non | Non | Non | Oui |
| D12 | GO WITH RESERVE | Non | Non | Partiel | Oui |

*Prérequis satisfaits par décisions Morris — G3/migration restent fermés par D9.

---

## Annexe B — Dépendances décisionnelles

(Inchangée structurellement — D3 ADJ impacte alignement principes et cartographie lifecycle.)

| Décision | Amont | Aval |
|----------|-------|------|
| D3 ADJ | D1 | Alignement principes ; D5 ; cartographie |
| D9 GO | D1–D8 | Cartographie lots ; blocage G3 |
| D10 DEFER | D2, D9 | Lot cartographie documentaire |

---

## Annexe C — Décision × gate futur

| Gate futur | Condition post-décision Morris |
|------------|-------------------------------|
| Merge PR #164 | D1–D12 inscrites — GO merge Morris |
| Cartographie lot 1 read-only | Merge dossier + **GO Morris lot** ; D1,D7,D9 satisfaits |
| Alignement principes D3 | Cycle séparé — retrait `active` |
| Classification G3 | Fermé — réouverture Morris explicite après cartographie |
| Migration lot 1 | G3 + D8 détails + D12 — fermé |
| POC | **NON RETENU — gate supprimée** |

---

## Annexe D — Options globales

| Option | Statut Morris |
|--------|-------------|
| 1 — Complète | Non (différés D4,D10,D11) |
| 2 — Fondation + POC | **NON RETENU** |
| 3 — Approfondissement | Partiel via réserves |
| Trajectoire retenue | **Décisions → merge → cartographie par lots** |

---

## Annexe E — Git Review Index

| Élément | Valeur |
|---------|--------|
| Repository | mcleland147/sfia-workspace |
| Branche projet | method/sfia-v2.6-repository-standard-decisions |
| Base `main` | `688832d90e613959fbfdf53530f86aea36e23538` |
| HEAD initial (correctif) | `8bf811a5a378557d8dc3b943798fd3ebef8f90b6` |
| Cycle | Validation décisionnelle — inscription Morris D1–D12 |
| Profil | Critical |
| Fichier modifié | `2026-07-11-sfia-v2.6-repository-standard-decisions.md` |
| Commit attendu | `docs: record Morris decisions for SFIA v2.6 repository standard` |

---

*Dossier candidate SFIA v2.6 — décisions Morris D1–D12 inscrites — POC non retenu — cartographie par lots non ouverte — SFIA v2.6 reste candidate.*
```


---

## Validations

- D1-D12 inscrites: yes
- Registre sans NON DÉCIDÉ: yes
- POC non retenu: yes
- modified sections complete: yes
- useful diff included: yes
- synthesis only: no

## Verdict: complete

