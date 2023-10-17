import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

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
  test() {
    return 'Hello test!';
  }
}
