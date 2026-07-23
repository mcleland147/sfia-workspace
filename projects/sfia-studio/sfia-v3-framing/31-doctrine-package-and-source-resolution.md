# 31 — DoctrinePackage et résolution des sources

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | Doctrine SFIA Studio v3 **validée par Morris** · merge `main` en attente |
| **Fondations** | **V3-F03 · V3-F07 validées** (D-V3-01) |
| **Doctrine produit Studio** | **SFIA v3 exclusive** — DoctrinePackage = future SoT Studio |
| **SFIA v2.6** | Externe · hors allowlist de consommation produit |
| **Maturité fondations** | **VALIDATED** (doctrine) · schéma JSON **non créé** |
| **Gates** | Validation doctrine + PR readiness |
| **Anti-claims** | Pas package exécutable · Pas resolver runtime · Pas ADOPTED runtime |
| **Document** | `31-doctrine-package-and-source-resolution.md` |

> Conceptuel uniquement — **aucun** schéma JSON exécutable dans ce cycle.

---

## 1. V3-F03 — DoctrinePackage (VALIDATED)

### Définition

Unité doctrinale **versionnée**, consommée **uniquement par SFIA Studio** (Studio-native, D1 · exclusivité D-V3-02).

### Contenu conceptuel minimal

| Champ | Rôle |
|-------|------|
| packageId | Identifiant stable |
| version | Semver / label doctrine |
| maturité | DOCUMENTED…ADOPTED (package) — package doctrine actuellement **VALIDATED** côté framing |
| doctrineRoot | Racine documentaire Studio (`projects/sfia-studio/sfia-v3-*`) |
| documentsCanoniques | Index framing (+ références design/modeled quand validés) |
| schemas | Références futures (modeled) — non créés ici |
| ckcAvailable | Paths/statut des CKC (pilotes / synthetic / absent) |
| fallbackRules | Fallback **intra-package** pour CKC absents (carte synthétique autorisée) · **interdit** de basculer vers doctrine v2.6 |
| compatibility | Compatibilité **versions DoctrinePackage** entre elles · **pas** de mode coexistence opérationnelle v2.6/v3 |
| consumerAllowlist | Studio seulement |
| sourcesInterdites | `method/sfia-fast-track/` comme SoT runtime · PGE documentaire v2.6 comme moteur · prompts manuels comme contrat natif |
| digests | checksums path→digest (concept) |
| resolutionRules | Ordre de chargement / pin version |
| failurePolicy | Fail-closed si root/digest manquant |
| historique | Versions antérieures |

### Règles d'exclusivité

1. Studio consomme exclusivement DoctrinePackage v3.
2. Aucune coexistence doctrinale opérationnelle avec v2.6 (D-V3-03).
3. Export Markdown Cursor = adaptateur technique, pas SoT.
4. Consommateur hors allowlist = **interdit**.
5. Pas de schéma exécutable dans ce cycle (impact → modeled).

## 2. Résolution de version

1. Lire pin projet (`doctrineVersion` / digest) si présent.
2. Résoudre DoctrinePackage déclaré.
3. Vérifier digests des docs/CKC référencés.
4. Si absent / mismatch → **stop** (CONTEXT_STALE / DOCTRINE_UNRESOLVED) — pas de silent fallback vers un autre package ni vers v2.6.
5. Fallback CKC de **cycle** (silencieux UI, carte synthétique v3) ≠ fallback de **package doctrine**.

## 3. V3-F07 — Provenance et hiérarchie des sources (VALIDATED)

### Hiérarchie d'autorité (haute → basse)

```
preuves Git et runtime
> décisions Morris
> état projet validé
> doctrine Studio v3 (package piné)
> CKC (sources autorisées package)
> documents projet non validés
> contexte conversationnel
> recommandations
> hypothèses
```

SFIA v2.6 **n'apparaît pas** dans la hiérarchie de consommation Studio. Elle peut apparaître uniquement comme **métadonnée d'origine** d'un concept hérité (voir `36`).

### Attributs de provenance

sourceId · type · autorité · fraîcheur · digest/path · acteur · timestamp · statut (active/stale/superseded) · originHeritage (optionnel, historique).

### Conflits

Un conflit **haut vs bas** : retenir le haut, signaler contradiction (voir `33`).
Un conflit **même niveau** : gate Morris si structurant.

### Ce qui n'est pas SoT

raisonnement interne brut · scores non explicables · chat seul · CKC comme autorisation · documents `method/` non pinés dans DoctrinePackage.

## 4. Alignement D3 / R1

MD = pourquoi · JSON = quoi · SQL = état — **conservé**.
DoctrinePackage orchestre **quelles** defs MD/JSON sont pinées ; SQL porte l'état runtime.

## 5. Maturité

V3-F03 / V3-F07 : **VALIDATED** (doctrine) · manifest/resolver : **non MODELED / non IMPLEMENTED**.
