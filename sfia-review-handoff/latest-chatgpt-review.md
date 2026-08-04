# ChatGPT Review Pack — SFIA Studio Native Assistant OpenAI Functional Architecture Decision Pack

## 1. Date / heure / fuseau

Local : 2026-08-04 23:21:41 CEST +0200
UTC : 2026-08-04 21:21:41 UTC

## 2. GO consommé

GO ARBITRATION ARCHITECTURE FONCTIONNELLE SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — DECISION PACK
2026-08-04 23:10 CEST (+0200)

Aucune décision D-ASST n’est consommée par ce GO.

## 3. Cycle / profil / typologie

Architecture fonctionnelle — arbitrage · Standard · EVOL/DOC · Documentation-only

## 4. Main

`origin/main` = `8dc54db0069eed78a8d8930cc2b035450ab56ad1` — PASS (`8dc54db0069eed78a8d8930cc2b035450ab56ad1`)

## 5. Branche / worktree

Branche : `arbitration/sfia-studio-assistant-sfia-native-openai-functional-architecture`
HEAD : `8dc54db0069eed78a8d8930cc2b035450ab56ad1`
Non poussée · pas de PR
Documents 90/91 untracked préservés lors du switch depuis la branche AF.

## 6. Handoff entrant

Commit : `559cfa51d402a440f437a55f0672e51da47fd774`
Blob : `e631a8a5eb684df2bb7881ea84d9907d45e803b5`
Tip observé : `559cfa51d402a440f437a55f0672e51da47fd774`
Titre / verdict AF : conformes (FUNCTIONAL ARCHITECTURE COMPLETE WITH OPEN DECISIONS … ARBITRATION)

## 7. Template canonique

`prompts/templates/sfia-cycle-execution-template.md` + méthode AF `docs/practices/architecture/functional-architecture-method.md`

## 8. CKC

Pilote AF détaillé baseline : absent. Fallback : template + méthode AF + doctrine v3 + docs 90/91.
Branche `method/sfia-cycle-knowledge-contracts` : CANDIDATE — NOT BASELINE.

## 9–10. Documents 90 et 91

| Doc | SHA-256 | Statut cycle |
|---|---|---|
| 90 | `2d5a03f366e5291e54b6617ada972158763199bf918bea01f031d4212b1a78b2` | présent · **inchangé** |
| 91 | `0517aa6c3091f63f0b5c69d40d123fa715dbfb4429d02681ea0398a9588e83e1` | présent · **inchangé** |

## 11. Sources consultées

Handoff AF · 90 · 91 · doctrine 30–37 (réf.) · CC-D01/03/06/12/13 (réf. via 90/91/37) · gouvernance v2.6 · méthode AF.

## 12–13. Découverte / chemin créé

`92` libre sur main et candidates.
Créé : `projects/sfia-studio/92-assistant-sfia-native-openai-functional-architecture-decision-pack.md`

## 14–16. Contenu complet / diff / hash

Lignes : 473 · SHA-256 : `0af5a9063705859abddceea0f1f5184b55c35a04e94b71648b139bb592c841d4`

### Contenu complet

```markdown
# 92 — Decision Pack Architecture fonctionnelle — Assistant SFIA natif OpenAI

| Métadonnée | Valeur |
|---|---|
| **Document** | `projects/sfia-studio/92-assistant-sfia-native-openai-functional-architecture-decision-pack.md` |
| **Statut** | DRAFT FOR MORRIS ARBITRATION — NO DECISION CONSUMED |
| **Cycle** | Architecture fonctionnelle — arbitrage |
| **Profil** | Standard |
| **Typologie** | EVOL / DOC |
| **GO** | GO ARBITRATION ARCHITECTURE FONCTIONNELLE SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — DECISION PACK — 2026-08-04 23:10 CEST (+0200) |
| **Baseline main** | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| **Handoff AF entrant** | `559cfa51d402a440f437a55f0672e51da47fd774` / blob `e631a8a5eb684df2bb7881ea84d9907d45e803b5` |
| **Sources** | `90` (SHA-256 `2d5a03f3…1a78b2`) · `91` (SHA-256 `0517aa6c…8e83e1`) — **inchangés** |
| **Doctrine conduite** | SFIA v2.6 |
| **Doctrine produit** | SFIA Studio v3 exclusive |
| **Autorité** | Morris (L0) |

> Toute recommandation ci-dessous est **candidate**. Aucune option n’est DECIDED / ADOPTED / VALIDATED / APPROVED / APPLIED.

Références : cadrage `90` §§8, 13, 26, 29 · AF `91` §§3, 8, 11, 15, 21, 24, 32, 38–41 · doctrine `30`–`37` · CC-D01/03/06/12/13.

---

## 0. Objet et anti-claims

Support d’arbitrage pour ouvrir ensuite UX/UI (après décisions Lane A) et préparer Tech / Backlog.

**Anti-claims :** pas AF validée · pas UX autorisé · pas Tech autorisé · pas OpenAI intégré · pas modification 90/91/doctrine/méthode · pas code · pas MVP.

**CKC cycle :** pilote AF détaillé baseline absent ; fallback template + méthode AF + doctrine v3 + docs 90/91. CKC candidat branche méthode = NOT BASELINE.

---

## 1. Matrice décisions → gates

| ID | Lane | Avant UX/UI | Avant Tech | Avant Backlog | Avant Pilot | Différable |
|---|---|---|---|---|---|---|
| D-ASST-FPI-04 | A | **MUST** | — | — | — | non |
| D-ASST-FPI-05 | A | **MUST** | — | — | — | non |
| D-ASST-FPI-06 | A | **MUST** | — | — | — | non |
| D-ASST-FPI-11 | A | **MUST** | — | — | — | non |
| D-ASST-AF-03 | B | recommandé | recommandé | MUST | — | non pour trajectoire |
| D-ASST-AF-04 | E | — | — | — | — | gouvernance handoff (maintenant) |
| D-ASST-AF-01 | C | — | MUST | — | — | — |
| D-ASST-AF-02 | C | — | MUST | — | — | — |
| D-ASST-FPI-02 | C | — | MUST | — | — | — |
| D-ASST-FPI-03 | C | — | MUST | — | — | — |
| D-ASST-FPI-07 | C | — | MUST | — | — | — |
| D-ASST-FPI-08 | C | — | MUST | — | — | — |
| D-ASST-FPI-09 | C | — | MUST | — | — | — |
| D-ASST-FPI-10 | C | — | MUST | — | — | — |
| D-ASST-FPI-14 | C | — | soft | — | MUST hard | — |
| D-ASST-FPI-15 | C | — | MUST | — | — | — |
| D-ASST-FPI-01 | D | — | — | MUST | — | partiel |
| D-ASST-FPI-12 | D | — | — | — | — | Delivery |
| D-ASST-FPI-13 | D | — | — | — | MUST | — |
| D-ASST-FPI-16 | D | — | — | — | — | **rapprocher AF-03** |

---

# Lane A — Décisions requises avant UX/UI

## 2. D-ASST-FPI-04 — Visibilité du routage

| Champ | Contenu |
|---|---|
| **Statut** | NOT DECIDED — MORRIS DECISION REQUIRED |
| **Décision attendue** | Quel niveau de visibilité du routage intention/mode/cycle/CKC/sources |
| **Contexte** | `90` §8/§26 · `91` §32 WA-05 · CC-D01 conversation dominante · risque UI trop technique |
| **Fondations** | V3-F01 F05 F15 · CC-D12 (CKC non formulaire) |
| **Parcours** | S01 S02 S08 S09 S10 · conversation libre vs cycle |
| **Composants** | Intent Resolver · Mode Router · panneau expert |
| **Objets** | IntentResolution · ConversationMode · CycleQualification · CkcResolution |

### Options

| Opt | Description |
|---|---|
| **A** | Routage totalement invisible |
| **B** | Routage discret visible uniquement lorsqu’utile (erreur, ambiguity, gate) |
| **C** | Routage détaillé permanent (vue experte toujours ouverte) |
| **D** | Routage discret par défaut + panneau expert optionnel |

| Opt | Avantages | Limites / risques |
|---|---|---|
| A | Charge cognitive minimale | Audit UX faible ; debug difficile ; confiance opaque |
| B | Sobriété + signal utile | Seuils « utile » à définir |
| C | Transparence maximale | Charge cognitive ; UI technique |
| D | Sobriété + audit expert | Deux modes à concevoir |

**Toujours invisible :** dimensions CKC brutes · scores internes · prompt système.
**Discret :** mode détecté · cycle candidat (si formalisé) · « sources consultées » · statut doctrine (ok/erreur).
**Expert :** intention taxonomique · CKC detailed/synthetic/absent · outils appelés · allowlist hits · contradictions.

| Dimension | Impact |
|---|---|
| UX | progressive disclosure ; accessibilité (statut non couleur-seul) |
| Tech | events observabilité ; pas de schéma UI figé ici |
| Dette | si A seul → dette audit ; si C → dette simplification |
| Réversibilité | élevée (présentation) |
| Sécurité | ne pas exposer chemins/secrets dans vue expert |

**Recommandation candidate :** **D**
**Justification :** aligne WA-05 / CC-D01 ; permet confiance sans surcharger.
**Avant gate :** UX/UI (**MUST**)

**Formulation Morris :** `D-ASST-FPI-04=D` (ou A/B/C)

---

## 3. D-ASST-FPI-05 — Contenu visible du LPS

| Champ | Contenu |
|---|---|
| **Statut** | NOT DECIDED |
| **Décision attendue** | Contenu du panneau vivant LPS |
| **Contexte** | `90` §13/§26 · `91` §13/§32 WA-06 · CC-D03 · V3-F02 |
| **Fondations** | V3-F02 F06 F07 F10 F15 |
| **Parcours** | S03 S04 S07 · deltas LPS |
| **Composants** | LPS Query · panneau vivant |
| **Objets** | LivingProjectState · LpsDeltaCandidate · Reserve · Decision |

### Options

| Opt | Description |
|---|---|
| **A** | Résumé Project uniquement |
| **B** | Résumé + décisions + réserves |
| **C** | Résumé + décisions + réserves + preuves clés |
| **D** | LPS intégral |
| **E** | Progressive disclosure selon rôle/contexte (couche A→C) |

| Opt | Avantages | Limites |
|---|---|---|
| A | Simple | Manque gouvernance visible |
| B | Gouvernance minimale | Preuves absentes |
| C | Équilibre preuve/gouvernance | Sélection « preuves clés » à définir |
| D | Complet | Charge / confidentialité |
| E | Adaptatif | Complexité UX + ACL |

**Permanent (reco C/E) :** identité Project · doctrine pin status · cycle courant (si any) · résumé objectifs.
**À la demande :** décisions · réserves · preuves clés · trajectoire résumé.
**Expert :** versions LPS · deltas candidats vs validés · audit refs.
**Jamais brut :** dumps CKC · raisonnement modèle · secrets.

**Distinction obligatoire :** état **validé** ≠ **delta candidat** (labels épistémiques).
**Séparation :** LPS ≠ transcript conversation ≠ trajectoire.

**Recommandation candidate :** **C** avec progressive disclosure **E** comme mode d’affichage (C=contenu cible ; E=mécanisme). Si une seule lettre : **C**, en notant E comme précision UX.
**Avant gate :** UX/UI (**MUST**)

**Formulation Morris :** `D-ASST-FPI-05=C` (ou `C+E` / A/B/D/E)

---

## 4. D-ASST-FPI-06 — Hors-sujet conversationnel

| Champ | Contenu |
|---|---|
| **Statut** | NOT DECIDED |
| **Décision attendue** | Comportement si message hors Project |
| **Contexte** | `90` §9 · `91` §11 · S15 · V3-F02 F07 |
| **Fondations** | V3-F02 F05 F07 |
| **Composants** | Mode Router · Conversation Manager |
| **Objets** | IntentResolution (hors-sujet) · ConversationMessage |

### Options

| Opt | Description |
|---|---|
| **A** | Refus systématique |
| **B** | Digression mineure, sans mémoire Project |
| **C** | Réponse complète hors sujet dans le même espace |
| **D** | Digression mineure + orientation vers espace général |

| Opt | Avantages | Limites |
|---|---|---|
| A | Isolation stricte | Friction UX |
| B | Souplesse | Seuil digression à définir |
| C | Convivial | Pollution contexte / coût / confusion Project |
| D | Souplesse + frontière claire | Espace général peut être **absent** → fallback B |

**Seuil digression mineure (candidat fonctionnel, non validé) :** question factuelle courte sans besoin sources Project, sans mutation, ≤ quelques tours, hors décision/cycle/GO.
**Hors-périmètre :** demande d’action structurante · autre Project · secrets · contournement doctrine.

Règles invariantes (toutes options sauf pollution C) :
- pas de chargement sources Project ;
- pas de mutation LPS/trajectoire ;
- pas de mémorisation comme connaissance Project ;
- rappel sobre du contexte Project.

Si aucun espace général : appliquer **B** + message « hors périmètre Project ».

**Recommandation candidate :** **D** (fallback B si pas d’espace général)
**Avant gate :** UX/UI (**MUST**)

**Formulation Morris :** `D-ASST-FPI-06=D`

---

## 5. D-ASST-FPI-11 — Mapping confirmations N1–N3

| Champ | Contenu |
|---|---|
| **Statut** | NOT DECIDED |
| **Décision attendue** | Niveau de confirmation par famille d’actions |
| **Contexte** | `90` §17 · `91` §15/§24 · CC-D06 · V3-F12 · WA-09 |
| **Fondations** | V3-F05 F12 · CC-D06 (ne pas modifier le texte CC-D06) |
| **Composants** | Confirmation Service · Policy · Decision |

### Matrice (niveaux **candidats**)

| Action | Niveau candidat | Justification | Confirm visible | Autorité | Effet possible | Preuve | Erreur si insuffisant |
|---|---|---|---|---|---|---|---|
| Réponse explicative | N1 / none | réversible, pas mutation | non | — | réponse | audit msg | — |
| Lecture Git RO | N1 | read-only | non | read | contenu filtré | ToolInvocation | access denied |
| Consultation source allowlist | N1 | read-only | non | read | hits | ToolInvocation | source refused |
| Qualification cycle (proposition) | N1–N2 | proposition vs engagement | discret si N2 | qualify | CycleCandidate | CycleQualification | block formalization |
| Proposition LPS delta | N1 | propose only | non | propose | LpsDeltaCandidate | audit | — |
| **Application** LPS delta | **N2** | mutation Project | oui | HumanDecision | LPS apply | Decision+audit | block mutation |
| Proposition trajectoire | N1 | reco | non | propose | TrajectoryDeltaCandidate | audit | — |
| **Validation** trajectoire | **N2/N3** | selon criticité | oui | HumanDecision | trajectory validated | Decision | block |
| Recommandation | N1 | épistémique | non | — | Recommendation | audit | — |
| Création HumanDecision candidate | N1–N2 | préparation | selon UI | prepare | Decision candidate | audit | — |
| **Consommation** décision / GO | **N2/N3** | structurant | oui explicite | Decision Authority | consume | Decision record | faux GO non consommé |
| Préparation ExecutionContract | N2 | contrat engagé conceptuellement | oui | prepare | EC candidate | EC audit | block build |
| Export Markdown Cursor | N2 | artefact exportable | oui | export | CursorExport | audit | block export |
| Lancement Cursor **futur** | **N3** | exécution externe | oui fort | exec authority | hors FPI | — | interdit FPI |
| Git write **futur** | **N3** | irréversible repo | oui fort | write | hors FPI | — | interdit FPI |
| Merge **futur** | **N3** | structurant repo | oui fort | merge | hors FPI | — | interdit FPI |
| Changement DoctrinePackage | **N3** | doctrinal | oui fort | Morris | pin change | DoctrineResolution | fail-closed |
| Dépassement budget | N2 soft / N3 hard override | FinOps | oui si override | admin/Morris | continue/stop | UsageRecord | stop soft/hard |
| Conservation/suppression conversation | N2 | données personnelles | oui | user/admin | TTL/delete | audit | block delete |

**Règle candidate synthétique :**
- **N1** : read-only, réversible, sans mutation ;
- **N2** : validation explicite d’une proposition ou mutation Project bornée / export ;
- **N3** : décision structurante, package doctrinal, exécution externe, Git futur.

Compatibilité CC-D06 : mapping **précise** CC-D06 sans la réécrire ; écarts éventuels = dette documentaire UX, pas amendement doctrinal ici.

**Recommandation candidate :** matrice ci-dessus (N1/N2/N3 tels que définis)
**Avant gate :** UX/UI (**MUST** pour surfaces de confirmation)

**Formulation Morris :** `D-ASST-FPI-11=MATRIX_AS_PACKED` ou `D-ASST-FPI-11=ACCEPT_CANDIDATE_MATRIX` (avec réserves éventuelles)

---

# Lane B — Trajectoire

## 6. D-ASST-AF-03 — UX puis Tech ou dual-track

| Champ | Contenu |
|---|---|
| **Statut** | NOT DECIDED |
| **Décision attendue** | Séquencement UX/UI vs Architecture technique |
| **Contexte** | `91` §41 · D-ASST-FPI-16 chevauche |
| **Fondations** | V3-F05 F15 |

### Options

| Opt | Description |
|---|---|
| **A** | UX/UI intégral avant Tech |
| **B** | Tech intégral avant UX/UI |
| **C** | Dual-track borné, contrats d’interface + gates séparés |

| Opt | Avantages | Risques |
|---|---|---|
| A | UX ancré avant tech | rework si contraintes OpenAI/Git tardives |
| B | contraintes tech tôt | UI dictée par tech ; délai valeur visible |
| C | parallélisme contrôlé | sync overhead ; risque fusion validations |

**Dépendances :** Lane A (04/05/06/11) avant démarrage UX substantiel.
**Critères démarrage dual-track (candidats) :** Lane A tranchée · AF non bloquée · contrats d’interface (surfaces UX ↔ ports Tech) rédigés · gates UX et Tech **non fusionnés**.
**Stop conditions :** tentative de valider Tech comme UX ou inversement · scope creep OpenAI live.

**Chevauchement FPI-16 :** traiter FPI-16 comme **alias de priorité** ; décision maîtresse = **AF-03**. Ne pas supprimer FPI-16 ; noter « consolidated under AF-03 ».

**Recommandation candidate :** **C** après arbitrage Lane A
**Avant gate :** Backlog / planification (**MUST** pour trajectoire) ; recommandé avant lancement parallèle Tech

**Formulation Morris :** `D-ASST-AF-03=C`

---

# Lane C — Avant Architecture technique (consolidé, non consommé)

Chaque entrée : options · reco candidate · urgence MUST BEFORE TECH (sauf note) · impacts synthétiques.

### D-ASST-FPI-02 — Connexion T-A0…T-A7
Options : façade RO memory · composition verticale partielle · rewrite.
**Reco candidate :** composition partielle T-A0…T-A4+T-A6 ; T-A5 hors FPI (`91` §34).
Dette : bridging chat. Impacts : Tech composition, Backlog sizing.

### D-ASST-FPI-03 — Persistance minimale
Options : memory-only · Project-local · multi-instance.
**Reco candidate :** Project-local minimale (`90` D-ASST-03).
RGPD/TTL liés à FPI-08. Impacts : Tech storage.

### D-ASST-FPI-07 — Données Git → OpenAI
Options : métadonnées · snippets allowlist+redact · fichiers complets.
**Reco candidate :** métadonnées + snippets allowlist redacted (WA-07).
Sécurité/RGPD critiques. Impacts : Source Router · redaction.

### D-ASST-FPI-08 — Conservation conversations
Options : session-only · Project TTL · indéfini.
**Reco candidate :** Project-bounded TTL (durée ouverte).
RGPD. Impacts : mémoire · effacement.

### D-ASST-FPI-09 — Modèle fixe ou configurable
Options : fixe · admin-configurable · user-selectable.
**Reco candidate :** configurable admin.
Impacts : Provider · FinOps.

### D-ASST-FPI-10 — OpenAI seul ou port
Options : OpenAI-only FPI · port multi-provider dès FPI.
**Reco candidate :** OpenAI-only + port interne minimal (WA-08).
Impacts : Provider boundary.

### D-ASST-FPI-14 — FinOps
Options : observabilité only · soft cap · hard cap.
**Reco candidate :** observabilité + soft cap ; hard cap ouvert.
Urgence : soft BEFORE TECH/PILOT ; hard BEFORE PILOT.

### D-ASST-FPI-15 — Fallback OpenAI
Options : fail-closed total · dégradé non structurant · queue retry.
**Reco candidate :** dégradé non structurant + fail-closed structurant (WA-11).
Impacts : Policy · UX erreurs.

### D-ASST-AF-01 — Orchestration conversationnelle
Options : A monolithe fonctionnel · B bus événements · C pipeline étapes.
**Reco candidate :** **C pipeline étapes** (aligné chaîne nominale `91` §10) — NOT DECIDED.
MUST BEFORE TECH. Impacts : domaines 2–15.

### D-ASST-AF-02 — Validation sortie structurée
Options : A champs obligatoires stricts · B progressive.
**Reco candidate :** **A pour actions structurantes** ; B pour free talk — NOT DECIDED.
MUST BEFORE TECH. Impacts : Validator · fail-closed.

**Section DEFERRED — NOT DECIDED (Lane C) :** toutes les décisions Lane C ci-dessus restent non consommées jusqu’à GO dédié Tech / Decisions ultérieur.

---

# Lane D — Différables

### D-ASST-FPI-01 — Périmètre exact FPI
Options A/B/C du cadrage ; **reco B**. MUST BEFORE BACKLOG. Peut être affiné après UX.

### D-ASST-FPI-12 — Niveau préparation Cursor
**Reco :** EC draft + export MD (WA-10). CAN DEFER DELIVERY.

### D-ASST-FPI-13 — Pilote réel
**Reco :** Morris-only puis restreint. MUST BEFORE PILOT / CAN DEFER.

### D-ASST-FPI-16 — Priorité UX/backend
**Consolidation :** subordonnée à **D-ASST-AF-03** ; conserver l’ID ; ne pas double-arbitrer sans référencer AF-03.

Règle de consolidation historique : **ne supprimer aucun ID** ; annoter `superseded-by` / `master-decision` dans ce pack uniquement.

---

# Lane E — Gouvernance handoff

## 7. D-ASST-AF-04 — Autorité de preuve tip/blob Review Handoff

| Champ | Contenu |
|---|---|
| **Statut** | NOT DECIDED — MORRIS DECISION REQUIRED |
| **Décision attendue** | Comment prouver tip/blob finaux sans boucle auto-référentielle |
| **Contexte** | Handoff AF : plusieurs commits (parent → tip) ; un fichier ne peut pas contenir son propre SHA final sans nouveau commit |
| **Fondations** | V3-F07 F14 (preuve) · gouvernance cycle v2.6 (handoff L3) |

### Options

| Opt | Description |
|---|---|
| **A** | Exigence auto-référentielle stricte (tip/blob dans le fichier = tip courant) |
| **B** | Handoff = parent + contenu + verdict + message ; tip/blob vérifiés **extérieurement** (rapport Cursor + ChatGPT) |
| **C** | Manifeste immuable / preuve séparée future |
| **D** | Ne plus enregistrer d’identité Git |

| Opt | Avantages | Limites |
|---|---|---|
| A | Idéal théorique | Boucle refresh infinie |
| B | Pratique immédiate ; mono-commit | Discipline vérification externe |
| C | Preuve durable | Effort méthode/outillage ; GO méthode futur |
| D | Simple | Perte traçabilité |

**Contraintes pack :** ne modifie pas template/méthode dans ce cycle · preuve **projet** seulement · promotion méthode = GO séparé · **un seul commit** handoff pour ce cycle · pas de second refresh pour recopier tip · rapport Cursor + validation ChatGPT portent l’identité post-publication.

**Recommandation candidate :** **B** maintenant ; **C** amélioration future
**Avant gate :** applicable immédiatement à la publication de **ce** Decision Pack

**Formulation Morris :** `D-ASST-AF-04=B`

---

## 8. Risques et dette du pack

| Risque | Mitigation |
|---|---|
| Ouvrir UX sans Lane A | bloquer GO UX/UI jusqu’à 04/05/06/11 |
| Double décision FPI-16 / AF-03 | master = AF-03 |
| Reco prises pour décisions | anti-claims + statut NOT DECIDED |
| Mapping N1–N3 incomplet en UX | matrice §5 comme contrat d’entrée UX |
| Boucle handoff | AF-04=B + mono-commit |

Dette acceptée candidate : TTL conversation ouvert · seuils digression qualitatifs · « preuves clés » LPS à préciser en UX · CC-D06 non amendé.

---

## 9. Recommandations candidates (synthèse)

| ID | Reco candidate |
|---|---|
| D-ASST-FPI-04 | **D** |
| D-ASST-FPI-05 | **C** (+ progressive disclosure) |
| D-ASST-FPI-06 | **D** (fallback B) |
| D-ASST-FPI-11 | **ACCEPT_CANDIDATE_MATRIX** |
| D-ASST-AF-03 | **C** |
| D-ASST-AF-04 | **B** |
| Lane C / D | voir §§ Lane C–D — DEFERRED — NOT DECIDED |

---

## 10. Bloc prêt à copier pour Morris (NON EXÉCUTÉ)

```text
GO DECISIONS ARCHITECTURE FONCTIONNELLE SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI —
APPLY
D-ASST-FPI-04=<OPTION>
D-ASST-FPI-05=<OPTION>
D-ASST-FPI-06=<OPTION>
D-ASST-FPI-11=<OPTION>
D-ASST-AF-03=<OPTION>
D-ASST-AF-04=<OPTION>

DEFERRED — NOT DECIDED
D-ASST-AF-01
D-ASST-AF-02
D-ASST-FPI-01
D-ASST-FPI-02
D-ASST-FPI-03
D-ASST-FPI-07
D-ASST-FPI-08
D-ASST-FPI-09
D-ASST-FPI-10
D-ASST-FPI-12
D-ASST-FPI-13
D-ASST-FPI-14
D-ASST-FPI-15
D-ASST-FPI-16
```

Valeurs candidates suggérées (non appliquées) :
`D=D`, `05=C`, `06=D`, `11=ACCEPT_CANDIDATE_MATRIX`, `AF-03=C`, `AF-04=B`.

---

## 11. Prochaine gate candidate

`GO DECISIONS ARCHITECTURE FONCTIONNELLE SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — APPLY SELECTED DECISIONS`

Statut : **candidate uniquement — non consommée**.

Le GO UX/UI reste **bloqué** jusqu’à décision explicite sur D-ASST-FPI-04, 05, 06 et 11.

---

## 12. Verdict documentaire

**FUNCTIONAL ARCHITECTURE DECISION PACK COMPLETE — UX/UI BLOCKING DECISIONS D-ASST-FPI-04, D-ASST-FPI-05, D-ASST-FPI-06 AND D-ASST-FPI-11 FULLY PREPARED — TRAJECTORY AND HANDOFF GOVERNANCE OPTIONS PREPARED — NO DECISION CONSUMED — READY FOR MORRIS DECISION**

```

### Diff complet

```diff
diff --git a/projects/sfia-studio/92-assistant-sfia-native-openai-functional-architecture-decision-pack.md b/projects/sfia-studio/92-assistant-sfia-native-openai-functional-architecture-decision-pack.md
new file mode 100644
index 0000000..d513c32
--- /dev/null
+++ b/projects/sfia-studio/92-assistant-sfia-native-openai-functional-architecture-decision-pack.md
@@ -0,0 +1,473 @@
+# 92 — Decision Pack Architecture fonctionnelle — Assistant SFIA natif OpenAI
+
+| Métadonnée | Valeur |
+|---|---|
+| **Document** | `projects/sfia-studio/92-assistant-sfia-native-openai-functional-architecture-decision-pack.md` |
+| **Statut** | DRAFT FOR MORRIS ARBITRATION — NO DECISION CONSUMED |
+| **Cycle** | Architecture fonctionnelle — arbitrage |
+| **Profil** | Standard |
+| **Typologie** | EVOL / DOC |
+| **GO** | GO ARBITRATION ARCHITECTURE FONCTIONNELLE SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — DECISION PACK — 2026-08-04 23:10 CEST (+0200) |
+| **Baseline main** | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
+| **Handoff AF entrant** | `559cfa51d402a440f437a55f0672e51da47fd774` / blob `e631a8a5eb684df2bb7881ea84d9907d45e803b5` |
+| **Sources** | `90` (SHA-256 `2d5a03f3…1a78b2`) · `91` (SHA-256 `0517aa6c…8e83e1`) — **inchangés** |
+| **Doctrine conduite** | SFIA v2.6 |
+| **Doctrine produit** | SFIA Studio v3 exclusive |
+| **Autorité** | Morris (L0) |
+
+> Toute recommandation ci-dessous est **candidate**. Aucune option n’est DECIDED / ADOPTED / VALIDATED / APPROVED / APPLIED.
+
+Références : cadrage `90` §§8, 13, 26, 29 · AF `91` §§3, 8, 11, 15, 21, 24, 32, 38–41 · doctrine `30`–`37` · CC-D01/03/06/12/13.
+
+---
+
+## 0. Objet et anti-claims
+
+Support d’arbitrage pour ouvrir ensuite UX/UI (après décisions Lane A) et préparer Tech / Backlog.
+
+**Anti-claims :** pas AF validée · pas UX autorisé · pas Tech autorisé · pas OpenAI intégré · pas modification 90/91/doctrine/méthode · pas code · pas MVP.
+
+**CKC cycle :** pilote AF détaillé baseline absent ; fallback template + méthode AF + doctrine v3 + docs 90/91. CKC candidat branche méthode = NOT BASELINE.
+
+---
+
+## 1. Matrice décisions → gates
+
+| ID | Lane | Avant UX/UI | Avant Tech | Avant Backlog | Avant Pilot | Différable |
+|---|---|---|---|---|---|---|
+| D-ASST-FPI-04 | A | **MUST** | — | — | — | non |
+| D-ASST-FPI-05 | A | **MUST** | — | — | — | non |
+| D-ASST-FPI-06 | A | **MUST** | — | — | — | non |
+| D-ASST-FPI-11 | A | **MUST** | — | — | — | non |
+| D-ASST-AF-03 | B | recommandé | recommandé | MUST | — | non pour trajectoire |
+| D-ASST-AF-04 | E | — | — | — | — | gouvernance handoff (maintenant) |
+| D-ASST-AF-01 | C | — | MUST | — | — | — |
+| D-ASST-AF-02 | C | — | MUST | — | — | — |
+| D-ASST-FPI-02 | C | — | MUST | — | — | — |
+| D-ASST-FPI-03 | C | — | MUST | — | — | — |
+| D-ASST-FPI-07 | C | — | MUST | — | — | — |
+| D-ASST-FPI-08 | C | — | MUST | — | — | — |
+| D-ASST-FPI-09 | C | — | MUST | — | — | — |
+| D-ASST-FPI-10 | C | — | MUST | — | — | — |
+| D-ASST-FPI-14 | C | — | soft | — | MUST hard | — |
+| D-ASST-FPI-15 | C | — | MUST | — | — | — |
+| D-ASST-FPI-01 | D | — | — | MUST | — | partiel |
+| D-ASST-FPI-12 | D | — | — | — | — | Delivery |
+| D-ASST-FPI-13 | D | — | — | — | MUST | — |
+| D-ASST-FPI-16 | D | — | — | — | — | **rapprocher AF-03** |
+
+---
+
+# Lane A — Décisions requises avant UX/UI
+
+## 2. D-ASST-FPI-04 — Visibilité du routage
+
+| Champ | Contenu |
+|---|---|
+| **Statut** | NOT DECIDED — MORRIS DECISION REQUIRED |
+| **Décision attendue** | Quel niveau de visibilité du routage intention/mode/cycle/CKC/sources |
+| **Contexte** | `90` §8/§26 · `91` §32 WA-05 · CC-D01 conversation dominante · risque UI trop technique |
+| **Fondations** | V3-F01 F05 F15 · CC-D12 (CKC non formulaire) |
+| **Parcours** | S01 S02 S08 S09 S10 · conversation libre vs cycle |
+| **Composants** | Intent Resolver · Mode Router · panneau expert |
+| **Objets** | IntentResolution · ConversationMode · CycleQualification · CkcResolution |
+
+### Options
+
+| Opt | Description |
+|---|---|
+| **A** | Routage totalement invisible |
+| **B** | Routage discret visible uniquement lorsqu’utile (erreur, ambiguity, gate) |
+| **C** | Routage détaillé permanent (vue experte toujours ouverte) |
+| **D** | Routage discret par défaut + panneau expert optionnel |
+
+| Opt | Avantages | Limites / risques |
+|---|---|---|
+| A | Charge cognitive minimale | Audit UX faible ; debug difficile ; confiance opaque |
+| B | Sobriété + signal utile | Seuils « utile » à définir |
+| C | Transparence maximale | Charge cognitive ; UI technique |
+| D | Sobriété + audit expert | Deux modes à concevoir |
+
+**Toujours invisible :** dimensions CKC brutes · scores internes · prompt système.
+**Discret :** mode détecté · cycle candidat (si formalisé) · « sources consultées » · statut doctrine (ok/erreur).
+**Expert :** intention taxonomique · CKC detailed/synthetic/absent · outils appelés · allowlist hits · contradictions.
+
+| Dimension | Impact |
+|---|---|
+| UX | progressive disclosure ; accessibilité (statut non couleur-seul) |
+| Tech | events observabilité ; pas de schéma UI figé ici |
+| Dette | si A seul → dette audit ; si C → dette simplification |
+| Réversibilité | élevée (présentation) |
+| Sécurité | ne pas exposer chemins/secrets dans vue expert |
+
+**Recommandation candidate :** **D**
+**Justification :** aligne WA-05 / CC-D01 ; permet confiance sans surcharger.
+**Avant gate :** UX/UI (**MUST**)
+
+**Formulation Morris :** `D-ASST-FPI-04=D` (ou A/B/C)
+
+---
+
+## 3. D-ASST-FPI-05 — Contenu visible du LPS
+
+| Champ | Contenu |
+|---|---|
+| **Statut** | NOT DECIDED |
+| **Décision attendue** | Contenu du panneau vivant LPS |
+| **Contexte** | `90` §13/§26 · `91` §13/§32 WA-06 · CC-D03 · V3-F02 |
+| **Fondations** | V3-F02 F06 F07 F10 F15 |
+| **Parcours** | S03 S04 S07 · deltas LPS |
+| **Composants** | LPS Query · panneau vivant |
+| **Objets** | LivingProjectState · LpsDeltaCandidate · Reserve · Decision |
+
+### Options
+
+| Opt | Description |
+|---|---|
+| **A** | Résumé Project uniquement |
+| **B** | Résumé + décisions + réserves |
+| **C** | Résumé + décisions + réserves + preuves clés |
+| **D** | LPS intégral |
+| **E** | Progressive disclosure selon rôle/contexte (couche A→C) |
+
+| Opt | Avantages | Limites |
+|---|---|---|
+| A | Simple | Manque gouvernance visible |
+| B | Gouvernance minimale | Preuves absentes |
+| C | Équilibre preuve/gouvernance | Sélection « preuves clés » à définir |
+| D | Complet | Charge / confidentialité |
+| E | Adaptatif | Complexité UX + ACL |
+
+**Permanent (reco C/E) :** identité Project · doctrine pin status · cycle courant (si any) · résumé objectifs.
+**À la demande :** décisions · réserves · preuves clés · trajectoire résumé.
+**Expert :** versions LPS · deltas candidats vs validés · audit refs.
+**Jamais brut :** dumps CKC · raisonnement modèle · secrets.
+
+**Distinction obligatoire :** état **validé** ≠ **delta candidat** (labels épistémiques).
+**Séparation :** LPS ≠ transcript conversation ≠ trajectoire.
+
+**Recommandation candidate :** **C** avec progressive disclosure **E** comme mode d’affichage (C=contenu cible ; E=mécanisme). Si une seule lettre : **C**, en notant E comme précision UX.
+**Avant gate :** UX/UI (**MUST**)
+
+**Formulation Morris :** `D-ASST-FPI-05=C` (ou `C+E` / A/B/D/E)
+
+---
+
+## 4. D-ASST-FPI-06 — Hors-sujet conversationnel
+
+| Champ | Contenu |
+|---|---|
+| **Statut** | NOT DECIDED |
+| **Décision attendue** | Comportement si message hors Project |
+| **Contexte** | `90` §9 · `91` §11 · S15 · V3-F02 F07 |
+| **Fondations** | V3-F02 F05 F07 |
+| **Composants** | Mode Router · Conversation Manager |
+| **Objets** | IntentResolution (hors-sujet) · ConversationMessage |
+
+### Options
+
+| Opt | Description |
+|---|---|
+| **A** | Refus systématique |
+| **B** | Digression mineure, sans mémoire Project |
+| **C** | Réponse complète hors sujet dans le même espace |
+| **D** | Digression mineure + orientation vers espace général |
+
+| Opt | Avantages | Limites |
+|---|---|---|
+| A | Isolation stricte | Friction UX |
+| B | Souplesse | Seuil digression à définir |
+| C | Convivial | Pollution contexte / coût / confusion Project |
+| D | Souplesse + frontière claire | Espace général peut être **absent** → fallback B |
+
+**Seuil digression mineure (candidat fonctionnel, non validé) :** question factuelle courte sans besoin sources Project, sans mutation, ≤ quelques tours, hors décision/cycle/GO.
+**Hors-périmètre :** demande d’action structurante · autre Project · secrets · contournement doctrine.
+
+Règles invariantes (toutes options sauf pollution C) :
+- pas de chargement sources Project ;
+- pas de mutation LPS/trajectoire ;
+- pas de mémorisation comme connaissance Project ;
+- rappel sobre du contexte Project.
+
+Si aucun espace général : appliquer **B** + message « hors périmètre Project ».
+
+**Recommandation candidate :** **D** (fallback B si pas d’espace général)
+**Avant gate :** UX/UI (**MUST**)
+
+**Formulation Morris :** `D-ASST-FPI-06=D`
+
+---
+
+## 5. D-ASST-FPI-11 — Mapping confirmations N1–N3
+
+| Champ | Contenu |
+|---|---|
+| **Statut** | NOT DECIDED |
+| **Décision attendue** | Niveau de confirmation par famille d’actions |
+| **Contexte** | `90` §17 · `91` §15/§24 · CC-D06 · V3-F12 · WA-09 |
+| **Fondations** | V3-F05 F12 · CC-D06 (ne pas modifier le texte CC-D06) |
+| **Composants** | Confirmation Service · Policy · Decision |
+
+### Matrice (niveaux **candidats**)
+
+| Action | Niveau candidat | Justification | Confirm visible | Autorité | Effet possible | Preuve | Erreur si insuffisant |
+|---|---|---|---|---|---|---|---|
+| Réponse explicative | N1 / none | réversible, pas mutation | non | — | réponse | audit msg | — |
+| Lecture Git RO | N1 | read-only | non | read | contenu filtré | ToolInvocation | access denied |
+| Consultation source allowlist | N1 | read-only | non | read | hits | ToolInvocation | source refused |
+| Qualification cycle (proposition) | N1–N2 | proposition vs engagement | discret si N2 | qualify | CycleCandidate | CycleQualification | block formalization |
+| Proposition LPS delta | N1 | propose only | non | propose | LpsDeltaCandidate | audit | — |
+| **Application** LPS delta | **N2** | mutation Project | oui | HumanDecision | LPS apply | Decision+audit | block mutation |
+| Proposition trajectoire | N1 | reco | non | propose | TrajectoryDeltaCandidate | audit | — |
+| **Validation** trajectoire | **N2/N3** | selon criticité | oui | HumanDecision | trajectory validated | Decision | block |
+| Recommandation | N1 | épistémique | non | — | Recommendation | audit | — |
+| Création HumanDecision candidate | N1–N2 | préparation | selon UI | prepare | Decision candidate | audit | — |
+| **Consommation** décision / GO | **N2/N3** | structurant | oui explicite | Decision Authority | consume | Decision record | faux GO non consommé |
+| Préparation ExecutionContract | N2 | contrat engagé conceptuellement | oui | prepare | EC candidate | EC audit | block build |
+| Export Markdown Cursor | N2 | artefact exportable | oui | export | CursorExport | audit | block export |
+| Lancement Cursor **futur** | **N3** | exécution externe | oui fort | exec authority | hors FPI | — | interdit FPI |
+| Git write **futur** | **N3** | irréversible repo | oui fort | write | hors FPI | — | interdit FPI |
+| Merge **futur** | **N3** | structurant repo | oui fort | merge | hors FPI | — | interdit FPI |
+| Changement DoctrinePackage | **N3** | doctrinal | oui fort | Morris | pin change | DoctrineResolution | fail-closed |
+| Dépassement budget | N2 soft / N3 hard override | FinOps | oui si override | admin/Morris | continue/stop | UsageRecord | stop soft/hard |
+| Conservation/suppression conversation | N2 | données personnelles | oui | user/admin | TTL/delete | audit | block delete |
+
+**Règle candidate synthétique :**
+- **N1** : read-only, réversible, sans mutation ;
+- **N2** : validation explicite d’une proposition ou mutation Project bornée / export ;
+- **N3** : décision structurante, package doctrinal, exécution externe, Git futur.
+
+Compatibilité CC-D06 : mapping **précise** CC-D06 sans la réécrire ; écarts éventuels = dette documentaire UX, pas amendement doctrinal ici.
+
+**Recommandation candidate :** matrice ci-dessus (N1/N2/N3 tels que définis)
+**Avant gate :** UX/UI (**MUST** pour surfaces de confirmation)
+
+**Formulation Morris :** `D-ASST-FPI-11=MATRIX_AS_PACKED` ou `D-ASST-FPI-11=ACCEPT_CANDIDATE_MATRIX` (avec réserves éventuelles)
+
+---
+
+# Lane B — Trajectoire
+
+## 6. D-ASST-AF-03 — UX puis Tech ou dual-track
+
+| Champ | Contenu |
+|---|---|
+| **Statut** | NOT DECIDED |
+| **Décision attendue** | Séquencement UX/UI vs Architecture technique |
+| **Contexte** | `91` §41 · D-ASST-FPI-16 chevauche |
+| **Fondations** | V3-F05 F15 |
+
+### Options
+
+| Opt | Description |
+|---|---|
+| **A** | UX/UI intégral avant Tech |
+| **B** | Tech intégral avant UX/UI |
+| **C** | Dual-track borné, contrats d’interface + gates séparés |
+
+| Opt | Avantages | Risques |
+|---|---|---|
+| A | UX ancré avant tech | rework si contraintes OpenAI/Git tardives |
+| B | contraintes tech tôt | UI dictée par tech ; délai valeur visible |
+| C | parallélisme contrôlé | sync overhead ; risque fusion validations |
+
+**Dépendances :** Lane A (04/05/06/11) avant démarrage UX substantiel.
+**Critères démarrage dual-track (candidats) :** Lane A tranchée · AF non bloquée · contrats d’interface (surfaces UX ↔ ports Tech) rédigés · gates UX et Tech **non fusionnés**.
+**Stop conditions :** tentative de valider Tech comme UX ou inversement · scope creep OpenAI live.
+
+**Chevauchement FPI-16 :** traiter FPI-16 comme **alias de priorité** ; décision maîtresse = **AF-03**. Ne pas supprimer FPI-16 ; noter « consolidated under AF-03 ».
+
+**Recommandation candidate :** **C** après arbitrage Lane A
+**Avant gate :** Backlog / planification (**MUST** pour trajectoire) ; recommandé avant lancement parallèle Tech
+
+**Formulation Morris :** `D-ASST-AF-03=C`
+
+---
+
+# Lane C — Avant Architecture technique (consolidé, non consommé)
+
+Chaque entrée : options · reco candidate · urgence MUST BEFORE TECH (sauf note) · impacts synthétiques.
+
+### D-ASST-FPI-02 — Connexion T-A0…T-A7
+Options : façade RO memory · composition verticale partielle · rewrite.
+**Reco candidate :** composition partielle T-A0…T-A4+T-A6 ; T-A5 hors FPI (`91` §34).
+Dette : bridging chat. Impacts : Tech composition, Backlog sizing.
+
+### D-ASST-FPI-03 — Persistance minimale
+Options : memory-only · Project-local · multi-instance.
+**Reco candidate :** Project-local minimale (`90` D-ASST-03).
+RGPD/TTL liés à FPI-08. Impacts : Tech storage.
+
+### D-ASST-FPI-07 — Données Git → OpenAI
+Options : métadonnées · snippets allowlist+redact · fichiers complets.
+**Reco candidate :** métadonnées + snippets allowlist redacted (WA-07).
+Sécurité/RGPD critiques. Impacts : Source Router · redaction.
+
+### D-ASST-FPI-08 — Conservation conversations
+Options : session-only · Project TTL · indéfini.
+**Reco candidate :** Project-bounded TTL (durée ouverte).
+RGPD. Impacts : mémoire · effacement.
+
+### D-ASST-FPI-09 — Modèle fixe ou configurable
+Options : fixe · admin-configurable · user-selectable.
+**Reco candidate :** configurable admin.
+Impacts : Provider · FinOps.
+
+### D-ASST-FPI-10 — OpenAI seul ou port
+Options : OpenAI-only FPI · port multi-provider dès FPI.
+**Reco candidate :** OpenAI-only + port interne minimal (WA-08).
+Impacts : Provider boundary.
+
+### D-ASST-FPI-14 — FinOps
+Options : observabilité only · soft cap · hard cap.
+**Reco candidate :** observabilité + soft cap ; hard cap ouvert.
+Urgence : soft BEFORE TECH/PILOT ; hard BEFORE PILOT.
+
+### D-ASST-FPI-15 — Fallback OpenAI
+Options : fail-closed total · dégradé non structurant · queue retry.
+**Reco candidate :** dégradé non structurant + fail-closed structurant (WA-11).
+Impacts : Policy · UX erreurs.
+
+### D-ASST-AF-01 — Orchestration conversationnelle
+Options : A monolithe fonctionnel · B bus événements · C pipeline étapes.
+**Reco candidate :** **C pipeline étapes** (aligné chaîne nominale `91` §10) — NOT DECIDED.
+MUST BEFORE TECH. Impacts : domaines 2–15.
+
+### D-ASST-AF-02 — Validation sortie structurée
+Options : A champs obligatoires stricts · B progressive.
+**Reco candidate :** **A pour actions structurantes** ; B pour free talk — NOT DECIDED.
+MUST BEFORE TECH. Impacts : Validator · fail-closed.
+
+**Section DEFERRED — NOT DECIDED (Lane C) :** toutes les décisions Lane C ci-dessus restent non consommées jusqu’à GO dédié Tech / Decisions ultérieur.
+
+---
+
+# Lane D — Différables
+
+### D-ASST-FPI-01 — Périmètre exact FPI
+Options A/B/C du cadrage ; **reco B**. MUST BEFORE BACKLOG. Peut être affiné après UX.
+
+### D-ASST-FPI-12 — Niveau préparation Cursor
+**Reco :** EC draft + export MD (WA-10). CAN DEFER DELIVERY.
+
+### D-ASST-FPI-13 — Pilote réel
+**Reco :** Morris-only puis restreint. MUST BEFORE PILOT / CAN DEFER.
+
+### D-ASST-FPI-16 — Priorité UX/backend
+**Consolidation :** subordonnée à **D-ASST-AF-03** ; conserver l’ID ; ne pas double-arbitrer sans référencer AF-03.
+
+Règle de consolidation historique : **ne supprimer aucun ID** ; annoter `superseded-by` / `master-decision` dans ce pack uniquement.
+
+---
+
+# Lane E — Gouvernance handoff
+
+## 7. D-ASST-AF-04 — Autorité de preuve tip/blob Review Handoff
+
+| Champ | Contenu |
+|---|---|
+| **Statut** | NOT DECIDED — MORRIS DECISION REQUIRED |
+| **Décision attendue** | Comment prouver tip/blob finaux sans boucle auto-référentielle |
+| **Contexte** | Handoff AF : plusieurs commits (parent → tip) ; un fichier ne peut pas contenir son propre SHA final sans nouveau commit |
+| **Fondations** | V3-F07 F14 (preuve) · gouvernance cycle v2.6 (handoff L3) |
+
+### Options
+
+| Opt | Description |
+|---|---|
+| **A** | Exigence auto-référentielle stricte (tip/blob dans le fichier = tip courant) |
+| **B** | Handoff = parent + contenu + verdict + message ; tip/blob vérifiés **extérieurement** (rapport Cursor + ChatGPT) |
+| **C** | Manifeste immuable / preuve séparée future |
+| **D** | Ne plus enregistrer d’identité Git |
+
+| Opt | Avantages | Limites |
+|---|---|---|
+| A | Idéal théorique | Boucle refresh infinie |
+| B | Pratique immédiate ; mono-commit | Discipline vérification externe |
+| C | Preuve durable | Effort méthode/outillage ; GO méthode futur |
+| D | Simple | Perte traçabilité |
+
+**Contraintes pack :** ne modifie pas template/méthode dans ce cycle · preuve **projet** seulement · promotion méthode = GO séparé · **un seul commit** handoff pour ce cycle · pas de second refresh pour recopier tip · rapport Cursor + validation ChatGPT portent l’identité post-publication.
+
+**Recommandation candidate :** **B** maintenant ; **C** amélioration future
+**Avant gate :** applicable immédiatement à la publication de **ce** Decision Pack
+
+**Formulation Morris :** `D-ASST-AF-04=B`
+
+---
+
+## 8. Risques et dette du pack
+
+| Risque | Mitigation |
+|---|---|
+| Ouvrir UX sans Lane A | bloquer GO UX/UI jusqu’à 04/05/06/11 |
+| Double décision FPI-16 / AF-03 | master = AF-03 |
+| Reco prises pour décisions | anti-claims + statut NOT DECIDED |
+| Mapping N1–N3 incomplet en UX | matrice §5 comme contrat d’entrée UX |
+| Boucle handoff | AF-04=B + mono-commit |
+
+Dette acceptée candidate : TTL conversation ouvert · seuils digression qualitatifs · « preuves clés » LPS à préciser en UX · CC-D06 non amendé.
+
+---
+
+## 9. Recommandations candidates (synthèse)
+
+| ID | Reco candidate |
+|---|---|
+| D-ASST-FPI-04 | **D** |
+| D-ASST-FPI-05 | **C** (+ progressive disclosure) |
+| D-ASST-FPI-06 | **D** (fallback B) |
+| D-ASST-FPI-11 | **ACCEPT_CANDIDATE_MATRIX** |
+| D-ASST-AF-03 | **C** |
+| D-ASST-AF-04 | **B** |
+| Lane C / D | voir §§ Lane C–D — DEFERRED — NOT DECIDED |
+
+---
+
+## 10. Bloc prêt à copier pour Morris (NON EXÉCUTÉ)
+
+```text
+GO DECISIONS ARCHITECTURE FONCTIONNELLE SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI —
+APPLY
+D-ASST-FPI-04=<OPTION>
+D-ASST-FPI-05=<OPTION>
+D-ASST-FPI-06=<OPTION>
+D-ASST-FPI-11=<OPTION>
+D-ASST-AF-03=<OPTION>
+D-ASST-AF-04=<OPTION>
+
+DEFERRED — NOT DECIDED
+D-ASST-AF-01
+D-ASST-AF-02
+D-ASST-FPI-01
+D-ASST-FPI-02
+D-ASST-FPI-03
+D-ASST-FPI-07
+D-ASST-FPI-08
+D-ASST-FPI-09
+D-ASST-FPI-10
+D-ASST-FPI-12
+D-ASST-FPI-13
+D-ASST-FPI-14
+D-ASST-FPI-15
+D-ASST-FPI-16
+```
+
+Valeurs candidates suggérées (non appliquées) :
+`D=D`, `05=C`, `06=D`, `11=ACCEPT_CANDIDATE_MATRIX`, `AF-03=C`, `AF-04=B`.
+
+---
+
+## 11. Prochaine gate candidate
+
+`GO DECISIONS ARCHITECTURE FONCTIONNELLE SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — APPLY SELECTED DECISIONS`
+
+Statut : **candidate uniquement — non consommée**.
+
+Le GO UX/UI reste **bloqué** jusqu’à décision explicite sur D-ASST-FPI-04, 05, 06 et 11.
+
+---
+
+## 12. Verdict documentaire
+
+**FUNCTIONAL ARCHITECTURE DECISION PACK COMPLETE — UX/UI BLOCKING DECISIONS D-ASST-FPI-04, D-ASST-FPI-05, D-ASST-FPI-06 AND D-ASST-FPI-11 FULLY PREPARED — TRAJECTORY AND HANDOFF GOVERNANCE OPTIONS PREPARED — NO DECISION CONSUMED — READY FOR MORRIS DECISION**

```

## 17. Lane A

D-ASST-FPI-04 reco **D** · 05 reco **C** (+ progressive disclosure) · 06 reco **D** (fallback B) · 11 reco **ACCEPT_CANDIDATE_MATRIX** — toutes NOT DECIDED ; détail dans §14.

## 18. Lane B

D-ASST-AF-03 reco **C** dual-track borné — NOT DECIDED. FPI-16 subordonné à AF-03.

## 19–20. Lane C et D

Lane C (02,03,07,08,09,10,14,15,AF-01,AF-02) consolidées DEFERRED — NOT DECIDED.
Lane D (01,12,13,16) différables ; 16 consolidated under AF-03.

## 21. D-ASST-AF-04

Reco candidate **B** — tip/blob externes (rapport Cursor + ChatGPT) ; mono-commit handoff ; C future. NOT DECIDED.

## 22–24. Matrice / recommandations / formulation Morris

Voir document §§1, 9, 10 (reproduits en §14). Bloc APPLY prêt à copier — **non exécuté**.

## 25. Décisions différées

Liste DEFERRED dans document §10.

## 26–27. Risques / dette

Voir document §8.

## 28. Validations

```
=== VALIDATIONS ===
2026-08-04 23:21:40 CEST +0200
doc90=2d5a03f366e5291e54b6617ada972158763199bf918bea01f031d4212b1a78b2  projects/sfia-studio/90-assistant-sfia-native-openai-first-product-increment-framing.md
doc91=0517aa6c3091f63f0b5c69d40d123fa715dbfb4429d02681ea0398a9588e83e1  projects/sfia-studio/91-assistant-sfia-native-openai-first-product-increment-functional-architecture.md
doc92=0af5a9063705859abddceea0f1f5184b55c35a04e94b71648b139bb592c841d4  projects/sfia-studio/92-assistant-sfia-native-openai-functional-architecture-decision-pack.md
lines92=     473
24:## 0. Objet et anti-claims
34:## 1. Matrice décisions → gates
61:# Lane A — Décisions requises avant UX/UI
63:## 2. D-ASST-FPI-04 — Visibilité du routage
111:## 3. D-ASST-FPI-05 — Contenu visible du LPS
156:## 4. D-ASST-FPI-06 — Hors-sujet conversationnel
201:## 5. D-ASST-FPI-11 — Mapping confirmations N1–N3
249:# Lane B — Trajectoire
251:## 6. D-ASST-AF-03 — UX puis Tech ou dual-track
287:# Lane C — Avant Architecture technique (consolidé, non consommé)
345:# Lane D — Différables
363:# Lane E — Gouvernance handoff
365:## 7. D-ASST-AF-04 — Autorité de preuve tip/blob Review Handoff
399:## 8. Risques et dette du pack
413:## 9. Recommandations candidates (synthèse)
427:## 10. Bloc prêt à copier pour Morris (NON EXÉCUTÉ)
461:## 11. Prochaine gate candidate
471:## 12. Verdict documentaire
NONE_TODO
NONE_SECRET
67:| **Statut** | NOT DECIDED — MORRIS DECISION REQUIRED |
115:| **Statut** | NOT DECIDED |
160:| **Statut** | NOT DECIDED |
205:| **Statut** | NOT DECIDED |
255:| **Statut** | NOT DECIDED |
369:| **Statut** | NOT DECIDED — MORRIS DECISION REQUIRED |
doctrine_dirty=       0
app_code_dirty=       0

```

PASS : options distinctes · reco candidates · aucune décision consommée · cohérence 90/91/v3 · UX/Tech/Backlog distingués · pas de choix tech prématuré · 90/91/doctrine/code inchangés.

## 29. Fichiers créés

`92-…decision-pack.md` · `.tmp-sfia-review/**`

## 30–34. Absences

90/91 non modifiés · doctrine non modifiée · pas de code · pas d’implémentation OpenAI · pas de commit/push projet.

## 35. Local Git Truth final réel

```
2026-08-04 23:21:41 CEST +0200
2026-08-04 21:21:41 UTC
branch=arbitration/sfia-studio-assistant-sfia-native-openai-functional-architecture
HEAD=8dc54db0069eed78a8d8930cc2b035450ab56ad1
origin_main=8dc54db0069eed78a8d8930cc2b035450ab56ad1
ahead=0 behind=0
?? .tmp-sfia-review/
?? projects/sfia-studio/90-assistant-sfia-native-openai-first-product-increment-framing.md
?? projects/sfia-studio/91-assistant-sfia-native-openai-first-product-increment-functional-architecture.md
?? projects/sfia-studio/92-assistant-sfia-native-openai-functional-architecture-decision-pack.md
?? projects/sfia-studio/app/.tmp-sfia-review/
doc90=2d5a03f366e5291e54b6617ada972158763199bf918bea01f031d4212b1a78b2  projects/sfia-studio/90-assistant-sfia-native-openai-first-product-increment-framing.md
doc91=0517aa6c3091f63f0b5c69d40d123fa715dbfb4429d02681ea0398a9588e83e1  projects/sfia-studio/91-assistant-sfia-native-openai-first-product-increment-functional-architecture.md
doc92=0af5a9063705859abddceea0f1f5184b55c35a04e94b71648b139bb592c841d4  projects/sfia-studio/92-assistant-sfia-native-openai-functional-architecture-decision-pack.md
```

Note : tip/blob handoff post-publication vérifiés extérieurement dans le rapport Cursor (règle mono-commit / AF-04-B candidate).

## 36. Review Handoff

Mode : publish-in-cycle · **exactement un commit** · pas de refresh auto-référentiel (D-ASST-AF-04 candidat B / règle projet).
Parent avant publication : `559cfa51d402a440f437a55f0672e51da47fd774`
Message : docs(review-handoff): publish Assistant SFIA functional architecture decision pack
Le handoff **ne contient pas** son tip/blob finaux ; identité Git post-publication reportée **extérieurement** dans le rapport Cursor.

Parent attendu : 559cfa51d402a440f437a55f0672e51da47fd774
Tip/blob finaux : reportés après publication externe (pas dans ce fichier).


## 37. Verdict

FUNCTIONAL ARCHITECTURE DECISION PACK COMPLETE —
UX/UI BLOCKING DECISIONS D-ASST-FPI-04, D-ASST-FPI-05, D-ASST-FPI-06 AND D-ASST-FPI-11 FULLY PREPARED —
TRAJECTORY AND HANDOFF GOVERNANCE OPTIONS PREPARED —
NO DECISION CONSUMED —
READY FOR MORRIS DECISION

## 38. Prochaine gate candidate

GO DECISIONS ARCHITECTURE FONCTIONNELLE SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — APPLY SELECTED DECISIONS

Statut : candidate uniquement — non consommée
GO UX/UI bloqué jusqu’à 04/05/06/11.
