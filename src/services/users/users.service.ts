import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {User, UserDocument} from "../../schema/users";
import {Model} from "mongoose";
import {UserDto} from "../../dto/user-dto";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from "bcrypt";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,
                private jwtService : JwtService) {
        console.log('userService run')
    }


    async getAllUsers(): Promise<User[]> {
        return this.userModel.find();
    }

    async getUserById(id): Promise<User> {
        return this.userModel.findById(id);
    }

    async sendUser(data): Promise<User> {
        console.log('data', data)
        const userObj = data;
        const userData = new this.userModel(userObj);
        return userData.save();
    }

    async updateUsers(id: string, body): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, body);
    }

    async deleteUsers(): Promise<any> {
        return this.userModel.deleteMany({});
    }

    async  deleteUserById(id: string): Promise<User> {
        return this.userModel.findByIdAndDelete(id);
    }

    async checkAuthUser(login: string, password: string): Promise<User[]> {
        const userArray = await this.userModel.find({login: login});
        console.log("password", password);
        console.log("userArray.length", userArray.length);
        console.log("userArray", userArray);
        const isMatch = await bcrypt.compare(password,userArray[0].password);
        console.log("isMatch", isMatch);
        return ((userArray.length === 0) && (isMatch == false))  ? null : userArray;
    }

    async checkRegUser(login: string): Promise<User[]> {
        return this.userModel.find({login: login});
    }

    async login(user: UserDto) {
        const payload = {username: user.login, password: user.password};
        const userFromOb = await this.userModel.find({login: user.login});
        console.log("userFromOb", userFromOb);
        return {
            id: userFromOb[0]._id,
            access_token: this.jwtService.sign(payload)
        }
    }

    async hashPassword(password: any): Promise<string> {
        const salt = await bcrypt.genSalt(10);
        const hashPsw =  bcrypt.hash(password, salt);
        return hashPsw;
    }
}
