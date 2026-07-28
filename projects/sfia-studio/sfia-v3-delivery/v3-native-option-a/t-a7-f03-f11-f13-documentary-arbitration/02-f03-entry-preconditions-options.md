# 02 — F03 — Préconditions avant préparation technique

| Champ | Valeur |
|-------|--------|
| **Décision** | D-T-A7-F03 |
| **Choix** | **F03.3** — `CUSTOM INTERMEDIATE ENTRY PRECONDITION SET` |
| **Statut** | `DECIDED — ADOPTED BY MORRIS` |
| **Date** | 2026-07-28 19:25:19 CEST (+0200) |

## Distinctions (normatives)

| Niveau | Sens |
|--------|------|
| Avant **préparation technique** de retrait | set F03.3 satisfait ou explicitement borné par Morris · **F11 et F13 déjà décidées** (satisfait) |
| Avant **delivery preparation** | + B5 / R1 / HARD non ignorés · P* critiques selon bulletins |
| Avant **cutover** | + P03–P11 selon F09 · surfaces F11 · historique F13 opérationnels |

**Norme F03.3 :** la préparation technique de retrait reste **interdite** tant que le set intermédiaire suivant n’est pas satisfait ou explicitement borné par Morris :

- inventaire legacy validé ;
- dépendances actives confirmées ;
- candidats au retrait identifiés ;
- plan documentaire W1-B ;
- matrice P03–P11 qualifiée ;
- isolation OPS1 définie avant retrait ;
- F11 décidée ;
- F13 décidée ;
- stratégie rollback documentée ;
- preuves candidates de non-régression ;
- anti-bypass des gates ;
- aucun blocker HARD ignoré.

---

## Options d’arbitrage (historique)

### F03.1 — Set minimal — **non retenue**

Set strictement nécessaire (inventaire · actifs · candidats · W1-B · isolation définie · rollback doc · preuves candidates · F11/F13 · HARD non ignorés), sans matrice P* ni holds candidats explicites au niveau F03.3.

### F03.2 — Set maximal — **non retenue**

P03–P11 + preuves runtime + tests + obs + sécu + données + IAM + RUN + cutover readiness — sur-cadrage pour une entrée prep.

### F03.3 — Set custom intermédiaire — **ADOPTÉE**

F03.1 **+** matrice P03–P11 à jour · frontière OPS1 spécifiée (design) · preuves non-régression par surface · holds/rollback candidats documentés · anti-bypass B5/R1/HARD · F11+F13 décidées.

#### Volontairement différé (hors satisfaction F03 seule)

| Élément | Pourquoi |
|---------|----------|
| Mesure volume DB | UNKNOWN — campagne dédiée |
| IAM multi-user | NOT SELECTED |
| UI OA product complete | distinct F11 cutover vs product |
| Fermeture HARD | vagues Option C 2–4 |
| Satisfaction runtime P07–P09 | cutover / implémentation ultérieure |

**Gates associés :** W1-S4 · SC-02…05 · SC-12 · B5 STOP BEFORE DELIVERY.

---

## Anti-claims

- F03 décidée ≠ préconditions satisfaites
- F03 décidée ≠ delivery preparation autorisée
- F03.3 ≠ adoption du set maximal
- matrice définie ≠ validation runtime
- F03 décidée ≠ T-A7 OPEN · ≠ cutover
