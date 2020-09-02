import { ObjectType, Field } from "type-graphql";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";

@ObjectType()
export class TimeSlot {
    @Field(() => Date)
    @Property()
    dateFrom: Date;

    @Field(() => Date)
    @Property()
    dateTo: Date;

    @Field()
    @Property()
    isAvailable: boolean;
}

@ObjectType()
export class Apartment {
    @Field()
    id: string;

    @Field()
    @Property()
    name: string;

    @Field()
    @Property()
    description: string;

    @Field()
    @Property()
    imageUrl: string;

    @Field()
    @Property()
    price: number;

    @Field()
    @Property()
    roomsNumber: number;

    @Field(() => [TimeSlot])
    @Property({
        type: TimeSlot,
    })
    timeSlots: TimeSlot[];
}

export const ApartmentModel = getModelForClass(Apartment);

