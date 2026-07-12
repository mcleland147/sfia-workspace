# Interv360 — INC-01 PR Preparation

**Projet** : Interv360  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Cycle** : PR Preparation  
**Statut** : Préparation PR  
**Branche** : `delivery/interv360-inc-01-pr-preparation`

---

## 1. Objectif du document

Ce document prépare une éventuelle pull request de clôture pour INC-01.

Il ne crée pas la PR.

Il ne pousse pas la branche sur le remote.

Il sert à consolider les informations nécessaires avant décision de push / PR.

---

## 2. Branche source

**Branche source proposée :**

`delivery/interv360-inc-01-pr-preparation`

**Base de travail :**

`delivery/interv360-inc-01-global-summary`

**Dernier commit de clôture INC-01 :**

`985ebcb` — `docs: summarize INC-01 globally`

**Écart avec `main` :**

45 commits au-dessus de `main` (merge-base : `fc55205`).

---

## 3. Branche cible pressentie

**Cible pressentie :**

`main`

**À confirmer avant création effective de la PR.**

**Justification :**

- INC-01 est clôturé documentairement ;
- le démonstrateur local est validé ;
- la capitalisation Controlled Delivery est intégrée dans l'index markdown local ;
- aucun push ni PR n'a encore été réalisé dans ce cycle ;
- `origin/main` est la branche principale distante (`remotes/origin/HEAD → origin/main`).

---

## 4. Résumé du contenu à merger

La PR devrait consolider :

- le socle applicatif Interv360 INC-01 ;
- le parcours readonly ;
- le reset démo ;
- le workflow local contrôlé ;
- le journal local fictif ;
- les tests ;
- la validation fonctionnelle ;
- le script de démonstration ;
- le REX phase 2 ;
- le package final de démonstration ;
- la synthèse globale INC-01 ;
- la capitalisation SFIA Controlled Delivery ;
- l'index markdown local des méthodes.

**Commits applicatifs principaux :**

| Commit | Message |
|--------|---------|
| `9ba9a8c` | feat: add INC-01 app foundation |
| `d1dbee9` | feat: add INC-01 requests list skeleton |
| `71a092f` | feat: add INC-01 request detail skeleton |
| `96b9515` | feat: add INC-01 demo reset |
| `de3857e` | feat: add INC-01 qualification readonly skeleton |
| `e2d180d` | feat: add INC-01 planning readonly skeleton |
| `5e9b67f` | feat: add INC-01 intervention readonly skeleton |
| `78ed23d` | feat: add INC-01 report readonly skeleton |
| `7e675bc` | feat: add INC-01 controlled workflow skeleton |

**Commits méthode principaux :**

| Commit | Message |
|--------|---------|
| `36afa73` | docs: add controlled delivery standard |
| `bf918fa` | docs: harden controlled delivery standard |
| `61187dc` | docs: integrate controlled delivery index |

**Commits clôture documentaire :**

| Commit | Message |
|--------|---------|
| `9569575` | docs: add INC-01 demo script |
| `7a428a7` | docs: capture INC-01 phase 2 REX |
| `140a5be` | docs: add INC-01 final demo package |
| `985ebcb` | docs: summarize INC-01 globally |

---

## 5. Livrables principaux INC-01

| Livrable | Rôle |
|----------|------|
| `projects/interv360/app/` | Démonstrateur applicatif local |
| [`inc-01-global-summary.md`](inc-01-global-summary.md) | Synthèse globale INC-01 |
| [`inc-01-final-demo-package.md`](inc-01-final-demo-package.md) | Package final de démonstration |
| [`inc-01-demo-script.md`](inc-01-demo-script.md) | Script de démonstration |
| [`inc-01-controlled-workflow-validation.md`](inc-01-controlled-workflow-validation.md) | Validation fonctionnelle |
| [`2026-07-01-inc-01-phase-2-rex.md`](2026-07-01-inc-01-phase-2-rex.md) | REX phase 2 |
| [`../../../methods/controlled-delivery/`](../../../methods/controlled-delivery/) | Standard SFIA Controlled Delivery |
| [`../../../methods/README.md`](../../../methods/README.md) | Index markdown local des méthodes |

---

## 6. Validation rappelée

| Contrôle | Résultat |
|----------|----------|
| Build | OK |
| Tests | OK |
| Nombre de tests | 38 tests passés |
| Fichiers de tests | 12 fichiers |
| Workflow nominal | Validé |
| Reset | Validé |
| Journal | Validé |
| Garde-fous | Validés |

---

## 7. Garde-fous à rappeler dans la PR

La PR ne doit pas être présentée comme une mise en production.

INC-01 reste :

- local ;
- fictif ;
- démonstratif ;
- sans backend ;
- sans API ;
- sans base de données serveur ;
- sans donnée réelle ;
- sans CRM réel ;
- sans multi-utilisateur ;
- sans conformité production.

---

## 8. Points d'attention avant push / PR

Avant push effectif :

- [ ] confirmer la branche cible ;
- [ ] vérifier que le working tree est propre ;
- [ ] vérifier que `projects/interv360/03-design/exports/` n'est pas ajouté ;
- [ ] relancer build/tests si nécessaire ;
- [ ] vérifier l'absence de secrets ;
- [ ] vérifier l'absence de données réelles ;
- [ ] vérifier que la description PR explicite bien les limites ;
- [ ] décider si la PR inclut uniquement INC-01 ou aussi la méthode Controlled Delivery.

---

## 9. Commandes de vérification recommandées

À exécuter avant push éventuel :

```bash
cd /Users/morris/Projects/sfia-workspace
git status --short
cd projects/interv360/app
npm run build
npm run test -- --run
```

**Vérifications complémentaires :**

```bash
cd /Users/morris/Projects/sfia-workspace
grep -R "STAT-05\|STAT-07\|STAT-08\|fetch(\|axios\|SQL\|CREATE TABLE\|INSERT INTO\|CRM\|@|+33\|06 " projects/interv360/app/src || true
```

---

## 10. Proposition de titre PR

**Titre proposé :**

Add Interv360 INC-01 local SAV workflow demonstrator

**Alternative :**

Add Interv360 INC-01 demonstrator and Controlled Delivery method

---

## 11. Proposition de description PR

```markdown
## Summary

This PR consolidates Interv360 INC-01, a local demonstrator for a minimal SAV workflow.

It includes:

- local React / TypeScript / Vite app foundation;
- fictitious request `SAV-DEMO-001`;
- readonly SAV journey;
- explicit demo reset;
- controlled local workflow `STAT-01 → STAT-02 → STAT-03 → STAT-04 → STAT-06`;
- local fictitious workflow journal;
- functional validation;
- demo script;
- final demo package;
- global INC-01 summary;
- SFIA Controlled Delivery method capitalization.

## Validation

- Build: OK
- Tests: 38 passed
- Test files: 12
- Nominal workflow validated
- Reset validated
- Local journal validated
- Guardrails validated

## Guardrails

This is not a production workflow.

No backend, API, server database, SQL, CRM integration, real data, dashboard, multi-user logic, advanced authentication, Notion publication, push or PR automation was introduced in the delivery cycles.

## Notes

Controlled Delivery is included as a reusable SFIA method derived from the INC-01 phase 2 REX.

The method distinguishes:

- phase 1: fine-grained framing through micro-cycles;
- phase 2: controlled grouped realization once rules are stabilized.
```

---

## 12. Décision

**Décision proposée :**

- [x] Préparation PR documentée
- [ ] Préparation PR à compléter
- [ ] Préparation PR à reprendre

### Décision

La PR INC-01 peut être préparée, sous réserve de confirmation explicite avant push et création effective de la PR.

---

## 13. Prochaine étape recommandée

**Cycle possible uniquement sur demande explicite :**

`delivery/interv360-inc-01-push-and-pr`

**Objectif :**

- relancer les vérifications ;
- pousser la branche ;
- créer la PR ;
- ne rien merger automatiquement.

**Alternative :**

`delivery/interv360-inc-02-scope-decision`

**Objectif :**

- décider du prochain incrément sans attendre la PR.
