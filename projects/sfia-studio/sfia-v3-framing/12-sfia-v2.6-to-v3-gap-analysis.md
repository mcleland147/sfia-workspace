# 12 — Analyse d’écart SFIA v2.6 → v3.0 (candidat)

| Champ | Valeur |
|-------|--------|
| Baseline | **v2.6 officielle** |
| v3.0 | **Trajectoire candidate uniquement** |

Légende : **C** conserver · **A** adapter · **R** remplacer · **D** déprécier · **N** créer.

## Matrice par domaine

| Domaine | Classe | Raison | Impact | Risque | Gate humain |
|---------|--------|--------|--------|--------|-------------|
| Doctrine Markdown v2.6 | **C** | Baseline opérationnelle | Stable | Divergence si fork précoce | Adoption v3 distinct |
| Applicabilité Studio-native | **N** | v3 ≠ manuel ChatGPT→Cursor | Produit+méthode | Claim abusif | Validation consolidée |
| Rôles (« Morris L0 ») | **A** | Rôles génériques | Docs + UI | Confusion transition | Validation cadrage |
| Operating model | **A** | Studio-native loop | Process | Perte clarté | Validation archi |
| Cycles / routing | **C+A** | Garder routage ; defs JSON | Méthode+produit | Sur-fusion | Validation cycles |
| Template Cursor pivot | **A/D** | Pivot → ExecutionContract ; MD fallback | Runtime | Habitudes legacy | Validation contrats |
| Formats info (JSON/SQL/Excel/slides) | **N** | 5 couches | Données | Multi-SoT | Validation IA |
| Profils / blocs / gates | **C/A** | UI + rôles | Gouvernance | Chat=GO | Validation gouvernance |
| L0–L5 automation | **A** | Redécoupe domaines | Automation | L5 décisionnel | Validation automation |
| Review pack / handoff | **C** | Preuve revue | Process | Pack incomplet | — |
| Architecture Studio / UX | **N/A** | Cockpit + enforcement | Produit | Chat-only | Validation UX |
| Coexistence modes | **N** | Dual-run contrôlé | Ops | Dual trop long | Validation migration |
| Adoption statuses | **N** | DOCUMENTED…ADOPTED | Gouvernance | Docs≠baseline | GO ADOPTION |

## Synthèse consolidation

- Canoniques v2.6 **intactes**.  
- Framing v3 **à côté** (`sfia-v3-framing/`).  
- Runtime CT = laboratoire modes 2–3.  
- Option trajectoire challengée : **D co-design** (22).

## Dette anticipée

- Double narration v2.6 opérationnelle + v3 candidate.  
- Terminologie mixte pendant transition.  
- UI OPS1 vs IA v3.  
- Schémas runtime encore locaux à `app/lib/ops1/sfia`.

## Décisions humaines requises

- Approuver cette matrice.  
- Trajectoire conception : **Option D validée** (doc 29) — pas d’implémentation autorisée.  
- Ne **pas** merger de doctrine v3 dans `method/` sans GO d’adoption.

---

## Clôture cadrage (D1–D8)

**Statut :** intégration clôture — réserves R1–R5 **clôturées au cadrage** ; Option D **validée** comme trajectoire de conception ; ReviewBundle hybride **décidé** (23) ; template Cursor **non pivot** v3 (ExecutionContract) ; pas de migration générale (28) ; maturité **V3-DOCUMENTED** seulement.

**Anti-claims :** SFIA v3.0 **non adoptée** ; baseline **v2.6** ; **aucune** implémentation autorisée par cette clôture.
