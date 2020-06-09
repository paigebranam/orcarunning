module.exports = {
    '*.{scss,css}': ['npm run prettier'],
    '*.{js,json,md}': ['npm run prettier'],
    '*.{ts,tsx}': ['npm run prettier', 'npm run lint-fix'],
};
