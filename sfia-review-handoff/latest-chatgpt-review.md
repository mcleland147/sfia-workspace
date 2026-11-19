# COURTILIEN-02A — Review pack Full

**Cycle :** COURTILIEN-02A — Evolution du modèle d'identité (16e relation)
**Type :** 8 — Delivery / implémentation · **Profil :** Standard · **Typologie :** EVOL
**Date rapport :** 2026-11-19 21:55:00 CET (Europe/Paris)
**Verdict review pack :** `NOT READY` — `INCOMPLETE / TOOLING GAP` (création schéma Airtable bloquée)

---

## 1. Local Git Truth Check

| Contrôle | Valeur |
|----------|--------|
| Repository | `mcleland147/sfia-workspace` (root `/Users/l/Projects/sfia-workspace`) |
| Branche projet | `project/sfia-task-manager-cycle-4-ux-ui` |
| HEAD | `139f45fd019aa0561bfb5c6b7a7bd1c748f570b4` |
| origin/main | `d3d199adb782462b93467934f5f1e8a0c98fb492` |
| Staged | vide |
| git status --short | untracked uniquement : `.cursor/…`, `.tmp-sfia-review/…`, `.cursor/mcp.json` — **aucun fichier projet tracké modifié** |
| Anomalie incompatible | **aucune** — travaux autres projets préservés |

Handoff distant avant cycle : `f207312c5e5d16027227fdb1f428827fe9e914ce` (`docs(review-handoff): finalize COURTILIEN-01 integration`).

---

## 2. Sources consultées

| Source | Statut |
|--------|--------|
| `prompts/templates/sfia-cycle-execution-template.md` | LU (§7.10, §8, §9.1) |
| `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` | LU (cycles antérieurs / applicable) |
| `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | LU (cycles antérieurs / applicable) |
| `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` | LU (cycles antérieurs / applicable) |
| `method/sfia-fast-track/checklists/sfia-validation-checklist.md` | LU (cycles antérieurs / applicable) |
| CKC `02-fifteen-cycles-synthetic-map.md` cycle 8 | LU — Delivery / scope discipline / anti scope creep |
| Handoff COURTILIEN-01 `f207312c…` | Référencé (tip `sfia/review-handoff`) |
| SFIA Studio historique / Next | N/A |
| Livrables Liora applicables | Non accessibles en local versionné hors périmètre — **signalé absent** |

---

## 3. État initial (référence schéma)

**Base :** [sep26_bpbnc_courtage_assurance_2](https://airtable.com/appjebCNHtEaCAzxy) (`appjebCNHtEaCAzxy`)
**permissionLevel effectif MCP :** `edit` (Editor) — **pas Creator**
**Tables :** 11 confirmées (UTILISATEUR, COMPAGNIE, PERSONNE, JOURNAL, OPPORTUNITE, RENDEZ_VOUS, CONTRAT, INTERACTION, DEVIS, SINISTRE, DOCUMENT)

**UTILISATEUR** (`tblRL15tkEL98Mpev`) — champs relationnels avant 02A :
- `PERSONNE` (`fldrnt6mlP0Sd11pR`) — inverse de `courtier_referent` (**≠** `personne_client`)
- `JOURNAL`, `RENDEZ_VOUS`, `INTERACTION`

**PERSONNE** (`tblpbBJLOV4psEgnA`) — pas de champ inverse `personne_client` / compte client.

**`personne_client` :** **absent** (Airtable + Softr).
**Relations métier :** **15** (cible 16 non atteinte).
**Entités :** **11** (inchangé).

---

## 4. Tentative de création — STOP permissions

### 4.1 Action tentée

`create_field` sur UTILISATEUR :
- name : `personne_client`
- type : `multipleRecordLinks`
- linkedTableId : `tblpbBJLOV4psEgnA` (PERSONNE)
- description métier prévue (cardinalité 1:1, contrôle applicatif fail-closed)

Retry sans description → même échec.

### 4.2 Erreur observée

MCP : `Invalid baseId, tableId, and / or fieldIds`
alors que `list_bases` / `list_tables_for_base` confirment les IDs.

`update_field` (probe no-op rename) → **même erreur**.

### 4.3 Cause qualifiée (preuve externe + permission)

Airtable Meta API **Create field** exige :
- scope `schema.bases:write`
- rôle collaborateur **Base creator** (pas Editor)

`list_bases` → `permissionLevel: "edit"`.

**STOP condition appliquée :** droits insuffisants pour création de champ — **aucune duplication**, **aucun contournement**, **aucune écriture d'enregistrement**.

`report_missing_capability` Airtable déposé (gapType `tool_error` / create_field opaque sous Editor).

### 4.4 Définition complète du champ **non créé** (contrat pour intervention Owner/Creator)

| Attribut | Valeur cible |
|----------|--------------|
| Table | UTILISATEUR |
| Nom | `personne_client` |
| Type | linked record → PERSONNE |
| Description | Rattachement explicite du compte utilisateur client à sa fiche métier PERSONNE dans CourtiLien. |
| Cardinalité métier | Compte client ≤1 fiche ; fiche ≤1 compte client ; courtiers/directeur : pas de `personne_client` au titre du rôle interne ; compte client actif : lien unique obligatoire avant accès données |
| Contrainte native | `prefersSingleRecordLink` / unicité : **non exposée** par MCP `create_field` / `update_field` (options liées = `linkedTableId` seulement ; update options = formula). **Ne pas** présenter une préférence UI Airtable comme contrainte d'intégrité. Contrôle applicatif **fail-closed** obligatoire en 02B. |
| Inverse | Laisser Airtable créer l'inverse automatiquement — **ne pas** créer manuellement une 2e relation |
| IDs techniques | **N/A — champ non créé** (fld… / inverse fld… absents) |

### 4.5 Intervention Owner requise (Morris)

1. Passer le compte MCP / collaborateur à **Creator** sur la base, **ou**
2. Créer manuellement `personne_client` (Owner/Creator) selon la définition §4.4, puis relancer un cycle de preuve Softr.

---

## 5. Delta modèle

| Métrique | Avant | Après 02A | Attendu |
|----------|-------|-----------|---------|
| Entités | 11 | **11** | 11 |
| Relations métier | 15 | **15** (inchangé) | 16 |
| `personne_client` | absent | **absent** | présent |
| Données métier | — | **non modifiées** | non modifiées |
| Datasources Softr | 7 | **7** | 7 |

---

## 6. Qualification des rattachements (lecture seule — anonymisée)

Deux comptes **role=client** fictifs (cycle 01). **Aucune écriture** de `personne_client` (champ inexistant + hors périmètre auto-mapping).

| Alias | ID métier USR | Rôle | Actif | Signal email↔PERSONNE | Fiche candidat | Type/statut fiche | Ambiguïté | Proposition |
|-------|---------------|------|-------|----------------------|----------------|-------------------|-----------|-------------|
| Client-A | USR-004 | client | oui | correspondance unique email+nom vers une fiche client | PER-004 | client / actif | aucune sur ce couple | **Candidat GO mapping** (sous validation Morris) |
| Client-B | USR-005 | client | **non** (checkbox absente/false) | correspondance unique email+nom | PER-009 | client / **inactif** | aucune doublon email ; **réserve métier** (compte + fiche inactifs) | **HOLD** — ne pas activer l'accès sans GO Morris |

**Règles respectées :**
- mapping proposé sur id + rôle + email + actif + fiche + absence d'ambiguïté ;
- **pas** d'application automatique sur seule correspondance email ;
- champ `PERSONNE` sur comptes courtier = inverse `courtier_referent` — **non confondu** avec `personne_client`.

**Décision Morris distincte requise :** validation et application des mappings (hors 02A).

---

## 7. Preuves Softr / non-régression

### 7.1 Datasources (7 — inchangées)

App cible `7242211b-049d-4673-9262-19dd95ee9178` (*CourtiLien — Espace client*) :
- UTILISATEUR `ca4a934b-…`
- PERSONNE `82b33bf9-…`
- CONTRAT, COMPAGNIE, DOCUMENT, SINISTRE, RENDEZ_VOUS
Intégration `6430d52c-…` · base `appjebCNHtEaCAzxy` · **aucune datasource ajoutée**.

### 7.2 Schéma UTILISATEUR côté Softr

`integration_list_table_fields` : champs = id, nom, email, role, actif, PERSONNE, JOURNAL, RENDEZ_VOUS, INTERACTION — **`personne_client` absent**.
Inverse dédié côté PERSONNE : **absent** (seul lien UTILISATEUR = `courtier_referent`).

### 7.3 application_check

`ok: true` · `dataModel.refreshed: true` · changed : `docs/datasources/README.md`, `src/softr-fields.ts` · `issues: []`.

**Contenu exploitable `src/softr-fields.ts` (section UTILISATEUR)** — datasource `ca4a934b-…` :
- champs générés = les 9 champs existants ci-dessus ;
- **aucun** champ `personne_client` ;
- `allowMultipleEntries: true` sur `PERSONNE` (inverse courtier) — cohérent avec schéma actuel ;
- hash fichier : `7d971cd9b0b39b5a1bc5f210349b6b27311ec9f924cf416c969b332dacfffa6e`.

**`docs/datasources/README.md` :** régénéré par Softr (`changed`) mais **non lisible** via MCP (`only src/**, app/*.json and softr.json are readable`) — réserve documentaire cycle 01 **partiellement** traitée (preuve types via `softr-fields.ts` ; README toujours non extractible MCP).

### 7.4 Application historique

`e8491c5f-9938-4731-b38f-f4c97d2a553e` (*Espace client Courtage*) : `published: null`, `updated` inchangé vs session (pas de mutation 02A). **Intact.**

### 7.5 Publication cible

App cible : `published: null` — **non publiée**.
User connection : `source: null` — auth utilisateurs métier **non branchée** (attendu 02B).
Data restrictions : `[]` — aucune restriction serveur (attendu 02B).

---

## 8. Contrat d'autorisation proposé (pour 02B — non implémenté)

```
Utilisateur authentifié Softr
  → identité UTILISATEUR vérifiée (user connection)
  → role == client
  → actif == true
  → personne_client présent, unique, 1 fiche
  → fiche PERSONNE autorisée
  → objets métier dont personne == cette fiche
Sinon : REFUS PAR DÉFAUT
```

**Refus si :** session absente · compte inactif · rôle incorrect · lien absent · plusieurs fiches liées · identité ambiguë · objet d'un autre client.

**Faisabilité Softr (offre gratuite / API actuelle) :**
- `application_set_data_restriction` / `application_list_data_restrictions` = mécanisme **serveur** (VIEW/EDIT/DELETE/ADD + MATCHING conditionV2) — **adapté** au cloisonnement, **pas** un filtre UI.
- Prérequis 02B : user connection vers UTILISATEUR + champ `personne_client` existant + groupes utilisateurs.
- **Interdit** : présenter un filtrage frontend / query client-only comme sécurité.
- Limite : cardinalité 1:1 non native Airtable → contrôle fail-closed applicatif (longueur lien, rejet multi-link) **côté serveur** (restriction + logique métier).

**Claims interdits ce cycle :** sécurité métier validée · MVP opérationnel.

---

## 9. Fake / Real Qualification

| Élément | Valeur |
|---------|--------|
| Applicable | oui |
| Mock | aucun |
| Frontière REAL | Airtable / Softr / MCP |
| Preuve d'entrée | Intégration + lecture 7 sources : **REAL BOUNDARY PROVEN** (héritage 01) |
| Preuve attendue 02A | REAL BOUNDARY PROVEN pour évolution schéma + lecture Softr |
| Preuve obtenue 02A | **PARTIAL REAL** — lecture schéma / permissions / Softr **PROVEN** ; **mutation schéma non réalisée** (bloquée Editor) |
| Realism gaps | `personne_client` absent Airtable+Softr ; identité auth non rattachée ; restrictions serveur absentes |
| GO REAL | Evolution additive autorisée **mais non exécutable** sous permission actuelle |
| Claims interdits | Sécurité métier validée · MVP opérationnel · DETERMINISTIC ≠ READY FOR REAL |

---

## 10. Validations

| Contrôle | Résultat |
|----------|----------|
| 11 entités | PASS |
| 16 relations | **FAIL** (reste 15) |
| 15 relations initiales préservées | PASS |
| Aucune donnée métier modifiée | PASS |
| Aucune datasource supplémentaire | PASS |
| Nouvelle relation accessible Softr | **FAIL** / NOT ACHIEVED |
| App historique intacte | PASS |
| App cible non publiée | PASS |
| application_check | PASS (issues []) |
| git status --short projet | PASS (pas de diff tracké projet) |
| git diff --stat projet | PASS (vide sur tracked) |

---

## 11. Retour arrière (documenté, **non exécuté**)

Si le champ est créé plus tard : suppression du champ `personne_client` (et inverse auto) par Creator/Owner — **aucune suppression automatique** dans ce cycle. État actuel = déjà « sans champ » → rollback mutation = N/A.

---

## 12. Risques et réserves

1. **BLOQUANT** — MCP collaborateur en `edit` : impossible de créer la 16e relation.
2. Cardinalité 1:1 non enforceable nativement même après création (contrôle 02B).
3. Confusion possible `PERSONNE` (inverse courtier) vs `personne_client` — documentée ; risque UX Studio.
4. Client-B inactif : mapping HOLD.
5. README Softr non lisible MCP — réserve doc cycle 01 ouverte partiellement.
6. User connection absente — auth contrat 02B non branchable tant que schéma + connection manquent.

---

## 13. Décisions Morris requises

| # | Décision | Statut |
|---|----------|--------|
| D1 | Élévation collaborateur MCP → **Creator** **ou** création manuelle Owner de `personne_client` (+ inverse auto) | **GO distinct requis** |
| D2 | Validation / application mappings Client-A (GO) et Client-B (HOLD/GO) | GO distinct — **pas** dans 02A |
| D3 | BUILD fonctionnel 02B | GO distinct |
| D4 | Configuration autorisations serveur | GO distinct |
| D5 | Publication | GO distinct |

GO acquis « création 16e relation » : **non exécutable** tant que D1 non levé.

---

## 14. Git / fichiers locaux autorisés

| Fichier | Action |
|---------|--------|
| `.tmp-sfia-review/chatgpt-review.md` | Réinitialisé puis Full pack (ce fichier) |
| Autres fichiers versionnés projet | **non modifiés** |
| Commit / push / PR projet | **aucun** |

---

## 15. Verdict

**`NOT READY`**
**`INCOMPLETE / TOOLING GAP`** — permission Airtable Editor insuffisante pour Meta create_field ; MCP masque l'erreur en Invalid ID.

Niveau QA : évolution de schéma avec preuve REAL **bornée et partielle** (audit + Softr non-régression) — **sans** preuve d'évolution effective du schéma.

Handoff : voir section publication (commit attendu `docs(review-handoff): publish COURTILIEN-02A identity model`).
