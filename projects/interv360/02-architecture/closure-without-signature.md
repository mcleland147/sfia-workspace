# Interv360 — Clôture sans signature client

**Projet** : PRJ-INTERV360  
**Phase** : 02-architecture  
**Type** : Règle fonctionnelle MVP — clôture intervention  
**Statut** : Draft — clarification issue du cycle de clarification  
**Règles liées** : RG-R02, RG-R05  
**Statut lié** : STAT-06 — Clôturée  
**Source principale** : `rules-rg-prioritization.md`

---

## 1. Objectif

Ce document **formalise les conditions MVP de clôture** d'une intervention lorsque la **signature client est absente**, en lien avec les règles **RG-R02** (signature optionnelle) et **RG-R05** (conditions de clôture) et le statut **STAT-06 — Clôturée**.

**Précisions :**

- la **signature est optionnelle** au MVP (ARB-MVP-03) ;
- l'**absence de signature ne bloque pas** la clôture ;
- la clôture reste encadrée par un **compte rendu obligatoire** et une **trace minimale** ;
- le document reste au niveau **cadrage fonctionnel** ;
- il **ne constitue pas** un backlog ;
- il **ne produit pas** de user stories ;
- il **ne produit pas** de cas de tests ;
- il **ne lance pas** le delivery.

---

## 2. Sources utilisées

| Source | Apport |
|--------|--------|
| `rules-rg-prioritization.md` | RG-R02, RG-R05 — règles clarifiées macro, champs CR orientés |
| `rules-rg-prioritization-summary.md` | Synthèse décisions signature et clôture |
| `status-mapping.md` | STAT-06 Clôturée, transitions, sync CRM, cohabitation anomalie |
| `status-mapping-summary.md` | Vue d'ensemble statuts et points à préciser |
| `mvp-clarifications.md` | CR web seul, clôture sans signature, hors périmètre PDF |
| `clarification-workshop-minutes.md` | Décisions atelier simulé §7 clôture, champs CR minimaux |
| `qa-transverse-analysis.md` | Ambiguïtés signature / clôture, testabilité amont |
| `business-framing.md` | Cycle SAV §6, RG-R01/R02/R05, risques R-M05/R-M06 |
| `mvp-arbitration-validation.md` | ARB-MVP-03 signature optionnelle, ARB-MVP-04 sync CRM |
| `ux-ui-brief.md` | Parcours technicien, compte rendu intervention, clôture |
| `ux-ui-brief-validation.md` | Format CR web seul ; points ouverts tranchés |

---

## 3. Principe MVP

> **Principe de clôture sans signature (MVP)**
>
> La **signature client est optionnelle** au MVP.
> Elle peut être **capturée** si disponible, mais son **absence ne bloque pas** la clôture.
>
> En revanche, l'intervention **ne peut être clôturée** que si une **trace minimale** existe :
>
> - **compte rendu renseigné** ;
> - **résultat d'intervention** renseigné ;
> - **responsable** identifié ;
> - **date / heure de clôture** ;
> - **motif d'absence de signature** si signature absente ;
> - **trace conservée** dans l'historique.

Ce principe est aligné sur **ARB-MVP-03** (`mvp-arbitration-validation.md`) et les clarifications du cycle (`mvp-clarifications.md` §5.5).

---

## 4. Règle RG-R02 — Signature client optionnelle

### 4.1 Règle clarifiée

> **RG-R02 — Signature client (MVP) — détail fonctionnel**
>
> La signature client est **facultative** au MVP.
> Elle doit être **proposée** dans le parcours de clôture (écran compte rendu technicien), mais elle **ne doit pas être un prérequis bloquant**.
>
> **Si la signature est présente**, elle est enregistrée avec :
>
> - identité ou **nom du signataire** si disponible ;
> - **date / heure** de signature ;
> - **canal ou mode de capture** (écran tactile, autre — à préciser en conception) ;
> - **lien** avec l'intervention concernée.
>
> **Si la signature est absente**, le technicien ou l'utilisateur responsable doit renseigner un **motif** (§4.2).

### 4.2 Motifs d'absence de signature

| Code motif | Libellé | Description | Commentaire |
|------------|---------|-------------|-------------|
| **SIGN-ABS-01** | Client absent | Le client n'était pas sur site au moment de la clôture | Cas terrain fréquent |
| **SIGN-ABS-02** | Signature refusée | Le client a refusé de signer | Traçabilité explicite |
| **SIGN-ABS-03** | Signature non applicable | Contexte ne nécessitant pas de signature client | Ex. intervention sans présence client requise |
| **SIGN-ABS-04** | Contrainte terrain | Impossibilité matérielle ou contextuelle de faire signer | Urgence, sécurité, etc. |
| **SIGN-ABS-99** | Autre motif à préciser | Motif hors liste standard | **Commentaire court obligatoire** |

**Précisions :**

- la liste reste **MVP** et pourra être **enrichie** plus tard ;
- **SIGN-ABS-99** nécessite un **commentaire court** (texte libre limité) ;
- le motif est **obligatoire** dès que « signature présente = non ».

### 4.3 Impact métier

- **évite les blocages artificiels** en fin d'intervention (risque R-M06) ;
- **fluidifie le parcours technicien** — mobile prioritaire MVP ;
- **maintient une trace exploitable** pour manager SAV et audit minimal ;
- permet une **sync CRM simulée cohérente** — indicateur signature absente, pas erreur.

---

## 5. Règle RG-R05 — Conditions de clôture

### 5.1 Règle clarifiée

> **RG-R05 — Conditions de clôture (MVP) — détail fonctionnel**
>
> Une intervention peut passer au statut **Clôturée** (STAT-06) si les **conditions minimales** suivantes sont remplies :
>
> - **compte rendu renseigné** (champs §5.2) ;
> - **résultat d'intervention** renseigné (§5.3) ;
> - **technicien** ou utilisateur responsable **identifié** ;
> - **date / heure de clôture** enregistrée ;
> - **statut intervention finalisé** ;
> - **signature capturée** ou **motif d'absence** renseigné ;
> - **trace conservée** dans l'historique de l'intervention.
>
> **Aucun blocage** ne doit être imposé **uniquement** en raison de l'absence de signature.

### 5.2 Champs minimaux du compte rendu

*Format retenu au MVP : **CR web seul** (`mvp-clarifications.md`) — pas d'export PDF obligatoire.*

| Champ | Obligatoire MVP ? | Raison | Commentaire |
|-------|-------------------|--------|-------------|
| Résumé de l'intervention | Oui | Preuve minimale de réalisation | RG-R01 — contenu orienté |
| Actions réalisées | Oui | Traçabilité SAV | Liste ou texte structuré court |
| Résultat d'intervention | Oui | Condition RG-R05 | Code résultat §5.3 |
| Date / heure de clôture | Oui | Traçabilité, sync CRM | Horodatage système + confirmation |
| Technicien / responsable | Oui | Responsabilité | Utilisateur connecté ou sélection |
| Signature présente (oui/non) | Oui | Branche RG-R02 | Déclenche motif si non |
| Motif absence signature | Oui si signature absente | Traçabilité ARB-MVP-03 | Code SIGN-ABS-* |
| Commentaire complémentaire | Non | Enrichissement facultatif | Texte libre court |

**Hors MVP** (sauf mention contraire future) : pièces jointes multiples, photos obligatoires, export PDF, signature électronique qualifiée (§11).

### 5.3 Résultats d'intervention candidats

| Code résultat | Libellé | Sens métier |
|---------------|---------|-------------|
| **RES-01** | Réalisée | Intervention menée à terme comme prévu |
| **RES-02** | Partiellement réalisée | Intervention incomplète ; motif à documenter dans CR |
| **RES-03** | Non réalisée | Intervention non effectuée ; motif obligatoire dans CR |
| **RES-04** | Annulée / reportée | Intervention annulée ou reportée avant exécution complète |

**Précision** : ces résultats restent **candidats MVP** — libellés et règles associées pourront être **stabilisés** plus tard. La clôture reste possible pour RES-02 à RES-04 sous réserve de CR et motif adaptés.

---

## 6. Statut STAT-06 — Clôturée

Lien avec `status-mapping.md` :

| Attribut | Valeur |
|----------|--------|
| **Code** | STAT-06 |
| **Libellé utilisateur** | Clôturée |
| **Sens métier** | Intervention finalisée avec compte rendu et trace |
| **Visible par** | Manager SAV, Dirigeant ; Technicien (ses interventions) |
| **Alerte dashboard** | Non par défaut |
| **Sync CRM simulé** | Oui — statut « Clôturée » + indicateurs signature / CR |
| **Transition post-clôture MVP** | **Aucune transition standard** — réouverture **À définir** |
| **Cohabitation anomalie** | Clôture locale valide possible + STAT-08 si sync CRM échoue |

La clôture sans signature produit le **même statut STAT-06** qu'une clôture avec signature — la différence est portée par les **indicateurs** (signature présente / motif absence).

---

## 7. Synchronisation CRM simulée

### 7.1 Données à synchroniser

*CRM simulé fictif — mapping fonctionnel (ARB-MVP-04).*

| Donnée | Obligatoire sync MVP ? | Description |
|--------|------------------------|-------------|
| Statut clôturé | Oui | Correspondance STAT-06 → « Clôturée » CRM candidat |
| Date de clôture | Oui | Horodatage clôture Interv360 |
| Résumé ou référence du compte rendu | Oui | Texte résumé ou identifiant CR web |
| Signature présente (oui/non) | Oui | Indicateur booléen |
| Motif absence signature | Oui si signature absente | Code SIGN-ABS-* (+ commentaire si SIGN-ABS-99) |
| Résultat d'intervention | Oui | Code RES-* |
| Identifiant intervention | Oui | Lien demande / intervention Interv360 ↔ CRM |

### 7.2 Principe de synchronisation

- la **sync CRM simulée** remonte un **état fonctionnel de clôture** — pas un document PDF ;
- l'**absence de signature** est transmise comme **indicateur métier**, **pas comme erreur** ;
- une **anomalie de sync** relève de **RG-I06** et peut générer **STAT-08 — Anomalie d'intégration** ;
- la **clôture locale** reste **valide** même si la sync CRM échoue — l'intervention est Clôturée côté Interv360 ; reprise manuelle sur écran anomalies.

---

## 8. Cas fonctionnels autorisés / non autorisés

*Clarification fonctionnelle — **pas** une liste de cas de tests.*

| Situation | Clôture autorisée ? | Condition |
|-----------|---------------------|-----------|
| CR rempli + signature présente | **Oui** | Tous champs obligatoires §5.2 |
| CR rempli + signature absente + motif renseigné | **Oui** | Code SIGN-ABS-* (+ commentaire si 99) |
| CR rempli + signature absente + motif absent | **Non** | Motif obligatoire si pas de signature |
| CR vide + signature présente | **Non** | CR obligatoire |
| Intervention sans résultat renseigné | **Non** | RES-* obligatoire |
| Sync CRM échoue après clôture locale | **Oui** localement | STAT-06 + STAT-08 / anomalie RG-I06 |
| Client refuse de signer + motif SIGN-ABS-02 | **Oui** | CR complet + motif |
| Responsable non identifié | **Non** | Technicien / responsable obligatoire |
| Date / heure clôture absente | **Non** | Horodatage système attendu |

---

## 9. Points à préciser plus tard

- règle de **réouverture** post-clôture ;
- **modification du CR** après clôture ;
- **droits de correction** (manager vs technicien) ;
- format avancé **PDF** export CR ;
- **pièces jointes / photos** (RG-R03) ;
- **conservation détaillée** (ARB-MVP-06) ;
- **audit** plus fin (journal des modifications) ;
- impact **facturation simulée** selon résultat et signature ;
- **statut CRM exact** et codes API fictifs ;
- validation juridique signature (hors périmètre MVP).

---

## 10. Documents liés

| Document | Lien |
|----------|------|
| `rules-rg-prioritization.md` | RG-R02, RG-R05 — règles amont |
| `status-mapping.md` | STAT-06, transitions, sync, anomalie post-clôture |
| `mvp-clarifications.md` | CR web seul, décisions transverses clôture |
| `geo-ai-arbitration.md` | À produire — hors impact direct clôture |
| Annexe erreurs / ADR candidate | Sync échouée — RG-I06 |
| `dashboard-kpi-ux-review.md` | KPI clôtures, volumes — pas d'alerte STAT-06 par défaut |

---

## 11. Points hors périmètre

- **signature électronique** juridiquement qualifiée ;
- **PDF obligatoire** en sortie clôture ;
- **facturation réelle** ;
- **audit réglementaire** complet ;
- **automatisation technique** (workflows, moteur de règles) ;
- **API CRM réelle** ;
- cas de tests, scénarios de tests, stratégie de recette ;
- backlog, user stories ;
- delivery ;
- publication Notion.

---

## 12. Garde-fous

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

## 13. Conclusion

La **clôture sans signature** est **stabilisée au niveau fonctionnel** pour le MVP Interv360 :

- **signature optionnelle** et **non bloquante** (RG-R02, ARB-MVP-03) ;
- **compte rendu obligatoire** — format web seul ;
- **motif requis** en absence de signature (SIGN-ABS-*) ;
- **trace conservée** dans l'historique ;
- **sync CRM simulée** cohérente avec indicateur signature et payload clôture.

**Prochaine étape recommandée** : produire **`geo-ai-arbitration.md`** sur la branche `analysis/interv360-clarification-cycle`.

---

*Clôture sans signature — Interv360 — gouvernance SFIA — RG-R02, RG-R05, STAT-06.*
