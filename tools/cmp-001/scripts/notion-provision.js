#!/usr/bin/env node

/**
 * Notion Provisioning Engine — config-driven workspace provisioning.
 * Modes: --inspect | --dry-run | --apply (blocked in design cycle)
 *
 * Usage:
 *   node tools/cmp-001/scripts/notion-provision.js --config tools/cmp-001/config/sfia-v1-1-workspace.config.json --inspect
 *   node tools/cmp-001/scripts/notion-provision.js --config tools/cmp-001/config/sfia-v1-1-workspace.config.json --dry-run
 */

import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { loadProvisioningConfig } from '../src/provisioning/configLoader.js';
import { buildPlan } from '../src/provisioning/planner.js';
import { runInspect } from '../src/provisioning/inspector.js';
import { renderDryRunReport, dryRunSummary } from '../src/provisioning/dryRunRenderer.js';
import { blockApply, APPLY_DISABLED_MESSAGE } from '../src/provisioning/guardrails.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

function parseArgs(argv) {
  const args = {
    config: null,
    inspect: false,
    dryRun: false,
    apply: false,
    help: false,
  };

  for (let i = 2; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--help' || arg === '-h') {
      args.help = true;
    } else if (arg === '--inspect') {
      args.inspect = true;
    } else if (arg === '--dry-run') {
      args.dryRun = true;
    } else if (arg === '--apply') {
      args.apply = true;
    } else if (arg === '--config') {
      args.config = argv[i + 1];
      i += 1;
    } else if (arg.startsWith('--config=')) {
      args.config = arg.slice('--config='.length);
    }
  }

  return args;
}

function printHelp() {
  console.log(`Notion Provisioning Engine (SFIA)

Usage:
  node scripts/notion-provision.js --config <path> --inspect
  node scripts/notion-provision.js --config <path> --dry-run
  node scripts/notion-provision.js --config <path> --apply   (blocked in design cycle)

Options:
  --config <path>   Provisioning config JSON (required)
  --inspect         Validate config, env prerequisites, strategy guardrails
  --dry-run         Render planned create actions without Notion API calls
  --apply           Apply provisioning (DISABLED — APPLY_DISABLED_IN_THIS_CYCLE)
  --help            Show this help

Example:
  node scripts/notion-provision.js \\
    --config config/sfia-v1-1-workspace.config.json \\
    --dry-run
`);
}

function renderInspectReport(result) {
  console.log('='.repeat(72));
  console.log('NOTION PROVISIONING ENGINE — INSPECT');
  console.log('='.repeat(72));
  console.log('');
  console.log(`Overall status : ${result.overall.toUpperCase()}`);
  console.log(`Config         : ${result.configPath}`);
  console.log(`Workspace      : ${result.workspace.name} (${result.workspace.targetVersion || 'n/a'})`);
  console.log('');
  console.log('--- Environment ---');
  for (const env of result.envStatus) {
    const flag = env.present ? 'present' : 'absent';
    console.log(`  ${env.key}: ${flag}${env.requiredForApply ? ' (required for future apply)' : ''}`);
  }
  console.log('');
  console.log('--- Checks ---');
  for (const check of result.checks) {
    console.log(`  [${check.status.toUpperCase()}] ${check.id}: ${check.message}`);
  }
  console.log('');
  console.log('--- Plan preview ---');
  console.log(`  Root page  : ${result.planPreview.rootPage}`);
  console.log(`  Sections   : ${result.summary.sections}`);
  console.log(`  Sub-pages  : ${result.summary.subPages}`);
  console.log(`  Databases  : ${result.summary.databases}`);
  console.log('');
  console.log('Sections:');
  for (const title of result.planPreview.sections) {
    console.log(`  - ${title}`);
  }
  console.log('');
  console.log('Databases:');
  for (const name of result.planPreview.databases) {
    console.log(`  - ${name}`);
  }
  console.log('');
  console.log('No Notion live action executed.');
  console.log('='.repeat(72));
}

function runDryRun(configPath) {
  const config = loadProvisioningConfig(configPath);
  const plan = buildPlan(config);
  console.log(renderDryRunReport(plan, config));
  return dryRunSummary(plan);
}

async function main() {
  const args = parseArgs(process.argv);

  if (args.help) {
    printHelp();
    return;
  }

  const defaultConfig = resolve(__dirname, '..', 'config', 'sfia-v1-1-workspace.config.json');
  const configPath = args.config ? resolve(process.cwd(), args.config) : defaultConfig;

  const modeCount = [args.inspect, args.dryRun, args.apply].filter(Boolean).length;

  if (modeCount === 0) {
    console.error('Erreur : spécifiez --inspect, --dry-run ou --apply.');
    printHelp();
    process.exitCode = 1;
    return;
  }

  if (modeCount > 1) {
    console.error('Erreur : un seul mode à la fois (--inspect, --dry-run ou --apply).');
    process.exitCode = 1;
    return;
  }

  if (args.apply) {
    try {
      blockApply();
    } catch (error) {
      console.error(`Erreur : ${error.message}`);
      process.exitCode = 1;
    }
    return;
  }

  try {
    if (args.inspect) {
      const result = runInspect(configPath);
      renderInspectReport(result);
      if (result.overall === 'fail') {
        process.exitCode = 1;
      }
      return;
    }

    if (args.dryRun) {
      runDryRun(configPath);
    }
  } catch (error) {
    console.error(`Erreur : ${error.message}`);
    process.exitCode = 1;
  }
}

main();
