# ADR-003 — Canal email sécurisé non principal

**Projet** : PRJ-INTERV360
**Phase** : 02-architecture
**Statut** : Accepted
**Source candidate** : ADR-CAND-003
**ADR liées** : ADR-001, ADR-002
**Rôles principaux** : RSSI, Architecte
**Rôles contributeurs** : Product Owner, Business Analyst, QA / Testeur, Chef de projet
**Type** : Architecture Decision Record

---

## 1. Contexte

Interv360 prévoit **plusieurs domaines d'intégration simulée** (CRM, calendrier, notifications, facturation, email) formalisés par **ADR-001** — contrats API documentés avec implémentation simulée.

**ADR-002** a retenu la **visibilité des erreurs** dans un écran anomalies avec **reprise manuelle simulée**, sans retry automatique.

Le cadrage a validé **ARB-MVP-01** : le **CRM simulé reste le canal principal** de création et synchronisation des demandes SAV ; la **saisie manuelle** reste canal de secours (`mvp-arbitrations.md`, `secure-email-intake-review.md` §2).

L'**email sécurisé** est un **canal complémentaire, non principal** — il ne pilote pas le parcours démonstrateur de bout en bout, mais doit être cadré sérieusement car il porte des **risques SSI** : origine, spoofing, expéditeur non autorisé, pièce jointe, doublon cross-canal, données sensibles (`secure-email-intake-review.md` §3).

**Aucun service de messagerie réel** ne doit être connecté au MVP — l'implémentation reste simulée, conformément à ADR-001.

---

## 2. Problème à résoudre

**Comment intégrer un canal email sécurisé dans le MVP Interv360 sans en faire le canal principal, sans connecter de messagerie réelle, et sans affaiblir les exigences SSI de contrôle de source, d'autorisation, de rejet et de traçabilité ?**

Sans cadrage SSI explicite, le canal email devient soit un mock simpliste (crédibilité SSI insuffisante), soit un flux principal (dérive scope ARB-MVP-01), soit une source d'anomalies invisibles (incohérence ADR-002).

---

## 3. Options étudiées

| Option | Description | Avantages | Limites | Décision |
|--------|-------------|-----------|---------|----------|
| **A — Email comme canal principal** | Parsing email pilote le parcours MVP ; CRM secondaire | Cas réaliste PME ; démontre intake automatique | Complexité élevée ; doublons CRM ; dérive ARB-MVP-01 ; email devient trop central | **Rejetée** |
| **B — Email ignoré au MVP** | Pas de traitement email ; CRM et saisie seuls | Simplicité ; focus CRM | Cas CF2 / scénarios SSI non couverts ; maturité SFIA email non testée | **Rejetée** |
| **C — Email sécurisé non principal avec contrat fonctionnel simulé** | CRM principal ; email via `POST /email/intake` simulé ; exigences SSI complètes | Couverture SSI crédible ; maintien CRM principal ; cohérence ADR-001/002 | Effort cadrage SSI ; complexité fonctionnelle supérieure au mock simple | **Retenue** |
| **D — Multi-canal équivalent CRM / email / saisie** | Tous les canaux ont le même poids dans le parcours | Flexibilité utilisateur | Scope élargi ; parcours démo dilué ; gouvernance complexe | **Reportée post-MVP ou rejetée à ce stade** |

---

## 4. Décision

**La décision retenue est d'intégrer l'email comme canal sécurisé secondaire et non principal, via un contrat fonctionnel simulé de type `POST /email/intake`, sans connexion à une messagerie réelle au MVP.**

Précisions :

- **CRM simulé = canal principal** — création et synchronisation des demandes SAV ;
- **email sécurisé = canal complémentaire** — intake simulé, non prioritaire dans le parcours démonstrateur ;
- le canal email peut **créer une demande à qualifier**, **rejeter une demande** ou **signaler un doublon** ;
- les **règles SSI** de source, expéditeur, contenu, pièce jointe et rejet sont **obligatoires** ;
- les **erreurs et rejets email** alimentent l'**écran anomalies** conformément à **ADR-002** ;
- la **journalisation détaillée** sera instruite dans **ADR-004**.

**Aucune messagerie réelle connectée au MVP.**

---

## 5. Périmètre fonctionnel du canal email

| Fonction | Statut MVP | Commentaire |
|----------|------------|-------------|
| **Réception simulée d'un email** | Inclus | Via `POST /email/intake` — implémentation simulée ADR-001 |
| **Contrôle source** | Inclus | Authentification / vérification source (RG-C02) |
| **Contrôle expéditeur autorisé** | Inclus | Liste ou règle expéditeurs autorisés (RG-S01) |
| **Contrôle format / contenu minimal** | Inclus | Objet, corps, champs minimum pour qualification |
| **Contrôle pièce jointe** | Inclus | Type, taille, contenu — limites RG-FG01 |
| **Détection doublon potentiel** | Inclus | Cross-canal CRM / email (RG-C04) |
| **Création demande à qualifier** | Inclus | Statut `A_QUALIFIER` — qualification manuelle (RG-C07) |
| **Rejet email** | Inclus | Statuts rejet explicites — aucune création silencieuse |
| **Visibilité anomalie / rejet** | Inclus | Écran anomalies ADR-002 quand impact métier ou SSI |

---

## 6. Contrat fonctionnel cible

**Endpoint cible :** `POST /email/intake`

Contrat **fonctionnel non technique** — pas de schéma OpenAPI complet à ce stade. Le contrat documente :

| Élément | Description |
|---------|-------------|
| **Source** | Origine email simulée — domaine, relais ou source de confiance vérifiée |
| **Expéditeur** | Adresse ou identité expéditeur — contrôle autorisation |
| **Objet** | Objet du message — extraction métier |
| **Corps du message** | Contenu textuel — classification et qualification |
| **Pièces jointes** | Références PJ — type, taille, contenu contrôlé |
| **Horodatage** | Date/heure réception simulée — obligatoire |
| **Identifiant externe éventuel** | Référence message ou empreinte — anti-doublon |
| **Client détecté** | Client identifié ou à qualifier |
| **Niveau de confiance** | Score ou indicateur source / expéditeur |
| **Statut de traitement** | Voir §7 |
| **Motif de rejet éventuel** | Code et libellé métier non verbeux |

**Événements associés :** `email.recu`, `email.rejete`, `email.a_qualifier`, `email.doublon_potentiel`

**Sortie :** demande SAV créée (`A_QUALIFIER`), doublon signalé, ou **rejet tracé** sans création silencieuse.

*Source : `secure-email-intake-review.md` §4 ; `integration-error-arbitration-review.md` §5.*

---

## 7. Statuts de traitement email

| Statut | Signification | Usage MVP |
|--------|---------------|-----------|
| **RECU** | Email reçu, traitement en cours | Entrée par défaut à la réception simulée |
| **A_QUALIFIER** | Demande créée, qualification manuelle requise | Scénario principal email — RG-C07 |
| **REJETE_SOURCE_INCONNUE** | Source non authentifiée ou non vérifiable | Rejet SSI — visible anomalies |
| **REJETE_EXPEDITEUR_NON_AUTORISE** | Expéditeur hors liste autorisée | Cas d'erreur obligatoire QA |
| **REJETE_PIECE_JOINTE_INVALIDE** | PJ type, taille ou contenu non conforme | Rejet ou demande partielle selon règle |
| **DOUBLON_POTENTIEL** | Correspondance avec demande CRM ou email existante | Alerte cross-canal — action utilisateur |
| **TRAITE** | Email traité — demande qualifiée ou rejet clos | Fin de cycle intake simulé |

---

## 8. Règles SSI minimales

| Règle | Description | Impact MVP |
|-------|-------------|------------|
| **Source connue obligatoire** | Email provient d'une source vérifiable simulée | Rejet `REJETE_SOURCE_INCONNUE` si échec |
| **Expéditeur autorisé obligatoire** | Expéditeur dans liste ou règle autorisée | Rejet `REJETE_EXPEDITEUR_NON_AUTORISE` |
| **Pièce jointe filtrée** | Type, taille, contenu contrôlés | Rejet ou traitement partiel |
| **Pas de données sensibles exposées dans messages visibles** | Corps email / PJ non affichés intégralement dans UI | Message métier non verbeux — ADR-002 |
| **Rejet explicite mais non verbeux** | Motif rejet compréhensible sans détail technique | Support / manager — pas de log brut en UI |
| **Conservation limitée à instruire** | Durée / volume PJ et emails — ADR-CAND-005 | Hypothèses fictives ARB-MVP-06 — hors ADR-003 |
| **Horodatage obligatoire** | Chaque réception / rejet horodaté | Préparation ADR-004 |
| **Traçabilité à instruire dans ADR-004** | Logs structurés réceptions et rejets | Journalisation minimale — ADR-004 |
| **Aucun lien avec messagerie réelle au MVP** | Implémentation simulée uniquement | ADR-001 — pas de SMTP/IMAP réel |

---

## 9. Visibilité des erreurs et rejets

Les **rejets email** doivent être **visibles dans l'écran anomalies** (ADR-002) lorsqu'ils ont un **impact métier ou SSI**. Les messages visibles doivent être **compréhensibles** par le support ou le manager opérationnel. Les **détails techniques ou sensibles** ne doivent pas être exposés dans l'UI. Les anomalies email restent **cohérentes avec les statuts d'ADR-002** (Nouvelle, À analyser, Reprise simulée disponible, etc.). Les **logs détaillés** seront traités dans **ADR-004**.

| Cas email | Visibilité écran anomalies | Commentaire |
|-----------|---------------------------|-------------|
| **Source inconnue** | Oui — rejet SSI | `REJETE_SOURCE_INCONNUE` ; gravité élevée |
| **Expéditeur non autorisé** | Oui — rejet SSI | Cas QA obligatoire ; aucune demande créée |
| **Pièce jointe invalide** | Oui — selon règle | Rejet ou demande partielle ; gravité variable |
| **Doublon potentiel** | Oui — alerte | Cross-canal CRM ; action fusionner / ignorer / créer |
| **Demande à qualifier** | Non bloquante — fiche demande | `A_QUALIFIER` — pas anomalie sauf échec qualification |
| **Erreur parsing / classification** | Oui — erreur technique simulée | Aligné statuts ADR-002 ; reprise manuelle possible |

---

## 10. Conséquences positives

- **Canal complémentaire crédible** — intake email SSI sans élargir le flux principal ;
- **Meilleure couverture des cas métier entrants** — CF2, qualification, rejet ;
- **Prise en compte SSI dès l'architecture** — dix exigences cadrées en cadrage ;
- **Maintien CRM comme canal principal** — parcours démo centré CRM (ARB-MVP-01) ;
- **Meilleure démonstration des rejets et anomalies** — cohérence ADR-002 ;
- **Capitalisation SFIA** — Template Secure Email Intake ; Checklist SSI Email Intake ;
- **Préparation ADR-004** — journalisation réceptions et rejets email.

---

## 11. Conséquences négatives / coûts

- **Effort de cadrage SSI plus important** que mock email simpliste ;
- **Complexité fonctionnelle supérieure** — statuts, rejets, doublon, qualification ;
- **Risque de surcharger le MVP** si email devient trop central dans la démo ;
- **Nécessité de distinguer** rejet métier, rejet SSI et erreur technique ;
- **Besoin de cohérence** avec écran anomalies (ADR-002) ;
- **Conservation des pièces jointes** à cadrer plus tard (ADR-CAND-005 / ARB-MVP-06).

---

## 12. Garde-fous

- [ ] ne pas faire de l'**email le canal principal** ;
- [ ] ne pas connecter de **messagerie réelle** au MVP ;
- [ ] ne pas accepter d'**expéditeur non autorisé** ;
- [ ] ne pas exposer de **données sensibles** dans les messages visibles ;
- [ ] ne pas stocker de **pièces jointes** sans règle de conservation (ADR-CAND-005) ;
- [ ] ne pas transformer l'email en **workflow complet multi-canal** ;
- [ ] **relier les rejets email** à ADR-002 (écran anomalies) ;
- [ ] **préparer la journalisation** via ADR-004 ;
- [ ] **conserver le CRM simulé** comme source principale.

---

## 13. Impacts projet

| Domaine | Impact |
|---------|--------|
| **MVP** | ARB-MVP-01 formalisé ; email secondaire ; CRM principal maintenu |
| **UX/UI** | Parcours rejet / qualification email ; lien écran anomalies ; saisie secours |
| **QA** | Scénarios §5 secure-email-intake-review ; non happy path email obligatoires |
| **SSI** | Auth source, expéditeurs, PJ, rejets tracés ; pas de messagerie réelle |
| **Exploitation** | Coût stockage PJ simulé — hypothèses FinOps/GreenOps reportées |
| **Future architecture** | Extension multi-canal post-MVP ; conservation PJ (ADR-CAND-005) |
| **Notion / gouvernance** | Jalon ADR-003 à synchroniser après consolidation — pas maintenant |

---

## 14. Impacts SFIA

| Asset SFIA | Impact |
|------------|--------|
| `docs/practices/roles/rssi-method.md` | Enrichissement après ADR-004 — bloc email + journalisation |
| `docs/practices/roles/architect-method.md` | Enrichissement après ADR-004 — contrat intake + traçabilité |
| `docs/practices/roles/product-owner-method.md` | ARB-MVP-01 formalisé ; CRM principal confirmé |
| `docs/practices/roles/project-manager-method.md` | Traçabilité ADR-003 ; sync Notion post-jalon |
| `prompts/prompt-catalog.md` | PROMPT-SEC-001, PROMPT-ARCH-001 candidats Draft |
| `prompts/security/` | Accueil futur PROMPT-SEC-001 formalisé |
| `prompts/architecture/` | Lien contrat email dans revue intégrations |
| **Futur Template Secure Email Intake** | §5–§9 + secure-email-intake-review §3–§5 |
| **Futur Checklist SSI Email Intake** | Règles §8 + exigences cadrage §3 |

---

## 15. Rôles mobilisés

| Rôle | Contribution |
|------|--------------|
| **RSSI** | Décision structurante SSI ; règles source, expéditeur, PJ, rejet |
| **Architecte** | Contrat `POST /email/intake` ; cohérence ADR-001/002 ; simulation |
| **Product Owner** | Validation CRM principal ; périmètre email secondaire |
| **Business Analyst** | Règles RG-C02, RG-C04, RG-S01, RG-C07 ; qualification |
| **QA / Testeur** | Scénarios §5 ; cas rejet, doublon, PJ invalide |
| **Chef de projet** | Traçabilité décision ; gouvernance Git |

---

## 16. Prompts impactés

| Prompt candidat | Impact |
|-----------------|--------|
| **PROMPT-SEC-001** — Revue canal email sécurisé | Directement alimenté — candidat Draft post-ADR P1 |
| **PROMPT-ARCH-001** — Revue intégrations et erreurs | Contrat email dans périmètre intégrations simulées |
| **PROMPT-ARB-001** — Arbitrages MVP | ARB-MVP-01 figé — référence historique |
| **PROMPT-ROLE-003** — Extraction méthode rôle | RSSI et Architecte à enrichir post-ADR-004 |
| **PROMPT-GOV-001** — Synchronisation gouvernance Notion projet | Jalon architecture — pas maintenant |

---

## 17. Relations avec les autres ADR

| ADR | Relation |
|-----|----------|
| **ADR-001** — Contrats API documentés avec implémentation simulée | **Prérequis** — `POST /email/intake` dans périmètre contrats simulés |
| **ADR-002** — Gestion visible des erreurs avec reprise manuelle | **Complémentaire** — rejets email visibles écran anomalies |
| **ADR-CAND-004** — Journalisation minimale des flux et rejets | **Suivante** — traçabilité réceptions / rejets email (→ ADR-004) |
| **ADR-CAND-005** — Conservation fictive photos, signatures et logs | **Liée** — conservation PJ et emails — instruction P2 |

---

## 18. Critères de validation de l'ADR

- [x] la décision est reliée à **ADR-CAND-003** ;
- [x] la décision est **cohérente avec ADR-001** ;
- [x] la décision est **cohérente avec ADR-002** ;
- [x] **CRM simulé reste canal principal** ;
- [x] **email reste canal secondaire** ;
- [x] **aucune messagerie réelle** n'est connectée ;
- [x] les **règles SSI minimales** sont documentées ;
- [x] les **erreurs et rejets email** sont visibles selon ADR-002 ;
- [x] la **journalisation est reportée à ADR-004** ;
- [x] les **impacts projet** sont identifiés ;
- [x] les **impacts SFIA** sont identifiés ;
- [x] les **rôles mobilisés** sont documentés ;
- [x] les **prompts impactés** sont identifiés ;
- [x] les **garde-fous** sont explicites.

---

## 19. Contrôle capitalisation SFIA

| Élément | Capitalisation | Type |
|---------|----------------|------|
| Template ADR | Structure présente ADR-003 | Template |
| Template Secure Email Intake | §5–§9 + secure-email-intake-review | Template |
| Checklist SSI Email Intake | §8 règles SSI minimales | Checklist |
| Standard canal secondaire sécurisé | Option C ARB-MVP-01 retenue | Standard |
| Checklist ADR guardrails | §12 garde-fous | Checklist |
| Matrice ADR → prompts | §16 | Template |
| Matrice ADR → rôles | §15 | Template |

---

## 20. Contrôle capitalisation rôle

| Méthode | Enrichissement immédiat ? | Décision |
|---------|---------------------------|----------|
| `docs/practices/roles/rssi-method.md` | Non | Enrichir après **ADR-004** — bloc email + journalisation + traçabilité |
| `docs/practices/roles/architect-method.md` | Non | Enrichir après **ADR-004** — contrat intake + logs |
| `docs/practices/roles/product-owner-method.md` | Non | Enrichir après **ADR-004** — ARB-MVP-01 avec traçabilité complète |
| `docs/practices/roles/project-manager-method.md` | Non | Enrichir après jalon architecture consolidé (ADR P1) |

**Les méthodes rôle ne sont pas modifiées à cette étape.**

ADR-003 et ADR-004 forment le **bloc email sécurisé + journalisation + traçabilité**. Enrichissement prévu **après ADR-004**.

---

## 21. Prochaines actions

- instruire **ADR-CAND-004** sur la journalisation minimale des flux et rejets (→ ADR-004) ;
- consolider ensuite les impacts **Architecte / RSSI / QA / UX** ;
- mettre à jour les **méthodes rôle** concernées après ADR-004 ;
- formaliser **PROMPT-SEC-001** en Draft si le prompt devient opérationnel ;
- formaliser **PROMPT-ARCH-001** en Draft si le prompt devient opérationnel ;
- synchroniser **Notion** après jalon architecture consolidé — **pas maintenant**.

---

## 22. Conclusion

Cette ADR formalise l'**email comme canal sécurisé secondaire, non principal**, simulé via un contrat fonctionnel **`POST /email/intake`**.

Elle **maintient le CRM simulé comme canal principal**, encadre les **risques SSI**, rend les **rejets exploitables** via l'écran anomalies (ADR-002) et **prépare ADR-004** sur la journalisation minimale.

**Aucune messagerie réelle connectée au MVP.**

---

*ADR-003 — projet Interv360, phase 02-architecture, gouvernance SFIA.*
