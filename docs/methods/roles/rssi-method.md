# RSSI — SFIA Role Method

**Statut** : Draft  
**Source pilote** : PRJ-INTERV360  
**Origine** : role-methods-framing.md + role-methods-review.md  
**Type** : Role Method  
**Nature** : Template évolutif

---

## 1. Mission du rôle dans SFIA

Le RSSI challenge les données sensibles, les accès, la sécurité des canaux d'intégration, la traçabilité et la conservation — dès le cadrage. Il sécurise le projet sans bloquer le démonstrateur, y compris sur des canaux non principaux (ex. email d'intégration).

---

## 2. Quand mobiliser ce rôle

| Phase | Pertinence |
|-------|------------|
| **Intake** | **Moyenne** — identification données sensibles amont |
| **Cadrage** | **Forte** — SSI email, conservation, accès, journalisation |
| **Arbitrages** | **Forte** — canal email, conservation photos/signatures/logs |
| **Conception** | **Moyenne** — exigences sécurité parcours et écrans |
| **Architecture** | **Forte** — ADR sécurité, auth, journalisation, accès |
| **Delivery** | **Forte** — validation implémentation SSI |
| **QA / Recette** | **Moyenne** — scénarios rejet, fraude, PJ invalides |
| **REX** | **Moyenne** — capitalisation checklists SSI |

---

## 3. Valeur projet attendue

- Exigences SSI documentées par canal et par flux
- Données sensibles identifiées et classifiées
- Canal email traité comme intégration sécurisée (même non principal)
- Conservation fictive documentée sans implémentation lourde
- Scénarios rejet / fraude / PJ invalides cadrés pour QA
- Risques sécurité visibles et traitables

---

## 4. Valeur SFIA attendue

- Templates : Secure Email Intake
- Checklists : RSSI cadrage, SSI email, données sensibles
- Prompts : revue SSI
- Standards : challenger sans bloquer, conservation fictive
- ADR candidates : auth email, journalisation, conservation
- Postures : sécuriser sans paralyser le démonstrateur

---

## 5. Questions clés à poser

1. Quelles données sont sensibles ou critiques ?
2. Comment authentifier et autoriser la source d'un canal d'intégration (email, API) ?
3. Quels expéditeurs ou clients sont autorisés ?
4. Quelles pièces jointes accepter, rejeter ou limiter ?
5. Quelle journalisation des réceptions, rejets et flux ?
6. Quelle conservation fictive sans implémentation lourde au MVP ?
7. Quels accès par profil utilisateur ?
8. Quelles ADR candidates sécurité pour la phase architecture ?
9. Comment traiter les emails ou flux non légitimes ?
10. Quelle conformité RSSI / GreenOps / FinOps sur les canaux cadrés ?

---

## 6. Livrables typiques

| Livrable | Contribution du rôle | Capitalisation SFIA possible |
|----------|---------------------|------------------------------|
| Revue canal email sécurisé | Exigences SSI tabulaires, contrat fonctionnel | Template Secure Email Intake |
| Classification données sensibles | Objets, champs, règles RG-S* | Checklist données sensibles |
| Scénarios SSI | Rejet, spoof, PJ invalide, doublon | Critères QA email intake |
| Hypothèses conservation | Photos, signatures, logs — fictif documenté | Standard conservation fictive |
| Contributions arbitrages | ARB-MVP-01 email, ARB-MVP-06 conservation | Checklist RSSI cadrage |

---

## 7. Décisions / validations associées

- Email = canal d'intégration sécurisé complet (non principal)
- Conservation limitée fictive documentée (ARB-MVP-06)
- Exigences authentification source, autorisation expéditeur, PJ
- ADR candidates : auth email, journalisation, conservation données sensibles
- Validation SSI fictive ou réelle du cadrage canal email

---

## 8. Savoir-faire à capitaliser

- Template Secure Email Intake avec exigences SSI tabulaires
- Contrat fonctionnel canal (endpoint, statuts, erreurs, sorties)
- Checklist données sensibles par objet métier
- Méthode validation SSI fictive au cadrage
- Lien exigence SSI → règle RG-* → scénario QA
- Conservation fictive alignée RSSI / GreenOps

---

## 9. Posture SFIA / savoir-être

**Posture attendue**  
Challenger sans bloquer ; sécuriser même un canal non principal ; rendre les risques visibles et traitables.

**Manière de challenger**  
Exiger des exigences SSI, des scénarios de rejet et une journalisation — sans imposer une implémentation lourde purge/archivage au MVP.

**Manière d'éviter les dérives**  
Ne pas traiter un canal secondaire (email) comme optionnel côté sécurité ; ne pas bloquer le démonstrateur par des exigences industrielles prématurées.

**Rapport à la valeur projet**  
Garantir un canal crédible SSI avec rejet tracé, PJ contrôlées et conservation documentée.

**Rapport à la capitalisation SFIA**  
Chaque revue SSI alimente templates, checklists et ADR candidates réutilisables sur projets avec intégrations externes.

---

## 10. Templates / checklists / prompts candidats

| Élément | Type | Priorité | Commentaire |
|---------|------|----------|-------------|
| Template Secure Email Intake | Template | Haute | secure-email-intake-review.md |
| Checklist RSSI cadrage | Checklist | Haute | Exigences par phase |
| Checklist SSI email | Checklist | Haute | Auth, PJ, rejet, journalisation |
| Checklist données sensibles | Checklist | Moyenne | Par objet métier |
| Prompt revue SSI | Prompt | Moyenne | Revue canal ou flux |
| Standard challenger sans bloquer | Standard | Haute | Posture RSSI SFIA |

---

## 11. Erreurs à éviter

- Traiter l'email comme canal secondaire sans exigences SSI
- Implémenter purge/archivage lourd au MVP
- Ignorer les pièces jointes dans le cadrage sécurité
- Confondre conservation fictive documentée et implémentation
- Bloquer le démonstrateur par des exigences non proportionnées
- Oublier la traçabilité des rejets et des flux non légitimes

---

## 12. Critères de qualité du rôle

- [ ] le rôle intervient au bon moment ;
- [ ] la valeur projet est explicite ;
- [ ] la valeur SFIA est explicite ;
- [ ] les décisions sont traçables ;
- [ ] les livrables sont reliés à une capitalisation ;
- [ ] le savoir-faire est documenté ;
- [ ] le savoir-être est documenté ;
- [ ] les erreurs à éviter sont explicites ;
- [ ] les éléments réutilisables sont identifiés ;
- [ ] le rôle est enrichi au fil des phases.

---

## 13. Origine / apprentissage Interv360

Interv360 a cadré un canal email sécurisé non principal avec exigences SSI, contrat intake simulé, scénarios rejet/PJ/doublon et journalisation minimale. Les blocs ADR P1 et P2 design-impact consolident ces apports — voir §15.

---

## 14. Apprentissages issus des ADR P1 Interv360

*Capitalisés depuis un projet pilote — réutilisables sur tout projet SFIA avec canaux d'intégration simulés.*

### Apprentissages clés

- Cadrer les **exigences SSI même sur un canal simulé** — la simulation n'exonère pas du risque.
- Traiter l'**email comme canal secondaire sécurisé**, pas comme simple mock sans règles.
- **Distinguer rejet métier, rejet SSI et erreur technique** — statuts et visibilité différents.
- Imposer des **règles minimales** : source connue, expéditeur autorisé, pièce jointe contrôlée, rejet explicite non verbeux.
- **Éviter l'exposition de données sensibles** dans les messages visibles et les logs.
- Cadrer la **journalisation minimale** sans produire de supervision complète ni SIEM.
- **Préparer la conservation** des logs et pièces jointes dans une ADR ou phase ultérieure (P2).

### Savoir-faire renforcés

- Rédaction d'exigences SSI tabulaires par canal d'intégration.
- Contrat fonctionnel intake email : statuts rejet, qualification, doublon.
- Checklist logs sans données sensibles (corps email, PJ, données client intégrales exclus).
- Lien exigence SSI → statut fonctionnel → visibilité anomalies → événement journalisé.
- Validation co-portée avec Architecte sur journalisation minimale.

### Savoir-être / posture

- **Challenger sans bloquer** — exigences proportionnées au MVP démonstrateur.
- **Rendre le risque visible et traitable** — rejets tracés, anomalies compréhensibles.
- **Éviter le « tout ou rien » sécurité** — ni canal ignoré, ni SIEM imposé au MVP.
- **Protéger les données sans surcharger le MVP** — exclusion contenu sensible des logs et UI.
- **Faire expliciter les limites de simulation** — pas de messagerie réelle, conservation reportée.

### Garde-fous à réutiliser

- Canal simulé ≠ canal sans SSI.
- Aucune donnée sensible complète dans logs ou messages UI.
- Aucun corps email ni pièce jointe stockés dans le log.
- Aucune messagerie réelle connectée au MVP démonstrateur.
- Rejet explicite, non verbeux, visible si impact métier ou SSI.
- Conservation longue reportée à ADR ou phase P2 dédiée.

### Questions réflexes à poser

- Le canal simulé porte-t-il quand même un **risque SSI** ?
- Quelles données ne doivent **jamais apparaître dans l'UI** ?
- Quels **rejets** doivent être visibles ?
- Quels **événements** doivent être tracés ?
- La journalisation est-elle **suffisante sans être excessive** ?
- La **conservation** doit-elle être instruite séparément ?

### Livrables ou templates candidats

| Élément | Type |
|---------|------|
| Template Secure Email Intake | Template |
| Checklist SSI Email Intake | Checklist |
| Checklist logs sans données sensibles | Checklist |
| Standard canal secondaire sécurisé | Standard |
| Standard journalisation minimale | Standard |

### Liens avec les autres rôles

| Rôle | Lien |
|------|------|
| **Architecte** | Co-ADR contrats, journalisation, corrélation flux |
| **UX/UI Designer** | Messages visibles non verbeux ; pas de détail sensible en UI |
| **QA / Testeur** | Scénarios rejet, spoof, PJ invalide, doublon |
| **Product Owner** | Canal secondaire maintenu ; CRM ou flux principal prioritaire |
| **Chef de projet** | Capitalisation après bloc ADR ; sync Notion post-jalon |

### Conditions de réutilisation sur un autre projet SFIA

- Projet avec **canal email ou intake externe simulé** (non principal).
- Besoin de **traçabilité rejets** sans implémentation messagerie réelle.
- **Non applicable** si aucun canal d'entrée externe simulé — adapter ou omettre la section email.

### Apprentissages issus du bloc ADR P2 design-impact Interv360

*Capitalisés depuis Interv360 — réutilisables sur tout projet SFIA avec preuves, signatures ou conservation fictive au MVP.*

#### Apprentissages clés

- **Même fictive, une preuve photo, signature ou pièce jointe doit être cadrée** — ADR conservation fictive.
- **Ne pas exposer données sensibles, logs techniques, pièces jointes ou signatures complètes** — métadonnées et libellés prudents.
- **Refuser les promesses de conservation réelle non décidées** — archivage, purge, durée réelle post-MVP.
- **Distinguer preuve métier, preuve fictive et preuve juridique** — signature enregistrée ≠ e-signature qualifiée.
- **Sécuriser les libellés UI** pour éviter la surpromesse conformité.
- **Confirmer portail client, e-signature complète et politique réelle de conservation post-MVP**.
- **Vérifier que l'IA ne soit pas introduite sans gouvernance données** — ADR-CAND-009 reportée.

#### Savoir-faire renforcés

- Checklist exposition preuve : vignette, compteur, statut — pas image biométrique ni PJ complète en UI.
- Grille libellés prudents vs libellés interdits (conformité, archivage, certification).
- Validation co-portée ADR P2 : conservation fictive, signature optionnelle, dashboards sans logs sensibles.
- Lien exigence SSI → statut fictif → visibilité limitée → exclusion dirigeant.

#### Savoir-être / posture

- **Vigilance sans blocage** — MVP démonstrateur avec garde-fous, pas audit complet.
- **Clarté sur les limites** — ce qui est fictif, reporté ou hors MVP.
- **Protection contre les promesses implicites** — UI et marketing interne alignés ADR.
- **Pédagogie SSI adaptée au MVP** — expliquer pourquoi pas portail, pas IA, pas conservation réelle.

#### Garde-fous à réutiliser

- Aucune signature complète ni photo sensible exposée intégralement en UI.
- Aucun log technique complet dans dashboards ou vue dirigeant.
- Aucun libellé suggérant conformité réglementaire ou archivage probatoire au MVP.
- IA, portail client et e-signature complète **hors MVP** sans ADR et gouvernance dédiées.

#### Questions réflexes à poser

- Cette **preuve visible** expose-t-elle une **donnée sensible** ?
- Le libellé **promet-il** une conformité non décidée ?
- La **conservation** est-elle présentée comme **fictive** ou réelle ?
- L'**IA** introduit-elle des données sans gouvernance ?

#### Livrables ou templates candidats

| Élément | Type |
|---------|------|
| Template Fictive Retention Matrix | Template |
| Checklist logs sans données sensibles | Checklist |
| Checklist anti-surpromesse conformité UI | Checklist |
| Standard conservation fictive MVP | Standard |

---

## 15. Évolution continue

Ce fichier est **évolutif**. Les blocs ADR P1 et P2 design-impact Interv360 ont enrichi ce template (§14). Les phases delivery et REX continueront l'enrichissement. Les futurs projets pilotes étendront le Template Secure Email Intake sans figer les exigences d'un pilote unique.

---

*Template SFIA — Role Method — RSSI*
