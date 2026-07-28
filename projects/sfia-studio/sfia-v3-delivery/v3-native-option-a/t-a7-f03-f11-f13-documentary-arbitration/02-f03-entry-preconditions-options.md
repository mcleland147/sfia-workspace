# 02 — F03 — Préconditions avant préparation technique

| Champ | Valeur |
|-------|--------|
| **Décision** | D-T-A7-F03 |
| **Question** | Quelles préconditions sont **obligatoires** avant toute préparation technique de retrait / delivery T-A7 ? |
| **Statut contenu** | `NOT DECIDED` |
| **Reco** | `RECOMMENDED — NOT DECIDED` → **F03.3** |

## Distinctions

| Niveau | Sens |
|--------|------|
| Avant **prep technique retrait** | contenu F03 (+ F11/F13 per W1-D05) décidé · inventaire/plan doc |
| Avant **delivery preparation** | + B5 / R1 / HARD non ignorés · P* critiques |
| Avant **cutover** | + P03–P11 satisfaits ou explicitement gated · F09 · rollback/observabilité |

---

## F03.1 — Set minimal

**Idée :** set strictement nécessaire pour ouvrir un cadrage de prep **ultérieur**, sans exiger la satisfaction runtime de tout P03–P11.

### Contenu candidat obligatoire

| Élément | Obligatoire ? | Note |
|---------|---------------|------|
| Inventaire legacy validé (Wave 1) | **oui** | déjà sur main |
| Dépendances actives confirmées (W1-D02) | **oui** | MethodMode · trio · consumers |
| Candidats retrait identifiés (W1-D03) | **oui** | sans autoriser retrait |
| Plan documentaire W1-B | **oui** | séquences/validations/rollback/gates doc |
| Isolation OPS1 **définie** (D04) | **oui** (cadrage) | ≠ implémentée |
| Stratégie rollback documentaire | **oui** | ≠ testée |
| Preuves non-régression **candidates** | **oui** (liste) | ≠ exécutées |
| F11 et F13 **décidées** (contenu) | **oui** (W1-D05) | avant prep |
| Aucun blocker HARD **ignoré** | **oui** | B5/R1/HARD restent OPEN → documenter non-bypass |

### Différable / hors scope immédiat

| Élément | Classement |
|---------|------------|
| Satisfaction runtime P07–P09 | différé (cutover / F11) |
| IAM SELECTED | hors scope (NOT SELECTED) |
| RUN readiness complète | différé delivery/cutover |
| Volume DB mesuré | UNKNOWN → preuve à planifier |

| Critère | Éval |
|---------|------|
| Bénéfices | proportionné · aligné W1-B · évite faux READY |
| Risques | sous-estime dettes HARD / P* MISSING |
| Dette | plan trop mince pour delivery |
| Réversibilité | haute (doc) |

---

## F03.2 — Set maximal

**Idée :** toutes préconditions P03–P11 pertinentes + preuves runtime + tests détaillés + observabilité + sécu + données + IAM + rollback validable + RUN + cutover readiness documentaire.

| Inclus en plus vs F03.1 | Risque |
|-------------------------|--------|
| P03–P05 preuves runtime | charge élevée ; P encore PARTIAL |
| P06–P09 satisfaits | MethodMode/OA UI encore ACTIVE/MISSING |
| P10–P11 appliqués | isolation/historique non implémentés |
| IAM / RGPD prod | NOT SELECTED / NOT VALIDATED — bloquant |
| HARD fermés | hors ce cycle |

| Critère | Éval |
|---------|------|
| Bénéfices | filet maximal avant prep |
| Risques | **sur-cadrage** · conflation F03 avec cutover complete |
| Dette | documentaire + paralysie |
| Réversibilité | moyenne (attentes figées) |

---

## F03.3 — Set custom (intermédiaire) — **RECO**

**Idée :** F03.1 **+** exigences explicites de **traçabilité** et de **non-conflation**, sans exiger satisfaction cutover.

### Obligatoire (prep technique retrait)

1. Tout F03.1.
2. Matrice P03–P11 avec statut PARTIAL/MISSING **à jour** (pas de claim SATISFIED implicite).
3. Frontière OPS1 **spécifiée** (path-policy · CT/D1 · anti SC-12) — design only.
4. Liste preuves non-régression **par surface** (D1 MethodMode · canonical trio · OPS1 allowlist).
5. Hold/rollback **candidats** documentés (P07–P09 concepts) sans implémentation.
6. Contenu F11 + F13 **déjà décidés**.
7. Déclaration : B5 / R1 / HARD **OPEN** → aucun bypass.

### Avant delivery preparation (rappel — hors F03 seul)

- Bulletin B5 / décisions HARD associées ;
- persistence/IAM selon trajectoire produit (encore NOT SELECTED).

### Avant cutover (rappel)

- P03–P11 selon F09 + preuves runtime ;
- F11 surfaces cutover satisfaites ;
- F13 historique RO opérationnel.

### Volontairement différé

| Élément | Pourquoi |
|---------|----------|
| Mesure volume DB | UNKNOWN — campagne dédiée |
| IAM multi-user | NOT SELECTED |
| UI OA product complete (A3.2) | distinct F11 cutover vs product |
| Fermeture HARD | vagues Option C 2–4 |

| Critère | Éval |
|---------|------|
| Bénéfices | borné · compatible W1-B/D04/D05 · évite maximalisme |
| Risques | encore une marge d’interprétation « prep » |
| Dette | faible si gates clairs |
| Réversibilité | haute |

**Gates Morris associés :** W1-S4 · SC-02…05 · SC-12 · B5 STOP BEFORE DELIVERY.

---

## Synthèse F03

| Option | Label reco |
|--------|------------|
| F03.1 | acceptable si Morris veut minimalisme |
| F03.2 | trop lourd pour « entrée prep » |
| F03.3 | `RECOMMENDED — NOT DECIDED` |

**Anti-claim :** F03.3 recommandé ≠ F03 décidé · F03 décidé ≠ delivery autorisée.
