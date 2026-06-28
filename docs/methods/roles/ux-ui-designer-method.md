# UX/UI Designer — SFIA Role Method

**Statut** : Draft  
**Source pilote** : PRJ-INTERV360  
**Origine** : role-methods-framing.md + role-methods-review.md  
**Type** : Role Method  
**Nature** : Template évolutif

---

## 1. Mission du rôle dans SFIA

Le UX/UI Designer prépare la conception d'expérience utilisateur : personas, parcours, brief UX/UI, critères d'utilisabilité et garde-fous avant toute maquette ou travail Figma. Il protège l'expérience contre la surcharge cognitive et garantit que le design graphique n'anticipe pas le cadrage.

---

## 2. Quand mobiliser ce rôle

| Phase | Pertinence |
|-------|------------|
| **Intake** | **Faible** — personas esquissés |
| **Cadrage** | **Moyenne** — écrans candidats, critères utilisabilité |
| **Arbitrages** | **Moyenne** — priorisation écrans MVP, KPI dashboard |
| **Conception** | **Forte** — brief UX/UI, validation, préparation Figma |
| **Architecture** | **Faible** — contraintes UX sur intégrations visibles |
| **Delivery** | **Moyenne** — revue UX implémentation, critères |
| **QA / Recette** | **Moyenne** — critères utilisabilité testables |
| **REX** | **Moyenne** — capitalisation brief, garde-fous |

---

## 3. Valeur projet attendue

- Brief UX/UI exploitable avant maquette
- Personas et parcours critiques documentés
- Écrans MVP priorisés avec fiches homogènes
- Critères d'utilisabilité par écran
- Garde-fous surcharge cognitive (dashboard, KPI)
- Points ouverts visibles avant Figma

---

## 4. Valeur SFIA attendue

- Templates : UX/UI Brief, Screen Brief, UX/UI Brief Validation
- Checklists : entrée Figma, UX Review
- Prompts : revue UX avant Figma
- Standards : brief before Figma, validation fictive UX
- Principes UX transverses réutilisables
- Postures : préparer Figma sans se précipiter

---

## 5. Questions clés à poser

1. Quels personas prioritaires et quels besoins UX par persona ?
2. Quels parcours utilisateurs critiques au MVP ?
3. Quels critères d'utilisabilité par écran ?
4. Quels garde-fous contre la surcharge cognitive ?
5. Le brief est-il suffisant avant d'engager Figma ?
6. Quels KPI above the fold sur les dashboards ?
7. Quels principes UX transverses (mobile, statuts, alertes) ?
8. Quels points ouverts restent visibles avant maquette ?
9. Comment différencier dashboard opérationnel et vue dirigeant ?
10. Quels écrans sont hors MVP et reportés ?

---

## 6. Livrables typiques

| Livrable | Contribution du rôle | Capitalisation SFIA possible |
|----------|---------------------|------------------------------|
| Brief UX/UI | Personas, parcours, fiches écran, principes | Template UX/UI Brief |
| Validation brief UX/UI | Checklist entrée Figma, points ouverts | Template UX/UI Brief Validation |
| Revue dashboard / KPI UX | Garde-fous, différenciation écrans pilotage | Checklist Dashboard MVP |
| Fiches écran MVP | Objectif, actions, critères utilisabilité | Template Screen Brief |
| Contributions arbitrages écrans | Priorisation noyau MVP | Checklist entrée Figma |

---

## 7. Décisions / validations associées

- Noyau écrans MVP validé (co-porté Product Owner, Concepteur fonctionnel)
- Checklist entrée Figma validée au niveau cadrage
- Validation fictive PO / CF / UX du brief
- Report écrans hors MVP (portail, notifications détaillées)
- Règle : Figma uniquement après brief validé

---

## 8. Savoir-faire à capitaliser

- Template brief UX/UI préalable à Figma
- Fiche écran homogène : objectif, utilisateurs, données, actions, critères UX, vigilances
- Checklist entrée Figma réutilisable
- Standard validation fictive UX avant maquette
- Principes UX transverses avec risques évités
- Gestion points ouverts non bloquants avant maquette

---

## 9. Posture SFIA / savoir-être

**Posture attendue**  
Préparer Figma sans se précipiter dans Figma ; protéger l'expérience contre la surcharge cognitive ; rendre visibles les points ouverts.

**Manière de challenger**  
Questionner la densité d'information (KPI, alertes, filtres) ; exiger la différenciation des écrans de pilotage ; refuser la maquette avant brief validé.

**Manière d'éviter les dérives**  
Ne pas produire wireframes, maquettes ou Figma pendant le cadrage ; maintenir le brief comme livrable de gouvernance UX, pas le design graphique.

**Rapport à la valeur projet**  
Produire un brief suffisant pour cadrer Figma : parcours, écrans, critères, limites MVP.

**Rapport à la capitalisation SFIA**  
Chaque brief et validation alimente templates, checklists et standards réutilisables sur d'autres projets.

---

## 10. Templates / checklists / prompts candidats

| Élément | Type | Priorité | Commentaire |
|---------|------|----------|-------------|
| Template UX/UI Brief | Template | Haute | Structure ux-ui-brief.md |
| Template UX/UI Brief Validation | Template | Haute | Validation fictive avant Figma |
| Checklist entrée Figma | Checklist | Haute | Critères cadrage confirmés |
| Template Screen Brief | Template | Moyenne | Fiche écran homogène |
| Prompt revue UX avant Figma | Prompt | Moyenne | Revue brief avant maquette |
| Standard brief before Figma | Standard | Haute | Règle déclenchement Figma |

---

## 11. Erreurs à éviter

- Déclencher Figma avant validation du brief
- Produire wireframes ou maquettes pendant le cadrage
- Ignorer les contraintes SSI / erreurs dans les parcours UX
- Surcharger le dashboard de KPI non actionnables
- Confondre dashboard opérationnel et vue dirigeant
- Masquer les points ouverts avant maquette

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

Interv360 a produit un brief UX/UI validé avec checklist entrée Figma. Le bloc ADR P1 stabilise les décisions utiles avant maquette (anomalies, message métier / log) — voir §15.

---

## 14. Apprentissages issus des ADR P1 Interv360

*Capitalisés depuis un projet pilote — réutilisables sur tout projet SFIA avec écrans d'anomalies ou intégrations visibles.*

### Apprentissages clés

- **Intégrer les décisions d'architecture utiles avant Figma** — ADR P1 comme prérequis design, pas l'inverse.
- **Distinguer message métier visible et log technique** — l'UI expose le métier ; le log trace le contexte hors UI.
- Concevoir un **écran anomalies compréhensible** sans exposer de détail sensible.
- **Éviter la surcharge cognitive** dans les listes d'anomalies (gravité, statut, action claire).
- Différencier **erreur bloquante, non bloquante, à qualifier, reprise disponible**.
- Prévoir la **reprise manuelle simulée comme parcours UX** — action utilisateur, pas retry automatique.
- **Utiliser les ADR pour stabiliser les écrans** avant maquette (statuts, wording, actions).

### Savoir-faire renforcés

- Fiche écran anomalies : objectif, utilisateurs, données affichées, actions, critères utilisabilité.
- Matrice élément → message visible → journalisé minimalement.
- Wording statuts fonctionnels alignés ADR (Nouvelle, Reprise disponible, Échec confirmé, etc.).
- Checklist entrée Figma enrichie : ADR P1 consolidées avant maquette.
- Gestion points ouverts UX non bloquants (niveau détail log vs message).

### Savoir-être / posture

- **Ne pas maquettiser trop tôt** — attendre brief validé et ADR structurantes utiles.
- **Rendre visible sans surcharger** — anomalies lisibles, pas de liste interminable.
- **Traduire une erreur technique en message métier** — langage support / manager.
- **Protéger l'utilisateur des détails inutiles** — pas de dump log en UI.
- **Collaborer avec Architecte, RSSI et QA avant Figma** — cohérence message / sécurité / testabilité.

### Garde-fous à réutiliser

- Figma uniquement après brief validé et décisions ADR utiles prises en compte.
- Aucune donnée sensible exposée dans messages visibles.
- Aucun log technique complet affiché dans l'UI.
- Écran anomalies ≠ outil de supervision complète.
- Reprise manuelle simulée — pas de retry automatique en UX MVP.

### Questions réflexes à poser

- L'utilisateur **comprend-il** ce qui s'est passé ?
- Le message visible **expose-t-il une donnée sensible** ?
- L'**action attendue** est-elle claire ?
- Le **détail technique** est-il nécessaire dans l'UI ?
- L'**écran anomalies** reste-t-il utilisable ?
- Une **décision ADR** est-elle nécessaire avant Figma ?

### Livrables ou templates candidats

| Élément | Type |
|---------|------|
| Template Screen Brief — écran anomalies | Template |
| Matrice message métier / log technique | Template |
| Checklist entrée Figma post-ADR | Checklist |
| Standard erreurs visibles + reprise manuelle simulée | Standard |

### Liens avec les autres rôles

| Rôle | Lien |
|------|------|
| **Architecte** | Statuts anomalies, corrélation contrats / UI |
| **RSSI** | Exclusion données sensibles ; rejet non verbeux |
| **QA / Testeur** | Scénarios non happy path ; vérification message vs log |
| **Product Owner** | Périmètre écrans MVP ; retry hors scope |
| **Chef de projet** | Figma autorisé post-jalon ADR P1 |

### Conditions de réutilisation sur un autre projet SFIA

- Projet avec **intégrations simulées visibles** ou écran anomalies / erreurs.
- Phase **architecture ADR P1 consolidée** avant engagement Figma.
- **Non applicable** si le MVP n'expose pas d'erreurs d'intégration — adapter la fiche écran anomalies.

---

## 15. Évolution continue

Ce fichier est **évolutif**. Le bloc ADR P1 Interv360 a enrichi ce template (§14). Figma, delivery et recette continueront l'enrichissement. Les retours d'implémentation UX alimenteront les templates sans figer les méthodes d'un pilote unique.

---

*Template SFIA — Role Method — UX/UI Designer*
