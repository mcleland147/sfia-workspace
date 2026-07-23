# 05 — Connaissance, DoctrinePackage et résolution CKC

| Champ | Valeur |
|-------|--------|
| **Statut** | Conception fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-design/v3-native-option-a` |
| **Gate** | `GO CONCEPTION FONCTIONNELLE — SFIA STUDIO V3-NATIVE — TRANCHE VERTICALE OPTION A` |
| **Anti-claims** | Pas DESIGN VALIDATED · Pas runtime migré · Pas schemas |
| **Document** | `05-knowledge-context-and-ckc-resolution.md` |
| **Fondations** | V3-F01 · V3-F03 · V3-F07 |

## 1. DoctrinePackage (fonctionnel)

Unité doctrinale versionnée **Studio-only**.

| Champ conceptuel | Rôle |
|------------------|------|
| packageId / version / digest | Pin |
| doctrineRoot | `sfia-v3-*` autorisés |
| documentsCanoniques | index |
| ckcAvailable | detailed/synthetic map |
| fallbackRules | **intra-package only** |
| consumerAllowlist | Studio |
| sourcesInterdites | `method/sfia-fast-track/**` · template Cursor comme SoT · PGE comme moteur |
| failurePolicy | fail-closed |

### Résolution

1. Lire pin LPS/projet ou défaut Studio v3.
2. Vérifier digests.
3. Échec → `DOCTRINE_UNRESOLVED` / `CONTEXT_STALE`.
4. **Jamais** bascule v2.6.

## 2. Contexte résolu

Hiérarchie d’autorité (V3-F07) : preuves Git/runtime > décisions Morris > LPS validé > doctrine package > CKC > docs projet non validés > conversation > reco > hypothèses.

v2.6 **absente** de la hiérarchie de consommation.

## 3. CKC Resolver (natif Studio)

| Statut | Comportement UI | Trace |
|--------|-----------------|-------|
| detailed | influence questions (opaque) | path/version/digest |
| synthetic | idem, carte synthétique package | status=synthetic |
| unavailable | → synthetic silencieux (CC-D12) ou `CKC_UNAVAILABLE` si même synthetic absent | |

**Interdits :** formulaire CKC · autorité d’exécution · invention de CKC détaillé · fallback doctrinal v2.6.

## 4. Influence sur clarification

CKC fournit dimensions/risques/critères **en interne** → Conversation Orchestrator pose questions métier groupées.
Utilisateur ne voit pas « section CKC 14 ».

## 5. Qualification cycle

Intent + package + (optionnel) LPS → CycleType[] proposés · profil · lenses.
Qualification `proposed` jusqu’à ack humain si structurante.
Requifiable avant contrat.

## 6. Remplacement runtime actuel

| Actuel | Cible |
|--------|-------|
| `SFIA_CANONICAL_CORE_PATHS` method/ | DoctrinePackage allowlist |
| `SFIA_METHOD_BASELINE = v2.6` | package version Studio v3 |
| PERMANENT_CORE « consomme v2.6 » | règles package + anti-claims |
| template path comme doctrine | adaptateur post-ExecutionContract seulement |

## 7. Maturité

DOCUMENTED · resolver non IMPLEMENTED.
