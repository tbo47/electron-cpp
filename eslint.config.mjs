import tseslint from 'typescript-eslint'

export default tseslint.config(...tseslint.configs.recommended, {
    ignores: ['**/*.spec.ts'],
})
