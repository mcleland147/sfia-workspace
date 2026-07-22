# 13 — Vertical slice produit cible (révisée, candidat)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat consolidé** |
| Objectif | Valeur **produit Studio-native**, pas seulement chaîne d’outils |

## 1. Slice révisée (20 étapes)

1. Création d’un projet dans Studio  
2. Attribution d’un responsable humain  
3. Sélection du mode méthodologique (v2.6 assisté / transition / v3 candidate)  
4. Ouverture d’un cycle de cadrage  
5. Chargement doctrine + définitions structurées (digests)  
6. Conversation guidée GPT (dual-channel)  
7. Persistance SQL des objets de cadrage  
8. Génération ou import d’un artefact métier (ex. RACI/risques)  
9. Décision humaine (gate UI)  
10. Création ActionCandidate  
11. Compilation → ExecutionContract  
12. Projection prompt Cursor  
13. Exécution Cursor bornée  
14. Collecte de preuves  
15. Validation  
16. Génération d’une restitution (rapport/slides MD)  
17. Transition proposée  
18. Décision humaine sur transition  
19. Mise à jour états projet/cycle  
20. Audit corrélé bout en bout  

## 2. Comparaison CT / OPS1

CT prouve outils + ActionCandidate + Cursor + rapport.  
Cette slice ajoute : **projet first-class**, mode méthodo, SQL cadrage, artefact, restitution, transition projet, audit OS — sans claim V3-ADOPTED.

## 3. Critères de succès

- Mode affiché ; pas de free-chat.  
- Digests doctrine/defs tracés.  
- Gate ≠ phrase conversationnelle.  
- ExecutionContract hashé avant Cursor.  
- Artefact non traité comme doctrine.  
- Restitution régénérable depuis sources.  
- Aucune modif `method/` / `prompts/`.  
- Claim au plus « v3 candidate / transition ».

## 4. Anti-claims

Non implémentée · pas MVP · pas baseline · pas multi-user requis · pas génération réelle XLSX/PPTX dans le cadrage.

## 5. Prérequis gates

`GO VALIDATION CADRAGE CONSOLIDÉ` puis GO plan/exécution slice distincts.

---

## Clôture cadrage (D1–D8)

**Statut :** intégration clôture — réserves R1–R5 **clôturées au cadrage** ; Option D **validée** comme trajectoire de conception ; ReviewBundle hybride **décidé** (23) ; template Cursor **non pivot** v3 (ExecutionContract) ; pas de migration générale (28) ; maturité **V3-DOCUMENTED** seulement.

**Anti-claims :** SFIA v3.0 **non adoptée** ; baseline **v2.6** ; **aucune** implémentation autorisée par cette clôture.

### Lien Option D

La slice 20 étapes se décompose en **D1 / D2 / D3** (doc 29). Ordre candidat de conception — **non implémenté**.
