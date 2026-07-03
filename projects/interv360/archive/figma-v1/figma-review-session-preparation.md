# Interv360 — Préparation revue PO / UX / RSSI / Architecte — Figma V1

**Projet** : PRJ-INTERV360  
**Phase source** : 02-architecture  
**Jalon** : Revue Figma V1  
**Statut** : Draft  
**Type** : Préparation revue transverse  
**Source** : `figma-first-draft-review.md` + captures Figma V1  
**Objet** : cadrer la revue transverse du premier jet Figma

---

## 1. Objectif

Ce document **prépare la revue transverse** du premier jet **Figma V1** Interv360.

- la **V1 est présentable mais non définitive** (qualité indicative 8,3/10 — voir `figma-first-draft-review.md`) ;
- la revue doit **valider** le respect du **MVP**, des **ADR P1/P2** et des **garde-fous UX/SSI** ;
- la revue **ne déclenche pas automatiquement** backlog, user stories ou code ;
- les **retours devront être documentés** avant toute V2 ou passage delivery.

**Supports de revue**

- Revue : `figma-first-draft-review.md`
- Captures : `figma-first-draft-screens/` (11 PNG versionnés Git)

---

## 2. Périmètre de la revue

Écrans et pages **à parcourir** en session :

1. **Cover / contexte** — `00-cover-context.png`
2. **Dashboard SAV** — `05-dashboard-sav.png`
3. **Liste des demandes** — `06-liste-demandes.png`
4. **Fiche demande SAV** — `07-fiche-demande-sav.png`
5. **Planning semaine** — `08-planning-semaine.png`
6. **Fiche intervention mobile** — `09-fiche-intervention-mobile.png`
7. **Compte rendu mobile** — `10-compte-rendu-mobile.png`
8. **Suivi erreurs intégration** — `11-suivi-erreurs-integration.png`
9. **Vue dirigeant** — `12-vue-dirigeant.png`
10. **Checklist validation** — `13-validation-checklist.png`
11. **Archive / explorations** — `99-archive.png`

**Hors périmètre revue comme captures dédiées**

Les pages **01 — Design principles**, **02 — Tokens**, **03 — Components** et **04 — User flows MVP** n'ont **pas été exportées individuellement**. Elles ne seront **pas revues comme écrans dédiés**. Les éléments correspondants sont **partiellement visibles** dans la cover (`00-cover-context.png`) et dans les écrans métier (badges, composants, flux implicites).

---

## 3. Objectifs de validation par rôle

| Rôle | Validation attendue | Questions clés |
|------|---------------------|----------------|
| **Product Owner** | MVP respecté ; valeur métier lisible ; pas de dérive fonctionnelle ; écrans utiles pour démonstrateur | Les 8 écrans couvrent-ils le parcours SAV arbitré ? Y a-t-il une fonctionnalité qui suggère un scope élargi (portail, IA, BI) ? La V1 suffit-elle pour une démo parties prenantes ? |
| **UX/UI Designer** | Cohérence visuelle ; lisibilité ; composants ; hiérarchie ; accessibilité minimale ; polish restant | La direction Enterprise clean est-elle tenue ? Les dashboards sont-ils lisibles et différenciés ? Quels ajustements P1/P2 avant V2 ? |
| **RSSI** | Pas d'exposition sensible ; pas de logs techniques ; pas de promesse conservation réelle ; pas de signature juridique ; pas d'IA implicite ; wording prudent | Des libellés promettent-ils une conformité non décidée ? Des données sensibles sont-elles exposées ? Les onglets Preuves/Notifications sont-ils acceptables ? |
| **Architecte** | Cohérence ADR P1/P2 ; intégrations simulées non présentées comme réelles ; anomalies et reprise manuelle correctes ; pas de BI, portail ou architecture implicite | Les anomalies reflètent-elles ADR-002 ? Les notifications restent-elles simples (ADR-006) ? Aucun composant suggère-t-il une architecture non arbitrée ? |
| **Chef de projet** | Jalon maîtrisé ; V1 figée ; retours documentables ; pas de passage delivery prématuré | La revue peut-elle clôturer le jalon Figma V1 ? Faut-il planifier V2 ou passer en delivery ? Les interdits phase sont-ils respectés ? |
| **QA / Testeur** | Parcours testables ; états visibles ; anomalies lisibles ; points de test futurs identifiables | Quels scénarios happy path / non happy path sont démontrables ? Signature optionnelle, échec notification, reprise manuelle visibles ? |

*QA / Testeur : méthode rôle candidate future — point de vue utile dès cette revue.*

---

## 4. Checklist de revue

- [ ] les **8 écrans MVP** sont présents
- [ ] le **dashboard SAV** est actionnable
- [ ] la **vue dirigeant** est séparée
- [ ] la **liste des demandes** est crédible métier
- [ ] la **fiche demande SAV** est structurée
- [ ] le **planning** est lisible
- [ ] le **mobile technicien** est orienté terrain
- [ ] la **signature est optionnelle**
- [ ] l'**absence de signature ne bloque pas** le parcours
- [ ] les **anomalies** sont compréhensibles métier
- [ ] **aucun log technique** n'est exposé
- [ ] **aucun portail client** n'est représenté
- [ ] **aucun composant IA** n'est représenté
- [ ] aucun scoring, chatbot, prédiction ou résumé automatique n'est visible
- [ ] les **preuves** restent fictives / métadonnées
- [ ] les **notifications** restent simples
- [ ] la **V1 n'est pas considérée comme définitive**
- [ ] **aucun backlog, user story ou code** n'est déclenché par cette revue

---

## 5. Points déjà identifiés avant revue

*Source : `figma-first-draft-review.md` §9 — à trancher en session.*

| Priorité | Point | Écran concerné | Décision attendue |
|----------|-------|----------------|-------------------|
| **P1** | Clarifier ou supprimer les barres verticales KPI | Dashboard SAV | Conserver / modifier / supprimer |
| **P1** | Vérifier wording onglets et actions secondaires | Fiche demande, CR | Valider / reformuler / retirer |
| **P2** | Adoucir carte indice opérationnel | Vue dirigeant | V2 polish |
| **P2** | Améliorer planning temporel | Planning | V2 ou accepter V1 |
| **P2** | Affiner hiérarchie mobile | Fiche intervention, CR | V2 |
| **P3** | Améliorer graphs | Dashboard, dirigeant | V2 |
| **P3** | Enrichir états empty/loading/error | Listes, anomalies | V2 |
| **P3** | Exporter pages 01–04 si V2 | Structure Figma | V2 optionnel |

---

## 6. Questions de revue par écran

### Dashboard SAV (`05-dashboard-sav.png`)

- Les **KPI** sont-ils les bons pour piloter le SAV ?
- Les **CTA** sont-ils actionnables et au bon niveau de priorité ?
- Les **alertes** sont-elles compréhensibles et hiérarchisées ?
- Les **barres verticales** dans les cartes KPI doivent-elles être conservées ?
- Le **graphe** flux demandes/clôtures apporte-t-il de la valeur sans surcharger ?

### Liste des demandes (`06-liste-demandes.png`)

- Les **colonnes** sont-elles suffisantes pour le MVP ?
- Le **SLA** est-il lisible ?
- La **prochaine action** est-elle claire par ligne ?
- Les **statuts** et couleurs sont-ils cohérents avec le cadrage ?

### Fiche demande SAV (`07-fiche-demande-sav.png`)

- La **structure** (sections / onglets) est-elle compréhensible ?
- Les **onglets** (Client, Preuves, Notifications) promettent-ils trop ?
- Les **CTA** (« Notifier responsable », « Ouvrir intervention ») sont-ils pertinents ?
- La logique **notification / anomalie** reste-t-elle simple et non bloquante ?

### Planning semaine (`08-planning-semaine.png`)

- La **lecture temporelle** est-elle suffisante ?
- Les **conflits** et **retards** sont-ils visibles ?
- La **vue par technicien** répond-elle au besoin planning MVP ?

### Fiche intervention mobile (`09-fiche-intervention-mobile.png`)

- Les **actions terrain** (appeler, photo, CR) sont-elles les bonnes ?
- Le **CTA principal** « Démarrer intervention » est-il clair ?
- **« Clôturer plus tard »** doit-il être conservé ou retiré (workflow non cadré) ?

### Compte rendu mobile (`10-compte-rendu-mobile.png`)

- La **signature optionnelle** est-elle suffisamment claire ?
- **« Continuer sans signature »** est-il assez visible ?
- **« Enregistrer brouillon »** est-il acceptable dans le MVP ?
- Le **wording** signature / preuve reste-t-il prudent ?

### Suivi erreurs intégration (`11-suivi-erreurs-integration.png`)

- Les **messages** sont-ils assez métier ?
- Les **actions de reprise** sont-elles assez claires ?
- Y a-t-il un **risque de promesse technique** excessive ?
- L'**empty state** est-il adapté ?

### Vue dirigeant (`12-vue-dirigeant.png`)

- La vue est-elle **assez synthétique** vs dashboard SAV ?
- La **carte noire** « Indice opérationnel » est-elle trop contrastée ?
- Les **tendances** restent-elles non prédictives ?
- Les **alertes majeures** sont-elles pertinentes et limitées ?

### Cover, checklist, archive (`00`, `13`, `99`)

- Le **contexte MVP** sur la cover est-il suffisant pour un nouvel arrivant ?
- La **checklist validation** (13) reflète-t-elle les critères projet ?
- L'**archive** vide confirme-t-elle le hors périmètre post-MVP ?

---

## 7. Format de décision attendu

| Décision possible | Signification |
|-------------------|---------------|
| **Validé sans réserve** | Accepté tel quel pour V1 ; pas d'action obligatoire |
| **Validé avec ajustements mineurs** | Accepté V1 ; ajustements documentés pour V2 ou polish |
| **Ajustement requis avant V2** | Bloquant pour considérer V1 close ; à traiter en V2 |
| **Hors MVP / à reporter** | Élément à retirer ou reporter post-MVP |
| **À arbitrer** | Décision PO ou transverse requise avant suite |

*Chaque point P1–P3 (§5) et chaque écran (§6) doit recevoir une décision en fin de session.*

---

## 8. Sorties attendues de la revue

À produire **après** la session (compte rendu séparé — §9) :

1. **Décision de validation V1** globale (ex. « Validé avec ajustements mineurs »)
2. **Liste des ajustements retenus** (priorité, écran, responsable, cible V2 ou wording)
3. **Liste des points reportés** (hors MVP, post-MVP)
4. **Confirmation** que backlog / user stories / code restent **bloqués** sauf décision explicite
5. **Décision sur opportunité V2** (oui / non / différée — crédits Figma, outil alternatif)
6. **Décision sur synchronisation Notion** éventuelle (jalon Figma V1 en gouvernance)
7. **Identification des impacts SFIA** (template revue, retours capitalisables)

---

## 9. Trame de compte rendu de revue

*Ne pas remplir avant la session — modèle pour `figma-review-session-minutes.md` (futur).*

```markdown
# Compte rendu revue Figma V1 — Interv360

**Date :**
**Participants :**
**Rôles représentés :**
**Support analysé :** figma-first-draft-screens/ + figma-first-draft-review.md

## Décision globale

## Points validés

## Ajustements retenus

| Priorité | Point | Écran | Décision | Responsable | Cible |
|----------|-------|-------|----------|-------------|-------|

## Points reportés

## Risques / garde-fous

## Décision V2

## Prochaine action
```

---

## 10. Garde-fous avant delivery

- **pas de backlog** sans validation transverse explicite ;
- **pas de user stories** sans validation ;
- **pas de code** sans validation ;
- **pas de V2** sans arbitrage (crédits, périmètre, priorité) ;
- **pas d'ajout** IA / portail / BI / signature juridique sans ADR ;
- les **retours de revue** doivent être **documentés** (§9) avant toute suite.

---

## 11. Valeur projet

| Valeur | Commentaire |
|--------|-------------|
| **Revue cadrée** | Périmètre, rôles, questions prêtes |
| **Validation transverse** | PO, UX, RSSI, Architecte alignés |
| **Réduction risque de dérive** | Garde-fous rappelés avant delivery |
| **Meilleure préparation delivery** | V1 validée ou ajustements listés |
| **Meilleure traçabilité** | Décisions et retours versionnés Git |

---

## 12. Valeur SFIA

| Élément | Capitalisation |
|---------|----------------|
| **Template revue Figma V1** | Structure présente document |
| **Checklist revue transverse** | §4 |
| **Grille décisionnelle PO / UX / RSSI / Architecte** | §3, §7 |
| **Trame CR revue design** | §9 |
| **Standard « Figma V1 présentable mais non définitive »** | §1, §10 |

---

## 13. Prochaines actions

1. **Organiser la revue** PO / UX / RSSI / Architecte (session calendrier ou async structuré).
2. **Utiliser ce document** comme support de cadrage et ordre du jour.
3. **Documenter les retours** dans un compte rendu séparé (trame §9).
4. **Décider** si une **V2** est nécessaire (crédits Figma, polish P1/P2).
5. **Maintenir le blocage** backlog / user stories / code tant que la revue n'est pas validée et documentée.

---

## 14. Conclusion

La **revue Figma V1** peut être organisée sur une **base claire**.

La maquette est **présentable**, les **captures sont versionnées**, les **garde-fous** sont explicités et les **points d'attention** sont identifiés.

Le prochain jalon consiste à **recueillir les validations PO / UX / RSSI / Architecte** et à **documenter les retours** avant toute V2 ou transition vers le delivery.

---

*Préparation revue Figma V1 — projet Interv360 — gouvernance SFIA.*
