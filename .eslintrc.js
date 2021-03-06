module.exports = {
  env: {
    'browser': true,
    'es6': true,
    'node': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    indent: [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'never'
    ],
    'no-unused-vars': [
      'error',
      { 'argsIgnorePattern': '^_' }
    ],
    'no-console': [
      'error',
      { 'allow': ['warn', 'error'] }
    ]
  }
}
