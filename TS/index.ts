type Hu<T> = {
  name: string;
  age: T;
};

type Num = {
    <T>(arr: Array<T>) : void
}

const hyungjun: Hu<number> = {
  name: "hyungyoo",
  age: 31,
};

type Ne = {
  ne: number;
  ou: string;
};

type Haha = Hu<Ne>

const seojung: Haha = {
  name: "seojung",
  age: {
    ne: 1990,
    ou: "seuol",
  },
};
