import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // setting prefix
  app.setGlobalPrefix('api/v1');

  // setting up validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  // starting server
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
