import fs from 'fs';
import { globSync } from 'glob';

//build時にHTMLファイルの画像パスを.webpに書き換え

// 対象ファイルを取得
const htmlFiles = globSync('*.html', {
  ignore: ['src/**, public/**', 'node_modules/**']
});
const cssFiles = globSync('assets/**/*.css', {
  ignore: ['src/**, public/**', 'node_modules/**']
});
const jsFiles = globSync('assets/**/*.js', {
  ignore: ['src/**, public/**', 'node_modules/**']
});

// 画像パスを.webpに書き換え
htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // headタグの内容を一時的にマスク
  const headMatches = [];
  content = content.replace(/<head[^>]*>([\s\S]*?)<\/head>/gi, (match, headContent) => {
    const placeholder = `__HEAD_PLACEHOLDER_${headMatches.length}__`;
    headMatches.push({ placeholder, content: match });
    return placeholder;
  });
  // headタグ以外の部分で画像パスを.webpに書き換え
  content = content.replace(/\.(jpg|png)(?=["'\s>])/g, '.webp');
  // headタグの内容を元に戻す
  headMatches.forEach(({ placeholder, content: headContent }) => {
    content = content.replace(placeholder, headContent);
  });
  
  fs.writeFileSync(file, content);
});

cssFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/\.(jpg|png)(?=["'\s>])/g, '.webp');
  fs.writeFileSync(file, content);
});

jsFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/\.(jpg|png)(?=["'\s>])/g, '.webp');
  fs.writeFileSync(file, content);
});

// 結果を表示
console.log(`HTML paths converted to WebP! (${htmlFiles.length} files processed)`);
console.log(`CSS paths converted to WebP! (${cssFiles.length} files processed)`);
console.log(`JS paths converted to WebP! (${jsFiles.length} files processed)`);
