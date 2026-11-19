# SFIA Review Pack — FULL

| Champ | Valeur |
|---|---|
| Date / heure | 2026-11-19 ~14:30 CET |
| Cycle | 9 — Revue / diagnostic technique |
| Profil | CRITICAL |
| Typologie | INC / INVESTIGATION |
| Mode | **READ-ONLY — NO CORRECTIVE DELIVERY** |
| Macro-lot | Ensemble 06 — Journal / continuité Nora-D4 |
| Review Pack | FULL |
| Review Handoff | REQUIRED / PUBLISH-IN-CYCLE |

---

## 1. Git Truth Check

| Contrôle | Résultat |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-wt-journal-delivery-20261119` |
| Remote | `mcleland147/sfia-workspace` |
| Branche | `sfia/next-journal-delivery-20261119` |
| HEAD local | `b9a0c9c3d16cbd68014daec999addab9feb70002` (as-built post-cutover) |
| Tree | `befbb9ed23442b5b969ecab5afbba0506d4c8b21` |
| Gel code RECETTE | `3fc8af5fe97e2d03d139854d008b4724ab4cbd5c` |
| `origin/main` | `d3d199adb782462b93467934f5f1e8a0c98fb492` |
| Matrice v0.7 | non modifiée (lecture seule) |
| Mutations produit ce cycle | **AUCUNE** |
| Dirty | artefacts `.tmp-sfia-review/**` untracked seulement |

STOP Git : non requis — identité cohérente avec le delivery Journal.

---

## 2. Identité RECETTE (ENV-01, read-only)

| Champ | Observé |
|---|---|
| URL | `http://127.0.0.1:3200` |
| HTML BUILD_ID | `VkuCNyaO0VIUbNtM2KJfO` |
| Fichier `.next/BUILD_ID` | `VkuCNyaO0VIUbNtM2KJfO` |
| SOURCE_SHA (start script / OBS) | `3fc8af5fe97e2d03d139854d008b4724ab4cbd5c` |
| Worktree cwd | `…/ensemble06-recette-build-3fc8af5f/projects/sfia-studio-next/web` |
| Service | `com.sfia.studio.next.recette.ml4d-ux004` running (launchd pid 33153 · node 33168) |
| DB | `sfia_next_recette_ml4` @ `127.0.0.1:5434` |
| Schéma 014 | tables `knowledge_*` + revisions présentes |
| Compteurs globaux (après campagne) | projects=24 · messages=576 · knowledge_subjects=4 (aucun CampusNova) |

Aucune mutation service / migration / seed / LIVE.

---

## 3. Identité CampusNova (non sensible)

| Champ | Valeur |
|---|---|
| projectId | `proj_b8fc5a55-c49c-4df7-bd3c-2beef7059f86` |
| name | CampusNova |
| owner_pilot_id | `pilot_98a7a89e-ba00-42c6-84d5-680eff67b73c` |
| preparationId | `prep_339f6863-3cb8-489b-bdc8-9470ddaded0b` |
| conversationId | `conv_6032bb7c-5050-46eb-accc-3a92439d84ee` |
| link attached_at | `2026-11-19 13:02:20Z` (création projet depuis SAS) |
| Messages | 16 (8 tours) — 6 COMPLETE assistant · 2 UNKNOWN |
| D4 subjects / acquis / open_points | **0 / 0 / 0** pour ce projectId et ce preparationId |

Chronologie SAS → Projet : conversation créée `12:53:17Z` ; projet lié `13:02:20Z` ; tours 1–4 avant lien, tours 5–8 à cheval / après. Aucune écriture D4 ni avant ni après.

Isolation : sujets existants = CampusFlow (1) + 3 prep-only historiques — **aucune fuite** vers CampusNova. Pas de STOP SECURITY.

---

## 4. Question centrale — réponses A–H (preuve)

| Q | Réponse | Preuve |
|---|---|---|
| A. Nora ne propose-t-elle aucune capitalisation ? | **OUI** | 8/8 tours : 0 intent `d4.record_knowledge` |
| B. Propositions rejetées ? | **NON** | Jamais proposées → `capitalisationAttempted=[]` |
| C. Persistance D4 défaillante ? | **NON observée** | Chemin non alimenté ; pas d'erreur `capitalisation_failed` |
| D. Mauvais projet/pilote ? | **NON pour l'absence** | CampusNova correctement vide ; autres projets inchangés |
| E. Projection Journal exclut ? | **NON** | DB vide ⇒ projection vide attendue |
| F. API pleine / UI vide ? | **NON** | DB 0 sujets ; pas d'écart API/UI démontré |
| G. Traitement différé ? | **NON observé** | Pipeline synchrone post-tour ; pas de job différé |
| H. Sélectivité contractuelle ? | **Partiel** | Zéro écriture sans proposition = conforme SEM-02 ; mais **aucune** proposition malgré contenu de continuité = rupture cognitive / conduction |

---

## 5. Flux réel et premier point de rupture

```text
MESSAGE PILOTE
  → messages COMPLETE (persistés)                    PASS
TRAITEMENT D3 / Nora LIVE
  → qualification QUALIFIED (tours COMPLETE)
  → intents = d3.converse (ou d2.create_project x1)
  → AUCUN d4.record_knowledge REQUEST_EFFECT         FAIL ← PREMIER RUPTURE
extractKnowledgeProposals(qualification)
  → []                                               PASS (fidèle)
maybeCapitalizeFromExchange(... proposals:[])
  → selectionLimit = « Aucune proposition… zéro écriture D4 »
  → aucune ensureSubject / capitalizeAcquis / openPoint
                                                         PASS (fidèle au gate)
knowledge_* CampusNova
  → 0 lignes                                         PASS (conséquence)
getJournalProjection / API / UI
  → empty « Aucun thème capitalisé… »                PASS (conséquence)
```

**Premier maillon défaillant :** qualification cognitive D3 — Nora n'émet pas d'intentions typées `d4.record_knowledge` (mode `REQUEST_EFFECT`) malgré des tours COMPLETE avec réponses structurées et un message utilisateur à signal de continuité (ordinal 15).

`COMPLETE` = réponse conversationnelle terminée + CAS. **≠** preuve de persistance D4.

---

## 6. Matrice causale (pipeline)

| Étape | Composant | Cherché | Observation | Preuve | Statut |
|---|---|---|---|---|---|
| Persist user | `messages` | 8 user COMPLETE | présents | SQL ordinals | PASS |
| Nora LIVE | `nora-adapter` | stream + qual | COMPLETE ou UNKNOWN | OBS + turn_commands | PASS |
| Qual intents | `semanticQualification` | `d4.record_knowledge` | **0** sur 8 tours | `result_json` | **FAIL** |
| Extract proposals | `extractKnowledgeProposals` | proposals>0 | [] | code + result_json limit | PASS |
| D4 write | `maybeCapitalizeFromExchange` | subjects/acquis | non appelé en écriture | capitalisationAttempted=[] | PASS |
| DB | `knowledge_subjects` | project rows | 0 | SQL | PASS |
| Journal API | `getJournalProjection` | subjects | cohérent avec DB vide | code + SQL | PASS |
| UI empty | ProjectJournal | empty state | attendu si 0 sujets | contrat UI | PASS |
| Prompt LIVE | `QUALIFICATION_INSTRUCTIONS` | guidance record_knowledge | **absente** du texte | grep nora-adapter@3fc8af5f | **FAIL contributive** |

---

## 7. Causes

### 1. Cause racine PROUVÉE

**D3 n'a produit aucune proposition typée `d4.record_knowledge` sur la campagne CampusNova**, donc le pipeline D4 n'a rien écrit et le Journal a fidèlement affiché l'absence de thèmes.

Localisation : enveloppe de qualification (`semanticQualification.intents`) par tour dans `conversation_turn_commands.result_json` ; consommation dans `service.ts` → `extractKnowledgeProposals` → `maybeCapitalizeFromExchange`.

Effet utilisateur : Journal > Sujets vide après synthèse substantielle en Travail.

Blast radius : tout projet dont Nora omet `d4.record_knowledge` restera sans mémoire Journal, même si la conversation est riche. Non limité à un bug UI Ensemble 06. Spécificité CampusNova : incident observé ici ; mécanisme général du code servi.

### 2. Causes contributives PROUVÉES

- Instructions LIVE (`nora-adapter.ts` `QUALIFICATION_INSTRUCTIONS`) : **aucune mention** de `d4.record_knowledge` / `knowledgeKind` / capitalisation Journal ; guidance forte sur `d4.create_document` et règle restrictive `REQUEST_EFFECT` (« demande positive d'effet », jamais hypothèse).
- Tours UNKNOWN (ordinals 5–6) : `qualification_status=UNAVAILABLE` → capitalisation impossible ces tours (échec schema stream, incident distinct).
- `document_act` toujours `SEMANTIC_NONE` / `d4_attempted=false` — pas de confusion document vs connaissance, mais confirme qu'aucun effet D4 n'a été engagé.

### 3. Hypothèses NON PROUVÉES

- Seuil cognitif interne du modèle refusant volontairement la capitalisation malgré un prompt adéquat (le prompt adéquat est **absent**).
- Besoin d'un mot-clé Pilote exact non couvert (ordinal 15 a un signal continuité lexical ; toujours 0 proposition).
- Défaut latent de `getJournalProjection` masquant des lignes (contredit par SQL 0).

### 4. Causes exclues

- Bug d'affichage Journal seul.
- Écriture D4 échouée / avalée (pas d'OBS `capitalisation_failed` ; attempted vide).
- Mauvais rattachement projectId pour des sujets existants CampusNova (aucun sujet).
- Fuite interprojets / isolation rompue.
- Migration 014 manquante.
- Fixtures E2E (conversation REAL CampusNova ; fixtures 403 en production).

### 5. Limites d'observabilité

- Texte exception provider non journalisé (UNKNOWN).
- Contenu conversationnel non recopié ici (contrat anonymisation).
- Login DEV Pilot A ≠ owner CampusNova → API journal 404 pour ce pilote (isolation) ; preuve D4 via SQL owner scope.

---

## 8. Qualification contractuelle

| Exigence | Lecture face à l'incident |
|---|---|
| RG-KNOW-001 sélective | Gate « zéro proposition ⇒ zéro écriture » **respecté** |
| RG-KNOW-011 / 015 continuité | Matière utile **non** devenue durable — **écart produit** |
| J-C01 synthèses durables | Non produites (pas d'objets) |
| J-C15 isolation | Respectée |
| Contrat tech Journal § capitalisation | « D3 décide ce qu'il propose, D4 contrôle ce qui est sauvé » — D3 n'a rien proposé |

Ce n'est **pas** « empty Journal alors que D4 est plein ».
Ce n'est **pas** non plus une sélectivité saine pleinement justifiée : capacité schéma + fixture `d4.record_knowledge` existent, mais la conduction LIVE n'active pas la capacité.

---

## 9. Plan correctif proposé (NON EXÉCUTÉ)

**Objectif :** restaurer la conduction D3→D4 existante sans nouveau moteur.

1. **Prompt / policy Nora** — ajouter dans `QUALIFICATION_INSTRUCTIONS` des règles explicites :
   - quand émettre `d4.record_knowledge` REQUEST_EFFECT (acquis stables, sujets, points ouverts utiles à la reprise) ;
   - distinction réponse visible (`d3.converse` + visualComposition) vs enregistrement durable ;
   - capitalisation sélective : pas tout message, mais consolidation / faits structurants / questions ouvertes durables oui ;
   - paramètres `knowledgeKind` / `knowledgeStatement` / `subjectTitle` / `epistemic` / `continuityReason`.
2. **Observabilité** — OBS dédié `d3.turn.knowledge_proposals` (count by kind) pour chaque tour COMPLETE.
3. **Tests** — fixture/unit déjà présente ; ajouter oracle E2E DEV : tour consolidant ⇒ ≥1 `d4.record_knowledge` ⇒ sujet visible Journal (fake provider) ; non-régression « dialogue banal ⇒ 0 écriture ».
4. **Rattrapage CampusNova** — **pas automatique**. Après correctif : soit nouvelle demande Pilote de consolidation (LIVE), soit outil de reprise borné sous GO Morris distinct (ré-qualification / propositions manuelles) — **hors ce diagnostic**.

Risques : sur-capitalisation si le prompt est trop agressif ; régression REQUEST_EFFECT documents ; pas de mutation D6.

Gate Morris : **GO correctif** requis avant toute implémentation.

---

## 10. Verdict

**ROOT CAUSE IDENTIFIED — CORRECTIVE GO REQUIRED**

Aucune modification produit. Aucun déploiement. Aucune mutation DB. Aucun LIVE rejoué.

Fake/Real : preuves = SQL + `result_json` + OBS RECETTE sur conversation CampusNova réelle ; fixtures DEV non utilisées comme substitut.
