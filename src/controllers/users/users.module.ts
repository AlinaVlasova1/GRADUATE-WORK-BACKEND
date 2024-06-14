import { Module } from '@nestjs/common';
import {AppController} from "../../app.controller";
import {UsersController} from "./users.controller";
import {AppService} from "../../app.service";
import {UsersService} from "../../services/users/users.service";
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "../../schema/users";

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    controllers: [UsersController],
    providers: [UsersService],
})
export class UsersModule {
}
