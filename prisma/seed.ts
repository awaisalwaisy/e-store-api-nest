import { ProductResponse } from 'src/@types';
import { products } from '../src/product/product.data';
// import { db } from '../src/utils/client';
import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getProducts().map((product) => {
      const { title, price, desc, image, category, rating } = product;
      return db.product.create({
        data: {
          title,
          price,
          desc,
          image,
          category,
          rating,
        },
      });
    }),
  );
}

seed();

function getProducts(): Array<ProductResponse> {
  return products;
}
