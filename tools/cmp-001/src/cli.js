#!/usr/bin/env node

import { readFileSync } from 'fs';
import { resolve } from 'path';
import { Command } from 'commander';
import { getSupportedTypes } from './config.js';
import { normalizeObjectType } from './validate.js';
import { createExperiment } from './services/createExperiment.js';
import { createComponent } from './services/createComponent.js';
import { createPrompt } from './services/createPrompt.js';
import { createTemplate } from './services/createTemplate.js';
import { createStandard } from './services/createStandard.js';
import { createADR } from './services/createADR.js';
import { createREX } from './services/createREX.js';
import { createKPI } from './services/createKPI.js';
import { createKnowledgeArticle } from './services/createKnowledgeArticle.js';
import { updateKnowledgeArticle } from './services/updateKnowledgeArticle.js';
import { updateProject } from './services/updateProject.js';
import { createProject } from './services/createProject.js';
import { createReferencePage } from './services/createReferencePage.js';
import { runDiscover } from './services/discover.js';
import { runExport } from './services/export.js';

const CREATORS = {
  experiment: createExperiment,
  component: createComponent,
  prompt: createPrompt,
  template: createTemplate,
  standard: createStandard,
  adr: createADR,
  rex: createREX,
  kpi: createKPI,
  knowledge: createKnowledgeArticle,
  project: createProject,
  'reference-page': createReferencePage,
};

function loadJsonFile(filePath) {
  const absolutePath = resolve(process.cwd(), filePath);
  const raw = readFileSync(absolutePath, 'utf-8');

  try {
    return JSON.parse(raw);
  } catch {
    throw new Error(`Fichier JSON invalide : ${absolutePath}`);
  }
}

const UPDATERS = {
  knowledge: updateKnowledgeArticle,
  project: updateProject,
};

async function runCreate(objectType, jsonFile) {
  const normalizedType = normalizeObjectType(objectType);
  const creator = CREATORS[normalizedType];

  if (!creator) {
    throw new Error(`Aucun service de création pour le type "${normalizedType}".`);
  }

  const payload = loadJsonFile(jsonFile);
  const result = await creator(payload);

  console.log('Page Notion créée avec succès.');
  console.log(`  Type   : ${result.objectType}`);
  console.log(`  Titre  : ${result.title}`);
  console.log(`  ID     : ${result.pageId}`);
  console.log(`  URL    : ${result.url}`);
}

async function runUpdate(objectType, pageId, jsonFile) {
  const normalizedType = normalizeObjectType(objectType);
  const updater = UPDATERS[normalizedType];

  if (!updater) {
    throw new Error(`Aucun service de mise à jour pour le type "${normalizedType}".`);
  }

  const payload = loadJsonFile(jsonFile);
  const result = await updater(pageId, payload);

  console.log('Page Notion mise à jour avec succès.');
  console.log(`  Type   : ${result.objectType}`);
  console.log(`  Titre  : ${result.title}`);
  console.log(`  ID     : ${result.pageId}`);
  console.log(`  URL    : ${result.url}`);
}

const program = new Command();

program
  .name('sfia-notion-sync')
  .description('Connecteur SFIA — création d\'objets structurés dans Notion')
  .version('1.1.1');

program
  .command('create')
  .description('Créer un objet SFIA dans Notion à partir d\'un fichier JSON')
  .argument('<type>', `Type d'objet (${getSupportedTypes().join(', ')})`)
  .argument('<json-file>', 'Chemin vers le fichier JSON source')
  .action(async (type, jsonFile) => {
    try {
      await runCreate(type, jsonFile);
    } catch (error) {
      const message = error?.body?.message || error.message || String(error);
      console.error(`Erreur : ${message}`);
      process.exitCode = 1;
    }
  });

program
  .command('update')
  .description('Mettre à jour un objet SFIA existant dans Notion à partir d\'un fichier JSON')
  .argument('<type>', `Type d'objet (${Object.keys(UPDATERS).join(', ')})`)
  .argument('<page-id>', 'Identifiant de la page Notion à mettre à jour')
  .argument('<json-file>', 'Chemin vers le fichier JSON source')
  .action(async (type, pageId, jsonFile) => {
    try {
      await runUpdate(type, pageId, jsonFile);
    } catch (error) {
      const message = error?.body?.message || error.message || String(error);
      console.error(`Erreur : ${message}`);
      process.exitCode = 1;
    }
  });

program
  .command('types')
  .description('Lister les types d\'objets supportés en V1')
  .action(() => {
    console.log('Types supportés :');
    getSupportedTypes().forEach((type) => console.log(`  - ${type}`));
  });

program
  .command('discover')
  .description('Lister les bases Notion accessibles et proposer de remplir .env')
  .option('-y, --yes', 'Écrire .env sans confirmation interactive')
  .action(async (options) => {
    try {
      await runDiscover({ yes: options.yes });
    } catch (error) {
      const message = error?.body?.message || error.message || String(error);
      console.error(`Erreur : ${message}`);
      process.exitCode = 1;
    }
  });

program
  .command('export')
  .description('Exporter les bases Notion configurées vers des fichiers JSON locaux')
  .argument('[type]', 'Type ou nom pluriel (ex. experiments, components, projects)')
  .option('-y, --yes', 'Écraser les fichiers existants sans confirmation')
  .action(async (type, options) => {
    try {
      await runExport({ type, yes: options.yes });
    } catch (error) {
      const message = error?.body?.message || error.message || String(error);
      console.error(`Erreur : ${message}`);
      process.exitCode = 1;
    }
  });

program.parse();
