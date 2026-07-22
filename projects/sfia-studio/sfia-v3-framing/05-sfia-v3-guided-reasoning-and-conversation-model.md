# 05 — Raisonnement guidé et modèle conversationnel (candidat)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat** |

## 1. Définition

Une **GuidedSession** est une conversation :

- toujours rattachée à un objet (projet / cycle / décision / action / rapport / réserve) ;
- **guidée** par le contexte et l’état ;
- **libre** dans le raisonnement GPT ;
- **bornée** dans les outils, transitions et effets.

## 2. Deux canaux obligatoires

### Canal conversationnel (humain-lisible)
Réponse naturelle GPT : explication, challenge, reformulation, questions.

### Canal de contrôle (machine-lisible)
Structure minimale candidate :

| Champ | Rôle |
|-------|------|
| `intent` | intention détectée / déclarée |
| `projectRelevance` | lien projet OK / doute / hors scope |
| `cycleRelevance` | lien cycle OK / qualification requise |
| `sourcesUsed[]` | path + digest |
| `missingInfo[]` | clarifications |
| `proposedTransition` | éventuelle |
| `actionProposal` | SfiaActionProposal ou null |
| `requiredGate` | si applicable |
| `status` | ok / clarification / decision_required / blocked / no_action |

Le canal de contrôle **n’est pas** un script de phrases. Il **contraint les effets**, pas le style.

## 3. Sorties autorisées du moteur / GPT

1. Réponse directe contextualisée  
2. Question de clarification  
3. Analyse  
4. Hypothèses  
5. Options  
6. Recommandation  
7. Demande de décision humaine (`DecisionRequest`)  
8. Proposition de cycle  
9. Proposition de transition  
10. `ActionProposal`  
11. `no_action`  
12. `blocked`

## 4. Ce qu’il ne faut pas faire

- Arbre rigide de phrases préfabriquées.  
- Questionnaire type wizard exclusif (le guidage peut **suggérer** des questions, pas imposer un script).  
- Confondre recommandation et décision.  
- Laisser GPT émettre commit/push/PR hors gates.  
- Remplacer le canal de contrôle par du prose seul.

## 5. Guidage sans rigidité — mécanique candidate

1. Charger `SourceContext` (canonique + projet).  
2. Injecter état (ProjectState, CycleState, open/closed gates).  
3. Laisser GPT produire prose + structure.  
4. Valider structure (schéma).  
5. Compiler effets via Action Compiler / Transition Engine.  
6. Si ambigu : `clarification_required` — **pas** d’effet.

## 6. Exemples (illustratifs)

**OK :** « D’après le routing guide et l’état FRAMING, je propose un cycle Delivery documentaire. Questions : … » + JSON contrôle.

**KO :** réponses génériques hors projet ; ou « j’ai commit & push » dans le texte avec effet réel.

## 7. Lien acquis

- Journal OPS1 = proto GuidedSession.  
- Moteur contexte SFIA (74) = SourceContext runtime.  
- SfiaActionProposal = canal de contrôle action.

## 8. Décisions humaines requises

- Valider le dual-channel.  
- Valider l’interdiction du free-chat.  
- Trancher le niveau d’UI pour afficher le canal de contrôle (compact vs détail).
