export {};

abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return 'roar';
  }
}

class Tigar extends Animal {
  cry() {
    return 'grrr';
  }
}
