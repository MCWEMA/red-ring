// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://stargazers.club',
	integrations: [
		starlight({
			//title: 'WemaLabs',
			title: {
				en: 'WemaLabs',
				ar: 'مختبرات ويما',
				fr: 'WemaLabs-FR',
			},
			expressiveCode: {
				// Replace the default themes with a custom set of bundled themes:
				// "dracula" (a dark theme) and "solarized-light"
				themes: ['solarized-dark', 'snazzy-light'],
			},
			// Set English as the default language for this site.
			defaultLocale: 'root', // optional
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				// Simplified Chinese docs in `src/content/docs/zh-cn/`
				fr: {
					label: 'Français',
					//lang: 'fr-FR',
				},
				// Arabic docs in `src/content/docs/ar/`
				ar: {
					label: 'العربية',
					dir: 'rtl',
				},
		},
			
			social: {
				github: 'https://github.com/mcwema',
			},
			sidebar: [
				{
					label: 'Guides',
					translations:{
						ar: 'مرشد',
						fr: 'Guides-fr',
					},
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: 'Example Guide', 
							translations: {
								ar: ' نموذج  مرشد',
								fr: 'Guides Exemple-FR',
							}, 
							slug: 'guides/example' 
						},
						{ label: 'Example Guide Copy', 
							translations: {
								ar: 'تاني نموذج  مرشد',
								fr: 'Copy Guide Exemple-FR',
							}, 
							slug: 'guides/example-copy' 
						},
					],
				},
				{
					label: 'Reference',
					translations: {
						ar: 'مرجع',
						fr: 'Référence',
					},
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Reference-Copy',
					translations: {
						ar: '  مرجع تاني ',
						fr: 'Autre Référence ',
					},
					autogenerate: { directory: 'reference copy' },
				},
			],
		}),
	],
});
