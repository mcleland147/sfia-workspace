# ML5 — Recommandation de politique cognitive (post-calibration LIVE)

**Date:** 2026-11-26  
**Statut:** PROPOSITION — non adoptée — décision Morris requise  
**Lane calibration:** DEV  
**Admission runtime restaurée:** `operational` (Luna/Terra non promues automatiquement)

## 1. Ressource initiale recommandée

**Terra Medium (`gpt-6.1-terra` @ `medium`)** comme candidat d’entrée pour les tours d’analyse nominaux, sous réserve de validation Morris.

Justification: sur le corpus borné (ambiguïté, multi-intentions, négations, investigation), Terra Medium a produit des réponses COMPLETE/PASS, avec reconnaissance des ambiguïtés et structuration multi-volets, à un coût unitaire nettement inférieur à Sol Medium.

## 2. Couples effectivement qualifiés (LIVE)

| Couple | Phase | Résultat | Notes |
|---|---|---|---|
| Luna Medium | A/B | PASS | Compatibilité + corpus |
| Terra Medium | A/B/C | PASS | Compatibilité + corpus + discriminant |
| Sol Medium | A/B/C | PASS | Référence comparative |
| Luna High | C | PASS | vs Terra Medium (investigation) |
| Terra High | C | PASS | vs Sol Medium (multi) |
| Luna Low | D (proposition Nora) | Observé | Recommandé par Nora pour salutation — couple non forcé en Phase A |

Non qualifiés exhaustivement: xhigh/max, Luna none, 17 couples référentiels restants.

## 3. Conditions de mobilisation

- **Luna Low/Medium:** salutation, reformulation simple, faits déjà acquis, tours courts sans investigation.
- **Terra Medium:** analyse multi-intentions, ambiguïté à clarifier, négations/contraintes, allocation et stratégie.
- **Sol Medium:** référence / cas où Terra échoue qualitativement, ou besoin de profondeur comparative non couverte.
- Escalade Luna→Terra ou Terra→Sol sur signaux: multi-intentions non couvertes, risques non identifiés, contradiction de sources, échec critique silencieux.
- Désescalade inverse lorsque le segment suivant est purement simple.

## 4. Comparaison qualité / coût / latence (corpus A–C)

| Modèle | n | Tokens in | Tokens out | Coût estimé USD | Latence moy. |
|---|---:|---:|---:|---:|---:|
| Luna | 6 | 44 551 | 3 982 | ~0.0038 | ~6.9 s |
| Terra | 7 | 51 985 | 2 696 | ~0.0308 | ~8.2 s |
| Sol | 6 | 44 552 | 1 810 | ~0.0933 | ~5.9 s |

Coût campagne adapter ~**0.128 USD** (Standard court, PARTIAL si modelApplied non vérifié).  
Total Responses adapter: **19** (+ Phase D product séparée). Enveloppe 40 non saturée.

Qualité: aucun FAIL critique silencieux sur le corpus; Sol n’a pas démontré de surcroît qualitatif systématique justifiant un défaut Sol Medium pour tous les tours.

## 5. Ajustements référentiel indicatif

- Conserver les 51 lignes; ne pas cartographier rigidement tâche→modèle.
- Preférence indicative Terra Medium pour §4.1–4.3 « analyse » reste cohérente avec les preuves.
- Luna Low pour salutations: aligné Phase D (proposition Nora).

## 6. Réserves

- `effortApplied` / `modelApplied` souvent UNVERIFIED côté SDK — l’effort **demandé** a été transmis (`effortRequested` préservé: medium/high), mais la confirmation fournisseur n’est pas toujours exposée.
- Phase D: continuité workId démontrée; réallocation LIVE autonome Nora non forcée (Nora a recommandé Luna low puis différenciation — pas une bascule Terra/Sol automatisée).
- WEB LIVE toujours OFF; F2 visuelle en attente Morris RECETTE.
- Garde-fou EXPECTED fail-closed présent en DEV; candidat RECETTE figé `a150926c` n’embarque pas encore ce garde-fou applicatif.
- Pas de plafond monétaire produit; estimation ≠ maximum garanti.

## 7. Essais futurs

- xhigh Luna/Terra vs Sol Medium sur StockTrack/RoomBooking bornés.
- Mesure `modelApplied`/`effortApplied` lorsque le SDK les expose.
- Campagne visuelle F2 + cutover RECETTE du candidat (hors scope présent).

## 8. Décision demandée à Morris

1. Adopter Terra Medium comme défaut opérationnel provisoire ?  
2. Admettre Luna Low/Medium pour usages simples démontrés ?  
3. Conserver Sol Medium comme référence / filet ?  
4. Reporter toute promotion jusqu’à essais additionnels ?
