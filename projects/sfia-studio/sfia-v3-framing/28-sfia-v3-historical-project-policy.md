# 28 — Politique projets historiques (R5 clôturée)

| Champ | Valeur |
|-------|--------|
| Statut | **Décision de cadrage D7 / R5 — clôturée** |

## 1. Règle

**Aucune migration générale** des projets historiques vers SFIA v3.0.

## 2. Autorisé

- Consultation / archivage sous méthode d’origine (souvent v2.6).  
- Import de **références** / artefacts (read).  
- Réutilisation d’artefacts comme inputs d’un **nouveau** projet.

## 3. Interdit

- Claim v3 **rétroactif** sur un projet historique.  
- Réécriture silencieuse de l’historique méthodologique.  
- Moteur complexe de migration automatique.

## 4. Reprise exceptionnelle

Si besoin de « reprendre » un ancien travail en v3 :

1. Créer un **nouveau** `ProjectId` / contexte.  
2. Snapshot initial des références importées (digests).  
3. Traçabilité `originProjectRef`.  
4. **Rebaselining humain explicite** (DecisionRequest) si baseline méthode change pour ce nouveau projet.  
5. Mode méthodo choisi explicitement (badge).

## 5. Dette

Cycle dédié « reprise exceptionnelle » seulement si un cas réel apparaît — pas de backlog migration massive.
