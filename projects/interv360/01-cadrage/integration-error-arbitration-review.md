# Interv360 — Integration & Error Arbitration Review

**Projet** : PRJ-INTERV360  
**Phase** : 01-cadrage  
**Statut** : Draft  
**Source** : `2026-06-27-business-framing.md` + `2026-06-27-framing-review.md` + `mvp-arbitrations.md`  
**Objet** : réinstruction ARB-MVP-04 et ARB-MVP-05

---

## 1. Objectif du document

Ce document vise à **réinstruire deux arbitrages structurants** identifiés dans `mvp-arbitrations.md` :

- **ARB-MVP-04** — niveau de simulation des intégrations ;
- **ARB-MVP-05** — périmètre de gestion des erreurs d'intégration.

Il formalise une **analyse comparative**, des **recommandations candidates** et des **impacts attendus** sur le cadrage existant, sans trancher définitivement les décisions.

Ce document **ne produit pas** :

- d'architecture technique ;
- de définition MVP final ;
- de backlog, user stories ou ADR finalisées ;
- de maquettes, wireframes ou travail Figma ;
- de code applicatif.

Les décisions restent **candidates** et devront être répercutées dans `mvp-arbitrations.md` avant validation finale.

---

## 2. Pourquoi traiter les deux arbitrages ensemble ?

Le **niveau de simulation des intégrations** conditionne directement le **périmètre de gestion des erreurs**. Les deux arbitrages sont indissociables car le choix de simulation impacte :

- la **qualité des contrats d'échange** (schémas, payloads, codes retour) ;
- le **mapping des données** entre systèmes simulés et plateforme ;
- le **mapping des statuts** (RG-I05, A-I06) ;
- la **détection d'erreurs** (RG-I06) ;
- la **journalisation** des flux (RG-I07, A-I08) ;
- la **reprise manuelle ou automatique** (RG-I08, A-I07) ;
- les **futurs tests** QA et critères d'acceptation ;
- les **ADR candidates** (simulation API, gestion erreurs, journalisation, email sécurisé).

Traiter ARB-MVP-04 sans ARB-MVP-05 conduirait à choisir un niveau de contrat sans définir comment les erreurs de ces contrats sont visibles et traitées.

---

## 3. Options de simulation des intégrations

| Option | Description | Valeur projet | Valeur SFIA | Complexité | Risques | Position candidate |
|--------|-------------|---------------|-------------|------------|---------|-------------------|
| **A — Mocks statiques** | Réponses figées, données prédéfinies, pas de contrat API formalisé | Démonstration rapide du cycle SAV | Faible — peu réutilisable comme standard | Faible | Crédibilité limitée (R-I01) ; n'illustre pas l'orchestration | **Trop faible pour Interv360** — ne démontre pas assez la logique d'orchestration |
| **B — API simulées avec contrats simples** | Endpoints simulés, schémas d'entrée/sortie simples, statuts cohérents, erreurs prévues | Bon démonstrateur avec effort maîtrisé | Standard intégration simulée réutilisable | Moyenne | Effort cadrage contrats ; ambiguïté sur le niveau de formalisation | **Bon compromis** pour démonstrateur — **à préciser** par rapport à l'option C |
| **C — Vrais contrats API documentés, implémentation simulée** | Contrats formalisés comme de vrais contrats API (OpenAPI ou équivalent), exécution simulée/localisée dans le démonstrateur | Orchestration crédible ; préparation architecture et tests | Forte — génération contrats, règles, tests, documentation | Moyenne à élevée | Effort documentation ; discipline de cadrage requise | **Option à privilégier** si l'objectif est de tester sérieusement la SFIA — prépare architecture, tests, documentation et réutilisation sans dépendre de vrais systèmes externes |
| **D — Intégrations réelles partielles** | Connexion réelle à un CRM, calendrier ou messagerie | Réalisme maximal | Faible capitalisation template pilote | Élevée | Dérive scope ; hors cadrage §4 ; dépendances externes | **Trop tôt pour le MVP Interv360** — réserver à une phase ultérieure |

---

## 4. Recommandation candidate sur les intégrations

**Recommandation candidate — à valider.**

Retenir l'**option C : vrais contrats API documentés, avec implémentation simulée**.

**Justification :**

- plus **crédible** que des mocks simples ;
- permet de tester la capacité SFIA à **générer des contrats, des règles, des tests et de la documentation** ;
- **prépare la future architecture** sans dépendre d'intégrations réelles ;
- permet de **cadrer les erreurs de manière cohérente** (codes retour, payloads invalides, statuts incohérents) ;
- reste **compatible avec un MVP démonstrateur**.

Cette recommandation doit devenir une **ADR candidate** (voir §10).

**Décision finale : Non tranchée à ce stade.**

---

## 5. Périmètre fonctionnel des contrats API simulés

| Domaine | Contrat attendu | Données minimales | Statuts / événements | Erreurs à prévoir |
|---------|---------------|-------------------|----------------------|-------------------|
| **CRM → Interv360** : création demande SAV | `POST /crm/demandes` — réception demande CRM | Identifiant CRM, client, site, description, priorité, origine, horodatage | Statut initial `CREEE` ; événement `demande.recue` | CRM indisponible ; payload incomplet ; doublon ; mapping client inconnu |
| **Interv360 → CRM** : mise à jour statut | `PATCH /crm/demandes/{id}` — synchronisation statut | Identifiant demande, statut plateforme, horodatage, éléments clôture | `QUALIFIEE`, `PLANIFIEE`, `EN_COURS`, `CLOTUREE` ; événement `statut.mis_a_jour` | CRM indisponible ; identifiant inconnu ; erreur mapping statut |
| **Calendrier ↔ Interv360** : création ou modification créneau | `POST/PATCH /calendrier/evenements` — réservation créneau | Technicien, créneau début/fin, intervention liée, lieu | `RESERVE`, `MODIFIE`, `ANNULE` ; événement `creneau.cree` / `creneau.modifie` | Conflit de créneau ; calendrier indisponible ; technicien indisponible |
| **Interv360 → Notification** : notification client | `POST /notifications/envoi` — envoi notification | Client, canal, événement, contenu, référence intervention | `ENVOYEE`, `ECHEC` ; événement `notification.emise` | Service notification indisponible ; canal invalide ; contenu rejeté |
| **Interv360 → Facturation simulée** : export éléments facturables | `POST /facturation/exports` — export post-clôture | Intervention clôturée, éléments facturables, durée, pièces | `EXPORT_PRET`, `EXPORT_INCOMPLET` ; événement `facturation.exportee` | Export incomplet ; données manquantes ; service indisponible |
| **Email sécurisé → Interv360** : création demande depuis email authentifié | `POST /email/intake` — réception email vérifié | Expéditeur authentifié, objet, corps, pièces jointes, horodatage | `RECU`, `REJETE`, `A_QUALIFIER` ; événement `email.recu` | Email non authentifié ; expéditeur non autorisé ; pièce jointe invalide ; classification impossible |

*Les contrats ci-dessus sont des **cadrages fonctionnels**, pas une architecture technique.*

---

## 6. Options de gestion des erreurs

| Niveau | Description | Valeur métier | Valeur démonstrateur | Complexité | Position candidate |
|--------|-------------|---------------|----------------------|------------|-------------------|
| **Niveau 1 — Erreur simplement loguée** | Erreur enregistrée en log ; pas de visibilité utilisateur | Faible — anomalie invisible | Très faible — CF9 non démontré | Faible | Insuffisant pour Interv360 (R-UX06) |
| **Niveau 2 — Erreur visible dans écran anomalies** | Erreur listée dans l'écran dédié ; pas d'action guidée | Moyenne — visibilité manager | Moyenne — supervision légère | Moyenne | Candidat partiel |
| **Niveau 3 — Erreur visible + reprise manuelle simulée** | Écran anomalies + action corrective par l'utilisateur | Forte — parcours robuste non happy path | Forte — démontre reprise sans orchestration | Moyenne | **Recommandation candidate** |
| **Niveau 4 — Retry automatique simple** | Nouvelle tentative automatique après échec transitoire | Moyenne — réduction blocages | Moyenne — robustesse perçue | Moyenne à élevée | Extension ou ADR future — **hors MVP** |
| **Niveau 5 — Retry + reprise manuelle + escalade** | Combinaison retry, action manuelle et notification interne | Forte — couverture opérationnelle | Forte — scénario avancé | Élevée | Trop complexe pour MVP démonstrateur |
| **Niveau 6 — Supervision avancée** | Tableaux de bord erreurs, alertes, SLA, corrélation multi-flux | Très forte — ops mature | Forte mais hors scope pilote | Très élevée | **À exclure du MVP** — risque orchestration complexe |

---

## 7. Recommandation candidate sur la gestion d'erreur

**Recommandation candidate — à valider.**

Retenir le **niveau 3 : erreur visible dans un écran anomalies, avec reprise manuelle simulée**.

**Précision :** le **retry automatique** (niveau 4) **ne doit pas être inclus dans le MVP**, mais peut être **préparé comme extension ou ADR future**.

**Justification :**

- démontre un **parcours non happy path** (cas métier CF9) ;
- apporte une **vraie valeur dirigeant / manager** (RG-I09, écran anomalies) ;
- reste **maîtrisé en complexité** — pas de supervision avancée ;
- **nourrit les tests QA** et critères d'acceptation futurs ;
- **nourrit les standards SFIA** d'intégration ;
- permet de capitaliser un **template de gestion d'erreur**.

**Décision finale : Non tranchée à ce stade.**

---

## 8. Cas d'erreur minimum à démontrer

| Cas d'erreur | Source | Impact métier | Affichage attendu | Action utilisateur | Capitalisation SFIA |
|--------------|--------|---------------|-------------------|--------------------|---------------------|
| **CRM indisponible** | CRM → Interv360 | Demande non créée ; parcours bloqué | Erreur critique dans écran anomalies | Reprise manuelle simulée (relance ou saisie secours) | Standard cas CRM down |
| **Payload CRM incomplet** | CRM → Interv360 | Demande incomplète ou rejetée | Erreur avec détail champs manquants | Correction manuelle ou rejet demande | Template validation payload |
| **Doublon de demande** | CRM / Email → Interv360 | Risque double intervention | Alerte doublon détecté | Fusionner, ignorer ou créer quand même (RG-C04) | Règle anti-doublon testable |
| **Conflit de créneau calendrier** | Calendrier ↔ Interv360 | Planification impossible | Erreur planification visible | Choisir autre créneau / technicien | Standard conflit calendrier |
| **Notification client échouée** | Interv360 → Notification | Client non informé | Erreur non bloquante listée | Relance manuelle ou contournement | Template notification + erreur |
| **Export facturation incomplet** | Interv360 → Facturation | Éléments facturables manquants | Erreur clôture partielle | Compléter CR ou forcer export partiel | Règle RG-R07 / RG-I04 |
| **Email non authentifié ou non autorisé** | Email sécurisé → Interv360 | Demande rejetée | Erreur sécurité explicite | Aucune création ; log RSSI | Standard canal email sécurisé |
| **Pièce jointe email invalide** | Email sécurisé → Interv360 | Demande partielle | Erreur avec détail pièce | Ignorer pièce ou rejeter email | Checklist SSI pièces jointes |
| **Erreur de mapping statut** | Interv360 → CRM / Calendrier | Incohérence inter-systèmes | Erreur mapping avec statuts source/cible | Correction manuelle statut | Standard mapping statuts (RG-I05) |

---

## 9. Impacts sur les documents existants

| Document | Section concernée | Impact attendu |
|----------|-------------------|----------------|
| `2026-06-27-business-framing.md` | §8 Intégrations simulées | Préciser niveau « contrats documentés, implémentation simulée » par intégration |
| `2026-06-27-business-framing.md` | §10 Règles d'intégration (RG-I01 à RG-I09) | Affiner règles erreurs, journalisation, reprise manuelle, mapping statuts |
| `2026-06-27-business-framing.md` | §12 Arbitrages (A-I05, A-I07, A-I08) | Orientations candidates pour A-I05 (simulation) et A-I07 (erreurs) |
| `2026-06-27-business-framing.md` | §15 Risques (R-I01 à R-I05, R-UX06) | Réduction risques si réinstruction validée ; mise à jour statuts risques |
| `mvp-arbitrations.md` | ARB-MVP-04 | Évolution statut « À réinstruire » → recommandation candidate option C |
| `mvp-arbitrations.md` | ARB-MVP-05 | Évolution statut « À réinstruire » → recommandation candidate niveau 3 |
| `2026-06-27-framing-review.md` | §5 ADR candidates | Enrichissement liste ADR (contrats API, erreurs, email, journalisation) |

*Ces impacts seront répercutés lors de la validation finale — **aucune modification automatique** à ce stade.*

---

## 10. ADR candidates issues de la réinstruction

| ADR | Sujet | Pourquoi structurante ? | Statut |
|-----|-------|-------------------------|--------|
| **ADR — Niveau de contrat API Interv360** | Option C : vrais contrats documentés, implémentation simulée | Fixe le standard d'intégration pour CRM, calendrier, notifications, facturation, email | Candidate — à traiter en phase architecture |
| **ADR — Gestion des erreurs d'intégration** | Niveau 3 : visibilité + reprise manuelle ; retry hors MVP | Définit le comportement erreur durable ; impacte QA et UX anomalies | Candidate — à traiter en phase architecture |
| **ADR — Authentification et sécurité du canal email** | Email sécurisé → Interv360 (ARB-MVP-01 lié) | Encadre SSI email : auth, droits, pièces jointes, emails non légitimes | Candidate — à traiter en phase architecture |
| **ADR — Journalisation et traçabilité des flux** | Niveau de détail logs (RG-I07, A-I08) | Équilibre RSSI, FinOps/GreenOps et exploitabilité | Candidate — à traiter en phase architecture |

---

## 11. Capitalisation SFIA

| Élément | Capitalisation | Type |
|---------|----------------|------|
| Standard vrais contrats API documentés avec implémentation simulée | Référence pour projets pilotes SFIA | Standard |
| Template API Contract Framing | Grille §5 réutilisable par domaine d'intégration | Template |
| Checklist API Error Handling | Vérification gestion erreurs par contrat | Checklist |
| Template Error Matrix | Grille cas d'erreur §8 réutilisable | Template |
| Prompt de génération de contrats API | Génération contrats depuis cadrage métier | Prompt |
| Prompt de revue intégration SSI | Revue sécurité canal email et flux sensibles | Prompt |
| Standard canal email sécurisé | Auth, droits, pièces jointes, rejet emails non légitimes | Standard |
| Critères QA d'intégration | Tests non happy path par cas d'erreur §8 | Standard / Checklist |

---

## 12. Conclusion de réinstruction

- **ARB-MVP-04** peut évoluer vers **« vrais contrats API documentés avec implémentation simulée »** (option C).
- **ARB-MVP-05** peut évoluer vers **« erreurs visibles + reprise manuelle simulée »** (niveau 3).
- Ces décisions restent **candidates** — **non tranchées définitivement** à ce stade.
- Elles devront être **répercutées dans `mvp-arbitrations.md`** avant validation finale du cadrage.
- **Aucune architecture technique** ni **backlog** n'a été produit dans ce document.

---

*Document produit dans le cadre du projet Interv360 — gouvernance SFIA.*
