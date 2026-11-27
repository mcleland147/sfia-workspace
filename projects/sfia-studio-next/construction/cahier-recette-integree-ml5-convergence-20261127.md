# SFIA Studio Next — Cahier de recette intégrée ML5 convergence

**Version :** 0.2 — activation opérationnelle A1–A6  
**Date :** 27 novembre 2026  
**Statut :** **RECETTE OPERATIONAL ACTIVATION COMPLETE — MORRIS FUNCTIONAL QUALIFICATION READY — USER ACCEPTANCE PENDING**  
**Programme :** R5 — convergence OpenAI Studio intégrée (macro-lots 1–3)  
**Responsable de la réception :** Morris  
**Périmètre :** Cutover + activation RECETTE `e8e6e069` · schéma **027** · capacités LIVE bornées  
**Classe :** NO RELEASE · STABLE NOT AVAILABLE

---

## 1. Objet

Ce cahier organise la **recette utilisateur** du candidat RECETTE issu de la convergence intégrée ML1–ML3, sans rejouer les 56 scénarios Q du contrat ML5 ni les 61 cas ML4C. Il regroupe **huit familles R01–R08** couvrant non-régression, parcours projet, Nora, documents, intelligence documentaire, dictée, FinOps et UX shell.

**Règle :** aucun verdict **PASS** n'est prérempli pour les essais Morris. Les contrôles HTTP/smoke post-cutover (login, portefeuille, intégrations, marqueur build) ne valent pas acceptation fonctionnelle.

---

## 2. Identité du candidat RECETTE

| Élément | Référence |
|---|---|
| URL | http://127.0.0.1:3200 |
| SHA candidat | `e8e6e06961fa0a7224db3badb3b591b8be8046ac` |
| Tree repo | `30c12ad9eb48959c0326df9f7629471e8ec847a3` |
| Tree web | `03c30e4cdb2dbb443a05a052757b3846199c8d34` |
| BUILD_ID | `rpEczSp61evIZ7d6fnIWR` |
| Digest | `18e014c1ead6e050cf1aca4e4910dd8904722bd3e0e7753d25b189c03fd50535` |
| Worktree servi | `/Users/morris/Projects/sfia-workspace-next-ml5-recette-build-e8e6e06961fa` |
| LaunchAgent | `com.sfia.studio.next.recette.ml4d-ux004` |
| PostgreSQL | `sfia_next_recette_ml4` — port **5434** |
| Schéma | **027** (migrations 022–027 après preuve restore isolée) |
| Branche source DEV | `sfia/next-ml5-integrated-delivery-20261123` |
| Ancien runtime réellement servi | `a150926c…` / BUILD `6kswoj2a2VHXCLsFYcoim` |
| SHA documenté historique (non servi) | `2a024b1c…` |
| Dataset | projects=31 · messages=824 · documents=123 · pilots=170 · conversations=210 · cognitive_works=24 |
| OpenAI clé RECETTE | empreinte `f27d814e…` — **≠** DEV `ab6bbec8…` (forbidden) · org/projet fournisseur **non vérifié** |
| Dictée produit | `SFIA_COMPOSER_DICTATION=1` · `SFIA_DICTATION_TRANSPORT=live` — **AVAILABLE** · micro hôte présent · **USER QUALIFIED** à faire |
| Judgment / embeddings / vision | flags ON · backend PG · index borné RoomBooking+Pilotage360 |
| WEB LIVE | **OFF** |
| Collecte Admin | **OFF** |
| Config | `~/.config/sfia-studio-next/recette/.env.local` + surcharges `start-recette-ml5.sh` |

Manifeste détaillé : [`ml5-recette-cutover-manifest-20261127.md`](./ml5-recette-cutover-manifest-20261127.md).

---

## 3. Préconditions et règles

- Profil navigateur **distinct** de DEV (ENV-01 cookies sur `127.0.0.1`).
- Vérifier le marqueur HTML `<!--rpEczSp61evIZ7d6fnIWR-->` sur la page d'accueil ou login.
- Ne pas activer `STUDIO_DEV_AUTO_SESSION`, fixtures Nora, WEB LIVE ni collecte Admin sans **GO Morris distinct**.
- **GO A1–A6 2026-11-27** : capacités retenues **activées** en RECETTE ; indexation bornée effectuée ; parcours utilisateur LIVE = qualification Morris (pas de campagne Cursor).
- **RoomBooking RECETTE** : `proj_7514cdde…` attaché `mcleland147/chantiers360` (ID DEV `proj_896d204b…` absent ici) — **ne pas** utiliser le faux `proj_f57bca43…`.
- **Pilotage360 / Chantiers360** : investigations historiques RB-27–31 (planning/conflits) et qualification trajectoire restent des **oracles de non-régression** à réemployer selon impact, pas des replays systématiques de 40+ scénarios.
- Préserver les données RECETTE ; rollback code documenté sans rollback automatique des migrations 022–027.

---

## 4. Format de preuve (Morris)

| Champ | Contenu |
|---|---|
| ID | Rxx-yy |
| Date / Pilote | Session |
| BUILD / SHA | Version testée |
| Projet / ressource | ID non secret |
| Action | Geste ou prompt |
| Attendu | Comportement contractuel |
| Observé | Fait réel |
| Preuve | Capture, extrait, work id, révision — **sans secrets** |
| Verdict | PASS / FAIL / BLOCKED / NOT RUN — **à remplir par Morris uniquement** |

---

## R01 — Non-régression portefeuille, session et données héritées

**Objectif :** après cutover schéma 027, retrouver l'univers RECETTE ML4 existant sans perte comptable ni régression d'accès.

| ID | Scénario | Résultat attendu | Verdict Morris |
|---|---|---|---|
| R01-01 | Connexion GitHub OAuth — session Pilote Morris | 200 · identité connue · pas de contournement | **NOT RUN** |
| R01-02 | Portefeuille — 31 projets · préparations connues | Liste cohérente avec comptages pré-cutover | **NOT RUN** (smoke HTTP 200 seul) |
| R01-03 | Ouvrir **Intervencia** ou projet de référence ML4C — fil messages | Historique retrouvable · pas de vidage | **NOT RUN** |
| R01-04 | Documents existants — lecture d'une révision **AVAILABLE** | Inspection D4 fonctionnelle | **NOT RUN** |
| R01-05 | Intégrations / paramètres — page charge | 200 · pas d'exposition clés | **NOT RUN** (smoke 200) |
| R01-06 | Rafraîchissement navigateur sur projet ouvert | Contexte projet conservé | **NOT RUN** |
| R01-07 | Réserve ML4C héritée — position fil Travail après refresh (`S07-06-R01`) | À requalifier sur ce build : retour en tête de fil ? | **NOT RUN** |
| R01-08 | Auto-session DEV sur RECETTE | Refus 403 (prouvé post-cutover) | **AUTOMATED PASS** (smoke) — pas substitut R01-01 |

**Observations capitalisées (sans multiplier les cas) :** comptages PG post-migrate identiques au manifeste ; tables FinOps (`provider_usage_observations`) et embeddings (`derived_embedding_chunks`) présentes sans reindex DEV copié.

---

## R02 — Nouveau projet et sas de création

**Objectif :** créer ou reprendre un projet sans doublon ni perte de préparation (héritage ML4C S02, sans rejouer les 8 scénarios S02).

| ID | Scénario | Résultat attendu | Verdict Morris |
|---|---|---|---|
| R02-01 | Nouvelle préparation — décrire le besoin à Nora (LIVE si GO) | Intention persistée · pas de création prématurée | **PENDING GO LIVE** |
| R02-02 | Créer le projet depuis le sas · rouvrir après refresh | Un seul projet · fil initial visible | **NOT RUN** |
| R02-03 | Réserve historique `S02-04-R01` — proposition rev.2 après création | À vérifier si toujours pertinente | **NOT RUN** |
| R02-04 | Projet synthétique dédié recette ML5 (non production) | Isolation des essais mutatifs | **NOT RUN** |

---

## R03 — Nora — Travail, continuité et frontières

**Objectif :** dialogue Nora sur surface Travail avec continuité provider RECETTE (sans fixture forcée).

| ID | Scénario | Résultat attendu | Verdict Morris |
|---|---|---|---|
| R03-01 | Message texte simple — réponse Nora LIVE | Réponse complète · statuts cohérents | **READY — USER QUALIFICATION** |
| R03-02 | Conversation longue — compositeur visible en bas | Champ + Envoyer accessibles (requalifier `ML4C-A-003`) | **NOT RUN** |
| R03-03 | Demande hors périmètre / cible inconnue | Refus ou `UNKNOWN` sémantiquement correct · pas d'effet silencieux | **NOT RUN** (rapprocher `S02-06-R01`) |
| R03-04 | Capitalisation contexte métier (projet existant) | Pas de fuite cross-pilote | **NOT RUN** |
| R03-05 | Allocation cognitive / adaptive (120 / 1M / 2M actifs) | Comportement conforme au contrat ML5 si sollicité | **READY — USER QUALIFICATION** |

**Observations RoomBooking :** preuve DEV RB-27 (`cgw_912cf02a…`) — 9 fichiers CONSULTED, reprise suspendue ; **ne pas extrapoler PASS RECETTE** sans GO campagne sur `proj_896d204b…`.

---

## R04 — Documents (D4), révisions et inspection

| ID | Scénario | Résultat attendu | Verdict Morris |
|---|---|---|---|
| R04-01 | Bibliothèque — liste documents projet | Révisions **AVAILABLE** listées | **NOT RUN** |
| R04-02 | Inspection longue — panneau latéral | Lecture intégrale possible | **NOT RUN** (réserve `S03-02-R01` ergonomie) |
| R04-03 | Révision ciblée sans effet non demandé | V1/V2 distinctes · pas de perte | **PENDING GO** si création LIVE |
| R04-04 | Root documents RECETTE vide (0 fichiers racine) | Inchangé — pas de régression attendue sur cutover | **NOT RUN** |

---

## R05 — Intelligence documentaire (embeddings, hybrid, vision, PDF)

**Objectif :** qualifier les apports macro-lot 2 sans rejouer l'intégralité des oracles Gate B DEV.

| ID | Scénario | Résultat attendu | Verdict Morris |
|---|---|---|---|
| R05-01 | Recherche hybride sur corpus connu (RoomBooking / Pilotage360 indexés) | Résultats pertinents · citations traçables | **READY — USER QUALIFICATION** (10 chunks PG) |
| R05-02 | Question lexicale exacte vs paraphrase (oracle CONV-F22) | Comportement comparable au DEV qualifié | **PENDING GO LIVE** |
| R05-03 | PDF Git `Diagramme BPMN_BatiNova.pdf` | Identification OK · limite scan **SCANNED_NO_TEXT** connue | **PENDING GO** Git read |
| R05-04 | Vision punctuelle sur image autorisée | Lecture bornée si GO vision | **PENDING GO** |
| R05-05 | StockTrack IT-06 (qual corpus) | Ne pas confondre avec BoundTrack ; V1/V2 intactes si sollicité | **NOT RUN** |

**Observations :** schéma 027 · index borné post-activation : RoomBooking 4 chunks · Pilotage360 6 chunks · tokens 341 · **pas** de copie d'index DEV.

---

## R06 — Dictée composer (micro)

**Objectif :** CONV-F31–F34 — **activée** en RECETTE (A3) · qualification utilisateur restante.

| ID | Scénario | Résultat attendu | Verdict Morris |
|---|---|---|---|
| R06-01 | Capability API — flag ON | `enabled: true` · admission LIVE | **READY — USER QUALIFICATION** (admission locale OK) |
| R06-02 | Permission micro — transcription FR LIVE | Texte éditable · envoi manuel unique | **READY — USER QUALIFICATION** |
| R06-03 | Annulation / refuse permission / navigation | Fail-closed · brouillon clavier préservé | **READY — USER QUALIFICATION** |
| R06-04 | Réserves techniques A–D (finalize partial, TRANSPORT_UNKNOWN) | Comportement fail-closed en anomalie env | **DEV PROVEN** — à confirmer en parcours Morris |

**Protections conservées :** durée, concurrence, droits, admission, fermeture de session · pas de fixture · pas de substitution.

---

## R07 — FinOps et consommation (affichage local)

| ID | Scénario | Résultat attendu | Verdict Morris |
|---|---|---|---|
| R07-01 | Panneau consommation / settings — chargement | Données locales ou vide explicite · pas d'appel Admin nouveau | **NOT RUN** |
| R07-02 | Observations usage post-Nora LIVE (si campagne) | Corrélation work/attempt sans double comptage | **PENDING GO LIVE** |
| R07-03 | Historique attribué projet DEV dans RECETTE | Non réécrit — attribution peut rester ambiguë | **NOT RUN** (réserve manifeste) |
| R07-04 | Collecte Admin snapshot | Architecture hors runtime · pas de nouvelle clé Admin injectée | **BLOCKED** sans GO Admin distinct |

---

## R08 — UX shell, intégrations et convergence visuelle

| ID | Scénario | Résultat attendu | Verdict Morris |
|---|---|---|---|
| R08-01 | Navigation surfaces Projet (Travail, Documents, Journal, …) | Transitions sans erreur bloquante | **NOT RUN** |
| R08-02 | Typographie SafeMarkdown / conversation 12px | Lisibilité acceptable | **NOT RUN** |
| R08-03 | Menu rail personnel — entrée consommation | Route accessible si droits | **NOT RUN** |
| R08-04 | Comparaison Figma mobile / visionneuse | Reporté — pas gate cutover | **DEFERRED** |
| R08-05 | Erreurs globales (404 / error boundary) | Messages distincts session vs technique | **NOT RUN** |

**Observations Pilotage360 :** touchpoints `forecast-builder` / trajectoire — requalifier uniquement si parcours Pilote sollicité ; pas d'extension de campagne ici.

---

## 9. Synthèse de campagne (à compléter)

| Famille | NOT RUN | PENDING GO | AUTOMATED only | PASS Morris |
|---|---:|---:|---:|---:|
| R01 | 7 | 0 | 1 | 0 |
| R02 | 3 | 1 | 0 | 0 |
| R03 | 3 | 2 | 0 | 0 |
| R04 | 3 | 1 | 0 | 0 |
| R05 | 1 | 4 | 0 | 0 |
| R06 | 1 | 3 | 0 | 0 |
| R07 | 2 | 1 | 0 | 0 |
| R08 | 4 | 0 | 0 | 0 |

**Verdict global proposé (Cursor, pré Morris) :** **RECETTE OPERATIONAL ACTIVATION COMPLETE — INTEGRATED CONVERGENCE CAPABILITIES AVAILABLE — MORRIS FUNCTIONAL QUALIFICATION READY — USER ACCEPTANCE PENDING**

---

## 10. Rollback (rappel)

1. Arrêt LaunchAgent · restaurer paramètres **non secrets** depuis bak pre-op-activation · **garder le mot de passe PostgreSQL actuel**.  
2. Cutover code : retarget plist/script vers worktree `a150926c` si besoin.  
3. **Attention :** schéma 027 non retiré automatiquement ; ne pas réimporter une base uniquement pour annuler l’activation config.

Preuves cutover : `…/web/.sfia-evidence/recette-cutover-20261127/` (gitignored).  
Preuves activation : `…-recette-build-e8e6e06961fa/…/web/.sfia-evidence/recette-op-activation-20261127/` (gitignored).