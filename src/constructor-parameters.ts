export {}

class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

let taro = new Person('taro', 30)
console.log(taro)

type Profile = ConstructorParameters<typeof Person>

const profile: Profile = ['Ham', 43]
const ham = new Person(...profile)
console.log(ham)

type MyConstructorParameters<
  T extends new (...args: any) => any
> = T extends new (...args: infer P) => any ? P : never
