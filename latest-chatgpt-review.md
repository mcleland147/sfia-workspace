# SFIA Studio — Increment C User Input Workflow Review Pack (FULL)

- **Date / heure / fuseau :** 2026-07-20 07:32 CEST (Europe/Paris)
- **Cycle :** 8 — Delivery / implémentation corrective
- **Profil :** Standard
- **Justification :** Moteur GPT live, FinOps, contrat canonique et autorité déjà en place ; correctif = raccordement UI → demandText sans nouvelle frontière.
- **Typologie :** INC / DELIVERY / UX / USER INPUT / LIVE GPT
- **GO Morris consommé :** préparer/exécuter le correctif de saisie libre → qualification ; préserver garde-fous Inc C. **Sans** commit/push delivery, PR, merge, D/E, Cursor live, GPT analyse finale, docs 01–40, méthode, Figma, dépendances, seuils FinOps, architecture.

---

## 1. Truth Check

| Check | Résultat |
|---|---|
| Repo | `sfia-workspace` |
| Branche | `delivery/sfia-studio-poc-increment-c` |
| HEAD | `f80fa1dc902f7532835ecad067da0ebdf4baef99` |
| `origin/main` | `f80fa1dc…` — aligné |
| Commit Increment C | **aucun** (0 ahead) |
| Push delivery | **absent** |
| Staging | **non** |
| Mods Increment C | **présentes** |
| `git fetch` | OK |

---

## 2. Anomalie initiale

Le harness acceptait déjà `demandText`, mais l’UI :

- affichait une demande synthétique **non éditable** ;
- ne montrait pas le texte dans la confirmation ;
- laissait Nora avec une affordance de chat trompeuse ;
- ne permettait pas à Morris de saisir sa propre demande.

---

## 3. Workflow avant / après

**Avant :** fixture texte hardcodé → confirm → qualifyAction(fixture text) → candidate

**Après :**
1. textarea éditable (vide au départ)
2. validation locale (trim, min 10, max 12 000, pas de troncature)
3. confirmation avec **texte exact** + limites FinOps
4. `requestId`/`correlationId` utilisateur
5. `demandText` transmis tel quel à qualifyAction → harness
6. fixture ou live GPT
7. QualificationCandidate + `demandProvenance` (len / sha256 / preview)
8. affichage Studio + Morris encore requis

---

## 4. Champ de saisie

- Label : « Décrivez votre demande »
- `textarea` central (`data-testid=vs-demand-input`)
- Compteur caractères
- Bouton « Exemple Campus360 »
- `aria-invalid` / `role=alert` sur erreur
- Bouton Qualifier : `aria-disabled` si invalide (cliquable pour feedback)

## 5. Règles de validation

Fichier : `app/lib/harness/demandTextValidation.ts`

- trim
- EMPTY / TOO_SHORT (<10) / TOO_LONG (>12000)
- aucune troncature silencieuse
- harness reste autorité tokens/coût/secrets

## 6. Confirmation

Affiche : texte exact, gpt-5.4-mini, 1 appel, 0 retry, 7500 tokens, 0,05 €, 30 s, candidate only, Morris requis.  
Actions : live / fixture / revenir modifier / abandonner.

## 7. Transmission + anti-substitution

- `qualifyAction` écrit `demandText` inchangé dans le payload CLI
- fixture : `proposedScope` contient preview user ; `demandProvenance` hash
- live : `buildUserMessage` injecte `demandText`
- UI affiche `vs-submitted-demand` + `vs-demand-provenance`
- tests prouvent `qualifyMock` reçoit le texte Campus360 exact

## 8. Fixture / Live

| Mode | Comportement |
|---|---|
| fixture | pas de clé ; mode affiché ; cycle hint (cadrage si « cadrage ») ; provenance |
| live | gpt-5.4-mini ; limites Inc C ; fail-closed ; 1 appel |

## 9. Authority / FinOps

Inchangés : candidateOnly=true, morrisDecisionRequired=true, executionAuthorized=false  
Seuils : 6k/1.5k/7.5k, €0.05, €1/j, 3/session, 20/j, timeout 30s, modèle gpt-5.4-mini

## 10. Nora

Composer : « Chat non disponible dans ce POC… » + bouton send disabled (`copilot-composer-disabled`)

## 11. Fichiers modifiés / créés

**Créés :** `demandTextValidation.ts`  
**Modifiés :** `VsNouvelleDemandeScreen.tsx`, `vs-panels.module.css`, `CopilotPanel.tsx`, `CtaButton.tsx` (aria-disabled pass-through), harness fixture provenance + cycle hint, tests unit/E2E Inc C, live observe Campus360  

**Hors périmètre :** docs 01–40, method, prompts, package.json — **intacts**

---

## 12. Tests

### UI / transmission
1–10 editable/vide/refus/confirmation/retour/abandon — **PASS**  
11–15 demandText exact + ids + provenance — **PASS**

### Fixture / live / autorité / FinOps
16–29 — **PASS** (harness + app)

### Régression
| Check | Résultat |
|---|---|
| harness tests | 117 pass / 2 skip |
| app unit | 31 pass |
| typecheck / lint / build | PASS |
| E2E A+B+C+P0 | **28/28 PASS** |
| `git diff --check` | PASS |

---

## 13. Demande Campus360

Texte exact :  
« Je veux lancer un cycle de cadrage pour préparer le développement de Campus360. »

### Fixture
- cycle `cadrage`
- mode fixture affiché
- Morris requis
- provenance sha256 présente

### Live (1 appel)
| Champ | Valeur |
|---|---|
| proposedCycle | **cadrage** |
| profile | Standard |
| blocks | devops, observabilite-run-readiness |
| authority | candidateOnly / morrisRequired / !execution |
| tokens | 1213 + 326 = 1539 |
| coût estimé | ≈ €0.002187 |
| durée | 3792 ms |
| retries | 0 |

Preuves : `.tmp-sfia-review/screenshots-increment-c-user-input/live-*.json` + events

---

## 14. Captures

Dossier `.tmp-sfia-review/screenshots-increment-c-user-input/` :

- empty / invalid / Campus360 saisi
- confirmation texte exact
- fixture candidate + cycles/blocs + tokens/Morris + no-secret
- live observation sanitisée

Scan secret : **négatif**

---

## 15. Accessibilité

- label ↔ textarea
- erreur `role=alert`
- loading `aria-live`
- focus outline textarea
- Nora non présentée comme chat actif

---

## 16. git status final

Branche delivery locale non commitée / non poussée @ `f80fa1dc…`  
Handoff à publier séparément.

---

## 17. Réserves

1. Validation UX 12 000 car. ≠ plafond tokens harness (harness autorité).  
2. Hint fixture « cadrage » = heuristique démo, pas décision Morris.  
3. Une seule observation live Campus360.  
4. Bouton Qualifier cliquable avec `aria-disabled` pour feedback erreur (pas `disabled` HTML).

---

## 18. Décision Morris attendue

Valider en UI le flux saisie → confirm → fixture/live → candidat, puis GO séparé pour staging/commit/PR.

---

## 19. Verdict

**SFIA STUDIO INCREMENT C USER INPUT WORKFLOW IMPLEMENTED — MORRIS VALIDATION REQUIRED**
