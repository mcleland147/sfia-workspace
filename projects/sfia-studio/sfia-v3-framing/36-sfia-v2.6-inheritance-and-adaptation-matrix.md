# 36 — Matrice d'héritage historique SFIA v2.6 → concepts Studio v3

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | Matrice **historique et de conception** · doctrine Studio v3 **validée** · **pas** de lien runtime |
| **Rôle** | Documenter l'origine et le traitement des concepts · **jamais** une dépendance active |
| **Doctrine produit Studio** | **SFIA v3 exclusive** (D-V3-02 · D-V3-03) |
| **SFIA v2.6** | Baseline historique **externe** · hors consommation produit Studio |
| **Fondations liées** | V3-F01…F15 **VALIDATED** |
| **Anti-claims** | Pas coexistence opérationnelle · Pas fallback doctrinal v2.6 · Pas SoT `method/` pour Studio |
| **Document** | `36-sfia-v2.6-inheritance-and-adaptation-matrix.md` |
| **Complète** | framing `12` · `20` · décisions D-V3-* |

---

## 0. Interprétation des catégories (obligatoire)

| Catégorie | Signification pour Studio v3 |
|-----------|------------------------------|
| **Inherited** | Le principe a été **incorporé** dans la doctrine v3 ; Studio l'applique via v3, **pas** en chargeant v2.6 |
| **Adapted** | La doctrine v3 possède désormais **sa propre formulation** ; l'origine est historique |
| **Replaced** | Le mécanisme v2.6 **n'est pas utilisé** par Studio ; un mécanisme v3 le remplace |
| **Not-applicable** | Exclu du produit Studio |
| **Unresolved** | Sujet encore non arbitrable sans GO Morris supplémentaire |

Cette matrice **ne crée aucun** lien runtime vers v2.6.

---

## 1. Matrice

### Inherited

| Élément | Justification Studio v3 |
|---------|-------------------------|
| Git source de vérité | Incorporé (D3 / OM) |
| Morris décide | Incorporé |
| Protected paths | Incorporé |
| Absence de décision automatique | Incorporé (anti-L5 décisionnel) |
| Complétude des livrables | Incorporé (Artifact Completeness) |
| PR readiness | Incorporé (cycle projet) |
| Post-merge | Incorporé |
| Capitalisation | Incorporé |
| Review handoff (preuve externe / résilience) | Incorporé (D2 hybride) |

### Adapted

| Élément | Formulation Studio v3 |
|---------|----------------------|
| Quinze cycles | Qualification dynamique post-intention |
| Profils Light/Standard/Critical/Capitalization | UI + LPS |
| Blocs transverses | **Lenses** contextuelles (`34`) |
| Gates / stop conditions | UI + Stop Condition Engine |
| L0–L5 | Couplés E0–E4 · L5 global interdit |
| Rôles ChatGPT / Cursor | Boucle Studio-native |
| Knowledge Layer / source routing | Allowlist DoctrinePackage v3 |
| Review pack | Contenu + Artifact Completeness |
| Preuve et verdict | EvidenceLink + anti-claims |

### Replaced

| Élément historique v2.6 | Remplacement Studio v3 |
|------------------------|------------------------|
| PGE documentaire comme moteur principal | **ExecutionContract** (+ export Markdown Cursor = adaptateur) |
| Démarrage explicite par cycle | Démarrage par **intention** puis qualification dynamique |
| Doctrine `method/` comme SoT runtime direct | **DoctrinePackage** Studio-only |
| Coexistence / dual-run doctrinal opérationnel | **Exclusivité v3** (D-V3-03) — dual-run produit interdit |

### Not applicable

| Élément | Raison |
|---------|--------|
| Consommation indiscriminée de toute la doctrine générale | Studio-native D1 + exclusivité |
| Dépendance obligatoire aux prompts manuels seuls | Surface conversationnelle Studio |
| L5 global | Interdit |
| Migration générale des historiques | D7 / R5 |
| Promotion automatique de maturité | V3-F15 |
| Fallback doctrinal Studio → v2.6 | D-V3-03 |
| Chargement v2.6 dans mémoire fonctionnelle / moteur de contexte Studio | D-V3-03 |

### Unresolved — encore ouverts

| ID | Sujet | Note |
|----|-------|------|
| U2 | Root Git exact du DoctrinePackage | Après modeled |
| U3 | Priorité slices Option D D2/D3 | Après audit dépendances |
| U4 | Fusion docs UX 87–89 vers `main` | Gate doc dédié |
| U5 | Vocabulaire IMPLEMENTED CANDIDATE vs maturité plateforme | Clarification delivery |

**Résolu pour doctrine Studio :** U1 (entrée UX) — CC-D01 Option A prévaut ; amendement formel du texte framing `11` reste une action documentaire aval.

## 2. Ce qui n'est pas hérité tel quel

- Questionnaire CKC visible ;
- Claim ADOPTED sans GO ;
- Dual-run doctrinal prolongé ;
- v2.6 comme doctrine active Studio.

## 3. Réévaluation des actifs (D-V3-04)

Tout actif Studio existant (fonctionnel, UX, modeled, delivery, runtime) doit être classé :

conservé (conforme) · adapté · remplacé · retiré · preuve historique uniquement.

Cette classification **n'est pas** exécutée dans la présente PR.

## 4. Maturité

Matrice : **VALIDATED** comme document d'héritage de la doctrine Studio · **n'active pas** v2.6 · **n'altère pas** les fichiers `method/**`.
