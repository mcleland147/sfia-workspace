import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SCHEMAS_DIR = join(__dirname, 'schemas');

const TYPE_ALIASES = {
  experiment: 'experiment',
  component: 'component',
  prompt: 'prompt',
  template: 'template',
  standard: 'standard',
  adr: 'adr',
  rex: 'rex',
  kpi: 'kpi',
  knowledge: 'knowledge',
  'knowledge-article': 'knowledge',
  'knowledge_article': 'knowledge',
  project: 'project',
  'reference-page': 'reference-page',
  reference_page: 'reference-page',
  referencepage: 'reference-page',
};

export function normalizeObjectType(type) {
  const key = type.toLowerCase().trim();
  const normalized = TYPE_ALIASES[key];
  if (!normalized) {
    throw new Error(`Type d'objet inconnu : "${type}"`);
  }
  return normalized;
}

function loadSchema(objectType) {
  const schemaPath = join(SCHEMAS_DIR, `${objectType}.schema.json`);
  const raw = readFileSync(schemaPath, 'utf-8');
  return JSON.parse(raw);
}

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function validateField(name, value, definition) {
  const errors = [];

  if (value === undefined || value === null) {
    if (definition.required) {
      errors.push(`Champ requis manquant : "${name}"`);
    }
    return errors;
  }

  const expectedType = definition.type;

  if (expectedType === 'string' && typeof value !== 'string') {
    errors.push(`"${name}" doit être une chaîne de caractères`);
  }

  if (expectedType === 'number' && typeof value !== 'number') {
    errors.push(`"${name}" doit être un nombre`);
  }

  if (expectedType === 'boolean' && typeof value !== 'boolean') {
    errors.push(`"${name}" doit être un booléen`);
  }

  if (expectedType === 'array') {
    if (!Array.isArray(value)) {
      errors.push(`"${name}" doit être un tableau`);
    } else if (definition.items === 'string') {
      value.forEach((item, index) => {
        if (typeof item !== 'string') {
          errors.push(`"${name}[${index}]" doit être une chaîne de caractères`);
        }
      });
    }
  }

  if (definition.enum && !definition.enum.includes(value)) {
    errors.push(`"${name}" doit être l'une des valeurs : ${definition.enum.join(', ')}`);
  }

  if (definition.format === 'date' && typeof value === 'string') {
    if (Number.isNaN(Date.parse(value))) {
      errors.push(`"${name}" doit être une date ISO valide`);
    }
  }

  if (definition.format === 'url' && typeof value === 'string' && value.length > 0) {
    try {
      new URL(value);
    } catch {
      errors.push(`"${name}" doit être une URL valide`);
    }
  }

  if (definition.required && expectedType === 'string' && !isNonEmptyString(value)) {
    errors.push(`"${name}" ne peut pas être vide`);
  }

  return errors;
}

export function validatePayload(objectType, payload) {
  const schema = loadSchema(objectType);
  const errors = [];

  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    throw new Error('Le payload JSON doit être un objet.');
  }

  for (const [fieldName, definition] of Object.entries(schema.properties)) {
    errors.push(...validateField(fieldName, payload[fieldName], definition));
  }

  const unknownFields = Object.keys(payload).filter((key) => !schema.properties[key]);
  if (unknownFields.length > 0) {
    errors.push(`Champs non reconnus : ${unknownFields.join(', ')}`);
  }

  if (errors.length > 0) {
    const message = [`Validation échouée pour "${schema.title}" :`, ...errors.map((e) => `  - ${e}`)].join('\n');
    throw new Error(message);
  }

  return schema;
}
