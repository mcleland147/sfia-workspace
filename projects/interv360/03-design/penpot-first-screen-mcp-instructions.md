# Interv360 — Instructions MCP Penpot — Premier écran pilote

**Type** : Instructions MCP design  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 03-design  
**Outil cible** : Penpot self-host  
**Écran pilote** : Liste demandes (E2)  
**Frame cible** : `Liste demandes — V1 pilote`  
**Page Penpot cible** : `03 — Screens`  
**Statut** : Draft  
**Branche** : `design/interv360-penpot-first-screen-instructions`  
**Source documentaire** : Git / sfia-workspace  
**Source visuelle cible** : Penpot  
**Documents associés** : [`penpot-project-reference.md`](penpot-project-reference.md), [`penpot-screen-prioritization.md`](penpot-screen-prioritization.md)

---

## 1. Objectif

Ce document **prépare la première session MCP Cursor** destinée à produire une frame **low / mid fidelity** dans Penpot.

Il **n'exécute pas** la création de maquette. Il prépare :

- les **sources Git** à lire avant action ;
- les **préconditions MCP** ;
- la **structure de frame** attendue ;
- les **composants** à esquisser ;
- le **prompt MCP** prêt à copier dans Cursor ;
- les **critères de revue humaine** après session.

**Git = source documentaire. Penpot = source visuelle. Cursor = orchestration MCP.**

---

## 2. Rappel du choix pilote

**Écran pilote : Liste demandes (E2)** — page `03 — Screens`.

| Raison | Détail |
|--------|--------|
| Écran central du parcours SAV | Point d'accès principal P1 Qualification et P9 Création multi-canal |
| Complexité maîtrisée | Tableau, filtres, badges — sans KPI ni alertes hiérarchisées |
| Base composants réutilisables | Header, navigation, tableau, badges STAT → page `06 — Components` |
| Bon test MCP | Première frame structurante ; valide la chaîne specs Git → Penpot |
| Moins risqué qu'un dashboard | Pas de règle « source de vérité » aussi critique ; pas de KPI top 5–7 |
| Moins spécifique que le mobile | Viewport desktop standard ; pas de contraintes viewport terrain |

Voir : [`penpot-screen-prioritization.md`](penpot-screen-prioritization.md) §6.

---

## 3. Sources Git obligatoires avant action MCP

| Source | Usage dans la frame |
|--------|---------------------|
| [`penpot-project-reference.md`](penpot-project-reference.md) | Instance Penpot, pages, garde-fous fonctionnels, règles MCP |
| [`penpot-screen-prioritization.md`](penpot-screen-prioritization.md) | Choix pilote, composants dès le pilote, ordre de production |
| [`../06-ux-ui/screen-inventory.md`](../06-ux-ui/screen-inventory.md) | Inventaire écran 3 — Liste demandes ; parcours, acteurs, écarts Figma V1 |
| [`../06-ux-ui/screen-functional-specs.md`](../06-ux-ui/screen-functional-specs.md) | §6 Spécification Liste demandes — colonnes, actions, états, règles |
| [`../06-ux-ui/user-journeys.md`](../06-ux-ui/user-journeys.md) | P1 Qualification, P9 Multi-canal — contexte parcours |
| [`../06-ux-ui/ux-ui-summary.md`](../06-ux-ui/ux-ui-summary.md) | Synthèse cycle UX/UI ; décisions transposées |
| [`../06-ux-ui/ux-ui-cycle-closure.md`](../06-ux-ui/ux-ui-cycle-closure.md) | Clôture reprise doc — périmètre validé, pas de nouvelle règle |

**Référence visuelle V1 (lecture seule) :** `02-architecture/figma-first-draft-screens/06-liste-demandes.png`

---

## 4. Préconditions MCP

Checklist **obligatoire** avant la session de création :

| # | Précondition | Vérification |
|---|--------------|--------------|
| 1 | Penpot accessible | `http://localhost:9001` répond |
| 2 | Fichier Penpot ouvert | Fichier cible ouvert dans le navigateur |
| 3 | Nom fichier (optionnel) | Renommer manuellement en `Interv360 — Design V2` si souhaité |
| 4 | Plugin MCP connecté | Bouton **MCP** → état **connected** |
| 5 | Cursor configuré | Endpoint self-host local (config MCP utilisateur — **hors Git**) |
| 6 | Test lecture seule | Prompt §5 exécuté avec succès |
| 7 | Page cible | `03 — Screens` existe dans le fichier |
| 8 | Pas de token dans le prompt | Ne **jamais** coller d'URL MCP ni `userToken` dans un prompt commité |
| 9 | Scope limité | **Une seule frame** prévue dans cette session |

**Sécurité :** l'endpoint MCP self-host local contient un `userToken` dans la configuration Cursor. Ce token **ne doit jamais** être copié dans Git, dans ce document, ni dans un prompt versionné.

Voir : [`docs/tooling/penpot/penpot-mcp-self-host-rex.md`](../../../docs/tooling/penpot/penpot-mcp-self-host-rex.md).

---

## 5. Test lecture seule préalable

Exécuter **avant** toute création de frame :

```
Inspecte le fichier Penpot actuellement ouvert. Liste les pages disponibles, confirme l'existence de `03 — Screens`, puis ne modifie rien.
```

**Résultat attendu :**

| Critère | Attendu |
|---------|---------|
| Pages listées | 8 pages SFIA (`00 — Cover` … `99 — Archive`) |
| `03 — Screens` | Confirmé présent |
| Modifications | **Aucune** |

Si le test échoue (`No userToken found`, `No plugin instance connected`), corriger config ou plugin — **ne pas** lancer la création.

---

## 6. Frame cible

| Élément | Valeur |
|---------|--------|
| Page | `03 — Screens` |
| Frame | `Liste demandes — V1 pilote` |
| Fidélité | Low / mid fidelity |
| Format recommandé | Desktop standard (ex. 1440 × 900 ou board équivalent) |
| Objectif | Écran pilote structurant — prototype de travail |
| Export | Non obligatoire |
| Statut | Prototype de travail, **non final** |

---

## 7. Structure fonctionnelle attendue

Zones de la frame, de haut en bas :

| # | Zone | Rôle |
|---|------|------|
| 1 | **Header applicatif** | Contexte application, utilisateur connecté |
| 2 | **Navigation principale** | Liens visuels : Demandes, Planning, Dashboard (sans implémenter les autres écrans) |
| 3 | **Titre page** | `Demandes SAV` |
| 4 | **Zone filtres / recherche** | Statut, canal, période + recherche texte |
| 5 | **Tableau des demandes** | 5 à 7 lignes fictives |
| 6 | **Badges statuts métier** | STAT-01, STAT-02, STAT-03 dans colonne statut |
| 7 | **Indicateurs retard / anomalie** | STAT-07 et STAT-08 — **distincts** de la colonne statut |
| 8 | **Actions contextuelles** | Bouton primaire + action ligne `Ouvrir` |
| 9 | **Zone message métier / alerte discrète** | Emplacement info ou alerte légère (optionnel pilote) |

---

## 8. Contenu minimal recommandé

| Zone | Contenu attendu |
|------|-----------------|
| Lignes tableau | **5 à 7** demandes fictives |
| Colonnes | Référence, client, canal, priorité, statut, date, affectation, indicateurs, action |
| Statuts colonne statut | **STAT-01** (À qualifier), **STAT-02** (Qualifiée), **STAT-03** (Planifiée) minimum |
| STAT-07 | Badge ou icône **Retard** — indicateur parallèle, **pas** statut métier |
| STAT-08 | Badge ou icône **Anomalie d'intégration** — indicateur parallèle, **pas** statut métier |
| Canaux | CRM, Email, Manuel (filtre + valeurs lignes) |
| Bouton primaire | `Nouvelle demande` — sobre, un seul CTA principal |
| Filtres | Statut, canal, période |
| Recherche | Champ texte « Rechercher une demande » |
| Action ligne | Lien ou bouton `Ouvrir` par ligne |

Alignement spec : `screen-functional-specs.md` §6.4–6.6.

---

## 9. Wording recommandé

Libellés **métier** — pas de jargon technique CRM ou sync.

| Élément | Libellé recommandé |
|---------|-------------------|
| Titre page | Demandes SAV |
| Bouton primaire | Nouvelle demande |
| Recherche | Rechercher une demande |
| Filtre statut | Statut |
| Filtre canal | Canal |
| Filtre période | Période |
| Statut STAT-01 | À qualifier |
| Statut STAT-02 | Qualifiée |
| Statut STAT-03 | Planifiée |
| Indicateur retard (STAT-07) | Retard |
| Indicateur anomalie (STAT-08) | Anomalie d'intégration |
| Action ligne | Ouvrir |

Wording statuts : unifié FR — voir `status-mapping.md` / specs UX/UI.

---

## 10. Garde-fous fonctionnels

| Garde-fou | Application |
|-----------|-------------|
| Pas de nouveaux statuts | STAT-01 à STAT-08 uniquement |
| STAT-07 ≠ statut métier | Indicateur **Retard** — badge parallèle |
| STAT-08 ≠ statut métier | Indicateur **Anomalie d'intégration** — badge distinct |
| Liste ≠ dashboard | Pas de KPI consolidés, pas de cartes pilotage |
| Pas de KPI complexes | Pas de top 5–7 KPI, pas de tendances |
| Clôture non bloquée | Ne pas suggérer que sync CRM bloque la liste |
| STAT-08 ne rouvre pas | Anomalie visible ≠ retour cycle intervention |
| Pas de parcours inventé | P1, P9, P7 secondaire — pas d'autre parcours |
| Fidélité | Rester **low / mid fidelity** — pas de polish final |

---

## 11. Garde-fous MCP

| Garde-fou | Application |
|-----------|-------------|
| Page unique | Travailler **uniquement** sur `03 — Screens` |
| Frame unique | Créer **une seule** frame : `Liste demandes — V1 pilote` |
| Pages | Ne **pas** supprimer de page |
| Autres pages | Ne **pas** modifier `00`, `01`, `02`, `04`, `05`, `06`, `99` |
| Fichier | Ne **pas** renommer le fichier via MCP (`file.name` read-only) |
| Export | Ne **pas** exporter automatiquement (PNG, SVG, PDF) |
| Design system | Ne **pas** créer un design system complet — esquisses suffisantes |
| Autres écrans | Ne **pas** créer d'autres frames écran dans cette session |
| Synthèse | Produire un **résumé** après action (éléments créés, écarts, limites) |

Voir : [`penpot-cursor-agent-rules.md`](../../../docs/tooling/penpot/penpot-cursor-agent-rules.md) §7.

---

## 12. Prompt MCP de création de frame

Bloc **prêt à copier** dans Cursor — **sans token** :

```
Tu es connecté à Penpot via MCP.

Objectif : créer une première frame pilote Interv360 dans Penpot, en low/mid fidelity.

Avant toute modification :
1. Lis les sources Git suivantes :
   - projects/interv360/03-design/penpot-project-reference.md
   - projects/interv360/03-design/penpot-screen-prioritization.md
   - projects/interv360/06-ux-ui/screen-inventory.md
   - projects/interv360/06-ux-ui/screen-functional-specs.md
   - projects/interv360/06-ux-ui/user-journeys.md
   - projects/interv360/06-ux-ui/ux-ui-summary.md
2. Inspecte le fichier Penpot actuellement ouvert.
3. Confirme que la page `03 — Screens` existe.
4. Ne modifie rien si la page cible n'existe pas ou si le plugin MCP n'est pas connecté.

Action autorisée :
Créer uniquement une frame nommée :
`Liste demandes — V1 pilote`
sur la page :
`03 — Screens`

Contenu attendu :
- écran desktop low/mid fidelity ;
- header applicatif ;
- navigation principale simple ;
- titre `Demandes SAV` ;
- zone filtres / recherche ;
- tableau de demandes avec 5 à 7 lignes fictives ;
- colonnes : référence, client, canal, priorité, statut, date, affectation, indicateurs, action ;
- badges statuts STAT-01, STAT-02, STAT-03 minimum ;
- indicateur `Retard` pour STAT-07 distinct du statut ;
- indicateur `Anomalie d'intégration` pour STAT-08 distinct du statut ;
- bouton `Nouvelle demande` ;
- action ligne `Ouvrir`.

Garde-fous :
- ne crée aucun nouveau statut ;
- ne transforme pas l'écran en dashboard ;
- n'ajoute pas de KPI complexes ;
- ne représente pas STAT-07 ou STAT-08 comme statuts métier ;
- ne crée pas d'autre écran ;
- ne modifie pas les autres pages ;
- ne supprime rien ;
- n'exporte rien ;
- ne crée pas de design system complet ;
- reste en low/mid fidelity.

Après action :
- résume les éléments créés ;
- liste les composants esquissés ;
- indique les écarts ou limites ;
- confirme qu'aucune autre page n'a été modifiée.
```

---

## 13. Critères de revue humaine

Checklist après exécution MCP réelle :

| # | Critère | Validé |
|---|---------|:------:|
| 1 | La frame est sur `03 — Screens` | ☐ |
| 2 | La frame s'appelle `Liste demandes — V1 pilote` | ☐ |
| 3 | La frame reste low / mid fidelity | ☐ |
| 4 | Les statuts ne sont pas inventés | ☐ |
| 5 | STAT-07 est un indicateur **Retard** distinct | ☐ |
| 6 | STAT-08 est un indicateur **Anomalie d'intégration** distinct | ☐ |
| 7 | L'écran ne devient pas un dashboard | ☐ |
| 8 | Les libellés sont métier (pas techniques) | ☐ |
| 9 | Aucune autre page n'a été modifiée | ☐ |
| 10 | Aucun export n'a été généré automatiquement | ☐ |

---

## 14. Résultat attendu de la session suivante

Après **exécution MCP réelle** de la frame pilote, créer :

**[`penpot-first-screen-review.md`](penpot-first-screen-review.md)**

Objectif :

- documenter ce qui a été produit dans Penpot ;
- lister les composants esquissés ;
- comparer frame vs `screen-functional-specs.md` §6 ;
- consigner la **revue humaine** et les ajustements nécessaires ;
- préparer la Vague 1 suite : **Fiche demande SAV**.

---

## 15. Hors périmètre

Ce document **ne produit pas** :

- création immédiate de frame dans Penpot (session MCP séparée) ;
- production des 9 écrans ;
- design system complet ;
- maquette finale ;
- export visuel ;
- backlog ;
- user stories ;
- tests ;
- code ;
- API ;
- SQL ;
- BPMN ;
- delivery.

---

*Instructions MCP Interv360 — Premier écran pilote — Draft.*
