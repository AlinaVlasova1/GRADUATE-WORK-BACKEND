import { Module } from '@nestjs/common';
import {AppController} from "../../app.controller";
import {UsersController} from "./users.controller";
import {AppService} from "../../app.service";
import {UsersService} from "../../services/users/users.service";
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "../../schema/users";
import {AuthService} from "../../services/authorization/auth/auth.service";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "../../static/private/constans";

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret
        })],
    controllers: [UsersController],
    providers: [UsersService, AuthService],
})
export class UsersModule {
}
