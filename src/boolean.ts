// このファイルをモジュール化して名前空間の衝突を避けている
export {};

let isFinished: boolean = true;
isFinished = false;
// isFinished = 1
console.log({ isFinished });
