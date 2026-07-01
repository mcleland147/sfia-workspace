# SFIA — Controlled Delivery Checklist

**Domaine SFIA** : Delivery Method  
**Statut** : Draft — Hardened  
**Référence** : [`controlled-delivery-standard.md`](controlled-delivery-standard.md)

---

## 1. Checklist phase 1 — Cadrage fin

- [ ] Go / no-go formalisé
- [ ] Stack ou approche technique arbitrée
- [ ] Périmètre fonctionnel clarifié
- [ ] Objets métier identifiés
- [ ] Données autorisées définies
- [ ] Données interdites définies
- [ ] Garde-fous fonctionnels écrits
- [ ] Garde-fous techniques écrits
- [ ] Garde-fous data écrits
- [ ] Garde-fous UX écrits
- [ ] Garde-fous delivery écrits
- [ ] Parcours readonly ou équivalent disponible
- [ ] Reset / rollback prévu
- [ ] Première action ou transition candidate identifiée
- [ ] Tests attendus définis
- [ ] Risques de dérive identifiés

---

## 2. Décision phase 2

- [ ] Les règles sont stabilisées
- [ ] Le lot fonctionnel est cohérent
- [ ] Les actions autorisées sont explicites
- [ ] Les actions interdites sont explicites
- [ ] Les données restent maîtrisées
- [ ] Le reset / rollback est disponible
- [ ] Le niveau de risque est acceptable et nommé
- [ ] La réalisation groupée apporte plus de valeur que les micro-cycles
- [ ] La décision de passage en phase 2 est documentée

---

## 3. Checklist signaux de maturité

- [ ] Périmètre stable entre deux cycles
- [ ] Interdits non rediscutés à chaque itération
- [ ] Flux nominal ou première action décidé
- [ ] Parcours consultatif stable
- [ ] Tests couvrant le lot identifiés
- [ ] Reset / rollback opérationnel
- [ ] Équipe prête à livrer un lot visible

---

## 4. Checklist signaux de blocage

- [ ] Aucun désaccord persistant sur périmètre ou statuts
- [ ] Données autorisées / interdites cadrées
- [ ] Pas d'action métier contradictoire en attente
- [ ] Impacts techniques estimés
- [ ] Retour arrière défini
- [ ] Garde-fous suffisants pour le risque accepté

Si un item de blocage échoue, **rester en phase 1**.

---

## 5. Checklist réalisation groupée contrôlée

- [ ] Le cycle démarre depuis une branche propre
- [ ] Le lot est implémenté sans élargissement de périmètre
- [ ] Les écritures sont centralisées
- [ ] Les transitions sont contrôlées
- [ ] Les actions invalides sont rejetées
- [ ] Le reset / rollback fonctionne
- [ ] Les tests couvrent le parcours complet
- [ ] Les garde-fous sont vérifiés (grep / revue)
- [ ] Aucun interdit n'est introduit
- [ ] Le README ou la documentation projet est mis à jour

---

## 6. Checklist validation

- [ ] Build OK
- [ ] Tests OK
- [ ] Parcours nominal validé
- [ ] Reset / rollback validé
- [ ] Logs ou traces validés si applicables
- [ ] Garde-fous vérifiés
- [ ] Limites explicitées
- [ ] Irritants identifiés
- [ ] Décision de validation formalisée

---

## 7. Checklist clôture de cycle

- [ ] Livrable du cycle produit
- [ ] Build / tests OK si applicable
- [ ] Garde-fous vérifiés
- [ ] Summary ou document de clôture rédigé
- [ ] Prochaine étape recommandée
- [ ] Working tree propre (hors fichiers non suivis acceptés)
- [ ] Pas de push / PR sans demande explicite

---

## 8. Checklist capitalisation

- [ ] Summary de clôture produit
- [ ] Validation fonctionnelle produite si applicable
- [ ] Script de démonstration produit si nécessaire
- [ ] REX produit si apprentissage significatif
- [ ] Enseignements méthode identifiés
- [ ] Standard SFIA mis à jour si nécessaire
- [ ] Template mis à jour si nécessaire
- [ ] Famille de prompts mise à jour si nécessaire

---

## 9. Checklist avant diffusion / publication

- [ ] Standard relu (hardening à jour)
- [ ] Terminologie Controlled Delivery harmonisée
- [ ] Exemples terrain clairement marqués comme exemples
- [ ] Limites et anti-patterns explicites
- [ ] Pas de données sensibles dans les documents
- [ ] Décision de publication explicite (hors scope par défaut : Notion, push, PR)
- [ ] Package ou index de navigation préparé si diffusion externe

**Note :** la publication Notion ou toute diffusion externe reste un cycle dédié, jamais implicite.
