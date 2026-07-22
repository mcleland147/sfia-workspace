# 09 — Validation and conformance plan

## Outils

- `ajv@6.15.0` (Draft-07) dans app/node_modules  
- Script temporaire non versionné sous `.tmp-sfia-review/` pour validate  
- **Pas** d’install npm · **pas** de modif package.json  

## Contrôles

1. JSON.parse tous schemas + examples  
2. `$id` uniques  
3. `$ref` résolus (ajv compile)  
4. examples validate against schemas  
5. pas de secrets / chemins absolus user  
6. enums cohérents avec doc 03/05  
7. alignement D1–D8  

## Limites documentées

Draft 2020-12 non utilisé (incompatibilité ajv6). Migration éventuelle en V3-MODELED+ si ajv8 ajouté sous GO deps.
