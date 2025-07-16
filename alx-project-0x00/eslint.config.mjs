import eslintPluginNext from 'eslint-plugin-next';
import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    plugins: {
      next: eslintPluginNext,
    },
    rules: {
      // add your custom rules here if needed
    },
  },
];
