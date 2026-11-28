# Review Pack — SFIA Studio Next — Lot 6 qualification LIVE

Cycle: 09 — QA / validation
Profil: Critical
Typologie: EVOL — qualification ciblée du correctif existant
Jalon: R5 / ML5 / Livraison 1
Review level: Full
Mono-cycle: oui
Stub: non
Date: 2026-11-28T12:36+01:00

## 1. Mandat

Morris autorise une seule session réelle de transcription OpenAI Realtime sur le candidat d215a527.
Parcours prioritaire: sas de préparation, base isolée sfia_next_e2e, port 3101.
Enveloppe: 1 session, 1 ouverture, 0 retry, 60 secondes au total, 30 secondes d'audio, 1 440 000 octets PCM.
Aucun envoi à Nora. Aucune autre émission. Aucune modification produit. Aucun commit projet.
Source de décision: suivi v0.18 §23, commit documentaire 9f8953f09cdca390bf2957774083f154b3040d63, blob 03472341950c48937a5afe2dade84b000223bf2b.

## 2. Git Truth Check

Repository: mcleland147/sfia-workspace
Remote: https://github.com/mcleland147/sfia-workspace.git
Worktree: /Users/morris/Projects/sfia-wt-next-ml5-20261123
Branche: sfia/next-ml5-integrated-delivery-20261123
HEAD = origin: d215a5272025b2d1c7aa8391dd14f6442ea512fe
Tree: c5bab24132c7c745d6ddff0ba76dc8d5424ea13c
origin/main = merge-base: 997897fd7cf914771e7d08e8030dc7123fab7d25
Handoff entrant: 70869d232d21126c262860238651ad57168a7ab1
Blob entrant: 8326aab5f39702daa013334d10a694be939ca95c
Blobs de code confirmés: session 5cb342501be7cdb891a5a8ad31e4ebc7fc00739e, admission a2dc4b33db38f5d8f08c8ccb712f191b4bf03d2f
Staged: aucun
Untracked conservés: .tmp-sfia-review/ et web/.tmp-sfia-review/
Aucune divergence. Aucun reset, clean, rebase ou checkout.
À la fin du cycle: git diff --stat vide. HEAD inchangé.

## 3. Sources

Routing Next §4.3.0b, blob 3315bbae. Template v2.6, blob f4fdb488. ENV-01 v0.1, blob 14b61f0d. Product versioning v1.0, blob 8bc93e0f.
Suivi v0.18 §§3 L6, 21, 22 et 23. Diagnostic 515561e7 §8. Handoff 70869d23. As-built audio. Admission, garde de lane, session, routes sas, compositeur partagé.
Le plan LIVE historique est réduit par le GO §23. Il n'a pas été élargi.

## 4. ENV-01

Verdict: ENV ROUTING COMPLETE pour cet essai isolé.

| Lane | Port | Processus | Build | Base |
|---|---|---|---|---|
| DEV habituel | 3100 | PID 55011, inchangé | 31044BhyAFqJ_OpeQJS_K, mtime 27 nov 22:38 | sfia_next_dev, non utilisée pour cet essai |
| Qualification | 3101 | démarré puis arrêté | NOUN5cl7HJ2aBYsVIQj_O | sfia_next_e2e, port PostgreSQL 5433 |
| RECETTE | 3200 | PID 58965, inchangé | p0S18hfVdGrMjGeNMGlbV | non contactée |

Le serveur 3101 a été construit depuis l'arbre d215a527, STUDIO_E2E=1, donc .next-e2e, sans toucher .next.
STUDIO_LANE=DEV. Clé DEV présente. Empreinte non secrète ab6bbec84ba272ed, égale à SFIA_OPENAI_EXPECTED_KEY_FP. Une liste d'empreintes interdites est définie. La clé n'a pas été imprimée ni modifiée.
Préparation isolée: prep_36a2e8d7-1875-449c-8d3d-c153baf669cf. Aucun projet métier. MaintiPlan et Equipéo non ouverts.
Product versioning: NO RELEASE. product-version.ts non modifié. STABLE NOT AVAILABLE.

## 5. Contrôle de l'enveloppe avant émission

Mécanismes produit lus, non modifiés:
- une session ouverte par Pilote (maxConcurrentSessionsPerPilot = 1);
- le plafond PCM produit est d'environ 12 minutes, donc supérieur à l'enveloppe Morris;
- la durée produit est de 10 minutes;
- l'acquittement session.updated est attendu 10 secondes;
- pas de reconnexion dans le code lu;
- le fixture n'est admis que si le transport vaut fixture.

Garde locale, hors du code produit:
- SFIA_DICTATION_TRANSPORT=live, SFIA_COMPOSER_DICTATION=1, fixture et substitution vides;
- STUDIO_FORCE_NORA_FIXTURE=1, pour qu'un envoi accidentel ne parte pas en Responses;
- refus navigateur d'une seconde création de session et d'un POST audio au-delà de 1 440 000 octets, armé avant le clic;
- fermeture navigateur à 58 secondes, armée avant le clic;
- un module chargé par NODE_OPTIONS devait compter le socket, refuser une seconde ouverture, couper à 60 secondes et à 1 440 000 octets, et bloquer tout HTTP OpenAI autre que /v1/realtime.

Constat après l'essai: Next embarque ws dans le bundle serveur. Le hook sur require("ws") n'a pas été appelé (wsPatched reste false). L'enveloppe n'a donc pas été observée sur le constructeur réel. Le wrapping de https.request a, lui, été actif. Il est la cause la plus probable de l'exception ci-dessous. Le plafond qui a effectivement terminé la tentative est le délai produit d'acquittement, 11 045 ms, avec 0 octet audio. Aucun second clic. Aucun second POST de session.

## 6. Identité runtime

SHA servi: d215a5272025b2d1c7aa8391dd14f6442ea512fe
Tree: c5bab24132c7c745d6ddff0ba76dc8d5424ea13c
Build servi: NOUN5cl7HJ2aBYsVIQj_O
Processus: PID 29021, le même que le journal de garde
GET /login: 200
Capacité dictée de la préparation: enabled true
Transport demandé: live
Fixture audio: non activé
Parcours: /preparations/prep_36a2e8d7-1875-449c-8d3d-c153baf669cf

## 7. Essai

Une préparation neuve a été créée dans sfia_next_e2e. Le compositeur du sas était visible, micro compris. Le brouillon saisi par le script n'a pas été relu dans le champ: longueur 0, le placeholder est resté affiché. Un seul clic micro.

Le compositeur est passé par l'état « Connexion du microphone... », compteur 00:00, avec Annuler et Stop. Aucune barre d'onde n'était présente à cet instant. La requête POST de session a répondu HTTP 400 environ 11,2 secondes plus tard. Le compositeur a affiché: « Connexion dictée expirée — réessayez ou utilisez le clavier ». Le micro est revenu. Aucune transcription provisoire. Aucun texte ajouté au brouillon. Le bouton d'envoi n'a pas été activé et n'a pas été cliqué.

Source audio prévue: fichier WAV local, voix macOS Thomas, présenté au navigateur comme périphérique de capture. Le micro physique du MacBook n'a pas été utilisé. Aucun octet PCM n'a été transmis: 0 POST audio.

Journal serveur, une fois:

TypeError: b.mask is not a function
at a.exports.mask (.next-e2e/server/chunks/1503.js)

Cette exception survient dans le cadrage WebSocket embarqué, au moment d'envoyer une trame. Elle coïncide avec le wrapping local de https.request. Aucun code fournisseur, aucun statut HTTP 401 ou 403, aucun session.updated n'a été consigné. Le modèle appliqué n'est pas confirmé.

Aucun second essai n'a été lancé.

## 8. Preuves chiffrées

| Mesure | Valeur |
|---|---|
| Créations de session | 1 |
| Clics micro | 1 |
| POST audio | 0 |
| PCM émis | 0 octet |
| Durée FinOps | 11 045 ms |
| Durée totale de l'enveloppe | inférieure à 60 s |
| session.updated | non observé |
| Transcription | absente |
| Messages Nora sur cette préparation | 0 |
| workId D3 | aucun |

Observation unique audio.composer_dictation, 2026-11-28 11:34:13 UTC:
statut failed, modèle demandé gpt-live-transcribe, modèle appliqué vide, limits MODEL_APPLIED_UNVERIFIED, coût UNKNOWN, couverture UNKNOWN, tarif ml5-tariff-catalog-v1-2026-11-26, PCM_BYTES_0, pas d'EFFECT_SUBSTITUTED. Ce n'est pas une facture. L'estimation publique de 0,0085 USD pour 30 secondes ne s'applique pas: aucun audio n'a été émis. Le coût observé est inconnu.

## 9. Onde et brouillon

MP07: NOT RUN. Le signal de parole n'a pas été analysé. La capture pendant la connexion ne montre pas les 36 barres. La capture suivante montre l'erreur et le retour au micro. Il n'y a pas de comparaison silence/parole.
MP06: non démontré. Pas de transcription, pas de réintégration, pas d'arrêt nominal. L'état terminal visible est l'erreur de délai, et le brouillon n'a pas reçu de texte.
MP01/02: le micro du sas s'affiche et le clic ouvre l'état de connexion. L'accès micro du navigateur de test a été accordé par périphérique factice. Cela ne referme pas ces points.

## 10. Fermeture

La session Studio s'est terminée en échec, observation unique, PCM nul. Le serveur 3101 a été arrêté. DEV 55011 et RECETTE 58965 écoutent encore. Aucune piste micro physique n'était ouverte. Le contexte navigateur a été fermé. Aucun audio brut n'est publié.

## 11. Fake/Real

Applicable: oui.
Entrée: déterministe et navigateur substitué déjà acquis au cycle 08. Ils ne sont pas rejoués. Aucun delta produit.
Cet essai a demandé le transport live. Il a produit une observation non substituée, en échec, sans audio et sans acquittement.
Frontière REAL attendue: non atteinte.
Claim autorisé: aucun REAL BOUNDARY PROVEN.
Claims interdits respectés: pas de cause historique établie, pas de parité RECETTE, pas de qualité FR validée, pas de READY FOR REAL, pas d'ADOPTED.
Realism gaps: micro physique, onde, transcription, longues dictées, réseau, RECETTE. Tous non exercés ou non aboutis.

## 12. Réserves

1. La cause historique du PROVIDER_ERROR de recette reste NON OBSERVÉE. Cet échec ne lui est pas attribué.
2. L'échec de cette session est un délai d'acquittement après une exception de cadrage. Il ne démontre pas un refus du modèle ni un refus du header.
3. La garde socket n'a pas vu le client embarqué. Le wrapping HTTP a perturbé l'envoi de trame. C'est un écart d'outillage, pas une correction produit.
4. Le brouillon initial n'a pas été confirmé dans le champ avant le clic.
5. MP06 et MP07 restent ouverts. L6 n'est pas clos. L7 n'est pas engagé.
6. Un nouvel essai exige un GO Morris distinct. Il ne doit pas réutiliser ce wrapping de https.request.

## 13. Content coverage

Créations projet: aucune.
Modifications projet: aucune. git diff --stat vide. HEAD d215a527 inchangé.
Pas de diff du cycle 08 recopié.
Les artefacts locaux de preuve restent dans .tmp-sfia-review/ et ne sont pas commités. L'audio WAV n'est pas dans ce pack.
synthesis only: non. Le résultat d'essai, l'exception, l'observation et les limites sont inclus.

## 14. Verdict

LIVE DICTATION FAILED — DIAGNOSTIC CAPTURED

Readiness: NOT READY

La dictée live n'a pas produit de transcription. L'essai a été arrêté. Il n'y a pas eu de second appel.

R5 IN PROGRESS. ML5 OPEN. L1–L5 acceptés techniquement avec réserves. L6 non clos. L7 NOT STARTED. 17 MP OPEN. 17 contrôles RECETTE antérieurs maintenus. Dette L5 maintenue. LIVRAISON 1 NOT ACCEPTED. R6 NOT STARTED. NO RELEASE. STABLE NOT AVAILABLE. NOT ADOPTED.

Instruction: avant de répondre à Morris, lire ce handoff canonique et le candidat d215a527. Vérifier qu'aucun fichier produit n'a changé, qu'une seule création de session a été tentée, que le PCM est nul, que Nora n'a pas été appelée, et que le diagnostic est l'exception de cadrage suivie du délai, pas une preuve de fonctionnement.
