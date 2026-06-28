# SFIA — Standard gouvernance UX/UI V1

**Statut** : Official standard  
**Type** : Standard de gouvernance UX/UI  
**Version** : 1.0  
**Source pilote** : Interv360 — Figma V1 (exemple non normatif — §18)  
**Objet** : cadrer la production, la revue, la clôture et la gouvernance d'une maquette UX/UI V1 sans déclencher prématurément le delivery

---

## 1. Objectif

Ce standard définit une **méthode générique** pour **produire**, **revoir**, **clôturer** et **gouverner** une **maquette UX/UI V1** dans le cadre SFIA.

Il s'applique à tout projet disposant d'un périmètre cible (MVP ou équivalent), de garde-fous décisionnels (ADR ou équivalent) et d'une gouvernance documentée.

**Règles fondamentales**

- une maquette V1 peut être **présentable** sans être **définitive** ;
- une maquette V1 **ne vaut pas** backlog ;
- une maquette V1 **ne vaut pas** user stories ;
- une maquette V1 **ne vaut pas** code ;
- une maquette V1 **ne vaut pas** feu vert delivery ;
- toute transition vers le **delivery** doit faire l'objet d'un **jalon explicite** et de décisions documentées.

---

## 2. Périmètre

### Inclus

| Domaine | Détail |
|---------|--------|
| Types de projet | Fictifs, pilotes, réels |
| Outils design | Figma, autre outil design, production manuelle, outil génératif ou assisté par IA |
| Modes de revue | Revue transverse **réelle** ou **simulée** par rôles SFIA |
| Gouvernance | Git (source détaillée) ; Notion ou autre outil (synthèse) |
| Livrables | Notes, instructions, prompts, captures, revues, comptes rendu, clôture, payload gouvernance |

### Hors périmètre

- production de **backlog** ;
- rédaction de **user stories** ;
- **développement** applicatif ;
- **architecture technique complète** ;
- **publication automatique** dans un outil de gouvernance ;
- **validation juridique** ou **SSI complète** si non arbitrée par décisions projet.

---

## 3. Définitions

| Terme | Définition |
|-------|------------|
| **Maquette UX/UI V1** | Premier jet visuel structurant les écrans cœur du périmètre cible ; exploitable pour revue, pas pour implémentation directe |
| **V1 présentable** | Maquette suffisante pour démonstration, revue transverse et capitalisation ; ajustements mineurs acceptables |
| **V1 non définitive** | Maquette non figée pour implémentation ; polish, wording ou structure peuvent évoluer (V2) |
| **V2** | Itération maquette post-V1 ; arbitrée explicitement (périmètre, outil, crédits) |
| **Delivery** | Phase de réalisation (backlog, user stories, code) ; distincte du jalon UX/UI V1 |
| **Revue réelle** | Session avec participants réels ; décisions attribuées à des personnes identifiées |
| **Revue simulée** | Validation structurée **au nom des rôles SFIA** ; sans participants réels ni personnes inventées ; explicitement déclarée comme simulée |
| **Rôles SFIA** | Product Owner, UX/UI Designer, RSSI, Architecte, Chef de projet, Business Analyst, QA / Testeur (selon disponibilité méthode) |
| **Garde-fous ADR** | Décisions d'architecture ou d'arbitrage (ADR ou équivalent) limitant le périmètre visible en maquette |
| **Gouvernance** | Ensemble des règles, jalons et synthèses traçant les décisions sans dupliquer la source détaillée |
| **Source de vérité Git** | Dépôt versionné contenant documents détaillés, captures et comptes rendu |
| **Synthèse outil de gouvernance** | Résumé court (Notion ou autre) — statut jalon, décisions clés, prochaines actions ; pas de contenu ADR complet |

---

## 4. Principes directeurs

- Une **V1 présentable** n'est **pas** une V1 définitive.
- Une **maquette** ne déclenche **pas automatiquement** backlog, user stories ou code.
- Les **garde-fous ADR** (ou équivalents) restent **prioritaires** sur toute décision design.
- La **revue** doit être **documentée** (préparation, compte rendu, décisions).
- Une **revue simulée** doit être **déclarée comme simulée** — jamais présentée comme réunion réelle.
- **Aucun participant fictif** ne doit être inventé en revue simulée (rôles uniquement).
- Les **rôles** doivent être mobilisés selon leur **savoir-faire**, **savoir-être** et **garde-fous** (méthodes rôle SFIA).
- Les **captures** d'écran doivent être **versionnées** dans Git lorsque possible.
- **Git** reste la **source détaillée**.
- **Notion** ou tout autre outil de gouvernance reçoit une **synthèse uniquement**.
- Toute **publication de gouvernance** est **manuelle** sauf décision explicite contraire.
- Les **contraintes outil** (crédits, licences, génératif) doivent être **documentées**.

---

## 5. Pré-requis

| Pré-requis | Description |
|------------|-------------|
| Cadrage MVP ou périmètre cible | Écrans cœur et exclusions documentés |
| Décisions ADR ou garde-fous équivalents | Arbitrages structurants avant ou pendant le design |
| Rôles mobilisables | Méthodes rôle SFIA disponibles ou candidats identifiés |
| Direction UX/UI minimale | Principes visuels, ton, contraintes lisibilité |
| Outil design identifié | `{design_tool}` — Figma, autre, ou mixte |
| Dossier de stockage des captures | `{screens_folder}` dans le dépôt projet |
| Règles de gouvernance | Git source détaillée ; synthèse outil pilotage |
| Décision explicite sur mode de revue | `{review_mode}` : `real` ou `simulated` |

---

## 6. Séquence standard

| # | Étape | Objectif | Livrable attendu |
|---|-------|----------|------------------|
| 1 | Ouverture UX/UI V1 | Cadrer le jalon design post-arbitrages | Note d'ouverture |
| 2 | Recherche design / benchmark | Ancrer la direction visuelle | Document recherche |
| 3 | Instructions UX/UI | Traduire garde-fous en consignes design | Instructions design |
| 4 | Prompt ou brief de production | Formaliser la production maquette | Prompt / brief structuré |
| 5 | Production maquette V1 | Produire le premier jet visuel | Fichier maquette (outil) |
| 6 | Export et versionnement captures | Traçabilité visuelle Git | Dossier PNG (ou équivalent) |
| 7 | Revue premier jet | Qualifier la V1 | Document revue V1 |
| 8 | Préparation revue transverse | Cadrer la revue multi-rôles | Document préparation |
| 9 | Template compte rendu | Structurer les retours | Template CR (vide) |
| 10 | Enrichissement rôles | Capitaliser apprentissages avant revue | Note + méthodes rôle si nouveau |
| 11 | Revue transverse réelle ou simulée | Valider au nom des rôles | Compte rendu revue |
| 12 | Clôture jalon UX/UI V1 | Acter la fin du jalon | Synthèse clôture |
| 13 | Préparation sync gouvernance | Tracer la clôture en pilotage | Payload JSON + synthèse |
| 14 | Décision de suite | V2, delivery, capitalisation — sans auto-déclenchement | Décision documentée |

---

## 7. Production maquette V1

### Entrées

- Périmètre écrans et exclusions.
- Instructions UX/UI et prompt ou brief de production.
- Garde-fous ADR (ou équivalents).
- Direction visuelle documentée.

### Règles de production

- Respecter le **périmètre cible** — pas d'élargissement implicite par écrans ou libellés.
- Aligner les **statuts, actions et wording** sur les arbitrages documentés.
- Documenter les **contraintes outil** si production assistée ou crédits limités.

### Éléments autorisés (selon arbitrages projet)

- Écrans cœur du périmètre cible.
- Dashboards distincts si arbitrés (ex. opérationnel vs synthétique).
- Parcours mobile ou terrain si dans le périmètre.
- Signature ou preuves **si arbitrées** — optionnelles, fictives ou métadonnées selon ADR.
- Anomalies et reprise manuelle en **langage métier**.

### Éléments interdits (sauf décision explicite post-MVP)

- Portail client, IA visible, BI avancée, logs techniques exposés, signature juridique complète non arbitrée, conservation réelle promise.

### Contrôles qualité

- Écrans cœur présents.
- Garde-fous visuellement respectés.
- Direction visuelle cohérente sur l'ensemble des écrans.

### Sorties attendues

- Maquette V1 dans `{design_tool}`.
- **Aucun** backlog, user story ou code.

> La production peut être réalisée via **Figma**, **autre outil design**, **outil génératif** ou **production manuelle**.

---

## 8. Export et versionnement

- **Exporter** les écrans principaux du périmètre cible.
- Utiliser des **noms explicites** (`{screen-purpose}.png` ou convention projet).
- Stocker dans **`{screens_folder}`** sous le dépôt projet.
- **Ne pas dépendre uniquement** du lien outil (lien fragile, crédits, accès).
- Conserver les captures comme **preuve visuelle** immuable pour les revues.
- **Documenter** les pages ou sections **non exportées** (principes, tokens, composants, flux) — sans inventer de fichiers manquants.

---

## 9. Revue premier jet

### Objectif

Qualifier la V1 comme **exploitable**, **présentable**, **à corriger** ou **à rejeter**.

### Critères

- Analyse **par écran** : validé, ajustements, risques.
- **Score indicatif optionnel** (`{v1_quality_score}`) — jamais normatif ni seuil obligatoire.
- **Points validés** et **ajustements P1 / P2 / P3**.
- Distinction **défaut bloquant** vs **polish** (maturité visuelle).

### Décision

- V1 **présentable** ou **non présentable** pour revue transverse.
- Ajustements documentés pour V2 éventuelle.

> **La revue premier jet ne valide pas le delivery.**

---

## 10. Enrichissement rôles

Avant une **revue transverse**, les **méthodes rôle** (`docs/methods/roles/`) doivent être **vérifiées et enrichies** si la phase a produit de **nouveaux apprentissages** (production, revue premier jet, contraintes outil).

### Rôles possibles

Product Owner ; UX/UI Designer ; RSSI ; Architecte ; Chef de projet ; Business Analyst ; QA / Testeur.

| Rôle | Contribution à la revue UX/UI V1 |
|------|----------------------------------|
| **Product Owner** | Respect MVP ; valeur métier ; dérives fonctionnelles ; décision V2 / delivery |
| **UX/UI Designer** | Cohérence visuelle ; hiérarchie ; polish vs bloquant ; surpromesse visuelle |
| **RSSI** | Données sensibles ; logs ; preuves ; signature ; wording conformité ; IA implicite |
| **Architecte** | Cohérence ADR ; intégrations simulées ; architecture implicite ; exclusions |
| **Chef de projet** | Jalon ; traçabilité ; blocage delivery ; contraintes outil |
| **Business Analyst** | Termes métier ; statuts / SLA ; workflows implicites ; sans backlog anticipé |
| **QA / Testeur** | Parcours testables ; happy / non happy path ; états visibles |

---

## 11. Revue transverse réelle ou simulée

### 11.1 Revue réelle

| Aspect | Règle |
|--------|-------|
| Participants | Personnes réelles identifiées |
| Décisions | Attribuées aux participants et rôles représentés |
| Compte rendu | CR réel — date, participants, décisions, actions |
| Réserves | Documentées par rôle si applicable |
| Validation | Décision globale explicite ; delivery non automatique |

### 11.2 Revue simulée

| Aspect | Règle |
|--------|-------|
| Usage | Projet **fictif** ou **pilote** sans acteurs réels mobilisables |
| Validation | **Au nom des rôles SFIA** — pas de personnes inventées |
| Déclaration | Revue **explicitement simulée** dans le compte rendu |
| Cohérence | Décisions alignées sur méthodes rôle enrichies |
| Livrable | Compte rendu dédié — statut `Reviewed — Simulated` ou équivalent |

> Une revue simulée **n'est pas** une revue réelle et **ne doit pas** être présentée comme telle.

---

## 12. Clôture jalon UX/UI V1

La clôture doit documenter :

| Élément | Contenu |
|---------|---------|
| Statut V1 | Ex. closed — validated with minor adjustments |
| Score indicatif | Optionnel — non normatif |
| Éléments validés | Périmètre, écrans, garde-fous, revue |
| Ajustements différés | P1–P3 ; cible V2 ou polish |
| Hors périmètre | Reports post-MVP documentés |
| Décision V2 | Nécessaire / différée / non requise |
| Décision delivery | Bloqué sauf décision explicite |
| Valeur projet | Support visuel, compréhension périmètre |
| Valeur SFIA | Séquence, templates, enrichissement rôles |
| Prochaines options | Sans déclenchement automatique |

> La clôture **n'ouvre pas automatiquement** la phase suivante.

---

## 13. Gouvernance et sync outil

La synchronisation vers **Notion** ou **`{governance_tool}`** doit :

| Propriété | Valeur par défaut |
|-----------|-------------------|
| Préparée | Payload + synthèse markdown |
| Publiée | **Non** — `publish_to_governance: false` ou équivalent |
| Mode | **Manuel** — `manual_review_required` |
| Contenu | Synthétique — pas de duplication ADR complète |
| Effet | **Ne crée pas** backlog, stories ou code |
| Delivery | Mention explicite : bloqué ou autorisé |

### Champs génériques recommandés (payload)

| Variable | Description |
|----------|-------------|
| `{project_id}` | Identifiant projet |
| `{project_name}` | Nom projet |
| `{phase}` | Phase courante |
| `{milestone}` | Jalon UX/UI V1 |
| `{design_tool}` | Outil design utilisé |
| `{review_mode}` | `real` ou `simulated` |
| `{delivery_status}` | `blocked` ou `authorized` (explicite) |
| `{governance_tool}` | Notion ou autre |
| `{source_documents}` | Liste documents Git source |

---

## 14. Décisions types

| Décision | Signification | Effet |
|----------|---------------|-------|
| **V1 présentable** | Maquette suffisante pour revue / démo | Peut avancer vers revue transverse et clôture |
| **V1 non définitive** | Polish et ajustements acceptables | Pas de feu vert implémentation |
| **V2 différée** | Itération reportée | Pas de production V2 automatique |
| **V2 nécessaire** | Ajustements bloquants ou arbitrage explicite | Planifier V2 avec conditions outil |
| **Delivery bloqué** | Pas de passage réalisation | Backlog, stories, code interdits |
| **Delivery à arbitrer** | Demande de passage — non décidée | Décision jalon delivery requise |
| **Backlog bloqué** | Pas de création backlog | Jusqu'à autorisation explicite |
| **User stories bloquées** | Pas de rédaction stories | Idem |
| **Code bloqué** | Pas de développement | Idem |
| **Sync gouvernance préparée** | Payload prêt — non publié | Revue manuelle avant publication |
| **Publication gouvernance réalisée manuellement** | Synthèse publiée dans `{governance_tool}` | Informatif — pas de delivery implicite |

---

## 15. Garde-fous

- [ ] pas de confusion **maquette** / **spécification**
- [ ] pas de **backlog** automatique
- [ ] pas de **user stories** automatiques
- [ ] pas de **code** automatique
- [ ] pas de **delivery** sans décision explicite
- [ ] pas de **participants fictifs nommés** en revue simulée
- [ ] pas de **publication gouvernance** automatique
- [ ] pas d'**outil design** imposé par le standard
- [ ] pas d'**outil de gouvernance** imposé par le standard
- [ ] pas de **V2** implicite
- [ ] pas de **surpromesse fonctionnelle** (portail, IA, BI non arbitrés)
- [ ] pas de **surpromesse sécurité** (conformité, archivage, signature non décidés)
- [ ] pas d'**architecture implicite** non arbitrée

---

## 16. Critères de passage delivery

| Critère | Statut attendu |
|---------|----------------|
| V1 ou V2 validée | Décision clôture ou CR explicite |
| Ajustements bloquants levés | P1 traités ou arbitrés |
| Périmètre confirmé | PO / équipe |
| Garde-fous confirmés | RSSI, Architecte si applicable |
| Décision PO | Feu vert ou réserves documentées |
| Décision chef de projet | Jalon delivery ouvert explicitement |
| Décision architecture | Si impact technique confirmé |
| Décision RSSI | Si exigences SSI applicables |
| Backlog explicitement autorisé | Oui — documenté |
| User stories explicitement autorisées | Oui — documenté |
| Code explicitement autorisé | Oui — documenté |

> **Sans ces décisions, le delivery reste bloqué.** La clôture UX/UI V1 seule **ne suffit pas**.

---

## 17. Amélioration continue

Ce standard doit être **enrichi** à partir de :

- retours projet (REX) ;
- revues **réelles** et **simulées** ;
- contraintes outil documentées ;
- écarts constatés entre maquette et arbitrages ;
- nouveaux rôles ou méthodes rôle ;
- prompts et catalogues utilisés.

Les versions futures incrémentent **`Version`** en tête de document et conservent la traçabilité des sources pilotes.

---

## 18. Exemple pilote — Interv360

*Exemple d'application — **non normatif**.*

| Élément | Valeur observée |
|---------|-----------------|
| Projet | PRJ-INTERV360 (pilote / fictif) |
| Outil | Figma V1 — production assistée par prompt |
| Captures | 11 PNG versionnées Git |
| Qualité indicative | 8,3/10 — optionnel, non seuil standard |
| Décision revue | Validé avec ajustements mineurs — revue simulée multi-rôles |
| V2 | Différée — crédits Figma épuisés |
| Delivery | Bloqué à la clôture |
| Gouvernance | Sync Notion préparée — `publish_to_notion: false` |

**Documents pilote** (référence uniquement) : standard candidat, revue simulée, clôture et sync préparée dans `projects/interv360/02-architecture/`.

> Les chemins, noms de captures, score 8,3/10 et ADR Interv360 **ne constituent pas** des obligations pour les autres projets.

---

## 19. Conclusion

Ce **standard officiel** fournit un **cadre générique** pour **gouverner une maquette UX/UI V1** dans SFIA.

Il permet de **produire**, **revoir**, **clôturer** et **synchroniser la gouvernance** d'une maquette **sans déclencher prématurément le delivery**.

Il est **issu du pilote Interv360**, mais **généralisé** pour être **réutilisable** sur d'autres projets, outils design et modes de revue.

---

*SFIA — Standard gouvernance UX/UI V1 — version 1.0 — officiel.*
