# ChatGPT Review Pack — Full
## COURTILIEN-01 — Qualification et intégration Airtable (finalisé)

**Date :** 2026-11-19 · **Heure :** 21:41 CET (UTC+1)
**Projet :** CourtiLien — CRM courtage · **Phase Liora :** 2.4
**Cycle :** 7 — Intégration / DevOps · **Profil :** Standard · **Autonomie :** L3 bornée
**CKC :** carte synthétique candidate (cycle 7)
**Studio historique / Next :** N/A
**Mode handoff :** publish-in-cycle
**Consolide :** audit COURTILIEN-01 (handoff `7e0a1886…`) + finalisation OAuth / sources

---

### 1. Local Git Truth Check

| Champ | Valeur |
|-------|--------|
| Repo | `mcleland147/sfia-workspace` |
| Branche projet | `project/sfia-task-manager-cycle-4-ux-ui` |
| HEAD | `139f45fd019aa0561bfb5c6b7a7bd1c748f570b4` |
| origin/main | `d3d199adb782462b93467934f5f1e8a0c98fb492` |
| Status | untracked seulement (`.cursor/…`, `.tmp-sfia-review/`) |
| Staged / diff versionné | aucun |
| STOP Git | non |

Handoff précédent capitalisé : `origin/sfia/review-handoff` @ `7e0a18862aba90501a47d0dd13a0de6bf123f0a9`.

---

### 2. Sources consultées

- Template SFIA §7.10 / §9.1 + routing / operating model / guardrails / checklist / CKC carte synthétique cycle 7
- Handoff COURTILIEN-01 précédent (audit schéma 11/15, qualité, identité, blocage OAuth)
- Doctrine CRM (référence précédente) — ERD/DS/backlog CourtiLien dédiés toujours absents localement
- Docs Softr MCP integrations / Airtable data sources

---

### 3. Preuves capitalisées (audit 1 — inchangées)

| Preuve | Résultat |
|--------|----------|
| Base `appjebCNHtEaCAzxy` / `sep26_bpbnc_courtage_assurance_2` | REAL — permission edit, 11 tables |
| 15 relations métier | PASS (côté dirigeant) |
| Counts démo | USR 5 · PER 12 · OPP 12 · DEV 16 · CMP 3 · CTR 8 · SIN 5 · DOC 14 · RDV 10 · INT 18 · JRN 12 |
| Orphelins relations obligatoires | 0 (échantillon) |
| Doublon email PERSONNE | 1 cas QA volontaire |
| Lien dédié client USR→PERSONNE | **ABSENT** ; `UTILISATEUR.PERSONNE` = inverse courtier_referent |
| Email match client (hypothèse) | 2/2 uniques — **non adopté** |
| App historique | SOFTR_TABLES internes — non modifiée |

---

### 4. Levée du blocage OAuth — REAL BOUNDARY PROVEN

| Élément | Valeur |
|---------|--------|
| Workspace | William `f7d92030-1494-4050-b64b-afa7af837734` |
| Intégration Airtable | `6430d52c-0fc0-4692-b971-ad40e1b23795` · type `AIRTABLE` · capabilities DATA |
| Base listée via Softr | **uniquement** `appjebCNHtEaCAzxy` / `sep26_bpbnc_courtage_assurance_2` |
| Tables Softr (id=name) | 11/11 dont les 7 cibles |
| Nouvelle intégration créée ce cycle | **non** — réutilisation OAuth Morris |

---

### 5. Application cible

| Champ | Valeur |
|-------|--------|
| ID | `7242211b-049d-4673-9262-19dd95ee9178` |
| published | `null` — **non publiée** |
| signUp | `DISABLED` |
| login | EMAIL / EMAIL_CODE |
| user connection | `source: null` — **aucune sync users** (conforme) |
| datasources avant | `[]` |
| datasources après | **7** AIRTABLE → base `appjebCNHtEaCAzxy` |

---

### 6. Mapping des sept sources (configuration créée)

Softr Airtable : `tableId` = **nom de table** (pas `tbl…`).

| Table | Softr tableId | datasourceId | base | Type |
|-------|---------------|--------------|------|------|
| UTILISATEUR | `UTILISATEUR` | `ca4a934b-2050-4762-8ec2-683213e4908f` | `appjebCNHtEaCAzxy` | AIRTABLE |
| PERSONNE | `PERSONNE` | `82b33bf9-b942-42e9-90d5-1e825fe66765` | `appjebCNHtEaCAzxy` | AIRTABLE |
| CONTRAT | `CONTRAT` | `86c086bc-5f10-40de-bcb9-3fdb0cf1cd6c` | `appjebCNHtEaCAzxy` | AIRTABLE |
| COMPAGNIE | `COMPAGNIE` | `76455964-83b4-48d7-8977-9508346fec77` | `appjebCNHtEaCAzxy` | AIRTABLE |
| DOCUMENT | `DOCUMENT` | `55b16074-6490-47c1-8d61-c35b5753d567` | `appjebCNHtEaCAzxy` | AIRTABLE |
| SINISTRE | `SINISTRE` | `8ae6acd1-5b61-41de-92e8-8df4a092b09f` | `appjebCNHtEaCAzxy` | AIRTABLE |
| RENDEZ_VOUS | `RENDEZ_VOUS` | `34d8f20d-0807-4326-9601-094efa0d08a0` | `appjebCNHtEaCAzxy` | AIRTABLE |

**Non enregistrées :** OPPORTUNITE · DEVIS · INTERACTION · JOURNAL.

**Idempotence :** re-register UTILISATEUR → même `datasourceId` `ca4a934b-…` · liste finale = 7 (pas de doublon).

**Config non sensible (extrait) :**
```json
{
  "applicationId": "7242211b-049d-4673-9262-19dd95ee9178",
  "integrationId": "6430d52c-0fc0-4692-b971-ad40e1b23795",
  "databaseId": "appjebCNHtEaCAzxy",
  "datasources": 7,
  "fieldReferenceKey": "name"
}
```

---

### 7. Preuves de lecture via Softr — REAL BOUNDARY PROVEN

Outil : `integration_get_sample_records` (champs non nominatifs ; pas d’attachments).

| Source | Schéma | totalCount Softr | Lecture | Alignement audit Airtable | Statut |
|--------|--------|------------------|---------|---------------------------|--------|
| UTILISATEUR | PASS (`fieldReferenceKey=name`) | 5 | 5 ids USR + roles | 5 | **PASS** |
| PERSONNE | PASS | 12 | 5 ids PER + type/statut | 12 | **PASS** |
| CONTRAT | PASS | 8 | 5 ids CTR | 8 | **PASS** |
| COMPAGNIE | PASS | 3 | 3 ids CMP | 3 | **PASS** |
| DOCUMENT | PASS | 14 | 5 ids DOC (sans fichier) | 14 | **PASS** |
| SINISTRE | PASS | 5 | 5 ids SIN | 5 | **PASS** |
| RENDEZ_VOUS | PASS | 10 | 5 ids RDV | 10 | **PASS** |

**Distinction des preuves :**
1. Lecture workspace integration : **PROVEN**
2. Source enregistrée dans l’app : **PROVEN** (7 datasourceId)
3. Lecture runtime applicative (queries générées / UI) : **NOT TESTED** (hors scope — pas de route créée)

Parité : mêmes counts que l’audit Airtable MCP → **pas de duplication de données** (pointeurs vers la base commune).

---

### 8. Validations techniques

| Contrôle | Résultat |
|----------|----------|
| `application_check` | **PASS** `ok:true` ; refresh généré côté Softr : `docs/datasources/README.md`, `src/softr-fields.ts` (artefacts app, hors Git local) |
| 7 sources / 0 doublon | **PASS** |
| App non publiée | **PASS** |
| Inscription publique désactivée | **PASS** |
| Sync utilisateurs | **PASS** (non effectuée ; user connection vide) |
| Écriture Airtable | **PASS** (aucune) |
| Schéma / modèle | **PASS** (inchangé) |
| App historique | **PASS** (7 SOFTR_TABLES inchangées) |
| Airtable MCP | **PASS** (`ping`) |
| Figma MCP | **PASS** (`whoami`) |
| Git projet | **PASS** (aucun fichier versionné modifié) |

---

### 9. Retour arrière

1. Retirer uniquement les 7 `datasourceId` ci-dessus via `application_remove_data_source`
2. **Ne pas** supprimer l’intégration Airtable workspace (partagée)
3. **Ne pas** modifier/supprimer tables Airtable
4. App historique déjà intacte

---

### 10. Prérequis cycle 02 — BUILD client

| Prérequis | État |
|-----------|------|
| Mapping sources | fourni §6 — utiliser `datasourceId` + `fieldReferenceKey=name` |
| Auth | login EMAIL_CODE ON ; signUp DISABLED ; **pas** de users table connectée |
| Rattachement client ↔ PERSONNE | **GO Morris requis** (email vs relation dédiée vs mapping) — non modifié |
| Restrictions data | aucune configurée → à implémenter |
| Autorisation serveur | à déclarer dans le code généré (queries/permissions) |
| Tests négatifs cloisonnement | NOT TESTED — requis avant READY métier |

**Tests négatifs à jouer au cycle client :** A≠B · anon deny · rôle incorrect · ID tiers · écriture refuse.

---

### 11. Fake / Real Qualification

| Champ | Valeur |
|-------|--------|
| Applicable | oui |
| Mock | aucun |
| Airtable audit | REAL BOUNDARY PROVEN |
| OAuth Softr | REAL BOUNDARY PROVEN |
| Enregistrement sources | REAL BOUNDARY PROVEN |
| Lecture via Softr | REAL BOUNDARY PROVEN (7/7) |
| Runtime UI / cloisonnement | NOT PROVEN / hors scope |
| Claims interdits | respectés (pas de MVP / sécu métier complète) |

---

### 12. Réserves / décisions Morris

1. **GO identité** — contrat client UTILISATEUR↔PERSONNE (non arbitrée)
2. **GO BUILD** — interfaces, restrictions, tests négatifs
3. **GO publication** — distinct
4. Data restrictions encore vides → pas de preuve de cloisonnement
5. `application_check` a rafraîchi fichiers générés Softr (attendu ; hors Git repo)

---

### 13. Statuts synthétiques

| Statut | Résultat |
|--------|----------|
| Audit schéma / relations (capitalisé) | **PASS** |
| OAuth Airtable Softr | **PASS** |
| Enregistrement 7 sources | **PASS** |
| Idempotence | **PASS** |
| Lecture Softr 7/7 | **PASS** |
| application_check | **PASS** |
| App historique | **PASS** |
| Non-publication | **PASS** |
| Cloisonnement multi-user | **NOT TESTED** |
| Handoff | voir §14 |

---

### 14. Review Handoff Git

- decision : required
- mode : publish-in-cycle
- motif local-only : N/A
- source : `.tmp-sfia-review/chatgpt-review.md`
- branch : `sfia/review-handoff`
- file : `sfia-review-handoff/latest-chatgpt-review.md`
- commit message : `docs(review-handoff): finalize COURTILIEN-01 integration`
- push : oui — L3 borné
- (SHA / blob vérifiés après publisher — une publication)

---

### 15. Verdict

**READY FOR REVIEW** — intégration technique Softr↔Airtable **REAL BOUNDARY PROVEN** (connexion + 7 sources + lectures bornées).
Réserves documentées pour BUILD / identité / cloisonnement (GO distincts).

Mono-cycle consolidé · aucun stub final · aucune donnée nominative.
