export {};

// 共用型(union types)だと要素の順番まで制約をつけて型推論出来ない
// tuple 型で制約きつく指定できる
let profile1: [string, number] = ['Ham', 4];
let profile2: [number, string] = [4, 'Ham'];
