# COURTILIEN-02B-SEC — Review pack Full

**Cycle :** COURTILIEN-02B-SEC — Identité et accès (mapping + sécurisation bornée)
**Type :** 8 — Delivery / implémentation · **Profil :** Standard · **Typologie :** EVOL
**Date rapport :** 2026-11-20 10:59:00 CET (Europe/Paris)
**Verdict review pack :** `READY WITH RESERVES`
**Readiness accès client / BUILD UI :** **`NOT READY FOR CLIENT ACCESS`**

---

## 1. Local Git Truth Check

| Contrôle | Valeur |
|----------|--------|
| Repository | `mcleland147/sfia-workspace` |
| Branche | `project/sfia-task-manager-cycle-4-ux-ui` |
| HEAD | `139f45fd019aa0561bfb5c6b7a7bd1c748f570b4` |
| origin/main | `d3d199adb782462b93467934f5f1e8a0c98fb492` |
| Staged | vide |
| status --short | untracked hors projet (`.cursor/…`, `.tmp-sfia-review/…`) |
| Anomalie | aucune — autres travaux préservés |

Handoff 02A historique lu : `098f414d…` (`finalize COURTILIEN-02A identity relation`). Tip handoff en début de cycle = même commit.

Sources lues via `origin/main:` (sans checkout) : template, routing, operating model, guardrails, checklist, CKC cycle 8.

---

## 2. Pre-check Airtable — PASS

| Contrôle | Résultat |
|----------|----------|
| Base `appjebCNHtEaCAzxy` | PASS (`permissionLevel: create`) |
| 11 tables / `personne_client` `fldQyeldPXKvOfVsg` | PASS |
| Inverse `fldj3FI4pdErBEZhM` | PASS |
| Client-A métier USR-004 | record `recKqV6VRULDdCUQI` · role=client · actif=true |
| Fiche PER-004 | record `recFtQZ13T61lt89x` · type=client · statut=actif |
| `personne_client` initial USR-004 | **vide** (sauvegarde rollback = `[]` / absent) |
| Inverse client sur PER-004 | **vide** avant écriture |
| Aucun autre USR → PER-004 via `personne_client` | PASS |
| Lien incompatible USR-004 | absent |
| Client-B USR-005 | HOLD — actif absent · aucune écriture |
| PER-009 | HOLD — statut inactif · inverse client vide |

---

## 3. Mapping appliqué — PASS

**Mutation unique :**
```
table: UTILISATEUR (tblRL15tkEL98Mpev)
recordId: recKqV6VRULDdCUQI  # USR-004
fieldId: fldQyeldPXKvOfVsg   # personne_client
value: ["recFtQZ13T61lt89x"] # PER-004
```
Aucune autre colonne transmise.

### Relecture après écriture

| Sens | Résultat |
|------|----------|
| USR-004 → personne_client | **PER-004** unique (`recFtQZ13T61lt89x`) |
| PER-004 → inverse `UTILISATEUR` (`fldj3FI4pdErBEZhM`) | **USR-004** unique (`recKqV6VRULDdCUQI`) |
| Autres comptes `personne_client` | **aucun** (USR-005 / courtiers / directeur vides) |
| USR-005 / PER-009 | **inchangés** (HOLD) |
| courtier_referent PER-004 | toujours USR-002 (courtier) — **≠** personne_client |

### Mapping anonymisé

| Alias | Mapping métier | Record IDs | Statut |
|-------|----------------|------------|--------|
| Client-A | USR-004 → PER-004 | `recKqV6…` → `recFtQZ…` | **APPLIQUÉ** |
| Client-B | USR-005 → PER-009 | — | **HOLD** (aucune écriture) |

### Rollback documenté (non exécuté)
`update_records_for_table` : `fldQyeldPXKvOfVsg` ← `[]` sur `recKqV6VRULDdCUQI`.

---

## 4. Contrat d'identité Softr — état

### Avant / après (inchangé côté Softr)

| Élément | Valeur |
|---------|--------|
| user connection | `source: null` |
| users | `total: 0` |
| data restrictions | `[]` |
| groupes | All / Logged in / Non Logged in (PREDEFINED only) |
| login | EMAIL_CODE · signUp DISABLED · published null |
| datasources | **7** inchangées |

### Contrat cible (documenté, non branché)

```
Session Softr authentifiée
→ UTILISATEUR correspondant
→ role == client
→ actif == true
→ personne_client exactement 1 lien
→ PERSONNE type=client, statut=actif
→ objets métier liés uniquement à cette PERSONNE
Sinon : REFUS PAR DÉFAUT
```

---

## 5. User connection — STOP (fail-closed)

### Qualification `application_create_user_connection`

Documentation outil (extraits exploitables) :
- « Connecting REQUESTS a user sync — turns the table's rows into application users »
- « Apps have it [two-way user sync] on from creation »
- `userSyncStarted: false` seulement si sync pausée côté app
- `createUserInDatasource=false` concerne l'écriture signup → datasource, **pas** l'import des lignes existantes
- Aucun outil MCP pour pauser la sync avant connexion
- Interdit : `replaceExisting=true` · invitation · inscription publique

### Effet attendu si exécuté maintenant

Import probable des **5** lignes UTILISATEUR (directeur, 2 courtiers, Client-A, Client-B HOLD) en utilisateurs applicatifs — **hors GO** (pas d'import/sync non maîtrisée).

### Décision cycle
**STOP — user connection non exécutée.**
Aucune synchronisation déclenchée. `users` reste 0.

**GO Morris distinct requis** pour :
- mécanisme d'identité sans import involontaire, **ou**
- sync bornée (filtre / sync off prouvée / table miroir clients-only).

---

## 6. Groupes et restrictions — proposés, non configurés

### Pourquoi non installés
Sans user connection opérationnelle :
- groupes conditionnels sur `role`/`actif` **impossibles** (outil : condition-based groups bloqués si pas de users table) ;
- restrictions liées à l'identité UTILISATEUR **non bindables** de façon vérifiable ;
- installer ALLOW_ONLY/RESTRICT sur « Logged in users » sans chaîne d'identité = **faux sentiment de sécurité** ou risque d'élargissement.

### Matrice proposée (non configurée)

| Table | Objectif | Statut |
|-------|----------|--------|
| UTILISATEUR | Voir uniquement son propre enregistrement | proposée |
| PERSONNE | Uniquement `personne_client` de la session | proposée |
| CONTRAT / DOCUMENT / SINISTRE / RENDEZ_VOUS | Via PERSONNE de la session | proposée |
| COMPAGNIE | Lecture minimale non sensible | proposée |

### Règles
| Catégorie | Contenu |
|-----------|---------|
| Proposées | Matrice ci-dessus + fail-closed sur lien absent / multi / inactif / mauvais rôle |
| Configurées | **aucune** |
| Effectivement prouvées | **aucune** (cloisonnement runtime) |

Réserve technique : comparaison sûre d'identité sur `multipleRecordLinks` Airtable via restrictions Softr **non démontrée** — ne pas installer sans preuve.

---

## 7. Tests de sécurité

| Scénario | Résultat |
|----------|----------|
| Client-A → ses données uniquement | **NOT TESTED** (pas de session) |
| Client-A → données Client-B refusées | **NOT TESTED** |
| Client inactif | **NOT TESTED** |
| Sans personne_client | **NOT TESTED** |
| Plusieurs PERSONNE | **NOT TESTED** |
| Rôle courtier espace client | **NOT TESTED** |
| Anonyme | **NOT TESTED** |
| Objet tiers / écriture non autorisée | **NOT TESTED** |
| Mapping Airtable unicité Client-A | **PASS** (lecture) |
| HOLD Client-B | **PASS** (aucune écriture) |

Emails `@example.com` : connexion EMAIL_CODE réelle **non utilisable** → E2E auth **hors scope**.

---

## 8. Validations finales

| Contrôle | Résultat |
|----------|----------|
| Une seule liaison Airtable appliquée | PASS |
| USR-005 inchangé | PASS |
| Schéma 11/16 inchangé | PASS |
| 7 datasources | PASS |
| Import Softr inattendu | PASS (aucun — connection non créée) |
| App historique intacte | PASS |
| App cible non publiée · signup DISABLED | PASS |
| Secrets / emails nominatifs dans Git | PASS (anonymisé) |
| git status / diff tracké | PASS |
| Cloisonnement serveur | **FAIL / NOT PROVEN** |
| Ready BUILD UI | **NOT READY** |

---

## 9. Fake / Real Qualification

| Élément | Valeur |
|---------|--------|
| Applicable | oui |
| Mock | aucun |
| Mapping Airtable | **REAL BOUNDARY PROVEN** |
| User connection / sync | **NOT EXECUTED** (STOP) |
| Restrictions / cloisonnement | **NOT PROVEN** |
| Auth session | **NOT TESTED** (@example.com) |
| Claims interdits | Sécurité complète · MVP · auth prouvée sans session |

---

## 10. Décisions Morris restantes

| # | Décision |
|---|----------|
| D1 | Autoriser sync/identité maîtrisée (pause sync prouvée, table miroir clients-only, ou autre mécanisme) |
| D2 | Configurer groupes + restrictions serveur après D1 |
| D3 | Tests négatifs avec comptes de test réels (GO distinct) |
| D4 | Client-B HOLD → GO mapping ultérieur |
| D5 | BUILD UI |
| D6 | Publication |

---

## 11. Verdict

**`READY WITH RESERVES`** — mapping Client-A appliqué et prouvé ; Softr identité/accès **STOP fail-closed** correctement (pas d'import non maîtrisé).

**`NOT READY FOR CLIENT ACCESS`** — cloisonnement serveur non démontré.

**`INCOMPLETE / TOOLING GAP`** (sous-composante) — pas de levier MCP pour connecter UTILISATEUR sans risque de sync des 5 comptes.

Handoff attendu : `docs(review-handoff): COURTILIEN-02B-SEC identity access`
