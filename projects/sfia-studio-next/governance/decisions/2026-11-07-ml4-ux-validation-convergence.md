# Décision Morris — Ordre de convergence UX et préparation Git ML4

**Statut de contenu : VALIDATED BY MORRIS — 2026-11-07 ; branche documentaire candidate jusqu'au merge.**
**Contexte :** Morris a validé les 18 écrans Figma ML4 218–235 et l'INDEX, puis approuvé l'opportunité de faire converger l'UX déjà implémentée ML1–ML3 avant le développement technique Git. Il demande de finaliser **d'abord** la documentation ML4 sur Git.

## Ordre décidé

1. **ML4, préparation documentaire :** achever les addenda R1–R5, contrats, matrice et registre UX ; revue du diff, contrôles et merge documentaire autorisé après gate.
2. **Convergence UX du parcours existant ML1–ML3 :** à qualifier et réaliser sous son propre contrat d'acceptation et GO code. Réutiliser R3 pour portefeuille, sas, Nora, documents, projet, cycles/méthode, décisions, restrictions et journal. Prouver les comportements réels, la navigation, l'accessibilité et les non-régressions, sans supposer que tout choix de maquette reflète déjà un comportement implémenté.
3. **Construction technique ML4 :** GitHub App, autorisations à la carte, lecture Nora, publications D4, branche/commit/PR/merge sous D6/D7/D8/D9 ; seulement après avoir intégré l'UX existante dans un shell cohérent et après GO Cursor spécifique.
4. **ML5 :** exécution technique Cursor sous la même frontière D7 ; R6 reste le gate de qualification transverse.

Le travail transversal de convergence ne crée **pas automatiquement** un macro-lot numéroté nouveau. Les validations ML1–ML3 demeurent dans leur portée. Tout écart qui modifie API/DB/autorité/contrat R2 est qualifié, puis soumis à Morris ; aucune refonte silencieuse et aucun second moteur.

**Exclusions :** aucun GO code, PR/merge technique, STABLE, release ou ADOPTED. Les réserves ML1–ML3 et R6 restent ouvertes. Sources : [Roadmap](../roadmap.md), [décision ML4/ML5](2026-11-07-ml4-git-publication-ml5-cursor-trajectoire.md), [Registre UX](../../ux-ui/integration-git-ux-ml4.md).
