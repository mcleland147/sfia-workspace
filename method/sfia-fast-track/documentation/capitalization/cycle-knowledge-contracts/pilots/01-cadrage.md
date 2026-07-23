# CKC — Cadrage (candidate)

| Champ | Valeur |
|-------|--------|
| cycle_id | 1 |
| cycle_name | Cadrage |
| status | `candidate` |
| version | `0.1.0` |
| inherits_from | `sfia-v2.5-project-cycles-method-candidate.md` §4.1 |
| profile_notes | Standard défaut ; Critical si arbitrage structurant ; Light rare |

---

## Finalité

Démêler l’**intention** de la **solution supposée**, fermer un périmètre utile, et rendre explicites contraintes, succès et inconnues — **avant** toute conception ou delivery.

## Problèmes ciblés

- Solution présentée comme besoin.
- Périmètre ouvert / hors périmètre absent.
- Bénéficiaires et décideurs flous.
- Critères de succès absents ou non mesurables.
- Critical / gates implicites.
- Inconnues cachées derrière une fausse clarté.

## Quand utiliser / ne pas utiliser

**Utiliser :** nouveau chantier ; re-cadrage ; intention ambiguë ; avant conception lourde.  
**Ne pas utiliser :** simple correction mono-fichier déjà bornée (Light delivery/doc) ; rejouer un cadrage pour éviter une décision Morris.

## Posture GPT

- Challenger besoin ≠ solution sans bloquer.
- Préférer questions **ciblées** (1–3) aux listes.
- Expliciter hypothèses et les marquer comme telles.
- Ne pas inventer de stakeholders.
- Ne pas proposer d’architecture ou de stack sauf si explicitement demandé comme **hypothèse**.

## Responsabilités humaines

Trancher finalité, périmètre, profil, gates ; accepter/reporter inconnues ; override tracé (« borner malgré immaturité »).

## Dimensions d’analyse

1. Intention vs solution  
2. Finalité / valeur  
3. Bénéficiaires & parties prenantes  
4. Périmètre / hors périmètre  
5. Contraintes (temps, tech, légal, org)  
6. Dépendances  
7. Risques structurants  
8. Critères de succès  
9. Décisions attendues  
10. Inconnues critiques  

## Signaux & questions adaptatives (exemples)

| Dimension | Signal immaturité | Exemple de question |
|-----------|-------------------|---------------------|
| Intention vs solution | Verbes d’implémentation sans « pourquoi » | « Quel problème disparaît si on ne livre rien ? » |
| Parties | « Les users » indifférenciés | « Qui dit non si le périmètre grossit ? » |
| Hors scope | Aucune exclusion | « Qu’est-ce qui est explicitement hors de ce cycle ? » |
| Succès | « Améliorer » | « Comment saura-t-on que c’est réussi dans 30 jours ? » |
| Inconnues | Confiance narrative sans sources | « Quelle inconnue, si fausse, invalide tout le reste ? » |

## Maturité

| Bande | Indices cadrage |
|-------|-----------------|
| exploratoire | Intention floue ; solution dominante ; hors scope absent |
| partielle | Intention claire ; trous stakeholders ou succès |
| suffisante_pour_decider | Périmètre + succès + inconnues listées |
| prete_a_borner | Brief + profil + gates candidats prêts pour prompt |

## Fiabilité

Faible si : aucune source projet ; contradictions non signalées ; stakeholders inventés ; « évident » non sourcé.

## Risques / biais / anti-patterns

- Effet checklist (parcourir les 10 dimensions à chaque fois).
- Sur-cadrage Light.
- Transformer le cadrage en mini-conception.
- Critical par confort.

## Anti-claims

Interdits hors preuve/gate : « Cadrage validé » · « Scope gelé définitivement » · « Cycle suivant ouvert » · « Architecture choisie » · « Prêt delivery ».

## Transitions candidates

| Si | Alors candidat |
|----|----------------|
| Besoin produit flou | Rester cadrage / pause |
| Usages à détailler | Conception fonctionnelle |
| Structure modules | Architecture fonctionnelle |
| UI centrale | UX/UI (après ou avec conception) |
| Demande purement technique bornée | Archi technique / delivery (avec réserve) |

## Sortie / pause / arrêt

**Sortie :** brief orientant + hors scope + inconnues.  
**Pause :** OK sans mutation.  
**Arrêt :** doctrine, chemin protégé, décision structurante sans Morris.

## Exemples — SFIA Studio « suivi de contrats »

### Clair

« Créer une app de suivi des échéances contractuelles pour l’équipe commerciale, hors signature électronique, MVP lecture + alertes. »  
→ Dimensions 1–5 rapidement couvertes ; maturité `suffisante_pour_decider` ; transition conception ou Project D1.

### Ambigu

« Créer une application de suivi de contrats. »  
→ Challenge intention/solution ; actors ; hors scope ; succès ; **ne pas** enchaîner architecture.

## Limites

Ne remplace pas le routing ni le template. N’ouvre pas de Cycle runtime Studio.

## Articulation

CKC guide le challenge ; routing choisit les docs ; template borne Cursor ; UX 87 affiche maturité/questions, pas ce document entier.
