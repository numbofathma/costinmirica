module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  settings: {
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true
      }
    }
  },
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", "ts", "tsx"] }],
    "no-nested-ternary": "warn",
    "class-methods-use-this": "warn",
    "object-curly-spacing": [
      "warn",
      "always"
    ],
    "no-unused-vars": [
      "warn",
      {
        "vars": "all",
        "args": "none"
      }
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "vars": "all",
        "args": "none"
      }
    ],
    "@typescript-eslint/no-explicit-any": [
      "error",
      {
        "ignoreRestArgs": true
      }
    ],
    "max-len": [
      "warn",
      {
        "code": 160,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
        "ignoreComments": true
      }
    ],
    "no-plusplus": [
      "error",
      {
        "allowForLoopAfterthoughts": true
      }
    ],
    "react/jsx-key": "error",
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "**/*.test.js",
          "**/*.test.jsx",
          "**/*.test.ts",
          "**/*.test.tsx",
          "src/tests/**/*"
        ]
      }
    ],
    "jsx-a11y/click-events-have-key-events": "warn",
    "jsx-a11y/no-static-element-interactions": "warn",
    "jsx-a11y/anchor-is-valid": "warn",
    "react/no-array-index-key": "warn",
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "react/jsx-boolean-value": "off",
    "react/prop-types": "off",
    "react/no-unescaped-entities": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-wrap-multilines": "off",
    "react/destructuring-assignment": "off"
  }
};
