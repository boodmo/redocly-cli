import { RulesConfig } from './config';

export default {
  rules: {
    'info-description': 'warn',
    'info-contact': 'off',
    'info-license': 'off',
    'info-license-url': 'off',

    'tag-description': 'warn',
    'tags-alphabetical': 'off',

    'no-server-example.com': 'warn',
    'no-server-trailing-slash': 'error',
    'no-empty-servers': 'warn',

    'parameter-description': 'off',
    'no-path-trailing-slash': 'error',
    'path-declaration-must-exist': 'error',
    'path-not-include-query': 'error',
    'path-parameters-defined': 'error',
    'operation-description': 'off',
    'operation-2xx-response': 'warn',
    'operation-operationId-unique': 'error',
    'operation-operationId-url-safe': 'error',
    'operation-parameters-unique': 'error',
    'operation-tag-defined': 'off',
    'operation-security-defined': 'warn',
    'operationId-valid-in-url': 'error',
    'operation-singular-tag': 'off',

    'no-example-value-and-externalValue': 'error',

    'no-unused-components': 'warn',
    'no-unresolved-refs': 'error',
    'no-enum-type-mismatch': 'error',

    'boolean-parameter-prefixes': 'off',
    'paths-kebab-case': 'off',
    'no-invalid-media-type-examples': {
      severity: 'warn',
      disallowAdditionalProperties: false,
    },
    spec: 'error',
  },
} as RulesConfig;
