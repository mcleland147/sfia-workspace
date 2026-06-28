# Interv360 — Enrichissement méthodes rôle après Figma V1

**Projet** : PRJ-INTERV360  
**Phase source** : 02-architecture  
**Jalon** : Figma V1  
**Statut** : Completed  
**Type** : Capitalisation méthodes rôle  
**Source** : Figma V1 + revue Figma + préparation revue + template CR  
**Objet** : capitaliser les apprentissages Figma V1 dans les méthodes rôle SFIA

---

## 1. Objectif

Ce document trace les **enrichissements réalisés dans les méthodes rôle SFIA** après **production, revue et préparation de la revue transverse** de la maquette Figma V1 Interv360.

Ces enrichissements sont réalisés **avant** la production du **compte rendu de revue simulée multi-rôles**, afin que chaque rôle dispose des critères, réflexes, garde-fous et savoir-faire nécessaires pour évaluer correctement une maquette V1.

- la **revue simulée doit s'appuyer sur des rôles à jour** ;
- les rôles intègrent les apprentissages issus de la **production Figma V1** ;
- les enrichissements restent **génériques et réutilisables** ;
- **Interv360** sert de cas d'apprentissage, pas de contenu principal des méthodes.

---

## 2. Pourquoi enrichir avant la revue simulée

- la revue simulée **ne doit pas être une simple opinion** — elle mobilise le savoir-faire et le savoir-être de chaque rôle ;
- les décisions doivent être **cohérentes avec les garde-fous ADR P1/P2** ;
- les rôles doivent savoir distinguer **V1 présentable**, **V1 définitive**, **V2 nécessaire** et **passage delivery** ;
- sans capitalisation préalable, la revue simulée risque de **confondre polish UI, validation MVP et feu vert delivery**.

---

## 3. Sources utilisées

| Source | Rôle |
|--------|------|
| `figma-first-draft-review.md` | Revue V1 ; qualité 8,3/10 ; points P1–P3 |
| `figma-review-session-preparation.md` | Cadrage revue transverse ; checklist ; questions par écran |
| `figma-review-session-minutes-template.md` | Trame CR ; garde-fous ; décisions V2 / delivery |
| `figma-design-instructions.md` | Garde-fous design ; direction visuelle |
| `figma-production-prompt.md` | Production maquette ; exclusions |
| `ux-ui-figma-opening-note.md` | Ouverture UX/UI ; séquence |
| `ux-ui-design-research-and-benchmark.md` | Recherche design |
| `architecture-p1-summary.md` | ADR P1 ; intégrations simulées ; anomalies |
| `architecture-p2-design-impact-summary.md` | ADR P2 design-impact ; exclusions Figma |
| `adr/ADR-CAND-009-ai-light-post-mvp-confirmation.md` | IA hors MVP |
| `figma-first-draft-screens/` | 11 captures versionnées |
| Méthodes rôle existantes (§14 P1/P2) | Structure d'enrichissement réutilisée |

---

## 4. Synthèse des enrichissements par rôle

| Rôle | Enrichissement principal | Impact sur la revue simulée |
|------|--------------------------|-----------------------------|
| **Product Owner** | Grille présentable / validé / définitif / prêt delivery ; contrôle MVP ; dérives implicites ; décision V2 | Statut global V1 ; ajustements P1–P3 ; blocage delivery |
| **UX/UI Designer** | Revue maquette générée ; polish vs bloquant ; cohérence visuelle ; surpromesse composants | Validation UI ; réserves polish ; hiérarchie mobile / dashboards |
| **RSSI** | Revue sécurité maquette ; preuves, signature, notifications ; absence logs / IA / conformité implicite | Validation garde-fous SSI ; wording prudent |
| **Architecte** | Cohérence ADR ; architecture implicite ; intégrations simulées ; exclusions portail/BI/IA | Validation cohérence décisionnelle ; écarts ADR |
| **Chef de projet** | Jalon V1 ; traçabilité captures ; blocage delivery ; contraintes outil ; séquence revue → CR | Validation jalon ; décision V2 / delivery |
| **Business Analyst** | Lecture métier maquette ; workflows implicites ; sans backlog anticipé | Ambiguïtés métier ; zones à arbitrer PO |
| **QA / Testeur candidat** | Pas de méthode officielle — intérêt confirmé pour parcours testables | Testabilité ; happy / non happy path ; signature optionnelle |

---

## 5. Product Owner

**Nouveaux réflexes ajoutés**

- Distinguer **présentable**, **validé en revue**, **définitif** et **prêt delivery**.
- Vérifier que les écrans ne rajoutent pas portail, IA, BI, signature complète ou workflows non arbitrés.
- Statuer sur ajustements **P1 / P2 / P3** avec décision documentée.
- Décider si **V2** est nécessaire, différée ou non requise.

**Critères de validation Figma V1**

- 8 écrans MVP couverts ; valeur métier lisible (SLA, responsables, prochaines actions).
- Exclusions ADR P1/P2 respectées sur captures.
- Aucune dérive fonctionnelle implicite par libellés ou onglets.

**Vigilance dérive MVP**

- Onglets Preuves / Notifications ; CTA secondaires ; workflows suggérés (brouillon, clôture différée).

**Impact revue simulée**

- Porte la **décision globale** et le **feu vert ou blocage delivery**.

---

## 6. UX/UI Designer

**Nouveaux réflexes ajoutés**

- Évaluer une **maquette générée** avec critères distincts d'une maquette artisanale haute fidélité.
- Séparer **défaut bloquant** et **défaut de maturité visuelle** (graphs, contraste, planning, hiérarchie mobile).
- Surveiller la **surpromesse visuelle** (barres KPI décoratives, carte contrastée type BI).

**Critères de validation Figma V1**

- Cohérence Enterprise clean ; dashboards SAV / dirigeant différenciés.
- Signature optionnelle claire ; mobile orienté terrain.
- Accessibilité minimale et polish documenté pour V2 si besoin.

**Impact revue simulée**

- Valide **cohérence UI** ; formule réserves polish sans bloquer inutilement.

---

## 7. RSSI

**Nouveaux réflexes ajoutés**

- Traiter la maquette comme **source de promesse SSI** même sans code.
- Contrôler onglets **Preuves**, **Notifications**, **Signature**.
- Confirmer absence logs, SIEM, IA, conservation réelle promise.

**Critères de validation Figma V1**

- Messages métier sur anomalies ; pas de dump technique.
- Libellés prudents ; signature non juridiquement complète.
- Preuves fictives / métadonnées.

**Impact revue simulée**

- Valide **garde-fous sécurité** ; signale surpromesse conformité.

---

## 8. Architecte

**Nouveaux réflexes ajoutés**

- Lire la maquette comme **diagramme implicite** d'architecture.
- Vérifier intégrations **simulées** et reprise **manuelle**.
- Rejeter portail, BI avancée, IA, prédiction non arbitrées.

**Critères de validation Figma V1**

- Cohérence ADR P1/P2 sur tous les écrans.
- Vue dirigeant synthétique sans BI ni prédiction.
- Suivi erreurs aligné anomalies métier.

**Impact revue simulée**

- Valide **cohérence ADR** ; détecte architecture implicite.

---

## 9. Chef de projet

**Nouveaux réflexes ajoutés**

- Piloter jalon **Figma V1** : captures Git, revue, préparation, CR.
- Documenter **contraintes outil / crédits** (V2 différée).
- Maintenir **blocage backlog / user stories / code** jusqu'à validation documentée.

**Critères de validation Figma V1**

- Séquence production → revue → décision → capitalisation respectée.
- Retours traçables ; template CR disponible.

**Impact revue simulée**

- Valide **maîtrise du jalon** ; arbitre V2 et delivery.

---

## 10. Business Analyst

**Nouveaux réflexes ajoutés**

- Lire la maquette en **compréhension métier** sans produire de user stories.
- Identifier **workflows implicites** et **libellés ambigus**.
- Distinguer **observation UX** et **spécification fonctionnelle**.

**Critères de validation Figma V1**

- Cohérence statuts, SLA, prochaines actions avec cadrage existant.
- Zones ambiguës listées pour arbitrage PO.

**Impact revue simulée**

- Alimente **questions métier** et **points à arbitrer** sans anticiper delivery.

---

## 11. Rôle candidat QA / Testeur

**Statut**

- `docs/methods/roles/qa-tester-method.md` **n'existe pas** — aucune méthode officielle créée dans cette tâche.

**Intérêt confirmé par la revue Figma V1**

- Parcours **testables** sur captures (happy path SAV → intervention → CR).
- Scénarios **non happy path** : échec notification, anomalie intégration, reprise manuelle, absence signature.
- **États visibles** : empty anomalies, checklist validation, archive vide.
- **Signature optionnelle** et clôture sans blocage.

**Suite**

- Une méthode QA / Testeur pourra être **extraite plus tard** à partir de ces critères et de la revue simulée.

---

## 12. Impacts sur la revue simulée Figma V1

La revue simulée peut maintenant s'appuyer sur des **méthodes rôle enrichies** (§14 — bloc Figma V1 dans chaque méthode concernée).

| Décision de revue | Rôle principalement porteur | Critère associé |
|-------------------|------------------------------|-----------------|
| Validation MVP | Product Owner | 8 écrans ; exclusions portail/IA/BI ; valeur démo |
| Validation UI | UX/UI Designer | Cohérence ; polish vs bloquant ; hiérarchie |
| Validation sécurité | RSSI | Pas logs ; preuves fictives ; signature prudente |
| Validation cohérence ADR | Architecte | Simulation ; anomalies ; pas architecture implicite |
| Validation jalon | Chef de projet | Traçabilité ; séquence ; CR |
| Validation testabilité | QA / Testeur (candidat) | Parcours et états identifiables |
| Blocage delivery | Chef de projet + PO | Pas backlog / stories / code sans décision explicite |

---

## 13. Garde-fous ajoutés aux méthodes

- ne pas confondre **maquette présentable** et **maquette définitive** ;
- ne pas transformer automatiquement une maquette en **backlog** ;
- ne pas produire de **user stories** sans jalon delivery dédié ;
- vérifier les **surpromesses fonctionnelles** (PO, BA) ;
- vérifier les **surpromesses sécurité** (RSSI) ;
- vérifier les **architectures implicites** (Architecte) ;
- **documenter les contraintes outil / crédits** (Chef de projet) ;
- **capitaliser les retours** dans SFIA (templates, standards, checklists).

---

## 14. Prochaines actions

1. **Produire le compte rendu de revue simulée Figma V1** — en s'appuyant explicitement sur les méthodes rôle enrichies.
2. **Décider de la clôture du jalon Figma V1** — validé avec réserves, V2 ou delivery différé.
3. **Préparer éventuellement une sync Notion** — jalon Figma V1 en gouvernance (hors scope automatique).
4. **Capitaliser plus tard un standard QA / Testeur** si la revue simulée confirme le besoin.
5. **Maintenir le blocage** backlog / user stories / code tant que la revue simulée n'est pas documentée.

---

## 15. Conclusion

Les **méthodes rôle SFIA** ont été enrichies à partir de la **production et de la revue Figma V1** Interv360.

Ces enrichissements permettent de **sécuriser la revue simulée multi-rôles** en s'assurant que chaque décision est cohérente avec le savoir-faire, le savoir-être et les garde-fous de chaque rôle.

La **revue simulée** peut maintenant être produite sur une **base plus robuste**.

---

*Capitalisation méthodes rôle — Figma V1 — projet Interv360 — gouvernance SFIA.*
