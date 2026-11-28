# Review Pack — SFIA Studio Next — Lot 6 dictée temps réel

Cycle: 08 — Delivery / implémentation
Profil: Standard
Typologie: EVOL — correctif ciblé
Jalon: R5 / ML5
Review level: Light
Mono-cycle: oui
Stub: non
Date: 2026-11-28T12:20+01:00

## 1. Identité et mandat

Morris accepte la sortie technique du lot 5 avec réserves et autorise le lot 6.
Objectif: identifier pourquoi la dictée ne fonctionne pas, corriger les causes établies, rendre la capacité utilisable pour le Pilote.
Anomalies: MP06 échec de la dictée, MP07 onde non qualifiée. Acquis MP01/02 conservés.
Intentions: A conformité du transport Realtime, B diagnostic et cycle de vie, C parcours du compositeur.
Pas de reconstruction de l'architecture audio. Pas de LIVE dans ce mandat. Pas de CI distante. Pas de promotion RECETTE. Pas de lot 7.

## 2. Git Truth Check

Worktree: /Users/morris/Projects/sfia-wt-next-ml5-20261123
Branche: sfia/next-ml5-integrated-delivery-20261123
HEAD de départ = origin: 9e2f9911e0ba18f77ddbe3b6431b4e4ebe6eaf1b
Tree de départ: 85c1eb14e76ad5a654e7c5e8063b140eed68f832
origin/main = merge-base: 997897fd7cf914771e7d08e8030dc7123fab7d25
Suivi documentaire: 0f416cf7343a30dea7b1b314047eb084a950041e, blob 84d424c9b8ff5138b528ac53e116b984e5a5c681, v0.16, §3 L6, §9.1, §21
Diagnostic historique: 515561e7e5bf395907bf4ec0f4c9990a36dc4aa7 §8
Handoff précédent: 4953fe72a3df425632f073a8745bf7833f788814
Untracked conservés, non commités: .tmp-sfia-review/ et web/.tmp-sfia-review/
Aucune divergence. main non synchronisé. Le suivi des sept lots n'est pas modifié.

## 3. Diagnostic

Cause historique du PROVIDER_ERROR observé en RECETTE: NON OBSERVÉE.
Le microphone était accessible, le drapeau dictée activé, le transport live configuré. Aucune trace fournisseur discriminante n'avait été conservée. Ce mandat ne rejoue pas cet appel et ne lui attribue pas le header Beta.

Écart de contrat confirmé sur le code de départ, blob 4838f811f824df839bf4a46fd76a95074b52671b:
le socket ouvrait bien wss://api.openai.com/v1/realtime?intent=transcription, mais envoyait encore le header OpenAI-Beta: realtime=v1. La documentation officielle consultée le 2026-11-28 (guides realtime, transcription, dépréciations, client events) retire ce header pour l'interface GA depuis le 12 mai 2026.

Le payload session.update était déjà conforme: session.type transcription, PCM mono 24 kHz, modèle gpt-live-transcribe, languages ["fr"], prompt lexical, turn_detection null. Aucun champ supplémentaire n'a été ajouté. session.created n'ouvre toujours pas la session.

Autre défaut établi: une erreur fournisseur objet était convertie par String(), donc "[object Object]", puis rejetée en PROVIDER_ERROR générique. Le timeout d'upgrade ne fermait pas la socket non encore retournée. Une fermeture après ouverture ne terminait pas explicitement la session.

MP07: l'onde est dessinée par AnalyserNode, uniquement en phase listening. Si l'ouverture échoue, l'onde ne démarre pas. L'animation n'est pas modifiée. L'hypothèse que MP07 est une conséquence de MP06 reste une hypothèse, pas une preuve LIVE.

## 4. Corrections

A. transcriptionSocketHeaders n'envoie que Authorization. buildTranscriptionSessionUpdate est l'objet unique envoyé après connexion. L'URL et le modèle sont inchangés. Aucun repli vers Whisper, un fichier ou un autre fournisseur.

B. describeDictationProviderFailure distingue, quand le fournisseur le rend observable: authentification (401), permission (403), modèle indisponible, paramètre de session invalide, transcription échouée. Le timeout d'upgrade est REALTIME_OPEN_TIMEOUT. Une rupture après ouverture est TRANSPORT_CLOSED. Le message client est le code. Le journal technique porte l'étape, la session Studio, le code fournisseur, le type, le paramètre, le statut HTTP et l'état terminal. Les chaînes sk- et Bearer sont retirées. Aucune clé, aucun audio, aucune transcription, aucun brouillon n'est journalisé.

Le timeout et l'erreur d'upgrade ferment la socket avant de la retourner. Une fermeture pendant l'écoute ou la finalisation appelle failDictationTransport une seule fois. Un état déjà terminal n'est pas rouvert et ne produit pas une seconde observation FinOps. Aucune reconnexion automatique. L'admission admitDictationProviderEmission et assertOpenAiKeyForLane est inchangée. Le fixture reste refusé hors VITEST ou DEV substitué. Il n'est pas activé en RECETTE.

C. Les deux compositeurs, projet (NoraConversation) et sas (PreparationConversation), passent par NoraSharedComposer puis ComposerDictationControl. Aucun câblage n'a été changé. Les phrases Pilote couvrent les nouveaux codes. La phrase historique de TRANSPORT_OPEN_FAILED est conservée. Annuler, Stop, brouillon, verrou d'envoi et onde existante sont conservés. Figma n'est pas modifié.

## 5. Candidat

HEAD = origin: d215a5272025b2d1c7aa8391dd14f6442ea512fe
Tree: c5bab24132c7c745d6ddff0ba76dc8d5424ea13c
URL: https://github.com/mcleland147/sfia-workspace/commit/d215a5272025b2d1c7aa8391dd14f6442ea512fe
Message: fix(next): restore realtime composer dictation
Fast-forward 9e2f9911..d215a527. 5 fichiers, +537 / −80. Aucune création de fichier.
CI distante: NON EXÉCUTÉE — DEV REVIEW SNAPSHOT.
origin/main inchangé: 997897fd7cf914771e7d08e8030dc7123fab7d25

## 6. Validations

DET, après correction du commentaire qui contenait encore le nom du header retiré:
- ml3-composer-dictation-session.test.ts: 32 PASS
- nora-shared-composer.test.ts: 9 PASS
- ml3-composer-dictation-reducer.test.ts: 3 PASS
- ml3-composer-dictation-client-seq-contract.test.ts: 2 PASS

Les nouveaux cas couvrent le payload GA, l'absence du header Beta dans la source réellement utilisée, l'erreur structurée SESSION_PARAMETER_INVALID, la fermeture au timeout, le classement HTTP 401, la rupture après ouverture et l'ignorance d'un delta tardif. Aucun appel réseau.

PG isolé, transport fixture, base sfia_next_e2e:
- ml3-composer-dictation-integrated.pg.test.ts: 8 PASS
Isolation, brouillon et observation FinOps existante rejoués. Aucune émission fournisseur.

BROWSER substitué, parcours produit existant, pas le harness isolé:
Serveur de production isolé, port 3101, build .next-e2e ABlgl2JVMprRMm8SYQdx-, base sfia_next_e2e déjà migrée jusqu'à 027, sans DROP.
Transport fixture, clé fournisseur neutralisée, STUDIO_FORCE_NORA_FIXTURE=1.
GET /login: 200.
ml3-dictation-nominal-path.spec.ts: 3 PASS (C01 écoute, transcription visible, arrêt, texte réintégré et envoi fixture; C02 dictées successives et annulation; C03 refus hors propriétaire, refus sans session, finalisation et événement tardif ignoré).
Audio: synthétique. L'oscillateur du test est arrêté tout de suite et le PCM est injecté par la route produit. La capture pendant l'écoute montre le compositeur en écoute, le compteur, le brouillon conservé, le texte provisoire, et une onde au plancher de silence. Elle ne qualifie pas une onde de parole.

Build isolé STUDIO_E2E=1: exit 0. .next DEV inchangé, 31044BhyAFqJ_OpeQJS_K, mtime 27 nov 22:38.
Lint ciblé eslint --quiet: aucune erreur. git diff --check: propre.
DEV :3100 PID 55011 et RECETTE :3200 PID 58965 inchangés. 3101 arrêté après l'essai.

Le fixture historique accepte session.update sans valider le contrat OpenAI. La conformité GA est prouvée par le builder exporté et par l'assertion de source du socket réellement ouvert, pas par le fixture.

## 7. Limites

La cause historique reste NON OBSERVÉE. Le retrait du header Beta est un écart de contrat corrigé, pas la démonstration que ce header causait le PROVIDER_ERROR de RECETTE.
MP06 et MP07 restent ouverts jusqu'à une preuve LIVE courte, ou un arbitrage explicite de Morris.
Aucune affirmation de dictée fonctionnelle en LIVE.
DET, BROWSER substitué et LIVE sont trois preuves distinctes.
L'onde n'a pas été requalifiée sur un signal de parole. Le plancher 0.12 est inchangé.
Le tarif public consulté le 2026-11-28 sur https://developers.openai.com/api/docs/pricing affiche gpt-live-transcribe à 0,017 USD par minute. Ce n'est ni une facture ni un plafond garanti. Trente secondes d'audio à ce tarif représentent environ 0,0085 USD.

## 8. Protocole LIVE prêt, non exécuté

Lane DEV isolée. Port 3101. Base sfia_next_e2e. Clé fournisseur DEV admise. Transport live. Fixture réellement OFF.
Une session, une ouverture, aucun retry. 60 secondes pour l'essai complet. 30 secondes d'audio au plus. Aucun autre appel fournisseur. Aucune émission Nora.
Corpus synthétique, non confidentiel: « Nous allons vérifier la configuration de Nora et la connexion PostgreSQL de SFIA Studio, avant de poursuivre le projet. »
La limite doit couper avant l'émission. Les plafonds globaux de Studio ne sont pas modifiés.
Preuves à recueillir: SHA et BUILD, admission, socket réellement ouvert, session.updated, paramètres résolus, deltas, commit, transcription finale, durée, usage audio, modèle appliqué ou UNVERIFIED, fermeture, restitution du brouillon.
STOP immédiat sur HTTP 401 ou 403, modèle non admis, erreur de protocole, timeout, dépassement, besoin de modifier un secret, ou émission supplémentaire.
GO LIVE: en attente d'une autorisation distincte. Cet essai n'a pas été lancé.

## 9. Content coverage

Fichiers modifiés, diff intégral dans la section 12. Aucune création.

- construction/convergence-openai-studio/as-built-macro-lot-3-audio-20261127.md — note du 28 nov: header retiré, erreurs classées, timeout fermé, LIVE toujours non exécuté.
- construction/delivery-history.md — entrée DELIV-2026-11-28-ML5-DICTATION-GA-DEV.
- web/src/domains/conversation/composer-dictation-session.ts — transport GA, erreurs, cycle de vie.
- web/src/components/figma/ComposerDictationControl.tsx — phrases Pilote des nouveaux codes. Disposition inchangée.
- web/tests/unit/ml3-composer-dictation-session.test.ts — preuves de contrat et de cycle de vie.

Non modifiés, et relus comme tels: admission, types, reducer, fixture, routes dictée, onde, RECETTE, workflows, suivi des sept lots.

## 10. Fake/Real Qualification

DET: sockets factices et lecture de source. Aucun fournisseur.
BROWSER substitué: parcours produit /projects/{id}?surface=travail, transport fixture, audio synthétique, Nora fixture. Pas une preuve OpenAI.
LIVE: NOT RUN.
Le fixture ne vaut pas une conformité fournisseur.

## 11. Verdict

READY WITH RESERVES — PRÊT POUR REVUE ET GO LIVE

Ce verdict qualifie les corrections et les preuves non émissives. Il n'est pas la sortie technique définitive du lot 6. La sortie définitive demande la preuve LIVE courte, sauf arbitrage explicite de Morris.

MP06 OPEN. MP07 OPEN.
FIN-REC-01, FIN-REC-02, DOC-REC-01..06, PROJ-REC-01/02/03, COG-REC-01, ACT-01..05 restent ouverts ou différés comme à la fin du lot 5.
R5 IN PROGRESS. ML5 OPEN. LIVRAISON 1 NOT ACCEPTED. 17 MP OPEN. R6 NOT STARTED.
NO RELEASE. STABLE NOT AVAILABLE. NOT ADOPTED.
REMOTE CI NOT RUN — DEV REVIEW SNAPSHOT.

Instruction: avant de répondre à Morris, lire le candidat d215a5272025b2d1c7aa8391dd14f6442ea512fe et ce handoff canonique distant. Vérifier causes, corrections, diff, preuves, réserves et content coverage. Si un fichier modifié manque: REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING. Actualiser ensuite le suivi des sept lots. Ne pas lancer le LIVE sans GO distinct.

## 12. Diff intégral du commit d215a527

diff --git a/projects/sfia-studio-next/construction/convergence-openai-studio/as-built-macro-lot-3-audio-20261127.md b/projects/sfia-studio-next/construction/convergence-openai-studio/as-built-macro-lot-3-audio-20261127.md
index 3971e72c..3bf38973 100644
--- a/projects/sfia-studio-next/construction/convergence-openai-studio/as-built-macro-lot-3-audio-20261127.md
+++ b/projects/sfia-studio-next/construction/convergence-openai-studio/as-built-macro-lot-3-audio-20261127.md
@@ -11,6 +11,14 @@
 | UI | mic uniquement si `dictationEnabled === true` (capability produit) |
 | LIVE fournisseur | **non déclenché** |

+## Complément 2026-11-28 — contrat GA
+
+Le socket d'ouverture n'envoie plus le header `OpenAI-Beta`. L'URL reste `wss://api.openai.com/v1/realtime?intent=transcription`. `session.update` reste une session `transcription`, PCM 24 kHz, `gpt-live-transcribe`, `languages: ["fr"]`, `turn_detection: null`. L'ouverture n'est acquittée que par `session.updated`.
+
+Une erreur fournisseur objet expose un code distinct (authentification, permission, modèle, paramètre, transcription, timeout, rupture). Le message renvoyé au Pilote reste une phrase courte. Le journal technique porte l'étape, la session Studio, le code fournisseur, le paramètre et le statut HTTP, sans clé, audio ni transcription.
+
+Un timeout d'upgrade ferme la socket avant de la retourner. Une fermeture après ouverture termine la session et n'est pas rouverte. L'onde reste celle de l'analyseur, démarrée seulement en écoute. La cause historique du premier `PROVIDER_ERROR` en recette n'est pas rejouée : aucun appel fournisseur dans ce complément.
+
 ## Flux

 Pilote → capability → micro → `POST …/sessions` (admission) → `session.updated` → PCM `seq=0,1,…` → auto-commit → SSE deltas/items → Arrêter → drain → finalize (attend **commitsAwaitingAck** + items + provisionals) → brouillon → Envoyer USER.
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index ae7e3680..69e70fdd 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -1,3 +1,14 @@
+## delivery_id: DELIV-2026-11-28-ML5-DICTATION-GA-DEV
+
+- **date_local**: 2026-11-28 (Europe/Paris)
+- **lane**: DEV only — lot 6, correction du transport de dictée
+- **branch**: `sfia/next-ml5-integrated-delivery-20261123`
+- **HEAD_base**: `9e2f9911e0ba18f77ddbe3b6431b4e4ebe6eaf1b`
+- **commit**: `fix(next): restore realtime composer dictation`
+- **schema_revision**: unchanged
+- **scope**: header Beta retiré, erreurs fournisseur discriminantes, fermeture de socket au timeout et après rupture. LIVE non exécuté.
+- **classe**: NO RELEASE · compatible corrective · LIVE NOT RUN · CI NOT RUN
+
 ## delivery_id: DELIV-2026-11-28-ML5-FINOPS-ATTRIBUTION-DEV

 - **date_local**: 2026-11-28 (Europe/Paris)
diff --git a/projects/sfia-studio-next/web/src/components/figma/ComposerDictationControl.tsx b/projects/sfia-studio-next/web/src/components/figma/ComposerDictationControl.tsx
index ef08f4a2..e0a5eb1f 100644
--- a/projects/sfia-studio-next/web/src/components/figma/ComposerDictationControl.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/ComposerDictationControl.tsx
@@ -117,10 +117,24 @@ export function dictationClientErrorMessage(input: {
   const code = (input.code || "").trim();
   const raw = (input.message || "").trim();
   const fromCode =
-    code === "SESSION_OPEN_TIMEOUT" || raw === "SESSION_OPEN_TIMEOUT"
+    code === "SESSION_OPEN_TIMEOUT" ||
+    raw === "SESSION_OPEN_TIMEOUT" ||
+    code === "REALTIME_OPEN_TIMEOUT"
       ? "Connexion dictée expirée — réessayez ou utilisez le clavier"
       : code === "TRANSPORT_OPEN_FAILED"
         ? "Transport dictée indisponible — réessayez ou utilisez le clavier"
+        : code === "TRANSPORT_CLOSED" || code === "TRANSPORT_ERROR"
+          ? "La connexion de dictée s'est interrompue — réessayez ou utilisez le clavier"
+        : code === "SESSION_PARAMETER_INVALID"
+          ? "La configuration de la dictée a été refusée — réessayez ou utilisez le clavier"
+          : code === "MODEL_UNAVAILABLE"
+            ? "Le modèle de dictée n'est pas disponible"
+            : code === "AUTHENTICATION" || code === "PROVIDER_PERMISSION"
+              ? "Dictée indisponible (accès fournisseur refusé)"
+              : code === "TRANSCRIPTION_FAILED"
+                ? "La transcription n'a pas abouti — le brouillon est conservé"
+                : code === "PROVIDER_ERROR"
+                  ? "La dictée n'a pas pu démarrer — réessayez ou utilisez le clavier"
         : code === "FLAG_OFF"
           ? "Dictée non activée sur cet environnement"
           : code === "CONCURRENCY_LIMIT"
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/composer-dictation-session.ts b/projects/sfia-studio-next/web/src/domains/conversation/composer-dictation-session.ts
index 4838f811..5cb34250 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/composer-dictation-session.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/composer-dictation-session.ts
@@ -22,13 +22,32 @@ import {
   mergeDictationIntoDraft,
 } from "./composer-dictation-reducer";

+export type DictationTransportLifecycle = {
+  code: string;
+  message: string;
+  httpStatus?: number | null;
+};
+
 export type RealtimeTransport = {
   send: (payload: Record<string, unknown>) => void;
   close: () => void;
   /** Register handler for provider JSON events. */
   onEvent: (handler: (event: Record<string, unknown>) => void) => void;
+  /** Socket close or error after the local handshake, including a close that raced the handler. */
+  onLifecycle?: (handler: (event: DictationTransportLifecycle) => void) => void;
 };

+export class DictationTransportError extends Error {
+  code: string;
+  httpStatus: number | null;
+  constructor(code: string, message: string, httpStatus: number | null = null) {
+    super(message);
+    this.name = "DictationTransportError";
+    this.code = code;
+    this.httpStatus = httpStatus;
+  }
+}
+
 export type RealtimeTransportFactory = (input: {
   sessionId: string;
   model: string;
@@ -348,7 +367,6 @@ export async function createDictationSession(input: {
       };
     }
     record.transport = transport;
-    transport.onEvent((event) => handleProviderEvent(record, event));
     let providerReady = false;
     const sessionReady = new Promise<void>((resolve, reject) => {
       const t = setTimeout(() => {
@@ -373,23 +391,18 @@ export async function createDictationSession(input: {
         reject(err);
       };
     });
-    transport.send({
-      type: "session.update",
-      session: {
-        type: "transcription",
-        audio: {
-          input: {
-            format: { type: "audio/pcm", rate: COMPOSER_DICTATION_PCM_RATE },
-            transcription: {
-              model: COMPOSER_DICTATION_MODEL,
-              languages: ["fr"],
-              prompt: DICTATION_VOCAB_HINT,
-            },
-            turn_detection: null,
-          },
-        },
-      },
+    transport.onLifecycle?.((info) => {
+      failDictationTransport(record, {
+        step: record.status === "pending" ? "open" : record.status,
+        code: info.code,
+        message: info.message,
+        httpStatus: info.httpStatus ?? null,
+      });
     });
+    transport.onEvent((event) => handleProviderEvent(record, event));
+    if (!isTerminalStatus(record.status)) {
+      transport.send(buildTranscriptionSessionUpdate());
+    }
     await sessionReady;
     // Terminal wins: cancel/fail during wait must not reopen as open.
     if (isTerminalStatus(record.status)) {
@@ -407,18 +420,34 @@ export async function createDictationSession(input: {
     emit(record, { type: "session.open", sessionId });
     return { ok: true, session: record };
   } catch (e) {
-    const rawMessage =
-      e instanceof Error ? e.message.slice(0, 240) : "TRANSPORT_OPEN_FAILED";
-    const timedOut = rawMessage === "SESSION_OPEN_TIMEOUT";
-    const providerErr = rawMessage === "PROVIDER_ERROR" || rawMessage.startsWith("PROVIDER_ERROR");
-    const code = timedOut
-      ? "SESSION_OPEN_TIMEOUT"
-      : providerErr
-        ? "PROVIDER_ERROR"
-        : "TRANSPORT_OPEN_FAILED";
-    if (!isTerminalStatus(record.status)) {
+    const fromTransport = e instanceof DictationTransportError ? e : null;
+    const rawMessage = (
+      fromTransport?.message ??
+      (e instanceof Error ? e.message : "TRANSPORT_OPEN_FAILED")
+    ).slice(0, 240);
+    const timedOut =
+      rawMessage === "SESSION_OPEN_TIMEOUT" || fromTransport?.code === "SESSION_OPEN_TIMEOUT";
+    const alreadyTerminal = isTerminalStatus(record.status);
+    const code =
+      alreadyTerminal && record.errorCode
+        ? record.errorCode
+        : fromTransport?.code
+          ? fromTransport.code
+          : timedOut
+            ? "SESSION_OPEN_TIMEOUT"
+            : rawMessage === "PROVIDER_ERROR" || rawMessage.startsWith("PROVIDER_ERROR")
+              ? "PROVIDER_ERROR"
+              : "TRANSPORT_OPEN_FAILED";
+    if (!alreadyTerminal) {
       record.status = "failed";
       record.errorCode = code;
+      emit(record, {
+        type: "session.error",
+        sessionId,
+        code,
+        message: code,
+      });
+      void recordDictationFinops(record, "failed");
     }
     try {
       record.transport?.close();
@@ -428,13 +457,6 @@ export async function createDictationSession(input: {
     record.transport = null;
     record.onProviderSessionReady = null;
     record.onProviderSessionReadyReject = null;
-    emit(record, {
-      type: "session.error",
-      sessionId,
-      code,
-      message: rawMessage,
-    });
-    void recordDictationFinops(record, "failed");
     return { ok: false, code, message: rawMessage };
   }
 }
@@ -541,32 +563,11 @@ function handleProviderEvent(
     return;
   }
   if (type === "error" || type === "conversation.item.input_audio_transcription.failed") {
-    // Never reopen / overwrite a terminal cancel/complete/expire with failed.
-    if (isTerminalStatus(session.status)) {
-      return;
-    }
-    const message = String(
-      event.error ?? event.message ?? "transcription failed",
-    ).slice(0, 240);
-    const stillOpening = session.status === "pending";
-    session.status = "failed";
-    session.errorCode = "PROVIDER_ERROR";
-    emit(session, {
-      type: "session.error",
-      sessionId: session.sessionId,
-      code: "PROVIDER_ERROR",
-      message,
+    const described = describeDictationProviderFailure(event);
+    failDictationTransport(session, {
+      step: session.status === "pending" ? "session.update" : "transcription",
+      ...described,
     });
-    if (stillOpening && session.onProviderSessionReadyReject) {
-      session.onProviderSessionReadyReject(new Error("PROVIDER_ERROR"));
-    }
-    try {
-      session.transport?.close();
-    } catch {
-      /* */
-    }
-    session.transport = null;
-    void recordDictationFinops(session, "failed");
   }
 }

@@ -927,32 +928,222 @@ async function recordDictationFinops(
   }
 }

-async function openOpenAiTranscriptionTransport(input: {
-  sessionId: string;
-  model: string;
-  apiKey: string;
-}): Promise<RealtimeTransport> {
-  const { default: WebSocket } = await import("ws");
-  const url = "wss://api.openai.com/v1/realtime?intent=transcription";
-  const ws = new WebSocket(url, {
-    headers: {
-      Authorization: `Bearer ${input.apiKey}`,
-      "OpenAI-Beta": "realtime=v1",
+/** GA transcription session.update. The live opener sends this object unchanged. */
+export function buildTranscriptionSessionUpdate(): Record<string, unknown> {
+  return {
+    type: "session.update",
+    session: {
+      type: "transcription",
+      audio: {
+        input: {
+          format: { type: "audio/pcm", rate: COMPOSER_DICTATION_PCM_RATE },
+          transcription: {
+            model: COMPOSER_DICTATION_MODEL,
+            languages: ["fr"],
+            prompt: DICTATION_VOCAB_HINT,
+          },
+          turn_detection: null,
+        },
+      },
     },
+  };
+}
+
+/** GA WebSocket headers. Authorization only — no retired realtime beta header. */
+export function transcriptionSocketHeaders(apiKey: string): Record<string, string> {
+  return { Authorization: `Bearer ${apiKey}` };
+}
+
+function traceField(value: unknown): string | null {
+  if (typeof value !== "string") return null;
+  const trimmed = value.trim();
+  return trimmed ? trimmed.slice(0, 80) : null;
+}
+
+function sanitizeTrace(value: string): string {
+  return value
+    .replace(/sk-[A-Za-z0-9_-]{6,}/g, "[redacted]")
+    .replace(/Bearer\s+\S+/gi, "Bearer [redacted]")
+    .slice(0, 160);
+}
+
+export function describeDictationProviderFailure(event: Record<string, unknown>): {
+  code: string;
+  message: string;
+  providerCode: string | null;
+  errorType: string | null;
+  parameter: string | null;
+  httpStatus: number | null;
+} {
+  const err = event.error;
+  const obj = err && typeof err === "object" ? (err as Record<string, unknown>) : null;
+  const providerCode = traceField(obj?.code ?? event.code);
+  const errorType = traceField(obj?.type);
+  const parameter = traceField(obj?.param ?? obj?.parameter);
+  const rawMessage =
+    traceField(obj?.message) ??
+    (typeof err === "string" ? traceField(err) : null) ??
+    traceField(event.message) ??
+    "";
+  const httpStatus = typeof obj?.status === "number" ? obj.status : null;
+  const blob = `${providerCode ?? ""} ${errorType ?? ""} ${parameter ?? ""} ${rawMessage}`.toLowerCase();
+  let code = "PROVIDER_ERROR";
+  if (event.type === "conversation.item.input_audio_transcription.failed") {
+    code = "TRANSCRIPTION_FAILED";
+  } else if (
+    httpStatus === 401 ||
+    blob.includes("invalid_api_key") ||
+    blob.includes("authentication")
+  ) {
+    code = "AUTHENTICATION";
+  } else if (httpStatus === 403 || blob.includes("permission") || blob.includes("insufficient_quota")) {
+    code = "PROVIDER_PERMISSION";
+  } else if (
+    providerCode === "model_not_found" ||
+    (blob.includes("model") &&
+      (blob.includes("not found") || blob.includes("unavailable") || blob.includes("does not exist")))
+  ) {
+    code = "MODEL_UNAVAILABLE";
+  } else if (
+    parameter ||
+    blob.includes("invalid_request") ||
+    blob.includes("invalid_value") ||
+    blob.includes("unknown_parameter")
+  ) {
+    code = "SESSION_PARAMETER_INVALID";
+  }
+  return {
+    code,
+    message: sanitizeTrace(rawMessage) || code,
+    providerCode,
+    errorType,
+    parameter,
+    httpStatus,
+  };
+}
+
+function classifySocketError(err: unknown): DictationTransportError {
+  const raw = err instanceof Error ? err.message : "";
+  const http = /(?:Unexpected server response:|status code)\s*(\d{3})/i.exec(raw);
+  const status = http ? Number(http[1]) : null;
+  if (status === 401) return new DictationTransportError("AUTHENTICATION", "HTTP 401", 401);
+  if (status === 403) return new DictationTransportError("PROVIDER_PERMISSION", "HTTP 403", 403);
+  if (status != null && status >= 400) {
+    return new DictationTransportError("TRANSPORT_OPEN_FAILED", `HTTP ${status}`, status);
+  }
+  return new DictationTransportError("TRANSPORT_OPEN_FAILED", "REALTIME_SOCKET_ERROR");
+}
+
+function traceDictationFailure(
+  session: DictationSessionRecord,
+  detail: {
+    step: string;
+    code: string;
+    providerCode?: string | null;
+    errorType?: string | null;
+    parameter?: string | null;
+    httpStatus?: number | null;
+  },
+): void {
+  console.error(
+    "[composer-dictation]",
+    JSON.stringify({
+      step: detail.step,
+      sessionId: session.sessionId,
+      code: detail.code,
+      providerCode: detail.providerCode ?? null,
+      errorType: detail.errorType ?? null,
+      parameter: detail.parameter ?? null,
+      httpStatus: detail.httpStatus ?? null,
+      status: session.status,
+    }),
+  );
+}
+
+function failDictationTransport(
+  session: DictationSessionRecord,
+  detail: {
+    step: string;
+    code: string;
+    message: string;
+    providerCode?: string | null;
+    errorType?: string | null;
+    parameter?: string | null;
+    httpStatus?: number | null;
+  },
+): void {
+  if (isTerminalStatus(session.status)) return;
+  const stillOpening = session.status === "pending";
+  session.status = "failed";
+  session.errorCode = detail.code;
+  emit(session, {
+    type: "session.error",
+    sessionId: session.sessionId,
+    code: detail.code,
+    message: detail.code,
   });
+  traceDictationFailure(session, detail);
+  if (stillOpening && session.onProviderSessionReadyReject) {
+    session.onProviderSessionReadyReject(
+      new DictationTransportError(detail.code, detail.code, detail.httpStatus ?? null),
+    );
+  }
+  try {
+    session.transport?.close();
+  } catch {
+    /* */
+  }
+  session.transport = null;
+  void recordDictationFinops(session, "failed");
+}
+
+type TranscriptionSocket = {
+  readyState: number;
+  send: (data: string) => void;
+  close: () => void;
+  once: (event: string, cb: (...args: unknown[]) => void) => void;
+  on: (event: string, cb: (...args: unknown[]) => void) => void;
+};
+
+const SOCKET_OPEN_STATE = 1;
+
+/** Live socket handshake. A timeout or upgrade error closes the socket before it is returned. */
+export async function connectTranscriptionSocket(
+  ws: TranscriptionSocket,
+  openTimeoutMs = 15_000,
+): Promise<RealtimeTransport> {
   await new Promise<void>((resolve, reject) => {
-    const t = setTimeout(() => reject(new Error("REALTIME_OPEN_TIMEOUT")), 15_000);
+    const timer = setTimeout(() => {
+      try {
+        ws.close();
+      } catch {
+        /* */
+      }
+      reject(new DictationTransportError("REALTIME_OPEN_TIMEOUT", "REALTIME_OPEN_TIMEOUT"));
+    }, openTimeoutMs);
     ws.once("open", () => {
-      clearTimeout(t);
+      clearTimeout(timer);
       resolve();
     });
-    ws.once("error", (err) => {
-      clearTimeout(t);
-      reject(err);
+    ws.once("error", (err: unknown) => {
+      clearTimeout(timer);
+      try {
+        ws.close();
+      } catch {
+        /* */
+      }
+      reject(classifySocketError(err));
     });
   });
+
   let handler: ((event: Record<string, unknown>) => void) | null = null;
-  ws.on("message", (data) => {
+  let lifecycle: ((event: DictationTransportLifecycle) => void) | null = null;
+  let pendingLifecycle: DictationTransportLifecycle | null = null;
+  const emitLife = (event: DictationTransportLifecycle) => {
+    if (lifecycle) lifecycle(event);
+    else pendingLifecycle = event;
+  };
+  ws.on("message", (data: unknown) => {
     try {
       const parsed = JSON.parse(String(data)) as Record<string, unknown>;
       handler?.(parsed);
@@ -960,11 +1151,20 @@ async function openOpenAiTranscriptionTransport(input: {
       /* ignore malformed */
     }
   });
+  ws.on("close", () => {
+    emitLife({ code: "TRANSPORT_CLOSED", message: "socket closed" });
+  });
+  ws.on("error", (err: unknown) => {
+    const classified = classifySocketError(err);
+    emitLife({
+      code: classified.code,
+      message: classified.message,
+      httpStatus: classified.httpStatus,
+    });
+  });
   return {
     send: (payload) => {
-      if (ws.readyState === WebSocket.OPEN) {
-        ws.send(JSON.stringify(payload));
-      }
+      if (ws.readyState === SOCKET_OPEN_STATE) ws.send(JSON.stringify(payload));
     },
     close: () => {
       try {
@@ -976,5 +1176,26 @@ async function openOpenAiTranscriptionTransport(input: {
     onEvent: (h) => {
       handler = h;
     },
+    onLifecycle: (h) => {
+      lifecycle = h;
+      if (pendingLifecycle) {
+        const pending = pendingLifecycle;
+        pendingLifecycle = null;
+        h(pending);
+      }
+    },
   };
 }
+
+async function openOpenAiTranscriptionTransport(input: {
+  sessionId: string;
+  model: string;
+  apiKey: string;
+}): Promise<RealtimeTransport> {
+  const { default: WebSocket } = await import("ws");
+  const url = "wss://api.openai.com/v1/realtime?intent=transcription";
+  const ws = new WebSocket(url, {
+    headers: transcriptionSocketHeaders(input.apiKey),
+  });
+  return connectTranscriptionSocket(ws);
+}
diff --git a/projects/sfia-studio-next/web/tests/unit/ml3-composer-dictation-session.test.ts b/projects/sfia-studio-next/web/tests/unit/ml3-composer-dictation-session.test.ts
index 2ab9714c..4a65bf2a 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml3-composer-dictation-session.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml3-composer-dictation-session.test.ts
@@ -1,10 +1,16 @@
+import { readFileSync } from "node:fs";
+import { join } from "node:path";
 import { afterEach, beforeEach, describe, expect, it } from "vitest";
 import {
   _resetDictationSessionsForTests,
   appendDictationAudio,
+  buildTranscriptionSessionUpdate,
   cancelDictationSession,
+  connectTranscriptionSocket,
   createDictationSession,
+  describeDictationProviderFailure,
   finalizeDictationSession,
+  transcriptionSocketHeaders,
   type RealtimeTransport,
 } from "@/domains/conversation/composer-dictation-session";
 import { admitDictationProviderEmission } from "@/domains/conversation/composer-dictation-admission";
@@ -998,3 +1004,200 @@ describe("ml3 composer dictation session (substituted transport)", () => {
     expect(created.session.status).toBe("open");
   });
 });
+
+describe("GA transcription transport", () => {
+  it("builds the transcription session.update used by the live opener", () => {
+    const update = buildTranscriptionSessionUpdate() as {
+      type: string;
+      session: {
+        type: string;
+        audio: {
+          input: {
+            format: { type: string; rate: number };
+            transcription: { model: string; languages: string[]; language?: string };
+            turn_detection: null;
+          };
+        };
+      };
+    };
+    expect(update.type).toBe("session.update");
+    expect(update.session.type).toBe("transcription");
+    expect(update.session.audio.input.format).toEqual({ type: "audio/pcm", rate: 24000 });
+    expect(update.session.audio.input.transcription.model).toBe("gpt-live-transcribe");
+    expect(update.session.audio.input.transcription.languages).toEqual(["fr"]);
+    expect(update.session.audio.input.transcription.language).toBeUndefined();
+    expect(update.session.audio.input.turn_detection).toBeNull();
+    const src = readFileSync(
+      join(process.cwd(), "src/domains/conversation/composer-dictation-session.ts"),
+      "utf8",
+    );
+    expect(src).not.toContain("OpenAI-Beta");
+    expect(src).toContain("intent=transcription");
+    expect(src).toContain("transcriptionSocketHeaders");
+  });
+
+  it("sends only the GA authorization header", () => {
+    const headers = transcriptionSocketHeaders("sk-test-not-a-secret");
+    expect(Object.keys(headers)).toEqual(["Authorization"]);
+    expect(headers.Authorization.startsWith("Bearer ")).toBe(true);
+    expect(headers["OpenAI-Beta" as keyof typeof headers]).toBeUndefined();
+  });
+
+  it("keeps a structured provider error distinct from an empty history", () => {
+    const described = describeDictationProviderFailure({
+      type: "error",
+      error: {
+        type: "invalid_request_error",
+        code: "invalid_value",
+        message: "Unknown parameter: session.audio.input.language",
+        param: "session.audio.input.transcription.languages",
+      },
+    });
+    expect(described.code).toBe("SESSION_PARAMETER_INVALID");
+    expect(described.parameter).toBe("session.audio.input.transcription.languages");
+    expect(described.message).not.toContain("[object Object]");
+    expect(described.message).toContain("Unknown parameter");
+  });
+
+  it("closes the socket when the upgrade times out", async () => {
+    let closed = false;
+    const listeners = new Map<string, Array<(...args: unknown[]) => void>>();
+    const ws = {
+      readyState: 0,
+      send: () => undefined,
+      close: () => {
+        closed = true;
+        ws.readyState = 3;
+      },
+      once: (event: string, cb: (...args: unknown[]) => void) => {
+        const list = listeners.get(event) ?? [];
+        list.push(cb);
+        listeners.set(event, list);
+      },
+      on: (event: string, cb: (...args: unknown[]) => void) => {
+        const list = listeners.get(event) ?? [];
+        list.push(cb);
+        listeners.set(event, list);
+      },
+    };
+    await expect(connectTranscriptionSocket(ws, 20)).rejects.toMatchObject({
+      code: "REALTIME_OPEN_TIMEOUT",
+    });
+    expect(closed).toBe(true);
+  });
+
+  it("classifies an HTTP 401 upgrade without keeping the socket", async () => {
+    const listeners = new Map<string, Array<(...args: unknown[]) => void>>();
+    let closed = false;
+    const ws = {
+      readyState: 0,
+      send: () => undefined,
+      close: () => {
+        closed = true;
+      },
+      once: (event: string, cb: (...args: unknown[]) => void) => {
+        const list = listeners.get(event) ?? [];
+        list.push(cb);
+        listeners.set(event, list);
+        if (event === "error") {
+          queueMicrotask(() => cb(new Error("Unexpected server response: 401")));
+        }
+      },
+      on: () => undefined,
+    };
+    await expect(connectTranscriptionSocket(ws, 1_000)).rejects.toMatchObject({
+      code: "AUTHENTICATION",
+      httpStatus: 401,
+    });
+    expect(closed).toBe(true);
+  });
+});
+
+describe("dictation transport lifecycle", () => {
+  beforeEach(() => {
+    _resetDictationSessionsForTests();
+    process.env.SFIA_COMPOSER_DICTATION = "1";
+    process.env.STUDIO_LANE = "DEV";
+    process.env.SFIA_DICTATION_TRANSPORT = "fixture";
+    process.env.VITEST = "true";
+  });
+
+  afterEach(() => {
+    _resetDictationSessionsForTests();
+  });
+
+  it("fails an open session when the socket closes and ignores a later transcript", async () => {
+    let lifecycle: ((event: { code: string; message: string }) => void) | null = null;
+    let handler: ((event: Record<string, unknown>) => void) | null = null;
+    const transport: RealtimeTransport = {
+      send: (payload) => {
+        if (payload.type === "session.update") {
+          queueMicrotask(() => handler?.({ type: "session.updated" }));
+        }
+      },
+      close: () => undefined,
+      onEvent: (next) => {
+        handler = next;
+      },
+      onLifecycle: (next) => {
+        lifecycle = next;
+      },
+    };
+    const created = await createDictationSession({
+      pilotId: "pilot-close",
+      projectId: "proj-close",
+      conversationKey: "proj-close",
+      baselineDraft: "brouillon",
+      transportFactory: async () => transport,
+    });
+    expect(created.ok).toBe(true);
+    if (!created.ok) return;
+    lifecycle?.({ code: "TRANSPORT_CLOSED", message: "socket closed" });
+    expect(created.session.status).toBe("failed");
+    expect(created.session.errorCode).toBe("TRANSPORT_CLOSED");
+    handler?.({
+      type: "conversation.item.input_audio_transcription.delta",
+      item_id: "late",
+      delta: "tardif",
+    });
+    expect(created.session.draft.provisionalByItem.late).toBeUndefined();
+    lifecycle?.({ code: "TRANSPORT_CLOSED", message: "again" });
+    expect(created.session.status).toBe("failed");
+  });
+
+  it("returns a structured provider code when session.update is rejected", async () => {
+    const transport: RealtimeTransport = {
+      send: (payload) => {
+        if (payload.type === "session.update") {
+          queueMicrotask(() =>
+            handler?.({
+              type: "error",
+              error: {
+                type: "invalid_request_error",
+                code: "invalid_value",
+                message: "Unsupported language",
+                param: "session.audio.input.transcription.languages",
+              },
+            }),
+          );
+        }
+      },
+      close: () => undefined,
+      onEvent: (next) => {
+        handler = next;
+      },
+    };
+    let handler: ((event: Record<string, unknown>) => void) | null = null;
+    const created = await createDictationSession({
+      pilotId: "pilot-param",
+      projectId: "proj-param",
+      conversationKey: "proj-param",
+      baselineDraft: "",
+      transportFactory: async () => transport,
+    });
+    expect(created.ok).toBe(false);
+    if (created.ok) return;
+    expect(created.code).toBe("SESSION_PARAMETER_INVALID");
+    expect(created.message).not.toContain("[object Object]");
+  });
+});
