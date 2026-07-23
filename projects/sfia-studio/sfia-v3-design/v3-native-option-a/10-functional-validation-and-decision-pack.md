# 10 — Validation fonctionnelle et decision pack

| Champ | Valeur |
|-------|--------|
| **Statut** | Conception fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-design/v3-native-option-a` |
| **Gate** | `GO CONCEPTION FONCTIONNELLE — SFIA STUDIO V3-NATIVE — TRANCHE VERTICALE OPTION A` |
| **Anti-claims** | Pas DESIGN VALIDATED · Pas runtime migré |
| **Document** | `10-functional-validation-and-decision-pack.md` |

## 1. Décisions Morris déjà consommées (tracées)

| Id | Contenu |
|----|---------|
| ARB-V3-01 | Tranche Option A |
| ARB-V3-02 | Cycles aval rejouables |
| ARB-V3-03 | ExecutionContract ADAPT · MD = adaptateur |
| ARB-V3-04 | Coupure method/ + template SoT (après composants) |
| ARB-V3-05 | UX CC-D01/03/05/06/12/13 |
| ARB-V3-06 | harness historique · MethodMode/badges hors cible · OPS1/D1 réemploi |

## 2. Décisions candidates (soumises à validation Morris)

| Id | Proposition | Impact |
|----|-------------|--------|
| FD-OA-01 | Valider le pack conception Option A tel que documenté | Débloque AF |
| FD-OA-02 | Nouveau Project exige N2 + doctrine pin avant LPS actif | Création projet |
| FD-OA-03 | Qualification cycle reste `proposed` jusqu’ack si Critical | Profil Critical |
| FD-OA-04 | Synthetic CKC suffit pour démarrer clarification ; detailed préféré | CKC |
| FD-OA-05 | OPS1 Campus360 peut coexister **produit** gelé pendant tranche A **sans** doctrine v2.6 active partagée | Arbitrage produit U-01 audit |
| FD-OA-06 | Export MD Cursor optionnel derrière feature flag adaptateur | Exec |

*FD-OA-* = candidates · **non validées**.

## 3. Inconnues

| ID | Sujet |
|----|-------|
| U-OA-01 | Gel vs migration progressive OPS1 pendant AF/Delivery |
| U-OA-02 | Moment exact merge UX 87–89 vs AF |
| U-OA-03 | Stratégie données MethodMode existantes |
| U-OA-04 | Périmètre exact première AF (quels composants P0) |

## 4. Réserves

| ID | Réserve |
|----|---------|
| FD-R01 | Pas d’architecture technique |
| FD-R02 | Pas de schemas |
| FD-R03 | Runtime inchangé |
| FD-R04 | UX visuelle non retravaillée ici |
| FD-R05 | Coupure method/ non exécutée |
| FD-R06 | Cas d’usage en fiches ; détail AF pourra enrichir séquences |

## 5. Dette créée / évitée

**Évitée :** big-bang code · coexistence doctrinale dans la cible.
**Créée :** pack design à valider · AF/UX/modeled à enchaîner · hygiene README Studio hors scope.

## 6. Maturité distribuée

| Objet | Maturité |
|-------|----------|
| Pack conception Option A | DOCUMENTED candidate |
| Fondations F01–F15 | VALIDATED (framing) |
| Composants runtime v3-native | non MODELED/IMPLEMENTED |
| UX 87–89 | validated decisions hors main |
| Coupure v2.6 | non exécutée |

## 7. Anti-claims (ce cycle)

Interdit de conclure : DESIGN VALIDATED · READY FOR MODELED/DELIVERY · RUNTIME MIGRATED · V2.6 REMOVED · OPTION A IMPLEMENTED · UX FINAL · ARCHITECTURE APPROVED.

## 8. Critères d’acceptation conception (pour Morris)

- [ ] Flux 14 étapes Option A compréhensible sans v2.6 runtime
- [ ] 20 composants responsabilités claires
- [ ] LPS / Decision / Confirmation / Contract / Evidence cohérents
- [ ] 14 stop codes + 24 cas couverts
- [ ] Matrice actifs sans coexistence
- [ ] Alignement ARB-V3-01…06 et CC-D*

## 9. Gate suivant

`GO ARCHITECTURE FONCTIONNELLE — SFIA STUDIO V3-NATIVE — OPTION A`
(UX dédié possible en parallèle selon U-OA-02)

## 10. Verdict

**SFIA STUDIO V3-NATIVE OPTION A FUNCTIONAL DESIGN DOCUMENTED — MORRIS VALIDATION REQUIRED**
