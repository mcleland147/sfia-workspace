# 34 — Capacités agents, réversibilité et gouvernance d'exécution

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | Doctrine SFIA Studio v3 **validée par Morris** · intégrée sur `main` via PR #259 / `56ddf32e811f0f5f8b82f31400da18ceecf3bc30` · synchronisation C1 Product Completion intégrée sur `main` via PR #365 / `dbd5ff995974e605146e8347f0f27867f04e93f7` |
| **Fondations** | **V3-F11 · V3-F12 validées** (D-V3-01) |
| **Doctrine produit Studio** | **SFIA v3 exclusive** · ExecutionContract = contrat natif |
| **Maturité fondations** | **VALIDATED** (doctrine) · modeled / enforcement runtime partiels (bounded RO / Gate D historiques) · enveloppe Product Completion générique non complète · runtime v3 **NON ADOPTED** |
| **Anti-claims** | Pas L5 décisionnel · Pas décision Morris automatisée |
| **Document** | `34-agent-capabilities-reversibility-and-execution-governance.md` |

---

## 1. V3-F11 — AgentCapability (VALIDATED)

AgentCapability est l’**authority / governance envelope** applicable à un exécuteur pour un ExecutionContract donné. Il borne les effets ; il ne constitue pas un catalogue de fonctions Product Completion.

| Acteur | Lecture | Écriture | Autonomie max | Protégé | Escalade |
|--------|---------|----------|---------------|---------|----------|
| Pilote | État / contrat / preuves | HumanDecision / gates | Décision humaine | Frontières protégées | — |
| Studio | DoctrinePackage v3 pinée, LPS, outils | État borné | Propose / prepare | Mutations | Gate Pilote |
| Nora | Contexte fourni (v3) | Recommandations / préparation sans autorité repo | Raisonne / recommande | — | Pilote |
| Cursor | Selon ExecutionContract | Fichiers autorisés | L0–L4 borné | Protected paths | Stop / Pilote |
| Runtime | SQL / tools | Mutations confirmées | Exécute contrat | Confirmations N2–N3 | Fail-closed |
| Connecteurs / validateurs | Spécifique | Preuves | Lecture / check | Secrets | Studio |

Morris reste l’autorité de construction, doctrine, promotion et gates du projet **SFIA Studio** ; il peut utiliser Studio comme Pilote sans constituer un rôle runtime spécifique.

### Attributs AgentCapability

role · readCaps · writeCaps · tools · **scope** · **autonomyLevel** · **protectedActions / boundaries** · **gates / Confirmation** · **stop / escalation** · **evidence obligations** · **rollback / reversibility** · **limits** · **executor sufficiency**.

### Autorité effective

```text
valid human authorization
∩ ExecutionContract scope
∩ AgentCapability / policy
∩ runtime guardrails
= effective authority
```

Aucune couche n’élargit seule l’autorité. Un exécuteur insuffisant déclenche `SC-CAP` → STOP / escalation honnête.

**Interdit :** L5 décisionnel global · décision Morris automatisée · élargissement via CKC · chargement doctrine v2.6 comme capacité de lecture produit.

## 2. V3-F12 — Taxonomie des actions et réversibilité (VALIDATED)

La table suivante est une taxonomie **interne** ActionPolicy / effects. Elle **ne constitue pas** le catalogue fonctionnel Product Completion et n’autorise pas toutes les actions.

| Action | L max | E typique | Confirmation | Gate | Réversibilité |
|--------|-------|-----------|--------------|------|---------------|
| read | L1 | E0–E1 | — | — | N/A |
| simulate | L2 | E1 | légère | — | totale |
| propose | L2 | E1 | — | — | totale |
| generate temporary artifact | L2–L3 | E1–E2 | N1 | — | haute |
| local write | L3 | E2–E3 | N1–N2 | selon effet | jusqu'à commit |
| commit | L3 | E3 | N2 | humain | amend/revert borné |
| push | L3 | E3–E4 | N3 | Pilote · Morris pour le repo Studio | force interdit |
| PR | L3 | E3 | N3 | Pilote · Morris pour le repo Studio | close PR |
| merge | L3 | E4 | N3 | Pilote · Morris pour le repo Studio | revert post-merge |
| delete (branche/fichier critique) | L3 | E4 | N3 | Pilote / Morris selon contexte | souvent irréversible |
| doctrine change | L2 doc | E3 | N2–N3 | Morris | versioning |
| baseline promotion | — | E4 | N3 | **Morris only** | quasi irréversible |

Alignement CC-D06 (N1–N3) et framing 25 (E0–E4).

**Note :** l'**ExecutionContract** v3 est le contrat natif d'exécution Studio. Il **harvest** la logique fonctionnelle du template Cursor canonique pour préserver au minimum objectif, contexte, sources / provenance, scope IN/OUT, autorité, protections, gates, stops, validations et Evidence. Le Pilote doit pouvoir l’inspecter avec une clarté fonctionnelle au moins comparable au contrat Cursor canonique. Un export Markdown Cursor est un **adaptateur**, pas la doctrine ; v2.6 ne devient jamais une dépendance runtime Studio.

Full project-cycle execution peut couvrir docs, code, commandes, tests, captures et Git selon contrat. Elle ne signifie jamais global L5 ni merge autonome.

## 3. Routage multi-dimensionnel

```
intention → cycle candidat → profil → lenses → CKC (package v3)
→ risques → niveau de preuve → gates → trajectoire
```

Propriétés : révisable · explicable · auditable · non irréversible · multi-candidats · clarification · stop.

Le routage **ne** consulte **pas** SFIA v2.6 comme source de qualification produit.

## 4. Lenses transverses

sécurité · RSSI · RGPD · accessibilité · performance · UX/UI · FinOps · GreenOps · DevOps · release · observabilité · RUN readiness · capitalisation.

Ces lenses sont des **concepts incorporés/adaptés dans la doctrine v3** (origine historique documentée dans `36`). Activation contextuelle · effet sur raisonnement/preuves/gates · **aucune** autorité de décision · **aucune** dépendance runtime vers `method/`.

## 5. Stop Condition Engine

| Code | Condition | Sévérité | Effet |
|------|-----------|----------|-------|
| SC-SRC | source canonique absente | blocking | stop + message |
| SC-CONTRA | contradiction critique | blocking | gate |
| SC-CONF | confiance / maturité insuffisante | warning/blocking | clarification |
| SC-DEC | HumanDecision du Pilote absente · ou gate Morris de construction absent | blocking | attente |
| SC-SCOPE | périmètre non stabilisé | blocking | bornage |
| SC-EVID | preuve insuffisante | blocking | QA |
| SC-IRR | action irréversible sans N3 | blocking | refuse |
| SC-PROT | chemin protégé | blocking | refuse |
| SC-CAP | capacité agent insuffisante | blocking | escalate |
| SC-MAT | maturité incompatible claim | blocking | anti-claim |
| SC-ART | contrat artefact incomplet | blocking | refuse passage |
| SC-GIT | Git incohérent | blocking | Truth Check |
| SC-TRAJ | action hors trajectoire | warning/blocking | replanif |
| SC-FB | fallback CKC intra-v3 non défini | blocking | stop |
| SC-DOC-EXCL | tentative de doctrine v2.6 active | blocking | refuse (D-V3-03) |

Message utilisateur : métier clair · ID SFIA secondaire (CC-D05).

## 6. Maturité

V3-F11 / F12 : **VALIDATED** (doctrine) · ActionPolicy / bounded enforcement partiellement démontrés sur le chemin M4 historique · enveloppe générique Product Completion non implémentée · runtime v3 **NON ADOPTED**.
