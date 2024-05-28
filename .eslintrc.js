module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'tailwindcss'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended'
  ],
  rules: {
    // Aquí puedes agregar o sobrescribir las reglas de ESLint
  }
};
