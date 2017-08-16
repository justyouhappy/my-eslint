module.exports = {
    extends: 'airbnb-base',
    parserOptions: {
        'ecmaVersion': 7,
        'sourceType': 'module'
    },
    env: {
        'browser': true
    },
    rules: {
        'comma-dangle': ['error', 'never'],
        'func-names': 'off',
        'max-len': ['error', 200],
        'no-plusplus': 'off',
        'no-param-reassign': 'off',
        'one-var': 'off',
        'one-var-declaration-per-line': 'off'
  }
}