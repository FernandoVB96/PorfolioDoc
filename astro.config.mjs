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
					label: 'Guias',
					items: [
						{ label: 'Introducción', slug: 'guides/introduction' },
						{ label: 'Configuración del Proyecto', slug: 'guides/configuration' },
						{ label: 'Pruebas y Mantenimiento', slug: 'guides/testing' },
						{ label: 'Conclusión', slug: 'guides/conclusion' },
					],
				},
				{
					label: 'Estructura',
					autogenerate: { directory: 'structure' },
				},
				{
					label: 'Referencias',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
