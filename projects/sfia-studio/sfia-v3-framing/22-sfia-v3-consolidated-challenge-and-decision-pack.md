# 22 — Decision pack final du cadrage SFIA v3.0

| Champ | Valeur |
|-------|--------|
| Statut | **Cadrage clôturé — V3-DOCUMENTED** |
| Gate clôture | `GO CLÔTURE CADRAGE SFIA v3.0 — RÉSERVES R1–R5 ET TRAJECTOIRE OPTION D` |
| Gate suivant | `GO VALIDATION DOCUMENTAIRE DU CADRAGE SFIA v3.0` |
| Ultérieur | `GO OUVERTURE V3-MODELED` |
| Baseline | SFIA v2.6 |
| Adoption | **Non** |

## 1. Décisions validées (cadrage)

| Id | Décision | Doc |
|----|----------|-----|
| D1 | Studio-native exclusive | 01, 15 |
| D2 | ReviewBundle hybride | 23 |
| D3/R1 | MD pourquoi / JSON quoi / SQL état | 24, 08, 17 |
| D4/R2 | Enforcement E0–E4 | 25, 16 |
| D5/R3 | SQL hybride + audit append-only | 26, 10 |
| D6/R4 | Six niveaux maturité | 27, 21 |
| D7/R5 | Pas de migration générale | 28, 20 |
| D8 | **Option D validée** (trajectoire) | 29, 14 |

## 2. Matrice de clôture des réserves

| Réserve | Décision | Statut | Dette transférée | Cycle futur |
|---------|----------|--------|------------------|-------------|
| Review pack | ReviewBundle hybride | **Clôturée cadrage** | Modèle détaillé | V3-MODELED |
| R1 | JSON runtime + MD rationale | **Clôturée** | Schémas réels | V3-MODELED |
| R2 | E0–E4 | **Clôturée** | Policies détaillées | V3-MODELED |
| R3 | SQL txn + audit | **Clôturée** | Schéma logique/physique | Archi technique |
| R4 | Six niveaux | **Clôturée** | Gates automatisés | QA/validation |
| R5 | Pas migration générale | **Clôturée** | Reprise exceptionnelle | Cycle dédié si besoin |
| Trajectoire | Option D | **Validée cadrage** | Backlog slices D1–D3 | Conception |

Les réserves de cadrage sont **clôturées** ; leurs travaux de conception restent des **dépendances explicites** (pas « zéro réserve » absolu).

## 3. Décisions non prises

- Adoption SFIA v3.0 / V3-ADOPTED  
- Passage V3-MODELED  
- Architecture physique SQL  
- Schémas JSON définitifs  
- Stack technique définitive  
- Périmètre exact du premier incrément d’implémentation  
- Démarrage implémentation  
- Stratégie commit/PR/merge projet  

## 4. Option D

Validée comme trajectoire de **conception**.  
**N’autorise pas** l’implémentation. Voir 29 (BoundedCoDesignIncrement, slices D1–D3).

## 5. Anti-claims

Pas baseline v3 · pas implémentation · pas Schema/SQL/XLSX réels · v2.6 intact · review pack v2.6 encore requis pour cycles Cursor sous baseline actuelle.

## 6. Verdict

**SFIA v3.0 FRAMING CLOSED — V3-DOCUMENTED — HUMAN VALIDATION REQUIRED**
