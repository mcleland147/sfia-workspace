# SFIA Studio Next — complément aux instructions projet ChatGPT

| Élément | Valeur |
| --- | --- |
| Statut | **READY FOR MORRIS APPLICATION — non appliqué aux réglages du projet ChatGPT** |
| Source | SEF v0.2 validé + Roadmap Next + convention de nommage validée |
| Objet | Adapter la couche 1 des instructions aux travaux du **nouveau périmètre Next** sans casser le routage historique |
| Autorité | Morris valide l'application dans les paramètres du projet ChatGPT |

## Bloc à ajouter aux instructions projet (en préservant celles applicables au Studio historique)

### Sélection préalable du périmètre

- Les travaux sous `projects/sfia-studio-next/` ou explicitement désignés **SFIA Studio Next** suivent la gouvernance de construction Next.
- Les travaux sous `projects/sfia-studio/` suivent la Build Doctrine, la Roadmap et la PRR du Studio historique.
- Un travail mixte doit décrire les deux périmètres, les impacts et les décisions Morris requises. **Une source historique consultée pour capitalisation n'active pas automatiquement la gouvernance historique pour Next.**
- Le dépôt Git est unique : `mcleland147/sfia-workspace`. Vérifier `branch/HEAD/base` depuis Git avant toute proposition ou écriture ; ne jamais inventer l'état local.

### Convergence Pre-check Next

1. Lire `projects/sfia-studio-next/governance/SEF.md` — méthode de construction validée.
2. Lire `projects/sfia-studio-next/governance/roadmap.md` — jalon, statut vivant, chemin critique, capacité suivante.
3. Lire les décisions pertinentes sous `projects/sfia-studio-next/governance/decisions/`.
4. Lire la vision `projects/sfia-studio-next/cadrage/vision-cible/README.md` et les **trois PNG originaux** pour cadrage, UX et trajectoire conceptuelle ; statut : **vision fondatrice, non spécification d'architecture adoptée**.
5. Consulter la doctrine produit SFIA Studio v3 **applicable** (documents historiques `sfia-v3-framing/30–37`) et traiter son statut comme doctrine produit, non comme méthode externe ou comme preuve d'un runtime adopté.
6. Pour le nommage, appliquer `projects/sfia-studio-next/governance/product-naming-conventions.md` — **VALIDATED BY MORRIS**.
7. Si l'objet concerne le fonctionnement **Next**, consulter ses sources code/architecture et preuves courantes ; si aucun runtime Next n'existe, inscrire **N/A — non encore implémenté**. Pour une étude du comportement du Studio historique, lire également Git/code historique + PRR README et volumes pertinents, même read-only.
8. Qualifier le **macro-lot** : résultat utilisateur, capacité, contrats, risques, dépendances, impact, parallélisme maîtrisé, preuve de sortie, dette/exit, gate et capacité suivante.
9. Utiliser **uniquement le template SFIA v2.6 canonique et son guide de routage** pour la préparation des prompts Cursor ; sélectionner le pré-check Next, sans générer un second template.
10. Respecter le SEF §10 : ChatGPT peut rédiger directement, mais toute écriture Git est bornée par les autorisations Morris ; PR, merge, changements structurants et protections restent sous GO distinct.

### Discipline de construction et de revue

- Livrer par **macro-lots end-to-end cohérents**. Ne pas créer de micro-cycle documentaire si docs, tests et preuves peuvent être livrés dans le même lot.
- La **source Git et les preuves primaires priment** sur les documents, résumés et mémoires.
- Distinguer doctrine cible, modèle validé, code implémenté, vérifications déterministes, observations REAL et adoption runtime ; pas de READY/ADOPTED sans gate et preuves.
- Le naming permanent reflète la **responsabilité produit**, jamais un nom de chantier ou un suffixe historique par inertie.
- Aucun élément de Next n'autorise un retrait, une refonte ou une promotion implicite du Studio historique.

**Consigne de mise en service :** ce fichier est un **texte à appliquer manuellement dans les instructions du projet ChatGPT** par Morris après qualification de la branche. Son existence dans Git ne prouve **pas** que les instructions ChatGPT ont été changées. Ne pas effacer les autres règles projet ; supprimer ou resserrer les mentions Studio ambiguës uniquement après revue de leur portée.
