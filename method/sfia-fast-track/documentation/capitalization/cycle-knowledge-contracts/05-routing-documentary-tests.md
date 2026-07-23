# Tests documentaires — routage CKC candidat

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `05-routing-documentary-tests.md` |
| **Statut** | `method-candidate` |
| **Méthode** | Revue documentaire (pas d'appel OpenAI) |

## Test 1 — Cadrage

| Étape | Attendu | Résultat |
|-------|---------|----------|
| Routing guide | §4.4.5 → path `pilots/01-cadrage.md` | PASS |
| Template | Mini-fiche + fiche exigent déclaration CKC | PASS |
| PGE | Étape 4bis avant génération | PASS |
| Validation | §3.1.1 pilote obligatoire + statut candidate | PASS |

## Test 2 — Architecture technique

| Étape | Attendu | Résultat |
|-------|---------|----------|
| Routing | Path `pilots/03-architecture-technique.md` | PASS |
| Template / PGE / checklist | Même chaîne que Test 1 | PASS |

## Test 3 — Cycle sans pilote (ex. Delivery #8)

| Étape | Attendu | Résultat |
|-------|---------|----------|
| Recherche | Contrat détaillé absent | PASS |
| Fallback | Carte synthétique + méthode v2.6 | PASS |
| Blocage | Aucune erreur bloquante injustifiée | PASS |
| Invention | Interdite (anti-patterns template/routing) | PASS |

## Test 4 — Mauvais statut (« CKC baseline »)

| Étape | Attendu | Résultat |
|-------|---------|----------|
| Checklist §3.1.1 | Claim invalide / non-conformité | PASS |
| Anti-patterns template & routing | Explicitement listés | PASS |

## Test 5 — Cursor

| Contrôle | Attendu | Résultat |
|----------|---------|----------|
| Élargissement scope via CKC | Interdit (OM §3.1.1, PGE, template) | PASS |
| Décision de cycle par Cursor | Non — CKC hors contrat exécution | PASS |
| CKC comme prompt d'exécution | Interdit | PASS |

## Test 6 — UX conversationnelle

| Contrôle | Attendu | Résultat |
|----------|---------|----------|
| Exposition brute 25 sections CKC en UI | Interdite (template anti-pattern ; framing CKC) | PASS |
| Docs 87/88 | Non modifiés | PASS |

## Verdict tests

**PASS** — routage candidat cohérent pour arbitrage Morris (validation méthode suivante).
