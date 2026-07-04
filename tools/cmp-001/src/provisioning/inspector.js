import { existsSync } from 'fs';
import { loadProvisioningConfig, getParentPageId } from './configLoader.js';
import { buildPlan } from './planner.js';

const OPTIONAL_ENV = ['NOTION_TOKEN', 'NOTION_PARENT_PAGE_ID'];

export function runInspect(configPath, { callNotionApi = false } = {}) {
  const config = loadProvisioningConfig(configPath);
  const plan = buildPlan(config);
  const parentPageId = getParentPageId(config);

  const envStatus = OPTIONAL_ENV.map((key) => ({
    key,
    present: Boolean(process.env[key]?.trim()),
    requiredForApply: key === 'NOTION_TOKEN' || key === 'NOTION_PARENT_PAGE_ID',
  }));

  const checks = [
    {
      id: 'config_file',
      status: 'ok',
      message: `Configuration chargée : ${config._meta.configPath}`,
    },
    {
      id: 'config_schema',
      status: 'ok',
      message: `Version config ${config.version} — workspace ${config.workspace.name}`,
    },
    {
      id: 'strategy_no_delete',
      status: config.strategy.allowDelete ? 'warn' : 'ok',
      message: config.strategy.allowDelete
        ? 'allowDelete=true — risque élevé'
        : 'no-delete par défaut confirmé',
    },
    {
      id: 'strategy_no_legacy',
      status:
        config.strategy.importLegacyCsv || config.strategy.reuseLegacyPayloads ? 'fail' : 'ok',
      message:
        config.strategy.importLegacyCsv || config.strategy.reuseLegacyPayloads
          ? 'Import legacy autorisé — interdit pour SFIA v1.1'
          : 'Aucun import CSV legacy / payload legacy',
    },
    {
      id: 'parent_page_id',
      status: parentPageId ? 'ok' : 'warn',
      message: parentPageId
        ? 'NOTION_PARENT_PAGE_ID présent (valeur masquée)'
        : 'NOTION_PARENT_PAGE_ID absent — requis pour apply futur, pas pour dry-run',
    },
    {
      id: 'notion_token',
      status: process.env.NOTION_TOKEN ? 'ok' : 'warn',
      message: process.env.NOTION_TOKEN
        ? 'NOTION_TOKEN présent (valeur masquée)'
        : 'NOTION_TOKEN absent — inspect/dry-run OK ; apply futur nécessitera le token',
    },
    {
      id: 'notion_api',
      status: callNotionApi ? 'skipped' : 'skipped',
      message: callNotionApi
        ? 'Vérification API read-only non activée dans ce cycle'
        : 'Aucun appel API Notion — mode inspect local uniquement',
    },
  ];

  const overall =
    checks.some((c) => c.status === 'fail')
      ? 'fail'
      : checks.some((c) => c.status === 'warn')
        ? 'warn'
        : 'ok';

  return {
    mode: 'inspect',
    overall,
    configPath: config._meta.configPath,
    configExists: existsSync(config._meta.configPath),
    workspace: config.workspace,
    strategy: config.strategy,
    envStatus,
    checks,
    summary: {
      sections: plan.sectionCount,
      databases: plan.databaseCount,
      subPages: plan.subPageCount,
      rootPage: plan.rootPageTitle,
    },
    planPreview: {
      rootPage: plan.rootPageTitle,
      sections: config.sections.map((s) => s.title),
      databases: config.databases.map((d) => d.name),
    },
  };
}
