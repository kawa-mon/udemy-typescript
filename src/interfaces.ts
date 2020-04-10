export {};

type ObjectType = {
  name: string;
  age: number;
};

// 等号演算子は不要
interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectInterface = {
  name: 'Ham',
  age: 43,
};
