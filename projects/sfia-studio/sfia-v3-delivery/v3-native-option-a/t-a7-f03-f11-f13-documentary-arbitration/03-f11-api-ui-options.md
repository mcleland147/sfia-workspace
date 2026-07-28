# 03 — F11 — API / UI avant retrait et cutover

| Champ | Valeur |
|-------|--------|
| **Décision** | D-T-A7-F11 |
| **Choix** | **F11.2** — `MINIMAL OPERATIONAL READ API WITHOUT DEDICATED UI` |
| **Statut** | `DECIDED — ADOPTED BY MORRIS` |
| **Date** | 2026-07-28 19:25:19 CEST (+0200) |

## Distinctions (conservées)

| Couche | Sens |
|--------|------|
| API/UI **product complete** (A3.2) | produit OA — **distinct** de F11 cutover |
| API/UI **retrait legacy** / **avant cutover** | exigence F11.2 |
| UI **administration** | **non obligatoire** à ce stade |
| Mutations | **aucune** implicite · write = gate distinct futur |

## Contenu normatif F11.2 (adopté)

Avant tout futur cutover, une **API minimale de lecture et de readiness** devra être **définie puis validée**.

Périmètre candidat décidé :

- lecture de l’état MethodMode ;
- lecture des dépendances et compatibilités legacy ;
- statut de migration ;
- health / readiness ;
- exposition des holds et blockers ;
- audit de lecture ;
- **aucune** UI d’administration dédiée obligatoire à ce stade ;
- **aucune** mutation implicite ;
- toute commande future (write) devra disposer d’un **gate distinct**.

**Ce cycle n’autorise aucune implémentation API/UI.**

---

## Options d’arbitrage (historique)

### F11.1 — Aucune nouvelle surface — **non retenue**

Simplicité · risque cutover aveugle / audit fragile.

### F11.2 — API opérationnelle minimale sans UI — **ADOPTÉE**

Observabilité gouvernée sans dette UI prématurée.

### F11.3 — API + UI admin — **non retenue (maintenant)**

Acceptable plus tard si cutover proche · dette UX élevée aujourd’hui.

### F11.4 — Custom (API + UI jalonnée) — **non retenue**

Proche de F11.2 ; Morris a tranché F11.2 strict (pas de jalon UI dans la décision).

---

## Anti-claims

- API décidée comme exigence ≠ API implémentée
- absence d’UI dédiée ≠ absence de visibilité
- F11.2 ≠ autorisation de mutation
- product complete API/UI ≠ cutover ready
- read API ≠ IAM validé
- F11 décidée ≠ prep technique / delivery / cutover
