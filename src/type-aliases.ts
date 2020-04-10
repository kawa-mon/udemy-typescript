export {};

type Mojiretsu = string;
type Profile = {
  name: string;
  age: number;
};
type Profile2 = typeof example1; // example1 の構造に追随できるので Profile よりも良い

const fooString: string = 'hello';
const fooMojiretsu: Mojiretsu = 'hello';

const example1 = {
  name: 'Ham',
  age: 43,
};
const example2: Profile = {
  name: 'Ham',
  age: 43,
};
const example3: Profile2 = {
  name: 'Ham',
  age: 43,
};
