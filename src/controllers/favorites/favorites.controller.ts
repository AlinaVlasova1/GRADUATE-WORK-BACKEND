import {Body, Controller, Get, Post} from '@nestjs/common';
import {FavoritesService} from "../../services/favorites/favorites.service";
import {Favorite} from "../../schema/favorite";
import {FavoriteDto} from "../../dto/favorite-dto";

@Controller('favorites')
export class FavoritesController {
    constructor(private favoriteService: FavoritesService) {
    }

    @Get()
    getAllOrders(): Promise<Favorite[]> {
        return this.favoriteService.getAllFavorites();
    }

    @Post()
    initTours(@Body() data: FavoriteDto): void {
        const favoriteData = new FavoriteDto(data.SECID, data.userId);
        this.favoriteService.sendFavorite(favoriteData);
    }
}
