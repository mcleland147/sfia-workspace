# Interv360 — Prompt de production Figma

**Projet** : PRJ-INTERV360  
**Phase source** : 02-architecture  
**Phase cible** : UX/UI / Figma  
**Statut** : Draft  
**Type** : Prompt de production Figma  
**Source** : `figma-design-instructions.md`  
**Objet** : produire un futur fichier Figma qualitatif et cadré

---

## 1. Objectif du prompt

Ce document prépare le **prompt de production** pour générer le futur **fichier Figma Interv360** via un outil de design (Figma AI, Galileo, Uizard, Relume, Visily, Penpot AI, v0, ou travail designer humain guidé).

Le prompt doit :

- générer une **maquette MVP complète** (8 écrans + design system) ;
- respecter les **ADR P1/P2** et garde-fous documentés ;
- respecter la direction **Enterprise clean** ;
- rester **sobre, professionnel et lisible** ;
- **ne pas** produire backlog, user stories ou code.

*Ce document ne produit pas le fichier Figma — il fournit les consignes exploitables.*

---

## 2. Prompt principal à utiliser dans l'outil de design

Voir **§9 Prompt complet prêt à copier-coller** — bloc autonome.

---

## 3. Instructions design system à inclure dans le prompt

Le prompt doit demander un **design system minimal** :

| Couche | Contenu |
|--------|---------|
| **Couleurs** | Primaire discrète, neutres 50–900, sémantiques succès/attention/danger/info, background clair, bordures subtiles |
| **Typographie** | Display KPI 28–36 px, H1 24–28 px, H2 18–20 px, body 14–16 px, caption 12 px, badges 11–12 px |
| **Spacing** | Échelle 4, 8, 12, 16, 24, 32, 48 px |
| **Radius** | sm 4, md 8, lg 12 px |
| **Ombres** | 2–3 niveaux max — usage parcimonieux |
| **Boutons** | Primaire, secondaire, danger — états default/hover/focus/disabled |
| **Badges** | Statut, notification, signature, anomalie — couleur + texte |
| **Cartes KPI** | Chiffre + label + trend optionnel ; clickable |
| **Tableaux** | Header sticky, rows 48–56 px, badges statut |
| **Formulaires** | Label visible, erreur inline, champs 44 px min mobile |
| **Alertes** | Info, warning, danger — titre + message + action |
| **Composants mobile** | Une colonne, CTA large, sections courtes |
| **États** | Empty, loading (skeleton), error — pour listes et KPI |

---

## 4. Instructions composants à inclure

Composants obligatoires dans la bibliothèque Figma :

- carte KPI
- tableau filtrable
- badge statut
- badge notification
- badge signature
- badge anomalie
- bouton primaire / secondaire / danger
- champ formulaire
- select
- filtres chips
- barre recherche
- timeline simplifiée (5–8 items)
- carte intervention
- zone signature (optionnelle)
- compteur preuves/photos
- alerte
- empty state
- loading state
- error state

---

## 5. Instructions par écran à inclure

### Tableau de bord SAV complet

**Demander** : desktop ; 4–6 KPI above the fold (demandes ouvertes, à qualifier, en retard, anomalies ouvertes) ; secondaires (échecs notif, non signées, charge techniciens) ; alertes hiérarchisées ; filtres simples ; liens actionnables vers listes filtrées.

**Ne pas inclure** : logs techniques, BI avancée, IA, fusion avec vue dirigeant.

### Liste des demandes

**Demander** : table 5–7 colonnes (statut, client, priorité, date, source, responsable) ; badges statut ; recherche ; filtres statut/priorité/source ; actions ouvrir/qualifier.

**Ne pas inclure** : scoring IA, classification auto, portail client.

### Fiche demande SAV

**Demander** : desktop sections ; infos demande, source, statut, qualification ; historique simplifié ; badge notification ; pièces référencées ; anomalies ; lien intervention.

**Ne pas inclure** : données sensibles complètes, timeline exhaustive, centre notifications.

### Planning

**Demander** : vue semaine ; techniciens ; créneaux ; cartes intervention ; conflits visibles (badge) ; statuts planifiée/replanifiée ; filtres technicien/période.

**Ne pas inclure** : optimisation IA, prédiction retard, calendrier réel connecté.

### Fiche intervention technicien

**Demander** : **mobile prioritaire** ; contexte client, adresse, statut ; compteur photos ; badge signature ; CTA compte rendu ; gros boutons ; sections courtes.

**Ne pas inclure** : tableaux complexes, surcharge champs, preuve biométrique.

### Compte rendu intervention

**Demander** : **mobile prioritaire** ; commentaires ; photos fictives ; zone signature optionnelle ; états signée/non signée/refusée/non disponible ; motif absence ; **Clôturer** toujours actif ; **Continuer sans signature** visible.

**Ne pas inclure** : signature obligatoire, e-signature juridique, archivage réel.

### Suivi des erreurs d'intégration

**Demander** : desktop ; table anomalies (domaine, gravité, message métier, statut, date, source) ; action reprise manuelle ; lien dossier ; empty state.

**Ne pas inclure** : log brut, dump technique, SIEM, supervision complète.

### Vue pilotage dirigeant avancée

**Demander** : desktop ; 4 KPI above the fold (volume, délai moyen, taux délais, taux clôture) ; tendance interventions ; alertes majeures (2–3) ; synthèse performance/qualité.

**Ne pas inclure** : logs, preuves détaillées, BI avancée, IA prédictive, drill-down technique.

---

## 6. Wording obligatoire

**Libellés recommandés**

- « Preuve associée »
- « 2 photos associées »
- « Signature enregistrée »
- « Signature non renseignée »
- « Notification envoyée »
- « Échec d'envoi — non bloquant »
- « Anomalie à traiter »
- « Reprise disponible »
- « Trace disponible »
- « Continuer sans signature »
- « Clôturer l'intervention »

**Libellés interdits**

- « Preuve légale »
- « Signature certifiée »
- « Signature électronique qualifiée »
- « Archivé conforme »
- « IA recommande »
- « Score intelligent »
- « Prédiction automatique »
- « Log SIEM »
- « Erreur SMTP 550 »
- « Exception système »

---

## 7. Garde-fous obligatoires

Le prompt doit **explicitement interdire** :

- portail client
- centre de notifications avancé
- préférences notification avancées
- signature électronique juridiquement complète
- politique réelle de conservation
- archivage / purge
- logs techniques complets
- SIEM / supervision
- dashboard BI avancé
- composant IA, scoring IA, chatbot, prédictions, résumé automatique
- backlog, user stories, code

---

## 8. Critères de qualité attendus

Le résultat doit respecter :

- **8 écrans MVP** présents
- **design system minimal** présent
- direction **Enterprise clean**
- **dashboards SAV et dirigeant séparés**
- **signature optionnelle** ; absence non bloquante
- **anomalies lisibles** côté métier
- **preuves fictives / métadonnées** uniquement
- **aucun composant IA** ; **aucun portail client**
- **libellés prudents**
- **accessibilité minimale** (contraste, labels, statuts texte+couleur)
- écrans **sobres et professionnels**

---

## 9. Prompt complet prêt à copier-coller

```
Tu es un designer UI expert en applications SaaS enterprise B2B.

Crée un fichier Figma complet pour **Interv360**, application SaaS de pilotage SAV et interventions terrain (démonstrateur MVP).

═══ STYLE VISUEL ═══
Direction : **Enterprise clean** — sobre, moderne, lumineux, professionnel.
- Fond clair (#F8F9FA), surfaces blanches, neutres dominants
- Couleur primaire discrète (bleu enterprise ou teal sobre)
- Couleurs sémantiques maîtrisées : succès, attention, danger, info — TOUJOURS avec label texte, jamais couleur seule
- Typographie nette sans-serif (Inter ou similar)
- Cartes aérées, padding 16–24px, radius 8px, ombres légères (2–3 niveaux max)
- Densité modérée, dashboards respirants
- ÉVITER : startup gadget, legacy gris dense, gradients IA, sparkles "smart"

═══ CONTEXTE PRODUIT ═══
Interv360 MVP gère : demandes SAV, qualification, planning, interventions terrain, compte rendu, signature optionnelle, preuves/photos fictives, anomalies d'intégration simulées, notifications simulées, dashboards opérationnel SAV et vue dirigeant séparés.

═══ STRUCTURE FICHIER FIGMA (pages) ═══
00 — Cover / Context
01 — Design principles
02 — Design system / Tokens (couleurs, typo, spacing, radius, shadows)
03 — Components (bibliothèque complète)
04 — User flows MVP
05 — Screens MVP (8 écrans)
06 — Dashboard & KPI (détail dashboards)
07 — States & anomalies (états signature, notification, empty/loading/error)
08 — Validation checklist
99 — Archive / Explorations (vide ou hors périmètre)

═══ DESIGN SYSTEM MINIMAL ═══
Créer tokens + composants avec variants/états :
Couleurs, typo (display KPI, H1, H2, body, caption, badge), spacing (4–48px), radius, shadows.
Composants : carte KPI, tableau filtrable, badges (statut/notification/signature/anomalie), boutons (primaire/secondaire/danger), champs formulaire, select, filtres chips, barre recherche, timeline simplifiée, carte intervention, zone signature, compteur preuves, alerte, empty/loading/error states.

═══ 8 ÉCRANS MVP À CRÉER ═══

1. **Tableau de bord SAV complet** (DESKTOP)
   - 4–6 KPI above the fold : demandes ouvertes, à qualifier, en retard, anomalies ouvertes
   - Secondaires : notifications échouées, non signées, charge techniciens
   - Alertes hiérarchisées, filtres période/statut/priorité, liens actionnables
   - PAS : logs, BI, IA, fusion dirigeant

2. **Liste des demandes** (DESKTOP)
   - Table 5–7 col : statut (badge), client, priorité, date, source (CRM/email/saisie), responsable
   - Recherche, filtres, actions ouvrir/qualifier
   - PAS : scoring IA, portail client

3. **Fiche demande SAV** (DESKTOP)
   - Sections : infos, qualification, historique simplifié (≤8 events), badge notification, pièces référencées, anomalies, lien intervention
   - PAS : données sensibles complètes, timeline exhaustive

4. **Planning** (DESKTOP)
   - Vue semaine, techniciens, cartes intervention, conflits badge, planifiée/replanifiée, filtres
   - PAS : IA, prédiction retard

5. **Fiche intervention technicien** (MOBILE prioritaire)
   - Contexte client, adresse, statut, compteur photos, badge signature, CTA compte rendu, gros boutons
   - PAS : tableaux, surcharge

6. **Compte rendu intervention** (MOBILE prioritaire)
   - Commentaires, photos fictives, zone signature OPTIONNELLE, états signée/non signée/refusée
   - Motif absence, bouton "Clôturer l'intervention" TOUJOURS actif, lien "Continuer sans signature"
   - PAS : signature obligatoire, e-signature juridique

7. **Suivi erreurs d'intégration** (DESKTOP)
   - Table : domaine, gravité, message MÉTIER, statut, date, action "Reprise disponible", lien dossier, empty state
   - PAS : log brut, SIEM, codes techniques

8. **Vue pilotage dirigeant avancée** (DESKTOP)
   - 4 KPI : volume, délai moyen, taux délais, taux clôture + tendance + 2–3 alertes majeures
   - Synthèse, tendances simples — PAS logs, preuves, BI, IA, drill-down technique

═══ WORDING OBLIGATOIRE ═══
UTILISER : "Preuve associée", "Signature enregistrée", "Signature non renseignée", "Notification envoyée", "Échec d'envoi — non bloquant", "Anomalie à traiter", "Reprise disponible", "Trace disponible", "Continuer sans signature"
INTERDIRE : "Preuve légale", "Signature certifiée", "IA recommande", "Prédiction automatique", "Log SIEM", "Erreur SMTP", "Archivé conforme"

═══ INTERDICTIONS STRICTES ═══
NE PAS inclure : portail client, centre notifications, IA/composant IA/scoring/chatbot/prédiction/résumé auto, signature juridique complète, conservation/archivage réel, logs techniques, SIEM, BI avancée, backlog, user stories, code.

═══ ACCESSIBILITÉ MINIMALE ═══
Contraste AA, labels visibles, statuts texte+couleur, focus visible, boutons 44px min mobile.

═══ LIVRABLE ATTENDU ═══
Fichier Figma structuré en pages, design system + 8 écrans MVP complets, page checklist validation cochée mentalement contre les critères ci-dessus.
```

---

## 10. Prompt court alternatif

```
Crée un fichier Figma **Interv360** — SaaS enterprise SAV & interventions terrain (MVP démo).

Style : **Enterprise clean** — fond clair, neutres, primaire discrète, cartes aérées, typo Inter, badges texte+couleur, densité modérée.

Pages : Cover, Design system (tokens+composants), 8 écrans MVP, States, Checklist.

8 écrans :
1. Dashboard SAV desktop (4–6 KPI, alertes, filtres)
2. Liste demandes (table badges, filtres)
3. Fiche demande (qualification, historique court)
4. Planning semaine (cartes intervention, conflits)
5. Fiche intervention MOBILE (contexte, CTA CR)
6. Compte rendu MOBILE (signature OPTIONNELLE, "Continuer sans signature", clôturer toujours actif)
7. Anomalies desktop (message métier, reprise manuelle)
8. Vue dirigeant desktop (4 KPI synthèse, tendances simples)

Composants : KPI card, table, badges, buttons, forms, alerts, empty/loading states.

INTERDIT : portail client, IA, e-signature certifiée, logs/SIEM, BI avancée, preuve légale.

Wording : "Preuve associée", "Signature enregistrée", "Anomalie à traiter", "Reprise disponible".
```

---

## 11. Prompt orienté designer humain

### Brief designer — Interv360 MVP Figma

**Objectif**  
Produire un fichier Figma de démonstrateur MVP pour **Interv360** — pilotage SAV et interventions terrain pour une PME type ServiTech. Le rendu doit convaincre en revue PO / RSSI / Architecte, sans promettre au-delà du périmètre arbitré.

**Contexte**  
Les décisions architecture et design-impact sont figées (ADR P1/P2). Tu n'inventes pas de portail client, d'IA, de BI avancée ni de conformité juridique. C'est un **démo crédible**, pas un produit fini.

**Style — Enterprise clean**  
Interface lumineuse, professionnelle, aérée. Pense Carbon / Atlassian / Linear en sobriété — pas dashboard Grafana, pas app consumer colorée. Primaire discret, beaucoup de blanc/gris clair, badges lisibles.

**Écrans (8)**  
1. Dashboard SAV — opérationnel, actionnable, desktop  
2. Liste demandes — table filtrable  
3. Fiche demande — qualification  
4. Planning — semaine, conflits visibles  
5. Fiche intervention — **mobile first** technicien  
6. Compte rendu — **mobile**, signature **optionnelle**, clôture jamais bloquée  
7. Anomalies — message métier, pas de log technique  
8. Vue dirigeant — synthèse, distincte du dashboard SAV  

**Composants**  
Construis un mini design system d'abord (tokens + bibliothèque §4), puis écrans. Réutilise systématiquement badges, KPI cards, tables.

**Points de vigilance**  
- Signature : zone optionnelle + « Continuer sans signature » visible  
- Preuves : compteurs/vignettes, pas galerie lourde  
- Wording prudent (§6)  
- Deux dashboards **séparés** visuellement  
- Aucun élément IA (pas de sparkle, pas de « recommandé »)  

**Validation attendue**  
Checklist §8 + revue PO, UX, RSSI, Architecte avant tout passage delivery.

---

## 12. Contrôle qualité avant utilisation

- [x] le prompt mentionne les **8 écrans**
- [x] le prompt mentionne **Enterprise clean**
- [x] le prompt mentionne **design system minimal**
- [x] le prompt mentionne **composants clés**
- [x] le prompt **interdit portail client**
- [x] le prompt **interdit IA**
- [x] le prompt **interdit signature juridique complète**
- [x] le prompt **interdit logs techniques**
- [x] le prompt **interdit backlog / user stories / code**
- [x] le prompt exige une **checklist de validation**

---

## 13. Valeur SFIA

| Élément | Capitalisation |
|---------|----------------|
| **Prompt production Figma** | §9 — bloc autonome |
| **Prompt court Figma** | §10 — outils limités tokens |
| **Brief designer humain** | §11 — naturel |
| **Checklist qualité prompt** | §12 |
| **Standard Figma post-ADR** | Chaîne opening → research → instructions → prompt |
| **Template prompt design produit** | Structure présente document |

---

## 14. Prochaines actions

1. **Utiliser le prompt** (§9 ou §10) dans l'outil de design choisi.
2. **Produire le premier jet Figma** — tâche dédiée séparée.
3. **Contrôler** avec checklist §8 et §12.
4. **Revue** PO / UX / RSSI / Architecte.
5. **Ne pas lancer** backlog, user stories ou code avant validation Figma.

---

## 15. Conclusion

Ce document prépare la **production Figma Interv360** avec un **prompt complet** (§9), un **prompt court** (§10) et un **brief designer humain** (§11).

Il transforme les instructions design en **consignes directement exploitables** pour produire une première version qualitative du fichier Figma, en respectant les garde-fous **MVP, UX, SSI et architecture**.

**Aucun fichier Figma n'est produit par ce document.**

---

*Prompt de production Figma — projet Interv360 — gouvernance SFIA.*
