# Chantiers360 v2 — Delivery INC-01 — Rapport de validation

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-validation-report.md`

## Critères acceptance (US-01 à US-04)

| US | Critère | Statut technique |
|----|---------|------------------|
| US-01 | Libellé, client, adresse obligatoires | ✅ Validation serveur |
| US-01 | Statut initial À démarrer | ✅ Défaut DB |
| US-01 | Accès fiche après création | ✅ Redirect `/chantiers/[id]` |
| US-02 | Liste vide si aucun chantier | ✅ |
| US-02 | Libellé, statut, retard visible | ✅ Badge statut + retard si En retard |
| US-02 | Clic ouvre fiche | ✅ Link sur carte |
| US-03 | Affiche libellé, client, adresse, statut | ✅ |
| US-03 | Retour dashboard | ✅ Lien retour |
| US-03 | Sections accessibles (placeholder) | ✅ Onglets désactivés INC-02+ |
| US-04 | 4 statuts sélectionnables | ✅ |
| US-04 | Statut visible liste + fiche | ✅ |
| US-04 | Chantier Terminé consultable | ✅ |

## Garde-fous

| Garde-fou | Statut |
|-----------|--------|
| Pas de tâches / réserves / jalons / CR | ✅ |
| Pas d'auth | ✅ |
| Pas de DB hors PostgreSQL local/dev | ✅ |
| Pas de modification 04-design / captures | ✅ |
| Pas de modification backlog | ✅ |
| Spike dashboard réutilisé | ✅ |

## Commandes

| Commande | Résultat |
|----------|----------|
| `npm run lint` | ✅ |
| `npm run build` | ✅ |
| `npm run test:e2e` | ⏳ 4 tests implémentés — exécution locale PostgreSQL requise (voir `08-qa-test/inc-01/`) |

## QA / Test INC-01 (SFIA v2.0 — PR #107)

| Gate | Statut |
|------|--------|
| QA-G2 — tests implémentés | ✅ Playwright `app/e2e/inc-01.spec.ts` |
| QA-G3 — QA readiness | ⏳ **GO QA WITH RESERVES proposé** — décision Morris |
| PR readiness INC-01 | ❌ **Interdite** tant que QA-G3 non validé Morris |

**Artefacts :** `08-qa-test/inc-01/`

## Verdict technique

**QA READY WITH RESERVES FOR MORRIS REVIEW** — validation Morris requise sur preuves QA (exécution E2E locale recommandée).

## Décision attendue Morris

- Validation INC-01 pour PR
- Arbitrage statuts En retard vs En pause si écart backlog bloquant
- GO INC-02 séparé
