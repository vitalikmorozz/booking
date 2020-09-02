import { InputType, Field } from "type-graphql";
import { IsString, ValidateNested, IsDate, IsBoolean, IsNumber } from 'class-validator';

@InputType()
class CreateTimeSlot {
    @IsDate()
    @Field(() => Date)
    dateFrom: Date;

    @IsDate()
    @Field(() => Date)
    dateTo: Date;

    @IsBoolean()
    @Field()
    isAvailable: boolean;
}

@InputType()
export class CreateApartmentType {
    @IsString()
    @Field()
    name: string;

    @IsString()
    @Field()
    description: string;

    @IsString()
    @Field()
    imageUrl: string;

    @IsNumber()
    @Field()
    price: number;

    @IsNumber()
    @Field()
    roomsNumber: number;

    @ValidateNested({ each: true })
    @Field(() => [CreateTimeSlot])
    timeSlots: CreateTimeSlot[];
}

