# SFIA Review Pack — FULL — UX D1 Conversational Convergence

## Niveau
FULL

## Métadonnées

| Champ | Valeur |
|-------|--------|
| Date/heure | 2026-07-23 12:06:59 CEST (+0200) Truth Check ; pack 12:11:28 CEST |
| Fuseau | Europe/Paris |
| Cycle | 4 — UX/UI · UX D1 — Conversational Convergence |
| Profil | Critical |
| Typologie | DOC / UX |
| Gate consommé | `GO UX D1 — CONVERSATIONAL CONVERGENCE` |
| Repo | mcleland147/sfia-workspace |
| Worktree | /Users/morris/Projects/sfia-workspace-d1-conversational-convergence |
| Branche | `ux/sfia-studio-d1-conversational-convergence` |
| HEAD (départ connu) | `2888b7e1c8643236c1ecee1fd8f01aa227ddc3cc` |
| HEAD (final) | `5cb285a78ed59bab09953bf0066b8f842b38ebde` |
| origin/main | `2014e941f548c519d152ebc70d0d4ddad29a6397` |
| merge-base HEAD origin/main | `416af8a5b3a8e41a996cfc52220465ab0a5b13ca` |
| Commit local | `docs(sfia-studio): consolidate D1 conversational convergence with CKC` |
| Push branche UX | **non** |
| PR / merge | **non** |
| Code modifié ce cycle | **non** |
| Doc 86 | **absent** (réservé LPV) |

## Verdict

**UX D1 CONVERSATIONAL CONVERGENCE READY — MORRIS UX DECISIONS REQUIRED**

## Gate suivant candidat

`GO MORRIS UX DECISIONS — STUDIO CONVERSATIONAL CONVERGENCE`
(alternatif après décisions : `GO UX VALIDATION — STUDIO CONVERSATIONAL FLOW`)

---

## 1. Local Git Truth Check

| Contrôle | Résultat |
|----------|----------|
| pwd | `/Users/morris/Projects/sfia-workspace-d1-conversational-convergence` |
| remote | `origin` → `mcleland147/sfia-workspace.git` |
| fetch | OK |
| branche | `ux/sfia-studio-d1-conversational-convergence` |
| HEAD initial | `2888b7e…` (confirmé) |
| HEAD final | `5cb285a…` |
| origin/main | `2014e941…` (PR #258) |
| staged initial | vide |
| untracked | `.tmp-sfia-review/` seulement |
| lock | NO_LOCK |
| branche remote UX | **absente** (`ls-remote` vide) — locale conservée, **non recréée**, **non poussée** |
| app/** dans ce cycle | **non modifié** (héritage commits delivery parent dans l’ancestry vs main — hors commits UX) |
| dernier handoff distant (pré-cycle) | `9b43160…` CKC post-merge |

**Stop conditions** : aucune.

---

## 2. CKC et fallback

| Champ | Valeur |
|-------|--------|
| recherché | oui |
| cycle | 4 UX/UI |
| contrat trouvé | non |
| statut | absent |
| usage | experimental cognitive guidance |
| autorité | aucune |
| fallback | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md` + méthode SFIA v2.6 |
| limites | ne pas inventer de CKC UX complet |

Intégration UX : CKC **opaque** (87 §4bis · 89 §2.3 · 88 §4) — fallback silencieux (scénario P5).

---

## 3. Sources consultées

### Depuis main (`2014e941…` / worktree main-ckc-postmerge)

- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` (§4.4.5)
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-knowledge-layer.md`
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md`
- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/README.md`

### Depuis branche UX

- `87` · `88` · (créé) `89`
- README Studio (entrées 86–89)
- Docs UX historiques 14–16, 51–53 (contexte)
- Handoff antérieur local `.tmp-sfia-review/chatgpt-review.md` (cycle design)

### Distant

- `origin/sfia/review-handoff` @ `9b43160…` (pré-publish)

---

## 4. Documents UX retrouvés

| Doc | État |
|-----|------|
| 86 | **absent** (réservé LPV) |
| 87 | existait @ `ec2798c` / `2888b7e` — **mis à jour** |
| 88 | existait @ `2888b7e` — **mis à jour** |
| 89 | **créé** |
| Figma | `8xR5zSTfGtEVZSr6KK8Gww` — 12 frames LF **confirmées** MCP |

---

## 5. État initial → final

| | Initial | Final |
|--|---------|-------|
| HEAD | `2888b7e` | `5cb285a` |
| 87/88 | candidats design | alignés CKC + refs 89 |
| 89 | absent | decision pack complet |
| Décisions Morris CC-D* | ouvertes (liste 87) | ouvertes formalisées registre 89 |
| Figma | 12 frames | inchangé (pas d’écriture) |

---

## 6. Synthèse livrables

1. **Audit** — matrice `89` §1
2. **Modèle cible** — `89` §2 + `87` trajectoire
3. **Conversation** — `89` §3
4. **Panneau vivant** — `89` §4 · `88` §4
5. **Confirmations** — `89` §5 · `88` §7
6. **États** — `89` §6
7. **Scénarios 1/2/6/9** — `89` §8.1–8.4
8. **Fallback** — `89` §8.5
9. **Registre Morris** — `89` §9 (CC-D01…D18, colonne Décision vide)
10. **Contrat visuel** — `88` mis à jour
11. **Frames** — `88` §13 confirmées
12. **Réserves / dette** — `89` §11–12
13. **Trajectoire conception fct** — `89` §10

---

## 7. Figma / frames / dimensions

| Item | Valeur |
|------|--------|
| fileKey | `8xR5zSTfGtEVZSr6KK8Gww` |
| page | `D1 — Conversational Convergence (LF)` `0:1` |
| frames | CC-01…CC-12 (node-ids `2:2` … `2:230`) |
| desktop | 1440×1024 |
| mobile | 390×844 (CC-12) |
| écriture Figma ce cycle | **aucune** |
| claim visual validated | **non** |

---

## 8. Fichiers créés / modifiés

| Fichier | Action |
|---------|--------|
| `projects/sfia-studio/89-d1-conversational-convergence-decision-pack.md` | A |
| `projects/sfia-studio/87-d1-conversational-convergence-ux-functional-design.md` | M |
| `projects/sfia-studio/88-d1-conversational-convergence-visual-contract.md` | M |
| `projects/sfia-studio/README.md` | M |
| `.tmp-sfia-review/chatgpt-review.md` | remplacé (local) |

---

## 9. Validations

| Contrôle | Résultat |
|----------|----------|
| git status | clean hors `.tmp-sfia-review/` |
| git diff --check HEAD~1..HEAD | PASS |
| cohérence UX docs | PASS |
| 4 pilotes + fallback | PASS |
| hypothèse ≠ décision | PASS |
| CKC non exposé | PASS |
| code / doctrine / main | non touchés |
| UX READY / VISUAL VALIDATED | **non claimés** |

---

## 10. Réserves / dette / non exécuté

Voir `89` §11–13. Points clés : LPV ouverte · runtime ≠ cible · panneau LF incomplet vs §4 · branche UX locale seulement · onze CKC non créés · pas de push/PR/Delivery.

---

## 11. État Git final

```
branche: ux/sfia-studio-d1-conversational-convergence
HEAD: 5cb285a78ed59bab09953bf0066b8f842b38ebde
origin/main: 2014e941f548c519d152ebc70d0d4ddad29a6397
push UX: non
```

---

## 12. Contenu complet — document créé `89`

# SFIA Studio — D1 Conversational Convergence — Decision pack & convergence

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `89-d1-conversational-convergence-decision-pack.md` |
| **Complète** | `87` (conception) · `88` (contrat visuel) |
| **Statut** | `ux-decision-pack-candidate` — **recommandations Cursor** ; **Décision Morris** non remplie sauf trace Git antérieure |
| **Cycle** | 4 — UX/UI · UX D1 — Conversational Convergence |
| **Profil** | Critical |
| **Gate consommé** | `GO UX D1 — CONVERSATIONAL CONVERGENCE` |
| **Branche** | `ux/sfia-studio-d1-conversational-convergence` |
| **Baseline méthode** | SFIA v2.6 |
| **CKC** | Cycle 4 UX/UI — **absent détaillé** · fallback carte synthétique + méthode v2.6 · **aucune autorité d’exécution** |
| **Doc 86** | **Réservé** LPV — **non créé** |
| **Figma** | `8xR5zSTfGtEVZSr6KK8Gww` — page `D1 — Conversational Convergence (LF)` |

> Formulations : **Observation** · **Hypothèse** · **Option** · **Recommandation** · **Décision Morris**.
> Ce document **ne décide pas**. Aucune claim « UX READY », « VISUAL VALIDATED », « RUNTIME MATCHED », « CKC ADOPTED », « DELIVERY AUTHORIZED ».

---

## 1. Audit de convergence UX

| Élément UX | État actuel | Source | Cohérent nouvelle doctrine (v2.6 + CKC candidat) | Décision requise |
|------------|-------------|--------|--------------------------------------------------|------------------|
| Structure générale écran | Formulaire enrichi vertical (runtime) ; Option A documentée (2 col.) | Runtime IntakeView · `87` §14 · `88` §2 | Partiel — cible conversationnelle documentée, runtime non aligné | CC-D01 architecture A/B/C |
| Rôle conversation | Fil partiel ; CTA globaux décorrélés | LPV U01 · `87` §2 | Faible côté runtime ; fort côté docs candidats | CC-D02 conversation dominante |
| Panneau latéral | Absent runtime ; « Synthèse vivante » en Figma LF | `88` frames CC-01…12 | Partiel — à enrichir en « état projet vivant » sans CKC brut | CC-D03 panneau vivant |
| Navigation | `/nouvelle-demande` → cockpit | `87` §14 · `88` §2 | OK conceptuel | CC-D04 nav artefacts |
| État projet | Session locale ; pas d’état vivant unifié | Runtime · `87` §8–9 | À formaliser (cycle ≠ projet) | CC-D13 projet vs cycle |
| Décisions | CTA confondent reco / action | LPV · `87` §7 | Tags épistémiques candidats | CC-D05 exposition décisions |
| Gates Morris | Peu visibles en UI | Doctrine · Operating Model | À rendre explicites sans jargon CKC | CC-D05 / CC-D06 |
| Progression cycle | Matching/confirm trop tôt | LPV C4 | Bornage après convergence | CC-D06 confirmations |
| Feedback système | Loading/timeout améliorés (60 s) | PR #257 · `88` §9 | OK base | — |
| Historique | Fil simple | Runtime | Repliable par épisode (candidat) | CC-D10 historique |
| Documents / preuves | Sources repliables (candidat) | `87` §9 · `88` | OK | CC-D11 sources |
| Fallback CKC | Non représenté UX (nouveau post-#258) | Carte `02-…` · matrice 04 | À intégrer **en arrière-plan** | CC-D12 fallback |
| Erreurs | Banner + retry | `88` §9 | OK | — |
| Attentes / empty | Invitation courte | Figma CC-01 | OK | — |
| Chargement | `aria-busy` + message 60 s | `88` §3 | OK | — |
| Responsive | Contrats 1440/1280/1024/390 | `88` §1, §10 | Documenté LF ; non validé runtime | CC-D08 / CC-D09 |
| Accessibilité | Contrat a11y | `88` §11 | Documenté ; non validé | — |
| Exposition CKC | Aucune (correct) | Gate · README CKC | **Doit rester invisible** comme formulaire | CC-D12 (garder opaque) |

---

## 2. Modèle d’expérience conversationnelle cible

### 2.1 Chaîne UX

```
intention utilisateur
  → compréhension conversationnelle
  → qualification candidate du cycle (interne)
  → résolution cognitive interne (CKC pilote OU fallback — jamais UI formulaire)
  → questions contextualisées (1–3, non checklist 25 sections)
  → mise à jour de l’état projet vivant (panneau)
  → synthèse / options (trajectoires dynamiques)
  → recommandation (taguée, non exécutable)
  → décision Morris / humaine explicite
  → confirmation structurante
  → préparation du contrat d’exécution (prompt Cursor / effets bornés)
```

### 2.2 Couches

| Couche | Contenu | Visible utilisateur | Persisté | Confirmation |
|--------|---------|---------------------|----------|--------------|
| Vu | Messages, questions, synthèse, trajectoires, panneau, confirmations | Oui | Session UI (+ snapshot si autorisé) | Selon gate |
| Raisonné (arrière-plan) | Qualification cycle, résolution CKC/fallback, maturité, matching | Non (effets seulement) | Traces audit discrètes optionnelles | Non |
| Hypothèse | Items tagués « Hypothèse » | Oui | Oui (statut `proposed`) | Non = pas décision |
| Recommandation | Cartes trajectoire / texte GPT | Oui | Oui | Non |
| Décision validée | Item « Décision » après acte humain explicite | Oui | Oui (`validated`) | Oui si structurante |
| Contrat d’exécution | Effets / non-effets préparés | Oui en préparation | Oui | Confirmation avant mutation |

### 2.3 CKC — posture UX (obligatoire)

| Règle | Application UX |
|-------|----------------|
| CKC = guidance cognitive candidate | Influence questions, challenges, ordre de clarification |
| Aucune autorité d’exécution | Jamais CTA « Appliquer le CKC » |
| Non exposé | Pas de questionnaire 25 sections ; pas de « dimensions CKC » permanentes |
| Absent (cycle 4 UX) | Fallback silencieux : carte synthétique + méthode v2.6 |
| Fallback ≠ erreur | Pas de banner « CKC manquant » pour l’utilisateur |
| Prompt Cursor | Reste le contrat d’exécution final (hors surface chat libre) |

---

## 3. Conversation principale

### 3.1 Intentions couvertes

Découvrir besoin · clarifier · contester · enrichir · choisir trajectoire · préparer action · pauser · abandonner · reprendre session.

### 3.2 Types de messages

| Type | Producteur | Rôle |
|------|------------|------|
| Intention / correction | Humain | Entrée libre |
| Compréhension | GPT | Reformulation courte |
| Challenge | GPT | 1–3 questions ciblées |
| Synthèse annoncée | GPT | Pointe vers panneau |
| Recommandation | GPT | Trajectoire non exécutée |
| Réserve / contradiction | GPT / Studio | Signal explicite |
| Confirmation demandée | Studio | Avant mutation |
| Système | Studio | Loading, erreur, anti-claim |

### 3.3 Artefacts conversationnels

- Questions contextualisées (jamais dump CKC).
- Synthèses référencées (pas monologue).
- Challenges non bloquants (chips).
- Recommandations distinctes des décisions.
- Réserves visibles.
- Confirmations (lien vers surface structurante).
- Pièces jointes / preuves : liens sources, captures futures (LPV), digests — **repliés**.

---

## 4. Panneau latéral vivant (« état utile »)

Limiter le contenu **visible** à :

| Bloc | Contenu | Notes |
|------|---------|-------|
| Cycle courant | Label candidat ou « non qualifié » | Proposition ≠ cycle ouvert |
| Objectif | Texte validable | |
| Périmètre | Texte / bullets | |
| Progression | Bande qualitative (exploratoire → prête à borner) | Pas de % |
| Hypothèses | Liste courte taguée | |
| Décisions validées | Liste humaine | |
| Décisions ouvertes | Gate / arbitrages | |
| Risques | Liste courte | |
| Réserves | Dont LPV / doctrine | |
| Livrables | Attendus du cycle / session | |
| Gate courant | Ex. « Décision humaine » / « Confirmation création » | Libellé métier |
| Prochaine étape | Une phrase | |

**Interdit en panneau permanent :** dimensions brutes CKC, 25 sections, score % trompeur, « CKC absent », raw digests techniques.

**Mobile :** bottom sheet / FAB « État » (même contenu).

---

## 5. Confirmations structurantes

Confirmation **plein écran ou modale renforcée** lorsque :

| Cas | Gate UX | Mutation |
|-----|---------|----------|
| Validation de cadrage (bornage intention/périmètre) | `human_confirm` | Non (état) |
| Choix de cycle structurant (proposition de cycle) | `morris_go` / humain | Non (préparation) |
| Modification majeure de périmètre | `human_confirm` | Non jusqu’à confirm |
| Arbitrage architecture (futur) | `morris_go` | Hors D1 intake |
| Lancement Delivery | `morris_go` | Hors ce cycle UX |
| Publication Git / PR / merge | `morris_go` | Hors surface Studio intake |
| Promotion méthode / baseline | `morris_go` | Interdit ici |
| Création Project | `human_confirm` | Oui (C4) |
| Reprise Project | `human_confirm` | NO_MUTATION |
| Action irréversible | `human_confirm` | Selon effet |

**Règle.** Aucune exécution automatique d’un arbitrage structurant. Composer désactivé seulement pendant modal stricte.

---

## 6. États conversationnels

| État | Sens UX | CKC / fallback |
|------|---------|----------------|
| découverte | Intention libre | Résolution interne silencieuse |
| clarification | Questions ciblées | Guide quelles questions |
| analyse | Matching / lecture sources | Opaque |
| synthèse | Panneau peuplé | Opaque |
| recommandation | Trajectoires | Opaque |
| attente de décision | CTA humain | — |
| décision validée | Tag Décision | — |
| réserve | Blocage soft | — |
| contradiction | Alerte sans présélection | — |
| fallback CKC | Guidage léger | **Transparent** (pas d’erreur UX) |
| source manquante | Message actionnable | — |
| Git indisponible | Banner ; pas de mutation Git | — |
| exécution préparée | Contrat effets affiché | — |
| exécution bloquée | Garde-fou | — |
| reprise de cycle | Snapshot / reprise session | — |
| cycle clôturé | Anti-claim si non ouvert | — |

Ne pas figer une machine à états Delivery unique sans CC-D01.

---

## 7. Règles de transformation cognitive

1. Une phrase utilisateur **ne devient pas** automatiquement une décision.
2. Une recommandation GPT **reste** une recommandation.
3. Une option / trajectoire **reste distincte** d’une décision.
4. Une décision Morris / humaine doit être **explicitement identifiée** (tag + acte).
5. Les contradictions doivent être **signalées**.
6. Informations insuffisantes → **questions ciblées** (budget 1–3).
7. Les questions **varient** selon contexte / cycle qualifié.
8. Le CKC **ne devient pas** une checklist mécanique.
9. L’absence de CKC détaillé **ne bloque pas** le cycle.
10. Le fallback **n’est pas** exposé comme erreur utilisateur.
11. Le prompt Cursor **reste** le contrat d’exécution final.

---

## 8. Scénarios — quatre pilotes CKC + fallback

> Les pilotes testent la **cohérence du modèle UX** Studio. Ils n’impliquent pas l’adoption des CKC ni l’ouverture de ces cycles dans D1 intake.

### 8.1 Scénario P1 — Cadrage (CKC pilote 01)

| Champ | Contenu |
|-------|---------|
| Entrée | « On doit cadrer un outil de suivi de contrats pour le commercial et le juridique. » |
| Comportement | Challenge besoin≠solution ; questions finalité / parties / contraintes / succès / inconnues |
| Demandé | Périmètre, hors-scope, critères de succès — **pas** formulaire CKC |
| Panneau | Cycle candidat « Cadrage » · objectif · hypothèses · questions · gate « Décision de cadrage » |
| Hypothèses | Acteurs, canal, urgence |
| Risques | Scope flou ; Critical implicite |
| Gate Morris | Validation brief / périmètre fermé |
| Confirmation | Plein cadre si bornage retenu |
| Sortie | Synthèse cadrage + trajectoires (conception / backlog / pause) — **Cycle non ouvert** auto |

### 8.2 Scénario P2 — Conception fonctionnelle (CKC pilote 02)

| Champ | Contenu |
|-------|---------|
| Entrée | « Spécifier les règles d’accès et le parcours de création d’un contrat. » |
| Comportement | Usagers, parcours, règles, exceptions ; refuse technique trop tôt |
| Demandé | Acteurs, règles métier, exceptions |
| Panneau | Cycle « Conception fonctionnelle » · livrables « Spec bornée » · réserves |
| Hypothèses | Périmètre déjà cadré |
| Risques | Technique prématurée |
| Gate | Validation spec / règles critiques |
| Confirmation | Si gel de règles structurantes |
| Sortie | Spec candidate + options UX / archi — sans Delivery |

### 8.3 Scénario P3 — Architecture technique (CKC pilote 03)

| Champ | Contenu |
|-------|---------|
| Entrée | « Faut-il SQLite local ou un backend partagé ? » |
| Comportement | Options & trade-offs ; NFR ; dette ; **pas** d’ADR implicite |
| Demandé | Contraintes prod, sécurité, coût |
| Panneau | Cycle « Architecture technique » · décisions ouvertes · risques |
| Hypothèses | Contexte Project existant |
| Risques | Décision implicite |
| Gate Morris | Arbitrage ADR |
| Confirmation | **Toujours** avant claim « stack choisie » |
| Sortie | Options + reco — décision Morris obligatoire |

### 8.4 Scénario P4 — QA / validation (CKC pilote 04)

| Champ | Contenu |
|-------|---------|
| Entrée | « Est-ce que la convergence D1 est validée ? » |
| Comportement | Evidence-based ; négatifs ; sévérité ; refuse QA symbolique |
| Demandé | Preuves Figma / runtime / docs |
| Panneau | Réserves · preuves manquantes · verdict candidat |
| Hypothèses | Couverture LF seule |
| Risques | Faux « UX READY » |
| Gate | Morris validation UX |
| Confirmation | Aucune claim visuelle sans preuves |
| Sortie | Verdict + réserves (ex. LPV, runtime match) |

### 8.5 Scénario P5 — Cycle sans CKC détaillé (ex. UX/UI #4 ou Delivery #8)

| Champ | Contenu |
|-------|---------|
| Entrée | Intention relevant d’un cycle **sans** pilote (ex. ce cycle UX lui-même, ou Delivery) |
| Comportement | Fallback **transparent** : carte synthétique + méthode v2.6 ; questions légères |
| Demandé | Selon posture cycle (fidélité vs exploration pour UX) |
| Panneau | Cycle candidat libellé métier · **pas** de message « CKC manquant » |
| Hypothèses | Couverture CKC incomplète (trace interne seulement) |
| Risques | Invention d’un faux contrat |
| Gate | Selon criticité |
| Confirmation | Inchangée |
| Sortie | Expérience continue · **aucune invention** · **aucune rupture** |

---

## 9. Registre des décisions Morris

| ID | Sujet | Options | Impacts | Dette | Recommandation ChatGPT / Cursor | Décision Morris |
|----|-------|---------|---------|-------|----------------------------------|-----------------|
| CC-D01 | Structure principale écran | A conversation+panneau · B étapes · C workspace hybride | Refonte IntakeView ; a11y ; mobile | Runtime actuel formulaire | **A** + confirmation plein cadre | *(ouverte)* |
| CC-D02 | Conversation dominante vs étapes | Dominante libre · stepper souple | Pédagogie vs liberté | Sync étapes | Dominante libre (A) | *(ouverte)* |
| CC-D03 | Panneau latéral — largeur / comportement | 360–400 @1440 · 320 @1280 · sheet ≤1024 | Densité ; ignore risque | Refonte layout | Sticky complémentaire `aria` | *(ouverte)* |
| CC-D04 | Nav conversation ↔ artefacts | Inline · onglets · drawer | Charge cognitive | — | Inline + sheet preuves | *(ouverte)* |
| CC-D05 | Visibilité cycle courant + décisions | Toujours · on-demand · desktop-only | Confusion cycle ouvert | Labels anti-claim | Toujours dans panneau (candidat) | *(ouverte)* |
| CC-D06 | Format confirmations | Plein cadre · panneau · dialog | Erreurs de mutation | Routes | Plein cadre create/reprise ; dialog pause | *(ouverte)* |
| CC-D07 | Densité compacte vs détaillée | Compact pro · confortable · dense | Lisibilité | — | Compact professionnel | *(ouverte)* |
| CC-D08 | Responsive | 1440-only · set `88` · mobile first | Coût Delivery | R-UX historique | Set `88` (1440/1280/1024/390) | *(ouverte)* |
| CC-D09 | Comportement mobile | Sheet synthèse · FAB · split | A11y | Frame CC-12 LF | FAB + sheet | *(ouverte)* |
| CC-D10 | Historique conversationnel | Linéaire · épisodes repliables | Perf perçue | — | Épisodes + ancre synthèse | *(ouverte)* |
| CC-D11 | Représentation maturité / sources | Bandes+dimensions · % · masqué | Confiance | Contrat C2 score | Bandes + dimensions courtes ; sources repliées | *(ouverte)* |
| CC-D12 | Traitement fallback CKC | Silencieux · badge technique · erreur | Confiance ; doctrine | Trace audit | **Silencieux** côté UI | *(ouverte)* |
| CC-D13 | Distinction projet vs cycle | Labels stricts · fusionnés | Anti-claims | Runtime | Strict : Project ≠ Cycle ouvert | *(ouverte)* |
| CC-D14 | Contrat `DynamicProposal` | Adopter · adapter · différer | Mapping C2 | Schéma | Adopter comme candidat UX | *(ouverte)* |
| CC-D15 | Timing matching | Immédiat · après synthèse · manuel | Charge | C3 | Après synthèse utile + progressif | *(ouverte)* |
| CC-D16 | Weak matches | Repliés · masqués · toujours | Confiance | — | Repliés par défaut | *(ouverte)* |
| CC-D17 | Pause / abandon snapshot | Conserver · purger · choix | Privacy | — | Choix utilisateur | *(ouverte)* |
| CC-D18 | Trajectoire Figma → Delivery | HF avant code · LF suffisant · validation runtime d’abord | Gate Delivery | Isolation file | LF + décisions puis validation Figma/runtime — **pas** Delivery ici | *(ouverte)* |

**Décisions déjà tracées ailleurs (ne pas réécrire comme validées pour D1 CC) :**

| ID historique | Contenu | Portée |
|---------------|---------|--------|
| UX-DEC-08/09 (doc 16) | Option B P0 Studio historique clôturée | **P0 historique** — ne préjuge pas CC-D01 |
| Doc 86 | Réservé LPV | Toujours absent |
| PR #258 | Routage CKC candidat sur `main` | Méthode — **pas** adoption UX |

---

## 10. Trajectoire vers conception fonctionnelle

**Recommandation (≠ décision).**

1. Morris arbitre **CC-D01…D18** (priorité D01, D03, D05, D06, D12, D13).
2. Gate candidat : `GO MORRIS UX DECISIONS — STUDIO CONVERSATIONAL CONVERGENCE`.
3. Puis : `GO UX VALIDATION — STUDIO CONVERSATIONAL FLOW` (Figma + parcours).
4. Ensuite seulement : conception fonctionnelle détaillée / Delivery UX (**GO séparés**).
5. Ne pas ouvrir Delivery tant que décisions + preuves Figma/runtime insuffisantes.

---

## 11. Réserves

| ID | Réserve |
|----|---------|
| CC-R01 | LPV non clôturée (pas de doc 86) |
| CC-R02 | Runtime IntakeView ≠ contrat conversationnel |
| CC-R03 | Figma LF isolé (`8xR5…`) non fusionné au file Studio historique |
| CC-R04 | Frames LF n’illustrent pas encore tous les blocs « état projet vivant » §4 |
| CC-R05 | Options B/C non framées exhaustivement |
| CC-R06 | Aucune capture runtime de la cible conversationnelle |
| CC-R07 | CKC UX/UI détaillé absent — fallback seulement |
| CC-R08 | Branche UX **locale seulement** (pas de remote au Truth Check) |

---

## 12. Dette

| Dette | Note |
|-------|------|
| Mapping C2 → DynamicProposal | Delivery futur |
| Confidence 0–1 → bandes | Contrat + UI |
| Alternatives non activables | Remplacer par `effect` |
| Enrichissement frames panneau vivant | Après CC-D03 |
| Clôture LPV | Doc 86 |
| HF / tokens DS | Hors LF |

---

## 13. Actions non exécutées (ce cycle)

- Code / composants / API
- Push branche UX / PR / merge
- Modification `main` / doctrine CKC / onze CKC
- Delivery / architecture technique détaillée
- Claim UX READY / VISUAL VALIDATED

---

## 14. Gate suivant candidat

`GO MORRIS UX DECISIONS — STUDIO CONVERSATIONAL CONVERGENCE`
(alternatif après décisions : `GO UX VALIDATION — STUDIO CONVERSATIONAL FLOW`)

**Non consommés.**

---

## 15. Verdict documentaire

Pack de convergence **complet au niveau candidat** (audit, modèle, surfaces, états, règles, 5 scénarios, registre, trajectoire).
Validation produit = **MORRIS UX DECISIONS REQUIRED**.
Preuve visuelle LF existante mais **non** « visual validated » runtime.

---

## 13. Diff complet exploitable — commit `5cb285a`

```diff
diff --git a/projects/sfia-studio/87-d1-conversational-convergence-ux-functional-design.md b/projects/sfia-studio/87-d1-conversational-convergence-ux-functional-design.md
index b3e69a7..3ac72f8 100644
--- a/projects/sfia-studio/87-d1-conversational-convergence-ux-functional-design.md
+++ b/projects/sfia-studio/87-d1-conversational-convergence-ux-functional-design.md
@@ -3,20 +3,22 @@
 | Métadonnée | Valeur |
 |------------|--------|
 | **Document** | `87-d1-conversational-convergence-ux-functional-design.md` |
-| **Complète** | `88-d1-conversational-convergence-visual-contract.md` |
+| **Complète** | `88` (visuel) · `89` (decision pack & convergence) |
 | **Statut** | `ux-design-candidate` — **recommandation Cursor** ; **décision Morris requise** |
-| **Cycle** | UX/UI — D1 Conversational Convergence Design |
+| **Cycle** | 4 — UX/UI · UX D1 — Conversational Convergence |
 | **Profil** | Critical |
-| **Gate consommé** | `GO UX/UI — D1 CONVERSATIONAL CONVERGENCE DESIGN` |
+| **Gate consommé** | `GO UX D1 — CONVERSATIONAL CONVERGENCE` (reprise) ; conception initiale `GO UX/UI — D1 CONVERSATIONAL CONVERGENCE DESIGN` |
 | **Branche** | `ux/sfia-studio-d1-conversational-convergence` |
 | **Worktree** | `/Users/morris/Projects/sfia-workspace-d1-conversational-convergence` |
 | **SHA de départ** | `c2d39a7f6881c8d512e48c4b6e9e559ebdf938a9` (HEAD D1 post-timeout ; contenu mergé `main` via PR #257 squash `499c6b3…`) |
+| **Base canonique** | `origin/main` @ `2014e941…` (PR #258 CKC routing) — branche UX **non rebasée** dans ce cycle |
 | **Dépendance** | Branche D1 `delivery/sfia-studio-d1-shared-platform-integration` |
 | **Baseline méthode** | SFIA v2.6 |
+| **CKC** | Cycle 4 — **absent** · fallback `02-fifteen-cycles-synthetic-map.md` + méthode v2.6 · experimental cognitive guidance · **aucune autorité d’exécution** |
 | **Doc 86** | **Réservé** à la clôture Live Product Validation — **non créé** |
-| **Gate suivant candidat** | `GO DELIVERY — D1 CONVERSATIONAL CONVERGENCE UX` (**non consommé**) |
+| **Gate suivant candidat** | `GO MORRIS UX DECISIONS — STUDIO CONVERSATIONAL CONVERGENCE` (**non consommé**) |

-> Formulations : **Observation** · **Hypothèse** · **Option** · **Recommandation** · **Décision Morris requise**.
+> Formulations : **Observation** · **Hypothèse** · **Option** · **Recommandation** · **Décision Morris requise**.
 > Ce document **ne décide pas**. Aucune claim « DESIGN APPROVED », « D1 COMPLETE », « LIVE PRODUCT VALIDATED », « CYCLE OPENED ».

 ---
@@ -59,7 +61,7 @@

 ### Trajectoire candidate

-Intention → compréhension → challenge réciproque → enrichissement → synthèse vivante → maturité explicable → trajectoires → décision humaine → préparation bornée → exécution contrôlée.
+Intention → compréhension conversationnelle → qualification candidate du cycle (**interne**) → résolution cognitive CKC ou fallback (**interne, non UI**) → questions contextualisées → état projet vivant → synthèse / options → recommandation → décision Morris / humaine → confirmation structurante → préparation du contrat d’exécution.

 ### Contre-arguments (obligatoires)

@@ -88,6 +90,25 @@ Intention → compréhension → challenge réciproque → enrichissement → sy
 8. **NO_MUTATION lisible** — reprise / mapping / voir sont des verbes distincts.
 9. **Anti-claims** — pas de « projet créé », « cycle lancé », « guidé démarré » hors preuve.
 10. **Accessibilité first** — focus, annonces, contraste, clavier avant polish HF.
+11. **CKC cognitif opaque** — influence le raisonnement Studio ; **jamais** exposé comme formulaire, questionnaire ou checklist 25 sections.
+12. **Fallback transparent** — absence de CKC détaillé ≠ erreur utilisateur ; guidance légère sans rupture d’expérience.
+13. **Épistémologie visible** — Observation · Hypothèse · Recommandation · Décision validée restent distinctes.
+
+---
+
+## 4bis. Intégration cognitive CKC (post PR #258)
+
+**Observation.** Depuis `main` @ `2014e941…`, le routage CKC candidat est actif (§4.4.5 routing guide). Le cycle UX/UI (#4) **n’a pas** de pilote détaillé.
+
+| Couche | Comportement Studio |
+|--------|---------------------|
+| Recherche CKC | Interne après qualification de cycle |
+| Si pilote (1/2/6/9) | Guide questions / challenges / risques — **sans** afficher le contrat |
+| Si absent (dont UX #4) | Fallback carte synthétique + méthode v2.6 — **silencieux** en UI |
+| Autorité | **Aucune** — n’autorise pas mutation, Delivery, ni décision Morris |
+| Surface utilisateur | Conversation + panneau « état utile » seulement (voir `89` §3–4) |
+
+Détail audit, états, scénarios pilotes 1/2/6/9 + fallback, registre CC-D01…D18 : **`89-d1-conversational-convergence-decision-pack.md`**.

 ---

@@ -113,7 +134,7 @@ Intention → compréhension → challenge réciproque → enrichissement → sy
 [Studio] exécution contrôlée (create / NO_MUTATION / analyze-only)
 ```

-**Doctrine SFIA** informe (sources, gates, profils candidats) mais **n’exécute pas**.
+**Doctrine SFIA** informe (sources, gates, profils candidats) mais **n’exécute pas**.
 **Studio** affiche, borne, audite, empêche les mutations hors confirmation.

 ---
@@ -272,7 +293,7 @@ Champs **bornés** (enums courts) :
 | `targetKind` | `none` · `new_project` · `existing_project` · `analysis` · `cycle_proposal` |
 | `reversible` | `yes` · `until_confirm` · `no_after_confirm` |

-**Interdit.** Catalogue fermé de propositions métier (« Refonte RH », « Audit SI », …).
+**Interdit.** Catalogue fermé de propositions métier (« Refonte RH », « Audit SI », …).
 **Autorisé.** GPT invente le libellé ; Studio refuse tout `effect` hors enum.

 ### 10.2 Affichage
@@ -441,32 +462,36 @@ Scénario LPV « Créer une application de suivi de contrats » + vagues / contr

 ## 15. Décisions Morris requises

-1. Architecture d’information (A / B / C / hybride).
-2. Conversation principale vs étapes souples.
-3. Rôle et visibilité de la synthèse vivante (toujours / on-demand / desktop-only).
-4. Représentation de la maturité (bandes + dimensions proposées ?).
-5. Degré d’éditabilité humaine des items de synthèse.
-6. Timing du matching Project (immédiat / après synthèse / déclenché).
-7. Traitement des weak matches (repliés / masqués / toujours visibles).
-8. Adoption du contrat `DynamicProposal` (§10).
-9. Boutons dynamiques + réponse libre (règle CTA).
-10. Pause / abandon (conservation snapshot ?).
-11. Confirmation de création (plein cadre vs panneau).
-12. Confirmation reprise NO_MUTATION (libellés).
-13. Trajectoire Figma → Delivery (HF après GO ?).
-14. Besoin éventuel de modifier la doctrine SFIA (**cycle séparé**).
+Registre formalisé **CC-D01…CC-D18** dans `89-d1-conversational-convergence-decision-pack.md` §9 (colonne Décision Morris **ouverte**).
+
+Synthèse (inchangée en substance) :
+
+1. Architecture d’information (A / B / C / hybride) — **CC-D01**.
+2. Conversation principale vs étapes souples — **CC-D02**.
+3. Panneau latéral vivant (contenu §89.4 ; largeur) — **CC-D03**.
+4. Visibilité cycle / décisions / gates — **CC-D05**.
+5. Maturité (bandes + dimensions) — **CC-D11**.
+6. Timing matching / weak matches — **CC-D15 / D16**.
+7. `DynamicProposal` — **CC-D14**.
+8. Confirmations structurantes — **CC-D06**.
+9. Responsive / mobile — **CC-D08 / D09**.
+10. Fallback CKC silencieux — **CC-D12**.
+11. Projet vs cycle — **CC-D13**.
+12. Trajectoire Figma → validation → (plus tard) Delivery — **CC-D18**.
+13. Doctrine SFIA / onze CKC — **cycle méthode séparé** (hors périmètre).

 ---

 ## 16. Hors périmètre

-- Code applicatif / prompts / méthode.
+- Code applicatif / prompts / méthode / routing CKC / PGE.
+- Création des onze CKC · promotion baseline.
 - Correction scoring C3.
 - Live GPT supplémentaire.
 - B′ · Cycle runtime · GuidedSession.
 - Clôture LPV (doc **86**).
-- Push / PR / merge de la branche UX.
-- Design HF final.
+- Push / PR / merge de la branche UX · modification `main`.
+- Design HF final · Delivery.

 ---

@@ -479,19 +504,21 @@ Scénario LPV « Créer une application de suivi de contrats » + vagues / contr
 | Alternatives non activables | Remplacer par propositions à `effect` |
 | Dualité OPS1 vs D1 historique | Capitaliser ; ne pas élargir ici |
 | LPV incomplète | Observations partielles U01 |
-| Figma LF seulement | HF après décision Morris |
+| Figma LF seulement | Enrichissement panneau vivant après CC-D03 |
+| CKC UX absent | Fallback uniquement — ne pas inventer |

 ---

 ## 18. Gate suivant candidat

-`GO DELIVERY — D1 CONVERSATIONAL CONVERGENCE UX`
+`GO MORRIS UX DECISIONS — STUDIO CONVERSATIONAL CONVERGENCE`
+puis `GO UX VALIDATION — STUDIO CONVERSATIONAL FLOW`.

-Non consommé. Toute évolution de doctrine = GO Morris distinct.
+**Non** : Delivery tant que décisions + preuves insuffisantes.

 ---

 ## 19. Verdict documentaire

-Conception fonctionnelle **complète au niveau candidat**.
-Validation produit = **MORRIS UX DECISION REQUIRED**.
+Conception fonctionnelle **complète au niveau candidat**, alignée doctrine conversationnelle + CKC opaque.
+Validation produit = **MORRIS UX DECISIONS REQUIRED**.
diff --git a/projects/sfia-studio/88-d1-conversational-convergence-visual-contract.md b/projects/sfia-studio/88-d1-conversational-convergence-visual-contract.md
index 0dd16e8..63523a4 100644
--- a/projects/sfia-studio/88-d1-conversational-convergence-visual-contract.md
+++ b/projects/sfia-studio/88-d1-conversational-convergence-visual-contract.md
@@ -3,14 +3,15 @@
 | Métadonnée | Valeur |
 |------------|--------|
 | **Document** | `88-d1-conversational-convergence-visual-contract.md` |
-| **Complète** | `87-d1-conversational-convergence-ux-functional-design.md` |
-| **Statut** | `visual-contract-candidate` — basse/moyenne fidélité ; **non HF** |
-| **Gate** | `GO UX/UI — D1 CONVERSATIONAL CONVERGENCE DESIGN` |
+| **Complète** | `87` (conception) · `89` (decision pack) |
+| **Statut** | `visual-contract-candidate` — basse/moyenne fidélité ; **non HF** · **non visual-validated** |
+| **Gate** | `GO UX D1 — CONVERSATIONAL CONVERGENCE` (reprise) |
 | **Figma file** | `8xR5zSTfGtEVZSr6KK8Gww` |
 | **Figma URL** | https://www.figma.com/design/8xR5zSTfGtEVZSr6KK8Gww |
 | **Page** | `D1 — Conversational Convergence (LF)` |
 | **Fidélité** | Wireframes basse / moyenne — **pas** design final |
 | **Fichier Studio historique** | `IS70XDnBMvZuJYmaI5eZT2` — **non modifié** (isolation volontaire) |
+| **CKC en UI** | **Interdit** — aucune frame « formulaire CKC » |

 ---

@@ -47,16 +48,16 @@ Ces dimensions sont des **références de conception**, pas une décision de sup
 └──────────────────────────────────────────────────────────────┘
 ```

-**Zones fixes :** chrome · composer · (option) header session.
+**Zones fixes :** chrome · composer · (option) header session.
 **Zones défilantes :** fil conversation · contenu panneau si overflow.

 ### Hiérarchie visuelle

-1. Dernier message GPT / trajectoires actives
-2. Composer (toujours trouvable)
-3. Bande maturité
-4. Items synthèse
-5. Matching secondaire
+1. Dernier message GPT / trajectoires actives
+2. Composer (toujours trouvable)
+3. Bande maturité
+4. Items synthèse
+5. Matching secondaire
 6. Métadonnées techniques (mode, modèle, sources) — discrètes

 ### Navigation
@@ -82,13 +83,31 @@ Ces dimensions sont des **références de conception**, pas une décision de sup

 ---

-## 4. Synthèse vivante (visuel)
+## 4. Panneau latéral vivant (visuel)

-- Titre « Synthèse » + horodatage relatif.
-- Items avec tag épistémique : Observation / Hypothèse / Décision / Question.
-- Statut couleur neutre (pas de gamification) : proposé · validé · contesté.
-- Maturité : **bande textuelle** + 4–6 dimensions en liste courte (pas de jauge %).
+**Cible documentaire** (état projet / cycle utile) — contenu autorisé :
+
+| Bloc visible | Rendu |
+|--------------|--------|
+| Cycle courant | Label candidat + anti-claim si non ouvert |
+| Objectif / périmètre | Items tagués |
+| Progression | Bande qualitative (pas de %) |
+| Hypothèses | Liste courte |
+| Décisions validées / ouvertes | Séparées clairement |
+| Risques / réserves | Liste courte |
+| Livrables | Attendus session |
+| Gate courant | Libellé métier (ex. « Confirmation création ») |
+| Prochaine étape | Une ligne |
+
+**Frames LF actuelles (confirmées 2026-07-23)** : le panneau est encore intitulé « Synthèse vivante » (intention / objectif / questions / maturité).
+**Écart** : blocs gate / décisions / livrables / réserves **pas encore framés exhaustivement** → réserve **CC-R04** (`89`) ; enrichissement Figma **après** CC-D03, sans exposer le CKC.
+
+Règles visuelles communes :
+
+- Tags épistémiques : Observation / Hypothèse / Recommandation / Décision / Question.
+- Statut neutre : proposé · validé · contesté.
 - Anti-claim sous maturité : « Appréciation GPT — contestable ».
+- **Aucun** panneau « dimensions CKC » / checklist 25 sections / badge « CKC absent ».

 ---

@@ -119,7 +138,7 @@ Ces dimensions sont des **références de conception**, pas une décision de sup
 | Contradictoire | Alerte + liste sans sélection |
 | Aucun | Pas de faux empty state alarmiste — silence utile |

-**Libellés interdits :** « Ouvrir le cockpit » comme synonyme de reprise.
+**Libellés interdits :** « Ouvrir le cockpit » comme synonyme de reprise.
 **Libellés candidats :** « Voir le Project » · « Reprendre ce Project (sans le modifier) ».

 ---
@@ -130,25 +149,25 @@ Ces dimensions sont des **références de conception**, pas une décision de sup

 Plein cadre léger (overlay ou route dédiée visuelle) :

-- Résumé convergence
-- Effets / non-effets
-- Objet cible
-- Gate
-- Anti-claims
+- Résumé convergence
+- Effets / non-effets
+- Objet cible
+- Gate
+- Anti-claims
 - Actions : Confirmer la préparation → · Revenir à la conversation

 ### Confirmation création

-- Titre « Créer ce Project »
-- Draft éditable (nom, résumé)
-- Effet : création SQLite Project
-- Non-effets : pas de Cycle, pas de GuidedSession
+- Titre « Créer ce Project »
+- Draft éditable (nom, résumé)
+- Effet : création SQLite Project
+- Non-effets : pas de Cycle, pas de GuidedSession
 - CTA : « Créer ce projet » · Annuler

 ### Confirmation reprise NO_MUTATION

-- Bandeau fort : « Aucune modification du Project »
-- CTA : « Confirmer ce Project pour la suite »
+- Bandeau fort : « Aucune modification du Project »
+- CTA : « Confirmer ce Project pour la suite »
 - Lien secondaire : Voir sans confirmer

 ---
@@ -222,28 +241,32 @@ Mentions obligatoires candidates :
 |-------|--------|
 | fileKey | `8xR5zSTfGtEVZSr6KK8Gww` |
 | URL | https://www.figma.com/design/8xR5zSTfGtEVZSr6KK8Gww |
-| Page | `D1 — Conversational Convergence (LF)` |
-
-| # | Frame | node-id | Taille | Rôle |
-|---|-------|---------|--------|------|
-| 01 | `CC-01 Intake initial` | `2:2` | 1440×1024 | Composer vide |
-| 02 | `CC-02 Exploration` | `2:23` | 1440×1024 | Fil + challenges |
-| 03 | `CC-03 Synthèse vivante` | `2:48` | 1440×1024 | Panneau peuplé |
-| 04 | `CC-04 Challenge hypothèse` | `2:72` | 1440×1024 | Chip correction |
-| 05 | `CC-05 Trajectoires candidates` | `2:97` | 1440×1024 | Cartes dynamiques |
-| 06 | `CC-06 Matching fort` | `2:131` | 1440×1024 | Carte reprise |
-| 07 | `CC-07 Matching faible multiple` | `2:151` | 1440×1024 | Accordion |
-| 08 | `CC-08 Préparation bornée` | `2:169` | 1440×1024 | Contrat effets |
-| 09 | `CC-09 Confirm création` | `2:186` | 1440×1024 | C4 create |
-| 10 | `CC-10 Confirm reprise NO_MUTATION` | `2:201` | 1440×1024 | C4 existing |
-| 11 | `CC-11 Pause abandon` | `2:217` | 1440×1024 | Dialog |
-| 12 | `CC-12 Mobile exploration` | `2:230` | 390×844 | Sheet synthèse |
-
-**Prototype cliquable minimal (nominal P1) :**
+| Page | `D1 — Conversational Convergence (LF)` · node page `0:1` |
+| Vérification MCP | 2026-07-23 — `get_metadata` : **12 frames** présentes, dimensions confirmées |
+| Modifications ce cycle | **Aucune** écriture Figma (contrat documentaire enrichi seulement) |
+
+| # | Frame | node-id | Taille | Rôle | Confirmé |
+|---|-------|---------|--------|------|----------|
+| 01 | `CC-01 Intake initial` | `2:2` | 1440×1024 | Composer vide | oui |
+| 02 | `CC-02 Exploration` | `2:23` | 1440×1024 | Fil + challenges | oui |
+| 03 | `CC-03 Synthèse vivante` | `2:48` | 1440×1024 | Panneau peuplé | oui |
+| 04 | `CC-04 Challenge hypothèse` | `2:72` | 1440×1024 | Chip correction | oui |
+| 05 | `CC-05 Trajectoires candidates` | `2:97` | 1440×1024 | Cartes dynamiques | oui |
+| 06 | `CC-06 Matching fort` | `2:131` | 1440×1024 | Carte reprise | oui |
+| 07 | `CC-07 Matching faible multiple` | `2:151` | 1440×1024 | Accordion | oui |
+| 08 | `CC-08 Préparation bornée` | `2:169` | 1440×1024 | Contrat effets | oui |
+| 09 | `CC-09 Confirm création` | `2:186` | 1440×1024 | C4 create | oui |
+| 10 | `CC-10 Confirm reprise NO_MUTATION` | `2:201` | 1440×1024 | C4 existing | oui |
+| 11 | `CC-11 Pause abandon` | `2:217` | 1440×1024 | Dialog | oui |
+| 12 | `CC-12 Mobile exploration` | `2:230` | 390×844 | Sheet synthèse | oui |
+
+**Prototype cliquable minimal (nominal P1) :**
 `01 → 02 → 03 → 05 → 08 → 09` (reactions ON_CLICK sur frames).

 Lien frame 01 : https://www.figma.com/design/8xR5zSTfGtEVZSr6KK8Gww?node-id=2-2

+**Non framé encore (documentaire `89`) :** états fallback CKC silencieux · contradiction · Git indisponible · gate Morris générique · panneau vivant complet §4.
+
 ---

 ## 14. Composants LF (non DS final)
@@ -258,9 +281,11 @@ Réutiliser tokens Studio P0 quand Delivery viendra ; ce fichier LF n’impose p

 - Fichier Figma **nouveau** (isolation) — pas encore fusionné au file `IS70XDnBMvZuJYmaI5eZT2`.
 - Fidélité LF : gris / structure, pas polish marque.
-- Option A illustrée ; B/C non framées exhaustivement (décrites dans 87).
+- Option A illustrée ; B/C non framées exhaustivement (décrites dans 87 / 89).
+- Écart panneau LF ↔ panneau vivant cible (§4 / `89` §4) — **CC-R04**.
 - LPV non clôturée : copies susceptibles d’évoluer après doc 86.
 - Prototype = parcours nominal seulement.
+- **Pas** de claim « visual validated » ni match runtime.

 ## 16. Éléments non conçus (volontairement)

@@ -269,10 +294,12 @@ Réutiliser tokens Studio P0 quand Delivery viendra ; ce fichier LF n’impose p
 - UI Cycle runtime / GuidedSession.
 - Administration matching thresholds.
 - Spécification CSS/token exacte.
+- Formulaire / exposition CKC.
+- Frames Delivery / PR / merge.

 ---

 ## 17. Décision Morris

-Le contrat visuel est **prêt pour arbitrage**, pas approuvé.
-Gate Delivery UX requis avant code.
+Le contrat visuel est **prêt pour arbitrage**, pas approuvé.
+Prochain gate candidat : décisions Morris (`89`) puis validation Figma/flow — **pas** Delivery tant que preuves insuffisantes.
diff --git a/projects/sfia-studio/89-d1-conversational-convergence-decision-pack.md b/projects/sfia-studio/89-d1-conversational-convergence-decision-pack.md
new file mode 100644
index 0000000..4b5c653
--- /dev/null
+++ b/projects/sfia-studio/89-d1-conversational-convergence-decision-pack.md
@@ -0,0 +1,379 @@
+# SFIA Studio — D1 Conversational Convergence — Decision pack & convergence
+
+| Métadonnée | Valeur |
+|------------|--------|
+| **Document** | `89-d1-conversational-convergence-decision-pack.md` |
+| **Complète** | `87` (conception) · `88` (contrat visuel) |
+| **Statut** | `ux-decision-pack-candidate` — **recommandations Cursor** ; **Décision Morris** non remplie sauf trace Git antérieure |
+| **Cycle** | 4 — UX/UI · UX D1 — Conversational Convergence |
+| **Profil** | Critical |
+| **Gate consommé** | `GO UX D1 — CONVERSATIONAL CONVERGENCE` |
+| **Branche** | `ux/sfia-studio-d1-conversational-convergence` |
+| **Baseline méthode** | SFIA v2.6 |
+| **CKC** | Cycle 4 UX/UI — **absent détaillé** · fallback carte synthétique + méthode v2.6 · **aucune autorité d’exécution** |
+| **Doc 86** | **Réservé** LPV — **non créé** |
+| **Figma** | `8xR5zSTfGtEVZSr6KK8Gww` — page `D1 — Conversational Convergence (LF)` |
+
+> Formulations : **Observation** · **Hypothèse** · **Option** · **Recommandation** · **Décision Morris**.
+> Ce document **ne décide pas**. Aucune claim « UX READY », « VISUAL VALIDATED », « RUNTIME MATCHED », « CKC ADOPTED », « DELIVERY AUTHORIZED ».
+
+---
+
+## 1. Audit de convergence UX
+
+| Élément UX | État actuel | Source | Cohérent nouvelle doctrine (v2.6 + CKC candidat) | Décision requise |
+|------------|-------------|--------|--------------------------------------------------|------------------|
+| Structure générale écran | Formulaire enrichi vertical (runtime) ; Option A documentée (2 col.) | Runtime IntakeView · `87` §14 · `88` §2 | Partiel — cible conversationnelle documentée, runtime non aligné | CC-D01 architecture A/B/C |
+| Rôle conversation | Fil partiel ; CTA globaux décorrélés | LPV U01 · `87` §2 | Faible côté runtime ; fort côté docs candidats | CC-D02 conversation dominante |
+| Panneau latéral | Absent runtime ; « Synthèse vivante » en Figma LF | `88` frames CC-01…12 | Partiel — à enrichir en « état projet vivant » sans CKC brut | CC-D03 panneau vivant |
+| Navigation | `/nouvelle-demande` → cockpit | `87` §14 · `88` §2 | OK conceptuel | CC-D04 nav artefacts |
+| État projet | Session locale ; pas d’état vivant unifié | Runtime · `87` §8–9 | À formaliser (cycle ≠ projet) | CC-D13 projet vs cycle |
+| Décisions | CTA confondent reco / action | LPV · `87` §7 | Tags épistémiques candidats | CC-D05 exposition décisions |
+| Gates Morris | Peu visibles en UI | Doctrine · Operating Model | À rendre explicites sans jargon CKC | CC-D05 / CC-D06 |
+| Progression cycle | Matching/confirm trop tôt | LPV C4 | Bornage après convergence | CC-D06 confirmations |
+| Feedback système | Loading/timeout améliorés (60 s) | PR #257 · `88` §9 | OK base | — |
+| Historique | Fil simple | Runtime | Repliable par épisode (candidat) | CC-D10 historique |
+| Documents / preuves | Sources repliables (candidat) | `87` §9 · `88` | OK | CC-D11 sources |
+| Fallback CKC | Non représenté UX (nouveau post-#258) | Carte `02-…` · matrice 04 | À intégrer **en arrière-plan** | CC-D12 fallback |
+| Erreurs | Banner + retry | `88` §9 | OK | — |
+| Attentes / empty | Invitation courte | Figma CC-01 | OK | — |
+| Chargement | `aria-busy` + message 60 s | `88` §3 | OK | — |
+| Responsive | Contrats 1440/1280/1024/390 | `88` §1, §10 | Documenté LF ; non validé runtime | CC-D08 / CC-D09 |
+| Accessibilité | Contrat a11y | `88` §11 | Documenté ; non validé | — |
+| Exposition CKC | Aucune (correct) | Gate · README CKC | **Doit rester invisible** comme formulaire | CC-D12 (garder opaque) |
+
+---
+
+## 2. Modèle d’expérience conversationnelle cible
+
+### 2.1 Chaîne UX
+
+```
+intention utilisateur
+  → compréhension conversationnelle
+  → qualification candidate du cycle (interne)
+  → résolution cognitive interne (CKC pilote OU fallback — jamais UI formulaire)
+  → questions contextualisées (1–3, non checklist 25 sections)
+  → mise à jour de l’état projet vivant (panneau)
+  → synthèse / options (trajectoires dynamiques)
+  → recommandation (taguée, non exécutable)
+  → décision Morris / humaine explicite
+  → confirmation structurante
+  → préparation du contrat d’exécution (prompt Cursor / effets bornés)
+```
+
+### 2.2 Couches
+
+| Couche | Contenu | Visible utilisateur | Persisté | Confirmation |
+|--------|---------|---------------------|----------|--------------|
+| Vu | Messages, questions, synthèse, trajectoires, panneau, confirmations | Oui | Session UI (+ snapshot si autorisé) | Selon gate |
+| Raisonné (arrière-plan) | Qualification cycle, résolution CKC/fallback, maturité, matching | Non (effets seulement) | Traces audit discrètes optionnelles | Non |
+| Hypothèse | Items tagués « Hypothèse » | Oui | Oui (statut `proposed`) | Non = pas décision |
+| Recommandation | Cartes trajectoire / texte GPT | Oui | Oui | Non |
+| Décision validée | Item « Décision » après acte humain explicite | Oui | Oui (`validated`) | Oui si structurante |
+| Contrat d’exécution | Effets / non-effets préparés | Oui en préparation | Oui | Confirmation avant mutation |
+
+### 2.3 CKC — posture UX (obligatoire)
+
+| Règle | Application UX |
+|-------|----------------|
+| CKC = guidance cognitive candidate | Influence questions, challenges, ordre de clarification |
+| Aucune autorité d’exécution | Jamais CTA « Appliquer le CKC » |
+| Non exposé | Pas de questionnaire 25 sections ; pas de « dimensions CKC » permanentes |
+| Absent (cycle 4 UX) | Fallback silencieux : carte synthétique + méthode v2.6 |
+| Fallback ≠ erreur | Pas de banner « CKC manquant » pour l’utilisateur |
+| Prompt Cursor | Reste le contrat d’exécution final (hors surface chat libre) |
+
+---
+
+## 3. Conversation principale
+
+### 3.1 Intentions couvertes
+
+Découvrir besoin · clarifier · contester · enrichir · choisir trajectoire · préparer action · pauser · abandonner · reprendre session.
+
+### 3.2 Types de messages
+
+| Type | Producteur | Rôle |
+|------|------------|------|
+| Intention / correction | Humain | Entrée libre |
+| Compréhension | GPT | Reformulation courte |
+| Challenge | GPT | 1–3 questions ciblées |
+| Synthèse annoncée | GPT | Pointe vers panneau |
+| Recommandation | GPT | Trajectoire non exécutée |
+| Réserve / contradiction | GPT / Studio | Signal explicite |
+| Confirmation demandée | Studio | Avant mutation |
+| Système | Studio | Loading, erreur, anti-claim |
+
+### 3.3 Artefacts conversationnels
+
+- Questions contextualisées (jamais dump CKC).
+- Synthèses référencées (pas monologue).
+- Challenges non bloquants (chips).
+- Recommandations distinctes des décisions.
+- Réserves visibles.
+- Confirmations (lien vers surface structurante).
+- Pièces jointes / preuves : liens sources, captures futures (LPV), digests — **repliés**.
+
+---
+
+## 4. Panneau latéral vivant (« état utile »)
+
+Limiter le contenu **visible** à :
+
+| Bloc | Contenu | Notes |
+|------|---------|-------|
+| Cycle courant | Label candidat ou « non qualifié » | Proposition ≠ cycle ouvert |
+| Objectif | Texte validable | |
+| Périmètre | Texte / bullets | |
+| Progression | Bande qualitative (exploratoire → prête à borner) | Pas de % |
+| Hypothèses | Liste courte taguée | |
+| Décisions validées | Liste humaine | |
+| Décisions ouvertes | Gate / arbitrages | |
+| Risques | Liste courte | |
+| Réserves | Dont LPV / doctrine | |
+| Livrables | Attendus du cycle / session | |
+| Gate courant | Ex. « Décision humaine » / « Confirmation création » | Libellé métier |
+| Prochaine étape | Une phrase | |
+
+**Interdit en panneau permanent :** dimensions brutes CKC, 25 sections, score % trompeur, « CKC absent », raw digests techniques.
+
+**Mobile :** bottom sheet / FAB « État » (même contenu).
+
+---
+
+## 5. Confirmations structurantes
+
+Confirmation **plein écran ou modale renforcée** lorsque :
+
+| Cas | Gate UX | Mutation |
+|-----|---------|----------|
+| Validation de cadrage (bornage intention/périmètre) | `human_confirm` | Non (état) |
+| Choix de cycle structurant (proposition de cycle) | `morris_go` / humain | Non (préparation) |
+| Modification majeure de périmètre | `human_confirm` | Non jusqu’à confirm |
+| Arbitrage architecture (futur) | `morris_go` | Hors D1 intake |
+| Lancement Delivery | `morris_go` | Hors ce cycle UX |
+| Publication Git / PR / merge | `morris_go` | Hors surface Studio intake |
+| Promotion méthode / baseline | `morris_go` | Interdit ici |
+| Création Project | `human_confirm` | Oui (C4) |
+| Reprise Project | `human_confirm` | NO_MUTATION |
+| Action irréversible | `human_confirm` | Selon effet |
+
+**Règle.** Aucune exécution automatique d’un arbitrage structurant. Composer désactivé seulement pendant modal stricte.
+
+---
+
+## 6. États conversationnels
+
+| État | Sens UX | CKC / fallback |
+|------|---------|----------------|
+| découverte | Intention libre | Résolution interne silencieuse |
+| clarification | Questions ciblées | Guide quelles questions |
+| analyse | Matching / lecture sources | Opaque |
+| synthèse | Panneau peuplé | Opaque |
+| recommandation | Trajectoires | Opaque |
+| attente de décision | CTA humain | — |
+| décision validée | Tag Décision | — |
+| réserve | Blocage soft | — |
+| contradiction | Alerte sans présélection | — |
+| fallback CKC | Guidage léger | **Transparent** (pas d’erreur UX) |
+| source manquante | Message actionnable | — |
+| Git indisponible | Banner ; pas de mutation Git | — |
+| exécution préparée | Contrat effets affiché | — |
+| exécution bloquée | Garde-fou | — |
+| reprise de cycle | Snapshot / reprise session | — |
+| cycle clôturé | Anti-claim si non ouvert | — |
+
+Ne pas figer une machine à états Delivery unique sans CC-D01.
+
+---
+
+## 7. Règles de transformation cognitive
+
+1. Une phrase utilisateur **ne devient pas** automatiquement une décision.
+2. Une recommandation GPT **reste** une recommandation.
+3. Une option / trajectoire **reste distincte** d’une décision.
+4. Une décision Morris / humaine doit être **explicitement identifiée** (tag + acte).
+5. Les contradictions doivent être **signalées**.
+6. Informations insuffisantes → **questions ciblées** (budget 1–3).
+7. Les questions **varient** selon contexte / cycle qualifié.
+8. Le CKC **ne devient pas** une checklist mécanique.
+9. L’absence de CKC détaillé **ne bloque pas** le cycle.
+10. Le fallback **n’est pas** exposé comme erreur utilisateur.
+11. Le prompt Cursor **reste** le contrat d’exécution final.
+
+---
+
+## 8. Scénarios — quatre pilotes CKC + fallback
+
+> Les pilotes testent la **cohérence du modèle UX** Studio. Ils n’impliquent pas l’adoption des CKC ni l’ouverture de ces cycles dans D1 intake.
+
+### 8.1 Scénario P1 — Cadrage (CKC pilote 01)
+
+| Champ | Contenu |
+|-------|---------|
+| Entrée | « On doit cadrer un outil de suivi de contrats pour le commercial et le juridique. » |
+| Comportement | Challenge besoin≠solution ; questions finalité / parties / contraintes / succès / inconnues |
+| Demandé | Périmètre, hors-scope, critères de succès — **pas** formulaire CKC |
+| Panneau | Cycle candidat « Cadrage » · objectif · hypothèses · questions · gate « Décision de cadrage » |
+| Hypothèses | Acteurs, canal, urgence |
+| Risques | Scope flou ; Critical implicite |
+| Gate Morris | Validation brief / périmètre fermé |
+| Confirmation | Plein cadre si bornage retenu |
+| Sortie | Synthèse cadrage + trajectoires (conception / backlog / pause) — **Cycle non ouvert** auto |
+
+### 8.2 Scénario P2 — Conception fonctionnelle (CKC pilote 02)
+
+| Champ | Contenu |
+|-------|---------|
+| Entrée | « Spécifier les règles d’accès et le parcours de création d’un contrat. » |
+| Comportement | Usagers, parcours, règles, exceptions ; refuse technique trop tôt |
+| Demandé | Acteurs, règles métier, exceptions |
+| Panneau | Cycle « Conception fonctionnelle » · livrables « Spec bornée » · réserves |
+| Hypothèses | Périmètre déjà cadré |
+| Risques | Technique prématurée |
+| Gate | Validation spec / règles critiques |
+| Confirmation | Si gel de règles structurantes |
+| Sortie | Spec candidate + options UX / archi — sans Delivery |
+
+### 8.3 Scénario P3 — Architecture technique (CKC pilote 03)
+
+| Champ | Contenu |
+|-------|---------|
+| Entrée | « Faut-il SQLite local ou un backend partagé ? » |
+| Comportement | Options & trade-offs ; NFR ; dette ; **pas** d’ADR implicite |
+| Demandé | Contraintes prod, sécurité, coût |
+| Panneau | Cycle « Architecture technique » · décisions ouvertes · risques |
+| Hypothèses | Contexte Project existant |
+| Risques | Décision implicite |
+| Gate Morris | Arbitrage ADR |
+| Confirmation | **Toujours** avant claim « stack choisie » |
+| Sortie | Options + reco — décision Morris obligatoire |
+
+### 8.4 Scénario P4 — QA / validation (CKC pilote 04)
+
+| Champ | Contenu |
+|-------|---------|
+| Entrée | « Est-ce que la convergence D1 est validée ? » |
+| Comportement | Evidence-based ; négatifs ; sévérité ; refuse QA symbolique |
+| Demandé | Preuves Figma / runtime / docs |
+| Panneau | Réserves · preuves manquantes · verdict candidat |
+| Hypothèses | Couverture LF seule |
+| Risques | Faux « UX READY » |
+| Gate | Morris validation UX |
+| Confirmation | Aucune claim visuelle sans preuves |
+| Sortie | Verdict + réserves (ex. LPV, runtime match) |
+
+### 8.5 Scénario P5 — Cycle sans CKC détaillé (ex. UX/UI #4 ou Delivery #8)
+
+| Champ | Contenu |
+|-------|---------|
+| Entrée | Intention relevant d’un cycle **sans** pilote (ex. ce cycle UX lui-même, ou Delivery) |
+| Comportement | Fallback **transparent** : carte synthétique + méthode v2.6 ; questions légères |
+| Demandé | Selon posture cycle (fidélité vs exploration pour UX) |
+| Panneau | Cycle candidat libellé métier · **pas** de message « CKC manquant » |
+| Hypothèses | Couverture CKC incomplète (trace interne seulement) |
+| Risques | Invention d’un faux contrat |
+| Gate | Selon criticité |
+| Confirmation | Inchangée |
+| Sortie | Expérience continue · **aucune invention** · **aucune rupture** |
+
+---
+
+## 9. Registre des décisions Morris
+
+| ID | Sujet | Options | Impacts | Dette | Recommandation ChatGPT / Cursor | Décision Morris |
+|----|-------|---------|---------|-------|----------------------------------|-----------------|
+| CC-D01 | Structure principale écran | A conversation+panneau · B étapes · C workspace hybride | Refonte IntakeView ; a11y ; mobile | Runtime actuel formulaire | **A** + confirmation plein cadre | *(ouverte)* |
+| CC-D02 | Conversation dominante vs étapes | Dominante libre · stepper souple | Pédagogie vs liberté | Sync étapes | Dominante libre (A) | *(ouverte)* |
+| CC-D03 | Panneau latéral — largeur / comportement | 360–400 @1440 · 320 @1280 · sheet ≤1024 | Densité ; ignore risque | Refonte layout | Sticky complémentaire `aria` | *(ouverte)* |
+| CC-D04 | Nav conversation ↔ artefacts | Inline · onglets · drawer | Charge cognitive | — | Inline + sheet preuves | *(ouverte)* |
+| CC-D05 | Visibilité cycle courant + décisions | Toujours · on-demand · desktop-only | Confusion cycle ouvert | Labels anti-claim | Toujours dans panneau (candidat) | *(ouverte)* |
+| CC-D06 | Format confirmations | Plein cadre · panneau · dialog | Erreurs de mutation | Routes | Plein cadre create/reprise ; dialog pause | *(ouverte)* |
+| CC-D07 | Densité compacte vs détaillée | Compact pro · confortable · dense | Lisibilité | — | Compact professionnel | *(ouverte)* |
+| CC-D08 | Responsive | 1440-only · set `88` · mobile first | Coût Delivery | R-UX historique | Set `88` (1440/1280/1024/390) | *(ouverte)* |
+| CC-D09 | Comportement mobile | Sheet synthèse · FAB · split | A11y | Frame CC-12 LF | FAB + sheet | *(ouverte)* |
+| CC-D10 | Historique conversationnel | Linéaire · épisodes repliables | Perf perçue | — | Épisodes + ancre synthèse | *(ouverte)* |
+| CC-D11 | Représentation maturité / sources | Bandes+dimensions · % · masqué | Confiance | Contrat C2 score | Bandes + dimensions courtes ; sources repliées | *(ouverte)* |
+| CC-D12 | Traitement fallback CKC | Silencieux · badge technique · erreur | Confiance ; doctrine | Trace audit | **Silencieux** côté UI | *(ouverte)* |
+| CC-D13 | Distinction projet vs cycle | Labels stricts · fusionnés | Anti-claims | Runtime | Strict : Project ≠ Cycle ouvert | *(ouverte)* |
+| CC-D14 | Contrat `DynamicProposal` | Adopter · adapter · différer | Mapping C2 | Schéma | Adopter comme candidat UX | *(ouverte)* |
+| CC-D15 | Timing matching | Immédiat · après synthèse · manuel | Charge | C3 | Après synthèse utile + progressif | *(ouverte)* |
+| CC-D16 | Weak matches | Repliés · masqués · toujours | Confiance | — | Repliés par défaut | *(ouverte)* |
+| CC-D17 | Pause / abandon snapshot | Conserver · purger · choix | Privacy | — | Choix utilisateur | *(ouverte)* |
+| CC-D18 | Trajectoire Figma → Delivery | HF avant code · LF suffisant · validation runtime d’abord | Gate Delivery | Isolation file | LF + décisions puis validation Figma/runtime — **pas** Delivery ici | *(ouverte)* |
+
+**Décisions déjà tracées ailleurs (ne pas réécrire comme validées pour D1 CC) :**
+
+| ID historique | Contenu | Portée |
+|---------------|---------|--------|
+| UX-DEC-08/09 (doc 16) | Option B P0 Studio historique clôturée | **P0 historique** — ne préjuge pas CC-D01 |
+| Doc 86 | Réservé LPV | Toujours absent |
+| PR #258 | Routage CKC candidat sur `main` | Méthode — **pas** adoption UX |
+
+---
+
+## 10. Trajectoire vers conception fonctionnelle
+
+**Recommandation (≠ décision).**
+
+1. Morris arbitre **CC-D01…D18** (priorité D01, D03, D05, D06, D12, D13).
+2. Gate candidat : `GO MORRIS UX DECISIONS — STUDIO CONVERSATIONAL CONVERGENCE`.
+3. Puis : `GO UX VALIDATION — STUDIO CONVERSATIONAL FLOW` (Figma + parcours).
+4. Ensuite seulement : conception fonctionnelle détaillée / Delivery UX (**GO séparés**).
+5. Ne pas ouvrir Delivery tant que décisions + preuves Figma/runtime insuffisantes.
+
+---
+
+## 11. Réserves
+
+| ID | Réserve |
+|----|---------|
+| CC-R01 | LPV non clôturée (pas de doc 86) |
+| CC-R02 | Runtime IntakeView ≠ contrat conversationnel |
+| CC-R03 | Figma LF isolé (`8xR5…`) non fusionné au file Studio historique |
+| CC-R04 | Frames LF n’illustrent pas encore tous les blocs « état projet vivant » §4 |
+| CC-R05 | Options B/C non framées exhaustivement |
+| CC-R06 | Aucune capture runtime de la cible conversationnelle |
+| CC-R07 | CKC UX/UI détaillé absent — fallback seulement |
+| CC-R08 | Branche UX **locale seulement** (pas de remote au Truth Check) |
+
+---
+
+## 12. Dette
+
+| Dette | Note |
+|-------|------|
+| Mapping C2 → DynamicProposal | Delivery futur |
+| Confidence 0–1 → bandes | Contrat + UI |
+| Alternatives non activables | Remplacer par `effect` |
+| Enrichissement frames panneau vivant | Après CC-D03 |
+| Clôture LPV | Doc 86 |
+| HF / tokens DS | Hors LF |
+
+---
+
+## 13. Actions non exécutées (ce cycle)
+
+- Code / composants / API
+- Push branche UX / PR / merge
+- Modification `main` / doctrine CKC / onze CKC
+- Delivery / architecture technique détaillée
+- Claim UX READY / VISUAL VALIDATED
+
+---
+
+## 14. Gate suivant candidat
+
+`GO MORRIS UX DECISIONS — STUDIO CONVERSATIONAL CONVERGENCE`
+(alternatif après décisions : `GO UX VALIDATION — STUDIO CONVERSATIONAL FLOW`)
+
+**Non consommés.**
+
+---
+
+## 15. Verdict documentaire
+
+Pack de convergence **complet au niveau candidat** (audit, modèle, surfaces, états, règles, 5 scénarios, registre, trajectoire).
+Validation produit = **MORRIS UX DECISIONS REQUIRED**.
+Preuve visuelle LF existante mais **non** « visual validated » runtime.
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index 3841a8d..c3ebfc5 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -529,6 +529,7 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | `86` | **Réservé** — clôture Live Product Validation (**non créé** ; LPV engagée, non clôturée) |
 | [87-d1-conversational-convergence-ux-functional-design.md](./87-d1-conversational-convergence-ux-functional-design.md) | Conception UX/fonctionnelle convergence conversationnelle D1 — **`ux-design-candidate`** |
 | [88-d1-conversational-convergence-visual-contract.md](./88-d1-conversational-convergence-visual-contract.md) | Contrat visuel LF + frames Figma — **`visual-contract-candidate`** |
+| [89-d1-conversational-convergence-decision-pack.md](./89-d1-conversational-convergence-decision-pack.md) | Audit, modèle cible, scénarios CKC, registre CC-D01…D18 — **`ux-decision-pack-candidate`** |

-> **Statut Git :** Shared Technical Platform **MERGED** (#255). Docs 75–80 consolidés (#256). D1 shared platform + timeout 60s **MERGED** (#257 @ `499c6b3…`).
-> **Séquence active :** D1 unifié sur `main` → LPV **ouverte** (pas de doc 86) → conception convergence conversationnelle (`87`/`88`, décision Morris) → éventuel `GO DELIVERY — D1 CONVERSATIONAL CONVERGENCE UX`.
+> **Statut Git :** Shared Technical Platform **MERGED** (#255). Docs 75–80 consolidés (#256). D1 shared platform + timeout 60s **MERGED** (#257 @ `499c6b3…`). Routage CKC candidat **MERGED** (#258 @ `2014e941…`).
+> **Séquence active :** D1 unifié sur `main` → LPV **ouverte** (pas de doc 86) → convergence conversationnelle (`87`/`88`/`89`, décisions Morris ouvertes) → `GO MORRIS UX DECISIONS` / `GO UX VALIDATION` — **pas** Delivery tant que preuves insuffisantes.
```

---

## 14. Handoff (post-publish)

| Champ | Valeur |
|-------|--------|
| Mode | publish-in-cycle |
| Branche | sfia/review-handoff |
| Fichier | sfia-review-handoff/latest-chatgpt-review.md |
| Message | docs(review-handoff): publish Studio D1 conversational convergence review |
| Commit / blob | *(après publish)* |

---

## 15. Verdict exact

**UX D1 CONVERSATIONAL CONVERGENCE READY — MORRIS UX DECISIONS REQUIRED**
