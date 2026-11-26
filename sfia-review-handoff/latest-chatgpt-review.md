# SFIA Studio Next — ML5 Review Pack LIGHT
## Typography 12px SafeMarkdown — RECETTE cutover

| Field | Value |
|---|---|
| Date/heure | 2026-11-26T08:37:19+01:00 |
| Cycle | 11 / INC Critical / Déploiement · GO RECETTE |
| Candidate SHA **servi** | `8db4074cc17f2c4e22ac9cd7eeed3018828fdda4` |
| Base | `1633c86b` |
| Tree / web | `564b1d71fd430c5cca83ffb3ab29d5a112b4b1b8` / `0d2c1053d2eeaa6be457084e16e2f27284af6633` |
| BUILD_ID | `IiUs8iS6i7UR-1y3wwC6W` (HTML `IiUs8iS6i7UR_1y3wwC6W`) |
| Digest | `8638954b71008270f58066906c02ac9bc0e85ec26046974f472a8ed407cfbd8b` |
| URL | http://127.0.0.1:3200 |
| Docs commit | `3021efe75f26a97894b2de7f4ef604e3f5de02ca` |
| Verdict | **ML5 TYPO 12PX SAFE-MD — RECETTE CUTOVER VERIFIED — READY FOR MORRIS VISUAL UAT** |

## Git Truth
Branche `sfia/next-ml5-integrated-delivery-20261123`. Candidat `8db4074c` descendant de `1633c86b`. Web tree modifié uniquement tokens.css + NoraConversation. Aucun push produit.

## Cause et correctif
`SafeMarkdown` applique toujours Tailwind `text-sm` (~14px). `.fig-msg-body` était déjà à 12px mais le markdown Nora héritait de `text-sm`.
Correctif : sélecteurs conversation-only `.fig-msg-body .safe-md` (+ p/li/td/th/a/strong/em) → 12px ; code/pre 11px ; titres rem globals inchangés ; visionneuse / autres SafeMarkdown non ciblés. Retrait `text-sm` sur empty-state Nora.

## Contrôles
login 200 · portfolio 401 · auto-session 403 · WEB LIVE 0 · cognition 2M/1M/120 · CSS build contient font-size:12px sur body + sélecteurs SafeMarkdown · counts Δ=0 · DEV `qWUDds50AUSup8n2GqNTC` inchangé.

### Counts
Avant:
```
projects=31
conversations=210
messages=824
documents=123
revisions=195
pilots=170
cog_works=24
ckpts=167
activity=252
preparations=210
```
Après:
```
projects=31
conversations=210
messages=824
documents=123
revisions=195
pilots=170
cog_works=24
ckpts=167
activity=252
preparations=210
```

## Rollback
Backup `ml5-20261126T073552Z-pre-8db4074c-from-1633c86b.sql.gz` sha256 `b2412125b693d360ca5fe13177ca820c156086d8ea045ef512fe9250773adca1` · worktree `…-1633c86b0330` / `g91mwyAgMId3zEUm7CcLq` · plist bak pré-typo12.

## Réserve
UAT visuelle Morris (densité réelle Pilote/Nora/tableaux). Pas de campagne de tests automatisée supplémentaire.

R5 IN PROGRESS · ML5 OPEN · NO RELEASE · NOT ADOPTED
