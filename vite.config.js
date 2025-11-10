import { defineConfig } from 'vite';

export default defineConfig({
  root: './src', //出力元のパス指定
  base: './', //相対パスを基準に設定
  publicDir: "../public", //publicディレクトリのパス指定
  build: { 
    outDir: '../dist', //出力先の指定
    emptyOutDir: true, //書き出すときにディレクトリを一旦削除
    sourcemap: false, //jsのソースマップの設定
    minify: false, //圧縮を無効化
  },
  server: {
    port: 3700, //指定のポート番号で開く
    host: true, //IPアドレスを有効化
    open: '/', //起動時に自動でブラウザで開くページを指定
  },
  plugins: [
  ],
});