module.exports = {
    'parser': 'babel-eslint',
    env: {
        browser: true,
        es6: true
    },
    //extends: ['prettier'],
    extends: [
        'plugin:prettier/recommended'
    ],
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        },
        sourceType: 'module'
    },
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error'
    }
};