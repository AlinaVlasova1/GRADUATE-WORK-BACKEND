import { Injectable } from '@nestjs/common';
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {Favorite, FavoriteDocument} from "../../schema/favorite";
import {FavoriteDto} from "../../dto/favorite-dto";

@Injectable()
export class FavoritesService {
    constructor(@InjectModel(Favorite.name) private  favoriteModel: Model<FavoriteDocument>) {
    }
    async sendFavorite(data: FavoriteDto): Promise<Favorite> {
        const favoriteData = new this.favoriteModel(data);
        return favoriteData.save();
    }

    async getAllFavorites(): Promise<any> {
        return this.favoriteModel.find();
    }

}
