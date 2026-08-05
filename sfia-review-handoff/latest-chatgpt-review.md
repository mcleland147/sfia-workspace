# ChatGPT Review Pack — FULL

## Meta

| Champ | Valeur |
|---|---|
| **Date locale** | 2026-08-05 18:59:52 CEST (+0200) |
| **Date UTC** | 2026-08-05 16:59:52 UTC |
| **Niveau** | Full |
| **GO** | `VALIDATE REMAINING PERSISTENCE A2 MANAGED STORE AND MIGRATION TOOL OPTIONS` |
| **Consommation** | 2026-08-05 18:45 CEST / 16:45 UTC |
| **Cycle** | 6 — Architecture technique · Implementation Preparation — Remaining Options Targeted Validation |
| **Profil** | Critical |
| **Typologie** | EVOL / DOC |
| **CKC** | recherché · contrat détaillé absent · fallback méthode SFIA v2.6 · aucune autorité sélection/Delivery |
| **Branche initiale** | `decisions/sfia-studio-assistant-sfia-native-openai-persistence-a2-technology-selection` |
| **Branche validation** | `implementation-preparation/sfia-studio-assistant-sfia-native-openai-persistence-a2-remaining-options-validation` |
| **HEAD** | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| **Delivery** | NOT-CONSUMED |

## Interprétation canonique

Deux validations ciblées indépendantes · preuves · recommandations candidates · Decision Pack 117 · **aucune** sélection fournisseur/outil · **aucune** installation · LOT-D1 non autorisé · Delivery NOT-CONSUMED.

Targeted validation ≠ technology selection · Recommendation candidate ≠ décision Morris · Decision-ready ≠ adoptée.

## Local Git Truth initiale

| Champ | Valeur |
|---|---|
| Date | 2026-08-05 18:52:07 CEST / 16:52:07 UTC |
| HEAD / origin/main / merge-base | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| ahead/behind | 0 / 0 |
| upstream | aucun |
| 115–118 | absents |
| handoff tip / blob | `a7833b94d7ee1b0178b5d2eb885c550748e6d2b0` / `d420417a07a9b185e9b37e2b43c92a9cbb402791` |

## Hashes entrants 103–114

| Doc | SHA-256 | Lignes |
|---|---|---|
| 103 | `19b1736ae548dc046640b46c41ef6c413d62ad7c6c48f15d1e917ee19f26dbd0` | 1787 |
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

## Hashes finaux

| Doc | SHA-256 | Lignes |
|---|---|---|
| 103 | `d147e44447a9dc261c85c358e6bc8cb879ae42b1238ca3452cc089bab030b0b6` | 1832 |
| 115 | `2e814ccfd6c735efaaae6193b08b555bd9a9d478927b06b78c5d78c67c61944b` | 533 |
| 116 | `9e47ea245c1488f0367260975430a33b58339ea57e113da9ea6262b8ae602261` | 442 |
| 117 | `3bf6adc9d7e53ffe3f6a3a82fb41f6763f300488df8dc33e8b49fcb90bbe3d68` | 260 |
| 118 | ABSENT | — |
| 104–114 | byte-identical | — |

## Sources Git / méthode

Template cycle · routing · Architecture technique · operating model · Review Pack/Handoff · publisher · docs 103/107/111/112/113/114 · inventaire app (pas de pg/Docker/migrations).

## Registre sources externes managed store

Voir document 115 §13 intégral (ci-dessous). Consultation 2026-08-05 18:55 CEST.

## Registre sources externes migration tool

Voir document 116 §13–14 intégral. Versions : dbmate **v2.34.1** `ddd00ff09d2034168072bc7870f815f9e6f1594d` · node-pg-migrate **v9.0.0** `0d60e94fd2df1770f6578d8624a2ad7def22d35e`.

## Critères éliminatoires

**Store :** pas PG protocole · pas export · pas région Europe · pas backup · ORM obligatoire · pas limites connexions.

**Migration :** pas versioning · pas PG · aucun lock **et** aucun runner exclusif possible · ORM · licence bloquante.

Résultat : **aucune élimination** ; dépriorisations Aurora/Supabase (store) et dbmate-sans-lock-natif (migration).

## Décisions déjà SELECTED (non réouvertes)

PostgreSQL · pg · LD-A · STORE-01=A · DA-A · MIG-C · P1 · P2 NOT SELECTED.

## Decision-readiness et recommandations

| ID | Readiness | Candidate | Alternative |
|---|---|---|---|
| MANAGED-STORE-01 | VALIDATION COMPLETE WITH RESERVES — READY FOR MORRIS ARBITRATION — **NOT DECIDED** | Neon | RDS PostgreSQL |
| MIGRATION-TOOL-01 | VALIDATION COMPLETE WITH RESERVES — READY FOR MORRIS ARBITRATION — **NOT DECIDED** | node-pg-migrate | dbmate + runner exclusif |

## Locking concurrent — résultat

- dbmate v2.34.1 : lock **ABSENT** · PR #596 open non mergée = gap.
- node-pg-migrate v9.0.0 : lock **PRESENT** (`pg_try_advisory_lock` / `pg_advisory_lock`) — SOURCE-CODE VALIDATION commit `0d60e94f…`.

## Matrices / FinOps / GreenOps / RGPD / RSSI / RUN / réversibilité

Détail complet dans documents 115 et 116 (inclus ci-dessous). FinOps horodaté 2026-08-05 18:55 CEST · USD · plans publics · tarifs variables · pas de projection fausse. Conclusions juridiques = EXTERNAL VALIDATION REQUIRED.

## Contrôles

| Contrôle | Résultat |
|---|---|
| 104–114 byte-identical | PASS |
| 118 absent | PASS |
| Graphe 33/56 · P0=6 P1=13 P2=13 P3=1 | PASS |
| Aucun item DONE | PASS |
| LOT-D1 NOT AUTHORIZED | PASS |
| Pas code/package/Docker/SQL | PASS |
| Anti-stub actifs | PASS |
| PostgreSQL/pg/LD-A préservés | PASS |
| A2/DA-A/MIG-C/P1 · P2 NOT SELECTED | PASS |

## Document 115 complet

# SFIA Studio — Assistant SFIA natif OpenAI — Persistence A2 Managed Store Targeted Validation

## 1. Statut et anti-claims

**MANAGED STORE TARGETED VALIDATION EXECUTED —**
**NEON VALIDATED —**
**SUPABASE POSTGRESQL VALIDATED —**
**AMAZON RDS POSTGRESQL VALIDATED —**
**AMAZON AURORA POSTGRESQL VALIDATED —**
**DECISION READINESS ASSESSED —**
**RECOMMENDATION CANDIDATE ONLY —**
**D-ASST-A2-MANAGED-STORE-01 NOT DECIDED —**
**NO PROVIDER, REGION, PLAN OR ACCOUNT SELECTED —**
**LOT-D1 NOT AUTHORIZED —**
**DELIVERY NOT-CONSUMED**

### Anti-claims

| Anti-claim | Statut |
|---|---|
| Targeted validation ≠ technology selection | vrai |
| Recommendation candidate ≠ décision Morris | vrai |
| Decision-ready ≠ décision adoptée | vrai |
| Validation documentaire ≠ provisioning / PoC | vrai |
| Neon / Supabase / RDS / Aurora ≠ SELECTED | vrai |
| Région / plan / compte ≠ sélectionnés | vrai |
| Aucun item DONE | vrai |

| Champ | Valeur |
|---|---|
| **Document** | `projects/sfia-studio/115-assistant-sfia-native-openai-persistence-a2-managed-store-targeted-validation.md` |
| **Rôle** | Validation ciblée indépendante des options de store PostgreSQL managé |
| **Décision** | `D-ASST-A2-MANAGED-STORE-01` reste **NOT DECIDED** |
| **Delivery** | NOT-CONSUMED |

---

## 2. GO Morris exact

```text
GO IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — VALIDATE REMAINING PERSISTENCE A2 MANAGED STORE AND MIGRATION TOOL OPTIONS
```

Consommation : **2026-08-05 18:45 CEST (+0200) / 16:45 UTC**.

---

## 3. Horodatage CEST et UTC

| Champ | Valeur |
|---|---|
| **GO consommé** | 2026-08-05 18:45 CEST / 16:45 UTC |
| **Consultation sources** | 2026-08-05 18:55 CEST (+0200) / 16:55 UTC |
| **Rédaction Cursor** | 2026-08-05 19:00 CEST (+0200) / 17:00 UTC |

---

## 4. Cycle / profil / typologie / blocs

| Champ | Valeur |
|---|---|
| **Type** | 6 — Architecture technique |
| **Mode** | Implementation Preparation — Persistence A2 Remaining Options Targeted Validation (volet managed store) |
| **Profil** | **Critical** |
| **Typologie** | EVOL / DOC |
| **Blocs activés** | architecture technique/data · RSSI · RGPD technique · FinOps · GreenOps · performance · DevOps (contraintes) · RUN · backup/restore · réversibilité · traçabilité · garde-fous |
| **Blocs désactivés** | code · package · SQL · DDL · migration exécutable · Docker · CI · compte · provisioning · secrets · IaC · Delivery · LOT-D1 |

---

## 5. Autorité Morris

Morris est l’unique autorité de sélection. Cursor produit des preuves et une **recommandation candidate** uniquement.

---

## 6. Sources et hiérarchie

1. Git `origin/main` = `8dc54db0069eed78a8d8930cc2b035450ab56ad1` ;
2. GO 18:45 CEST ;
3. Handoff tip `a7833b94…` / blob `d420417a…` ;
4. documents **114** (arbitrage partiel) · **113** · **112** · **111** · **107** · **103** ;
5. sources primaires fournisseur (registre §13) ;
6. inventaire lecture seule : aucun driver PostgreSQL, Docker ABSENT, migrations ABSENTES.

---

## 7. Local Git Truth initiale

| Champ | Valeur |
|---|---|
| **Date** | 2026-08-05 18:52:07 CEST / 16:52:07 UTC |
| **Branche initiale** | `decisions/sfia-studio-assistant-sfia-native-openai-persistence-a2-technology-selection` |
| **Branche validation** | `implementation-preparation/sfia-studio-assistant-sfia-native-openai-persistence-a2-remaining-options-validation` |
| **HEAD / origin/main / merge-base** | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| **Ahead / behind** | 0 / 0 |
| **Upstream** | aucun |
| **115–118 avant** | absents |

---

## 8. Hashes entrants

| Doc | SHA-256 | Lignes |
|---|---|---|
| 103 | `19b1736ae548dc046640b46c41ef6c413d62ad7c6c48f15d1e917ee19f26dbd0` | 1787 |
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

---

## 9. Décisions non réouvrables

STORE-01=A · DA-A · MIG-C · P1 · PostgreSQL SELECTED · pg SELECTED · LD-A SELECTED · P2 NOT SELECTED.

---

## 10. Question de validation

Les options Neon, Supabase PostgreSQL, Amazon RDS for PostgreSQL et Amazon Aurora PostgreSQL-Compatible peuvent-elles soutenir A2 / PostgreSQL / pg / MIG-C / P1 avec un niveau de preuve suffisant pour un arbitrage Morris, sans sélectionner fournisseur, région, plan ni compte ?

---

## 11. Critères éliminatoires

Avant recherche, une option est **éliminée** si elle :

1. n’offre pas un accès PostgreSQL protocole standard compatible `pg` ;
2. interdit `pg_dump` / export logique vers PostgreSQL standard ;
3. n’a **aucune** région Europe documentée ;
4. ne permet **aucune** voie backup/restore utilisable pour une gate MIG-C ;
5. impose un ORM ou un driver exclusif incompatible DA-A ;
6. ne documente aucune limite de connexions ou pooling pour un compute P1 à connexions courtes.

**Aucune option de la shortlist n’est éliminée** après validation. Des **dépriorisations** et réserves s’appliquent.

---

## 12. Méthode

1. Extraire critères ouverts de 112/113/114 ;
2. fixer critères éliminatoires ;
3. consulter sources primaires horodatées ;
4. évaluer chaque fournisseur sur 12 dimensions ;
5. matrices homogènes ;
6. distinguer fait / observation / inférence / gap / réserve / recommandation ;
7. statut decision-readiness **sans SELECTED**.

---

## 13. Registre complet des sources

Consultation : **2026-08-05 18:55 CEST (+0200) / 16:55 UTC**.

| ID | Titre | Éditeur | URL | Affirmation supportée | Confiance | Limite |
|---|---|---|---|---|---|---|
| S-NEON-REG | Regions | Neon | https://neon.com/docs/introduction/regions | AWS EU Frankfurt + London ; région fixe à la création | haute | Azure déprécié |
| S-NEON-POOL | Connection pooling | Neon | https://neon.com/docs/connect/connection-pooling | PgBouncer transaction mode ; 10k clients ; direct pour migrations | haute | limites selon CU |
| S-NEON-SEC | Security overview | Neon | https://neon.com/docs/security/security-overview | TLS ; AES-256 rest ; IP allow Scale ; PrivateLink org | haute | IP allow pas Free/Launch |
| S-NEON-BK | Backups | Neon | https://neon.com/docs/manage/backups | PITR history + pg_dump | haute | fenêtre selon plan |
| S-NEON-PRICE | Pricing | Neon | https://neon.com/pricing | CU-hour · storage · restore · egress | moyenne | tarifs variables |
| S-NEON-PLAN | Plans | Neon | https://neon.com/docs/introduction/plans | SLA uptime Scale only | haute | — |
| S-NEON-SLA | SLA | Neon | https://neon.com/sla | Compute Endpoints ; Scale/Business | haute | hors APIs |
| S-NEON-DPA | DPA PDF | Neon | https://neon.com/pdf/DPA.pdf | DPA disponible | haute | analyse juridique EXTERNAL |
| S-NEON-SUB | Subprocessors | Neon | https://neon.com/subprocessors | AWS/Azure/Grafana/Salesforce ; maj 16 Apr 2026 | haute | transferts US possibles |
| S-SB-REG | Regions | Supabase | https://supabase.com/docs/guides/platform/regions | EU specific + general Europe | haute | Europe général ≠ UE seule |
| S-SB-GDPR | GDPR | Supabase | https://supabase.com/docs/guides/security/gdpr-compliance | résidence · DPA | haute | conformité app = shared |
| S-SB-CONN | Connecting | Supabase | https://supabase.com/docs/guides/database/connecting-to-postgres | Direct / Supavisor / dedicated PgBouncer | haute | IPv4 add-on |
| S-SB-BK | Backups | Supabase | https://supabase.com/docs/guides/platform/backups | daily + PITR add-on ~$100/7j | haute | downtime restore |
| S-SB-PRICE | Pricing | Supabase | https://supabase.com/pricing | plans + PITR add-on | moyenne | variables |
| S-RDS-LIM | Limits | AWS | https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html | max_connections formule mémoire | haute | — |
| S-RDS-PIT | PITR | AWS | https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIT.html | restore to new instance ; rétention jusqu’à 35j | haute | — |
| S-RDS-SLA | RDS SLA | AWS | https://aws.amazon.com/rds/sla/ | Multi-AZ 99.95% | haute | crédits service |
| S-AUR-SV2 | Serverless v2 | AWS | https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html | ACU · Multi-AZ · RDS Proxy | haute | — |
| S-AUR-PRICE | Aurora pricing | AWS | https://aws.amazon.com/rds/aurora/pricing/ | ACU/s · I/O · storage | moyenne | région-dependent |
| S-AUR-SLA | Aurora SLA | AWS | https://aws.amazon.com/rds/aurora/sla/ | Multi-AZ jusqu’à 99.99% (crédits) | haute | exclusions |

---

## 14. Neon — profil

**Fait :** PostgreSQL managé serverless avec protocole Postgres standard, branching, compute autoscaling, pooler intégré.

**Versions :** support multi-versions Postgres documenté côté Neon (calendrier exact = EXTERNAL VALIDATION REQUIRED pour version majeure cible encore NOT SELECTED).

**Compatibilité pg :** protocole standard · connexion directe et pooled.

**Export :** `pg_dump` / `pg_restore` documentés (S-NEON-BK).

**Lock-in :** stockage/compute propriétaires Neon · SQL standard exportable · branching propriétaire.

---

## 15. Neon — régions et résidence

**Fait (S-NEON-REG) :** `aws-eu-central-1` (Frankfurt) · `aws-eu-west-2` (London) · région **immuable** après création.

**Observation :** London = UK (adequacy GDPR possible) ≠ État membre UE ; Frankfurt = UE.

**RGPD :** DPA PDF + subprocessors listés (AWS/Azure US vendors possibles) → **EXTERNAL VALIDATION REQUIRED** pour transfert/SCC/résidence exacte.

**Aucune région sélectionnée.**

---

## 16. Neon — sécurité

TLS requis · AES-256 rest · proxy anti-bruteforce · IP Allow sur Scale · Private Networking (PrivateLink) comptes Organization · rôles Postgres · rotation password documentée.

**Aucun service « sécurisé par défaut »** : responsabilité client pour secrets, allowlists, least privilege.

---

## 17. Neon — connexions et pooling

PgBouncer **transaction mode** · `max_client_conn=10000` · `default_pool_size=0.9×max_connections` · `max_connections` selon CU (ex. 1 CU ≈ 419).

**Migrations / pg_dump / replication / SET / session advisory locks :** connexion **directe** (non-pooler) obligatoire (S-NEON-POOL).

**Alignement P1 :** pooled pour compute éphémère à connexions courtes · direct pour runner MIG-C.

---

## 18. Neon — HA / SLA

Multi-AZ storage annoncé sur plans · SLA uptime **Scale** sur Compute Endpoints (S-NEON-SLA / S-NEON-PLAN) · hors APIs.

**SLA marketing ≠ architecture** : RPO/RTO opérationnels restent à valider après choix de plan.

---

## 19. Neon — backup / restore / PITR

Instant restore / history window : Free 6h · Launch jusqu’à 7j · Scale jusqu’à 30j (S-NEON-PRICE / FAQs) · `pg_dump` pour export hors plateforme.

**MIG-C :** gate backup/restore possible via PITR + export logique · tests de restauration = EXTERNAL VALIDATION REQUIRED.

---

## 20. Neon — FinOps

Consultation : **2026-08-05 18:55 CEST (+0200) — devises USD — plans publics — tarifs variables — aucune projection précise** · région non sélectionnée · USD.

Launch : compute ~$0.106/CU-hour · storage ~$0.35/GB-month · instant restore ~$0.20/GB-month · egress au-delà inclus.

Scale : compute ~$0.222/CU-hour · SLA/compliance.

Scale-to-zero : Free/Launch après ~5 min ; configurable Scale.

**Hard caps / budget alerts :** mécanismes plateforme = EXTERNAL VALIDATION REQUIRED · risque facture non bornée si autoscaling sans plafond applicatif (réserve FinOps KEEP-OPEN).

---

## 21. Neon — réversibilité

Export `pg_dump` · restore ailleurs · migrations SQL portables · perte des branches Neon · coût/délai sortie = EXTERNAL VALIDATION REQUIRED.

---

## 22. Neon — gaps et réserves

| Gap / réserve | Qualification |
|---|---|
| Version majeure Postgres exacte | NOT SELECTED / EXTERNAL |
| Analyse juridique DPA/transferts | EXTERNAL VALIDATION REQUIRED |
| Hard cap FinOps applicatif | KEEP-OPEN |
| Preuve restore drill | EXTERNAL |
| Private networking (org only) | réserve sécurité |

---

## 23. Supabase PostgreSQL — dimensions complètes

### Profil
PostgreSQL managé au sein d’une plateforme (Auth/Storage/Realtime). Accès Postgres direct documenté. Compatibilité `pg` via connexion directe.

### Régions / résidence
Régions spécifiques EU : `eu-central-1` Frankfurt · `eu-west-1` Ireland · `eu-west-3` Paris · `eu-north-1` Stockholm · aussi `eu-west-2` London · `eu-central-2` Zurich (S-SB-REG). Avertissement officiel : grouping « Europe » peut inclure UK/CH (S-SB-GDPR).

### Sécurité
Shared responsibility · DPA disponible · IP/network controls selon plan · credentials projet · **pas « sécurisé par défaut »**.

### Connexions / P1
Direct : migrations/`pg_dump` · Shared pooler Supavisor transaction `:6543` / session `:5432` · Dedicated PgBouncer paid · IPv4 add-on possible (S-SB-CONN). Limites connexions directes plan-dependent (souvent ~60 sur Free/Pro selon sources secondaires — **confirmer plan exact = EXTERNAL**).

### HA / SLA
Disponibilité plateforme documentée commercialement · SLA contractuel Enterprise-oriented = EXTERNAL VALIDATION REQUIRED.

### Backup / PITR
Daily backups Pro 7j / Team 14j / Enterprise custom · PITR add-on ~$100/mois pour 7j · jusqu’à 28j (~$400) · restore avec downtime (S-SB-BK).

### FinOps
Consultation **2026-08-05 18:55 CEST (+0200) — devises USD — plans publics — tarifs variables — aucune projection précise** · Pro disk 8 GB inclus puis $/GB · PITR add-on significatif · branching $/h · risque stack Auth+DB si seul Postgres requis.

### Branching
Database branching payant · optionnel · **non requis** pour LD-A (Docker local).

### Réversibilité
`pg_dump` / CLI dump · metadata Storage non incluse dans DB backup · lock-in plateforme si Auth/Storage utilisés (hors scope Assistant si DB-only).

### Gaps
PITR coût · connexions limitées sans pooler · surface plateforme plus large que besoin SQL pur · SLA public moins clair que RDS.

---

## 24. Amazon RDS PostgreSQL — dimensions complètes

### Profil
PostgreSQL **standard** managé AWS · moteur proche du communautaire · protocole `pg` natif · export `pg_dump` / snapshots.

### Régions / résidence
Toutes régions AWS Europe majeures (Frankfurt, Ireland, Paris, London, Stockholm, Milan, Spain, Zurich, etc.). Résidence = région AWS choisie. **Aucune région sélectionnée.**

### Sécurité
VPC · security groups · IAM auth optionnelle · Secrets Manager · chiffrement KMS · audit CloudTrail/CloudWatch · certifications AWS. Responsabilité client réseau/IAM.

### Connexions / P1
`max_connections` = `LEAST(DBInstanceClassMemory/9531392, 5000)` (S-RDS-LIM) · **RDS Proxy** add-on pour pooling serverless (coût séparé) · migrations via connexion directe recommandée.

### HA / SLA
Multi-AZ DB Instance/Cluster · SLA **99.95%** Multi-AZ (S-RDS-SLA) · Single-AZ 99.5%.

### Backup / PITR
Automated backups · rétention jusqu’à **35 jours** · PITR vers **nouvelle** instance (S-RDS-PIT) · snapshots manuels · AWS Backup.

### FinOps
Consultation **2026-08-05 18:55 CEST (+0200) — devises USD — plans publics — tarifs variables — aucune projection précise** · instance-hour · storage · Multi-AZ ≈ ×2 compute · Proxy séparé · **pas** de scale-to-zero natif · minimum mensuel selon classe · Pricing Calculator EXTERNAL pour région exacte.

### Branching
Pas de branching Neon-like · environnements = instances/clones séparés (coût).

### Réversibilité
Haute (PostgreSQL standard) · sortie vers autre PG via dump/replication.

### Gaps
Ops overhead · cold-start inexistant mais idle coûteux · Proxy requis pour P1 optimal · GreenOps moins favorable sans right-sizing.

---

## 25. Amazon Aurora PostgreSQL — dimensions complètes

### Profil
**PostgreSQL-Compatible** (pas PostgreSQL storage-engine identique) · protocole compatible `pg` · fonctionnalités propriétaires (storage Aurora, Global Database).

### Régions
Régions AWS Europe larges · Global Database = réplication inter-région (transferts = EXTERNAL juridique).

### Sécurité
Similaire RDS (VPC/KMS/IAM) · responsabilités partagées AWS.

### Connexions / P1
Serverless v2 ACU · scale granulaire · **RDS Proxy** pour pooling (S-AUR-SV2) · cold starts/scale-down latence documentée qualitativement.

### HA / SLA
Multi-AZ cluster · SLA Multi-AZ jusqu’à **99.99%** (crédits) (S-AUR-SLA) · plus élevé que RDS Multi-AZ 99.95%.

### Backup / PITR
Continuous backup · rétention jusqu’à 35j · restore new cluster.

### FinOps
ACU/seconde · storage · I/O (Standard vs I/O-Optimized) · Proxy · consultation **2026-08-05 18:55 CEST (+0200) — devises USD — plans publics — tarifs variables — aucune projection précise** · peut descendre bas mais **pas** un free tier Neon · risque I/O variable.

### Lock-in
Plus élevé que RDS vanilla (engine storage propriétaire) · dump SQL portable · features Aurora non portables.

### Gaps
Compatibilité « wire » ≠ identité moteur · lock-in · complexité tarification I/O.

---

## 26. Matrice comparative homogène

| Critère | Neon | Supabase PG | RDS PG | Aurora PG |
|---|---|---|---|---|
| Postgres protocole + pg | oui | oui | oui | compatible oui |
| Export pg_dump | oui | oui | oui | oui |
| Région EU documentée | Frankfurt + London | nombreuses | nombreuses | nombreuses |
| Pooler intégré P1 | PgBouncer natif | Supavisor + PgBouncer paid | RDS Proxy add-on | RDS Proxy add-on |
| Migrations = direct | documenté | documenté | pratique | pratique |
| PITR | inclus selon plan | add-on payant | inclus jusqu’à 35j | inclus jusqu’à 35j |
| SLA public | Scale Compute | EXTERNAL | Multi-AZ 99.95% | Multi-AZ jusqu’à 99.99% |
| Scale-to-zero | oui (plans) | pause Free only | non natif | ACU bas possible |
| Branching | natif | add-on | non | non |
| Lock-in relatif | moyen | moyen-élevé (plateforme) | faible | élevé |
| Fit LD-A (Docker local) | indépendant | indépendant | indépendant | indépendant |

---

## 27. Matrice A2 / DA-A / MIG-C / P1 / LD-A

| Pattern | Neon | Supabase | RDS | Aurora |
|---|---|---|---|---|
| A2 external durable | oui | oui | oui | oui |
| DA-A SQL manuel + pg | oui | oui | oui | oui |
| MIG-C backup gate | PITR+dump | daily/PITR+dump | PITR+snapshots | PITR |
| MIG-C runner séparé | direct endpoint | direct | endpoint/Proxy off | endpoint/Proxy off |
| P1 short connections | pooler natif | pooler | Proxy | Proxy |
| LD-A | Docker local ; branche distante **facultative** (Neon/Supabase) | idem | clone instance | clone |

---

## 28. Matrice RGPD / RSSI

| Thème | Neon | Supabase | RDS | Aurora |
|---|---|---|---|---|
| Pin région UE | Frankfurt | eu-central-1 etc. | eu-* | eu-* |
| DPA | PDF officiel | portail legal | AWS DPA | AWS DPA |
| Subprocessors | liste publique | liste publique | AWS | AWS |
| Chiffrement | TLS + AES-256 | TLS + platform | TLS + KMS | TLS + KMS |
| Réseau privé | PrivateLink org | selon plan | VPC natif | VPC natif |
| Conclusion juridique | **EXTERNAL VALIDATION REQUIRED** pour les quatre | idem | idem | idem |

---

## 29. Matrice FinOps

| Thème | Neon | Supabase | RDS | Aurora |
|---|---|---|---|---|
| Modèle | CU-hour + storage | plan + disk + add-ons | instance-hour | ACU + storage + I/O |
| PITR cost | history GB | ~$100/7j | inclus rétention | inclus |
| Pooling cost | inclus | inclus / dedicated paid | Proxy séparé | Proxy séparé |
| Idle cost | scale-to-zero | pause Free ; Pro always-on | toujours | bas ACU possible |
| Hard cap | EXTERNAL | EXTERNAL | budgets AWS | budgets AWS |
| Consultation | 2026-08-05 18:55 CEST (+0200) — devises USD — plans publics — tarifs variables — aucune projection précise | idem | idem | idem |

---

## 30. Matrice RUN readiness

| Thème | Neon | Supabase | RDS | Aurora |
|---|---|---|---|---|
| Métriques | console + OTel/Datadog | dashboard | CloudWatch | CloudWatch/PI |
| Status page | Neon status | Supabase status | AWS Health | AWS Health |
| Restore runbook | docs PITR/dump | docs + downtime | docs PITR | docs PITR |
| Support | selon plan | selon plan | AWS Support | AWS Support |

---

## 31. Matrice réversibilité

| Thème | Neon | Supabase | RDS | Aurora |
|---|---|---|---|---|
| Sortie SQL standard | haute | haute (DB) | très haute | haute (SQL) / faible (storage) |
| Dépendances proprio | branching/compute | plateforme | faible | storage Aurora |
| Coût sortie | EXTERNAL | EXTERNAL | faible | moyen |

---

## 32. Options éliminées ou dépriorisées

**Éliminées :** aucune (critères éliminatoires non déclenchés).

**Dépriorisées :**
- **Aurora** — lock-in storage + complexité I/O sans besoin de 99.99% immédiat ;
- **Supabase** — surface plateforme et PITR payant si seul besoin = Postgres managé ;
- **RDS** — reste alternative forte si Morris exige VPC/SLA AWS stricts et accepte coût idle.

---

## 33. Recommandation candidate

**Candidat :** **Neon** (recommandation candidate **uniquement** — **NOT SELECTED**).

**Motifs :**
1. alignement P1 (pooler natif + scale-to-zero) ;
2. PITR intégré selon plan ;
3. Frankfurt UE disponible ;
4. `pg` + direct pour migrations ;
5. branching optionnel compatible LD-A sans le rendre obligatoire ;
6. cohérent avec la recommandation historique du pack 113, désormais **étayée**.

---

## 34. Alternative

**Amazon RDS for PostgreSQL** — si Morris privilégie PostgreSQL standard, VPC natif, SLA Multi-AZ 99.95% et réversibilité maximale, au prix d’un Proxy et d’un idle cost.

---

## 35. Validation opérationnelle encore requise

Région exacte · revue juridique DPA/transferts · plan/SLA cible · hard caps · restore drill · sizing CU/instance · stratégie Proxy vs pooler natif · politique egress.

---

## 36. Statut decision-readiness

**VALIDATION COMPLETE WITH RESERVES — READY FOR MORRIS ARBITRATION — NOT DECIDED**

---

## 37. Décision Morris attendue

Arbitrer `D-ASST-A2-MANAGED-STORE-01` parmi Neon / Supabase / RDS / Aurora, ou exiger une validation juridique/FinOps supplémentaire — **sans** provisioning.

---

## 38. Non-sélections

Fournisseur · Neon · Supabase · RDS · Aurora · région · plan · SLA · backup/restore/PITR policies · compte · secret · IaC.

---

## 39. Impacts backlog

TB-01-* / TB-05-01 / TB-06-* orientés mais **non DONE**. Aucune dépendance graphe ajoutée.

---

## 40. Conditions avant LOT-D1

Décision store · outil migration · versions PG/pg · Docker/CI · schéma · fichiers Delivery · GO Delivery · réserves traitées.

---

## 41. Prochaine gate

Voir document **117** — gate d’arbitrage des deux décisions restantes si decision-ready.

---

## 42. Verdict

**MANAGED STORE TARGETED VALIDATION EXECUTED — FOUR OPTIONS VALIDATED — RECOMMENDATION CANDIDATE NEON — ALTERNATIVE RDS POSTGRESQL — D-ASST-A2-MANAGED-STORE-01 NOT DECIDED — VALIDATION COMPLETE WITH RESERVES — READY FOR MORRIS ARBITRATION — LOT-D1 NOT AUTHORIZED — DELIVERY NOT-CONSUMED**

## Document 116 complet

# SFIA Studio — Assistant SFIA natif OpenAI — Persistence A2 Migration Tool Targeted Validation

## 1. Statut et anti-claims

**MIGRATION TOOL TARGETED VALIDATION EXECUTED —**
**DBMATE VALIDATED —**
**NODE-PG-MIGRATE VALIDATED —**
**CONCURRENT LOCKING VALIDATED OR QUALIFIED —**
**MIG-C COMPATIBILITY ASSESSED —**
**DECISION READINESS ASSESSED —**
**RECOMMENDATION CANDIDATE ONLY —**
**D-ASST-A2-MIGRATION-TOOL-01 NOT DECIDED —**
**NO TOOL, PACKAGE, BINARY, SQL OR MIGRATION SELECTED —**
**LOT-D1 NOT AUTHORIZED —**
**DELIVERY NOT-CONSUMED**

### Anti-claims

| Anti-claim | Statut |
|---|---|
| Targeted validation ≠ selection | vrai |
| Recommendation candidate ≠ décision Morris | vrai |
| Issue/PR non mergée ≠ capacité disponible | vrai |
| dbmate / node-pg-migrate ≠ SELECTED | vrai |
| Aucun package/binaire installé | vrai |
| Aucune migration SQL créée | vrai |

---

## 2. GO Morris exact

```text
GO IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — VALIDATE REMAINING PERSISTENCE A2 MANAGED STORE AND MIGRATION TOOL OPTIONS
```

Consommation : **2026-08-05 18:45 CEST (+0200) / 16:45 UTC**.

---

## 3. Horodatage

| Champ | Valeur |
|---|---|
| **GO** | 2026-08-05 18:45 CEST / 16:45 UTC |
| **Consultation** | 2026-08-05 18:55 CEST (+0200) / 16:55 UTC |
| **Rédaction** | 2026-08-05 19:05 CEST / 17:05 UTC |

---

## 4. Cycle / profil / blocs

Architecture technique · Implementation Preparation — Remaining Options Targeted Validation (volet migration) · **Critical** · EVOL/DOC.

Blocs activés : data · DevOps migrations · release contraintes · RSSI supply-chain · réversibilité · traçabilité.

Blocs désactivés : installation · SQL exécutable · Docker · CI config · Delivery · LOT-D1.

---

## 5. Autorité Morris

Sélection outil = Morris uniquement. Cursor = preuves + recommandation candidate.

---

## 6. Sources et hiérarchie

Git main · GO · handoff `a7833b94…` · docs 111/112/113/114 · sources primaires §13 · inventaire repo : aucun outil migration présent (**GAP**).

---

## 7. Local Git Truth initiale

Branche validation créée depuis `8dc54db…` · ahead/behind 0/0 · upstream aucun · 116 absent avant cycle · 2026-08-05 18:52 CEST.

---

## 8. Hashes entrants

Identiques au document 115 §8 (103–114 byte-identical entrants).

---

## 9. Décisions non réouvrables

MIG-C · DA-A · PostgreSQL · pg · LD-A · P1 · STORE-01=A.

---

## 10. Question de validation

dbmate ou node-pg-migrate peut-il satisfaire MIG-C (journal versionné · expand/migrate/contract · backup gate · **coordination multi-instance** · exécution distincte du trafic) sur PostgreSQL, sans installer d’outil ni créer de migration ?

---

## 11. Critères éliminatoires

Élimination si :

1. pas de migrations versionnées apply-once ;
2. pas de support PostgreSQL documenté ;
3. **aucun** mécanisme de verrouillage **ni** pattern d’exécution exclusive documenté compatible multi-instance ;
4. oblige un ORM primaire contraire à DA-A ;
5. licence incompatible usage produit.

**Note :** un outil sans lock natif n’est pas éliminé **s’il** peut être exécuté exclusivement via runner CI/job unique (preuve pattern MIG-C). Le gap de lock doit être **qualifié ABSENT/NOT PROVEN**.

---

## 12. Méthode

Critères → registre sources → versions publiées → inspection code lock → matrices → readiness **NOT DECIDED**.

---

## 13. Registre complet des sources

Consultation : **2026-08-05 18:55 CEST (+0200) / 16:55 UTC**.

| ID | Titre | Éditeur | URL | Affirmation | Confiance | Limite |
|---|---|---|---|---|---|---|
| S-DBM-README | dbmate README | amacneil | https://github.com/amacneil/dbmate | SQL plain · tx atomique · status · dump | haute | pas de lock documenté |
| S-DBM-REL | Release v2.34.1 | amacneil | https://github.com/amacneil/dbmate/releases/tag/v2.34.1 | tag `v2.34.1` · 2026-07-09 · commit `ddd00ff09d2034168072bc7870f815f9e6f1594d` | haute | — |
| S-DBM-PR596 | PR UseMigrationLock | amacneil | https://github.com/amacneil/dbmate/pull/596 | PR **open** · **merged=false** · non capacité | haute | preuve de **gap** |
| S-DBM-DISC366 | Discussion exclusive lock | amacneil | https://github.com/amacneil/dbmate/discussions/366 | communauté confirme absence lock natif | moyenne | discussion |
| S-NPM-DOC | Defining Migrations / Locking | salsita | https://salsita.github.io/node-pg-migrate/migrations/ | advisory lock session | haute | — |
| S-NPM-API | Programmatic API | salsita | https://salsita.github.io/node-pg-migrate/api | `noLock` · `advisoryLockMode` fail/wait · `lockValue` | haute | — |
| S-NPM-CLI | CLI Usage | salsita | https://salsita.github.io/node-pg-migrate/cli | flags `--no-lock` · `--advisory-lock-mode` | haute | — |
| S-NPM-REL | Release v9.0.0 | salsita | https://github.com/salsita/node-pg-migrate/releases/tag/v9.0.0 | 2026-07-17 · commit `0d60e94fd2df1770f6578d8624a2ad7def22d35e` | haute | — |
| S-NPM-SRC | runner.ts v9.0.0 | salsita | https://raw.githubusercontent.com/salsita/node-pg-migrate/v9.0.0/src/runner.ts | `pg_try_advisory_lock` / `pg_advisory_lock` / unlock | haute | SOURCE-CODE VALIDATION |
| S-NPM-REPO | Repository | salsita | https://github.com/salsita/node-pg-migrate/ | Node≥20.11 · PG≥14 · MIT · peer `pg` | haute | engines app à aligner |

---

## 14. Versions et releases étudiées

| Outil | Version | Commit | Publié | Inspection |
|---|---|---|---|---|
| **dbmate** | **v2.34.1** | `ddd00ff09d2034168072bc7870f815f9e6f1594d` | 2026-07-09T19:16:20Z | drivers/postgres.go + db.go : **pas** d’advisory lock |
| **node-pg-migrate** | **v9.0.0** | `0d60e94fd2df1770f6578d8624a2ad7def22d35e` | 2026-07-17T08:53:18Z | `src/runner.ts` lock/unlock |
| node-pg-migrate main tip (contexte) | tip `56cc877abed557a8afb6c4388578c4e405426fa1` | — | non utilisé comme capacité ; **v9.0.0** fait foi |

---

## 15. dbmate — architecture

Binaire Go unique · migrations **SQL brutes** timestampées · `DATABASE_URL` · drivers PG/MySQL/SQLite/ClickHouse · aligné DA-A (SQL explicite) · pas d’ORM.

---

## 16. dbmate — historique migrations

Table d’historique schema_migrations (convention dbmate) · apply pending numerical order · `status` CLI · out-of-order possible si commits indépendants (doc README / issue #159) — réserve process.

---

## 17. dbmate — transactions

README : migrations run **atomically inside a transaction** (par migration). DDL non transactionnels PG restent un risque générique (EXTERNAL / pratique MIG-C).

---

## 18. dbmate — locking et concurrence

**SOURCE-CODE VALIDATION — VERSION `v2.34.1` / COMMIT `ddd00ff0…` IDENTIFIED**

- Recherche `advisory`/`lock` dans `pkg/driver/postgres` et `pkg/dbmate` : **ABSENT** (hors commentaire « Wait blocks » et `package-lock.json` TypeScript).
- PR #596 `UseMigrationLock` : **state=open**, **merged=false** → **ne constitue pas** une capacité disponible.
- Discussion #366 : absence de lock exclusif confirmée comme sujet ouvert.

**Qualification :** verrouillage concurrent natif = **ABSENT / NOT PROVEN** dans la version publiée.

**Mitigation MIG-C acceptée :** runner CI/job **unique** · interdiction d’exécuter dbmate au boot de chaque instance P1 · orchestration externe exclusive.

---

## 19. dbmate — erreur et reprise

Échec dans la transaction de migration → rollback de cette migration (modèle documenté) · reprise = re-run pending · migrations partiellement hors-tx = risque générique PG.

---

## 20. dbmate — CI et runner

CLI dédiée · idéal **avant** démarrage app · permissions DB migrator séparées possibles · connexion directe recommandée (store pooler).

---

## 21. dbmate — dry-run / status / audit

`status` · `dump` schema.sql · pas de dry-run SQL universel riche documenté comme premier classe — gap partiel · logs textuels CLI · exit codes.

---

## 22. dbmate — supply chain et maintenance

Licence permissive (projet OSS) · releases GitHub régulières · binaire signable via checksums release = EXTERNAL à vérifier à l’adoption · pas de dépendance npm runtime app.

---

## 23. dbmate — réversibilité

SQL portable · changement d’outil possible si journal migré · rollback CLI `down` borné · roll-forward privilégié MIG-C.

---

## 24. dbmate — gaps et réserves

| Item | Statut |
|---|---|
| Advisory lock publié | **ABSENT** |
| PR #596 | gap, non capacité |
| Dry-run avancé | limité |
| Checksums migrations | NOT PROVEN |
| Node 24 | N/A (binaire) |

---

## 25. node-pg-migrate — dimensions complètes

### Architecture
Outil Node **exclusif PostgreSQL** · DSL `pgm` + possibilité SQL · historique table migrations · CLI + API programmatique · **peerDependency `pg`** — aligné driver déjà SELECTED (version package encore NOT SELECTED).

### Historique
Table migrations · apply-once · order check optionnel · `status`-like via CLI.

### Transactions
Par défaut migrations en transaction · `pgm.noTransaction()` pour opérations non transactionnelles · `singleTransaction` option API.

### Locking
**PRESENT dans v9.0.0** — voir §26.

### Erreur / reprise
Échec → unlock dans `finally` path documenté dans runner · session lock : si process gelé, kill requis (doc officielle).

### CI / runner
CLI `node-pg-migrate up` · job dédié · **ne pas** lancer depuis chaque instance · `noLock` **interdit** en prod multi-instance.

### Dry-run / audit
Options CLI status/pretty · génération via DSL · revue SQL avant apply = process humain.

### Supply chain
npm package · engines `node: >=20.11.0` · licence MIT · peer `pg` · Node 24 : **EXTERNAL VALIDATION REQUIRED** (engines ≥20.11 n’exclut pas 24, non prouvé dans repo app).

### Réversibilité
DSL peut créer lock-in syntaxique · SQL émis portable · coût migration vers autre outil = moyen.

### Gaps
DSL vs SQL pur · dépendance npm · Node engine vs runtime app à confirmer · auto-down inference risquée pour MIG-C (préférer roll-forward).

---

## 26. Inspection source officielle du lock

**SOURCE-CODE VALIDATION — VERSION `v9.0.0` — COMMIT `0d60e94fd2df1770f6578d8624a2ad7def22d35e`**

Extrait `src/runner.ts` (release tag) :

```typescript
export const PG_MIGRATE_LOCK_ID = 7_241_865_325_823_964;

async function lock(db, lockValue = PG_MIGRATE_LOCK_ID, advisoryLockMode: AdvisoryLockMode = 'fail') {
  if (advisoryLockMode === 'wait') {
    await db.query(`SELECT pg_advisory_lock(${lockValue})`);
    return;
  }
  const [result] = await db.select(
    `SELECT pg_try_advisory_lock(${lockValue}) AS "lockObtained"`
  );
  if (!result.lockObtained) {
    throw new Error("Another migration is already running. Advisory lock mode is set to 'fail'.");
  }
}

async function unlock(db, lockValue = PG_MIGRATE_LOCK_ID) {
  const [result] = await db.select(
    `SELECT pg_advisory_unlock(${lockValue}) AS "lockReleased"`
  );
  if (!result.lockReleased) {
    throw new Error('Failed to release migration lock');
  }
}
```

**Faits prouvés :**
- lock session-level advisory ;
- modes `fail` (défaut) et `wait` ;
- `noLock` permet de **désactiver** (danger multi-instance) ;
- unlock explicite ;
- doc : si script gelé, tuer le process avant re-run.

**Inférence bornée :** compatible exclusion multi-instance **si** `noLock` n’est pas activé et runner unique préféré.

---

## 27. Matrice comparative homogène

| Critère | dbmate v2.34.1 | node-pg-migrate v9.0.0 |
|---|---|---|
| SQL brut | natif | via SQL/DSL |
| ORM | non | non |
| Historique versionné | oui | oui |
| Tx par migration | oui | oui (configurable) |
| **Lock concurrent publié** | **ABSENT** | **PRESENT** (`pg_*_advisory_lock`) |
| Désactivation lock | N/A | `noLock` / `--no-lock` |
| Runner CLI séparé | oui | oui |
| Dry-run | limité | limité/DSL |
| Supply chain | binaire Go | npm + peer pg |
| Alignement pg SELECTED | via URL PG | peer `pg` |
| Réversibilité SQL | haute | moyenne (DSL) |

---

## 28. Matrice MIG-C

| Exigence MIG-C | dbmate | node-pg-migrate |
|---|---|---|
| Journal versionné | oui | oui |
| Expand/migrate/contract | process humain (outil neutre) | idem |
| Backup/restore gate | externe | externe |
| Coordination multi-instance | **externe obligatoire** | **lock natif + runner dédié** |
| Exécution ≠ trafic | CLI job | CLI job |
| Roll-forward | privilégier | privilégier (down auto risqué) |

L’outil **ne garantit pas** MIG-C à lui seul.

---

## 29. Matrice P1 multi-instance

| Risque | dbmate | node-pg-migrate |
|---|---|---|
| Boot concurrent N instances | double apply possible sans orch. | bloqué par advisory lock (si noLock=false) |
| Pooler transaction | advisory session peut casser | **connexion directe obligatoire** pour lock |
| Crash mid-migration | état tx | lock session à libérer via kill |

---

## 30. Matrice DevOps / release

| Thème | dbmate | node-pg-migrate |
|---|---|---|
| Job pre-deploy | excellent | excellent |
| Interdire migrate-on-boot | obligatoire | obligatoire |
| Permissions migrator | rôle dédié | rôle dédié |
| CI | binaire | npm ci + CLI |

---

## 31. Matrice sécurité

| Thème | dbmate | node-pg-migrate |
|---|---|---|
| Surface | binaire | node_modules |
| Secrets | DATABASE_URL | DATABASE_URL |
| Lock bypass | N/A | `noLock` à interdire en prod |

---

## 32. Matrice réversibilité

| Thème | dbmate | node-pg-migrate |
|---|---|---|
| Portabilité SQL | haute | moyenne |
| Changer d’outil | plus simple | migration journal + DSL |

---

## 33. Options éliminées ou dépriorisées

**Éliminées :** aucune des deux (les deux restent viables avec réserves).

**Dépriorisée relative :** dbmate pour lock natif absent — reste alternative si Morris impose SQL pur + runner exclusif strict.

Prisma/Drizzle/Flyway/Liquibase/Atlas : **hors shortlist** · non ajoutés.

---

## 34. Recommandation candidate

**Candidat :** **node-pg-migrate** (recommandation candidate **uniquement** — **NOT SELECTED**).

**Motifs :**
1. advisory lock **prouvé** dans release `v9.0.0` ;
2. peer `pg` aligné D-ASST-A2-DATA-DRIVER-01 ;
3. CLI dédiée compatible exécution séparée du trafic ;
4. options `fail`/`wait` documentées ;
5. comble le gap principal ouvert dans le pack 113 (lock dbmate).

---

## 35. Alternative

**dbmate** — si Morris privilégie SQL 100% portable et accepte **explicitement** un runner CI mono-instance comme seul mécanisme d’exclusion (lock outil = ABSENT).

---

## 36. Validation opérationnelle encore requise

Spike borné lock sous Postgres réel (LD-A futur) · comportement crash · DDL non transactionnel · Node engine app · politique `noLock` · format migrations DSL vs SQL-only · intégration CI sans installer maintenant.

---

## 37. Statut decision-readiness

**VALIDATION COMPLETE WITH RESERVES — READY FOR MORRIS ARBITRATION — NOT DECIDED**

---

## 38. Décision Morris attendue

Arbitrer `D-ASST-A2-MIGRATION-TOOL-01` = node-pg-migrate **ou** dbmate(+runner exclusif) **ou** gate spike supplémentaire — **sans** installation.

---

## 39. Non-sélections

Outil · dbmate · node-pg-migrate · version package · mécanisme lock final · format migration · binaire · SQL · DDL · fichiers migrations.

---

## 40. Impacts backlog

TB-01-06 / TB-06-02 orientés · **non DONE** · graphe inchangé.

---

## 41. Conditions avant LOT-D1

Décision outil · décision store · versions · Docker/CI · schéma · GO Delivery.

---

## 42. Prochaine gate

Document **117** — arbitrage conjoint si les deux volets sont decision-ready.

---

## 43. Verdict

**MIGRATION TOOL TARGETED VALIDATION EXECUTED — DBMATE VALIDATED (LOCK ABSENT IN v2.34.1) — NODE-PG-MIGRATE VALIDATED (LOCK PRESENT IN v9.0.0) — CONCURRENT LOCKING QUALIFIED — RECOMMENDATION CANDIDATE NODE-PG-MIGRATE — ALTERNATIVE DBMATE WITH EXCLUSIVE RUNNER — D-ASST-A2-MIGRATION-TOOL-01 NOT DECIDED — VALIDATION COMPLETE WITH RESERVES — READY FOR MORRIS ARBITRATION — LOT-D1 NOT AUTHORIZED — DELIVERY NOT-CONSUMED**

## Document 117 complet

# SFIA Studio — Assistant SFIA natif OpenAI — Persistence A2 Remaining Options Validation Decision Pack

## 1. Statut et anti-claims

**REMAINING PERSISTENCE A2 OPTIONS VALIDATION DECISION PACK READY —**
**MANAGED STORE VALIDATION INCLUDED —**
**MIGRATION TOOL VALIDATION INCLUDED —**
**TWO DECISIONS PRESENT —**
**TWO DECISIONS NOT DECIDED —**
**RECOMMENDATIONS CANDIDATE ONLY —**
**NO PROVIDER OR TOOL SELECTED —**
**LOT-D1 NOT AUTHORIZED —**
**DELIVERY NOT-CONSUMED**

### Anti-claims

| Anti-claim | Statut |
|---|---|
| Decision Pack ready ≠ DECIDED | vrai |
| Recommendation candidate ≠ SELECTED | vrai |
| Aucune option précochée | vrai |
| Neon / dbmate / node-pg-migrate ≠ adoptés | vrai |
| LOT-D1 ≠ autorisé | vrai |

| Champ | Valeur |
|---|---|
| **Document** | `projects/sfia-studio/117-assistant-sfia-native-openai-persistence-a2-remaining-options-validation-decision-pack.md` |
| **Analyses** | 115 (store) · 116 (migration) |
| **Record partiel** | 114 inchangé |

---

## 2. GO et autorité

```text
GO IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — VALIDATE REMAINING PERSISTENCE A2 MANAGED STORE AND MIGRATION TOOL OPTIONS
```

Autorité : **Morris** · consommation 2026-08-05 18:45 CEST / 16:45 UTC · profil **Critical**.

---

## 3. Résumé exécutif

Deux validations ciblées indépendantes ont complété les preuves absentes du Decision Pack 113 :

1. **Managed store** — Neon, Supabase PostgreSQL, RDS PostgreSQL et Aurora PostgreSQL évalués sur portabilité, régions, RSSI, pooling P1, HA/SLA, backup/PITR, FinOps, GreenOps, RUN, réversibilité.
2. **Migration tool** — dbmate v2.34.1 et node-pg-migrate v9.0.0 évalués ; lock concurrent **ABSENT** chez dbmate (PR #596 non mergée) ; lock advisory **PRESENT** chez node-pg-migrate (source `runner.ts` v9.0.0).

Les deux décisions restent **NOT DECIDED**. Recommandations candidates : **Neon** (store) · **node-pg-migrate** (outil). Alternatives : RDS PostgreSQL · dbmate+runner exclusif.

---

## 4. Matrice des décisions

| ID | Statut pack | Recommandation candidate | Alternative |
|---|---|---|---|
| D-ASST-A2-MANAGED-STORE-01 | **NOT DECIDED** | Neon | Amazon RDS for PostgreSQL |
| D-ASST-A2-MIGRATION-TOOL-01 | **NOT DECIDED** | node-pg-migrate | dbmate + runner exclusif |

Décisions déjà SELECTED (hors pack) : PostgreSQL · pg · LD-A.

---

## 5. Statut decision-readiness

| ID | Readiness |
|---|---|
| MANAGED-STORE-01 | **VALIDATION COMPLETE WITH RESERVES — READY FOR MORRIS ARBITRATION — NOT DECIDED** |
| MIGRATION-TOOL-01 | **VALIDATION COMPLETE WITH RESERVES — READY FOR MORRIS ARBITRATION — NOT DECIDED** |

---

## 6. Matrice des dépendances

| Décision | Dépend de | Bloque |
|---|---|---|
| Managed store | STORE-01=A · PostgreSQL · P1 · LD-A | TB-01-* concrètes · LOT-D1 |
| Migration tool | MIG-C · PostgreSQL · pg · DA-A | TB-01-06 · LOT-D1 |
| LOT-D1 | **les deux** arbitrées + autres conditions | Delivery |

---

## 7. D-ASST-A2-MANAGED-STORE-01

| Champ | Contenu |
|---|---|
| **Statut** | **NOT DECIDED** |
| **Question** | Quel store PostgreSQL managé pour A2/P1/MIG-C ? |
| **Options** | Neon · Supabase PostgreSQL · Amazon RDS PostgreSQL · Amazon Aurora PostgreSQL-Compatible |
| **Readiness** | VALIDATION COMPLETE WITH RESERVES |

---

## 8. Sources et preuves managed store

Registre complet : document **115** §13 (Neon regions/pooling/security/backups/pricing/SLA/DPA · Supabase regions/GDPR/connections/backups/pricing · AWS RDS limits/PITR/SLA · Aurora Serverless v2/pricing/SLA). Consultation 2026-08-05 18:55 CEST.

---

## 9. Options managed store

1. **Neon** — pooler natif · scale-to-zero · PITR selon plan · Frankfurt/London · branching optionnel.
2. **Supabase PostgreSQL** — régions EU nombreuses · Supavisor · PITR add-on coûteux · plateforme élargie.
3. **Amazon RDS PostgreSQL** — PG standard · Multi-AZ SLA 99.95% · PITR 35j · Proxy add-on · idle cost.
4. **Amazon Aurora PostgreSQL** — compatible · SLA Multi-AZ jusqu’à 99.99% · lock-in storage · ACU.

---

## 10. Critères éliminatoires managed store

Pas de PG protocole · pas d’export · aucune région Europe · aucune voie backup · ORM obligatoire · aucune limite connexions documentée.

**Résultat :** aucune élimination ; Aurora et Supabase **dépriorisés**.

---

## 11. Comparaison managed store

Voir matrices document **115** §§26–31. Synthèse : Neon meilleur fit P1/FinOps variable ; RDS meilleur fit contrôle/réversibilité ; Supabase overhead plateforme ; Aurora lock-in.

---

## 12. Recommandation candidate managed store

**Neon** — candidate only — **NOT SELECTED** — motifs : P1 pooler · PITR · EU Frankfurt · pg direct pour migrations · cohérent 113, désormais prouvé.

---

## 13. Réserves managed store

DPA/transferts juridiques · région exacte · plan/SLA · hard caps · restore drill · sizing · PrivateLink org-only · FinOps KEEP-OPEN.

---

## 14. Réponse Morris attendue managed store

Choisir une option **ou** exiger validation juridique/FinOps ciblée supplémentaire — sans compte ni provisioning.

---

## 15. D-ASST-A2-MIGRATION-TOOL-01

| Champ | Contenu |
|---|---|
| **Statut** | **NOT DECIDED** |
| **Question** | Quel outil pour migrations versionnées MIG-C multi-instance ? |
| **Options** | dbmate · node-pg-migrate |
| **Readiness** | VALIDATION COMPLETE WITH RESERVES |

---

## 16. Sources et preuves migration

Document **116** §13–14 · dbmate v2.34.1 commit `ddd00ff0…` · node-pg-migrate v9.0.0 commit `0d60e94f…` · PR #596 open non mergée · inspection `runner.ts`.

---

## 17. Options migration

1. **dbmate** — SQL pur · binaire · lock natif **ABSENT**.
2. **node-pg-migrate** — DSL/SQL · peer `pg` · lock advisory **PRESENT**.

---

## 18. Critères éliminatoires migration

Pas de versioning · pas de PG · aucun lock **et** aucun pattern exclusif possible · ORM obligatoire · licence bloquante.

**Résultat :** aucune élimination ; dbmate dépriorisé sur lock natif.

---

## 19. Comparaison migration

Voir **116** §§27–32. Point bloquant : lock concurrent — tranché en faveur de node-pg-migrate pour capacité publiée.

---

## 20. Recommandation candidate migration

**node-pg-migrate** — candidate only — **NOT SELECTED** — motifs : lock prouvé v9.0.0 · peer pg · CLI séparable du trafic.

---

## 21. Réserves migration

Spike lock sur PG réel · crash/reprise · DDL non tx · Node engine · interdiction `noLock` prod · préférence SQL-only vs DSL · CI future.

---

## 22. Réponse Morris attendue migration

Choisir node-pg-migrate **ou** dbmate(+runner exclusif) **ou** spike borné — sans installer package.

---

## 23. Matrice décision → items

| Décision | Items | DONE |
|---|---|---|
| Store | TB-01-* · TB-05-01 | **non** |
| Migration tool | TB-01-06 · TB-06-02 | **non** |

---

## 24. Matrice décision → lots

| Décision | LOT-IP-0C | LOT-D1…D5 |
|---|---|---|
| Toutes deux NOT DECIDED | DEFERRED | **NOT AUTHORIZED** |

---

## 25. Conditions avant LOT-D1

Deux décisions arbitrées · versions PG/pg · Docker/CI · schéma · fichiers Delivery bornés · GO Delivery · réserves opérationnelles.

---

## 26. Non-sélections

Fournisseur · Neon · Supabase · RDS · Aurora · région · plan · outil · dbmate · node-pg-migrate · lock final · versions · Docker · SQL · DDL · migration · LOT-D1.

---

## 27. Risques et dette

| Risque | Mitigation |
|---|---|
| Adopter Neon/dbmate par glissement | NOT DECIDED explicite |
| Ignorer lock dbmate | qualification ABSENT + reco npm |
| Autoriser LOT-D1 tôt | NOT AUTHORIZED |
| Installer outils maintenant | périmètre interdit |

---

## 28. Prochaine gate candidate

```text
GO DECISIONS IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — ARBITRATE REMAINING PERSISTENCE A2 MANAGED STORE AND MIGRATION TOOL DECISIONS
```

Statut : **candidate uniquement — non consommée**.

N’autorise ni LOT-D1 ni Delivery · n’installe rien · n’adopte pas automatiquement Neon ou node-pg-migrate.

---

## 29. Verdict

**REMAINING PERSISTENCE A2 OPTIONS VALIDATION DECISION PACK READY —**
**TWO DECISIONS NOT DECIDED —**
**MANAGED STORE READY FOR MORRIS ARBITRATION WITH RESERVES —**
**MIGRATION TOOL READY FOR MORRIS ARBITRATION WITH RESERVES —**
**RECOMMENDATION CANDIDATES: NEON + NODE-PG-MIGRATE —**
**ALTERNATIVES: RDS POSTGRESQL + DBMATE WITH EXCLUSIVE RUNNER —**
**NO PROVIDER OR TOOL SELECTED —**
**LOT-D1 NOT AUTHORIZED —**
**DELIVERY NOT-CONSUMED**

## Sections modifiées du document 103

### 1. Statut

## 1. Statut

**LOT-IP-0A DECISIONS APPLIED —**
**LOT-IP-0B DECISIONS APPLIED —**
**PERSISTENCE A2 TECHNOLOGY DECISION PACK PARTIALLY ARBITRATED —**
**POSTGRESQL SELECTED —**
**PG NODE-POSTGRES SELECTED —**
**LOCAL DEV TEST LD-A SELECTED —**
**MANAGED STORE TARGETED VALIDATION EXECUTED —**
**MIGRATION TOOL TARGETED VALIDATION EXECUTED —**
**TWO REMAINING DECISIONS NOT DECIDED —**
**LOT-IP-0C DEFERRED —**
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

### 1decies. GO Morris — Validate Remaining Persistence A2 Options

## 1decies. GO Morris — Validate Remaining Persistence A2 Options

```text
GO IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — VALIDATE REMAINING PERSISTENCE A2 MANAGED STORE AND MIGRATION TOOL OPTIONS
```

| Champ | Valeur |
|---|---|
| **Autorité** | Morris |
| **Consommation** | 2026-08-05 18:45 CEST (+0200) / 16:45 UTC |
| **Cycle** | Implementation Preparation — Persistence A2 Remaining Options Targeted Validation |
| **Profil** | **Critical** |
| **Portée** | Deux validations ciblées indépendantes (managed store · migration tool) · preuves · recommandations candidates · Decision Pack complémentaire · **sans** sélection · **sans** installation |
| **Non-effet** | Aucun fournisseur SELECTED · aucun outil SELECTED · aucun package/Docker/SQL/migration · LOT-D1 **NOT AUTHORIZED** · Delivery **NOT-CONSUMED** |
| **Analyses** | `115-…-managed-store-targeted-validation.md` · `116-…-migration-tool-targeted-validation.md` |
| **Decision Pack** | `117-…-remaining-options-validation-decision-pack.md` |

### Chaîne documentaire Persistence A2 (post-validation)

| Document | Rôle |
|---|---|
| **114** | arbitrage partiel appliqué (PostgreSQL · pg · LD-A) |
| **115** | validation ciblée managed store |
| **116** | validation ciblée migration tool |
| **117** | Decision Pack complémentaire (deux décisions **NOT DECIDED**) |

### Décisions technologiques (état opérationnel)

| ID | Statut |
|---|---|
| D-ASST-A2-SQL-ENGINE-01 | **POSTGRESQL — SELECTED** |
| D-ASST-A2-DATA-DRIVER-01 | **PG NODE-POSTGRES — SELECTED** |
| D-ASST-A2-LOCAL-DEV-TEST-01 | **LD-A — SELECTED** |
| D-ASST-A2-MANAGED-STORE-01 | **TARGETED VALIDATION EXECUTED — NOT DECIDED — MORRIS ARBITRATION REQUIRED** |
| D-ASST-A2-MIGRATION-TOOL-01 | **TARGETED VALIDATION EXECUTED — NOT DECIDED — MORRIS ARBITRATION REQUIRED** |

Items DONE : **aucun**. TB-00-04 / TB-00-05 / TB-01-* : **pas** DONE.

Recommandations candidates (non adoptées) : managed store **Neon** · migration tool **node-pg-migrate**. Alternatives : **RDS PostgreSQL** · **dbmate** (+ runner exclusif).

---

### 22. Lots — LOT-D1 (extrait)

LOT-D1 (persist foundation) reste **NOT AUTHORIZED — NOT SELECTED — FUTURE MORRIS DECISION REQUIRED**. Blocages minimaux maintenus :
- deux décisions restantes **non arbitrées** (validations exécutées · **NOT DECIDED**) ;
- version PostgreSQL **non sélectionnée** ;
- version pg **non sélectionnée** ;
- Docker/CI **non configurés** ;
- schéma physique **absent** ;
- fichiers Delivery **non bornés** ;
- GO Delivery **absent** ;
- réserves opérationnelles **ouvertes**.

### 23. Chemin critique

## 23. Chemin critique

**LOT-IP-0A** / **LOT-IP-0B** décisions appliquées → PostgreSQL + pg + LD-A **sélectionnés** → **validations ciblées** managed store et migration tool (**exécutées** · docs 115/116/117) → **arbitrage Morris** des deux décisions restantes → **application complète** des décisions → **éventuelle sélection** LOT-D1 → GO Delivery distinct → implémentation future.

LOT-D1 **n’est pas** éligible, sélectionné ni autorisé sans décision Morris distincte.

---

### 26. Critères (extraits)

### Vers validation ciblée managed store / migration tool

- **fait** (GO consommé 2026-08-05 18:45 CEST) · documents 115/116/117 créés ;
- deux décisions restent **NOT DECIDED** ;
- recommandations candidates uniquement.

### Vers arbitrage des deux décisions restantes (prochaine)

- GO candidate `ARBITRATE REMAINING PERSISTENCE A2 MANAGED STORE AND MIGRATION TOOL DECISIONS` ;
- ne pas sélectionner automatiquement Neon ou node-pg-migrate ;
- ne pas autoriser LOT-D1 ;
- Delivery reste NOT-CONSUMED.

### Vers LOT-D1 (futur, non autorisé, non éligible auto)

- décisions LOT-IP-0B appliquées (**fait**) ;
- PostgreSQL · pg · LD-A sélectionnés (**fait**) ;
- managed store et migration tool **arbitrés et appliqués** ;
- version PostgreSQL / pg / Docker-CI traités ;
- technologies concrètes compatibles DA-A / MIG-C / P1 ;
- stratégie tests autorisée ;
- lot LOT-D1 **explicitement** sélectionné par Morris ;
- GO Delivery distinct ;
- fichiers bornés ;
- réserves bloquantes traitées.

LOT-D1 reste **NOT AUTHORIZED** jusqu’à ces conditions.

**DELIVERY-GATE=NOT-CONSUMED** (D-ASST-BLG-DELIVERY-01).

---

### 27–31. Risques / Non-sélections / Actions / Anti-claims

## 27. Risques et incertitudes

Auth absente en code · store classe décidée / produit managé différé · patterns DA-A/MIG-C/P1 décidés · PostgreSQL + pg + LD-A **SELECTED** · managed store / migration tool **VALIDATED NOT DECIDED** · Neon/node-pg-migrate = candidates only · **NOT SELECTED** · P2 non sélectionné · AJV extension décidée / schémas N2/N3 non implémentés · réserves UX · FinOps hard / TTL ouverts · memory/fixture **≠** A2 durable · risque d’installer Docker/pg trop tôt · risque de sélection implicite Neon/dbmate.

---

## 28. Non-sélections

**Classe SQL relationnelle managée = DECIDED** (STORE-01=A). **Patterns** DA-A / MIG-C / P1 = **DECIDED**. P2 = **CO-COMPATIBLE — NOT SELECTED**. **PostgreSQL** = **SELECTED** (moteur). **pg (node-postgres)** = **SELECTED** (driver). **LD-A** = **SELECTED** (stratégie local-dev/test). Managed store = **NOT DECIDED** (validation exécutée). Migration tool = **NOT DECIDED** (validation exécutée). Restent **NOT SELECTED** : version PostgreSQL · fournisseur de store · Neon · Supabase · RDS · Aurora · région · plan · SLA · backup policy · restore policy · PITR policy · version pg · postgres.js · @neondatabase/serverless · ORM · query builder · outil de migration · dbmate · node-pg-migrate · mécanisme de verrouillage · format final de migration · version image Docker · configuration Docker · configuration CI Docker · fournisseur de branche distante · compute P1 concret · secret manager · observability vendor · scheduler · schéma physique · SQL · DDL · migration · TTL · hard caps · SLO — **FUTURE DEDICATED DECISION OR VALIDATION GATE REQUIRED**.

---

## 29. Actions autorisées

Maintenir 112–114 historiques · maintenir 115–117 comme record de validation · tracer l’état dans 103 · préparer arbitrage Morris des deux décisions · publier le handoff.

---

## 30. Actions interdites

Réécrire 114 · sélectionner Neon/Supabase/RDS/Aurora · sélectionner dbmate/node-pg-migrate · sélectionner P2 · installer pg ou node-pg-migrate · configurer Docker/Compose · créer code, SQL, DDL, migration, package ou IaC · créer un compte/service · exécuter LOT-IP-0C · sélectionner ou exécuter LOT-D1 à LOT-D5 · fermer une réserve · marquer un item DONE · Delivery · commit/push projet · PR/merge.

---

## 31. Anti-claims

Sélection documentaire ≠ installation · LD-A ≠ Docker configuré · PostgreSQL ≠ base créée · pg ≠ package installé · validation ciblée ≠ sélection · recommendations ≠ SELECTED · Neon/node-pg-migrate ≠ SELECTED · DA-A/MIG-C/P1 ≠ produits managés choisis · P2 ≠ sélectionné · TB-00-04/05/TB-01-* ≠ DONE · LOT-IP-0C DEFERRED · LOT-D* NOT AUTHORIZED · memory ≠ A2 durable · aucun item DONE · Delivery NOT-CONSUMED · réserves ouvertes.

---

### 32. Verdict

## 32. Verdict

**LOT-IP-0A DECISIONS APPLIED — LOT-IP-0B DECISIONS APPLIED —**
**PERSISTENCE A2 TECHNOLOGY DECISION PACK PARTIALLY ARBITRATED —**
**POSTGRESQL SELECTED — PG NODE-POSTGRES SELECTED — LD-A SELECTED —**
**MANAGED STORE TARGETED VALIDATION EXECUTED — NOT DECIDED —**
**MIGRATION TOOL TARGETED VALIDATION EXECUTED — NOT DECIDED —**
**DOCUMENT 103 UPDATED — DOCUMENTS 115, 116 AND 117 CREATED —**
**DOCUMENTS 104 TO 114 BYTE-IDENTICAL — DOCUMENT 118 ABSENT —**
**GRAPH 33/56 PRESERVED — PRIORITIES PRESERVED — NO ITEM DONE —**
**LOT-IP-0C DEFERRED — LOT-D1 TO LOT-D5 NOT AUTHORIZED —**
**DELIVERY NOT-CONSUMED —**
**READY FOR CHATGPT VALIDATION AND MORRIS REMAINING TECHNOLOGY ARBITRATION**


---

### 33. Prochaine gate candidate

## 33. Prochaine gate candidate

```text
GO DECISIONS IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — ARBITRATE REMAINING PERSISTENCE A2 MANAGED STORE AND MIGRATION TOOL DECISIONS
```

Statut : **candidate uniquement — non consommée**.

Effet futur :
- arbitrer `D-ASST-A2-MANAGED-STORE-01` et `D-ASST-A2-MIGRATION-TOOL-01` ;
- ne pas sélectionner automatiquement Neon ou node-pg-migrate ;
- ne pas autoriser LOT-D1 ;
- ne pas consommer Delivery ;
- ne pas installer package ni provisionner de compte.

**PERSISTENCE A2 REMAINING OPTIONS VALIDATED — MORRIS ARBITRATION REQUIRED — DELIVERY NOT CONSUMED**

## Diff RAW utile du document 103

```diff
--- 103-before
+++ 103-after
@@ -9,6 +9,7 @@
 **PG NODE-POSTGRES SELECTED —**
 **LOCAL DEV TEST LD-A SELECTED —**
-**MANAGED STORE DEFERRED —**
-**MIGRATION TOOL DEFERRED —**
+**MANAGED STORE TARGETED VALIDATION EXECUTED —**
+**MIGRATION TOOL TARGETED VALIDATION EXECUTED —**
+**TWO REMAINING DECISIONS NOT DECIDED —**
 **LOT-IP-0C DEFERRED —**
 **LOT-D1 TO LOT-D5 NOT AUTHORIZED —**
@@ -286,6 +287,6 @@
 | D-ASST-A2-DATA-DRIVER-01 | **PG NODE-POSTGRES — SELECTED** |
 | D-ASST-A2-LOCAL-DEV-TEST-01 | **LD-A — SELECTED** |
-| D-ASST-A2-MANAGED-STORE-01 | **DEFERRED — TARGETED VALIDATION REQUIRED** |
-| D-ASST-A2-MIGRATION-TOOL-01 | **DEFERRED — TARGETED VALIDATION REQUIRED** |
+| D-ASST-A2-MANAGED-STORE-01 | **DEFERRED puis VALIDATED — NOT DECIDED** (voir §1decies) |
+| D-ASST-A2-MIGRATION-TOOL-01 | **DEFERRED puis VALIDATED — NOT DECIDED** (voir §1decies) |

 ### Chaîne documentaire Persistence A2 (post-arbitrage partiel)
@@ -302,7 +303,7 @@
 |---|---|
 | D-ASST-A2-SQL-ENGINE-01 | **POSTGRESQL — SELECTED** |
-| D-ASST-A2-MANAGED-STORE-01 | **DEFERRED — TARGETED VALIDATION REQUIRED** |
+| D-ASST-A2-MANAGED-STORE-01 | **TARGETED VALIDATION EXECUTED — NOT DECIDED — MORRIS ARBITRATION REQUIRED** |
 | D-ASST-A2-DATA-DRIVER-01 | **PG NODE-POSTGRES — SELECTED** |
-| D-ASST-A2-MIGRATION-TOOL-01 | **DEFERRED — TARGETED VALIDATION REQUIRED** |
+| D-ASST-A2-MIGRATION-TOOL-01 | **TARGETED VALIDATION EXECUTED — NOT DECIDED — MORRIS ARBITRATION REQUIRED** |
 | D-ASST-A2-LOCAL-DEV-TEST-01 | **LD-A — SELECTED** |

@@ -310,4 +311,46 @@

 LD-A signifie : PostgreSQL local sous Docker · même version majeure que la cible · adapters memory réservés aux tests unitaires purs · branche distante éphémère facultative. Docker = stratégie sélectionnée **non configurée**.
+
+---
+
+## 1decies. GO Morris — Validate Remaining Persistence A2 Options
+
+```text
+GO IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — VALIDATE REMAINING PERSISTENCE A2 MANAGED STORE AND MIGRATION TOOL OPTIONS
+```
+
+| Champ | Valeur |
+|---|---|
+| **Autorité** | Morris |
+| **Consommation** | 2026-08-05 18:45 CEST (+0200) / 16:45 UTC |
+| **Cycle** | Implementation Preparation — Persistence A2 Remaining Options Targeted Validation |
+| **Profil** | **Critical** |
+| **Portée** | Deux validations ciblées indépendantes (managed store · migration tool) · preuves · recommandations candidates · Decision Pack complémentaire · **sans** sélection · **sans** installation |
+| **Non-effet** | Aucun fournisseur SELECTED · aucun outil SELECTED · aucun package/Docker/SQL/migration · LOT-D1 **NOT AUTHORIZED** · Delivery **NOT-CONSUMED** |
+| **Analyses** | `115-…-managed-store-targeted-validation.md` · `116-…-migration-tool-targeted-validation.md` |
+| **Decision Pack** | `117-…-remaining-options-validation-decision-pack.md` |
+
+### Chaîne documentaire Persistence A2 (post-validation)
+
+| Document | Rôle |
+|---|---|
+| **114** | arbitrage partiel appliqué (PostgreSQL · pg · LD-A) |
+| **115** | validation ciblée managed store |
+| **116** | validation ciblée migration tool |
+| **117** | Decision Pack complémentaire (deux décisions **NOT DECIDED**) |
+
+### Décisions technologiques (état opérationnel)
+
+| ID | Statut |
+|---|---|
+| D-ASST-A2-SQL-ENGINE-01 | **POSTGRESQL — SELECTED** |
+| D-ASST-A2-DATA-DRIVER-01 | **PG NODE-POSTGRES — SELECTED** |
+| D-ASST-A2-LOCAL-DEV-TEST-01 | **LD-A — SELECTED** |
+| D-ASST-A2-MANAGED-STORE-01 | **TARGETED VALIDATION EXECUTED — NOT DECIDED — MORRIS ARBITRATION REQUIRED** |
+| D-ASST-A2-MIGRATION-TOOL-01 | **TARGETED VALIDATION EXECUTED — NOT DECIDED — MORRIS ARBITRATION REQUIRED** |
+
+Items DONE : **aucun**. TB-00-04 / TB-00-05 / TB-01-* : **pas** DONE.
+
+Recommandations candidates (non adoptées) : managed store **Neon** · migration tool **node-pg-migrate**. Alternatives : **RDS PostgreSQL** · **dbmate** (+ runner exclusif).

 ---
@@ -1620,8 +1663,6 @@
 **NOT AUTHORIZED — NOT SELECTED — FUTURE MORRIS DECISION REQUIRED**

-LOT-D1 (persist foundation) reste **NOT AUTHORIZED — NOT SELECTED — FUTURE MORRIS DECISION REQUIRED**. Blocages restants :
-- managed store **non sélectionné** (DEFERRED — TARGETED VALIDATION REQUIRED) ;
-- migration tool **non sélectionné** (DEFERRED — TARGETED VALIDATION REQUIRED) ;
-- validations ciblées managed store / migration tool **non exécutées** ;
+LOT-D1 (persist foundation) reste **NOT AUTHORIZED — NOT SELECTED — FUTURE MORRIS DECISION REQUIRED**. Blocages minimaux maintenus :
+- deux décisions restantes **non arbitrées** (validations exécutées · **NOT DECIDED**) ;
 - version PostgreSQL **non sélectionnée** ;
 - version pg **non sélectionnée** ;
@@ -1641,5 +1682,5 @@
 ## 23. Chemin critique

-**LOT-IP-0A** décisions appliquées → **LOT-IP-0B** décisions appliquées → **préparation technologique A2** (112/113) → **arbitrage partiel** : PostgreSQL + pg + LD-A **sélectionnés** → **validation ciblée** managed store → **validation ciblée** migration tool → **arbitrage** des deux décisions restantes → **application complète** des décisions → **éventuelle sélection** de LOT-D1 par Morris → GO Delivery distinct → implémentation future.
+**LOT-IP-0A** / **LOT-IP-0B** décisions appliquées → PostgreSQL + pg + LD-A **sélectionnés** → **validations ciblées** managed store et migration tool (**exécutées** · docs 115/116/117) → **arbitrage Morris** des deux décisions restantes → **application complète** des décisions → **éventuelle sélection** LOT-D1 → GO Delivery distinct → implémentation future.

 LOT-D1 **n’est pas** éligible, sélectionné ni autorisé sans décision Morris distincte.
@@ -1695,9 +1736,14 @@
 - managed store · migration tool **DEFERRED**.

-### Vers validation ciblée managed store / migration tool (prochaine)
-
-- GO candidate `VALIDATE REMAINING PERSISTENCE A2 MANAGED STORE AND MIGRATION TOOL OPTIONS` ;
-- deux validations ciblées indépendantes ;
-- ne pas sélectionner automatiquement Neon ou dbmate ;
+### Vers validation ciblée managed store / migration tool
+
+- **fait** (GO consommé 2026-08-05 18:45 CEST) · documents 115/116/117 créés ;
+- deux décisions restent **NOT DECIDED** ;
+- recommandations candidates uniquement.
+
+### Vers arbitrage des deux décisions restantes (prochaine)
+
+- GO candidate `ARBITRATE REMAINING PERSISTENCE A2 MANAGED STORE AND MIGRATION TOOL DECISIONS` ;
+- ne pas sélectionner automatiquement Neon ou node-pg-migrate ;
 - ne pas autoriser LOT-D1 ;
 - Delivery reste NOT-CONSUMED.
@@ -1707,5 +1753,5 @@
 - décisions LOT-IP-0B appliquées (**fait**) ;
 - PostgreSQL · pg · LD-A sélectionnés (**fait**) ;
-- managed store et migration tool **sélectionnés** après validation ciblée ;
+- managed store et migration tool **arbitrés et appliqués** ;
 - version PostgreSQL / pg / Docker-CI traités ;
 - technologies concrètes compatibles DA-A / MIG-C / P1 ;
@@ -1724,5 +1770,5 @@
 ## 27. Risques et incertitudes

-Auth absente en code · store classe décidée / produit managé différé · patterns DA-A/MIG-C/P1 décidés · PostgreSQL + pg + LD-A **SELECTED** · managed store / migration tool **DEFERRED** · Neon/dbmate **NOT SELECTED** · P2 non sélectionné · AJV extension décidée / schémas N2/N3 non implémentés · réserves UX · FinOps hard / TTL ouverts · memory/fixture **≠** A2 durable · risque d’installer Docker/pg trop tôt · risque de sélection implicite Neon/dbmate.
+Auth absente en code · store classe décidée / produit managé différé · patterns DA-A/MIG-C/P1 décidés · PostgreSQL + pg + LD-A **SELECTED** · managed store / migration tool **VALIDATED NOT DECIDED** · Neon/node-pg-migrate = candidates only · **NOT SELECTED** · P2 non sélectionné · AJV extension décidée / schémas N2/N3 non implémentés · réserves UX · FinOps hard / TTL ouverts · memory/fixture **≠** A2 durable · risque d’installer Docker/pg trop tôt · risque de sélection implicite Neon/dbmate.

 ---
@@ -1730,5 +1776,5 @@
 ## 28. Non-sélections

-**Classe SQL relationnelle managée = DECIDED** (STORE-01=A). **Patterns** DA-A / MIG-C / P1 = **DECIDED**. P2 = **CO-COMPATIBLE — NOT SELECTED**. **PostgreSQL** = **SELECTED** (moteur). **pg (node-postgres)** = **SELECTED** (driver). **LD-A** = **SELECTED** (stratégie local-dev/test). Managed store = **DEFERRED**. Migration tool = **DEFERRED**. Restent **NOT SELECTED** : version PostgreSQL · fournisseur de store · Neon · Supabase · RDS · Aurora · région · plan · SLA · backup policy · restore policy · PITR policy · version pg · postgres.js · @neondatabase/serverless · ORM · query builder · outil de migration · dbmate · node-pg-migrate · mécanisme de verrouillage · format final de migration · version image Docker · configuration Docker · configuration CI Docker · fournisseur de branche distante · compute P1 concret · secret manager · observability vendor · scheduler · schéma physique · SQL · DDL · migration · TTL · hard caps · SLO — **FUTURE DEDICATED DECISION OR VALIDATION GATE REQUIRED**.
+**Classe SQL relationnelle managée = DECIDED** (STORE-01=A). **Patterns** DA-A / MIG-C / P1 = **DECIDED**. P2 = **CO-COMPATIBLE — NOT SELECTED**. **PostgreSQL** = **SELECTED** (moteur). **pg (node-postgres)** = **SELECTED** (driver). **LD-A** = **SELECTED** (stratégie local-dev/test). Managed store = **NOT DECIDED** (validation exécutée). Migration tool = **NOT DECIDED** (validation exécutée). Restent **NOT SELECTED** : version PostgreSQL · fournisseur de store · Neon · Supabase · RDS · Aurora · région · plan · SLA · backup policy · restore policy · PITR policy · version pg · postgres.js · @neondatabase/serverless · ORM · query builder · outil de migration · dbmate · node-pg-migrate · mécanisme de verrouillage · format final de migration · version image Docker · configuration Docker · configuration CI Docker · fournisseur de branche distante · compute P1 concret · secret manager · observability vendor · scheduler · schéma physique · SQL · DDL · migration · TTL · hard caps · SLO — **FUTURE DEDICATED DECISION OR VALIDATION GATE REQUIRED**.

 ---
@@ -1736,5 +1782,5 @@
 ## 29. Actions autorisées

-Maintenir 112/113 historiques · maintenir 114 comme record d’arbitrage partiel · tracer l’état dans 103 · maintenir 104–111 byte-identical · préparer validations ciblées managed store / migration tool · publier le handoff.
+Maintenir 112–114 historiques · maintenir 115–117 comme record de validation · tracer l’état dans 103 · préparer arbitrage Morris des deux décisions · publier le handoff.

 ---
@@ -1742,5 +1788,5 @@
 ## 30. Actions interdites

-Réécrire 113 · sélectionner Neon/Supabase/RDS/Aurora · sélectionner dbmate/node-pg-migrate · sélectionner P2 · installer pg · configurer Docker/Compose · créer code, SQL, DDL, migration, package ou IaC · créer un compte/service · exécuter LOT-IP-0C · sélectionner ou exécuter LOT-D1 à LOT-D5 · fermer une réserve · marquer un item DONE · Delivery · commit/push projet · PR/merge.
+Réécrire 114 · sélectionner Neon/Supabase/RDS/Aurora · sélectionner dbmate/node-pg-migrate · sélectionner P2 · installer pg ou node-pg-migrate · configurer Docker/Compose · créer code, SQL, DDL, migration, package ou IaC · créer un compte/service · exécuter LOT-IP-0C · sélectionner ou exécuter LOT-D1 à LOT-D5 · fermer une réserve · marquer un item DONE · Delivery · commit/push projet · PR/merge.

 ---
@@ -1748,5 +1794,5 @@
 ## 31. Anti-claims

-Sélection documentaire ≠ installation · LD-A ≠ Docker configuré · PostgreSQL ≠ base créée · pg ≠ package installé · arbitrage partiel ≠ cinq décisions SELECTED · Neon/dbmate ≠ SELECTED · DA-A/MIG-C/P1 ≠ produits managés choisis · P2 ≠ sélectionné · TB-00-04/05/TB-01-* ≠ DONE · LOT-IP-0C DEFERRED · LOT-D* NOT AUTHORIZED · memory ≠ A2 durable · aucun item DONE · Delivery NOT-CONSUMED · réserves ouvertes.
+Sélection documentaire ≠ installation · LD-A ≠ Docker configuré · PostgreSQL ≠ base créée · pg ≠ package installé · validation ciblée ≠ sélection · recommendations ≠ SELECTED · Neon/node-pg-migrate ≠ SELECTED · DA-A/MIG-C/P1 ≠ produits managés choisis · P2 ≠ sélectionné · TB-00-04/05/TB-01-* ≠ DONE · LOT-IP-0C DEFERRED · LOT-D* NOT AUTHORIZED · memory ≠ A2 durable · aucun item DONE · Delivery NOT-CONSUMED · réserves ouvertes.

 ---
@@ -1757,12 +1803,12 @@
 **PERSISTENCE A2 TECHNOLOGY DECISION PACK PARTIALLY ARBITRATED —**
 **POSTGRESQL SELECTED — PG NODE-POSTGRES SELECTED — LD-A SELECTED —**
-**MANAGED STORE DEFERRED — MIGRATION TOOL DEFERRED —**
-**NEON NOT SELECTED — DBMATE NOT SELECTED —**
-**DOCUMENT 103 UPDATED — DOCUMENT 114 CREATED —**
-**DOCUMENTS 104 TO 113 BYTE-IDENTICAL — DOCUMENT 115 ABSENT —**
+**MANAGED STORE TARGETED VALIDATION EXECUTED — NOT DECIDED —**
+**MIGRATION TOOL TARGETED VALIDATION EXECUTED — NOT DECIDED —**
+**DOCUMENT 103 UPDATED — DOCUMENTS 115, 116 AND 117 CREATED —**
+**DOCUMENTS 104 TO 114 BYTE-IDENTICAL — DOCUMENT 118 ABSENT —**
 **GRAPH 33/56 PRESERVED — PRIORITIES PRESERVED — NO ITEM DONE —**
 **LOT-IP-0C DEFERRED — LOT-D1 TO LOT-D5 NOT AUTHORIZED —**
 **DELIVERY NOT-CONSUMED —**
-**READY FOR CHATGPT VALIDATION AND MORRIS TARGETED VALIDATION SELECTION**
+**READY FOR CHATGPT VALIDATION AND MORRIS REMAINING TECHNOLOGY ARBITRATION**


@@ -1772,5 +1818,5 @@

 ```text
-GO IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — VALIDATE REMAINING PERSISTENCE A2 MANAGED STORE AND MIGRATION TOOL OPTIONS
+GO DECISIONS IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — ARBITRATE REMAINING PERSISTENCE A2 MANAGED STORE AND MIGRATION TOOL DECISIONS
 ```

@@ -1778,10 +1824,9 @@

 Effet futur :
-- effectuer deux validations ciblées indépendantes ;
-- compléter les preuves nécessaires ;
-- ne pas sélectionner automatiquement Neon ;
-- ne pas sélectionner automatiquement dbmate ;
+- arbitrer `D-ASST-A2-MANAGED-STORE-01` et `D-ASST-A2-MIGRATION-TOOL-01` ;
+- ne pas sélectionner automatiquement Neon ou node-pg-migrate ;
 - ne pas autoriser LOT-D1 ;
-- ne pas consommer Delivery.
-
-**PERSISTENCE A2 PARTIAL TECHNOLOGY ARBITRATION APPLIED — TARGETED VALIDATION REQUIRED — DELIVERY NOT CONSUMED**
+- ne pas consommer Delivery ;
+- ne pas installer package ni provisionner de compte.
+
+**PERSISTENCE A2 REMAINING OPTIONS VALIDATED — MORRIS ARBITRATION REQUIRED — DELIVERY NOT CONSUMED**
```

## Local Git Truth finale

| Champ | Valeur |
|---|---|
| Date | 2026-08-05 18:59:52 CEST (+0200) / 2026-08-05 16:59:52 UTC |
| toplevel | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/delivery-d2-d1` |
| branche | `implementation-preparation/sfia-studio-assistant-sfia-native-openai-persistence-a2-remaining-options-validation` |
| HEAD | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| origin/main | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| merge-base | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| ahead/behind | 0 / 0 |
| upstream | aucun |
| commit/push projet | aucun |
| 103 | `d147e44447a9dc261c85c358e6bc8cb879ae42b1238ca3452cc089bab030b0b6` / 1832 |
| 115 | `2e814ccfd6c735efaaae6193b08b555bd9a9d478927b06b78c5d78c67c61944b` / 533 |
| 116 | `9e47ea245c1488f0367260975430a33b58339ea57e113da9ea6262b8ae602261` / 442 |
| 117 | `3bf6adc9d7e53ffe3f6a3a82fb41f6763f300488df8dc33e8b49fcb90bbe3d68` / 260 |
| 118 | ABSENT |

### status (extrait)

```text
?? projects/sfia-studio/100-assistant-sfia-native-openai-technical-architecture.md
?? projects/sfia-studio/101-assistant-sfia-native-openai-technical-architecture-decision-pack.md
?? projects/sfia-studio/102-assistant-sfia-native-openai-technical-architecture-decisions-applied.md
?? projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md
?? projects/sfia-studio/104-assistant-sfia-native-openai-technical-implementation-backlog-decisions-applied.md
?? projects/sfia-studio/105-assistant-sfia-native-openai-implementation-preparation-lot-ip-0a.md
?? projects/sfia-studio/106-assistant-sfia-native-openai-implementation-preparation-lot-ip-0a-decision-pack.md
?? projects/sfia-studio/107-assistant-sfia-native-openai-implementation-preparation-lot-ip-0a-decisions-applied.md
?? projects/sfia-studio/108-assistant-sfia-native-openai-lot-ip-0b-selection-decisions-applied.md
?? projects/sfia-studio/109-assistant-sfia-native-openai-implementation-preparation-lot-ip-0b.md
?? projects/sfia-studio/110-assistant-sfia-native-openai-implementation-preparation-lot-ip-0b-decision-pack.md
?? projects/sfia-studio/111-assistant-sfia-native-openai-implementation-preparation-lot-ip-0b-decisions-applied.md
?? projects/sfia-studio/112-assistant-sfia-native-openai-persistence-a2-technology-selection-preparation.md
?? projects/sfia-studio/113-assistant-sfia-native-openai-persistence-a2-technology-selection-decision-pack.md
?? projects/sfia-studio/114-assistant-sfia-native-openai-persistence-a2-technology-selection-decisions-applied.md
?? projects/sfia-studio/115-assistant-sfia-native-openai-persistence-a2-managed-store-targeted-validation.md
?? projects/sfia-studio/116-assistant-sfia-native-openai-persistence-a2-migration-tool-targeted-validation.md
?? projects/sfia-studio/117-assistant-sfia-native-openai-persistence-a2-remaining-options-validation-decision-pack.md
```

### remote handoff (avant publication)

```text
a7833b94d7ee1b0178b5d2eb885c550748e6d2b0	refs/heads/sfia/review-handoff
```

## Prochaine gate candidate

```text
GO DECISIONS IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — ARBITRATE REMAINING PERSISTENCE A2 MANAGED STORE AND MIGRATION TOOL DECISIONS
```

Candidate only — non consommée — n’autorise ni LOT-D1 ni Delivery.

## Coverage

| Champ | Valeur |
|---|---|
| document 115 complet | yes |
| document 116 complet | yes |
| document 117 complet | yes |
| sections 103 modifiées complètes | yes |
| diff utile 103 | yes |
| registres des sources | yes |
| Local Git Truth initiale | yes |
| Local Git Truth finale | yes |
| synthesis only | no |
| placeholder actif | no |
| review pack verdict | complete |

## Verdict

**PERSISTENCE A2 REMAINING OPTIONS TARGETED VALIDATION EXECUTED —**
**MANAGED STORE OPTIONS VALIDATED — NEON / SUPABASE / RDS / AURORA VALIDATED —**
**MIGRATION TOOL OPTIONS VALIDATED — DBMATE / NODE-PG-MIGRATE VALIDATED —**
**CONCURRENT LOCKING QUALIFIED —**
**TWO DECISION-READINESS STATUSES PRODUCED —**
**RECOMMENDATIONS REMAIN CANDIDATE —**
**D-ASST-A2-MANAGED-STORE-01 NOT DECIDED —**
**D-ASST-A2-MIGRATION-TOOL-01 NOT DECIDED —**
**NO PROVIDER, REGION, PLAN OR TOOL SELECTED —**
**DOCUMENT 103 UPDATED — DOCUMENTS 115, 116, 117 CREATED —**
**DOCUMENTS 104 TO 114 BYTE-IDENTICAL — DOCUMENT 118 ABSENT —**
**POSTGRESQL, PG AND LD-A PRESERVED — A2, DA-A, MIG-C, P1 PRESERVED —**
**P2 NOT SELECTED — GRAPH 33/56 — PRIORITIES — NO ITEM DONE —**
**LOT-IP-0C DEFERRED — LOT-D1 TO LOT-D5 NOT AUTHORIZED —**
**NO CODE/PACKAGE/DOCKER/SQL/MIGRATION — NO ACCOUNT — NO PROJECT COMMIT/PUSH —**
**DELIVERY NOT-CONSUMED —**
**READY FOR CHATGPT VALIDATION AND MORRIS REMAINING TECHNOLOGY ARBITRATION**

## Instruction ChatGPT

Consulter `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md` avant réponse à Morris. Vérifier GO · 103 · 115/116/117 · 104–114 inchangés · 118 absent · sources · versions/commits · readiness · NOT DECIDED · pas de SELECTED fournisseur/outil · LOT-D1 non autorisé · pas code/Docker/SQL · Delivery NOT-CONSUMED · truth finale · commit distant.
