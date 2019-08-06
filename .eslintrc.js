module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jquery: true,
  },
  extends: 'airbnb',
  // extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-uses-react': 'error',
    // 'jsx-a11y/no-static-element-interactions': 'warn'
  },
};
