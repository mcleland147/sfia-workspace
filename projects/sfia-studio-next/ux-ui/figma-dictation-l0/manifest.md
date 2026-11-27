# Manifeste Figma L0/L1 — Dictée compositeur (ML3)

| Métadonnée | Valeur |
|---|---|
| Fichier | `itgvCulInEnFY6DvgIegvP` |
| Domaine | Espace projet · Travail · compositeur Nora |
| Composant maître dictée | `Compositeur / Dictée` — instance type `1381:235` |
| Contrat canon | `ux-ui/composer-dictation-visual-contract-20261127.md` |
| Harness DEV | `/dev/dictation-visual/[state]` |
| Viewport frames desktop | 1680×970 |

## Tokens (CSS — `web/src/components/figma/tokens.css`)

| Token | Valeur | Usage |
|---|---|---|
| Fond shell actif | `#151c29` | `.fig-dictation-shell` |
| Bordure compositeur / shell | `#273049` / `#272e49` | `.fig-travail-composer`, mic, send |
| Accent | `#7368e8` | barres onde, stop, focus |
| Label | `#9aa9c2` 13px | `.fig-dictation-label` |
| Encre | `#f4f6fc` 15px | baseline, provisoire, saisie |
| Rayon shell | `15px` | `.fig-dictation-shell` |
| Barre commandes | h=46, gap=10 | `.fig-dictation-cmd` |
| Onde | 36 barres, 3px, gap 3px | `.fig-dictation-wave` / `.fig-dictation-bar` |

## L0 — Inventaire frames 05.18 – 05.30

| Frame | node-id | État harness | Qualification |
|---|---|---|---|
| 05.18 Repos | `1382:156` | `repos` | COMPLETE_FOR_COMPONENT |
| 05.19 Connexion micro | `1382:243` | `connexion` | COMPLETE_FOR_COMPONENT |
| 05.20 Écoute, texte masqué | `1382:330` | `ecoute-masquee` | COMPLETE_FOR_COMPONENT |
| 05.21 Transcription visible | `1382:417` | `ecoute-visible` | COMPLETE_FOR_COMPONENT |
| 05.22 Finalisation | `1382:500` | `finalisation` | COMPLETE_FOR_COMPONENT |
| 05.23 Brouillon éditable | `1382:587` | — | PARTIAL (post-finalize idle, hors harness L0 actuel) |
| 05.24 Annulation | `1382:670` | — | PARTIAL (retour baseline, couvert par session API) |
| 05.25 Permission refusée | `1382:757` | `permission-refusee` | COMPLETE_FOR_COMPONENT |
| 05.26 Interruption | `1382:844` | — | PARTIAL (`data-phase=error`, message runtime) |
| 05.27 Visionneuse 50/50 | `1383:535` | — | OUT_OF_SCOPE (layout Travail agrandi) |
| 05.28 Mobile enregistrement | `1383:632` | — | PARTIAL (viewport 390) |
| 05.29 Mobile transcription | `1383:663` | — | PARTIAL (viewport 390) |
| 05.30 Mobile brouillon | `1383:694` | — | PARTIAL (viewport 390) |

## Assets SVG (`web/public/figma-dictation/`)

| Icône | Fichier | SHA-256 |
|---|---|---|
| alert | `alert.svg` | `abfd43c57d565ec70244f2abeed5292e7338cc568e7c297f180f0ea091dcdb45` |
| cancel | `cancel.svg` | `27a4b1156c38a9d2ece2c83f7e1500fb8fd35569934406551101deb35406dd63` |
| collapse | `collapse.svg` | `13030e24e945fbf76b4a3b57b9d4c7a5e14ff5875ce939ee63e2b1682ae52246` |
| expand | `expand.svg` | `84664e2ae1836e81b854be187505458251df8cbdb0d7f859e4bf738ad1024df0` |
| loading | `loading.svg` | `eeee50ef928cc053553432fd722f491b862cb02958c9e1ea334def2c1b569d9c` |
| mic | `mic.svg` | `201496ecf7952c6ffb1747dce7e20d298702fa881387654659d773ed87f8571c` |
| plus | `plus.svg` | `e62310d653269bd1d1dc62ac4740e83263abd7a7225b77e5c490e1158fe571bc` |
| send | `send.svg` | `92e41a4d58a6e03b4b8b5bf4837623fa9dd65908e841e67389bd7127ee164ea0` |
| signal | `signal.svg` | `78e1848eb31be97b8250615f83fe313ab5f62accac010b0b877c47a3eedc4cfb` |
| stop | `stop.svg` | `bc520e1c704aafaffad5415a460e9facf9f7ef11fb63587f6aeba82da1123fe7` |

## L1 — Mapping node → React → DOM (`data-testid`)

| Élément Figma / état | Frame node | Composant React | Locateur DOM |
|---|---|---|---|
| Compositeur repos (+ · saisie · mic · envoyer) | `1382:156` | `NoraConversation` (idle) / harness | `[data-testid=nora-composer]` · `[data-dictation-active=0]` |
| Micro dictée | instance shell | `ComposerDictationControl` | `[data-testid=composer-mic]` |
| Envoyer | instance shell | `NoraConversation` | `[data-testid=thread-send]` |
| Saisie brouillon | instance shell | `NoraConversation` | `[data-testid=thread-draft]` |
| Shell dictée actif | `1381:235` | `ComposerDictationControl` | `[data-testid=composer-dictation]` |
| Connexion micro | `1382:243` | idem | `[data-testid=dictation-connexion]` · `data-phase=requesting` · `data-figma-state=connexion` |
| Baseline conservée | contenu shell | idem | `[data-testid=dictation-baseline]` |
| Transcription provisoire | `1382:417` | idem | `[data-testid=dictation-provisional]` · `data-figma-state=écoute-visible` |
| Texte masqué (capture continue) | `1382:330` | idem | `data-figma-state=masquée` (provisoire absent du DOM) |
| Barre de commandes | barre 46px | idem | `[data-testid=dictation-command-bar]` |
| Annuler | cancel | idem | `[data-testid=dictation-cancel]` |
| Chronomètre MM:SS | elapsed | idem | `[data-testid=dictation-elapsed]` |
| Onde 36 barres | `1382:417` | idem | `[data-testid=dictation-wave]` |
| Masquer / afficher texte | collapse / expand | idem | `[data-testid=dictation-toggle-text]` |
| Stop finaliser | `1382:500` | idem | `[data-testid=dictation-stop]` · `data-phase=finalizing` · `data-figma-state=finalisation` |
| Erreur permission micro | `1382:757` | `ComposerDictationControl` (idle) | `[data-testid=dictation-error]` · `alert.svg` |

### Attributs phase ↔ Figma (runtime)

| `data-phase` | `data-figma-state` | Frame de référence |
|---|---|---|
| _(idle)_ | _(absent)_ | 05.18 |
| `requesting` | `connexion` | 05.19 |
| `listening` | `écoute-visible` | 05.21 |
| `listening` | `masquée` | 05.20 |
| `finalizing` | `finalisation` | 05.22 |
| `error` | _(absent, retour idle)_ | 05.25 / 05.26 |

## Note amplitude / durée

Les **hauteurs d’onde** et le **chrono** affichés dans Figma (frames 05.19–05.22) sont **illustratifs**. En runtime, `ComposerDictationControl` pilote `data-testid=dictation-wave` via l’analyseur Web Audio (36 barres) et `dictation-elapsed` via l’horloge de session. Le harness DEV (`dictation-visual`) fige des valeurs représentatives pour comparaison screenshot uniquement.

## Hors scope manifeste

- Pas de modification Figma.
- Pas de campagne LIVE fournisseur audio.
- Frames 05.27–05.30 : layout mobile / visionneuse — couverture visuelle ultérieure.