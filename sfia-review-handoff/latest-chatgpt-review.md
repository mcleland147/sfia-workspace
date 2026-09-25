# ChatGPT Review Pack — CRM Assurance Courtage Worktree Setup

**Niveau :** light
**Date / heure :** 2026-09-25 16:00:44 CEST (+0200)
**Cycle :** Cadrage projet — setup repository / workspace local
**Profil SFIA :** Standard
**Typologie v2.4 :** RUN — setup opérationnel local
**CKC :** `method/.../pilots/01-cadrage.md` — candidate · experimental · aucune autorité d'exécution
**Studio Convergence :** N/A
**Fake/Real :** N/A
**Mono-cycle :** oui (écrasement total)

---

## 1. Objectif

Isoler opérationnellement le projet CRM Assurance Courtage dans un Git worktree dédié :

`/Users/l/Projects/sfia-worktree-crm-assurance`

portant la branche existante `docs/crm-assurance-courtage-operating-doctrine-01` @ `f06484cd70b07e8803d605a9c210771c213d7f8a`,

sans créer de repo supplémentaire, sans dupliquer SFIA, sans modifier de fichier versionné.

---

## 2. Local Git Truth Check — checkout principal (avant)

| Contrôle | Résultat |
|----------|----------|
| path | `/Users/l/Projects/sfia-workspace` |
| remote | `origin` → `https://github.com/mcleland147/sfia-workspace.git` |
| `git fetch origin` | OK |
| branche initiale | `docs/crm-assurance-courtage-operating-doctrine-01` |
| HEAD initial | `f06484cd70b07e8803d605a9c210771c213d7f8a` |
| `origin/main` | `e287f744479fc4b55c3e3082969deea7783996da` (= attendu) |
| staged | aucun |
| tracked modifié | uniquement `.tmp-sfia-review/chatgpt-review.md` (review pack local du cycle précédent) |
| branche CRM locale | existe @ `f06484cd70b07e8803d605a9c210771c213d7f8a` |
| cible `/Users/l/Projects/sfia-worktree-crm-assurance` | absente |
| cas qualifié | **Cas D** — cible absente + branche CRM checkout dans le principal |

Aucune BASE DRIFT. Aucune CRM BRANCH TRUTH MISMATCH.

Note : le seul tracked dirty était le review pack temporaire du cycle précédent. Contenu sauvegardé avant restauration pour libérer le working tree (voir §4).

---

## 3. `git worktree list --porcelain` — avant

```
worktree /Users/l/Projects/sfia-workspace
HEAD f06484cd70b07e8803d605a9c210771c213d7f8a
branch refs/heads/docs/crm-assurance-courtage-operating-doctrine-01

worktree /private/tmp/sfia-review-handoff-wt
HEAD ac848229888fde6deba231d364e00b194e5658eb
branch refs/heads/sfia/review-handoff
```

---

## 4. Libération contrôlée du checkout principal

Nécessaire car le principal était encore sur la branche CRM.

| Étape | Résultat |
|-------|----------|
| Branche restauration | `project/sfia-task-manager-cycle-4-ux-ui` — existe |
| Déjà utilisée ailleurs | non |
| Backup review pack | `/tmp/sfia-crm-worktree-setup-previous-chatgpt-review.md` |
| Restauration tracked review pack | `git restore -- .tmp-sfia-review/chatgpt-review.md` (après backup ; aucun reset --hard / clean / stash) |
| Switch | `git switch project/sfia-task-manager-cycle-4-ux-ui` — OK |
| HEAD principal après | `139f45fd019aa0561bfb5c6b7a7bd1c748f570b4` |
| Tracked après switch | aucun |
| Staged après switch | aucun |

---

## 5. Création worktree CRM

Commande exécutée (sans `-f`, sans nouvelle branche) :

```bash
git worktree add \
  /Users/l/Projects/sfia-worktree-crm-assurance \
  docs/crm-assurance-courtage-operating-doctrine-01
```

Résultat : worktree créé ; HEAD `f06484cd` — `docs(crm-assurance-courtage): add project operating doctrine`

---

## 6. Local Git Truth Check — worktree CRM

| Contrôle | Résultat |
|----------|----------|
| pwd / root | `/Users/l/Projects/sfia-worktree-crm-assurance` |
| branche | `docs/crm-assurance-courtage-operating-doctrine-01` |
| HEAD | `f06484cd70b07e8803d605a9c210771c213d7f8a` |
| `origin/main` | `e287f744479fc4b55c3e3082969deea7783996da` |
| tracked | aucun |
| staged | aucun |
| doctrine dans HEAD | `projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md` (1 path) |

Doctrine lue depuis le worktree CRM (lecture seule) — conforme au cycle précédent.

---

## 7. Topologie finale des worktrees

```
worktree /Users/l/Projects/sfia-workspace
HEAD 139f45fd019aa0561bfb5c6b7a7bd1c748f570b4
branch refs/heads/project/sfia-task-manager-cycle-4-ux-ui

worktree /private/tmp/sfia-review-handoff-wt
HEAD ac848229888fde6deba231d364e00b194e5658eb
branch refs/heads/sfia/review-handoff

worktree /Users/l/Projects/sfia-worktree-crm-assurance
HEAD f06484cd70b07e8803d605a9c210771c213d7f8a
branch refs/heads/docs/crm-assurance-courtage-operating-doctrine-01


```

### Table d'isolation

| Checkout | Path | Branche | HEAD | Tracked | Staged |
|----------|------|---------|------|---------|--------|
| Principal | `/Users/l/Projects/sfia-workspace` | `project/sfia-task-manager-cycle-4-ux-ui` | `139f45fd019aa0561bfb5c6b7a7bd1c748f570b4` | aucun | aucun |
| CRM | `/Users/l/Projects/sfia-worktree-crm-assurance` | `docs/crm-assurance-courtage-operating-doctrine-01` | `f06484cd70b07e8803d605a9c210771c213d7f8a` | aucun | aucun |
| Review handoff (info) | `/private/tmp/sfia-review-handoff-wt` | `sfia/review-handoff` | `ac848229888fde6deba231d364e00b194e5658eb` | — | — |

Confirmations :
- le checkout principal n'est plus le workspace d'exécution CRM par défaut ;
- le worktree CRM lit les mêmes `method/` / `prompts/` / `docs/` / `scripts/` du même repository canonique ;
- aucune copie de méthode ;
- aucun repo parallèle ;
- aucune branche supprimée ;
- aucun fichier versionné modifié ;
- aucun commit projet créé ;
- aucun push branche CRM.

---

## 8. Fichiers versionnés créés/modifiés

**Aucun.**

`created files full content` = N/A
`modified content coverage` = N/A

Review pack path (hors commit projet) :
`/Users/l/Projects/sfia-worktree-crm-assurance/.tmp-sfia-review/chatgpt-review.md`

---

## 9. Commit / push projet

| Élément | Valeur |
|---------|--------|
| Commit projet | **aucun** |
| Push branche CRM | **NOT DONE — NOT AUTHORIZED** |
| PR / merge | non |

---

## 10. Règle opérationnelle (constat, non écrite dans la doctrine)

Workspace CRM attendu pour les prochains cycles Cursor CRM :
`/Users/l/Projects/sfia-worktree-crm-assurance`

Règle d'exécution locale projet — ne modifie pas SFIA v2.6 ni la doctrine (mise à jour documentaire = cycle séparé si Morris le demande).

---

## 11. Réserves

- Untracked locaux conservés dans le checkout principal (`.cursor/*`, `.tmp-sfia-review/` après switch) — non nettoyés volontairement.
- Backup du précédent review pack conservé hors repo : `/tmp/sfia-crm-worktree-setup-previous-chatgpt-review.md`.
- `git restore` du review pack tracked a été utilisé uniquement après backup, pour obtenir un working tree tracked propre avant switch (pas de reset --hard / clean / stash).

---

## 12. Décisions Morris

GO utilisé : setup worktree, switch contrôlé, review pack, handoff L3.

Encore hors GO / futurs : push CRM, PR, merge, mise à jour doctrine pour documenter le path worktree, nouveau repo, stack/architecture.

---

## 13. Verdict review pack

**complete** — light · mono-cycle · synthesis-only = no (rapport topologique détaillé) · created/modified content = N/A
