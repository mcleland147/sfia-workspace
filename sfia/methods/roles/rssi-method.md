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

Interv360 a cadré un canal email sécurisé non principal avec 10 exigences SSI, contrat `POST /email/intake`, scénarios rejet/PJ/doublon et conservation fictive ARB-MVP-06. Le modèle « challenger sans bloquer » sur un canal d'intégration secondaire est la contribution RSSI la plus capitalisable du pilote.

---

## 14. Évolution continue

Ce fichier est **évolutif**. La phase architecture Interv360 enrichira les ADR sécurité, les accès par profil et l'implémentation journalisation. Les futurs projets pilotes avec intégrations externes étendront le Template Secure Email Intake sans figer les exigences ServiTech Pro.

---

*Template SFIA — Role Method — RSSI*
