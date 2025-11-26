import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),
    ],
    esbuild: {
        jsx: 'automatic',
    },
    resolve: {
        alias: {
            'ziggy-js': resolve(__dirname, 'vendor/tightenco/ziggy'),
            '@': resolve(__dirname, 'resources/js'),
        },
    },
    server: {
        host: '0.0.0.0',
        port: 5173,
        strictPort: true, 
        hmr: {
            host: 'localhost',
            clientPort: 5173,
        },
        watch: {
            // CRÍTICO PARA WINDOWS:
            // usePolling força a detecção de mudanças (necessário no Docker)
            // interval 1000 checa a cada 1s em vez de instantâneo, reduzindo MUITO a lentidão
            usePolling: true,
            interval: 1000, 
        },
    },
});