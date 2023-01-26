import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            ssr: 'resources/js/ssr.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        react(),
    ],
    resolve: {
        alias: {
            '@images': '/resources/images',
            '@icons': '/resources/js/Icons',
            '@': '/resources/js',
            '~': path.resolve(__dirname, 'node_modules'),
            '~react-quill': path.resolve(__dirname, 'node_modules/react-quill'),
        },
    },
    esbuild: {
        jsxInject: `import React from 'react'`,
    },
    server: {
        https: false,
        host: '127.0.0.1',
    },
});
