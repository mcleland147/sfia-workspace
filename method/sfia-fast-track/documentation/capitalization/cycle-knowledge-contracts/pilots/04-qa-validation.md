# CKC — QA / validation (candidate)

| Champ | Valeur |
|-------|--------|
| cycle_id | 9 |
| cycle_name | QA / validation |
| status | `candidate` |
| version | `0.1.0` |
| inherits_from | `sfia-v2.5-project-cycles-method-candidate.md` §4.9 |
| profile_notes | Standard ; Critical si go-live / sécurité |

---

## Finalité

Produire un **verdict evidence-based** : ce qui est prouvé, ce qui ne l’est pas, sévérité des écarts, et claims **interdits** — sans GO implicite.

## Problèmes ciblés

- QA symbolique (« ça a l’air OK »).
- Couverture nominale seule.
- Preuves non reproductibles.
- Réserves cachées.
- Confusion test / validation méthode / validation produit.
- Promotion de claims marketing.

## Quand utiliser / ne pas utiliser

**Utiliser :** post-delivery ; pré-release ; audit qualité.  
**Ne pas utiliser :** pour découvrir le besoin (cadrage) ; pour designer l’UI.

## Posture GPT

- Exiger le **référentiel** (quoi devait être vrai).
- Séparer observation / réserve / verdict.
- Chercher cas négatifs et non-régression.
- Refuser les claims sans preuve.
- Ne pas adoucir une réserve bloquante.

## Responsabilités humaines

Classer réserves ; GO validation / go-live ; accepter risque résiduel.

## Dimensions d’analyse

1. Objet à valider  
2. Référentiel attendu  
3. Preuves disponibles  
4. Couverture (nominale / négative / bords)  
5. Reproductibilité  
6. Non-régression  
7. Sévérité des écarts  
8. Limites de la campagne  
9. Conditions du verdict  
10. Claims interdits  

## Signaux & questions adaptatives

| Dimension | Signal immaturité | Exemple |
|-----------|-------------------|---------|
| Référentiel | « Valider le module » sans critères | « Quelle exigence précise est sous test ? » |
| Preuves | Capture unique non datée | « Comment rejouer la preuve ? » |
| Négatifs | Aucun cas d’échec | « Quel abus ou erreur utilisateur a été tenté ? » |
| Sévérité | Tout « mineur » | « Qu’est-ce qui bloque un GO ? » |
| Claims | « Production ready » | « Quelle preuve autorise ce claim ? » |

## Maturité

| Bande | Indices |
|-------|---------|
| exploratoire | Pas de référentiel ; pas de plan |
| partielle | Nominaux OK ; négatifs/repro manquants |
| suffisante_pour_decider | Verdict + réserves classées |
| prete_a_borner | Dossier prêt PR/release avec anti-claims |

## Fiabilité

Faible si environnement non déclaré ; flaky ignorés ; échantillon non représentatif.

## Risques / biais / anti-patterns

- Checklist tests sans oracle.
- Confirmation bias (ne chercher que le succès).
- QA = green CI uniquement.
- Critical cosmétique.

## Anti-claims

« Validé » · « Sans bug » · « Prêt prod » · « Couverture totale » · « GO implicite » · « LIVE PRODUCT VALIDATED » sans rapport.

## Transitions candidates

| Si | Alors |
|----|-------|
| Écarts bloquants | Retour delivery |
| Branche à publier | PR readiness |
| Fenêtre release | Déploiement / release |
| Apprentissage méthode | Capitalisation |

## Sortie / pause / arrêt

Sortie : PASS / PASS WITH RESERVES / FAIL + preuves.  
Arrêt : réserve bloquante non arbitrable ; chemin protégé.

## Exemples — suivi de contrats

### Clair

CA : créer échéance, alerte J-7, refus date invalide ; preuves E2E + unit.  
→ Verdict structuré ; anti-claim « sans bug ».

### Ambigu

« Valide que l’app de contrats est bonne. »  
→ Exiger référentiel ; refuser verdict global ; maturité `exploratoire`.

## Limites

Ne remplace pas la Validation Checklist SFIA (méthode). Complète le **raisonnement** QA projet.

## Articulation

CKC cadre l’appréciation ; checklist valide la conformité cycle ; template impose format preuves ; UX affiche réserves/verdict, pas la checklist complète.
