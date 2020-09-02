import { Resolver, Query, Mutation, Arg, UseMiddleware, Ctx } from "type-graphql";
import { User } from "../entities/User";
import { UserService } from "../services/UserService";
import { CreateUserType } from "../types/CreateUser";
import { UpdateUserType } from "../types/UpdateUser";
import { LogAccess } from "../middleware/auth";
import { SignInType } from "../types/SignIn";
import { hashSync, compareSync } from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { MyContext } from '../MyContext';

@Resolver()
export class UserResolver {
    constructor(private readonly userService = new UserService()) { }


    @Query(() => [User], { name: 'users' })
    async getAll() {
        return await this.userService.findAll();
    }

    @Query(() => User, { name: 'user' })
    async getOne(@Arg('id') id: string) {
        return await this.userService.findOne(id);
    }

    @UseMiddleware(LogAccess)
    @Query(() => User, { name: 'me' })
    async me(@Ctx() { req }: MyContext) {
        //@ts-ignore
        return await this.userService.findOne(req.user.id);
    }

    @Mutation(() => User, { name: 'createUser' })
    async create(@Arg('user') createUserData: CreateUserType) {
        return this.userService.create(createUserData);
    }

    @Mutation(() => User, { name: 'updateUser' })
    async updateOne(@Arg('id') id: string, @Arg('user') updateUserData: UpdateUserType) {
        return this.userService.updateOne(id, updateUserData);
    }

    @Mutation(() => User, { name: 'deleteUser' })
    async deleteOne(@Arg('id') id: string) {
        return this.userService.deleteOne(id);
    }

    @Mutation(() => SignInType, { name: 'register' })
    async register(@Arg('user') createUserData: CreateUserType) {
        const user = await this.userService.findOneByEmail(createUserData.email);
        if (user) throw new Error('User already exists');
        createUserData.password = hashSync(createUserData.password, 10);
        const newUser = await this.userService.create(createUserData);
        const access_token = jwt.sign({ sub: newUser.id }, process.env.ACCESS_TOKEN_SECRET);
        return { access_token };
    }

    @Mutation(() => SignInType, { name: 'login' })
    async login(@Arg('email') email: string, @Arg('password') password: string) {
        const user = await this.userService.findOneByEmail(email);
        if (!user || !compareSync(password, String(user.password))) throw new Error('Email or password is incorrect');
        const access_token = jwt.sign({ sub: user.id }, process.env.ACCESS_TOKEN_SECRET);
        return { access_token };
    }
}