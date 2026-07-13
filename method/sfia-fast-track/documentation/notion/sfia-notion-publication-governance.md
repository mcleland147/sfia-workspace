# SFIA Notion — Publication Governance

**Document :** `method/sfia-fast-track/documentation/notion/sfia-notion-publication-governance.md`
**Horodatage :** 2026-07-13 12:53 Europe/Paris (CEST)
**Cycle :** Préparation Notion — Cycle 1 — Conception fonctionnelle
**Statut :** **Candidate** — contrat gouvernance — **aucune publication**
**Branche :** `conception/sfia-notion-product-space`
**Références :** `sfia-knowledge-layer.md` ; `prompts/templates/09-prepare-notion-mapping.md` ; `sfia-rules-and-guardrails.md`

---

## 1. Objectif

Définir les règles de gouvernance entre **Git (source de vérité)** et **Notion (couche éditorialisée)** pour l'espace produit SFIA — sans activer sync, API ou CMP.

---

## 2. Hiérarchie des sources

| Rang | Source | Rôle |
|------|--------|------|
| **1** | Git `main` | Canonique — contenu, historique, décisions validées |
| **2** | Documents foundation / core validated | Norme méthode |
| **3** | Documents candidate | Exploratoires — publication Notion avec mention explicite |
| **4** | Notion | Synthèse, navigation, pédagogie — **jamais** autorité |
| **5** | `exports/notion/*.json` | **Exclu** — préparation historique non source |
| **6** | Espace Notion legacy | Archive — bannière — pas source active |

**Règle de divergence :** si texte, statut ou version diffèrent → **Git prime** ; Notion affiche alerte « source Git à vérifier » jusqu'à resync éditorial validé.

---

## 3. Types de contenu

| Type | Définition | Exemple | Modifiable dans Notion ? |
|------|------------|---------|--------------------------|
| **Contenu canonique** | Copie ou extrait d'un doc Git validated | Engineering principles (résumé) | Non — via Git seulement |
| **Synthèse éditoriale** | Texte rédigé pour Notion, trace Git | Page « Comprendre SFIA » | Oui — avec métadonnées source |
| **Extrait** | Citation courte d'un doc Git | Citation operating model § | Non — regénérer depuis Git |
| **Exemple** | Illustration pédagogique | Schéma cycle | Oui — si non normatif |
| **Schéma** | Diagramme Notion | Parcours 5 min | Oui |
| **Contenu marketing** | Pitch, valeur | Proposition de valeur | Oui — revue Morris |
| **Contenu interne** | Pilotage, réserves | Notes migration | Visibilité interne |
| **Archive** | Contexte historique | Bannière legacy | Lecture seule |

---

## 4. Règles de création

| Règle | Description |
|-------|-------------|
| G-C1 | Aucune page sans **entrée backlog** validée (MVP ou post-MVP) |
| G-C2 | Aucune page sans **propriétaire éditorial** et **audience** |
| G-C3 | Aucune page sans **source Git** référencée (ou justification « contenu marketing pur ») |
| G-C4 | Pas de création en masse depuis export JSON ou arborescence repo |
| G-C5 | Bases créées **après** validation architecture cycle 1 (Morris) |
| G-C6 | Cas d'usage projet : **gate Morris** sélection contenu |

---

## 5. Règles de modification

| Où | Qui | Comment |
|----|-----|---------|
| **Git** | Contributeur + PR + Morris si structurant | Flux normal SFIA |
| **Notion (synthèse)** | Propriétaire éditorial | Mise à jour manuelle post-merge Git source |
| **Notion (métadonnées)** | Propriétaire ou L1 assisté | Commit SHA, date sync |
| **Interdit** | Tout acteur | Modifier un texte canonique **uniquement** dans Notion |

---

## 6. Règles de validation

| Étape | Validateur | Critère |
|-------|------------|---------|
| Conception page (cycle 2) | Morris ou délégué méthode | Alignement IA + vision |
| Contenu éditorial (cycle 2) | Relecture qualité | Lisibilité, L1–L2, pas de jargon Git excessif |
| Pré-publication (cycle 3) | Morris GO | Checklist publication |
| Post-publication (cycle 4) | QA Notion | Métadonnées, liens, cohérence parcours |

**Aucune validation automatique ne remplace un GO Morris pour contenu structurant.**

---

## 7. Workflow de synchronisation cible

```text
Modification structurante (besoin métier/méthode)
  → modification Git (branche dédiée)
  → revue / PR
  → merge main
  → préparation éditoriale (cycle 2 — brouillon Git ou doc dérivé)
  → validation humaine (Morris si structurant)
  → mise à jour page Notion (manuelle L0)
  → ajout commit Git source + date sync
  → contrôle de cohérence (cycle 4 QA)
```

**Ce workflow est une cible — non exécuté au cycle 1.**

### 7.1 Synchronisation inverse (Notion → Git)

**Interdite** pour contenu canonique. **Autorisée** uniquement pour :
- retours UX informationnels (navigation, libellés) → **issue / demande Morris** → éventuel cycle doc Git.

---

## 8. Gestion des versions et statuts

| Champ | Source autorité | Valeurs |
|-------|-----------------|---------|
| Statut documentaire Git | Git frontmatter / cartographie | validated / candidate / historical / draft |
| Statut page Notion | Notion | brouillon / en revue / publié / obsolète |
| Version affichée | Git tag ou version doc | ex. v1.1, v2.4 baseline |
| Commit source | Git `main` | SHA complet |
| Dernière sync | Notion (manuel) | ISO date |

**Page obsolète :** bannière + lien vers remplaçant — pas suppression silencieuse.

---

## 9. Gestion des contenus candidate

| Situation | Règle |
|-----------|-------|
| Doc Git `candidate` | Notion peut publier avec badge **Candidate — non baseline** |
| Promotion validated Git | Mise à jour Notion **obligatoire** dans 30 jours (cible) |
| Doc Git deprecated | Notion → obsolète ou archive contextualisée |

---

## 10. Gestion des archives

- Archives Git : **pas de publication brute** — contextualisation en 1 paragraphe + lien si Morris valide.
- Espace Notion legacy : **renommer** « SFIA Legacy » ; bannière ; **pas de suppression** sans GO explicite.
- `archive/notion/*` : input historique uniquement — ne pas republier tel quel.

---

## 11. Gestion des liens Git

| Type lien | Format recommandé |
|-----------|-------------------|
| Chemin repo | `method/sfia-fast-track/core/sfia-knowledge-layer.md` |
| Lien GitHub | URL commit ou blob sur `main` |
| Branche handoff | **Ne pas** lier comme source canonique |

---

## 12. Propriétaires et responsabilités

| Rôle | Responsabilité |
|------|----------------|
| **Morris (L0)** | Gates publication, doctrine, arbitrages structurants |
| **Propriétaire éditorial Notion** | Cohérence pages assignées, sync post-merge |
| **Mainteneur méthode Git** | PR docs canoniques, statuts validated |
| **Contributeur cycle** | Produit brouillon éditorial cycle 2 — pas publish direct |
| **Cursor / ChatGPT** | Exécution cycles Git — **pas** publication Notion autonome |

---

## 13. Fréquence de revue

| Revue | Fréquence | Périmètre |
|-------|-----------|-----------|
| Cohérence métadonnées P0 | Mensuelle post-MVP | Commit SHA, statuts |
| Parcours utilisateur | Trimestrielle | 5 min / 30 min |
| Classification sources | Semestrielle ou post-lot migration | Matrice IA §7 |
| Gouvernance document | Annuelle ou post-baseline | Présent document |

---

## 14. Critères de dépublication

| Critère | Action |
|---------|--------|
| Source Git supprimée | Page → obsolète + archive |
| Contenu factuellement faux | Dépublication immédiate + correction |
| Doublon avec autre page | Fusion éditoriale |
| Fuite information interne | Restriction visibilité ou retrait |

---

## 15. Contrôle qualité

| Contrôle | Moment |
|----------|--------|
| Métadonnées complètes | Avant publish (cycle 3) |
| grep « raw sync », « auto-publish », `tools/cmp-001` | QA cycle 4 |
| Liens Git résolubles | QA cycle 4 |
| Pas de secret / token | Chaque commit handoff et publish |
| Parcours 5 min sans lien mort P0 | QA cycle 4 |

---

## 16. Sécurité et visibilité

| Niveau | Contenu | Notion |
|--------|---------|--------|
| **Public externe** | Marketing, valeur, cas d'usage sélectionnés | Workspace partagé contrôlé |
| **Contributeur** | Méthode, templates (métadonnées), gouvernance | Membres équipe |
| **Interne** | Cartographie, rapports exécution, roadmaps internes | **Exclu** ou espace privé Morris |
| **Secrets** | `.env`, tokens, CI secrets | **Jamais** |

---

## 17. Niveaux d'automatisation

| Niveau | Description | MVP | Décision structurante |
|--------|-------------|-----|----------------------|
| **L0** | Publication manuelle assistée | **Cible MVP** | Humain |
| **L1** | Contrôle métadonnées (script local, checklist) | Post-MVP | Humain valide |
| **L2** | Génération guidée brouillons éditoriaux Git | Post-MVP | Humain valide |
| **L3** | Publication bornée après validation explicite | Hors cible initiale | Morris GO chaque lot |
| **L4/L5** | Sync continue, CMP payload, API write | **Interdit** sans programme dédié | Morris + sécurité |

**Règle absolue :** aucune décision structurante (doctrine, baseline, gates, publication masse) **ne doit être automatisée**.

### 17.1 Automatisations explicitement interdites (cycle 1–3)

- Raw sync repository → Notion
- `sfia-notion-sync` sans GO explicite
- Modification `tools/cmp-001/`
- Régénération payload JSON CMP pour publish
- API Notion write depuis CI
- Webhook merge → update Notion sans revue

### 17.2 Automatisations autorisées (futures, bornées)

- L1 : script vérifiant présence champs métadonnées avant publish manuel
- L2 : génération brouillon Markdown **dans Git** (cycle 2) — pas dans Notion directement

---

## 18. Intégration avec cycles SFIA futurs

| Cycle SFIA | Rôle gouvernance |
|------------|------------------|
| **Cycle 2** — Préparation éditoriale Git | Produire contenus dérivés versionnés avant Notion |
| **Cycle 3** — Publication Notion contrôlée | Appliquer workflow §7 — L0 uniquement |
| **Cycle 4** — QA espace Notion | Contrôles §15 |

---

## 19. Verdict document

**Gouvernance Git ↔ Notion définie — L0 MVP — interdictions raw sync et CMP explicites.**

*Aucune publication. Aucune synchronisation.*
