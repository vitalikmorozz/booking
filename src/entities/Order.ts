import { ObjectType, Field } from "type-graphql";
import { Buyer } from './Booking';
import { prop as Property, getModelForClass } from "@typegoose/typegoose";
import { Voucher } from "./Voucher";

@ObjectType()
export class Order {
    @Field()
    id: string;

    @Field(() => Voucher)
    @Property({
        type: Voucher,
        _id: false
    })
    voucher: Voucher;

    @Field()
    @Property()
    quantity: number;

    @Field(() => Buyer)
    @Property({
        type: Buyer,
        _id: false
    })
    buyer: Buyer;
}

export const OrderModel = getModelForClass(Order);