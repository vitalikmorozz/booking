import { Field, InputType } from "type-graphql";
import { CreateBuyerType } from "./CreateBooking";
import { CreateVoucherType } from "./CreateVoucher";
import { ValidateNested, IsNumber, IsString } from "class-validator";

@InputType()
export class CreateOrderType {
    @IsString()
    @Field()
    voucher_id: string;

    @IsNumber()
    @Field()
    quantity: number;

    @ValidateNested()
    @Field(() => CreateBuyerType)
    buyer: CreateBuyerType;
}
