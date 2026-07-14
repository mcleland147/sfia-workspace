# 05 — Contrat éditorial — SFIA Discovery Experience

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **Horodatage** | 2026-07-14 18:10 Europe/Paris (CEST) |
| **Branche** | `documentation/sfia-discovery-product-design` |
| **HEAD** | `14446b91019c1e320c12533124201b9a3dd4863d` |

---

## 1. Voix éditoriale

| Dimension | Règle |
|-----------|-------|
| Ton | Confiant, concret, pédagogique — jamais arrogant |
| Personne | « Vous » pour le lecteur ; « SFIA » en troisième personne |
| Registre | Métier d'abord, technique en annexe |
| Longueur phrases | ≤ 25 mots en corps principal |
| Analogies | Autorisées (équipe virtuelle, usine logicielle) — pas de hype |

---

## 2. Niveau de langage

| Audience | Niveau |
|----------|--------|
| Dirigeant / prospect | B1–B2 métier |
| PO / PMO | B2 avec termes SFIA définis |
| Technique | B2–C1 avec liens Git |
| Glossaire | Obligatoire pour tout terme SFIA non trivial |

---

## 3. Rapport métier / technique

- **80/20** métier/valeur sur Actes I–VI
- **20/80** technique sur Acte VII
- Jamais de dump Git dans le corps narratif
- Schémas ASCII ou visuels — pas de code exécutable

---

## 4. Règles de storytelling

1. Toujours un **protagoniste** (NovaBuild ou persona)
2. Toujours un **conflit** (chaos projet / IA libre)
3. Toujours une **preuve** avant une promesse
4. Distinction **observation / hypothèse / recommandation / décision Morris**
5. Pas de cliffhanger sans résolution dans le parcours 45 min

---

## 5. Frontière preuve / promesse

| Autorisé | Interdit |
|----------|----------|
| « Chantiers360 a produit X » (sourcé Git) | « SFIA double votre CA » |
| « Réduit le rework **lorsque** le cadre est suivi » | « Zéro bug » |
| « Morris valide les gates structurants » | « Plus besoin de chef de projet » |

---

## 6. Règles d'usage des exemples

- Projets réels : **synthèse** uniquement — gate Morris pour contenu client
- **NovaBuild** : cas pédagogique **composite validé** — entreprise et récit fictifs ; catégories de livrables inspirées d'actifs SFIA vérifiables ; jamais présenté comme client réel
- Captures : autorisées si anonymisées
- Pas de données client identifiables

### Règle chiffres et promesses quantitatives (R2)

> Aucun chiffre de performance, de coût, de délai, de réduction du risque ou de succès ne peut être publié sans source vérifiable et qualification explicite du contexte.

---

## 7. Confidentialité méthodologique

**Principe :** le lecteur comprend capacités et valeur **sans** reconstruire SFIA intégralement.

| Catégorie | Notion Discovery | Git |
|-----------|------------------|-----|
| Public / démontrable | Valeur, rôles, types livrables | — |
| Pédagogique | Cycles simplifiés, schéma operating model | Détail |
| Repository | Index, renvois | Canonique |
| Protégé / non publié | — | Prompt catalog intégral, routing exhaustif, automation engines, seuils internes |

---

## 8. Matrice d'information

| Information | Niveau Discovery | Exemple |
|-------------|------------------|---------|
| « SFIA utilise des cycles » | Public | Acte II |
| « 15 types de cycles existent » | Pédagogique | Acte VII résumé |
| « Matrice routage complète » | Repository | Lien Git |
| « Texte prompt catalog §X » | Protégé | Non publié |
| « Seuils Critical implicites » | Protégé | Non publié |

---

## 9. Termes autorisés / déconseillés / interdits

| Terme | Statut |
|-------|--------|
| Cycle, gate, review pack (définis) | Autorisé |
| Baseline (v2.4 only) | Autorisé avec qualification |
| Candidate v2.5 | Autorisé avec badge |
| « SFIA 3.0 » | **Interdit** |
| « Autopilot », « magic » | **Interdit** |
| « Baseline UX » / « standard officiel » | **Interdit** (Candidate) |
| Jargon Git non expliqué (rebase, cherry-pick) | Déconseillé Actes I–VI |

---

## 10. Comparaisons

### vs équipe projet classique

- SFIA **cadre** et **accélère** — ne remplace pas la réflexion métier
- Morris **tranche** — ne disparaît pas

### vs ChatGPT / Cursor libres

- IA libre = **vitesse sans gouvernance**
- SFIA = **vitesse + traçabilité + gates + capitalisation**

---

## 11. Garde-fous promesses

- Aucune garantie délai absolu
- Aucune garantie coût fixe
- Aucune promesse conformité réglementaire sans preuve
- IA = assistée, pas autonome

---

## 12. Niveau de détail maximal par type

| Type page | Max |
|-----------|-----|
| Acte narratif | 3 écrans desktop |
| Fiche persona | 1 écran |
| Galerie livrable | 5 items visibles + lien « plus dans Git » |
| Annexe technique | 2 écrans + lien Git |

---

## 13. Critères qualité page

- Une intention · 30 secondes en tête · Preuve · CTA · Pas de mur de texte · Mobile scannable

---

## 14. Critères d'arrêt

Page trop longue si > 4 écrans sans toggle · Trop abstraite si aucun exemple en 2 premiers paragraphes

---

## Liens

→ [08 Acceptation](08-sfia-discovery-acceptance-framework.md) · [01 Vision](01-sfia-discovery-product-vision.md)
