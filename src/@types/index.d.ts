// seeding db
export interface ProductResponse {
  title: string;
  price: number;
  desc: string;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}
