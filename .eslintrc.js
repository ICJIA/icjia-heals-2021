module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'vue/experimental-script-setup-vars': 'off',
    'vue/no-mutating-props': 'off',
    'vue/valid-v-slot': 'off',
    'no-console': 'off',
    'vue/no-v-html': 'off',
  },
}
