module.exports = {
  extends: [
    'airbnb-base',
  ],
  rules: {
    // --- CORE ESLINT RULES ---
    'arrow-body-style': ['off'], // don't care about use of braces in arrow functions
    'arrow-parens': ['off'], // don't care about use of parens in arrow functions
    'brace-style': ['error', 'stroustrup', {allowSingleLine: true}], // use the stroustrup brace style
    'comma-dangle': ['off'], // don't care about trailing commas
    'class-methods-use-this': ['off'], // it's ok to have a class method that doesn't use this
    'func-names': ['off'], // anonymous functions are ok
    'max-len': ['error', {code: 120}], // code is not longer than 120 columns
    'no-console': ['off'], // it's ok to use console statements
    'no-continue': ['off'], // it's ok to use the continue statement
    'no-empty': ['error', {allowEmptyCatch: true}], // no empty blocks except for catch blocks
    // don't reassign function params, but it's ok to write to their properties
    'no-param-reassign': ['error', {props: false}],
    'no-restricted-syntax': ['off'], // all ES syntax is ok
    'no-trailing-spaces': ['error', {skipBlankLines: true}], // trailing spaces only on blank lines
    // line breaks within object literals must be consistent and always used if there are at least 5 properties
    'object-curly-newline': ['error', {multiline: true, minProperties: 5, consistent: true}],
    'prefer-destructuring': ['off'], // don't care about use of destructuring
    // quotes around object props must be consistent and always used for language keywords
    'quote-props': ['error', 'consistent', {keywords: true}],
    'semi': ['error', 'never'], // never use semicolons

    // --- IMPORT RULES ---
    // never use file extension for .vue, .js, or .mjs imports; require it for everything else
    'import/extensions': ['error', 'always', {js: 'never', mjs: 'never'}],
    // it's ok to use undeclared dependencies from other dependencies (e.g. consola, vuetify)
    'import/no-extraneous-dependencies': ['off'],
  }
}
