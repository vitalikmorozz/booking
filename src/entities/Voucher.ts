import { ObjectType, Field } from "type-graphql";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";

@ObjectType()
export class Voucher {
    @Field()
    id: string;

    @Field()
    @Property()
    name: string;

    @Field()
    @Property()
    description: string;

    @Field()
    @Property()
    imageUrl: string;

    @Field()
    @Property()
    price: number;

    @Field()
    @Property()
    variant: string;

    @Field()
    @Property()
    quantity: number;
}

export const VoucherModel = getModelForClass(Voucher);