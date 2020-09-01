import { InputType, Field } from "type-graphql";
import { IsString, IsEmail } from 'class-validator';
import { User } from "../entities/User";

@InputType()
export class CreateUserType implements Partial<User> {
    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @IsEmail()
    @Field()
    email: string;

    @Field()
    password: string;
}