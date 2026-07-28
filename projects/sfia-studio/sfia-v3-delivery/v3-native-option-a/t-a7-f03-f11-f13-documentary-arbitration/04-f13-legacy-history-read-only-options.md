# 04 — F13 — Historique legacy read-only & frontière OPS1

| Champ | Valeur |
|-------|--------|
| **Décision** | D-T-A7-F13 |
| **Choix** | **F13.4** — `HYBRID GIT ARCHIVE PLUS BOUNDED READ-ONLY RUNTIME VIEW` |
| **Statut** | `DECIDED — ADOPTED BY MORRIS` |
| **Date** | 2026-07-28 19:25:19 CEST (+0200) |

## Contenu normatif F13.4 (adopté)

La cible documentaire retenue combine :

- conservation **Git/documentaire** de la vérité historique ;
- **vue runtime read-only bornée** pour support, audit et traçabilité ;
- **isolation OPS1 préalable** à tout retrait (W1-D04) ;
- **mutations historiques interdites** ;
- journalisation des accès ;
- frontière explicite **actif vs historique** ;
- **path-policy distincte de l’IAM** ;
- rollback documenté ;
- durée de conservation à préciser dans un cycle distinct si nécessaire.

**Git reste source de vérité historique.** La vue RO n’est pas une source canonique concurrente.

**Ce cycle n’autorise aucune implémentation de frontière runtime, migration, ni modification OPS1.**

---

## Options d’arbitrage (historique)

### F13.1 — In-place read-only — **non retenue**

Simple · risque confusion actif/historique.

### F13.2 — Isolation dédiée RO — **non retenue (maintenant)**

Cible forte possible plus tard · coût élevé pour l’instant.

### F13.3 — Archive documentaire uniquement — **non retenue**

Insuffisante seule tant que D1/OPS1 restent actifs.

### F13.4 — Hybrid — **ADOPTÉE**

Archive Git + politique/vue RO bornée + OPS1 isolable.

---

## Anti-claims

- F13.4 décidée ≠ frontière runtime implémentée
- read-only documenté ≠ ACL validée
- archive Git ≠ exposition produit suffisante à elle seule
- vue read-only ≠ source canonique concurrente à Git
- isolation OPS1 requise ≠ isolation réalisée
- conservation ≠ maintien d’un usage actif
- F13 décidée ≠ prep technique / delivery / cutover
