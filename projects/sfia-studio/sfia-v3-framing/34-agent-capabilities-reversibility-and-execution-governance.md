# 34 — Capacités agents, réversibilité et gouvernance d'exécution (candidate)

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | `doctrine-candidate` — **soumis à validation Morris** · **non adopté** · **non baseline** |
| **Maturité fondation** | `DOCUMENTED` candidate seulement |
| **Baseline opérationnelle** | SFIA **v2.6** (inchangée) |
| **Adoption v3** | **Non** |
| **Gate** | `GO CONSOLIDATION CIBLÉE — SFIA STUDIO V3 DOCTRINE` |
| **Branche** | `method/sfia-studio-v3-doctrine-consolidation` |
| **CKC guidance** | Pilote Conception fonctionnelle · candidate · aucune autorité d'exécution |
| **Anti-claims** | Pas V3-VALIDATED · Pas V3-ADOPTED · Pas READY FOR DELIVERY · Pas CKC ADOPTED · Pas décision autonome |
| **Document** | `34-agent-capabilities-reversibility-and-execution-governance.md` |
| **Fondations** | V3-F11 · V3-F12 · routage · lenses · Stop Condition Engine |

---

## 1. V3-F11 — AgentCapability (candidate)

| Acteur | Lecture | Écriture | Autonomie max | Protégé | Escalade |
|--------|---------|----------|---------------|---------|----------|
| Morris | Tout | Décisions / gates | Décision | — | — |
| Studio | Doctrine pinée, LPS, outils | État borné | Propose / prepare | Mutations | Gate humain |
| ChatGPT | Contexte fourni | Aucune mutation repo | Raisonne / recommande | — | Morris |
| Cursor | Selon Execution Contract | Fichiers autorisés | L0–L4 borné | Protected paths | Stop / Morris |
| Runtime | SQL / tools | Mutations confirmées | Exécute contrat | Confirmations N2–N3 | Fail-closed |
| Connecteurs / validateurs | Spécifique | Preuves | Lecture / check | Secrets | Studio |

### Attributs AgentCapability

role · readCaps · writeCaps · tools · scope · autonomyLevel · protectedActions · evidenceProduced · escalationRules · rollback · limits.

**Interdit :** L5 décisionnel global · décision Morris automatisée · élargissement via CKC.

## 2. V3-F12 — Taxonomie des actions et réversibilité (candidate)

| Action | L max | E typique | Confirmation | Gate | Réversibilité |
|--------|-------|-----------|--------------|------|---------------|
| read | L1 | E0–E1 | — | — | N/A |
| simulate | L2 | E1 | légère | — | totale |
| propose | L2 | E1 | — | — | totale |
| generate temporary artifact | L2–L3 | E1–E2 | N1 | — | haute |
| local write | L3 | E2–E3 | N1–N2 | selon effet | jusqu'à commit |
| commit | L3 | E3 | N2 | humain | amend/revert borné |
| push | L3 | E3–E4 | N3 | Morris | force interdit |
| PR | L3 | E3 | N3 | Morris | close PR |
| merge | L3 | E4 | N3 | Morris | revert post-merge |
| delete (branche/fichier critique) | L3 | E4 | N3 | Morris | souvent irréversible |
| doctrine change | L2 doc | E3 | N2–N3 | Morris | versioning |
| baseline promotion | — | E4 | N3 | **Morris only** | quasi irréversible |

Alignement CC-D06 (N1–N3) et framing 25 (E0–E4).

## 3. Routage multi-dimensionnel (candidate)

```
intention → cycle candidat → profil → blocs/lenses → CKC
→ risques → niveau de preuve → gates → trajectoire
```

Propriétés : révisable · explicable · auditable · non irréversible · multi-candidats · clarification · stop.

## 4. Lenses transverses (blocs v2.6 adaptés)

sécurité · RSSI · RGPD · accessibilité · performance · UX/UI · FinOps · GreenOps · DevOps · release · observabilité · RUN readiness · capitalisation.

Activation contextuelle · effet sur raisonnement/preuves/gates · **aucune** autorité de décision.

## 5. Stop Condition Engine (candidate)

| Code | Condition | Sévérité | Effet |
|------|-----------|----------|-------|
| SC-SRC | source canonique absente | blocking | stop + message |
| SC-CONTRA | contradiction critique | blocking | gate |
| SC-CONF | confiance / maturité insuffisante | warning/blocking | clarification |
| SC-DEC | décision Morris absente | blocking | attente |
| SC-SCOPE | périmètre non stabilisé | blocking | bornage |
| SC-EVID | preuve insuffisante | blocking | QA |
| SC-IRR | action irréversible sans N3 | blocking | refuse |
| SC-PROT | chemin protégé | blocking | refuse |
| SC-CAP | capacité agent insuffisante | blocking | escalate |
| SC-MAT | maturité incompatible claim | blocking | anti-claim |
| SC-ART | contrat artefact incomplet | blocking | refuse passage |
| SC-GIT | Git incohérent | blocking | Truth Check |
| SC-TRAJ | action hors trajectoire | warning/blocking | replanif |
| SC-FB | fallback non défini | blocking | stop |

Message utilisateur : métier clair · ID SFIA secondaire (CC-D05).

## 6. Maturité

V3-F11 / F12 : **DOCUMENTED candidate**.
