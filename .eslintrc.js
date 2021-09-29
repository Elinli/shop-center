module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    },
    extends: ['plugin:vue/essential', 'eslint:recommended'],
    plugins: ['html', 'prettier'],
    rules: {
        'vue/name-property-casing': ['error', 'kebab-case'],
        'vue/component-name-in-template-casing': ['error', 'kebab-case'],
        'vue/no-use-v-if-with-v-for': [
            'error',
            {
                allowUsingIterationVar: true
            }
        ],

        'no-const-assign': 2,
        'prefer-const': 0,
        'no-undef': 2,
        'no-unused-vars': 2,
        'vue/no-unused-components': [
            'error',
            {
                ignoreWhenBindingPresent: true
            }
        ],
        'no-console': 0
    },
    overrides: [
        {
            files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
            env: {
                jest: true
            }
        }
    ]
};
