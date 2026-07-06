# Test scenarios — INC-01 Chantiers360 v2

**Traçabilité :** `03-backlog/acceptance-criteria.md` US-01 à US-04

## Données de test communes

| Champ | Valeur type |
|-------|-------------|
| Libellé | `Chantier QA {timestamp}` |
| Client | `Client QA` |
| Adresse | `12 rue des Tests, Lyon` |

**Reset DB :** table `chantiers` vidée avant chaque scénario E2E.

---

## US-02 — Liste vide

| Élément | Détail |
|---------|--------|
| **AC** | Liste vide ; CTA création |
| **Précondition** | DB sans chantier |
| **Étapes** | Ouvrir `/` |
| **Résultat attendu** | Message vide hero + grille ; lien « + Nouveau chantier » visible |
| **Automatisé** | `e2e/inc-01.spec.ts` — US-02 |
| **Hors scope** | Filtres liste, panneaux droite mockés |

---

## US-01 — Création chantier

| Élément | Détail |
|---------|--------|
| **AC** | Champs obligatoires ; statut À démarrer ; redirect fiche |
| **Étapes** | `/chantiers/nouveau` → remplir → soumettre |
| **Résultat attendu** | URL `/chantiers/[id]` ; statut « À démarrer » |
| **Champs obligatoires** | Attribut HTML `required` sur libellé, client, adresse (validation navigateur) |
| **Automatisé** | `e2e/inc-01.spec.ts` — US-01 |
| **Réserve** | Soumission vide bloquée côté HTML5 — pas de message serveur testé |

---

## US-03 — Fiche chantier

| Élément | Détail |
|---------|--------|
| **AC** | Libellé, client, adresse, statut ; retour liste ; sections |
| **Étapes** | Créer chantier → vérifier fiche → retour dashboard |
| **Résultat attendu** | Données visibles ; placeholders Tâches/Réserves/Jalons/CR avec hints INC-02+ |
| **Automatisé** | `e2e/inc-01.spec.ts` — US-03 |
| **Hors scope** | Onglets INC-02+ non cliquables / non fonctionnels |

---

## US-04 — Modification statut

| Élément | Détail |
|---------|--------|
| **AC** | 4 statuts ; visible fiche + liste ; Terminé consultable |
| **Statuts implémentés** | À démarrer, **En cours**, **En retard**, **Terminé** |
| **Écart backlog** | AC mentionne « En pause » — code utilise « En retard » (D-INC01-4) |
| **Étapes** | Pour chaque statut : sélectionner → Mettre à jour → vérifier fiche → dashboard → rouvrir fiche |
| **Automatisé** | `e2e/inc-01.spec.ts` — US-04 |
| **Hors scope** | Toggle retard manuel (US-05 / INC-03) |

---

## Garde-fous hors scope (non testés fonctionnellement)

- Tâches, réserves, jalons, comptes rendus
- Prochaines actions réelles
- Auth, rôles, espace client
- Devis, facturation, compta
- Chantiers360 V0
