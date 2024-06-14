import {IUser} from "../interface/users";


export class UserDto implements IUser {
    cardNumber: string;
    email: string;
    id: string;
    password: string;
    login: string

}