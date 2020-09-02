import { Field, InputType } from "type-graphql";
import { IsString, IsNumber } from "class-validator";

@InputType()
export class CreateVoucherType {
    @IsString()
    @Field()
    name: string;

    @IsString()
    @Field()
    description: string;

    @IsString()
    @Field()
    imageUrl: string;

    @IsNumber()
    @Field()
    price: number;

    @IsString()
    @Field()
    variant: string;

    @IsNumber()
    @Field()
    quantity: number;
}