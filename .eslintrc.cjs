module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  ignorePatterns: ['dist', '.eslintrc.cjs', 'prettierrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:storybook/recommended',
  ],
  plugins: [
    'react-refresh',
    'import',
    'unused-imports',
    'unicorn',
    'functional',
    'prefer-arrow-functions',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['./tsconfig.json'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/jsx-no-bind': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-leaked-render': 'error',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/strict-boolean-expressions': [
      'warn',
      {
        allowString: false,
        allowNumber: false,
        allowNullableObject: false,
        allowNullableBoolean: false,
        allowNullableString: false,
        allowNullableNumber: false,
      },
    ],
    '@typescript-eslint/restrict-plus-operands': [
      'error',
      {
        skipCompoundAssignments: false,
        allowBoolean: false,
        allowNullish: false,
        allowNumberAndString: false,
        allowRegExp: false,
        allowAny: false,
      },
    ],
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
        disallowTypeAnnotations: true,
      },
    ],
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      { selector: 'variable', format: ['camelCase'] },
      {
        selector: 'variable',
        modifiers: ['const'],
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      { selector: 'function', format: ['camelCase', 'PascalCase'] },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      { selector: 'class', format: ['PascalCase'] },
      { selector: 'method', format: ['camelCase'] },
      {
        selector: 'property',
        format: ['camelCase', 'PascalCase', 'snake_case'],
      },
      { selector: 'interface', format: ['PascalCase'] },
      { selector: 'typeAlias', format: ['PascalCase'] },
      { selector: 'typeParameter', format: ['camelCase'] },
      { selector: 'typeLike', format: ['PascalCase'] },
      { selector: 'enum', format: ['PascalCase'] },
      { selector: 'enumMember', format: ['UPPER_CASE'] },
    ],
    'import/no-cycle': 'error',
    'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
    'import/no-default-export': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'object',
          'type',
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [
          {
            pattern: 'react**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'react-dom',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@material-ui/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
    'unused-imports/no-unused-imports': 'error',
    'no-implicit-coercion': 'error',
    'prefer-template': 'error',
    'unicorn/prefer-switch': 'error',
    'no-fallthrough': 'error',
    'functional/no-let': [
      'error',
      {
        allowInForLoopInit: true,
        allowInFunctions: false,
        ignoreIdentifierPattern: ['^mut_', '^_mut_', '^#mut_'],
      },
    ],
    'functional/immutable-data': [
      'error',
      {
        ignoreClasses: true,
        ignoreImmediateMutation: true,
        ignoreIdentifierPattern: [
          '^mut_',
          '^_mut_',
          '^#mut_', // private class field
          'window.location.href',
        ],
        ignoreAccessorPattern: [
          '**.current.**', // allow React Ref object
          '**.displayName', // allow React component displayName
          '**.scrollTop', // allow modifying scrollTop
        ],
      },
    ],
    'arrow-body-style': ['error', 'as-needed'],
    'func-style': 'error',
    'prefer-arrow-functions/prefer-arrow-functions': [
      'error',
      {
        classPropertiesAllowed: false,
        disallowPrototype: false,
        returnStyle: 'unchanged',
        singleReturnOnly: false,
      },
    ],
  },
  overrides: [
    {
      files: ['*.stories.@(ts|tsx|js)'],
      extends: ['plugin:storybook/recommended'],
      rules: {
        'import/no-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
