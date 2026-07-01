# SFIA — Controlled Delivery Checklist

**Domaine SFIA** : Delivery Method  
**Statut** : Draft  
**Référence** : [`controlled-delivery-standard.md`](controlled-delivery-standard.md)

---

## 1. Checklist phase 1

- [ ] Go / no-go formalisé
- [ ] Stack ou approche technique arbitrée
- [ ] Périmètre fonctionnel clarifié
- [ ] Objets métier identifiés
- [ ] Données autorisées définies
- [ ] Données interdites définies
- [ ] Garde-fous techniques écrits
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
- [ ] Le niveau de risque est acceptable
- [ ] La réalisation groupée apporte plus de valeur que les micro-cycles
- [ ] La décision de passage en phase 2 est documentée

---

## 3. Checklist réalisation groupée

- [ ] Le cycle démarre depuis une branche propre
- [ ] Le lot est implémenté sans élargissement de périmètre
- [ ] Les écritures sont centralisées
- [ ] Les transitions sont contrôlées
- [ ] Les actions invalides sont rejetées
- [ ] Le reset / rollback fonctionne
- [ ] Les tests couvrent le parcours complet
- [ ] Les garde-fous sont vérifiés
- [ ] Aucun interdit n'est introduit
- [ ] Le README ou la documentation projet est mis à jour

---

## 4. Checklist validation

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

## 5. Checklist capitalisation

- [ ] Summary de clôture produit
- [ ] Validation fonctionnelle produite
- [ ] Script de démonstration produit si nécessaire
- [ ] REX produit
- [ ] Enseignements méthode identifiés
- [ ] Standard réutilisable mis à jour
- [ ] Template réutilisable mis à jour
- [ ] Famille de prompts mise à jour
