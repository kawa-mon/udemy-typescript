export {}

type DetailedProfile = {
  name: string
  height: string
  weight: string
}

type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>
type SmallProfile = Omit<DetailedProfile, 'height'>

// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
type MyOmit = Pick<
  DetailedProfile,
  Exclude<'name' | 'weight' | 'height', 'height'>
>
type MySmallProfile = MyOmit
