# Figma vs Runtime — véritable ComposerDictationControl

| Champ | Valeur |
|---|---|
| Date | 2026-11-27 |
| Build | `qhiWVOF0bQHF60ftGW_tF` |
| Digest | `3f846bedfcf6856d6c6f6660b6bd6234ccf56a518b621992cc3a9cb700801bed` |
| Surface | `/dev/dictation-harness` hébergeant le **vrai** `ComposerDictationControl` |
| Transport | substitué (`SFIA_DICTATION_TRANSPORT=fixture`) — pas OpenAI LIVE |
| Preuve navigateur | Playwright qualify PASS + capture browser |

## Mesures (rectangles stables)

| Élément | Figma | Runtime réel | Δ |
|---|---|---|---|
| Micro idle | 35×35 | 35×35 | **0** |
| Cancel | 40×46 | 40×46 | **0** |
| Stop | 40×46 | 40×46 | **0** |
| Tokens bg/border/accent | `#151c29` / `#273049` / `#7368e8` | confirmés CSS | **0** |

## États exercés sur le vrai contrôle

| État | Exercé | Preuve |
|---|---|---|
| 05.18 repos (mic) | oui | harness idle + Playwright |
| 05.19/05.21 écoute | oui | shell morph, baseline conservé, timer/onde |
| Masquage | oui (bouton présent) | aria toggle |
| Finalisation / annulation | oui (API intégrée T04/T06/T07) | vitest integrated |

## Non comparés pixel à pixel ce cycle

05.27 visionneuse · 05.28–05.30 mobile — structure responsive partagée ; capture viewport mobile non figée ici.

## Verdict

**FIGMA TO RUNTIME ALIGNED** pour les rectangles stables mesurés sur le **véritable** contrôle (idle + écoute).

**PARTIAL** pour le portefeuille d’états Figma 05.18–05.30 (mobile/visionneuse non mesurés CSS px). Pas de claim ALIGNED global sur tout le set.
