import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      message: 'Welcome to e-store-api-nest!',
      about: 'A RESTful API for e-store',
      motive: 'Learning NestJs.',
      inspiration: 'Fakstoreapi - https://fakestoreapi.com/',
      endpoints: {
        prefix: 'api/v1',
        product: {
          findAll: '/product',
          test: '/product/test',
        },
      },
    };
  }
}
