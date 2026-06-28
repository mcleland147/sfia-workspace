# Interv360 — Instructions de design Figma

**Projet** : PRJ-INTERV360  
**Phase source** : 02-architecture  
**Phase cible** : UX/UI / Figma  
**Statut** : Draft  
**Type** : Instructions de design Figma  
**Source** : `ux-ui-figma-opening-note.md` + `ux-ui-design-research-and-benchmark.md` + ADR P1/P2  
**Objet** : cadrer la production future du fichier Figma avec un niveau qualitatif élevé

---

## 1. Objectif du document

Ce document fournit les **instructions opérationnelles** pour produire le futur **fichier Figma Interv360**.

Il traduit en directives concrètes :

- les **garde-fous ADR P1/P2** ;
- les **8 écrans MVP** (`ux-ui-brief.md` §5) ;
- la **recherche UX/UI et benchmark** ;
- la **direction visuelle**, le **design system minimal**, l'**accessibilité** et le **wording**.

Ce document :

- **ne produit pas** le fichier Figma ;
- **ne produit pas** de maquette, wireframe, backlog, user stories ou code ;
- **sert à cadrer** un futur travail de design **qualitatif et validable**.

---

## 2. Ambition design

**Ambition**

- produire une interface **SaaS enterprise moderne** ;
- viser un rendu **professionnel, sobre et crédible** ;
- **éviter** un rendu « outil interne bricolé » ou « startup gadget » ;
- préserver la **lisibilité opérationnelle** ;
- rendre le **démonstrateur immédiatement compréhensible** ;
- permettre une **validation PO / UX / RSSI / Architecte**.

**Direction visuelle retenue : Option A — Enterprise clean / sobre / très lisible**

*(Recommandation `ux-ui-design-research-and-benchmark.md` §17)*

---

## 3. Positionnement du futur Figma

Le futur Figma est :

| Rôle | Oui / Non |
|------|-----------|
| Support de **démonstrateur MVP** | Oui |
| Support de **validation UX/UI** | Oui |
| Support de **discussion produit / architecture / SSI** | Oui |
| Support de **préparation QA** | Oui |
| **Livrable delivery** | Non |
| **Backlog visuel** | Non |
| **Spécification exhaustive** | Non |
| **Preuve d'implémentation** | Non |

---

## 4. Structure recommandée du fichier Figma

| Page Figma | Contenu attendu | Objectif |
|------------|-----------------|----------|
| **00 — Cover / Context** | Titre projet, statut Draft, liens Git, garde-fous résumés | Contexte équipe |
| **01 — Design principles** | Principes §2, anti-surpromesse, direction visuelle | Alignement |
| **02 — Design system / Tokens** | Couleurs, typo, spacing, radius, shadows | Fondation |
| **03 — Components** | Bibliothèque composants §12 | Réutilisation |
| **04 — User flows MVP** | Parcours principaux SAV, terrain, anomalies | Navigation |
| **05 — Screens MVP** | 8 écrans §10–§11 | Livrable principal |
| **06 — Dashboard & KPI** | Dashboard SAV + vue dirigeant détaillés | Pilotage |
| **07 — States & anomalies** | États signature, notification, erreur, empty/loading | Non happy path |
| **08 — Validation checklist** | §17 — critères validation | Revue |
| **99 — Archive / Explorations** | Idées post-MVP, hors périmètre | Ne pas polluer MVP |

*Le fichier Figma réel sera produit dans une **tâche séparée**. Cette structure évite de mélanger design system, écrans et explorations.*

---

## 5. Direction visuelle recommandée

**Direction retenue : Enterprise clean / sobre / très lisible**

| Aspect | Instruction |
|--------|-------------|
| **Fond** | Clair — gris très clair ou blanc cassé |
| **Surfaces** | Cartes blanches, bordures subtiles |
| **Neutres** | Dominants — texte gris 700–900, secondaire 500–600 |
| **Primaire** | Discrète — actions et liens, pas saturation excessive |
| **Sémantique** | Succès, attention, danger, info — toujours + label |
| **Cartes** | Aérées — padding 16–24 px, gap 16–24 |
| **Typographie** | Nette — sans-serif system ou Inter/similar |
| **Composants** | Propres — radius 8 px, états cohérents |
| **Ombres** | Peu — 2–3 niveaux max |
| **Statuts** | Badges lisibles — couleur + texte |
| **Densité** | Modérée — dashboards respirants |
| **Dashboards** | Espaces blancs, pas grille saturée |

**À éviter**

- interface **legacy** grise et dense ;
- interface trop **startup colorée** ;
- composants **gadget** ou **IA-like** (sparkles, gradients IA, « smart »).

---

## 6. Design system minimal

| Couche | Instruction Figma |
|--------|-------------------|
| **Tokens couleurs** | Variables Figma : `color/primary`, `color/neutral/*`, `color/semantic/success|warning|danger|info` |
| **Tokens typographiques** | `text/display-kpi`, `text/h1`, `text/h2`, `text/body`, `text/caption`, `text/badge` |
| **Spacing scale** | 4, 8, 12, 16, 24, 32, 48 — variables `space/*` |
| **Radius** | `radius/sm` 4, `radius/md` 8, `radius/lg` 12 |
| **Shadows** | `shadow/sm`, `shadow/md`, `shadow/lg` — usage parcimonieux |
| **Components** | Bibliothèque page 03 — auto-layout, variants |
| **Variants** | Par composant : size (sm/md), state (default/hover/focus/disabled/error) |
| **Naming convention** | `Category/Component/Variant/State` — ex. `Badge/Status/Success/Default` |

**Icons** : set cohérent (Lucide, Heroicons ou Material outlined) — 16–24 px UI, 20 px mobile.

---

## 7. Palette et couleurs sémantiques

| Rôle | Usage | Garde-fou |
|------|-------|-----------|
| **Primaire** | CTA principal, liens actifs | Contraste AA sur fond clair |
| **Secondaire** | CTA secondaire, filtres actifs | Distinct du primaire |
| **Neutres** | Texte, bordures, backgrounds | Échelle 50–900 |
| **Succès** | Clôturé, signé, envoyé | + label texte obligatoire |
| **Attention** | Retard, à qualifier, en attente | Usage limité |
| **Danger** | Échec, anomalie critique | Modéré — échec notif souvent non bloquant |
| **Information** | Info, trace, statut neutre actif | ≠ danger |
| **Désactivé** | Actions indisponibles | Opacité 40–50 % + label |
| **Background** | Page, zone secondaire | `#F8F9FA` ou équivalent |
| **Bordures** | Tables, cartes | `#E5E7EB` ou équivalent subtil |

**Garde-fous**

- **jamais couleur seule** — texte / icône / label ;
- **contraste WCAG 2.2** AA minimum ;
- **max 4–5 couleurs statutaires** visibles simultanément.

---

## 8. Typographie

| Niveau | Usage | Recommandation |
|--------|-------|----------------|
| **Titre page** | H1 écran | 24–28 px, semibold |
| **Titre section** | Blocs dashboard, fiche | 18–20 px, semibold |
| **Labels** | Champs, colonnes, KPI label | 12–14 px, medium, neutral-600 |
| **Body** | Descriptions, historique | 14–16 px, regular, line-height 1.5 |
| **Microcopy** | Hints, timestamps | 12 px, neutral-500 |
| **Chiffres KPI** | Dashboards | 28–36 px, semibold, tabular nums |
| **Badges** | Statuts | 11–12 px, medium |
| **Messages d'erreur** | Forms, anomalies | 14 px, danger + icône |

**Objectif** : écrans **scannables en 3–5 secondes**.

---

## 9. Layout et grilles

- **Desktop dashboard** : grille **12 colonnes** ; KPI 3–4 par ligne (col-span 3 ou 4).
- **Cartes KPI** : min-height cohérent ; alignement chiffres.
- **Tables** : **5–7 colonnes** visibles ; scroll horizontal si besoin.
- **Mobile technicien** : **une colonne** ; CTA sticky bas possible.
- **Spacing** : multiples de **8 px**.
- **Zones respirantes** : marges page 24–32 px.
- **Above the fold** : Dashboard SAV **4–6 KPI** + bloc alertes ; dirigeant **4 KPI** + trend.

---

## 10. Écrans MVP à designer

| Écran | Format prioritaire | Objectif | Risque principal |
|-------|-------------------|----------|------------------|
| **Tableau de bord SAV complet** | Desktop | Pilotage opérationnel quotidien | Surcharge KPI ; doublon dirigeant |
| **Liste des demandes** | Desktop | Parcourir, filtrer, ouvrir | Scoring IA ; colonnes trop denses |
| **Fiche demande SAV** | Desktop | Qualifier, suivre | Timeline exhaustive ; portail |
| **Planning** | Desktop | Créneaux, techniciens, conflits | Optimisation IA ; illisibilité |
| **Fiche intervention technicien** | **Mobile** | Exécution terrain | Surcharge champs ; tableaux |
| **Compte rendu intervention** | **Mobile** | CR, signature optionnelle | Signature bloquante |
| **Suivi erreurs intégration** | Desktop | Anomalies, reprise | Logs bruts ; SIEM |
| **Vue pilotage dirigeant** | Desktop | Synthèse décisionnelle | Preuves/logs ; BI ; IA |

---

## 11. Instructions détaillées par écran

### 11.1 Tableau de bord SAV complet

**Objectif** — Visibilité opérationnelle quotidienne ; actions immédiates.

**Utilisateurs** — Responsable SAV / planning, Manager opérationnel, Assistant administratif.

**Layout** — Desktop ; nav latérale ou top ; grille 12 col ; KPI row + alertes + listes courtes optionnelles.

**Éléments à afficher**

- KPI above the fold : demandes ouvertes, à qualifier, en retard, anomalies ouvertes ;
- secondaires : notifications échouées, non signées, dossiers attente clôture, charge techniciens ;
- filtres simples : période, statut, priorité ;
- liens : planning, anomalies, liste demandes.

**Actions** — Cliquer KPI → liste filtrée ; accéder dossier ; voir anomalies.

**États** — Default ; empty (aucune demande) ; alertes actives.

**Composants** — Carte KPI, alerte, badge, bouton secondaire, filtres chips.

**Wording** — « Demandes ouvertes », « Anomalies ouvertes », « Échecs notification ».

**Garde-fous** — Séparé vue dirigeant ; pas logs ; pas BI ; pas IA.

**Validation** — ≤ 6 KPI critiques above the fold ; chaque KPI actionnable ; retards ≠ anomalies visuellement distincts.

---

### 11.2 Liste des demandes

**Objectif** — Parcourir, filtrer, ouvrir demandes SAV.

**Utilisateurs** — Responsable SAV, Assistant administratif.

**Layout** — Desktop ; barre filtres + recherche ; table pleine largeur.

**Éléments** — Statut, client, priorité, date, source (CRM/email/saisie), responsable ; création secours.

**Actions** — Filtrer, trier, ouvrir fiche, créer demande manuelle.

**États** — Empty state « Aucune demande » ; loading skeleton.

**Composants** — Table filtrable, badge statut, barre recherche, filtres chips, bouton primaire « Créer ».

**Wording** — Sources : « CRM », « Email », « Saisie manuelle ».

**Garde-fous** — Pas scoring IA ; pas classification auto ; pas portail client.

**Validation** — 5–7 colonnes ; statuts badges ; filtres visibles.

---

### 11.3 Fiche demande SAV

**Objectif** — Détail, qualification, suivi demande.

**Utilisateurs** — Responsable SAV, Assistant administratif.

**Layout** — Desktop ; 2 colonnes (contenu + panneau latéral statut/actions) ou sections empilées.

**Éléments** — Infos demande, source, statut, qualification, historique simplifié, badge notification, pièces référencées, anomalies, lien intervention.

**Actions** — Qualifier, prioriser, planifier, accéder planning.

**États** — À qualifier, en cours, clôturée ; notification envoyée/échec.

**Composants** — Sections, timeline simplifiée, badge, compteur preuves, alerte anomalie.

**Wording** — « Preuve associée », « Trace disponible », « Notification envoyée ».

**Garde-fous** — Pas données sensibles complètes ; pas timeline exhaustive ; pas centre notifications.

**Validation** — Qualification ≤ 3 actions ; historique ≤ 8 événements.

---

### 11.4 Planning

**Objectif** — Visualiser et ajuster créneaux, techniciens, interventions.

**Utilisateurs** — Responsable SAV / planning.

**Layout** — Desktop ; vue semaine par défaut ; lignes techniciens ou colonnes jours.

**Éléments** — Créneaux, techniciens, interventions, conflits, statuts planifié/replanifié.

**Actions** — Affecter, modifier créneau, consulter fiche intervention.

**États** — Conflit (badge) ; intervention en retard.

**Composants** — Carte intervention, badge conflit, filtres technicien/période.

**Wording** — « Planifiée », « Replanifiée », « Conflit de créneau ».

**Garde-fous** — Pas optimisation IA ; pas prédiction retard ; calendrier simulé.

**Validation** — Conflits visibles en un coup d'œil ; modification rapide.

---

### 11.5 Fiche intervention technicien

**Objectif** — Préparer et exécuter intervention terrain.

**Utilisateurs** — Technicien terrain.

**Layout** — **Mobile prioritaire** ; une colonne ; sections courtes.

**Éléments** — Contexte client, adresse, consignes, statut, compteur photos, badge signature, CTA CR.

**Actions** — Démarrer intervention ; accéder compte rendu ; mettre à jour statut.

**États** — Planifiée, en cours, terminée.

**Composants** — Carte info, compteur preuves, badge, bouton primaire large (min 44 px).

**Wording** — « 2 photos associées », « Signature : non renseignée ».

**Garde-fous** — Pas surcharge ; pas preuve biométrique ; pas tableau complexe.

**Validation** — Contexte en ≤ 3 scrolls ; CTA principal visible sans scroll excessif.

---

### 11.6 Compte rendu intervention

**Objectif** — Documenter intervention : photos, commentaires, signature optionnelle.

**Utilisateurs** — Technicien terrain.

**Layout** — **Mobile prioritaire** ; formulaire court par sections.

**Éléments** — Commentaires, photos/preuves fictives, zone signature optionnelle, statuts (signée, non signée, refusée, non disponible), motif absence, bouton **Clôturer** toujours actif.

**Actions** — Ajouter photo ; commenter ; capturer signature (optionnel) ; **Continuer sans signature** ; soumettre CR ; clôturer.

**États** — Signée, non signée + motif, refusée, en cours saisie.

**Composants** — Champ formulaire, zone signature, select motif, bouton primaire + lien secondaire « Continuer sans signature ».

**Wording** — « Signature enregistrée », « Signature non renseignée », « Preuve associée ».

**Garde-fous** — Signature **non bloquante** ; pas e-signature ; pas archivage réel.

**Validation** — Clôture possible sans signature ; zone signature clairement optionnelle.

---

### 11.7 Suivi des erreurs d'intégration

**Objectif** — Anomalies visibles ; reprise manuelle simulée (ADR-002).

**Utilisateurs** — Manager opérationnel, Support.

**Layout** — Desktop ; table + filtres ; panneau détail optionnel.

**Éléments** — Domaine, gravité, message métier, statut, date, source, lien dossier, action reprise.

**Actions** — Reprendre (simulé) ; voir dossier ; filtrer par statut/gravité.

**États** — Nouvelle, Reprise disponible, Échec confirmé, Ignorée ; empty state.

**Composants** — Table, badge anomalie, badge gravité, bouton « Reprendre », alerte modérée.

**Wording** — « Anomalie à traiter », « Reprise disponible », « Message : [métier] ».

**Garde-fous** — Pas log brut ; pas SIEM ; pas dump technique ; pas effet anxiogène excessif.

**Validation** — Message compréhensible métier ; action reprise visible ; pas stack trace.

---

### 11.8 Vue pilotage dirigeant avancée

**Objectif** — Lecture consolidée, tendances, alertes majeures.

**Utilisateurs** — Dirigeant, Manager opérationnel (vue synthétique).

**Layout** — Desktop ; 4 KPI above the fold ; row tendances ; bloc alertes majeures (2–3).

**Éléments** — Volume demandes, délai moyen, taux respect délais, taux anomalies, taux clôture, tendance interventions, alertes majeures, performance globale, qualité traitement (indicateur composite simple).

**Actions** — Consulter tendances ; identifier alertes — pas actions terrain détaillées.

**États** — Default ; alerte majeure active.

**Composants** — Carte KPI large, sparkline simple, alerte synthétique.

**Wording** — « Tendance sur 4 semaines », « Alertes majeures », pas « Prédiction ».

**Garde-fous** — Pas logs ; pas preuves détaillées ; pas BI ; pas IA prédictive ; pas drill-down technique.

**Validation** — Visuellement distinct du dashboard SAV ; synthèse en un coup d'œil.

---

## 12. Composants à designer

| Composant | Usage | Variants / états |
|-----------|-------|------------------|
| **Carte KPI** | Dashboards | Default, hover, clickable ; avec/sans trend |
| **Tableau filtrable** | Listes, anomalies | Header sticky ; row hover ; empty |
| **Badge statut** | Demande, intervention | Success, warning, danger, info, neutral |
| **Badge notification** | Fiche demande | Envoyée, échec, en attente |
| **Badge signature** | CR, fiche | Signée, non signée, refusée, N/A |
| **Badge anomalie** | Anomalies | Gravité + statut reprise |
| **Bouton primaire** | CTA principal | Default, hover, focus, disabled |
| **Bouton secondaire** | Actions secondaires | Outline, ghost |
| **Bouton danger** | Actions rares | Confirm si destructif |
| **Champ formulaire** | Forms | Default, focus, error, disabled |
| **Select** | Priorité, motif, filtre | Default, open, error |
| **Filtres chips** | Listes, dashboards | Active, inactive, removable |
| **Barre recherche** | Liste demandes | Empty, filled, focus |
| **Timeline simplifiée** | Historique dossier | 5–8 items max |
| **Carte intervention** | Planning | Default, conflit, retard |
| **Zone signature** | CR | Empty, signed, disabled |
| **Compteur preuves/photos** | Fiche, CR | « N photos » |
| **Alerte** | Dashboard, fiche | Info, warning, danger — avec action |
| **Empty state** | Listes vides | Illustration légère + CTA |
| **Loading state** | Transitions | Skeleton KPI / rows |
| **Error state** | Échec chargement | Message métier + réessayer |

---

## 13. États fonctionnels à prévoir

| Domaine | États à prévoir |
|---------|-----------------|
| **Demande** | Ouverte, à qualifier, en cours, clôturée, en attente |
| **Intervention** | Planifiée, en cours, terminée, en retard, replanifiée |
| **Notification** | À envoyer, envoyée, échec, ignorée non bloquante |
| **Signature** | Non demandée, en attente, signée, refusée, non disponible, non signée + motif |
| **Anomalie** | Nouvelle, reprise disponible, échec confirmé, ignorée |
| **Preuve/photo** | Associée (compteur), absente |
| **Reprise manuelle** | Disponible, en cours, terminée (simulé) |
| **Dashboard** | Default, alertes actives, empty partiel |
| **Formulaire** | Default, validation error, success submit |

---

## 14. Wording et microcopy

| Situation | Libellé recommandé | Libellé interdit |
|-----------|-------------------|------------------|
| **Preuve associée** | « Preuve associée » | « Preuve légale » |
| **Photo associée** | « 2 photos associées » | « Archive photo conforme » |
| **Signature enregistrée** | « Signature enregistrée » | « Signature certifiée » |
| **Signature non renseignée** | « Signature non renseignée » | « Non conforme » |
| **Notification envoyée** | « Notification envoyée » | « Accusé légal » |
| **Échec notification** | « Échec d'envoi — non bloquant » | « Erreur SMTP 550 » |
| **Anomalie à traiter** | « Anomalie à traiter » | « Exception système » |
| **Reprise disponible** | « Reprise disponible » | « Retry automatique » |
| **Trace disponible** | « Trace disponible » | « Log SIEM export » |
| **Conservation fictive** | « Preuve associée (démo) » si besoin | « Archivé conforme » |
| **IA** | *(aucun libellé)* | « IA recommande », « Score intelligent » |

---

## 15. Accessibilité minimale

- [ ] **contraste suffisant** — AA texte et UI ;
- [ ] **labels visibles** — tous champs ;
- [ ] **focus visible** — outline navigation clavier ;
- [ ] **statuts non dépendants couleur seule** — badge + texte ;
- [ ] **tailles de clic adaptées** — 44 px mobile, 32 px desktop min ;
- [ ] **messages d'erreur compréhensibles** — liés au champ ;
- [ ] **ordre de lecture logique** ;
- [ ] **hiérarchie claire** — H1 unique par écran ;
- [ ] **états désactivés compréhensibles** ;
- [ ] **textes courts et métier**.

---

## 16. Garde-fous globaux

- [ ] pas de **portail client** ;
- [ ] pas de **centre notifications avancé** ;
- [ ] pas de **préférences notification avancées** ;
- [ ] pas de **signature électronique juridiquement complète** ;
- [ ] pas de **politique réelle de conservation** ;
- [ ] pas d'**archivage / purge** ;
- [ ] pas de **logs techniques complets** ;
- [ ] pas de **SIEM / supervision** ;
- [ ] pas de **dashboard BI avancé** ;
- [ ] pas de **composant IA** ;
- [ ] pas de **scoring IA** ;
- [ ] pas de **chatbot** ;
- [ ] pas de **prédictions** ;
- [ ] pas de **résumé automatique** ;
- [ ] pas de **backlog ou user stories** dans le fichier Figma.

---

## 17. Checklist de validation Figma

- [ ] les **8 écrans MVP** sont présents ;
- [ ] la direction **Enterprise clean** est respectée ;
- [ ] le **design system minimal** est présent (page 02–03) ;
- [ ] les **composants principaux** sont créés ;
- [ ] **dashboards SAV et dirigeant séparés** ;
- [ ] **états signature** présents (signée, non signée, refusée, motif) ;
- [ ] **absence signature ne bloque pas** le parcours ;
- [ ] **notifications simples** — badges, pas portail ;
- [ ] **portail client absent** ;
- [ ] **anomalies compréhensibles** côté métier ;
- [ ] **logs techniques non exposés** ;
- [ ] **preuves fictives / métadonnées** uniquement ;
- [ ] **libellés prudents** ;
- [ ] **aucun composant IA** ;
- [ ] écrans **sobres et lisibles** ;
- [ ] validation possible par **PO / UX / RSSI / Architecte**.

---

## 18. Rôles de validation

| Rôle | Validation attendue |
|------|---------------------|
| **UX/UI Designer** | Design system, composants, sobriété, accessibilité de base |
| **Product Owner** | Périmètre MVP, exclusions, valeur démo |
| **RSSI** | Pas exposition sensible ; libellés ; pas promesse conformité |
| **Architecte** | Cohérence statuts/intégrations simulées |
| **QA / Testeur** | Parcours testables visibles — *méthode candidate future* |
| **Chef de projet** | Pas delivery déclenché ; jalon Figma distinct |

---

## 19. Livrables attendus dans la tâche Figma suivante

*Non produits dans cette tâche.*

1. Structure fichier Figma (pages §4)
2. Design system minimal (tokens §6–§8)
3. Composants de base (§12)
4. **8 écrans MVP** (§11)
5. Principaux états (§13)
6. Parcours principaux (page 04)
7. Checklist validation (page 08)
8. Export ou capture si nécessaire pour revue

---

## 20. Valeur projet

| Valeur projet | Description |
|---------------|-------------|
| **Design plus qualitatif** | Research + instructions intégrées |
| **Cohérence visuelle** | Design system minimal |
| **Lisibilité accrue** | Enterprise clean, KPI maîtrisés |
| **Réduction retours arrière** | Garde-fous ADR avant pixels |
| **Meilleure validation transverse** | Critères §17 par rôle |
| **Préparation QA** | États et parcours visibles |

---

## 21. Valeur SFIA

| Élément | Capitalisation |
|---------|----------------|
| **Template Figma Design Instructions** | Structure présente document |
| **Design System Starter** | §6–§8 |
| **Dashboard UX Checklist** | §11.1, §11.8, §17 |
| **Form UX Checklist** | §11.6, §12 |
| **Accessibility MVP Checklist** | §15 |
| **Microcopy Checklist** | §14 |
| **Anti-surpromesse UX Checklist** | §16 |
| **Standard Figma post-ADR** | Séquence opening → research → instructions → Figma |

---

## 22. Prochaines actions

1. **Préparer le prompt de production Figma** (tâche dédiée).
2. **Produire le fichier Figma** ou maquettes dans une tâche séparée.
3. **Valider les écrans** avec PO / UX / RSSI / Architecte.
4. **Enrichir les prompts UX** après REX (PROMPT-UX-001/002/003).
5. **Ne pas lancer** backlog, user stories ou code avant validation Figma.

---

## 23. Conclusion

Ces instructions traduisent les décisions **ADR P1/P2**, la **note d'ouverture Figma** et la **recherche UX/UI** en directives concrètes de design.

Elles préparent une production Figma **plus qualitative, professionnelle, sobre et cohérente**, sans déclencher le delivery.

**Aucun fichier Figma n'est produit par ce document.**

---

*Instructions de design Figma — projet Interv360 — gouvernance SFIA.*
