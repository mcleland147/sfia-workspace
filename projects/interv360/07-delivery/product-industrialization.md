# Interv360 — Product Industrialization

**Projet** : Interv360  
**Cycle** : Product Industrialization  
**Mode** : SFIA Fast Track — Delivery produit contrôlé  
**Statut** : Cadrage opérationnel du Lot 6  
**Branche** : `delivery/interv360-product-industrialization`

---

## 1. Objectif

Ce lot industrialise le MVP Interv360 afin de le rendre plus facilement livrable, installable, testable et exploitable en local.

L'objectif est de consolider le packaging documentaire et opérationnel du produit, sans élargir le périmètre fonctionnel.

---

## 2. Références

Documents de référence :

- `../09-architecture/interv360-mvp-final-roadmap.md`
- `./backend-users-session.md`
- `./audit-trail.md`
- `./request-model-finalization.md`
- `./api-product-hardening.md`
- `./product-ux-finalization.md`
- `../08-presentation/interv360-e2e-demo-runbook.md`
- `../app/README.md`
- `../backend/README.md`

Décision roadmap :

- le Lot 1 Backend Users & Session est clôturé ;
- le Lot 2 Audit Trail est clôturé ;
- le Lot 3 Request Model Finalization est clôturé ;
- le Lot 4 API Product Hardening est clôturé ;
- le Lot 5 Product UX Finalization est clôturé ;
- le Lot 6 prioritaire est l'industrialisation MVP.

---

## 3. Point de départ

Interv360 dispose déjà :

- d'un backend Node.js / TypeScript ;
- d'une persistance SQLite locale ;
- d'une API `/api/v1` durcie ;
- d'un frontend Vite connecté ;
- d'un mode local ;
- d'un mode API ;
- d'un modèle `Request` enrichi ;
- d'un audit trail enrichi ;
- d'une simulation utilisateur structurée ;
- d'une matrice de permissions ;
- d'une UX MVP finalisée ;
- d'un reset admin ;
- de tests backend/frontend stables ;
- d'un runbook de démonstration ;
- de README frontend/backend.

Limite actuelle :

> le produit fonctionne et se démontre, mais son installation, son exploitation locale, ses variables d'environnement, ses scripts et ses limites doivent être consolidés pour rendre le MVP proprement livrable.

---

## 4. Problème à résoudre

Le MVP ne peut pas être considéré comme livrable proprement tant que les éléments suivants ne sont pas suffisamment clairs :

- comment installer le projet ;
- comment lancer le frontend seul ;
- comment lancer le backend ;
- comment lancer le mode API ;
- comment réinitialiser la démo ;
- quelles variables `.env` sont utiles ;
- quels scripts sont disponibles ;
- comment exécuter les tests ;
- où se trouve la base SQLite ;
- quelles limites sont assumées ;
- quelle stratégie de déploiement simple est envisageable ;
- si une CI minimale est utile ou non.

---

## 5. Périmètre du lot

À livrer :

- cadrage industrialisation cible MVP ;
- audit de l'existant installation / scripts / env ;
- README global ou index projet si nécessaire ;
- consolidation README frontend ;
- consolidation README backend ;
- guide installation locale ;
- guide exploitation locale ;
- documentation variables `.env` ;
- documentation scripts build/test/run ;
- documentation SQLite / reset ;
- documentation limites connues ;
- stratégie de déploiement simple ;
- décision CI éventuelle ;
- validations backend/frontend ;
- PR unique en fin de lot.

---

## 6. Hors scope

Ce lot n'introduit pas :

- déploiement cloud complet ;
- infrastructure cloud ;
- Kubernetes ;
- Terraform ;
- Helm ;
- Docker obligatoire ;
- CI/CD complète ;
- observabilité avancée ;
- supervision ;
- SLA ;
- multi-tenant ;
- authentification réelle ;
- login réel ;
- logout réel ;
- mot de passe ;
- token ;
- OAuth ;
- JWT ;
- SSO ;
- Entra ID ;
- CRM ;
- données réelles ;
- nouveau statut ;
- `STAT-08` ;
- nouveau workflow ;
- nouvelle action métier ;
- CRUD complet ;
- formulaire création demande ;
- refonte UX ;
- design system ;
- arc Figma ;
- export Figma.

---

## 7. Industrialisation cible MVP

À clarifier :

| Zone | Objectif |
|------|----------|
| README global | Point d'entrée clair pour installer et lancer Interv360 |
| Frontend | Installation, mode local, mode API, variables Vite |
| Backend | Installation, API locale, SQLite, CORS, reset |
| Scripts | Build, test, dev, commandes essentielles |
| Environnement | `.env.example` ou documentation équivalente |
| Données | SQLite locale, seed, reset, limites données fictives |
| Tests | Commandes frontend/backend et compteurs attendus |
| Déploiement simple | Stratégie cible non-cloud ou pré-cloud |
| CI | Décision minimaliste : utile maintenant ou reportée |

---

## 8. Principes d'industrialisation

Décisions initiales :

- privilégier la clarté documentaire avant l'outillage lourd ;
- conserver l'installation locale simple ;
- ne pas rendre Docker obligatoire ;
- ne pas créer de pipeline CI complexe si non nécessaire ;
- ne pas introduire de dépendance inutile ;
- documenter les limites plutôt que les masquer ;
- préserver les scripts existants autant que possible ;
- créer des exemples `.env` uniquement si utiles ;
- rester compatible avec le mode local et le mode API.

---

## 9. Cible technique à préserver

À préserver :

- backend Node.js / TypeScript ;
- frontend Vite ;
- SQLite locale ;
- API `/api/v1` ;
- format erreurs API ;
- mode local ;
- mode API ;
- user switcher ;
- permissions ;
- actions workflow existantes ;
- audit trail enrichi ;
- request model enrichi ;
- reset admin ;
- UX MVP finalisée ;
- tests frontend/backend.

À modifier seulement si nécessaire :

- documentation ;
- README ;
- exemples d'environnement ;
- scripts npm simples ;
- éventuel `.env.example` ;
- éventuel README racine Interv360 ;
- éventuelle CI minimale si la décision est positive.

---

## 10. Décision initiale

Décision proposée pour rester Fast Track :

- commencer par auditer l'existant installation/scripts/env ;
- formaliser la cible industrialisation MVP ;
- documenter avant d'ajouter de l'outillage ;
- ne pas imposer Docker ;
- ne pas créer de CI/CD lourde ;
- ne pas modifier le comportement produit ;
- ne pas modifier le backend API ;
- ne pas modifier le frontend UX ;
- ne pas ouvrir de sujet auth/CRM/données réelles ;
- PR unique en fin de lot.

---

## 11. Incréments du lot

| Incrément | Objectif | Statut |
|-----------|----------|--------|
| IND-01 | Cadrage opérationnel industrialisation MVP | Réalisé |
| IND-02 | Audit installation / scripts / env / docs | À faire |
| IND-03 | README global et guides locaux | À faire |
| IND-04 | Variables `.env`, scripts et exploitation locale | À faire |
| IND-05 | Tests, non-régression et CI éventuelle | À faire |
| IND-06 | Documentation finale runbook/README | À faire |
| IND-07 | Préparation PR unique | À venir |

---

## 12. Critères d'acceptation

| Critère | Résultat |
|---------|----------|
| Document delivery créé | OK |
| Industrialisation cible cadrée | OK |
| Audit installation/scripts/env réalisé | À faire |
| README global / index projet clarifié | À faire |
| README frontend consolidé | À faire |
| README backend consolidé | À faire |
| Variables `.env` documentées | À faire |
| Scripts build/test/run documentés | À faire |
| SQLite / reset documentés | À faire |
| Limites connues documentées | À faire |
| Déploiement simple cadré | À faire |
| Décision CI prise | À faire |
| Mode local conservé | À valider |
| Mode API conservé | À valider |
| Audit trail conservé | À valider |
| Request model conservé | À valider |
| Permissions conservées | À valider |
| UX MVP conservée | À valider |
| Backend inchangé | À valider |
| Frontend tests | À faire |
| Backend tests | À faire |
| Frontend build | À faire |
| Backend build | À faire |
| Auth réelle exclue | OK |
| OAuth/JWT/SSO exclus | OK |
| CRM/données réelles exclus | OK |
| Nouveau statut exclu | OK |
| CRUD complet exclu | OK |

---

## 13. Garde-fous

Le lot doit préserver :

- backend ;
- API ;
- SQLite ;
- request model enrichi ;
- audit trail enrichi ;
- workflow existant ;
- statuts techniques existants ;
- actions existantes ;
- transitions métier existantes ;
- permissions existantes ;
- mode local ;
- mode API ;
- reset admin ;
- UX MVP finalisée.

Le lot ne doit pas introduire :

- auth réelle ;
- login/password ;
- token ;
- OAuth/JWT/SSO ;
- Entra ID ;
- CRM ;
- données réelles ;
- nouveau statut ;
- `STAT-08` ;
- CRUD complet non cadré ;
- formulaire création demande non cadré ;
- déploiement cloud complet ;
- CI/CD lourde ;
- refonte UI ;
- arc Figma ;
- export Figma.

---

## 14. Décision IND-01

IND-01 valide le cadrage opérationnel du Lot 6.

Décisions :

- industrialiser le MVP sans élargir le périmètre fonctionnel ;
- clarifier installation, exécution locale, mode API, tests et limites ;
- documenter les variables d'environnement utiles ;
- vérifier les scripts build/test/run existants ;
- consolider README et runbook ;
- cadrer une stratégie de déploiement simple ;
- décider si une CI minimale est utile ;
- ne pas imposer Docker ;
- ne pas créer de CI/CD lourde ;
- ne pas modifier le comportement produit ;
- ne pas modifier le backend API ;
- ne pas modifier l'UX MVP ;
- ne pas introduire d'auth réelle ;
- ne pas introduire de token ;
- ne pas introduire OAuth/JWT/SSO ;
- ne pas introduire CRM ou données réelles ;
- ne pas introduire de nouveau statut ;
- ne pas ouvrir d'arc Figma ;
- ne pas ajouter d'export Figma.

---

## 15. Prochaine étape

Exécuter **IND-02** :

Audit installation / scripts / env / docs
