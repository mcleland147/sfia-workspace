# COURTILIEN-02B-ACCESS-DIAG — Review pack Full

**Cycle :** COURTILIEN-02B-ACCESS-DIAG — Utilisateur manuel Free + restrictions VIEW
**Type :** 9 — QA / validation · **Profil :** Standard
**CKC cycle 9 :** Complet / P0 (carte synthétique candidate — non norme doctrinale)
**Date rapport :** 2026-11-20 11:28:00 CET (Europe/Paris)
**Verdict review pack :** `READY WITH RESERVES`
**Contrat d'accès métier complet sur Free :** **`BLOCKED — IDENTITY LINK NOT PROVEN`**
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

Handoff SYNC-DIAG lu au commit exact `3056f4a3…`. Tip distant début cycle = même SHA.

---

## 2. Sources

| Source | Statut |
|--------|--------|
| Template / routing / OM / guardrails / checklist / CKC9 | LU (`origin/main:`) |
| Handoff `3056f4a3:sfia-review-handoff/latest-chatgpt-review.md` | LU |
| docs: add-or-import-users-manually | LU |
| docs: users-menu | LU (cycle précédent + applicable) |
| docs: global-data-restrictions | LU |
| docs: user-groups | LU |
| docs: pricing-and-plans | LU |
| softr.io/pricing | LU (cycle précédent + confirmé) |
| Browser Studio MCP | **INDISPONIBLE** — UI NOT TESTED |
| Livrables Liora versionnés | absents — signalé |

---

## 3. État Softr MCP — avant = après (aucune mutation)

| Contrôle | Valeur | Preuve |
|----------|--------|--------|
| App cible | `7242211b-…` CourtiLien — Espace client | PASS |
| published | null | PASS |
| signup | DISABLED | PASS |
| login | EMAIL_CODE | PASS |
| user connection | null | PASS |
| users | 0 | PASS |
| groupes custom | 0 (3 PREDEFINED) | PASS |
| restrictions | [] | PASS |
| datasources | 7 Airtable | PASS |

**Actions non réalisées :** add_user · invite · create_user_connection · Save and sync · create_user_group · set_data_restriction · écriture Airtable · UI Studio.

---

## 4. Capacité utilisateur manuel — DOCUMENTED / NOT TESTED UI

| Question | Qualification | Niveau |
|----------|---------------|--------|
| Ajout manuel d'un seul compte | Oui — Add user(s) | DOCUMENTED |
| Finish without inviting | Oui — possible après Save and continue | DOCUMENTED |
| Email requis | Oui | DOCUMENTED |
| Écriture datasource sans user connection | Non requise pour user Softr-only | DOCUMENTED (implicite : sync écrit si connected) |
| User connection obligatoire | Non pour création manuelle | DOCUMENTED |
| Quota Free | 5 app users combined | DOCUMENTED |
| EMAIL_CODE vs password/magic link | App = EMAIL_CODE ; compatibilité exacte du flux manuel | **NOT TESTED** |
| Emails `@example.com` connectables | Non pour OTP réel | **BLOCKED** pour E2E démo |
| UI Studio observée | Non (browser MCP absent) | **NOT TESTED** |

---

## 5. Contrat d'identité — analyse

### Contrat métier attendu
```
Session Softr
→ UTILISATEUR (role=client, actif=true)
→ personne_client exactement 1
→ PERSONNE type=client, statut=actif
→ objets métier de cette PERSONNE
Sinon REFUS
```

### Approches examinées

#### A — Email session → UTILISATEUR.email → personne_client → PERSONNE

| Élément | Statut |
|---------|--------|
| Nécessite user connection pour exposer champs UTILISATEUR comme `USER:…` | Oui pour groupes conditionnels / attributs user table |
| Sans user connection, session Softr n'a pas `personne_client` | **DOCUMENTED gap** |
| Restriction = 1 table à la fois ; multi-hop non garanti | **NOT PROVEN** |
| Verdict | **BLOCKED — IDENTITY LINK NOT PROVEN** |

#### B — Email session → PERSONNE.email (raccourci)

| Élément | Statut |
|---------|--------|
| Pattern docs VIEW : match email table ↔ `{USER:::EMAIL}` | DOCUMENTED |
| Contourne `personne_client`, role, actif | **FAIL vs contrat métier** |
| Doublon email PERSONNE (contrôle qualité démo) | **RISQUE fuite / ambiguïté** |
| USR-004/PER-004 email coïncident = hasard démo, pas preuve d'architecture | FAIL |
| Verdict | **REJECTED as identity contract** (hypothèse email ≠ identité validée) |

#### C — Références session dans restrictions sans connection

| Token | Disponible sans user connection |
|-------|----------------------------------|
| `{USER:::EMAIL}` / EMAIL_DOMAIN | Oui (docs + outil restrictions) |
| `USER:::role` / `actif` / `personne_client` | **Non** — champs datasource user table absents |
| Verdict | Identité métier Airtable **non résolvable** en session |

**Conclusion identité :**
**`BLOCKED — IDENTITY LINK NOT PROVEN`** sans user connection (ou attributs user équivalents prouvés).
Le mapping Airtable USR-004→PER-004 **existe** mais **n'est pas consommé** par une session Softr manuelle.

---

## 6. Restrictions VIEW sur Free

### Disponibilité plan

| Capacité | Source | Qualification |
|----------|--------|---------------|
| VIEW sur Free | docs global-data-restrictions : « available on all plans, including Free » | **DOCUMENTED** |
| Create/Edit/Delete | Business+ | **DOCUMENTED** |
| Pricing page « Global data restrictions » sous Business | softr.io/pricing | **CONTRADICTION** vs docs VIEW |
| Custom user groups Free | FAQ Pro=3 / Business=10 ; sources secondaires « Free = built-in only » | **NOT PROVEN Free** — probablement 0 custom |
| Groupes prédéfinis utilisables | Logged in / All / Non Logged | MCP PASS |

**Réserve :** Studio doit confirmer qu'un Add restriction VIEW est réellement possible sur le workspace Free (écarts pricing/docs).

### Matrice des 7 datasources

Légende verdict : FEASIBLE* = syntaxe email possible mais **hors contrat personne_client** · BLOCKED = contrat non exprimable · NOT PROVEN = opérateurs relationnels non prouvés.

| Table | Path vers PERSONNE | Champ candidat VIEW | Condition cible | Dépendance session | Capacité d'expression | Risque fuite | Preuve | Verdict |
|-------|--------------------|---------------------|-----------------|--------------------|----------------------|--------------|--------|---------|
| UTILISATEUR | N/A (soi) | `email` | email = `{USER:::EMAIL}` | EMAIL | DOCUMENTED pattern | Faible si unique | Docs | FEASIBLE* (ligne compte seulement) |
| PERSONNE | self | `email` | email = session | EMAIL | DOCUMENTED | **Élevé** si doublons ; ignore personne_client | Docs + schéma | FEASIBLE* / **FAIL contrat** |
| PERSONNE | via `UTILISATEUR` inverse / personne_client | linked | session→USR→lien | USER attrs | Sans connection | Fuite si absent | Schéma | **BLOCKED** |
| CONTRAT | `personne` → PERSONNE | linked `personne` | personne = fiche autorisée | identité PERSONNE | Opérateur linked vs session | **Élevé** si non restreint | Schéma only | **NOT PROVEN** / gap multi-hop |
| DOCUMENT | `personne` (et/ou contrat) | linked | idem | identité PERSONNE | idem | Élevé | Schéma | **NOT PROVEN** |
| SINISTRE | `contrat` → `personne` | 2 hops | idem | identité | Jointure multi-niveaux | **Très élevé** | Schéma | **BLOCKED** (non prouvé) |
| RENDEZ_VOUS | `personne` | linked | idem | identité | idem CONTRAT | Élevé | Schéma | **NOT PROVEN** |
| COMPAGNIE | aucun path client | — | minimisation | — | Pas de champ client | **Exposition cabinet** si All | Schéma | **BLOCKED** sans règle deny-all / allow-minimal |

**Défaut Softr :** sans restriction, utilisateurs **unrestricted** (docs). Toute datasource oubliée = fuite.

---

## 7. Matrice des risques (tous NOT TESTED runtime)

| Scénario | Attendu | Mécanisme nécessaire | Preuve | Écart |
|----------|---------|----------------------|--------|-------|
| Anonyme | refus données | pages + VIEW Logged-in | Docs partiel | NOT TESTED |
| Client A autorisé | ses objets seuls | identité + VIEW 7 tables | Non | IDENTITY BLOCKED |
| Client B HOLD | refus | actif / HOLD | Non | NOT TESTED |
| Courtier / directeur | refus espace client | role gate | Sans USER:role | BLOCKED Free manuel |
| Email absent / dupliqué | refus | contrôles | Doublon PERSONNE connu | FAIL email-only |
| Role changé / désactivé | refus | champs UTILISATEUR | Connection absente | BLOCKED |
| personne_client vide / multiple | refus | cardinalité | Airtable non native | NOT PROVEN applicatif |
| Document / URL objet tiers | refus | VIEW serveur | Non | NOT TESTED |
| Datasource sans restriction | refus | couverture complète | Défaut unrestricted | **FAIL si partiel** |
| Conflit de règles | Can't > Can only | docs | Docs | NOT TESTED |

---

## 8. Options et recommandation

| Option | Description | Verdict Free |
|--------|-------------|--------------|
| **A** | Compte Softr manuel + VIEW + identité prouvable | **BLOCKED** — lien session→USR→personne_client **NOT PROVEN** ; multi-hop objets **NOT PROVEN** ; custom groups Free **NOT PROVEN** ; email-only **insuffisant** |
| **B** | Source users clients-only bornée (miroir / filtre) | Hors Free filtered sync (Business) ; miroir = GO modèle distinct |
| **C** | Offre payante (Business) : filtered sync + restrictions + groupes | Capacités alignées docs/pricing ; **GO abonnement** requis ; hors garde-fou payant actuel |

**Priorité réutilisation Airtable/Softr :**
Option A **ne satisfait pas** authentification→identité→autorisation→cloisonnement→preuve E2E sur Free tel que qualifié.

**Recommandation bornée (non adoptée) :**
STOP configuration. Prochaine validation minimale sous GO Morris distinct, **une seule** piste :

1. **Confirm Studio Free** : VIEW Add restriction réellement cliquable + custom groups allowance ; **ou**
2. **GO Business** pour filtered sync Selected USR-004 + VIEW + groupes ; **ou**
3. **GO architecture minimale** table/source clients-only 1 enregistrement + sync All bornée.

Ne pas créer de compte, restriction ni sync avant ce gate.

---

## 9. Fake / Real Qualification

| Élément | Niveau |
|---------|--------|
| État Softr MCP | REAL BOUNDARY PROVEN |
| Docs manuel / VIEW Free / CED Business | REAL BOUNDARY PROVEN (docs) |
| Contradiction pricing « Global data restrictions » | DOCUMENTED écart → Studio NOT TESTED |
| Identité session→personne_client | **NOT PROVEN** |
| Restrictions linked multi-hop | **NOT PROVEN** |
| E2E session | HORS SCOPE / NOT TESTED |
| Claims interdits | Sécurité validée · auth fonctionnelle · cloisonnement prouvé · MVP prêt |

---

## 10. Décisions Morris

| # | Décision |
|---|----------|
| D1 | Ne pas adopter Option A comme architecture validée |
| D2 | Choisir piste de validation suivante (Studio Free confirm / Business / miroir) |
| D3 | GO distinct avant tout user, restriction, sync, BUILD, publication |

---

## 11. Verdict

**`READY WITH RESERVES`** — diagnostic complet, matrices et écarts explicites.

**`BLOCKED — IDENTITY LINK NOT PROVEN`** pour sécuriser l'espace client Free via utilisateur manuel + VIEW seuls.

**`NOT READY FOR CLIENT ACCESS`**.

Handoff : `docs(review-handoff): COURTILIEN-02B access diagnostic`
