import { defineConfig } from 'vite';
import { resolve } from 'path';
import { globSync } from 'glob';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import liveReload from 'vite-plugin-live-reload';
import VitePluginWebpAndPath from 'vite-plugin-webp-and-path';

export default defineConfig({
  root: './src',
  base: './',
  publicDir: '../public',
  build: {
    outDir: '../',
    emptyOutDir: false,
    sourcemap: false,
    minify: false,
    rollupOptions: {
      input: {
        // HTMLファイルを自動検出
        ...Object.fromEntries(
          globSync('src/**/*.html').map(file => [
            file.slice('src/'.length, -5).replace(/\//g, '_'),
            resolve(__dirname, file)
          ])
        ),
        // SCSSファイルを自動検出してエントリーポイント化
        ...Object.fromEntries(
          globSync('src/sass/**/*.scss').map(file => [
            file.slice('src/sass/'.length, -5).replace(/\//g, '_'),
            resolve(__dirname, file)
          ])
        )
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'assets/css/[name].css';
          }
          return 'assets/[name][extname]';
        },
        entryFileNames: (chunkInfo) => {
          return 'assets/js/[name].js';
        }
      }
    }
  },
  server: {
    port: 3700,
    host: true,
    open: '/'
  },
  plugins: [
    ViteEjsPlugin(),
    liveReload(
      [
        '*.html',
        'parts/**/*.ejs',
        'sass/**/*.scss'
      ]
    ),
    VitePluginWebpAndPath({
      targetDir: './assets/',
      imgExtensions: 'jpg,png',
      textExtensions: 'html,css,js',
      quality: 80,
      preserveOriginal: true // 元の画像を残す
    })
  ]
});