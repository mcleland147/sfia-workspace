# Interv360 — UX/UI Design Research & Benchmark

**Projet** : PRJ-INTERV360  
**Phase source** : 02-architecture  
**Phase cible** : UX/UI / Figma  
**Statut** : Draft  
**Type** : Recherche UX/UI & benchmark design  
**Source** : note d'ouverture Figma + UX/UI brief + ADR P1/P2 + bonnes pratiques UX/UI externes  
**Objet** : renforcer la qualité du futur design Figma

---

## 1. Objectif du document

Ce document **enrichit la préparation Figma** par une couche de **recherche UX/UI, benchmark design et bonnes pratiques** applicables au MVP Interv360.

Il complète `ux-ui-figma-opening-note.md` (périmètre et garde-fous) sans le remplacer.

Ce document :

- **ne produit pas** de maquette, wireframe ou fichier Figma ;
- **ne produit pas** de backlog, user stories ou code ;
- **sert à augmenter la qualité** du futur design — design system, composants, dashboards, accessibilité, microcopy.

Les références externes (NN/g, Figma, Material, WCAG, design systems enterprise) sont **synthétisées en recommandations** — pas copiées ni citées longuement.

---

## 2. Principes UX/UI retenus

**Lisibilité et action**

- lisibilité avant richesse fonctionnelle ;
- action claire par écran — une intention principale identifiable ;
- hiérarchie visuelle forte — titre → KPI/alerte → contenu → actions secondaires ;
- dashboard orienté **décision et action**, pas simple vitrine de chiffres ;
- sobriété cognitive — limiter KPI, alertes et colonnes au socle MVP.

**Cohérence et différenciation**

- cohérence des **statuts** sur tous les écrans (badges, couleurs sémantiques, libellés) ;
- différenciation **métier / technique** — retards opérationnels ≠ anomalies intégration ;
- composants **réutilisables** — design system minimal mais propre.

**Contextes d'usage**

- **accessibilité dès le départ** — contraste, labels, focus, pas couleur seule ;
- **mobile sobre** pour technicien — une colonne, actions terrain prioritaires ;
- **desktop optimisé** pour pilotage SAV, planning, anomalies, vue dirigeant.

---

## 3. Benchmark UX — applications à observer

| Domaine | Références à observer | Ce qu'on cherche à apprendre |
|---------|----------------------|------------------------------|
| **Outils SAV / ticketing** | Zendesk, Freshdesk | Statuts ticket, priorités, files, filtres, fiche dossier scannable |
| **CRM / service** | Salesforce Service Cloud | Fiche client, historique, qualification, liens intervention |
| **ITSM / files** | Jira Service Management, ServiceNow | Priorités, statuts workflow, anomalies, reprise actionnable |
| **Field service** | Microsoft Dynamics Field Service | Fiche intervention terrain, CR mobile, planning technicien |
| **Clarté UI / sobriété** | Linear, Notion (patterns UI) | Hiérarchie typographique, espaces, densité maîtrisée |
| **Dashboards opérationnels** | Grafana, Datadog *(inspiration lisibilité uniquement)* | Cartes KPI, alertes, hiérarchie — **pas** supervision SIEM ni logs bruts |
| **Interfaces planning** | Patterns calendrier enterprise (Atlassian, Google Calendar admin) | Conflits visibles, créneaux, affectation rapide |
| **Mobile technicien** | Apps field service reconnues | Saisie minimale, gros CTA, preuves photo simples |
| **Design systems enterprise** | IBM Carbon, Atlassian, GOV.UK, Fluent UI | Tables, badges, forms, tokens, accessibilité documentée |

*Benchmark **conceptuel** — patterns réutilisables, pas copie visuelle ni fonctionnalités hors MVP.*

---

## 4. Principes design system

Un **design system minimal MVP** suffit pour Figma Interv360 :

| Couche | Contenu MVP |
|--------|-------------|
| **Tokens couleurs** | Primaire, neutres, sémantiques (succès, attention, danger, info) |
| **Tokens typographiques** | Échelle 4–5 niveaux : display KPI, titre page, section, body, caption |
| **Spacing scale** | 4, 8, 12, 16, 24, 32, 48 px (ou équivalent 4pt grid) |
| **Radius** | sm (4), md (8), lg (12) — cohérence cartes, inputs, badges |
| **Elevation / ombres** | 2–3 niveaux max — carte, modal/dropdown, alerte flottante |
| **Composants** | Voir §8 — variants par état (default, hover, focus, disabled, error) |
| **Nomenclature** | `Component/Variant/State` — ex. `Badge/Status/Success` |
| **Règles d'usage** | Un badge statut = couleur + label texte ; KPI = chiffre + label + trend optionnel |

**Garde-fou** : rester **léger** — pas de documentation DS exhaustive ; suffisant pour 8 écrans cohérents et capitalisable SFIA.

*Inspiré Figma variables/styles et patterns Carbon / Atlassian / Material — adapté MVP.*

---

## 5. Palette et sémantique couleur

Logique proposée **sans marque définitive** :

| Rôle | Usage | Garde-fou |
|------|-------|-----------|
| **Primaire** | Actions principales, liens clés | Contraste AA minimum sur fond clair |
| **Secondaire** | Actions secondaires, filtres actifs | Distincte du primaire |
| **Neutres** | Texte, bordures, backgrounds (50–900) | Fond page clair ; surfaces cartes blanches/gris très clair |
| **Succès** | Clôturé, signé, envoyé | Toujours + label texte |
| **Attention** | En retard, à qualifier, en attente | Limiter usage — risque alert fatigue |
| **Danger** | Échec, anomalie critique, refus | Pas pour tout échec non bloquant |
| **Information** | Info, trace, statut neutre actif | Différencier anomalies vs info |
| **Désactivé** | Actions non disponibles | Opacité + curseur + label |
| **Background** | Page, zone secondaire | Aéré — dashboards non denses |
| **Bordures** | Séparation légère tables/cartes | Subtiles — pas grille lourde |

**Garde-fous**

- ne pas se reposer **uniquement sur la couleur** — icône + texte + label ;
- respecter **contraste WCAG 2.2** (4.5:1 texte normal, 3:1 gros texte/UI) ;
- **limiter couleurs statutaires** — 4–5 sémantiques max visibles simultanément.

---

## 6. Typographie et hiérarchie

| Niveau | Usage | Recommandation |
|--------|-------|----------------|
| **Titre page** | H1 écran | 24–28 px, semibold — une seule H1 par écran |
| **Titre section** | Blocs dashboard, fiche | 18–20 px, semibold |
| **Labels** | Champs, colonnes, KPI label | 12–14 px, medium, couleur neutre secondaire |
| **Body** | Descriptions, historique | 14–16 px, regular, line-height 1.5 |
| **Microcopy** | Aide, hints, timestamps | 12 px, couleur neutre tertiaire |
| **Chiffres KPI** | Dashboards | 28–36 px, semibold/tabular nums — label dessous |
| **Badges** | Statuts | 11–12 px, uppercase ou sentence case cohérent |
| **Messages d'erreur** | Formulaires, anomalies | 14 px, danger + icône + action suggérée |

**Objectif** : écrans **scannables en 3–5 secondes** — utilisateur identifie statut et action suivante.

---

## 7. Layout et grille

| Contexte | Recommandation |
|----------|----------------|
| **Desktop dashboard** | Grille 12 colonnes ; KPI en rangées 3–4 cartes ; sidebar nav optionnelle |
| **Desktop tables** | Largeur confortable (min 1024) ; 5–7 colonnes max visibles ; colonnes secondaires en fiche |
| **Mobile technicien** | Une colonne ; CTA sticky bas ; pas tableaux larges |
| **Spacing** | Multiples de 8 ; padding carte 16–24 ; gap grille 16–24 |
| **Alignements** | Grille stricte cartes KPI ; alignement chiffres KPI à gauche ou centré (cohérent) |
| **Zones respirantes** | Marges page 24–32 ; ne pas remplir 100 % above the fold |
| **Above the fold** | Dashboard SAV : 4–6 KPI + 1 bloc alertes ; dirigeant : 4 KPI + 1 trend |

---

## 8. Composants clés à designer

| Composant | Usage Interv360 | Bonnes pratiques |
|-----------|-----------------|------------------|
| **Carte KPI** | Dashboard SAV, vue dirigeant | Chiffre + label + trend optionnel ; clic → liste filtrée |
| **Tableau filtrable** | Liste demandes, anomalies | En-têtes fixes ; statuts en badge ; actions ligne |
| **Badge statut** | Demande, intervention, CR | Couleur + texte ; mapping RG-I05 cohérent |
| **Badge notification** | Fiche demande, intervention | Envoyée / échec ; discret |
| **Badge signature** | CR, fiche intervention | Signée / non signée / refusée |
| **Badge anomalie** | Anomalies, dashboard | Gravité + statut reprise |
| **Bouton primaire** | Action principale écran | Un seul primaire visible par zone |
| **Bouton secondaire** | Annuler, filtrer, voir détail | Outline ou ghost |
| **Bouton danger** | Rejeter, supprimer (rare MVP) | Confirmé si destructif |
| **Champ formulaire** | Qualification, CR | Label visible ; erreur inline |
| **Select** | Priorité, statut, filtre | Options courtes ; valeur par défaut claire |
| **Filtres** | Listes, dashboards | Chips ou barre compacte ; reset visible |
| **Barre recherche** | Liste demandes | Placeholder métier ; pas recherche globale IA |
| **Timeline simplifiée** | Historique dossier | 5–8 événements max ; pas dump |
| **Carte intervention** | Planning, dashboard | Client, créneau, technicien, statut |
| **Zone signature** | CR / clôture | Optionnelle ; « Passer » visible |
| **Compteur preuves/photos** | Fiche intervention, CR | « 3 photos » ; pas galerie lourde |
| **Alerte** | Dashboard, fiche | Titre + message + action ; max 3–5 visibles |
| **Empty state** | Listes vides | Message + action créer/qualifier |
| **Loading state** | Transitions simulées | Skeleton cartes/lignes — pas spinner seul partout |
| **Error state** | Échec chargement | Message métier + réessayer |

---

## 9. UX Dashboard SAV

**Principes** (NN/g : dashboards actionnables, limiter métriques, hiérarchie claire)

- hiérarchie KPI : **critique → opérationnel → contexte** ;
- **actionnabilité** — chaque KPI cliquable vers liste filtrée ;
- **lisibilité immédiate** — 4–6 KPI above the fold ;
- **filtres simples** — période, statut, priorité ;
- accès rapide **anomalies, planning, dossiers** ;
- **différenciation nette** avec vue dirigeant (détail vs synthèse).

| Élément | Recommandation design |
|---------|----------------------|
| **KPI above the fold** | Demandes ouvertes, à qualifier, en retard, anomalies ouvertes |
| **Alertes** | Bloc dédié ; max 3 alertes ; retards vs anomalies séparés visuellement |
| **Anomalies ouvertes** | Compteur + lien écran anomalies ; badge danger modéré |
| **Notifications échouées** | Indicateur secondaire ; pas écran dédié |
| **Interventions non signées** | KPI optionnel ; lien liste filtrée |
| **Demandes à qualifier** | KPI prioritaire ; CTA « Voir file qualification » |
| **Liens actionnables** | Chaque carte KPI → liste pré-filtrée |

---

## 10. UX Vue dirigeant

**Principes**

- **synthèse** — pas de listes longues ;
- **tendances simples** — sparkline ou barre période ; pas BI ;
- **pas de détail technique**, preuves, logs ;
- **pas de drill-down technique** — synthèse ou alerte majeure uniquement ;
- **narration visuelle** : « L'activité est stable / en hausse ; X alertes majeures ».

| Élément | Recommandation design |
|---------|----------------------|
| **Volume global demandes** | Carte KPI large ; comparaison période précédente |
| **Délai moyen traitement** | Chiffre + tendance simple |
| **Taux respect délais** | Jauge ou % ; couleur sémantique + label |
| **Taux anomalies** | Indicateur santé intégrations ; lien synthèse anomalies optionnel |
| **Taux clôture** | KPI efficacité ; cohérent avec SAV mais agrégé |
| **Tendance interventions** | Graphique simple 4–6 points ; pas prédictif |
| **Alertes majeures** | 2–3 max ; retards critiques, pic anomalies, échecs notif agrégés |

---

## 11. UX Tableaux / listes

**Principes généraux** (Material data tables, Carbon, Atlassian)

- colonnes **prioritaires** visibles ; secondaires en fiche ;
- **statuts en badges** — scannables ;
- **filtres visibles** au-dessus du tableau ;
- **tri simple** sur colonnes clés ;
- lignes **scannables** — hauteur confortable (48–56 px) ;
- **actions contextuelles** — menu ligne ou icônes 1–2 max ;
- **pagination** ou scroll infini léger selon volume fictif démo ;
- **empty states** explicites.

| Écran | Colonnes prioritaires | Filtres recommandés |
|-------|----------------------|---------------------|
| **Liste demandes** | Statut, client, priorité, date, source, assigné | Statut, priorité, source, période |
| **Anomalies** | Gravité, type, statut reprise, date, dossier lié | Statut, gravité, type |
| **Planning simplifié** | Créneau, technicien, client, statut, conflit | Jour/semaine, technicien |

---

## 12. UX Formulaires

**Principes** (WCAG labels, Material forms, GOV.UK forms)

- **labels clairs** au-dessus du champ ;
- **regroupement logique** — sections qualification / intervention / clôture ;
- **champs obligatoires limités** — optionnel explicite pour signature ;
- **validation inline** — erreur sous le champ ;
- messages **compréhensibles métier** — pas codes ;
- **aide contextuelle** courte ;
- **éviter longs formulaires** — progressive disclosure si besoin ;
- **mobile technicien** : saisie minimale, gros inputs, CR en étapes courtes.

| Formulaire | Recommandations spécifiques |
|--------------|----------------------------|
| **Création / qualification demande** | ≤ 3 actions qualification ; source pré-remplie CRM/email ; priorité visible |
| **Compte rendu intervention** | Photos + commentaire + signature optionnelle ; bouton clôturer toujours actif |
| **Motif absence signature** | Select + option « Autre » ; non bloquant |

---

## 13. UX États, erreurs et anomalies

**Principes** (ADR-002, ux-ui-designer-method)

- **statuts cohérents** — Nouvelle, Reprise disponible, Échec confirmé, etc. ;
- **message métier** visible ; détail technique **hors UI** ;
- **gravité** — visuelle modérée ; pas alarmisme ;
- **action attendue** — bouton « Relancer », « Reprendre », « Voir dossier » ;
- **reprise manuelle simulée** — parcours guidé ;
- **non happy path visible sans peur** — échec notification ≠ catastrophe UI.

**Interdits MVP**

- aucun **log technique brut** ;
- aucun **dump** stack trace ;
- pas de **SIEM** ni console ops ;
- **wording métier** : « anomalie à traiter », « reprise disponible ».

---

## 14. UX Mobile technicien

**Principes** (field service mobile patterns)

- **priorité actions terrain** — démarrer, CR, clôturer ;
- **grands boutons** — min 44×44 px zone clic ;
- **saisie courte** — commentaire, checklist minimale ;
- **photos/preuves simples** — ajouter photo, compteur ;
- **signature optionnelle** — zone claire + « Continuer sans signature » ;
- **faible charge cognitive** — un flux à la fois ;
- **navigation courte** — fiche intervention ↔ CR ;
- **éviter tableaux complexes** — cartes empilées.

*Hors ligne : hors scope MVP sauf mention discrète — ux-ui-brief point ouvert.*

---

## 15. Accessibilité minimale

Checklist MVP (WCAG 2.2 principes applicables) :

- [ ] **contraste suffisant** — texte et UI components (AA) ;
- [ ] **ne pas dépendre uniquement de la couleur** — statuts avec label ;
- [ ] **labels visibles** — tous champs formulaire ;
- [ ] **focus visible** — outline clair navigation clavier ;
- [ ] **tailles de clic adaptées** — 44 px min mobile ; 32 px desktop boutons ;
- [ ] **textes compréhensibles** — langage métier, pas jargon technique ;
- [ ] **hiérarchie claire** — headings ordonnés H1→H2 ;
- [ ] **messages d'erreur explicites** — liés au champ ;
- [ ] **ordre de lecture logique** — DOM = ordre visuel ;
- [ ] **états désactivés compréhensibles** — visuel + texte alternatif si besoin.

---

## 16. Microcopy et wording

| Situation | Bon wording | Mauvais wording |
|-----------|---------------|-----------------|
| **Preuve associée** | « Preuve associée », « 2 photos » | « Preuve légale archivée » |
| **Signature enregistrée** | « Signature enregistrée » | « Signature certifiée eIDAS » |
| **Signature non renseignée** | « Signature non renseignée » | « Non conforme » |
| **Notification envoyée** | « Notification envoyée » | « Accusé légal transmis » |
| **Échec notification** | « Échec d'envoi — non bloquant » | « Erreur SMTP 550 » |
| **Anomalie à traiter** | « Anomalie à traiter » | « Exception java.net… » |
| **Reprise disponible** | « Reprise disponible » | « Retry automatique en cours » |
| **Trace disponible** | « Trace disponible » | « Log complet export SIEM » |
| **Absence IA** | *(aucun libellé IA)* | « Suggestion IA », « Score intelligent » |
| **Conservation fictive** | « Preuve associée (démo) » si contexte | « Archivé conforme 10 ans » |

*Aligné `ux-ui-figma-opening-note.md` §7 et ADR P2.*

---

## 17. Direction visuelle recommandée

**Cible générale**

- interface **SaaS enterprise moderne** ;
- **sobre**, **lumineuse**, **forte hiérarchie** ;
- statuts lisibles ; composants propres ; dashboards aérés ;
- ton **professionnel** — ni startup gadget, ni legacy lourd.

| Option | Description | Avantages | Limites |
|--------|-------------|-----------|---------|
| **A — Enterprise clean** | Neutres dominants, primaire discret, cartes blanches, peu d'ombres | Lisibilité max ; crédibilité PME/enterprise ; aligné GOV.UK/Carbon | Peut paraître conservateur |
| **B — Service operations modern** | Primaire plus présent, accents dynamiques, cartes légèrement colorées | Énergie opérationnelle ; différenciation | Risque surcharge si mal maîtrisé |

**Recommandation : Option A — Enterprise clean / sobre / très lisible**

Justification Interv360 : MVP démonstrateur SAV ; priorités **lisibilité, sobriété cognitive, garde-fous anti-surpromesse** ; dashboards denses déjà riches en KPI — fond visuel calme préférable.

---

## 18. Règles anti-surpromesse

- [ ] pas d'**IA visible** (badge, bouton, suggestion) ;
- [ ] pas de **portail client** ;
- [ ] pas de **signature certifiée** ;
- [ ] pas de **conservation conforme** ou archivage légal ;
- [ ] pas de **BI avancée** ni drill-down analytique ;
- [ ] pas de **supervision technique** type NOC/SIEM ;
- [ ] pas de **logs bruts** ;
- [ ] pas d'**automatisation intelligente implicite** (tri « intelligent », priorisation auto).

---

## 19. Impacts sur les futures instructions Figma

| Sujet | Impact sur `figma-design-instructions.md` (futur) |
|-------|---------------------------------------------------|
| **Structure Figma** | Pages par écran MVP ; page Design System ; page Components |
| **Design system** | Tokens §4–§5 ; composants §8 |
| **Composants** | Bibliothèque badges, KPI, tables, forms, alerts |
| **Dashboards** | Layout §7–§9–§10 ; KPI above the fold |
| **Tables** | Colonnes §11 ; filtres chips |
| **Formulaires** | Patterns §12 ; CR mobile |
| **Mobile** | Breakpoint technicien §14 |
| **Accessibilité** | Checklist §15 intégrée validation |
| **Wording** | Table §16 dans libellés composants |
| **Validation** | Critères qualité + anti-surpromesse §18 |

---

## 20. Valeur SFIA

| Élément | Capitalisation |
|---------|----------------|
| **Template UX/UI Design Research** | Structure présente document |
| **Benchmark UX Enterprise** | §3 |
| **Design System Starter Checklist** | §4 |
| **Dashboard UX Checklist** | §9–§10 |
| **Form UX Checklist** | §12 |
| **Accessibility MVP Checklist** | §15 |
| **Microcopy / Wording Checklist** | §16 |
| **Anti-surpromesse UX Checklist** | §18 |

---

## 21. Prochaines actions

1. **Enrichir `figma-design-instructions.md`** avec cette recherche (tâche dédiée).
2. **Préparer un prompt de production Figma** plus qualitatif (design system + écrans).
3. **Prévoir validation** PO / UX / RSSI / Architecte avant delivery.
4. **Enrichir plus tard les prompts UX SFIA** (PROMPT-UX-001/002/003) après REX.
5. **Ne pas lancer** backlog, user stories ou code avant validation Figma.

---

## 22. Conclusion

Cette recherche UX/UI **renforce la préparation Figma Interv360**.

Elle ajoute une couche de **savoir-faire design, benchmark, accessibilité, design system et microcopy** afin que le futur rendu soit **qualitatif, sobre, professionnel et cohérent** avec les décisions **ADR P1/P2**.

**Aucun fichier Figma, wireframe ou maquette n'est produit par ce document.**

---

*Recherche UX/UI & benchmark — projet Interv360 — gouvernance SFIA.*
