export function renderDryRunReport(plan, config) {
  const lines = [];

  lines.push('='.repeat(72));
  lines.push('NOTION PROVISIONING ENGINE — DRY-RUN');
  lines.push('='.repeat(72));
  lines.push('');
  lines.push(`Workspace cible : ${plan.workspace.name}`);
  lines.push(`Version       : ${plan.workspace.targetVersion || 'n/a'}`);
  lines.push(`Stratégie     : ${plan.strategy.mode} (update=${plan.strategy.allowUpdate}, delete=${plan.strategy.allowDelete})`);
  lines.push(`Parent page   : ${plan.parentPageId ? '[NOTION_PARENT_PAGE_ID — masqué]' : '[NON DÉFINI — placeholder apply futur]'}`);
  lines.push('');
  lines.push('--- ACTIONS INTERDITES (confirmées) ---');
  lines.push(`  Suppression Notion        : ${plan.forbidden.delete ? 'INTERDITE' : 'AUTORISÉE (config)'}`);
  lines.push(`  Import CSV legacy         : ${plan.forbidden.legacyCsvImport ? 'INTERDIT' : 'AUTORISÉ (config)'}`);
  lines.push(`  Réutilisation payloads    : ${plan.forbidden.legacyPayloadReuse ? 'INTERDITE' : 'AUTORISÉE (config)'}`);
  lines.push(`  Apply dans ce cycle       : BLOQUÉ (APPLY_DISABLED_IN_THIS_CYCLE)`);
  lines.push('');
  lines.push('--- PAGE RACINE ---');
  lines.push(`  [CREATE] ${plan.rootPageTitle}`);
  if (config.rootPage.introBlocks?.length) {
    for (const block of config.rootPage.introBlocks) {
      lines.push(`    - bloc: ${block.type}${block.text ? ` — ${block.text.slice(0, 80)}` : ''}`);
    }
  }
  lines.push('');
  lines.push(`--- SECTIONS (${plan.sectionCount}) ---`);

  for (const section of config.sections) {
    lines.push(`  [CREATE PAGE] ${section.title}`);
    if (section.introBlocks?.length) {
      for (const block of section.introBlocks) {
        lines.push(`    - bloc: ${block.type}`);
      }
    }
    if (section.subPages?.length) {
      for (const sub of section.subPages) {
        lines.push(`    [CREATE SUB-PAGE] ${sub.title} (${sub.status || 'planned'})`);
      }
    }
  }

  lines.push('');
  lines.push(`--- BASES (${plan.databaseCount}) ---`);

  for (const database of config.databases) {
    lines.push(`  [CREATE DATABASE] ${database.name}`);
    lines.push(`    title property : ${database.titleProperty || 'Nom'}`);
    lines.push(`    parent section : ${database.parentSection || 'root'}`);
    lines.push(`    properties (${database.properties.length}) :`);
    for (const prop of database.properties) {
      const options = prop.options?.length ? ` [${prop.options.join(', ')}]` : '';
      lines.push(`      - ${prop.name} (${prop.type})${options}`);
    }
    if (database.initialEntries?.length) {
      lines.push(`    initial entries (repo-driven, not legacy CSV): ${database.initialEntries.length}`);
    }
  }

  lines.push('');
  lines.push('--- RÉSUMÉ ---');
  lines.push(`  Pages racine     : 1`);
  lines.push(`  Sections         : ${plan.sectionCount}`);
  lines.push(`  Sous-pages       : ${plan.subPageCount}`);
  lines.push(`  Bases            : ${plan.databaseCount}`);
  lines.push(`  Actions totales  : ${plan.actions.length}`);
  lines.push('');
  lines.push('Aucune action Notion live exécutée.');
  lines.push('='.repeat(72));

  return lines.join('\n');
}

export function dryRunSummary(plan) {
  return {
    rootPage: plan.rootPageTitle,
    sections: plan.sectionCount,
    subPages: plan.subPageCount,
    databases: plan.databaseCount,
    totalActions: plan.actions.length,
    forbidden: plan.forbidden,
  };
}
