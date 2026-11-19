# ChatGPT Review Pack — Full
## COURTILIEN-01 — Qualification et intégration Airtable

**Date :** 2026-11-19 · **Heure :** 21:10 CET (UTC+1)
**Projet :** CourtiLien — CRM courtage · **Phase Liora :** 2.4
**Cycle :** 7 — Intégration / DevOps · **Profil :** Standard · **Autonomie :** L3 bornée
**CKC :** carte synthétique candidate (cycle 7) — couverture détaillée absente
**Studio historique / Next :** N/A
**Mode handoff :** publish-in-cycle

---

### 1. Local Git Truth Check

| Champ | Valeur |
|-------|--------|
| Repo | `mcleland147/sfia-workspace` |
| Remote | `https://github.com/mcleland147/sfia-workspace.git` |
| Branche projet | `project/sfia-task-manager-cycle-4-ux-ui` (inchangée — autre projet) |
| HEAD | `139f45fd019aa0561bfb5c6b7a7bd1c748f570b4` |
| origin/main (après fetch) | `d3d199adb782462b93467934f5f1e8a0c98fb492` (évolué vs cycle 00 `d4d986af…`) |
| Status | untracked seulement : `.cursor/AIDE AUTO/`, `.cursor/LIORA/`, `.cursor/Projet F.O.R.G.E/`, `.cursor/mcp.json`, `.tmp-sfia-review/` |
| Staged | aucun |
| Diff versionné | aucun |
| STOP Git | non — pas de conflit de travaux en cours sur la branche |

---

### 2. Sources consultées

**Méthode / SFIA (référencées, Git accessible) :**
- `prompts/templates/sfia-cycle-execution-template.md` (§7.10 / §9.1)
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md`
- `method/.../sfia-v2.5-project-cycles-method-candidate.md` (référence historique cycle 7)

**Projet CRM / CourtiLien :**
- Consulté sur branche `docs/crm-assurance-courtage-1-3-watch-01` : `projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md` (+ présence cadrage 01-01…01-04)
- **Non trouvés localement** (donc non prétendus consultés) : ERD CourtiLien dédié, Design System CourtiLien, backlog CourtiLien, livrable « cycle de la donnée » nommé
- Docs techniques Softr : [Integrations MCP](https://docs.softr.io/mcp/integrations), [Airtable data source](https://docs.softr.io/data-sources/airtable)

**MCP :** Airtable `ping` OK · Softr IDE OK · Figma `whoami` OK

---

### 3. Qualification base Airtable — REAL BOUNDARY PROVEN

| Champ | Valeur |
|-------|--------|
| Nom | `sep26_bpbnc_courtage_assurance_2` |
| ID | `appjebCNHtEaCAzxy` |
| Permission MCP | `edit` (aucune écriture effectuée) |
| Tables | **11/11 présentes** |
| Description base | données de démonstration / fictives (descriptions tables) |

#### 3.1 Dictionnaire tables (IDs techniques)

| Table | tableId | Clé métier (primary) | Counts |
|-------|---------|----------------------|--------|
| UTILISATEUR | `tblRL15tkEL98Mpev` | `id` (USR-…) | 5 |
| PERSONNE | `tblpbBJLOV4psEgnA` | `id` (PER-…) | 12 |
| OPPORTUNITE | `tbljzcyDrxpnLDHpf` | `id` (OPP-…) | 12 |
| DEVIS | `tblGebX70fiDstxYx` | `id` (DEV-…) | 16 |
| COMPAGNIE | `tblwiXEgrMd9fz7Re` | `id` (CMP-…) | 3 |
| CONTRAT | `tblyBIyULJ4E5SwHJ` | `id` (CTR-…) | 8 |
| SINISTRE | `tblWCBjnOS8p5xCxi` | `id` (SIN-…) | 5 |
| DOCUMENT | `tblUkX3lgX18TiTLR` | `id` (DOC-…) | 14 |
| RENDEZ_VOUS | `tblD0Fu1phenqYWdJ` | `id` (RDV-…) | 10 |
| INTERACTION | `tbln6wGBCId0dLSnH` | `id` (INT-…) | 18 |
| JOURNAL | `tblXF7Ja8DLEeOTWg` | `id` (JRN-…) | 12 |

#### 3.2 Cartographie des 15 relations métier (côté dirigeant uniquement)

| # | Relation attendue | Champ Airtable | linkedTableId | prefersSingle | Statut |
|---|-------------------|----------------|---------------|---------------|--------|
| 1 | PERSONNE.courtier_referent → UTILISATEUR | `fldz0MEJ5lUj4mwYH` | `tblRL15tkEL98Mpev` | false | PASS |
| 2 | JOURNAL.utilisateur → UTILISATEUR | `fld9vSNwIWv4p7J5J` | `tblRL15tkEL98Mpev` | false | PASS |
| 3 | OPPORTUNITE.personne → PERSONNE | `fldzRK4lzHPA8ymW6` | `tblpbBJLOV4psEgnA` | false | PASS |
| 4 | RENDEZ_VOUS.personne → PERSONNE | `fldCVansuFjWFwUdR` | `tblpbBJLOV4psEgnA` | false | PASS |
| 5 | RENDEZ_VOUS.courtier → UTILISATEUR | `fldAeo9QDUK0elGgM` | `tblRL15tkEL98Mpev` | false | PASS |
| 6 | CONTRAT.personne → PERSONNE | `fldjbxUJuPXxBJhBZ` | `tblpbBJLOV4psEgnA` | false | PASS |
| 7 | CONTRAT.compagnie → COMPAGNIE | `fldmHO5K13ATpeqO6` | `tblwiXEgrMd9fz7Re` | false | PASS |
| 8 | INTERACTION.personne → PERSONNE | `fldFu3wIMXyGONMdw` | `tblpbBJLOV4psEgnA` | false | PASS |
| 9 | INTERACTION.auteur → UTILISATEUR | `fldBlmpqf7BKFIZrY` | `tblRL15tkEL98Mpev` | false | PASS |
| 10 | DEVIS.opportunite → OPPORTUNITE | `fldmSb6HCPl74Iwlx` | `tbljzcyDrxpnLDHpf` | false | PASS |
| 11 | DEVIS.compagnie → COMPAGNIE | `fldIfzxf7pbGf0LI2` | `tblwiXEgrMd9fz7Re` | false | PASS |
| 12 | SINISTRE.contrat → CONTRAT | `fldnSLuMvxntwJEOa` | `tblyBIyULJ4E5SwHJ` | false | PASS |
| 13 | DOCUMENT.personne → PERSONNE | `fldVWfDzNXEW5iEpu` | `tblpbBJLOV4psEgnA` | false | PASS |
| 14 | DOCUMENT.contrat → CONTRAT | `fld6MijY6AOC3PUul` | `tblyBIyULJ4E5SwHJ` | false | PASS |
| 15 | DOCUMENT.sinistre → SINISTRE | `fldqfW81akVtLc7cR` | `tblWCBjnOS8p5xCxi` | false | PASS |

**Note cardinalité :** tous les liens ont `prefersSingleRecordLink: false` → Airtable n’impose pas 1:N côté schéma ; la cardinalité métier reste à faire respecter applicativement.

**Inverse trompeur :** `UTILISATEUR.PERSONNE` (`fldrnt6mlP0Sd11pR`) est l’inverse de `PERSONNE.courtier_referent`, **pas** un lien « compte client → sa fiche PERSONNE ».

**Écarts ERD :** ERD CourtiLien dédié **absent** localement → écarts ERD = **NOT TESTED** (hors invention). Alignement constaté avec la liste contractuelle des 11 tables / 15 relations.

---

### 4. Contrôles qualité (read-only, agrégés, anonymisés)

| Contrôle | Résultat |
|----------|----------|
| Counts | UTILISATEUR 5 · PERSONNE 12 · OPP 12 · DEVIS 16 · CMP 3 · CTR 8 · SIN 5 · DOC 14 · RDV 10 · INT 18 · JRN 12 |
| IDs métier dupliqués (échantillon chargé) | 0 doublon d’`id` métier |
| Relations obligatoires manquantes (échantillon) | 0 orphelin sur OPP.personne, RDV.personne/courtier, CTR.personne/compagnie, DEV.opp/compagnie, SIN.contrat, INT.personne/auteur, JRN.utilisateur, DOC.personne |
| DOCUMENT sans contrat / sans sinistre | autorisé (liens facultatifs) — plusieurs DOC sans sinistre |
| Emails PERSONNE dupliqués | **1 doublon volontaire** (2 fiches, même email) — cas QA |
| UTILISATEUR.role | client=2 · courtier=2 · directeur=1 |
| UTILISATEUR.actif | 4 true · 1 false/absent (compte client) |
| PERSONNE.type | prospect=8 · client=4 |
| Dates contrat | tous `date_effet` < `date_echeance` sur l’échantillon |
| Dates sinistre | `date_survenance` ≤ `date_declaration` ; clôture présente seulement si statut clos |
| Pièces jointes | **non lues** (champ `fichier` non interrogé) |

---

### 5. Qualification des identités

**Rôles UTILISATEUR présents :** client · courtier · directeur — PASS.

**Lien dédié compte client → PERSONNE :** **ABSENT** (confirmé). Le champ `UTILISATEUR.PERSONNE` = inverse courtier_referent.

**Correspondance email (hypothèse non adoptée) :**
| Métrique | Valeur |
|----------|--------|
| Comptes role=client | 2 |
| Match email exact PERSONNE | 2/2 |
| Match unique | 2/2 |
| Ambiguïté (email multi-PERSONNE) | 0 sur les 2 comptes |
| Compte actif + PERSONNE actif | 1/2 (l’autre : USR inactif + PERSONNE statut inactif) |
| Emails PERSONNE non uniques globalement | oui (1 doublon QA hors comptes client) |

**Options Morris (décision requise — non tranchée) :**
1. Ajouter relation dédiée `UTILISATEUR.personne_client` (1:1) — **GO modèle** requis
2. Contrat d’identité email avec contraintes d’unicité + actif — **GO contrat** requis
3. Table de mapping / champ technique Softr users — **GO architecture** requis

---

### 6. Connexion Airtable / Softr — BLOCKED (intervention humaine)

**Workspace cible :** `f7d92030-1494-4050-b64b-afa7af837734` (William)
**App cible :** `7242211b-049d-4673-9262-19dd95ee9178` · `published: null` · login enabled · signUp DISABLED
**Intégrations workspace actuelles :** uniquement `Softr databases` (`763bada5-13f3-45ad-a563-c774f34be5e7`, type `SOFTR_TABLES`)
**Datasources app cible :** `[]` (aucune)

**Capacité MCP :** aucun outil Softr pour **créer** une intégration Airtable (docs MCP : connecter d’abord dans Studio, puis browsable via MCP).
**Parcours officiel à exécuter par Morris :**
1. Softr Studio → workspace **William** → **Integrations** → **Connect new** → **Airtable**
2. OAuth Airtable → autoriser **uniquement** la base `appjebCNHtEaCAzxy` / `sep26_bpbnc_courtage_assurance_2` (moindre privilège ; éviter « all bases » si possible)
3. Confirmer dans Cursor : `integration_list` doit montrer type `AIRTABLE`
4. Cursor reprendra alors : `integration_list_databases` → `integration_list_tables` → `application_register_data_source` pour les 7 tables client

**Non fait (conforme périmètre) :** sync utilisateurs Softr · routes · publication · écriture Airtable · touche à l’app historique.

**App historique `e8491c5f-…` :** read-only vérifiée · `published: null` · datasources = **SOFTR_TABLES** internes (Users, Fiches clients, Dossiers, …) — **non modifiée**.

---

### 7. Mapping sources Softr prévu (non appliqué — prérequis Airtable)

Tables à enregistrer sur l’app cible uniquement :

| Table métier | Airtable tableId | datasourceId Softr |
|--------------|------------------|--------------------|
| UTILISATEUR | `tblRL15tkEL98Mpev` | PENDING |
| PERSONNE | `tblpbBJLOV4psEgnA` | PENDING |
| CONTRAT | `tblyBIyULJ4E5SwHJ` | PENDING |
| COMPAGNIE | `tblwiXEgrMd9fz7Re` | PENDING |
| DOCUMENT | `tblUkX3lgX18TiTLR` | PENDING |
| SINISTRE | `tblWCBjnOS8p5xCxi` | PENDING |
| RENDEZ_VOUS | `tblD0Fu1phenqYWdJ` | PENDING |

Tables cabinet non enregistrées ce cycle : OPPORTUNITE · DEVIS · INTERACTION · JOURNAL.

---

### 8. Preuves techniques

| Preuve | Statut | Détail |
|--------|--------|--------|
| Accès Airtable schéma | **REAL BOUNDARY PROVEN** | list_tables + get_table_schema |
| Accès Airtable lectures bornées | **REAL BOUNDARY PROVEN** | list_records agrégés |
| Intégration Airtable reconnue Softr | **NOT PROVEN / BLOCKED** | absente de integration_list |
| Base cible accessible depuis Softr | **NOT PROVEN** | dépend OAuth Studio |
| Tables enregistrées app cible | **NOT PROVEN** | datasources vides |
| Lecture via Softr sample records | **NOT TESTED** | prérequis intégration |
| application_check app cible | **PASS** | `{ ok: true, issues: [] }` |
| App cible non publiée | **PASS** | `published: null` |
| Restrictions data app cible | **PASS (vide)** | aucune restriction configurée |
| App historique intacte | **PASS** | read-only confirmé |
| Airtable MCP préservé | **PASS** | ping |
| Figma MCP préservé | **PASS** | whoami |
| Secrets dans code | **PASS** | aucun ajout |

---

### 9. Sécurité / offres gratuites — matrice proposée (non validée)

| Capacité | Observation cycle | Claim |
|----------|-------------------|-------|
| 3 apps distinctes | décision validée ; 2 apps présentes, 3e non créée | NOT TESTED (création hors scope) |
| Quotas users mutualisés | non mesuré | NOT TESTED |
| Auth email code | login enabled / EMAIL_CODE | PASS config |
| Filtrage par utilisateur | data restrictions vides | NOT PROVEN |
| Autorisation serveur | non câblée (pas de queries métier) | NOT PROVEN |
| Publication | non publiée | PASS (état sûr actuel) |

**Matrice cible proposée (contrôle jusqu’à GO Morris) :**

| Rôle \ Table | UTILISATEUR | PERSONNE | CONTRAT | COMPAGNIE | DOCUMENT | SINISTRE | RDV |
|--------------|-------------|----------|---------|-----------|----------|----------|-----|
| client | self read | self read | self read | read linked | self read | self read | self read |
| courtier | — | portefeuille | portefeuille | read | portefeuille | portefeuille | portefeuille |
| directeur | read | read | read | read | read | read | read |
| anon | deny | deny | deny | deny | deny | deny | deny |

Écritures client : aucune dans ce cycle ; toute écriture = GO distinct.

**Tests négatifs nécessaires (cycle client ultérieur) — NOT TESTED :**
- client A ≠ données client B
- non authentifié refusé
- rôle incorrect refusé
- accès ID tiers refusé
- écriture non autorisée refusée

---

### 10. Retour arrière

1. Si intégration Airtable créée en Studio : révoquer / supprimer l’intégration workspace (impacte toutes apps du workspace)
2. Si datasources enregistrées : `application_remove_data_source` par datasourceId
3. Aucune donnée Airtable à restaurer (aucune écriture)
4. App historique non touchée

---

### 11. Réserves / décisions Morris

1. **GO immédiat requis :** OAuth Airtable dans Softr Studio (workspace William) limité à `appjebCNHtEaCAzxy`
2. **GO distinct :** contrat d’identité (email vs relation dédiée vs mapping)
3. **GO distinct :** modification modèle / unicité email / `prefersSingle`
4. **GO distinct :** publication · sync users · apps courtier/direction · n8n
5. Livrables Liora ERD/DS/backlog CourtiLien absents du workspace local consulté
6. Connexion Softr↔Airtable = **INCOMPLETE / TOOLING GAP MCP** (Studio only)

---

### 12. Fake / Real Qualification

| Champ | Valeur |
|-------|--------|
| Applicable | oui |
| Mock | aucun |
| Preuve Airtable | REAL BOUNDARY PROVEN |
| Preuve Softr↔Airtable | NOT PROVEN |
| Parité Softr=Airtable | non testable tant que non connecté |
| Hors scope | E2E métier · cloisonnement multi-user |
| Claims interdits respectés | oui (pas de MVP / sécurité métier complète) |

---

### 13. Statuts synthétiques

| Statut | Résultat |
|--------|----------|
| Audit schéma 11 tables | **PASS** |
| Audit 15 relations | **PASS** |
| Contrôles qualité read-only | **PASS** |
| Qualification identités | **PASS avec réserves** (pas de lien dédié) |
| Connexion Softr Airtable | **BLOCKED** |
| Enregistrement sources app cible | **BLOCKED** |
| Preuve lecture Softr | **NOT TESTED** |
| App historique préservée | **PASS** |
| App cible non publiée | **PASS** |
| Airtable / Figma MCP | **PASS** |
| Écriture Airtable | **PASS** (aucune) |
| Handoff | voir §14 |

---

### 14. Review Handoff Git

- decision : required
- mode : publish-in-cycle
- motif local-only : N/A
- source : `.tmp-sfia-review/chatgpt-review.md`
- branch : `sfia/review-handoff`
- file : `sfia-review-handoff/latest-chatgpt-review.md`
- push : oui — L3 borné
- (SHA renseignés après publisher — une seule publication finale)

---

### 15. Verdict

**READY WITH RESERVES** — qualification Airtable REAL complète ; intégration Softr↔Airtable **non établie** faute d’outil MCP de connexion (OAuth Studio obligatoire).
Sous-état technique : **INCOMPLETE / TOOLING GAP** sur la frontière Softr↔Airtable.

Mono-cycle · aucun stub final · aucune donnée nominative publiée.
