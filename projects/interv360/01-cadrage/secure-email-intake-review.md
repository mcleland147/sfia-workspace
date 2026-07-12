# Interv360 — Secure Email Intake Review

**Projet** : PRJ-INTERV360  
**Phase** : 01-cadrage  
**Statut** : Draft  
**Source** : `2026-06-27-business-framing.md` + `mvp-arbitrations.md` + `integration-error-arbitration-review.md`  
**Objet** : clarification du canal email sécurisé pour ARB-MVP-01

---

## 1. Objectif du document

Ce document **clarifie le périmètre du canal email sécurisé** pour Interv360, afin de **stabiliser ARB-MVP-01** avant validation finale des arbitrages MVP.

Il formalise le positionnement du canal email, les **exigences SSI**, un **contrat fonctionnel**, les **scénarios à démontrer** et une **recommandation candidate**, sans trancher définitivement la décision.

Ce document **ne produit pas** :

- d'architecture technique ;
- de backlog, user stories ou ADR finalisées ;
- de définition MVP final ;
- de maquettes, wireframes ou travail Figma ;
- de code applicatif.

---

## 2. Positionnement du canal email dans le MVP

- Le **CRM simulé** reste le **canal principal** du parcours MVP (création et synchronisation des demandes SAV).
- La **saisie manuelle** reste un **canal de secours** (demande créée en interne lorsque le CRM ou l'email ne suffisent pas).
- L'**email n'est pas le flux principal** du MVP — il ne pilote pas le parcours démonstrateur de bout en bout.
- L'**email doit être traité comme un vrai canal d'intégration sécurisé** — au même titre que CRM, calendrier ou notifications simulés.
- Il doit être **cadré assez sérieusement** pour alimenter :
  - les **règles SSI** (RG-S01, RG-S06, RG-C02, RG-C04) ;
  - les **contrats fonctionnels** (`integration-error-arbitration-review.md` §5) ;
  - les **scénarios d'erreur** (§8 du même document) ;
  - les **tests QA** futurs ;
  - les **ADR candidates** (authentification email, journalisation, pièces jointes).

---

## 3. Exigences SSI à cadrer pour l'email

| Exigence | Objectif | Rôle valideur | Sortie attendue |
|----------|----------|---------------|-----------------|
| **Authentification de la source email** | Garantir que l'email provient d'une source vérifiable (domaine, signature, relais autorisé) | RSSI / Architecte | Règle RG-C02 ; critère QA ; ADR candidate |
| **Autorisation de l'expéditeur** | Vérifier que l'expéditeur est autorisé à créer une demande SAV | RSSI / Business Analyst | Liste expéditeurs autorisés ; règle RG-S01 |
| **Traitement des emails non légitimes** | Rejeter ou isoler emails frauduleux, spoofés ou non conformes | RSSI | Statut `REJETE` ; log traçable ; scénario QA |
| **Contrôle des pièces jointes** | Valider type, taille et contenu des pièces jointes | RSSI / GreenOps | Règle RG-C02 ; limites RG-FG01 |
| **Limites de taille et format** | Limiter volume et formats acceptés (corps, PJ) | GreenOps / FinOps | Hypothèses FinOps/GreenOps documentées |
| **Journalisation des réceptions** | Tracer chaque email reçu (horodatage, source, statut) | RSSI / Architecte | Règle RG-I07 ; ADR journalisation |
| **Traçabilité des rejets** | Documenter pourquoi un email a été rejeté | RSSI | Log rejet ; critère QA |
| **Protection contre données sensibles dans le corps** | Éviter exposition ou stockage excessif de données personnelles | RSSI / GreenOps | Classification données §9.3 ; règle RG-S03 |
| **Conservation limitée des emails et pièces jointes** | Définir durée/volume fictifs sans implémentation lourde | RSSI / GreenOps | Alignement ARB-MVP-06 ; hypothèses conservation |
| **Conformité RSSI / GreenOps / FinOps** | Aligner le canal email sur les principes transverses du cadrage | RSSI / FinOps / GreenOps | Checklist SSI email ; validation fictive |

---

## 4. Contrat fonctionnel email sécurisé

| Élément | Description |
|---------|-------------|
| **Endpoint fonctionnel** | `POST /email/intake` — réception d'un email vérifié et transformation en demande ou rejet |
| **Source** | Email **authentifié / vérifié** (source de confiance, expéditeur contrôlé) |
| **Données minimales** | Expéditeur, objet, corps, pièces jointes (références), horodatage, empreinte ou référence message |
| **Statuts** | `RECU`, `REJETE`, `A_QUALIFIER` |
| **Événements** | `email.recu`, `email.rejete`, `email.a_qualifier` |
| **Erreurs à prévoir** | Email non authentifié ; expéditeur non autorisé ; pièce jointe invalide ; taille dépassée ; classification impossible ; doublon potentiel |
| **Sortie** | Demande SAV créée, demande à qualifier, ou **rejet tracé** (sans création silencieuse) |

*Ce contrat est **fonctionnel** — il ne constitue pas une architecture technique ni une spécification d'implémentation.*

---

## 5. Scénarios email à démontrer ou documenter

| Scénario | Objectif | MVP ou cible ultérieure | Résultat attendu |
|----------|----------|-------------------------|------------------|
| **Email authentifié reçu et transformé en demande à qualifier** | Démontrer le flux email → demande SAV avec qualification | **MVP** — scénario documenté | Statut `A_QUALIFIER` ; demande créée ; traçabilité complète |
| **Email reçu mais expéditeur non autorisé** | Tester la logique d'autorisation SSI | **MVP** — cas d'erreur obligatoire | Statut `REJETE` ; log rejet ; aucune demande créée |
| **Email avec pièce jointe invalide** | Tester contrôle PJ (type, taille, contenu) | **MVP** — cas d'erreur obligatoire | Rejet ou demande partielle selon règle ; erreur visible |
| **Email incomplet nécessitant qualification manuelle** | Démontrer qualification humaine (RG-C07) | **MVP** — scénario principal email | Demande `A_QUALIFIER` ; fiche demande SAV enrichie manuellement |
| **Email doublon potentiel d'une demande CRM** | Tester anti-doublon cross-canal (RG-C04) | **MVP** — cas documenté | Alerte doublon ; action utilisateur (fusionner / ignorer / créer) |
| **Email légitime mais non prioritaire face au canal CRM** | Confirmer positionnement ARB-MVP-01 | **MVP** — règle de gouvernance | Parcours démo CRM prioritaire ; email disponible mais secondaire |

---

## 6. Recommandation candidate

**Recommandation candidate — à valider.**

Conserver le **CRM simulé comme canal principal du MVP** et la **saisie manuelle comme secours**, mais **cadrer l'email comme un canal d'intégration sécurisé complet**.

L'email doit disposer de :

- un **contrat fonctionnel documenté** (§4) ;
- des **exigences SSI** formalisées (§3) ;
- des **scénarios d'erreur** identifiés (§5) ;
- des **critères QA** associés ;

… **sans devenir le flux principal du MVP**.

**Décision finale : Non tranchée à ce stade.**

---

## 7. Impacts sur les arbitrages et documents

| Document / arbitrage | Impact |
|----------------------|--------|
| `mvp-arbitrations.md` — **ARB-MVP-01** | Stabilisation recommandation : CRM principal + saisie secours + email sécurisé cadré ; statut évolutif vers « Validable après clarification email » |
| `integration-error-arbitration-review.md` — **§5, §8** | Enrichissement contrat `POST /email/intake` ; cas d'erreur email (non authentifié, PJ invalide) |
| `2026-06-27-business-framing.md` — **§8** | Précision intégration Email : canal sécurisé, pas mock simpliste |
| `2026-06-27-business-framing.md` — **§10** | Affinage RG-C02, RG-C04, RG-S01, RG-S06, RG-I07 |
| `2026-06-27-business-framing.md` — **§12** | Orientation A-F01, A-I02 ; ADR candidate email |
| `2026-06-27-business-framing.md` — **§15** | Réduction risque email sous-cadré ; lien R-M01 |
| **ADR candidates futures** | Email sécurisé ; journalisation flux email ; gestion pièces jointes |
| **Critères QA futurs** | Scénarios §5 testables ; non happy path email |

*Impacts à répercuter dans `mvp-arbitrations.md` lors de la prochaine mise à jour — **aucune modification automatique** à ce stade.*

---

## 8. Capitalisation SFIA

| Élément | Capitalisation | Type |
|---------|----------------|------|
| Standard canal email sécurisé | Référence SSI pour tout projet avec intake email | Standard |
| Template Secure Email Intake | Structure §3–§5 réutilisable | Template |
| Checklist SSI email | Vérification exigences §3 par projet | Checklist |
| Error Matrix email | Grille erreurs §4 / §5 | Template |
| Prompt revue RSSI email | Revue sécurité canal email avant delivery | Prompt |
| Critères QA email intake | Scénarios §5 → tests acceptation | Standard / Checklist |

---

## 9. Conclusion

- **ARB-MVP-01** peut évoluer vers **« CRM principal + saisie manuelle secours + email sécurisé cadré »**.
- L'**email n'est pas le flux principal MVP** — le parcours démonstrateur reste centré sur le CRM.
- L'**email reste suffisamment cadré** pour tester la **maturité SSI/SFIA** (contrats, erreurs, QA, ADR candidates).
- **Aucune architecture technique** ni **backlog** n'a été produit dans ce document.
- La recommandation devra être **répercutée dans `mvp-arbitrations.md`** avant validation finale des arbitrages MVP.

---

*Document produit dans le cadre du projet Interv360 — gouvernance SFIA.*
