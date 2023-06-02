import { defaultColors, defineConfig } from 'histoire';
import { HstSvelte } from '@histoire/plugin-svelte';

export default defineConfig({
	plugins: [HstSvelte()],
	theme: {
		title: 'Histoire',
		logo: {
			square: './static/images/logo-modified.png',
			light: './static/images/logo-modified.png',
			dark: './static/images/logo-modified.png'
		},
		favicon: './static/images/logo-modified.png',
		colors: {
			primary: defaultColors.teal
		}
	}
});
