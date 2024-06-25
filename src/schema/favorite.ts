import {HydratedDocument} from "mongoose";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {IFavorites} from "../interface/favorites";

export type FavoriteDocument = HydratedDocument<Favorite>;

@Schema()
export class Favorite implements IFavorites {

    @Prop() SECID: string

    @Prop() userId: string;

}

export const FavoriteSchema = SchemaFactory.createForClass(Favorite);