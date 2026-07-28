# 03 — F11 — API / UI avant retrait et cutover

| Champ | Valeur |
|-------|--------|
| **Décision** | D-T-A7-F11 |
| **Question** | Quelles exigences API/UI pour retrait legacy et cutover ? |
| **Statut contenu** | `NOT DECIDED` |
| **Reco** | `RECOMMENDED — NOT DECIDED` → **F11.2** |

## Distinctions (obligatoires)

| Couche | Sens | État actuel |
|--------|------|-------------|
| API/UI **product complete** (A3.2) | produit OA utilisable | OA UI **MISSING** |
| API/UI **retrait legacy** | opérer/observer retrait MethodMode/`method` | **MISSING** (hors badges D1) |
| API/UI **avant cutover** | readiness · hold · audit cutover | **MISSING** |
| UI **administration** | opérateurs / Morris | partiel D1/OPS1 existants ≠ cutover |
| Surfaces **preuve / audit / rollback / monitoring** | preuves opérables | concepts doc · runtime limité |

**Surfaces existantes (ne pas confondre avec F11 cutover) :** MethodModeBadge · cockpit D1 · OPS1 session/allowlist UI.

**Mutations dans ce cycle :** **aucune**. Options = exigences **futures**.

---

## F11.1 — Aucune nouvelle surface avant cutover

| Critère | Éval |
|---------|------|
| Usages | cutover via Git/docs/ops manuelles |
| Utilisateurs | Morris / agents seulement |
| Droits | L0 gates existants |
| Données affichées | aucune nouvelle |
| Mutations | interdites (status quo) |
| Audit | logs Git/CI seulement |
| Avantages | simplicité · peu de dette UI |
| Risques | visibilité faible · rollback fragile · audit insuffisant · erreur humaine |
| Accessibilité | N/A nouvelles surfaces |
| Dette | dette **opérationnelle** |
| Preuve readiness | difficile |
| Impact cutover | élevé |
| Réversibilité | haute (rien ajouté) |

---

## F11.2 — API opérationnelle minimale sans UI dédiée — **RECO**

| Critère | Éval |
|---------|------|
| Usages | lecture état MethodMode · compat/dépendances · statut migration/hold · health/readiness |
| Utilisateurs | automation · Morris via outils · CI candidats |
| Droits | lecture bornée · **pas** IAM multi-user (NOT SELECTED) |
| Données | mode projet · flags hold · digest/loader status · allowlist hits (agrégats) |
| Mutations | **interdites** dans exigence minimale ; commandes write = gate ultérieur séparé |
| Audit | événements lecture/écriture si write gated |
| Sécurité | surface server-only · pas d’exposition publique |
| Accessibilité | N/A UI |
| Avantages | observabilité sans dette UI · aligne P07–P09 holds |
| Risques | UX opérateur faible · tentation d’étendre write trop tôt |
| Dette | API contracts à maintenir |
| Preuve readiness | tests API candidats |
| Impact cutover | réduit le risque « à l’aveugle » |
| Réversibilité | moyenne (contrats) |

---

## F11.3 — API + UI minimale d’administration

| Critère | Éval |
|---------|------|
| Usages | F11.2 + écrans : état legacy · compat · historique · statut OPS1 · readiness · rollback · audit · badges/warnings |
| Utilisateurs | Morris · éventuels opérateurs futurs |
| Droits | admin borné · ≠ IAM produit |
| Données | + historique RO (dépend F13) · statut OPS1 |
| Mutations | hold/rollback **candidats** seulement sous gate |
| Audit | UI actions journalisées |
| Sécurité | risque surface admin |
| Accessibilité | WCAG candidat (exigence) |
| Avantages | opérabilité humaine |
| Risques | dette UX · conflation product UI vs cutover UI · SC-12 si OPS1 mal présenté |
| Dette | haute |
| Preuve readiness | e2e UI + API |
| Impact cutover | positif si borné |
| Réversibilité | basse une fois shippé |

---

## F11.4 — Custom

**Proposition intermédiaire :** F11.2 **maintenant (exigence)** + **jalon UI admin optionnelle** seulement si cutover réel approche et F13.2/F13.4 l’exige — UI **hors** product OA A3.2.

| Critère | Éval |
|---------|------|
| Bénéfices | évite UI prématurée · laisse porte ouverte |
| Risques | ambiguïté de calendrier UI |
| Dette | faible si jalon explicite |
| Réversibilité | haute |

---

## Synthèse F11

| Option | Label |
|--------|-------|
| F11.1 | trop risqué pour cutover gouverné |
| F11.2 | `RECOMMENDED — NOT DECIDED` |
| F11.3 | acceptable plus tard / cutover proche |
| F11.4 | acceptable alternative à F11.2 |

**Anti-claim :** F11.2 recommandé ≠ API implémentée · ≠ product complete A3.2 · ≠ retrait MethodMode.
