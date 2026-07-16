# ACTE VI.3 — Équipe technique

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — brouillon éditorial Discovery |
| **Cycle** | PD-06A — persona VI.3 |
| **Acte** | VI — Se projeter |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **Source de vérité** | Git |
| **Branche** | `documentation/sfia-discovery-acts-06-07-editorial` |
| **HEAD / base** | `96d1580e33baa1ec6e97622c7f2f59a4787ec510` |
| **Horodatage** | 2026-07-15 14:10 Europe/Paris (CEST) |
| **Niveau lecture** | L2–L3 contrôlée |
| **Durée cible** | 5–6 minutes |
| **Implémentation Notion** | Réalisée et validée par Morris — source Git PD-06A |
| **Réaction recherchée** | « Je sais ce que Cursor peut exécuter — et où m'arrêter. » |

---

## 1. Question initiale

> **Qu'est-ce que Cursor et les autres assistants IA peuvent réellement exécuter, et sous quelles limites ?**

---

## 2. Problèmes reconnus

| Irritant | Risque |
|----------|--------|
| **Spécifications instables** | Code jetable · dette invisible |
| **Prompts ad hoc** | Aucune reprise · contexte perdu |
| **Changements hors scope** | Fichiers modifiés non autorisés |
| **QA insuffisante** | Merge sans preuve |
| **Branches divergentes** | Conflits · historique illisible |
| **Perte de contexte** | Nouveau dev ne comprend pas pourquoi |

---

## 3. Ce que SFIA change pour vous

| Changement | Application |
|------------|-------------|
| **Git source de vérité** | Le repo prime sur le chat |
| **Contrats d'exécution bornés** | Fichiers autorisés · interdits · stop conditions |
| **Branches dédiées** | Travail isolé · PR avant merge |
| **Tests et preuves** | QA proportionnée au profil |
| **Revue humaine** | Gates avant merge structurant |
| **Reprise** | Historique · review packs · décisions |

Cursor **exécute** dans un périmètre — il ne redéfinit pas seul le produit.

---

## 4. Valeur attendue — sans chiffre inventé

- **Moins de dette invisible** — si le périmètre fichier est respecté ;
- **Meilleure traçabilité** des changements via PR ;
- **Preuves vérifiables** avant merge — tests · QA · review pack ;
- **Capacité de reprise** — un pair peut relire Git sans tout le contexte chat.

Pas de promesse de **vélocité** ni d'**absence de bug**.

---

## 5. Votre rôle dans le dispositif

| Vous… | Vous ne… |
|-------|----------|
| Qualifiez la **faisabilité** technique | Décidez seul du scope produit |
| **Exécutez** ou supervisez l'exécution | Contournez les gates merge |
| Produisez **preuves** — tests · diffs · QA | Exposez secrets ou tokens |
| Remontez **risques** et réserves | Publiez la méthode interne complète |
| Respectez les **fichiers autorisés** | Force-push ou reset destructif sans GO |

---

## 6. Livrables que vous consultez ou produisez

| Livrable | Rôle technique |
|----------|----------------|
| **Branches · PR** | Isolation · revue · merge |
| **Diffs · stat** | Preuve de périmètre |
| **Tests · QA reports** | Validation avant merge |
| **Review pack** | Synthèse pour décideur |
| **Runbooks · readiness** | Exploitation — si dans le périmètre cycle |

Vocabulaire autorisé : Git · branche · PR · QA · review pack · runtime.

---

## 7. Ce que SFIA ne fait pas à votre place

- Choisir l'**architecture structurante** sans gate ;
- **Valider** seul la sécurité ou la conformité réglementaire ;
- **Garantir** zéro régression ;
- Remplacer une **revue pair** humaine quand le risque l'exige ;
- Divulguer ou reconstruire la **méthode interne complète** via Discovery.

---

## 8. Prérequis et limites

| Prérequis | Limite |
|-----------|--------|
| Repository Git **accessible** | Sans Git, le cadre SFIA perd sa source de vérité |
| Cadrage et backlog **stables** assez pour exécuter | Specs instables → rework malgré le cadre |
| Discipline **fichiers autorisés** | Hors périmètre = stop condition |

---

## 9. Parcours recommandé dans Discovery

```text
Acte II → Acte III.3 (delivery/QA) → Acte IV (familles 3–4) → Acte V → VI.3 → Acte VII
```

Durée indicative **20–30 minutes** pour la projection technique.

---

## 10. Prochaine action pédagogique

1. Lire [III.3 Delivery et QA](sfia-discovery-act-03-3-delivery-and-qa-editorial-draft.md) ;
2. Parcourir [Acte V](sfia-discovery-act-05-why-it-works-editorial-draft.md) — mécanismes Git et validation ;
3. Explorer [Acte VII](sfia-discovery-act-07-explore-the-method-editorial-draft.md) — templates · gouvernance · setup ;
4. Approfondir depuis **Git** — routing guide · templates — pas depuis Discovery seul.

---

## 11. Conflit · résolution · preuve

| | |
|--|--|
| **Conflit** | « L'IA code vite » vs « personne ne peut reprendre le repo ». |
| **Résolution** | Périmètre borné · PR · QA · review pack · gates. |
| **Preuve** | Acte III.3 · familles Livrer/Vérifier Acte IV · mécanismes Acte V · persona PD-04 §1.3. |

---

## 12. Navigation

**← Précédent :** [VI.2 — Chef de projet / PO](sfia-discovery-act-06-2-project-manager-po-editorial-draft.md)

**Hub :** [Acte VI](sfia-discovery-act-06-project-yourself-editorial-draft.md)

**Suivant → :** [VI.4 — ESN / partenaire](sfia-discovery-act-06-4-esn-partner-editorial-draft.md)

---

## 13. Sources Git (gouvernance)

| Élément | Source |
|---------|--------|
| Persona technique | `discovery-product-design/04-sfia-discovery-personas-and-reading-journeys.md` §1.3 |
| Delivery · QA | Acte III.3 editorial draft |
| Garde-fous | `core/sfia-rules-and-guardrails.md` (principes — non copiés) |

**Non exposé lecteur :** prompt catalog intégral · routage exhaustif · protected paths · seuils Critical implicites · secrets CI.

---

## Contenu lecteur — corps principal (PD-06B)

*Sections 1–12 ci-dessus.*
