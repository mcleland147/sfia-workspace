# 15 — F11/F13 completion options & bounded lots

| Champ | Valeur |
|-------|--------|
| **Document** | `15-f11-f13-completion-options-and-bounded-lots.md` |
| **Date/heure/fuseau** | 2026-07-28 22:45:18 CEST (+0200) |
| **N3** | cadrage terminé localement · **pas d’implémentation** |
| **Recommandations** | `RECOMMENDED — NOT DECIDED` |

---

## 1. Options distinctes (futurs lots)

### L-F11A — Formaliser contrat interne F11 (sans HTTP)

| Champ | Contenu |
|-------|---------|
| Objectif | Versionner le contrat snapshot, codes d’erreur, audit différé/explicite, health UNKNOWN honnête |
| Valeur | réduit ambiguïté « API » sans surface réseau |
| Risques | sous-estimer besoin HTTP plus tard |
| Dette | doc + tests contrat |
| Rollback | revert Git |
| Tests | schema/contract tests |
| Gate | `GO IMPLEMENT T-A7 F11.2 INTERNAL CONTRACT HARDENING — NO HTTP IAM UI DELIVERY OR CUTOVER` |

### L-F11B — Surface HTTP read-only F11 (sans UI)

| Champ | Contenu |
|-------|---------|
| Objectif | Exposer readiness via HTTP GET borné |
| Dépendances | **IAM sélection** ou décision mono-opérateur documentée |
| Risques | exposition prématurée |
| Gate | `GO IMPLEMENT T-A7 F11.2 HTTP READ SURFACE — IAM DECISION REQUIRED FIRST — NO UI WRITE DELIVERY OR CUTOVER` |

### L-F13A — Politique + pagination F13 (in-process)

| Champ | Contenu |
|-------|---------|
| Objectif | Politique d’inclusion, pagination/prefix décidé, tie-to-pack SHA |
| Dépendances | pas de store |
| Gate | `GO IMPLEMENT T-A7 F13.4 POLICY AND PAGINATION — GIT CANONICAL — NO PERSISTENCE IAM DELIVERY OR CUTOVER` |

### L-F13B — Lecteur Git borné (refs only)

| Champ | Contenu |
|-------|---------|
| Objectif | Remplacer/enrichir seed par lecture Git bornée (metadata) |
| Risques | perf, chemins, secrets |
| Gate | `GO IMPLEMENT T-A7 F13.4 BOUNDED GIT METADATA READER — NO CONTENT DUMP PERSISTENCE DELIVERY OR CUTOVER` |

### L-F11F13 — Lot couplé minimal (interne only)

| Champ | Contenu |
|-------|---------|
| Objectif | L-F11A + L-F13A ensemble si périmètre reste interne |
| Condition | **pas** HTTP, **pas** IAM, **pas** persistence |
| Gate | `GO IMPLEMENT T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT — NO HTTP IAM PERSISTENCE DELIVERY OR CUTOVER` |

### L-DEFER — Différer

Aucun lot technique F11/F13 ; attendre N1/N2/N4 ou autre priorité.

---

## 2. Lot minimal recommandé (non décidé)

**L-F11F13 (interne)** ou séquentiel **L-F13A → L-F11A**.

Justification challenge :

| Question | Réponse |
|----------|---------|
| Utile maintenant ? | oui — transforme gaps N3 en lots exécutables |
| Blocker réduit ? | ambiguïté complete ; pas B5/HARD |
| Dette ? | code borné + tests |
| Plus simple ? | éviter L-F11B tant qu’IAM NOT SELECTED |
| Repo-first ? | s’appuie sur modules main |
| Gate nécessaire ? | **oui** — N3 ≠ autorisation d’implémenter |

**Statut :** `RECOMMENDED — NOT DECIDED`

**Non recommandé maintenant :** L-F11B (HTTP) avant arbitrage IAM.

---

## 3. Lots complémentaires (hors N3 exécution)

- N2 evidence OPS1 (indépendant) ;
- N1 P08/P09 framing/impl sous gates séparés ;
- N4 rollback framing ;
- cycle rétention F13 si conservation ≠ Git.

---

## 4. Impacts delivery/cutover

Aucun lot ci-dessus n’autorise delivery preparation, delivery ou cutover.  
Complete F11/F13 ≠ Option A complete ≠ T-A6 complete.
