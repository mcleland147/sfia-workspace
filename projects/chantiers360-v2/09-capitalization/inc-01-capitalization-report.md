# INC-01 Capitalization Report — Chantiers360 v2

**Projet :** Chantiers360 v2 — premier pilote SFIA v2.0  
**Chemin :** `projects/chantiers360-v2/09-capitalization/inc-01-capitalization-report.md`  
**Date :** 2026-07-06  
**Branche :** `main` @ `2bbb699`  
**Statut INC-01 :** CLOSED WITH RESERVES  
**Type de cycle :** Capitalisation post-incrément — documentaire uniquement

---

## 1. Contexte INC-01

Chantiers360 v2 est le **premier delivery code complet** du pilote SFIA v2.0. INC-01 a livré le socle chantier (US-01 à US-04) après une chaîne documentaire complète : bootstrap → cadrage → archi fonctionnelle → UX/UI → backlog → design Figma → archi technique → Figma Fidelity Spike → delivery.

| Élément | Valeur |
|---------|--------|
| Incrément | INC-01 — foundation chantier |
| Périmètre | US-01 à US-04 uniquement |
| Stack | Next.js + PostgreSQL + Drizzle + Tailwind |
| Spike réutilisé | Dashboard Figma Fidelity (PR #104) |
| Standard QA | SFIA v2.0 Delivery QA/Test (PR #107) |

---

## 2. Chaîne complète des PR

| Étape | PR | Commit | Rôle |
|-------|-----|--------|------|
| Delivery fonctionnel | [#108](https://github.com/mcleland147/sfia-workspace/pull/108) | `1b9e41f` | App, DB, E2E, infra test PostgreSQL |
| QA-G4 post-merge | [#109](https://github.com/mcleland147/sfia-workspace/pull/109) | `128d6fc` | Contrôle non-régression + rapport QA-G4 |
| Clôture INC-01 | [#110](https://github.com/mcleland147/sfia-workspace/pull/110) | `2bbb699` | Rapport clôture — CLOSED WITH RESERVES |

**Séquence validée :** delivery → QA-G3 → PR readiness → PR #108 → QA-G4 → PR #109 → closure → PR #110 → **capitalisation** (ce document).

---

## 3. Périmètre livré

| US | Fonctionnalité | Preuve |
|----|----------------|--------|
| US-01 | Création chantier | E2E + validation serveur |
| US-02 | Liste chantiers | E2E empty state + cartes |
| US-03 | Fiche chantier | E2E + placeholders INC-02+ |
| US-04 | Modification statut | E2E 4 statuts |

**Hors scope respecté :** pas de tâches, réserves, jalons, CR, auth, client, billing, V0, Notion/CMP, modification backlog/design.

---

## 4. Ce qui a bien fonctionné

| # | Succès | Détail |
|---|--------|--------|
| S1 | **Chaîne SFIA v2.0 bout-en-bout** | Premier pilote traversant design → spike → delivery → QA → clôture |
| S2 | **Réutilisation spike Figma** | Dashboard mocké branché DB sans refonte UI |
| S3 | **QA transverse avant PR** | QA-G3 a bloqué la PR jusqu'aux preuves E2E |
| S4 | **PostgreSQL test reproductible** | `docker-compose.test.yml` port 5433 + `test:e2e:full` |
| S5 | **Playwright E2E par US** | 4 tests alignés acceptance criteria INC-01 |
| S6 | **PR readiness documentée** | `pr-readiness-inc-01.md` — périmètre, réserves, test plan |
| S7 | **Clôture avec réserves** | Statut CLOSED WITH RESERVES sans masquer les écarts |
| S8 | **Branches delivery dédiées** | `delivery/…` puis docs `docs/…` — pas de push direct main |
| S9 | **Morris valide preuves** | Distinction claire exécution Cursor vs GO Morris |

---

## 5. Ce qui a créé de la friction

| # | Friction | Impact | Mitigation capitalisée |
|---|----------|--------|------------------------|
| F1 | **Port 3000 occupé** | `test:e2e:full` échoue si instance dev locale | R-QA-05 ; fallback port 3001 documenté |
| F2 | **Écart backlog / code** | « En pause » vs « En retard » | R-QA-02 ; décision Morris explicite D-INC01-4 |
| F3 | **Validation HTML5 seule** | Formulaire vide non couvert E2E serveur | R-QA-03 ; acceptable INC-01 |
| F4 | **Panneaux mock spike** | Dashboard droite hors assertions INC-01 | R-QA-04 ; reporté INC-05+ |
| F5 | **Multiples PRs docs post-delivery** | #109 QA-G4 + #110 clôture séparées | Standard closure chain (actif méthode) |
| F6 | **Divergence branche locale / merge commit** | SHA local ≠ SHA merge GitHub | Synchroniser `git pull` après chaque merge Morris |

---

## 6. Rôle QA-G3

| Aspect | Retour d'expérience |
|--------|-------------------|
| **Moment** | Avant PR readiness — obligatoire |
| **Contenu** | lint, build, E2E exécutés, réserves listées |
| **Verdict pilote** | GO QA WITH RESERVES |
| **Morris** | Valide preuves — ne déroule pas les tests |
| **Effet** | PR #108 livrée avec réserves documentées dans le body |

**Enseignement :** QA-G3 est le **gate bloquant** avant toute PR delivery — à généraliser pour INC-02+.

---

## 7. Rôle QA-G4

| Aspect | Retour d'expérience |
|--------|-------------------|
| **Moment** | Après merge delivery sur `main` |
| **Contenu** | Re-vérification périmètre, lint/build, E2E post-merge |
| **Verdict pilote** | QA-G4 OK WITH RESERVES |
| **PR dédiée** | #109 — documentation post-merge séparée du code |

**Enseignement :** QA-G4 confirme que `main` reflète le delivery attendu — distinct de la clôture documentaire.

---

## 8. Rôle PostgreSQL test reproductible

| Élément | Détail |
|---------|--------|
| Fichier | `app/docker-compose.test.yml` — postgres:16-alpine, port **5433** |
| Scripts | `db:test:up`, `db:test:migrate`, `test:e2e:full` |
| Config | `.env.test.example` |
| Runbook | `08-qa-test/inc-01/local-e2e-runbook.md` |

**Enseignement :** infra test Docker **dès INC-01** — évite dépendance DB locale Morris. Réutiliser pour INC-02+.

---

## 9. Rôle PR readiness

| Aspect | Retour d'expérience |
|--------|-------------------|
| Document | `07-delivery-inc-01/pr-readiness-inc-01.md` |
| Contenu | Périmètre, hors scope, réserves, test plan, setup, corps PR §12 |
| Gate | Morris GO PR readiness — distinct de GO QA |
| Niveau automation | L3/L4 préparation — **GO PR = L0 Morris** |

**Enseignement :** PR readiness = synthèse contractuelle avant PR — réduit les allers-retours en revue.

---

## 10. Rôle clôture avec réserves

| Aspect | Retour d'expérience |
|--------|-------------------|
| Document | `07-delivery-inc-01/inc-01-closure-report.md` |
| Statut | **CLOSED WITH RESERVES** |
| PR | #110 — docs uniquement |
| Distinction | Clôture ≠ GO incrément suivant |

**Enseignement :** un incrément peut être **officiellement terminé** avec réserves mineures acceptées — sans bloquer la capitalisation ni forcer un GO INC-02.

---

## 11. Réserves acceptées (conservées)

| # | Réserve | Type | Statut |
|---|---------|------|--------|
| R-QA-01 | E2E exécutés | — | Levée |
| R-QA-02 | En pause vs En retard | Mineure | Ouverte — acceptée |
| R-QA-03 | HTML5 `required` | Mineure | Ouverte — acceptée |
| R-QA-04 | Panneaux mock | Mineure | Ouverte — acceptée |
| R-QA-05 | Port 3000 / fallback 3001 | Environnementale | Ouverte — documentée |

---

## 12. Enseignements pour INC-02

| # | Enseignement | Action suggérée |
|---|--------------|-----------------|
| E1 | Reprendre infra test Docker | Réutiliser `docker-compose.test.yml` |
| E2 | Un rapport QA par incrément | `08-qa-test/inc-02/` |
| E3 | E2E par US livrées | Étendre `e2e/inc-02.spec.ts` |
| E4 | PR readiness avant PR | Document `07-delivery-inc-02/pr-readiness-inc-02.md` |
| E5 | Ne pas corriger R-QA-02 sans GO Morris | Micro-alignement backlog optionnel |
| E6 | GO INC-02 = décision séparée | Pas implicite après clôture INC-01 |

---

## 13. Enseignements pour SFIA v2.0

| # | Enseignement | Actif méthode |
|---|--------------|---------------|
| M1 | Chaîne delivery complète standardisable | `sfia-v2-incremental-delivery-closure-standard.md` |
| M2 | QA automatise preuves — Morris arbitre | `sfia-v2-delivery-qa-test-standard.md` |
| M3 | Niveaux L0–L4 sur cycle delivery | `sfia-v2-automation-levels.md` |
| M4 | Capitalisation après 1er incrément pilote | Recommandée — ce rapport |
| M5 | L5 global interdit | Inchangé |
| M6 | Git = source de vérité | Validé sur 3 PRs INC-01 |

---

## 14. Décisions Morris à venir

| # | Question | Statut |
|---|----------|--------|
| D1 | Valider capitalisation INC-01 ? | ⏳ En attente — ce cycle |
| D2 | Promouvoir standard closure en méthode v2.0 ? | ⏳ `sfia-v2-incremental-delivery-closure-standard.md` |
| D3 | GO INC-02 ? | ❌ Non accordé — décision séparée |
| D4 | Micro-alignement R-QA-02 (backlog) ? | ⏳ Optionnel |
| D5 | Comparaison V0 | Fin de pilote uniquement |

---

## 15. Verdict capitalisation

### **Capitalisation INC-01 documentée — READY FOR REVIEW**

Premier delivery SFIA v2.0 capitalisé. INC-01 reste **CLOSED WITH RESERVES**. INC-02 non lancé.

---

**Documents liés :**

- `07-delivery-inc-01/inc-01-closure-report.md`
- `08-qa-test/inc-01/qa-g4-post-merge-report.md`
- `method/.../sfia-v2-incremental-delivery-closure-standard.md`
