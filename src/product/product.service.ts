import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddProductDto } from './dto';

@Injectable()
export class ProductService {
  constructor(private readonly db: PrismaService) {}
  findAll() {
    return this.db.product.findMany();
  }
  findOne(id: string) {
    return this.db.product.findUnique({
      where: {
        id,
      },
    });
  }
  async create(data: AddProductDto) {
    try {
      const res = await this.db.product.create({
        data,
      });

      if (res) {
        return { message: 'Product has been created successfully' };
      } else {
        throw Error('Failed to create product');
      }
    } catch (error) {
      return {
        message: error,
      };
    }
  }
  test() {
    return 'Hello test!';
  }
}
