# 01 — Vision produit et positionnement SFIA v3.0

| Champ | Valeur |
|-------|--------|
| Statut | **Cadrage clôturé — V3-DOCUMENTED** (non adopté) |
| Baseline active | SFIA v2.6 |
| Décision D1 | Studio-native exclusive — **validée cadrage** |
| Trajectoire | Option D **validée** (conception uniquement) |

## 0. Applicabilité Studio-native (complément)

**SFIA v3.0 n’est pas** le modèle manuel ChatGPT → prompt → copier-coller Cursor → retour ChatGPT (cela reste **v2.6 / legacy**).

**SFIA v3.0 (candidat)** n’est applicable que si Studio pilote : projet, cycle, contexte, décisions, actions, exécutions, preuves, validations, transitions (détail : doc 15).

Doctrine et produit sont **couplés** : v3 = doctrine + opératoire + information + contrats + workflow + UX + orchestration.

## 1. Positionnement exact candidat

**SFIA Studio v3.0 (candidat)** est un **Project Operating System** : système de pilotage projet bout en bout, assisté par IA et gouverné par la méthode SFIA — **exécutée via Studio**, avec définitions versionnées dans Git et état vivant en SQL.

Il n’est **pas** :

- un chat généraliste ;
- une simple interface ChatGPT ;
- un lanceur de prompts ;
- un écran de monitoring isolé ;
- une duplication de la doctrine SFIA en code.

Il **est** (candidat) :

- le cockpit où un utilisateur humain crée, reprend, pilote et clôture un projet ;
- le lieu où les cycles sont ouverts, conduits, validés et enchaînés ;
- la façade où les décisions humaines structurantes sont demandées, tracées et appliquées ;
- l’orchestrateur visible des effets déterministes (outils, Cursor, Git) sous contrats ;
- le point de collecte des preuves, validations, réserves et capitalisations.

## 2. Problème que v3.0 adresse

| Problème | Observation actuelle (v2.6 + Control Tower local) |
|----------|--------------------------------------------------|
| Fragmentation outils | ChatGPT, Cursor, Git, GitHub, Studio OPS1 encore partiellement séparés |
| Conversation hors projet | Risque de « chat libre » sans rattachement projet/cycle |
| Doctrine ≠ runtime | Méthode Markdown riche ; runtime encore partiel (OPS1/CT) |
| Démonstration produit | Vertical slice technique ≠ parcours produit complet (créer projet → clôturer) |
| Terminologie individu-centrique | « Morris décide » doit devenir rôle de décideur humain habilité |

## 3. Vision formulée

> SFIA Studio permet de **piloter un projet** de bout en bout sous méthode SFIA : qualifier, décider, exécuter sous contrat, prouver, valider, enchaîner — avec GPT qui raisonne librement dans un **contexte contraint**, et des effets **déterministes** validés par des policies et gates humains.

## 4. Ce que le produit doit permettre

1. Créer un projet  
2. Reprendre un projet existant  
3. Importer / consulter un projet finalisé  
4. Ouvrir un cycle  
5. Reprendre un cycle  
6. Guider une réflexion (sans questionnaire rigide)  
7. Consulter les sources projet et canoniques  
8. Qualifier une demande  
9. Préparer une décision humaine  
10. Compiler une action  
11. Orchestrer Cursor sous contrat  
12. Contrôler Git (lecture / écritures gouvernées)  
13. Collecter les preuves  
14. Valider un résultat  
15. Proposer la transition suivante  
16. Capitaliser  

## 5. Règle conversationnelle structurante

Toute conversation est rattachée à au moins un objet : **projet**, **cycle**, **décision**, **action**, **rapport** ou **réserve**.

Il n’existe **pas** de conversation libre sans contexte projet (sauf opérations bornées de création / import de projet).

## 6. Séparation liberté / contrainte

| Libre | Contraint |
|-------|-----------|
| Formulation naturelle GPT | Contexte injecté (sources, état, gates) |
| Analyse, challenge, reformulation | Outils exposés |
| Hypothèses et recommandations | Transitions d’état |
| Questions de clarification | Effets (écriture, Cursor, remote) |

## 7. Relation Control Tower

Control Tower (66–74) prouve une **chaîne d’intégration** (Studio ↔ GPT ↔ Git ↔ GitHub read ↔ Cursor).  
v3.0 **généralise** cette chaîne en **système de projet**, pas seulement en démonstrateur d’outil.

## 8. Décisions humaines requises (suite)

- `GO VALIDATION DOCUMENTAIRE DU CADRAGE SFIA v3.0`
- Puis éventuel `GO OUVERTURE V3-MODELED` (distinct)
- Adoption / implémentation : **non prises**

Option D est **déjà validée** comme trajectoire de conception (D8).

## 9. Anti-claims

- Vision **candidate**, non baseline.  
- Pas d’implémentation autorisée par ce document.  
- Pas de monétisation / production claim.
