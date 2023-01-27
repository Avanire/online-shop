import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin'
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/App.js',
            ssr: 'resources/js/ssr.js',
            refresh: true,
        }),
        react(),
    ],
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.tsx', { eager: true })
        return pages[`./Pages/${name}.tsx`]
    },
    esbuild: {
        jsxInject: `import React from 'react'`,
    },
    server: {
        https: false,
        host: '127.0.0.1',
    },
});
