// vite.config.js
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	base: './', // Важливо! Для роботи на GitHub Pages або локальному сервері

	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@js': path.resolve(__dirname, './src/js'),
			'@sass': path.resolve(__dirname, './src/sass'),
			'@img': path.resolve(__dirname, './src/img'),
		},
	},

	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
          @use '@/sass/base/variables' as *;
          @use '@/sass/base/mixins' as *;
        `,
			},
		},
	},

	build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
        input: {
				main: path.resolve(__dirname, 'index.html'),
				about: path.resolve(__dirname, 'about.html'),
				shop: path.resolve(__dirname, 'shop.html'),
				recent: path.resolve(__dirname, 'recent.html'),
			},
        output: {
            assetFileNames: (assetInfo) => {
                if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo.name || '')) {
                    return 'assets/img/[name]-[hash][extname]'
                }
                return 'assets/[name]-[hash][extname]'
            }
        }
    }
},

	server: {
		port: 5173,
		open: true,
	},
})
