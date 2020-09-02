import { InputType, Field } from "type-graphql";
import { IsString, IsEmail, ValidateNested, IsOptional } from 'class-validator';
import { UpdateTimeSlot, UpdateApartmentType } from "./UpdateApartment";

@InputType()
export class UpdateBuyerType {
    @IsOptional()
    @IsString()
    @Field()
    firstName: string;

    @IsOptional()
    @IsString()
    @Field()
    lastName: string;

    @IsOptional()
    @IsEmail()
    @Field()
    email: string;
}

@InputType()
export class UpdateBookingType {
    @IsOptional()
    @ValidateNested()
    @Field(() => UpdateApartmentType)
    apartment: UpdateApartmentType;

    @IsOptional()
    @ValidateNested()
    @Field(() => UpdateTimeSlot)
    selectedTimeSlot: UpdateTimeSlot

    @IsOptional()
    @ValidateNested()
    @Field(() => UpdateBuyerType)
    buyer: UpdateBuyerType;
}
