import { Field, InputType } from "type-graphql";
import { UpdateBuyerType } from "./UpdateBooking";
import { UpdateVoucherType } from "./UpdateVoucher";
import { ValidateNested, IsNumber, IsOptional, IsString } from "class-validator";

@InputType()
export class UpdateOrderType {
    @IsOptional()
    @IsString()
    @Field({ nullable: true })
    voucher_id: string;

    @IsOptional()
    @IsNumber()
    @Field({ nullable: true })
    quantity: number;

    @IsOptional()
    @ValidateNested()
    @Field(() => UpdateBuyerType, { nullable: true })
    buyer: UpdateBuyerType;
}
