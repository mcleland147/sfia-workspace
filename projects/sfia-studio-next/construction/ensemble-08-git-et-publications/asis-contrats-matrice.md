# E08 delivery matrix & constraints (read-only synthesis)

**Authority state:** Both E08 contracts are **DOCUMENTED CANDIDATES** (functional v0.2, architecture v0.1)—not **VALIDATED SPEC**, no Morris construction GO, **Gate C OPEN**, no PR/merge/STABLE/ADOPTED implied (`/Users/morris/Projects/sfia-workspace-feat-next-ensemble08-git-publications-nora/projects/sfia-studio-next/governance/roadmap.md`).

**Normative stack for E08:** R2 `integration-git-gouvernee.md` (VALIDATED) > Morris decisions (ML4 Git, SEM-01–08) > ENV-01 > E08 candidats; contradictions → **STOP conception** until Morris D2 (`contrat-architecture-et-acceptation-candidat.md` §1).

---

## A. Non-negotiable product rules

### Capability A — Consultation (A1–A10)

| ID | Rule |
|----|------|
| **A1** | **Git facultatif** : projet, Nora et Documents restent utilisables sans GitHub ni dépôt rattaché. |
| **A2** | **0..N dépôts par projet** : aucune association globale à la session ; deux projets sur un même dépôt n’impliquent pas décisions/effets partagés. |
| **A3** | **Cohérence de ref** : dépôt + branche (y compris distante non mergée) + arborescence + fichier + détails + lien GitHub utilisent la **même référence** ; branche candidate ≠ `main`. |
| **A4** | **Arborescence à la demande** : listing répertoire borné via D9 ; pas de clone/sync bidirectionnelle ni copie locale persistante. |
| **A5** | **Lecture 30/70** : desktop liste/aperçu ; mode agrandi ; **réemploi** `TravailViewer` / convention Travail—pas de second viewer métier. |
| **A6** | **Publications Studio** : liste **transverse au projet** (tous dépôts) ; le dépôt actif du volet Fichiers ne borne pas implicitement la liste (11.04). |
| **A7** | **Toolbar visionneuse** : Infos, Ouvrir sur GitHub, Agrandir (icône) en en-tête ; permalien GitHub seulement sur **commit SHA vérifié** (pas blob SHA). |
| **A8** | **Dépôts Git = consultation seule** : pas de préparer/inspecter/autoriser/publier/merge dans l’UI Git ; retirer `PublicationInspectionPanel` comme surface Pilote nominale. |
| **A9** | **États honnêtes** : ref absente, 404 ambigu, binaire, refus de droits—états typés ; pas de contenu/URL inventés. |
| **A10** | **Retrait / révocation** : nouvelles lectures suspendues ; **historique** documents/publications/preuves conservé ; « source inaccessible » si droit retiré. |

### Capability B — Nora & opérations gouvernées (B1–B10)

| ID | Rule |
|----|------|
| **B1** | **Nora = interface des opérations Git documentaires** du lot : branche, commit distant, PR, merge (si dans périmètre livré)—sans enchaînement de boutons technique dans l’espace Git. |
| **B2** | **Mandat conversationnel proportionné** : demande Pilote **claire, explicite, déterminée** peut suffire **après qualification serveur** ; pas de confirmation redondante systématique. |
| **B3** | **Seul D6 enregistre HumanDecision** depuis un **acte USER authentifié** lié au plan ; sortie LLM / Nora **≠** autorité (SEM-04). |
| **B4** | **Actes distincts** : commit / PR / **merge** sont séparés ; « publie » **n’autorise pas** merge implicite (`RG-GIT-030`, DEC-GIT-B). |
| **B5** | **Chaîne propriétaires** : D3 qualifie → D4/D7 préparent → D6 mandat → D7 dispatch → D9 effet → D8 faits → **D3 restitution unique** dans le fil (pas « Studio te répondra »). |
| **B6** | **Qualification sémantique** (SEM-01–08) : pas de routeur lexical métier ni fallback silencieux ; validateurs techniques (paths, formats) conservés. |
| **B7** | **RECETTE : capacités annoncées = GitHub REAL actif** à la mise à disposition (config durable), pas `STUDIO_GITHUB_ALLOW_MUTATIONS` par essai ni SCRIPTED présenté comme REAL. |
| **B8** | **Périmètre merge nominal E08** : PR **documentaires Studio** (tentative/publication corrélée) ; « merge PR 675 » générique / code-CI → limite explicite ou **gate Morris** (§7.6 archi)—pas merge indifférencié. |
| **B9** | **Idempotence / reprise** : pas de double commit/PR/merge sur retry, replay ou reprise ; réconciliation avant retry si retour ambigu. |
| **B10** | **Frontière ML4 / ML5** : écritures documentaires maîtrisées en ML4 ; mutations code/CI/config exécutable → **ML5/Cursor**, pas via voie documentaire Nora (DEC-GIT-A). |

---

## B. Acceptance scenarios (one-line oracles)

Source primaire scénarios : `contrat-architecture-et-acceptation-candidat.md` §11 (le fonctionnel v0.2 a A01–A12 / B01–B10 seulement).

### A01–A15 (consultation)

| ID | One-line oracle |
|----|-----------------|
| A01 | Sans Git : Travail, Nora, Documents OK. |
| A02 | Connexion/refresh : seuls repos **autorisés** listés (API D9 + REAL). |
| A03 | Deux dépôts sur un projet : autre projet non affecté. |
| A04 | Ajout 3e dépôt autorisé : pas d’association session globale. |
| A05 | Retrait dépôt : zéro effet GitHub distant, historique conservé. |
| A06 | Changement repo : UI/API requalifiées, réponses stale neutralisées. |
| A07 | `main` puis branche non mergée : contenu distinct sous bonne ref. |
| A08 | Racine → sous-dossier → fichier : tree à la demande, pas clone. |
| A09 | MD/texte OK ; binaire / taille excessive : états explicites. |
| A10 | Infos / GitHub / agrandir en tête ; 30/70 puis agrandi, détails aérés. |
| A11 | Lien commit vérifié pointe version réellement lue. |
| A12 | Publications de 2 dépôts dans liste **projet**, statuts distincts. |
| A13 | Déconnexion GitHub : nouveaux accès refusés, docs/preuves conservés. |
| A14 | Ref supprimée / absent / refus / ambigu : qualification honnête. |
| A15 | 1280 + mobile 390 : fonctionnel, focus clavier (G5 / Playwright). |

### B01–B16 (Nora / autorité)

| ID | One-line oracle |
|----|-----------------|
| B01 | Publie (cible univoque) : mandat sans 2e clic D6 superflu. |
| B02 | 2 repos ambigus : Nora clarifie repo, zéro mutation. |
| B03 | Négation / hypothétique : zéro autorisation, zéro effet. |
| B04 | D4 + D7 + restitution Nora globale dans le fil. |
| B05 | Branche + commit + PR **REAL** en RECETTE sans activation manuelle. |
| B06 | « Publie » seul : **aucun** merge. |
| B07 | « Merge PR documentaire X » : D6 merge distinct, REAL si livré. |
| B08 | PR externe/non documentaire : refus/limitation expliquée, pas merge caché. |
| B09 | Drift cible/HEAD/fingerprint : requalification, pas d’effet hors mandat. |
| B10 | ACK perdu + retry : réconciliation, pas de doublon distant. |
| B11 | D7 fini avant Nora : **un** message terminal fidèle. |
| B12 | Même repo, sessions/projets distincts : autorité isolée. |
| B13 | README hostile « publie » : aucune HumanDecision. |
| B14 | Refus GitHub / branche protégée : restitution exacte + suite réalisable. |
| B15 | Multi-intention + reformulations : même résultat si intentions qualifiées. |
| B16 | Restart en mission ouverte : pas de statut inventé ; reprise bornée prouvée. |

### S01–S10 (sécurité / exploitation)

| ID | One-line oracle |
|----|-----------------|
| S01 | Préflight ENV-01 : SHA/build RECETTE figé, lanes/DB/cookies isolés. |
| S02 | Multi-dépôts : chaque repo exige droit réel + lien projet + identité. |
| S03 | Droits révoqués entre inspect/dispatch : aucun effet. |
| S04 | Merge REAL : PR éligible, protections, SHA courants, pas privilège admin implicite. |
| S05 | Secrets/tokens absents UI, logs, Nora, captures, packs preuve. |
| S06 | Refus mutation code/CI via voie documentaire ML4. |
| S07 | Pas de SCRIPTED/fixture présenté REAL ; provider/build affichés. |
| S08 | Faute réseau / ambigu : `UNKNOWN` + reconnaissance distante avant retry. |
| S09 | CI + non-régression Travail/Nora/Intégrations PASS (périmètre E08). |
| S10 | Code, contrats, as-built, registre synchronisés ; pas d’ADOPTED anticipé. |

**READY FOR MORRIS UAT (RECETTE)** : A01–A15 + B01–B16 couverts selon risques, S01–S10 datés, candidat figé ENV-01, Figma capturé, zéro capacité « livrée » sans REAL (archi §11.5).

---

## C. Explicit D6 tension clauses (excerpts + file)

| Tension | Excerpt | File |
|---------|---------|------|
| **« Exécuter » R2 vs mandat conversationnel E08** | « Pour déclencher le travail technique délégué prévu par R1, le Pilote autorise explicitement via **« Exécuter »** un contrat… inspecté » | `conception-fonctionnelle/decisions-et-gouvernance-du-pilote.md` (RG-GOV-024) |
| | « Une demande **claire, explicite et suffisamment déterminée** peut constituer le mandat… **pas de confirmation redondante par principe** » ; « **L’absence de bouton d’autorisation dans l’UX ne retire pas D6** » | `contrat-fonctionnel-depots-git-et-conduite-nora-candidat.md` §6.2 |
| **Expression naturelle R2 vs empreinte inspection** | « Un arbitrage métier clair du Pilote est recevable… **sans** second clic systématique » vs acte « Exécuter » réservé à l’autorisation technique | `decisions-et-gouvernance-du-pilote.md` RG-GOV-002 |
| | AS-IS : `authorizePublication` attend acte D6 + **empreinte d’inspection** ; phrase utilisateur ne produit **pas automatiquement** mandat | `contrat-architecture-et-acceptation-candidat.md` §2.1 |
| **SEM-04 vs E08** | « L’intelligence du modèle ne constitue **ni HumanDecision ni autorisation implicite** » | `governance/decisions/2026-11-12-qualification-semantique-nora-mobilisation-capacites.md` |
| | « **Seul cet acte** [USER authentifié] peut fonder une autorisation » ; REQUEST_EFFECT LLM seul **ne suffit jamais** | `contrat-architecture-et-acceptation-candidat.md` §6.2 |
| **Candidat vs norme R2** | « Toute contradiction avec une décision de portée supérieure est un **écart à arbitrer**, non une dérogation implicite » | `contrat-fonctionnel-depots-git-et-conduite-nora-candidat.md` § header |
| **Merge mandat distinct (aligné)** | « Merge… **GO distinct** » ; « une demande « merge la PR 675 » constitue une intention distincte » | `2026-11-07-ml4-git-publication-ml5-cursor-trajectoire.md` ; fonctionnel §6.3 |

**Gate G0 (Morris)** must resolve conversational D6 mechanism (fingerprint, USER→plan binding) without disabling D6/D7—arbitrage **C** in archi §13.1.

---

## D. Naming rules (no permanent “Ensemble 08” names)

From `/Users/morris/Projects/sfia-workspace-feat-next-ensemble08-git-publications-nora/projects/sfia-studio-next/governance/product-naming-conventions.md`:

- Permanent code/UI/API names = **durable product responsibility**, not chantier (`Ensemble 08`, `ML4D`, branch names, R-labels).
- Macro-lot / branch IDs = **Git traceability only**.
- Figma **11.01–11.16** = design indices, **not** component names in code (méthodo §3.1).
- Use ubiquitous language: Dépôts Git, Publications Studio, Nora, HumanDecision, etc.

---

## E. ENV-01 / versioning constraints (this cycle)

| Constraint | Source |
|------------|--------|
| **RECETTE** = fixed `source_sha` + reproducible build, **no hot reload**, lane **3200**, isolated DB/secrets/cookies | `environnements-recette-et-promotions.md` |
| Git mutations REAL on **sandbox dépôt autorisé**, not chantier `main` nor production repos | ENV-01 §5 + archi §7.1 |
| Capabilities sold as deliverable must pass **preflight** on real provider; global hard-block = **NOT READY** / NO-GO RECETTE | E08 contracts §7 ; ENV STOP rules |
| Manifest : `candidate_sha`, `build_id`, `product_version` / `candidate_version`, schema revision—aligned with `product-versioning.md` | ENV-01 §6 |
| **STABLE NOT AVAILABLE** unless promoted post-merge under distinct Morris GO ; recette PASS ≠ merge | ENV-01 + `product-versioning.md` |
| Cookie collision reserve (3100/3200 same host) : separate browser profiles until mitigated | ENV-01 état ML1 |
| E08 delivery must log in `construction/delivery-history.md`; **no official release** without promotion gates | `product-versioning.md` |
| Template SFIA v2.6 + ENV block mandatory before Cursor prompt; else **PROMPT NOT GENERATED** | ENV-01 §8 |

---

## F. UI frames required (Figma page 11)

**In scope (mutable source; extract L0/L1/L2 + PNG hash before code—méthodo v1.1 §4–8):**

| Frame | Role |
|-------|------|
| **11.01** | Aucun dépôt / rattachement |
| **11.02** | 0..N dépôts, add/remove/select |
| **11.03** | Dépôt + branche + tree 30/70 |
| **11.04** | Publications **projet** multi-dépôts |
| **11.05** | Lecture agrandie + détails droite |
| **11.06** | Connexion GitHub personnelle |
| **11.07** | Déconnexion + impacts |
| **11.13** | Confirmation retrait **projet seulement** |
| **11.14** | Source absente / erreurs |
| **11.15** | Desktop compact 1280 |
| **11.16** | Mobile 390 empilé |

**Deleted by design (do not reintroduce as workflow UI):** **11.08–11.12** (remplacés par conversation + visionneuse Travail).

Figma: `https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1092-116`

---

## G. STOP conditions visible from docs alone

**Before code (archi §14):** functional or Figma reference missing; normative D6/ENV-01 change without GO; DB/migration unarbitrated; lexical business router reintroduced; cannot distinguish SCRIPTED vs REAL; shared secrets across lanes; no rollback scenario; SFIA v2.6 template unread; **external/technical PR merged as documentaire**; autorité contradictoire; branch/base/HEAD not verified.

**Before RECETTE:** merge announced but provider hard-blocked; REAL publication impossible; no proof of USER acte; Nora chain broken without restitution; candidate not frozen; sandbox not isolated; Figma not confronted with runtime.

**Before merge chantier:** no Morris GO; base `main` not reconciled (E08 branch divergent); CI/proof missing.

**Documentary / governance:** E08 candidats **≠** VALIDATED SPEC; **no implicit GO** code, PR, merge, RECETTE deploy, Gate C, ADOPTED (`fonctionnel` §13–15, `roadmap`).

**G0 arbitrages still open (archi §13.1):** merge documentaire in same lot? PR hors document? bounded path conventions? exact RECETTE sandbox/account.

---

## H. Cycle Knowledge Contract status

**FALLBACK — no E08 / Git / Nora delivery-specific Cycle Knowledge Contract** found under `projects/sfia-studio-next/` (search: ensemble-08, E08, git publication in CKC paths).

- **CKI** (`projects/sfia-studio-next/cki/`) = cognitive specializations, **not** execution authority (`cki/README.md`: CKC reserved for historical Studio v3).
- **Cursor routing:** resolve CKC candidat per `prompts/templates/sfia-cycle-execution-template.md` / routing guide §4.4.5; if absent → **synthetic card + SFIA v2.6 fallback** (CKC ≠ execution GO).
- **Mandatory pre-Cursor reads for E08:** E08 candidats, R2 D9/D6/D7, SEM decision + contrat technique qualification, ENV-01, méthodo Figma v1.1, `2026-11-07-ml4-git-publication-ml5-cursor-trajectoire.md`.

---

## Delivery constraint matrix (quick reference)

| Layer | Must ship together in macro-lot E08 |
|-------|-------------------------------------|
| D9 | `git/tree`, multi-repo REAL, refs/search, `readGitFile` + provenance |
| D4/D7 | `git/publications` projection, publication pipeline unchanged owners |
| D3/D6 | conversational authority admission, mission continuity + restitution |
| UI | Page projet Dépôts Git, Figma G2–G5 on 11.01–07, 11.13–16 |
| Proof | A/B/S oracles, Nora LIVE, GitHub sandbox REAL, ENV manifest, no regression Travail |

**Explicit OUT (do not scope-creep):** second Git provider, force-push, branch admin, ML5 code mutations, cockpit merge buttons in Git tab, parallel Git orchestrator, permanent `Ensemble08*` component names.

**Key paths (absolute):**

- `/Users/morris/Projects/sfia-workspace-feat-next-ensemble08-git-publications-nora/projects/sfia-studio-next/conception-fonctionnelle/contrat-fonctionnel-depots-git-et-conduite-nora-candidat.md`
- `/Users/morris/Projects/sfia-workspace-feat-next-ensemble08-git-publications-nora/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/contrat-architecture-et-acceptation-candidat.md`
- `/Users/morris/Projects/sfia-workspace-feat-next-ensemble08-git-publications-nora/projects/sfia-studio-next/ux-ui/methodologie-contrat-figma-cursor.md`
- `/Users/morris/Projects/sfia-workspace-feat-next-ensemble08-git-publications-nora/projects/sfia-studio-next/governance/environnements-recette-et-promotions.md`