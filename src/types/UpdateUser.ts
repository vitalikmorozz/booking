import { InputType, Field } from "type-graphql";
import { IsEmail, IsOptional } from 'class-validator';
import { User } from "../entities/User";

@InputType()
export class UpdateUserType implements Partial<User> {
    @IsOptional()
    @Field({ nullable: true })
    firstName: string;

    @IsOptional()
    @Field({ nullable: true })
    lastName: string;

    @IsOptional()
    @IsEmail()
    @Field({ nullable: true })
    email: string;

    @IsOptional()
    @Field({ nullable: true })
    password: string;
}