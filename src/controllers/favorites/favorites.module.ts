import { Module } from '@nestjs/common';
import { FavoritesController } from './favorites.controller';
import {Favorite, FavoriteSchema} from "../../schema/favorite";
import {MongooseModule} from "@nestjs/mongoose";
import {FavoritesService} from "../../services/favorites/favorites.service";

@Module({
  imports: [MongooseModule.forFeature([
    { name: Favorite.name, schema: FavoriteSchema }]
  )],
  controllers: [FavoritesController],
  providers: [FavoritesService]
})
export class FavoritesModule {}
