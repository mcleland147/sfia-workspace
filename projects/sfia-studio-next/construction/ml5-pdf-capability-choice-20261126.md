# ML5 — Choix technique capacité PDF transverse (2026-11-26)

**Statut:** DÉCISION TECHNIQUE DEV — avant construction  
**Lane:** DEV  
**Périmètre:** lecture cognitive Nora + visionneuse Pilote + WEB/Git (D4 si contrat compatible)

## Besoin

Une capacité commune de traitement PDF servant :

- Extraction textuelle bornée (serveur / Node)
- Rendu page (navigateur)
- Recherche textuelle et citations par page
- Aucun service externe, aucune GED

## Options examinées

| Option | Extraction serveur | Rendu navigateur | Licence | Notes |
|---|---|---|---|---|
| **pdfjs-dist** | Oui (getDocument + getTextContent) | Oui (même famille) | Apache-2.0 | Maintenu Mozilla ; workers ; Next-compatible avec build legacy/webpack |
| unpdf | Oui (léger) | Non (extract only) | MIT | Devrait être complété par pdfjs côté client → deux stacks |
| pdf-parse | Oui (ancien) | Non | MIT | Moins maintenu ; dépendances transitifs |
| Service cloud OCR | Oui | — | — | **STOP** — hors contrat (transfert externe) |

## Décision

**pdfjs-dist@4.x** comme bibliothèque de référence pour :

1. Extraction serveur (`pdf-extract-server`) — runtime Node, sans worker réseau.
2. Rendu client (`PdfViewer`) — worker local bundlé / CDN same-origin si requis.

Composants distincts extract vs render autorisés ; contrat de lecture commun unique (`PdfReadResult`).

## Limites de sécurité (contrat)

- Taille binaire max configurable (`SFIA_PDF_MAX_BYTES`, défaut 8 Mo).
- Pages max (`SFIA_PDF_MAX_PAGES`, défaut 80).
- Texte max extrait (`SFIA_PDF_MAX_TEXT_CHARS`, défaut 200k).
- Timeout traitement (`SFIA_PDF_TIMEOUT_MS`, défaut 15s).
- Aucun JavaScript PDF exécuté ; pas de suivi automatique de liens ; pas d’ouverture de pièces jointes.
- Contenu non fiable — instructions dans le PDF sans autorité.
- Aucune requête réseau déclenchée par le parser (documents fournis en bytes déjà autorisés).

## Responsabilités

| Domaine | Rôle |
|---|---|
| B1 / D9 / D4 | Autorisent et fournissent les bytes |
| Traitement PDF | Extrais / rend uniquement une ressource déjà autorisée |
| D3 | Conduit la lecture progressive et les citations |
| Visionneuse | Restitue pages autorisées au Pilote |

## Non-objectifs

OCR, annotation, génération PDF, GED, import généraliste.
