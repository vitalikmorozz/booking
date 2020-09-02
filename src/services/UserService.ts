import { UserModel } from "../entities/User";
import { CreateUserType } from "../types/CreateUser";
import { UpdateUserType } from "../types/UpdateUser";

export class UserService {
    constructor(private readonly userModel = UserModel) { }

    async findAll() {
        return this.userModel.find({});
    }

    async findOne(id: string) {
        return this.userModel.findById(id);
    }

    async findOneByEmail(email: string) {
        return this.userModel.findOne({ email });
    }

    async create(createUserData: CreateUserType) {
        const newUser = new this.userModel(createUserData);
        return await newUser.save();
    }

    async updateOne(id: string, updateUserData: UpdateUserType) {
        await this.userModel.findByIdAndUpdate(id, updateUserData);
        return await this.userModel.findById(id);
    }

    async deleteOne(id: string) {
        return this.userModel.findByIdAndDelete(id);
    }
}