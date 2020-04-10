export {};

let numbers: number[] = [1, 2, 3]; // 一般
let numbers2: Array<number> = [1, 2, 3]; // 非推奨だが用いられることがある（インターフェイスとジェネリクス）
let strings: Array<string> = ['Tokyo', 'Osaka', 'Kyoto'];

let strings2: string[] = ['TypeScript', 'JavaScript', 'CoffeeScript'];

let twoDimensionsArray: number[][] = [
  [50, 100],
  [150, 300],
];

let array: (string | number | boolean)[] = [1, false, 'Japan'];
