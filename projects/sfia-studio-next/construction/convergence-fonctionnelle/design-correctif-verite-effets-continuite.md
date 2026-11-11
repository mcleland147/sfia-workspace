# SFIA Studio Next — CP2 : design correctif intégré « Vérité des effets et continuité »

| Champ | Qualification |
| --- | --- |
| **Date** | 11 novembre 2026 (Europe/Paris) |
| **Autorité de validation du contenu** | Morris — validation explicite dans la conversation et GO de publication Git documentaire |
| **Statut** | **VALIDATED IN CONTENT BY MORRIS — DESIGN CORRECTIF CP2 / NON IMPLÉMENTÉ** |
| **Périmètre** | ML4C, scénarios S02 et S03, interface S05 ; ce design ne vaut **pas** validation du contrat ML4C complet |
| **Code de référence** | `mcleland147/sfia-workspace`, `main@42aa373947446a8c20694b06c559ee0da1cba580` |
| **Diagnostic T2** | `sfia/review-handoff@768d32de9fc242dd88e9170ca46fa986e0eab40a`, blob `114ba0c2e36a0812bcffdd0894dfdc07cd399873` |
| **Gouvernance** | [Gate B avec réserves](../../governance/decisions/2026-11-11-r5-ml4b-gate-b-acceptation-avec-reserves.md) ; [trajectoire ML4C → ML4D](../../governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md) |
| **Référentiel de préparation** | [CP2](qualification-cp2.md), sur branche candidate documentaire, **non fusionnée** sur `main` |
| **Effet du GO** | Publication de ce document et synchronisation factuelle du suivi ; **aucun GO Cursor, code, DB, nettoyage, LIVE, push projet supplémentaire, PR, merge ou promotion** |

> **Frontière des preuves :** le diagnostic T2 reproduit le défaut UI D2 au navigateur et confirme une divergence de traitement entre les chemins D4. Il **n'établit pas** la cause exacte du défaut LIVE historique `ML4-REC-08`. Les preuves PG/DET/BROWSER ne démontrent pas un parcours LIVE/REAL end-to-end.

## 1. Résultat utilisateur recherché

Le Pilote doit pouvoir engager une intention, obtenir un effet applicatif vérifiable, subir une interruption éventuelle, reprendre son travail et recevoir de Nora une restitution fidèle au résultat réel.

Trois invariants gouvernent les corrections :

1. **Aucun effet inventé** : seul le domaine propriétaire confirme son résultat.
2. **Aucun effet dupliqué** : la reprise conserve les identifiants de l'intention et les garanties d'idempotence.
3. **Aucune rupture de continuité injustifiée** : une interruption technique ne fait pas perdre le projet, le document, le contexte ou une mission encore récupérable.

D2 reste propriétaire de la création, D4 des documents, D3 de la conduite conversationnelle et D6 des autorisations humaines. Le Pilote conserve les décisions métier ; Nora ne devient ni moteur transactionnel ni autorité autonome.

## 2. Contrat S02 — Création de projet récupérable

### 2.1 Diagnostic établi

La commande serveur possède déjà des garanties transactionnelles et une réconciliation, éprouvées dans les tests PostgreSQL. L'interface de création ne réconcilie pas une réponse réseau perdue, et sa gestion des exceptions peut laisser l'action bloquée. La reproduction navigateur `D2_ACK_OBS` est documentée dans le rapport T2, mais son harness était jetable et **n'est pas encore un test versionné**.

### 2.2 Comportement cible

- **Cas nominal :** après confirmation de la création, Studio ouvre le projet créé, conserve le fil et les documents, et reprend la mission initiale lorsqu'elle existe.
- **ACK perdu après commit :** l'interface conserve la même clé d'idempotence, consulte la réconciliation serveur et retrouve l'identité du projet. Elle n'émet pas une nouvelle création par défaut.
- **Réconciliation positive :** `ALREADY_CREATED` avec identité de projet autorisée déclenche une navigation vers le projet ou une action explicite « Ouvrir le projet » selon le contexte de reprise. Cela confirme D2, **pas automatiquement la réussite des étapes D4 ultérieures**.
- **Réconciliation incertaine :** `NOT_CONFIRMED_OR_UNKNOWN` maintient le sas et l'intention. Studio explique que la création n'est pas encore confirmée ; aucun projet fictif n'est affiché.
- **Conflit ou refus :** `CONFLICT`, `FORBIDDEN` ou une session réellement invalide n'entraînent ni nouvelle mutation ni navigation injustifiée.
- **Retour après rafraîchissement :** si le projet est déjà rattaché durablement au sas, sa réouverture reste possible sans repasser par une création.

### 2.3 Conception technique candidate

- Sécuriser `createProject()` avec gestion explicite des exceptions, parsing de réponse et libération systématique de l'état d'attente.
- Réutiliser `GET /api/preparations/{preparationId}/reconcile` ; ne pas créer de deuxième service métier.
- Préserver la clé effective, y compris `d2:mission:{clientIntentKey}` pour une mission structurée.
- Vérifier séparément la continuation de mission après confirmation D2. Une création confirmée peut coexister avec une restitution ou une étape documentaire encore en attente.
- Distinguer erreur d'authentification et panne technique sur les routes concernées : la capture générique qui retourne actuellement `401 SESSION_INVALID` pour toute exception ne constitue pas une classification correcte. Vérifier les conséquences API, UX et sécurité avant modification.
- Préserver la transaction de création, son fingerprint, ses règles de propriété et son unicité. **Aucun changement de schéma proposé.**

### 2.4 Critères d'acceptation

- Une seule création pour une même intention.
- Reprise navigateur après perte d'ACK avec identité de projet correcte.
- Aucun succès déclaré lorsque l'effet est incertain.
- Aucune navigation vers le projet d'un autre Pilote.
- Conversation et documents conservés après changement de contexte.
- Erreurs et actions de récupération compréhensibles.

**Contrats R2 applicables :** `RG-CRE-010`, `RG-CRE-011`, `RG-CRE-013`, `RG-CRE-024`, `PF-CRE-11` et `PF-CRE-16`.

## 3. Contrat S03 — Restitution fidèle après effet D4

### 3.1 Diagnostic établi

Le chemin conversationnel principal possède un traitement `sanitize + ACK` déjà couvert par des tests déterministes.

Le chemin de continuation D2→D4 persiste en revanche une réponse Nora qui ne passe pas systématiquement par ce traitement documentaire. Une contradiction est donc techniquement possible.

**Limite :** l'anomalie historique `ML4-REC-08`, observée en LIVE lors d'une révision dans le chemin conversationnel, n'est pas encore reproduite au SHA `42aa3739`. Le défaut de continuation D2→D4 identifié ne doit pas être présenté comme sa cause historique prouvée.

### 3.2 Comportement cible

Chaque résultat documentaire doit être transmis à Nora et au message final à partir de l'effet réellement constaté.

| Résultat propriétaire | Restitution obligatoire |
| --- | --- |
| `AVAILABLE` | Confirmer l'enregistrement avec identité et version |
| `FAILED` | Expliquer le refus ou l'échec réellement attesté |
| `CONFLICT` | Exposer le conflit et la nécessité de requalifier la révision |
| `UNKNOWN` | Ne déclarer ni succès ni échec définitif ; prévoir la vérification |
| `NOT_EXECUTED` | Indiquer explicitement qu'aucune écriture n'a été tentée |

Le résultat transactionnel est distinct de la narration cognitive.

### 3.3 Conception technique candidate

- Réutiliser les fonctions existantes de composition documentaire, notamment `appendDocumentEffectAck`, plutôt que créer un nouveau mécanisme.
- Harmoniser le chemin `continueAfterProjectCreated()` avec le pipeline conversationnel principal.
- Conserver **un seul verdict applicatif D4** et un ACK de mission complémentaire, sans doublon ni contradiction.
- Ne pas transformer automatiquement un résultat non `AVAILABLE` en `FAILED`. Le code de continuation possède actuellement une branche générique à qualifier pour `UNKNOWN` et `CONFLICT`.
- En cas de génération Nora indisponible, produire une restitution canonique fondée sur les faits, sans rejouer une écriture déjà confirmée.
- Préserver les protections d'ownership/CAS, la corrélation de génération, les identifiants de révision et la conservation du contenu documentaire.
- Éviter toute suppression excessive de texte utile par les règles de nettoyage de narration.

### 3.4 Critères d'acceptation

Une même intention doit permettre de vérifier la chaîne :

**Demande Pilote → qualification → effet D4 → résultat durable → restitution Nora → message enregistré → affichage navigateur.**

Pour une révision `AVAILABLE`, l'identité du document et de la version doit correspondre de bout en bout, sans affirmation concurrente de non-enregistrement.

La restitution doit aussi permettre de poursuivre utilement l'intention, sans se limiter à un bloc technique de statut.

## 4. Interface avec S05 — Pending et continuité

S05 reste une obligation de ML4C, mais le diagnostic T2 ne suffit pas à en arrêter la solution technique.

Le prochain travail causal devra distinguer :

- une commande encore susceptible de produire un effet ;
- une commande `UNKNOWN` nécessitant réconciliation ;
- une question indépendante sans nouvel effet ;
- une nouvelle intention incompatible avec le travail non résolu.

L'objectif sera de permettre les échanges indépendants tout en conservant le verrouillage nécessaire des opérations à risque.

**Aucune nouvelle machine à états globale ni nouveau moteur conversationnel n'est autorisé par le présent design.**

## 5. Condition préalable ENV-01

Le rapport T2 signale un accès accidentel à la base opérateur `sfia_next_dev` et une possible création de données de test.

**Cette situation est un blocage pour les nouvelles exécutions susceptibles d'écrire dans cette base.**

Avant les tests du correctif :

1. Réaliser un **inventaire en lecture seule** des identités et objets potentiellement créés, de leurs horodatages et de leurs rattachements.
2. Établir les effets effectivement constatés. Le volume d'environ 25 identités reste une **estimation du handoff**, pas un inventaire confirmé.
3. Soumettre toute suppression ou correction de données à Morris sous mandat distinct.
4. Vérifier avant chaque campagne la base réellement connectée, son rôle, la lane, le port, les credentials et les limites de mutation.
5. Refuser le lancement si l'isolation de la base de tests n'est pas démontrée.

La protection de RECETTE et l'absence de STABLE doivent être maintenues. Un inventaire read-only n'autorise pas un cleanup.

## 6. Réalisation intégrée candidate

Les corrections S02 et S03 peuvent être regroupées dans **un même ensemble de convergence fonctionnelle**, car elles concernent une intention traversant création de projet, continuation Nora et enregistrement documentaire.

Le travail technique ultérieur devra réunir dans le même cycle : analyse locale, code, tests unitaires et PostgreSQL, tests navigateur, UX fonctionnelle strictement nécessaire, synchronisation documentaire, revue d'intégration et preuves.

**Points d'entrée probables (blast radius, pas autorisation de modification) :**

- `web/src/app/preparations/[preparationId]/page.tsx`
- `web/src/app/api/preparations/[preparationId]/create-project/route.ts`
- `web/src/app/api/preparations/[preparationId]/reconcile/route.ts`
- `web/src/domains/conversation/intent-conduction.ts`
- `web/src/domains/conversation/service.ts`
- `web/src/domains/conversation/document-act.ts`

## 7. Preuves de sortie exigées

| Preuve | Oracle |
| --- | --- |
| PostgreSQL D2 | Unicité, rejeu, conflit et propriété préservés |
| Playwright D2 | Perte d'ACK post-commit récupérée, navigation correcte, aucun doublon |
| PostgreSQL D3/D4 | Même document/révision et aucune double écriture après reprise |
| Tests de narration | Pas de contradiction `AVAILABLE` / « non sauvegardé » sur les chemins concernés |
| Navigateur D4 | Message durable et affichage cohérents |
| Nora LIVE isolé | CREATE et REVISE réels, corrélés au SHA/build/lane du candidat |
| Négatifs | `FAILED`, `CONFLICT`, `UNKNOWN`, refus d'accès, interruption et restitution dégradée |
| Régression | Parcours ML1–ML4 impactés inchangés ou correctement adaptés |
| ENV-01 | Isolation effective prouvée ; incident précédent qualifié |

Les tests existants restent à conserver. Le scénario `D2_ACK_OBS` devra devenir un **test versionné et reproductible**. Les tests déterministes ne peuvent pas être présentés comme des preuves LIVE.

## 8. Dépendances et gates

**Avant réalisation :** validation Morris de ce design (**acquise pour le contenu**), qualification ENV-01, définition du périmètre technique autorisé, vérification des dépendances et génération du contrat Cursor SFIA v2.6 depuis Git.

**Pendant réalisation :** code et preuves sur branche candidate de travail uniquement sous GO technique distinct ; sans mutation RECETTE ni publication Git REAL hors mandat.

**Après réalisation :** revue ChatGPT du Review Pack, mise à disposition éventuelle d'un candidat RECETTE selon ENV-01, vérification utilisateur Morris et décision d'intégration distincte.

Les autres sujets CP2 — portefeuille, cognition/mémoire, pending S05, gouvernance Git et régression S01–S07 — restent dans le périmètre global ML4C et **ne sont pas réputés traités** par ce design D2/D4.

**État final de contenu :** `CORRECTION DESIGN VALIDATED IN CONTENT / T2 CAUSES QUALIFIED WITH RESERVES / ENV-01 OPEN / NO BUILD GO / NO ADOPTED`.
