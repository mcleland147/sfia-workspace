# Interv360 — Phase 02 Architecture

**Projet** : PRJ-INTERV360  
**Phase** : 02-architecture  
**Statut** : Open  
**Source d'ouverture** : `projects/interv360/01-cadrage/cadrage-phase-gate.md`  
**Type** : Phase README  
**Objet** : cadre d'ouverture de la phase architecture

---

## 1. Objectif de la phase

La phase **02-architecture** vise à **instruire les décisions structurantes** préparées en cadrage, en commençant par les **ADR candidates Priorité 1**.

Cette phase doit produire progressivement :

- des **ADR formelles** ;
- des **choix d'architecture documentés** ;
- des **impacts sur les rôles SFIA** ;
- des **impacts sur les prompts SFIA** ;
- des **enrichissements des méthodes vivantes**.

Elle ne remplace pas le cadrage : elle **formalise** les choix qui conditionnent la suite du projet Interv360, dans une logique SFIA **produit dynamique, évolutif et vivant**.

---

## 2. Conditions d'ouverture

La phase est ouverte sur la base du **Go conditionnel** validé au niveau cadrage (`cadrage-phase-gate.md`) :

- Go conditionnel validé au niveau cadrage ;
- cadrage métier consolidé ;
- MVP validé (7 arbitrages ARB-MVP-01 à 07) ;
- brief UX/UI validé ;
- ADR candidates préparées (9 identifiées, 4 P1) ;
- capitalisation SFIA réalisée (méthodes rôle, catalogue prompts, revues) ;
- points ouverts identifiés et **non bloquants**.

---

## 3. Périmètre autorisé

Dans cette phase, les activités suivantes sont **autorisées** :

- instruction des **ADR candidates Priorité 1** ;
- création d'**ADR formelles** ;
- analyse des **options** et conséquences ;
- impacts architecture / SSI / QA / UX / exploitation ;
- mise à jour des **méthodes rôle** après instruction ADR ;
- mise à jour éventuelle du **catalogue prompts** si un prompt passe Draft ou Tested ;
- synchronisation **Notion** uniquement après jalon consolidé.

---

## 4. Hors périmètre à l'ouverture

L'ouverture de phase **ne doit pas produire** :

- backlog ;
- user stories ;
- delivery ;
- code applicatif ;
- maquettes ;
- wireframes ;
- Figma ;
- architecture technique complète ;
- choix de stack définitif non justifié ;
- intégrations réelles non prévues au MVP.

---

## 5. ADR candidates Priorité 1

| Ordre | ADR candidate | Sujet | Pourquoi prioritaire |
|-------|---------------|-------|----------------------|
| 1 | **ADR-CAND-001** | Contrats API documentés avec implémentation simulée | Fondation de toutes les intégrations simulées — ARB-MVP-04, option C validée |
| 2 | **ADR-CAND-002** | Gestion visible des erreurs d'intégration avec reprise manuelle | Indissociable des contrats API — ARB-MVP-05, écran anomalies, cas CF9 |
| 3 | **ADR-CAND-003** | Canal email sécurisé non principal | Exigences SSI + contrat fonctionnel — ARB-MVP-01, intake email cadré |
| 4 | **ADR-CAND-004** | Journalisation minimale des flux et rejets | Traçabilité email et erreurs — lien CAND-002 et CAND-003, RG-I07 |

Source détaillée : `projects/interv360/01-cadrage/adr-candidates.md`

---

## 6. Règle d'instruction des ADR

Une **ADR formelle** devra :

- partir d'une **ADR candidate** identifiée ;
- rappeler le **contexte** issu du cadrage ;
- documenter les **options** et la décision retenue ;
- formaliser la **décision** ;
- expliciter les **conséquences** ;
- identifier les **impacts projet** ;
- identifier les **impacts SFIA** ;
- indiquer les **rôles concernés** ;
- indiquer les **prompts impactés** ;
- **ne pas anticiper** le delivery.

---

## 7. Impact SFIA attendu

| Asset SFIA | Impact attendu |
|------------|----------------|
| `docs/methods/roles/architect-method.md` | Enrichissement après ADR P1 (contrats, erreurs, journalisation) |
| `docs/methods/roles/rssi-method.md` | Enrichissement après ADR P1 (email sécurisé, journalisation) |
| `docs/methods/roles/project-manager-method.md` | Traçabilité jalons architecture, sync Notion post-jalon |
| `docs/methods/roles/product-owner-method.md` | Validation périmètre maintenu si ADR impactent MVP |
| `prompts/prompt-catalog.md` | Mise à jour si prompts passent Draft ou Tested |
| `prompts/architecture/` | Formalisation PROMPT-ARCH-001 et futurs prompts architecture |
| `prompts/security/` | Formalisation PROMPT-SEC-001 et futurs prompts sécurité |

---

## 8. Garde-fous de phase

- [ ] aucune ADR formelle sans ADR candidate source ;
- [ ] aucune architecture technique complète avant ADR P1 ;
- [ ] aucun backlog ;
- [ ] aucune user story ;
- [ ] aucun code applicatif ;
- [ ] aucune maquette ou Figma ;
- [ ] chaque ADR doit produire une **valeur projet** et une **valeur SFIA** ;
- [ ] chaque ADR doit vérifier si une **méthode rôle** doit être enrichie ;
- [ ] chaque ADR doit vérifier si un **prompt candidat** doit être mis à jour.

---

## 9. Prochaine action recommandée

La prochaine action après ouverture de phase est :

**Créer la première ADR formelle** issue de :  
**ADR-CAND-001 — Contrats API documentés avec implémentation simulée.**

---

## 10. Conclusion

La phase **02-architecture** est ouverte dans un **cadre contrôlé**, à partir du **Go conditionnel** du phase gate de cadrage.

Elle doit instruire progressivement les **ADR P1** tout en maintenant la logique SFIA **produit dynamique et évolutif** : valeur projet, valeur SFIA, capitalisation sur livrables, rôles, prompts, savoir-faire et savoir-être.

---

*Phase ouverte le 27 juin 2026 — projet Interv360, gouvernance SFIA.*
