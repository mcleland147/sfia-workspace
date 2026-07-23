# SFIA Review Pack — D1 Conversational Convergence UX/UI Design

## Niveau
FULL

## Métadonnées

| Champ | Valeur |
|-------|--------|
| Date/heure | 2026-07-23 10:07:22 CEST (+0200) |
| Cycle | UX/UI — D1 Conversational Convergence Design |
| Cycles associés | conception fonctionnelle ; architecture fonctionnelle ; cadrage produit ; QA conceptuelle |
| Profil | Critical |
| Gate consommé | `GO UX/UI — D1 CONVERSATIONAL CONVERGENCE DESIGN` |
| Repo | mcleland147/sfia-workspace |
| Worktree | /Users/morris/Projects/sfia-workspace-d1-conversational-convergence |
| Branche UX | `ux/sfia-studio-d1-conversational-convergence` |
| HEAD UX | `2888b7e1c8643236c1ecee1fd8f01aa227ddc3cc` |
| SHA départ (D1) | `c2d39a7f6881c8d512e48c4b6e9e559ebdf938a9` |
| Branche D1 dépendance | `delivery/sfia-studio-d1-shared-platform-integration` |
| origin/main (au Truth Check) | `499c6b3540d8c3fae776736dc3fba29938048bfd` (PR #257 squash) |
| Push branche projet | **non** |
| PR / merge projet | **non** |
| Code modifié | **non** |
| Doc 86 | **absent** (réservé LPV) |

## Verdict

**D1 CONVERSATIONAL CONVERGENCE DESIGN READY — MORRIS UX DECISION REQUIRED**

## Gate suivant candidat

`GO DELIVERY — D1 CONVERSATIONAL CONVERGENCE UX` (**non consommé**)

---

## Local Git Truth Check

Exécuté 2026-07-23 10:00:58 CEST depuis worktree D1, puis création WT UX.

| Contrôle | Résultat |
|----------|----------|
| pwd D1 | `/Users/morris/Projects/sfia-workspace-d1-platform-integration` |
| Branche D1 | `delivery/sfia-studio-d1-shared-platform-integration` |
| HEAD D1 | `c2d39a7f6881c8d512e48c4b6e9e559ebdf938a9` |
| origin/main | `499c6b3540d8c3fae776736dc3fba29938048bfd` |
| merge-base HEAD origin/main | `416af8a5…` (squash #257 : SHAs locaux ≠ ancêtres de main ; tree contenu D1 intégré) |
| staged | vide |
| code non commité | **aucun** (seul `.tmp-sfia-review/` untracked) |
| secrets / .env dans status | absents |
| Doc 86 | absent |
| Serveur :3020 | actif (PID listen) |
| Captures LPV | `.tmp-sfia-review/live-product-validation/lpv-u01-*.png` |
| Branche UX préexistante | absente |
| Worktree UX préexistant | libre |
| Handoff distant avant | `ea05805…` validation D1 platform |

Branche UX créée : `git worktree add -b ux/sfia-studio-d1-conversational-convergence … c2d39a7`

Commits locaux UX :

```
2888b7e docs(sfia-studio): add D1 conversational convergence visual contract
ec2798c docs(sfia-studio): define D1 conversational convergence workflow
```

---

## Sources consultées

### Méthode
- prompts/templates/sfia-cycle-execution-template.md (référencé gate)
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
- method/sfia-fast-track/core/sfia-rules-and-guardrails.md

### Projet
- 75, 76, 77, 78, 79, 80, 84, 85, README
- 86 : absent

### Interface / contrats
- IntakeView.tsx, analyzeIntent.ts, actions.ts, types.ts (C2)
- ContextMatchPanel, matchExistingContext, scoring, confirmation types/execute
- Captures C1–C4 sous .tmp-sfia-review + LPV U01

### Handoff
- sfia/review-handoff @ ea05805 — latest-chatgpt-review.md (validation platform)

### Figma
- File historique IS70XDnBMvZuJYmaI5eZT2 **non modifié**
- Nouveau file dédié 8xR5zSTfGtEVZSr6KK8Gww

---

## Captures Live utilisées

- lpv-u01-intake-live.png
- lpv-u01-confirmation.png
- screenshots-d1-c2/proposal-*.png, clarification, analyze-only, error
- screenshots-d1-c3/strong-match-*, multiple-matches, no-match, …
- screenshots-d1-c4/confirm-create-*, confirm-existing, …

LPV **non clôturée** — pas de rapport 86.

---

## Observations UX (résumé)

1. Alternatives non activables ; CTA globaux décorrélés des propositions GPT
2. Page verticale mélange compréhension / matching / confirmation
3. Matching weak saturant ; doublons ; CREATE_NEW sous contextes
4. « Ouvrir cockpit » ≠ Reprendre NO_MUTATION
5. Confirmation trop tôt sans convergence conversationnelle
6. Maturité absente (seulement confidence 0–1)
7. Synthèse non éditable finement ; pas de consensus progressif

---

## Alternatives analysées (IA)

- **A** Conversation + panneau latéral — **recommandée (candidat)**
- **B** Étapes souples guidées
- **C** Workspace hybride (différer ; emprunter confirmation dédiée)

Détail complet : document 87 §14.

---

## Cartographies / parcours / contrat dynamique

Voir documents 87 complets ci-dessous (§ états, synthèse, DynamicProposal, matching, P1–P8).

---

## Figma

| Champ | Valeur |
|-------|--------|
| fileKey | 8xR5zSTfGtEVZSr6KK8Gww |
| URL | https://www.figma.com/design/8xR5zSTfGtEVZSr6KK8Gww |
| Page | D1 — Conversational Convergence (LF) |
| Frames | CC-01…CC-12 (node-ids 2:2 … 2:230) |
| Dimensions | 1440×1024 (01–11), 390×844 (12) |
| Prototype | 01→02→03→05→08→09 |
| Fidélité | LF — non HF |

---

## Fichiers créés / modifiés (branche UX)

- A projects/sfia-studio/87-d1-conversational-convergence-ux-functional-design.md
- A projects/sfia-studio/88-d1-conversational-convergence-visual-contract.md
- M projects/sfia-studio/README.md

Code app/** : **inchangé**.

---

## Réserves

- LPV ouverte ; observations partielles (U01 + fixtures)
- Recommandation ≠ décision Morris
- Schéma C2 actuel ≠ DynamicProposal (dette Delivery)
- Figma LF isolé du file Studio historique
- merge-base local vs main squash : historique SHAs divergent, contenu D1 sur main

## Dette

- Mapping contrat C2 → DynamicProposal
- Refonte IntakeView (hors cycle)
- HF Figma après arbitrage
- Clôture LPV (86) encore due

## Décisions Morris requises

1–14 listées dans 87 §15 (IA, synthèse, maturité, matching, pause, confirmations, doctrine séparée, …)

## Hors périmètre

Code, méthode, prompts, C3 scoring fix, Live GPT, B′, Cycle runtime, GuidedSession, push/PR/merge branche UX, clôture LPV implicite.

## Actions non exécutées

- Push branche `ux/sfia-studio-d1-conversational-convergence`
- PR / merge projet
- Modification code
- Clôture LPV / doc 86
- HF Figma / fusion file IS70XDn…

---

## Contenu complet — Document 87

# SFIA Studio — D1 Conversational Convergence — Conception UX / fonctionnelle

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `87-d1-conversational-convergence-ux-functional-design.md` |
| **Complète** | `88-d1-conversational-convergence-visual-contract.md` |
| **Statut** | `ux-design-candidate` — **recommandation Cursor** ; **décision Morris requise** |
| **Cycle** | UX/UI — D1 Conversational Convergence Design |
| **Profil** | Critical |
| **Gate consommé** | `GO UX/UI — D1 CONVERSATIONAL CONVERGENCE DESIGN` |
| **Branche** | `ux/sfia-studio-d1-conversational-convergence` |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-d1-conversational-convergence` |
| **SHA de départ** | `c2d39a7f6881c8d512e48c4b6e9e559ebdf938a9` (HEAD D1 post-timeout ; contenu mergé `main` via PR #257 squash `499c6b3…`) |
| **Dépendance** | Branche D1 `delivery/sfia-studio-d1-shared-platform-integration` |
| **Baseline méthode** | SFIA v2.6 |
| **Doc 86** | **Réservé** à la clôture Live Product Validation — **non créé** |
| **Gate suivant candidat** | `GO DELIVERY — D1 CONVERSATIONAL CONVERGENCE UX` (**non consommé**) |

> Formulations : **Observation** · **Hypothèse** · **Option** · **Recommandation** · **Décision Morris requise**.  
> Ce document **ne décide pas**. Aucune claim « DESIGN APPROVED », « D1 COMPLETE », « LIVE PRODUCT VALIDATED », « CYCLE OPENED ».

---

## 1. Problème

**Observation.** Le parcours D1 Intake (`/nouvelle-demande`) valide techniquement GPT réel, reformulation, objectif, hypothèses, manques, propositions C2, matching C3 et confirmation C4.

**Observation.** L’interface actuelle se comporte comme un **formulaire enrichi vertical** : une proposition, des alternatives non activables, des CTA globaux décorrélés (`Reformuler` / `Recommencer` / `Créer manuellement`), un matching qui envahit la page, puis une confirmation souvent trop tôt.

**Problème produit.** L’humain ne dispose pas d’un espace où **construire progressivement un consensus** avec GPT sous doctrine SFIA, avant tout bornage mutatif.

**Risques si non traité :** choix imposé trop tôt ; GPT trop permissif ou trop restrictif ; décisions humaines masquées ; confusion proposition / préparation / exécution ; mutations ou cycles prématurés ; perte de confiance sur le matching.

---

## 2. Observations Live (capitalisation LPV — non clôturée)

**État LPV.** Gate d’exécution engagé ; **document 86 absent** ; rapport final et handoff LPV **non publiés**. Ne pas traiter la LPV comme clôturée.

| Observation | Preuve / source | Impact UX |
|-------------|-----------------|-----------|
| Live GPT produit une proposition utile (sujet, objectif, CREATE_PROJECT_CANDIDATE) | Capture `lpv-u01-intake-live.png` ; latence ~24 s puis timeouts à 25 s | Besoin de patience / états loading longs ; timeout relevé à 60 s (PR #257) |
| C4 confirmation ouverte sans click Cursor | `lpv-u01-confirmation.png` | Confirmation existe ; **convergence conversationnelle insuffisante avant C4** |
| Alternatives C2 non cliquables | Runtime `IntakeView` + captures C2 | CTA ≠ trajectoires GPT |
| Weak / multiple matches saturent | Captures C3 `multiple-matches`, `possible` | Charge cognitive ; fausse pertinence |
| « Ouvrir le cockpit » ≠ « Reprendre ce Project » | Runtime ContextMatch / Confirmation | Ambiguïté NO_MUTATION vs navigation |
| CREATE_NEW_PROJECT sous contextes existants | Matching C3 | Suggestion de création concurrente au matching |
| Doublons / labels proches | Matching déterministe | Dégradation confiance |
| Maturité absente de l’UI | Contrat C2 `confidence` 0–1 seulement | Pas d’appréciation explicable multi-dimensionnelle |
| Pas d’édition fine de la synthèse | UI actuelle | Humain reformule tout ou recommence |

---

## 3. Challenge de l’hypothèse de travail

### Hypothèse candidate (à challenger)

> L’intake devient un **espace de convergence conversationnelle** : ouvert tant que le besoin se construit ; explicable pendant la convergence ; borné uniquement au moment d’agir.

### Trajectoire candidate

Intention → compréhension → challenge réciproque → enrichissement → synthèse vivante → maturité explicable → trajectoires → décision humaine → préparation bornée → exécution contrôlée.

### Contre-arguments (obligatoires)

| Risque | Contre-mesure candidate |
|--------|-------------------------|
| Chatbot bavard sans aboutissement | Budget de tours ; questions ciblées (1–3) ; « maturité insuffisante » visible ; pause explicite |
| Ouverture interminable | Seuils qualitatifs de « convergence suffisante » ; invitation à décider sans forcer |
| Sur-conception workspace | Préférer IA Option A avant hybride C ; HF différé |
| Doctrine SFIA non visible | Panneau / traces sources + digests ; anti-claims cycle/runtime |
| Matching trop tardif | Matching **progressif silencieux** puis révélation contextualisée (pas formulaire géant) |
| Faux score de maturité | Bandes qualitatives + dimensions textuelles ; pas de % présentés comme vérité |

**Recommandation.** Retenir l’hypothèse comme **direction produit**, sous réserve des décisions Morris §20 et d’un Delivery ultérieur. Ce n’est **pas** une validation.

---

## 4. Principes UX retenus (candidats)

1. **Réponse libre toujours disponible** — le champ de saisie n’est jamais remplacé par des seuls boutons.
2. **CTA contextuels = effets bornés** — un bouton n’apparaît que s’il mappe un `effect` autorisé.
3. **Propositions dynamiques sans catalogue métier fermé** — GPT formule librement ; Studio borne les effets.
4. **Synthèse vivante distincte du fil** — consensus progressif visible, contestable, versionné UI.
5. **Maturité qualitative** — dimensions + bande, jamais score précis trompeur.
6. **Matching au service de la conversation** — pas un second formulaire ; weak matches repliés.
7. **Bornage explicite** — préparation ≠ exécution ; cycle candidat ≠ Cycle ouvert.
8. **NO_MUTATION lisible** — reprise / mapping / voir sont des verbes distincts.
9. **Anti-claims** — pas de « projet créé », « cycle lancé », « guidé démarré » hors preuve.
10. **Accessibilité first** — focus, annonces, contraste, clavier avant polish HF.

---

## 5. Modèle de convergence

```
[Humain] intention libre
    ↓
[GPT] compréhension + challenge (non bloquant)
    ↓
[Humain] correction / enrichissement / « pourquoi ? »
    ↓
[Studio] synthèse vivante (état partagé)
    ↓
[GPT] maturité qualitative + trajectoires dynamiques
    ↓
[Humain] décide trajectoire OU continue exploration
    ↓
[Studio] préparation bornée (contrat effets / non-effets)
    ↓
[Humain] confirme OU revient
    ↓
[Studio] exécution contrôlée (create / NO_MUTATION / analyze-only)
```

**Doctrine SFIA** informe (sources, gates, profils candidats) mais **n’exécute pas**.  
**Studio** affiche, borne, audite, empêche les mutations hors confirmation.

---

## 6. Rôles

| Acteur | Fait | Ne fait pas |
|--------|------|-------------|
| **Humain (Morris / utilisateur)** | Intente, corrige, conteste, décide, confirme mutations | N’est pas forcé par un CTA trompeur |
| **GPT** | Reformule, challenge, propose trajectoires, évalue maturité qualitative | N’ouvre pas de Cycle ; ne mute pas ; n’impose pas A/B/C |
| **Doctrine SFIA** | Fournit règles, profils, gates, sources canoniques | N’est pas un chatbot ; pas d’exécution runtime ici |
| **Studio** | Persiste session UI, matching déterministe, confirmation, audit | N’invente pas de consensus ; n’auto-exécute pas |

---

## 7. Questions de conception — réponses

### 7.1 Conversation

| Question | Réponse candidate |
|----------|-------------------|
| Champ libre à chaque étape ? | Zone composer **fixe** en bas (desktop) / sticky (mobile) ; toujours active hors confirmation modale stricte |
| GPT challenge sans bloquer ? | Challenges = messages + chips « hypothèse à valider » ; jamais écran bloquant seul |
| Correction hypothèse / synthèse ? | Actions sur items synthèse : *Valider* / *Corriger* / *Retirer* → message structuré réinjecté |
| « Pourquoi ? » / alternative / challenge plus fort ? | Micro-CTA sur message GPT + saisie libre équivalente |
| Éviter chatbot bavard ? | Max questions/tour ; synthèse mise à jour plutôt que monologues ; bande maturité « insuffisante » |
| Historique lisible ? | Fil chronologique repliable par épisode ; ancre « dernière synthèse » |

### 7.2 Maturité

| Question | Réponse candidate |
|----------|-------------------|
| Sans faux score ? | Bandes : `exploratoire` · `partielle` · `suffisante pour décider` · `prête à borner` |
| Dimensions ? | Clarté d’intention ; objectif ; périmètre ; acteurs ; contraintes ; risques ; contexte Project ; décisions ouvertes |
| Observation / hypothèse / décision / question ? | Tags d’épistémologie sur chaque item de synthèse |
| Contestation maturité ? | « Contester cette appréciation » → GPT justifie ou révise ; bande non verrouillée |
| Exploratoire → préparatoire ? | Quand humain sélectionne une trajectoire **et** bande ≥ `suffisante pour décider` |

### 7.3 Propositions GPT

| Question | Réponse candidate |
|----------|-------------------|
| Sans catalogue métier ? | Champs libres texte + `effect` borné (enum court) |
| Contrat minimal UI ? | Voir §9 |
| Champs libres ? | titre, formulation, justification, objectif, résultat attendu, questions, risques, conditions, libellé CTA |
| Effets bornés ? | `none` · `continue_conversation` · `prepare_create_project` · `prepare_resume_project` · `prepare_analyze_only` · `prepare_cycle_candidate` · `pause` · `abandon` |
| Plusieurs trajectoires sans A/B/C ? | Cartes parallèles non numérotées ; ordre = pertinence GPT non obligatoire |
| CTA + libre ? | CTA déclenche préparation **ou** envoie un message équivalent ; composer reste ouvert |

### 7.4 Matching

| Question | Réponse candidate |
|----------|-------------------|
| Quand rechercher ? | Après première synthèse utile **ou** signaux nominatifs ; raffiné à chaque revision d’intention |
| Mode ? | **Progressif** : silencieux d’abord, révélation contextuelle (pas dump immédiat) |
| Fort / faible / contradictoire ? | Fort = carte primaire + justification ; faible = groupe replié « autres pistes » ; contradictoire = alerte |
| Voir / Comparer / Reprendre / Mapper ? | Verbes séparés — Voir (lecture) · Comparer (diff synthèse) · Reprendre (NO_MUTATION → cockpit) · Mapper (rattachement conceptuel sans mutation tant que non confirmé) |
| NO_MUTATION ? | Libellés + bandeau confirmation « Aucune modification du Project » |
| Doublons ? | Grouper / signaler similarité ; ne pas pré-sélectionner |
| Masquer weak ? | Par défaut repliés si un fort existe **ou** si bande maturité encore exploratoire |

### 7.5 Passage au bornage

| Question | Réponse candidate |
|----------|-------------------|
| Conversation → décision ? | Humain choisit trajectoire ou « Je décide maintenant » |
| Résumé validé ? | Intention, objectif, effet, objet cible, non-effets, preuves de convergence |
| Effets / non-effets ? | Liste explicite dans écran préparation |
| Cycle / profil / gates sans surcharge ? | Bloc secondaire repliable « Lecture SFIA » |
| Retour exploration ? | « Revenir à la conversation » annule préparation, conserve synthèse |
| Cycle candidat ≠ Cycle ouvert ? | Label **Proposition de cycle (non ouvert)** + anti-claim |

---

## 8. États (cartographie non rigide)

Ne pas imposer une machine à états unique en Delivery sans décision Morris. Distinguer couches :

### 8.1 États métier persistés (candidats)

| État | Sens | Mutation |
|------|------|----------|
| `session_open` | Session intake locale | Non |
| `draft_synthesis` | Synthèse en construction | Non |
| `trajectory_selected` | Trajectoire choisie | Non |
| `preparation` | Contrat affiché | Non |
| `confirmed_create` | Project créé | Oui (C4) |
| `confirmed_resume` | Contexte existant confirmé | NO_MUTATION |
| `analyze_closed` | Analyse seule terminée | Non |
| `paused` / `abandoned` | Suspension | Non |

### 8.2 États UI

`composing` · `waiting_gpt` · `exploring` · `clarifying` · `reviewing_synthesis` · `reviewing_trajectories` · `reviewing_matches` · `preparing` · `confirming` · `result` · `error` · `refused`

### 8.3 Appréciations GPT (non états métier)

`maturity_band` · `epistemic_tags` · `challenge_intensity` · `trajectory_set`

### 8.4 Transitions

| Depuis | Déclencheur | Vers | Type |
|--------|-------------|------|------|
| composing | Envoi intention | waiting_gpt | Humain |
| waiting_gpt | Proposition | exploring / clarifying | Technique |
| exploring | Correction item | waiting_gpt | Humain |
| exploring | Choix trajectoire | preparing | Humain |
| preparing | Confirmer | confirming | Humain |
| confirming | Succès | result | Technique |
| * | Pause / Abandon | paused / abandoned | Humain |
| preparing | Revenir | exploring | Humain |

---

## 9. Synthèse vivante

| Champ | Produit par | Validable | Contestable | Bornable |
|-------|-------------|-----------|-------------|----------|
| Intention | GPT (+ brut humain) | Oui | Oui | Oui |
| Objectif | GPT | Oui | Oui | Oui |
| Périmètre | GPT / humain | Oui | Oui | Oui |
| Acteurs | GPT / humain | Oui | Oui | Optionnel |
| Contraintes | GPT / humain | Oui | Oui | Oui |
| Hypothèses | GPT | Oui | Oui | Non (sauf retenues) |
| Risques | GPT | Oui | Oui | Affichés |
| Décisions | Humain (marquées) | — | — | Oui |
| Questions ouvertes | GPT / humain | — | — | Bloquent si critiques |
| Trajectoires | GPT | Sélection | Oui | Sélectionnée |
| Maturité | GPT | Contestable | Oui | Gate soft |
| Sources | Studio / tools | Lecture | — | Trace |
| Contexte Project | Matching + GPT | Sélection | Oui | Si reprise |

**Comportement.** Chaque item porte : `origin` (gpt|human|system) · `status` (proposed|validated|contested|removed) · `history` (dernier changement). La synthèse est l’**artefact de consensus**, pas le fil chat.

---

## 10. Contrat de proposition dynamique

### 10.1 Objet `DynamicProposal` (candidat — non scellé)

Champs **libres** (texte) :

- `id`, `title`, `statement`, `rationale`, `objective`, `expectedResult`
- `relatedQuestions[]`, `suggestedCycleLabel?`, `conditions[]`, `risks[]`
- `ctaLabel` (affichage seulement)

Champs **bornés** (enums courts) :

| Champ | Valeurs minimales |
|-------|-------------------|
| `effect` | `none` · `continue_conversation` · `prepare_create_project` · `prepare_resume_project` · `prepare_analyze_only` · `prepare_cycle_candidate` · `open_match_detail` · `pause` · `abandon` |
| `engagementLevel` | `exploratory` · `preparatory` · `committing` |
| `uiInteraction` | `message_only` · `primary_cta` · `secondary_cta` · `inline_chip` |
| `mutation` | `none` · `project_create` · `none_existing_confirm` |
| `gate` | `none` · `human_confirm` · `morris_go` |
| `targetKind` | `none` · `new_project` · `existing_project` · `analysis` · `cycle_proposal` |
| `reversible` | `yes` · `until_confirm` · `no_after_confirm` |

**Interdit.** Catalogue fermé de propositions métier (« Refonte RH », « Audit SI », …).  
**Autorisé.** GPT invente le libellé ; Studio refuse tout `effect` hors enum.

### 10.2 Affichage

- 0–N cartes dans le fil et/ou sous la synthèse.
- Pas d’étiquette A/B/C imposée.
- CTA primaire uniquement si `engagementLevel` ≥ preparatory **et** maturité compatible (règle UX, pas auto-exec).

---

## 11. Matching — modèle UX

```
Signaux intention/synthèse
  → matching déterministe (existant C3)
  → classification UX :
       STRONG → carte contextuelle + CTA Voir / Comparer / Reprendre
       MULTIPLE / WEAK → « Pistes faibles (n) » replié
       NONE → silence utile + trajectoire création possible
       CONFLICT → alerte + aucune présélection
```

**Garantie NO_MUTATION.** Reprendre / confirmer existant → écran C4 dédié avec bandeau non-mutation ; audit `NO_MUTATION`.

**CREATE_NEW_PROJECT.** N’apparaît comme CTA primaire **que** si aucun fort match retenu **ou** humain a écarté les matches.

---

## 12. Passage Conversation → Action bornée

### Conditions de préparation (candidats)

1. Synthèse avec intention + objectif non vides.
2. Questions critiques résolues ou explicitement reportées par l’humain.
3. Trajectoire sélectionnée avec `effect` préparatoire.
4. Maturité bande ≥ `suffisante pour décider` **ou** override humain explicite (« Borner malgré tout » — tracé).

### Preuve de convergence (affichée)

- Items validés vs contestés.
- Décisions humaines listées.
- Justification GPT courte de la trajectoire.
- Matches considérés / écartés.

### Contrat affiché

Effets attendus · non-effets · objet · réversibilité · gate · anti-claims.

### Retour / pause / abandon / reprise

| Action | Effet |
|--------|-------|
| Revenir | Préparation annulée ; synthèse conservée |
| Pause | Snapshot local optionnel ; aucune mutation |
| Abandon | Demande conservation ou purge ; aucune mutation |
| Reprise ultérieure | Si snapshot autorisé — hors détail technique ce cycle |

---

## 13. Parcours utilisateurs

### P1 — Création nouveau Project

Demande ouverte → challenge → clarification → synthèse → convergence → matching (souvent NONE/weak) → trajectoire création → préparation → C4 create → Project créé → cockpit.

### P2 — Reprise Project existant

Demande → hypothèse contexte → matching fort → Voir/Comparer → Reprendre → C4 NO_MUTATION → cockpit.

### P3 — Analyse sans création

Demande → conversation → `prepare_analyze_only` → restitution → aucun Project / Cycle → pause ou poursuite.

### P4 — Besoin trop flou

Demande → exploration → questions ciblées → maturité `exploratoire` → pause/poursuite → **aucune mutation**.

### P5 — Désaccord humain–GPT

Recommandation → contestation → explication → alternative → synthèse MAJ → nouvelle maturité.

### P6 — Abandon / pause

Suspendre → choisir conservation → aucun effet implicite → reprise si autorisée.

### P7 — Proposition de cycle

Convergence → `prepare_cycle_candidate` → profil/périmètre/gates candidats → **préparation seulement** → anti-claim « Cycle non ouvert » → gate Morris futur hors ce design.

### P8 — Matching faible / multiple

Plusieurs weak → groupe compact → exploration facultative → pas de présélection → création ou poursuite sans rattachement.

---

## 14. Architecture d’information — 3 options

### Option A — Conversation + panneau latéral vivant

Conversation principale · synthèse/maturité en panneau · propositions dans le fil · matching contextuel.

| Critère | Éval. |
|---------|-------|
| Avantages | Consensus visible ; fil naturel ; proche runtime actuel |
| Limites | Panneau étroit sur tablette ; risque panneau ignoré |
| Dette | Refonte IntakeView majeure |
| Complexité | Moyenne |
| Accessibilité | Bonne si panneau dans order DOM / landmarks |
| Mobile | Panneau → bottom sheet |
| Cohérence SFIA | Forte (doctrine visible sans bloquer) |
| Sur-conception | Faible–moyenne |
| **Reco Cursor** | **Option préférée candidate** |

### Option B — Conversation guidée à étapes souples

Étapes visibles non bloquantes · retour dialogue · synthèse inter-phases.

| Critère | Éval. |
|---------|-------|
| Avantages | Progression claire ; pédagogie |
| Limites | Ressentî « wizard » ; freine le challenge libre |
| Dette | Modèle d’étapes + sync |
| Complexité | Moyenne–haute |
| A11y | Stepper à soigner |
| Mobile | Correct |
| SFIA | Risque de formaliser trop tôt |
| Sur-conception | Moyenne |
| Reco | Alternative si Morris veut guidage visible |

### Option C — Workspace hybride

Conversation + canevas convergence + drawer Projects/sources + confirmation dédiée.

| Critère | Éval. |
|---------|-------|
| Avantages | Puissance ; séparation nette confirmation |
| Limites | Charge cognitive ; coût Delivery élevé |
| Dette | Forte |
| Complexité | Haute |
| A11y | Difficile (multi-régions) |
| Mobile | Dégradé |
| SFIA | Excellent pour power users |
| Sur-conception | **Élevé** |
| Reco | Différer ; emprunter confirmation dédiée à A |

### Tests UX conceptuels (synthèse)

Scénario LPV « Créer une application de suivi de contrats » + vagues / contradictoires / match / refus / abandon / analyze-only :

| Critère | A | B | C |
|---------|---|---|---|
| Prochaine action claire | ●●● | ●●● | ●● |
| Liberté conversationnelle | ●●● | ●● | ●●● |
| Challenge | ●●● | ●● | ●●● |
| Hypothèses visibles | ●●● | ●● | ●●● |
| Contrôle humain | ●●● | ●●● | ●●● |
| Bornage progressif | ●●● | ●●● | ●●● |
| Charge cognitive | ●● | ●● | ● |
| Confiance matching | ●●● | ●● | ●●● |
| A11y | ●●● | ●● | ●● |
| Zéro mutation implicite | ●●● | ●●● | ●●● |

**Recommandation Cursor :** **Option A**, avec confirmation plein cadre (emprunt léger à C) et matching compact. **Décision Morris requise.**

---

## 15. Décisions Morris requises

1. Architecture d’information (A / B / C / hybride).
2. Conversation principale vs étapes souples.
3. Rôle et visibilité de la synthèse vivante (toujours / on-demand / desktop-only).
4. Représentation de la maturité (bandes + dimensions proposées ?).
5. Degré d’éditabilité humaine des items de synthèse.
6. Timing du matching Project (immédiat / après synthèse / déclenché).
7. Traitement des weak matches (repliés / masqués / toujours visibles).
8. Adoption du contrat `DynamicProposal` (§10).
9. Boutons dynamiques + réponse libre (règle CTA).
10. Pause / abandon (conservation snapshot ?).
11. Confirmation de création (plein cadre vs panneau).
12. Confirmation reprise NO_MUTATION (libellés).
13. Trajectoire Figma → Delivery (HF après GO ?).
14. Besoin éventuel de modifier la doctrine SFIA (**cycle séparé**).

---

## 16. Hors périmètre

- Code applicatif / prompts / méthode.
- Correction scoring C3.
- Live GPT supplémentaire.
- B′ · Cycle runtime · GuidedSession.
- Clôture LPV (doc **86**).
- Push / PR / merge de la branche UX.
- Design HF final.

---

## 17. Dette

| Dette | Note |
|-------|------|
| Schéma C2 actuel ≠ DynamicProposal | Mapping Delivery requis |
| Confidence 0–1 vs bandes maturité | Remplacement UX + éventuellement contrat |
| Alternatives non activables | Remplacer par propositions à `effect` |
| Dualité OPS1 vs D1 historique | Capitaliser ; ne pas élargir ici |
| LPV incomplète | Observations partielles U01 |
| Figma LF seulement | HF après décision Morris |

---

## 18. Gate suivant candidat

`GO DELIVERY — D1 CONVERSATIONAL CONVERGENCE UX`

Non consommé. Toute évolution de doctrine = GO Morris distinct.

---

## 19. Verdict documentaire

Conception fonctionnelle **complète au niveau candidat**.  
Validation produit = **MORRIS UX DECISION REQUIRED**.

---

## Contenu complet — Document 88

# SFIA Studio — D1 Conversational Convergence — Contrat visuel

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `88-d1-conversational-convergence-visual-contract.md` |
| **Complète** | `87-d1-conversational-convergence-ux-functional-design.md` |
| **Statut** | `visual-contract-candidate` — basse/moyenne fidélité ; **non HF** |
| **Gate** | `GO UX/UI — D1 CONVERSATIONAL CONVERGENCE DESIGN` |
| **Figma file** | `8xR5zSTfGtEVZSr6KK8Gww` |
| **Figma URL** | https://www.figma.com/design/8xR5zSTfGtEVZSr6KK8Gww |
| **Page** | `D1 — Conversational Convergence (LF)` |
| **Fidélité** | Wireframes basse / moyenne — **pas** design final |
| **Fichier Studio historique** | `IS70XDnBMvZuJYmaI5eZT2` — **non modifié** (isolation volontaire) |

---

## 1. Dimensions de référence (conception)

| Viewport | Taille | Usage |
|----------|--------|--------|
| Desktop large | **1440 × 1024** | Composition primaire Option A |
| Desktop standard | **1280 × 800** | Panneau resserré |
| Tablette | **1024 × 768** | Panneau → sheet |
| Mobile | **390 × 844** | Fil plein + sheet synthèse |

Ces dimensions sont des **références de conception**, pas une décision de support définitive.

---

## 2. Structure des écrans (Option A recommandée)

### Desktop 1440

```
┌──────────────────────────────────────────────────────────────┐
│ App chrome SFIA Studio (existant)                            │
├────────────────────────────┬─────────────────────────────────┤
│ CONVERSATION (scroll)      │ SYNTHÈSE VIVANTE (sticky)       │
│  · messages humain/GPT     │  · intention / objectif         │
│  · challenges inline       │  · hypothèses taguées           │
│  · cartes trajectoires     │  · maturité (bande)             │
│  · match contextuel        │  · questions ouvertes           │
│                            │  · sources (repli)              │
├────────────────────────────┴─────────────────────────────────┤
│ COMPOSER fixe : [ champ libre multipligne ] [ Envoyer ]      │
│ Micro-actions contextuelles au-dessus du composer (chips)    │
└──────────────────────────────────────────────────────────────┘
```

**Zones fixes :** chrome · composer · (option) header session.  
**Zones défilantes :** fil conversation · contenu panneau si overflow.

### Hiérarchie visuelle

1. Dernier message GPT / trajectoires actives  
2. Composer (toujours trouvable)  
3. Bande maturité  
4. Items synthèse  
5. Matching secondaire  
6. Métadonnées techniques (mode, modèle, sources) — discrètes

### Navigation

- Entrée : `/nouvelle-demande` (inchangée conceptuellement).
- Sorties : cockpit Project · workspace · pause/abandon.
- Pas de stepper bloquant (sauf si Morris choisit Option B).

---

## 3. Comportements conversationnels

| Élément | Comportement |
|---------|--------------|
| Bulle humain | Alignement distinct ; éditable seulement via « reformuler ce message » (candidat) |
| Bulle GPT | Challenge + « Pourquoi ? » + « Autre piste » |
| Hypothèse chip | Valider / Corriger / Retirer |
| Trajectoire carte | CTA = `ctaLabel` ; effet borné invisible en UI technique |
| Composer | Toujours actif hors modal confirmation stricte |
| Loading | Skeleton fil + `aria-busy` ; message « Analyse en cours (jusqu’à 60 s) » |
| Erreur / timeout | Banner + conserver saisie + Reessayer |
| Refus policy | Banner non alarmiste ; proposer reformulation |

---

## 4. Synthèse vivante (visuel)

- Titre « Synthèse » + horodatage relatif.
- Items avec tag épistémique : Observation / Hypothèse / Décision / Question.
- Statut couleur neutre (pas de gamification) : proposé · validé · contesté.
- Maturité : **bande textuelle** + 4–6 dimensions en liste courte (pas de jauge %).
- Anti-claim sous maturité : « Appréciation GPT — contestable ».

---

## 5. Propositions dynamiques (visuel)

```
┌─────────────────────────────────────────┐
│ Titre (libre)                           │
│ Formulation                             │
│ Pourquoi (replié)                       │
│ [ CTA contextuel ]  [ Répondre libre ]  │
│ badge engagement: exploratoire|prépa…   │
└─────────────────────────────────────────┘
```

- Pas de numérotation A/B/C.
- Max ~3 visibles ; « Voir d’autres pistes » si plus.
- Engagement `committing` → style plus marqué **mais** pas d’auto-submit.

---

## 6. Matching (visuel)

| Cas | Rendu |
|-----|-------|
| Fort | Carte unique : nom, justification, Voir · Comparer · Reprendre |
| Faible multiple | Accordion « Pistes faibles (n) » fermé par défaut si fort absent et exploration |
| Contradictoire | Alerte + liste sans sélection |
| Aucun | Pas de faux empty state alarmiste — silence utile |

**Libellés interdits :** « Ouvrir le cockpit » comme synonyme de reprise.  
**Libellés candidats :** « Voir le Project » · « Reprendre ce Project (sans le modifier) ».

---

## 7. Préparation bornée & confirmation

### Préparation

Plein cadre léger (overlay ou route dédiée visuelle) :

- Résumé convergence  
- Effets / non-effets  
- Objet cible  
- Gate  
- Anti-claims  
- Actions : Confirmer la préparation → · Revenir à la conversation

### Confirmation création

- Titre « Créer ce Project »  
- Draft éditable (nom, résumé)  
- Effet : création SQLite Project  
- Non-effets : pas de Cycle, pas de GuidedSession  
- CTA : « Créer ce projet » · Annuler

### Confirmation reprise NO_MUTATION

- Bandeau fort : « Aucune modification du Project »  
- CTA : « Confirmer ce Project pour la suite »  
- Lien secondaire : Voir sans confirmer

---

## 8. Pause / abandon

- Dialog : Pause (conserver) / Abandonner (conserver ou purger) / Annuler.
- Aucune mutation Project/Cycle.
- Copy : « Aucune action SFIA n’a été exécutée. »

---

## 9. États vides / loading / erreurs

| État | Contenu |
|------|---------|
| Vide initial | Invitation courte + exemples non imposés + composer focus |
| Loading GPT | Status live region ; désactiver double-submit |
| Erreur provider | Message actionnable |
| Refus tool/policy | Explication + suite possible |
| Timeout | Explicit + retry |

---

## 10. Responsive

| Breakpoint | Adaptation |
|------------|------------|
| 1440 | 2 colonnes ~ 1fr / 360–400px |
| 1280 | 2 colonnes ; panneau 320px |
| 1024 | Fil plein ; synthèse via onglet/sheet |
| 390 | Fil + composer ; FAB « Synthèse » ; matching en sheet |

---

## 11. Accessibilité

| Exigence | Contrat |
|----------|---------|
| Clavier | Tab order : fil → panneau → composer → CTA ; Esc ferme sheets |
| Focus | Focus visible 2px ; focus trap en confirmation |
| SR | `aria-live` polite pour nouveaux messages ; assertive pour erreurs |
| Landmarks | `main`, `complementary` (synthèse), `form` (composer) |
| Contraste | Texte ≥ 4.5:1 ; badges non porteurs d’info seule couleur |
| Densité | Confortable ; éviter murs de weak matches |
| Motion | Réduire si `prefers-reduced-motion` |

---

## 12. Anti-claims visuels

Interdits à l’écran hors preuve :

- « Cycle ouvert » / « Cycle lancé »
- « GuidedSession démarrée »
- « Project lié automatiquement »
- « Maturité 87 % »
- « Alternative recommandée exécutable » sans `effect` borné

Mentions obligatoires candidates :

- « Proposition — non exécutée »
- « Cycle candidat — non ouvert »
- « Reprise — aucune modification »

---

## 13. Registre des frames Figma

| Champ | Valeur |
|-------|--------|
| fileKey | `8xR5zSTfGtEVZSr6KK8Gww` |
| URL | https://www.figma.com/design/8xR5zSTfGtEVZSr6KK8Gww |
| Page | `D1 — Conversational Convergence (LF)` |

| # | Frame | node-id | Taille | Rôle |
|---|-------|---------|--------|------|
| 01 | `CC-01 Intake initial` | `2:2` | 1440×1024 | Composer vide |
| 02 | `CC-02 Exploration` | `2:23` | 1440×1024 | Fil + challenges |
| 03 | `CC-03 Synthèse vivante` | `2:48` | 1440×1024 | Panneau peuplé |
| 04 | `CC-04 Challenge hypothèse` | `2:72` | 1440×1024 | Chip correction |
| 05 | `CC-05 Trajectoires candidates` | `2:97` | 1440×1024 | Cartes dynamiques |
| 06 | `CC-06 Matching fort` | `2:131` | 1440×1024 | Carte reprise |
| 07 | `CC-07 Matching faible multiple` | `2:151` | 1440×1024 | Accordion |
| 08 | `CC-08 Préparation bornée` | `2:169` | 1440×1024 | Contrat effets |
| 09 | `CC-09 Confirm création` | `2:186` | 1440×1024 | C4 create |
| 10 | `CC-10 Confirm reprise NO_MUTATION` | `2:201` | 1440×1024 | C4 existing |
| 11 | `CC-11 Pause abandon` | `2:217` | 1440×1024 | Dialog |
| 12 | `CC-12 Mobile exploration` | `2:230` | 390×844 | Sheet synthèse |

**Prototype cliquable minimal (nominal P1) :**  
`01 → 02 → 03 → 05 → 08 → 09` (reactions ON_CLICK sur frames).

Lien frame 01 : https://www.figma.com/design/8xR5zSTfGtEVZSr6KK8Gww?node-id=2-2

---

## 14. Composants LF (non DS final)

- `Composer` · `MessageBubble` · `HypothesisChip` · `TrajectoryCard` · `MaturityBand` · `SynthesisItem` · `MatchCard` · `WeakMatchGroup` · `PrepContract` · `ConfirmPanel` · `StatusBanner`

Réutiliser tokens Studio P0 quand Delivery viendra ; ce fichier LF n’impose pas le DS.

---

## 15. Réserves

- Fichier Figma **nouveau** (isolation) — pas encore fusionné au file `IS70XDnBMvZuJYmaI5eZT2`.
- Fidélité LF : gris / structure, pas polish marque.
- Option A illustrée ; B/C non framées exhaustivement (décrites dans 87).
- LPV non clôturée : copies susceptibles d’évoluer après doc 86.
- Prototype = parcours nominal seulement.

## 16. Éléments non conçus (volontairement)

- Haute fidélité / motion finale / dark mode.
- Écrans OPS1 / Control Tower.
- UI Cycle runtime / GuidedSession.
- Administration matching thresholds.
- Spécification CSS/token exacte.

---

## 17. Décision Morris

Le contrat visuel est **prêt pour arbitrage**, pas approuvé.  
Gate Delivery UX requis avant code.

---

## Fin review pack FULL
Verdict: D1 CONVERSATIONAL CONVERGENCE DESIGN READY — MORRIS UX DECISION REQUIRED
