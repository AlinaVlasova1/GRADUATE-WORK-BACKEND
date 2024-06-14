import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {UsersService} from "../../users/users.service";
import {PassportStrategy} from "@nestjs/passport";
import {Strategy} from "passport-local";

@Injectable()
export class AuthService extends PassportStrategy(Strategy) {
    constructor(private userService: UsersService) {
        super({usernameField: 'login', passwordField: 'password'});
    }

    async validate(login: string, password: string): Promise<any> {
        console.log('login', login, 'password', password);
        const user = await this.userService.checkAuthUser(login, password);
        console.log('user', user);
        if (!user) {
        throw new HttpException({
            status: HttpStatus.CONFLICT,
            errorText: 'Пользователь не найден в базе',
        }, HttpStatus.CONFLICT);
    }
    return true;
}
}
