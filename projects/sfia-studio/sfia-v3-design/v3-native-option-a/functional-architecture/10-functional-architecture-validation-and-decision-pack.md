# 10 — Validation architecture fonctionnelle et decision pack

| Champ | Valeur |
|-------|--------|
| **Statut** | Architecture fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `v3-native-option-a/functional-architecture` |
| **Gate** | `GO ARCHITECTURE FONCTIONNELLE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Anti-claims** | Pas ARCHITECTURE APPROVED · Pas READY FOR MODELED/DELIVERY · Pas runtime migré |
| **Document** | `10-functional-architecture-validation-and-decision-pack.md` |

## 1. Décisions déjà validées (inputs)

FD-OA-01…06 · ARB-V3-01…06 · D-V3-* · CC-D*

## 2. Décisions candidates d’architecture (soumises Morris)

| Id | Proposition |
|----|-------------|
| **FA-OA-01** | LPS = agrégat logique unique ownership domaine C ; panneau = vue |
| **FA-OA-02** | Domaines A–H confirmés ; G séparé de F |
| **FA-OA-03** | Catalogue commandes/événements `05` comme contrat AF→modeled |
| **FA-OA-04** | Isolation legacy FD-OA-05 formalisée `08` comme architecture de transition |
| **FA-OA-05** | Matrice autorités `06` comme enforcement fonctionnel de référence |

*FA-OA-* = **candidates** · non validées.

## 3. Inconnues

U-OA-02 · U-OA-03 · U-OA-04 · (FA-OA-01 en attente validation)

## 4. Réserves

| ID | Réserve |
|----|---------|
| FA-R01 | Pas de schemas |
| FA-R02 | Pas d’AT/infra |
| FA-R03 | Pas d’implémentation |
| FA-R04 | Pas READY FOR MODELED (nécessite validation AF + gate modeled) |
| FA-R05 | Pas READY FOR DELIVERY |
| FA-R06 | Coupure method/ non exécutée |
| FA-R07 | OPS1 legacy encore présent (gelé) |

## 5. Dette

Évitée : coexistence doctrinale · ownership flou décision/exec.
Créée : validation FA-OA · modeled schemas · UX alignement · AT · coupure SoT.

## 6. Maturité

| Objet | Maturité |
|-------|----------|
| Conception Option A | VALIDATED |
| Architecture fonctionnelle | DOCUMENTED candidate |
| Modeled / runtime | non |

## 7. Anti-claims

Pas ARCHITECTURE APPROVED sans GO Morris · Pas READY FOR MODELED/DELIVERY · Pas RUNTIME MIGRATED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED.

## 8. Critères d’acceptation AF (pour Morris)

- [ ] Domaines A–H et context map
- [ ] Ownership 20 composants sans conflit
- [ ] Interactions E2E + commandes/événements
- [ ] Autorités / N1–N3 / fail-closed
- [ ] Résilience + observabilité IDs
- [ ] Isolation legacy claire
- [ ] Contrats d’entrée modeled/UX/AT
- [ ] Alignement FD-OA validées

## 9. Gate suivant

`GO VALIDATION ARCHITECTURE FONCTIONNELLE — SFIA STUDIO V3-NATIVE OPTION A`

Puis, selon arbitrage : UX et/ou `GO ENRICHISSEMENT MODELED`.

## 10. Verdict

**SFIA STUDIO V3-NATIVE OPTION A FUNCTIONAL ARCHITECTURE DOCUMENTED — MORRIS VALIDATION REQUIRED**
