# SFIA Studio Next — Review Pack FULL
## R5 / ML4 — Cycle 9 — Audit systémique CREATE D3→D4 / incident R12

- Date/heure : 2026-11-09 22:45 CET (2026-11-09T21:45:18Z)
- GO Morris : 2026-11-09 — **DIAGNOSTIC UNIQUEMENT** (aucune correction / redeploy / LIVE / GitHub)
- Profil : CRITICAL
- Verdict :
  **ROOT CAUSE EVIDENCED — R12 CREATE CONTRACT FAILURE QUALIFIED**

---

## 1. Git Truth Check

| Item | Valeur | Statut |
|---|---|---|
| Branche | fix/next-ml4-chat-first-d4-provenance-20261109 | OK |
| HEAD | 93da44beb7e7571c9406180027896769579b9815 | OK |
| Tree | 8b1b8a3e6bacfefd2dc9154c1cb6cef2e94953b8 | OK |
| RECETTE servie | SHA 93da44be / BUILD sHkE8sHJBxD3U9AJdHWi7 / :3200 | OK inchangé |
| Commit produit ce cycle | **AUCUN** | OK |
| Écriture DB/GitHub/config | **AUCUNE** | OK |
| Handoff précédent | e3b234bb… | OK |

État local final :
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
HEAD final : `93da44beb7e7571c9406180027896769579b9815` / `8b1b8a3e6bacfefd2dc9154c1cb6cef2e94953b8`

Historique conversation (974b→93da) : f1b49e20 → 1fedb9ff → a2c5e9f8 → 8ba77730 → 9694cc71 → 0b02de41 → 93da44be.

---

## 2. Sources lues

- Contrats Next / ML4 (gouvernance, conception Nora, spec/matrice integration-git)
- Code courant document-act.ts / service.ts (CREATE gate)
- Tests unit document-act + PG chat-first (couverture)
- Handoffs historiques (contexte, non baseline)
- DB RECETTE en SELECT uniquement
- Logs launchd RECETTE existants

---

## 3. Identité exacte du tour R12 (STORED)

| Champ | Valeur |
|---|---|
| projectId | proj_1b52eb8f-3c63-4c72-a4dd-a47f34e1bb4d (CampusFlow) |
| preparationId | prep_a89ab4b7-4e7b-42a7-8649-a9490990e723 |
| conversationId | conv_66d2f3a3-d1e0-4e70-a307-6c68bd22690c |
| pilotId | pilot_98a7a89e-ba00-42c6-84d5-680eff67b73c (mcleland147) |
| turnCommandId | tcmd_c67c5ce8-07b7-4827-bdc9-002d1017d2eb |
| clientTurnKey | turn-c436e39a-1bd7-4d34-8930-89ce02249927 |
| operationId | op_1e7c0bc8-bb9b-4e36-aeb0-588a03de57eb |
| requestId | req_4b56727b-59c9-4491-a976-767e8639475d |
| userMessageId | msg_23127034-5e09-4aab-892d-486d818f612e |
| assistantMessageId | msg_e7ed1250-1512-4001-953b-ebe9581d1de0 |
| generationId | gen_60a437d6-ba18-4958-9985-014dd98970c8 |
| turn status | COMPLETE |
| noraMode | **openai-agents-sdk-live** |
| documentSave (result_json) | **null** |
| obs document_proposal | **ABSENT** pour ce requestId |
| docs CampusFlow après | 1 seul (Chantiers360) ; v2 inchangée |

User message (structure, corps omis) — niveau **STORED** :
```
Dans le projet CampusFlow, crée et enregistre dans les Documents internes de Studio un nouveau document de recette intitulé « RECETTE ML4 — Publication documentaire R12 ».

Contenu souhaité : [CORPS OMIS]

Enregistre uniquement ce document en D4, sans modifier le document existant « Références externes — Enseignements de Chantiers360 ».

N'effectue pour l'instant aucune écriture GitHub, aucune création de branche, aucun commit et aucune PR.

Indique le résultat applicatif réel de l'enregistrement, l'identifiant documentaire, la version et la révision créées.
```

Assistant (structure) — STORED :
- ouverture fence info=`sfia-document` puis fermeture valide ;
- pas de bloc « Résultat applicatif D4 » ;
- narration : enregistrement non confirmé.
- HEAD: `Voici la proposition de **nouveau document D4**, distincte de « Références externes — Enseignements de Chantiers360 », dont aucune modification n’est proposée. Aucune opération GitHub n’est effectuée.\n\n```sfia-document\n# RECETTE ML4 — Publication documentaire R12\n\n## 1. Objectif\n`
- TAIL: `-effet n’est disponible à ce stade. Je ne peux donc pas confirmer l’enregistrement ni fournir un identifiant documentaire, une version ou une révision créés. Ces éléments doivent provenir du retour applicatif de Studio.\n`

RAW LIVE provider payload : **UNKNOWN** (non conservé hors message persisté). Le contenu assistant STORED est la meilleure preuve disponible.

---

## 4. Timeline R06-A → A+B+D → R12

1. **R06-A CREATE** (14:43Z) : user `msg_272cc3cf…` / gen `gen_cd4a83b6…` → `documentSave.AVAILABLE` v1 `doc_1e5d8c16…` / `drev_c07ca162…`.
   - Assistant LIVE **sans** `sfia-document` ; affirme non-enregistrement ; **ACK applicatif absent** mais D4 persisté (vérité ACK historique fausse).
2. Correctifs intent/ACK/section (f1b49e20…8ba77730) puis **A+B+D** (9694cc71) : fence contractuelle exacte `sfia-document`, suppression fallback permissif.
3. Scanner nested + isolation illustrative (0b02de41, 93da44be).
4. Bascule RECETTE sur 93da44be ; activation REAL documentary (hors cause CREATE).
5. **R12 CREATE attempt** (21:25Z) : Nora LIVE produit `sfia-document` valide ; **aucun D4**.

---

## 5. Cartographie A→M et première divergence

| Frontière | Observé | Preuve | Écart |
|---|---|---|---|
| A User reçu | texte CREATE explicite STORED | DB messages | — |
| B Intent | markers verbaux présents | texte | — |
| **C Qualify** | **`NONE` / `NO_EXPLICIT_WRITE`** | replay `qualifyDocumentAct` sur STORED | **PREMIÈRE DIVERGENCE** |
| D–F Nora | LIVE COMPLETE ; fence `sfia-document` | result_json + message | conforme B extract |
| G–H Extract/Scan | ok si joué hors bande | replay extract/scan | non atteint en service |
| I Autorisation contenu | n/a (non routé) | — | — |
| J–K D4 | non tenté ; documentSave null | result_json ; pas d’obs proposal | conséquence |
| L ACK | absent | message assistant | conséquence (pas de documentSave) |
| M UI library | 1 doc seulement | SELECT documents | conséquence |

**H1–H9 :**
- H1 CREATE routé ? **NON**
- H2 NONE ? **OUI — NO_EXPLICIT_WRITE**
- H3 instruction sfia-document reçue ? **PROBABLE** (sortie conforme) — RAW prompt UNKNOWN
- H4 fence produite ? **`sfia-document` autonome OK** (pas générique)
- H5 MISSING ? **NON** (extract replay OK) — non exécuté en tour
- H6 pas d’ACK ? **parce que documentSave null** (branche CREATE jamais entrée)
- H7 effet D4 tenté ? **NON** (`d4_attempted` non émis)
- H8 ownership ? **NON** (tour COMPLETE normal)
- H9 erreur masquée ? **NON** prouvée ; silence de qualification

Mécanisme CREATE_PAIR_RE actuel :
`verbe ∈ {rédige,crée,…}` puis `≤40` chars puis `(document|note|…)` **singulier**.

Sur R12 : « crée et enregistre dans les **Documents** … un nouveau **document** »
- « Documents » (pluriel) ≠ `document`
- « document » singulier trop loin (>40) du verbe
→ CREATE_PAIR false ; CREATE_PLEASE false (pas de peux-tu) → NONE.

Replay discriminant :
- `crée un document intitulé X` → CREATE
- `crée et enregistre dans les Documents internes un nouveau document` → NONE

---

## 6. Discriminants S0–S7

| ID | Résultat | Niveau |
|---|---|---|
| S0 | Assistant/user STORED récupérés | STORED |
| S1 | extract STORED → ok title R12, 598 chars | DET sur STORED |
| S2 | même corps en sfia-document → ok | DET |
| S3 | markdown / bare → MISSING | DET (contrat B) |
| S4 | qualify user → NONE NO_EXPLICIT_WRITE | DET |
| S5 | non rejoué PG (interdit effet ; fixtures existent pour CREATE+sfia-document) | N/A ce cycle |
| S6 | n/a — échec avant extract | — |
| S7 | A+B fence **non causal** ici ; Nora a respecté sfia-document | DET + STORED |

---

## 7. Comparaison R06-A vs courant

| | R06-A (succès D4) | R12 (échec) |
|---|---|---|
| Qualifier **actuel** sur user STORED | NONE INFORMATIVE_OR_HYPOTHETICAL (faux positif : `comment je peux le retrouver` … `enregistrer`) | NONE NO_EXPLICIT_WRITE |
| Runtime historique | permissive / autre SHA (CREATE a persisté) | 93da44be |
| Fence assistant | pas sfia-document | sfia-document OK |
| Extraction historique | fallback markdown/titre/wrap | exact sfia-document |
| documentSave | AVAILABLE v1 | null |
| ACK | absent (et narration menteuse « non enregistré ») | absent |

Conclusion comparative :
- A+B a **durci correctement** l’extraction (plus de fallback dangereux).
- L’incident R12 n’est **pas** un échec du scanner B.
- Il y a **rupture du parcours nominal CREATE** au niveau **qualification d’acte** (fenêtre 40 + singulier + absence d’ACK de refus).
- Régression systémique de couverture CREATE même si le durcissement local du parseur est juste.

---

## 8. Audit couverture tests (faux signal)

Campagnes 77/14/13 :
- CREATE positifs = formulations courtes (« Rédige un document… ») déjà `sfia-document` en fixture.
- **Aucun** test sur « crée … Documents internes … nouveau document ».
- **Aucun** test LIVE Nora → qualify → extract → D4.
- Refus CREATE non routé : **pas d’ACK applicatif** exigé (silence ≠ FAILED documentSave).
- REVISE R06 (gen_229e698e) a émis document_proposal SUCCESS — asymétrie CREATE vs REVISE sur ce projet.

Test manquant qui aurait dû bloquer : oracle qualify sur paraphrases CREATE réalistes + assert que NONE sans write produit un signal utilisateur loyal.

---

## 9. Responsabilités

| Domaine | Rôle dans l’incident |
|---|---|
| D3 qualify | **owner de la première divergence** |
| D3 Nora LIVE | a produit une proposition contractuelle valide |
| D3 extract B | non exécuté ; aurait accepté |
| D4 | non sollicité |
| D6/D7/D8/D9 | hors cause primaire |
| UI | affiche conversation COMPLETE sans transaction D4 |

Deux visions : le modèle croit créer/proposer un D4 ; le service n’a jamais autorisé l’acte CREATE.

---

## 10. Options (SANS implémentation)

| Opt | Idée | Fidélité RG-DOC | Blast | Risque |
|---|---|---|---|---|
| A | Élargir CREATE_PAIR (pluriel documents, fenêtre, « enregistre … document ») | haute si borné aux verbes positifs | faible–moyen document-act | faux positifs CREATE |
| B | Protocole sortie structuré hors markdown libre | haute long terme | moyen Nora+D3 | chantier plus large |
| C | Récupérer proposition sans CREATE qualifié | **basse** — dangereux | élevé | pollution / autorité |
| D | ACK loyal quand intent documentaire saturé mais NONE/refuse | haute UX vérité | faible service compose | ne crée pas le doc |
| E | Obs `document_act_kind` + reason même si NONE | haute diagnostic | très faible | ne corrige pas R12 |

**Écarter C** comme solution par défaut.
A+D (+E) = correctifs locaux probables ; B = trajectoire si dette générative récurrente.
A+B fence : **conserver** ; ne pas restaurer fallback_wrap.

---

## 11. Préservation / Fake-Real

- CampusFlow / Chantiers360 v1–v2 / flags GitHub / main / PR18 : **non mutés**
- Aucun Nora LIVE / aucune écriture D4 déclenchés par l’audit
- Qualification : STORED+DET **PROVEN** ; RAW LIVE prompt **UNKNOWN** ; REAL D4 R12 **NOT RUN** ; REAL GitHub **NOT RUN**

---

## 12. Verdict

**ROOT CAUSE EVIDENCED — R12 CREATE CONTRACT FAILURE QUALIFIED.**

Cause racine : `qualifyDocumentAct` n’a pas reconnu CREATE (`NO_EXPLICIT_WRITE`) à cause du couple verbe/objet trop strict (singulier `document` + fenêtre 40). Conséquence : branche D4 non entrée malgré une sortie Nora `sfia-document` extractible. A+B n’est pas la cause de cet échec ; il expose néanmoins une rupture de parcours nominal CREATE vs formulations utilisateur réelles et un silence d’ACK.

### Gate Morris suivant
Choisir option(s) de correction (recommandation d’audit : **A bornée + D + E**, sans rollback B) sous GO distinct — puis tests de non-régression CREATE paraphrasés avant nouvel essai R12 LIVE.

Ne pas annoncer : R12 PASS / CREATE FIXED / LIVE NORA PROVEN / ML4 ACCEPTED / STABLE / ADOPTED.
