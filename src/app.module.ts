import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './controllers/users/users.controller';
import {UsersModule} from "./controllers/users/users.module";
import {MongooseModule} from "@nestjs/mongoose";
import {FavoritesModule} from "./controllers/favorites/favorites.module";

@Module({
  imports: [UsersModule, FavoritesModule, MongooseModule.forRoot('mongodb://localhost:27017/nest') ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
