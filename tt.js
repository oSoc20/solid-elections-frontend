// module.exports = {
//   parser: 'eslint/parser', // Specifies the ESLint parser
//   parserOptions: {
//     ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
//     sourceType: 'module', // Allows for the use of imports
//     ecmaFeatures: {
//       jsx: true, // Allows for the parsing of JSX
//     },
//   },
//   settings: {
//     react: {
//       version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
//     },
//   },
//   extends: [
//     "react-app",
//     'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
//     'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
//   ],
//   rules: {
//     // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
//     // e.g. "@typescript-eslint/explicit-function-return-type": "off",
//     'sort-imports': 'off',
//     'import/order': 'off',
//     'simple-import-sort/sort': 'error',
//   },
//   plugins: ['react', 'simple-import-sort'],
// };

module.exports = {
  "env": {
    "browser": true,
    "jest": true,
    "es6": true
  },
  "plugins": ["import", 'react', 'simple-import-sort'],
  "extends": ["plugin:prettier/recommended"],
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "rules": {
    "no-console": "warn",
    "no-eval": "error",
    "import/first": "error",
    'sort-imports': 'off',
    'import/order': 'off',
    'simple-import-sort/sort': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
