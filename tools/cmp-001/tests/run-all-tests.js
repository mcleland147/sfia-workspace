#!/usr/bin/env node

/**
 * Suite de tests d'intégration SFIA Notion Sync.
 * Crée uniquement des objets de test identifiables — ne supprime jamais de données.
 */

import { createExperiment } from '../src/services/createExperiment.js';
import { createComponent } from '../src/services/createComponent.js';
import { createPrompt } from '../src/services/createPrompt.js';
import { createTemplate } from '../src/services/createTemplate.js';
import { createStandard } from '../src/services/createStandard.js';
import { createADR } from '../src/services/createADR.js';
import { createREX } from '../src/services/createREX.js';
import { createKPI } from '../src/services/createKPI.js';
import { createKnowledgeArticle } from '../src/services/createKnowledgeArticle.js';
import { createProject } from '../src/services/createProject.js';

const TEST_PREFIX = '[TEST SFIA Sync]';
const RUN_ID = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);

function testTitle(label) {
  return `${TEST_PREFIX} ${label} ${RUN_ID}`;
}

const TEST_CASES = [
  {
    label: 'Experiment',
    create: createExperiment,
    payload: {
      title: testTitle('Experiment'),
      status: 'Idea',
      type: 'Prototype',
      priority: 'Low',
      score: 1,
      startDate: '2026-06-27',
      tags: ['api'],
    },
  },
  {
    label: 'Component',
    create: createComponent,
    payload: {
      title: testTitle('Component'),
      status: 'Backlog',
      type: 'Connector',
      criticality: 'Low',
      currentVersion: '0.0.0-test',
      repository: 'https://github.com/example/sfia-notion-sync',
    },
  },
  {
    label: 'Prompt',
    create: createPrompt,
    payload: {
      title: testTitle('Prompt'),
      status: 'Draft',
      version: 'test-1',
      model: 'Generic',
      rating: 1,
      category: 'Agent',
      tags: ['Experimental'],
    },
  },
  {
    label: 'Template',
    create: createTemplate,
    payload: {
      title: testTitle('Template'),
      status: 'Draft',
      templateType: 'Experiment',
    },
  },
  {
    label: 'Standard',
    create: createStandard,
    payload: {
      title: testTitle('Standard'),
      status: 'Draft',
    },
  },
  {
    label: 'ADR',
    create: createADR,
    payload: {
      title: testTitle('ADR'),
      status: 'Draft',
      impact: 'Low',
      decisionDate: '2026-06-27',
    },
  },
  {
    label: 'REX',
    create: createREX,
    payload: {
      title: testTitle('REX'),
      status: 'Draft',
      impact: 'Low',
      date: '2026-06-27',
      tags: ['Lesson learned'],
    },
  },
  {
    label: 'KPI',
    create: createKPI,
    payload: {
      title: testTitle('KPI'),
      status: 'Defined',
      domain: 'Delivery',
      trend: 'Stable',
      current: 0,
      target: 1,
      period: '2026-06-27',
    },
  },
  {
    label: 'Knowledge Article',
    create: createKnowledgeArticle,
    payload: {
      title: testTitle('Knowledge Article'),
      status: 'Draft',
      category: 'Guide',
      publishedDate: '2026-06-27',
      tags: ['AI'],
    },
  },
  {
    label: 'Project',
    create: createProject,
    payload: {
      title: testTitle('Project'),
      status: 'Not started',
      priority: 'Low',
      health: 'Green',
      budget: 0,
      startDate: '2026-06-27',
      endDate: '2026-12-31',
    },
  },
];

async function runAllTests() {
  console.log(`SFIA Notion Sync — tests d'intégration (${RUN_ID})\n`);
  console.log('Création uniquement — aucune suppression.\n');

  const results = [];
  let successCount = 0;

  for (const testCase of TEST_CASES) {
    try {
      const result = await testCase.create(testCase.payload);
      results.push({ label: testCase.label, ok: true, url: result.url });
      successCount += 1;
      console.log(`✔ ${testCase.label}`);
    } catch (error) {
      const message = error?.body?.message || error.message || String(error);
      results.push({ label: testCase.label, ok: false, error: message });
      console.log(`✖ ${testCase.label}`);
      console.log(`  ${message}`);
    }
  }

  const total = TEST_CASES.length;
  console.log(`\n${successCount}/${total} objets créés avec succès.`);

  const failures = results.filter((result) => !result.ok);
  if (failures.length > 0) {
    process.exitCode = 1;
  }

  return { successCount, total, results };
}

runAllTests().catch((error) => {
  console.error(`Erreur fatale : ${error.message}`);
  process.exitCode = 1;
});
