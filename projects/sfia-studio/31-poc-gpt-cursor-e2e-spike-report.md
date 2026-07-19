# SFIA Studio — Spike GPT → Cursor réel bout-en-bout (Cycle 8/9)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `31-poc-gpt-cursor-e2e-spike-report.md` |
| **Horodatage** | 2026-07-19 20:24:33 CEST (Europe/Paris) |
| **Cycle** | 8 — Delivery · sous-cycle 9 QA bout-en-bout réelle |
| **Profil** | Critical |
| **Branche** | `spike/sfia-studio-openai-gpt-adapter` (**locale, non versionnée**) |
| **HEAD / base** | `dce5a41a0a8c4ea1cfd08a8a99596b9dc02cb957` = `origin/main` |
| **Décision Morris** | GO test bout-en-bout Cursor réel borné |
| **Marqueur** | EXPERIMENTAL — POC SPIKE — NOT DEFAULT — NOT PRODUCTION |

---

## 1. Truth Check

**PASS** — spike dirty volontaire · HEAD = main · remote spike absente · aucun staged · pas de secret.

## 2. Mécanisme Cursor réel

| Élément | Valeur |
|---------|--------|
| Binaire | `/Applications/Cursor.app/Contents/Resources/app/bin/cursor` |
| Mode | `cursor agent --print --workspace <sandbox> --trust --sandbox enabled` |
| Auth | Session locale CLI (**identité redactée**) — `CURSOR_API_KEY` non utilisée |
| Preuve dispo | `agent status` → Logged in |

## 3. Architecture du test

```text
fixture sandbox (gitignored)
  → S-GPT-09 OpenAI live (json_object)
  → harness merge → contrat Cursor borné (hash SHA-256)
  → Cursor agent réel (1× / tentative)
  → validation locale output.md + git status sandbox + fingerprint main repo
  → S-GPT-10 OpenAI live (json_schema strict)
  → preuves runtime
```

Sandbox : `projects/sfia-studio/harness/proofs/e2e-cursor-sandbox/` (gitignored via `proofs/**`).

## 4. Résultat

**Succès complet** dans une tentative live (après corrections locales) :

1. S-GPT-09 **SUCCEEDED**
2. Contrat Cursor validé · hash `a3ef1a0574ad0c9c7492ddb34d92033bec246ae0562e66e3ad3e509c9d682b6c`
3. Cursor réel **invoqué** · exit **0** · ~9,7 s
4. `output.md` exact · `?? output.md` seul · aucun fichier inattendu
5. Main repo non touché hors preuves harness
6. S-GPT-10 **SUCCEEDED** · `schemaVersion=gpt-spike-1.0.0`
7. `cursorRealInvoked=true` · `productionReadyClaimed=false` · `mergeAuthorized=false`

## 5. Compteurs phase

| Ressource | Consommé | Max |
|-----------|----------|-----|
| Appels OpenAI | **4** | 6 |
| Invocations Cursor | **2** | 3 |
| Tentatives processus (succès) | 1 succès après correctifs | 3 |

Historique partiel avant succès : 1 échec qual `GPT_GIT_WRITE` (écho littéral interdit) · 1 crash harness (import manquant) après Cursor OK — corrigés localement.

## 6. Tokens / durées (tentative succès)

| Étape | Tokens (in/out/total/r) | Durée |
|-------|-------------------------|-------|
| S-GPT-09 | 773 / 2491 / 3264 / 1664 | 21,9 s |
| Cursor | n/a | 9,7 s |
| S-GPT-10 | 1675 / 3029 / 4704 / 2048 | 20,0 s |

Coût monétaire **non inventé**.

## 7. Sécurité

- Allowlist : `input.md` / `output.md` seulement
- Refus `..`, absolus, symlink externe, `git push`, `rm -rf`, élargissement GPT
- Aucun secret dans preuves · identité Cursor redactée
- Commandes Cursor internes non proxyfiées ; contrôle **post-facto** filesystem/git

## 8. Verdict

`GPT TO CURSOR REAL END-TO-END SPIKE PROVEN WITH RESERVES — VERSIONING DECISION REQUIRED`

**NOT** production ready · **NOT** merge · **NOT** L5 · **NOT** UI Studio.

## 9. Décisions Morris restantes

1. Versionnement / PR de la branche spike
2. Industrialisation / UI
3. Durcissement proxy commandes Cursor (si exigé)
4. Élargissement scénarios au-delà du sandbox e2e
