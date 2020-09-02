import { Field, InputType } from "type-graphql";
import { CreateBuyerType } from "./CreateBooking";
import { CreateVoucherType } from "./CreateVoucher";
import { ValidateNested, IsNumber } from "class-validator";

@InputType()
export class CreateOrderType {
    @ValidateNested()
    @Field(() => CreateVoucherType)
    voucher: CreateVoucherType;

    @IsNumber()
    @Field()
    quantity: number;

    @ValidateNested()
    @Field(() => CreateBuyerType)
    buyer: CreateBuyerType;
}
