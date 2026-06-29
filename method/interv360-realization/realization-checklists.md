# SFIA — Realization checklists

**Type** : Checklists réutilisables de préparation réalisation  
**Origine de capitalisation** : Interv360  
**Référence** : SFIA delivery / realization method  
**Statut** : Draft  
**Branche** : `method/interv360-realization-capitalization`  
**Documents associés** : [`capitalization-plan.md`](capitalization-plan.md), [`realization-method.md`](realization-method.md), [`realization-deliverables-standard.md`](realization-deliverables-standard.md)

---

## 1. Objectif

Ce document fournit les checklists réutilisables de la méthode de préparation réalisation SFIA.

Elles permettent de vérifier :

- la readiness de chaque étape ;
- les conditions de passage ;
- les conditions bloquantes ;
- les garde-fous ;
- la non-confusion entre préparation documentaire et démarrage réalisation ;
- la qualité des livrables ;
- la capacité à proposer une PR documentaire.

Ces checklists sont génériques et réutilisables sur d'autres projets.

Elles **ne constituent pas** une autorisation de coder.

Les modèles détaillés de documents sont définis dans `realization-templates.md`.

Les prompts assistés sont définis dans `realization-prompt-family.md`.

---

## 2. Principes d'utilisation

Les checklists doivent être utilisées :

- à la fin de chaque cycle ;
- avant toute synthèse de clôture ;
- avant toute PR documentaire ;
- avant toute décision Go / No-go ;
- avant toute création de projet applicatif ;
- avant toute autorisation de code.

Une case cochée signifie que l'élément est suffisamment traité pour la phase concernée.

Une case non cochée doit être considérée comme :

- un point à compléter ;
- une hypothèse à clarifier ;
- une condition bloquante potentielle ;
- ou une exclusion à documenter explicitement.

---

## 3. Checklist — Delivery preparation

### Objectif

Vérifier que le MVP et la stratégie de livraison sont suffisamment cadrés.

### Checklist

- [ ] le besoin produit est compris ;
- [ ] le périmètre MVP est défini ;
- [ ] les exclusions MVP sont explicites ;
- [ ] les lots fonctionnels sont identifiés ;
- [ ] les dépendances principales sont visibles ;
- [ ] le backlog macro est disponible ;
- [ ] les priorités sont formulées ;
- [ ] la stratégie de slicing est définie ;
- [ ] les critères de réalisation macro sont disponibles ;
- [ ] la synthèse readiness est produite ;
- [ ] le passage vers delivery detailing est justifié ;
- [ ] aucun engagement de code n'est pris.

### Critères bloquants

- MVP non défini ;
- lots fonctionnels absents ;
- backlog macro absent ;
- exclusions non documentées ;
- passage vers détail non justifié.

---

## 4. Checklist — Delivery detailing

### Objectif

Vérifier que l'incrément prioritaire est suffisamment détaillé.

### Checklist

- [ ] l'incrément prioritaire est identifié ;
- [ ] le périmètre de l'incrément est explicite ;
- [ ] les exclusions de l'incrément sont explicites ;
- [ ] le backlog détaillé est disponible ;
- [ ] les user stories sont formulées ;
- [ ] les critères d'acceptation sont testables ;
- [ ] les dépendances sont visibles ;
- [ ] les cas limites principaux sont identifiés ;
- [ ] les refus métier initiaux sont identifiés si nécessaire ;
- [ ] la checklist readiness est produite ;
- [ ] la synthèse detailing est produite ;
- [ ] le passage vers realization preparation est justifié.

### Critères bloquants

- incrément prioritaire non stabilisé ;
- user stories absentes ;
- critères d'acceptation non testables ;
- exclusions non documentées ;
- dépendances critiques non visibles.

---

## 5. Checklist — Realization preparation

### Objectif

Vérifier que l'incrément peut passer vers le cadrage technique sans démarrer le code.

### Checklist

- [ ] le slicing de réalisation est défini ;
- [ ] les séquences de réalisation sont ordonnées ;
- [ ] les dépendances entre séquences sont visibles ;
- [ ] le cadrage technique préparatoire est disponible ;
- [ ] les risques techniques sont identifiés ;
- [ ] les hypothèses techniques sont listées ;
- [ ] la stratégie QA est définie ;
- [ ] l'estimation indicative est produite ;
- [ ] les garde-fous sont repris ;
- [ ] la synthèse de préparation réalisation est produite ;
- [ ] le passage vers technical design est justifié ;
- [ ] aucun projet applicatif n'est créé.

### Critères bloquants

- slicing absent ;
- risques techniques non identifiés ;
- stratégie QA absente ;
- estimation présentée comme engagement ;
- code ou projet applicatif créé prématurément.

---

## 6. Checklist — Technical design

### Objectif

Vérifier que les décisions techniques structurantes sont prêtes sans implémentation.

### Checklist

- [ ] l'architecture logique est documentée ;
- [ ] les responsabilités applicatives sont séparées ;
- [ ] le modèle data logique est disponible ;
- [ ] la stratégie API est décidée ;
- [ ] les règles métier structurantes sont documentées ;
- [ ] les préconditions et refus structurants sont visibles ;
- [ ] les décisions prises et non prises sont distinguées ;
- [ ] la QA technique est préparée ;
- [ ] les exclusions techniques sont explicites ;
- [ ] la synthèse technical design est produite ;
- [ ] le passage vers implementation planning est justifié ;
- [ ] aucune implémentation technique n'est produite.

### Critères bloquants

- architecture logique absente ;
- responsabilités floues ;
- data logique non cadrée ;
- stratégie API non décidée ou ambiguë ;
- règles métier structurantes absentes.

---

## 7. Checklist — Implementation planning

### Objectif

Vérifier que la réalisation opérationnelle est préparée sans démarrer le code.

### Checklist

- [ ] les données de démonstration sont disponibles ;
- [ ] les données de démonstration sont fictives ;
- [ ] les scénarios QA nominaux sont disponibles ;
- [ ] les scénarios de refus sont disponibles ;
- [ ] les résultats attendus sont testables ;
- [ ] l'estimation détaillée indicative est produite ;
- [ ] la planification indicative est disponible ;
- [ ] le backlog préparatoire est disponible ;
- [ ] les priorités préparatoires sont visibles ;
- [ ] les garde-fous sont consolidés ;
- [ ] la synthèse implementation planning est produite ;
- [ ] le passage vers realization start est justifié.

### Critères bloquants

- données de démonstration absentes ;
- QA nominale absente ;
- refus non documentés ;
- backlog préparatoire absent ;
- planification présentée comme sprint plan ferme.

---

## 8. Checklist — Realization start

### Objectif

Vérifier que les décisions préalables au démarrage réalisation sont prêtes.

### Checklist

- [ ] les options de stack sont comparées ;
- [ ] une recommandation stack indicative est formulée ;
- [ ] la structure projet cible est documentée ;
- [ ] la structure projet réelle n'est pas créée sans autorisation ;
- [ ] le niveau de séparation front/back est décidé ;
- [ ] la checklist avant code est produite ;
- [ ] les conditions bloquantes sont visibles ;
- [ ] le Go documentaire est distingué du Go réalisation ;
- [ ] les décisions non prises sont explicites ;
- [ ] la synthèse realization start est produite ;
- [ ] le passage vers Go / No-go est justifié ;
- [ ] aucune autorisation de code implicite n'est donnée.

### Critères bloquants

- stack non comparée ;
- structure projet floue ;
- séparation front/back non décidée ;
- conditions bloquantes absentes ;
- confusion entre Go documentaire et Go réalisation.

---

## 9. Checklist — Implementation Go / No-go

### Objectif

Vérifier que la décision de démarrage réalisation peut être prise explicitement.

### Checklist

- [ ] le périmètre est gelé ou le gel est refusé explicitement ;
- [ ] les exclusions sont confirmées ;
- [ ] la stack concrète est confirmée ou reportée explicitement ;
- [ ] la stratégie data est confirmée ou reportée explicitement ;
- [ ] les conditions bloquantes sont listées ;
- [ ] les conditions bloquantes sont levées ou assumées ;
- [ ] les risques restants sont explicités ;
- [ ] la décision Go / No-go / Go partiel / prolongation documentaire est formulée ;
- [ ] l'autorisation de code est donnée ou refusée explicitement ;
- [ ] les limites de l'autorisation sont précisées ;
- [ ] la synthèse Go / No-go est produite ;
- [ ] aucune autorisation implicite n'est laissée.

### Critères bloquants

- périmètre non gelé ;
- stack concrète absente sans report explicite ;
- stratégie data absente sans report explicite ;
- conditions bloquantes non levées ;
- autorisation de code ambiguë.

---

## 10. Checklist — Garde-fous permanents

### Objectif

Éviter les dérives pendant les cycles préparatoires.

### Checklist

- [ ] aucun code n'est produit avant autorisation explicite ;
- [ ] aucun projet applicatif réel n'est créé avant autorisation explicite ;
- [ ] aucun framework n'est initialisé avant autorisation explicite ;
- [ ] aucune dépendance applicative n'est installée avant autorisation explicite ;
- [ ] aucune API détaillée n'est créée prématurément ;
- [ ] aucun OpenAPI n'est produit prématurément ;
- [ ] aucun payload JSON n'est produit prématurément ;
- [ ] aucun SQL ou migration n'est produit prématurément ;
- [ ] aucun test automatisé n'est produit prématurément ;
- [ ] aucun script n'est produit prématurément ;
- [ ] aucun ticket Jira réel n'est créé prématurément ;
- [ ] aucun sprint plan ferme n'est créé prématurément ;
- [ ] aucune donnée réelle ou sensible n'est introduite sans décision ;
- [ ] aucun secret n'est ajouté ;
- [ ] aucun export local non souhaité n'est commité ;
- [ ] les exclusions restent visibles ;
- [ ] les décisions non prises restent visibles ;
- [ ] les hypothèses restent distinguées des décisions.

---

## 11. Checklist — Qualité documentaire

### Objectif

Vérifier qu'un livrable est exploitable.

### Checklist

- [ ] objectif clair ;
- [ ] sources listées ;
- [ ] périmètre explicite ;
- [ ] hors périmètre explicite ;
- [ ] décisions distinguées des hypothèses ;
- [ ] décisions non prises explicites ;
- [ ] garde-fous visibles ;
- [ ] critères de sortie disponibles ;
- [ ] prochaine action indiquée ;
- [ ] vocabulaire non ambigu ;
- [ ] traçabilité avec l'étape précédente ;
- [ ] statut recommandé si synthèse de cycle.

---

## 12. Checklist — PR documentaire

### Objectif

Vérifier qu'une PR documentaire peut être proposée.

### Checklist

- [ ] la branche est dédiée au cycle ;
- [ ] les livrables attendus sont produits ;
- [ ] la synthèse de cycle est disponible ;
- [ ] le diff contient uniquement les fichiers attendus ;
- [ ] aucun fichier local non souhaité n'est inclus ;
- [ ] aucun secret n'est présent ;
- [ ] aucun code n'est introduit si le cycle est documentaire ;
- [ ] aucun projet applicatif n'est introduit si non autorisé ;
- [ ] aucun ticket réel ou sprint plan ferme n'est créé si non autorisé ;
- [ ] le titre de PR reflète le cycle ;
- [ ] le corps de PR résume décisions, exclusions, garde-fous et prochaine étape ;
- [ ] le merge est manuel après revue.

---

## 13. Checklist — Anti-démarrage prématuré

### Objectif

Détecter toute autorisation ou action de réalisation implicite.

### Checklist

- [ ] le mot « Go » est qualifié lorsqu'il apparaît ;
- [ ] « Go documentaire » est distingué de « Go réalisation » ;
- [ ] toute autorisation de code est explicite ;
- [ ] toute création de projet applicatif est explicitement autorisée ;
- [ ] toute création de tickets réels est explicitement autorisée ;
- [ ] toute planification ferme est explicitement autorisée ;
- [ ] les estimations sont marquées comme indicatives ;
- [ ] les plans sont marqués comme indicatifs tant que le Go réalisation n'est pas donné ;
- [ ] les recommandations techniques sont marquées comme indicatives si non confirmées ;
- [ ] les décisions reportées sont visibles ;
- [ ] les conditions bloquantes sont visibles ;
- [ ] les exclusions sont reprises dans les synthèses.

---

## 14. Utilisation recommandée

Pour clôturer un cycle de préparation réalisation :

1. **Appliquer** la checklist de la phase courante (sections 3 à 9 selon le cycle).
2. **Vérifier** les garde-fous permanents (section 10).
3. **Vérifier** la qualité documentaire de chaque livrable produit (section 11).
4. **Produire ou ajuster** la synthèse de cycle avec statut recommandé.
5. **Appliquer** la checklist PR documentaire si une PR est envisagée (section 12).
6. **Vérifier** l'anti-démarrage prématuré avant toute synthèse ou PR (section 13).
7. **Décider explicitement** la suite : passage à l'étape suivante, prolongation documentaire, No-go ou autorisation de code.

En cas de case non cochée bloquante, ne pas avancer sans compléter le livrable manquant ou documenter explicitement le report.

---

## 15. Décisions retenues

| Décision | Statut |
|----------|--------|
| Checklists par phase retenues | ✅ |
| Garde-fous permanents retenus | ✅ |
| Checklist qualité documentaire retenue | ✅ |
| Checklist PR documentaire retenue | ✅ |
| Checklist anti-démarrage prématuré retenue | ✅ |
| Critères bloquants par phase retenus | ✅ |
| Go documentaire / Go réalisation distingués | ✅ |
| Autorisation de code toujours explicite | ✅ |
| PR documentaire toujours contrôlée | ✅ |
| Non-généralisation des spécificités projet retenue | ✅ |

---

## 16. Critères de sortie

- [x] checklist delivery preparation définie ;
- [x] checklist delivery detailing définie ;
- [x] checklist realization preparation définie ;
- [x] checklist technical design définie ;
- [x] checklist implementation planning définie ;
- [x] checklist realization start définie ;
- [x] checklist implementation Go / No-go définie ;
- [x] checklist garde-fous permanents définie ;
- [x] checklist qualité documentaire définie ;
- [x] checklist PR documentaire définie ;
- [x] checklist anti-démarrage prématuré définie ;
- [x] utilisation recommandée définie ;
- [x] décisions retenues listées.

---

## 17. Prochaine action

Le prochain livrable est :

**`realization-templates.md`**

Objectif :
Produire les modèles génériques de documents réutilisables.
