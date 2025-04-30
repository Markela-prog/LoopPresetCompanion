// @ts-check
const eslint = require('@eslint/js');
const tsEslint = require('typescript-eslint');
const angular = require('angular-eslint');
const prettier = require('eslint-config-prettier');
const pluginPrettier = require('eslint-plugin-prettier');

module.exports = tsEslint.config(
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tsEslint.configs.recommended,
      ...tsEslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    plugins: {
      prettier: pluginPrettier,
    },
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      'prettier/prettier': ['error'],
    },
  },
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      '@angular-eslint/template/eqeqeq': ['error'],
      'prettier/prettier': ['error', { parser: 'angular' }],
    },
  },
  prettier,
);
