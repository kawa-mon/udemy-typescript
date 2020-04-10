export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
console.log(typeof numberUnknown);
if (typeof numberUnknown === 'number') {
  // numberUnknown の型が number のときであれば実行できる「型ガード」
  let sumUnknown = numberUnknown + 10;
}
