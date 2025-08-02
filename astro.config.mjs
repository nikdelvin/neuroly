// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import starlightSiteGraph from 'starlight-site-graph';

// https://astro.build/config
export default defineConfig({
	prefetch: true,
	integrations: [
		starlight({
			plugins: [starlightSiteGraph({
				debug: false,
				sitemapConfig: {},
				graphConfig: {
					depth: 1,
					repelForce: 300,
					colliderPadding: 60,
					actions: [
						"fullscreen",
						"reset-zoom"
					],
					nodeCurrentStyle: {
    					shape: "star",
						shapeSize: 8,
					}
				},
				backlinksConfig: {},
			})],
			title: 'Neuroly',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/nikdelvin/neuroly' }],
			sidebar: [
				{
					label: 'Knowledge Base',
					autogenerate: { directory: 'knowledge' },
				},
			],
			customCss: ['./src/styles/global.css'],
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
    devToolbar: {
        enabled: false
    }
});
