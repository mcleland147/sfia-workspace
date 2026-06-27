# Exports Notion

Snapshots JSON du référentiel SFIA exportés via CMP-001.

## Générer les exports

```bash
cd tools/cmp-001
node src/cli.js export --yes
cp exports/*.json ../../exports/notion/
```

## Fichiers attendus

- `experiments.json`, `components.json`, `prompts.json`, …
- `export-manifest.json` — résumé de l'export

Ces fichiers alimentent l'audit SFIA dans Cursor et ChatGPT.
