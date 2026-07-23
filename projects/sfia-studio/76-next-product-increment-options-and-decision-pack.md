# SFIA Studio — Options et decision pack — prochain incrément produit

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `76-next-product-increment-options-and-decision-pack.md` |
| **Complète** | `75-next-product-increment-framing.md` |
| **Statut** | `decision-pack-candidate` — priorité **Live Product Validation** actée ; B′ différée |
| **Base** | `origin/main` @ `88fa4658da07156614de270d8172f147535ddbf9` |
| **Gate immédiat demandé** | `GO EXÉCUTION — SFIA STUDIO LIVE PRODUCT VALIDATION` |
| **Compléments live** | `77`, `78` |

---

## 1. Décisions déjà actées (ne pas rouvrir)

| Décision | Source |
|----------|--------|
| Baseline méthode = SFIA v2.6 | Manifest / operating model |
| SFIA v3.0 = V3-MODELED CANDIDATE (non adopté) | Framing v3 + anti-claims D1 |
| CT Fast Track + D1-I1→C4 intégrés sur main | PR #254 / post-merge |
| Existing Project confirm = NO_MUTATION tant que contrat link absent | D1-C4 delivery |
| Cycle/Action sources = UNAVAILABLE (non simulés) | D1-C3 code |
| GPT propose / Morris décide / Cursor exécute | Operating model |
| L5 global interdit | Doctrine Studio |
| Pas de package.json / deps dans le lot CT/D1 | PR readiness |
| **Incrément immédiat = Live Product Validation** (GPT + canonique CT + Git/GitHub RO + D1-C1…C4) | Morris — GO PRÉPARATION LIVE (2026-07-23) |
| **Option B′ différée** jusqu’après analyse des résultats live | Même décision |

## 2. Décisions à ne pas rouvrir dans ce decision pack

- Réécrire l’histoire des docs 66–74
- Promouvoir v3 en baseline
- Refondre OPS1 pour « coller » à D1 sans preuve
- Rendre GPT autorisateur
- Traiter CI comme substitut de valeur produit
- Valider « C5 » / B′ par simple naming **avant** preuve live
- Inclure B′ dans le périmètre d’exécution live

---

## 3. Options synthétiques

| ID | Titre | Intention | Effort | Reco cadrage |
|----|-------|-----------|--------|--------------|
| A | Intake → Project persistence | Contrat link / reprise | M | Sous-lot éventuel |
| **B / B′** | Project → Cycle proposal PROPOSED_ONLY | Suite méthodologique visible | M | **Principale** |
| C | Cycle foundation + open contrôlé | Objet Cycle runtime | L | Alternative |
| D | GuidedSession d’abord | Session guidée Project | L | Différée |
| E | Industrialisation CI/hygiène | Outillage | S–M | Parallèle |
| F | UX-R04 polish | UX sans nouveau domaine | M | Différée |

Détail et challenge : voir `75`.

---

## 4. Impacts par option

### A — Intake → Project

| Impact | Contenu |
|--------|---------|
| Domaine | Nouveau lien ou objet intake |
| UX | Reprise ; peu de « wow » seul |
| Migration | Probable (table) |
| Anti-claim | Toujours pas PROJECT LINKED tant que sémantique floue |
| Conséquence si choisi seul | Technique sans suite Cycle |

### B / B′ — Cycle proposal

| Impact | Contenu |
|--------|---------|
| Domaine | Contrat *proposal* (+ audit) ; pas CycleInstance |
| UX | Cockpit débloqué |
| Migration | Faible à moyenne (events / table proposals) |
| Anti-claim | Strict PROPOSED_ONLY |
| Conséquence | Prépare C ; dette temporaire de couche proposal |

### C — Cycle foundation

| Impact | Contenu |
|--------|---------|
| Domaine | Table Cycle + états + commandes |
| UX | Ouverture réelle possible |
| Migration | Oui |
| Anti-claim | CYCLE OPENED seulement après confirm |
| Conséquence | Archi obligatoire ; risque surdimensionnement |

### D — GuidedSession

| Impact | Ownership vs Intake/OPS1 à clarifier ; délai élevé ; faible valeur immédiate |

### E — Industrialisation

| Impact | Qualité repo ; zéro parcours métier nouveau |

### F — UX-R04

| Impact | Polish ; Figma probable ; ne débloque pas la rupture |

---

## 5. Arbitrages Morris demandés

### Immédiat — Live Product Validation

1. **GO EXÉCUTION — SFIA STUDIO LIVE PRODUCT VALIDATION** (voir `78`)
2. Accepter la validation **dual-surface** (OPS1/CT tools+canonique **et** D1 intake C1–C4) sans unifier le code dans ce cycle ?
3. Autoriser `D1_INTAKE_LIVE=1` local pour le track D1 ?
4. Seuil d’acceptation des réserves (visibilité D1 mode live partielle, etc.)

### Différé — après verdict live

### Décision D1 — Quel prochain incrément **fonctionnel** ?

Choisir **une** trajectoire **après** live :

1. **Reprendre B′** si verdict live A ou D (réserves acceptées)
2. **Retenir C** (Cycle foundation) si live OK mais B′ rejeté
3. **Corrections live** (verdict B) avant toute extension
4. **Rework** (verdict C) — pas d’extension
5. **E/F** seulement si Morris priorise outillage/polish

### Décision D2–D5 (B′)

Inchangées par rapport au cadrage initial — **non ouvertes** tant que live non tranché. Voir historique §5 ci-dessous et `75`.

---

## 5bis. Historique — arbitrages B′ (conservés, non actifs)

### Décision D1 historique — Quel prochain incrément ?

Choisir **une** trajectoire :

1. **Valider recommandation B′** (Cycle proposal PROPOSED_ONLY + sous-lot A optionnel)
2. **Retenir alternative C** (Cycle foundation d’abord) → déclenche GO ARCHITECTURE Cycle
3. **Retenir A seule** (link intake→Project) — non recommandé comme seul incrément
4. **Retenir E ou F** comme prochain cycle — accepte de différer la suite méthodologique
5. **Demander un re-cadrage** si hypothèses contestées

### Décision D2 — Packaging A

Si B′ : inclure le sous-lot Intake→Project **dans** le vertical, **après**, ou **jamais pour cet incrément** ?

### Décision D3 — Artefact de proposition

Préférer :

- events d’audit Project seulement ;
- ou table `d1_cycle_proposals` typée ;
- **interdire** JSON opaque non contractuel comme seul stockage métier.

### Décision D4 — Tooling parallèle

Autoriser un cycle séparé CI / `.gitignore` / cleanup branche delivery **en parallèle** de B′ ? (recommandé : oui, GO distinct)

### Décision D5 — Figma

Exiger un cycle design Figma avant delivery B′ ? (recommandation cadrage : **non** pour MVP fonctionnel ; **oui** si polish layout)

---

## 6. Recommandations (mises à jour)

1. **Immédiat :** exécuter le plan live (`77`/`78`) sous GO EXÉCUTION.
2. **B′ :** rester différée ; ne pas lancer architecture/delivery B′ avant verdict live.
3. **Séquence :**

```
GO EXÉCUTION LIVE PRODUCT VALIDATION
  → collecte preuves LPV-01…06
  → verdict A | B | C | D
  → si A ou D(+accept) : éventuel GO ARCHITECTURE B′
  → si B : correctifs bornés puis re-live
  → si C : rework conception/architecture (pas B′)
```

---

## 7. Gates futurs (proposés)

| Gate | Quand |
|------|-------|
| `GO EXÉCUTION — SFIA STUDIO LIVE PRODUCT VALIDATION` | **Immédiat** |
| `GO ARCHITECTURE — SFIA STUDIO CYCLE PROPOSAL CONTRACT` | Si live OK + Morris choisit B′ |
| `GO ARCHITECTURE — SFIA STUDIO CYCLE FOUNDATION` | Si C |
| `GO DELIVERY — …` | Après archi |
| `GO CLEANUP — delivery branch / tmp gitignore / CI` | Optionnel parallèle |
| `GO DESIGN FIGMA — …` | Si D5 = oui |

---

## 8. NO-GO explicites

- Simuler Cycle/Action comme disponibles
- Claim CYCLE OPENED / PROJECT LINKED / D1 COMPLETE / V3-IMPLEMENTED/ADOPTED
- Claim **GPT LIVE VALIDATED** / **LIVE PRODUCT READY** avant exécution + verdict
- GPT comme autorité de mutation
- Automatiser l’arbitrage « quel Cycle ouvrir » sans gate humain
- L5 global / multi-tenant / billing
- Modifier method/** ou promouvoir v3 par ce produit
- Exécuter B′ ou unifier D1↔tools **dans** le cycle live sans GO dédié
- Confondre fixture/fake et live

---

## 9. Conséquences des verdicts live (pour B′)

| Verdict live | Conséquence B′ |
|--------------|----------------|
| **A** LIVE PRODUCT VALIDATED | B′ framing **peut** reprendre |
| **B** PARTIALLY VALIDATED | B′ **reste différée** ; correctifs d’abord |
| **C** NOT READY | B′ **fermée** jusqu’à rework |
| **D** VALIDATED WITH RESERVES | Morris arbitre si B′ peut démarrer malgré réserves |

---

## 10. Ordre recommandé des réponses Morris

1. **GO EXÉCUTION LIVE** (ou blocage motivé).
2. Trancher dual-surface vs exigence d’unification (gap documenté dans `77`).
3. Après live : appliquer A/B/C/D puis rouvrir D1…D5 B′ si pertinent.

---

## 11. Anti-claims

Ce pack ne constitue **pas** une validation live exécutée, **pas** une adoption v3, **pas** une ouverture Cycle, **pas** une validation B′.

**Statut :** préparation live prête — **Décision Morris requise** pour l’exécution.
