export {};

let name: any = 'Ham';
// let length: number = name.length;
// let length = name.length as number;
let length = (name as string).length;
// let length = (<string>name).length;

// length = 'foo';
