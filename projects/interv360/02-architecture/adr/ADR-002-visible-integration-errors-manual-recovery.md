# ADR-002 — Gestion visible des erreurs d'intégration avec reprise manuelle

**Projet** : PRJ-INTERV360  
**Phase** : 02-architecture  
**Statut** : Accepted  
**Source candidate** : ADR-CAND-002  
**ADR liée** : ADR-001  
**Rôles principaux** : Architecte, QA / Testeur  
**Rôles contributeurs** : Product Owner, UX/UI Designer, Chef de projet, RSSI  
**Type** : Architecture Decision Record

---

## 1. Contexte

**ADR-001** a retenu des **contrats API documentés avec implémentation simulée** pour les six domaines d'intégration du MVP (CRM, calendrier, notifications, facturation, email sécurisé). Ces contrats **incluent des erreurs attendues** : indisponibilité simulée, payload incomplet, doublon, conflit créneau, mapping statut incohérent, etc. (`integration-error-arbitration-review.md` §5, §8).

Le cadrage a validé **ARB-MVP-05** : retenir le **niveau 3 — erreurs visibles dans un écran anomalies avec reprise manuelle simulée** ; **retry automatique hors MVP** (`mvp-arbitration-validation.md`, `integration-error-arbitration-review.md` §7).

L'objectif est de rendre les erreurs **compréhensibles et démontrables** dans le MVP — notamment le cas métier **CF9** (échec sync CRM) — sans masquer les anomalies dans des logs techniques ni implémenter de mécanisme de retry automatique.

ADR-002 est **indissociable d'ADR-001** : les contrats documentent les erreurs possibles ; cette ADR formalise comment elles deviennent **visibles et actionnables** dans le produit. **ADR-004** traitera ensuite la journalisation minimale des flux et rejets.

---

## 2. Problème à résoudre

**Comment rendre les erreurs d'intégration visibles, compréhensibles et actionnables dans le MVP Interv360, sans implémenter de retry automatique ni masquer les erreurs dans des logs techniques ?**

Sans visibilité explicite, le démonstrateur perd en crédibilité (R-UX06, R-I03, R-I04), le cas CF9 ne peut pas être démontré, et la valeur dirigeant / manager opérationnel (RG-I09, écran anomalies) n'est pas atteinte.

---

## 3. Options étudiées

| Option | Description | Avantages | Limites | Décision |
|--------|-------------|-----------|---------|----------|
| **A — Erreurs masquées / logs techniques uniquement** | Erreur enregistrée en log ; pas de visibilité utilisateur | Effort minimal ; simplicité technique | Anomalie invisible ; CF9 non démontré ; perte confiance dirigeant | **Rejetée** |
| **B — Indicateur agrégé uniquement sur dashboard** | Compteur anomalies sur tableau de bord ; pas de détail ni action | Visibilité synthétique ; complément pilotage | Insuffisant seul — pas de détail ni reprise guidée | **Insuffisante seule** — complément dashboard autorisé |
| **C — Écran anomalies + reprise manuelle simulée** | Liste dédiée ; détail erreur ; action corrective par l'utilisateur | Parcours non happy path démontrable ; valeur manager ; testabilité QA | Effort UX et modélisation anomalies ; risque surcharge écran | **Retenue** |
| **D — Retry automatique + supervision complète** | Nouvelle tentative automatique ; alertes ; SLA ; corrélation multi-flux | Robustesse opérationnelle ; couverture avancée | Complexité élevée ; hors scope pilote MVP ; confusion reprise simulée / réelle | **Reportée post-MVP** |

---

## 4. Décision

**La décision retenue est de rendre les erreurs d'intégration visibles dans un écran anomalies, avec une reprise manuelle simulée, sans retry automatique au MVP.**

Précisions :

- **chaque erreur significative** issue des contrats ADR-001 doit être **visible** dans l'écran anomalies (§5.7 `ux-ui-brief.md`) ;
- les erreurs doivent être **compréhensibles** par un utilisateur métier ou support — message métier prioritaire, détail technique limité ;
- la **reprise manuelle simulée** permet de rejouer une tentative simulée ou de marquer une anomalie comme traitée, **sans mécanisme automatique réel** ;
- les **logs techniques détaillés** seront instruits dans **ADR-004** (journalisation minimale) ;
- les erreurs visibles doivent rester **alignées avec les contrats documentés** par ADR-001 (source, type, gravité, codes retour).

**Retry automatique : explicitement hors MVP** — peut être préparé comme extension ou ADR future post-MVP.

---

## 5. Périmètre des erreurs visibles

| Domaine | Exemples d'erreurs visibles | Commentaire |
|---------|----------------------------|-------------|
| **CRM simulé** | CRM indisponible ; payload incomplet ; doublon demande ; identifiant inconnu ; erreur mapping statut | Cas CF9 obligatoire — échec sync critique |
| **Calendrier / planning simulé** | Conflit de créneau ; calendrier indisponible ; technicien indisponible | Erreur planification — action choix créneau alternatif |
| **Notifications simulées** | Service notification indisponible ; canal invalide ; contenu rejeté | Erreur **non bloquante** — relance manuelle |
| **Facturation simulée** | Export incomplet ; données manquantes ; service indisponible | Erreur clôture partielle — compléter ou forcer export partiel |
| **Email sécurisé non principal** | Email non authentifié ; expéditeur non autorisé ; pièce jointe invalide ; classification impossible | Erreur sécurité explicite — lien ADR-CAND-003 |
| **Erreurs de mapping / payload** | Champs manquants ; statuts source/cible incohérents ; mapping client inconnu | Transversal — lié contrats ADR-001 |
| **Erreurs de disponibilité simulée** | Timeout simulé ; service externe simulé down | Démonstration résilience perçue sans retry auto |

*Source cas minimum : `integration-error-arbitration-review.md` §8.*

---

## 6. Statuts fonctionnels des anomalies

| Statut | Signification | Usage MVP |
|--------|---------------|-----------|
| **Nouvelle** | Erreur détectée, non encore analysée | Entrée par défaut à la détection |
| **À analyser** | Erreur prise en compte, investigation en cours | Manager opérationnel consulte le détail |
| **Reprise simulée disponible** | Action corrective proposée à l'utilisateur | Bouton reprise manuelle activable |
| **Reprise effectuée** | Tentative simulée relancée ou traitement simulé terminé | Démonstration parcours non happy path résolu |
| **Échec confirmé** | Reprise simulée échouée ou erreur persistante | Cas CF9 prolongé — pas de retry auto |
| **Ignorée / non bloquante** | Anomalie connue, sans impact parcours principal | Notifications échouées, alertes mineures |

*Machine d'état volontairement simple — niveau fonctionnel uniquement, sans workflow complexe.*

---

## 7. Reprise manuelle simulée

**Principe :**

- **action utilisateur simulée** — le manager opérationnel ou le responsable SAV déclenche une reprise depuis l'écran anomalies ;
- **pas de retry automatique** — aucune nouvelle tentative sans action explicite de l'utilisateur ;
- **possibilité de rejouer une tentative simulée** — relance simulée du flux d'intégration concerné (ex. re-sync CRM) ;
- **possibilité de marquer comme traitée** — clôture manuelle si contournement métier (saisie secours, choix créneau alternatif) ;
- **traçabilité minimale** à prévoir via **ADR-004** — horodatage, acteur, action, résultat simulé ;
- **objectif démonstrateur** : montrer que l'erreur est **comprise, visible et traitable** — pas qu'un système se répare automatiquement.

Actions principales cadrées (`ux-ui-brief.md` §5.7) : consulter détail ; lancer reprise manuelle simulée ; marquer traité ; lien vers dossier concerné.

---

## 8. Conséquences positives

- **Transparence des erreurs** — aucune anomalie significative masquée ;
- **Crédibilité du démonstrateur** — parcours non happy path (CF9) démontrable ;
- **Meilleure testabilité QA** — Error Matrix alimentée par domaine et statut ;
- **Meilleure compréhension métier** — langage compréhensible pour manager opérationnel ;
- **Lien UX avec écran anomalies** — §5.7 brief validé ; indicateurs dashboard complémentaires ;
- **Base pour journalisation ADR-004** — événements reprise et rejets traçables ;
- **Capitalisation SFIA** — Template Error Matrix ; standard erreurs visibles + reprise manuelle simulée.

---

## 9. Conséquences négatives / coûts

- **Besoin de modéliser les anomalies** — statuts, gravité, source, lien dossier ;
- **Effort UX supplémentaire** — écran dédié, distinction bloquant / non bloquant, wording statuts ;
- **Risque de surcharger l'écran anomalies** — trop de détail ou trop d'erreurs simultanées ;
- **Risque de confusion** entre reprise simulée et vraie reprise technique post-MVP ;
- **Nécessité de distinguer** message métier et log technique (point ouvert UX avant maquette) ;
- **Pas de résilience automatique** au MVP — erreurs transitoires nécessitent action manuelle.

---

## 10. Garde-fous

- [ ] ne pas implémenter de **retry automatique** au MVP ;
- [ ] ne pas masquer les erreurs dans des **logs techniques uniquement** ;
- [ ] ne pas exposer de **données sensibles** dans les messages visibles ;
- [ ] ne pas créer un **outil complet de supervision** (SLA, alertes, corrélation multi-flux) ;
- [ ] **limiter les statuts** au besoin MVP (§6) ;
- [ ] **distinguer message métier et détail technique** ;
- [ ] **relier chaque erreur visible** à un contrat ADR-001 (domaine, code retour) ;
- [ ] préparer le lien avec **ADR-004** sur journalisation minimale.

---

## 11. Impacts projet

| Domaine | Impact |
|---------|--------|
| **MVP** | ARB-MVP-05 formalisé ; écran anomalies MVP ; CF9 démontrable ; retry auto exclu |
| **UX/UI** | §5.7 brief validé ; statuts anomalies ; reprise guidée ; lien dashboard ↔ anomalies |
| **QA** | Error Matrix ; scénarios sync échouée ; non happy path obligatoire |
| **SSI** | Pas d'exposition données sensibles dans messages UI ; traçabilité via ADR-004 |
| **Exploitation** | Pas de supervision avancée MVP ; volume anomalies maîtrisé |
| **Future architecture** | Extension retry auto et supervision reportée ; modèle Error préparé |
| **Notion / gouvernance** | Jalon ADR-002 à synchroniser après consolidation — pas maintenant |

---

## 12. Impacts SFIA

| Asset SFIA | Impact |
|------------|--------|
| `docs/methods/roles/architect-method.md` | Enrichissement après ADR-004 — lien contrats / erreurs / journalisation |
| `docs/methods/roles/ux-ui-designer-method.md` | Enrichissement après ADR-004 — écran anomalies, message métier vs log |
| `docs/methods/roles/product-owner-method.md` | ARB-MVP-05 formalisé ; périmètre retry hors MVP confirmé |
| `docs/methods/roles/project-manager-method.md` | Traçabilité ADR-002 ; sync Notion post-jalon |
| `prompts/prompt-catalog.md` | PROMPT-ARCH-001, PROMPT-UX-001 candidats à formaliser |
| `prompts/architecture/` | Accueil futur prompts Error Matrix et revue intégrations |
| **Futur Template Error Matrix** | §5 + §8 + integration-error-arbitration-review §8 |
| **Futur Standard erreurs visibles + reprise manuelle simulée** | Niveau 3 ARB-MVP-05 comme référence SFIA |

---

## 13. Rôles mobilisés

| Rôle | Contribution |
|------|--------------|
| **Architecte** | Décision structurante ; modèle Error fonctionnel ; lien ADR-001 / ADR-004 |
| **QA / Testeur** | Error Matrix ; scénarios CF9 et non happy path ; critères testabilité |
| **UX/UI Designer** | Écran anomalies §5.7 ; statuts ; wording ; distinction bloquant / non bloquant |
| **Product Owner** | Validation valeur métier ; maintien retry hors MVP |
| **Chef de projet** | Traçabilité décision ; gouvernance Git |
| **RSSI** | Revue exposition messages ; pas de données sensibles dans UI visible |

---

## 14. Prompts impactés

| Prompt candidat | Impact |
|-----------------|--------|
| **PROMPT-ARCH-001** — Revue intégrations et erreurs | Directement alimenté — ADR-001 + ADR-002 ; candidat Draft post-ADR P1 |
| **PROMPT-UX-001** — Brief UX/UI avant Figma | §5.7 écran anomalies — Figma autorisé post-décisions structurantes |
| **PROMPT-UX-003** — Revue dashboard KPI UX | Indicateurs anomalies dashboard — complément écran dédié |
| **PROMPT-ROLE-003** — Extraction méthode rôle | Architecte, UX, PO à enrichir post-ADR-004 |
| **PROMPT-GOV-001** — Synchronisation gouvernance Notion projet | Jalon architecture — pas maintenant |

---

## 15. Relations avec les autres ADR

| ADR | Relation |
|-----|----------|
| **ADR-001** — Contrats API documentés avec implémentation simulée | **Prérequis** — contrats documentent erreurs attendues ; ADR-002 instruit visibilité |
| **ADR-CAND-004** — Journalisation minimale des flux et rejets | **Suivante** — traçabilité reprises et rejets (→ ADR-004) |
| **ADR-CAND-003** — Canal email sécurisé non principal | **Complémentaire** — erreurs email visibles ; ADR-003 instruit exigences SSI canal |

---

## 16. Critères de validation de l'ADR

- [x] la décision est reliée à **ADR-CAND-002** ;
- [x] la décision est **cohérente avec ADR-001** ;
- [x] les **options** sont documentées ;
- [x] les **alternatives rejetées** sont explicites (A rejetée, B insuffisante seule, D reportée) ;
- [x] la décision **ne produit pas** d'architecture complète ;
- [x] les **impacts projet** sont identifiés ;
- [x] les **impacts SFIA** sont identifiés ;
- [x] les **rôles mobilisés** sont documentés ;
- [x] les **prompts impactés** sont identifiés ;
- [x] les **garde-fous** sont explicites ;
- [x] le **retry automatique** est explicitement **hors MVP**.

---

## 17. Contrôle capitalisation SFIA

| Élément | Capitalisation | Type |
|---------|----------------|------|
| Template ADR | Structure présente ADR-002 | Template |
| Template Error Matrix | §5 périmètre + integration-error-arbitration-review §8 | Template |
| Standard erreurs visibles + reprise manuelle simulée | Niveau 3 ARB-MVP-05 retenu | Standard |
| Checklist ADR guardrails | §10 garde-fous | Checklist |
| Prompt ADR architecture | PROMPT-ARCH-001 — formalisation future | Prompt |
| Matrice ADR → prompts | §14 | Template |
| Matrice ADR → rôles | §13 | Template |

---

## 18. Contrôle capitalisation rôle

| Méthode | Enrichissement immédiat ? | Décision |
|---------|---------------------------|----------|
| `docs/methods/roles/architect-method.md` | Non | Enrichir après **ADR-004** — ensemble contrats / erreurs / journalisation |
| `docs/methods/roles/ux-ui-designer-method.md` | Non | Enrichir après **ADR-004** — écran anomalies + journalisation |
| `docs/methods/roles/product-owner-method.md` | Non | Enrichir après **ADR-004** — ARB-MVP-05 avec traçabilité complète |
| `docs/methods/roles/project-manager-method.md` | Non | Enrichir après jalon architecture consolidé (ADR P1) |

**Les méthodes rôle ne sont pas modifiées à cette étape.**

ADR-001, ADR-002 et ADR-004 forment un **ensemble cohérent** : contrats API → erreurs visibles → journalisation. L'enrichissement des méthodes est prévu **après ADR-004**.

---

## 19. Prochaines actions

- instruire **ADR-CAND-003** sur le canal email sécurisé non principal (→ ADR-003) ;
- instruire **ADR-CAND-004** sur la journalisation minimale (→ ADR-004) ;
- consolider ensuite les impacts **Architecte / RSSI / QA / UX** ;
- mettre à jour les **méthodes rôle** concernées après ADR-004 ;
- formaliser **PROMPT-ARCH-001** en Draft si le prompt devient opérationnel ;
- synchroniser **Notion** après jalon architecture consolidé — **pas maintenant**.

---

## 20. Conclusion

Cette ADR formalise le choix de rendre les **erreurs d'intégration visibles et actionnables** via un **écran anomalies** et une **reprise manuelle simulée**.

Elle **complète ADR-001** (contrats API simulés) et **prépare ADR-004** (journalisation minimale), sans produire de retry automatique, supervision complète ou architecture technique détaillée.

**Retry automatique : hors MVP.**

---

*ADR-002 — projet Interv360, phase 02-architecture, gouvernance SFIA.*
