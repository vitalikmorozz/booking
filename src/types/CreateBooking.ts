import { InputType, Field } from "type-graphql";
import { CreateTimeSlot } from './CreateApartment';
import { IsString, IsEmail, ValidateNested } from 'class-validator';
import { CreateApartmentType } from "./CreateApartment";

@InputType()
export class CreateBuyerType {
    @IsString()
    @Field()
    firstName: string;

    @IsString()
    @Field()
    lastName: string;

    @IsEmail()
    @Field()
    email: string;
}

@InputType()
export class CreateBookingType {
    @IsString()
    @Field()
    apartment_id: string;

    @ValidateNested()
    @Field(() => CreateTimeSlot)
    selectedTimeSlot: CreateTimeSlot

    @ValidateNested()
    @Field(() => CreateBuyerType)
    buyer: CreateBuyerType;
}
