module.exports = {
  plugins: ['sonarjs', 'cypress'],

  extends: [
    'next',
    'turbo',
    'prettier',
    'airbnb',
    'plugin:sonarjs/recommended',
    'plugin:cypress/recommended'
  ],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'linebreak-style': 'off',
    'comma-dangle': 'off',
    'import/extensions': 'off'
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')]
    }
  }
};
