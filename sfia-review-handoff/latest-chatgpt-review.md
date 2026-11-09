# SFIA Studio Next — Review Pack FULL
## R5 / ML4 — Cycle 11 — R12 préparation / activation GitHub REAL documentary (RECETTE)

- Date/heure : 2026-11-09 22:20 CET (2026-11-09T21:20:14Z)
- GO Morris : 2026-11-09
- Profil : CRITICAL
- Sandbox autorisé : `mcleland147/chantiers360` (écritures de test)
- Verdict :
  **R12 REAL PUBLICATION READINESS VERIFIED — RECETTE CONFIGURED — USER HUMANDECISION AND REAL COMMIT NOT RUN**

---

## 1. Git Truth Check (produit)

| Item | Valeur | Statut |
|---|---|---|
| Branche | `fix/next-ml4-chat-first-d4-provenance-20261109` | OK |
| HEAD | `93da44beb7e7571c9406180027896769579b9815` | OK |
| Tree | `8b1b8a3e6bacfefd2dc9154c1cb6cef2e94953b8` | OK |
| Commit produit ce cycle | **AUCUN** | OK |
| Handoff précédent | `f501e38c…` / blob `9d6cf4a3…` | OK |
| Code source modifié | **NON** | OK |

État final local :
```
## fix/next-ml4-chat-first-d4-provenance-20261109
 M .tmp-sfia-review/chatgpt-review.md
?? projects/.tmp-sfia-review/
?? projects/sfia-studio-next/construction/integration-git/env01-recette-manifest-ml4-8ba77730-2026-11-09.md
?? projects/sfia-studio-next/construction/integration-git/env01-recette-manifest-ml4-93da44be-2026-11-09.md
?? projects/sfia-studio-next/construction/integration-git/env01-recette-manifest-ml4-974b0030-2026-11-09.md
?? projects/sfia-studio-next/construction/integration-git/env01-recette-manifest-ml4-a2c5e9f8-2026-11-09.md
?? projects/sfia-studio-next/web/scripts/github-app-installation-read-qualify.ts
```
HEAD final inchangé : `93da44beb7e7571c9406180027896769579b9815` / `8b1b8a3e6bacfefd2dc9154c1cb6cef2e94953b8`

---

## 2. Sources consultées

- SFIA v2.6 cycle routing / execution (cadre Critical / ENV-01 / Handoff)
- Next governance ENV-01, product-versioning, ADR ML4
- conception-fonctionnelle/integration-git-gouvernee.md
- construction/integration-git (spec, contrat, matrice, scénarios e2e)
- Code candidat : real-github-provider, github-provider, github-app-config, effect-service (prepare/authorize/dispatch), publication-steps, path-policy, PublicationInspectionPanel, API /git/publications/*
- Registre utilisateur : lecture seule

---

## 3. Runtime RECETTE (avant / après activation)

| Item | Avant | Après |
|---|---|---|
| URL | http://127.0.0.1:3200 | idem |
| source SHA (start script) | 93da44be… | inchangé |
| BUILD_ID | sHkE8sHJBxD3U9AJdHWi7 | inchangé |
| LaunchAgent | com.sfia.studio.next.recette.ml4 | idem |
| PID next-server | 23324 | 6020 (kickstart) |
| PPID | launchd (1) | launchd (1) |
| STUDIO_GITHUB_PROVIDER | real | real |
| STUDIO_GITHUB_ALLOW_MUTATIONS | (unset) | **documentary** |
| STUDIO_LANE | RECETTE | RECETTE |
| App ID / Installation | 5677465 / 180092114 | idem |
| Allowed repo | mcleland147/chantiers360 | idem |

Note : SFIA_SOURCE_SHA dans .env.local historique reste 8ba77730… mais start-recette.sh exporte après source la valeur 93da44be… (runtime réellement servi).

---

## 4. Contrats D6 / D7 / D8 / D9 contrôlés (code)

### D6 — HumanDecision
- authorizePublication crée HumanDecision kind GIT_PUBLICATION_MANDATE avec effectConditions (fingerprint, inspection, envelope).
- dispatchPublication exige statut AUTHORIZED (ou AMBIGUOUS contrôlé) — pas de dispatch depuis PREPARED.
- Avant chaque mutation provider : assertStepAuthority (contents=write + pull_requests=write).
- Flag env n'est pas une HumanDecision.

### D7 / D9
- preparePublication → plan inspectable + fingerprint figé + effectProviderMode figé.
- Dispatch : createBranch / putFileContents / createPR.
- REAL : mutations user-to-server only ; merge toujours mutationBlocked.
- Gate opérateur : STUDIO_GITHUB_ALLOW_MUTATIONS===documentary exact.

### D8
- publication-steps refuse COMPLETED sans preuve CREATE_BRANCH / PUBLISH_FILE / commitSha.
- Upsert document_publication_refs atomique avec CAS D7.

### Chemin UX/API
1. Projet → PublicationInspectionPanel
2. POST /api/projects/:id/git/publications/prepare
3. Inspecter unifiedDiff
4. POST .../authorize (statement D6)
5. POST .../dispatch
6. Merge routes séparées (merge REAL hard-blocked)

---

## 5. Identité & permissions RECETTE (observées)

| Capacité | Preuve |
|---|---|
| Pilote A Studio | pilot_98a7a89e… display mcleland147 |
| OAuth GitHub CONNECTED | iauth_ebe770c9… installation 180092114 account mcleland147 |
| Token user | présent + refresh ; token_expires_at > now au check |
| Repo autorisé | arepo_32cca521… mcleland147/chantiers360 ACTIVE |
| Permissions observées | contents=admin, pull_requests=write |
| Lien projet CampusFlow | pgl_24363a4d… ATTACHED → chantiers360 |
| App lane RECETTE | 5677465 / 180092114 / callback :3200 |
| Restriction mono-dépôt | assertAllowedRepo + GITHUB_APP_ALLOWED_REPO |

DEV : ~/.config/sfia-studio-next/dev/.env.local absent — pas d'activation miroir.

---

## 6. Activation bornée (sans changement code)

Action : ajouter STUDIO_GITHUB_ALLOW_MUTATIONS=documentary dans RECETTE .env.local uniquement.

Diff configuration expurgée :

```diff
--- /Users/morris/Projects/sfia-recette-backups/ml4-r12-activation-20261109/recette.env.redacted.before	2026-11-09 22:17:24
+++ /Users/morris/Projects/sfia-recette-backups/ml4-r12-activation-20261109/recette.env.redacted.after	2026-11-09 22:17:24
@@ -26,3 +26,6 @@
 STUDIO_GITHUB_USER_OAUTH=real
 STUDIO_GITHUB_PROVIDER=real
 OPENAI_API_KEY=***REDACTED***
+
+# ML4 R12 — bounded REAL documentary mutations (operator gate; D6 still required)
+STUDIO_GITHUB_ALLOW_MUTATIONS=documentary

```

Backup : /Users/morris/Projects/sfia-recette-backups/ml4-r12-activation-20261109/

Redémarrage : launchctl kickstart -k LaunchAgent RECETTE. Build/SHA conservés.

Garanties : D6 obligatoire ; merge bloqué ; path-policy docs only ; pas de publication Nora ; zéro écriture GitHub ce cycle.

Path R12 autorisé : docs/recette-studio-next/publication-documentaire.md → DOCUMENTARY_ALLOWLIST.

---

## 7. Sandbox Git distant (témoins)

| Témoin | État |
|---|---|
| main | 8c398c494dd918272aab5b2653777c6c21d2e76e INCHANGÉ |
| PR #18 | OPEN / NON MERGED INCHANGÉE |
| Branche sfia/recette-ml4-r12-20261109 | absente — non créée par Cursor |
| Fichier cible sous main | absent — OK |

Note produit : publicationBranchFromCorrelationKey → sfia/pub-<16hex>. Le libellé candidat sfia/recette-ml4-r12-20261109 n'est pas un paramètre UX. targetPath éditable doit être docs/recette-studio-next/publication-documentaire.md. Branche créée par Studio après HumanDecision.

---

## 8. Données D4 préservées

- doc_1e5d8c16… CampusFlow
- v1 drev_c07ca162… AVAILABLE md5 de4bd1a6…
- v2 drev_31678175… AVAILABLE md5 a875d28e…
- Nouveau document R12 : NON créé
- Mutation DB métier : AUCUNE

---

## 9. Smoke non mutatif

| Check | Résultat |
|---|---|
| GET / | 307 |
| GET /login /portfolio /settings/integrations | 200 |
| Fingerprint BUILD | sHkE8sHJBxD3U9AJdHWi7 FOUND |
| APIs sans session | 401 SESSION_INVALID |
| Dispatch / commit | NOT RUN |
| main / PR #18 | inchangés |

- capability configured : YES
- permission verified : YES
- workflow available : YES
- REAL effect : NOT RUN

---

## 10. Fake / Real Qualification

REAL CONFIGURATION / PERMISSION / UI READINESS : PROVEN.
R12 REAL COMMIT / R13 / R14 / ML4 ACCEPTED / STABLE / ADOPTED : NOT PROVEN / NON revendiqués.
Product Versioning : PATCH candidate / NO RELEASE / source 93da44be.

---

## 11. Rollback configuration

```markdown
# Rollback config — R12 activation STUDIO_GITHUB_ALLOW_MUTATIONS

## Change
- Set STUDIO_GITHUB_ALLOW_MUTATIONS=documentary in RECETTE .env.local only
- Product SHA/build unchanged (93da44be / sHkE8sHJBxD3U9AJdHWi7)

## Restore
1. cp /Users/morris/Projects/sfia-recette-backups/ml4-r12-activation-20261109/recette.env.local.pre-20261109-221724 /Users/morris/.config/sfia-studio-next/recette/.env.local
2. chmod 600 $HOME/.config/sfia-studio-next/recette/.env.local
3. launchctl kickstart -k gui/$(id -u)/com.sfia.studio.next.recette.ml4
4. Verify flag unset/absent and BUILD_ID still sHkE8sHJBxD3U9AJdHWi7
5. No DB restore

## Note
Flag is operator gate only; D6 HumanDecision remains mandatory in Studio.

```

Rollback flag : documenté, NOT EXERCISED. Runtime SHA/build inchangés.

---

## 12. Réserves

- Token user expire ; refresh présent — confirmer CONNECTED avant R12.
- Fixtures scripted-install-1 en DB distinctes du Pilote A.
- Activation flag ≠ succès publication.
- Nom de branche manuel hors produit non supporté sans changement code.

---

## 13. Verdict

**R12 REAL PUBLICATION READINESS VERIFIED — RECETTE CONFIGURED — USER HUMANDECISION AND REAL COMMIT NOT RUN.**

### Étape utilisateur exacte pour R12

1. Ouvrir http://127.0.0.1:3200 en session Pilote A (mcleland147).
2. Vérifier Intégrations : GitHub CONNECTED + chantiers360 autorisé.
3. Créer un nouveau document D4 de test (ne pas réutiliser CampusFlow R06).
4. Sur le projet lié à chantiers360, ouvrir le panneau de publication documentaire.
5. Préparer : révision AVAILABLE, path docs/recette-studio-next/publication-documentaire.md, base main.
6. Inspecter le diff réel.
7. Autoriser explicitement (HumanDecision D6) — l'accord sandbox ne remplace pas cette étape.
8. Dispatch depuis l'application uniquement.
9. Relire le commit distant + preuve D8.
10. Conserver main / PR #18 / CampusFlow comme témoins.
