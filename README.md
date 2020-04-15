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
- 戻り値がない関数は void 型を指定する([./src/void.ts](./src/void.ts))
- エラー処理などのように戻ってこない関数は never 型を指定する([./src/never.ts](./src/never.ts))
- 暫定的に unknown 型を付けておき、typeof で型ガードしながら安全に実行することも出来る([./src/unknown.ts](./src/unknown.ts))
- 型は既存の型を足し合わせるだけで作ることが可能（交差型）([./src/intersection.ts](./src/intersection.ts))
- 複数の型を持ちうる場合は共用型で指定する([./src/union.ts](./src/union.ts))
- 漠然と型を指定すると困るときは literal 型を用いてスコープを狭める([./src/literal.ts](./src/literal.ts))
- オプショナル引数は引数名の後ろに ? をつける([./src/optional-arguments.ts](./src/optional-arguments.ts))
- オーバーロードはシグネチャを用いて行う([./src/overloads.ts](./src/overloads.ts))
  - シグネチャは関数定義の手前に書く
  - 型定義は各シグネチャで行い、実態の関数は any 型で良い
- constructor には型定義しない言語仕様になっている([./src/my-first-class.ts](./src/my-first-class.ts))
- TS では constructor の引数にアクセス修飾子をつけることで自動で初期化処理まで行ってくれる([./src/more-constructor.ts](./src/more-constructor.ts))
- getter, setter によるメンバ変数のリネームは慣習的に `_` を接頭語としてつける([./src/getter-and-setter.ts](./src/getter-and-setter.ts))
- 名前空間を作って外からアクセスするときには、`export` を class の前につける([./src/namespaces.ts](./src/namespaces.ts))
- 継承元で初期化出来るものはそちらに渡し、こちらでできる初期化だけ明示的に行う([./src/inheritance.ts](./src/inheritance.ts))
- 抽象クラスと抽象メソッドは継承先に処理を書く。MUST機能を抽象化しておけば、コンパイル時に未使用だったら教えてくれる([./src/abstract-classes.ts](./src/abstract-classes.ts))
- TS ではクラスは1つしか継承できないが、インターフェイスは複数実装できる([./src/return-of-interfaces.ts](./src/return-of-interfaces.ts))
- 複数の型で同じ処理を作りたいとき、ジェネリクス `<T>` を用いる([./src/generics.ts](./src/generics.ts))
