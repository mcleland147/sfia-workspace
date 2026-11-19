# ChatGPT Review Pack — Light
## Cycle 00 — Setup Cursor & MCP Softr (CourtiLien)
**Date :** 2026-11-19 · **Heure :** 21:00 CET (UTC+1) · **Profil :** Standard · **Type :** 7 — Intégration / DevOps
**Méthodologie :** Liora / SFIA v2.6 · **Autonomie :** L3 bornée · **Mode handoff :** publish-in-cycle
**CKC :** carte synthétique candidate (cycle 7 — pas de pilote détaillé) · Studio historique/Next : N/A

---

### 1. Local Git Truth Check (début)

| Champ | Valeur |
|-------|--------|
| Repo | `mcleland147/sfia-workspace` (`/Users/l/Projects/sfia-workspace`) |
| Branche projet | `project/sfia-task-manager-cycle-4-ux-ui` |
| HEAD | `139f45fd019aa0561bfb5c6b7a7bd1c748f570b4` |
| origin/main | `d4d986af5884b31b416374da3cb5e60757501f87` |
| `git status --short` | Untracked only : `.cursor/AIDE AUTO/`, `.cursor/LIORA/`, `.cursor/Projet F.O.R.G.E/`, `.cursor/mcp.json`, `.tmp-sfia-review/` |
| Staged | aucun |
| Ref consultation | `main` (lecture templates/méthode) — **aucune** modification projet versionnée |

Workspace Cursor ouvert : `.cursor/AIDE AUTO` (sous-dossier, dépôt local sans commits — hors vérité Git méthodo).

---

### 2. Découverte locale

| Élément | Résultat |
|---------|----------|
| OS | macOS 26.5.2 (Darwin arm64) |
| Shell | `/bin/bash` |
| HOME | `/Users/l` |
| Cursor | 3.15.19 (`de07bee…`) |
| CLI Agent | installée ce cycle (`2026.11.19-f005e9d` via `curl https://cursor.com/install`) → `~/.local/bin/agent` |
| `~/.cursor/mcp.json` | **absent** en entrée → créé |
| `.cursor/mcp.json` projet | présent, `mcpServers: {}` — **non modifié** (hors périmètre fichier autorisé) |
| Airtable / Figma | plugins Cursor déjà présents (`plugin-airtable-airtable`, `plugin-figma-figma`) — hors `mcp.json` |

**CKC cycle 7 :** `method/.../cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md` + matrice routing — carte synthétique ; pas de pilote détaillé.
**Sources lues :** template exécution §7.10/§9.1 ; docs Softr MCP connect ; docs Cursor CLI MCP.

---

### 3. Configuration Softr (expurgée)

- **Sauvegarde :** pré-état documenté `~/.cursor/mcp-backups/mcp.json.ABSENT-before-softr-<ts>.txt` (fichier global n'existait pas).
- **Action :** ajout unique de l'entrée `Softr` dans `~/.cursor/mcp.json`.
- **Structure (sans secret) :**
  - clé serveur : `Softr`
  - `url` : `https://mcp.softr.io/mcp`
  - `auth.CLIENT_ID` : présent (ID public Cursor documenté Softr — non republier en clair ici au-delà du préfixe `4d2556b2…`)
- **JSON :** syntaxe validée.
- **Diff conceptuel :** seule entrée ajoutée ; aucun autre serveur global.

---

### 4. Authentification

1. **CLI :** `agent mcp list` → `Softr: requires_authentication`
2. **CLI :** `agent mcp login Softr` → navigateur OAuth Softr → callback `localhost:8787` → **MCP login successful** (code tronqué `4EtBhs…`)
3. **CLI post-login :** `Softr: ready` ; `agent mcp list-tools Softr` → **167 outils**
4. **Session Cursor IDE :** namespace `user-Softr` `needsAuth` → `mcp_auth` → **Successfully authenticated**
5. **Intervention humaine :** connexion compte Softr + consentement OAuth (réalisée) — aucun mot de passe/token transmis au chat.

**Réserve :** `agent -p` nécessite `agent login` (compte Cursor) — non requis car tests exécutés via outils MCP natifs Cursor. Un re-check CLI ultérieur a pu remonter `requires_authentication` (stores OAuth CLI vs IDE distincts possibles) — **session Cursor prouvée REAL**.

---

### 5. Tests REAL (read-only) — preuves

#### 5.1 Workspaces / applications — REAL BOUNDARY PROVEN

`workspace_list` → 2 workspaces (ids présents ; noms Ludovic / William).
`application_list` → **2 apps** :

| Nom | ID | Type |
|-----|----|------|
| CourtiLien — Espace client | `7242211b-049d-4673-9262-19dd95ee9178` | APP |
| Espace client Courtage | `e8491c5f-9938-4731-b38f-f4c97d2a553e` | APP |

Les deux IDs cibles du contrat sont **accessibles**.

#### 5.2 Lecture fichiers — REAL BOUNDARY PROVEN (≠ `{}`)

Contrairement à ChatGPT (`application_read_file` → `{}`), Cursor a reçu **contenu + hash + truncated:false** pour les 8 lectures.

**App nouvelle `7242211b-…`**

| Path | Hash (sha256) | Contenu |
|------|---------------|---------|
| `src/lib/app.ts` | `dbb83528…78e5073` | non vide (`APP_NAME = 'Blank app'`) |
| `src/styles.css` | `f353b3ad…c2467e` | non vide (tokens Tailwind/shadcn) |
| `src/routes/_app.tsx` | `658e7c9c…04a362` | non vide (shell Sidebar) |
| `src/routes/_app/index.tsx` | `945aba09…1ee239` | non vide (Home placeholder) |

**App historique `e8491c5f-…`**

| Path | Hash (sha256) | Contenu |
|------|---------------|---------|
| `src/lib/app.ts` | `96875aaf…e1fa2ea` | non vide (`APP_NAME = 'CourtiLien'`) |
| `src/styles.css` | `7e4e90e2…6b119bb` | non vide (palette CourtiLien) |
| `src/routes/_app.tsx` | `c50d721d…679ce9d` | non vide (masthead + nav métier) |
| `src/routes/_app/index.tsx` | `da499638…ba23e418` | non vide (dashboard métriques) |

**Verdict lecture :** PASS — pas de tooling gap Cursor sur ces paths.
**Hors scope :** preuve e2e métier / delivery.

#### 5.3 Non-régression MCP

| MCP | Preuve | Statut |
|-----|--------|--------|
| Airtable | `ping` → `pong` | PASS |
| Figma | `whoami` → handle `ludo_zaya` | PASS |
| Softr | list + read | PASS |
| Projet `mcpServers` | inchangé `{}` | PASS |

---

### 6. Fichiers créés / modifiés (périmètre)

| Fichier | Action |
|---------|--------|
| `~/.cursor/mcp.json` | créé (Softr only) |
| `~/.cursor/mcp-backups/mcp.json.ABSENT-before-softr-*` | métadonnée pré-état |
| `.tmp-sfia-review/chatgpt-review.md` | réinitialisé puis complété (ce fichier) |
| `sfia-review-handoff/latest-chatgpt-review.md` | publication handoff (copie) |

**Non touchés :** apps Softr, Airtable, Figma, stack, secrets versionnés, commits projet.

---

### 7. Garde-fous

- Secrets non affichés / non versionnés : oui
- OAuth non contourné : oui
- Airtable/Figma préservés : oui
- Aucun commit/PR/push projet : oui
- Handoff L3 borné uniquement : oui (en cours de publication)

---

### 8. Fake / Real Qualification

| Champ | Valeur |
|-------|--------|
| Applicable | oui |
| Mock | aucun |
| Frontière REAL | Cursor ↔ MCP Softr ↔ OAuth ↔ lectures |
| Preuve entrée | NOT PROVEN → **levée** |
| Preuve attendue | REAL BOUNDARY PROVEN (list + read) — **atteinte** |
| Hors scope | e2e métier |
| Claims autorisés | connexion + lectures prouvées |
| Claims interdits | delivery métier READY |

---

### 9. Réserves / décisions Morris

1. **CLI Agent Cursor account :** `agent login` non effectué — `agent -p` indisponible ; non bloquant (MCP IDE OK).
2. **Double store OAuth :** auth CLI et auth IDE peuvent diverger ; surveiller `agent mcp list`.
3. **Nouvelle app** encore `APP_NAME = 'Blank app'` / home placeholder — observation hors scope setup MCP.
4. **Décision Morris :** aucune gate bloquante pour clôturer le setup MCP ; suite métier séparée.

---

### 10. Statuts cycle

| Statut | Résultat |
|--------|----------|
| Softr installé | **PASS** |
| Softr authentifié | **PASS** |
| Outils Softr accessibles | **PASS** (167) |
| Applications accessibles | **PASS** (2/2 cibles) |
| Lecture intégrale du code | **PASS** (8/8 non vides) |
| Airtable préservé | **PASS** |
| Figma préservé | **PASS** |
| Réserves | mineures (CLI account login) |
| Verdict handoff | voir publication §11 |

---

### 11. Review Handoff Git

- decision : **required**
- mode : **publish-in-cycle**
- push : oui — L3 borné
- source : `.tmp-sfia-review/chatgpt-review.md`
- branch : `sfia/review-handoff`
- file : `sfia-review-handoff/latest-chatgpt-review.md`
- handoff remote commit before : `a70a63411ccb65392ad428ef7a8d1fd4273f3130`
- handoff local/remote commit after : `3bc68d11d7f3a9b00f06c5b89235a8b871760bbd`
- blob : `64cb1734a9ed066ed29d31ba44853bad67097484`
- push handoff : **done**
- remote verification : **yes** (`HANDOFF UPDATED — REMOTE VERIFIED`)
- remote file re-read : **yes**
- retour branche initiale : **yes** (`project/sfia-task-manager-cycle-4-ux-ui` @ `139f45fd…`)
- cohérence projet / staged : **yes** (aucun staged ; untracked inchangés)
- verdict handoff : **HANDOFF UPDATED — REMOTE VERIFIED**

---

### 12. Verdict review pack

**READY WITH RESERVES** — setup Softr MCP REAL prouvé en Cursor ; lecture code REAL OK (écart ChatGPT `{}` non reproduit) ; réserve mineure sur login compte Cursor pour CLI `agent -p`.

Mono-cycle · aucun stub final.
