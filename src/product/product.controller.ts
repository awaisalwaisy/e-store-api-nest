import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AddProductDto } from './dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('test')
  test() {
    return this.productService.test();
  }
  @Get()
  findAll() {
    return this.productService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }
  @Post('new')
  create(@Body() data: AddProductDto) {
    return this.productService.create(data);
  }
}
