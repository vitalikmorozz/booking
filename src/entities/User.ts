import { ObjectType, Field, ID } from "type-graphql";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";

@ObjectType()
export class User {
    @Field(() => ID)
    id: string;

    @Field()
    @Property()
    firstName: String;

    @Field()
    @Property()
    lastName: String;

    @Field()
    @Property()
    email: String;

    @Field()
    @Property()
    password: String;
}

export const UserModel = getModelForClass(User);