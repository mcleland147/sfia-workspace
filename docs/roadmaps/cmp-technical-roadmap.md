# Roadmap technique — CMP / SFIA outillage

**Statut** : Draft  
**Objet** : évolutions techniques CMP-001 et outillage SFIA après synchronisation Prompt Library  
**Source pilote** : PRJ-INTERV360 — clôture Prompt Library 39/39

---

## 1. Contexte

La synchronisation initiale de la **SFIA Prompt Library** est **terminée** avec **39 prompts** publiés dans Notion (Lots 0 à final, PR #1 mergée dans `main`).

Cette roadmap vise à capitaliser les **évolutions techniques** identifiées après usage réel de **CMP-001** et de la Prompt Library.

---

## 2. Principes

- **Git** reste la source détaillée.
- **Notion** reste une couche de synthèse et de gouvernance.
- **CMP-001** reste le connecteur contrôlé entre Git et Notion.
- Aucune publication Notion ne doit être **automatique** sans revue explicite.
- Les évolutions doivent rester **progressives**, **tracées** et **réversibles**.

---

## 3. Roadmap

| ID | Sujet | Description | Priorité | Statut | Commentaire |
|----|-------|-------------|----------|--------|-------------|
| **CMP-ROADMAP-001** | Ajouter update prompt | Ajouter une commande CMP permettant de mettre à jour une fiche Prompt Library existante, comme cela existe déjà pour certains types. | Haute | À cadrer | Évite les corrections manuelles dans Notion et sécurise l'évolution des prompts publiés. |
| **CMP-ROADMAP-002** | Ajouter un mode batch | Permettre la création ou publication de plusieurs prompts depuis un payload agrégé, avec gestion d'arrêt en cas d'échec. | Haute | À cadrer | Réduit les 10, 12 ou 15 commandes manuelles par lot. |
| **CMP-ROADMAP-003** | Formaliser les prompts Draft sous `prompts/<famille>/` | Créer progressivement des fichiers sources dédiés pour les prompts encore seulement capitalisés en synthèse Draft. | Moyenne | À planifier | Concerne notamment les prompts Cadrage, Arbitrages, UX classique, Rôles et Gouvernance. |
| **CMP-ROADMAP-004** | Passage progressif de Draft à Tested | Définir un processus de promotion des prompts après usage réel documenté. | Moyenne | À cadrer | Le statut Tested doit refléter un usage réel, pas une simple publication Notion. |
| **CMP-ROADMAP-005** | Fiabiliser l'export Notion | Rafraîchir et fiabiliser `exports/notion/prompts.json` pour refléter l'état réel de la Prompt Library. | Haute | À cadrer | L'export était obsolète pendant les publications initiales. |
| **CMP-ROADMAP-006** | Contrôle de doublons renforcé | Ajouter un contrôle dédié des doublons avant création Notion, basé sur les IDs `PROMPT-*`. | Haute | À cadrer | Sécurise les publications futures en l'absence de update prompt. |
| **CMP-ROADMAP-007** | Procédure standard de publication Prompt Library | Documenter le processus standard : préparation, revue, publication, trace Git, vérification visuelle, clôture. | Moyenne | À documenter | Capitalise le processus utilisé pour les 39 prompts initiaux. |
| **CMP-ROADMAP-008** | Clôture semi-automatique des lots publiés | Étudier un mécanisme de génération automatique ou semi-automatique des logs de publication et notes de clôture. | Basse | À étudier | Utile après stabilisation de update prompt, batch et export. |

---

## 4. Garde-fous

- Pas de publication Notion automatique.
- Pas de secret affiché.
- Pas de modification `.env`.
- Pas de delivery ouvert.
- Pas de backlog.
- Pas de user stories.
- Pas de code applicatif.
- Git reste source détaillée.

---

## 5. Prochaine étape recommandée

Prioriser d'abord :

1. **update prompt** (CMP-ROADMAP-001)
2. **batch** (CMP-ROADMAP-002)
3. **export Notion fiable** (CMP-ROADMAP-005)
4. **contrôle doublons** (CMP-ROADMAP-006)

---

## 6. Conclusion

Cette roadmap formalise les évolutions techniques nécessaires pour rendre **CMP-001** plus robuste après la première synchronisation complète de la **SFIA Prompt Library**.

---

*Roadmap technique CMP / SFIA outillage — gouvernance SFIA — non publiée dans Notion.*
