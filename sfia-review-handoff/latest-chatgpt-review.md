# SFIA Studio Next — ML5 Review Pack LIGHT
## Typography 12px SafeMarkdown — RECETTE cutover

| Field | Value |
|---|---|
| Date/heure | 2026-11-26T08:37:00+01:00 |
| Cycle | 11 / INC Critical / Déploiement · GO RECETTE |
| Candidate SHA **servi** |  |
| Base |  |
| Tree / web |  /  |
| BUILD_ID |  (HTML ) |
| Digest |  |
| URL | http://127.0.0.1:3200 |
| Docs commit |  |
| Verdict | **ML5 TYPO 12PX SAFE-MD — RECETTE CUTOVER VERIFIED — READY FOR MORRIS VISUAL UAT** |

## Git Truth
Branche . Candidat  descendant de . Web tree modifié uniquement tokens.css + NoraConversation. Aucun push produit.

## Cause et correctif
 applique toujours  (~14px).  était déjà à 12px mais le markdown Nora héritait de .
Correctif : sélecteurs conversation-only  (+ p/li/td/th/a/strong/em) → **12px** ; code/pre **11px** ; titres rem globals inchangés ; visionneuse / autres SafeMarkdown non ciblés. Retrait  sur empty-state Nora.

## Contrôles
login 200 · portfolio 401 · auto-session 403 · WEB LIVE 0 · cognition 2M/1M/120 · CSS build contient  sur body + sélecteurs SafeMarkdown · counts Δ=0 · DEV  inchangé.

### Counts
Avant:

Après:


## Rollback
Backup  sha256  · worktree  /  · plist bak pré-typo12.

## Réserve
UAT visuelle Morris (densité réelle Pilote/Nora/tableaux). Pas de campagne de tests automatisée supplémentaire.

R5 IN PROGRESS · ML5 OPEN · NO RELEASE · NOT ADOPTED
