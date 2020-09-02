import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class SignInType {
    @Field()
    access_token: string;
}