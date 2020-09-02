import { Field, InputType } from "type-graphql";
import { UpdateBuyerType } from "./UpdateBooking";
import { UpdateVoucherType } from "./UpdateVoucher";
import { ValidateNested, IsNumber, IsOptional } from "class-validator";

@InputType()
export class UpdateOrderType {
    @IsOptional()
    @ValidateNested()
    @Field(() => UpdateVoucherType, { nullable: true })
    voucher: UpdateVoucherType;

    @IsOptional()
    @IsNumber()
    @Field({ nullable: true })
    quantity: number;

    @IsOptional()
    @ValidateNested()
    @Field(() => UpdateBuyerType, { nullable: true })
    buyer: UpdateBuyerType;
}
