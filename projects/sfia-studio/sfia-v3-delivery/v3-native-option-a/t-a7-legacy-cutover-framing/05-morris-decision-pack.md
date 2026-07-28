# 05 — Morris Decision Pack

| Champ | Valeur |
|-------|--------|
| **Document** | `05-morris-decision-pack.md` |
| **Statut** | **FRAMING CANDIDATE — MORRIS VALIDATION REQUIRED** |
| **Décisions** | D-T-A7-F01…F14 — toutes **`NOT DECIDED`** |
| **T-A7** | **NOT OPEN** |
| **Autorité** | Morris uniquement — aucune décision consommée ici |

> Les recommandations Cursor/ChatGPT sont **explicites et non contraignantes**. Morris tranche.

---

## Registre

### D-T-A7-F01 — Validation du périmètre de framing T-A7

| Champ | Contenu |
|-------|---------|
| **Statut** | `NOT DECIDED` |
| **Question** | Le pack `t-a7-legacy-cutover-framing` et son périmètre (niveaux A only) sont-ils validés ? |
| **Options** | (1) ACCEPT · (2) ACCEPT WITH CHANGES · (3) REJECT · (4) DEFER |
| **Recommandation Cursor/ChatGPT** | (2) ACCEPT WITH CHANGES après corrections M01/M02 — puis ACCEPT si re-review PASS |
| **Impacts** | autorise la **re-review** puis, si PASS, un gate de **décision framing** ; n’ouvre pas T-A7 |
| **Dette** | faible |
| **Réversibilité** | haute |
| **Gate futur** | `GO RE-REVIEW T-A7 FRAMING PACK AFTER CORRECTIONS — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER` puis, si PASS, `GO DECIDE T-A7 FRAMING SCOPE AND OPTION A COMPLETION DEFINITIONS — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER` |

### D-T-A7-F02 — Framing vs delivery vs cutover

| Champ | Contenu |
|-------|---------|
| **Statut** | `NOT DECIDED` |
| **Question** | Les quatre niveaux A/B/C/D sont-ils la définition normative de T-A7 ? |
| **Options** | (1) ADOPT 4 niveaux · (2) ADOPT 3 niveaux (fusion B+C) · (3) REDEFINE |
| **Recommandation Cursor/ChatGPT** | (1) ADOPT 4 niveaux — réduit les confusions framing/open/delivery/cutover |
| **Impacts** | gates séparés obligatoires |
| **Dette** | cycles supplémentaires |
| **Réversibilité** | moyenne |
| **Gate futur** | re-review puis decide framing ; ensuite gates delivery/cutover **distincts** (non ouverts) |

### D-T-A7-F03 — Préconditions d’entrée en delivery

| Champ | Contenu |
|-------|---------|
| **Statut** | `NOT DECIDED` |
| **Question** | Quelles préconditions P0x sont obligatoires avant delivery T-A7 ? |
| **Options** | (1) Set minimal (P02, P03–P05, HARD reserves strategy, P17–P19 design) · (2) Set maximal (presque toutes) · (3) Custom |
| **Recommandation Cursor/ChatGPT** | (1) Set minimal documenté dans `02` §3 — éviter de bloquer delivery prep inutilement |
| **Impacts** | séquence post-framing |
| **Dette** | si trop minimal → reprise AT |
| **Réversibilité** | moyenne |
| **Gate futur** | `GO PREPARE T-A7 DELIVERY` (NOT CONSUMED / NOT PROPOSED as open) |

### D-T-A7-F04 — Définition T-A6 COMPLETE

| Champ | Contenu |
|-------|---------|
| **Statut** | `NOT DECIDED` |
| **Question** | La matrice T6-C01…C15 est-elle adoptée ? T-A6 COMPLETE exige-t-il T6-C11 (réserves) et T6-C15 (GO explicite) ? |
| **Options** | (1) ADOPT as-is · (2) ADOPT with memory justification only (relax C11 for U-M02) · (3) REQUIRE persistence for T-A6 COMPLETE · (4) REJECT |
| **Recommandation Cursor/ChatGPT** | (2) — D1–D5 + docs/CI + GO Morris ; accepter U-M02 OPEN **documenté** pour COMPLETE mémoire ; exiger traitement/acceptation R-M01 et C1–C4 |
| **Impacts** | clôture T-A6 vs product |
| **Dette** | U-M02 reporté |
| **Réversibilité** | moyenne |
| **Gate futur** | `GO DECLARE T-A6 COMPLETE` (ultérieur, distinct) |

### D-T-A7-F05 — Option A foundation complete

| Champ | Contenu |
|-------|---------|
| **Statut** | `NOT DECIDED` |
| **Question** | Confirmer que « foundation complete » = FD/FA/UX/Modeled/AT VALIDATED (déjà vrai) ? |
| **Options** | (1) CONFIRM · (2) REDEFINE |
| **Recommandation Cursor/ChatGPT** | (1) CONFIRM — ne pas confondre avec product COMPLETE |
| **Impacts** | vocabulaire |
| **Dette** | nulle si confirmé |
| **Réversibilité** | haute |
| **Gate futur** | inclus dans review framing |

### D-T-A7-F06 — Option A product complete

| Champ | Contenu |
|-------|---------|
| **Statut** | `NOT DECIDED` |
| **Question** | Que signifie Option A product complete (couche C) ? |
| **Options** | (1) A+B + T-A6 COMPLETE mémoire · (2) A+B+C avec API/UI · (3) A+B+C+F cutover inclus · (4) Custom |
| **Recommandation Cursor/ChatGPT** | (2) — produit opérable nécessite surfaces ; cutover (F) séparé |
| **Impacts** | roadmap UI/API |
| **Dette** | UI/API avant COMPLETE |
| **Réversibilité** | faible une fois communiqué |
| **Gate futur** | gate critères Option A |

### D-T-A7-F07 — Product complete vs production ready

| Champ | Contenu |
|-------|---------|
| **Statut** | `NOT DECIDED` |
| **Question** | Production ready (E) est-il requis pour product complete (C) ? |
| **Options** | (1) SEPARATE — E non requis pour C · (2) MERGE — C implique E · (3) STAGED labels |
| **Recommandation Cursor/ChatGPT** | (1) SEPARATE — évite inflation de COMPLETE |
| **Impacts** | IAM/RGPD/RUN hors chemin critique produit étroit |
| **Dette** | risque de sous-qualifier « produit » |
| **Réversibilité** | moyenne |
| **Gate futur** | inclus review framing |

### D-T-A7-F08 — Réserves obligatoires avant delivery

| Champ | Contenu |
|-------|---------|
| **Statut** | `NOT DECIDED` |
| **Question** | Quelles réserves doivent être CLOSED ou ACCEPTED avant delivery T-A7 ? |
| **Options** | (1) R-T-A3-1/2 + B5/R1 strategy + R-M01 · (2) Toutes OPEN · (3) Aucune (delivery prep only) |
| **Recommandation Cursor/ChatGPT** | (3) pour **delivery preparation** ; (1) avant **delivery code cutover-bound** |
| **Impacts** | parallélisation possible |
| **Dette** | si (3) trop long → dette technique |
| **Réversibilité** | moyenne |
| **Gate futur** | gate reserve arbitration |

### D-T-A7-F09 — Réserves obligatoires avant cutover

| Champ | Contenu |
|-------|---------|
| **Statut** | `NOT DECIDED` |
| **Question** | Quelles réserves bloquent le cutover ? |
| **Options** | (1) HARD + persistence/IAM/RGPD + MethodMode proofs · (2) HARD only · (3) Custom |
| **Recommandation Cursor/ChatGPT** | (1) — cutover sans persistence/IAM est un faux cutover |
| **Impacts** | retarde cutover |
| **Dette** | faible vs risque blast radius |
| **Réversibilité** | faible après cutover |
| **Gate futur** | `GO AUTHORIZE T-A7 CUTOVER` (ultérieur) |

### D-T-A7-F10 — Ordre persistence / IAM / RGPD

| Champ | Contenu |
|-------|---------|
| **Statut** | `NOT DECIDED` |
| **Question** | Quel ordre cadrer/décider persistence, IAM, RGPD/Evidence ? |
| **Options** | (1) Persistence+atomicité → IAM → RGPD/U-M02 · (2) IAM d’abord · (3) Parallèle borné · (4) Différer après UI |
| **Recommandation Cursor/ChatGPT** | (1) — R1/R-T-A3-2 d’abord ; IAM pour authority réelle ; RGPD lié Evidence vendor |
| **Impacts** | séquence post-framing |
| **Dette** | cycles AT/sécurité |
| **Réversibilité** | moyenne |
| **Gate futur** | `GO FRAME OPTION A PERSISTENCE, IAM AND RGPD FOUNDATIONS` |

### D-T-A7-F11 — API/UI avant cutover

| Champ | Contenu |
|-------|---------|
| **Statut** | `NOT DECIDED` |
| **Question** | Une API/UI Option A native est-elle requise avant cutover ? |
| **Options** | (1) OUI minimale · (2) NON si cutover technique headless · (3) OUI complète |
| **Recommandation Cursor/ChatGPT** | (1) — preuves MethodMode/badges/UX cutover sinon non démontrables |
| **Impacts** | delivery produit |
| **Dette** | si (2) : cutover invisible |
| **Réversibilité** | moyenne |
| **Gate futur** | gate product delivery |

### D-T-A7-F12 — Moment du hardening M1

| Champ | Contenu |
|-------|---------|
| **Statut** | `NOT DECIDED` |
| **Question** | Quand durcir approvals/strict/conversation resolution/bypass ? |
| **Options** | (1) Maintenant · (2) Avant delivery T-A7 · (3) Avant cutover/production · (4) Jamais |
| **Recommandation Cursor/ChatGPT** | (3) — NOT JUSTIFIED NOW pour framing ; REQUIRED BEFORE PRODUCTION |
| **Impacts** | friction PR |
| **Dette** | loose prolongé |
| **Réversibilité** | haute |
| **Gate futur** | gate hardening M1 |

### D-T-A7-F13 — Legacy history read-only

| Champ | Contenu |
|-------|--------|
| **Statut** | `NOT DECIDED` |
| **Question** | Quelle politique pour l’historique OPS1/v2.6 après cutover ? |
| **Options** | (1) Read-only ACL gated · (2) Archive offline only · (3) Purge après retention · (4) Keep writable legacy |
| **Recommandation Cursor/ChatGPT** | (1) — aligné AT-11 ; interdire (4) |
| **Impacts** | sécurité / RGPD |
| **Dette** | ACL à construire |
| **Réversibilité** | faible après purge |
| **Gate futur** | inclus architecture cutover |

### D-T-A7-F14 — Validation du prochain cycle

| Champ | Contenu |
|-------|--------|
| **Statut** | `NOT DECIDED` |
| **Question** | Quel est le prochain cycle après correction du framing ? |
| **Options** | (1) Re-review pack corrigé · (2) Décision Morris framing/définitions après PASS · (3) Arbitrage HARD/réserves · (4) Persistence/IAM/RGPD · (5) Delivery prep T-A7 immédiat |
| **Recommandation Cursor/ChatGPT** | (1) puis (2) — **ne pas** sauter à (5) ; (3)/(4) après définitions |
| **Impacts** | trajectoire ; empêche delivery prématuré |
| **Dette** | nulle si suivi |
| **Réversibilité** | haute |
| **Gate futur** | `GO RE-REVIEW T-A7 FRAMING PACK AFTER CORRECTIONS — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER` ; ensuite `GO DECIDE T-A7 FRAMING SCOPE AND OPTION A COMPLETION DEFINITIONS — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER` |

---

## Séquence candidate après framing (non validée)

| # | Étape | Cycle SFIA | Profil | Dépendances | Fichiers probables | Gate | Stop | Preuve |
|---|-------|------------|--------|-------------|--------------------|------|------|--------|
| 1 | Re-review pack corrigé puis décision Morris framing + critères | 9 / 1 / 15 | Critical | ce pack | pack T-A7 | `GO RE-REVIEW…` puis `GO DECIDE…` | reject → stop · **pas delivery** | décisions F01–F07 |
| 2 | Arbitrage autorité / atomicité / réserves | 2 / 3 / 6 | Critical | F08 | docs décision · éventuellement T-A3/T-A1 | reserve arbitration | pas de runtime cutover | ACCEPTED/CLOSED plan |
| 3 | Architecture persistence / IAM / RGPD | 6 / 10 | Critical | F10 | AT docs · threat/privacy | persistence/IAM/RGPD framing | pas DB live | ADR candidats |
| 4 | Préparation delivery T-A7 | 1 / 6 | Critical | F03 | backlog · tests candidats | prepare delivery | pas code cutover | pack prep |
| 5 | Delivery incrémental sous hold | 4 / 9 | Critical | F03/F08 | `app/**` boundaries · flags | delivery GO | pas activation | PRs + CI |
| 6 | QA / sécurité / RUN | 9 / 10 / 12 | Critical | delivery | tests E2E · RUN pack | QA/RUN GO | pas cutover | preuves |
| 7 | Décision cutover | 1 / 15 | Critical | F09 | decision pack cutover | authorize cutover | rollback non prêt → stop | GO cutover |
| 8 | Cutover contrôlé | 7 / 12 | Critical | F09/F11/F13 | MethodMode/method/**/OPS1 | execute cutover | incident → hold | boundary proofs |
| 9 | Post-merge / post-cutover | 9 / 15 | Critical | cutover | review docs | post-cutover review | — | review COMPLETE |
| 10 | Capitalisation / cleanup | 15 | Standard | post | REX · branches | cleanup GO | — | cleanup evidence |

---

## Anti-claims

Aucune décision D-T-A7-F* n’est **DECIDED**. Aucune recommandation n’est un GO. Aucune ouverture T-A7. Aucune clôture Option A. Aucune réserve fermée.

---

## Verdict

`MORRIS DECISION PACK T-A7 FRAMING READY FOR RE-REVIEW — ALL DECISIONS NOT DECIDED — NEXT GATE CANDIDATE NOT CONSUMED`
