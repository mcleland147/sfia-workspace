# SFIA STUDIO NEXT — T-D4-NEUF-02 — PROPOSAL_SOURCE_CONFLICT
## Diagnostic complémentaire D3→D4 (projet vierge) — READ-ONLY

**Date/heure :** 2026-11-14 — Europe/Paris (~20:50+)
**GO :** MORRIS — audit technique read-only
**Objet :** T-D4-NEUF-02 — CREATE FAILED / `PROPOSAL_SOURCE_CONFLICT`
**Cycle :** 8 — Audit projet / RUN
**Profil :** CRITICAL
**Correctif :** NON AUTORISÉ dans ce cycle
**Review Pack :** FULL mono-cycle
**Handoff :** REQUIRED / publish-in-cycle L3

**Verdict Cursor (pré-handoff ; SHA/blob définitifs post-publish dans le rapport final) :**
**DIAGNOSTIC COMPLETE — ROOT CAUSE PROVEN**

Rattachement à ML4C-A-010 / S05 : **NON** — causes distinctes (frontière réelle à préserver).
T-D4-NEUF-01 (sas sans projet) : réserve distincte, hors scope de ce tour.

---

## A. Synthèse exécutive

Sur un projet **neuf** (0 document, pas Intervencia), Nora a **QUALIFIED** un `d4.create_document` avec `documentProposal` structuré. Studio a **refusé avant toute persistance D4** via `confrontProposalWithFence` :

- autorité : `documentProposal` canonicalisé — **433** octets, **sans** newline finale ;
- fence extraite du `replyDraft` / contenu assistant au moment du contrôle — **434** octets, **avec** `\n` finale ;
- titres identiques ;
- première divergence à l'offset **433** (EOF vs U+000A).

`documentSave = { status: FAILED, reason: PROPOSAL_SOURCE_CONFLICT, act: CREATE }`
`d4_attempted = false` — **aucun** `savePreparationDocument`
Bibliothèque : **0** document
S05 : `pendingEffectBlocked = false`

La protection d'intégrité a fonctionné **conformément au contrat byte-exact**. Le refus est **évitable** comme faux positif produit (divergence purement structurelle trailing newline entre deux représentations émises par Nora dans le même tour), sans être une altération sémantique du document utilisateur.

---

## 1. Local Git Truth Check

```text
toplevel: /Users/morris/Projects/sfia-workspace-next-semantic-intent-20261112
branch: fix/next-semantic-intent-convergence-20261112
HEAD: d936da81ebf7d17eb78cc11da0538df000281a4a
TREE: 276679be1ea139525b2267cde9245b8fb88e9a76
PARENT: 67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0
origin/main: 6cda86bde4aa450abb1d23eedd370a9004ddcbc1
origin/build/…: 67bf6b0b… — PR #676 OPEN
status: M .tmp-sfia-review/chatgpt-review.md only
```

### Runtime RECETTE (RO)

```text
PID 41282 — BUILD_ID n-7E8DgbcVu4g_RJWZoiK — CWD …/ml4c-recette-build-d936da81/…/web
HEAD/TREE déployés: d936da81 / 276679be
PostgreSQL: sfia_next_recette_ml4 (transactions READ ONLY)
Mutations / restart / OpenAI / nouveau CREATE: aucun
```

---

## 2. Sources

SFIA v2.6 (routing, template, guardrails, principles, decision engine, checklist) ; CKC audit **N/A** ; gouvernance Next + décisions 2026-11-11/12 ; construction convergence ; journal `bb7769de…` (S03-01 Q3, **sans** T-D4-NEUF-02) ; handoffs S05 `6e0468d6…`, Q1 `2afd7b57…`, Q2 `746f0813…` ; code local **d936da81**.

---

## 3. Tour exact (UNIQUE)

Identités UI vérifiées en base :

| Entité | ID | Preuve |
|---|---|---|
| preparationId | `prep_a9bc4514-3263-4894-82c0-33e85b2cb1af` | PROVEN |
| conversationId | `conv_79d01239-e73b-446a-9254-30354adcc8e7` | PROVEN |
| projectId | `proj_caa96b06-14f9-49a3-8d4b-b0e469331c0c` | PROVEN — name `Recette documentaire — Projet vierge` |
| user_message_id | `msg_b3a3fdb7-4c42-4c92-ae09-a9ca8ce3c5d3` (ord 3) | PROVEN |
| assistant_message_id | `msg_dc7f5534-f296-49a2-942f-c05c1f533962` (ord 4) | PROVEN |
| turn_command_id | `tcmd_4b1310ec-c1d5-44a2-8a4c-fdc0d735d8cf` | PROVEN |
| operation_id | `op_8de7a3ea-d0f8-46c0-859f-239b11ea73a4` | PROVEN |
| generation_id | `gen_ac7d6409-9b04-40a3-8600-de54dcf310ae` | PROVEN |
| request_id | `req_eda47bad-93da-4e7a-8d06-74385ac4d24b` | PROVEN |
| client_turn_key | `turn-4abcfb45-f498-46f5-ab9d-0c08397b6e32` | PROVEN |
| created_at | 2026-11-14 19:46:15 → 19:46:41+00 | PROVEN |
| turn status | COMPLETE | PROVEN |
| Nora status | COMPLETE / LIVE | PROVEN |
| Ambiguïté `PROPOSAL_SOURCE_CONFLICT` assistants | **1** | PROVEN — pas AMBIGUOUS |

---

## 4. Chronologie D3→D4

| Étape | Statut | Preuve |
|---|---|---|
| USER auth CREATE | OBSERVÉ | msg ord 3 |
| Nora QUALIFIED + documentProposal | OBSERVÉ | result_json |
| S05 block | OBSERVÉ négatif | `pendingEffectBlocked=false` |
| Policy / provider LIVE | OBSERVÉ | obs events |
| document_act CREATE | OBSERVÉ | obs `qualification_kind=CREATE` |
| confrontProposalWithFence | OBSERVÉ | refuse PROPOSAL_SOURCE_CONFLICT |
| admit / seal / savePreparationDocument | **NON EXÉCUTÉ** | `d4_attempted=false` |
| documents/revisions | OBSERVÉ négatif | COUNT=0 |
| ACK FAILED | OBSERVÉ | assistant + `documentSave` |

---

## 5. Cause racine — divergence exacte

### Composant

`confrontProposalWithFence` — `service.ts` ~308–327, appelé sur le chemin CREATE same-turn (`qualification.documentProposal` sans `documentSource`) ~1028–1035 (et early path ~917–925).

Émission unique du code `PROPOSAL_SOURCE_CONFLICT` : ce confront (title / contentMarkdown / contentSha256).

### Représentations confrontées

| Représentation | Titre | Contenu | Len | Trailing NL | SHA (title\\0content) |
|---|---|---|---|---|---|
| `documentProposal` → canonicalize | `Test documentaire — Création initiale` | markdown H1+3 sections | **433** | **non** | `e31f3430…71b8` |
| Fence extraite (`extract` path=fence) | même titre | même texte + `\\n` | **434** | **oui** | `59807b7b…d15a` |

**Première différence :** offset **433** — autorité EOF ; extrait U+000A (`\\n`).
**Titres :** égaux.
**Sections :** 4 (obs `section_count=4`).

Obs `d3.turn.document_proposal` FAILED :

```text
extract_path=fence
proposal_chars=434
body_ends_with_nl=true
refuse_code=PROPOSAL_SOURCE_CONFLICT
d4_attempted=false
```

### Origine

**PROVEN :** Nora a produit deux représentations incohérentes au bit près dans le même tour :

1. `documentProposal.contentMarkdown` sans newline finale ;
2. fence `sfia-document` dans `replyDraft` dont le corps extrait conserve la newline avant le closer.

Pas de `documentSource` prior. Pas de reformulation sémantique des sections. Pas de S05. Pas d'appel D4.

Classification : **divergence de présentation / sérialisation** (trailing newline), pas une vraie divergence du document autorisé par le Pilote.

### Contrat

La vérification stricte est **légitime** comme garde d'intégrité (SRC-04 teste des divergences de titre). Ici elle refuse un **faux conflit** trailing-NL entre deux vues Nora du même document.

`serializeProposalFence(auth)` round-trip → extract OK et contentEqAuth true — le serializer Studio est cohérent ; le conflit vient de la **dualité Nora** proposal vs fence du draft.

---

## 6. ACK utilisateur — fidélité

Texte observé :

> Studio a exécuté l'acte documentaire et a refusé l'écriture.

Source : `formatDocumentEffectAck` pour `status===FAILED` (`document-act.ts` ~1222–1226).

**Écart de vérité :** `d4_attempted=false` — refus **pré-admission / pré-persistance**, pas un refus du propriétaire D4 après tentative d'écriture. Formulation **sur-affirme** l'exécution transactionnelle.

---

## 7. Preuves contributives (non root)

1. **Message assistant persisté ≠ replyDraft** : ligne vide après ` ```sfia-document` ; closer ` ``` ` collé en fin de dernier paragraphe → extract(assist persisté) = `DOCUMENT_PROPOSAL_UNCLOSED`. Phénomène **post**-refus / composition ACK — n'explique pas le refuse_code obs (qui a vu 434 chars fence OK).
2. Couverture tests : META-17 round-trip sans NL ; SRC-04 conflit de **titre** — **pas** le cas same-turn proposal-sans-NL vs fence-avec-NL.
3. Intervencia/S05 : **orthogonal** (déjà PROVEN ailleurs).

---

## 8. Réponses aux 16 questions

1. Tour : `op_8de7a3ea…` / ord 3→4 — PROVEN unique.
2. Intention : `d4.create_document` REQUEST_EFFECT QUALIFIED + documentProposal — PROVEN.
3. Confrontés : canonical documentProposal vs fence extraite — PROVEN.
4. Divergence : trailing `\\n` only (433 vs 434) — PROVEN.
5. Composant : `confrontProposalWithFence` — PROVEN.
6. Pourquoi bloquant : `!==` strict title/content/sha — PROVEN.
7. Conforme au contrat byte-exact : OUI — PROVEN.
8. Justifié sémantiquement : NON (faux positif produit) — STRONGLY SUPPORTED.
9. Appel D4 persistant : NON — PROVEN.
10. Données persistées : messages/turn COMPLETE ; 0 documents — PROVEN.
11. ACK fidèle : NON (sur-affirme exécution) — PROVEN.
12. Root cause : dualité Nora proposal/fence + confront strict trailing NL — PROVEN.
13. Scénarios affectés : tout CREATE same-turn où proposal et fence diffèrent d'un NL (ou autre whitespace) — HYPOTHESIS élargie / cas présent PROVEN.
14. Options correctives (non implémentées) : voir §F.
15. Tests : voir §G.
16. Même macro-lot que S05 ? **Non** — frontière réelle ; programme ML4C peut coordonner deux lots distincts.

---

## F. Options correctives (SANS implémentation)

Ne pas supprimer le confront d'intégrité.

Candidates (macro-lot documentaire distinct de S05) :

1. **Autorité unique same-turn :** si `documentProposal` présent et canonical OK, matérialiser la fence depuis l'autorité (`serializeProposalFence`) **avant** confront, ou confront uniquement après réécriture contrôlée de la fence.
2. **Normalisation bornée du seul trailing newline** entre authority et extract (documenter ; ne pas normaliser d'autres whitespace).
3. **Fail closed explicite côté Nora :** imposer que `documentProposal.contentMarkdown` === corps fence (tests SDK).
4. **ACK loyal :** si `d4_attempted=false`, libellé « précontrôle / admission refusée » et non « a exécuté l'acte ».
5. Auditer composition post-ACK qui dégrade les fences persistées (UNCLOSED).

Pas de fallback lexical, pas de second moteur, pas de réécriture silencieuse hors règle documentée.

---

## G. Contrat de preuve du correctif futur

- Unit : proposal 433 sans NL + fence draft avec NL → CREATE AVAILABLE **ou** fence réécrite depuis authority puis AVAILABLE.
- Unit : vraie divergence de corps/titre → toujours PROPOSAL_SOURCE_CONFLICT.
- PG/E2E : projet vierge, CREATE LIVE/fixture → 1 document, ACK cohérent avec `d4_attempted`.
- Non-régression SRC-04 / META-17.
- Retest manuel T-D4-NEUF-02 en RECETTE sous GO.

---

## H. Décision Morris

1. Accepter root cause trailing-NL dual representation ?
2. GO macro-lot documentaire (autorité fence / normalisation NL / ACK) **séparé** du lot S05 ?
3. Priorité relative vs A-010 S05 ?
4. Conserver T-D4-NEUF-01 comme réserve distincte ?

**Non déclarable :** FIXED / D4 AVAILABLE / T-D4-NEUF-02 PASS / S03-01 PASS / ML4C ACCEPTED / Gate C / STABLE / ADOPTED.

---

## I. Handoff

Pack local réinitialisé : `.tmp-sfia-review/chatgpt-review.md`

Publication L3 prévue : `sfia/review-handoff` ← ce fichier (commit/blob définitifs dans rapport Cursor post-publish).

### Instruction ChatGPT

Avant réponse à Morris : lire `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff`, vérifier cycle, HEAD, divergence 433/434, root cause, réserves, commit/blob, relecture distante ; revue critique sans convertir hypothèses en décisions.

---

## Verdict

**DIAGNOSTIC COMPLETE — ROOT CAUSE PROVEN**

---

*Fin Review Pack FULL — T-D4-NEUF-02 — instantané pré-publication L3*
