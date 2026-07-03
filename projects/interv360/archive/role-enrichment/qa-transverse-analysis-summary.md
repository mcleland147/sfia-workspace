# Interv360 — Synthèse analyse QA transverse

**Projet** : PRJ-INTERV360  
**Document source** : `qa-transverse-analysis.md`  
**Type** : Synthèse gouvernance  
**Statut** : Draft

---

## Objectif

Intégrer le **rôle QA / Testeur** dans la relecture des livrables de cadrage Interv360, en évaluant clarté, cohérence, testabilité future et risques — **sans recette ni cas de tests**.

---

## Synthèse

Le cadrage Interv360 est **structurellement mature** : vision, parcours SAV, objets métier, **7 arbitrages MVP validés**, brief UX validé avec **8 écrans** et **10 parcours critiques**. La traçabilité **arbitrage → règle → écran → parcours** est un atout pour la qualité future.

La **testabilité opérationnelle** reste **partielle** : **56 règles RG-*** identifiées mais majoritairement « À définir », **8 points ouverts** avant maquette, mapping statuts et conditions de clôture à préciser.

Le MVP est **riche** (double dashboard, intégrations simulées, gestion erreurs) — les garde-fous anti-surproduction sont respectés (pas backlog, pas Figma sans brief, pas delivery).

---

## Points de vigilance

- Détail des **règles métier** insuffisant pour une future vérification fine.
- **Surcharge dashboard** : 12 + 10 KPI — risque confusion SAV vs dirigeant.
- **Points ouverts UX** : format CR, mobile technicien, wording statuts, représentation erreurs.
- **Géolocalisation et IA** encore non arbitrées pour le MVP.
- **Anti-doublon cross-canal** (RG-C04) non détaillé malgré canaux multiples cadrés.

---

## Recommandations

1. Trancher les **8 points ouverts** du brief UX avant Figma.
2. Détailler en priorité **RG-C04, RG-C05, RG-I05, RG-I06, RG-R02, RG-R05**.
3. Stabiliser **libellés de statuts** et différenciation des deux dashboards.
4. Arbitrer **géoloc / IA** in ou out MVP.
5. Maintenir le **rôle QA en revue transverse** lors de la consolidation des règles.

---

## Garde-fous

- Aucun **cas de test** produit.
- Aucun **scénario de test** produit.
- Aucun **backlog** produit.
- Aucun **delivery** ouvert.
- Aucune publication Notion dans cette tâche.

---

*Synthèse analyse QA transverse — Interv360 — SFIA.*
