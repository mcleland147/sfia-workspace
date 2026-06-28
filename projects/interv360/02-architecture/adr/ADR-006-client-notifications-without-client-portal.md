# ADR-006 — Notifications client sans portail client

**Projet** : PRJ-INTERV360  
**Phase** : 02-architecture  
**Bloc** : ADR P2 — impacts design / MVP  
**Statut** : Accepted  
**Source candidate** : ADR-CAND-006  
**ADR liées** : ADR-001, ADR-002, ADR-004, ADR-005  
**Rôles principaux** : Product Owner, UX/UI Designer, Architecte  
**Rôles contributeurs** : RSSI, QA / Testeur, Chef de projet  
**Type** : Architecture Decision Record

---

## 1. Contexte

Le MVP Interv360 prévoit des **notifications client simulées** via le contrat `POST /notifications/envoi` (ADR-001). Le cadrage a arbitré **ARB-MVP-02** : **notifications uniquement** au MVP ; **portail client en évolution ultérieure** — client final sans accès direct à la plateforme (`mvp-arbitrations.md`, `ux-ui-brief.md` §4).

**ADR-002** prévoit que les **erreurs significatives de notification** peuvent être visibles dans l'écran anomalies — généralement **non bloquantes** (`integration-error-arbitration-review.md` §8).

**ADR-004** prévoit la **journalisation minimale** des flux, y compris événements notification (`ENVOYEE`, `ECHEC`).

**ADR-005** rappelle que l'historique dossier reste **simplifié** — pas de centre de preuves ni portail.

Avant **Figma**, il faut clarifier ce que les écrans représentent : **statut notification**, **historique simplifié**, **erreur éventuelle** — sans portail client complet ni suivi notification détaillé (ARB-MVP-07 : suivi notifications en cible ultérieure).

---

## 2. Problème à résoudre

**Quel niveau de notification client retenir au MVP Interv360 pour informer le client de manière crédible, sans créer de portail client, sans suivi notification détaillé et sans élargir le périmètre UX/UI au-delà du démonstrateur ?**

Sans clarification, Figma pourrait créer un faux portail client, un centre de notifications avancé, ou masquer les échecs de notification utiles au dashboard et aux anomalies.

---

## 3. Options étudiées

| Option | Description | Avantages | Limites | Décision |
|--------|-------------|-----------|---------|----------|
| **A — Aucune notification client** | Suivi interne uniquement ; pas de contact client simulé | Simplicité extrême | Cas métier CF4 non démontré ; parcours incomplet | **Rejetée** |
| **B — Notifications client simples et simulées, sans portail** | Email/SMS simulés ; statut interne ; indicateur échecs dashboard | Scope maîtrisé ; aligné ARB-MVP-02 ; intégration ADR-001 | Expérience client limitée ; pas de self-service | **Retenue** |
| **C — Suivi détaillé des notifications dans le produit** | Écran dédié ; historique complet ; statuts enrichis | Visibilité ops notification | Scope élargi ; conflit ARB-MVP-07 | **Reportée post-MVP** |
| **D — Portail client complet** | Accès statut demande, self-service | Meilleure expérience client | Effort UX/SSI ; dérive scope ; ARB-MVP-02 exclu | **Hors MVP** |

---

## 4. Décision

**La décision retenue est d'intégrer des notifications client simples, simulées et traçables au MVP, sans portail client et sans suivi détaillé des notifications.**

Précisions :

- les notifications **informent le client** des étapes clés du parcours SAV ;
- elles sont **simulées** conformément à **ADR-001** (`POST /notifications/envoi`) ;
- elles sont **visibles côté support / manager** sous forme de **statut ou historique simplifié** (fiche demande, historique dossier) ;
- les **erreurs significatives** peuvent apparaître dans l'**écran anomalies** (ADR-002) — généralement non bloquantes ;
- les **événements minimum** sont **journalisés** (ADR-004) ;
- **aucun portail client** au MVP ;
- **aucun** espace client, tableau de suivi client, messagerie client ou **préférence notification avancée** au MVP ;
- cette ADR **prépare Figma** mais **ne déclenche pas** Figma.

---

## 5. Événements de notification MVP

| Événement | Notification MVP | Visibilité interne | Commentaire |
|-----------|------------------|-------------------|-------------|
| **Demande créée / prise en compte** | Oui — accusé réception simulé | Historique dossier ; fiche demande | Entrée parcours SAV |
| **Intervention planifiée** | Oui — créneau confirmé | Fiche intervention ; historique | Lien calendrier simulé |
| **Intervention replanifiée** | Oui — nouveau créneau | Fiche intervention ; historique | Cas modification créneau |
| **Technicien en route / intervention imminente** | À confirmer Figma / PO | Badge optionnel fiche intervention | Non explicite cadrage — **optionnel MVP** |
| **Intervention terminée** | Oui — fin intervention | Historique ; dashboard agrégat | Étape clôture terrain |
| **Compte rendu disponible** | Oui — CR disponible (simulé) | Historique ; fiche intervention | Lien ADR-005 preuves |
| **Clôture dossier** | Oui — dossier clôturé | Historique ; statut demande | Fin parcours |
| **Notification échouée** | Non envoyée — statut Échec | Anomalies (ADR-002) ; indicateur dashboard | Cas non happy path obligatoire QA |

---

## 6. Canaux de notification simulés

| Canal | Statut MVP | Commentaire |
|-------|------------|-------------|
| **Email simulé** | Inclus | Canal principal notification client simulée |
| **SMS simulé** | Optionnel MVP | Cohérent ARB-MVP-02 (email/SMS) — **à confirmer Figma / PO** ; un canal suffit pour démo |
| **Notification interne support** | Inclus | Statut visible équipe ; pas envoi client réel |
| **Portail client** | **Hors MVP** | ARB-MVP-02 — extension ultérieure |
| **Préférences client** | **Hors MVP** | Pas de gestion opt-in/opt-out avancée |

---

## 7. Statuts de notification

| Statut | Signification | Usage MVP |
|--------|---------------|-----------|
| **À envoyer** | Événement déclencheur détecté ; envoi simulé en attente | Transition courte |
| **Envoyée** | Notification simulée émise avec succès | Happy path |
| **Échec d'envoi** | Service indisponible, canal invalide, contenu rejeté | Anomalies + dashboard |
| **Ignorée / non bloquante** | Erreur connue ; parcours principal continue | Notification non critique |
| **Reprise manuelle disponible** | Relance simulée possible (ADR-002) | Action manager depuis anomalies |
| **Non applicable** | Événement sans notification client | Étapes internes |

---

## 8. Visibilité UX/UI avant Figma

| Écran / zone | Impact design | Décision |
|--------------|---------------|----------|
| **Fiche demande SAV** | Badge ou ligne « dernière notification » | Statut simplifié — pas contenu message complet |
| **Fiche intervention** | Indicateur notification planification / clôture | Badge « notifié » ou horodatage |
| **Historique dossier** | Entrées « notification envoyée / échec » | Trace simplifiée — ADR-005 |
| **Écran anomalies** | Erreur notification si significative | ADR-002 — non bloquant par défaut |
| **Dashboard SAV** | Indicateur « notifications en échec » | ARB-MVP-02 / ux-ui-brief — **pas écran dédié** |
| **Vue dirigeant** | Agrégat optionnel — ADR-CAND-008 | Pas détail par notification |
| **Portail client** | **Aucun écran** | Hors MVP |
| **Préférences notification** | **Aucun écran** | Hors MVP |

**Principes Figma :**

- prévoir des **statuts ou badges** côté interne ;
- **ne pas** prévoir de portail client complet ;
- **ne pas** prévoir un centre de notification client détaillé ;
- erreurs notification **sobres** et **non bloquantes** sauf impact métier explicite.

---

## 9. Relation avec erreurs et journalisation

| Cas | Anomalie visible ? | Journalisation minimale | Commentaire |
|-----|-------------------|------------------------|-------------|
| **Notification envoyée** | Non (happy path) | Oui — SUCCESS, événement, horodatage | Historique dossier |
| **Notification échouée** | Oui — si impact métier/ops | Oui — FAILED, code erreur | Dashboard + anomalies |
| **Canal invalide** | Oui | Oui — REJECTED ou FAILED | Scénario contrat ADR-001 |
| **Contenu rejeté** | Oui — si significatif | Oui — motif | Rare au MVP |
| **Service notification indisponible** | Oui | Oui — FAILED | Cas QA non happy path |
| **Notification ignorée non bloquante** | Non — ou indicateur dashboard | Oui — IGNORED_NON_BLOCKING | ADR-004 |
| **Reprise manuelle simulée** | Oui — statut reprise | Oui — MANUAL_RECOVERY_* | ADR-002 |

- erreurs notification **généralement non bloquantes** ;
- **log technique complet non exposé** dans l'UI (ADR-004, ADR-005).

---

## 10. Impacts SSI / UX / QA

| Axe | Impact | Garde-fou |
|-----|--------|-----------|
| **SSI** | Contenu notification ; données client | Pas exposition contenu sensible complet en UI ; minimisation PII |
| **UX** | Ne pas créer faux portail | Badges internes ; persona client via notifications simulées uniquement |
| **QA** | Vérifier statuts notification ; échec envoi | Scénario notification échouée obligatoire |
| **Exploitation** | Pas de supervision notification avancée | Pas centre ops notification MVP |
| **Produit** | Ne pas élargir au suivi client complet | ARB-MVP-02 maintenu ; portail post-MVP |

---

## 11. Conséquences positives

- **Client informé sans portail** — parcours SAV crédible ;
- **MVP plus crédible** — intégration notification simulée ADR-001 ;
- **Design plus clair avant Figma** — badges, historique, dashboard ;
- **Réduction du scope** — pas portail ni centre notifications ;
- **Cohérence ADR-001 / ADR-002 / ADR-004** ;
- **Base pour QA** — happy path et échec notification ;
- **Capitalisation SFIA** — standard notification simple MVP.

---

## 12. Conséquences négatives / coûts

- **Expérience client limitée** — pas de self-service (R-M07, R-UX07) ;
- **Pas de préférences notification** ;
- **Suivi notification simplifié** — pas d'écran dédié ;
- **Risque de frustration** si besoin portail fort côté parties prenantes ;
- **Besoin de wording clair** Figma — « notification simulée », pas « portail client » ;
- **SMS optionnel** — ambiguïté canal à trancher en Figma/PO si un seul canal retenu.

---

## 13. Garde-fous

- [ ] ne pas créer de **portail client** au MVP ;
- [ ] ne pas créer de **centre de notifications client avancé** ;
- [ ] ne pas gérer les **préférences notification avancées** ;
- [ ] ne pas rendre les notifications **bloquantes** sauf décision explicite ;
- [ ] ne pas exposer de **contenu sensible** dans les messages visibles ;
- [ ] ne pas produire de **backlog** ou **user stories** ;
- [ ] ne pas produire de **Figma** dans cette tâche ;
- [ ] ne pas produire de **code** ;
- [ ] conserver les notifications comme **intégration simulée** (ADR-001) ;
- [ ] relier les erreurs significatives à **ADR-002** ;
- [ ] relier les événements à **ADR-004**.

---

## 14. Impacts projet

| Domaine | Impact |
|---------|--------|
| **MVP** | ARB-MVP-02 formalisé ; notifications simulées ; portail reporté |
| **UX/UI** | Badges, historique, dashboard échecs — pas portail |
| **QA** | Scénarios envoi / échec notification |
| **SSI** | Exposition minimale ; pas espace client authentifié |
| **Exploitation** | Pas ops notification ; coûts FinOps RG-FG03 hypothèses |
| **Architecture future** | Portail client, préférences — post-MVP |
| **Notion / gouvernance** | Jalon ADR P2 — sync après bloc consolidé |

---

## 15. Impacts SFIA

| Asset SFIA | Impact |
|------------|--------|
| `docs/methods/roles/product-owner-method.md` | Enrichissement futur — ARB-MVP-02 formalisé |
| `docs/methods/roles/ux-ui-designer-method.md` | Enrichissement futur — badges notification, pas portail |
| `docs/methods/roles/architect-method.md` | Contrat notification ADR-001 confirmé |
| `docs/methods/roles/rssi-method.md` | Pas espace client MVP ; contenu notification |
| `docs/methods/roles/project-manager-method.md` | Séquence ADR P2 avant Figma |
| `prompts/prompt-catalog.md` | PROMPT-UX-001, PROMPT-ARCH-001 — pas modifié ici |
| `prompts/ux-ui/` | Checklist notification sans portail |
| `prompts/architecture/` | Événements notification dans revue intégrations |
| **Futur Template Notification Scope Matrix** | §5 + §6 + §7 |
| **Futur Checklist notification sans portail** | §13 garde-fous |
| **Futur Standard notification simple MVP** | Option B retenue |

---

## 16. Rôles mobilisés

| Rôle | Contribution |
|------|--------------|
| **Product Owner** | Décision structurante ; ARB-MVP-02 ; périmètre MVP |
| **UX/UI Designer** | Badges, dashboard, historique — pas portail |
| **Architecte** | Contrat simulé ADR-001 ; statuts ; lien ADR-002/004 |
| **RSSI** | Pas portail ; minimisation données notification visibles |
| **QA / Testeur** | Scénarios notification envoyée / échouée |
| **Chef de projet** | Traçabilité ADR P2 ; Figma post-bloc |

---

## 17. Prompts impactés

| Prompt candidat | Impact |
|-----------------|--------|
| **PROMPT-ARCH-001** — Revue intégrations et erreurs | Domaine notification ; Error Matrix |
| **PROMPT-UX-001** — Brief UX/UI avant Figma | Badges, dashboard, limites portail |
| **PROMPT-UX-002** — Validation brief UX/UI | Checklist notification avant Figma |
| **PROMPT-GOV-001** — Sync Notion | Jalon ADR P2 post-consolidation |

*Prompts non modifiés dans cette tâche.*

---

## 18. Critères de validation de l'ADR

- [x] la décision est reliée à **ADR-CAND-006** ;
- [x] les **notifications client MVP** sont cadrées ;
- [x] le **portail client** est explicitement **hors MVP** ;
- [x] les **impacts UX/UI avant Figma** sont documentés ;
- [x] les erreurs notification sont reliées à **ADR-002** ;
- [x] la journalisation est reliée à **ADR-004** ;
- [x] les **limites MVP / post-MVP** sont explicites ;
- [x] les **impacts projet** sont identifiés ;
- [x] les **impacts SFIA** sont identifiés ;
- [x] les **rôles mobilisés** sont documentés ;
- [x] les **prompts impactés** sont identifiés ;
- [x] aucun backlog, user story, **Figma ou code** n'est produit.

---

## 19. Contrôle capitalisation SFIA

| Élément | Capitalisation | Type |
|---------|----------------|------|
| Template ADR | Structure présente ADR-006 | Template |
| Template Notification Scope Matrix | §5 + §6 + §7 | Template |
| Checklist notification sans portail | §13 | Checklist |
| Standard notification simple MVP | Option B ARB-MVP-02 | Standard |
| Checklist ADR design-impact | §8 + §20 | Checklist |
| Matrice ADR → prompts | §17 | Template |
| Matrice ADR → rôles | §16 | Template |

---

## 20. Contrôle impact design

| Élément design | Impact confirmé ? | Décision |
|----------------|-------------------|----------|
| **Badge statut notification** | Oui | Fiche demande / intervention |
| **Historique notification** | Oui | Entrées simplifiées historique dossier |
| **Anomalies notification** | Oui | Échec significatif — ADR-002 |
| **Dashboard** | Oui | Indicateur échecs — pas écran dédié |
| **Vue dirigeant** | Partiel | Agrégat — ADR-CAND-008 |
| **Portail client** | Non | **Hors MVP** |
| **Préférences notification** | Non | **Hors MVP** |
| **Centre de notifications** | Non | **Hors MVP** — report post-MVP |

---

## 21. Prochaines actions

- instruire **ADR-CAND-007** — signature client optionnelle structurée (→ ADR-007) ;
- instruire **ADR-CAND-008** — dashboard SAV et vue dirigeant séparés (→ ADR-008) ;
- confirmer **ADR-CAND-009** — IA légère reportée post-MVP (pas d'ADR MVP) ;
- préparer ensuite une **synthèse ADR P2 design-impact** ;
- ouvrir **UX/UI/Figma** seulement après **consolidation bloc ADR P2**.

---

## 22. Conclusion

Cette ADR formalise des **notifications client simples, simulées et limitées** au MVP, **sans portail client** ni suivi avancé.

Elle clarifie les **statuts et impacts design** nécessaires avant Figma, tout en maintenant les notifications comme une **intégration simulée**, **traçable** et **non bloquante** sauf cas spécifique.

**Figma non déclenché** par cette ADR.

---

*ADR-006 — projet Interv360, phase 02-architecture, bloc ADR P2 — gouvernance SFIA.*
