# SFIA Studio — Assistant SFIA natif OpenAI — Implementation Preparation LOT-IP-0C — FinOps Technical Implementation Decisions Applied

## 1. Statut et anti-claims

**LOT-IP-0C FINOPS TECHNICAL IMPLEMENTATION DECISIONS APPLIED —**
**CAP-C SELECTED —**
**BND-A SELECTED —**
**IMMUTABLE LEDGER AND RECALCULABLE AGGREGATES SELECTED —**
**POSTGRESQL / NEON EVENTS AND AGGREGATES SELECTED —**
**DETERMINISTIC IDEMPOTENCE AND DATABASE DEDUPLICATION SELECTED —**
**ASYNCHRONOUS RECONCILIATION SELECTED —**
**CALENDAR MONTH UTC TECHNICAL POLICY SELECTED —**
**ENF-B SERVER-SIDE PRE-PROVIDER ENFORCEMENT BOUNDARY SELECTED —**
**BILLED OR OFFICIAL PROVIDER-OBSERVED BLOCKING POLICY SELECTED —**
**ESTIMATION NEVER BLOCKS —**
**POSTGRES TRANSACTION AND PROJECT/PERIOD ROW LOCK SELECTED —**
**DURABLE IN-APP ALERT STATE AND STRUCTURED AUDIT SELECTED —**
**DURABLE MORRIS-ONLY PROJECT OVERRIDE SELECTED —**
**NUMERIC TTL DEFERRED —**
**SERVER-SIDE PROJECT-SCOPED DEFAULT-OFF FLAG SELECTED —**
**OFF / SHADOW / MONITOR / E1-ENFORCED ROLLOUT MODEL SELECTED —**
**STRUCTURED DOMAIN EVENTS AND APPEND-ONLY AUDIT SELECTED —**
**ADDITIVE NODE-PG-MIGRATE STRATEGY SELECTED —**
**FEATURE-FLAG ROLLBACK WITH DATA PRESERVATION SELECTED —**
**T0 TO T7 STRUCTURE ACCEPTED —**
**T0 TO T7 NOT AUTHORIZED —**
**NO TECHNICAL IMPLEMENTATION STARTED —**
**NO CODE, TEST, SQL, MIGRATION OR CONFIGURATION MODIFIED —**
**TB-04-04 NOT DONE —**
**LOT-D1 TO LOT-D5 NOT AUTHORIZED —**
**NO ITEM DONE —**
**DELIVERY NOT-CONSUMED**

### Anti-claims

| Anti-claim | Statut |
|---|---|
| Décision technique appliquée ≠ implémentation réalisée | vrai |
| Architecture sélectionnée ≠ fichiers autorisés en écriture | vrai |
| Lots structurés ≠ lots autorisés | vrai |
| Migration sélectionnée comme stratégie ≠ migration créée | vrai |
| Feature flag sélectionné comme architecture ≠ flag activé | vrai |
| Enforcement boundary sélectionnée ≠ contrôle actif | vrai |
| PostgreSQL / Neon A2 sélectionné ≠ compte ou runtime configuré | vrai |
| CAP-C / BND-A / ENF-B SELECTED ≠ code écrit | vrai |

| Champ | Valeur |
|---|---|
| **Document** | `projects/sfia-studio/125-assistant-sfia-native-openai-implementation-preparation-lot-ip-0c-finops-technical-implementation-decisions-applied.md` |
| **Rôle** | Record d’application documentaire des arbitrages techniques FinOps |
| **124** | Technical Implementation Decision Pack pré-arbitrage — **byte-identical** |
| **103** | backlog opérationnel mis à jour dans ce cycle |
| **Implémentation** | **aucune** |
| **Delivery** | `NOT-CONSUMED` |

---

## 2. Autorité Morris

Morris est l’unique autorité. Cursor applique documentairement les options acceptées. Aucune implémentation. Aucune configuration fournisseur. Aucun contrôle actif. Aucun lot T0–T7 autorisé.

---

## 3. Gate d’arbitrage exacte

```text
GO DECISIONS IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — ARBITRATE LOT-IP-0C FINOPS TECHNICAL IMPLEMENTATION
```

Horodatage gate : **2026-08-05 23:32 CEST (+0200) / 21:32 UTC**.

---

## 4. Phrase Morris d’acceptation exacte

```text
ok pour ces arbitrages
```

Horodatage acceptation : **2026-08-05 23:34 CEST (+0200) / 21:34 UTC**.

Interprétation : Morris valide l’ensemble des arbitrages techniques proposés par ChatGPT et autorise leur application **documentaire** uniquement.

---

## 5. Horodatages CEST et UTC

| Champ | Valeur |
|---|---|
| **Gate** | 2026-08-05 23:32 CEST (+0200) / 21:32 UTC |
| **Acceptation / application** | 2026-08-05 23:34 CEST (+0200) / 21:34 UTC |
| **Rédaction Cursor** | 2026-08-05 23:40 CEST (+0200) / 21:40 UTC |
| **Précision** | secondes exactes non inventées |

---

## 6. Cycle / profil / typologie / blocs

| Champ | Valeur |
|---|---|
| **Type** | 6 — Architecture technique |
| **Mode** | Implementation Preparation — LOT-IP-0C FinOps Technical Implementation Decisions Applied |
| **Profil** | **Critical** |
| **Typologie** | EVOL / DOC |
| **CKC** | recherché · aucune autorité d’exécution technique |
| **Blocs activés** | FinOps · architecture · data · PG/Neon · concurrence · transactions · réconciliation · résilience · RUN · audit · RSSI · RGPD · feature flags · rollout · migration/rollback · tests/QA · GreenOps · garde-fous |
| **Blocs désactivés** | code · tests exécutables · packages · SQL · DDL · migrations · Docker · CI · config runtime · alertes/caps actifs · override réel · TTL numérique · flag/rollout actifs · LOT-D* · Delivery |

---

## 7. Sources et hiérarchie

1. Git `origin/main` = `8dc54db0069eed78a8d8930cc2b035450ab56ad1` ;
2. Gate d’arbitrage 23:32 CEST · phrase Morris 23:34 CEST ;
3. Handoff tip `a25ecbc4bd5260f1b3d4dd658705d0c7d7a4ceda` / blob `dc7a211345955f2ef1e5975fccd979319f16e271` ;
4. document **124** (options techniques · inventaire · gap · recommandation candidate) ;
5. documents **119–123** (FinOps) ;
6. documents **112–118** (A2) ;
7. backlog **103** ;
8. précédents Decisions Applied **107 / 108 / 111 / 121 / 123** ;
9. code app en lecture seule pour vérifier noms repris de 124.

---

## 8. Local Git Truth initiale

| Champ | Valeur |
|---|---|
| **Date** | 2026-08-05 23:39:36 CEST / 21:39:36 UTC |
| **Branche initiale** | `implementation-preparation/sfia-studio-assistant-sfia-native-openai-lot-ip-0c-finops-technical-implementation-decision-pack` |
| **Branche decisions** | `decisions/sfia-studio-assistant-sfia-native-openai-lot-ip-0c-finops-technical-implementation` |
| **HEAD / origin/main / merge-base** | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| **Ahead / behind** | 0 / 0 |
| **Upstream** | aucun |
| **125 / 126 avant** | absents |

---

## 9. Handoff entrant

Tip `a25ecbc4bd5260f1b3d4dd658705d0c7d7a4ceda` · blob `dc7a211345955f2ef1e5975fccd979319f16e271` · message LOT-IP-0C FinOps technical implementation decision pack.

---

## 10. Hashes entrants 103 à 124

| Doc | SHA-256 | Lignes |
|---|---|---|
| 103 | `9a815f6c5a7d7fe51a544869449895698a9b92081fc2af8ceda67a297c563d83` | 2193 |
| 104 | `48859ae1f54d4f5d64a39099e00fe9af3e89b6f1cf38a24bc12c58b5dbf11802` | 484 |
| 105 | `bfdb737713b9d93204aa870c2842ae8246eec6d2f70535b7efae136ecf0694a9` | 565 |
| 106 | `7f009bfef42dd020fe22bdd7ba718ab647f54695adf2eeea9bcdd22cbf1ceb17` | 286 |
| 107 | `b2c59ea42306231b6c8649a3b5c2897b9eb38ebef043d2af72b208f73bf13a45` | 451 |
| 108 | `101932c574c4685017ab1c631858c78e038cb7c9a447ffe1bdd5c619393662ec` | 415 |
| 109 | `037eb7220ded4ba8f19da4c0a256b39c6a45f8d4588953361c4b99260a32296b` | 683 |
| 110 | `475d79dec7474e80f6b058a68630572c2b281ef1c6a79e90d39d2c9c3bb29af5` | 295 |
| 111 | `da9357a9ec051fe80d596711fdac9c7d38b084ab922a54af6789a9d112c5f8cb` | 474 |
| 112 | `510e8d8b49d2acf3fda5e21b4404a5140c4cce1f381220eedfd87466cea24642` | 939 |
| 113 | `8531a6278e0a4beae63eeba1f1788bfb1fdadc9c38f5a80d8f10f2fba97a96ba` | 460 |
| 114 | `c41d77e30e98f8b71bcb84a360d1712550ea9ae8255c000950b30f86d99c51b4` | 530 |
| 115 | `2e814ccfd6c735efaaae6193b08b555bd9a9d478927b06b78c5d78c67c61944b` | 533 |
| 116 | `b756dc931ba02f1573d7efd4729d4aac74d4c641b06163b608b5530c9c046e08` | 442 |
| 117 | `3bf6adc9d7e53ffe3f6a3a82fb41f6763f300488df8dc33e8b49fcb90bbe3d68` | 260 |
| 118 | `0ab4b68ccf2ca5b81e943df4b8a160ca1c008facedfc0e06c92d58a5ff506966` | 422 |
| 119 | `91737dc4c47f69068fc899d4f430088284a5a7b26413da3c9772952809bb26be` | 549 |
| 120 | `8171bdf13349ead303a67f57ed07761f572eb9dbfdf369139a26d5544920ab9c` | 284 |
| 121 | `928e6a591feae23155f0d74b41f6f43c35cc8a79939122b555683506ad1e4f87` | 515 |
| 122 | `6606e527c3ba25580cb5cad7eb5f7db581e7f4ff86e302e49b8e47b8ace02212` | 739 |
| 123 | `832438b4c315e4ab276ab57de30f0209f33567a4b079e480880c185e71057a0a` | 620 |
| 124 | `19eacd7f3f46d2693e270b0e6a4a046b8386faab702e67b1712666b7634fc7be` | 573 |

---

## 11. Historique documentaire 119 à 125

| Document | Rôle |
|---|---|
| **119** | préparation de sélection |
| **120** | Selection Decision Pack |
| **121** | sélection appliquée |
| **122** | exécution IP / contrat FinOps |
| **123** | enforcement decisions applied |
| **124** | Technical Implementation Decision Pack (pré-arbitrage · byte-identical) |
| **125** | Technical Implementation Decisions Applied (ce document) |

---

## 12. État avant / après

| Domaine | Avant | Après |
|---|---|---|
| Options techniques 124 | NOT DECIDED | **SELECTED documentairement** (ci-dessous) · **NOT IMPLEMENTED** |
| Lots T0–T7 | structure candidate | structure **ACCEPTED** · **NOT AUTHORIZED** |
| TB-04-04 | ready for technical arbitration | technical decisions **applied** · lot execution authorization **pending** · **NOT DONE** |
| Code / SQL / migrations | absents FinOps | **inchangés** |
| LOT-D1 | NOT AUTHORIZED | **NOT AUTHORIZED** |
| Delivery | NOT-CONSUMED | **NOT-CONSUMED** |

---

## 13. Identifiants et contrôle de collision

Identifiants repris **exactement** depuis 124. Aucun identifiant concurrent créé.

| Identifiant | Collision check |
|---|---|
| D-ASST-IP0C-TECH-CAPTURE-01 | distinct de LOT-SELECTION / ENFORCEMENT / DEGRADATION / OVERRIDE / TTL |
| D-ASST-IP0C-TECH-BOUNDARY-01 | idem |
| D-ASST-IP0C-TECH-MODEL-01 | idem |
| D-ASST-IP0C-TECH-STORE-01 | idem |
| D-ASST-IP0C-TECH-IDEM-01 | idem · Deduplication rattachée |
| D-ASST-IP0C-TECH-RECON-01 | idem |
| D-ASST-IP0C-TECH-PERIOD-01 | idem |
| D-ASST-IP0C-TECH-ENFORCE-BOUND-01 | idem |
| D-ASST-IP0C-TECH-CONF-01 | idem |
| D-ASST-IP0C-TECH-CONC-01 | idem |
| D-ASST-IP0C-TECH-ALERT-01 | idem · Morris Review rattachée |
| D-ASST-IP0C-TECH-OVR-IMPL-01 | idem |
| D-ASST-IP0C-TECH-TTL-NUM-01 | idem · DEFERRED |
| D-ASST-IP0C-TECH-FLAG-01 | idem · Rollout rattaché |
| D-ASST-IP0C-TECH-OBS-01 | idem · Audit rattaché |
| D-ASST-IP0C-TECH-MIG-01 | idem · Rollback rattaché |

Sous-familles sans ID propre dans 124 (Deduplication, Morris Review, Rollout, Audit, Rollback) : **rattachées** à leur famille parente · **aucun** ID supplémentaire créé.

---

## 14. Capture CAP-C

| Champ | Valeur |
|---|---|
| **ID** | `D-ASST-IP0C-TECH-CAPTURE-01` |
| **Décision** | **CAP-C — DEDICATED POST-PROVIDER METERING BOUNDARY** |
| **Statut** | **DECIDED — SELECTED BY MORRIS — NOT IMPLEMENTED — NOT AUTHORIZED FOR IMPLEMENTATION** |

Signification :
- donnée provider capturée après invocation ;
- frontière FinOps dédiée reçoit l’usage validé ;
- provider adapter **n’est pas** le writer autoritatif ;
- coordinator **n’écrit pas** directement dans plusieurs stores ;
- aucune double capture autoritative ;
- `ProviderUsage` et `validatedUsage` = entrées candidates de la frontière dédiée.

Preuves repo : `OpenAIConversationProvider` · `mergeUsage` · `validatedUsage` · `ExecutionRun.usage` unavailable.

---

## 15. Boundary BND-A

| Champ | Valeur |
|---|---|
| **ID** | `D-ASST-IP0C-TECH-BOUNDARY-01` |
| **Décision** | **BND-A — DEDICATED FINOPS SERVICE AND REPOSITORY — SINGLE AUTHORITATIVE WRITER** |
| **Statut** | **DECIDED — SELECTED BY MORRIS — NOT IMPLEMENTED** |

Principes : writer unique · server-side · aucune autorité partagée implicite · aucune écriture FinOps depuis l’UI · toute ingestion passe par la frontière FinOps.

---

## 16. Data model

| Champ | Valeur |
|---|---|
| **ID** | `D-ASST-IP0C-TECH-MODEL-01` |
| **Décision** | **IMMUTABLE EVENT LEDGER — DERIVED RECALCULABLE AGGREGATES — CORRECTIONS AS NEW EVENTS** |
| **Statut** | **DECIDED — SELECTED BY MORRIS — NOT IMPLEMENTED** |

Principes : aucune correction destructive silencieuse · historique conservé · agrégats dérivés · recalcul possible · estimated / observed / billed séparés · alertes / overrides / audit séparés logiquement · modèle **documentaire** · **aucun schéma SQL créé**.

---

## 17. Store PostgreSQL / Neon

| Champ | Valeur |
|---|---|
| **ID** | `D-ASST-IP0C-TECH-STORE-01` |
| **Décision** | **POSTGRESQL / NEON A2 — EVENTS AND AGGREGATES** |
| **Statut** | **DECIDED — SELECTED BY MORRIS — NOT IMPLEMENTED — NOT CONFIGURED** |

Principes : A2 préservé · ledger durable · agrégats persistés et recalculables · restart-safe / multi-instance = objectifs d’implémentation futurs · OPS1 SQLite et OA memory **non retenus** comme store produit FinOps.

Aucun compte Neon · aucun runtime `pg` configuré.

---

## 18. Idempotence et déduplication

| Champ | Valeur |
|---|---|
| **ID** | `D-ASST-IP0C-TECH-IDEM-01` |
| **Décision** | **DETERMINISTIC EVENT ID — UNIQUE DEDUPLICATION KEY — DATABASE TRANSACTION** |
| **Clé logique** | provider + run + attempt |
| **Statut** | **DECIDED — SELECTED BY MORRIS — NOT IMPLEMENTED** |

Principes : retry sans double comptage · replay dédupliqué · contrainte unique future · correction = nouvel événement · aucune réécriture silencieuse · observabilité accept / deduplicated.

Sous-famille Deduplication **rattachée** à TECH-IDEM · pas d’ID concurrent.

---

## 19. Reconciliation

| Champ | Valeur |
|---|---|
| **ID** | `D-ASST-IP0C-TECH-RECON-01` |
| **Décision** | **ASYNCHRONOUS RECONCILIATION — ESTIMATED → OBSERVED → BILLED — HISTORY PRESERVED** |
| **Statut** | **DECIDED — SELECTED BY MORRIS — NOT IMPLEMENTED** |

Principes : hiérarchie SoT 1–6 préservée · remplacement logique sans suppression historique · recalcul agrégats · corrections tardives auditées · anti-spam A15-ONCE · événement de correction si coût augmente ou diminue · estimation ≠ facture.

---

## 20. Calendar month UTC

| Champ | Valeur |
|---|---|
| **ID** | `D-ASST-IP0C-TECH-PERIOD-01` |
| **Décision** | **CALENDAR MONTH UTC — INJECTABLE CLOCK — LOGICAL PERIOD RESET** |
| **Statut** | **DECIDED — SELECTED BY MORRIS — NOT IMPLEMENTED** |

Principes : periodStart inclusif · periodEnd exclusif · UTC autoritatif · `ClockPort` / `FixedClock` réutilisables · pas de suppression ledger au changement de mois · late events rattachés à période réelle · tests frontière / leap / DST · **ne pas** utiliser `nowIsoWithOffset` OPS1 comme autorité période.

---

## 21. Enforcement boundary ENF-B

| Champ | Valeur |
|---|---|
| **ID** | `D-ASST-IP0C-TECH-ENFORCE-BOUND-01` |
| **Décision** | **ENF-B — SERVER-SIDE CHECK AFTER RUN REQUEST ACCEPTANCE — BEFORE PROVIDER INVOCATION** |
| **Statut** | **DECIDED — SELECTED BY MORRIS — NOT IMPLEMENTED** |

Principes : demande de run reçue et traçable · contrôle avant nouvelle invocation provider · runs actifs peuvent terminer · seuls nouveaux runs suspendus · UI-only non autoritatif · aucune limite fournisseur · aucun hard stop fail-closed.

---

## 22. Reliability / confidence

| Champ | Valeur |
|---|---|
| **ID** | `D-ASST-IP0C-TECH-CONF-01` |
| **Décision** | **BILLED OR OFFICIAL PROVIDER-OBSERVED COST MAY BLOCK — ESTIMATED COST NEVER BLOCKS** |
| **Statut** | **DECIDED — SELECTED BY MORRIS — NOT IMPLEMENTED** |

---

## 23. Sources bloquantes et non bloquantes

| Source | Peut suspendre nouveaux runs (S30) |
|---|---|
| 1 — coût facturé / export fournisseur officiel | **oui** (billed) |
| 2 — usage fournisseur officiel associé au run | **oui** (official provider-observed) |
| 3 — usage API + calcul tarifaire local seul | **non** |
| 4 — comptage local applicatif | **non** |
| 5 — estimation paramétrique | **non** |
| 6 — unknown | **non** · unknown ≠ zéro silencieux |

Clarification : billed = facture/export officiel · official provider-observed = SoT niveau 2. Toutes les sources peuvent déclencher information ou revue humaine selon confiance. **Aucun seuil numérique de confiance supplémentaire sélectionné.**

---

## 24. Concurrency

| Champ | Valeur |
|---|---|
| **ID** | `D-ASST-IP0C-TECH-CONC-01` |
| **Décision** | **POSTGRES TRANSACTION — PROJECT/PERIOD ROW LOCK — ATOMIC RUN AUTHORIZATION** |
| **Statut** | **DECIDED — SELECTED BY MORRIS — NOT IMPLEMENTED** |

Principes : verrouillage état projet/période · lecture agrégat autoritatif · contrôle override et suspension · décision atomique · enregistrement audité · cohérence multi-instance · reprise après redémarrage · **aucun verrou mémoire comme autorité**.

---

## 25. Alerting et Morris review

| Champ | Valeur |
|---|---|
| **ID** | `D-ASST-IP0C-TECH-ALERT-01` |
| **Décision** | **DURABLE IN-APP STATE — STRUCTURED AUDIT JOURNAL — NO EXTERNAL NOTIFICATION PROVIDER** |
| **Statut** | **DECIDED — SELECTED BY MORRIS — NOT IMPLEMENTED — NO CHANNEL ACTIVATED** |

Principes : état durable projet/période/seuil · A15-ONCE par déduplication · revue Morris durable à 20 USD · aucune dépendance email premier périmètre · aucun fournisseur notification externe · surface in-app minimale future · accusé de lecture à préparer.

Sous-famille Morris Review **rattachée** à TECH-ALERT.

---

## 26. Override implementation

| Champ | Valeur |
|---|---|
| **ID** | `D-ASST-IP0C-TECH-OVR-IMPL-01` |
| **Décision** | **DURABLE PROJECT-SCOPED OVERRIDE — MORRIS ONLY — EXPLICIT EXPIRATION — AUDITED** |
| **Statut** | **DECIDED — SELECTED BY MORRIS — NOT IMPLEMENTED — NO REAL OVERRIDE** |

Champs futurs requis : `overrideId` · `projectId` · `author` · `reason` · `startsAt` · `expiresAt` · `revokedAt` · `status` · `createdAt` · audit reference.

Principes : aucun override permanent · aucune durée par défaut · aucun montant additionnel par défaut · expiration obligatoire · révocation · retour politique normale.

---

## 27. TTL numeric deferred

| Champ | Valeur |
|---|---|
| **ID** | `D-ASST-IP0C-TECH-TTL-NUM-01` |
| **Décision** | **NUMERIC TTL DEFERRED** |
| **Statut** | **DECIDED — DEFERRED — R-TECH-TTL-01 KEEP-OPEN** |

Principes : catégories préparées dans 124 · mécanismes de purge futurs · aucune valeur numérique · aucune suppression automatique · future décision RGPD / RUN dédiée.

---

## 28. Feature flag

| Champ | Valeur |
|---|---|
| **ID** | `D-ASST-IP0C-TECH-FLAG-01` |
| **Décision** | **SERVER-SIDE — PROJECT-SCOPED — DEFAULT-OFF** |
| **Statut** | **DECIDED — SELECTED BY MORRIS — NOT ACTIVATED** |

---

## 29. Rollout

Modèle SELECTED (rattaché à TECH-FLAG) :

**OFF → SHADOW → MONITOR → E1-ENFORCED**

| État | Signification |
|---|---|
| OFF | défaut · aucune capture utilisateur / aucune suspension |
| SHADOW | capture sans alerte utilisateur |
| MONITOR | seuils et alertes sans suspension |
| E1-ENFORCED | suspension nouveaux runs à 30 USD |

Kill switch vers MONITOR ou OFF · changement audité · **aucune activation dans ce cycle**.

---

## 30. Observability

| Champ | Valeur |
|---|---|
| **ID** | `D-ASST-IP0C-TECH-OBS-01` |
| **Décision** | **STRUCTURED DOMAIN EVENTS — APPEND-ONLY AUDIT — NO EXTERNAL OBSERVABILITY PROVIDER SELECTED** |
| **Statut** | **DECIDED — SELECTED BY MORRIS — NOT IMPLEMENTED** |

Événements futurs minimum : usage event accepted · usage event deduplicated · estimation produced · provider observation received · billed correction received · threshold crossed · notification emitted · review required · new run rejected · override created / expired / revoked · aggregate recalculated · reconciliation failed · unknown cost detected.

---

## 31. Audit

Sous-famille **rattachée** à TECH-OBS. Append-only · redaction secrets · aucune PII inutile · corrélation `runId` / `projectId` · aucun dashboard ou fournisseur externe.

---

## 32. Migration

| Champ | Valeur |
|---|---|
| **ID** | `D-ASST-IP0C-TECH-MIG-01` |
| **Décision** | **NODE-PG-MIGRATE — ADDITIVE MIGRATIONS — NO HISTORICAL BACKFILL** |
| **Statut** | **DECIDED — SELECTED BY MORRIS — NO MIGRATION CREATED** |

Principes : outil A2 préservé · migrations additives · compatibilité ascendante · aucun historique FinOps à reconstruire · flag OFF pendant migration initiale.

---

## 33. Rollback

Rattaché à TECH-MIG.

**FEATURE FLAG OFF — DATA PRESERVED — NO DESTRUCTIVE ROLLBACK**

Principes : rollback applicatif par désactivation · conservation des données déjà produites · aucune migration destructive dans le premier cycle.

---

## 34. Lots T0 à T7

Structure **ACCEPTED** :

| Lot | Contenu |
|---|---|
| T0 | contracts and pure domain rules |
| T1 | durable PostgreSQL metering ledger |
| T2 | aggregation and reconciliation |
| T3 | alert and Morris review state |
| T4 | S30 soft enforcement |
| T5 | override |
| T6 | observability and audit |
| T7 | feature flag, rollout and pilot evidence |

---

## 35. Chemin critique

**T0 → T1 → T2 → T3 → T4 → T7**

Parallélisation candidate : T5 après T1 et avant activation E1 · T6 à partir de T1, complété avant T7.

---

## 36. Lots non autorisés

**STRUCTURE ACCEPTED — NO LOT SELECTED FOR EXECUTION — T0 TO T7 NOT AUTHORIZED FOR IMPLEMENTATION**

Aucun lot commencé. Aucune modification du graphe 33/56 sur la base de lots non autorisés.

---

## 37. Plan de tests préservé

Plan T-TECH-* du document 124 **préservé** comme base future.

**TEST PLAN ACCEPTED AS IMPLEMENTATION INPUT — NO TEST IMPLEMENTED — NO TEST EXECUTED — NO ACCEPTANCE CLAIMED**

---

## 38. Aucun test exécuté

Aucun test unit/integration/acceptance créé ou exécuté dans ce cycle. Matrice 124 = entrée d’implémentation future uniquement.

---

## 39. Architecture actuelle et fichiers potentiels

Architecture runtime préservée telle qu’inventoriée en 124 :
- OA execution-run mémoire (`restartSafe:false`) ;
- platform AI OpenAI Responses ;
- OPS1 SQLite local ;
- `FinOpsBox` fixture ;
- A2 PG/Neon **SELECTED** documentaire · **ABSENT** runtime.

Fichiers potentiels futurs (non autorisés en écriture) : `lib/.../finops/**` · touch `coordinateExecutionRun` / adapter · migrations futures node-pg-migrate.

---

## 40. Aucune autorisation d’écriture produit

Ce cycle n’autorise **aucune** écriture sous `projects/sfia-studio/app/**` · packages · SQL · migrations · config. Fichiers identifiés ≠ fichiers autorisés.

---

## 41. Sécurité / RSSI

Server-side only pour metering/enforcement · redaction secrets · pas de PII dans métriques · IAM override = Morris (pas d’IAM produit actuel) · UI non autoritaire.

---

## 42. RGPD / minimisation

Data minimization **SELECTED** (123) · `actorId` pseudonymisé · TTL numériques **DEFERRED** · R-TECH-TTL-01 KEEP-OPEN.

---

## 43. Performance

Agrégats matérialisés recalculables vs scan ledger · cardinalité labels · volumétrie events · objectifs multi-instance sans always-on metering wasteful.

---

## 44. FinOps

Calibration 15/20/25/30 USD préservée · E1/S30-SOFT préservés · estimated ≠ observed ≠ billed · RECALIBRATION REQUIRED · aucune config fournisseur.

---

## 45. GreenOps

Éviter compute metering always-on · privilégier scale-to-zero Neon futur · shadow/monitor avant E1 pour limiter rework.

---

## 46. RUN readiness

Owner · runbooks · kill switch (MONITOR/OFF) requis avant activation E1 · aucun dashboard créé ici.

---

## 47. Résilience

Transactions PG · row lock · flag kill · corrections auditées · pas de fail-closed hard stop.

---

## 48. Multi-instance

État durable PG · row lock projet/période · **pas** de verrou mémoire comme autorité · OA memory actuel **insuffisant**.

---

## 49. Restart-safe

Ledger + agrégats PG · flag état · overrides durables · OA memory `restartSafe:false` **non** retenu pour FinOps produit.

---

## 50. Réversibilité

Flag OFF · données préservées · rollback non destructif · décisions documentaires séparées de l’activation runtime.

---

## 51. Risques

Faux blocage · double comptage · store A2 pas prêt · confiance mal calibrée · UI-only contourné · activation prématurée E1.

---

## 52. Dette

`ExecutionRun.usage` never updated · `FinOpsBox` trompeur · OPS1 tokens hors A2 · absence runtime `pg` malgré SELECTED documentaire.

---

## 53. Coûts inconnus

P1/observabilité/egress/taxes · R-TECH-FINOPS-HARD-01 KEEP-OPEN.

---

## 54. Réserves KEEP-OPEN

| Réserve | Statut |
|---|---|
| R-TECH-TTL-01 | **KEEP-OPEN** |
| R-TECH-FINOPS-HARD-01 | **KEEP-OPEN** |

Aucune réserve fermée.

---

## 55. Impacts TB-04-04

- decision preparation = completed
- lot selection = applied
- lot execution = completed
- enforcement arbitration = completed
- enforcement decisions = applied
- technical discovery = completed
- technical gap analysis = completed
- technical decision pack = completed
- technical arbitration = completed
- technical decisions = applied
- lot execution authorization = **pending**
- implementation = **not started**
- technical execution = **not started**
- DONE = **no**
- **READY-FOR-BOUNDED-IMPLEMENTATION-PREPARATION**

---

## 56. Impacts TB-02-05

Statut **préservé**. Dépendance future vers ledger et capture. Aucune implémentation metering. Aucune modification de statut DONE. Gate distincte requise.

---

## 57. Matrice décision → options

| ID | Option SELECTED |
|---|---|
| TECH-CAPTURE-01 | CAP-C |
| TECH-BOUNDARY-01 | BND-A |
| TECH-MODEL-01 | Immutable ledger + derived aggregates + corrections-as-events |
| TECH-STORE-01 | PostgreSQL / Neon events + aggregates |
| TECH-IDEM-01 | Deterministic eventId + unique dedup key + DB transaction |
| TECH-RECON-01 | Async estimated→observed→billed · history preserved |
| TECH-PERIOD-01 | Calendar month UTC · injectable clock · logical reset |
| TECH-ENFORCE-BOUND-01 | ENF-B |
| TECH-CONF-01 | Billed/official observed may block · estimated never blocks |
| TECH-CONC-01 | PG transaction · project/period row lock · atomic authz |
| TECH-ALERT-01 | Durable in-app + structured audit · no external notifier |
| TECH-OVR-IMPL-01 | Durable project-scoped Morris-only override · explicit expiration |
| TECH-TTL-NUM-01 | **DEFERRED** |
| TECH-FLAG-01 | Server-side project-scoped default-off · OFF/SHADOW/MONITOR/E1 |
| TECH-OBS-01 | Structured domain events · append-only audit · no external obs vendor |
| TECH-MIG-01 | Additive node-pg-migrate · no backfill · flag-off rollback · data preserved |

Toutes : **SELECTED documentairement — NOT IMPLEMENTED**.

---

## 58. Matrice décision → lots

| Lot | Décisions principales |
|---|---|
| T0 | PERIOD · CONF · MODEL (rules) |
| T1 | CAPTURE · BOUNDARY · STORE · IDEM · MIG |
| T2 | RECON · PERIOD aggregation |
| T3 | ALERT |
| T4 | ENFORCE-BOUND · CONF · CONC |
| T5 | OVR-IMPL |
| T6 | OBS |
| T7 | FLAG / rollout |

---

## 59. Matrice décision → fichiers futurs

Cibles **potentielles** uniquement (124) : `lib/.../finops/**` · `coordinateExecutionRun.ts` · `platformAiExecutionAdapter.ts` · `openaiProvider.ts` (lecture usage) · migrations futures · **aucune écriture autorisée ici**.

---

## 60. Matrice décision → tests futurs

T-TECH-01…23 du document 124 : plan accepté comme input · **non implémenté · non exécuté**.

---

## 61. Architecture A2 préservée

PostgreSQL · Neon · pg · node-pg-migrate · LD-A · STORE-01=A · DA-A · MIG-C · P1 · P2 **NOT SELECTED**.

---

## 62. Non-sélections

E0/E2/E3/E4 · provider hard limit · application hard stop · auto model switch · TTL numériques · config fournisseur · OPS1/OA-memory comme store FinOps · UI-only authority · memory lock authority · external alert/obs provider · estimation bloquante · unknown=zero · T0–T7 execution.

---

## 63. Préservations

Décisions FinOps 123 · calibration provisoire · RECALIBRATION REQUIRED · graphe 33/56 · priorités · dix ADR · 21 impacts · aucun item DONE · document 124 byte-identical · Delivery NOT-CONSUMED.

---

## 64. Actions futures autorisées

Arbitrer / différer lots T* via gate dédiée · préparer pack d’exécution T0 · appliquer documentairement · publier handoff.

---

## 65. Actions interdites

Implémenter T0–T7 · créer code/SQL/migration/package · activer flag/cap/alerte/override · configurer OpenAI/Neon · marquer TB-04-04 ou TB-02-05 comme terminés · autoriser LOT-D1 · consommer Delivery · modifier 104–124 · créer 126 · commit/push projet.

---

## 66. Conditions avant préparation T0

Validation ChatGPT 125 · pack d’exécution T0 borné · fichiers/tests/stop conditions définis · **pas** d’implémentation automatique.

---

## 67. Conditions avant implémentation

Décisions techniques applied (**fait** documentaire) · autorisation Morris d’un lot T* · store A2 disponible ou scoped · flag default-off · tests préparés.

---

## 68. Conditions avant pilote réel

RECALIBRATION · metering fiable · E1 testé · confiance démontrée · RUN readiness.

---

## 69. Conditions avant LOT-D1

Gates distinctes · sélection explicite Morris · GO Delivery · fichiers bornés · réserves bloquantes traitées.

---

## 70. Prochaine gate candidate

```text
GO IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — PREPARE FINOPS TECHNICAL LOT T0 EXECUTION PACK
```

Candidate uniquement — non consommée.

Cette gate future :
- préparera le contrat d’exécution de T0 ;
- vérifiera les fichiers et tests autorisés ;
- définira les stop conditions ;
- n’implémentera pas automatiquement T0 ;
- n’autorisera pas T1 à T7 ;
- ne configurera aucun fournisseur ;
- n’autorisera pas LOT-D1 ;
- ne consommera pas Delivery.

---

## 71. Verdict

**LOT-IP-0C FINOPS TECHNICAL IMPLEMENTATION DECISIONS APPLIED —**
**CAP-C DEDICATED POST-PROVIDER METERING BOUNDARY SELECTED —**
**BND-A DEDICATED FINOPS SERVICE AND SINGLE AUTHORITATIVE WRITER SELECTED —**
**IMMUTABLE EVENT LEDGER SELECTED —**
**DERIVED RECALCULABLE AGGREGATES SELECTED —**
**CORRECTIONS AS NEW EVENTS SELECTED —**
**POSTGRESQL / NEON EVENTS AND AGGREGATES SELECTED —**
**DETERMINISTIC EVENT ID SELECTED —**
**UNIQUE DEDUPLICATION KEY SELECTED —**
**DATABASE TRANSACTION SELECTED —**
**ASYNCHRONOUS ESTIMATED / OBSERVED / BILLED RECONCILIATION SELECTED —**
**HISTORY PRESERVED —**
**CALENDAR MONTH UTC AND INJECTABLE CLOCK SELECTED —**
**ENF-B SERVER-SIDE PRE-PROVIDER ENFORCEMENT BOUNDARY SELECTED —**
**BILLED OR OFFICIAL PROVIDER-OBSERVED COST MAY BLOCK —**
**ESTIMATED COST NEVER BLOCKS —**
**UNKNOWN NEVER SILENTLY EQUALS ZERO —**
**POSTGRES PROJECT/PERIOD ROW LOCK SELECTED —**
**ATOMIC RUN AUTHORIZATION SELECTED —**
**DURABLE IN-APP ALERT STATE SELECTED —**
**STRUCTURED AUDIT JOURNAL SELECTED —**
**MORRIS-ONLY DURABLE PROJECT OVERRIDE SELECTED —**
**NUMERIC TTL DEFERRED —**
**SERVER-SIDE PROJECT-SCOPED DEFAULT-OFF FEATURE FLAG SELECTED —**
**OFF / SHADOW / MONITOR / E1-ENFORCED ROLLOUT MODEL SELECTED —**
**STRUCTURED DOMAIN EVENTS AND APPEND-ONLY AUDIT SELECTED —**
**NO EXTERNAL OBSERVABILITY OR NOTIFICATION PROVIDER SELECTED —**
**ADDITIVE NODE-PG-MIGRATE STRATEGY SELECTED —**
**NO HISTORICAL BACKFILL SELECTED —**
**FEATURE-FLAG ROLLBACK WITH DATA PRESERVATION SELECTED —**
**T0 TO T7 TECHNICAL LOT STRUCTURE ACCEPTED —**
**T0 TO T7 NOT AUTHORIZED FOR IMPLEMENTATION —**
**TEST PLAN PRESERVED —**
**NO TEST IMPLEMENTED OR EXECUTED —**
**NO TECHNICAL IMPLEMENTATION STARTED —**
**NO CODE, TEST, PACKAGE, SQL, MIGRATION OR CONFIGURATION CHANGE —**
**FINOPS ENFORCEMENT DECISIONS PRESERVED —**
**PROVISIONAL CALIBRATION PRESERVED —**
**RECALIBRATION REQUIRED —**
**DOCUMENT 103 UPDATED —**
**DOCUMENT 125 FINOPS TECHNICAL IMPLEMENTATION DECISIONS APPLIED CREATED —**
**DOCUMENTS 104 TO 124 BYTE-IDENTICAL —**
**DOCUMENT 126 ABSENT —**
**FIVE PERSISTENCE A2 TECHNOLOGY DECISIONS PRESERVED —**
**A2, DA-A, MIG-C AND P1 PRESERVED —**
**P2 CO-COMPATIBLE BUT NOT SELECTED —**
**TEN ADR PRESERVED —**
**21 IMPACTS COVERED —**
**GRAPH 33/56 PRESERVED —**
**PRIORITIES PRESERVED —**
**NO ITEM DONE —**
**TB-04-04 NOT DONE —**
**TB-02-05 PRESERVED —**
**LOT-D1 TO LOT-D5 NOT AUTHORIZED —**
**RESERVES KEEP-OPEN —**
**NO ACCOUNT, SUBSCRIPTION OR PAYMENT CREATED —**
**NO PROJECT COMMIT OR PUSH —**
**DELIVERY NOT-CONSUMED —**
**HANDOFF UPDATED AND REMOTE VERIFIED —**
**READY FOR CHATGPT VALIDATION AND MORRIS FINOPS TECHNICAL LOT T0 PREPARATION DECISION**
