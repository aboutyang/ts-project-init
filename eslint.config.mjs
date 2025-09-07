import globals from 'globals'

export default [
  { ignores: ['*.d.ts', '**/node_modules', '**/coverage', '**/dist'] },
  {
    env: {
      browser: true,
      node: true,
      es2021: true
    },
    files: ['src/**/*.{js,mjs,cjs,ts}'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
      tsconfigRootDir: __dirname,
      parser: '@typescript-eslint/parser',
      project: ['./tsconfig.json']
    },
    plugins: ['@typescript-eslint'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    rules: {
      semi: 'off',
      quotes: 'off',
      '@typescript-eslint/semi': ['error', 'never'],
      '@typescript-eslint/quotes': ['error', 'double']
    }
  }
]

