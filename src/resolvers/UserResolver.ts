import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { User } from "../entities/User";
import { UserService } from "../services/UserService";
import { CreateUserType } from "../types/CreateUser";
import { UpdateUserType } from "../types/UpdateUser";

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
}