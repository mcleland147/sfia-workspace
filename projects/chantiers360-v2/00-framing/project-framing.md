# Chantiers360 v2 — Project Framing

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/00-framing/project-framing.md`  
**Version :** Bootstrap initial

## 1. Framing status

| Élément | Valeur |
|---------|--------|
| **Statut** | Initial framing / bootstrap |
| **Origine** | Projet créé **from scratch** |
| **V0** | Aucun élément V0 utilisé |
| **Enrichissement** | Cadrage à compléter dans cycle ultérieur |

## 2. Initial intent

Créer un **mini-produit de suivi de chantier** pour artisans ou petites entreprises du bâtiment, afin de centraliser les chantiers, les tâches, les réserves, les statuts et les comptes rendus rapides.

## 3. Problem statement

Les petites structures du bâtiment peuvent avoir du mal à suivre clairement l'état de leurs chantiers, les tâches restantes, les réserves clients, les prochaines actions et les informations opérationnelles dispersées (carnets, messages, fichiers éparpillés).

## 4. Target users

| Utilisateur | Rôle |
|-------------|------|
| **Artisan indépendant** | Utilisateur principal — suivi de ses chantiers |
| **Petite entreprise du bâtiment** | Équipe légère — vue d'ensemble chantiers |
| **Conducteur de travaux léger** | Coordination tâches et réserves |
| **Responsable opérationnel** | Pilotage statuts et prochaines actions |
| **Client final** | Consultation future — **hors MVP initial** |

## 5. Initial scope

Périmètre initial (bootstrap — à valider Morris) :

- création / suivi d'un chantier ;
- statut du chantier ;
- tâches associées ;
- réserves ;
- compte rendu rapide ;
- prochaines actions.

## 6. Initial MVP hypothesis

**Hypothèse MVP :**

```
chantier → tâches → réserves → statut → compte rendu rapide
```

Cette hypothèse devra être **validée par Morris** avant tout backlog détaillé ou cycle delivery.

## 7. Explicit out of scope

Hors périmètre explicite (bootstrap et MVP initial) :

- devis ;
- facturation ;
- planning avancé ;
- gestion documentaire complète ;
- photos avant / après détaillées *(idée future — hors MVP initial)* ;
- accès client ;
- application mobile native ;
- intégrations comptables ;
- IA générative avancée ;
- reprise Chantiers360 V0 ;
- comparaison V0 *(cycle final uniquement)* ;
- code applicatif ;
- architecture technique détaillée.

## 8. Assumptions

- Projet **générique**, non rattaché à un client réel ;
- **Données fictives** uniquement dans les phases initiales ;
- Objectif principal = **tester SFIA v2.0** sur un produit métier réel ;
- Le MVP doit rester **simple et borné** ;
- L'exécution applicative viendra **plus tard** ;
- **Pas d'usage de V0** avant le cycle final de comparaison et capitalisation.

## 9. Risks

| Risque | Mitigation |
|--------|------------|
| Dérive de scope | MVP figé, gate Morris avant extension |
| Réintroduction implicite V0 | Règle from scratch — V0 fin pilote only |
| Confusion comparaison vs cadrage | V0 = capitalisation finale, pas input |
| Création trop rapide de code | Pas d'app/backend au bootstrap |
| Backlog complet prématuré | Cycle dédié après cadrage Morris |
| Surconception fonctionnelle | Cycles courts, documents bornés |
| Automatisation prématurée | L3 max bootstrap — L5 global hors cible |

## 10. Guardrails

- **Git** = source de vérité
- **Pas de V0** — cadrage, docs, backlog, code, structure
- **Pas d'app/backend** au bootstrap
- **Pas de Notion/CMP**
- **Pas de L5 global**
- **Gate Morris** avant extension de scope
- **Cycles courts** — diff borné
- **Documents bornés** — pas de surproduction
- **Validation** avant PR / merge

## 11. Validation criteria for this bootstrap

Le bootstrap est **valide** si :

| Critère | Attendu |
|---------|---------|
| Structure minimale | `README.md` + `00-framing/project-framing.md` |
| Autres fichiers projet | Aucun |
| V0 utilisée | Non |
| Code créé | Non |
| Backlog détaillé | Non |
| MVP initial formulé | Oui |
| Hors périmètre explicites | Oui |
| Prochain cycle identifié | Oui |

## 12. Next decision needed

**Décisions Morris à venir :**

1. **Confirmer** le nom `chantiers360-v2`
2. **Confirmer ou ajuster** le MVP initial (chantier → tâches → réserves → statut → compte rendu)
3. **Confirmer le prochain cycle** — cadrage détaillé ou architecture fonctionnelle
4. **Décider** si une PR doit être ouverte après revue
5. **Planifier** le cycle final comparaison V0 — **uniquement après pilote**

---

**Automation level autorisé :** L3 (bootstrap) — gate Morris avant cycle suivant.

**Références SFIA :**

- `sfia-v2-project-bootstrap-standard.md`
- `sfia-v2-pilot-selection-scoring.md`
