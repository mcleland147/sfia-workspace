# Chantiers360 v2 — Cadrage évolutions post-MVP

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/00-framing/chantiers360-post-mvp-framing.md`  
**Date de création :** 2026-07-09  
**Cycle :** Cadrage — évolutions post-MVP  
**Type de cycle projet :** Cadrage (1)  
**Profil SFIA :** Standard  
**Typologie v2.4 :** EVOL / Evolution structurée post-MVP  
**Méthode appliquée :** SFIA v2.5 **candidate** (test Cycle 4) — SFIA v2.4 baseline opérationnelle

---

## 1. Statut du cycle

| Élément | Valeur |
|---------|--------|
| **Nature** | Proposition de cadrage post-MVP — documentaire uniquement |
| **Statut** | **Proposition** — non validée par Morris |
| **Baseline méthode** | SFIA v2.4 opérationnelle |
| **Méthode testée** | SFIA v2.5 **candidate** — ne valide pas v2.5 comme baseline |
| **Décision Morris** | **Non validée** — GO trajectoire post-MVP absent |
| **Post-MVP lancé ?** | **Non** — ce document prépare uniquement la trajectoire |

> **Observation :** le MVP Chantiers360 v2 est capitalisé avec réserves. Les incréments INC-01 à INC-05 sont clôturés. Aucun cycle delivery post-MVP n'est ouvert.

---

## 2. Contexte MVP

### 2.1 Synthèse du statut MVP

| Élément | Valeur |
|---------|--------|
| **Statut MVP** | **MVP CAPITALIZED WITH RESERVES** — Morris (2026-07-07) |
| **INC-01** | CLOSED WITH RESERVES — PR #108–#110 |
| **INC-02** | CLOSED WITH RESERVES — PR #115–#117 |
| **INC-03** | CLOSED WITH RESERVES — PR #119–#121 |
| **INC-04** | CLOSED WITH RESERVES — PR #122–#124 |
| **INC-05** | CLOSED WITH RESERVES — PR #125–#127 |
| **E2E cumulatif final** | 16 passed (Playwright) |
| **Stack livrée** | Next.js App Router + PostgreSQL + Drizzle + Tailwind — auth différée |
| **US couvertes** | US-01 à US-13 (backlog P1/P2 initial) |

**Socle produit livré :** liste chantiers, fiche, tâches, réserves, jalons simples, comptes rendus, prochaines actions dérivées (`/prochaines-actions`), statut et retard.

### 2.2 Cycles documentaires post-clôture déjà réalisés

| Cycle | Statut | Référence |
|-------|--------|-----------|
| Capitalisation MVP | ✅ Mergé PR #128 | `09-capitalization/mvp-capitalization-report.md` |
| Comparaison V0 vs SFIA v2 | ✅ Mergé PR #136 | `v0-vs-sfia-v2-methodological-comparison.md` — verdict : V2 NEEDS LIGHT CONSOLIDATION |
| Design coverage SFIA v2.0 | ✅ Mergé PR #129–#130 | R-UX-01 **non levée** |
| Standard ADR/DAA/DAT | ✅ Mergé PR #131–#132 | ADR/DAA/DAT **projet non produits** |
| REX pilote final | ✅ Documenté | `chantiers360-v2-final-pilot-rex-report.md` |

### 2.3 Limites de l'analyse

- Aucune relecture exhaustive des 44 PR du pilote — synthèse basée sur rapports capitalisation, clôtures INC et QA.
- Aucun test applicatif exécuté dans ce cycle (cadrage documentaire Standard).
- Trajectoire produit commerciale (devis, facturation) : hors MVP documenté — non détaillée techniquement ici.
- Auth, déploiement production, observabilité RUN : **non livrés** au MVP — identifiés comme axes post-MVP potentiels.

---

## 3. Réserves reprises

| ID | Statut observé | Description | Impact potentiel | Traitement possible | Cycle SFIA recommandé | Décision Morris |
|----|----------------|-------------|------------------|---------------------|----------------------|-----------------|
| **R-UX-01** | Ouverte — acceptée | Écran `/prochaines-actions` sans frame Figma dédiée — extrapolation patterns UI INC-05 | Dette design ; risque fidélité visuelle si évolution UI sans source validée | Rattrapage design Figma ; ou maintien accepté ; ou refonte UI guidée | **UX/UI** (si reprise design) ; **Capitalization** (si capitalisation méthode design coverage) | **Oui** — accepter, lever ou planifier rattrapage |
| **R-QA-03** | Ouverte — acceptée | Validation formulaire chantier vide — HTML5 `required` uniquement, pas de message serveur E2E | UX formulaire faible ; risque données incomplètes si contournement client | Micro-cycle QA : validation serveur + E2E | **QA / validation** (Light) | **Oui** — GO micro-cycle ou maintien accepté |
| **R-QA-04** | Ouverte — acceptée | Panneaux dashboard droite mockés (héritage spike Figma) | Dashboard partiellement fictif ; dette UX produit | Remplacer mocks par données réelles ou redesign panneaux | **Delivery** + **UX/UI** (si redesign) | **Oui** — priorité produit vs dette technique |
| **R-QA-05** | Ouverte — environnementale | Port 3000 occupé bloque `test:e2e:full` — fallback port 3001 documenté | Friction développement local ; CI/local non harmonisé | Script port dédié ; doc runbook ; config Playwright | **QA / validation** (Light) ou **Intégration / DevOps** (Light) | **Optionnelle** — GO si objectif qualité opérationnelle |

**Rappel :** aucune réserve n'était bloquante à la capitalisation MVP. Leur traitement post-MVP est un **choix de qualité / produit**, pas une obligation de clôture MVP.

---

## 4. Axes d'évolution post-MVP

### 4.1 UX / UI

| Élément | Détail |
|---------|--------|
| **R-UX-01** | Frame Figma `/prochaines-actions` |
| **R-QA-04** | Panneaux dashboard droite — données réelles vs mock |
| **Fidélité design** | 4 frames P1 Figma validées — écrans post-INC-05 partiellement hors couverture |
| **Accessibilité** | Non évaluée au MVP — à traiter si évolution UI publique |

### 4.2 QA / fiabilisation

| Élément | Détail |
|---------|--------|
| **R-QA-03 à R-QA-05** | Micro-cycle réserves documenté mais non lancé |
| **Profondeur QA** | 16 E2E vs 292 exécutions V0 — gap documenté REX pilote |
| **Production readiness** | Absente — pas d'équivalent K0–K4 V0 |

### 4.3 Produit / valeur utilisateur

Extensions métier **hors MVP** documentées dans `scope-boundaries.md` :

| Extension | Priorité documentée | Dépendances |
|-----------|----------------------|-------------|
| **Devis** | Prioritaire future | Socle chantier validé |
| **Facturation** | Prioritaire future | Devis ou module commercial |
| **Intégrations comptables** | Prioritaire future | Facturation |
| **Accès client** | Future | Auth, périmètre sécurité |
| **Planning avancé** | Future | Jalons simples en place |
| **Auth / multi-user** | Différée INC-01 | Sécurité, rôles, RGPD |

**Observation :** le MVP couvre le **suivi opérationnel chantier**. Les extensions commerciales constituent un domaine distinct.

### 4.4 Exploitabilité / RUN

| Élément | Détail |
|---------|--------|
| **Déploiement** | Non réalisé — pas de go-live |
| **Observabilité** | Non documentée — logs, métriques, alerting absents |
| **Auth** | Différée — mono-utilisateur implicite |
| **Hébergement** | Local/dev documenté — PostgreSQL Docker port 5433 |

### 4.5 Sécurité / conformité

| Élément | Détail |
|---------|--------|
| **Auth** | Différée — impact si multi-user ou accès client |
| **RGPD** | Données client/adresse — à traiter si exposition ou multi-tenant |
| **Auditabilité** | Comptes rendus textuels — pas de journal d'audit formel |

**Point d'attention (non décision) :** toute évolution touchant rôles, habilitations ou données personnelles déclenchera un cycle RSSI / conformité proportionné.

### 4.6 Architecture fonctionnelle ou technique

| Élément | Détail |
|---------|--------|
| **ADR / DAA / DAT projet** | Standard méthode mergé PR #131 — **documents projet non produits** |
| **Décisions techniques** | Dispersées dans `07-delivery-inc-0n/`, `05-technical-architecture/` |
| **Auth** | Décision différée — impact architecture significatif |
| **Extensions commerciales** | Nouveaux domaines fonctionnels — cadrage requis avant delivery |

---

## 5. Options de trajectoire

> **Observation :** trois options maximum — non actées. Morris choisit une trajectoire ou une séquence.

### Option A — Sécurisation / réserves d'abord

> **Cadrage détaillé Option A :** [`chantiers360-post-mvp-option-a-reserves-first.md`](chantiers360-post-mvp-option-a-reserves-first.md) — R-UX-01 et R-QA-04 qualifiées (2026-07-09).

| Dimension | Contenu |
|-----------|---------|
| **Bénéfice** | Réduit la dette UX/QA avant nouvelles features ; aligne qualité opérationnelle |
| **Risque** | Retarde valeur produit visible (extensions métier) |
| **Dette** | Évite accumulation dette design (R-UX-01) et QA (R-QA-03–05) |
| **Cycles SFIA suivants** | QA Light (R-QA-03–05) → UX/UI (R-UX-01, R-QA-04) → Backlog si besoin |
| **Gate Morris** | GO micro-cycle réserves ; GO priorité qualité vs produit |

### Option B — Évolution produit priorisée

| Dimension | Contenu |
|-----------|---------|
| **Bénéfice** | Valeur métier rapide — devis, facturation ou auth selon priorité Morris |
| **Risque** | Dette réserves héritée ; design/QA non traités peuvent freiner évolutions UI |
| **Dette** | R-UX-01 et R-QA-04 peuvent s'aggraver si nouveaux écrans sans Figma |
| **Cycles SFIA suivants** | Cadrage fonctionnel extension → Backlog → Architecture (si structurant) → Delivery |
| **Gate Morris** | GO extension métier prioritaire ; GO accepter réserves ouvertes |

### Option C — Cadrage renforcé avant delivery

| Dimension | Contenu |
|-----------|---------|
| **Bénéfice** | Gouvernance technique (ADR/DAA/DAT) ; auth et déploiement cadrés avant code |
| **Risque** | Délai avant toute livraison ; surcharge documentaire si mal bornée |
| **Dette** | Évite décisions techniques implicites — utile si auth ou prod imminents |
| **Cycles SFIA suivants** | Architecture fonctionnelle (auth, extensions) → Architecture technique → ADR projet |
| **Gate Morris** | GO formalisation architecture ; GO production readiness |

**Justification Option C :** le REX pilote note l'absence de production readiness et d'ADR projet. Pertinent si Morris vise go-live ou auth avant extensions métier.

---

## 6. Recommandation

### Recommandation proposée (non décisionnelle)

**Observation :** le MVP est fonctionnellement bouclé. La comparaison V0 est faite. Les réserves sont ouvertes mais acceptées. Le REX pilote recommande de réduire la charge PR-driven et de recentrer Morris sur les arbitrages structurants.

**Recommandation proposée :** traiter d'abord les réserves **structurantes pour la prochaine évolution UI** (R-UX-01, R-QA-04) **ou** les classer explicitement comme **acceptées pour la phase post-MVP**, puis ouvrir **un seul** cycle produit prioritaire (extension métier ou auth) — **pas les deux en parallèle**.

**Séquence suggérée (non actée) :**

1. **Décision Morris** — priorité : qualité réserves vs extension produit vs cadrage architecture
2. **Un cycle unique** selon Option A, B ou C
3. **Backlog / user stories** pour découper le cycle choisi
4. **Delivery** uniquement après GO Morris explicite

> **Capitalization :** cette recommandation est une **proposition** — pas une décision validée.

---

## 7. Cycles SFIA suivants proposés

| # | Cycle | Déclencheur | Profil probable | Statut |
|---|-------|-------------|-----------------|--------|
| 1 | **QA / validation** — micro-cycle R-QA-03 à R-QA-05 | Option A — GO Morris | Light | Non lancé |
| 2 | **UX/UI** — R-UX-01, R-QA-04 dashboard | Option A ou avant Delivery UI | Standard | Non lancé |
| 3 | **Backlog / user stories** — extension métier ou auth | Option B ou C — après cadrage | Standard | Non lancé |
| 4 | **Architecture fonctionnelle** — auth, devis, facturation | Extension structurante | Standard ou Critical | Non lancé |
| 5 | **Architecture technique** — auth, déploiement, ADR | Dépendances techniques | Standard ou Critical | Non lancé |
| 6 | **Delivery / implémentation** | Après cadrage + backlog + GO Morris | Standard | Non lancé |
| 7 | **Sécurité / RSSI** | Si auth, multi-user, données sensibles | Critical si exposé | Non lancé |
| 8 | **Observabilité / RUN readiness** | Si go-live | Standard | Non lancé |
| 9 | **Capitalisation / REX** | Après premier cycle post-MVP | Capitalization Standard | Non lancé |

**Aucun de ces cycles n'est lancé par ce document.**

---

## 8. Décisions Morris requises

| # | Décision | Type |
|---|----------|------|
| 1 | **GO trajectoire post-MVP** — Option A, B, C ou séquence custom | Arbitrage structurant |
| 2 | **GO priorité des réserves** — traiter, maintenir acceptées, ou reclassement | Arbitrage |
| 3 | **GO ouverture cycle UX/UI** — si R-UX-01 / R-QA-04 à traiter | GO cycle |
| 4 | **GO ouverture cycle QA** — micro-cycle R-QA-03 à R-QA-05 | GO cycle |
| 5 | **GO ouverture cycle Backlog** — extension métier ou auth | GO cycle |
| 6 | **GO ouverture cycle Architecture** — si Option C ou extension structurante | GO cycle |
| 7 | **GO création PR** — pour intégrer ce cadrage ou cycles suivants | GO Git |
| 8 | **GO usage SFIA v2.5 candidate** — pour cycles post-MVP suivants | Méthode — ne valide pas v2.5 baseline |

**Décisions non requises dans ce cycle :** clôture réserves, merge, push, promotion SFIA v2.5 baseline, réouverture SFIA v3.0.

---

## 9. Garde-fous

| Garde-fou | Application |
|-----------|-------------|
| **Git = source de vérité** | Toute évolution post-MVP versionnée |
| **Cursor ne décide pas** | Ce document produit par exécution contrôlée |
| **Morris arbitre** | Trajectoire, priorités, GO cycles |
| **SFIA v2.5 = candidate** | Testé sur ce cycle — v2.4 reste baseline |
| **SFIA v3.0 / MCP / .sfia** | Hors trajectoire — non réactivés |
| **Aucune action distante** | Pas de push / PR / merge dans ce cycle |
| **Aucun changement applicatif** | Cadrage documentaire uniquement |
| **Observation ≠ décision** | Recommandations distinctes des décisions validées |

---

## 10. Verdict

### **READY FOR MORRIS REVIEW**

| Élément | Valeur |
|---------|--------|
| **Livrable** | Ce document de cadrage post-MVP |
| **Post-MVP lancé** | Non |
| **Décision Morris** | En attente — GO trajectoire et priorités |
| **Prochaine étape** | Morris valide Option A/B/C ou affine — puis un cycle unique |

---

*Chantiers360 v2 — Cadrage post-MVP — SFIA v2.5 candidate testé — v2.4 baseline — Morris décide.*
