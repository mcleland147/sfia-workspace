# Contrat visuel — Dictée compositeur (ML3)

| Champ | Valeur |
|---|---|
| Date | 2026-11-27 |
| Compositeur | `NoraConversation` / `.fig-travail-composer` |
| Référence comportementale | Dictée ChatGPT (pas copie pixel) |
| Tokens | `#151c29` fond · `#272e49` bord · `#656fe1` accent · `#94a2bb` muted · `#f4f6fc` texte |

## Emplacement

Dans `.fig-travail-composer-row` : `+` · textarea · **micro** · Envoyer.

Le micro est immédiatement à gauche d’Envoyer (réserve UX §10.5).

## États

| État | Affichage |
|---|---|
| Repos | Bouton micro 35×35, bord `#272e49`, icône SVG micro |
| Initialisation | `data-phase=requesting` ; micro disabled pendant démarrage |
| Dictée active | Panneau flottant au-dessus : onde (analyseur réel), texte provisoire, Masquer/Afficher, Arrêter, Annuler |
| Finalisation | Libellé « Finalisation… » ; micro toujours non cliquable |
| Erreur | Message `#f0a8a8` au-dessus du micro ; saisie clavier inchangée |
| Annulation | Panneau fermé ; brouillon baseline restauré |

## Accessibilité

- `aria-label` / `aria-pressed` sur le micro
- `role="status"` sur le panneau actif
- `role="alert"` sur l’erreur
- focus-visible accent

## Hors scope

Pas de nouvelle page, pas de panneau latéral autonome, pas de TTS.
