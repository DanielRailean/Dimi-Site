import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'
import { extensions, mdsvex } from './mdsvex.config.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Ensures both .svelte and .md files are treated as components (can be imported and used anywhere, or used as pages)
	extensions: ['.svelte', ...extensions],

	preprocess: [
		preprocess(),
		mdsvex
	],

	kit: {
		adapter: adapter(),
    	prerender: {
			entries: [
				'*',
				'/api/posts/page/[page]',
				'/posts/category/[page]/page/',
				'/posts/category/[category]/page/[page]',
				'/posts/category/page/',
				'/posts/category/page/[page]',
				'/posts/page/',
				'/posts/page/[page]',
			]
    }
	},
	onDev: ({ hostname, port }) => {
		console.log(`Dev server is running on http://${hostname}:${port}`);
	},
};

export default config;
