# Contrat visuel — Dictée compositeur (ML3)

| Champ | Valeur |
|---|---|
| Date | 2026-11-27 |
| Figma file | `itgvCulInEnFY6DvgIegvP` |
| Compositeur | `NoraConversation` / `.fig-travail-composer` |
| Tokens | fond `#151c29` · bord `#273049` / `#272e49` · accent `#7368e8` · muted `#9aa9c2` · encre `#f4f6fc` |

## Principe

Le compositeur **morphe sur place** — pas de panneau flottant au-dessus du micro.
Référence Figma : **05.18 Repos** (`1382:156`), **05.21 Écoute visible** (`1382:417` / `1381:235`).

## Repos (idle)

Dans `.fig-travail-composer-row` : `+` · textarea · **micro 35×35** bord `#272e49` · **Envoyer**.

Icônes : `/figma-dictation/mic.svg` (24px), `/figma-dictation/send.svg`.

## Dictée active (shell)

`data-dictation-active="1"` sur `.fig-travail-composer` : la rangée masque `+`, textarea, Envoyer ; le shell remplit le compositeur.

```
[px 16 py 12, bg #151c29, border #273049, radius 15]
  Contenu :
    label 13px #9aa9c2 « Brouillon existant · conservé » (si baseline non vide)
    brouillon baseline 15px #f4f6fc (lecture seule, non écrasé)
    label « Transcription en cours… »
    transcription provisoire 15px #f4f6fc
  Barre de commandes h=46 gap=10 :
    Annuler 40×46 → cancel.svg
    Signal + MM:SS + onde (36 barres #7368e8, 3px, gap 3px, analyseur réel)
    Réduire/Agrandir 40×46 → collapse.svg / expand.svg (masque provisoire, capture continue)
    Stop 40×46 bg #7368e8 radius 11 → stop.svg
```

## Phases → attributs

| Phase UI | `data-phase` | `data-figma-state` | Figma |
|---|---|---|---|
| Connexion micro | `requesting` | `connexion` | chargement + barre désactivée |
| Écoute, texte visible | `listening` | `écoute-visible` | `1382:417` |
| Écoute, texte masqué | `listening` | `masquée` | masquée |
| Finalisation | `finalizing` | `finalisation` | stop `aria-busy` |
| Erreur / refus micro | `error` | — (retour idle) | `alert.svg` + message |
| Repos | `idle` | — | `1382:156` |

## Intégrité brouillon (NoraConversation)

- Jamais `onDraft` avec le provisoire pendant l’écoute.
- Finaliser : `onDraft(merged)` une fois.
- Annuler : restaurer le baseline capturé à l’ouverture.
- Dictée active : Envoyer désactivé, Enter bloqué, textarea masquée.
- `composerLocked` prime sur tout.

## Accessibilité

- `aria-label` sur annuler / stop / bascule transcription.
- `role="status"` sur le shell actif ; `role="alert"` sur les erreurs idle.
- `focus-visible` accent sur tous les boutons.

## Hors scope

Pas de panneau flottant, pas de TTS, pas de modification des routes API / session ML3 serveur.