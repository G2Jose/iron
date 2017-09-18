module.exports = {
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  env: {
    node: true,
    es6: true,
  },
  extends: ['airbnb'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 8,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
  globals: {},
};
