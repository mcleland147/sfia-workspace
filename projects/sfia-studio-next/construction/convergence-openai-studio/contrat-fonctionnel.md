# Convergence OpenAI–Studio Next — Contrat fonctionnel candidat

> **Suivi factuel 27/11/2026 — macro-lot 1 :** voir le [bilan de clôture accepté avec réserves](cloture-macro-lot-1.md). Le Pilote dispose du bandeau de comparaison ; estimation partielle et non-comparabilité sont explicites, agrégats fournisseur masqués sans habilitation. V1 conservée, WEB LIVE OFF. Cette note ne modifie aucun critère CONV ni ne déclare toutes les exigences BEHAVIOR PROVEN.

| Champ | Valeur |
|---|---|
| Version | v0.1 — 26 novembre 2026 |
| Statut | DOCUMENTED / CANDIDATE SPEC — à revoir collectivement ; pas VALIDATED SPEC ni IMPLEMENTED |
| Portée | R5 / ML5 — trois macro-lots approuvés en orientation par Morris |
| Référence | [Cadrage](cadrage.md), [contrat technique](contrat-technique.md), étude [460a121f](https://github.com/mcleland147/sfia-workspace/blob/460a121ff94bdfe08767a9870e7350e13f5d2a59/sfia-review-handoff/latest-chatgpt-review.md) |
| Autorité | Morris : arbitrages et gates. Pilote : décisions métier via D6. Les contrats R2 propriétaires restent applicables. |

## 1. Expérience attendue

Le Pilote travaille dans le même Studio et avec la même Nora. Les services natifs ne deviennent pas des applications ou assistants concurrents. Le fonctionnement existant reste utilisable lorsque les services nouveaux sont indisponibles, dans la mesure où un chemin sûr et réellement disponible existe. Sinon le produit expose la limite, sans simuler une réussite. Une amélioration doit apporter au moins une équivalence fonctionnelle sur les parcours conservés, et une valeur mesurable lorsqu'elle est annoncée : qualité, couverture, fiabilité, maintenabilité, coût par résultat utile ou expérience.

Les règles ci-dessous sont des critères de conception candidats à la revue. Les décisions déjà opposables (SEM, D6, droits, versions, DATA-01, ENV-01) ne sont pas redéfinies.

## 2. Règles transverses

| ID | Besoin et comportement attendu | Vérification |
|---|---|---|
| CONV-F01 | Le Pilote conserve ses projets, conversations, travaux, documents, décisions et parcours nominaux. | Même corpus et mêmes intentions avant/après, conservation des identités et effets |
| CONV-F02 | Nora qualifie sémantiquement le besoin puis mobilise une ressource appropriée ; les domaines Studio vérifient son admissibilité. | Pas de routeur lexical ni de classification obligatoire préalable ; proposition et admission traçables |
| CONV-F03 | Une sortie OpenAI est un résultat technique ou cognitif, jamais une HumanDecision. | Refus des effets sans acte humain requis ; score IA non autorisant |
| CONV-F04 | Tout usage est imputable à une opération réelle et, si applicable, au travail/projet ; les inconnues restent visibles. | Pas de workId fictif ni coût inconnu présenté comme nul |
| CONV-F05 | Échec, annulation, absence de permission, indisponibilité ou perte de contexte sont explicites. | Reprise sans duplication, requalification ou suspension honnête |
| CONV-F06 | Les données restent cloisonnées par environnement, Pilote et projet selon les droits applicables. | Aucune consultation après révocation ; aucune fuite via WEB, trace, index ou audio |
| CONV-F07 | Un remplacement exige la couverture des fonctions réellement utilisées, incluant erreurs et reprise ; maintien d'un rollback borné. | Oracle indépendant, non-régression et preuve de retrait des redondances |
| CONV-F08 | Les capacités ne sont disponibles qu'après configuration, admission et qualification effectives. | Distinction DOCUMENTED, VALIDATED SPEC, IMPLEMENTED, COVERAGE VERIFIED, BEHAVIOR PROVEN, ADOPTED |

## 3. Lot 1 — Socle fournisseur natif et observabilité

### 3.1 Observabilité et continuité

Le Pilote doit pouvoir utiliser Nora sans changement de parcours. Le constructeur peut diagnostiquer une génération, un outil, une tentative, une erreur ou une reprise grâce à des traces liées à l'opération réelle. Le diagnostic natif complète ou remplace les événements techniques redondants ; les événements métier, effets D6 et preuves restent Studio. Le contenu privé n'est pas exposé pour les besoins du diagnostic.

Nora poursuit un travail avec les acquis pertinents, ses sources et ses contraintes. Une optimisation de contexte fournisseur n'autorise ni oubli des acquis déterminants, ni réutilisation d'un contexte devenu interdit. La reprise reste possible après indisponibilité de l'état fournisseur à partir de la vérité métier Studio, sinon suspension expliquée. Aucun changement arbitraire de budgets cognitifs ou de politique modèle/effort. Les optimisations sont appréciées sur la qualité, la latence et la consommation cumulée ; pas de promesse d'économie automatique.

### 3.2 Consommation et coûts : un seul espace utilisateur

Le mécanisme actuel observe et estime les coûts des travaux. OpenAI Usage indique les usages agrégés ; OpenAI Costs indique les coûts enregistrés par le fournisseur. Studio réunit les deux niveaux, sans les confondre. Il ne peut pas attribuer arbitrairement un coût fournisseur agrégé à une investigation, à un document ou à un projet métier.

| Information | Vue attendue | Qualification |
|---|---|---|
| Usage opérationnel | Travail, opération, ressource, modèle/effort observable, tokens, outils, audio et autres unités pertinentes | Mesuré / partiel / inconnu |
| Estimation Studio | Estimation par travail et agrégat selon tarifs versionnés | Estimation, non facture |
| Usage fournisseur | Période, projet OpenAI, clé ou autre dimension lorsqu'elle est retournée | Agrégat fournisseur, source et fraîcheur |
| Coût fournisseur | Montant, devise, période, projet OpenAI/poste et autres regroupements réellement disponibles | Coût enregistré par le fournisseur, non coût exact par travail |
| Écart | Coût fournisseur moins estimation Studio, exclusivement sur périmètre et période comparables | Comparable / partiel / non comparable |
| Synchronisation | Dernière réussite, période couverte, actualité, incident ou données indisponibles | Pas d'échec de Nora si synchronisation indisponible |

Exemple fictif : pour une journée UTC et un même périmètre fournisseur, trois travaux Studio totalisent 0,80 USD estimés ; Costs retourne 0,86 USD. L'écart agrégé est de 0,06 USD. Studio ne répartit pas les 0,06 entre les travaux ; il signale un écart à expliquer. Si les clés partagent un projet et que le regroupement disponible ne permet pas de les distinguer, pas d'attribution DEV/RECETTE fictive. Si la période n'est pas complète, l'écart est provisoire.

La consultation administrative se fait hors runtime Nora. Le Pilote voit seulement les données autorisées, et non les coûts d'autres projets/organisations. Les permissions produit d'accès financier restent opposables. Pas de deuxième application financière ni de second ledger de consommations ; évolution de l'interface existante (contrat page 13 à préserver, revue de la nouvelle restitution avant réalisation).

Fréquence candidate : usage périodique, coût rapproché quotidiennement avec fenêtre de rafraîchissement des jours récents ; actualisation contrôlée si utile. La date de disponibilité du fournisseur prévaut sur une promesse de temps réel. Pas de plafond financier imposé à Nora.

### 3.3 WEB

Le Pilote peut demander une recherche publique quand elle est effectivement admise. Nora examine des sources, ouvre et confronte les résultats puis indique ce qu'elle a réellement consulté. Le WEB public ne reçoit pas de contexte privé ; une requête exceptionnelle dépend de l'autorité D6 applicable et est revérifiée au point d'effet. WEB mixte reste fermé.

L'usage des recherches facturables observé n'est pas assimilé au nombre de Responses ou d'appels intégrés. Les limites préventives et la mesure après appel sont distinguées. Une campagne non bornée selon le gate applicable ne démarre pas. Si WEB désactivé, le produit ne prétend pas avoir recherché ; le reste de Nora fonctionne normalement.

### 3.4 Acceptation lot 1

| ID | Parcours / oracle |
|---|---|
| CONV-F11 | Demande nominale et boucle d'outils réelle : réponse, état durable, traces natives filtrées, événements métier et tentatives concordants ; erreurs/retries visibles, absence d'export privé |
| CONV-F12 | Reprise d'une investigation avec acquis : même travail, sources et contraintes conservées, aucune relecture artificielle ; comparaison avec chemin existant et preuve de rollback |
| CONV-F13 | Rapprochement sur un périmètre identique : données PostgreSQL, API et DOM FinOps concordantes ; agrégats fournisseur, estimation, écart et fraîcheur séparés ; absence de double comptage |
| CONV-F14 | Synchronisation indisponible / pagination / donnée tardive / projet non autorisé : Nora non bloquée, état exact et données cloisonnées |
| CONV-F15 | WEB public, si gate autorisé : recherche sourcée, confrontation et mesure native ; requête interdite n'atteint pas le réseau ; WEB OFF effectif après qualification |

## 4. Lot 2 — Cognition spécialisée et intelligence documentaire

### 4.1 Ressources cognitives

Nora peut mobiliser des générations, jugements bornés, recherche documentaire ou compréhension visuelle selon la nature du travail. Le Pilote n'a pas à choisir manuellement une API, un modèle ou un effort. Une ressource spécialisée est optionnelle et contextualisée ; la décision finale métier ou l'explication argumentée ne se réduit pas à un score. Decisions peut servir à évaluer une pertinence, une couverture, une comparaison ou un besoin d'approfondissement, sur données suffisantes. Une réponse incertaine, ambiguë ou non supportée conduit à une analyse plus adaptée ou une limite explicite. Pas de seuil universel de vérité, ni de remplacement de HumanDecision.

### 4.2 Recherche documentaire

Pour un besoin projet, Nora trouve les passages pertinents dans les ressources autorisées, y compris si le vocabulaire diffère, et sait retrouver les références exactes quand elles sont nécessaires. Le corpus comprend les sujets et acquis D4 et les ressources documentaires/Git autorisées D9 selon leur nature et leurs versions. Un résultat de recherche est un candidat de consultation, pas une preuve par lui-même. Nora vérifie les sources originales pertinentes et distingue fait, hypothèse, contradiction et recommandation.

La sélection d'une architecture Retrieval doit comparer la recherche actuelle et les solutions natives/locaux dérivées ; une seule stratégie permanente retenue par responsabilité après preuve. Le Pilote ne doit pas subir deux moteurs, deux mémoires ni deux bibliothèques. Le rafraîchissement, l'indexation et les droits ne doivent pas dépendre d'une intervention manuelle permanente. Si une ressource n'est pas indexée, elle reste consultable par un chemin existant sûr ; l'absence de résultat n'implique pas l'absence de connaissance.

Une source révoquée, supprimée, modifiée ou d'un autre projet ne doit pas être injectée à Nora ni visible dans les citations, même si un index externe retourne encore un ancien passage. L'historique déjà conservé est traité selon les droits et règles de conservation applicables, sans effacement rétroactif fictif.

### 4.3 Documents et vision

Nora peut analyser du texte, des schémas, tableaux, captures et PDF scannés lorsqu'une capacité native multimodale est admise. La compréhension visuelle ne vaut pas OCR exhaustif ni preuve de chaque détail. Nora signale les zones illisibles, pages non consultées et interprétations incertaines. La visionneuse actuelle continue d'ouvrir la version exacte, selon droits, avec pagination, zoom et recherche textuelle lorsque disponible ; elle ne dépend pas de la réussite d'une analyse IA.

La transmission ponctuelle et l'indexation permanente sont des opérations distinctes. Les droits et règles de stockage externe s'appliquent avant chaque transfert. Le Pilote peut demander une lecture ciblée plutôt qu'une analyse de tout un corpus ; les sources utilisées restent identifiables.

### 4.4 Acceptation lot 2

Architecture verrouillée (GO Morris 2026-11-27) : KEEP Responses + `semantic-qualification` ; ADAPT Decisions bornés avec incertitude + fallback Responses ; **E = lexical + embeddings** (index dérivé ops = PostgreSQL après GO A / migration **027 APPLIED DEV**) ; DEFER Vector Stores / File Search / fileId durable ; ADAPT Vision ponctuelle ; KEEP extract PDF, visionneuse, D3 V1, HumanDecision D6. OpenAI Decisions ≠ D6. Fichier `.sfia-derived/` hors chemin opérationnel (tests `BACKEND=file` seulement).

| ID | Parcours / oracle |
|---|---|
| CONV-F21 | Comparaison Decisions / Responses sur jugements bornés labellisés indépendamment ; qualité au moins équivalente sur les cas remplacés, erreurs et incertitude explicites ; aucun effet D6 |
| CONV-F22 | Recherche comparative sur Chantiers360, RoomBooking et acquis D4 autorisés : questions lexicales exactes, paraphrases, homonymes, faits contradictoires, sources absentes ; pertinence/rappel, citations exactes, coût et latence comparés |
| CONV-F23 | Mise à jour, révocation, suppression et autre projet : ancienne version non injectée, résultats filtrés et références exactes, index reconstructible |
| CONV-F24 | PDF textuel, schéma/scanné BatiNova si autorisé, tableau complexe : comparaison des résultats à un oracle humain/documentaire, limites explicites, visionneuse fonctionnelle |
| CONV-F25 | Investigation → reprise → note → inspection/conservation → révision ciblée : maintien des contrats D3/D4/D6/D8/D9, V1 historique et V2 courante, pas d'effet non demandé |
| CONV-F26 | Usages Decisions, embeddings, retrieval, stockage, Files/Vision attribuables et visibles dans FinOps ; absence de double comptage ou coût inventé |

## 5. Lot 3 — Interaction audio avec Nora

Le composer offre une action micro accessible. L'enregistrement commence sur action explicite après permission navigateur. Un état visible indique l'enregistrement ; le Pilote peut arrêter ou annuler. En mode fichier, le texte arrive après arrêt ; en mode temps réel candidat, le texte provisoire s'affiche progressivement, distingué du texte final. Le texte final est éditable dans le composer, jamais envoyé automatiquement.

L'envoi explicite crée le même message USER authentifié que la saisie clavier ; les règles habituelles d'inspection et d'autorité restent inchangées. Une transcription ou un clic micro ne vaut pas HumanDecision. Une permission refusée, un réseau perdu, un fichier non supporté ou une interruption laisse le composer utilisable au clavier et préserve le brouillon. L'audio brut n'est pas conservé par défaut au-delà de la nécessité de traitement ; les modalités fournisseur restent à qualifier. Les consommations audio sont visibles même sans travail cognitif (transcription annulée ou non envoyée si elle a effectivement consommé).

Le mode fichier est le premier parcours ; qualifier Realtime dans le même lot et retenir son intégration si l'amélioration de l'expérience et les garanties sont établies. La voix bidirectionnelle autonome est hors lot.

| ID | Parcours / oracle |
|---|---|
| CONV-F31 | Micro autorisé → transcription française d'une demande technique → édition → envoi : texte fidèle au corpus de référence, un seul message et aucune action avant envoi |
| CONV-F32 | Refus micro, annulation, expiration, réseau, navigation et double clic : arrêt réel, aucun envoi intempestif, aucun brouillon perdu |
| CONV-F33 | Comparaison fichier / temps réel : qualité terminologique, latence, continuité, coût, accessibilité et sécurité ; aucune clé longue dans le navigateur |
| CONV-F34 | Usage audio mesuré et rapproché selon dimensions disponibles ; le texte reste utilisable si transcription indisponible ; droits et rétention vérifiés |

## 6. Capacités différées et future réalisation

Agents API/Codex : évaluer avant livraison 2 à partir du parcours D7 mandat inspecté et autorisé → tentative → résultats/artifacts → D8 qualification → acceptation D6. Comparer Cursor et natif sur l'équivalence de preuves, la maîtrise du dépôt, l'annulation, la reprise, les droits et les coûts. Ne pas remplacer un exécuteur avant preuve ; ne pas construire d'abstraction générique sans besoin. Cette évaluation ne modifie pas notre processus externe de construction.

Images génératives : orientation future seulement ; ne pas activer de permission ni d'interface par défaut. Vision d'images existantes est incluse au lot 2. Vidéo hors périmètre.

## 7. Recette et revue

Les critères ci-dessus complètent, sans remplacer, le [contrat d'acceptation cognition/réalisation](../contrat-acceptation-cognition-et-realisation-gouvernee.md). Les cas historiques RoomBooking, Chantiers360 et InterventionTrack constituent des sources de non-régression à réemployer selon impact, non des replays systématiques. Les scénarios doivent comporter corpus autorisés, critères individuels, oracle indépendant, résultats complets utiles et limites de preuve. PASS d'un endpoint ou présence d'un mot-clé ne valent pas validation intellectuelle. F2 visuelle relève de Morris sur l'environnement autorisé ; le navigateur fonctionnel est à qualifier avant gate.

Sources propriétaires : [allocation fonctionnelle](../../conception-fonctionnelle/allocation-cognitive-recherche-web-et-finops.md), [D4](../../conception-fonctionnelle/connaissance-sujets-et-continuite-du-projet.md), [D6](../../conception-fonctionnelle/decisions-et-gouvernance-du-pilote.md), [D9](../../conception-fonctionnelle/integration-git-gouvernee.md), [D7](../../conception-fonctionnelle/preparation-cognitive-et-realisation-technique-gouvernee.md), [D8](../../conception-fonctionnelle/resultats-et-preuves.md), [OBS](../../architecture-technique/contrat-observabilite-transverse.md), [SEM](../../governance/decisions/2026-11-12-qualification-semantique-nora-mobilisation-capacites.md). Contrat candidat soumis à revue collective, sans modification de ces sources.
