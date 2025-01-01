import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends('next/core-web-vitals', 'next/typescript'),
	{
		rules: {
			'no-console': 'warn',
			'no-unused-vars': 'warn',
			'no-undef': 'warn',
			'no-constant-condition': 'warn',
			'no-prototype-builtins': 'warn',
			'no-empty': 'warn',
			'@typescript-eslint/no-unused-vars': 'warn',
		},
	},
];

export default eslintConfig;
