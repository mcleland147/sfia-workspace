# 04 — F13 — Historique legacy read-only & frontière OPS1

| Champ | Valeur |
|-------|--------|
| **Décision** | D-T-A7-F13 |
| **Question** | Comment conserver l’historique legacy en read-only et isoler OPS1 ? |
| **Statut contenu** | `NOT DECIDED` |
| **Reco** | `RECOMMENDED — NOT DECIDED` → **F13.4** |

## Définitions

| Terme | Périmètre candidat |
|-------|-------------------|
| **Historique legacy** | états/audit D1 liés MethodMode · artefacts `.sfia-exec` locaux · docs/archives `method/**` non canoniques · journaux OPS1 locaux |
| **Données** | SQLite `method_mode` + audit events · fichiers state gitignored · markdown method |
| **Chemins** | `app/lib/d1/**` (données) · `method/**` · `app/lib/ops1/**` · `.sfia-exec/**` |
| **Consommateurs** | D1 UI · canonical loader · OPS1/CT · prompts · docs |
| **Droits** | path-policy + gates Morris (**≠** IAM multi-user) |
| **Mutations interdites (cible RO)** | update/delete historique · réactivation silencieuse MethodMode retiré · write `method/` hors gate |
| **Durée** | **NOT DECIDED** — candidat : jusqu’à GO archive finale distinct |
| **Frontière OPS1** | D04 : isolation **avant** retrait · POC ≠ Option A (SC-12) |
| **Après retrait** | lectures RO seulement · pas d’autorité runtime cutover |
| **Rollback** | restore ACL/allowlist · Git · backup DB · procédures locales `.sfia-exec` |

---

## F13.1 — Conservation in-place read-only

Legacy reste en place ; mutations interdites par politique/tests.

| Critère | Éval |
|---------|------|
| Périmètre | chemins actuels |
| Accès | same surfaces ; deny writes |
| Contrôle | path-policy + antiLegacy étendu |
| Migration | minimale |
| Avantages | simplicité |
| Risques | confusion actif/historique · réactivation accidentelle |
| Dette | structure legacy visible |
| Durée | indéterminée |
| Preuves | tests mutation deny |
| Conditions retrait final | GO distinct |

---

## F13.2 — Isolation dédiée read-only

Frontière dédiée ultérieure : namespace · API lecture · ACL · journalisation · no mutation · dépendances actives isolées.

| Critère | Éval |
|---------|------|
| Périmètre | store/API « legacy history » |
| Accès | API RO bornée (lien F11.2/F11.3) |
| Contrôle | ACL path + audit |
| Migration | copie/move contrôlé |
| Avantages | clarté · SC-12 · D04 |
| Risques | coût · double écriture pendant transition |
| Dette | service RO à maintenir |
| Rollback | reverse migrate |
| Preuves | e2e no-write · boundary tests |
| Conditions retrait final | empty store + GO |

---

## F13.3 — Archive documentaire uniquement

Git/docs seulement · **pas** d’exposition runtime.

| Critère | Éval |
|---------|------|
| Périmètre | repo markdown + history Git |
| Accès | lecteurs Git |
| Contrôle | Git permissions |
| Avantages | très simple |
| Risques | perte traçabilité produit · support runtime impossible · `.sfia-exec`/DB non couverts |
| Dette | faible doc · **trou** opérationnel |
| Preuves | tags Git |
| Limites | **insuffisant seul** si D1/OPS1 restent |

---

## F13.4 — Hybrid — **RECO**

Archive Git/docs **+** vue/politique RO **bornée** runtime pour données encore nécessaires (MethodMode history · audit) · OPS1 isolé (D04) sans retrait forcé.

| Critère | Éval |
|---------|------|
| Périmètre | Git archives `method` non-canon · RO DB/audit D1 · OPS1 path-policy renforcée |
| Accès | F11.2 lecture · pas d’UI obligatoire |
| Contrôle | path-policy ≠ IAM · gates |
| Migration | progressive |
| Avantages | couvre UNKNOWN volumes · compatible W1-D03/D04 · évite F13.3 trop faible et F13.2 trop tôt |
| Risques | complexité hybride · discipline anti-réactivation |
| Dette | moyenne |
| Rollback | Git + backup DB + ACL |
| Durée | jusqu’à GO archive finale |
| Preuves | deny mutation · boundary OPS1 · inventaire allowlist |
| Conditions retrait final | preuves + F03/F11 satisfaits + GO Morris |

---

## Synthèse F13

| Option | Label |
|--------|-------|
| F13.1 | acceptable court terme |
| F13.2 | cible forte si cutover proche |
| F13.3 | insuffisante seule |
| F13.4 | `RECOMMENDED — NOT DECIDED` |

**Anti-claim :** F13.4 recommandé ≠ isolation implémentée · ≠ ACL validée · ≠ retrait OPS1.
