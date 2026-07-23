# 31 — DoctrinePackage et résolution des sources (candidate)

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | `doctrine-candidate` — **soumis à validation Morris** · **non adopté** · **non baseline** |
| **Maturité fondation** | `DOCUMENTED` candidate seulement |
| **Baseline opérationnelle** | SFIA **v2.6** (inchangée) |
| **Adoption v3** | **Non** |
| **Gate** | `GO CONSOLIDATION CIBLÉE — SFIA STUDIO V3 DOCTRINE` |
| **Branche** | `method/sfia-studio-v3-doctrine-consolidation` |
| **CKC guidance** | Pilote Conception fonctionnelle `pilots/02-conception-fonctionnelle.md` · candidate · aucune autorité d'exécution |
| **Anti-claims** | Pas V3-VALIDATED · Pas V3-ADOPTED · Pas READY FOR DELIVERY · Pas CKC ADOPTED · Pas décision autonome |
| **Document** | `31-doctrine-package-and-source-resolution.md` |
| **Fondations** | V3-F03 · V3-F07 |

> Conceptuel uniquement — **aucun** schéma JSON exécutable dans ce cycle.

---

## 1. V3-F03 — DoctrinePackage (candidate)

### Définition

Unité doctrinale **versionnée**, consommée **uniquement par SFIA Studio** (Studio-native, D1).

### Contenu conceptuel minimal

| Champ | Rôle |
|-------|------|
| packageId | Identifiant stable |
| version | Semver / label doctrine |
| maturité | DOCUMENTED…ADOPTED (package) |
| doctrineRoot | Racine documentaire Studio (`projects/sfia-studio/sfia-v3-*` candidate) |
| documentsCanoniques | Index framing (+ références design/modeled quand validés) |
| schemas | Références futures (modeled) — non créés ici |
| ckcAvailable | Paths/statut des CKC (pilotes / absent) |
| fallbackRules | Carte synthétique + méthode v2.6 |
| compatibility | Compat baseline v2.6 ; modes coexistence |
| consumerAllowlist | Studio seulement |
| sourcesInterdites | Consommation indiscriminée de `method/` comme SoT runtime |
| digests | checksums path→digest (concept) |
| resolutionRules | Ordre de chargement / pin version |
| failurePolicy | Fail-closed si root/digest manquant |
| historique | Versions antérieures |

### Règles

- Pas de merge dans `method/` sans GO ADOPTION (D1 / framing 12).
- Pas de schéma exécutable dans ce cycle (impact → modeled).
- Consommateur hors allowlist = **interdit**.

## 2. Résolution de version (candidate)

1. Lire pin projet (`doctrineVersion` / digest) si présent.
2. Résoudre DoctrinePackage déclaré.
3. Vérifier digests des docs/CKC référencés.
4. Si absent / mismatch → **stop** (CONTEXT_STALE / DOCTRINE_UNRESOLVED) — pas de silent fallback vers un autre package.
5. Fallback CKC de **cycle** (silencieux UI) ≠ fallback de **package doctrine**.

## 3. V3-F07 — Provenance et hiérarchie des sources (candidate)

### Hiérarchie d'autorité (haute → basse)

```
preuves Git et runtime
> décisions Morris
> état projet validé
> doctrine Studio v3 (package piné)
> CKC (candidate)
> documents projet non validés
> contexte conversationnel
> recommandations
> hypothèses
```

### Attributs de provenance

sourceId · type · autorité · fraîcheur · digest/path · acteur · timestamp · statut (active/stale/superseded).

### Conflits

Un conflit **haut vs bas** : retenir le haut, signaler contradiction (voir `33`).
Un conflit **même niveau** : gate Morris si structurant.

### Ce qui n'est pas SoT

raisonnement interne brut · scores non explicables · chat seul · CKC comme autorisation.

## 4. Alignement D3 / R1

MD = pourquoi · JSON = quoi · SQL = état — **conservé**.
DoctrinePackage orchestre **quelles** defs MD/JSON sont pinées ; SQL porte l'état runtime.

## 5. Maturité

V3-F03 / V3-F07 : **DOCUMENTED candidate**.
