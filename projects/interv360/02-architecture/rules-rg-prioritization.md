# Interv360 — Priorisation et clarification des règles RG MVP

**Projet** : PRJ-INTERV360  
**Phase** : 02-architecture  
**Type** : Clarification règles métier MVP  
**Statut** : Draft — règles clarifiées post-atelier simulé  
**Source principale** : `mvp-clarifications.md`

---

## 1. Objectif

Ce document **formalise les règles RG prioritaires du MVP Interv360**, en traduisant les clarifications issues de l'atelier simulé et de `mvp-clarifications.md` en **règles métier exploitables** pour la conception fonctionnelle amont.

**Précisions :**

- il **traduit les clarifications MVP** en règles métier structurées ;
- il reste au niveau **cadrage / conception fonctionnelle amont** — pas d'implémentation ;
- il **ne constitue pas** un backlog ;
- il **ne produit pas** de user stories ;
- il **ne produit pas** de cas de tests ;
- il **ne lance pas** le delivery.

---

## 2. Sources utilisées

| Source | Apport |
|--------|--------|
| `mvp-clarifications.md` | Consolidation décisions MVP — UX, transverse, hors périmètre |
| `mvp-clarifications-summary.md` | Synthèse des décisions clés et documents de sortie |
| `clarification-workshop-minutes.md` | Orientations macro des 6 règles RG en atelier simulé |
| `clarification-workshop-minutes-summary.md` | Vue d'ensemble atelier et garde-fous |
| `qa-transverse-analysis.md` | Règles prioritaires, ambiguïtés, testabilité amont |
| `2026-06-27-business-framing.md` | Inventaire RG-*, parcours SAV, risques, objets métier |
| `mvp-arbitration-validation.md` | ARB-MVP-01 à 07 — canaux, signature, erreurs, sync |
| `mvp-arbitrations.md` | Détail arbitrages et impacts sur règles |
| `ux-ui-brief.md` | Écrans MVP, parcours, représentation erreurs, personas |
| `ux-ui-brief-validation.md` | Points UX ouverts tranchés — lien fiche demande, erreurs |

---

## 3. Vue d'ensemble des règles prioritaires

| Règle | Sujet | Priorité MVP | Niveau de clarification | Document lié |
|-------|-------|--------------|-------------------------|--------------|
| **RG-C04** | Anti-doublon cross-canal | Haute | Clarifié macro | `mvp-clarifications.md` |
| **RG-C05** | Données minimales obligatoires | Haute | Clarifié macro | `mvp-clarifications.md` |
| **RG-I05** | Mapping des statuts | Haute | Clarifié macro | `status-mapping.md` |
| **RG-I06** | Erreurs / anomalies d'intégration | Haute | Clarifié macro | Annexe erreurs / ADR candidate |
| **RG-R02** | Signature client obligatoire ou optionnelle | Haute | Clarifié macro | `closure-without-signature.md` |
| **RG-R05** | Conditions de clôture | Haute | Clarifié macro | `closure-without-signature.md` |

*Chaque règle reste à **formaliser en détail** dans les documents spécialisés lorsque nécessaire.*

---

## 4. RG-C04 — Anti-doublon cross-canal

### 4.1 Enjeu

Le MVP Interv360 accepte plusieurs **canaux d'entrée** (ARB-MVP-01) :

- **CRM principal** (simulé) ;
- **email sécurisé** ;
- **saisie manuelle** par le manager SAV.

Le **risque principal** est la **double création** d'une demande pour un même besoin client, notamment lors d'arrivées quasi simultanées sur canaux différents (risque R-UX04, `2026-06-27-business-framing.md`).

Le MVP **ne doit pas bloquer automatiquement** une création légitime à tort — la détection doit **signaler** sans imposer une fusion automatique risquée.

### 4.2 Règle MVP clarifiée

> **RG-C04 — Anti-doublon cross-canal (MVP)**
>
> Une demande entrante doit être **signalée comme doublon potentiel** si elle présente une **proximité forte** avec une demande existante sur plusieurs critères cumulatifs :
>
> - **client** ou entité concernée ;
> - **contact** ou identifiant client si disponible ;
> - **site / adresse** ;
> - **motif** ou catégorie de demande ;
> - **fenêtre temporelle proche** (orientation atelier : ±48 h) ;
> - **référence externe** CRM ou identifiant email si disponible.
>
> Le MVP **ne fusionne pas automatiquement** les demandes.
> Il **signale le doublon potentiel** au manager SAV ou à l'utilisateur habilité.
> La **décision de fusion, maintien ou rejet** reste **manuelle**.

### 4.3 Niveau de maturité

**Clarifié macro** — critères de détection orientés ; seuils de similarité et règles de fusion à préciser.

### 4.4 Impacts UX / métier

- **alerte** ou **badge « doublon potentiel »** sur fiche demande et listes ;
- **information visible** sur la fiche demande (lien vers demande suspectée) ;
- **pas de blocage automatique** de la création ou de la qualification ;
- **action manuelle requise** : fusion, maintien des deux demandes, ou rejet avec motif.

### 4.5 Points à documenter plus tard

- seuil exact de similarité et pondération des critères ;
- règles de fusion (champs conservés, statut résultant) ;
- historique de décision anti-doublon ;
- lien spécifique avec le canal **email sécurisé** (rejets, pièces jointes).

---

## 5. RG-C05 — Données minimales obligatoires

### 5.1 Enjeu

Une demande doit être **suffisamment renseignée** pour être **qualifiée** et, à terme, **planifiée**, sans imposer un formulaire excessif au MVP.

Cette règle est **cohérente** avec la décision UX **« checklist minimale MVP »** (`mvp-clarifications.md` §4) et l'objectif de réduire la surcharge cognitive (risque R-M05).

### 5.2 Règle MVP clarifiée

> **RG-C05 — Données minimales obligatoires (MVP)**
>
> Pour être **créée ou qualifiée**, une demande MVP doit contenir **au minimum** :
>
> - **client** ou entité concernée ;
> - **contact** ou moyen de contact ;
> - **canal d'entrée** ;
> - **motif / catégorie** de demande ;
> - **description courte** ;
> - **site, adresse ou zone d'intervention** ;
> - **priorité initiale** ;
> - **date de création** (horodatage système) ;
> - **créneau souhaité** si disponible.
>
> Une demande **incomplète** peut être **enregistrée**, mais elle doit rester au statut **« À qualifier »** tant que les informations minimales nécessaires à la **planification** ne sont pas présentes.

### 5.3 Niveau de maturité

**Clarifié macro** — liste champs MVP ; variantes par canal à détailler.

### 5.4 Impacts UX / métier

- **checklist minimale** sur fiche demande (qualification) ;
- **distinction** entre création (brouillon possible) et qualification (données complètes) ;
- statut **« À qualifier »** utilisé comme **garde-fou** ;
- **pas de formulaire détaillé excessif** au MVP — champs avancés reportés.

### 5.5 Points à documenter plus tard

- champs obligatoires **par canal** (CRM, email, manuel) ;
- champs facultatifs et enrichissement post-qualification ;
- comportement pour **email incomplet** (qualification différée, demande complémentaire) ;
- messages d'aide utilisateur et libellés de validation.

---

## 6. RG-I05 — Mapping des statuts

### 6.1 Enjeu

Les **statuts** doivent être **cohérents** entre :

- Interv360 (cycle SAV interne) ;
- **CRM simulé** (sync ARB-MVP-04) ;
- **dashboard** et alertes ;
- **écrans utilisateurs** (manager SAV, technicien, dirigeant).

Le **wording** doit rester **compréhensible côté métier** (décision UX « statuts unifiés », `mvp-clarifications.md`).

Le mapping est **nécessaire** pour éviter les incohérences de synchronisation (risque R-I02, `qa-transverse-analysis.md`).

### 6.2 Règle MVP clarifiée

> **RG-I05 — Mapping des statuts (MVP)**
>
> Le MVP doit s'appuyer sur une **liste unifiée de statuts métier** visibles par les utilisateurs, avec **correspondance** vers les statuts internes ou simulés (CRM, intégration, dashboard).
>
> **Statuts candidats MVP** :
>
> - À qualifier
> - Qualifiée
> - Planifiée
> - En cours
> - En attente client
> - Clôturée
> - En retard
> - Anomalie d'intégration
>
> Le **document détaillé de correspondance** (origine, visibilité par rôle, alertes, transitions, codes CRM simulé) sera produit dans **`status-mapping.md`**.

### 6.3 Niveau de maturité

**Clarifié macro** — liste statuts et principe d'unification ; table de mapping à produire.

### 6.4 Impacts UX / métier

- **wording homogène** sur tous les écrans et filtres ;
- **filtres** dashboard et listes plus lisibles ;
- **dashboards** cohérents entre manager SAV et dirigeant ;
- **réduction des ambiguïtés** entre retard métier (« En retard ») et anomalie technique (« Anomalie d'intégration »).

### 6.5 Points à documenter plus tard

- mapping exact **Interv360 ↔ CRM simulé** (codes, libellés) ;
- statuts **visibles par rôle** (manager, technicien, dirigeant, admin) ;
- statuts **déclencheurs d'alerte** et seuils ;
- **transitions autorisées** entre statuts (matrice de cycle SAV).

---

## 7. RG-I06 — Erreurs / anomalies d'intégration

### 7.1 Enjeu

Les **erreurs d'intégration** doivent être **compréhensibles par le métier** (manager SAV, support) sans exposition systématique du détail technique (décision UX, ARB-MVP-05).

Le MVP prévoit une **reprise manuelle simulée** — le **retry automatique avancé est hors MVP** (`mvp-arbitration-validation.md`, ARB-MVP-05).

L'écran anomalies (CF9) doit permettre d'**identifier**, **prioriser** et **traiter** les anomalies sans polluer l'expérience utilisateur.

### 7.2 Règle MVP clarifiée

> **RG-I06 — Erreurs / anomalies d'intégration (MVP)**
>
> Une anomalie d'intégration doit être présentée avec :
>
> - un **message métier** compréhensible ;
> - une **gravité** ;
> - le **système ou flux** concerné (CRM simulé, email, notification, etc.) ;
> - une **date / heure** de détection ;
> - un **statut de traitement** (ouverte, en cours, résolue, ignorée avec motif) ;
> - une **action de reprise manuelle** si disponible (relance sync simulée, correction mapping, abandon contrôlé).
>
> Le **détail technique** (code erreur, stack, payload) peut être **conservé**, mais il **n'est pas affiché par défaut** aux utilisateurs métier — accès réservé admin / support.
>
> **Niveaux de gravité MVP** :
>
> | Niveau | Description | Comportement attendu |
> |--------|-------------|----------------------|
> | **Information** | Sync différée, pas de blocage métier immédiat | Indicateur ; pas d'alerte critique |
> | **Bloquant métier** | Action manager requise pour poursuivre le cycle SAV | Alerte dashboard ; traitement prioritaire |
> | **Bloquant synchronisation** | Données incohérentes ; reprise manuelle obligatoire | Statut « Anomalie d'intégration » ; écran anomalies |

### 7.3 Niveau de maturité

**Clarifié macro** — structure présentation et niveaux gravité ; libellés erreurs et règles reprise à détailler.

### 7.4 Impacts UX / métier

- **écran anomalies** plus lisible (message métier en tête) ;
- **distinction** entre erreur technique et impact métier ;
- **reprise manuelle** possible sans retry automatique ;
- **réduction du bruit** pour le manager SAV (gravité Information non surfacée comme critique).

### 7.5 Points à documenter plus tard

- libellés exacts des erreurs par flux d'intégration ;
- règles de reprise manuelle (qui, quand, quoi) ;
- responsabilité de traitement (manager vs admin) ;
- historisation et traçabilité des résolutions ;
- **ADR candidate** sur gestion durable des erreurs d'intégration.

---

## 8. RG-R02 — Signature client obligatoire ou optionnelle

### 8.1 Enjeu

L'arbitrage MVP **ARB-MVP-03** (`mvp-arbitration-validation.md`) a retenu une **signature optionnelle**, **non bloquante**, mais **structurée** dans le modèle métier et le compte rendu.

La signature **ne doit pas bloquer la clôture** terrain — contrainte fréquente en SAV (client absent, refus, contexte d'urgence).

Il faut conserver une **trace exploitable** pour le manager SAV, la facturation simulée et la sync CRM.

### 8.2 Règle MVP clarifiée

> **RG-R02 — Signature client (MVP)**
>
> La **signature client est optionnelle** au MVP.
> Elle peut être **capturée** si disponible (nom, date, canal de capture), mais son **absence ne bloque pas** la clôture de l'intervention.
>
> En cas d'**absence de signature**, un **motif** doit être renseigné parmi les valeurs orientées suivantes :
>
> - client absent ;
> - signature refusée ;
> - signature non applicable ;
> - contrainte terrain ;
> - **autre motif à préciser** (champ texte court).
>
> La règle détaillée (champs, traces, sync) sera **consolidée** dans **`closure-without-signature.md`**.

### 8.3 Niveau de maturité

**Clarifié macro** — principe optionnel + motifs ; détail champs et traces à produire.

### 8.4 Impacts UX / métier

- **champ signature présent** sur compte rendu mais **non bloquant** ;
- **motif absence signature requis** si pas de signature ;
- **meilleure fluidité terrain** pour le technicien ;
- **évite les blocages artificiels** en fin d'intervention.

### 8.5 Points à documenter plus tard

- liste exacte et figée des motifs (énumération vs texte libre) ;
- traces conservées (historique, audit) ;
- impacts **CRM simulé** (indicateur signature absente) ;
- visibilité signature / absence sur compte rendu et dashboard.

---

## 9. RG-R05 — Conditions de clôture

### 9.1 Enjeu

La **clôture** est un **point structurant** du cycle SAV (parcours §6, `2026-06-27-business-framing.md`).

Elle doit être **possible sans signature** (RG-R02, ARB-MVP-03) tout en restant **suffisamment sécurisée** pour éviter une clôture vide ou non traçable.

La sync CRM simulée (ARB-MVP-04) doit transmettre un **état cohérent** post-clôture.

### 9.2 Règle MVP clarifiée

> **RG-R05 — Conditions de clôture (MVP)**
>
> Une intervention peut passer au statut **« Clôturée »** si les **conditions minimales** suivantes sont remplies :
>
> - **compte rendu renseigné** (résumé + actions réalisées minimum — voir RG-R01 à détailler) ;
> - **statut intervention finalisé** ;
> - **technicien** ou utilisateur responsable **identifié** ;
> - **date / heure de clôture** enregistrée ;
> - **résultat d'intervention** renseigné (réalisée, partielle, non réalisée avec motif) ;
> - **motif d'absence de signature** renseigné si signature absente (RG-R02) ;
> - **trace conservée** dans l'historique de l'intervention.
>
> La **synchronisation CRM simulée** doit transmettre :
>
> - statut **clôturé** ;
> - **présence ou absence** de signature ;
> - **résumé du compte rendu** ou référence du CR ;
> - **date de clôture**.
>
> **Aucun blocage de clôture** ne doit être imposé **uniquement** en raison de l'absence de signature.

### 9.3 Niveau de maturité

**Clarifié macro** — conditions minimales et payload sync orienté ; champs CR détaillés à produire.

### 9.4 Impacts UX / métier

- **clôture possible** même sans signature ;
- **compte rendu obligatoire** — évite clôture vide ;
- **trace minimale garantie** pour pilotage et facturation simulée ;
- parcours technicien **fluide** en fin d'intervention.

### 9.5 Points à documenter plus tard

- champs CR détaillés (RG-R01) et validations ;
- règles de **modification post-clôture** ;
- statut CRM exact et mapping (lien `status-mapping.md`) ;
- éventuels **droits de réouverture** et conditions.

---

## 10. Dépendances entre règles

| Règle | Dépend de | Alimente |
|-------|-----------|----------|
| **RG-C04** | RG-C05 (données client/contact pour comparaison) ; ARB-MVP-01 (multi-canal) | Fiche demande ; alertes doublon ; `mvp-clarifications.md` |
| **RG-C05** | ARB-MVP-01 ; décision UX checklist minimale | Statut « À qualifier » ; RG-C04 ; qualification / planification |
| **RG-I05** | RG-C05 (statuts cycle) ; ARB-MVP-04 (sync CRM) | `status-mapping.md` ; filtres ; dashboards ; RG-R05 |
| **RG-I06** | ARB-MVP-05 ; décision UX erreurs | Écran anomalies ; statut « Anomalie d'intégration » ; dashboard alertes |
| **RG-R02** | ARB-MVP-03 | RG-R05 ; `closure-without-signature.md` |
| **RG-R05** | RG-R02 ; RG-R01 (champs CR) ; RG-I05 (statut Clôturée) | `closure-without-signature.md` ; sync CRM simulé |

---

## 11. Impacts sur les documents de sortie

| Document cible | Règles concernées | Contenu attendu |
|----------------|-------------------|-----------------|
| `status-mapping.md` | RG-I05, RG-C05 (statut À qualifier), RG-R05 (Clôturée) | Table correspondances, visibilités, alertes, transitions |
| `closure-without-signature.md` | RG-R02, RG-R05, RG-R01 | Signature optionnelle, motifs, champs CR, conditions clôture, sync |
| `mvp-clarifications.md` | Toutes (référence amont) | Déjà produit — cohérence à maintenir |
| Annexe erreurs / ADR | RG-I06 | Matrice gravité, libellés, reprise manuelle, responsabilités |
| `geo-ai-arbitration.md` | — (hors périmètre direct) | Exclusion géoloc/IA — pas d'impact sur les 6 règles MVP |

---

## 12. Points hors périmètre

Ce document **ne couvre pas** :

- cas de tests ;
- scénarios de tests ;
- stratégie de recette ;
- backlog produit ;
- user stories ;
- règles techniques détaillées d'implémentation (API, code, schémas) ;
- automatisation avancée (workflows, règles moteur) ;
- **retry automatique** avancé (hors MVP — ARB-MVP-05) ;
- **fusion automatique** de doublons (hors MVP — RG-C04) ;
- géolocalisation et IA légère (hors MVP — `geo-ai-arbitration.md` à produire).

---

## 13. Garde-fous

- [x] pas de backlog produit ;
- [x] pas de user stories produites ;
- [x] pas de cas de tests produits ;
- [x] pas de scénarios de tests produits ;
- [x] pas de stratégie de recette produite ;
- [x] pas de code applicatif produit ;
- [x] pas de delivery ouvert ;
- [x] pas de publication Notion ;
- [x] pas d'appel API Notion ;
- [x] pas de secret affiché ;
- [x] `.env` non modifié ;
- [x] pas de PR créée — branche longue `analysis/interv360-clarification-cycle`.

---

## 14. Conclusion

Les **6 règles RG prioritaires** du MVP Interv360 sont **clarifiées au niveau macro** :

- **RG-C04** — signalement doublon, pas de fusion auto ;
- **RG-C05** — données minimales, statut À qualifier comme garde-fou ;
- **RG-I05** — statuts unifiés, mapping délégué à `status-mapping.md` ;
- **RG-I06** — message métier, gravité, reprise manuelle ;
- **RG-R02** — signature optionnelle, motif si absente ;
- **RG-R05** — clôture avec CR obligatoire et trace conservée.

Elles doivent maintenant **alimenter les documents spécialisés** du cycle de clarification.

**Prochaine étape recommandée** : produire **`status-mapping.md`** sur la branche `analysis/interv360-clarification-cycle`.

---

*Priorisation règles RG MVP — Interv360 — gouvernance SFIA.*
