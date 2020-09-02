import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { BookingService } from "../services/BookingService";
import { Booking } from "../entities/Booking";
import { CreateBookingType } from "../types/CreateBooking";
import { UpdateBookingType } from "../types/UpdateBooking";

@Resolver()
export class BookingResolver {
    constructor(private readonly bookingService = new BookingService()) { }

    @Query(() => [Booking], { name: 'bookings' })
    async getAll() {
        const data = await this.bookingService.findAll();
        return data;
    }

    @Query(() => Booking, { name: 'booking' })
    async getOne(@Arg('id') id: string) {
        return await this.bookingService.findOne(id);
    }

    @Mutation(() => Booking, { name: 'createBooking' })
    async create(@Arg('booking') createBookingData: CreateBookingType) {
        return this.bookingService.create(createBookingData);
    }

    @Mutation(() => Booking, { name: 'updateBooking' })
    async updateOne(@Arg('id') id: string, @Arg('booking') updateBookingData: UpdateBookingType) {
        return this.bookingService.updateOne(id, updateBookingData);
    }

    @Mutation(() => Booking, { name: 'deleteBooking' })
    async deleteOne(@Arg('id') id: string) {
        return this.bookingService.deleteOne(id);
    }
}