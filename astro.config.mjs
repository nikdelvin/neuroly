// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import starlightSiteGraph from 'starlight-site-graph';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Neuroly',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/nikdelvin/neuroly' }],
			sidebar: [
				{
					label: 'Knowledge Base',
					autogenerate: { directory: 'knowledge' },
				},
			],
			customCss: ['./src/styles/global.css'],
			plugins: [starlightSiteGraph({
				debug: false,
				sitemapConfig: {},
				graphConfig: {
					depth: 5,
					repelForce: 300,
					colliderPadding: 60,
					actions: [
						"fullscreen",
						"reset-zoom"
					]
				},
				backlinksConfig: {},
			})]
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
