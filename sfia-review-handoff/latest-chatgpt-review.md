# SFIA Studio Next — Review Pack FULL

## R5 / ML4 — Macro-correctif intégré A+D+E
### Qualification CREATE, vérité d'exécution, observabilité

**Verdict candidat :** READY FOR REVIEW — R12 CREATE A+D+E CORRECTIVE DETERMINISTICALLY VERIFIED LOCALLY

**Interdictions respectées :** pas de LIVE NORA PROVEN / R12 PASS / REAL GITHUB COMMIT PROVEN / ML4-REC-10 CLOSED / ML4 ACCEPTED / READY FOR MERGE / STABLE / ADOPTED.

---

## 1. GO et date

- **Autorité :** GO Morris du 09/11/2026 — correction A+D+E.
- **Processus :** SFIA v2.6 — Cycle 8 DELIVERY / CRITICAL / Review Pack FULL / Handoff L3 REQUIRED.
- **Date d'exécution Cursor :** 2026-11-09 (Europe/Paris).
- **Profil :** CRITICAL — frontière instruction utilisateur ↔ écriture durable D4.

---

## 2. Git Truth Check — initial / final

### Initial (avant implémentation)

| Champ | Valeur |
| --- | --- |
| Repo | `mcleland147/sfia-workspace` (remote origin) |
| Branche active | `fix/next-ml4-chat-first-d4-provenance-20261109` |
| HEAD | `93da44beb7e7571c9406180027896769579b9815` |
| Tree | `8b1b8a3e6bacfefd2dc9154c1cb6cef2e94953b8` |
| main distant vérifié | `6667a43858a5421e391b7441246536daad148bd6` |
| Worktree produit | clean hors untracked préexistants (manifestes ENV-01, scripts) |
| RECETTE LaunchAgent | `…-recette-build-93da44be` / BUILD `sHkE8sHJBxD3U9AJdHWi7` |

### Final (après commit local)

| Champ | Valeur |
| --- | --- |
| Branche | `fix/next-ml4-chat-first-d4-provenance-20261109` |
| HEAD | `8eab1317b97f5bfc438d736b42a1363ddfdb3e77` |
| Tree | `19c79e96aa1cae26233a5d9ec8fe2686970c0dab` |
| Parent | `93da44beb7e7571c9406180027896769579b9815` |
| Push Product | **AUCUN** |
| RECETTE | **INCHANGÉE** — `93da44be` / `sHkE8sHJBxD3U9AJdHWi7` |

Untracked préexistants **non touchés** : manifests `env01-recette-manifest-ml4-*.md`, `github-app-installation-read-qualify.ts`, `projects/.tmp-sfia-review/`.

---

## 3. Sources Git et refs

| Source | Ref / blob |
| --- | --- |
| Diagnostic handoff R12 | `sfia/review-handoff` @ `b9f1291eeded51614fdce5586b5966dc2b0b50dc` |
| Review Pack diagnostic blob | `2bad6d6a56aece91544fcc6f3681dab00f17f546` |
| Tip produit avant correctif | `93da44be` |
| SFIA routing guide (main) | blob `3315bbae…` (lu hors édition) |
| ENV-01 / versioning | politiques main — PATCH candidate / NO RELEASE |

Registre documentaire `docs/next-ml4-recette-utilisateur-20261109` : **lu, non modifié**.

---

## 4. Synthèse de la cause R12

Tour utilisateur CampusFlow (RECETTE) :

- Demande : création document « RECETTE ML4 — Publication documentaire R12 ».
- `qualifyDocumentAct` → **NONE** / `NO_EXPLICIT_WRITE`.
- Nora LIVE COMPLETE + fence `sfia-document` valide.
- Extraction replay OK ; `documentSave` null ; aucun document DB ; obs `document_proposal` absente.

**Cause prouvée :** `CREATE_PAIR_RE` exigeait verbe CREATE + objet **singulier** dans une fenêtre ≤40 caractères. La formulation réelle :

> « crée et enregistre dans les Documents internes de Studio un nouveau document… »

échoue : « Documents » (pluriel) puis le singulier trop loin. **A+B (scanner) non causal.**

---

## 5. Contrat A+D+E final

### A — Qualification CREATE bornée

- Propriétaire unique : `qualifyDocumentAct` / `hasExplicitCreateIntent` (pas de second moteur).
- CREATE sur texte **authority-stripped** uniquement (A7).
- Reconnaissance structurée : verbe positif + objet documentaire (singulier/pluriel) + pont de compléments allowlistés OU verbe de persistance (`enregistre`/`sauvegarde`) entre verbe et objet.
- REVISE avant CREATE (N8).
- Négations `ne … pas/aucun`, `sans (le) V`, questions leading `Comment/Pourquoi…` → NONE.
- Fail closed : `CREATE_WITHOUT_OBJECT` / `CREATE_OBJECT_BRIDGE_UNQUALIFIED`.

### D — Restitution loyale

- Distinction : réponse Nora ≠ acte qualifié ≠ extraction ≠ transaction D4 ≠ effet observé.
- Si `documentSave` réel → ACK D4 (AVAILABLE/FAILED/CONFLICT/UNKNOWN) inchangé.
- Si NONE + `hasDocumentaryWriteSignal` → ACK **pré-effet** `NOT_EXECUTED` (jamais `documentSave` FAILED inventé).
- Informative pure → pas d'ACK documentaire polluant.
- NORA COMPLETE ≠ D4 AVAILABLE.

### E — Observabilité

- Événement `d3.turn.document_act_qualification` **avant** extract/D4.
- Meta allowlistée : `qualification_kind`, `qualification_reason`, `documentary_intent_signal`, `d4_attempted`, `d4_effect`.
- Pas de prompt/corps/secret. Absence d'obs n'invente pas D4.
- Corrélation effet final CREATE/REVISE conservée via `d3.turn.document_proposal`.

---

## 6. Table de vérité positive / négative

| ID | Entrée (résumé) | Attendu | Résultat DET |
| --- | --- | --- | --- |
| P1 | Crée un document intitulé… | CREATE | PASS |
| P2 | …crée et enregistre dans les Documents internes… | CREATE | PASS |
| P3 | Message R12 **exact** (fixture DB) | CREATE | PASS |
| P4 | Rédige un document de recette… | CREATE | PASS |
| P5 | Crée … mais ne modifie pas l'existant | CREATE | PASS |
| P6 | Crée et sauvegarde … sans créer de branche GitHub | CREATE | PASS |
| P7 | Pluriels / compléments / accents | CREATE | PASS |
| N1 | Ne crée aucun document | NONE | PASS |
| N2 | Montre-moi les documents | NONE | PASS |
| N3 | Comment puis-je créer un document ? | NONE | PASS |
| N4 | Que se passerait-il si je créais… | NONE | PASS |
| N5 | Analyse … sans le modifier | NONE | PASS |
| N6 | Rédige le texte … ne l'enregistre pas dans D4 | NONE | PASS |
| N7 | CREATE seulement dans fence/citation Git | NONE | PASS |
| N8 | Ne crée pas…, révise section 2 | REVISE | PASS |
| N9 | Résume puis explique comment créer | NONE | PASS |
| N10 | Fence Nora + demande informative | zéro D4 | PASS (PG) |
| N12 | Document existant en contexte seulement | NONE | PASS |

---

## 7. Reproduction initiale du défaut

Sur tip `93da44be` (avant correctif) : message R12 exact → `qualifyDocumentAct` = `{ kind: "NONE", reason: "NO_EXPLICIT_WRITE" }` (prouvé audit Cycle 9 + relecture code `CREATE_PAIR_RE`).

Après correctif : même message → `{ kind: "CREATE" }` (DET + fixture sha256 `a22e79406907df2a68fa4a0e82a01cbf447f0cb61d437990bff13ac67cb5120c`).

---

## 8. Modifications de qualification

Fichier : `projects/sfia-studio-next/web/src/domains/conversation/document-act.ts`

### Constantes / helpers (extrait)

- `DOC_OBJECT_RE` : pluriels `documents?|notes?|…`
- `CREATE_PAIR_CLOSE_RE` : fenêtre courte 48 + pluriels
- `CREATE_COMPLEMENT_TOKEN_RE` : pont de compléments borné
- `hasExplicitCreateIntent`, `hasDocumentaryWriteSignal`, `isDocumentaryConsultationOnly`
- `isVerbNegated` : `aucun/aucune` + `sans (le) V`
- `isInformativeOrHypothetical` : leading question **avant** short-circuit CREATE
- `qualifyDocumentAct` : CREATE uniquement via `hasExplicitCreateIntent(authorityText)`

### `hasExplicitCreateIntent` (contenu complet)

```typescript
export function hasExplicitCreateIntent(text: string): boolean {
  const t = text.replace(/\s+/g, " ").trim();
  if (!t || !hasPositiveVerb(t, CREATE_VERB_RE)) return false;

  if (CREATE_PAIR_CLOSE_RE.test(t) || CREATE_PLEASE_RE.test(t)) return true;

  for (const verb of findVerbMatches(t, CREATE_VERB_RE)) {
    if (isVerbNegated(t, verb.index, verb.text.length)) continue;
    const after = t.slice(verb.index + verb.text.length, verb.index + verb.text.length + 160);
    const obj = after.match(
      /\b(nouveau(?:x)?|nouvelle(?:s)?)?\s*(documents?|notes?|synthèses?|rapports?|spécifications?)\b/i,
    );
    if (!obj || obj.index == null) continue;
    const between = after.slice(0, obj.index).trim();
    if (!between) return true;
    if (/\b(enregistre|enregistrer|sauvegarde|sauvegarder|persist(?:e|er)?)\b/i.test(between)) {
      return true;
    }
    if (/\b(nouveau|nouvelle|nouveaux|nouvelles)\b/i.test(between + " " + (obj[0] ?? ""))) {
      const tokens = between.split(/\s+/).filter(Boolean);
      if (tokens.every((tok) => CREATE_COMPLEMENT_TOKEN_RE.test(tok.replace(/[.,;:!?]/g, "")))) {
        return true;
      }
    }
    const tokens = between.split(/\s+/).filter(Boolean);
    if (
      tokens.length > 0 &&
      tokens.length <= 16 &&
      tokens.every((tok) => CREATE_COMPLEMENT_TOKEN_RE.test(tok.replace(/[.,;:!?]/g, "")))
    ) {
      return true;
    }
  }
  return false;
}
```

### Fin de `qualifyDocumentAct` (CREATE)

```typescript
  if (positiveRevise && hasDocObject) {
    return {
      kind: "REVISE",
      documentHint: designation.documentId ?? designation.titleHint,
      sectionHint: designation.sectionHint,
    };
  }

  if (hasExplicitCreateIntent(authorityText)) {
    return { kind: "CREATE" };
  }

  if (CREATE_PLEASE_RE.test(authorityText) && !isGlobalDocumentWriteNegation(authorityText)) {
    return { kind: "CREATE" };
  }

  if (hasPositiveVerb(authorityText, CREATE_VERB_RE) && !DOC_OBJECT_RE.test(authorityText)) {
    return { kind: "NONE", reason: "CREATE_WITHOUT_OBJECT" };
  }

  if (hasPositiveVerb(authorityText, CREATE_VERB_RE) && DOC_OBJECT_RE.test(authorityText)) {
    return { kind: "NONE", reason: "CREATE_OBJECT_BRIDGE_UNQUALIFIED" };
  }

  return { kind: "NONE", reason: "NO_EXPLICIT_WRITE" };
```

---

## 9. Restitution NOT_EXECUTED vs D4

### `DocumentEffectSummary`

`act` étendu à `"NONE"` ; statut `NOT_EXECUTED` pour pré-effet.

### `formatDocumentEffectAck` (branche pré-effet)

Si `status === "NOT_EXECUTED"` ou `act === "NONE"` :

- Titre : `### Résultat applicatif (pré-effet)`
- `Transaction D4: non tentée`
- Message : « Aucun acte documentaire exécuté : la demande n'a pas été qualifiée pour une écriture. »
- **Pas** de bloc « Résultat applicatif D4 (source de vérité) » / **pas** de FAILED inventé.

### Service — construction ACK

```typescript
: documentAct.kind === "NONE" &&
  documentaryIntentSignal &&
  !ownershipLostBeforeD4 &&
  reply.status === "COMPLETE"
? {
    act: "NONE",
    status: "NOT_EXECUTED",
    reason: documentAct.reason ?? "NO_EXPLICIT_WRITE",
  }
: null;
```

`documentSave` reste `null` lorsque aucune transaction n'est tentée.

---

## 10. Événements observabilité

### Nouveau

`d3.turn.document_act_qualification` émis immédiatement après `qualifyDocumentAct`, avant extract/D4.

Exemple CREATE (PG A-R12) :

```json
{
  "event_name": "d3.turn.document_act_qualification",
  "outcome": "PARTIAL",
  "meta": {
    "qualification_kind": "CREATE",
    "qualification_reason": null,
    "documentary_intent_signal": true,
    "d4_attempted": false,
    "d4_effect": null
  }
}
```

Exemple NONE informative (PG A-N10) :

```json
{
  "meta": {
    "qualification_kind": "NONE",
    "qualification_reason": "INFORMATIVE_OR_HYPOTHETICAL",
    "documentary_intent_signal": false,
    "d4_attempted": false,
    "d4_effect": null
  }
}
```

### Allowlist (`observability.ts`)

Ajout : `qualification_kind`, `qualification_reason`, `documentary_intent_signal`.

---

## 11. Tests CREATE positifs

- Unit table A+D+E P1–P7 + P3 fixture R12.
- PG `A: conversational CREATE` (historique).
- PG `A-R12: CREATE with Documents internes complements persists v1` → AVAILABLE, revision 1, ACK D4.

---

## 12. Tests négatifs sans écriture

- Unit N1–N9, N12, N7 citation/Git.
- PG `A-neg` / `A-neg2` historiques.
- PG `A-N10` : demande « Comment puis-je créer… » + fence Nora forcée → `documentSave` null, 0 docs.

---

## 13. Non-régression R06 REVISE

PG `ml4-chat-first-d4-provenance.pg.test.ts` : **15 PASS** incluant :

- REVISE section 2 / v1→v2
- R06 oracle titre cité
- R06 nested-code
- R06-neg NOT_FOUND
- Isolation B CREATE/REVISE (fences illustratives)
- Idempotence / ownership paths couverts par la suite existante

Scanner B / `assertSectionScope` / ownership : **non affaiblis**.

---

## 14. Tests PostgreSQL

| Suite | Résultat | Lane |
| --- | --- | --- |
| `ml4-chat-first-d4-provenance.pg.test.ts` | **15 passed** | DEV `127.0.0.1:5433` / `sfia_next_dev` |

RECETTE `5434` : **non mutée** (lecture historique R12 antérieure uniquement).

Qualification preuves : **SCRIPTED / DET** — pas LIVE PROVEN.

---

## 15. TypeScript / lint / build

| Gate | Résultat |
| --- | --- |
| `npx tsc --noEmit` | PASS |
| `npm run lint` | Warnings préexistants (SafeMarkdown unused, etc.) — **aucun nouveau bloquant** |
| `NODE_ENV=production npm run build` | PASS |
| Note | `NODE_ENV=development` casse le prerender 404 (préexistant / env local) — build qualification = production |

---

## 16. Créations de fichiers — contenu complet

### `projects/sfia-studio-next/web/tests/fixtures/r12-create-user-message.txt`

- Taille : 1188 octets
- sha256 : `a22e79406907df2a68fa4a0e82a01cbf447f0cb61d437990bff13ac67cb5120c`
- Contenu : message utilisateur R12 exact extrait de la DB RECETTE (`msg_23127034-…`) — début :

```
Dans le projet CampusFlow, crée et enregistre dans les Documents internes de Studio un nouveau document de recette intitulé « RECETTE ML4 — Publication documentaire R12 ».

Contenu souhaité :
```

(corps Markdown métier complet dans le fichier fixture — non recopié ici pour limiter le bruit ; digest ci-dessus.)

### Nouveaux helpers / fonctions (dans `document-act.ts` — pas de fichier séparé)

Voir §8 (contenu complet de `hasExplicitCreateIntent` + signatures documentées).

### Docs

- Section **§32** ajoutée à `matrice-acceptation.md`
- Entrée `DELIV-2026-11-09-ML4-ADE-CREATE-QUALIFY-OBS` dans `delivery-history.md`

---

## 17. Modifications — sections / diffs exploitables

### Fichiers touchés (périmètre commit)

1. `projects/sfia-studio-next/web/src/domains/conversation/document-act.ts` (+~159/-~21 net)
2. `projects/sfia-studio-next/web/src/domains/conversation/service.ts` (obs + NOT_EXECUTED ACK)
3. `projects/sfia-studio-next/web/src/lib/observability.ts` (+3 clés allowlist)
4. `projects/sfia-studio-next/web/tests/unit/document-act.test.ts` (table A+D+E)
5. `projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts` (A-R12, A-N10)
6. `projects/sfia-studio-next/web/tests/fixtures/r12-create-user-message.txt` (nouveau)
7. `projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md`
8. `projects/sfia-studio-next/construction/delivery-history.md`

### Diff observability (complet)

```diff
+  "qualification_kind",
+  "qualification_reason",
+  "documentary_intent_signal",
```

### Service — `emitDocumentActQualificationObs` (contenu complet)

```typescript
function emitDocumentActQualificationObs(args: {
  requestId: string;
  operationId: string;
  generationId?: string | null;
  qualificationKind: "CREATE" | "REVISE" | "NONE";
  qualificationReason?: string | null;
  documentaryIntentSignal: boolean;
  d4Attempted: boolean;
  d4Effect?: string | null;
}) {
  emitObs({
    event_name: "d3.turn.document_act_qualification",
    component: "d3.conversation",
    request_id: args.requestId,
    operation_id: args.operationId,
    generation_id: args.generationId ?? undefined,
    outcome:
      args.qualificationKind === "NONE"
        ? "PARTIAL"
        : args.d4Effect === "AVAILABLE"
          ? "SUCCESS"
          : args.d4Attempted
            ? "PARTIAL"
            : "PARTIAL",
    meta: {
      qualification_kind: args.qualificationKind,
      qualification_reason: args.qualificationReason ?? null,
      documentary_intent_signal: args.documentaryIntentSignal,
      d4_attempted: args.d4Attempted,
      d4_effect: args.d4Effect ?? null,
    },
  });
}
```

Stat diff global périmètre : `7 files changed, 394 insertions(+), 21 deletions(-)` (+ fixture + review pack hors tree produit jusqu'au commit).

---

## 18. SHA / tree du nouveau commit local

| Champ | Valeur |
| --- | --- |
| Commit | `8eab1317b97f5bfc438d736b42a1363ddfdb3e77` |
| Tree | `19c79e96aa1cae26233a5d9ec8fe2686970c0dab` |
| Message | `fix(studio-next): qualify CREATE with complements and restore loyal D4 pre-effect observability` |
| Parent | `93da44beb7e7571c9406180027896769579b9815` |

---

## 19. Blast radius et dette

| Zone | Impact |
| --- | --- |
| Qualification D3 | Élargissement contrôlé CREATE (pluriels/compléments) — fail closed conservé |
| D4 CREATE/REVISE | Entrée CREATE débloquée pour formulations naturelles ; REVISE prioritaire |
| Autorité | Strip Git/citation inchangé ; CREATE sur authorityText seul |
| Scanner B | Inchangé |
| ACK UX | Nouveau pré-effet NOT_EXECUTED (signal only) |
| Obs | Nouvel event + 3 clés allowlist |
| Git publication | **Hors périmètre** |

**Dette / exit :**

- Couverture linguistique FR bornée (pas de NLP général) — fail closed hors pont allowlisté.
- Signal `documentary_intent_signal` heuristique ; éviter pollution informative (fait).
- Preuve R12 **LIVE** après bascule RECETTE : **hors cycle** (gate Morris).
- Token allowlist « campusflow » spécifique au projet de recette — acceptable DET ; généralisation éventuelle ultérieure.

---

## 20. Fake / Real Qualification

| Preuve | Classe |
| --- | --- |
| Unit qualify / ACK / scanner | DET / SCRIPTED |
| Nora fixture PG | FAKE fixture (`STUDIO_E2E=1`, `STUDIO_LANE=DEV`) |
| Persistance D4 PG DEV | REAL DB DEV isolée (`5433`) — **pas** RECETTE |
| Message R12 exact | Copie DB RECETTE en fixture — rejeu DET local |
| Nora LIVE R12 | **NOT RUN** |
| GitHub REAL write | **NOT RUN** / non muté |
| RECETTE runtime | Inchangée sur `93da44be` |

---

## 21. RECETTE inchangée

- URL : `http://127.0.0.1:3200`
- Source : `93da44beb7e7571c9406180027896769579b9815`
- Build : `sHkE8sHJBxD3U9AJdHWi7`
- LaunchAgent : `…-recette-build-93da44be`
- Config : `STUDIO_GITHUB_ALLOW_MUTATIONS=documentary` (préservée, non modifiée ce cycle)
- Aucun redémarrage / bascule / Nora LIVE

---

## 22. GitHub non muté

Aucun appel applicatif de mutation GitHub ; aucun push branche produit ; provider tests en `scripted` pour PG.

---

## 23. Réserves

1. Correctif **local non déployé** en RECETTE — R12 LIVE non rejoué.
2. Build qualification requiert `NODE_ENV=production` (quirk env local).
3. Lint warnings préexistants hors scope.
4. Allowlist compléments CREATE peut manquer des formulations rares → fail closed + NOT_EXECUTED si signal.

---

## 24. Verdict

**READY FOR REVIEW — R12 CREATE A+D+E CORRECTIVE DETERMINISTICALLY VERIFIED LOCALLY.**

---

## 25. Gate Morris suivant

1. Revue ChatGPT du handoff distant (contrats A+D+E, faux positifs CREATE, ACK, R06, PG, diffs).
2. Si favorable : **GO Morris** de bascule RECETTE vers le **nouveau SHA local**.
3. Puis seulement : rejeu R12 LIVE contrôlé (hors ce cycle).
4. Aucune bascule / LIVE / merge automatique.

---

## Annexes — preuve post-commit

- Product HEAD : `8eab1317b97f5bfc438d736b42a1363ddfdb3e77`
- Product tree : `19c79e96aa1cae26233a5d9ec8fe2686970c0dab`
- Handoff L3 : voir section relecture distante après `publish-review-handoff.sh`
