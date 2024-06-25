import {IFavorites} from "../interface/favorites";

export class FavoriteDto implements IFavorites {
    SECID: string;
    userId: string
    constructor(SECID, userId) {
        this.SECID = SECID;
        this.userId = userId
    }
}