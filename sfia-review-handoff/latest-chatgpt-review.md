# SFIA Review Pack Full — ML4D / Ensemble 05 — Qualification LIVE bornée Nora

**Date :** 2026-11-18 (Europe/Paris)  
**Cycle principal :** 9 — QA / validation comportementale  
**Cycle intégré :** 8 — Delivery correctif strictement nécessaire (préflight)  
**Profil :** Critical  
**Macro-lot :** ML4D / Ensemble 05 — Travail avec Nora / composition graphique  
**Environnement :** DEV isolé · **NO RELEASE** · **aucun push produit / PR / merge**  
**GO Morris consommé :** Campagne LIVE bornée ≤12 tours utilisateur — **plafond monétaire non fourni**

---

## 1. Verdict unique

# `STOP — MORRIS LIVE BUDGET LIMIT REQUIRED`

Les préflights indépendants (Git Truth, ENV-01, C2, anti-fuite SIM, corpus L01–L12, instrumentation prévue) sont **PASS**.  
**Aucun appel fournisseur LIVE n’a été exécuté.**  
Aucun plafond monétaire Morris **approuvé** n’a été trouvé pour cette campagne (seule limite opérationnelle GO : ≤12 tours). Conformément au contrat §5.2, arrêt avant premier contact fournisseur, avec proposition chiffrée ci-dessous. Reprise au même point après arbitrage.

Ce verdict **ne vaut pas** : Gate C, ADOPTED, RECETTE READY, réception Ensemble 05, ni autorisation de dépense.

---

## 2. Git Truth Check

| Objet | Valeur observée |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ux003-entry-20261116` |
| Branche | `sfia/next-ml4d-composition-adaptative` |
| HEAD parent | `a783f014935de0dec5ff8e79a2b18eea0e629756` |
| `origin/main` | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Worktree | **Dirty** (Ensemble 05 composition + Level-B + préflight LIVE) |
| Staging | vide |
| Nouveau commit produit | **aucun** (mandat) |

Manifeste candidat : `projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/live-bounded-campaign-20261118/00-candidate-manifest.md`  
Empreintes SHA-256 : `.../candidate-sha256.txt`

| Fichier | SHA-256 |
|---|---|
| `nora-adapter.ts` | `84096fcd13e18b3657dc4f2bc7ef6b6d71a80c7bb404637dbb8c963fce70c5d7` |
| `provider-simulated-qualification.ts` | `b27ca99a2f2292167b0b51914c9ccb73e7037b0c040ce164245f026fdc1c04f3` |
| `EditorialSynthesis.tsx` | `ee874bb3da0b9cee5953d713d2fff37d203ef121a5e05063eeaf296b42a349cb` |
| `EditorialSequence.tsx` | `183b1b53ed7ea62faf0d70be80e81577b9557ecb196a0c15b03854e72979d40e` |
| `NoraComposition.tsx` | `deb7e43cec6a979ea9a4e2c96756ac97f1686073611e57c446bfff55915de919` |
| `cognitive-policy.ts` | `3e00f7325ab24d6b9e5cddab05f6f2e63aedb9aa401f88cf079ca0f5b8ed2e19` |
| `package.json` | `9b720c0ed79f436609e99f3defa178656349a21afcaf908de59d73c8cf5c6c85` |

Handoff L3 précédent (Level-B) : `sfia/review-handoff@b10fd34ae0b94a3eac4da5885a830caa35b42b0d` / blob `175736399e6f6d174babeda2e4a55382e9e36017`.

---

## 3. Sources et décisions

Consultées / appliquées selon routage SFIA v2.6 et contrat :

- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `prompts/templates/sfia-cycle-execution-template.md`
- `projects/sfia-studio-next/governance/SEF.md`, `roadmap.md`, `product-naming-conventions.md`
- `environnements-recette-et-promotions.md` (ENV-01)
- `product-versioning.md` — NO RELEASE
- Contrats D3–D9 / architecture Next R4 / Travail avec Nora M1–M5
- Documents composition graphique 01–06 + ELK 07–09 (livraisons antérieures)
- Handoff L3 Level-B section protocole LIVE
- Aucune décision Morris de **plafond €** pour cette campagne 12 tours trouvée dans `governance/`

---

## 4. GO Morris consommé

- LIVE autorisé **en DEV isolé**, ≤ **12** tours utilisateur.
- Corrections techniques ordinaires Ensemble 05 autorisées.
- **Interdit** : effets D7/D9 write / HumanDecision / mutations RECETTE-STABLE / push produit.
- GO **ne constitue pas** une autorisation financière monétaire.

---

## 5. ENV-01 et isolation observée

| Contrôle | Résultat |
|---|---|
| Lane | `STUDIO_LANE=DEV` (`.env.local`) |
| Postgres DEV | `sfia-next-dev-pg` Up · `127.0.0.1:5433` · DB `sfia_next_dev` |
| Postgres RECETTE | `sfia-next-recette-pg` Up · `:5434` — **non utilisée** |
| Autre | `sfia-safe01-ephemeral` `:55432` — hors campagne |
| `OPENAI_API_KEY` | SET (longueur non secrète reportée ; valeur absente des preuves) |
| `STUDIO_FORCE_NORA_FIXTURE` dans `.env.local` | **`1`** — **bloquant pour LIVE** si dotenv charge sans override |
| `STUDIO_NORA_SIMULATED_PROVIDER` | unset dans fichier |
| `STUDIO_E2E` | unset dans fichier |
| STABLE | NOT AVAILABLE |
| Secrets dans ce pack | **aucun** |

**Précondition reprise LIVE :** démarrer le process Next avec override explicite  
`STUDIO_FORCE_NORA_FIXTURE=` / `STUDIO_NORA_SIMULATED_PROVIDER=` / `STUDIO_E2E=`  
(chaîne vide ≠ `"1"` → `mustUseNoraFixture()` false) **après** chargement dotenv, ou retirer temporairement FORCE du `.env.local` DEV.

---

## 6. Configuration fournisseur (non secrète)

| Champ | Valeur |
|---|---|
| Model code | `gpt-6.1-sol` (`NORA_STUDY_MODEL`) |
| Policy | `ml2-cog-policy-v2-corrective` |
| Mode attendu LIVE | `openai-agents-sdk-live` via Agents SDK `outputType=NoraTurnQualificationAgentSchema` |
| Fixture / SIM | **doivent être désactivés** |
| Appels LIVE exécutés | **0** |

---

## 7. Plafonds d’appels et coût — proposition Morris

Voir preuve : `.../live-bounded-campaign-20261118/02-budget-proposal.md`

| Poste | Proposition Cursor |
|---|---|
| Tours utilisateur | 12 (déjà GO) |
| Retries | ≤1 / tour ; stop après 2 erreurs schéma consécutives |
| Référence historique | ~€1.05 / 3 contacts LIVE (delivery-history) |
| Ordre de grandeur 12 tours | ~€4–€15 si profil similaire |
| **Plafond € demandé** | **€25 TTC max campagne** (à arbitrer) |
| Abort | dès plafond € ou 12 tours |

**Aucun tarif unitaire inventé.** Le coût exact dépend du tarif du modèle réellement facturé au moment du GO ; recalibrage sur le 1er tour instrumenté recommandé.

---

## 8. Préflight C2 (`exactShownElsewhere`)

**Problème :** déduplication approximative type `bag.includes(detail)` peut supprimer négations / exceptions / chiffres distincts.

**Correction :** égalité exacte champ-à-champ (trim), jamais substring.

Fichier : `web/src/components/figma/nora-composition/EditorialSynthesis.tsx` (extrait exploitable) :

```ts
function exactShownElsewhere(it, block): boolean {
  const label = (it.label ?? "").trim();
  const detail = (it.detail ?? "").trim();
  if (!label && !detail) return false;
  const strategyHit = (block.strategyCards ?? []).some((c) => {
    const fields = [c.title, c.summary, c.positive, c.counterpart, c.eyebrow]
      .filter((x): x is string => typeof x === "string" && x.trim().length > 0)
      .map((x) => x.trim());
    // Full-field equality only — never bag.includes(detail).
    if (detail && fields.some((f) => f === detail)) {
      if (!label) return true;
      return fields.some((f) => f === label);
    }
    if (label && detail) {
      const title = (c.title ?? "").trim();
      const eyebrow = (c.eyebrow ?? "").trim();
      const summary = (c.summary ?? "").trim();
      return (
        (label === title || label === eyebrow) &&
        (detail === summary ||
          detail === (c.positive ?? "").trim() ||
          detail === (c.counterpart ?? "").trim())
      );
    }
    return false;
  });
  if (strategyHit) return true;
  return (block.checklist ?? []).some((row) => {
    const rl = (row.label ?? "").trim();
    const rd = (row.detail ?? "").trim();
    if (label && detail) return rl === label && rd === detail;
    if (detail && !label) return rd === detail;
    if (label && !detail) return rl === label && rd === "";
    return false;
  });
}
```

**Test :** `tests/unit/c2-editorial-integrity-corrective.test.ts` — cas négation / chiffre / exception **PASS**.

---

## 9. Préflight anti-fuite simulateur (§4.5)

**Problème :** prompt SIM inconnu tombait silencieusement vers la branche LIVE.

**Correction :** fail-closed `NORA_SIM_PROMPT_UNKNOWN` via `boundaryFail` ; `provider_contacted: NO`.

Diff exploitable (`nora-adapter.ts`) :

```diff
-    // Unknown utterance under SIM mode: fall through to LIVE/fixture rules below.
-  }
+    // Anti-fuite §4.5 — unknown SIM prompt must NEVER fall through to LIVE silently.
+    emitObs({ event_name: "d3.nora.provider_simulated", outcome: "FAILED",
+      meta: { provider_contacted: "NO", sim_miss: "NORA_SIM_PROMPT_UNKNOWN", ... } });
+    return stampCkiDelivery(
+      boundaryFail(generationId,
+        "NORA_SIM_PROMPT_UNKNOWN (STUDIO_NORA_SIMULATED_PROVIDER=1 — no silent LIVE fallback)",
+        policy),
+      input.ckiDelivery, false);
+  }
```

**Test :** `tests/unit/provider-simulated-level-b.test.ts` — « SIM unknown prompt fails closed — never silent LIVE fallback » **PASS**.

---

## 10. Corpus préenregistré L01–L12

Fichier : `.../live-bounded-campaign-20261118/01-corpus-l01-l12-preregistered.md`

Oracles figés **avant** toute observation LIVE. Formulations naturelles (pas de termes techniques de composition). Allowlist : génération D3 + lectures DEV ; pas d’effets externes.

---

## 11. Nombre réel d’appels LIVE

| Métrique | Valeur |
|---|---|
| Tours utilisateur LIVE | **0 / 12** |
| Contacts fournisseur | **0** |
| Retries | 0 |
| Coût estimé consommé | **€0** |

---

## 12. Résultats L01–L12

| Tour | D3 LIVE | Données pertinentes | Variante appropriée | Persist/reload | Intégrité | Verdict |
|---|---|---|---|---|---|---|
| L01–L12 | NOT RUN | — | — | — | — | **BLOCKED — BUDGET GATE** |

---

## 13–16. Validation D3 / variantes / persist / captures LIVE

**NOT RUN** — aucun runtime LIVE. Captures Level-A/B antérieures hors portée de ce verdict.

---

## 17. Défauts trouvés (préflight)

| ID | Défaut | Sévérité | Statut |
|---|---|---|---|
| C2-includes | `exactShownElsewhere` risque suppression nuance via substring | Intégrité présentation | **Corrigé** + test |
| SIM-leak | Prompt SIM inconnu → LIVE silencieux | Sécurité preuve / coût | **Corrigé** + test |
| FORCE=1 | `.env.local` force fixture — LIVE non honnête si non override | Config | **Documenté** — override obligatoire avant LIVE |
| Budget € | Aucun plafond monétaire Morris | Autorité | **STOP** |

---

## 18. Corrections et tests

Commandes :

```bash
cd projects/sfia-studio-next/web
NODE_ENV=development STUDIO_LANE=DEV npx vitest run \
  tests/unit/c2-editorial-integrity-corrective.test.ts \
  tests/unit/provider-simulated-level-b.test.ts \
  tests/unit/c2-substance-exhaustiveness.test.ts
```

Résultat : **3 files / 21 tests PASS** (2026-11-18).

---

## 19. Commandes techniques Git (extrait)

```text
pwd → .../sfia-workspace-next-ml4d-ux003-entry-20261116
branch → sfia/next-ml4d-composition-adaptative
HEAD → a783f014935de0dec5ff8e79a2b18eea0e629756
origin/main → 997d4c4e8204993de7107552898c8cc08cd3b0ed
status → Dirty (Ensemble 05 + préflight)
```

---

## 20. Contenu complet des fichiers créés (campagne LIVE preflight)

### `00-candidate-manifest.md`

Voir fichier sous `web/docs/evidence/ensemble-05-travail-nora/live-bounded-campaign-20261118/` (reproduit dans ce pack §2/§5).

### `01-corpus-l01-l12-preregistered.md`

| Tour | Intention oracle |
|---|---|
| L01 | Prose ; pas de graphique forcé |
| L02 | Synthèse / réserves ; pas d’invention |
| L03 | 3 approches ; cartes si pertinentes |
| L04 | 5 possibilités ; matrice si pertinente |
| L05 | Parcours étapes |
| L06 | Chronologie sur 8 semaines **fournies** |
| L07 | Dépendances dirigées |
| L08 | Arbre conditionnel ; pas de décision auto |
| L09 | Parallèle + sync si fondée |
| L10 | Refus d’inventer données quanti |
| L11 | Continuité contextuelle |
| L12 | Forme libre pertinente |

(Textes prompts exacts dans le fichier preuve.)

### `02-budget-proposal.md`

Plafond proposé **€25 TTC** ; 12 tours ; ≤1 retry ; abort sur plafond.

### `candidate-sha256.txt`

Empreintes §2.

---

## 21. Diffs exploitables (fichiers modifiés ce préflight)

### `nora-adapter.ts` — anti-fuite SIM (voir §9)

### `EditorialSynthesis.tsx` — C2 exact-identity (voir §8) — fichier nouveau sous `nora-composition/` (WT dirty Ensemble 05)

### `tests/unit/c2-editorial-integrity-corrective.test.ts` — ajout :

```ts
it("does not suppress via substring includes (negation / exception / chiffre)", () => {
  // residual items with distinct negation / "8 semaines" / exception
  // must remain visible despite longer strategy summary containing related words
});
```

### `tests/unit/provider-simulated-level-b.test.ts` — ajout :

```ts
it("SIM unknown prompt fails closed — never silent LIVE fallback", async () => {
  process.env.STUDIO_NORA_SIMULATED_PROVIDER = "1";
  // ...
  expect(miss.mode).not.toBe("openai-agents-sdk-live");
  expect(miss.status).toBe("FAILED");
  expect(miss.content).toMatch(/NORA_SIM_PROMPT_UNKNOWN/);
});
```

*(Le worktree contient aussi l’intégralité des livraisons Ensemble 05 Level-A/B non rejouées ici — hors delta STOP budget.)*

---

## 22. Fake/Real Qualification

| Niveau | Statut |
|---|---|
| Level A fixtures / browser | **PROVEN** (cycles antérieurs) |
| Level B SIM D3→persist | **PROVEN** (handoff `b10fd34a`) |
| Level C LIVE | **NOT RUN** — budget gate |
| Historical PG RECETTE | **NOT RUN** |
| Product push | **AUCUN** |

---

## 23. Réserves

1. Aucun comportement LIVE du modèle n’est démontré par ce pack.
2. `.env.local` FORCE=1 reste un piège opérationnel jusqu’à override process.
3. Tarif unitaire exact du modèle `gpt-6.1-sol` non figé ici — plafond € proposé comme garde-fou.
4. Candidat dirty : toute reprise LIVE doit re-fingerprinter si le code change.

---

## 24. Dette et exit

| Item | Owner | Exit |
|---|---|---|
| Arbitrage plafond € | **Morris** | Décision écrite (€25 proposé ou autre) |
| Override FORCE pour LIVE | Cursor (ops) | Process env / `.env.local` DEV |
| Campagne L01–L12 | Cursor | Après budget GO — même corpus |
| Gate C / ADOPTED | Morris | Hors mandat |

---

## 25. Consommation totale

**€0 · 0 contact fournisseur · 0 tour LIVE.**

---

## 26. Proposition de décision suivante

1. Morris fixe un **plafond monétaire** (proposition : **€25 TTC**) pour la campagne ≤12 tours.  
2. Cursor reprend **la même campagne** au point d’arrêt (préflights déjà PASS, corpus figé).  
3. Aucun nouveau cycle d’architecture requis pour lever ce STOP.

---

## 27. Verdict (réaffirmé)

# `STOP — MORRIS LIVE BUDGET LIMIT REQUIRED`

**Question produit (« Nora utilise-t-elle naturellement la composition ? ») :** **non tranchée en LIVE** — Level-B prouve la chaîne simulée ; Level-C attend l’arbitrage €.
