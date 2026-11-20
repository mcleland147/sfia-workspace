# COURTILIEN-02B-SYNC-DIAG — Review pack Full

**Cycle :** COURTILIEN-02B-SYNC-DIAG — Diagnostic synchronisation filtrée Softr
**Type :** 9 — QA / validation · **Profil :** Standard
**CKC cycle 9 :** Complet / P0 (carte synthétique) — guidance candidate, non norme autonome
**Date rapport :** 2026-11-20 11:12:00 CET (Europe/Paris)
**Verdict review pack :** `READY WITH RESERVES`
**Verdict technique sync filtrée Free :** **`BLOCKED`**
**Accès client :** **`NOT READY FOR CLIENT ACCESS`**

---

## 1. Local Git Truth Check

| Contrôle | Valeur |
|----------|--------|
| Repository | `mcleland147/sfia-workspace` |
| Branche | `project/sfia-task-manager-cycle-4-ux-ui` |
| HEAD | `139f45fd019aa0561bfb5c6b7a7bd1c748f570b4` |
| origin/main | `d3d199adb782462b93467934f5f1e8a0c98fb492` |
| Staged | vide |
| status --short | untracked hors projet (`.cursor/…`, `.tmp-sfia-review/…`) |
| Anomalie | aucune |

Handoff 02B-SEC lu au commit exact `41af8c20…`. Tip distant début cycle = même SHA.

---

## 2. Sources

| Source | Statut |
|--------|--------|
| Template / routing / operating model / guardrails / checklist | LU (`origin/main:`) |
| CKC `02-fifteen-cycles-synthetic-map.md` cycle 9 | LU — Complet / P0 |
| Handoff `41af8c20:sfia-review-handoff/latest-chatgpt-review.md` | LU |
| https://docs.softr.io/add-and-manage-users/syncing-users-with-a-data-source | LU |
| https://docs.softr.io/add-and-manage-users/users-menu | LU |
| https://www.softr.io/pricing | LU — preuve plan |
| Browser Studio MCP `cursor-ide-browser` | **INDISPONIBLE** (server absent) |
| Livrables Liora versionnés | absents hors périmètre — signalé |

---

## 3. Pre-check Softr MCP — PASS (avant)

| Contrôle | Résultat |
|----------|----------|
| App `7242211b-…` non publiée | PASS (`published: null`) |
| Inscription | PASS (`signUp.policy: DISABLED`) |
| Login | EMAIL_CODE activé |
| user connection | PASS (`source: null`) |
| users | PASS (`total: 0`) |
| data restrictions | PASS (`[]`) |
| groupes | 3 PREDEFINED only |
| datasources | PASS (7 Airtable, base `appjebCNHtEaCAzxy`) |

---

## 4. Inspection Studio — BLOCKED / NOT TESTED

**Navigateur agent :** MCP `cursor-ide-browser` **absent** de la session.
**Règle appliquée :** ne pas inventer d'inspection visuelle.

### Écrans / captures à fournir par Morris (read-only, sans Save and sync)

1. Studio → [CourtiLien — Espace client](https://studio.softr.io/applications/7242211b-049d-4673-9262-19dd95ee9178)
2. **Users** → **Sync with data source** (ouvrir le modal **sans** Save and sync)
3. Capture de : Records All / Selected · Advanced · Pause auto-sync · mapping Email/Name · éventuel paywall Filtered user sync
4. Si Selected accessible : opérateurs disponibles sur `role`, `actif`, `personne_client`, `id`
5. Plan workspace visible (Free / Basic / Pro / Business)

**Actions non exécutées (volontairement) :** Save and sync · Connect · Import · Sync now · invitation · magic link · modification réglage persistante · create_user_connection MCP.

---

## 5. Preuves documentaires Softr (REAL BOUNDARY — docs + pricing)

### Capacités produit (docs sync)

- Records : **All** ou **Selected** (règles de filtre)
- Advanced : création DS vs Softr-only ; si perte d'éligibilité → **Deactivate** / **Delete** / **Unsync**
- Mapping : Email* · Name · Magic link · Avatar · Created · Last seen (Last seen = Pro+)
- **Pause auto-sync** documenté
- Sync **non continue** en Studio / apps **non publiées** ; temps réel après publish
- Triggers Studio : login, publish, visite onglet Users
- Bouton de commit : **Save and sync**

### Plan Free vs Filtered user sync — PASS (pricing public)

| Plan | Filtered user sync |
|------|--------------------|
| Free | **non listé** |
| Basic | **non listé** |
| Pro | **non listé** |
| **Business** ($329/mo) | **« Filtered user sync »** explicitement |
| Enterprise | custom |

**Conclusion plan :** la synchronisation **Selected / filtrée** est une capacité **Business**, incompatible avec la contrainte CourtiLien **aucun abonnement payant** sans GO Morris distinct.

**Global data restrictions** : également Business — cohérent avec le STOP 02B-SEC sur cloisonnement serveur Free.

---

## 6. Qualification théorique des filtres (si Selected était disponible)

Population UTILISATEUR : 5 (2 clients, 2 courtiers, 1 directeur).

| Stratégie | Règle cible | Résultat théorique | Preuve |
|-----------|-------------|--------------------|--------|
| A — métier dynamique | `role=client` AND `actif=true` AND `personne_client` NOT EMPTY | **USR-004 seul** | NOT PROVEN (UI + opérateurs linked record) |
| B — sélection explicite | `id=USR-004` | **USR-004 seul** | NOT PROVEN (UI) |

Exclus théoriques : USR-005 (HOLD/inactif), USR-001, USR-002, USR-003.

Prévisualisation count sans sync : **NOT TESTED** (pas d'UI).

**Important :** même si A/B étaient UI-prouvés, l'import réel reste hors scope et sous GO distinct.

---

## 7. Choix dangereux (documentés — non activés)

| Choix | Risque |
|-------|--------|
| Records = **All** | Import des 5 comptes (courtiers/directeur/HOLD) |
| Delete on ineligibility | Suppression Airtable/Softr irréversible |
| Sync All puis désactivation manuelle | Création temporaire de comptes non autorisés |
| Publish avant règles | Sync continue temps réel |
| 2-way createUserInDatasource | Écriture Airtable depuis Softr |
| Abonnement Business sans GO | Contredit garde-fou « pas d'abonnement payant » |

---

## 8. Matrice de décision

### Option : Sync Selected sur UTILISATEUR

| Critère | Évaluation |
|---------|------------|
| Capacité technique produit | Docs : oui (Selected + Advanced) |
| Disponibilité Free | **NON** — feature Business |
| Filtre exact A/B | Studio : NOT TESTED ; théorique A/B → USR-004 |
| Utilisateurs sélectionnés | Théorique 1 ; réel NOT TESTED |
| Import futur maîtrisé | Pause auto-sync docs oui ; Free Selected N/A |
| Désactivation | Docs : Deactivate recommandé vs Delete |
| Retour arrière | Remove connection / unsync — non exécuté |
| Preuves complémentaires | Captures Studio Morris ; confirmation plan workspace |

### Verdict technique
**`BLOCKED`** — Filtered user sync **non disponible** sur offre Free (preuve pricing Softr).

### Alternatives minimales (examinées, **non adoptées**)

| Alternative | Pourquoi non adoptée ici |
|-------------|--------------------------|
| Upgrade Business | Abonnement payant — GO Morris distinct + hors garde-fou actuel |
| Table miroir 1 ligne USR-004 | Nouvelle table / modèle — hors périmètre ; GO distinct |
| Ajout manuel 1 user Softr | Invitation / compte — GO distinct ; `@example.com` EMAIL_CODE non prouvé |
| Sync All | Import non autorisé — STOP |

### Périmètre proposé pour un prochain GO (si Morris lève un frein)

Sans lancer quoi que ce soit maintenant :

1. Confirmer plan workspace + captures Selected paywall.
2. Soit GO Business + Selected (A ou B) + Pause auto-sync + Deactivate on ineligibility + `createUserInDatasource=false` + **sans** Save tant que revue OK.
3. Soit GO table miroir clients-only sur Free + sync All bornée à 1 enregistrement.
4. Puis seulement : Save and sync sous GO explicite + relecture users=1 + USR-005 absent.

---

## 9. Post-diagnostic Softr — PASS (après = avant)

| Contrôle | Après |
|----------|--------|
| user connection | null |
| users | 0 |
| invitations | aucune |
| restrictions | [] |
| Airtable | non modifié ce cycle |
| published | null |
| signup | DISABLED |
| git projet | inchangé |

---

## 10. Fake / Real Qualification

| Élément | Valeur |
|---------|--------|
| Applicable | oui |
| Mock | aucun |
| MCP état app | **REAL BOUNDARY PROVEN** |
| Pricing Filtered sync = Business | **REAL BOUNDARY PROVEN** (page pricing) |
| Docs Selected / Advanced / Pause | **REAL BOUNDARY PROVEN** (docs) |
| UI Studio opérateurs / Free paywall live | **NOT TESTED** (browser MCP absent) |
| Sync / import / auth | **HORS SCOPE** / non exécuté |
| Claims interdits | Sync opérationnelle · identité prête · accès sécurisé · MVP |

---

## 11. Décisions Morris

| # | Décision |
|---|----------|
| D1 | Fournir captures Studio Users → Sync (sans Save) pour confirmer paywall |
| D2 | Arbitrer : rester Free (miroir / manuel) **vs** GO Business (Filtered sync) |
| D3 | GO sync / import uniquement après D2 |
| D4 | Restrictions serveur (Business) / BUILD / publication — GO distincts |

---

## 12. Verdict

**`READY WITH RESERVES`** — diagnostic documentaire + MCP complet ; UI Studio non inspectable localement.

**`BLOCKED`** pour sync filtrée Selected sur plan Free.

**`NOT READY FOR CLIENT ACCESS`**.

Aucune synchronisation, connexion, invitation ni publication exécutée.

Handoff : `docs(review-handoff): COURTILIEN-02B sync diagnostic`
