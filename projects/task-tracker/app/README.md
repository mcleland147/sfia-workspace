# Task Tracker — Application MVP

Application web mono-utilisateur de suivi de tâches, livrée dans le cadre du cycle Delivery Standard borné SFIA.

## Périmètre

- Consultation, création, modification, changement de statut, priorité, échéance facultative
- Recherche par titre et filtres par statut / priorité
- Suppression définitive avec confirmation
- Persistance locale via `localStorage`

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- CSS simple (globals.css)
- Vitest pour les tests métier et persistance

## Commandes

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm test
npm run build
npm start
```

L'application de développement écoute par défaut sur `http://localhost:3010`.

## Structure

```text
app/                 # routes Next.js
components/          # interface utilisateur
lib/tasks/           # modèle, règles métier, persistance, filtres
__tests__/           # tests unitaires
```

## Décisions Morris validées

Voir `../00-framing/task-tracker-cadrage.md`.
