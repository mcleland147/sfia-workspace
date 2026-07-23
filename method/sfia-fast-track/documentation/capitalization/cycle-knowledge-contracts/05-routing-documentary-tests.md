# Tests documentaires — routage CKC candidat

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `05-routing-documentary-tests.md` |
| **Statut** | `method-candidate` |
| **Méthode** | Revue documentaire (pas d'appel OpenAI) |

## Test 1 — Cadrage

| Étape | Attendu | Résultat |
|-------|---------|----------|
| Routing guide | §4.4.5 → `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/01-cadrage.md` | PASS |
| Template | Mini-fiche + fiche exigent déclaration CKC | PASS |
| PGE | Étape 4bis avant génération | PASS |
| Validation | §3.1.1 pilote obligatoire + statut candidate | PASS |

## Test 2 — Architecture technique

| Étape | Attendu | Résultat |
|-------|---------|----------|
| Routing | Path `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/03-architecture-technique.md` | PASS |
| Template / PGE / checklist | Même chaîne que Test 1 | PASS |

## Test 3 — Cycle sans pilote (ex. Delivery #8)

| Étape | Attendu | Résultat |
|-------|---------|----------|
| Recherche | Contrat détaillé absent | PASS |
| Fallback | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md` + méthode v2.6 | PASS |
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

## Test 7 — Ordre des sections

| Contrôle | Attendu | Résultat |
|----------|---------|----------|
| Headings `#### 4.4.x` | Ordre 4.4.1 → 4.4.2 → 4.4.3 → 4.4.4 → 4.4.5 | PASS |
| Section CKC | Après `4.4.4 Matrice profil → contrôles` | PASS |
| Référence §4.4.5 | Toujours valide (numéro conservé) | PASS |

## Test 8 — Résolution des paths

| Contrôle | Attendu | Résultat |
|----------|---------|----------|
| Pilote 01 | Path complet existe | PASS |
| Pilote 02 | Path complet existe | PASS |
| Pilote 03 | Path complet existe | PASS |
| Pilote 04 | Path complet existe | PASS |
| Fallback carte | Path complet `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md` existe | PASS |
| Points d'entrée opérationnels | Aucun `…/cycle-knowledge-contracts` abrégé | PASS |

## Test 9 — Alignement numérotation

| Contrôle | Attendu | Résultat |
|----------|---------|----------|
| Matrice 15 cycles | = template §4.1 | PASS |
| Pilotes | Cycles 1 / 2 / 6 / 9 | PASS |

## Verdict tests

**PASS** — cohérence structurelle du routage CKC candidat restaurée ; validation méthode toujours requise.
