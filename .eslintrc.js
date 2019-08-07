module.exports = {
  // extends: 'airbnb',
  parser: 'babel-eslint',
  plugins: ['react','jsx-a11y','import'],
   extends: [
   "eslint:recommended",
   "plugin:jsx-a11y/recommended",
   "plugin:react/recommended",
   "plugin:jest/recommended",
  ],
  // extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  
  parserOptions: {
    "sourceType": "module",
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "impliedStrict": true,
      "jsx": true,
      "jest":true
    }
  },
  "env": {
    "browser": true,
    "commonjs": true,
    "node": true,
    "es6": true
  },
  "settings": {
    "react": {
      "createClass": "createReactClass",
      "pragma": "React",
      "version": "16.5.0"
    },
    "propWrapperFunctions": [
      "forbidExtraProps"
    ]
  },
  "rules": {
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1,
        "ObjectExpression": 1,
        "FunctionExpression": {
          "parameters": "first"
        },
        "FunctionDeclaration": {
          "parameters": "first"
        }
      }
    ],
    "generator-star-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "array-bracket-spacing": [
      "error",
      "never"
    ],
    "arrow-body-style": [
      0,
      "never"
    ],
    "arrow-spacing": [
      "error",
      {
        "before": true,
        "after": true
      }
    ],
    "no-multi-spaces": [
      "error",
      {
        "ignoreEOLComments": true
      }
    ],
    "comma-dangle": [
      2,
      "always-multiline"
    ],
    "global-require": 0,
    "func-names": 0,
    "prefer-const": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "max-len": 0,
    "no-unused-expressions": [
      0,
      {
        "allowShortCircuit": true,
        "allowTernary": true
      }
    ],
    "no-console": 0,
    "no-extend-native": 0,
    "no-param-reassign": 0,
    "no-restricted-syntax": 0,
    "no-eval": 0,
    "no-continue": 0,
    "no-mixed-operators": 0,
    "no-plusplus": 0,
    "no-unused-vars": [
      2,
      {
        "args": "none",
        "ignoreRestSiblings": true
      }
    ],
    "no-underscore-dangle": 0,
    "semi": [
      2,
      "always"
    ],
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/href-no-hash": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/label-has-for": 0,
    "react/prop-types": 0,
    "react/display-name": 0,
    "react/no-array-index-key": 0,
    "react/require-default-props": 0,
    "react/forbid-prop-types": 0,
    "react/no-string-refs": 0,
    "react/no-find-dom-node": 0,
    "react/prefer-stateless-function": 0,
    "react/jsx-closing-tag-location": 0,
    "react/sort-comp": 0,
    "react/jsx-no-bind": 0,
    "react/no-danger": 0,
    "react/jsx-first-prop-new-line": 0,
    "react/jsx-filename-extension": 0,
    'react/jsx-uses-react': 'error',
    "linebreak-style": [
      "error",
      "unix"
    ]
  }
};
