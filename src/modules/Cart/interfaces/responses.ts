export interface product {
  id: number;
  colour: string;
  name: string;
  price: number;
  img: string;
  quantity?: number;
}

export type productList = Array<product>;
