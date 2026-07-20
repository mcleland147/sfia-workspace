# SFIA Studio — Review Pack — OPS1 Functional Design Amendment

- **Date/heure/fuseau :** 2026-07-20 13:26:58 CEST
- **Repo :** mcleland147/sfia-workspace
- **Cycle :** 2 — Conception fonctionnelle, amendement avant validation
- **Profil :** Standard
- **Décision Morris :** amendement conception avant `G-OPS1-FUNC-DESIGN-VAL`
- **Branche :** `design/sfia-studio-ops1-functional` (locale, pas de remote)
- **Base / HEAD :** `62eb23f0b1934afbecc517fc83aff90493fb8f29` = `origin/main` ; ahead/behind `0/0`
- **Gate validation finale :** `G-OPS1-FUNC-DESIGN-VAL` — **non consommé**

## Arbitrages Morris retenus

1. Scénario pilote OPS1 **exclusivement Campus360**.
2. Fichier Markdown + convention de branche : sélection ultérieure sous `G-OPS1-SCENARIO-VAL`, **dans** Campus360 seulement.
3. Correction état documentaire obsolète « draft PR / non mergés » dans `41`.
4. Architecture fonctionnelle et UX/UI = **cycles distincts normaux** (plus réserves anormales).
5. Stack / BDD / API / protocole **routés** vers architecture technique (cycle 6 / `G-OPS1-TECH-ARCH` si établi).
6. FinOps numériques **OPEN**, **non bloquants** pour validation fonctionnelle ; à décider avant live.
7. Après CLOSE : session immuable ; continuation / nouvelle session liée ; `OPS1-FD-CAND-13` CANDIDATE WITH RESERVATION.

## Truth Check

| Contrôle | Résultat |
|----------|----------|
| Branche | `design/sfia-studio-ops1-functional` |
| HEAD = origin/main | `62eb23f…` |
| Remote design | absente |
| Staged | vide |
| Avant amendement 41 | tracked propre ; 45–47 untracked complets |

## Fichiers modifiés / créés

| Fichier | Action |
|---------|--------|
| `41-operational-vertical-slice-1-framing.md` | **Modifié** (état documentaire) |
| `45-ops1-functional-design.md` | Amendé (untracked) |
| `46-ops1-functional-flows-and-rules.md` | Amendé (untracked) |
| `47-ops1-functional-decision-pack.md` | Amendé + FD-CAND-26 (untracked) |

**Intacts :** README, 42, 43, 44, app, harness, method, prompts.

---

## Diff complet — document 41

```diff
diff --git a/projects/sfia-studio/41-operational-vertical-slice-1-framing.md b/projects/sfia-studio/41-operational-vertical-slice-1-framing.md
index 9d8f41e..b932e76 100644
--- a/projects/sfia-studio/41-operational-vertical-slice-1-framing.md
+++ b/projects/sfia-studio/41-operational-vertical-slice-1-framing.md
@@ -8,16 +8,18 @@
 | **Typologie** | POC / CADRAGE / PRODUIT / VALIDATION |
 | **Baseline** | SFIA v2.6 opérationnelle sur `main` |
 | **Gates consommés** | `G-SFIA-STUDIO-OPERATIONAL-SLICE-1-FRAMING` · `G-OPS1-FRAMING-REAL-CONVERSATION-AMENDMENT` · `G-OPS1-FRAMING-VAL` |
-| **Statut** | `framing-validated-with-reservations` — **validé Morris avec réserves** (2026-07-20 12:21 CEST) ; POC **maintenu** ; conception, architecture, UX finale, backlog, delivery, GPT live, Cursor réel, MVP **fermés** |
+| **Statut** | `framing-validated-with-reservations` — **validé Morris avec réserves** (2026-07-20 12:21 CEST) ; docs `41`–`44` **intégrés** sur `main` (PR [#235](https://github.com/mcleland147/sfia-workspace/pull/235), squash `b686eb1`) ; post-merge + cleanup **terminés** ; POC **maintenu** ; conception ouverte sous `G-OPS1-FUNC-DESIGN` ; architecture, UX, backlog, delivery, live, MVP **fermés** |
 | **Companions** | [`42`](./42-operational-vertical-slice-1-flow-and-session-model.md) · [`43`](./43-operational-vertical-slice-1-scope-and-success-criteria.md) · [`44`](./44-operational-vertical-slice-1-decision-pack.md) |
 | **Base Git de cadrage** | `origin/main` @ `6a4c4a7044a54698f96e5ba8ce3a85f60c0afc25` |
+| **Intégration cadrage** | PR [#235](https://github.com/mcleland147/sfia-workspace/pull/235) MERGED — squash `b686eb1394bb4d550eeff1dd64669b3d405579ad` |
 | **Autorité** | Morris (L0) |
 
 > Ce document cadre la **prochaine marche du POC** après le vertical slice A–E.
 > **Cadrage validé avec réserves** sous `G-OPS1-FRAMING-VAL` — conversation GPT réelle et libre au centre ; action Markdown gouvernée.
-> La validation **n’ouvre pas** conception détaillée, architecture technique, UX finale, backlog, delivery, live ni MVP.
+> Documents `41`–`44` **intégrés sur `main`** via PR [#235](https://github.com/mcleland147/sfia-workspace/pull/235) (squash `b686eb1394bb4d550eeff1dd64669b3d405579ad`) ; post-merge et cleanup **terminés**.
+> Conception fonctionnelle OPS1 **ouverte** sous `G-OPS1-FUNC-DESIGN` (production / amendement candidates) — validation finale soumise à `G-OPS1-FUNC-DESIGN-VAL`.
+> Architecture, UX, backlog, delivery, live et MVP **restent fermés**.
 > Aucun claim MVP, production-ready ou industrialisation.
-> Documents sur branche documentaire / draft PR — **non mergés** tant qu’un GO Morris de merge distinct n’est pas émis.
 
 ---
 
@@ -353,4 +355,5 @@ Conversation réelle et libre
 
 `SFIA STUDIO OPS1 FRAMING VALIDATED WITH RESERVATIONS`
 
-Gates suivants : **fermés** — voir [`44`](./44-operational-vertical-slice-1-decision-pack.md). Prochaine étape = décision Morris distincte sur l’ouverture éventuelle de la conception fonctionnelle OPS1.
+Cadrage **intégré** et **canonique** sur `main`. Conception fonctionnelle OPS1 **ouverte** sous `G-OPS1-FUNC-DESIGN` (voir [`45`](./45-ops1-functional-design.md)–[`47`](./47-ops1-functional-decision-pack.md)).
+Gates architecture / UX / backlog / delivery / live / MVP : **fermés** — voir [`44`](./44-operational-vertical-slice-1-decision-pack.md). Validation de la conception : `G-OPS1-FUNC-DESIGN-VAL` (distinct).

```

---

## Sections amendées — document 45

### Métadonnées / bandeau

```markdown
# SFIA Studio — Conception fonctionnelle OPS1

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `45-ops1-functional-design.md` |
| **Cycle** | 2 — Conception fonctionnelle |
| **Profil** | Standard |
| **Typologie** | POC / CONCEPTION FONCTIONNELLE / PRODUIT / DOC |
| **Gate consommé** | `G-OPS1-FUNC-DESIGN` |
| **Baseline Git** | `origin/main` @ `62eb23f0b1934afbecc517fc83aff90493fb8f29` |
| **Branche** | `design/sfia-studio-ops1-functional` (**locale uniquement** — aucun push) |
| **Statut** | `functional-design-candidate-for-morris-validation` — **amendé** (Campus360 ; réserves / routage clarifiés) — 2026-07-20 13:23 CEST |
| **Autorité** | Morris (L0) |
| **Companions** | [`46`](./46-ops1-functional-flows-and-rules.md) · [`47`](./47-ops1-functional-decision-pack.md) |
| **Entrées cadrage** | [`41`](./41-operational-vertical-slice-1-framing.md) · [`42`](./42-operational-vertical-slice-1-flow-and-session-model.md) · [`43`](./43-operational-vertical-slice-1-scope-and-success-criteria.md) · [`44`](./44-operational-vertical-slice-1-decision-pack.md) |
| **Socle historique (lecture)** | [`08`](./08-functional-design.md) · [`09`](./09-functional-flows-and-rules.md) · [`10`](./10-functional-decision-pack.md) |
| **Horodatage production** | 2026-07-20 13:10 CEST |
| **Horodatage amendement** | 2026-07-20 13:23 CEST |
| **Projet pilote OPS1** | **Campus360 exclusivement** (fichier/branche exacts : `G-OPS1-SCENARIO-VAL`) |

> Contrat de **conception fonctionnelle candidate** du Vertical Slice Opérationnel 1 (**amendé** avant `G-OPS1-FUNC-DESIGN-VAL`).
> Hérite des invariants validés du cadrage OPS1 (`G-OPS1-FRAMING-VAL`) sans les altérer.
> Scénario pilote d’action : contexte métier/documentaire **Campus360** uniquement — OPS1 reste un slice de **SFIA Studio**, pas une fonctionnalité produit Campus360.
> **Ne valide pas** la conception. Architecture fonctionnelle et UX/UI = **cycles SFIA distincts normaux** (pas des réserves anormales).
> Stack / BDD / API / protocole = **routés** vers le cycle 6 — Architecture technique (gate OPS1 technique futur / `G-OPS1-TECH-ARCH` si établi).
> Identifiants `OPS1-FD-CAND-*` / `OPS1-FR-*` = locaux à ce cycle — distincts des `OPS1-CAND-*` (cadrage) et des `FD-CAND-*` historiques (`08`–`10`).
> Aucun claim MVP, production-ready, industrialisation, OPS1 prouvé ou READY FOR DELIVERY.

### Distinction POC / OPS1 / MVP

| Terme | Définition fonctionnelle |
|-------|--------------------------|
| **POC** | Phase produit maintenue ; Studio n’est pas un produit industrialisé |
| **OPS1** | Slice opérationnel : conversation GPT **réelle** + action Markdown **gouvernée** |
| **MVP futur** | Piloter un projet bout en bout — **fermé** ; GO distinct (`G-OPS1-MVP-TRAJECTORY`) |
| **Socle `08`–`10`** | Conception générique Studio déjà validée ; OPS1 **spécialise** sans l’invalider |

---

## 1. Objet et portée
```

### §1.7 Réserves de conception

```markdown
### 1.7 Réserves de conception (ouvertes)

- Valeurs numériques FinOps (seuils, budgets chiffrés, modèles autorisés, plafonds session/jour) — **OPEN**, non bloquantes pour la validation fonctionnelle ; à décider **avant** ouverture live ;
- Mécanisme exact de continuation après `CLOSE` (lien de sessions) — `OPS1-FD-CAND-13` ;
- Fichier Markdown Campus360 exact — `G-OPS1-SCENARIO-VAL` ;
- Convention de branche Campus360 exacte — `G-OPS1-SCENARIO-VAL` ;
- Preuve live non réalisée ;
- CI distante non prouvée ;
- Isolation OS/réseau non industrialisée.

```

### §1.8 Sujets routés

```markdown
### 1.8 Sujets explicitement routés (≠ réserves de conception)

| Sujet | Destination |
|-------|-------------|
| Architecture fonctionnelle | Cycle distinct — `G-OPS1-FUNC-ARCH` (séquence méthode SFIA normale) |
| UX/UI + Figma | Cycle distinct — `G-OPS1-UX` (séquence méthode SFIA normale) |
| Stack / BDD / API / protocole | Cycle **6 — Architecture technique** ; gate OPS1 technique futur (`G-OPS1-TECH-ARCH` si établi) |
| Backlog / delivery / live | Gates distincts — **fermés** |
| Sélection fichier/branche Campus360 | `G-OPS1-SCENARIO-VAL` |

---

```

### §7.3 FinOps

```markdown
### 7.3 FinOps

- Compteurs séparés conversation / structuration / analyse ;
- Budgets session et journalier **candidats** ; alertes de seuil ; confirmation avant coût élevé / changement de modèle ;
- Condensation contrôlée ; aucun retry automatique ;
- Libre ≠ illimité ;
- **Valeurs numériques OPEN** (seuils, plafonds, modèles autorisés) — **non bloquantes** pour la validation de la conception fonctionnelle ;
- Ces valeurs doivent être **décidées avant l’ouverture live** (GO FinOps / live distinct) — pas dans ce cycle.

```

### §10 Points ouverts et routage

```markdown
## 10. Points ouverts et routage

| Sujet | Destination | Nature |
|-------|-------------|--------|
| Validation de cette conception (`OPS1-FD-CAND-*`) | `G-OPS1-FUNC-DESIGN-VAL` | Décision Morris |
| Noms techniques définitifs d’états/champs | Conception / archi fonctionnelle | Ajustement normal |
| Surfaces conversation / Figma | Cycle UX — `G-OPS1-UX` | **Cycle distinct normal** |
| Architecture fonctionnelle | Cycle — `G-OPS1-FUNC-ARCH` | **Cycle distinct normal** |
| Stack / BDD / API / protocole | Cycle **6 — Architecture technique** (`G-OPS1-TECH-ARCH` si établi) | **Routé** — hors réserves conception |
| Découpage I1–I7 en stories | `G-OPS1-BACKLOG` | Fermé |
| Implémentation / live GPT / Cursor | Delivery / live (gates distincts) | Fermé |
| Fichier Markdown + branche Campus360 | `G-OPS1-SCENARIO-VAL` | Réserve conception |
| Plafonds FinOps numériques | GO avant live | Réserve conception (non bloquante pour FUNC-DESIGN-VAL) |
| Mécanisme continuation après CLOSE | Archi fonctionnelle / UX | Réserve conception (`OPS1-FD-CAND-13`) |

---

```

### §11 Scénario pilote Campus360

```markdown
## 11. Scénario pilote Campus360 — critères de sélection (sans choix définitif)

### 11.1 Ancrage projet

- Le scénario pilote **fonctionnel** OPS1 est réalisé **exclusivement** dans le contexte du projet **Campus360**.
- Campus360 fournit le **contexte métier et documentaire** du pilote.
- OPS1 reste un **slice de SFIA Studio** — **pas** une fonctionnalité propre au produit Campus360.
- Le pilote **ne modifie pas** la méthode SFIA (`method/**`, `prompts/**`) ni les chemins protégés (`app/**`, `harness/**`, `.github/**`, lockfiles, secrets).
- Le Markdown doit appartenir à un **périmètre documentaire Campus360 non protégé**.

### 11.2 Critères fonctionnels de sélection du fichier

1. **Rattachement explicite à Campus360** ;
2. faible risque ;
3. document **non protégé** ;
4. modification **locale**, **réversible** et **observable** ;
5. contenu **substantiel** ;
6. **aucune donnée sensible** (secret / PII) ;
7. **aucune dépendance de déploiement** ;
8. **diff facilement vérifiable** ;
9. utile pour démontrer conversation, action, gate, Cursor, rapport, correction et clôture.

### 11.3 Non choisis dans ce cycle

Chemin exact du fichier ; nom de branche ; contenu exact de la demande métier pilote.
Gate : **`G-OPS1-SCENARIO-VAL`**.

---

```

### §12 Critères de passage

```markdown
## 12. Critères de passage (candidats) — séquence méthode normale

| Vers | Critères candidats | Nature |
|------|-------------------|--------|
| Architecture fonctionnelle | Conception validée Morris (`G-OPS1-FUNC-DESIGN-VAL`) ; objets/états stables | Cycle distinct **normal** — `G-OPS1-FUNC-ARCH` |
| UX/UI | Conception validée ; besoins de surfaces stables ; Figma sous GO UX | Cycle distinct **normal** — `G-OPS1-UX` |
| Architecture technique | Après besoins stables ; stack/BDD/API/protocole | Cycle **6** — hors conception |
| Backlog | Conception (+ éventuellement UX/archi fct) validées ; I1–I7 candidats de découpage | `G-OPS1-BACKLOG` — fermé |
| Delivery / live | Backlog + GO delivery/live distincts | Jamais ouverts par ce document |

---

```

### §13 Verdict

```markdown
## 13. Verdict documentaire

`functional-design-candidate-for-morris-validation`

`SFIA STUDIO OPS1 FUNCTIONAL DESIGN AMENDED — READY FOR MORRIS VALIDATION`

Validation Morris de la conception : soumise à **`G-OPS1-FUNC-DESIGN-VAL`**. Aucun cycle architecture / UX / backlog / delivery / live / MVP ouvert automatiquement.
```

---

## Sections amendées — document 46

### FLOW-32 Campus360

```markdown
### OPS1-FLOW-32 — Scénario pilote Campus360 bout en bout (capacités)

| Champ | Contenu |
|-------|---------|
| **Objectif** | Enchaîner conversation → action → gate → exec → post-exec → clôture **dans le contexte exclusif Campus360**, sans script de phrases. |
| **Préconditions** | GO live conversation + live Cursor distincts consommés (futurs) ; fichier Markdown Campus360 + branche choisis sous `G-OPS1-SCENARIO-VAL` ; hors `method/**` / chemins protégés. |
| **Déclencheur** | Morris lance le scénario pilote OPS1 **Campus360**. |
| **Acteurs** | Tous |
| **États avant/après** | CLOSED avec summary |
| **Données produites** | Pack preuves complet ; ancrage projet Campus360 |
| **Preuves attendues** | Démonstration opératoire OPS1 (Studio) sur pilote Campus360 |
| **Critères associés** | Critères 1–17 ; critères sélection §11 doc 45 |
| **Décisions Morris** | GO action + clôture |
| **Hors périmètre** | Hors cycle conception actuel — capacité cible ; **ne fige pas** phrases, fichier exact, branche exacte ni demande métier exacte ; OPS1 ≠ feature produit Campus360 |

**Étapes nominales :**
   1. FLOW-01 (session ancrée contexte Campus360)
   2. Multi-tours FLOW-03/04/05
   3. FLOW-06→10→11 (action Markdown Campus360 non protégé)
   4. FLOW-15→18
   5. FLOW-20→21→23→24
   6. Preuves 1–17

**Alternatives :**
   - Branches sans action FLOW-09
   - NO-GO FLOW-12
   - Échec FLOW-19

**Erreurs et STOP :**
   - STOP / FAILED selon cas
   - Tentative hors périmètre Campus360 / chemins protégés → refus



```

### Règles de reprise (CLOSE)

```markdown
## 5. Règles de reprise

1. Recharger journal et objets sans inventer (FLOW-02, 27).
2. Si ambiguïté d’état d’exécution → `STOPPED` / `FAILED` / lecture seule.
3. Session `CLOSED` : **immuable** ; reprise **lecture** par défaut ; reprendre une activité = **continuation ou nouvelle session liée** — **pas** de mutation silencieuse de l’historique clôturé (`OPS1-FD-CAND-13`).
4. Git HEAD divergent : signaler ; bloquer exec jusqu’à resynchronisation fonctionnelle.
5. Draft UI non soumis : non obligatoire de survivre.

---

```

---

## Sections amendées — document 47 (FD-CAND)

```markdown
### OPS1-FD-CAND-13 — Clôture et continuation après CLOSE

| Élément | Contenu |
|---------|---------|
| **Observation** | Une session clôturée ne doit pas être mutée silencieusement. |
| **Héritage validé (cadrage)** | Critère 17 ; CAP-19/20. |
| **Option** | Réouverture mutante de la même session vs continuation / nouvelle session liée. |
| **Recommandation** | Session `CLOSED` **immuable** ; consultation possible ; reprendre une activité crée une **continuation** ou une **nouvelle session liée** ; mécanisme exact à confirmer en architecture fonctionnelle / UX. |
| **Décision candidate** | Clôture explicite ; **aucune** réouverture silencieuse ; préférence continuation / session liée. |
| **Réserve** | Mécanisme exact de lien/continuation OPEN (à trancher hors validation fonctionnelle pure). |
| **Statut** | `CANDIDATE WITH RESERVATION` |
| **Décision Morris attendue** | Valider le principe d’immutabilité + continuation liée ; laisser le mécanisme détaillé aux cycles suivants. |


### OPS1-FD-CAND-15 — Principes fonctionnels FinOps

| Élément | Contenu |
|---------|---------|
| **Observation** | Libre ≠ illimité ; chiffres non encore arbitrés. |
| **Héritage validé (cadrage)** | OPS1-CAND-14 VALIDÉ AVEC RÉSERVE. |
| **Option** | Fixer seuils maintenant vs plus tard. |
| **Recommandation** | Valider principes (compteurs séparés, alertes, no retry, confirmation coût élevé) ; **garder OPEN** valeurs numériques, seuils, modèles, plafonds session/jour. |
| **Décision candidate** | Principes FR-023 / FLOW-29 retenus ; chiffres OPEN ; **non bloquants** pour `G-OPS1-FUNC-DESIGN-VAL` ; **à décider avant live**. |
| **Réserve** | Valeurs numériques À définir sous GO distinct avant live. |
| **Statut** | `CANDIDATE WITH RESERVATION` |
| **Décision Morris attendue** | Valider principes FinOps ; confirmer non-blocage pour validation fonctionnelle. |


### OPS1-FD-CAND-20 — Critères de sélection du Markdown pilote Campus360

| Élément | Contenu |
|---------|---------|
| **Observation** | Le pilote d’action doit être borné à un contexte projet clair. |
| **Héritage validé (cadrage)** | OPS1-CAND-01 ; `G-OPS1-SCENARIO-VAL` fermé. |
| **Option** | Multi-projets vs Campus360 exclusif. |
| **Recommandation** | Critères §11 doc 45 : rattachement **Campus360** ; non protégé ; faible risque ; local/réversible/observable ; substantiel ; sans sensible ; sans déploiement ; diff vérifiable ; utile au BeB. |
| **Décision candidate** | Critères Campus360 adoptés ; **fichier / branche / demande exacte OPEN** sous `G-OPS1-SCENARIO-VAL`. |
| **Réserve** | Sélection exacte non faite. |
| **Statut** | `RECOMMENDED FOR MORRIS VALIDATION` |
| **Décision Morris attendue** | Valider les critères Campus360, pas le fichier. |


### OPS1-FD-CAND-21 — Passage vers architecture fonctionnelle (cycle distinct normal)

| Élément | Contenu |
|---------|---------|
| **Observation** | L’architecture fonctionnelle n’est pas une dette de la conception. |
| **Héritage validé (cadrage)** | Séquence méthode SFIA ; `G-OPS1-FUNC-ARCH` fermé. |
| **Option** | Traiter l’absence d’archi fct comme réserve anormale (rejeté). |
| **Recommandation** | Qualifier le passage comme **cycle distinct normal** après `G-OPS1-FUNC-DESIGN-VAL`. |
| **Décision candidate** | Critères §12 doc 45 ; **pas** une réserve de conception. |
| **Réserve** | — |
| **Statut** | `CANDIDATE` |
| **Décision Morris attendue** | Confirmer le séquencement normal vers `G-OPS1-FUNC-ARCH`. |


### OPS1-FD-CAND-22 — Passage vers UX/UI (cycle distinct normal)

| Élément | Contenu |
|---------|---------|
| **Observation** | Figma / UX visuelle hors cycle conception. |
| **Héritage validé (cadrage)** | `G-OPS1-UX` fermé. |
| **Option** | Traiter l’absence d’UX comme réserve anormale (rejeté). |
| **Recommandation** | Besoins de surfaces déjà listés ; UX = **cycle distinct normal**. |
| **Décision candidate** | Passage UX selon §12 ; pas de Figma ici ; **pas** une réserve de conception. |
| **Réserve** | Ordre exact vs archi fct OPEN (arbitrage de trajectoire, pas dette). |
| **Statut** | `CANDIDATE` |
| **Décision Morris attendue** | Confirmer le séquencement normal vers `G-OPS1-UX`. |


### OPS1-FD-CAND-23 — Passage vers backlog

| Élément | Contenu |
|---------|---------|
| **Observation** | I1–I7 = trajectoire cadrage, pas backlog. |
| **Héritage validé (cadrage)** | OPS1-CAND-10 réserve. |
| **Option** | Transformer I1–I7 en stories maintenant. |
| **Recommandation** | Interdit tant que `G-OPS1-BACKLOG` fermé. |
| **Décision candidate** | Backlog seulement sous GO distinct après conception (+ UX/archi fct éventuelles). |
| **Réserve** | — |
| **Statut** | `RECOMMENDED FOR MORRIS VALIDATION` |
| **Décision Morris attendue** | Confirmer non-ouverture backlog. |


### OPS1-FD-CAND-24 — Réserves de conception (liste amendée)

| Élément | Contenu |
|---------|---------|
| **Observation** | Certaines « réserves » antérieures étaient en réalité des routages de cycles. |
| **Héritage validé (cadrage)** | Réserves cadrage 44 §7. |
| **Option** | Tout maintenir indistinctement. |
| **Recommandation** | **Réserves conception :** FinOps numériques ; continuation après CLOSE ; fichier/branche Campus360 ; preuve live ; CI distante ; isolation OS/réseau. **Non-réserves :** archi fct / UX (cycles normaux) ; stack/BDD/API/protocole (routés archi technique). |
| **Décision candidate** | Adopter la liste §1.7–1.8 doc 45. |
| **Réserve** | Les réserves listées restent ouvertes. |
| **Statut** | `RECOMMENDED FOR MORRIS VALIDATION` |
| **Décision Morris attendue** | Confirmer la liste amendée des réserves. |


### OPS1-FD-CAND-25 — Verdict candidat de conception (amendé)

| Élément | Contenu |
|---------|---------|
| **Observation** | Conception produite puis amendée (Campus360, routage, CLOSE). |
| **Héritage validé (cadrage)** | Cadrage validé avec réserves ; docs 41–44 sur main. |
| **Option** | Claim READY FOR DELIVERY (interdit). |
| **Recommandation** | Statut candidate ; prêt pour validation Morris sous `G-OPS1-FUNC-DESIGN-VAL`. |
| **Décision candidate** | Verdict : `SFIA STUDIO OPS1 FUNCTIONAL DESIGN AMENDED — READY FOR MORRIS VALIDATION`. |
| **Réserve** | Validation Morris non consommée ; pas OPS1 prouvé. |
| **Statut** | `RECOMMENDED FOR MORRIS VALIDATION` |
| **Décision Morris attendue** | Consommer `G-OPS1-FUNC-DESIGN-VAL` (valider / amender / refuser) ; ne pas ouvrir delivery/live/MVP. |


### OPS1-FD-CAND-26 — Contexte projet du scénario pilote (Campus360)

| Élément | Contenu |
|---------|---------|
| **Observation** | Sans ancrage projet, le pilote Markdown reste ambigu. |
| **Héritage validé (cadrage)** | Action Markdown locale (OPS1-CAND-01) ; fichier exact non choisi. |
| **Option** | Projet libre vs Campus360 exclusif vs multi-projets. |
| **Recommandation** | **Campus360 exclusivement** pour le scénario pilote OPS1 ; OPS1 = slice Studio, pas feature Campus360 ; sélection exacte fichier/branche/demande sous `G-OPS1-SCENARIO-VAL`. |
| **Décision candidate** | Pilote d’action OPS1 **uniquement** dans le périmètre Campus360 (critères §11 doc 45 ; FLOW-32). |
| **Réserve** | Fichier et branche exacts non sélectionnés. |
| **Statut** | `RECOMMENDED FOR MORRIS VALIDATION` |
| **Décision Morris attendue** | Valider l’ancrage Campus360 exclusif. |



---

```

---

## Évolution des réserves

| Avant (conception initiale) | Après amendement |
|-----------------------------|------------------|
| Stack/BDD/API/protocole = réserves conception | **Routés** architecture technique |
| Archi fct / UX = réserves / dette | **Cycles distincts normaux** |
| FinOps chiffres = réserve | **Réserve OPEN non bloquante** |
| Fichier/branche génériques | **Campus360** ; exact sous SCENARIO-VAL |
| Réouverture CLOSE vague | **Immuable + continuation / session liée** |

**Réserves finales conception :** FinOps numériques ; continuation CLOSE ; fichier/branche Campus360 ; preuve live ; CI distante ; isolation OS/réseau.

---

## Contrôles

| Contrôle | Résultat |
|----------|----------|
| Seuls 41 + 45–47 | OK |
| 42–44 / README intacts | OK |
| Cohérence Campus360 45/46/47 | OK |
| FLOW-32 aligné | OK |
| FD-CAND-01…26 ; aucune VALIDATED | OK |
| Pas de sélection fichier/branche | OK |
| Stack/API non décidés | OK |
| Archi/UX/backlog/delivery/live fermés | OK |
| `git diff --check` | OK |
| TODO/FIXME/TBD | Aucun |
| Claims MVP/production | Absents |
| Staged / commit / push / PR | Absents |

## Décisions Morris encore attendues

1. `G-OPS1-FUNC-DESIGN-VAL` sur `OPS1-FD-CAND-01`…`26`.
2. Confirmation Campus360 (26) + critères (20) + réserves (24) + CLOSE (13).
3. Aucune ouverture auto des cycles suivants.

## Git status final

```text
 M projects/sfia-studio/41-operational-vertical-slice-1-framing.md
?? .tmp-sfia-review/
?? projects/.tmp-sfia-review/
?? projects/sfia-studio/45-ops1-functional-design.md
?? projects/sfia-studio/46-ops1-functional-flows-and-rules.md
?? projects/sfia-studio/47-ops1-functional-decision-pack.md
```

## Handoff

- Branche : `sfia/review-handoff`
- SHA handoff tip : `53d52c818bd0dd98428be4689d1b9c5119be82dc` (`origin/sfia/review-handoff`)

## Verdict

**SFIA STUDIO OPS1 FUNCTIONAL DESIGN AMENDED — READY FOR MORRIS VALIDATION**
