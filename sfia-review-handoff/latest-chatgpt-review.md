# Review Pack Full — LOT-IP-0C Selection Decision Pack Preparation

## Métadonnées

| Champ | Valeur |
|---|---|
| **Date locale** | 2026-08-05 20:05:52 CEST (+0200) |
| **Date UTC** | 2026-08-05 18:05:52 UTC |
| **GO** | `GO IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — PREPARE LOT-IP-0C SELECTION DECISION PACK` |
| **Consommation** | 2026-08-05 19:52 CEST (+0200) / 17:52 UTC |
| **Interprétation** | Préparer périmètre LOT-IP-0C · FinOps pré-pilote · Decision Pack sélection · **pas** sélectionner/exécuter le lot · **pas** budget/plan/région/seuil · **pas** LOT-D1 · Delivery NOT-CONSUMED |
| **Cycle** | Architecture technique — Implementation Preparation — LOT-IP-0C Pre-Pilot FinOps Selection Decision Pack Preparation |
| **Profil** | Critical |
| **Typologie** | EVOL / DOC |
| **CKC** | recherché · experimental cognitive guidance · aucune autorité d’exécution |
| **Branche** | `implementation-preparation/sfia-studio-assistant-sfia-native-openai-lot-ip-0c-selection-decision-pack` |
| **HEAD** | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| **origin/main** | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| **merge-base** | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| **ahead/behind** | `0 / 0` |
| **status --short** | (fichiers locaux untracked 103/119/120 + .tmp ; aucun tracked modifié) |

## Local Git Truth initiale

PASS · HEAD/main/mb `8dc54db0069eed78a8d8930cc2b035450ab56ad1` · 0/0 · handoff tip `590497fd6b1f2eaf12960bfd558c147dba7e800a` · blob `272049014ad3a03878fc4290c80c4f0b2c38f8f9` · hashes 103–118 attendus · 119–121 absents avant cycle.

## Handoff entrant

Tip `590497fd6b1f2eaf12960bfd558c147dba7e800a` · blob `272049014ad3a03878fc4290c80c4f0b2c38f8f9`.

## Hashes entrants 103–118

104–118 byte-identical (vérifiés). 103 avant : `543c029bdad0b76fb565c4e8fda6a3f1d1151b08dace4cdf5acd01692f65e820` / 1895 lignes.

## Sources Git / méthode

Template cycle · guide routage · Architecture technique · précédents 105–111 · operating model · publisher Review Handoff.

## Précédents LOT-IP-0A / 0B

Structure Decision Pack 106/110 · convention `D-ASST-IP0C-*` · NOT DECIDED · recommandation candidate.

## Contenu utile TB-04-04 / TB-02-05

TB-04-04 DECISION-PREP P2 READY-FOR-DECISION deps TB-02-05 · hard cap avant pilote sans seuil inventé · preparation evidence produced · DONE=no.
TB-02-05 metering/soft cap CANDIDATE · non bloqué par hard cap · LOT-IP-0C ne bloque pas TB-02-05.

## Registre complet des sources externes

| ID | Titre | Éditeur | URL | Consulté | Info | Devise/unité | Confiance |
|---|---|---|---|---|---|---|---|
| S-OA-PRICE | API Pricing | OpenAI | https://developers.openai.com/api/docs/pricing | 2026-08-05 20:00 CEST | gpt-4o $2.50/$1.25/$10 per 1M | USD | haute |
| S-OA-LIMITS | Rate limits | OpenAI | https://developers.openai.com/api/docs/guides/rate-limits | 2026-08-05 20:00 CEST | usage tiers | — | haute |
| S-OA-PROD | Production best practices | OpenAI | https://developers.openai.com/api/docs/guides/production-best-practices | 2026-08-05 20:00 CEST | spend alerts/limits | — | haute |
| S-NEON-PRICE | Pricing | Neon | https://neon.com/pricing | 2026-08-05 20:00 CEST | Launch $0.106/CU-h · storage $0.35/GB-mo | USD | haute |
| S-NEON-SPEND | Spending notifications | Neon | https://neon.com/docs/introduction/spending-limit | 2026-08-05 20:00 CEST | alertes 80%/100% ≠ hard stop | USD | haute |

## Inventaire inducteurs de coût

OpenAI Responses API (prouvé) · Neon SELECTED non provisionné · compute P1 vendor NOT SELECTED · observabilité UNKNOWN · metering/soft cap futur TB-02-05.

## Coûts connus / inconnus

Connus paramétriques : OA tokens · Neon CU/storage/hist.
Inconnus : compute P1 · obs · egress réel · taxes · FX · plan/région.

## Hypothèses / formules / scénarios / sensibilité

Voir 119 §§25–31. Réf. gpt-4o NOT SELECTED.
Faible ~<$1 · Nominal ~$37 · Haut ~$830+ (indicatifs USD, non validés).
Sensibilité : modèle · cache · always-on · boucles · absence hard stop.

## Options FinOps

Budget · mesure · alertes · soft caps · hard stops · dégradation · TTL · gouvernance — toutes NOT SELECTED.

## Recommandation candidate

Option A — SELECT LOT-IP-0C (exécution future bornée) — candidate only — NOT DECIDED.

## Coverage obligatoire

| Item | Valeur |
|---|---|
| document 119 complet | yes |
| document 120 complet | yes |
| sections 103 modifiées complètes | yes |
| diff utile 103 | yes |
| registre sources | yes |
| modèle paramétrique | yes |
| trois scénarios | yes |
| Local Git Truth initiale | yes |
| Local Git Truth finale | yes |
| synthesis only | no |
| placeholder actif | no |
| review pack verdict | complete |

## Hashes finaux

| Doc | SHA-256 | Lignes |
|---|---|---|
| 103 | `17e7e07f3bf0e5349bb54087ad5fb6caeb1a82e3a2614efc86a82c8f8c8df3b7` | 1937 |
| 119 | `91737dc4c47f69068fc899d4f430088284a5a7b26413da3c9772952809bb26be` | 549 |
| 120 | `8171bdf13349ead303a67f57ed07761f572eb9dbfdf369139a26d5544920ab9c` | 284 |

## Non-sélections / réserves

Aucun budget/plan/région/seuil SELECTED. R-TECH-FINOPS-HARD-01 · R-TECH-TTL-01 KEEP-OPEN.

## Contrôles

104–118 byte-identical PASS · 121 ABSENT · anti-stub PASS (anti-claims only) · cinq A2 SELECTED préservés · LOT-IP-0C NOT SELECTED/EXECUTED · LOT-D1 NOT AUTHORIZED · Delivery NOT-CONSUMED · graphe 33/56 · P0=6 P1=13 P2=13 P3=1 · aucun DONE.

## Local Git Truth finale

Branche `implementation-preparation/sfia-studio-assistant-sfia-native-openai-lot-ip-0c-selection-decision-pack` · HEAD `8dc54db0069eed78a8d8930cc2b035450ab56ad1` · origin/main `8dc54db0069eed78a8d8930cc2b035450ab56ad1` · merge-base `8dc54db0069eed78a8d8930cc2b035450ab56ad1` · ahead/behind `0 / 0` · aucun tracked modifié · aucun upstream · aucun commit/push projet.

## Prochaine gate candidate

```text
GO DECISIONS IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — ARBITRATE LOT-IP-0C SELECTION
```

Candidate only — non consommée.

## Verdict

**LOT-IP-0C SELECTION PREPARATION EXECUTED — PRE-PILOT FINOPS SCOPE BOUNDED — COST DRIVERS IDENTIFIED — OFFICIAL PRICING SOURCES RECORDED — PARAMETRIC COST MODEL PRODUCED — LOW, NOMINAL AND HIGH SCENARIOS PRODUCED — FINOPS GUARDRAIL OPTIONS PREPARED — LOT-IP-0C SELECTION DECISION PACK READY — RECOMMENDATION REMAINS CANDIDATE — LOT-IP-0C SELECTION NOT DECIDED — LOT-IP-0C DEFERRED — LOT-IP-0C NOT SELECTED — LOT-IP-0C NOT EXECUTED — NO BUDGET, PLAN, REGION, CAP OR THRESHOLD SELECTED — DOCUMENT 103 UPDATED — DOCUMENT 119 LOT-IP-0C PREPARATION CREATED — DOCUMENT 120 LOT-IP-0C SELECTION DECISION PACK CREATED — DOCUMENTS 104 TO 118 BYTE-IDENTICAL — DOCUMENT 121 ABSENT — FIVE PERSISTENCE A2 TECHNOLOGY DECISIONS PRESERVED — A2, DA-A, MIG-C AND P1 PRESERVED — P2 CO-COMPATIBLE BUT NOT SELECTED — TEN ADR PRESERVED — 21 IMPACTS COVERED — GRAPH 33/56 PRESERVED — PRIORITIES PRESERVED — NO ITEM DONE — LOT-D1 TO LOT-D5 NOT AUTHORIZED — RESERVES KEEP-OPEN — NO CODE, PACKAGE, DOCKER, SQL OR CONFIGURATION CHANGE — NO ACCOUNT, SUBSCRIPTION OR PAYMENT CREATED — NO PROJECT COMMIT OR PUSH — DELIVERY NOT-CONSUMED — HANDOFF UPDATED AND REMOTE VERIFIED — READY FOR CHATGPT VALIDATION AND MORRIS LOT-IP-0C SELECTION ARBITRATION**

---

# Document 119 complet

# SFIA Studio — Assistant SFIA natif OpenAI — Implementation Preparation LOT-IP-0C — Pre-Pilot FinOps Decision Preparation

## 1. Statut et anti-claims

**LOT-IP-0C PREPARATION EXECUTED —**
**PRE-PILOT FINOPS SCOPE BOUNDED —**
**COST DRIVERS IDENTIFIED —**
**PARAMETRIC COST MODEL PRODUCED —**
**GUARDRAILS OPTIONS PREPARED —**
**SELECTION DECISION PACK PREPARED —**
**LOT-IP-0C NOT SELECTED —**
**LOT-IP-0C NOT EXECUTED —**
**NO BUDGET, PLAN, REGION, CAP OR THRESHOLD SELECTED —**
**LOT-D1 TO LOT-D5 NOT AUTHORIZED —**
**NO ITEM DONE —**
**DELIVERY NOT-CONSUMED**

### Anti-claims

| Anti-claim | Statut |
|---|---|
| Préparation Decision Pack ≠ sélection du lot | vrai |
| Sélection future ≠ exécution | vrai |
| Estimation conversationnelle ≠ décision FinOps | vrai |
| Hypothèse Neon « 0–25 €/mois » ≠ plafond validé | vrai |
| Aucun budget / plan / région / seuil SELECTED | vrai |
| TB-04-04 ≠ DONE | vrai |

---

## 2. GO Morris exact

```text
GO IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — PREPARE LOT-IP-0C SELECTION DECISION PACK
```

Consommation : **2026-08-05 19:52 CEST (+0200) / 17:52 UTC**.

---

## 3. Horodatage CEST et UTC

| Champ | Valeur |
|---|---|
| **GO** | 2026-08-05 19:52 CEST / 17:52 UTC |
| **Consultation tarifs** | 2026-08-05 20:00 CEST (+0200) / 18:00 UTC |
| **Rédaction** | 2026-08-05 20:05 CEST (+0200) / 18:05 UTC |

---

## 4. Cycle / profil / typologie / blocs

| Champ | Valeur |
|---|---|
| **Type** | 6 — Architecture technique |
| **Mode** | Implementation Preparation — LOT-IP-0C Pre-Pilot FinOps Selection Decision Pack Preparation |
| **Profil** | **Critical** |
| **Typologie** | EVOL / DOC |
| **CKC** | recherché · fallback méthode SFIA v2.6 · aucune autorité d’exécution |
| **Blocs activés** | FinOps · GreenOps · architecture · OpenAI usage governance · volumétrie · RSSI · RGPD · RUN · quotas · dégradation · réversibilité · traçabilité · garde-fous |
| **Blocs désactivés** | code · package · SQL · Docker · CI · compte Neon · secrets · LOT-IP-0C execution · LOT-D* · Delivery |

---

## 5. Autorité Morris

Morris seul peut sélectionner LOT-IP-0C, budgets, plafonds et seuils. Cursor prépare options et preuves.

---

## 6. Sources et hiérarchie

1. Git main `8dc54db…` ;
2. GO 19:52 CEST ;
3. Handoff `590497fd…` / `27204901…` ;
4. précédents LOT-IP **105–111** (structure Decision Pack) ;
5. backlog **103** TB-04-04 / TB-02-05 / LOT-IP-0C ;
6. documents **112–118** (A2 technologies) ;
7. inventaire `app/` lecture seule ;
8. sources tarifaires officielles (§24).

---

## 7. Local Git Truth initiale

| Champ | Valeur |
|---|---|
| **Date** | 2026-08-05 19:58:48 CEST / 17:58:48 UTC |
| **Branche initiale** | `decisions/sfia-studio-assistant-sfia-native-openai-persistence-a2-remaining-options` |
| **Branche préparation** | `implementation-preparation/sfia-studio-assistant-sfia-native-openai-lot-ip-0c-selection-decision-pack` |
| **HEAD / origin/main / merge-base** | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| **Ahead / behind** | 0 / 0 |
| **Upstream** | aucun |
| **119–121 avant** | absents |

---

## 8. Handoff entrant

Tip `590497fd6b1f2eaf12960bfd558c147dba7e800a` · blob `272049014ad3a03878fc4290c80c4f0b2c38f8f9` · message remaining decisions applied.

---

## 9. Hashes entrants 103 à 118

| Doc | SHA-256 | Lignes |
|---|---|---|
| 103 | `543c029bdad0b76fb565c4e8fda6a3f1d1151b08dace4cdf5acd01692f65e820` | 1895 |
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

---

## 10. Précédents LOT-IP-0A et LOT-IP-0B

Structure reprise de **106** / **110** : statut NOT DECIDED · options · recommandation **candidate** · matrices items/lots · non-sélections · prochaine gate d’arbitrage · **aucune option précochée**.

Convention d’identifiants : `D-ASST-IP0C-*` pour la sélection du lot (alignée `D-ASST-IP0A-*` / `D-ASST-IP0B-*`).

---

## 11. Définition exacte de LOT-IP-0C

| Champ | Valeur (103) |
|---|---|
| **Nom** | Pre-Pilot FinOps Decision Preparation |
| **Items** | TB-04-04 |
| **Dépendance** | TB-02-05 |
| **État entrant** | DEFERRED — NOT SELECTED — NOT EXECUTED — FUTURE MORRIS GATE REQUIRED |
| **Note** | Requis avant pilote · **ne bloque pas** l’exécution future de TB-02-05 |

---

## 12. Contenu complet de TB-04-04 utile au cycle

| Champ | Contenu backlog |
|---|---|
| **ID** | TB-04-04 |
| **Type** | DECISION-PREP |
| **Priorité** | P2 — VALIDATED BY MORRIS |
| **Statut backlog** | READY-FOR-DECISION |
| **Gate** | décision Morris hard cap avant pilote |
| **Réserve** | R-TECH-FINOPS-HARD-01 KEEP-OPEN |
| **Objectif** | Préparer Decision Pack hard cap FinOps (FPI-14) **sans fixer de seuil** |
| **Acceptation** | options comparées sans valeur inventée · lien soft cap/metering/pilote · réserve OPEN |
| **Hors périmètre** | seuil inventé · tarification figée |

**Ce cycle prépare la sélection de LOT-IP-0C** ; il ne marque pas TB-04-04 DONE et ne fixe aucun seuil.

---

## 13. Dépendance TB-02-05

TB-02-05 — Metering provider et soft cap (sans hard cap) · P2 · CANDIDATE · **non bloqué** par hard cap · soft cap découplé · hard cap différé TB-04-04.

LOT-IP-0C **ne bloque pas** TB-02-05.

---

## 14. Objectifs

Borner le risque financier pré-pilote · expliciter inducteurs · préparer enveloppes/alertes/caps/stops · produire Decision Pack de **sélection du lot** · garder Morris comme autorité.

---

## 15. Hors périmètre

Sélection LOT-IP-0C · exécution TB-04-04 · budget validé · plan/région Neon · modèle OpenAI · package · compte · code · Delivery · LOT-D1.

---

## 16. Architecture et décisions préservées

STORE-01=A · DA-A · MIG-C · P1 · PostgreSQL · Neon · pg · node-pg-migrate · LD-A · P2 NOT SELECTED · R-TECH-FINOPS-HARD-01 OPEN · R-TECH-TTL-01 OPEN.

---

## 17. Inventaire des inducteurs de coûts

| Inducteur | Preuve repo | Statut |
|---|---|---|
| OpenAI Responses API | `openai` dep · `OpenAIConversationProvider` · `responses.create` · usage tokens | **IDENTIFIED** |
| Modèle OpenAI | `OPENAI_MODEL` env (config) · **valeur non sélectionnée** | DRIVER · MODEL NOT SELECTED |
| Tool calls / rounds | provider round + tools | IDENTIFIED |
| Metering / soft cap | TB-02-05 prévu · usage events main EXTEND | FUTURE / PARTIAL |
| Neon store | SELECTED documentaire · **non provisionné** | IDENTIFIED · NOT PROVISIONED |
| Compute P1 | profil P1 · vendor **NOT SELECTED** | IDENTIFIED · COST UNKNOWN |
| Docker PG local (LD-A) | stratégie SELECTED · non configuré | LOCAL DEV · low/variable |
| Observabilité vendor | NOT SELECTED | UNKNOWN |
| Auth / email / object store | absents ou hors Assistant FPI | **GAP / N/A** sauf preuve future |

---

## 18. OpenAI API — inducteurs et tarifs actuels

**Preuve produit :** adapter Responses · usage `input_tokens` / `output_tokens` · model injecté via secrets/config · **aucun modèle SELECTED** dans les décisions A2.

**Tarifs officiels** (consultation **2026-08-05 20:00 CEST (+0200)**, source S-OA-PRICE, **USD / 1M tokens**, taxes hors scope) — échantillon utile au modèle paramétrique :

| Modèle (référence) | Input | Cached input | Output |
|---|---|---|---|
| gpt-4o | $2.50 | $1.25 | $10.00 |
| gpt-4.1 | $2.00 | $0.50 | $8.00 |
| gpt-4.1-mini | $0.40 | $0.10 | $1.60 |
| o4-mini | $1.10 | $0.275 | $4.40 |

**Limites / spend :** usage tiers et spend limits organisationnels documentés (S-OA-LIMITS / S-OA-PROD) · hard spend limit fournisseur possible · **aucun plafond projet SELECTED**.

**Hypothèse modèle pour scénarios :** `gpt-4o` comme **référence paramétrique uniquement** — **NOT SELECTED**.

---

## 19. Neon — inducteurs et tarifs actuels

Consultation **2026-08-05 20:00 CEST (+0200)** · USD · région **NOT SELECTED** · plan **NOT SELECTED**.

| Unité | Free | Launch | Scale |
|---|---|---|---|
| Compute | 100 CU-h/projet inclus | $0.106 / CU-hour | $0.222 / CU-hour |
| Storage | 0.5 GB inclus | $0.35 / GB-month | $0.35 / GB-month |
| Instant restore | — | $0.20 / GB-month | $0.20 / GB-month |
| Egress | 5 GB inclus | 500 GB puis $0.10/GB | idem |
| Scale-to-zero | après 5 min | oui (désactivable) | configurable |
| Spending notifications | — | alertes 80%/100% | alertes 80%/100% |

**Fait critique (S-NEON-SPEND) :** notifications ≠ hard stop actuel · projects **continuent** · suspension auto **coming soon** · risque facture non bornée si pas de contrôles applicatifs.

**Hypothèse conversationnelle « 0–25 €/mois » :** **NON VALIDÉE** · non inscrite comme plafond · peut correspondre qualitativement à Free ou Launch low-usage **sous hypothèses** — **pas une décision**.

---

## 20. Compute P1 — coûts connus et inconnus

**COST DRIVER IDENTIFIED — PROVIDER NOT SELECTED — EXACT COST NOT AVAILABLE**

P1 = compute éphémère/serverless + store Neon. Coût fixe/variable dépend du vendor futur (NOT SELECTED).

---

## 21. Stockage, fichiers et egress

PostgreSQL via Neon (storage + restore history) · fichiers/artefacts Assistant : **GAP / NOT PROVEN** volume · egress Neon tarifé · logs retention selon plan.

---

## 22. Observabilité

Vendor **NOT SELECTED** · coûts UNKNOWN · Neon monitoring retention plan-dependent · usage OpenAI dashboard fournisseur.

---

## 23. Services annexes réellement présents

`openai` npm · Next.js app · pas de Neon client installé · pas de queue/email/object-store dédiés Assistant FPI dans inventaire courant · CI workflows génériques (hors coût pilote Assistant sauf preuve).

---

## 24. Registre complet des sources externes

| ID | Titre | Éditeur | URL | Consulté | Info | Confiance | Limite |
|---|---|---|---|---|---|---|---|
| S-OA-PRICE | API Pricing | OpenAI | https://developers.openai.com/api/docs/pricing | 2026-08-05 20:00 CEST (+0200) / 18:00 UTC | USD / 1M tokens · gpt-4o/4.1/o4-mini | haute | modèles évoluent |
| S-OA-LIMITS | Rate limits / usage tiers | OpenAI | https://developers.openai.com/api/docs/guides/rate-limits | 2026-08-05 20:00 CEST (+0200) / 18:00 UTC | tiers spend | haute | quotas org |
| S-OA-PROD | Production best practices | OpenAI | https://developers.openai.com/api/docs/guides/production-best-practices | 2026-08-05 20:00 CEST (+0200) / 18:00 UTC | spend alerts / hard spend limits | haute | |
| S-NEON-PRICE | Pricing | Neon | https://neon.com/pricing | 2026-08-05 20:00 CEST (+0200) / 18:00 UTC | Free/Launch/Scale units | haute | région variable |
| S-NEON-SPEND | Spending notifications | Neon | https://neon.com/docs/introduction/spending-limit | 2026-08-05 20:00 CEST (+0200) / 18:00 UTC | alertes ≠ stop | haute | suspension coming soon |

---

## 25. Hypothèses de volumétrie

Pilote borné (hypothèses **explicites**, non validées) :

| Variable | Faible | Nominal | Haut |
|---|---|---|---|
| Utilisateurs actifs / mois | 3 | 10 | 25 |
| Runs / user / jour ouvrable | 2 | 5 | 12 |
| Jours actifs / mois | 10 | 20 | 22 |
| Input tokens / run | 2 000 | 6 000 | 15 000 |
| Output tokens / run | 500 | 1 500 | 4 000 |
| Cached input ratio | 30% | 20% | 10% |
| Tool rounds moyens | 0.5 | 1.5 | 3 |
| Neon CU moyen actif | 0.25 · scale-to-zero | 0.5 · partial always-on | 1.0 · always-on |
| Neon storage GB | 0.2 | 1.0 | 5.0 |
| Neon history GB | 0 | 1.0 | 5.0 |

---

## 26. Variables du modèle

`U`, `R`, `D`, `Tin`, `Tout`, `Cache`, `Tools`, `CU`, `H`, `S`, `Hist`, prix `Pin/Pcache/Pout`, `Pcu`, `Pstor`, `Prest`.

---

## 27. Formules

Soit runs mensuels `N = U × R × D`.

**OpenAI (réf. gpt-4o, USD) :**
- `Tin_bill = Tin × (1 − Cache)` ; `Tin_cache = Tin × Cache`
- `Cost_run ≈ (Tin_bill×Pin + Tin_cache×Pcache + Tout×Pout) / 1e6`
- `Cost_OA_month ≈ N × Cost_run` (tools/retries = facteur sensibilité)

**Neon :**
- `Cost_CU ≈ CU × H × Pcu` (H heures actives)
- `Cost_stor ≈ S × Pstor` ; `Cost_hist ≈ Hist × Prest`
- `Cost_Neon ≈ Cost_CU + Cost_stor + Cost_hist + egress`

**Total estimatif :** `Cost_OA + Cost_Neon + Cost_compute_P1(unknown) + Cost_obs(unknown)`

**Exposition sans hard cap :** croît avec N et always-on · **non bornée** côté Neon alert-only.

---

## 28. Scénario faible

Hypothèses tableau §25 · gpt-4o réf. · Neon Free plausible (sous limites) :
- `N = 3×2×10 = 60` runs
- `Cost_run ≈ (2000×0.7×2.5 + 2000×0.3×1.25 + 500×10)/1e6 ≈ $0.00975`
- `Cost_OA ≈ 60×0.00975 ≈ **$0.59**`
- Neon Free si sous 100 CU-h / 0.5 GB → **$0** compute/storage
- **Total connu ≈ <$1** · + compute P1 UNKNOWN · **non validé**

---

## 29. Scénario nominal

`N = 10×5×20 = 1 000` · gpt-4o · Neon Launch partiel :
- `Cost_run ≈ (6000×0.8×2.5 + 6000×0.2×1.25 + 1500×10)/1e6 ≈ $0.030`
- `Cost_OA ≈ **$30**`
- Neon : 0.5 CU × 120 h × $0.106 ≈ **$6.36** + storage $0.35 + hist $0.20 ≈ **~$7**
- **Total connu ≈ ~$37** · P1/obs UNKNOWN · marge de sécurité qualitative 1.5–2× → ordre **$55–75** (indicatif, **non validé**)

---

## 30. Scénario haut

`N = 25×12×22 = 6 600` · gpt-4o · Neon always-on 1 CU :
- `Cost_run ≈ (15000×0.9×2.5 + 15000×0.1×1.25 + 4000×10)/1e6 ≈ $0.0756`
- `Cost_OA ≈ **$499**`
- Neon : 1 CU × 720 h × $0.106 ≈ **$76** + storage/hist ≈ **$80+**
- Tools/retries ×1.5 → OA **~$750**
- **Total connu ≈ $830+** · sans hard stop → exposition plus élevée

---

## 31. Analyse de sensibilité

| Facteur | Effet |
|---|---|
| Modèle plus cher / reasoning | OA multiplié |
| Cache ratio ↓ | OA ↑ |
| Always-on Neon | plancher mensuel compute |
| Boucles agentiques | N effectif ↑ |
| Absence hard stop | queue non bornée |

---

## 32. Coûts inconnus et réserves

Compute P1 vendor · observability · egress réel · tool/search extras OpenAI · taxes · EUR/USD · région Neon · plan futur.

---

## 33. Risque de facture non bornée

**ÉLEVÉ sans garde-fous applicatifs** : Neon spending notifications ≠ stop · OpenAI hard spend limit optionnel org · soft cap TB-02-05 ≠ hard cap · R-TECH-FINOPS-HARD-01 OPEN.

---

## 34. Options d’enveloppe budgétaire

Options candidates (toutes **NOT SELECTED**) :

| Option | Contenu |
|---|---|
| BUD-A | Enveloppe totale pilote unique (tous fournisseurs) |
| BUD-B | Enveloppes mensuelles séparées OpenAI / Neon / compute |
| BUD-C | Enveloppe + réserve de sécurité (ex. 20–50 % indicative, non validée) |
| BUD-D | Owner budget nommé + revue périodique |

Hypothèse conversationnelle Neon « 0–25 €/mois » : **non inscrite** comme option validée ni plafond.

---

## 35. Options de mesure

| Option | Unité | Source candidate |
|---|---|---|
| M-A | Coût / run | usage Responses + metering TB-02-05 |
| M-B | Coût / utilisateur actif | agrégation runs |
| M-C | Coût / projet | attribution projet |
| M-D | Coût / environnement | séparations future |

Fréquence de collecte candidate : quotidienne / hebdomadaire — **NOT SELECTED**. Source de vérité : combinaison usage OpenAI + billing Neon + metering app — **NOT SELECTED**.

---

## 36. Options d’alertes

| Niveau | Rôle | Exemple (non validé) |
|---|---|---|
| Informatif | tendance | % enveloppe |
| Warning | action préventive | soft cap approche |
| Critique | escalade Morris | hard stop candidat |

Destinataires / escalade / fréquence : **NOT SELECTED**. Neon 80%/100% notifications = option fournisseur complémentaire, **pas** hard stop.

---

## 37. Options de soft caps

Alignées TB-02-05 (sans hard cap) — **NOT SELECTED** :

- limitation fréquence runs ;
- limitation tokens / run ;
- limitation runs / user / jour ;
- limitation par projet ;
- limitation outils / retries.

Soft cap ≠ hard stop. Soft cap peut exister avant arbitrage hard cap.

---

## 38. Options de hard stops

Cœur TB-04-04 — **NOT SELECTED** :

- arrêt global Assistant FPI ;
- arrêt par projet / utilisateur ;
- blocage modèles coûteux (si multi-modèles autorisés plus tard) ;
- mode read-only ;
- désactivation outils ;
- reprise uniquement après validation humaine.

---

## 39. Options de dégradation contrôlée

**NOT SELECTED** · pas de fallback modèle automatique :

- réduction de contexte ;
- désactivation fonctions secondaires ;
- réduction rétention temporaire ;
- report traitements non urgents ;
- fallback modèle moins coûteux **uniquement si déjà autorisé** par décision distincte.

---

## 40. Options de rétention / TTL

Liées R-TECH-TTL-01 — **NOT SELECTED** · RGPD EXTERNAL :

conversations · runs · fichiers · traces · logs · artefacts · backups · branches Neon.

---

## 41. Gouvernance humaine

| Rôle | Responsabilité candidate |
|---|---|
| Morris | autorité budget / hard stop / override |
| Owner ops | surveillance quotidienne · escalade |
| Validateur dépassement | décision reprise |

Override : durée max + traçabilité — **NOT SELECTED**.

---

## 42. Critères d’entrée pilote

Propositions **NOT SELECTED** : metering/soft cap prouvables · Decision Pack hard cap arbitrable · enveloppe candidate · restore drill · réserves critiques traitées ou acceptées.

---

## 43. Critères de suspension

Propositions **NOT SELECTED** : seuil critique atteint · incident coût · hard stop déclenché · perte de metering.

---

## 44. Critères de sortie

Propositions **NOT SELECTED** : bilan FinOps · REX · réévaluation enveloppes · décision Morris continuer / arrêter / industrialiser.

---

## 45. Décisions restant à arbitrer

`D-ASST-IP0C-LOT-SELECTION-01` (sélection du lot) · futurs budgets/seuils/TTL · plan/région Neon · compute P1 · modèle OpenAI (si besoin) — tous hors SELECTED.

---

## 46. Recommandation candidate

**Sélectionner LOT-IP-0C** pour une exécution future bornée de TB-04-04 (préparation/arbitrage hard cap et garde-fous) — **candidate only — NOT DECIDED**.

Motif : risque facture non bornée · pilote dépend hard cap DEFER-BEFORE-PILOT · précédents IP-0A/0B montrent valeur d’un Decision Pack avant exécution.

---

## 47. Conditions de decision-readiness

**READY FOR MORRIS ARBITRATION — WITH RESERVES** (tarifs horodatés · modèle paramétrique · TB-04-04/TB-02-05 alignés · coûts P1/obs UNKNOWN).

---

## 48. Impacts backlog

TB-04-04 : evidence de préparation produite · **pas DONE**.
TB-02-05 : inchangé CANDIDATE · non bloqué.
Graphe 33/56 inchangé.

---

## 49–51. Conditions

Avant **sélection** LOT-IP-0C : validation ChatGPT · arbitrage Morris.
Avant **exécution** LOT-IP-0C : sélection appliquée · GO exécution distinct si requis.
Avant **LOT-D1** : LOT-IP-0C traité · versions/région/plan · Docker/CI · schéma · GO Delivery.

---

## 52. Prochaine gate candidate

```text
GO DECISIONS IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — ARBITRATE LOT-IP-0C SELECTION
```

Candidate only — n’exécute pas le lot · ne valide aucun budget · n’autorise pas LOT-D1.

---

## 53. Verdict

**LOT-IP-0C PREPARATION EXECUTED — SELECTION DECISION PACK READY — LOT-IP-0C NOT SELECTED — NOT EXECUTED — NO BUDGET/PLAN/REGION/CAP SELECTED — LOT-D1 NOT AUTHORIZED — DELIVERY NOT-CONSUMED**

---

# Document 120 complet

# SFIA Studio — Assistant SFIA natif OpenAI — LOT-IP-0C Selection Decision Pack

## 1. Statut et anti-claims

**LOT-IP-0C SELECTION DECISION PACK READY —**
**PRE-PILOT FINOPS EVIDENCE INCLUDED —**
**OPTIONS AND TRADE-OFFS INCLUDED —**
**RECOMMENDATION CANDIDATE ONLY —**
**LOT-IP-0C SELECTION NOT DECIDED —**
**LOT-IP-0C NOT SELECTED —**
**LOT-IP-0C NOT EXECUTED —**
**NO BUDGET, PLAN, REGION, CAP OR THRESHOLD SELECTED —**
**LOT-D1 TO LOT-D5 NOT AUTHORIZED —**
**DELIVERY NOT-CONSUMED**

Anti-claims : Decision Pack ready ≠ DECIDED · recommandation ≠ décision · aucune option précochée · estimation conversationnelle ≠ plafond.

---

## 2. Autorité Morris

Morris arbitre `D-ASST-IP0C-LOT-SELECTION-01`. Aucune exécution automatique.

---

## 3. GO exact

```text
GO IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — PREPARE LOT-IP-0C SELECTION DECISION PACK
```

Consommation préparation : 2026-08-05 19:52 CEST / 17:52 UTC.

---

## 4. Résumé exécutif

LOT-IP-0C = préparation FinOps pré-pilote (TB-04-04 hard cap Decision Pack). Preuves : inducteurs OpenAI+Neon+P1 · tarifs officiels horodatés · modèle paramétrique · 3 scénarios · options de garde-fous **sans valeurs SELECTED**. Recommandation candidate : **sélectionner le lot** pour exécution future bornée. Statut : **NOT DECIDED**.

---

## 5. Local Git Truth

Branche `implementation-preparation/…-lot-ip-0c-selection-decision-pack` · HEAD `8dc54db…` · 0/0 · handoff parent `590497fd…`.

---

## 6. Sources

Documents 103 · 105–111 · 112–118 · 119 · inventaire app · S-OA-PRICE/LIMITS/PROD · S-NEON-PRICE/SPEND · consultation 2026-08-05 20:00 CEST (+0200) / 18:00 UTC.

---

## 7. Décision principale de sélection LOT-IP-0C

| Champ | Contenu |
|---|---|
| **ID** | **D-ASST-IP0C-LOT-SELECTION-01** |
| **Statut** | **NOT DECIDED** |
| **Question** | Faut-il sélectionner LOT-IP-0C pour une exécution future bornée de TB-04-04 ? |

---

## 8. Convention d’identifiant

Alignée `D-ASST-IP0A-*` / `D-ASST-IP0B-*` → `D-ASST-IP0C-LOT-SELECTION-01`.

---

## 9. État entrant

LOT-IP-0C DEFERRED — NOT SELECTED — NOT EXECUTED · TB-04-04 READY-FOR-DECISION · TB-02-05 CANDIDATE non bloqué · cinq technos A2 SELECTED · R-TECH-FINOPS-HARD-01 OPEN.

---

## 10. Question d’arbitrage

Sélectionner maintenant LOT-IP-0C (préparation FinOps pré-pilote), ou différer ?

---

## 11. Options

| Option | Description |
|---|---|
| **A — SELECT LOT-IP-0C** | Sélectionne le lot pour exécution **future** bornée de TB-04-04 · **n’exécute pas** · **ne fixe aucun** budget/seuil |
| **B — DEFER LOT-IP-0C** | Maintient DEFERRED · accepte risque FinOps ouvert plus longtemps avant pilote |

Aucune autre option ajoutée hors canon (pas d’élargissement non justifié).

---

## 12. Critères d’évaluation

Risque facture non bornée · dépendance pilote à hard cap · maturité preuves (119) · coût d’opportunité · non-blocage TB-02-05 · alignement IP-0A/0B.

---

## 13. Comparaison des options

| Critère | A SELECT | B DEFER |
|---|---|---|
| Réduit risque avant pilote | fort | faible |
| Charge documentaire | +1 lot | nulle |
| Fixe budget maintenant | non | non |
| Autorise LOT-D1 | non | non |
| Compatible TB-02-05 | oui | oui |

---

## 14. Recommandation candidate

**Option A — SELECT LOT-IP-0C** — **candidate only — NOT DECIDED**.

---

## 15. Alternative

**Option B — DEFER** si Morris estime que metering/soft cap (TB-02-05) doit d’abord avancer, ou si le pilote n’est pas imminent.

---

## 16. Motifs de report éventuels

Preuves P1/obs insuffisantes · prioriser Delivery d’autres lots · attendre choix modèle OpenAI · attendre région Neon.

---

## 17. Portée future si sélection

Autorise cycles futurs d’exécution documentaire TB-04-04 / Decision Pack hard cap options · **pas** d’implémentation code · **pas** de seuils auto.

---

## 18. Hors périmètre même si sélection

Code · packages · comptes · budgets SELECTED · seuils SELECTED · LOT-D1 · Delivery.

---

## 19. Modèle de coûts résumé

OA (gpt-4o réf.) + Neon CU/storage/hist + P1 UNKNOWN + obs UNKNOWN. Formules §27 doc 119.

---

## 20. Scénarios résumé

| Scénario | OA réf. | Neon réf. | Total connu (indicatif) |
|---|---|---|---|
| Faible | ~$0.6 | ~$0 Free | <$1 |
| Nominal | ~$30 | ~$7 | ~$37 (+marge) |
| Haut | ~$500–750 | ~$80+ | ~$830+ |

**Non validés** · USD · hypothèses visibles · pas de conversion EUR figée.

---

## 21. Matrice coût / risque / valeur

Sélectionner le lot : faible coût documentaire · haute valeur de maîtrise risque · pas de spend immédiat.

---

## 22. Matrice FinOps

Inducteurs identifiés · hard cap DEFER-BEFORE-PILOT · soft cap découplé · Neon alert≠stop · OpenAI spend limits disponibles org.

---

## 23. Matrice GreenOps

Scale-to-zero Neon · idle compute · always-on = surprovisionnement · conclusions qualitatives.

---

## 24. Matrice RGPD / RSSI

TTL/rétention liés FinOps mais **EXTERNAL** juridique · pas de politique SELECTED · secrets non créés.

---

## 25. Matrice RUN readiness

Alertes · owners · override · restore drill futurs · metering TB-02-05.

---

## 26–32. Garde-fous proposés (tous NOT SELECTED)

Budget · mesure · alertes · soft caps · hard stops · dégradation contrôlée · TTL · gouvernance — détail document **119** §§34–41.

---

## 33. Conditions de decision-readiness

**READY FOR MORRIS ARBITRATION — WITH RESERVES** (coûts P1/obs unknown · modèle réf. gpt-4o non sélectionné).

---

## 34. Réserves

R-TECH-FINOPS-HARD-01 · R-TECH-TTL-01 · DPA Neon · plan/région · compute vendor · observability · taxes/FX.

---

## 35. Risques et dette

Glissement budget validé · Free permanent · oubli hard stop · autoriser LOT-D1 tôt.

---

## 36. Dépendances

TB-04-04 → TB-02-05 (preuve) · pilote → hard cap/TTL · LOT-D1 ↛ auto par sélection IP-0C.

---

## 37. Matrice décision → items

| Décision | Items | DONE |
|---|---|---|
| D-ASST-IP0C-LOT-SELECTION-01 | TB-04-04 | **non** |

---

## 38. Matrice décision → lots

| Option | LOT-IP-0C | LOT-D1 |
|---|---|---|
| A SELECT | SELECTED (futur) · exec séparée | NOT AUTHORIZED |
| B DEFER | reste DEFERRED | NOT AUTHORIZED |

---

## 39. Impacts sur TB-04-04

Préparation evidence = produced · implementation = not started · DONE = no.

---

## 40. Impacts sur TB-02-05

Statut préservé · non bloqué par cette préparation.

---

## 41. Conditions avant pilote

Hard cap arbitrable · soft cap/metering · TTL · enveloppe candidate · restore · réserves critiques.

---

## 42. Conditions avant LOT-D1

LOT-IP-0C traité · paramètres A2 · Docker/CI · schéma · GO Delivery.

---

## 43. Non-sélections

Budget · enveloppes · plan/région Neon · soft/hard caps numériques · TTL · revue freq · owner · modèles · compute P1 · obs vendor · LOT-IP-0C · LOT-D1.

---

## 44. Réponse Morris attendue

Choisir A ou B · lister réserves acceptées · **aucun** budget/seuil adopté implicitement · **aucune** exécution auto.

---

## 45. Prochaine gate candidate

```text
GO DECISIONS IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — ARBITRATE LOT-IP-0C SELECTION
```

Candidate — non consommée.

---

## 46. Verdict

**LOT-IP-0C SELECTION DECISION PACK READY — D-ASST-IP0C-LOT-SELECTION-01 NOT DECIDED — RECOMMENDATION CANDIDATE OPTION A — LOT-IP-0C NOT SELECTED — NOT EXECUTED — NO BUDGET/THRESHOLD SELECTED — LOT-D1 NOT AUTHORIZED — DELIVERY NOT-CONSUMED**

---

# Sections 103 modifiées complètes

## ## 1. Statut (modifié)

# SFIA Studio — Assistant SFIA natif OpenAI — Technical Implementation Backlog

## 1. Statut

**LOT-IP-0A DECISIONS APPLIED —**
**LOT-IP-0B DECISIONS APPLIED —**
**PERSISTENCE A2 TECHNOLOGY SELECTION FULLY ARBITRATED —**
**FIVE TECHNOLOGY DECISIONS SELECTED —**
**POSTGRESQL SELECTED —**
**NEON SELECTED —**
**PG NODE-POSTGRES SELECTED —**
**NODE-PG-MIGRATE SELECTED —**
**LOCAL DEV TEST LD-A SELECTED —**
**LOT-IP-0C SELECTION PREPARATION EXECUTED —**
**LOT-IP-0C SELECTION DECISION PACK READY —**
**LOT-IP-0C DEFERRED —**
**LOT-IP-0C NOT SELECTED —**
**LOT-IP-0C NOT EXECUTED —**
**LOT-D1 TO LOT-D5 NOT AUTHORIZED —**
**NO ITEM DONE —**
**DELIVERY NOT-CONSUMED**

| Champ | Valeur |
|---|---|
| **Document** | `projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md` |
| **Items** | 33 |
| **Épics** | 7 (EPIC-TB-00 … EPIC-TB-06) |
| **Documents 90–102** | Inchangés |
| **Delivery** | NOT-CONSUMED |


## 1bis. GO Morris — validation priorités et premier lot

```text
GO DECISIONS BACKLOG SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — VALIDATE TECHNICAL BACKLOG PRIORITIES AND SELECT FIRST IMPLEMENTATION-PREPARATION LOT
```

| Champ | Valeur |
|---|---|
| **Autorité** | Morris |
| **Consommation** | 2026-08-05 14:46 CEST (+0200) / 12:46 UTC |
| **Profil** | **Critical** |
| **Effet** | Priorités P0–P3 **validées** · LOT-IP-0A **SELECTED** · LOT-IP-0B/0C **DEFERRED** · Delivery **NOT-CONSUMED** |
| **Non-effet** | Pas d’exécution LOT-IP-0A · pas de Decision Pack produit · pas de sélection techno · pas de code |

### Historique des décisions Backlog

| ID | Statut |
|---|---|
| D-ASST-BLG-PRIORITY-01 | DECIDED — ADOPTED BY MORRIS |

---

## ## 1duodecies (ajouté)

## 1duodecies. GO Morris — Prepare LOT-IP-0C Selection Decision Pack

```text
GO IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — PREPARE LOT-IP-0C SELECTION DECISION PACK
```

| Champ | Valeur |
|---|---|
| **Autorité** | Morris |
| **Consommation** | 2026-08-05 19:52 CEST (+0200) / 17:52 UTC |
| **Cycle** | Implementation Preparation — LOT-IP-0C Pre-Pilot FinOps Selection Decision Pack Preparation |
| **Profil** | **Critical** |
| **Portée** | Périmètre détaillé LOT-IP-0C · enjeux FinOps pré-pilote · options/critères/garde-fous · document 119 · Decision Pack 120 · mise à jour 103 |
| **Non-effet** | LOT-IP-0C **NOT SELECTED** · LOT-IP-0C **NOT EXECUTED** · aucun budget/plafond/plan/région/seuil SELECTED · TB-04-04 **pas DONE** · LOT-D1 **NOT AUTHORIZED** · aucun compte/package/SQL/Docker · Delivery **NOT-CONSUMED** |
| **Documents** | `119-assistant-sfia-native-openai-implementation-preparation-lot-ip-0c.md` · `120-assistant-sfia-native-openai-implementation-preparation-lot-ip-0c-decision-pack.md` |

### Chaîne documentaire (post-préparation LOT-IP-0C)

| Document | Rôle |
|---|---|
| **112–118** | Persistence A2 (historique / record 118) — **byte-identical** |
| **119** | préparation LOT-IP-0C FinOps |
| **120** | Decision Pack de sélection LOT-IP-0C |

LOT-IP-0C reste **DEFERRED — NOT SELECTED — NOT EXECUTED — MORRIS ARBITRATION REQUIRED**.

---

---

## #### TB-04-04 (modifié)

#### TB-04-04 — Decision Pack hard cap FinOps avant pilote

| Champ | Valeur |
|---|---|
| **ID** | `TB-04-04` |
| **Type** | DECISION-PREP |
| **Epic** | EPIC-TB-04 |
| **Priorité validée** | **P2** — VALIDATED BY MORRIS |
| **Statut** | READY-FOR-DECISION |
| **Dépendances** | TB-02-05 |
| **Gate Morris** | décision Morris hard cap avant pilote · sélection LOT-IP-0C en amont (120) |
| **Source** | doc 102 FPI-14-HARD-CAP=DEFER-BEFORE-PILOT · R-TECH-FINOPS-HARD-01 |
| **Réserves liées** | R-TECH-FINOPS-HARD-01 |
| **Non-sélections liées** | hard cap FinOps, tarif |
| **Delivery** | NOT AUTHORIZED |
| **Relation main** | N/A code — Decision Pack documentaire · dépend de la preuve metering/soft cap (TB-02-05) sans bloquer TB-02-05 |
| **Préparation LOT-IP-0C** | evidence documentaire **produced** (119/120) · **pas DONE** · aucun seuil SELECTED |

**Objectif :** Préparer le Decision Pack hard cap FinOps (FPI-14) sans fixer de seuil.

**Critères d’acceptation :**
  - Options de politique hard cap sont comparées sans valeur numérique inventée.
  - Lien explicite soft cap / metering / pilote est tracé.
  - La réserve R-TECH-FINOPS-HARD-01 reste OPEN jusqu’à décision Morris.

**Preuves attendues :**
  - Decision Pack FinOps hard cap candidat

**Hors périmètre :** seuil inventé, tarification

---

## ### LOT-IP-0C (modifié)

### LOT-IP-0C — Pre-Pilot FinOps Decision Preparation

| Champ | Valeur |
|---|---|
| **Items** | TB-04-04 |
| **Dépendance** | TB-02-05 |
| **Statut** | **PREPARATION EXECUTED — SELECTION DECISION PACK READY — DEFERRED — NOT SELECTED — NOT EXECUTED — MORRIS ARBITRATION REQUIRED** |
| **Préparation** | documents **119** / **120** produits · GO 19:52 CEST consommé |
| **TB-04-04** | preparation evidence = **produced** · implementation = **not started** · DONE = **no** |
| **Note** | Requis avant pilote · ne bloque pas l’exécution future de TB-02-05 · préparation ≠ sélection ≠ exécution |

---

## ## 23 (modifié)

## 23. Chemin critique

**LOT-IP-0A** / **LOT-IP-0B** décisions appliquées → **cinq décisions technologiques Persistence A2 sélectionnées** → **application documentaire 118** → **LOT-IP-0C Decision Pack préparé (119/120)** → **arbitrage Morris sur sélection LOT-IP-0C** → éventuelle application de la décision → éventuelle exécution future LOT-IP-0C → paramètres FinOps pilotés → **éventuelle sélection** LOT-D1 → GO Delivery distinct.

LOT-D1 **n’est pas** éligible, sélectionné ni autorisé sans décision Morris distincte.

---

---

## ### Vers préparation / arbitrage LOT-IP-0C

### Vers préparation LOT-IP-0C

- **fait** (GO consommé 2026-08-05 19:52 CEST) · documents **119** / **120** créés · LOT-IP-0C reste **NOT SELECTED** / **NOT EXECUTED**.

### Vers arbitrage sélection LOT-IP-0C (prochaine)

- GO candidate `ARBITRATE LOT-IP-0C SELECTION` ;
- arbitre uniquement la sélection du lot ;
- n’exécute pas automatiquement LOT-IP-0C ;
- ne sélectionne pas automatiquement budgets ou seuils ;
- n’autorise pas LOT-D1 ;
- ne consomme pas Delivery.

---

## ## 28–33 (modifiés)

## 28. Non-sélections

**Classe SQL relationnelle managée = DECIDED** (STORE-01=A). **Patterns** DA-A / MIG-C / P1 = **DECIDED**. P2 = **CO-COMPATIBLE — NOT SELECTED**. **Cinq décisions Persistence A2 = SELECTED** : PostgreSQL · **Neon** · pg · **node-pg-migrate** · LD-A. Restent **NOT SELECTED** : budget pilote · enveloppe mensuelle · budget OpenAI · budget Neon · région Neon · plan Neon · soft caps · hard stops · seuils · TTL · politiques de rétention · fréquence de revue · propriétaire opérationnel · modèles OpenAI futurs · SLA · compte · projet · base · politique backup/restore/PITR · version PostgreSQL · version pg · version node-pg-migrate · image Docker · configuration Docker · configuration CI · schéma physique · SQL · DDL · migrations · rôle migrator · secret manager · observability vendor · compute P1 concret · Supabase · RDS · Aurora · dbmate · LOT-IP-0C · LOT-D1 — **FUTURE DEDICATED DECISION OR PREPARATION GATE REQUIRED**.

---

## 29. Actions autorisées

Maintenir 112–118 historiques · maintenir 119/120 comme préparation/Decision Pack · tracer l’état dans 103 · arbitrer sélection LOT-IP-0C · publier le handoff.

---

## 30. Actions interdites

Réécrire 117/118 · provisionner Neon · choisir région/plan · installer pg ou node-pg-migrate · sélectionner une version npm · sélectionner P2 · configurer Docker/Compose · créer code, SQL, DDL, migration, package ou IaC · créer un compte/service · sélectionner un budget/seuil sans arbitrage · sélectionner ou exécuter LOT-IP-0C sans gate · sélectionner ou exécuter LOT-D1 à LOT-D5 · fermer une réserve · marquer un item DONE · Delivery · commit/push projet · PR/merge.

---

## 31. Anti-claims

Sélection documentaire ≠ installation · LD-A ≠ Docker configuré · PostgreSQL ≠ base créée · pg ≠ package installé · Neon SELECTED ≠ compte/base · node-pg-migrate SELECTED ≠ package · région/plan/version ≠ SELECTED · P2 ≠ sélectionné · TB-00-04/05/TB-01-* ≠ DONE · TB-04-04 ≠ DONE · préparation LOT-IP-0C ≠ sélection ≠ exécution · estimation conversationnelle Neon ≠ plafond · aucun budget/seuil SELECTED · LOT-IP-0C DEFERRED NOT SELECTED NOT EXECUTED · LOT-D* NOT AUTHORIZED · memory ≠ A2 durable · aucun item DONE · Delivery NOT-CONSUMED · réserves ouvertes.

---

## 32. Verdict

**LOT-IP-0A DECISIONS APPLIED — LOT-IP-0B DECISIONS APPLIED —**
**PERSISTENCE A2 TECHNOLOGY SELECTION FULLY ARBITRATED —**
**FIVE TECHNOLOGY DECISIONS SELECTED —**
**POSTGRESQL SELECTED — NEON SELECTED — PG NODE-POSTGRES SELECTED —**
**NODE-PG-MIGRATE SELECTED — LD-A SELECTED —**
**LOT-IP-0C SELECTION PREPARATION EXECUTED —**
**LOT-IP-0C SELECTION DECISION PACK READY —**
**DOCUMENT 103 UPDATED — DOCUMENTS 119 AND 120 CREATED —**
**DOCUMENTS 104 TO 118 BYTE-IDENTICAL — DOCUMENT 121 ABSENT —**
**GRAPH 33/56 PRESERVED — PRIORITIES PRESERVED — NO ITEM DONE —**
**LOT-IP-0C DEFERRED — LOT-IP-0C NOT SELECTED — LOT-IP-0C NOT EXECUTED —**
**NO BUDGET, PLAN, REGION, CAP OR THRESHOLD SELECTED —**
**LOT-D1 TO LOT-D5 NOT AUTHORIZED —**
**DELIVERY NOT-CONSUMED —**
**READY FOR CHATGPT VALIDATION AND MORRIS LOT-IP-0C SELECTION ARBITRATION**


---

## 33. Prochaine gate candidate

```text
GO DECISIONS IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — ARBITRATE LOT-IP-0C SELECTION
```

Statut : **candidate uniquement — non consommée**.

Cette gate :
- arbitre la sélection du lot ;
- n’exécute pas automatiquement LOT-IP-0C ;
- ne sélectionne pas automatiquement les budgets ou seuils ;
- n’autorise pas LOT-D1 ;
- ne consomme pas Delivery.

**LOT-IP-0C SELECTION DECISION PACK READY — LOT-IP-0C NOT SELECTED — DELIVERY NOT CONSUMED**

---

# Diff RAW utile 103

```diff
--- .tmp-sfia-review/lot-ip-0c/103-before.md	2026-08-05 19:58:48
+++ projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md	2026-08-05 20:03:46
@@ -11,7 +11,11 @@
 **PG NODE-POSTGRES SELECTED —**
 **NODE-PG-MIGRATE SELECTED —**
 **LOCAL DEV TEST LD-A SELECTED —**
+**LOT-IP-0C SELECTION PREPARATION EXECUTED —**
+**LOT-IP-0C SELECTION DECISION PACK READY —**
 **LOT-IP-0C DEFERRED —**
+**LOT-IP-0C NOT SELECTED —**
+**LOT-IP-0C NOT EXECUTED —**
 **LOT-D1 TO LOT-D5 NOT AUTHORIZED —**
 **NO ITEM DONE —**
 **DELIVERY NOT-CONSUMED**
@@ -413,7 +417,36 @@
 Items DONE : **aucun**. Les cinq décisions sélectionnées n’impliquent aucune réalisation d’item.

 ---
+
+
+## 1duodecies. GO Morris — Prepare LOT-IP-0C Selection Decision Pack
+
+```text
+GO IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — PREPARE LOT-IP-0C SELECTION DECISION PACK
+```
+
+| Champ | Valeur |
+|---|---|
+| **Autorité** | Morris |
+| **Consommation** | 2026-08-05 19:52 CEST (+0200) / 17:52 UTC |
+| **Cycle** | Implementation Preparation — LOT-IP-0C Pre-Pilot FinOps Selection Decision Pack Preparation |
+| **Profil** | **Critical** |
+| **Portée** | Périmètre détaillé LOT-IP-0C · enjeux FinOps pré-pilote · options/critères/garde-fous · document 119 · Decision Pack 120 · mise à jour 103 |
+| **Non-effet** | LOT-IP-0C **NOT SELECTED** · LOT-IP-0C **NOT EXECUTED** · aucun budget/plafond/plan/région/seuil SELECTED · TB-04-04 **pas DONE** · LOT-D1 **NOT AUTHORIZED** · aucun compte/package/SQL/Docker · Delivery **NOT-CONSUMED** |
+| **Documents** | `119-assistant-sfia-native-openai-implementation-preparation-lot-ip-0c.md` · `120-assistant-sfia-native-openai-implementation-preparation-lot-ip-0c-decision-pack.md` |

+### Chaîne documentaire (post-préparation LOT-IP-0C)
+
+| Document | Rôle |
+|---|---|
+| **112–118** | Persistence A2 (historique / record 118) — **byte-identical** |
+| **119** | préparation LOT-IP-0C FinOps |
+| **120** | Decision Pack de sélection LOT-IP-0C |
+
+LOT-IP-0C reste **DEFERRED — NOT SELECTED — NOT EXECUTED — MORRIS ARBITRATION REQUIRED**.
+
+---
+
 ## 2. GO Morris

 ```text
@@ -1325,12 +1358,13 @@
 | **Priorité validée** | **P2** — VALIDATED BY MORRIS |
 | **Statut** | READY-FOR-DECISION |
 | **Dépendances** | TB-02-05 |
-| **Gate Morris** | décision Morris hard cap avant pilote |
+| **Gate Morris** | décision Morris hard cap avant pilote · sélection LOT-IP-0C en amont (120) |
 | **Source** | doc 102 FPI-14-HARD-CAP=DEFER-BEFORE-PILOT · R-TECH-FINOPS-HARD-01 |
 | **Réserves liées** | R-TECH-FINOPS-HARD-01 |
 | **Non-sélections liées** | hard cap FinOps, tarif |
 | **Delivery** | NOT AUTHORIZED |
 | **Relation main** | N/A code — Decision Pack documentaire · dépend de la preuve metering/soft cap (TB-02-05) sans bloquer TB-02-05 |
+| **Préparation LOT-IP-0C** | evidence documentaire **produced** (119/120) · **pas DONE** · aucun seuil SELECTED |

 **Objectif :** Préparer le Decision Pack hard cap FinOps (FPI-14) sans fixer de seuil.

@@ -1714,8 +1748,10 @@
 |---|---|
 | **Items** | TB-04-04 |
 | **Dépendance** | TB-02-05 |
-| **Statut** | **DEFERRED — NOT SELECTED — NOT EXECUTED — FUTURE MORRIS GATE REQUIRED** |
-| **Note** | Requis avant pilote · ne bloque pas l’exécution future de TB-02-05 |
+| **Statut** | **PREPARATION EXECUTED — SELECTION DECISION PACK READY — DEFERRED — NOT SELECTED — NOT EXECUTED — MORRIS ARBITRATION REQUIRED** |
+| **Préparation** | documents **119** / **120** produits · GO 19:52 CEST consommé |
+| **TB-04-04** | preparation evidence = **produced** · implementation = **not started** · DONE = **no** |
+| **Note** | Requis avant pilote · ne bloque pas l’exécution future de TB-02-05 · préparation ≠ sélection ≠ exécution |

 ### LOT-D1 à LOT-D5

@@ -1740,7 +1776,7 @@

 ## 23. Chemin critique

-**LOT-IP-0A** / **LOT-IP-0B** décisions appliquées → **cinq décisions technologiques Persistence A2 sélectionnées** → **application documentaire 118** → **préparation et arbitrage futurs de LOT-IP-0C** → paramètres d’implémentation bornés → **éventuelle sélection** LOT-D1 → GO Delivery distinct → implémentation future.
+**LOT-IP-0A** / **LOT-IP-0B** décisions appliquées → **cinq décisions technologiques Persistence A2 sélectionnées** → **application documentaire 118** → **LOT-IP-0C Decision Pack préparé (119/120)** → **arbitrage Morris sur sélection LOT-IP-0C** → éventuelle application de la décision → éventuelle exécution future LOT-IP-0C → paramètres FinOps pilotés → **éventuelle sélection** LOT-D1 → GO Delivery distinct.

 LOT-D1 **n’est pas** éligible, sélectionné ni autorisé sans décision Morris distincte.

@@ -1802,14 +1838,18 @@

 - **fait** (arbitrage 19:26 CEST · application 19:29 CEST) · Neon **SELECTED** · node-pg-migrate **SELECTED** · document 118 créé.

-### Vers préparation LOT-IP-0C (prochaine)
+### Vers préparation LOT-IP-0C

-- GO candidate `PREPARE LOT-IP-0C SELECTION DECISION PACK` ;
-- ne sélectionne ni n’exécute LOT-IP-0C ;
+- **fait** (GO consommé 2026-08-05 19:52 CEST) · documents **119** / **120** créés · LOT-IP-0C reste **NOT SELECTED** / **NOT EXECUTED**.
+
+### Vers arbitrage sélection LOT-IP-0C (prochaine)
+
+- GO candidate `ARBITRATE LOT-IP-0C SELECTION` ;
+- arbitre uniquement la sélection du lot ;
+- n’exécute pas automatiquement LOT-IP-0C ;
+- ne sélectionne pas automatiquement budgets ou seuils ;
 - n’autorise pas LOT-D1 ;
-- ne provisionne pas Neon ;
-- n’installe aucun package ;
-- Delivery reste NOT-CONSUMED.
+- ne consomme pas Delivery.

 ### Vers LOT-D1 (futur, non autorisé, non éligible auto)

@@ -1836,25 +1876,25 @@

 ## 28. Non-sélections

-**Classe SQL relationnelle managée = DECIDED** (STORE-01=A). **Patterns** DA-A / MIG-C / P1 = **DECIDED**. P2 = **CO-COMPATIBLE — NOT SELECTED**. **Cinq décisions Persistence A2 = SELECTED** : PostgreSQL · **Neon** · pg · **node-pg-migrate** · LD-A. Restent **NOT SELECTED** : région Neon · plan Neon · SLA · compte · projet · base · politique backup/restore/PITR · hard caps · version PostgreSQL · version pg · version node-pg-migrate · image Docker · configuration Docker · configuration CI · schéma physique · SQL · DDL · migrations · rôle migrator · secret manager · observability vendor · compute P1 concret · Supabase · RDS · Aurora · dbmate · LOT-IP-0C · LOT-D1 — **FUTURE DEDICATED DECISION OR PREPARATION GATE REQUIRED**.
+**Classe SQL relationnelle managée = DECIDED** (STORE-01=A). **Patterns** DA-A / MIG-C / P1 = **DECIDED**. P2 = **CO-COMPATIBLE — NOT SELECTED**. **Cinq décisions Persistence A2 = SELECTED** : PostgreSQL · **Neon** · pg · **node-pg-migrate** · LD-A. Restent **NOT SELECTED** : budget pilote · enveloppe mensuelle · budget OpenAI · budget Neon · région Neon · plan Neon · soft caps · hard stops · seuils · TTL · politiques de rétention · fréquence de revue · propriétaire opérationnel · modèles OpenAI futurs · SLA · compte · projet · base · politique backup/restore/PITR · version PostgreSQL · version pg · version node-pg-migrate · image Docker · configuration Docker · configuration CI · schéma physique · SQL · DDL · migrations · rôle migrator · secret manager · observability vendor · compute P1 concret · Supabase · RDS · Aurora · dbmate · LOT-IP-0C · LOT-D1 — **FUTURE DEDICATED DECISION OR PREPARATION GATE REQUIRED**.

 ---

 ## 29. Actions autorisées

-Maintenir 112–117 historiques · maintenir 118 comme record d’application · tracer l’état dans 103 · préparer Decision Pack LOT-IP-0C · publier le handoff.
+Maintenir 112–118 historiques · maintenir 119/120 comme préparation/Decision Pack · tracer l’état dans 103 · arbitrer sélection LOT-IP-0C · publier le handoff.

 ---

 ## 30. Actions interdites

-Réécrire 117 · provisionner Neon · choisir région/plan · installer pg ou node-pg-migrate · sélectionner une version npm · sélectionner P2 · configurer Docker/Compose · créer code, SQL, DDL, migration, package ou IaC · créer un compte/service · sélectionner ou exécuter LOT-IP-0C · sélectionner ou exécuter LOT-D1 à LOT-D5 · fermer une réserve · marquer un item DONE · Delivery · commit/push projet · PR/merge.
+Réécrire 117/118 · provisionner Neon · choisir région/plan · installer pg ou node-pg-migrate · sélectionner une version npm · sélectionner P2 · configurer Docker/Compose · créer code, SQL, DDL, migration, package ou IaC · créer un compte/service · sélectionner un budget/seuil sans arbitrage · sélectionner ou exécuter LOT-IP-0C sans gate · sélectionner ou exécuter LOT-D1 à LOT-D5 · fermer une réserve · marquer un item DONE · Delivery · commit/push projet · PR/merge.

 ---

 ## 31. Anti-claims

-Sélection documentaire ≠ installation · LD-A ≠ Docker configuré · PostgreSQL ≠ base créée · pg ≠ package installé · sélection documentaire ≠ installation · Neon SELECTED ≠ compte/base · node-pg-migrate SELECTED ≠ package · région/plan/version ≠ SELECTED · P2 ≠ sélectionné · TB-00-04/05/TB-01-* ≠ DONE · LOT-IP-0C DEFERRED · LOT-D* NOT AUTHORIZED · memory ≠ A2 durable · aucun item DONE · Delivery NOT-CONSUMED · réserves ouvertes.
+Sélection documentaire ≠ installation · LD-A ≠ Docker configuré · PostgreSQL ≠ base créée · pg ≠ package installé · Neon SELECTED ≠ compte/base · node-pg-migrate SELECTED ≠ package · région/plan/version ≠ SELECTED · P2 ≠ sélectionné · TB-00-04/05/TB-01-* ≠ DONE · TB-04-04 ≠ DONE · préparation LOT-IP-0C ≠ sélection ≠ exécution · estimation conversationnelle Neon ≠ plafond · aucun budget/seuil SELECTED · LOT-IP-0C DEFERRED NOT SELECTED NOT EXECUTED · LOT-D* NOT AUTHORIZED · memory ≠ A2 durable · aucun item DONE · Delivery NOT-CONSUMED · réserves ouvertes.

 ---

@@ -1865,12 +1905,16 @@
 **FIVE TECHNOLOGY DECISIONS SELECTED —**
 **POSTGRESQL SELECTED — NEON SELECTED — PG NODE-POSTGRES SELECTED —**
 **NODE-PG-MIGRATE SELECTED — LD-A SELECTED —**
-**DOCUMENT 103 UPDATED — DOCUMENT 118 CREATED —**
-**DOCUMENTS 104 TO 117 BYTE-IDENTICAL — DOCUMENT 119 ABSENT —**
+**LOT-IP-0C SELECTION PREPARATION EXECUTED —**
+**LOT-IP-0C SELECTION DECISION PACK READY —**
+**DOCUMENT 103 UPDATED — DOCUMENTS 119 AND 120 CREATED —**
+**DOCUMENTS 104 TO 118 BYTE-IDENTICAL — DOCUMENT 121 ABSENT —**
 **GRAPH 33/56 PRESERVED — PRIORITIES PRESERVED — NO ITEM DONE —**
-**LOT-IP-0C DEFERRED — LOT-D1 TO LOT-D5 NOT AUTHORIZED —**
+**LOT-IP-0C DEFERRED — LOT-IP-0C NOT SELECTED — LOT-IP-0C NOT EXECUTED —**
+**NO BUDGET, PLAN, REGION, CAP OR THRESHOLD SELECTED —**
+**LOT-D1 TO LOT-D5 NOT AUTHORIZED —**
 **DELIVERY NOT-CONSUMED —**
-**READY FOR CHATGPT VALIDATION AND MORRIS LOT-IP-0C PREPARATION DECISION**
+**READY FOR CHATGPT VALIDATION AND MORRIS LOT-IP-0C SELECTION ARBITRATION**


 ---
@@ -1878,18 +1922,16 @@
 ## 33. Prochaine gate candidate

 ```text
-GO IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — PREPARE LOT-IP-0C SELECTION DECISION PACK
+GO DECISIONS IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — ARBITRATE LOT-IP-0C SELECTION
 ```

 Statut : **candidate uniquement — non consommée**.

 Cette gate :
-- prépare un Decision Pack ;
-- ne sélectionne pas LOT-IP-0C ;
-- n’exécute pas LOT-IP-0C ;
+- arbitre la sélection du lot ;
+- n’exécute pas automatiquement LOT-IP-0C ;
+- ne sélectionne pas automatiquement les budgets ou seuils ;
 - n’autorise pas LOT-D1 ;
-- ne consomme pas Delivery ;
-- ne provisionne pas Neon ;
-- n’installe aucun package.
+- ne consomme pas Delivery.

-**PERSISTENCE A2 TECHNOLOGY SELECTION FULLY ARBITRATED — LOT-IP-0C PREPARATION CANDIDATE — DELIVERY NOT CONSUMED**
+**LOT-IP-0C SELECTION DECISION PACK READY — LOT-IP-0C NOT SELECTED — DELIVERY NOT CONSUMED**

```

---

# Fin Review Pack

review pack verdict : **complete**
