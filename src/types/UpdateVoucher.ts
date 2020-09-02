import { Field, InputType } from "type-graphql";
import { IsString, IsNumber, IsOptional } from "class-validator";

@InputType()
export class UpdateVoucherType {
    @IsOptional()
    @IsString()
    @Field({ nullable: true })
    name: string;

    @IsOptional()
    @IsString()
    @Field({ nullable: true })
    description: string;

    @IsOptional()
    @IsString()
    @Field({ nullable: true })
    imageUrl: string;

    @IsOptional()
    @IsNumber()
    @Field({ nullable: true })
    price: number;

    @IsOptional()
    @IsString()
    @Field({ nullable: true })
    variant: string;

    @IsOptional()
    @IsNumber()
    @Field({ nullable: true })
    quantity: number;
}