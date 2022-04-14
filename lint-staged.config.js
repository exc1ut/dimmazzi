module.exports = {
  '*.{js,jsx,ts,tsx}': ['npm run lint'],
  '**/*.ts?(x)': () => 'npm run build-types',
  '*.json': ['prettier --write'],
}
