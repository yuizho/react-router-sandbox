export interface Ramen {
  id: number;
  name: String;
  noodle: "thick" | "mediam" | "thin";
  soupe: "heavy" | "light";
}

export interface Ramens {
  // the key is any string
  [code: string]: {
    region: string;
    ramens: Ramen[];
  };
}

export const ramenData: Ramens = {
  north: {
    region: "Hokkaido",
    ramens: [
      {
        id: 1,
        name: "miso",
        noodle: "mediam",
        soupe: "heavy",
      },
      {
        id: 2,
        name: "shouga (ginger)",
        noodle: "mediam",
        soupe: "light",
      },
    ],
  },
  middle: {
    region: "Yokohama",
    ramens: [
      {
        id: 3,
        name: "yokohama tonkotsu",
        noodle: "thick",
        soupe: "heavy",
      },
    ],
  },
  south: {
    region: "Hakata",
    ramens: [
      {
        id: 4,
        name: "hakata tonkotsu",
        noodle: "thin",
        soupe: "heavy",
      },
    ],
  },
};
