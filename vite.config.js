import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    server: {
        host: '0.0.0.0', // Permite acceso desde cualquier interfaz
        port: 5173,      // Usa el puerto configurado
        strictPort: true, // Si el puerto está ocupado, lanza un error
        hmr: {
            host: 'localhost', // Host para Hot Module Replacement
        },
    },
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
    ],
});
