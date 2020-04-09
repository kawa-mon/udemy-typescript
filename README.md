# udemy：ハンズオンで学ぶ TypeScript - JavaScript エンジニアのための TypeScript徹底入門
- https://www.udemy.com/course/ts-for-js-developers/

## 開発環境
- Node.js v13.11.0
- npm v6.14.4
- TypeScript v3.7.5

## TypeScript
- TypeScript は JavaScript の全てを包括している

## 各種設定について
### .gitignore
- .gitignore は Node 用のテンプレートファイルが GitHub で公開されているので利用する
### package.json
- TypeScript をコンパイルするために npm パッケージがある。そのパッケージを管理するのが package.json
  - `$ npm init -y` で自動生成される
### TypeScript
- `$ npm info typescript` で最新バージョンを確認できる
- 今回は講義に合わせるために `$ npm install --save-dev typescript@3.7.5` で固定する
- **--save-dev** をつけることで開発環境だけで動くようになる
- `$ ./node_modules/.bin/tsc [ファイルパス]` で TypeScript から JavaScript にトランスパイルできる
- `$ npx src [ファイルパス]` でも可能
### ts-node
- `npx ts-node [ファイルパス]` でトランスパイルと実行を同時に行ってくれる

## 内容
