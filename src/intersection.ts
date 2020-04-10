export {};

type Pitcher1 = {
  throwingSpeed: number;
};
type Batter1 = {
  battingAverage: number;
};

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154,
};
const OchiaiHiromitsu: Batter1 = {
  battingAverage: 0.367,
};

// type twoWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// };

type twoWayPlayer = Pitcher1 & Batter1;
const OtaniShouhei: twoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286,
};
