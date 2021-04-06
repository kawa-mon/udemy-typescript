export {}

type Profile = {
  name: string
  age: number
}

const me: Profile = {
  name: 'Ham',
  age: 43,
}

me.age++

console.log(me)

type PersonalDataType = Readonly<Profile>

const frend: PersonalDataType = {
  name: 'Shigeru',
  age: 40,
}

// frend.age++

type YomitoriSenyo<T> = { readonly [P in keyof T]: T[P] }
type YomitoriSenyoProfile = YomitoriSenyo<Profile>
