import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Porfolio Docs',
			social: {
				github: 'https://github.com/FernandoVB96/ProyectoCliente',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Introducción', slug: 'guides/introduction' },
						{ label: 'Configuración del Proyecto', slug: 'guides/configuration' },
						{ label: 'Secciones del Portafolio', slug: 'guides/sections' },
						{ label: 'Pruebas y Mantenimiento', slug: 'guides/testing' },
						{ label: 'Conclusión', slug: 'guides/conclusion' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
