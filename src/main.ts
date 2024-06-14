import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from "@nestjs/platform-express";

async function bootstrap() {
 /* const app = await NestFactory.create(AppModule);*/
  /*await app.listen(3000);*/

  const cors = require('cors');

  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(cors());
  await app.listen(3000);
}
bootstrap();
