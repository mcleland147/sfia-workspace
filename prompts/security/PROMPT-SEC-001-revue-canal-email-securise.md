# PROMPT-SEC-001 — Revue canal email sécurisé

**ID** : PROMPT-SEC-001  
**Nom** : Revue canal email sécurisé  
**Famille** : Sécurité / RSSI  
**Dossier** : `prompts/security/`  
**Statut** : Draft  
**Source pilote** : PRJ-INTERV360  
**Phase SFIA** : Cadrage / Architecture  
**Rôles mobilisés** : RSSI, Architecte, Product Owner, Business Analyst, QA / Testeur, UX/UI Designer, Chef de projet  
**Livrables sources** : `secure-email-intake-review.md`, ADR-003, ADR-004  
**Type** : Prompt SFIA réutilisable

---

## 1. Objectif du prompt

Ce prompt sert à réaliser une **revue structurée d'un canal email sécurisé** (ou intake externe équivalent) dans un projet SFIA.

Il permet de :

- cadrer un **canal email ou intake externe** ;
- distinguer **canal principal, canal secondaire, canal de secours ou hors MVP** ;
- identifier les **risques SSI même sur un canal simulé** ;
- cadrer **source, expéditeur, contenu, pièces jointes, rejet, doublon et qualification** ;
- distinguer **rejet métier, rejet SSI et erreur technique** ;
- cadrer la **visibilité des erreurs et rejets** ;
- cadrer la **journalisation minimale sans données sensibles** ;
- identifier les **ADR candidates ou ADR formelles** nécessaires ;
- **capitaliser la valeur SFIA**.

---

## 2. Quand utiliser ce prompt

**Utiliser ce prompt :**

- lorsqu'un projet contient un **canal email** ;
- lorsqu'un projet contient un **intake externe** (webhook, formulaire, messagerie, etc.) ;
- lorsqu'un canal email est **simulé** mais doit rester crédible ;
- lorsqu'un canal email est **secondaire** mais porte des risques SSI ;
- lorsqu'il faut cadrer les **rejets, doublons, pièces jointes ou expéditeurs autorisés** ;
- en **fin de cadrage** ;
- au **début de la phase architecture** ;
- avant de produire une **architecture technique complète** ;
- avant de produire un **backlog** ou des **user stories**.

**Ne pas utiliser ce prompt :**

- pour **connecter une messagerie réelle** ;
- pour produire du **code** ;
- pour produire une **architecture complète** ;
- pour remplacer une **analyse RSSI exhaustive** (audit sécurité complet, pentest) ;
- pour produire un **workflow complet multi-canal** ;
- pour définir une **politique complète de conservation** ;
- pour créer directement un **backlog** ou des **user stories**.

---

## 3. Entrées nécessaires

| Entrée | Obligatoire | Commentaire |
|--------|-------------|-------------|
| **Contexte projet** | Oui | Nom, objectif, type (pilote, MVP, produit) |
| **Phase projet** | Oui | Cadrage, architecture, delivery, etc. |
| **Périmètre MVP** | Oui | Inclus / exclus / post-MVP |
| **Rôle du canal email** | Oui | Principal, secondaire, secours, hors MVP |
| **Canal principal identifié** | Oui | CRM, saisie manuelle, autre flux principal |
| **Canaux secondaires ou de secours** | Recommandé | Email, API, saisie, etc. |
| **Règles métier liées à l'intake** | Recommandé | Qualification, doublon, anti-fraude |
| **Exigences SSI connues** | Recommandé | Auth source, PJ, données sensibles |
| **Types de données manipulées** | Recommandé | Personnelles, contractuelles, techniques |
| **Pièces jointes possibles** | Recommandé | Types, tailles, contenus attendus |
| **Règles de qualification** | Recommandé | Demande à qualifier, enrichissement manuel |
| **Règles de rejet** | Recommandé | Source, expéditeur, PJ, contenu |
| **Exigences de journalisation** | Recommandé | ADR ou règles RG-I07 équivalent |
| **ADR candidates ou ADR existantes** | Recommandé | Email, journalisation, conservation |
| **Méthodes rôle applicables** | Recommandé | `docs/methods/roles/` concernées |

---

## 4. Sorties attendues

| Sortie | Description |
|--------|-------------|
| **Qualification du canal email** | Principal / secondaire / secours / hors MVP ; simulé / réel |
| **Matrice canal principal / secondaire / secours / hors MVP** | Positionnement et dépendances |
| **Risques SSI identifiés** | Spoofing, PJ, doublon, rejet silencieux, sur-exposition |
| **Règles minimales SSI** | Source, expéditeur, PJ, rejet, horodatage, exclusions logs/UI |
| **Contrat fonctionnel cible** | Endpoint, champs, statuts, motif rejet — niveau fonctionnel |
| **Statuts de traitement email** | Reçu, à qualifier, rejetés, doublon, traité |
| **Matrice rejets email** | Cas, type, visibilité, journalisation, action |
| **Visibilité anomalies / rejets** | Écran anomalies, message métier, exclusions UI |
| **Journalisation minimale recommandée** | Événements, champs, exclusions sensibles |
| **Données à exclure des logs et de l'UI** | Corps email, PJ, données client intégrales |
| **ADR candidates ou décisions nécessaires** | Email, journalisation, conservation |
| **Impacts projet** | MVP, UX, QA, SSI, exploitation, gouvernance |
| **Impacts SFIA** | Templates, standards, checklists, méthodes rôle |
| **Rôles mobilisés** | Contribution par rôle |
| **Templates / checklists / prompts à enrichir** | Capitalisation post-revue |

---

## 5. Garde-fous

- [ ] ne pas faire du canal email le **canal principal** sans arbitrage explicite ;
- [ ] ne pas connecter de **messagerie réelle** si la phase ou le MVP ne l'autorise pas ;
- [ ] ne pas traiter un canal simulé comme un **canal sans risque SSI** ;
- [ ] ne pas accepter d'**expéditeur non autorisé** sans règle documentée ;
- [ ] ne pas stocker de **corps email complet** dans les logs ;
- [ ] ne pas stocker de **pièce jointe** dans les logs ;
- [ ] ne pas exposer de **données sensibles** dans les messages visibles ;
- [ ] ne pas rendre les **rejets trop verbeux** côté UI ;
- [ ] ne pas produire de **backlog** ou **user stories** ;
- [ ] ne pas produire d'**architecture technique complète** si la phase ne l'autorise pas ;
- [ ] **distinguer rejet métier, rejet SSI et erreur technique** ;
- [ ] **identifier les impacts SFIA**.

---

## 6. Corps du prompt réutilisable

Copier le bloc ci-dessous pour exécuter la revue sur un projet SFIA.

---

```
Tu es chargé de réaliser une revue sécurité / RSSI d'un canal email ou intake externe pour un projet SFIA.

Contexte projet :
[Décrire le projet, son périmètre, son MVP, sa phase actuelle et ses contraintes.]

Sources disponibles :
[Lister les documents de cadrage, arbitrages, ADR candidates, ADR existantes, exigences SSI, règles métier, éléments UX, méthodes rôle.]

Si le projet pilote est Interv360, utiliser ADR-003 et ADR-004 comme référence de bonnes pratiques — sans les copier aveuglément si le contexte diffère.

Objectif :
Produire une revue structurée du canal email ou intake externe, en cadrant les risques SSI, les règles de rejet, la visibilité des anomalies, la journalisation minimale et la capitalisation SFIA, sans produire de code, backlog, user stories ou architecture technique complète si la phase ne l'autorise pas.

Travail attendu :

1. Qualifier le canal
   - déterminer si le canal est principal, secondaire, de secours ou hors MVP ;
   - identifier le canal principal du projet ;
   - préciser si le canal email est simulé ou réel ;
   - identifier les dépendances avec les autres canaux.

2. Identifier les risques SSI
   - source inconnue ;
   - expéditeur non autorisé ;
   - spoofing ;
   - pièce jointe invalide ;
   - contenu sensible ;
   - doublon cross-canal ;
   - classification impossible ;
   - rejet silencieux ;
   - sur-exposition dans l'UI ;
   - sur-journalisation.

3. Cadrer les règles minimales SSI
   - source connue obligatoire ;
   - expéditeur autorisé ;
   - filtrage pièce jointe ;
   - contenu minimal requis ;
   - rejet explicite mais non verbeux ;
   - horodatage obligatoire ;
   - absence de données sensibles dans les messages visibles ;
   - absence de corps email complet dans les logs ;
   - absence de pièces jointes dans les logs.

4. Décrire le contrat fonctionnel cible
   - endpoint ou mécanisme fonctionnel ;
   - source ;
   - expéditeur ;
   - objet ;
   - corps ;
   - pièces jointes ;
   - horodatage ;
   - identifiant externe éventuel ;
   - client détecté ;
   - niveau de confiance ;
   - statut de traitement ;
   - motif de rejet éventuel.

   Ne pas produire de schéma technique exhaustif si la phase ne l'autorise pas.

5. Définir les statuts de traitement
   Créer un tableau :
   | Statut | Signification | Usage |

   Inclure les statuts adaptés au projet :
   - reçu ;
   - à qualifier ;
   - rejeté source inconnue ;
   - rejeté expéditeur non autorisé ;
   - rejeté pièce jointe invalide ;
   - doublon potentiel ;
   - traité.

6. Préparer une matrice des rejets
   Créer un tableau :
   | Cas | Type de rejet | Visibilité utilisateur | Journalisation | Action attendue | Commentaire |

   Inclure :
   - source inconnue ;
   - expéditeur non autorisé ;
   - pièce jointe invalide ;
   - doublon potentiel ;
   - classification impossible ;
   - contenu incomplet ;
   - données sensibles détectées.

7. Déterminer la visibilité des erreurs
   - ce qui doit apparaître dans un écran anomalies ;
   - ce qui doit rester uniquement journalisé ;
   - ce qui doit être visible comme message métier ;
   - ce qui ne doit jamais être exposé ;
   - lien éventuel avec UX/UI ou support.

8. Cadrer la journalisation minimale
   - événements à tracer ;
   - champs minimaux ;
   - motif de rejet ;
   - acteur ou source ;
   - horodatage ;
   - corrélation avec demande ou anomalie ;
   - exclusions de données sensibles ;
   - conservation à instruire séparément si nécessaire.

9. Identifier les décisions nécessaires
   - ADR candidates ;
   - ADR formelles ;
   - décisions SSI à reporter ;
   - sujets hors MVP ;
   - lien avec conservation, logs, anomalies, accès.

10. Identifier les impacts
    - projet ;
    - UX/UI ;
    - QA ;
    - SSI ;
    - exploitation ;
    - gouvernance ;
    - SFIA.

11. Capitalisation SFIA
    Identifier :
    - templates candidats ;
    - checklists candidates ;
    - standards candidats ;
    - prompts à créer ou enrichir ;
    - méthodes rôle à enrichir ;
    - savoir-faire ;
    - savoir-être ;
    - garde-fous réutilisables.

Contraintes :
- ne pas produire de code ;
- ne pas produire de backlog ;
- ne pas produire de user stories ;
- ne pas produire de maquettes ou Figma ;
- ne pas produire d'architecture complète si la phase ne l'autorise pas ;
- ne pas connecter de messagerie réelle sans décision explicite ;
- ne pas exposer de données sensibles ;
- documenter clairement les hypothèses ;
- toujours distinguer valeur projet et valeur SFIA.

Sortie attendue :
Un document structuré avec :
- synthèse ;
- qualification du canal ;
- risques SSI ;
- règles SSI minimales ;
- contrat fonctionnel cible ;
- statuts de traitement ;
- matrice rejets ;
- visibilité anomalies ;
- journalisation minimale ;
- décisions / ADR candidates ;
- impacts projet ;
- impacts SFIA ;
- recommandations ;
- prochaines actions.
```

---

## 7. Critères de qualité du résultat

- [ ] le rôle du canal email est **qualifié** ;
- [ ] le **canal principal** reste explicite ;
- [ ] les **risques SSI** sont identifiés ;
- [ ] les **règles minimales SSI** sont documentées ;
- [ ] les **rejets** sont distingués des erreurs techniques ;
- [ ] les **statuts de traitement** sont définis ;
- [ ] la **visibilité des rejets** est cadrée ;
- [ ] les **données sensibles** sont protégées ;
- [ ] la **journalisation minimale** est cadrée ;
- [ ] les **limites de conservation** sont identifiées ;
- [ ] les **ADR candidates ou décisions** nécessaires sont identifiées ;
- [ ] les **impacts projet** sont documentés ;
- [ ] les **impacts SFIA** sont documentés ;
- [ ] les **rôles mobilisés** sont identifiés ;
- [ ] les **templates / standards / prompts** candidats sont listés.

---

## 8. Liens avec les méthodes rôle

| Rôle | Apport du prompt |
|------|------------------|
| **RSSI** | Décision structurante SSI ; règles source, expéditeur, PJ, rejet, logs |
| **Architecte** | Contrat fonctionnel intake ; cohérence ADR intégrations / journalisation |
| **Product Owner** | Canal principal maintenu ; email secondaire ; périmètre MVP |
| **Business Analyst** | Règles qualification, doublon, anti-fraude ; lien RG-* |
| **QA / Testeur** | Scénarios rejet, spoof, PJ invalide, doublon cross-canal |
| **UX/UI Designer** | Messages visibles non verbeux ; pas de détail sensible en UI |
| **Chef de projet** | Phase autorisée ; capitalisation SFIA ; traçabilité décisions |

---

## 9. Capitalisation SFIA

| Élément | Capitalisation | Type |
|---------|----------------|------|
| Template Secure Email Intake | Revue §4 contrat + §5 statuts | Template |
| Checklist SSI Email Intake | Revue §3 règles minimales | Checklist |
| Checklist logs sans données sensibles | Revue §8 exclusions | Checklist |
| Standard canal secondaire sécurisé | Canal email non principal encadré SSI | Standard |
| Standard rejet explicite non verbeux | Rejet tracé, message métier limité | Standard |
| Standard canal simulé avec exigences SSI | Simulation ≠ absence de SSI | Standard |
| Prompt sécurité canal email | Présent document | Prompt |

---

## 10. Origine / apprentissage pilote

Ce prompt est issu du **projet pilote Interv360**, notamment :

- `secure-email-intake-review.md` — exigences SSI, contrat intake, scénarios ;
- **ADR-003** — canal email sécurisé non principal ;
- **ADR-004** — journalisation minimale des flux et rejets ;
- complément **ADR-001** (contrats simulés) et **ADR-002** (erreurs visibles) ;
- enrichissement **`rssi-method.md`** après bloc ADR P1 (`role-methods-enrichment-after-adr-p1.md`).

Le prompt est **générique** : il doit être **adapté à chaque projet** (canal principal, type intake, contraintes SSI, phase). Les ADR Interv360 servent de référence, pas de copier-coller obligatoire.

**Complémentarité avec PROMPT-ARCH-001** : PROMPT-ARCH-001 couvre la revue globale intégrations et erreurs ; PROMPT-SEC-001 approfondit le **cadrage SSI d'un canal email ou intake externe**.

---

## 11. Historique / REX

| Date / jalon | Évolution | Source |
|--------------|-----------|--------|
| Bloc ADR P1 consolidé | Création **Draft** issue du bloc ADR P1 Interv360 | ADR-003, ADR-004 |
| Cadrage pilote | Base fonctionnelle et SSI | `secure-email-intake-review.md` |
| Post-enrichissement méthodes rôle | Prompt aligné RSSI, Architecte, PO, UX, CP | `role-methods-enrichment-after-adr-p1.md` |
| — | Passage **Tested** | À documenter après première utilisation hors pilote |
| — | Passage **Validated** | À documenter après REX multi-projets |

---

*Prompt SFIA — Sécurité / RSSI — Draft*
