import './bootstrap';
import '../css/app.css';
import './models/init';

import { hydrateRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

createInertiaApp({
    title: (title) => `${title}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({ el, App, props }) {
        hydrateRoot(el, <App {...props} />)
    },
    progress: {
        color: '#8168F0',
    },
});
