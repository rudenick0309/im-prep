module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
  },
};


// module.exports = {
//   "parserOptions": {
//     "ecmaVersion": 9
//   },
//   "env": {
//     "browser": true,
//     "commonjs": true,
//     "node": true,
//     "jquery": true
//   },
//   "extends": "airbnb-base",
//   "plugins": [ "import", "html" ],
//   "rules": {
//     // "off" or 0 - turn the rule off
//     // "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
//     // "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
//     // "no-var": 0,
//     "no-console": 0,
//     "no-plusplus": 0,
//     "vars-on-top": 0,
//     "no-underscore-dangle": 0, // var _foo;
//     "func-names": 0, // setTimeout(function () {}, 0);
//     "prefer-arrow-callback": 0, // setTimeout(function () {}, 0);
//     "prefer-template": 0,
//     "no-nested-ternary": 0,
//     "max-classes-per-file": 0,
//     "arrow-parens": ["error", "as-needed"], // a => {}
//     "no-restricted-syntax": [0, "ForOfStatement"],
//   }
// };