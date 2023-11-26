import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Ecommerce Dashboard')
    .setDescription('The Webpage Dashboard')
    .setVersion('1.0')
    .addTag('Dashboard')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  console.log(`Backend running on PORT ${process.env.PORT}...`);
  await app.listen(process.env.PORT);
}
bootstrap();
