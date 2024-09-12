// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://data.github.io',
	integrations: [
		starlight({
			title: 'Captain Jay',
			social: {
				github: 'https://github.com/captain0jay',
				twitter: 'https://twitter.com/captain0jay',
				linkedin: 'https://www.linkedin.com/in/captain0jay',
			},
			sidebar: [
				{
					label: 'DSA',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'DSA stuff', slug: 'dsa/example' },
					],
				},
				{
					label: 'Algos',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'New algorithms', slug: 'algos/example' },
					],
				},
				{
					label: 'SQL',
					autogenerate: { directory: 'SQL' },
				},
			],
			customCss: [
			'./src/styles/theme.css'
			],
	}),
	],
});
