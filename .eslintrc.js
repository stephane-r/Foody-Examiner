module.exports = {
  extends: ['./node_modules/poetic/config/eslint/eslint-config.js'],
  globals: {
    __DEV__: true
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-first-prop-new-line': [1, 'multiline'],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': [0],
    'react/no-unescaped-entities': 'off',
    indent: [
      2,
      2,
      {
        SwitchCase: 1
      }
    ],
    quotes: [2, 'single'],
    'linebreak-style': [2, 'unix'],
    semi: [2, 'always'],
    'no-console': [0],
    'no-loop-func': [0],
    'new-cap': [0],
    'no-trailing-spaces': [0],
    'no-param-reassign': [0],
    'func-names': [0],
    'comma-dangle': [0],
    'no-unused-expressions': [0],
    'block-scoped-var': [0],
    'jsx-quotes': ['error', 'prefer-double'],
    'object-curly-spacing': ['error', 'always']
  }
};
