import { InputType, Field } from "type-graphql";
import { IsString, IsEmail, ValidateNested, IsOptional } from 'class-validator';
import { UpdateTimeSlot, UpdateApartmentType } from "./UpdateApartment";

@InputType()
export class UpdateBuyerType {
    @IsOptional()
    @IsString()
    @Field({ nullable: true })
    firstName: string;

    @IsOptional()
    @IsString()
    @Field({ nullable: true })
    lastName: string;

    @IsOptional()
    @IsEmail()
    @Field({ nullable: true })
    email: string;
}

@InputType()
export class UpdateBookingType {
    @IsOptional()
    @IsString()
    @Field({ nullable: true })
    apartment_id: string;

    @IsOptional()
    @ValidateNested()
    @Field(() => UpdateTimeSlot, { nullable: true })
    selectedTimeSlot: UpdateTimeSlot

    @IsOptional()
    @ValidateNested()
    @Field(() => UpdateBuyerType, { nullable: true })
    buyer: UpdateBuyerType;
}
