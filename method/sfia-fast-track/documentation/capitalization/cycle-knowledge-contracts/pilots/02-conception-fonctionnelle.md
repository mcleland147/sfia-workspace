# CKC — Conception fonctionnelle (candidate)

| Champ | Valeur |
|-------|--------|
| cycle_id | 2 |
| cycle_name | Conception fonctionnelle |
| status | `candidate` |
| version | `0.1.0` |
| inherits_from | `sfia-v2.5-project-cycles-method-candidate.md` §4.2 |
| profile_notes | Standard ; Critical si impact produit structurant |

---

## Finalité

Rendre **testable et cohérent** le comportement attendu du produit : qui fait quoi, sur quels objets, selon quelles règles — **sans** figer l’architecture technique.

## Problèmes ciblés

- Spec narrative non vérifiable.
- Rôles et parcours incomplets.
- Règles métier implicites.
- Données sans cycle de vie.
- Exceptions oubliées.
- Glissement prématuré vers stack/UI pixels.

## Quand utiliser / ne pas utiliser

**Utiliser :** post-cadrage ; nouveau module métier ; règles complexes.  
**Ne pas utiliser :** pure dette technique ; polish UI seul ; ADR stack.

## Posture GPT

- Exiger la **cohérence** usages ↔ règles ↔ données.
- Refuser le « on verra à l’implémentation » pour les règles structurantes.
- Séparer clairement fonctionnel vs technique vs UX pixel.
- Proposer scénarios nominaux **et** exceptions, sans exhaustivité impossible.

## Responsabilités humaines

Arbitrer règles conflit ; accepter réserves ; décider hors scope fonctionnel.

## Dimensions d’analyse

1. Usagers / rôles  
2. Parcours nominaux  
3. Exceptions / erreurs métier  
4. Objets métier  
5. Données & états  
6. Règles métier  
7. Critères d’acceptation  
8. Permissions / visibilité  
9. Intégrations fonctionnelles (quoi, pas comment)  
10. Limites vs architecture technique  

## Signaux & questions adaptatives

| Dimension | Signal immaturité | Exemple |
|-----------|-------------------|---------|
| Rôles | Un seul « utilisateur » | « Qui crée vs qui consulte vs qui administre ? » |
| Exceptions | Happy path seul | « Que se passe-t-il si la date est dépassée ? » |
| Objets | Vocabulaire instable | « Contrat, avenant, échéance : combien d’objets distincts ? » |
| CA | « Doit être intuitif » | « Quel comportement observable prouve l’acceptation ? » |
| Limite tech | Choix DB dans la spec | « Est-ce une règle métier ou une option technique ? » |

## Maturité

| Bande | Indices |
|-------|---------|
| exploratoire | Parcours absents ; objets flous |
| partielle | Happy path OK ; exceptions/règles troues |
| suffisante_pour_decider | Règles structurantes + CA pour MVP |
| prete_a_borner | Spec prête pour UX/backlog/archi fct |

## Fiabilité

Faible si personas inventés ; règles contradictoires non signalées ; CA non observables.

## Risques / biais / anti-patterns

- Checklist de tous les parcours edge.
- Spec technique déguisée.
- Sur-modélisation données.
- « Complétude » illusoire.

## Anti-claims

« Spec complète » · « Prêt à coder sans backlog » · « Architecture validée » · « UX approuvée ».

## Transitions candidates

| Si | Alors |
|----|-------|
| Parcours UI centraux | UX/UI |
| Découpage modules | Architecture fonctionnelle |
| Stories nécessaires | Backlog |
| Uniquement NFR/stack | Architecture technique (mauvais routage si trop tôt) |

## Sortie / pause / arrêt

Sortie : périmètre fonctionnel borné + arbitrages + réserves.  
Pause OK. Arrêt si décision produit structurante sans gate.

## Exemples — suivi de contrats

### Clair

Rôles commercial/manager ; objet Échéance ; alerte J-7 ; pas de signature.  
→ Maturité `suffisante_pour_decider` ; CA testables.

### Ambigu

« Il faut gérer les contrats intelligemment. »  
→ Forcer objets, rôles, règles ; **ne pas** proposer microservices.

## Limites

Pas de wireframes obligatoires ; pas d’ADR techniques.

## Articulation

Alimente synthèse UX (objets, règles, questions) ; routing pointe standards projet ; template pour rédaction doc Cursor.
