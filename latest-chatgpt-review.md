# SFIA Review Pack — FULL mono-cycle
## Campus360 — Pré-cadrage / opportunité

| Métadonnée | Valeur |
|------------|--------|
| **Date / heure** | 2026-07-17 11:14:22 CEST |
| **Repo** | `mcleland147/sfia-workspace` |
| **Cycle projet** | 1 — Cadrage (sous-angle : pré-cadrage / opportunité) |
| **Profil SFIA** | Critical |
| **Typologie** | DOC |
| **Baseline** | SFIA v2.6 |
| **Branche** | `project/campus360-opportunity-framing` |
| **HEAD** | `c10f1c4282ed1ed6114e4961ff0c2658d4d7ce7e` |
| **origin/main** | `c10f1c4282ed1ed6114e4961ff0c2658d4d7ce7e` |
| **Review pack** | FULL — content-complete, anti-stub |
| **Review Handoff Git** | **required** |
| **Verdict cycle proposé** | `CAMPUS360 PRE-FRAMING COMPLETE — MORRIS OPPORTUNITY DECISION REQUIRED` |
| **Verdict décision proposé** | `GO — PROCEED TO DETAILED FRAMING` *(proposition — décision Morris exclusive)* |

---

## 0. Instruction ChatGPT obligatoire

Analyser ce Review Handoff Git :

- branche : `sfia/review-handoff`
- fichier : `sfia-review-handoff/latest-chatgpt-review.md`

La revue doit vérifier :

1. pertinence de Campus360 comme projet étalon ;
2. crédibilité du périmètre ;
3. différenciation avec Chantiers360 et Interv360 ;
4. couverture réaliste des 15 cycles ;
5. proportionnalité ;
6. risques de surcomplexité ;
7. séparation projet / méthode ;
8. qualité du decision pack ;
9. caractère réellement exploitable des documents ;
10. décision GO / GO avec réserves / NO-GO à recommander à Morris.

---

## 1. Git truth

```text
Workspace: /Users/morris/Projects/sfia-workspace
Repo:      mcleland147/sfia-workspace
Branch:    project/campus360-opportunity-framing
HEAD:      c10f1c4282ed1ed6114e4961ff0c2658d4d7ce7e
origin/main: c10f1c4282ed1ed6114e4961ff0c2658d4d7ce7e
merge-base:  c10f1c4282ed1ed6114e4961ff0c2658d4d7ce7e (aligned)
Working tree: untracked only — projects/campus360/ + tmp/handoff artefacts
NO commit on project branch (awaiting Morris GO)
NO push of project branch
```

### git status --short

```text
?? .sfia/
?? .tmp-sfia-review/
?? projects/campus360/
?? sfia-review-handoff/
```

### Fichiers créés (untracked projet)

```text
?? projects/campus360/README.md
?? projects/campus360/01-opportunity-and-vision.md
?? projects/campus360/02-sfia-cycle-coverage-hypothesis.md
?? projects/campus360/03-pre-framing-decision-pack.md
```

---

## 2. Qualification du cycle

| Champ | Valeur |
|-------|--------|
| Type | Cycle 1 — Cadrage |
| Sous-angle | Pré-cadrage / opportunité |
| Profil | Critical |
| Justification Critical | Nouveau projet étalon structurant ; multi-domaines ; arbitrages futurs ; trajectoire longue ; séparation projet/méthode ; risque surdimensionnement |
| Typologie v2.4 | DOC |
| Review pack | FULL |
| Handoff | required |

---

## 3. Sources lues

1. `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
2. `prompts/templates/sfia-cycle-execution-template.md`
3. `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
4. `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
5. `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md`
6. `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-16-sfia-v2.6-baseline-release-manifest.md`
7. PR #204 / #205 (via `gh pr view`)
8. `projects/README.md`, `projects/chantiers360-v2/README.md`, `projects/chantiers360-v2/00-framing/2026-07-05-detailed-framing.md`, `projects/interv360/README.md`, `projects/interv360/01-cadrage/mvp-arbitration-validation.md`

Aucune source méthode modifiée.

---

## 4. Convention repository retenue

Chemin canonique projets : `projects/<nom>/` (cf. `projects/README.md`, Chantiers360, Interv360).

Pour le pré-cadrage, structure plate sous `projects/campus360/` (4 fichiers) — les dossiers numérotés type `00-framing/` seront pertinents au **cadrage détaillé** après GO.

---

## 5. Synthèse opportunité (non substitut aux fichiers)

Campus360 = plateforme nationale fictive de services campus, multi-populations / multi-domaines / intégrations / conformité / RUN. MVP pressenti borné : identité + catalogue + réservation d’espaces + tranche notifications/pilotage/intégration identité simulée. Alternatives étudiées : Mairie360, FleetOps360. Recommandation : GO cadrage détaillé.

---

## 6. Contrôles exécutés

| Contrôle | Résultat |
|----------|----------|
| Local Git Truth Check | PASS — aligné origin/main ; pas de doc Campus360 concurrente ; pas de branche Campus360 existante |
| git status --short | Untracked attendus uniquement |
| git diff --check | PASS (pas de diff tracké) |
| Liste fichiers créés | 4 fichiers sous `projects/campus360/` |
| Hors périmètre | Aucune modif method/prompts/code |
| Absence de code | PASS |
| Cohérence statut `pre-framing` | PASS |
| Cohérence nom Campus360 | PASS |
| Matrice 15 cycles | PASS (15 sections) |
| Distinction obligatoire/activable/conditionnel | PASS |
| Observation / recommandation / décision | PASS — décision Morris non prise |
| Liens relatifs internes | PASS |
| Anti-surcomplexité | PASS — MVP phasé, cycles non forcés |
| Mentions SFIA 3.0 | Uniquement en garde-fou / exclusion |

---

## 7. Réserves

1. Working tree comporte des artefacts non trackés historiques (`.tmp-sfia-review/`, `.sfia/`, worktree handoff) — **expliqués**, hors livrable Campus360.
2. Nom Campus360 **provisoire**.
3. Positionnement national vs mono-campus MVP = question ouverte Morris.
4. Branche projet **non commitée** volontairement (GO Morris requis).

Aucune réserve bloquante identifiée pour la décision d’opportunité.

---

## 8. Rapport de décision (proposition)

| Élément | Proposition |
|---------|-------------|
| Verdict proposé | `GO — PROCEED TO DETAILED FRAMING` |
| Verdict cycle | `CAMPUS360 PRE-FRAMING COMPLETE — MORRIS OPPORTUNITY DECISION REQUIRED` |
| Décideur | Morris uniquement |
| Prochain cycle | Cadrage détaillé |

---

## 9. Contenu intégral des fichiers créés


### Fichier : `projects/campus360/README.md`

```markdown
# Campus360

| Métadonnée | Valeur |
|------------|--------|
| **Identité** | Campus360 — plateforme fictive nationale de gestion de campus et de services |
| **Nom provisoire** | Campus360 *(nom définitif soumis à arbitrage Morris)* |
| **Statut** | `pre-framing` |
| **Baseline méthode** | **SFIA v2.6** (baseline opérationnelle officielle) |
| **Autorité** | Morris (L0) |
| **Exécuteur** | Cursor — cycle documentaire borné |
| **Typologie cycle** | DOC |
| **Cycle projet** | 1 — Cadrage (sous-angle : pré-cadrage / opportunité) |
| **Profil SFIA** | Critical |
| **Branche** | `project/campus360-opportunity-framing` |
| **Chemin** | `projects/campus360/` |

---

## 1. Finalité du projet

Campus360 est un **projet produit fictif étalon**, destiné à appliquer et éprouver la baseline opérationnelle **SFIA v2.6** sur une trajectoire projet plus substantielle que Chantiers360 et Interv360.

Il vise à offrir un terrain crédible pour :

- plusieurs domaines fonctionnels ;
- plusieurs populations et niveaux d’habilitation ;
- des intégrations externes ;
- une couverture potentielle des cycles projet SFIA (sans forçage artificiel) ;
- des typologies ultérieures INC / EVOL / RUN / DOC / CAPA.

**Campus360 n’est pas un véhicule de promotion SFIA 3.0.** Il applique SFIA v2.6 telle qu’officialisée.

---

## 2. Documents du socle de pré-cadrage

| Document | Rôle |
|----------|------|
| [README.md](./README.md) | Identité, statut, navigation, règles de séparation |
| [01-opportunity-and-vision.md](./01-opportunity-and-vision.md) | Opportunité, vision, populations, domaines, risques, recommandation |
| [02-sfia-cycle-coverage-hypothesis.md](./02-sfia-cycle-coverage-hypothesis.md) | Hypothèse de couverture des 15 cycles + transverses |
| [03-pre-framing-decision-pack.md](./03-pre-framing-decision-pack.md) | Support de décision Morris (GO / réserves / NO-GO) |

Aucun autre document projet n’est créé dans ce cycle.

---

## 3. État courant

| Élément | État |
|---------|------|
| Pré-cadrage / opportunité | **En revue** — documents produits, décision Morris attendue |
| Cadrage détaillé | Non démarré |
| Conception / architecture / UX / delivery | Hors périmètre de ce cycle |
| Commit branche projet | **Interdit** sans GO Morris |
| Push / PR / merge branche projet | **Interdits** sans GO Morris |

---

## 4. Décisions en attente (Morris)

1. Valider ou rejeter Campus360 comme projet étalon.
2. Valider le périmètre initial proposé (voir decision pack).
3. Autoriser ou non le passage au **cadrage détaillé**.
4. Valider éventuelle confirmation / modification du nom.
5. Autoriser commit / push / PR de la branche projet *(séparément)*.

---

## 5. Hors périmètre (ce cycle)

- Code applicatif, initialisation d’application, stack définitive
- Architecture technique détaillée, modèle de données détaillé, schémas d’API
- Backlog d’implémentation, user stories delivery, maquettes UX/UI, Figma
- Infrastructure cloud, CI/CD, tests, déploiement
- Modification de la méthode SFIA, doctrine, promotion SFIA 3.0
- Modification de Chantiers360 ou Interv360
- Push / PR / merge de la branche projet

---

## 6. Source de vérité

| Niveau | Source |
|--------|--------|
| **Méthode** | Git `main` — documents SFIA v2.6 canoniques |
| **Projet Campus360** | Documents versionnés sous `projects/campus360/` *(après GO commit)* |
| **Décisions structurantes** | Morris uniquement |

Git `main` prime sur toute mémoire conversationnelle ou copie locale.

---

## 7. Règle de séparation projet / méthode / capitalisation

| Couche | Contenu autorisé | Contenu interdit |
|--------|------------------|------------------|
| **Projet produit** | Vision, périmètre, hypothèses, trajectoire Campus360 | Modification des documents SFIA canoniques |
| **Actifs réutilisables** | Patterns observés *ultérieurement*, templates projet | Promotion implicite en standard méthode |
| **Observations méthodologiques** | Limites, frictions, pistes (dans docs projet ou REX) | Doctrine SFIA nouvelle |
| **Capitalisation SFIA** | Cycle CAPA dédié, GO Morris, hors ce pré-cadrage | Relancer SFIA 3.0 via Campus360 |

> Un apprentissage issu de Campus360 ne devient standard SFIA que via un **cycle de capitalisation** explicite, avec gate Morris.
```

---

### Fichier : `projects/campus360/01-opportunity-and-vision.md`

```markdown
# Campus360 — Opportunité et vision

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | Campus360 (nom provisoire) |
| **Document** | `01-opportunity-and-vision.md` |
| **Cycle** | 1 — Cadrage / pré-cadrage opportunité |
| **Profil** | Critical |
| **Typologie** | DOC |
| **Baseline** | SFIA v2.6 |
| **Statut** | Draft — décision Morris requise |
| **Autorité** | Morris |

> Ce document est un **socle d’opportunité**. Il ne constitue pas un cadrage détaillé, une architecture, ni un backlog.

---

## 1. Résumé exécutif

Après Chantiers360 (MVP métier borné) et Interv360 (orchestration SAV / interventions avec intégrations simulées), Morris dispose d’une baseline **SFIA v2.6** officialisée (PR #204 / #205) et d’une méthode déjà éprouvée sur des projets relativement bornés.

**Campus360** propose un projet fictif plus substantiel : une plateforme nationale de gestion de campus et de services, multi-populations, multi-domaines, avec intégrations externes et enjeux de conformité, accessibilité, exploitation et évolutivité.

**Recommandation de ce document :** retenir Campus360 comme **candidat projet étalon**, sous réserve d’un **périmètre initial phasé** et d’un cadrage détaillé ultérieur — sans forcer artificiellement les 15 cycles projet.

**Verdict proposé au decision pack :** `GO — PROCEED TO DETAILED FRAMING` *(proposition Cursor/ChatGPT — décision Morris exclusive)*.

---

## 2. Contexte

| Élément | État |
|---------|------|
| Baseline méthode | SFIA v2.6 = baseline opérationnelle officielle |
| Chantiers360 | MVP capitalisé avec réserves — domaine unique (suivi chantier), parcours delivery complet |
| Interv360 | Projet de référence — SAV / interventions, intégrations simulées, arbitrages MVP riches |
| Besoin Morris | Projet fictif plus durable pour éprouver SFIA v2.6 sur trajectoire longue |
| Risque | Surdimensionnement, complexité artificielle, confusion projet / méthode |

Les projets antérieurs ont validé une partie importante de la méthode (cadrage → delivery → QA → capitalisation, typologies INC, partiellement EVOL/DOC/CAPA). Ils restent **insuffisants** pour stress-tester durablement :

- multi-domaines fonctionnels réellement couplés ;
- multi-habilitations / multi-populations ;
- sécurité / RGPD structurants ;
- RUN / observabilité / release à échelle ;
- cycles encore peu exercés (sécurité RSSI, observabilité, DevOps intégration, certains transverses).

---

## 3. Problème fictif adressé

Dans un réseau national de campus (universités, cités universitaires, campus multi-sites), les services du quotidien sont **fragmentés** :

- réservation de salles, logements, restauration, sport, événements gérés dans des outils distincts ;
- identités et droits dispersés (étudiants, personnels, prestataires, visiteurs) ;
- faible vision transverse pour les gestionnaires de campus ;
- intégrations partielles ou absentes avec SI académique, paiement, contrôle d’accès ;
- conformité (RGPD, accessibilité service public) traitée en silo ;
- exploitation (incidents, disponibilité, pics de rentrée) peu industrialisée.

**Besoin fictif :** une plateforme unifiée de services campus, capable de piloter plusieurs domaines et populations, avec une gouvernance d’accès claire et une trajectoire d’évolution réaliste.

---

## 4. Opportunité

| Dimension | Opportunité |
|-----------|-------------|
| **Produit** | Scénario métier crédible, compréhensible, durable |
| **Méthode** | Terrain pour appliquer SFIA v2.6 sans créer de nouvelle doctrine |
| **Couverture cycles** | Potentiel élevé de cycles naturels (pas de checklist forcée) |
| **Différenciation** | Multi-domaines + multi-populations + intégrations + conformité + RUN |
| **Capitalisation** | Observations méthodologiques futures, sans promotion SFIA 3.0 |

Campus360 est retenu comme **hypothèse principale** car il combine complexité **légitime** (pas purement technique) et valeur fonctionnelle **évaluable**.

---

## 5. Vision produit

> Campus360 est une plateforme nationale de services campus qui permet aux étudiants, personnels, gestionnaires et partenaires de **découvrir, réserver, consommer et piloter** les services du quotidien (espaces, logement, restauration, événements, communication opérationnelle), sous une identité et des habilitations cohérentes, avec une exploitation fiable à l’échelle nationale.

### Caractéristiques de vision (ouvertes, non préemptives)

| Aspect | Orientation |
|--------|-------------|
| **Unification** | Un socle de services et d’identité, pas une collection d’applis isolées |
| **Progressivité** | MVP phasé par domaines prioritaires — pas « tout le campus » d’emblée |
| **Multi-populations** | Étudiants, personnels, admins campus, prestataires, éventuellement visiteurs |
| **Intégrations** | SI académique / identité, paiement, notifications, éventuellement contrôle d’accès |
| **Conformité** | RGPD et accessibilité comme contraintes de conception, pas d’add-on tardif |
| **Exploitation** | Conception compatible RUN (observabilité, incidents, pics saisonniers) |

La vision reste **volontairement ouverte** : aucun choix de stack, aucun schéma d’API, aucune maquette, aucun backlog d’implémentation dans ce cycle.

---

## 6. Proposition de valeur

| Bénéficiaire | Valeur |
|--------------|--------|
| **Étudiant / usager** | Accès simple aux services campus sans multiplier les outils |
| **Personnel / gestionnaire** | Pilotage opérationnel unifié (occupation, réservations, incidents de service) |
| **Direction campus** | Visibilité nationale / multi-sites, gouvernance des droits |
| **Prestataires** | Interfaces d’intégration et rôles bornés |
| **Morris / SFIA** | Projet étalon crédible pour trajectoire complète SFIA v2.6 |

---

## 7. Utilisateurs et parties prenantes

### 7.1 Populations candidates

| Population | Rôle principal | Habilitations (hypothèse) |
|------------|----------------|---------------------------|
| **Étudiant** | Consommer services (réservation, logement, resto, événements) | Accès usager, données personnelles propres |
| **Personnel campus** | Consommer + animer services | Accès étendu selon métier |
| **Gestionnaire de service** | Administrer un domaine (salles, resto, événements) | Admin domaine |
| **Administrateur campus** | Gouvernance multi-domaines, habilitations | Admin campus / multi-sites |
| **Prestataire externe** | Opérer un service délégué | Rôle restreint, API / portail limité |
| **Support / RUN** | Incidents, disponibilité, runbooks | Rôles exploitation |
| **RSSI / DPO (parties prenantes)** | Exigences sécurité / conformité | Hors usage métier courant |

### 7.2 Parties prenantes décisionnelles (fictives + SFIA)

| Partie prenante | Intérêt |
|-----------------|--------|
| Morris | Décision produit / méthode / gates |
| « Direction campus nationale » (fictive) | Cohérence multi-sites |
| « DPO / RSSI » (fictifs) | Conformité et sécurité |
| ChatGPT / Cursor | Analyse et exécution bornée — non décideurs |

---

## 8. Domaines fonctionnels candidats

| # | Domaine | Priorité MVP pressentie | Commentaire |
|---|---------|-------------------------|-------------|
| D1 | Identité, rôles, habilitations | **P0** | Socle transverse obligatoire |
| D2 | Catalogue de services & découverte | **P0** | Entrée produit |
| D3 | Réservation d’espaces / salles | **P0** | Domaine cœur crédible et testable |
| D4 | Événements campus | **P1** | Couplage réservation + communication |
| D5 | Communication opérationnelle / notifications | **P1** | Intégrations |
| D6 | Restauration (menus, créneaux, files) | **P2** | Enrichit multi-domaines sans être bloquant |
| D7 | Logement / cités U (demande, attribution légère) | **P2** | Sensible RGPD — à phaser |
| D8 | Pilotage gestionnaire (tableaux de bord) | **P1** | Valeur direction |
| D9 | Intégrations externes (identité, paiement, SI) | **P1** | Contrats + simulation d’abord |
| D10 | Exploitation / incidents de service | **P2** | Prépare RUN — pas un ITSM complet |

**Règle anti-surcomplexité :** le MVP initial pressenti se limite à **D1 + D2 + D3 + une tranche D5/D8/D9**. Les autres domaines sont candidats, non engagés.

---

## 9. Capacités métier principales

1. Authentifier et autoriser des usagers selon population et campus.
2. Publier et découvrir un catalogue de services.
3. Réserver un espace avec règles de disponibilité et conflits.
4. Notifier les acteurs concernés (confirmation, annulation, rappel).
5. Piloter l’occupation et les exceptions côté gestionnaire.
6. Intégrer (réellement ou en simulation contractuelle) un fournisseur d’identité / paiement.
7. Tracer les accès et traitements sensibles (socle auditabilité).
8. Gérer des incidents de service simples (indisponibilité salle, pic de charge).

---

## 10. Contraintes et hypothèses

### 10.1 Contraintes initiales

| Contrainte | Description |
|------------|-------------|
| **Fictif** | Aucun client réel ; données fictives |
| **Baseline** | SFIA v2.6 uniquement — pas de SFIA 3.0 |
| **DOC only (ce cycle)** | Aucun code, aucune archi détaillée |
| **Phasage** | Multi-domaines ≠ livraison simultanée de tous les domaines |
| **Séparation** | Projet ≠ méthode ≠ capitalisation |
| **Gates Morris** | Toute décision structurante reste gated |
| **Accessibilité** | Ambition service public / usagers multiples — exigible ultérieurement |
| **RGPD** | Données personnelles usagers — minimisation dès conception |

### 10.2 Hypothèses (conservatrices)

| ID | Hypothèse |
|----|-----------|
| H1 | Un MVP centré identité + catalogue + réservation d’espaces suffit à démontrer la crédibilité étalon |
| H2 | Les intégrations peuvent démarrer en **contrats + simulation**, comme Interv360, puis durcir |
| H3 | La couverture des 15 cycles est un **potentiel**, pas un engagement de parcours forcé |
| H4 | Le nom « Campus360 » reste provisoire jusqu’à GO Morris |
| H5 | Les pics de rentrée / examens créent des besoins RUN / performance naturels |
| H6 | Le logement et la restauration peuvent attendre un EVOL post-MVP sans affaiblir l’étalon |
| H7 | Campus360 n’a pas vocation à remplacer Chantiers360 / Interv360 — il les complète |

---

## 11. Risques majeurs

| ID | Risque | Impact | Mitigation |
|----|--------|--------|------------|
| R1 | Surdimensionnement « plateforme nationale complète » | Scope creep, échec MVP | Phasage strict D1–D3 ; hors périmètre explicite |
| R2 | Forçage artificiel des 15 cycles | Complexité méthodologique inutile | Matrice obligatoire / activable / conditionnel |
| R3 | Reproduction Chantiers360 « avec plus de modules » | Faible valeur d’apprentissage | Différenciation multi-populations + intégrations + conformité |
| R4 | Confusion projet / méthode / SFIA 3.0 | Pollution baseline | Règle de séparation ; CAPA séparée |
| R5 | Premature architecture / stack | Dette et arbitrages biaisés | Interdit jusqu’aux cycles dédiés |
| R6 | Domaines sensibles (logement, mineurs) trop tôt | Charge RGPD disproportionnée | Exclure ou différer au MVP |
| R7 | Sous-estimer RUN / sécurité | Cycles critiques mal préparés | Identifier tôt sans surspécifier |
| R8 | Nom / identité produit non arbitrés | Divergence documentaire | Nom provisoire + gate |

---

## 12. Différenciation vs Chantiers360 et Interv360

| Critère | Chantiers360 | Interv360 | Campus360 (cible) |
|---------|--------------|-----------|-------------------|
| Domaine métier | Suivi chantier artisan | SAV / interventions | Services campus multi-domaines |
| Populations | Artisan / PME (+ client hors MVP) | Technicien, SAV, dirigeant, client notifié | Étudiants, personnels, admins, prestataires |
| Habilitations | Relativement simples | Rôles simulés enrichis | Multi-niveaux structurants |
| Intégrations | Limitées MVP | Contrats API simulés riches | Identité, paiement, SI, notifications |
| Conformité | Légère | RSSI / conservation documentées | RGPD + accessibilité structurants |
| Échelle | PME | Organisation SAV | Nationale / multi-sites (fictive) |
| RUN | Peu central | Partiel | Pics, disponibilité, incidents de service |
| Rôle SFIA | Pilote v2.0 delivery | Référence orchestration | **Étalon trajectoire longue v2.6** |

Campus360 ne doit **pas** être « Interv360 + plus d’écrans » ni « Chantiers360 multi-modules ». Sa légitimité repose sur le **couplage** populations × domaines × habilitations × intégrations × conformité.

---

## 13. Critères de crédibilité du projet fictif

Campus360 est jugé **crédible** si, et seulement si :

1. Le problème métier est compréhensible sans jargon technique.
2. Au moins **trois populations** distinctes ont des besoins non triviaux.
3. Au moins **deux domaines métier** couplés sont nécessaires au MVP (au-delà d’un CRUD isolé).
4. Au moins **une intégration externe** est structurelle (identité ou paiement ou SI).
5. Des contraintes RGPD / accessibilité sont **réelles** sans exiger une analyse d’impact complète dès le pré-cadrage.
6. Une trajectoire MVP → EVOL → RUN est **pensable** sans scénarios forcés.
7. La complexité n’est pas purement artificielle (pas de modules ajoutés « pour faire des cycles »).
8. Le projet reste **phasable** : un MVP borné existe.

**Auto-évaluation pré-cadrage :** critères 1–8 **satisfaits sous réserve du phasage MVP** (voir §8 et decision pack).

---

## 14. Options alternatives

| Option | Description | Forces | Faiblesses |
|--------|-------------|--------|------------|
| **A — Campus360 (recommandée)** | Plateforme services campus nationale | Multi-domaines naturels, populations riches, conformité, RUN saisonnier | Risque de sur-ambition nationale |
| **B — Mairie360 / CivicServices** | Guichet services municipaux (état civil léger, réservations équipements, signalements) | Très crédible service public, accessibilité forte | Peut chevaucher trop le « portail citoyen » générique ; données régaliennes sensibles |
| **C — FleetOps360** | Gestion de flotte / mobilité d’organisation (véhicules, réservations, maintenance, conducteurs) | Domaines clairs, intégrations IoT/télémétrie, RUN fort | Moins de diversité population usager final ; risque technique (IoT) prématuré |

**Comparaison courte :** B est crédible mais peut forcer trop tôt des contraintes régaliennes. C est excellent pour RUN/DevOps mais plus pauvre en UX multi-populations. **A offre le meilleur équilibre** valeur métier / couverture cycles / différenciation, **si phasé**.

---

## 15. Recommandation

| Élément | Position |
|---------|----------|
| **Recommandation** | Retenir **Campus360** comme projet étalon candidat |
| **Condition** | Périmètre initial borné (identité + catalogue + réservation d’espaces + tranche notifications / pilotage / intégration identité) |
| **Prochain cycle** | Cadrage détaillé (Cycle 1 approfondi) — **après GO Morris** |
| **À ne pas faire** | Lancer conception, architecture, backlog ou code sans gates |
| **Nom** | Conserver Campus360 provisoirement ; confirmer au gate |

**Distinction observation / recommandation / décision :**

- **Observation :** Chantiers360 et Interv360 ne couvrent pas assez multi-populations + conformité + RUN national.
- **Recommandation :** GO vers cadrage détaillé Campus360 phasé.
- **Décision :** **réservée à Morris** — voir `03-pre-framing-decision-pack.md`.
```

---

### Fichier : `projects/campus360/02-sfia-cycle-coverage-hypothesis.md`

```markdown
# Campus360 — Hypothèse de couverture des cycles SFIA

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | Campus360 (nom provisoire) |
| **Document** | `02-sfia-cycle-coverage-hypothesis.md` |
| **Cycle** | 1 — Cadrage / pré-cadrage opportunité |
| **Profil** | Critical |
| **Baseline** | SFIA v2.6 |
| **Statut** | Hypothèse — non engagement de parcours forcé |
| **Référence méthode** | `sfia-v2.5-project-cycles-method-candidate.md` (acquis absorbés v2.6) |

> **Règle :** les 15 cycles projet sont un **référentiel de couverture potentielle**. Aucun cycle n’est obligatoire « parce que Campus360 est l’étalon ». Seuls les déclencheurs réels activent un cycle.

---

## 1. Légende

| Caractère | Signification |
|-----------|---------------|
| **Quasi systématique** | Attendue sur toute trajectoire produit sérieuse (catégorie A) |
| **Activable** | Fortement probable compte tenu du scénario Campus360 (catégorie B) |
| **Conditionnel** | Dépend d’un événement, d’un arbitrage ou d’une phase ultérieure |
| **Déclenché par incident / événement** | INC / RUN / EVOL typiquement ; pas planifié comme checklist |

| Colonne | Sens |
|---------|------|
| **Profil probable** | Hypothèse — à re-qualifier à chaque ouverture de cycle |
| **Preuve opérationnelle** | Ce qui démontrera que le cycle n’est pas artificiel |

---

## 2. Synthèse de couverture

| # | Cycle | Caractère Campus360 | Probabilité trajectoire longue |
|---|-------|---------------------|--------------------------------|
| 1 | Cadrage | Quasi systématique | **Certaine** (en cours) |
| 2 | Conception fonctionnelle | Quasi systématique | **Très élevée** |
| 3 | Architecture fonctionnelle | Activable | **Élevée** (multi-domaines) |
| 4 | UX/UI | Activable | **Élevée** |
| 5 | Backlog / user stories | Quasi systématique | **Très élevée** |
| 6 | Architecture technique | Activable | **Élevée** |
| 7 | Intégration / DevOps | Activable | **Élevée** |
| 8 | Delivery / implémentation | Quasi systématique | **Certaine** (si GO produit) |
| 9 | QA / validation | Quasi systématique | **Certaine** |
| 10 | Sécurité / RSSI | Activable | **Élevée** (multi-hab., RGPD) |
| 11 | Déploiement / release | Activable | **Élevée** |
| 12 | Observabilité / RUN readiness | Activable | **Élevée** (échelle nationale, pics) |
| 13 | PR readiness | Quasi systématique | **Certaine** |
| 14 | Post-merge | Quasi systématique | **Certaine** |
| 15 | Capitalisation / REX | Quasi systématique | **Élevée** (proportionnée) |

**Lecture critique :** la matrice montre un **potentiel élevé**, pas un engagement à exécuter les 15 cycles dans un ordre unique ou dans un délai forcé. Les cycles 3, 7, 10, 12 sont la **valeur différenciante** vs Chantiers360/Interv360 — encore faut-il les déclencher pour de vraies raisons.

---

## 3. Matrice détaillée des 15 cycles

### Cycle 1 — Cadrage

| Champ | Contenu |
|-------|---------|
| **Justification** | Nouveau projet étalon ; arbitrages structurants ; Critical justifié |
| **Déclencheur** | Intention Morris d’initier un projet étalon post-SFIA v2.6 |
| **Entrée** | Intention ; baseline v2.6 ; limites Chantiers360 / Interv360 |
| **Livrable potentiel** | Socle pré-cadrage (ce dossier) puis cadrage détaillé |
| **Dépendances** | Aucune produit ; méthode v2.6 active |
| **Caractère** | Quasi systématique |
| **Profil probable** | Critical (pré-cadrage) puis Standard/Critical (cadrage détaillé selon scope) |
| **Gates Morris** | GO opportunité ; GO périmètre ; GO cadrage détaillé ; GO commit/PR |
| **Risque couverture artificielle** | Faible — cycle naturellement requis |
| **Preuve opérationnelle** | Decision pack tranché ; périmètre fermé |

### Cycle 2 — Conception fonctionnelle

| Champ | Contenu |
|-------|---------|
| **Justification** | Besoins multi-populations et règles de réservation / habilitations |
| **Déclencheur** | GO cadrage détaillé + besoin de formaliser parcours et règles |
| **Entrée** | Vision ; domaines P0 ; contraintes ; hypothèses |
| **Livrable potentiel** | Spec fonctionnelle bornée MVP ; parcours ; règles ; questions ouvertes |
| **Dépendances** | Cycle 1 |
| **Caractère** | Quasi systématique |
| **Profil probable** | Standard à Critical si arbitrages métier structurants |
| **Gates Morris** | GO conception ; arbitrages métier structurants |
| **Risque couverture artificielle** | Moyen si spec trop large (tous domaines D1–D10) |
| **Preuve opérationnelle** | Périmètre fonctionnel MVP testable sans architecture technique |

### Cycle 3 — Architecture fonctionnelle

| Champ | Contenu |
|-------|---------|
| **Justification** | Couplage domaines (identité × catalogue × réservation × notifications) |
| **Déclencheur** | Complexité de flux / découpage modules / interfaces entre domaines |
| **Entrée** | Spec fonctionnelle |
| **Livrable potentiel** | Cartographie flux ; découpage domaines ; arbitrages ; ADR fonctionnels si besoin |
| **Dépendances** | Cycle 2 |
| **Caractère** | Activable |
| **Profil probable** | Standard à Critical |
| **Gates Morris** | GO architecture fonctionnelle structurante |
| **Risque couverture artificielle** | Moyen — éviter sur-modélisation avant MVP borné |
| **Preuve opérationnelle** | Découpage justifié par conflits réels de responsabilités / flux |

### Cycle 4 — UX/UI

| Champ | Contenu |
|-------|---------|
| **Justification** | Parcours multi-populations distincts (étudiant vs gestionnaire) |
| **Déclencheur** | Besoin de parcours / écrans / source design avant delivery UI |
| **Entrée** | Spec + architecture fonctionnelle légère |
| **Livrable potentiel** | Cartes d’écrans ; wireframes ; brief Figma ; accessibilité cadrée |
| **Dépendances** | Cycles 2–3 (au moins partiels) |
| **Caractère** | Activable |
| **Profil probable** | Standard à Critical (nouveaux parcours structurants) |
| **Gates Morris** | GO UX cible ; GO source Figma si fidélité requise |
| **Risque couverture artificielle** | Moyen — polish / design system trop tôt |
| **Preuve opérationnelle** | Au moins deux parcours population distincts validés |

### Cycle 5 — Backlog / user stories

| Champ | Contenu |
|-------|---------|
| **Justification** | Découpage livraison MVP phasé |
| **Déclencheur** | Préparation INC / delivery |
| **Entrée** | Spec ; UX ; priorités Morris |
| **Livrable potentiel** | Épics ; stories ; critères d’acceptation ; incréments |
| **Dépendances** | Cycles 2–4 selon profondeur |
| **Caractère** | Quasi systématique |
| **Profil probable** | Standard |
| **Gates Morris** | GO priorisation si conflit de scope |
| **Risque couverture artificielle** | Faible si stories INVEST et bornées |
| **Preuve opérationnelle** | Incréments livrables indépendamment testables |

### Cycle 6 — Architecture technique

| Champ | Contenu |
|-------|---------|
| **Justification** | Stack, patterns, contraintes multi-environnements, intégrations |
| **Déclencheur** | Avant premier delivery applicatif significatif |
| **Entrée** | Architecture fonctionnelle ; contraintes ; options |
| **Livrable potentiel** | Options stack ; ADR ; structure applicative ; data model light |
| **Dépendances** | Cycles 2–3 ; idéalement 5 amorcé |
| **Caractère** | Activable |
| **Profil probable** | Critical si irréversible / sécurité |
| **Gates Morris** | GO stack ; GO architecture structurante |
| **Risque couverture artificielle** | Élevé si architecture « nationale cloud » surdimensionnée |
| **Preuve opérationnelle** | Décisions tracées, proportionnées au MVP |

### Cycle 7 — Intégration / DevOps

| Champ | Contenu |
|-------|---------|
| **Justification** | Environnements multiples, CI/CD, contrats d’intégration |
| **Déclencheur** | Besoin pipelines / environnements / automatisation delivery |
| **Entrée** | Architecture technique ; stratégie environnements |
| **Livrable potentiel** | Pipeline ; stratégie env ; IaC bornée ; contrats d’intégration |
| **Dépendances** | Cycle 6 |
| **Caractère** | Activable |
| **Profil probable** | Standard à Critical |
| **Gates Morris** | GO stratégie environnements / secrets |
| **Risque couverture artificielle** | Élevé — plateformes DevOps « enterprise » avant besoin |
| **Preuve opérationnelle** | Pipeline réellement utilisé par un INC |

### Cycle 8 — Delivery / implémentation

| Champ | Contenu |
|-------|---------|
| **Justification** | Réalisation incrémentale du MVP |
| **Déclencheur** | GO backlog + architecture suffisante |
| **Entrée** | Stories priorisées ; guidelines techniques |
| **Livrable potentiel** | Code / config par INC ; démos |
| **Dépendances** | Cycles 5–6 (minimum) |
| **Caractère** | Quasi systématique |
| **Profil probable** | Standard (INC) ; Critical si zone sensible |
| **Gates Morris** | GO INC ; GO merge par livraison |
| **Risque couverture artificielle** | Faible |
| **Preuve opérationnelle** | Incréments clôturés avec preuves QA |

### Cycle 9 — QA / validation

| Champ | Contenu |
|-------|---------|
| **Justification** | Preuves fonctionnelles, non-régression, accessibilité si activée |
| **Déclencheur** | Chaque INC / release significative |
| **Entrée** | Critères d’acceptation ; risques |
| **Livrable potentiel** | Plans de test ; rapports QA ; réserves |
| **Dépendances** | Cycle 8 |
| **Caractère** | Quasi systématique |
| **Profil probable** | Standard à Critical |
| **Gates Morris** | GO clôture INC avec réserves acceptées |
| **Risque couverture artificielle** | Moyen si matrices de tests encyclopédiques |
| **Preuve opérationnelle** | Scénarios exécutés liés aux stories |

### Cycle 10 — Sécurité / RSSI

| Champ | Contenu |
|-------|---------|
| **Justification** | Multi-habilitations, données personnelles, intégrations identité |
| **Déclencheur** | Conception d’authZ ; revue menaces ; avant mise en situation « nationale » |
| **Entrée** | Modèle populations ; surfaces d’attaque ; exigences |
| **Livrable potentiel** | Analyse menaces proportionnée ; contrôles ; durcissement backlog |
| **Dépendances** | Cycles 2–3–6 (selon timing) |
| **Caractère** | Activable |
| **Profil probable** | Critical |
| **Gates Morris** | GO contrôles sécurité structurants |
| **Risque couverture artificielle** | Moyen — « audit ISO » complet trop tôt |
| **Preuve opérationnelle** | Contrôles liés à des risques Campus360 réels (élévation de privilège, fuite données) |

### Cycle 11 — Déploiement / release

| Champ | Contenu |
|-------|---------|
| **Justification** | Releases multi-environnements ; communication ; rollback |
| **Déclencheur** | Première mise à disposition hors local ; jalons MVP |
| **Entrée** | Artefacts ; checklist release ; RUN readiness partielle |
| **Livrable potentiel** | Notes de release ; procédure rollback ; fenêtre |
| **Dépendances** | Cycles 7–9 |
| **Caractère** | Activable |
| **Profil probable** | Standard à Critical |
| **Gates Morris** | GO release |
| **Risque couverture artificielle** | Moyen si cérémonial release sans artefact réel |
| **Preuve opérationnelle** | Release reproduisible avec rollback testé au moins une fois |

### Cycle 12 — Observabilité / RUN readiness

| Champ | Contenu |
|-------|---------|
| **Justification** | Pics de rentrée ; disponibilité nationale fictive ; incidents de service |
| **Déclencheur** | Avant ou autour d’une release « exploitable » ; besoin de supervision |
| **Entrée** | Architecture ; SLI candidats ; scénarios incident |
| **Livrable potentiel** | Logs/métriques/alerting proportionnés ; runbooks légers |
| **Dépendances** | Cycles 6–7–11 |
| **Caractère** | Activable |
| **Profil probable** | Standard à Critical |
| **Gates Morris** | GO readiness exploitation |
| **Risque couverture artificielle** | Élevé — stack observability complète sans charge réelle |
| **Preuve opérationnelle** | Au moins un scénario incident / pic rejoué avec signaux exploitables |

### Cycle 13 — PR readiness

| Champ | Contenu |
|-------|---------|
| **Justification** | Chaque livraison Git significative |
| **Déclencheur** | Branche prête à revue |
| **Entrée** | Diff ; checklist ; rapport cycle |
| **Livrable potentiel** | Corps PR ; checklist ; verdict readiness |
| **Dépendances** | Livrable du cycle concerné |
| **Caractère** | Quasi systématique |
| **Profil probable** | Aligné sur le cycle parent |
| **Gates Morris** | GO création PR |
| **Risque couverture artificielle** | Nul |
| **Preuve opérationnelle** | PR créées selon contrat SFIA |

### Cycle 14 — Post-merge

| Champ | Contenu |
|-------|---------|
| **Justification** | Clôture, sync statut, réserves, suite |
| **Déclencheur** | Merge Morris |
| **Entrée** | PR mergée ; réserves |
| **Livrable potentiel** | Statut post-merge ; cleanup branche ; next steps |
| **Dépendances** | Merge effectué |
| **Caractère** | Quasi systématique |
| **Profil probable** | Light à Standard |
| **Gates Morris** | Selon cleanup / décisions suivantes |
| **Risque couverture artificielle** | Nul |
| **Preuve opérationnelle** | Statuts post-merge tracés |

### Cycle 15 — Capitalisation / REX

| Champ | Contenu |
|-------|---------|
| **Justification** | Apprentissages méthode et projet après jalons |
| **Déclencheur** | Fin MVP ; fin phase ; friction méthodologique notable |
| **Entrée** | Rapports INC ; réserves ; observations |
| **Livrable potentiel** | REX projet ; candidats capitalisation méthode (cycle CAPA séparé si standard) |
| **Dépendances** | Expérience réelle de cycles amont |
| **Caractère** | Quasi systématique (proportionné) |
| **Profil probable** | Capitalization (+ profondeur selon portée) |
| **Gates Morris** | GO capitalisation ; GO promotion éventuelle en actif méthode |
| **Risque couverture artificielle** | Moyen — capitaliser trop tôt ou transformer en SFIA 3.0 |
| **Preuve opérationnelle** | Leçons actionnables ; séparation claire projet / méthode |

---

## 4. Typologies v2.4 pressenties (orthogonal)

| Typologie | Quand sur Campus360 | Exemple |
|-----------|---------------------|---------|
| **DOC** | Cadrage, architecture doc, REX doc | Ce cycle |
| **INC** | Delivery bornée | INC réservation salles |
| **EVOL** | Extension domaine post-MVP | Ajout restauration / événements |
| **RUN** | Incident, correctif, maintenance | Pic rentrée, bug habilitations |
| **CAPA** | Promotion d’un apprentissage en actif SFIA | Après friction réelle — GO Morris |

Ces typologies **ne remplacent pas** les 15 cycles ; elles les qualifient.

---

## 5. Distinction cycles : systématiques / activables / conditionnels / événementiels

| Classe | Cycles | Commentaire Campus360 |
|--------|--------|----------------------|
| **Quasi systématiques** | 1, 2, 5, 8, 9, 13, 14, 15 | Trajectoire produit normale |
| **Activables** | 3, 4, 6, 7, 10, 11, 12 | Probables et souhaitables pour l’étalon — **si déclenchés** |
| **Conditionnels** | Profondeur de 3, 7, 10, 12 ; Figma Critical ; ADR lourds | Selon arbitrages et maturité |
| **Événementiels** | RUN / INC correctifs ; re-cadrage ; CAPA promotion | Incidents, réserves, décisions Morris |

**Anti-pattern interdit :** ouvrir le cycle 12 ou 10 « pour cocher la matrice » sans signal produit / risque.

---

## 6. Transverses (non cycles cœur)

### 6.1 RGPD / conformité

| Élément | Identification pré-cadrage |
|---------|----------------------------|
| **Catégories de données** | Identité usager ; coordonnées ; affiliation campus ; historiques de réservation ; logs d’accès ; éventuels moyens de paiement tokenisés ; données logement si domaine activé |
| **Populations** | Étudiants (y compris potentiellement mineurs — **vigilance**), personnels, prestataires |
| **Minimisation / habilitations** | Besoin futur de minimisation par domaine ; séparation des rôles admin ; journalisation des accès sensibles |
| **Points de vigilance** | Mineurs ; conservation des logs ; exports gestionnaire ; intégrations identité ; droit d’accès / effacement |
| **Cycles d’analyse détaillée** | Conception (2), architecture fonctionnelle (3), sécurité (10), QA (9), éventuellement delivery (8) |
| **Hors ce cycle** | AIPD complète ; registres définitifs ; politiques finales |

### 6.2 Accessibilité

| Élément | Identification |
|---------|----------------|
| **Populations concernées** | Étudiants et personnels en situation de handicap ; usagers de services publics numériques |
| **Exigence future** | Référentiel d’accessibilité numérique à viser (niveau à arbitrer au cadrage / UX) |
| **Cycles concernés** | UX/UI (4), QA (9) ; conception (2) pour exigences |
| **Hors ce cycle** | Référentiel UI détaillé ; audits RGAA complets |

### 6.3 FinOps

| Élément | Identification |
|---------|----------------|
| **Cloud / services managés** | Probable pour plateforme nationale fictive |
| **Stockage** | Réservations, logs, éventuels documents / médias |
| **Volumétrie** | Multi-sites, multi-usagers ; croissance saisonnière |
| **Environnements multiples** | Dev / staging / prod (hypothèse) |
| **Hors ce cycle** | Chiffrage précis ; budgets ; choix provider |

### 6.4 GreenOps

| Axes futurs | Note |
|-------------|------|
| Sobriété fonctionnelle | Limiter domaines MVP |
| Conservation des données | Alignée RGPD / logs |
| Volumétrie | Pics ≠ surprovision permanente |
| Usage ressources | Environnements non productifs maîtrisés |
| Hébergement | Choix ultérieur (archi / FinOps) |
| **Hors ce cycle** | Cible contractuelle carbone |

### 6.5 Performance

| Élément | Identification |
|---------|----------------|
| **Disponibilité** | Services campus « jour ouvré + pics » — ambition haute sans SLA figé |
| **Charge** | Connexions et réservations simultanées en rentrée / examens |
| **Volumétrie** | Nationale fictive multi-campus |
| **Usages nationaux** | Annuaire services, réservations cross-site éventuelles |
| **Pics** | Rentrée ; examens ; événements majeurs |
| **Hors ce cycle** | SLA définitifs ; benchmarks chiffrés |

---

## 7. Séparation projet / actifs / observations / capitalisation

| Couche | Exemples Campus360 | Règle |
|--------|--------------------|-------|
| **Projet produit** | Vision, MVP, stories, code futur | Reste sous `projects/campus360/` |
| **Actifs réutilisables** | Checklists projet, patterns d’intégration simulée | Réutilisables **après** extraction consciente |
| **Observations méthodologiques** | « Cycle 12 trop tôt a créé du bruit » | Documentées en REX projet |
| **Capitalisation SFIA** | Nouveau standard, template, règle | **Uniquement** via cycle CAPA + GO Morris — **interdit** dans ce pré-cadrage |

---

## 8. Trajectoire macro pressentie (non engageante)

```text
Pré-cadrage (DOC, Critical)     ← cycle courant
    → GO Morris opportunité
Cadrage détaillé (DOC)
    → Conception fonctionnelle MVP
    → Architecture fonctionnelle légère
    → UX/UI + accessibilité cadrée
    → Backlog MVP / INC
    → Architecture technique proportionnée
    → (Sécurité RSSI activable)
    → Delivery INC-n + QA + PR + post-merge
    → Release + RUN readiness (quand justifié)
    → EVOL domaines P1/P2
    → RUN / incidents
    → Capitalisation proportionnée
```

Aucun jalon calendaire n’est fixé dans ce cycle.

---

## 9. Revue anti-couverture artificielle

| Signal d’alerte | Statut pré-cadrage |
|-----------------|--------------------|
| 15 cycles présentés comme obligatoires | **Évité** — caractère explicite par cycle |
| Modules ajoutés pour « faire un cycle » | **Évité** — domaines P2 différés |
| Observabilité / RSSI dès le jour 1 sans besoin | **Signalé** comme risque — activation conditionnelle |
| Sur-architecture nationale | **Signalé** — GO stack ultérieur uniquement |
| Confusion avec capitalisation méthode | **Séparé** §7 |

**Conclusion couverture :** Campus360 **peut** activer les 15 cycles sur une trajectoire longue **sans les forcer**. La valeur étalon repose surtout sur les cycles **activables différenciants** (3, 7, 10, 12) déclenchés par le scénario, pas sur une checklist.
```

---

### Fichier : `projects/campus360/03-pre-framing-decision-pack.md`

```markdown
# Campus360 — Decision pack pré-cadrage

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | Campus360 (nom provisoire) |
| **Document** | `03-pre-framing-decision-pack.md` |
| **Destinataire** | Morris (L0) |
| **Cycle** | 1 — Cadrage / pré-cadrage opportunité |
| **Profil** | Critical |
| **Typologie** | DOC |
| **Baseline** | SFIA v2.6 |
| **Statut** | En attente de décision Morris |

> **Cursor / ChatGPT ne décident pas.** Ce document propose un verdict et un scénario. Seul Morris tranche.

---

## 1. Décision demandée

Morris est invité à trancher **explicitement** :

1. **Campus360** est-il retenu comme **projet étalon** pour éprouver SFIA v2.6 sur une trajectoire longue ?
2. Le **périmètre initial** proposé (§8) est-il accepté, à retravailler, ou rejeté ?
3. Autorise-t-on le passage au **cadrage détaillé** ?
4. Confirme-t-on le **nom** Campus360 (ou demande-t-on un autre nom) ?
5. Autorise-t-on **ultérieurement** (décisions séparées) : commit, push, PR de la branche `project/campus360-opportunity-framing` ?

---

## 2. Recommandation

**Retenir Campus360** comme projet étalon candidat, avec **périmètre MVP initial borné**, et autoriser le **cadrage détaillé**.

Ne pas lancer conception, architecture, backlog ni code avant les gates correspondants.

---

## 3. Scénario recommandé

| Élément | Contenu |
|---------|---------|
| **Projet** | Campus360 — plateforme nationale fictive de services campus |
| **MVP initial pressenti** | Identité & habilitations + catalogue de services + réservation d’espaces + tranche notifications / pilotage gestionnaire + intégration identité (contrat + simulation) |
| **Différé** | Restauration, logement, événements complets, ITSM, paiements avancés |
| **Méthode** | SFIA v2.6 uniquement |
| **Prochain cycle** | Cadrage détaillé (DOC) sous `projects/campus360/` |
| **Couverture 15 cycles** | Potentiel documenté — activation par déclencheurs réels uniquement |

---

## 4. Options alternatives

| Option | Verdict proposé si retenue | Commentaire |
|--------|----------------------------|-------------|
| **A — Campus360 phasé** | Recommandée | Meilleur équilibre crédibilité / couverture / différenciation |
| **B — Mairie360 / CivicServices** | Alternative crédible | Plus « service public » ; risque données régaliennes plus tôt |
| **C — FleetOps360** | Alternative crédible | Fort RUN/DevOps ; plus faible diversité populations usagers |
| **D — Étendre Interv360 / Chantiers360** | Non recommandé comme étalon long | Bornés ; reproduction ; faible différenciation |
| **E — NO-GO projet étalon** | Possible | Si Morris juge tout scénario multi-domaines prématuré |

---

## 5. Avantages (scénario A)

- Différenciation claire vs Chantiers360 et Interv360.
- Complexité **légitime** (populations × domaines × habilitations × intégrations).
- Potentiel naturel pour cycles encore peu exercés (sécurité, DevOps, observabilité/RUN).
- Phasable : un MVP borné existe.
- Compatible baseline SFIA v2.6 sans relancer SFIA 3.0.
- Terrain pour typologies INC / EVOL / RUN / DOC / CAPA ultérieures.

---

## 6. Limites

- Risque de sur-ambition « plateforme nationale ».
- Domaines P2 (logement, resto) tentants pour le scope creep.
- Couverture des 15 cycles **non garantie** — et ne doit pas l’être.
- Charge documentaire Critical : gates Morris plus nombreux.
- Aucune preuve runtime tant que le delivery n’a pas commencé (normal à ce stade).

---

## 7. Risques (décision)

| Risque | Si GO sans réserve | Mitigation demandée |
|--------|--------------------|---------------------|
| Surdimensionnement | Échec MVP / fatigue méthode | Verrouiller MVP §8 |
| Forçage des 15 cycles | Complexité artificielle | Suivre matrice `02-…` |
| Confusion méthode | Pollution SFIA | Séparation projet / CAPA |
| Architecture prématurée | Dette | Interdire jusqu’au cycle 6 |
| Nom non tranché | Divergence docs | Gate nom |

---

## 8. Périmètre initial proposé

### Inclus (candidat MVP initial — à confirmer au cadrage détaillé)

- Identité, rôles, habilitations multi-populations
- Catalogue / découverte de services
- Réservation d’espaces / salles (règles, conflits, statuts)
- Notifications opérationnelles de base
- Pilotage gestionnaire léger (occupation, exceptions)
- Intégration identité : **contrat + simulation** (pas d’IdP réel obligatoire au MVP)
- Exigences RGPD / accessibilité **identifiées** (analyse détaillée plus tard)

### Hors périmètre (initial)

- Code, stack définitive, architecture technique détaillée
- Logement / attribution complète
- Restauration complète
- Paiement réel / facturation avancée
- Contrôle d’accès physique / IoT
- Portail prestataire complet
- ITSM / CMDB
- Application mobile native
- IA générative avancée
- Modification SFIA / SFIA 3.0
- Reprise ou fusion avec Chantiers360 / Interv360

---

## 9. Hors périmètre de **ce** cycle (rappel)

Tout ce qui n’est pas le socle documentaire de pré-cadrage : pas de commit projet sans GO, pas de push/PR/merge projet, pas de conception détaillée.

---

## 10. Critères de succès du projet étalon

Campus360 réussira comme étalon SFIA v2.6 si :

1. Un MVP phasé est cadré puis livré avec preuves QA.
2. Au moins deux populations distinctes sont exercées dans les parcours.
3. Au moins une intégration externe contractuelle est traitée sérieusement (même simulée).
4. Au moins un cycle différenciant (sécurité, DevOps ou RUN readiness) est activé **pour une vraie raison**.
5. Les observations méthodologiques restent séparées de la capitalisation SFIA.
6. Aucune promotion SFIA 3.0 n’est smuggled via le projet.
7. Les réserves sont tracées et acceptées explicitement (pas de perfectionnisme bloquant).

---

## 11. Critères d’arrêt

Arrêter ou re-cadrer Campus360 si :

- le MVP ne peut plus être borné sans arbitrage Morris ;
- la couverture des cycles repose sur des scénarios forcés ;
- le projet dérive en refactor de la méthode SFIA ;
- la complexité devient purement artificielle ;
- un autre projet étalon est explicitement préféré (options B/C/E).

---

## 12. Trajectoire macro

Voir `02-sfia-cycle-coverage-hypothesis.md` §8.

En une ligne : **pré-cadrage → cadrage détaillé → conception → (archi fonctionnelle / UX) → backlog → archi technique → delivery INC + QA → release/RUN quand justifié → EVOL/RUN/CAPA**.

---

## 13. Prochain cycle recommandé

| Élément | Valeur |
|---------|--------|
| **Cycle** | 1 — Cadrage (sous-angle : **cadrage détaillé**) |
| **Typologie** | DOC |
| **Profil suggéré** | Critical ou Standard — à re-qualifier selon scope retenu |
| **Livrables pressentis** | Objectifs, scope boundaries, use cases, business rules, risques détaillés, critères succès MVP |
| **Préalable** | GO Morris sur ce decision pack |

---

## 14. Gates nécessaires

| # | Gate | Statut |
|---|------|--------|
| G1 | Validation / rejet Campus360 comme étalon | **En attente** |
| G2 | Validation périmètre initial | **En attente** |
| G3 | Autorisation cadrage détaillé | **En attente** |
| G4 | Validation nom définitif (ou maintien provisoire) | **En attente** |
| G5 | Autorisation commit branche projet | **En attente** |
| G6 | Autorisation push branche projet | **En attente** |
| G7 | Autorisation PR | **En attente** |

Les gates G5–G7 sont **séparés** de G1–G4 : un GO opportunité n’implique pas automatiquement un GO publication Git.

---

## 15. Questions ouvertes

1. Confirmer le positionnement « national multi-sites » dès le MVP, ou commencer **mono-campus** puis étendre ?
2. Inclure ou exclure toute notion de **mineurs** (étudiants) au MVP pour alléger le RGPD ?
3. L’intégration identité MVP doit-elle cibler un protocole précis (à trancher plus tard) ou rester volontairement abstraite ?
4. Faut-il un **espace gestionnaire** minimal dès le MVP (recommandé ici) ou usager-only d’abord ?
5. Nom définitif : Campus360, CampusServices, UniCampus, autre ?
6. Option B (Mairie360) à garder en backup documenté ou abandonner ?

---

## 16. Verdict proposé

```text
GO — PROCEED TO DETAILED FRAMING
```

**Justification courte de la proposition :**

Campus360 est suffisamment crédible, différenciant et phasable pour servir d’étalon SFIA v2.6, **sous réserve** du périmètre initial borné et du respect de la matrice de cycles non forcée.

**Variante si Morris juge le phasage insuffisamment strict dans les docs :**

```text
GO WITH RESERVES — REWORK REQUIRED
```

**Variantes de rejet :**

```text
NO-GO — PROJECT CONCEPT INSUFFICIENT
STOP — MORRIS ARBITRATION REQUIRED
```

---

## 17. Décision Morris (à remplir)

| Champ | Valeur |
|-------|--------|
| **Date** | _à renseigner_ |
| **Décideur** | Morris |
| **Verdict** | `GO — PROCEED TO DETAILED FRAMING` / `GO WITH RESERVES — REWORK REQUIRED` / `NO-GO — PROJECT CONCEPT INSUFFICIENT` / `STOP — MORRIS ARBITRATION REQUIRED` |
| **Nom retenu** | _à renseigner_ |
| **Périmètre** | Accepté / modifié (préciser) / rejeté |
| **Cadrage détaillé** | Autorisé / refusé |
| **Commit / push / PR** | Autorisés / refusés / reportés (préciser) |
| **Commentaires** | |

---

## 18. Références du pack

- [README.md](./README.md)
- [01-opportunity-and-vision.md](./01-opportunity-and-vision.md)
- [02-sfia-cycle-coverage-hypothesis.md](./02-sfia-cycle-coverage-hypothesis.md)
```

---

## 10. Actions interdites respectées

- Pas de commit branche projet
- Pas de push branche projet
- Pas de PR / merge
- Pas de modification SFIA canonique
- Pas de code / architecture détaillée / backlog
- Pas de SFIA 3.0
- Seul push autorisé : Review Handoff Git

---

## 11. Fin du Review Pack

Pack mono-cycle FULL — prêt pour analyse ChatGPT sans accès workspace local.
