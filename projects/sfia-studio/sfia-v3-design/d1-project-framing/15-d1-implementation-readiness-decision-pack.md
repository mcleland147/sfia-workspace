# 15 — D1 implementation readiness decision pack

| Champ | Valeur |
|-------|--------|
| Statut proposé | **D1 IMPLEMENTATION DESIGN CANDIDATE** |
| Verdict cible | SFIA v3.0 D1 IMPLEMENTATION DESIGN READY — HUMAN DECISION REQUIRED |
| Gate suivant | `GO VALIDATION CONCEPTION D1 — IMPLEMENTATION READINESS` |
| Gate fermé | `GO IMPLEMENTATION D1` (non consommé) |

## Synthèse readiness

| Critère | Statut |
|---------|--------|
| Périmètre D1 borné | OK |
| Composants / responsabilités | OK |
| API/commandes | OK |
| Transactions | OK |
| GPT borné dual-channel | OK |
| E0–E4 + gates | OK |
| Écrans contractuels | OK |
| ReviewBundle + audit | OK |
| Sécurité/RGPD traités | OK (risques listés) |
| Observabilité/RUN | OK (SLI sans SLO) |
| Tests | OK |
| Backlog I1–I8 | OK |
| Décisions tech explicites candidates | OK |
| Aucune implémentation | OK |
| Hors périmètre intact | OK |

## Décisions humaines requises

1. Valider conception (`GO VALIDATION CONCEPTION D1 — IMPLEMENTATION READINESS`)  
2. Approuver modular monolith + Server Actions + SQLite I1  
3. Approuver premier lot **D1-I1 Project foundation**  
4. Trancher tolérance mono-opérateur / SoD pour proto  
5. Autoriser ou non cycle sécurité dédié avant I5 multi-user  

## Décisions non prises

GO IMPLEMENTATION · V3-IMPLEMENTED · adoption v3 · PG prod · IdP · ajv8 · D2 design · code/migrations  

## Réserves

- DESIGN-R01 : Auth stub insuffisant pour multi-user  
- DESIGN-R02 : SLOs non chiffrés  
- DESIGN-R03 : Figma D1 non produit (cycle UX optionnel)  
- DESIGN-R04 : Event `TRAJECTORY_UPDATED` non dans catalog modeled (audit générique)  

## Dette

Schémas GuidedTurn non ajoutés au modeled · dual DB sqlite/PG · extraction Policy package · UX polish I8  

## Anti-claims

Pas code · pas migrations · pas deps · pas V3-IMPLEMENTED · pas adoption · framing/modeled non modifiés · v2.6 intact · pas commit projet  

## Verdict

**SFIA v3.0 D1 IMPLEMENTATION DESIGN READY — HUMAN DECISION REQUIRED**
