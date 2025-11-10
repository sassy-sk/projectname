import fs from 'fs';
import { globSync } from 'glob';

//build時にHTMLファイルの画像パスを.webpに書き換え

// ルート直下のHTMLファイルのみ対象（srcフォルダを除外）
const htmlFiles = globSync('*.html', {
  ignore: ['src/**', 'node_modules/**']
});

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // 画像パスを.webpに書き換え
  content = content.replace(/\.(jpg|png)(?=["'\s>])/g, '.webp');
  fs.writeFileSync(file, content);
});

console.log(`HTML paths converted to WebP! (${htmlFiles.length} files processed)`);
