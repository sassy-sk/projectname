## ファイル構成   
∟ assets ・・・本番用  
　∟ css  
　∟ images  
　∟ js  
∟ src ・・・開発用（ejs、scss）  
　∟ index.html ・・・開発用トップページ  
　∟ parts ・・・EJSパーツファイル  
　∟ scss ・・・SCSSファイル   
∟ public ・・・開発用（js、images）  
　∟ js  
　∟ images ・・・webp対応  
　∟ meta ・・・headタグ内メタ関連ファイル （webp未対応）  
∟ buildScript ・・・build用のnodeファイル  
∟ vite.config.js ・・・vite設定ファイル  
∟ postcss.config.cjs ・・・postcss設定ファイル    
∟ prettierrc ・・・prettier設定ファイル    

## 使用環境
- Node.js バージョン1（現状検証してないので不明、とりあえず23.11.0で動作してます）
- npm バージョン（現状検証してないので不明、とりあえず10.9.2で動作してます）
- バージョン確認方法：※ターミナル上でコマンドを入力すること
  - `node -v`
  - `npm -v`
- コマンドを入力後、数字がでてくれば大丈夫です  

## 使い方および操作方法  
- ビルドした際はjpgやpngをwebpに変換する仕様となります。
- ejs仕様：ページファイルはhtml拡張子を使用、パーツファイルはejs拡張子を使用してます（vite-ejsプラグインの使用上、html拡張子ではないと認識しないため）

1. `npm i`をターミナルへ入力
2. `npm run dev`で開発ブラウザが起動します
3. `npm run build`でhtml、scss、js、画像がビルドされます  

#### 注意点 
- 新規ファイルを作成、画像ファイルを追加した場合に認識しない時があるので、その場合は`npm run dev`を実行しvite再起動を行ってください。
