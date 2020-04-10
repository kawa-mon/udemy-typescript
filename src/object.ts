export {};

// あまい型設定なので望ましくない
let profile1: object = { name: 'Ham' };
profile1 = { birthday: 1976 };

// 制約きつく型設定できる
let profile2: {
  name: string;
} = { name: 'Ham' };
profile2 = { name: 'test' };
// profile2 = { name: 1976 };
// profile2 = { birthday: 1976 };
