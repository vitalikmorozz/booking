import { ObjectType, Field } from "type-graphql";
import { Apartment, TimeSlot } from "./Apartment";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";

@ObjectType()
export class Buyer {
    @Property()
    @Field()
    firstName: string;

    @Property()
    @Field()
    lastName: string;

    @Property()
    @Field()
    email: string;
}

@ObjectType()
export class Booking {
    @Field()
    id: string;

    @Field(() => Apartment)
    @Property({
        type: Apartment,
        _id: false
    })
    apartment: Apartment;

    @Field(() => TimeSlot)
    @Property({
        type: TimeSlot,
        _id: false
    })
    selectedTimeSlot: TimeSlot

    @Field(() => Buyer)
    @Property({
        type: Buyer,
        _id: false
    })
    buyer: Buyer;
}

export const BookingModel = getModelForClass(Booking);