import { InputType, Field } from "type-graphql";
import { IsString, ValidateNested, IsDate, IsBoolean, IsOptional, IsNumber } from 'class-validator';

@InputType()
export class UpdateTimeSlot {
    @IsOptional()
    @IsDate()
    @Field(() => Date, { nullable: true })
    dateFrom: Date;

    @IsOptional()
    @IsDate()
    @Field(() => Date, { nullable: true })
    dateTo: Date;

    @IsOptional()
    @IsBoolean()
    @Field({ nullable: true })
    isAvailable: boolean;
}

@InputType()
export class UpdateApartmentType {
    @IsOptional()
    @IsString()
    @Field({ nullable: true })
    name: string;

    @IsOptional()
    @IsString()
    @Field({ nullable: true })
    description: string;

    @IsOptional()
    @IsString()
    @Field({ nullable: true })
    imageUrl: string;

    @IsOptional()
    @IsNumber()
    @Field({ nullable: true })
    price: number;

    @IsOptional()
    @IsNumber()
    @Field({ nullable: true })
    roomsNumber: number;

    @IsOptional()
    @ValidateNested({ each: true })
    @Field(() => [UpdateTimeSlot])
    timeSlots: UpdateTimeSlot[];
}

