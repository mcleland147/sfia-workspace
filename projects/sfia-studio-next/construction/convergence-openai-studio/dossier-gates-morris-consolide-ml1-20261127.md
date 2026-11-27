# Dossier unique des gates Morris — Macro-lot 1 (Intervention 1)

| Champ | Valeur |
|---|---|
| Date | 2026-11-27 |
| Cycle | Integrated foundation completion |
| Verdict candidat | **READY FOR CONSOLIDATED MORRIS GATES** (technique DEV ; LIVE non exécuté) |
| Autorité | Morris uniquement pour chaque gate |
| NO RELEASE · NOT ADOPTED · RECETTE hors GO | |

---

## G-PROVIDER-SNAPSHOT-MIGRATION

| | |
|---|---|
| Objet | Migrations DEV 023–025 (snapshots Admin + provenance + canon + security) |
| Prérequis | Isolation DEV :5433 |
| Preuves | Index canon inclut `collection_provenance` ; schéma 025 ; upsert ON CONFLICT |
| Options | Maintenir GO DEV (recommandé) |
| Recommandation | Maintenu |
| Risque résiduel | Lignes UNKNOWN historiques exclues des projections |
| Enveloppe | DEV only |
| Rollback | Pas de DROP métier ; index recréable |
| Action Morris | Aucune nouvelle — GO DEV déjà en vigueur |
| Statut | **LEVÉ DEV** |

## G-ADMIN-SECRET

| | |
|---|---|
| Objet | Provisionnement sécurisé clé Admin OpenAI (hors Git) |
| Prérequis | Identifiants PG compromis invalidés (NOLOGIN) ; transport TEST/LIVE séparés ; procédure candidate |
| Preuves | LOGIN roles `rolcanlogin=f` ; auth refuse ; mots de passe retirés des sources courantes 024/025 ; SET ROLE proofs SQLSTATE 42501 |
| Options | (A) Provisionner via secret manager OS / env local non-git (B) Reporter |
| Recommandation | A — après revue readiness |
| Risque résiduel | Historique Git distant conserve d’anciennes valeurs — traiter comme compromises |
| Enveloppe | Clé Admin lecture Usage/Costs uniquement ; jamais dans Git |
| Rollback | Révoquer clé côté OpenAI |
| Action Morris | Créer/placer secret Admin ; **ne pas** coller dans chat/Git |
| Statut | **PROPOSABLE** — pas de clé demandée avant GO |

## G-ADMIN-LIVE

| | |
|---|---|
| Objet | Première collecte LIVE bornée Usage + Costs |
| Prérequis | G-ADMIN-SECRET levé ; `SFIA_ADMIN_LIVE_GO=1` ; projet DEV autorisé ; fenêtre UTC |
| Preuves | Enveloppe code : start/end_time, maxPages≤20, redirects interdits, body borné |
| Options | GET `/organization/costs` (+ usage si nécessaire) · 1 org · 1 project_ids · ≤3 pages · STOP sur ERROR/PARTIAL |
| Recommandation | Après G-ADMIN-SECRET ; fenêtre ≤ 24h UTC ; group_by=project_id |
| Risque résiduel | Permissions compte OpenAI non prouvées ici |
| Enveloppe | Voir `procedure-admin-live-qualification-candidate.md` |
| Rollback | Désactiver LIVE_GO ; conserver TEST_SUBSTITUTED |
| Action Morris | Autoriser enveloppe exacte + STOP |
| Statut | **FERMÉ** — NOT RUN |

## G-FINOPS-UX

| | |
|---|---|
| Objet | Valider proposition visuelle page 13 (Figma inspectée RO) |
| Prérequis | Backend `providerReconciliation` service-path COMPARABLE |
| Preuves | Screenshot + metadata Figma `1332:2305` ; mapping états → composants ; UX actuelle non régressive |
| Options | (A) Valider delta secondaire (B) Reporter (C) Ajuster mapping |
| Recommandation | A — bloc secondaire sous KPIs existants (13.03) |
| Risque résiduel | Transposition code non faite |
| Enveloppe | Aucun nouvel écran ; aucun plafond monétaire |
| Rollback | UI actuelle inchangée |
| Action Morris | Valider `ux-delta-finops-page13-candidate.md` |
| Statut | **PROPOSABLE** — NOT APPLIED |

## G-TRACING-LOCAL

| | |
|---|---|
| Objet | Activer tracing Agents SDK LOCAL sans export distant |
| Prérequis | Preuve SDK réelle + oracle réseau ; OFF fail-closed |
| Preuves | `ml5-agents-sdk-tracing-real-sdk.test.ts` : Agent.run + tool loop + spans corrélés + export=[] |
| Options | (A) LOCAL ON DEV (B) rester OFF |
| Recommandation | A en DEV uniquement après revue |
| Risque résiduel | Métadonnées allowlist — pas de prompts |
| Enveloppe | `SFIA_AGENTS_TRACING_MODE=local` ; processors locaux |
| Rollback | MODE=off |
| Action Morris | Autoriser activation locale |
| Statut | **PROPOSABLE** — opérationnel OFF |

## G-WEB-PUBLIC / A3

| | |
|---|---|
| Objet | Niveau d’enveloppe hosted WEB avant campagne LIVE bornée |
| Prérequis | F15 déterministe ; WEB OFF exploit |
| Preuves | Frontier UNKNOWN→MEASURED=PARTIAL ; max_tool_calls injection ; dossier A3 |
| Options | Voir `dossier-g-web-public-a3-20261127.md` Option 1 vs 2 |
| Recommandation | Option 2 (pré-réserve contrôlable + mesure a posteriori + risque explicite) |
| Risque résiduel | Destinations hosted ≠ egress B1 |
| Enveloppe | Requêtes publiques non sensibles ; STOP documenté |
| Rollback | WEB OFF |
| Action Morris | Choisir option + accepter risque résiduel |
| Statut | **FERMÉ** |

## G-NATIVE-CONTINUITY

| | |
|---|---|
| Objet | Autoriser variantes native (`previous_response_id` / cache / compaction) vs reconstruction Studio |
| Prérequis | Données D3 réelles raccordées ; DATA-01 ; pas de store=true sans arbitrage |
| Preuves | `buildStudioContinuityFromWork` ; continuityChain null ; OFF ; tests unit + campagne |
| Options | (A) Comparatif substitué puis LIVE borné (B) rester reconstruction (C) pivot DATA-01 |
| Recommandation | A — comparer sans adopter tous les mécanismes |
| Risque résiduel | Rétention fournisseur / permissions non prouvées |
| Enveloppe | Intervention 2 après GO |
| Rollback | Reconstruction Studio |
| Action Morris | Autoriser campagne comparative |
| Statut | **PROPOSABLE** — opérationnel OFF |

## G-PROVIDER-LIVE-QUALIFICATION

| | |
|---|---|
| Objet | Campagne intégrée DEV avec effets fournisseur réels |
| Prérequis | Gates Admin/Tracing/WEB/Continuity selon dépendances |
| Preuves | Campagne substituée Intervention 1 PASS |
| Options | Reporter jusqu’aux gates amont |
| Recommandation | Intervention 2 uniquement |
| Risque résiduel | Coût/latence réels |
| Enveloppe | Corpus, modèles, STOP — à figer au GO |
| Rollback | Couper clés / modes OFF |
| Action Morris | GO Intervention 2 distinct |
| Statut | **FERMÉ** |

## RECETTE / promotions

**HORS AUTORISATION** — worktree figé, port 3200, PG 5434 non touchés.

---

## Chemin critique Intervention 2 (après gates)

1. Morris lève G-ADMIN-SECRET (secret hors Git).
2. Morris lève G-ADMIN-LIVE (enveloppe exacte).
3. Collecte LIVE bornée → PG LIVE provenance.
4. FinOps COMPARABLE sur données LIVE (si droits Pilote).
5. Optionnel : G-TRACING-LOCAL ON DEV.
6. Morris tranche G-WEB-PUBLIC/A3 → scénario LIVE public borné.
7. Morris autorise G-NATIVE-CONTINUITY comparative.
8. G-PROVIDER-LIVE-QUALIFICATION — scénario intégré réel.
9. Preuves → revue → **pas** de RECETTE/STABLE sans GO distinct.

Rollback global : tous modes OFF ; clés révoquables ; DEV isolé.
