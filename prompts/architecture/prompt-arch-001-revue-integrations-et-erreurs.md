# PROMPT-ARCH-001 — Revue intégrations et erreurs

**ID** : PROMPT-ARCH-001
**Nom** : Revue intégrations et erreurs
**Famille** : Architecture
**Dossier** : `prompts/architecture/`
**Statut** : Draft
**Source pilote** : PRJ-INTERV360
**Phase SFIA** : Architecture
**Rôles mobilisés** : Architecte, QA / Testeur, RSSI, UX/UI Designer, Product Owner, Chef de projet
**Livrables sources** : ADR-001, ADR-002, ADR-003, ADR-004
**Type** : Prompt SFIA réutilisable

---

## 1. Objectif du prompt

Ce prompt sert à réaliser une **revue structurée des intégrations et erreurs** d'un projet SFIA.

Il permet de :

- identifier les **intégrations externes ou simulées** ;
- distinguer **intégration réelle, simulée, mock ou hors MVP** ;
- cadrer les **contrats API ou fonctionnels** ;
- identifier les **erreurs attendues** ;
- rendre les erreurs **visibles côté métier** si nécessaire ;
- préparer une **Error Matrix** ;
- cadrer la **journalisation minimale** ;
- identifier les **ADR candidates ou ADR formelles** nécessaires ;
- **capitaliser la valeur SFIA**.

---

## 2. Quand utiliser ce prompt

**Utiliser ce prompt :**

- en fin de cadrage ;
- au début de la phase architecture ;
- avant de produire une architecture technique complète ;
- avant de produire un backlog ;
- avant de produire des user stories ;
- lorsqu'un projet contient des **intégrations externes** ;
- lorsqu'un projet utilise des **intégrations simulées** ;
- lorsqu'un **démonstrateur** doit rester crédible sans systèmes réels ;
- lorsqu'il faut cadrer les **erreurs, anomalies ou rejets**.

**Ne pas utiliser ce prompt :**

- pour produire du **code** ;
- pour produire une **architecture complète** ;
- pour créer directement un **backlog** ;
- pour générer des **user stories** ;
- pour remplacer une **analyse RSSI dédiée** (canal email, données sensibles) ;
- pour remplacer une **analyse QA détaillée** (plans de test, critères d'acceptation exhaustifs).

---

## 3. Entrées nécessaires

| Entrée | Obligatoire | Commentaire |
|--------|-------------|-------------|
| **Contexte projet** | Oui | Nom, objectif, type (pilote, MVP, produit) |
| **Phase projet** | Oui | Cadrage, architecture, delivery, etc. |
| **Périmètre MVP** | Oui | Inclus / exclus / post-MVP |
| **Liste des intégrations connues** | Oui | CRM, email, calendrier, notifications, etc. |
| **Arbitrages MVP existants** | Recommandé | Décisions structurantes déjà validées |
| **Règles métier impactées** | Recommandé | RG-* ou équivalent |
| **Exigences SSI connues** | Recommandé | Canaux sécurisés, données sensibles |
| **Parcours utilisateur ou métier** | Recommandé | Flux impactés par intégrations / erreurs |
| **Écrans concernés** | Recommandé | Anomalies, dashboards, intake |
| **Risques connus** | Optionnel | Risques intégration, SSI, UX |
| **ADR candidates existantes** | Recommandé | Liste priorisée si disponible |
| **Méthodes rôle applicables** | Recommandé | `docs/practices/roles/` concernées |

---

## 4. Sorties attendues

| Sortie | Description |
|--------|-------------|
| **Cartographie des intégrations** | Systèmes, canaux, dépendances, canal principal / secondaires |
| **Matrice intégration réelle / simulée / mock / hors MVP** | Niveau par domaine |
| **Matrice des contrats à documenter** | Endpoints, opérations, statuts, erreurs attendues |
| **Error Matrix** | Domaine, erreur, gravité, visibilité, action, journalisation |
| **Matrice erreurs visibles / logs techniques** | Distinction message métier / log minimal |
| **Journalisation minimale recommandée** | Événements, champs, statuts, exclusions sensibles |
| **ADR candidates ou ADR formelles proposées** | Décisions structurantes identifiées |
| **Impacts projet** | MVP, UX, QA, SSI, exploitation, gouvernance |
| **Impacts SFIA** | Templates, standards, checklists, méthodes rôle |
| **Rôles mobilisés** | Contribution par rôle |
| **Prompts ou templates à enrichir** | Capitalisation post-revue |

---

## 5. Garde-fous

- [ ] ne pas produire de **code** ;
- [ ] ne pas produire de **backlog** ;
- [ ] ne pas produire de **user stories** ;
- [ ] ne pas produire d'**architecture technique complète** si la phase ne l'autorise pas ;
- [ ] ne pas connecter par défaut des **systèmes externes réels** ;
- [ ] ne pas masquer les erreurs significatives dans des **logs uniquement** ;
- [ ] ne pas exposer de **données sensibles** dans les messages visibles ;
- [ ] ne pas transformer une revue architecture en **supervision complète** ;
- [ ] **distinguer contrat documenté et implémentation** ;
- [ ] **distinguer message métier et log technique** ;
- [ ] **identifier les impacts SFIA**.

---

## 6. Corps du prompt réutilisable

Copier le bloc ci-dessous pour exécuter la revue sur un projet SFIA.

---

```
Tu es chargé de réaliser une revue architecture des intégrations et erreurs pour un projet SFIA.

Contexte projet :
[Décrire le projet, son périmètre, son MVP, sa phase actuelle et ses contraintes.]

Sources disponibles :
[Lister les documents de cadrage, arbitrages, ADR candidates, ADR existantes, méthodes rôle, exigences SSI, éléments UX, règles métier.]

Si le projet pilote est Interv360, utiliser les ADR P1 (ADR-001 à ADR-004) comme référence de bonnes pratiques — sans les copier aveuglément si le contexte diffère.

Objectif :
Produire une revue structurée des intégrations, erreurs, anomalies, rejets et mécanismes de traçabilité, sans produire de code, backlog, user stories ou architecture technique complète si la phase ne l'autorise pas.

Travail attendu :

1. Identifier les intégrations
   - lister les systèmes, canaux ou services concernés ;
   - distinguer intégrations réelles, simulées, mocks, hors MVP ;
   - identifier le canal principal et les canaux secondaires ;
   - identifier les dépendances entre intégrations.

2. Cadrer les contrats
   - proposer le niveau de contrat attendu : fonctionnel, API documentée, OpenAPI, mock simple ;
   - distinguer contrat documenté et implémentation ;
   - identifier les endpoints ou opérations candidates ;
   - identifier les payloads ou objets principaux sans produire de schéma exhaustif si ce n'est pas autorisé.

3. Identifier les erreurs attendues
   - erreurs de disponibilité ;
   - erreurs de payload ;
   - erreurs de mapping ;
   - erreurs de doublon ;
   - erreurs de rejet SSI ;
   - erreurs de qualification ;
   - erreurs non bloquantes ;
   - erreurs bloquantes.

4. Déterminer la visibilité des erreurs
   - erreurs visibles côté métier ;
   - erreurs uniquement journalisées ;
   - erreurs à reprendre manuellement ;
   - erreurs ignorées ou non bloquantes ;
   - distinction message métier / log technique.

5. Préparer une Error Matrix
   Créer un tableau :
   | Domaine | Erreur | Gravité | Visible utilisateur | Action attendue | Journalisation | Commentaire |

6. Définir la journalisation minimale
   - événements à tracer ;
   - champs minimaux ;
   - statuts résultat ;
   - exclusions de données sensibles ;
   - lien entre anomalie visible et log technique ;
   - limites de conservation à instruire séparément si nécessaire.

7. Identifier les décisions nécessaires
   - ADR candidates ;
   - ADR formelles ;
   - décisions à reporter ;
   - sujets hors MVP ;
   - liens entre décisions.

8. Identifier les impacts
   - projet ;
   - UX/UI ;
   - QA ;
   - SSI ;
   - exploitation ;
   - gouvernance ;
   - SFIA.

9. Capitalisation SFIA
   Identifier :
   - templates candidats ;
   - checklists candidates ;
   - standards candidats ;
   - prompts à créer ou enrichir ;
   - méthodes rôle à enrichir ;
   - savoir-faire ;
   - savoir-être ;
   - garde-fous réutilisables.

Contraintes :
- ne pas produire de code ;
- ne pas produire de backlog ;
- ne pas produire de user stories ;
- ne pas produire de maquettes ou Figma ;
- ne pas produire d'architecture complète si la phase ne l'autorise pas ;
- documenter clairement les hypothèses ;
- toujours distinguer valeur projet et valeur SFIA.

Sortie attendue :
Un document structuré avec :
- synthèse ;
- cartographie intégrations ;
- contrats à documenter ;
- Error Matrix ;
- journalisation minimale ;
- décisions / ADR candidates ;
- impacts projet ;
- impacts SFIA ;
- recommandations ;
- prochaines actions.
```

---

## 7. Critères de qualité du résultat

- [ ] les intégrations sont identifiées ;
- [ ] le niveau de simulation est explicite ;
- [ ] les contrats à documenter sont listés ;
- [ ] les erreurs attendues sont identifiées ;
- [ ] les erreurs visibles sont distinguées des logs techniques ;
- [ ] une Error Matrix est produite ;
- [ ] la journalisation minimale est cadrée ;
- [ ] les données sensibles sont protégées ;
- [ ] les ADR candidates ou décisions nécessaires sont identifiées ;
- [ ] les impacts projet sont documentés ;
- [ ] les impacts SFIA sont documentés ;
- [ ] les rôles mobilisés sont identifiés ;
- [ ] les templates / standards / prompts candidats sont listés.

---

## 8. Liens avec les méthodes rôle

| Rôle | Apport du prompt |
|------|------------------|
| **Architecte** | Cadrage contrats, niveau simulation, ADR, dépendances entre décisions |
| **RSSI** | Rejets SSI, exclusions données sensibles, journalisation sans sur-exposition |
| **UX/UI Designer** | Visibilité erreurs, message métier, écran anomalies, Figma post-décisions |
| **Product Owner** | Périmètre MVP, canal principal, exclusion retry / intégrations réelles |
| **Chef de projet** | Phase autorisée, capitalisation SFIA, traçabilité décisions |
| **QA / Testeur** | Error Matrix, scénarios non happy path, vérification logs |
| **Business Analyst** | Règles métier impactées, qualification, doublons — si règles métier concernées |

---

## 9. Capitalisation SFIA

| Élément | Capitalisation | Type |
|---------|----------------|------|
| Template API Contract Framing | Revue §2 contrats | Template |
| Template Error Matrix | Revue §5 | Template |
| Template Minimal Logging Matrix | Revue §6 | Template |
| Standard contrats API simulés | Option contrats documentés + implémentation simulée | Standard |
| Standard erreurs visibles + reprise manuelle | Visibilité + reprise sans retry auto MVP | Standard |
| Standard journalisation minimale | Logs structurés sans SIEM | Standard |
| Checklist logs sans données sensibles | Exclusions corps email, PJ, données client | Checklist |
| Prompt architecture intégrations et erreurs | Présent document | Prompt |

---

## 10. Origine / apprentissage pilote

Ce prompt est issu du **projet pilote Interv360**, notamment :

- **ADR-001** — contrats API documentés avec implémentation simulée ;
- **ADR-002** — gestion visible des erreurs avec reprise manuelle simulée ;
- **ADR-003** — canal email sécurisé non principal (complément sécurité) ;
- **ADR-004** — journalisation minimale des flux et rejets ;
- enrichissement des **méthodes rôle** après bloc ADR P1 (`role-methods-enrichment-after-adr-p1.md`).

Le prompt est **générique** : il doit être **adapté à chaque projet** (périmètre, intégrations, phase, contraintes SSI). Les ADR Interv360 servent de référence, pas de copier-coller obligatoire.

---

## 11. Historique / REX

| Date / jalon | Évolution | Source |
|--------------|-----------|--------|
| Bloc ADR P1 consolidé | Création **Draft** issue du bloc ADR P1 Interv360 | ADR-001 à ADR-004 |
| Post-enrichissement méthodes rôle | Prompt aligné méthodes Architecte, RSSI, UX, PO, CP | `role-methods-enrichment-after-adr-p1.md` |
| — | Passage **Tested** | À documenter après première utilisation hors pilote |
| — | Passage **Validated** | À documenter après REX multi-projets |

---

*Prompt SFIA — Architecture — Draft*
