export {};

function double(values: number): number;
function double(values: string): string;

function double(value: any): any {
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}

console.log(double(100));
console.log(double('go '));
// console.log(double(true));
