# ChatGPT Review Pack — CRM 1.2 Final Persona Synchronization

## 0. Identité

| Champ | Valeur |
|-------|--------|
| **Date / heure / timezone** | 2026-09-29 11:31:27 CEST |
| **Cycle** | 1.2 Persona Final Synchronization |
| **Typologie** | DOC / group-truth final synchronization |
| **Profil** | **Standard** |
| **Critical** | **NON** |

## 1. Git Truth

| Check | Résultat |
|-------|----------|
| Workspace | /Users/l/Projects/sfia-worktree-crm-assurance |
| Branche | docs/crm-assurance-courtage-1-3-watch-01 |
| HEAD initial | eed1a7ff6236bf7bd524a3a6b5c9a9e85f658ad1 |
| HEAD final | cb336124563a865198ed350d8faf52ed90e27515 |
| origin/main | 6f47f74dc9b515c4c79624b21772223ba02c76cd |
| Dirt | .tmp-sfia-review/** only |
| Git Truth | **PASS** |

## 2. Sources atelier

| Source | Statut |
|--------|--------|
| Capture atelier 2026-09-29 10:53:41 (3 personas) | **ACCESSIBLE / LISIBLE** pour Profil, Démographie, Objectifs, Frustrations, Tâches, Outils textuels |
| Captures 10:53:26 / 11:19:55 | Illisibles / vides — **non utilisées** |
| Jauges personnalité / compétences | Tendances qualitatives — **pas de % inventés** |
| Champs illisibles pour transcription textuelle | **ZÉRO** sur stickies/profils lus |
| Champs non renseignés comme chiffres exacts de jauges | % curseurs — traités en tendances |

## 3. Audit aval

| Fichier | Class |
|---------|-------|
| 01-02 | ADAPT — transcription |
| Doctrine §11 | ADAPT — TRANSCRIBED + PENDING CHATGPT SYNC |
| 01-01 | **NO CHANGE** (Prospect/Client = états) |
| 01-03 | **NO CHANGE** |
| Miro | OUT OF SCOPE Cursor — payload ready |
| Notion | NOT MODIFIED |

## 4. Doctrine §11 complète

```markdown
## 11. État actuel

| Élément | État |
|---------|------|
| Phase actuelle | Bloc / Phase 1 — cadrage |
| Dernière étape validée | **1.2 Analyse des besoins utilisateurs — VALIDATED — GROUP PERSONA CONSOLIDATION 2026-09-29** |
| 1.1 | **VALIDATED** |
| 1.2 | **VALIDATED — GROUP PERSONA CONSOLIDATION 2026-09-29** |
| Personas canoniques | **Client particulier** · **Courtier** · **Directeur** |
| Persona detail source | **GROUP-VALIDATED WORKSHOP CARDS — TRANSCRIBED IN GIT** |
| Ancien persona préparatoire Prospect → Client | **SUPERSEDED AS PERSONA** |
| Continuité prospect → client | **RETAINED IN CUSTOMER JOURNEY** |
| Experience Map Courtier | **RETAINED / ALIGNED — KEEP** |
| Customer Journey | **Client particulier — Du prospect à la vie client** |
| Miro personas / maps | **PENDING CHATGPT SYNC AFTER REVIEW** (Cursor n’a pas modifié Miro) |
| 1.3 | **OPENED — AWAITING FINAL REVIEW** |
| 1.3.1 | **REVIEW PASS** |
| Base détaillée 1.3.2 A→E | **REVIEW PASS** (historique Git) |
| Étape actuelle | **1.3.2 simplification pédagogique — AWAITING REVIEW** |
| 1.4 | **NOT OPENED** |
| Architecture | **NOT DECIDED** |
| Stack runtime | **CANDIDATE TOOL ECOSYSTEM ONLY / NOT DECIDED** |
| Prochain objectif | Revue ChatGPT transcription personas + sync Miro bornée ; 1.3 non validé par ce cycle |

---
```

## 5. Persona Courtier COMPLET

```markdown
## 5. Persona — Courtier

#### Profil

| Champ | Contenu atelier |
|-------|-----------------|
| Nom | Sarah Benali |
| Âge | 38 ans |
| Rôle | Courtier en assurance |
| Bio courte | Travaille à son compte. Gère un portefeuille de clients diversifiés. Cherche à optimiser son temps pour se concentrer sur le conseil et la vente plutôt que sur l’administratif. |
| Phrase pédagogique | « Je veux que mon outil m’aide à être plus efficace pour mieux conseiller mes clients. » |

#### Démographie

| Champ | Contenu atelier |
|-------|-----------------|
| Genre | Femme |
| Localisation | Lyon |
| Situation familiale | Célibataire |
| Niveau d’études | Master Assurance / Finance |
| Profession | Courtière indépendante |
| Revenu (scénario) | env. 60 k€ / an |

**Personnalité (échelles visuelles atelier — tendances) :** plutôt Extraverti · équilibré Analytique/Créatif · plutôt Audacieux · plutôt Innovant.

#### Objectifs

- Centraliser les dossiers clients
- Automatiser les relances
- Accéder aux offres multi-compagnies
- Améliorer le taux de conversion
- Développer son portefeuille
- Simplifier la gestion des commissions
- Avoir une vision globale de l’activité

#### Frustrations

- Saisie manuelle répétitive
- Multiplication des portails assureurs
- Difficulté de suivi des sinistres clients
- Manque de rappels automatiques
- Outils actuels trop rigides
- Perte de temps en reporting

#### Tâches

- Analyser les besoins clients
- Négocier avec les assureurs
- Relancer les prospects

**Compétences (échelles visuelles — tendances) :** Technologie élevée · Assurance très élevée · Organisation élevée · Réseau très élevé.

#### Outils

- CRM spécialisé assurance
- Outils de bureautique (Office 365)
- Portails extranet des compagnies
- Logiciel de signature électronique
- Réseaux sociaux (LinkedIn)

**Note atelier :** utilise son CRM toute la journée ; besoin d’une interface fluide et de connecteurs avec les compagnies.
*(Outils / notes = hypothèses de scénario persona — **pas** décisions de stack projet.)*

---
```

## 6. Persona Directeur COMPLET

```markdown
## 6. Persona — Directeur

#### Profil

| Champ | Contenu atelier |
|-------|-----------------|
| Nom | Jean Dupont |
| Âge | 52 ans |
| Rôle | Directeur de cabinet |
| Bio courte | Dirige une agence de 10 personnes. Besoin de piloter l’activité de manière stratégique. Cherche à améliorer la rentabilité globale et à s’assurer de la conformité réglementaire. |
| Phrase pédagogique | « J’ai besoin d’une vision claire de l’activité pour décider des investissements et des recrutements futurs. » |

#### Démographie

| Champ | Contenu atelier |
|-------|-----------------|
| Genre | Homme |
| Localisation | Paris |
| Situation familiale | Marié, 3 enfants |
| Niveau d’études | École de Commerce |
| Profession | Directeur de cabinet de courtage |
| Revenu (scénario) | env. 100 k€ / an |

**Personnalité (tendances visuelles) :** plutôt Extraverti · plutôt Analytique · plutôt Prudent · plutôt Traditionnel.

#### Objectifs

- Suivre les indicateurs clés (KPI)
- Optimiser la rentabilité
- Garantir la conformité (RGPD, DDA)
- Manager les équipes efficacement
- Identifier les leviers de croissance
- Simplifier le reporting mensuel
- Sécuriser les données clients

#### Frustrations

- Manque de fiabilité des données
- Temps de consolidation trop long
- Difficulté à piloter à distance
- Risques de non-conformité
- Outils non adaptés au pilotage
- Coût élevé des licences

#### Tâches

- Analyser les KPIs
- Prendre des décisions stratégiques
- Manager les équipes

**Compétences (tendances visuelles) :** Technologie moyenne · Assurance très élevée · Organisation très élevée · Réseau élevé.

#### Outils

- Tableaux de bord BI
- Outils de pilotage financier
- CRM (accès administrateur)
- Logiciels de gestion RH
- Visioconférence (Teams / Zoom)

**Note atelier :** ne manipule pas les dossiers clients au quotidien ; utilise les outils pour la décision et le suivi de performance.
*(≠ décision d’architecture / stack projet.)*

---
```

## 7. Persona Client particulier COMPLET

```markdown
## 7. Persona — Client particulier

#### Profil

| Champ | Contenu atelier |
|-------|-----------------|
| Nom | Marc Descamps |
| Âge | 45 ans |
| Rôle | Client particulier |
| Bio courte | Marié, deux enfants. Travaille dans le secteur du bâtiment. Très occupé ; cherche simplicité et rapidité dans les démarches administratives. |
| Phrase pédagogique | « Je veux comprendre ce que je paie et savoir rapidement où en est ma demande. » |

#### Démographie

| Champ | Contenu atelier |
|-------|-----------------|
| Genre | Homme |
| Localisation | Rennes |
| Situation familiale | Marié, 2 enfants |
| Niveau d’études | Bac +2 |
| Profession | Chef de chantier |
| Revenu (scénario) | env. 45 k€ / an |

**Personnalité (tendances visuelles) :** plutôt Extraverti · plutôt Créatif · plutôt Prudent · plutôt Traditionnel.

#### Objectifs

- Trouver une assurance adaptée
- Souscrire en ligne facilement
- Avoir un suivi clair des sinistres
- Bénéficier de conseils clairs
- Payer le juste prix
- Gagner du temps
- Simplifier les démarches

#### Frustrations

- Langage technique trop complexe
- Temps de réponse trop long
- Manque de transparence sur les prix
- Devoir rappeler plusieurs fois
- Difficulté à joindre un conseiller
- Interface mobile peu ergonomique

#### Tâches

- Comparer les offres
- Envoyer les pièces justificatives
- Déclarer un sinistre

**Compétences (tendances visuelles) :** Technologie moyenne · Assurance plutôt faible · Organisation élevée · Réseau moyen.

#### Outils

- Email (Outlook / Gmail)
- Smartphone (iPhone / Android)
- Espace client web
- Comparateurs d’assurance
- WhatsApp (échanges rapides)

**Note atelier :** préfère outils simples et mobiles pour gérer ses contrats le soir ou pendant les pauses.

### Lifecycle (états — pas un second persona)

| État | Rôle dans le parcours |
|------|----------------------|
| **Prospect** | Contact → devis → RDV → besoin → proposition → souscription |
| **Client** | Vie du contrat ; documents ; historique ; sinistre éventuel ; renouvellement / résiliation |

Canaux BMC groupe (transversaux) : RDV physique · Visio · téléphone · email · espace client — UI **NOT DECIDED**.

---
```

## 8. Experience Map COMPLET + verdict KEEP

```markdown
## 10. Experience Map — Courtier

| Champ | Valeur |
|-------|--------|
| **Statut** | **KEEP** — cohérente avec la carte atelier Courtier |
| **Persona cible** | Courtier |
| **Nature** | Cible pédagogique — **NON AS-IS OBSERVÉ** |

| Phase | Enjeux (cadrage) |
|-------|------------------|
| Prospection / contact / qualification | Réactivité · Continuité du suivi |
| Devis | Réactivité · Charge administrative |
| Relance / RDV | Réactivité · Continuité du suivi |
| Besoin → proposition | Personnalisation · Continuité du suivi |
| Souscription → vie contrat | Traçabilité · Continuité du suivi |
| Docs / sinistre / renouvellement | Traçabilité · Continuité · Charge administrative |

**Contrôle carte atelier :** objectifs (centraliser, automatiser relances, vision globale) et frustrations (saisie manuelle, portails multiples, reporting) **confirment** la map — **sans** injection mécanique phase × sticky.
**Pensées / émotions par phase :** **NON RENSEIGNÉES** — pas de courbe émotionnelle inventée.

---
```

## 9. Customer Journey COMPLET

```markdown
## 11. Customer Journey Map — Client particulier

| Champ | Valeur |
|-------|--------|
| **Titre** | Customer Journey — **Client particulier** |
| **Sous-titre** | Du prospect à la vie client |
| **Persona** | Client particulier |
| **Lifecycle** | Prospect → souscription → Client |
| **Statut** | Conservé / cohérent avec carte atelier |

### Séquence cadrage (7 étapes)

1. Première prise de contact
2. Devis
3. Relance / rendez-vous
4. Compréhension / qualification du besoin
5. Proposition personnalisée
6. Souscription
7. Vie du contrat / suivi (échanges, docs, sinistre éventuel, renouvellement / résiliation)

Granularité Miro historique (entrée en relation · devis · RDV/besoin · proposition · souscription · vie du contrat · échanges/docs · sinistre/renouvellement) = **compatible**, pas de nouvelles étapes inventées.

**Émotion :** NON RENSEIGNÉE.
**Ne pas décider :** interfaces Prospect/Client, écrans, permissions, UI.

---
```

## 10. CONTENU COMPLET FINAL 01-02

```markdown
# CRM Assurance Courtage — 1.2 Analyse des besoins utilisateurs

| Champ | Valeur |
|-------|--------|
| **Statut** | **VALIDATED — GROUP PERSONA CONSOLIDATION 2026-09-29** |
| **Étape** | 1.2 |
| **Source métier principale** | Brief + 1.1 + BMC groupe + **cartes atelier groupe 2026-09-29** (transcription Git) |
| **Persona detail source** | **GROUP-VALIDATED WORKSHOP CARDS — TRANSCRIBED IN GIT** |
| **Evidence** | GROUP-VALIDATED PEDAGOGICAL SCENARIO ASSUMPTIONS — **NO FIELD INTERVIEWS** — **NO OBSERVED AS-IS** |
| **Personas canoniques** | **Client particulier** · **Courtier** · **Directeur** |
| **Experience Map** | **RETAINED / ALIGNED** — Courtier — **KEEP** |
| **Customer Journey Map** | **Client particulier — Du prospect à la vie client** |
| **Miro** | **PENDING CHATGPT SYNC AFTER REVIEW** (Cursor **n’a pas** modifié Miro) |
| **Architecture / Stack** | NOT DECIDED |
| **1.3** | OPENED — AWAITING FINAL REVIEW (fond inchangé ce cycle) |
| **1.4** | NOT OPENED |

### Décisions Morris / groupe

| Décision | Contenu |
|----------|---------|
| Set personas atelier 2026-09-29 | Client particulier · Courtier · Directeur |
| Ancien persona Prospect → Client | **SUPERSEDED AS PERSONA** |
| Continuity prospect → client | **RETAINED IN CUSTOMER JOURNEY** |
| Transcription cartes | Profil · Démographie · Objectifs · Frustrations · Tâches · Outils — **transcrits dans Git** |

**VALIDATED** = livrable de cadrage utilisateur retenu pour la suite.
**≠** étude terrain, entretiens, statistiques réelles.

---

## 1. Objectif du 1.2

Fonder le cadrage utilisateurs sur les **personas validés par le groupe**, distinguer hypothèses pédagogiques et faits terrain, et aligner Experience Map / Customer Journey — **sans** spécification produit, backlog, UI ou architecture.

---

## 2. Niveau de preuve et provenance

| Catégorie | Signification |
|-----------|---------------|
| **GROUP-VALIDATED WORKSHOP CARD** | Contenu de la carte atelier groupe, transcrit |
| **EXPLICITE BRIEF / BMC** | Brief ou BMC groupe |
| **INFÉRENCE DE CADRAGE** | Déduction marquée |
| **NON RENSEIGNÉ** | Champ absent / non inventé |
| **ÉCHELLE VISUELLE** | Jauge atelier lue qualitative (pas de % inventé) |

### Provenance obligatoire

Les attributs de ces personas sont des **hypothèses de scénario pédagogique consolidées et validées par le groupe**.
Ils servent au cadrage du CRM ; **ils ne résultent pas d’entretiens ou d’une étude terrain réelle**.

Les « citations » des cartes sont des **phrases de persona pédagogique**, pas des verbatims d’entretien.

**Source atelier utilisée pour transcription :** capture d’écran atelier groupe du **2026-09-29** (trois personas visibles, structure Profil / Démographie / Objectifs / Frustrations / Tâches / Outils).
Champs textuels stickies / profils : **lisibles**.
Jauges personnalité / compétences : **tendances qualitatives** (valeurs numériques exactes des curseurs = non affirmées comme chiffres).

---

## 3. Utilisateurs, personas et états

| Élément | Qualification |
|---------|---------------|
| **Courtier** | Persona canonique — utilisateur métier interne principal |
| **Directeur** | Persona canonique — pilotage |
| **Client particulier** | Persona canonique — externe |
| **Prospect** | **État** commercial (avant souscription) du Client particulier — **≠ persona** |
| **Client (état)** | **État** commercial (après souscription) — **≠ persona** |

**Persona ≠ état commercial.**
TPE/PME = segment BMC (pas un 4ᵉ persona 1.2).

---

## 4. Personas canoniques

| # | Persona | Statut |
|---|---------|--------|
| 1 | Client particulier | CANONICAL — GROUP-VALIDATED |
| 2 | Courtier | CANONICAL — GROUP-VALIDATED |
| 3 | Directeur | CANONICAL — GROUP-VALIDATED |

**Note historique :** la version préparatoire utilisait un persona longitudinal Prospect → Client. Depuis le 2026-09-29 : persona **Client particulier** ; continuity prospect → client = **Customer Journey**.

---

## 5. Persona — Courtier

#### Profil

| Champ | Contenu atelier |
|-------|-----------------|
| Nom | Sarah Benali |
| Âge | 38 ans |
| Rôle | Courtier en assurance |
| Bio courte | Travaille à son compte. Gère un portefeuille de clients diversifiés. Cherche à optimiser son temps pour se concentrer sur le conseil et la vente plutôt que sur l’administratif. |
| Phrase pédagogique | « Je veux que mon outil m’aide à être plus efficace pour mieux conseiller mes clients. » |

#### Démographie

| Champ | Contenu atelier |
|-------|-----------------|
| Genre | Femme |
| Localisation | Lyon |
| Situation familiale | Célibataire |
| Niveau d’études | Master Assurance / Finance |
| Profession | Courtière indépendante |
| Revenu (scénario) | env. 60 k€ / an |

**Personnalité (échelles visuelles atelier — tendances) :** plutôt Extraverti · équilibré Analytique/Créatif · plutôt Audacieux · plutôt Innovant.

#### Objectifs

- Centraliser les dossiers clients
- Automatiser les relances
- Accéder aux offres multi-compagnies
- Améliorer le taux de conversion
- Développer son portefeuille
- Simplifier la gestion des commissions
- Avoir une vision globale de l’activité

#### Frustrations

- Saisie manuelle répétitive
- Multiplication des portails assureurs
- Difficulté de suivi des sinistres clients
- Manque de rappels automatiques
- Outils actuels trop rigides
- Perte de temps en reporting

#### Tâches

- Analyser les besoins clients
- Négocier avec les assureurs
- Relancer les prospects

**Compétences (échelles visuelles — tendances) :** Technologie élevée · Assurance très élevée · Organisation élevée · Réseau très élevé.

#### Outils

- CRM spécialisé assurance
- Outils de bureautique (Office 365)
- Portails extranet des compagnies
- Logiciel de signature électronique
- Réseaux sociaux (LinkedIn)

**Note atelier :** utilise son CRM toute la journée ; besoin d’une interface fluide et de connecteurs avec les compagnies.
*(Outils / notes = hypothèses de scénario persona — **pas** décisions de stack projet.)*

---

## 6. Persona — Directeur

#### Profil

| Champ | Contenu atelier |
|-------|-----------------|
| Nom | Jean Dupont |
| Âge | 52 ans |
| Rôle | Directeur de cabinet |
| Bio courte | Dirige une agence de 10 personnes. Besoin de piloter l’activité de manière stratégique. Cherche à améliorer la rentabilité globale et à s’assurer de la conformité réglementaire. |
| Phrase pédagogique | « J’ai besoin d’une vision claire de l’activité pour décider des investissements et des recrutements futurs. » |

#### Démographie

| Champ | Contenu atelier |
|-------|-----------------|
| Genre | Homme |
| Localisation | Paris |
| Situation familiale | Marié, 3 enfants |
| Niveau d’études | École de Commerce |
| Profession | Directeur de cabinet de courtage |
| Revenu (scénario) | env. 100 k€ / an |

**Personnalité (tendances visuelles) :** plutôt Extraverti · plutôt Analytique · plutôt Prudent · plutôt Traditionnel.

#### Objectifs

- Suivre les indicateurs clés (KPI)
- Optimiser la rentabilité
- Garantir la conformité (RGPD, DDA)
- Manager les équipes efficacement
- Identifier les leviers de croissance
- Simplifier le reporting mensuel
- Sécuriser les données clients

#### Frustrations

- Manque de fiabilité des données
- Temps de consolidation trop long
- Difficulté à piloter à distance
- Risques de non-conformité
- Outils non adaptés au pilotage
- Coût élevé des licences

#### Tâches

- Analyser les KPIs
- Prendre des décisions stratégiques
- Manager les équipes

**Compétences (tendances visuelles) :** Technologie moyenne · Assurance très élevée · Organisation très élevée · Réseau élevé.

#### Outils

- Tableaux de bord BI
- Outils de pilotage financier
- CRM (accès administrateur)
- Logiciels de gestion RH
- Visioconférence (Teams / Zoom)

**Note atelier :** ne manipule pas les dossiers clients au quotidien ; utilise les outils pour la décision et le suivi de performance.
*(≠ décision d’architecture / stack projet.)*

---

## 7. Persona — Client particulier

#### Profil

| Champ | Contenu atelier |
|-------|-----------------|
| Nom | Marc Descamps |
| Âge | 45 ans |
| Rôle | Client particulier |
| Bio courte | Marié, deux enfants. Travaille dans le secteur du bâtiment. Très occupé ; cherche simplicité et rapidité dans les démarches administratives. |
| Phrase pédagogique | « Je veux comprendre ce que je paie et savoir rapidement où en est ma demande. » |

#### Démographie

| Champ | Contenu atelier |
|-------|-----------------|
| Genre | Homme |
| Localisation | Rennes |
| Situation familiale | Marié, 2 enfants |
| Niveau d’études | Bac +2 |
| Profession | Chef de chantier |
| Revenu (scénario) | env. 45 k€ / an |

**Personnalité (tendances visuelles) :** plutôt Extraverti · plutôt Créatif · plutôt Prudent · plutôt Traditionnel.

#### Objectifs

- Trouver une assurance adaptée
- Souscrire en ligne facilement
- Avoir un suivi clair des sinistres
- Bénéficier de conseils clairs
- Payer le juste prix
- Gagner du temps
- Simplifier les démarches

#### Frustrations

- Langage technique trop complexe
- Temps de réponse trop long
- Manque de transparence sur les prix
- Devoir rappeler plusieurs fois
- Difficulté à joindre un conseiller
- Interface mobile peu ergonomique

#### Tâches

- Comparer les offres
- Envoyer les pièces justificatives
- Déclarer un sinistre

**Compétences (tendances visuelles) :** Technologie moyenne · Assurance plutôt faible · Organisation élevée · Réseau moyen.

#### Outils

- Email (Outlook / Gmail)
- Smartphone (iPhone / Android)
- Espace client web
- Comparateurs d’assurance
- WhatsApp (échanges rapides)

**Note atelier :** préfère outils simples et mobiles pour gérer ses contrats le soir ou pendant les pauses.

### Lifecycle (états — pas un second persona)

| État | Rôle dans le parcours |
|------|----------------------|
| **Prospect** | Contact → devis → RDV → besoin → proposition → souscription |
| **Client** | Vie du contrat ; documents ; historique ; sinistre éventuel ; renouvellement / résiliation |

Canaux BMC groupe (transversaux) : RDV physique · Visio · téléphone · email · espace client — UI **NOT DECIDED**.

---

## 8. Synthèse des besoins (cadrage)

| Profil | Enjeux principaux (atelier + brief) |
|--------|-------------------------------------|
| Courtier | Centralisation ; moins d’admin ; relances ; conseil ; conversion |
| Directeur | KPI ; rentabilité ; conformité ; reporting ; données fiables |
| Client particulier | Simplicité ; clarté ; suivi ; conseil humain ; gain de temps |

Aucune user story. Aucun backlog. Aucune stack.

---

## 9. Inconnues / limites

- pas d’entretiens réels ;
- pourcentages exacts des jauges atelier = **non affirmés** (tendances seulement) ;
- outils listés = **scénario persona**, pas choix projet ;
- interfaces / permissions = hors scope.

---

## 10. Experience Map — Courtier

| Champ | Valeur |
|-------|--------|
| **Statut** | **KEEP** — cohérente avec la carte atelier Courtier |
| **Persona cible** | Courtier |
| **Nature** | Cible pédagogique — **NON AS-IS OBSERVÉ** |

| Phase | Enjeux (cadrage) |
|-------|------------------|
| Prospection / contact / qualification | Réactivité · Continuité du suivi |
| Devis | Réactivité · Charge administrative |
| Relance / RDV | Réactivité · Continuité du suivi |
| Besoin → proposition | Personnalisation · Continuité du suivi |
| Souscription → vie contrat | Traçabilité · Continuité du suivi |
| Docs / sinistre / renouvellement | Traçabilité · Continuité · Charge administrative |

**Contrôle carte atelier :** objectifs (centraliser, automatiser relances, vision globale) et frustrations (saisie manuelle, portails multiples, reporting) **confirment** la map — **sans** injection mécanique phase × sticky.
**Pensées / émotions par phase :** **NON RENSEIGNÉES** — pas de courbe émotionnelle inventée.

---

## 11. Customer Journey Map — Client particulier

| Champ | Valeur |
|-------|--------|
| **Titre** | Customer Journey — **Client particulier** |
| **Sous-titre** | Du prospect à la vie client |
| **Persona** | Client particulier |
| **Lifecycle** | Prospect → souscription → Client |
| **Statut** | Conservé / cohérent avec carte atelier |

### Séquence cadrage (7 étapes)

1. Première prise de contact
2. Devis
3. Relance / rendez-vous
4. Compréhension / qualification du besoin
5. Proposition personnalisée
6. Souscription
7. Vie du contrat / suivi (échanges, docs, sinistre éventuel, renouvellement / résiliation)

Granularité Miro historique (entrée en relation · devis · RDV/besoin · proposition · souscription · vie du contrat · échanges/docs · sinistre/renouvellement) = **compatible**, pas de nouvelles étapes inventées.

**Émotion :** NON RENSEIGNÉE.
**Ne pas décider :** interfaces Prospect/Client, écrans, permissions, UI.

---

## 12. Miro — état

| Champ | Valeur |
|-------|--------|
| Board | https://miro.com/app/board/uXjVHiWX64c=/ |
| Cursor | **NOT MODIFIED** |
| Sync | **PENDING CHATGPT SYNC AFTER REVIEW** |

| Frame ID | Cible |
|----------|--------|
| `3458764685164456040` | Persona Courtier — update in place |
| `3458764685164456041` | Persona Directeur — update in place |
| `3458764685164456042` | → Persona **Client particulier** |
| `3458764685164458754` | Experience Map Courtier — KEEP |
| `3458764685164510320` | CJM → Client particulier — Du prospect à la vie client |

**Protégés :** BMC `3458764685039847893` · BPMN `3458764685039847894`.

---

## 13. Synthèse 1.2

| Point | État |
|-------|------|
| **1.2** | VALIDATED — GROUP PERSONA CONSOLIDATION 2026-09-29 |
| Détail personas | **TRANSCRIBED IN GIT** depuis cartes atelier |
| Experience Map | KEEP |
| Customer Journey | Client particulier — Du prospect à la vie client |
| Miro | PENDING CHATGPT SYNC AFTER REVIEW |
| 1.3 / 1.4 | OPENED AWAITING FINAL REVIEW / **NOT OPENED** |
| Architecture / Stack | NOT DECIDED |
```


## MIRO SYNC PAYLOAD — READY FOR CHATGPT EXECUTION

**Board :** https://miro.com/app/board/uXjVHiWX64c=/
**Mode :** UPDATE IN PLACE — no new frames — no deletes
**Cursor :** NOT MODIFIED Miro
**Executor :** ChatGPT after REVIEW PASS

### Frames protégés (NE PAS TOUCHER)

| Frame | ID |
|-------|-----|
| Business Model Canvas | `3458764685039847893` |
| BPMN — Prise de contact → souscription | `3458764685039847894` |

### Frame 1 — Persona Courtier

| Champ | Valeur |
|-------|--------|
| Frame ID | `3458764685164456040` |
| Titre cible | 1.2 — Persona — Courtier |
| Sous-titre / statut | GROUP-VALIDATED PEDAGOGICAL SCENARIO · NO FIELD INTERVIEWS |
| Action | Remplacer le contenu persona préparatoire par la structure atelier |

**Sections à remplacer (contenu final = Git §5) :** Profil · Démographie · Objectifs · Frustrations · Tâches · Outils (+ personnalité / compétences en tendances qualitatives)

**Contenu textuel final :**

## 5. Persona — Courtier

#### Profil

| Champ | Contenu atelier |
|-------|-----------------|
| Nom | Sarah Benali |
| Âge | 38 ans |
| Rôle | Courtier en assurance |
| Bio courte | Travaille à son compte. Gère un portefeuille de clients diversifiés. Cherche à optimiser son temps pour se concentrer sur le conseil et la vente plutôt que sur l’administratif. |
| Phrase pédagogique | « Je veux que mon outil m’aide à être plus efficace pour mieux conseiller mes clients. » |

#### Démographie

| Champ | Contenu atelier |
|-------|-----------------|
| Genre | Femme |
| Localisation | Lyon |
| Situation familiale | Célibataire |
| Niveau d’études | Master Assurance / Finance |
| Profession | Courtière indépendante |
| Revenu (scénario) | env. 60 k€ / an |

**Personnalité (échelles visuelles atelier — tendances) :** plutôt Extraverti · équilibré Analytique/Créatif · plutôt Audacieux · plutôt Innovant.

#### Objectifs

- Centraliser les dossiers clients
- Automatiser les relances
- Accéder aux offres multi-compagnies
- Améliorer le taux de conversion
- Développer son portefeuille
- Simplifier la gestion des commissions
- Avoir une vision globale de l’activité

#### Frustrations

- Saisie manuelle répétitive
- Multiplication des portails assureurs
- Difficulté de suivi des sinistres clients
- Manque de rappels automatiques
- Outils actuels trop rigides
- Perte de temps en reporting

#### Tâches

- Analyser les besoins clients
- Négocier avec les assureurs
- Relancer les prospects

**Compétences (échelles visuelles — tendances) :** Technologie élevée · Assurance très élevée · Organisation élevée · Réseau très élevé.

#### Outils

- CRM spécialisé assurance
- Outils de bureautique (Office 365)
- Portails extranet des compagnies
- Logiciel de signature électronique
- Réseaux sociaux (LinkedIn)

**Note atelier :** utilise son CRM toute la journée ; besoin d’une interface fluide et de connecteurs avec les compagnies.
*(Outils / notes = hypothèses de scénario persona — **pas** décisions de stack projet.)*

---

**Ne pas toucher :** frame BMC/BPMN ; autres frames hors liste.

### Frame 2 — Persona Directeur

| Champ | Valeur |
|-------|--------|
| Frame ID | `3458764685164456041` |
| Titre cible | 1.2 — Persona — Directeur |
| Sous-titre / statut | GROUP-VALIDATED PEDAGOGICAL SCENARIO · NO FIELD INTERVIEWS |
| Action | Update in place |

**Contenu textuel final :**

## 6. Persona — Directeur

#### Profil

| Champ | Contenu atelier |
|-------|-----------------|
| Nom | Jean Dupont |
| Âge | 52 ans |
| Rôle | Directeur de cabinet |
| Bio courte | Dirige une agence de 10 personnes. Besoin de piloter l’activité de manière stratégique. Cherche à améliorer la rentabilité globale et à s’assurer de la conformité réglementaire. |
| Phrase pédagogique | « J’ai besoin d’une vision claire de l’activité pour décider des investissements et des recrutements futurs. » |

#### Démographie

| Champ | Contenu atelier |
|-------|-----------------|
| Genre | Homme |
| Localisation | Paris |
| Situation familiale | Marié, 3 enfants |
| Niveau d’études | École de Commerce |
| Profession | Directeur de cabinet de courtage |
| Revenu (scénario) | env. 100 k€ / an |

**Personnalité (tendances visuelles) :** plutôt Extraverti · plutôt Analytique · plutôt Prudent · plutôt Traditionnel.

#### Objectifs

- Suivre les indicateurs clés (KPI)
- Optimiser la rentabilité
- Garantir la conformité (RGPD, DDA)
- Manager les équipes efficacement
- Identifier les leviers de croissance
- Simplifier le reporting mensuel
- Sécuriser les données clients

#### Frustrations

- Manque de fiabilité des données
- Temps de consolidation trop long
- Difficulté à piloter à distance
- Risques de non-conformité
- Outils non adaptés au pilotage
- Coût élevé des licences

#### Tâches

- Analyser les KPIs
- Prendre des décisions stratégiques
- Manager les équipes

**Compétences (tendances visuelles) :** Technologie moyenne · Assurance très élevée · Organisation très élevée · Réseau élevé.

#### Outils

- Tableaux de bord BI
- Outils de pilotage financier
- CRM (accès administrateur)
- Logiciels de gestion RH
- Visioconférence (Teams / Zoom)

**Note atelier :** ne manipule pas les dossiers clients au quotidien ; utilise les outils pour la décision et le suivi de performance.
*(≠ décision d’architecture / stack projet.)*

---

### Frame 3 — Persona Client particulier (ex Prospect → Client)

| Champ | Valeur |
|-------|--------|
| Frame ID | `3458764685164456042` |
| Titre cible | 1.2 — Persona — Client particulier |
| Ancien titre | 1.2 — Persona — Prospect → Client assuré |
| Sous-titre / statut | GROUP-VALIDATED PEDAGOGICAL SCENARIO · lifecycle prospect→client = CJM only |
| Action | Renommer + remplacer contenu |

**Contenu textuel final :**

## 7. Persona — Client particulier

#### Profil

| Champ | Contenu atelier |
|-------|-----------------|
| Nom | Marc Descamps |
| Âge | 45 ans |
| Rôle | Client particulier |
| Bio courte | Marié, deux enfants. Travaille dans le secteur du bâtiment. Très occupé ; cherche simplicité et rapidité dans les démarches administratives. |
| Phrase pédagogique | « Je veux comprendre ce que je paie et savoir rapidement où en est ma demande. » |

#### Démographie

| Champ | Contenu atelier |
|-------|-----------------|
| Genre | Homme |
| Localisation | Rennes |
| Situation familiale | Marié, 2 enfants |
| Niveau d’études | Bac +2 |
| Profession | Chef de chantier |
| Revenu (scénario) | env. 45 k€ / an |

**Personnalité (tendances visuelles) :** plutôt Extraverti · plutôt Créatif · plutôt Prudent · plutôt Traditionnel.

#### Objectifs

- Trouver une assurance adaptée
- Souscrire en ligne facilement
- Avoir un suivi clair des sinistres
- Bénéficier de conseils clairs
- Payer le juste prix
- Gagner du temps
- Simplifier les démarches

#### Frustrations

- Langage technique trop complexe
- Temps de réponse trop long
- Manque de transparence sur les prix
- Devoir rappeler plusieurs fois
- Difficulté à joindre un conseiller
- Interface mobile peu ergonomique

#### Tâches

- Comparer les offres
- Envoyer les pièces justificatives
- Déclarer un sinistre

**Compétences (tendances visuelles) :** Technologie moyenne · Assurance plutôt faible · Organisation élevée · Réseau moyen.

#### Outils

- Email (Outlook / Gmail)
- Smartphone (iPhone / Android)
- Espace client web
- Comparateurs d’assurance
- WhatsApp (échanges rapides)

**Note atelier :** préfère outils simples et mobiles pour gérer ses contrats le soir ou pendant les pauses.

### Lifecycle (états — pas un second persona)

| État | Rôle dans le parcours |
|------|----------------------|
| **Prospect** | Contact → devis → RDV → besoin → proposition → souscription |
| **Client** | Vie du contrat ; documents ; historique ; sinistre éventuel ; renouvellement / résiliation |

Canaux BMC groupe (transversaux) : RDV physique · Visio · téléphone · email · espace client — UI **NOT DECIDED**.

---

### Frame 4 — Experience Map Courtier

| Champ | Valeur |
|-------|--------|
| Frame ID | `3458764685164458754` |
| Titre cible | 1.2 — Experience Map — Courtier |
| Verdict | **KEEP** (ADAPT MINOR si label statut seulement) |
| Action | Conserver phases / enjeux ; mettre à jour bandeau statut si besoin : RETAINED / ALIGNED — KEEP · GROUP-VALIDATED PERSONA COURTIER |

**Ne pas :** reconstruire ; inventer émotions ; injecter stickies phase × frustration.

**Référence Git :**

## 10. Experience Map — Courtier

| Champ | Valeur |
|-------|--------|
| **Statut** | **KEEP** — cohérente avec la carte atelier Courtier |
| **Persona cible** | Courtier |
| **Nature** | Cible pédagogique — **NON AS-IS OBSERVÉ** |

| Phase | Enjeux (cadrage) |
|-------|------------------|
| Prospection / contact / qualification | Réactivité · Continuité du suivi |
| Devis | Réactivité · Charge administrative |
| Relance / RDV | Réactivité · Continuité du suivi |
| Besoin → proposition | Personnalisation · Continuité du suivi |
| Souscription → vie contrat | Traçabilité · Continuité du suivi |
| Docs / sinistre / renouvellement | Traçabilité · Continuité · Charge administrative |

**Contrôle carte atelier :** objectifs (centraliser, automatiser relances, vision globale) et frustrations (saisie manuelle, portails multiples, reporting) **confirment** la map — **sans** injection mécanique phase × sticky.
**Pensées / émotions par phase :** **NON RENSEIGNÉES** — pas de courbe émotionnelle inventée.

---

### Frame 5 — Customer Journey Client particulier

| Champ | Valeur |
|-------|--------|
| Frame ID | `3458764685164510320` |
| Titre cible | 1.2 — Customer Journey Map — Client particulier |
| Sous-titre | Du prospect à la vie client |
| Ancien titre | Customer Journey Map — Prospect → Client |
| Action | Renommer + aligner labels persona ; conserver étapes |

**Contenu / règles finales :**

## 11. Customer Journey Map — Client particulier

| Champ | Valeur |
|-------|--------|
| **Titre** | Customer Journey — **Client particulier** |
| **Sous-titre** | Du prospect à la vie client |
| **Persona** | Client particulier |
| **Lifecycle** | Prospect → souscription → Client |
| **Statut** | Conservé / cohérent avec carte atelier |

### Séquence cadrage (7 étapes)

1. Première prise de contact
2. Devis
3. Relance / rendez-vous
4. Compréhension / qualification du besoin
5. Proposition personnalisée
6. Souscription
7. Vie du contrat / suivi (échanges, docs, sinistre éventuel, renouvellement / résiliation)

Granularité Miro historique (entrée en relation · devis · RDV/besoin · proposition · souscription · vie du contrat · échanges/docs · sinistre/renouvellement) = **compatible**, pas de nouvelles étapes inventées.

**Émotion :** NON RENSEIGNÉE.
**Ne pas décider :** interfaces Prospect/Client, écrans, permissions, UI.

---

**Dimensions :** ajuster largeur titre si nécessaire pour lisibilité ; pas de frame parallèle.

### Règles Miro globales

1. Fidélité au Git final de ce commit
2. Lisibilité + cohérence visuelle entre les 3 personas (6 colonnes atelier)
3. Distinction groupe pédagogique ≠ terrain sur chaque frame persona
4. Zéro ambiguïté : outils/listes personas ≠ stack projet
5. Aucun nouveau frame ; aucun delete


## 11. Diff Git

```
 .../crm-assurance-courtage-operating-doctrine.md   |   7 +-
 .../01-02-analyse-besoins-utilisateurs.md          | 455 ++++++++++++---------
 2 files changed, 270 insertions(+), 192 deletions(-)

```

```diff
diff --git a/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md b/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md
index aace4df7..82731628 100644
--- a/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md
+++ b/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md
@@ -172,11 +172,12 @@ Décisions futures **séparées** — le GO du présent cycle documentaire **ne
 | 1.1 | **VALIDATED** |
 | 1.2 | **VALIDATED — GROUP PERSONA CONSOLIDATION 2026-09-29** |
 | Personas canoniques | **Client particulier** · **Courtier** · **Directeur** |
+| Persona detail source | **GROUP-VALIDATED WORKSHOP CARDS — TRANSCRIBED IN GIT** |
 | Ancien persona préparatoire Prospect → Client | **SUPERSEDED AS PERSONA** |
 | Continuité prospect → client | **RETAINED IN CUSTOMER JOURNEY** |
-| Experience Map Courtier | **RETAINED / ALIGNED** |
+| Experience Map Courtier | **RETAINED / ALIGNED — KEEP** |
 | Customer Journey | **Client particulier — Du prospect à la vie client** |
-| Miro personas / maps | **SYNC REQUIRED** (Cursor n’a pas modifié Miro) |
+| Miro personas / maps | **PENDING CHATGPT SYNC AFTER REVIEW** (Cursor n’a pas modifié Miro) |
 | 1.3 | **OPENED — AWAITING FINAL REVIEW** |
 | 1.3.1 | **REVIEW PASS** |
 | Base détaillée 1.3.2 A→E | **REVIEW PASS** (historique Git) |
@@ -184,7 +185,7 @@ Décisions futures **séparées** — le GO du présent cycle documentaire **ne
 | 1.4 | **NOT OPENED** |
 | Architecture | **NOT DECIDED** |
 | Stack runtime | **CANDIDATE TOOL ECOSYSTEM ONLY / NOT DECIDED** |
-| Prochain objectif | Revue ChatGPT de la consolidation personas 1.2 ; 1.3 reste ouvert séparément (pas validé par ce cycle) |
+| Prochain objectif | Revue ChatGPT transcription personas + sync Miro bornée ; 1.3 non validé par ce cycle |

 ---

diff --git a/projects/crm-assurance-courtage/01-cadrage/01-02-analyse-besoins-utilisateurs.md b/projects/crm-assurance-courtage/01-cadrage/01-02-analyse-besoins-utilisateurs.md
index 94c16517..33390cf8 100644
--- a/projects/crm-assurance-courtage/01-cadrage/01-02-analyse-besoins-utilisateurs.md
+++ b/projects/crm-assurance-courtage/01-cadrage/01-02-analyse-besoins-utilisateurs.md
@@ -4,248 +4,344 @@
 |-------|--------|
 | **Statut** | **VALIDATED — GROUP PERSONA CONSOLIDATION 2026-09-29** |
 | **Étape** | 1.2 |
-| **Source métier principale** | Brief pédagogique CRM + 1.1 validé + BMC groupe + **personas atelier groupe 2026-09-29** |
-| **Source méthodologique** | Guide Bloc 1 PBNC + exigences 1.2 du brief |
-| **Doctrine projet** | [`../00-intake/crm-assurance-courtage-operating-doctrine.md`](../00-intake/crm-assurance-courtage-operating-doctrine.md) |
-| **1.1** | VALIDATED — [`01-01-analyse-besoins-metiers.md`](01-01-analyse-besoins-metiers.md) |
-| **Evidence user discovery** | GROUP-VALIDATED PEDAGOGICAL SCENARIO — **NO FIELD INTERVIEWS** — **NO OBSERVED AS-IS** |
+| **Source métier principale** | Brief + 1.1 + BMC groupe + **cartes atelier groupe 2026-09-29** (transcription Git) |
+| **Persona detail source** | **GROUP-VALIDATED WORKSHOP CARDS — TRANSCRIBED IN GIT** |
+| **Evidence** | GROUP-VALIDATED PEDAGOGICAL SCENARIO ASSUMPTIONS — **NO FIELD INTERVIEWS** — **NO OBSERVED AS-IS** |
 | **Personas canoniques** | **Client particulier** · **Courtier** · **Directeur** |
-| **Experience Map** | **RETAINED / ALIGNED** — Courtier |
+| **Experience Map** | **RETAINED / ALIGNED** — Courtier — **KEEP** |
 | **Customer Journey Map** | **Client particulier — Du prospect à la vie client** |
-| **Miro** | **SYNC REQUIRED** — board historique encore sur l’ancienne version (Cursor **n’a pas** modifié Miro) |
-| **Architecture** | NOT DECIDED |
-| **Stack** | NOT DECIDED |
-| **1.3** | OPENED — AWAITING FINAL REVIEW (hors modification de fond dans ce cycle) |
+| **Miro** | **PENDING CHATGPT SYNC AFTER REVIEW** (Cursor **n’a pas** modifié Miro) |
+| **Architecture / Stack** | NOT DECIDED |
+| **1.3** | OPENED — AWAITING FINAL REVIEW (fond inchangé ce cycle) |
 | **1.4** | NOT OPENED |

-### Décisions Morris / groupe tracées
+### Décisions Morris / groupe

-| Décision | Contenu | Portée |
-|----------|---------|--------|
-| Ouverture 1.2 | 1.2 = OPENED (2026-09-27) | Historique |
-| Validation 1.2 initiale | 1.2 = VALIDATED (2026-09-28) | Livrable initial |
-| **Consolidation personas atelier** | Set canonique = **Client particulier** · **Courtier** · **Directeur** (2026-09-29) | **Supersède** le persona préparatoire « Prospect → Client » |
-| Experience Map | Cible **Courtier** — conservée / alignée | Contenu parcours métier inchangé sur le fond |
-| Customer Journey Map | Persona **Client particulier** ; lifecycle prospect → client | Réalignement conceptuel |
+| Décision | Contenu |
+|----------|---------|
+| Set personas atelier 2026-09-29 | Client particulier · Courtier · Directeur |
+| Ancien persona Prospect → Client | **SUPERSEDED AS PERSONA** |
+| Continuity prospect → client | **RETAINED IN CUSTOMER JOURNEY** |
+| Transcription cartes | Profil · Démographie · Objectifs · Frustrations · Tâches · Outils — **transcrits dans Git** |

-**VALIDATED** (1.2) signifie que Morris / le groupe valide le livrable de cadrage utilisateur pour la suite.
-Cela ne signifie **pas** : user research empirique ; profil statistiquement démontré ; données terrain d’un cabinet réel.
+**VALIDATED** = livrable de cadrage utilisateur retenu pour la suite.
+**≠** étude terrain, entretiens, statistiques réelles.

 ---

 ## 1. Objectif du 1.2

-Identifier les profils utilisateurs pertinents pour le cas pédagogique CRM Assurance Courtage, comprendre leurs objectifs et attentes **à partir des informations disponibles**, et fonder les maps (Experience Map / Customer Journey) sur les **personas validés par le groupe**.
-
-Ce livrable doit :
-
-- distinguer hypothèses de scénario pédagogique et faits terrain ;
-- ne pas transformer l’analyse en spécification fonctionnelle, backlog, interfaces ou architecture.
-
-**Ce livrable ne constitue PAS une user research empirique.**
+Fonder le cadrage utilisateurs sur les **personas validés par le groupe**, distinguer hypothèses pédagogiques et faits terrain, et aligner Experience Map / Customer Journey — **sans** spécification produit, backlog, UI ou architecture.

 ---

-## 2. Niveau de preuve et méthode
+## 2. Niveau de preuve et provenance

 | Catégorie | Signification |
 |-----------|---------------|
-| **EXPLICITE DANS LE BRIEF / BMC** | Information affirmée par le brief ou le BMC groupe |
-| **GROUP-VALIDATED PEDAGOGICAL SCENARIO** | Attributs / set de personas consolidés en atelier et validés par le groupe — **pas** des faits terrain |
-| **INFÉRENCE DE CADRAGE** | Déduction raisonnable, clairement marquée |
-| **NON RENSEIGNÉ / À SYNCHRONISER** | Détail non disponible de façon lisible dans le dépôt — **non inventé** |
+| **GROUP-VALIDATED WORKSHOP CARD** | Contenu de la carte atelier groupe, transcrit |
+| **EXPLICITE BRIEF / BMC** | Brief ou BMC groupe |
+| **INFÉRENCE DE CADRAGE** | Déduction marquée |
+| **NON RENSEIGNÉ** | Champ absent / non inventé |
+| **ÉCHELLE VISUELLE** | Jauge atelier lue qualitative (pas de % inventé) |

-Aucun entretien, questionnaire ou observation terrain n’est fourni.
-Aucun verbatim réel n’est disponible.
+### Provenance obligatoire

-### Provenance personas (obligatoire)
+Les attributs de ces personas sont des **hypothèses de scénario pédagogique consolidées et validées par le groupe**.
+Ils servent au cadrage du CRM ; **ils ne résultent pas d’entretiens ou d’une étude terrain réelle**.

-Les attributs des personas sont des **hypothèses de scénario pédagogique consolidées et validées par le groupe**.
-Ils servent à concevoir et tester la cohérence du CRM ; **ils ne résultent pas d’entretiens ou d’une étude terrain réelle**.
+Les « citations » des cartes sont des **phrases de persona pédagogique**, pas des verbatims d’entretien.

-Les cartes atelier (Profil · Démographie · Objectifs · Frustrations · Tâches · Outils) constituent la **référence de contenu détaillé**.
-Dans le présent dépôt, aucune source locale lisible et explicitement identifiable comme transcription complète de ces cartes n’a été trouvée pour ce cycle : **les petits textes (âge, revenus, localisation, outils nominatifs, scores, etc.) ne sont pas inventés ici**.
-**Transcription détaillée à synchroniser** depuis la source atelier lisible — **sans** remettre en cause la validation du **set** de personas.
+**Source atelier utilisée pour transcription :** capture d’écran atelier groupe du **2026-09-29** (trois personas visibles, structure Profil / Démographie / Objectifs / Frustrations / Tâches / Outils).
+Champs textuels stickies / profils : **lisibles**.
+Jauges personnalité / compétences : **tendances qualitatives** (valeurs numériques exactes des curseurs = non affirmées comme chiffres).

 ---

-## 3. Utilisateurs et parties prenantes
+## 3. Utilisateurs, personas et états

-| Profil | Qualification | Preuves / statut |
-|--------|---------------|------------------|
-| **Courtier** | Utilisateur métier interne principal — **persona canonique** | Prospection ; devis ; relances ; RDV ; conseil ; souscription ; renouvellement / résiliation ; documents ; sinistres ; suivi — EXPLICITE BRIEF + BMC + SET GROUPE |
-| **Directeur** | Persona de pilotage — **persona canonique** | Objectifs business, différenciation, KPIs — EXPLICITE BRIEF + SET GROUPE |
-| **Client particulier** | Persona externe — **persona canonique** | Segment BMC + SET GROUPE 2026-09-29 |
-| **Prospect** | **État** commercial (avant souscription) du Client particulier | Contact ; devis ; RDV ; besoin ; proposition ; souscription — EXPLICITE BRIEF — **≠ persona distinct** |
-| **Client (état)** | **État** commercial (après souscription) du Client particulier | Contrats ; documents ; historique ; sinistres ; renouvellement / résiliation — EXPLICITE BRIEF — **≠ persona distinct** |
+| Élément | Qualification |
+|---------|---------------|
+| **Courtier** | Persona canonique — utilisateur métier interne principal |
+| **Directeur** | Persona canonique — pilotage |
+| **Client particulier** | Persona canonique — externe |
+| **Prospect** | **État** commercial (avant souscription) du Client particulier — **≠ persona** |
+| **Client (état)** | **État** commercial (après souscription) — **≠ persona** |

 **Persona ≠ état commercial.**
-Persona = **Client particulier**.
-États possibles du parcours = prospect → futur client → client.
+TPE/PME = segment BMC (pas un 4ᵉ persona 1.2).

 ---

-## 4. Personas canoniques (set groupe 2026-09-29)
+## 4. Personas canoniques

 | # | Persona | Statut |
 |---|---------|--------|
-| 1 | **Client particulier** | **CANONICAL** — GROUP-VALIDATED PEDAGOGICAL SCENARIO |
-| 2 | **Courtier** | **CANONICAL** — GROUP-VALIDATED PEDAGOGICAL SCENARIO |
-| 3 | **Directeur** | **CANONICAL** — GROUP-VALIDATED PEDAGOGICAL SCENARIO |
+| 1 | Client particulier | CANONICAL — GROUP-VALIDATED |
+| 2 | Courtier | CANONICAL — GROUP-VALIDATED |
+| 3 | Directeur | CANONICAL — GROUP-VALIDATED |

-**Note historique :** la version préparatoire utilisait un persona longitudinal **Prospect → Client**. La consolidation atelier du **2026-09-29** retient désormais le persona **Client particulier** ; la continuité prospect → client est conservée dans le **Customer Journey**.
-
-Structure attendue des cartes atelier (référence) : Profil · Démographie · Objectifs · Frustrations · Tâches · Outils — **détail à synchroniser** (voir §2).
+**Note historique :** la version préparatoire utilisait un persona longitudinal Prospect → Client. Depuis le 2026-09-29 : persona **Client particulier** ; continuity prospect → client = **Customer Journey**.

 ---

 ## 5. Persona — Courtier

-| Champ | Contenu | Niveau de preuve |
-|-------|---------|------------------|
-| **Rôle** | Courtier du cabinet | EXPLICITE + SET GROUPE |
-| **Angle** | Métier / opérations / relation client | EXPLICITE |
-| **Relation au projet** | Utilisateur métier interne principal | EXPLICITE |
-| **Objectifs / capacités supportés** | Prospection ; devis ; relances ; rendez-vous ; conseil personnalisé ; souscription ; renouvellement / résiliation ; documents ; sinistres ; traçabilité ; réactivité ; personnalisation soutenue par l’historique | EXPLICITE BRIEF + BMC |
-| **Besoins déduits** | Retrouver l’information utile ; vision cohérente du dossier ; limiter l’admin ; historique pour personnaliser | INFÉRENCE DE CADRAGE |
+#### Profil
+
+| Champ | Contenu atelier |
+|-------|-----------------|
+| Nom | Sarah Benali |
+| Âge | 38 ans |
+| Rôle | Courtier en assurance |
+| Bio courte | Travaille à son compte. Gère un portefeuille de clients diversifiés. Cherche à optimiser son temps pour se concentrer sur le conseil et la vente plutôt que sur l’administratif. |
+| Phrase pédagogique | « Je veux que mon outil m’aide à être plus efficace pour mieux conseiller mes clients. » |
+
+#### Démographie
+
+| Champ | Contenu atelier |
+|-------|-----------------|
+| Genre | Femme |
+| Localisation | Lyon |
+| Situation familiale | Célibataire |
+| Niveau d’études | Master Assurance / Finance |
+| Profession | Courtière indépendante |
+| Revenu (scénario) | env. 60 k€ / an |
+
+**Personnalité (échelles visuelles atelier — tendances) :** plutôt Extraverti · équilibré Analytique/Créatif · plutôt Audacieux · plutôt Innovant.
+
+#### Objectifs

-**Non inventé :** démographie atelier, outils nominatifs, frustrations verbatim, scores — **à synchroniser** depuis la carte atelier.
+- Centraliser les dossiers clients
+- Automatiser les relances
+- Accéder aux offres multi-compagnies
+- Améliorer le taux de conversion
+- Développer son portefeuille
+- Simplifier la gestion des commissions
+- Avoir une vision globale de l’activité

-**Phrase de synthèse (analytique — non issue d’un entretien) :**
-Le courtier a besoin d’un suivi centralisé du parcours commercial et administratif pour rester réactif et personnaliser la relation sans charge administrative excessive.
+#### Frustrations
+
+- Saisie manuelle répétitive
+- Multiplication des portails assureurs
+- Difficulté de suivi des sinistres clients
+- Manque de rappels automatiques
+- Outils actuels trop rigides
+- Perte de temps en reporting
+
+#### Tâches
+
+- Analyser les besoins clients
+- Négocier avec les assureurs
+- Relancer les prospects
+
+**Compétences (échelles visuelles — tendances) :** Technologie élevée · Assurance très élevée · Organisation élevée · Réseau très élevé.
+
+#### Outils
+
+- CRM spécialisé assurance
+- Outils de bureautique (Office 365)
+- Portails extranet des compagnies
+- Logiciel de signature électronique
+- Réseaux sociaux (LinkedIn)
+
+**Note atelier :** utilise son CRM toute la journée ; besoin d’une interface fluide et de connecteurs avec les compagnies.
+*(Outils / notes = hypothèses de scénario persona — **pas** décisions de stack projet.)*

 ---

 ## 6. Persona — Directeur

-| Champ | Contenu | Niveau de preuve |
-|-------|---------|------------------|
-| **Rôle** | Directeur du cabinet | EXPLICITE + SET GROUPE |
-| **Angle** | Pilotage / performance / vision business | EXPLICITE (objectifs) |
-| **Relation au projet** | Persona de pilotage | SET GROUPE |
+#### Profil
+
+| Champ | Contenu atelier |
+|-------|-----------------|
+| Nom | Jean Dupont |
+| Âge | 52 ans |
+| Rôle | Directeur de cabinet |
+| Bio courte | Dirige une agence de 10 personnes. Besoin de piloter l’activité de manière stratégique. Cherche à améliorer la rentabilité globale et à s’assurer de la conformité réglementaire. |
+| Phrase pédagogique | « J’ai besoin d’une vision claire de l’activité pour décider des investissements et des recrutements futurs. » |
+
+#### Démographie
+
+| Champ | Contenu atelier |
+|-------|-----------------|
+| Genre | Homme |
+| Localisation | Paris |
+| Situation familiale | Marié, 3 enfants |
+| Niveau d’études | École de Commerce |
+| Profession | Directeur de cabinet de courtage |
+| Revenu (scénario) | env. 100 k€ / an |
+
+**Personnalité (tendances visuelles) :** plutôt Extraverti · plutôt Analytique · plutôt Prudent · plutôt Traditionnel.
+
+#### Objectifs

-### Faits explicites du brief (conservés)
+- Suivre les indicateurs clés (KPI)
+- Optimiser la rentabilité
+- Garantir la conformité (RGPD, DDA)
+- Manager les équipes efficacement
+- Identifier les leviers de croissance
+- Simplifier le reporting mensuel
+- Sécuriser les données clients

-- souhaite se différencier face aux assureurs en ligne ;
-- insiste sur proximité, personnalisation, transparence ;
-- objectifs : réduction des tâches administratives ; traçabilité ; confiance ; rétention ;
-- tableau de bord : taux de conversion ; panier moyen ; satisfaction client.
+#### Frustrations

-### Inférences de cadrage (conservées)
+- Manque de fiabilité des données
+- Temps de consolidation trop long
+- Difficulté à piloter à distance
+- Risques de non-conformité
+- Outils non adaptés au pilotage
+- Coût élevé des licences

-Visibilité consolidée ; suivi des indicateurs ; supervision de l’activité ; **usage du dashboard** = inférence forte (le brief ne dit pas littéralement que le directeur consulte personnellement le dashboard).
+#### Tâches

-**Non inventé :** démographie atelier, outils nominatifs, frustrations verbatim — **à synchroniser**.
+- Analyser les KPIs
+- Prendre des décisions stratégiques
+- Manager les équipes

-**Phrase de synthèse (analytique) :**
-Le directeur a besoin d’une vision consolidée de la performance commerciale pour piloter différenciation, traçabilité, confiance et rétention.
+**Compétences (tendances visuelles) :** Technologie moyenne · Assurance très élevée · Organisation très élevée · Réseau élevé.
+
+#### Outils
+
+- Tableaux de bord BI
+- Outils de pilotage financier
+- CRM (accès administrateur)
+- Logiciels de gestion RH
+- Visioconférence (Teams / Zoom)
+
+**Note atelier :** ne manipule pas les dossiers clients au quotidien ; utilise les outils pour la décision et le suivi de performance.
+*(≠ décision d’architecture / stack projet.)*

 ---

 ## 7. Persona — Client particulier

-| Champ | Contenu | Niveau de preuve |
-|-------|---------|------------------|
-| **Rôle** | Client particulier (persona externe) | SET GROUPE 2026-09-29 |
-| **Segments BMC associés** | Client particulier (famille/étudiant) ; TPE/PME reste un segment BMC distinct (pas un 4ᵉ persona 1.2) | BMC GROUPE |
-| **États de parcours** | Prospect → souscription → Client (vie du contrat) | EXPLICITE BRIEF — lifecycle CJM |
-| **Attentes supportées (brief)** | Proximité ; réactivité ; personnalisation ; transparence ; confiance ; continuité | EXPLICITE |
-| **Canaux (BMC groupe)** | RDV physique ; Visio ; téléphone ; email ; espace client | BMC GROUPE — conception UI **NON DÉCIDÉE** |
+#### Profil

-### Lifecycle (pas un second persona)
+| Champ | Contenu atelier |
+|-------|-----------------|
+| Nom | Marc Descamps |
+| Âge | 45 ans |
+| Rôle | Client particulier |
+| Bio courte | Marié, deux enfants. Travaille dans le secteur du bâtiment. Très occupé ; cherche simplicité et rapidité dans les démarches administratives. |
+| Phrase pédagogique | « Je veux comprendre ce que je paie et savoir rapidement où en est ma demande. » |

-| État | Attentes / étapes supportées | Niveau |
-|------|------------------------------|--------|
-| **Prospect** | Contact ; devis ; RDV ; besoin ; proposition ; progression vers souscription | EXPLICITE BRIEF |
-| **Client** | Vie du contrat ; échanges ; documents ; historique ; sinistre éventuel ; renouvellement / résiliation | EXPLICITE BRIEF |
+#### Démographie

-**Réserve :** usage direct du futur CRM par le prospect = **NON RENSEIGNÉ**. Forme exacte de l’accès client = **NOT DECIDED**.
+| Champ | Contenu atelier |
+|-------|-----------------|
+| Genre | Homme |
+| Localisation | Rennes |
+| Situation familiale | Marié, 2 enfants |
+| Niveau d’études | Bac +2 |
+| Profession | Chef de chantier |
+| Revenu (scénario) | env. 45 k€ / an |

-**Non inventé :** nom, âge, revenus, situation familiale, localisation, outils, frustrations détaillées — **à synchroniser** depuis la carte atelier « Client particulier ».
+**Personnalité (tendances visuelles) :** plutôt Extraverti · plutôt Créatif · plutôt Prudent · plutôt Traditionnel.

-**Phrase de synthèse (analytique) :**
-Le Client particulier est suivi depuis l’entrée en relation (état prospect) jusqu’à la vie du contrat (état client), avec une continuité attendue de proximité, personnalisation et transparence.
+#### Objectifs

----
+- Trouver une assurance adaptée
+- Souscrire en ligne facilement
+- Avoir un suivi clair des sinistres
+- Bénéficier de conseils clairs
+- Payer le juste prix
+- Gagner du temps
+- Simplifier les démarches

-## 8. Synthèse des besoins par profil
+#### Frustrations

-| Profil | Objectifs | Attentes | Besoins / enjeux | Niveau |
-|--------|-----------|----------|------------------|--------|
-| Courtier | Suivi cycle ; devis / RDV / souscription ; docs ; sinistres | Réactivité ; personnalisation | Vision du dossier ; admin. réduite | BRIEF + INFÉRENCE |
-| Directeur | Différenciation ; KPIs | Pilotage | Visibilité consolidée | BRIEF + INFÉRENCE |
-| Client particulier — état prospect | Contact → devis → RDV → proposition → souscription | Proximité ; réactivité ; personnalisation ; transparence | Entrée en relation claire | BRIEF + INFÉRENCE |
-| Client particulier — état client | Suivi contrats ; docs ; sinistre ; renouvellement / résiliation | Transparence ; confiance ; continuité | Comprendre le suivi ; retrouver l’info | BRIEF + INFÉRENCE |
+- Langage technique trop complexe
+- Temps de réponse trop long
+- Manque de transparence sur les prix
+- Devoir rappeler plusieurs fois
+- Difficulté à joindre un conseiller
+- Interface mobile peu ergonomique

-Aucune user story. Aucun backlog.
+#### Tâches

----
+- Comparer les offres
+- Envoyer les pièces justificatives
+- Déclarer un sinistre
+
+**Compétences (tendances visuelles) :** Technologie moyenne · Assurance plutôt faible · Organisation élevée · Réseau moyen.
+
+#### Outils
+
+- Email (Outlook / Gmail)
+- Smartphone (iPhone / Android)
+- Espace client web
+- Comparateurs d’assurance
+- WhatsApp (échanges rapides)
+
+**Note atelier :** préfère outils simples et mobiles pour gérer ses contrats le soir ou pendant les pauses.
+
+### Lifecycle (états — pas un second persona)
+
+| État | Rôle dans le parcours |
+|------|----------------------|
+| **Prospect** | Contact → devis → RDV → besoin → proposition → souscription |
+| **Client** | Vie du contrat ; documents ; historique ; sinistre éventuel ; renouvellement / résiliation |
+
+Canaux BMC groupe (transversaux) : RDV physique · Visio · téléphone · email · espace client — UI **NOT DECIDED**.

-## 9. Difficultés / pain points
+---

-Aucune observation AS-IS. Aucune affirmation du type « les utilisateurs disent… ».
+## 8. Synthèse des besoins (cadrage)

-**Courtier :** charge administrative ; traçabilité ; réactivité ; continuité du suivi.
-**Directeur :** visibilité / pilotage déduits des objectifs et KPIs.
-**Client particulier :** fluidité d’entrée en relation ; personnalisation ; transparence ; confiance ; continuité.
+| Profil | Enjeux principaux (atelier + brief) |
+|--------|-------------------------------------|
+| Courtier | Centralisation ; moins d’admin ; relances ; conseil ; conversion |
+| Directeur | KPI ; rentabilité ; conformité ; reporting ; données fiables |
+| Client particulier | Simplicité ; clarté ; suivi ; conseil humain ; gain de temps |

-**Qualification :** DÉDUITS DU BRIEF / SCÉNARIO — **NON OBSERVÉS SUR LE TERRAIN**.
-Frustrations détaillées des cartes atelier : **à synchroniser** (non inventées).
+Aucune user story. Aucun backlog. Aucune stack.

 ---

-## 10. Inconnues et limites
+## 9. Inconnues / limites

-- aucun entretien réel ;
-- détails démographiques / outils / frustrations des cartes atelier : **à synchroniser** ;
-- usage personnel du dashboard par le Directeur = inférence ;
-- usage direct du CRM par le Prospect = non démontré ;
-- interfaces / permissions = hors scope ;
-- pensées / émotions des maps = **NON RENSEIGNÉES**.
+- pas d’entretiens réels ;
+- pourcentages exacts des jauges atelier = **non affirmés** (tendances seulement) ;
+- outils listés = **scénario persona**, pas choix projet ;
+- interfaces / permissions = hors scope.

 ---

-## 11. Experience Map — Courtier
+## 10. Experience Map — Courtier

 | Champ | Valeur |
 |-------|--------|
-| **Statut** | **RETAINED / ALIGNED** — Courtier reste persona canonique |
+| **Statut** | **KEEP** — cohérente avec la carte atelier Courtier |
 | **Persona cible** | Courtier |
-| **Décision d’alignement 2026-09-29** | **KEEP / ADAPT MINOR** — pas de reconstruction ; le parcours métier reste cohérent avec le Courtier |
-| **Objet** | Expérience métier du courtier au fil de la relation (prospects → clients) — sans interface logicielle décidée |
-| **Nature** | CIBLE PÉDAGOGIQUE — **NON AS-IS OBSERVÉ** |
-
-### Phases (conservées)
-
-| Phase | Actions / enjeux (cadrage) | Niveau de preuve |
-|-------|----------------------------|------------------|
-| Prospection / contact / qualification | Prospecter ; prendre contact ; qualifier — Réactivité · Continuité du suivi | EXPLICITE + INFÉRENCE |
-| Devis | Réactivité · Charge administrative | EXPLICITE + INFÉRENCE |
-| Relance / RDV | Réactivité · Continuité du suivi | EXPLICITE + INFÉRENCE |
-| Besoin → proposition | Personnalisation · Continuité du suivi | EXPLICITE + INFÉRENCE |
-| Souscription → vie contrat | Traçabilité · Continuité du suivi | EXPLICITE + INFÉRENCE |
-| Docs / sinistre / renouvellement | Traçabilité · Continuité · Charge administrative | EXPLICITE + INFÉRENCE |
+| **Nature** | Cible pédagogique — **NON AS-IS OBSERVÉ** |

-**Traçabilité** = retrouver ce qui s’est passé (historique, étapes, documents).
-**Continuité du suivi** = poursuivre correctement la relation à partir du contexte — liée mais non synonyme.
+| Phase | Enjeux (cadrage) |
+|-------|------------------|
+| Prospection / contact / qualification | Réactivité · Continuité du suivi |
+| Devis | Réactivité · Charge administrative |
+| Relance / RDV | Réactivité · Continuité du suivi |
+| Besoin → proposition | Personnalisation · Continuité du suivi |
+| Souscription → vie contrat | Traçabilité · Continuité du suivi |
+| Docs / sinistre / renouvellement | Traçabilité · Continuité · Charge administrative |

-**Pensées / émotions :** dimension méthodologique conservée ; **NON RENSEIGNÉES** — pas d’inférence émotionnelle ; pas d’injection artificielle des frustrations atelier phase par phase.
+**Contrôle carte atelier :** objectifs (centraliser, automatiser relances, vision globale) et frustrations (saisie manuelle, portails multiples, reporting) **confirment** la map — **sans** injection mécanique phase × sticky.
+**Pensées / émotions par phase :** **NON RENSEIGNÉES** — pas de courbe émotionnelle inventée.

 ---

-## 12. Customer Journey Map — Client particulier
+## 11. Customer Journey Map — Client particulier

 | Champ | Valeur |
 |-------|--------|
-| **Statut** | **ADAPTED** — réalignement conceptuel 2026-09-29 |
 | **Titre** | Customer Journey — **Client particulier** |
 | **Sous-titre** | Du prospect à la vie client |
-| **Persona cible** | **Client particulier** (pas « Prospect → Client » comme persona) |
+| **Persona** | Client particulier |
 | **Lifecycle** | Prospect → souscription → Client |
-| **Objet** | Relation avec le **service de courtage / cabinet** |
-| **Nature** | CIBLE PÉDAGOGIQUE — **NON AS-IS OBSERVÉ** |
+| **Statut** | Conservé / cohérent avec carte atelier |

-### Séquence (étapes déjà validées — conservées)
+### Séquence cadrage (7 étapes)

 1. Première prise de contact
 2. Devis
@@ -253,46 +349,32 @@ Frustrations détaillées des cartes atelier : **à synchroniser** (non inventé
 4. Compréhension / qualification du besoin
 5. Proposition personnalisée
 6. Souscription
-7. Vie du contrat / suivi (échanges, documents, sinistre éventuel, renouvellement / résiliation)
-
-**Règles :**
-
-- Le début « prospect » du journey **n’en fait pas** un persona différent.
-- La map **ne suppose pas** que le futur CRM existe déjà.
-- **Ne pas décider ici :** interfaces distinctes prospect/client ; permissions ; écrans ; UI.
-- **Émotion :** NON RENSEIGNÉE — pas d’invention.
-- Canaux groupe (physique, Visio, téléphone, email, espace client) : transversaux — pas d’affectation canal × phase inventée.
-
----
+7. Vie du contrat / suivi (échanges, docs, sinistre éventuel, renouvellement / résiliation)

-## Alignement BMC groupe (rappel)
+Granularité Miro historique (entrée en relation · devis · RDV/besoin · proposition · souscription · vie du contrat · échanges/docs · sinistre/renouvellement) = **compatible**, pas de nouvelles étapes inventées.

-- Segments : **TPE/PME** ; **Client particulier (famille/étudiant)** — le persona 1.2 externe retenu par l’atelier est **Client particulier**.
-- Courtier : prospection + conseil personnalisé confirmés.
-- Directeur : inchangé sur le fond brief.
-- Maps : sémantique Traçabilité / Continuité conservée.
+**Émotion :** NON RENSEIGNÉE.
+**Ne pas décider :** interfaces Prospect/Client, écrans, permissions, UI.

 ---

-## Miro — état
+## 12. Miro — état

 | Champ | Valeur |
 |-------|--------|
-| **Board** | https://miro.com/app/board/uXjVHiWX64c=/ |
-| **État Cursor** | **NOT MODIFIED** |
-| **Sync** | **MIRO PERSONA SYNC REQUIRED** |
-
-| Livrable Miro historique | Impact |
-|--------------------------|--------|
-| Persona Courtier | À auditer / aligner sur set groupe |
-| Persona Directeur | À auditer / aligner |
-| Persona Prospect → Client | **À remplacer** par **Client particulier** |
-| Experience Map Courtier | À auditer / aligner si besoin |
-| Customer Journey Prospect → Client | **À renommer / réaligner** → Client particulier — du prospect à la vie client |
+| Board | https://miro.com/app/board/uXjVHiWX64c=/ |
+| Cursor | **NOT MODIFIED** |
+| Sync | **PENDING CHATGPT SYNC AFTER REVIEW** |

-Git est canonique après transcription. Miro n’est **pas** synchronisé dans ce cycle.
+| Frame ID | Cible |
+|----------|--------|
+| `3458764685164456040` | Persona Courtier — update in place |
+| `3458764685164456041` | Persona Directeur — update in place |
+| `3458764685164456042` | → Persona **Client particulier** |
+| `3458764685164458754` | Experience Map Courtier — KEEP |
+| `3458764685164510320` | CJM → Client particulier — Du prospect à la vie client |

-Frames 1.1 (BMC / BPMN) : **protégées — inchangées**.
+**Protégés :** BMC `3458764685039847893` · BPMN `3458764685039847894`.

 ---

@@ -300,15 +382,10 @@ Frames 1.1 (BMC / BPMN) : **protégées — inchangées**.

 | Point | État |
 |-------|------|
-| **1.2** | **VALIDATED — GROUP PERSONA CONSOLIDATION 2026-09-29** |
-| Personas canoniques | Client particulier · Courtier · Directeur |
-| Ancien persona Prospect → Client | **SUPERSEDED AS PERSONA** |
-| Continuity prospect → client | **RETAINED IN CUSTOMER JOURNEY** |
-| Experience Map Courtier | **RETAINED / ALIGNED** |
-| Customer Journey | **Client particulier — Du prospect à la vie client** |
-| Détail cartes atelier | **À SYNCHRONISER** (non inventé) |
-| Evidence | GROUP-VALIDATED PEDAGOGICAL SCENARIO — NO FIELD INTERVIEWS |
-| Miro | **SYNC REQUIRED** / NOT MODIFIED by Cursor |
+| **1.2** | VALIDATED — GROUP PERSONA CONSOLIDATION 2026-09-29 |
+| Détail personas | **TRANSCRIBED IN GIT** depuis cartes atelier |
+| Experience Map | KEEP |
+| Customer Journey | Client particulier — Du prospect à la vie client |
+| Miro | PENDING CHATGPT SYNC AFTER REVIEW |
+| 1.3 / 1.4 | OPENED AWAITING FINAL REVIEW / **NOT OPENED** |
 | Architecture / Stack | NOT DECIDED |
-| **1.3** | OPENED — AWAITING FINAL REVIEW (fond inchangé ce cycle) |
-| **1.4** | NOT OPENED |

```

## 12. Validations

| Check | Résultat |
|-------|----------|
| 3 personas + transcription fidèle | PASS |
| Pas d’invention % jauges | PASS |
| Provenance pédagogique | PASS |
| Experience Map KEEP | PASS |
| CJM Client particulier | PASS |
| 01-01 / 01-03 NO CHANGE | PASS |
| Miro payload 5 frames | PASS |
| BMC/BPMN protégés | PASS |
| 1.4 NOT OPENED | PASS |
| Archi/stack NOT DECIDED | PASS |
| Commit | PASS (cb336124) |
| Push projet | NOT DONE |
| PR | NOT CREATED |
| Review Handoff | TO VERIFY AFTER PUBLISH |

## 13. Réserves

Jauges = tendances qualitatives. Miro non synchronisé par Cursor. Outils personas ≠ stack. 1.3 non validé.

## 14. Verdict

**READY FOR CHATGPT REVIEW AND MIRO SYNC — CRM 1.2 FINAL PERSONA SYNCHRONIZATION COMPLETE**
