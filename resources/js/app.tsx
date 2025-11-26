import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import PageTransitionLoader from './components/page-transition-loader';

const appName = import.meta.env.VITE_APP_NAME || 'SAVI';

createInertiaApp({
  title: (title) => `${title}  ${appName}`,
  resolve: (name) =>
    resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
  setup({ el, App, props }) {
    const root = createRoot(el);

    // Remover preloader do Blade após montagem do React
    const bladePreloader = document.getElementById('blade-preloader');
    if (bladePreloader) {
      bladePreloader.classList.add('opacity-0', 'transition-opacity', 'duration-500');
      setTimeout(() => bladePreloader.remove(), 600);
    }

    root.render(
      <>
        <PageTransitionLoader />
        <App {...props} />
      </>
    );
  },
  progress: false,
});


