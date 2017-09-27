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
    'no-use-before-define': 0, // Stop annoying message about `styles` not being declared before use
    'react/no-array-index-key': 0,
    'no-underscore-dangle': 0,
  },
  globals: {
    it: true,
    expect: true,
  },
};
