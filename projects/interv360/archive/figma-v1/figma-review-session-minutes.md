# Interv360 — Compte rendu revue simulée Figma V1

**Projet** : PRJ-INTERV360
**Phase source** : 02-architecture
**Jalon** : Revue Figma V1
**Statut** : Reviewed — Simulated
**Type** : Compte rendu de revue transverse simulée
**Source** : `figma-review-session-preparation.md` + `figma-review-session-minutes-template.md` + `role-methods-enrichment-after-figma-v1.md` + méthodes rôle SFIA
**Objet** : documenter la validation simulée Figma V1 par les rôles SFIA enrichis

---

## 1. Nature de la revue

Cette revue **n'est pas une réunion réelle** avec des participants réels. Elle est réalisée dans le cadre du **projet pilote Interv360**, en **simulation multi-rôles SFIA**.

Il n'existe pas d'acteurs réels à mobiliser pour une revue PO / UX / RSSI / Architecte. La validation est donc structurée **au nom des rôles SFIA**, chacun appliquant son savoir-faire, son savoir-être, ses garde-fous et ses questions réflexes — sans attribution à des personnes physiques.

**Rôles mobilisés**

| Rôle SFIA | Statut méthode |
|-----------|----------------|
| Product Owner | Méthode officielle enrichie (§14 Figma V1) |
| UX/UI Designer | Méthode officielle enrichie (§14 Figma V1) |
| RSSI | Méthode officielle enrichie (§14 Figma V1) |
| Architecte | Méthode officielle enrichie (§14 Figma V1) |
| Chef de projet | Méthode officielle enrichie (§14 Figma V1) |
| Business Analyst | Méthode officielle enrichie (§14 Figma V1) |
| QA / Testeur | Rôle candidat — méthode officielle absente |

Chaque rôle évalue la maquette Figma V1 selon :

- son **savoir-faire** et son **savoir-être** ;
- ses **garde-fous** et **questions réflexes** ;
- les **apprentissages ADR P1/P2** ;
- les **apprentissages Figma V1** capitalisés dans `docs/methods/roles/` (bloc §14).

La revue s'appuie explicitement sur **`role-methods-enrichment-after-figma-v1.md`**, produite **avant** ce compte rendu afin de sécuriser la cohérence des validations par rôle.

**Référence qualité V1** : maquette **présentable**, **figée provisoirement**, qualité indicative **8,3 / 10** (`figma-first-draft-review.md`) — **non définitive**.

---

## 2. Supports analysés

| Support | Rôle dans la revue |
|---------|-------------------|
| `role-methods-enrichment-after-figma-v1.md` | Cadre capitalisation ; critères par rôle |
| `figma-first-draft-review.md` | Revue V1 ; points validés ; P1–P3 |
| `figma-review-session-preparation.md` | Périmètre ; checklist ; questions par écran |
| `figma-review-session-minutes-template.md` | Structure CR |
| `figma-first-draft-screens/` | 11 captures versionnées Git |
| `figma-design-instructions.md` | Garde-fous design ; direction visuelle |
| `architecture-p1-summary.md` | ADR P1 ; intégrations simulées |
| `architecture-p2-design-impact-summary.md` | ADR P2 design-impact |
| `adr/adr-cand-009-ai-light-post-mvp-confirmation.md` | IA hors MVP |

**Captures analysées**

| # | Fichier | Écran |
|---|---------|-------|
| 1 | `00-cover-context.png` | Cover / Context |
| 2 | `05-dashboard-sav.png` | Dashboard SAV |
| 3 | `06-liste-demandes.png` | Liste des demandes |
| 4 | `07-fiche-demande-sav.png` | Fiche demande SAV |
| 5 | `08-planning-semaine.png` | Planning semaine |
| 6 | `09-fiche-intervention-mobile.png` | Fiche intervention mobile |
| 7 | `10-compte-rendu-mobile.png` | Compte rendu mobile |
| 8 | `11-suivi-erreurs-integration.png` | Suivi erreurs intégration |
| 9 | `12-vue-dirigeant.png` | Vue dirigeant |
| 10 | `13-validation-checklist.png` | Validation checklist |
| 11 | `99-archive.png` | Archive / Explorations |

**Hors périmètre captures dédiées**

Les pages **01 — Design principles**, **02 — Tokens**, **03 — Components** et **04 — User flows MVP** n'ont **pas été exportées individuellement**. Elles ne sont **pas évaluées comme captures dédiées**. Éléments partiellement visibles via la cover et les écrans métier.

---

## 3. Décision globale simulée

**Décision globale** : **Validé avec ajustements mineurs — V1 présentable, non définitive.**

**Motifs**

- le **périmètre MVP** est respecté ;
- les **8 écrans MVP** sont présents (captures 05–12) ;
- les **garde-fous ADR P1/P2** sont globalement respectés ;
- l'**absence d'IA**, portail client, logs techniques, BI avancée et signature juridique complète est confirmée ;
- la direction **Enterprise clean** est globalement respectée ;
- la maquette est **suffisamment crédible** pour servir de support projet ;
- les ajustements restants relèvent du **polish UI**, du **wording** et de **quelques composants**.

**Limite de la décision**

Cette décision **n'autorise pas automatiquement** backlog, user stories ou code.

---

## 4. Synthèse des validations par rôle

| Rôle SFIA | Décision simulée | Justification |
|-----------|------------------|---------------|
| **Product Owner** | Validé avec ajustements mineurs | MVP respecté ; valeur métier lisible ; parcours SAV démontrable ; pas de dérive IA / portail / BI ; attention à certains wording d'onglets ou actions secondaires ; V2 différée possible sans bloquer la V1 |
| **UX/UI Designer** | Validé avec ajustements mineurs | Direction Enterprise clean cohérente ; écrans lisibles ; design présentable ; polish restant sur barres KPI, carte dirigeant, planning et hiérarchie mobile ; défauts restants non bloquants pour une V1 |
| **RSSI** | Validé avec réserves mineures | Pas de logs techniques ; pas de promesse de signature certifiée ; pas de conservation réelle ; pas d'IA visible ; vigilance sur onglets Preuves / Notifications et wording associé |
| **Architecte** | Validé avec ajustements mineurs | Cohérence ADR P1/P2 respectée ; anomalies métier et reprise manuelle visibles ; intégrations simulées non exposées comme intégrations réelles ; pas d'architecture implicite de portail, BI ou IA |
| **Chef de projet** | Validé V1 pour jalon de revue | V1 figée et traçable ; captures versionnées ; revue documentée ; backlog / user stories / code restent bloqués ; ajustements futurs identifiés ; contrainte crédits Figma documentée |
| **Business Analyst** | Validé comme support de compréhension métier | Statuts, SLA, prochaines actions et parcours lisibles ; zones ambiguës identifiées ; workflows implicites documentés sans produire de backlog ; matière exploitable pour phase ultérieure, pas encore pour user stories |
| **QA / Testeur candidat** | Validé comme base de préparation QA future | Parcours happy path visibles ; non happy path visibles (signature absente, échec notification, anomalie, reprise manuelle) ; scénarios testables identifiables ; méthode QA / Testeur reste candidate à extraction future |

---

## 5. Revue simulée par écran

### 5.1 Dashboard SAV

| Champ | Contenu |
|-------|---------|
| **Décision** | Validé avec ajustements mineurs |
| **Points validés** | KPI actionnables ; CTA visibles ; alertes hiérarchisées ; filtre période ; dashboard distinct de la vue dirigeant |
| **Ajustements retenus** | Clarifier ou supprimer les barres verticales KPI ; renforcer la hiérarchie KPI critiques / secondaires ; améliorer éventuellement la lisibilité du graphe |
| **Rôles concernés** | Product Owner ; UX/UI Designer ; Business Analyst ; Chef de projet |

### 5.2 Liste des demandes

| Champ | Contenu |
|-------|---------|
| **Décision** | Validé V1 |
| **Points validés** | Colonnes métier pertinentes ; SLA visible ; prochaine action claire ; statuts lisibles ; pas de scoring IA |
| **Ajustements retenus** | Vérifier cohérence statuts / couleurs ; tri visuel SLA ou priorité optionnel en V2 |
| **Rôles concernés** | Product Owner ; UX/UI Designer ; Business Analyst ; QA / Testeur candidat |

### 5.3 Fiche demande SAV

| Champ | Contenu |
|-------|---------|
| **Décision** | Validé avec vigilance wording |
| **Points validés** | Structure claire ; résumé, qualification, intervention, historique, notifications/anomalies ; CTA pertinents |
| **Ajustements retenus** | Vérifier que les onglets Client / Preuves / Notifications ne promettent pas un détail hors MVP ; garder les contenus légers ; éviter toute logique portail ou centre notifications |
| **Rôles concernés** | Product Owner ; RSSI ; UX/UI Designer ; Architecte ; Business Analyst |

### 5.4 Planning semaine

| Champ | Contenu |
|-------|---------|
| **Décision** | Validé V1 — amélioration future possible |
| **Points validés** | Lecture par technicien ; repères horaires ; conflits et retards visibles ; cartes intervention crédibles |
| **Ajustements retenus** | Renforcer lecture temporelle en V2 si possible ; clarifier structure jour/semaine ; ne pas ajouter optimisation IA ou prédiction |
| **Rôles concernés** | Product Owner ; UX/UI Designer ; Business Analyst ; QA / Testeur candidat |

### 5.5 Fiche intervention mobile

| Champ | Contenu |
|-------|---------|
| **Décision** | Validé V1 |
| **Points validés** | Mobile orienté terrain ; CTA « Démarrer intervention » clair ; actions appeler / photo / compte rendu ; preuves et signature visibles |
| **Ajustements retenus** | Surveiller « Clôturer plus tard » pour éviter workflow non cadré ; hiérarchiser actions secondaires si V2 |
| **Rôles concernés** | UX/UI Designer ; Product Owner ; Business Analyst ; QA / Testeur candidat |

### 5.6 Compte rendu mobile

| Champ | Contenu |
|-------|---------|
| **Décision** | Validé avec vigilance sur action brouillon |
| **Points validés** | Signature optionnelle ; « Continuer sans signature » visible ; clôture possible ; preuves fictives ; wording prudent |
| **Ajustements retenus** | Surveiller « Enregistrer brouillon » ; éviter toute promesse de signature certifiée ou archivage réel |
| **Rôles concernés** | RSSI ; Product Owner ; UX/UI Designer ; Business Analyst ; QA / Testeur candidat |

### 5.7 Suivi erreurs intégration

| Champ | Contenu |
|-------|---------|
| **Décision** | Validé V1 |
| **Points validés** | Messages métier ; reprise disponible ; lien dossier ; pas de log brut ; pas de SIEM |
| **Ajustements retenus** | Vérifier cohérence gravité / statut ; hiérarchiser les actions si V2 |
| **Rôles concernés** | Architecte ; RSSI ; QA / Testeur candidat ; UX/UI Designer ; Business Analyst |

### 5.8 Vue dirigeant

| Champ | Contenu |
|-------|---------|
| **Décision** | Validé avec polish visuel futur |
| **Points validés** | Vue distincte du dashboard SAV ; synthèse dirigeant lisible ; tendances simples ; alertes majeures ; pas de logs ; pas de BI avancée ; pas d'IA prédictive |
| **Ajustements retenus** | Adoucir la carte noire « Indice opérationnel » en V2 ; vérifier que les tendances restent non prédictives |
| **Rôles concernés** | Product Owner ; UX/UI Designer ; Architecte ; Business Analyst |

### 5.9 Cover / Checklist / Archive

| Champ | Contenu |
|-------|---------|
| **Décision** | Validé V1 |
| **Points validés** | Contexte MVP clair ; checklist présente ; archive vide ; pages 01–04 non inventées |
| **Ajustements retenus** | Exporter pages 01–04 seulement si V2 et si utile ; conserver archive vide tant que post-MVP non réouvert |
| **Rôles concernés** | Chef de projet ; UX/UI Designer ; Architecte |

---

## 6. Garde-fous confirmés

*Validation simulée — rôles RSSI, Architecte, Product Owner.*

- [x] pas d'IA visible
- [x] pas de scoring
- [x] pas de chatbot
- [x] pas de prédiction
- [x] pas de résumé automatique
- [x] pas de portail client
- [x] pas de BI avancée
- [x] pas de logs techniques
- [x] pas de SIEM
- [x] pas de signature juridique complète
- [x] pas de conservation réelle promise
- [x] signature optionnelle
- [x] absence de signature non bloquante
- [x] notifications simples
- [x] anomalies en message métier
- [x] preuves fictives / métadonnées

**Synthèse** : **Aucun écart bloquant** n'est identifié sur les garde-fous ADR P1/P2.

---

## 7. Ajustements retenus

| Priorité | Ajustement | Écran | Décision | Cible |
|----------|------------|-------|----------|-------|
| P1 | Clarifier ou supprimer barres verticales KPI | Dashboard SAV | Retenu | V2 / polish futur |
| P1 | Vérifier wording onglets et actions secondaires | Fiche demande / CR | Retenu | V2 / revue wording |
| P2 | Adoucir carte indice opérationnel | Vue dirigeant | Retenu | V2 / polish futur |
| P2 | Améliorer planning temporel | Planning | Optionnel | V2 si disponible |
| P2 | Affiner hiérarchie mobile | Fiche intervention / CR | Optionnel | V2 |
| P3 | Améliorer graphs | Dashboard / dirigeant | Optionnel | V2 |
| P3 | Enrichir états empty/loading/error | Listes / anomalies | Optionnel | V2 |
| P3 | Exporter pages 01–04 si V2 | Structure Figma | Optionnel | V2 |

---

## 8. Points reportés / hors MVP

| Point | Motif de report | Cible éventuelle |
|-------|-----------------|------------------|
| IA / scoring / recommandations | Report ADR-CAND-009 | post-MVP |
| Portail client | Hors MVP ADR-006 | post-MVP |
| BI avancée / drill-down analytique | Hors MVP ADR-008 | post-MVP |
| Signature électronique juridiquement complète | Hors MVP ADR-007 | post-MVP |
| Conservation réelle / archivage / purge | Hors MVP ADR-005 | post-MVP |
| Logs techniques / SIEM | Hors MVP ADR-004 / P1 | post-MVP ou hors périmètre démonstrateur |

---

## 9. Décision V2

| Champ | Valeur |
|-------|--------|
| **V2 nécessaire** | **Différée** |
| **Motif** | Les ajustements restants ne bloquent pas la revue V1 ; la V1 est présentable ; les crédits Figma gratuits sont épuisés ; une V2 pourra être envisagée si crédits / outil alternatif disponible ou si une revue future l'exige |
| **Condition de lancement** | Arbitrage Chef de projet / Product Owner ; disponibilité outil ou crédits ; priorisation des ajustements P1/P2 |
| **Outil / crédits disponibles** | Crédits Figma gratuits épuisés — V2 conditionnée |
| **Périmètre V2** | P1 wording et barres KPI ; P2 polish carte dirigeant, planning, mobile ; P3 optionnel (graphs, états, export pages 01–04) |
| **Date cible éventuelle** | Non fixée — différée |

---

## 10. Décision delivery

| Champ | Valeur |
|-------|--------|
| **Passage delivery autorisé** | **Non** — à ce stade |
| **Backlog autorisé** | **Non** |
| **User stories autorisées** | **Non** |
| **Code autorisé** | **Non** |

**Justification**

La revue simulée valide la V1 comme **support de revue et de capitalisation**, mais **ne déclenche pas automatiquement le delivery**. Un **jalon explicite de transition vers delivery** sera nécessaire.

*Garde-fou Chef de projet — §14 méthode rôle : maquette V1 présentable ≠ feu vert delivery.*

---

## 11. Impacts SFIA identifiés

| Impact SFIA | Description | Action |
|-------------|-------------|--------|
| Standard revue simulée multi-rôles | Formaliser la capacité à valider un projet fictif par rôles SFIA | Candidat standard |
| Template CR revue simulée Figma | Réutiliser la structure de ce document et du template CR | Candidat template |
| Checklist garde-fous Figma post-ADR | Déjà utilisée en revue simulée | Enrichissement futur possible |
| Méthode QA / Testeur | Rôle utile en revue ; méthode officielle absente | Extraction future candidate |
| Prompt UX / Figma | Retour d'usage concret sur production et revue V1 | Enrichissement post-REX possible |
| Standard V1 présentable non définitive | Capitaliser la distinction présentable / définitif / delivery | Candidat standard |

---

## 12. Décisions finales

| Décision | Statut | Commentaire |
|----------|--------|-------------|
| V1 Figma validée comme présentable | Validé | Non définitive ; qualité indicative 8,3/10 |
| Ajustements P1/P2 documentés | Validé | V2 différée |
| Garde-fous ADR P1/P2 respectés | Validé | Aucun écart bloquant |
| Delivery non déclenché | Validé | Backlog / user stories / code bloqués |
| V2 différée | Validé | Crédits Figma épuisés |
| Capitalisation SFIA à prévoir | À planifier | Après clôture jalon Figma V1 |

---

## 13. Prochaines actions

| Action | Responsable rôle | Échéance | Statut |
|--------|------------------|----------|--------|
| Préparer une synthèse de clôture Figma V1 | Chef de projet | Prochaine étape | À faire |
| Préparer une sync Notion jalon Figma V1 si nécessaire | Chef de projet | Optionnel | À arbitrer |
| Capitaliser les apprentissages Figma V1 dans prompts / méthodes | Chef de projet + UX/UI Designer | Après clôture | À planifier |
| Ne pas lancer backlog / user stories / code | Chef de projet | Immédiat | En vigueur |
| Réouvrir V2 si crédits / outils disponibles | Product Owner + Chef de projet | Futur | Différé |

---

## 14. Conclusion

La **revue simulée Figma V1** confirme que la maquette Interv360 est **présentable** et **cohérente** avec le périmètre MVP, les **ADR P1/P2** et les **garde-fous UX/SSI**.

La validation **multi-rôles SFIA** conclut à une **V1 validée avec ajustements mineurs**, **non définitive**, **sans déclenchement delivery**. Les ajustements identifiés sont documentés pour une **V2 différée**.

Le **prochain jalon recommandé** est la **clôture du jalon Figma V1**, éventuellement suivie d'une **synchronisation Notion** et d'une **capitalisation SFIA complémentaire**.

---

*Compte rendu revue simulée Figma V1 — projet pilote Interv360 — gouvernance SFIA — aucun participant réel.*
