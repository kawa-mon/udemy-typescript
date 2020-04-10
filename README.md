# udemy：ハンズオンで学ぶ TypeScript - JavaScript エンジニアのための TypeScript徹底入門
- https://www.udemy.com/course/ts-for-js-developers/

## 開発環境
- Node.js v13.11.0
- npm v6.14.4
- TypeScript v3.7.5
- ts-node v8.5.4

## TypeScript
- TypeScript は JavaScript の全てを包括している
- **型安全によってバグを減らす環境を手に入れられることが大きな利点**

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
- `$ npx tsc [ファイルパス]` でも可能
### ts-node
- `npx ts-node [ファイルパス]` でトランスパイルと実行を同時に行ってくれる
### ts-node-dev
- `npx ts-node-dev --respawn [ファイルパス]`  でファイルが修正されるたびにトランスパイルと実行を同時に行ってくれる
### tsconfig.json
- tsc コマンドによってトランスパイルされるときのオプションをまとめるファイル
- `npx tsc --init` でデフォルト設定で自動生成される
- デフォルト：https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

## 内容
- JSからTSにリプレイスするときなど暫定的に any 型を使うのは良いが、基本的には型定義する([src/any.ts](./src/any.ts))
- 戻り値がない関数は void 型を指定する
- エラー処理などのように戻ってこない関数は never 型を指定する
- 暫定的に unknown 型を付けておき、typeof で型ガードしながら安全に実行することも出来る
- 型は既存の型を足し合わせるだけで作ることが可能（交差型）
- 複数の型を持ちうる場合は共用型で指定する
- 漠然と型を指定すると困るときは literal 型を用いてスコープを狭める
