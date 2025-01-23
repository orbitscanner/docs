// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
        title: 'Orbit',
        logo: {
            light: './src/assets/Orbit-Main-Logo.png',
            dark: './src/assets/Orbit_White_Logo.png',
            replacesTitle: true,
        },
        favicon: '/favicon/favicon.ico',
        head: [
            {
                tag: 'link',
                attrs: {
                    rel: 'apple-touch-icon',
                    sizes: '180x180',
                    href: '/favicon/apple-touch-icon.png',
                },
            },
            {
                tag: 'link',
                attrs: {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '32x32',
                    href: '/favicon/favicon-32x32.png',
                },
            },
            {
                tag: 'link',
                attrs: {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '16x16',
                    href: '/favicon/favicon-16x16.png',
                },
            },
            {
                tag: 'link',
                attrs: {
                    rel: 'manifest',
                    href: '/favicon/site.webmanifest',
                },
            },
        ],
        social: {
            github: 'https://github.com/orbitscanner/orbit',
        },
        customCss: [
            // Relative path to your custom CSS file
            './src/styles/custom.css',
            './src/styles/index.css',
            './src/styles/tailwind.css',
        ],
        sidebar: [
            {
                label: 'Start Here',
                items: [
                    // Remove the /docs/ prefix from links as Starlight handles this automatically
                    { label: 'Introduction', link: '/' },
                    { label: 'Getting Started', link: '/getting-started/' },
                    { label: 'Installation', link: '/installation/' },
                ],
            },
            {
                label: 'Guides',
                items: [
                    { label: 'Configuration', link: '/configuration/' },
                    { label: 'Development', link: '/development/' },
                    { label: 'Docker Deployment', link: '/guides/docker-deployment/' },
                ],
            },
            {
                label: 'Reference',
                items: [
                    { label: 'API Reference', link: '/api-reference/' },
                ],
            },
        ],
        defaultLocale: 'root',
        locales: {
            root: {
                label: 'English',
                lang: 'en',
            },
        },
		}),
        tailwind({
            // Disable the default base styles:
            applyBaseStyles: false,
          }),],
});