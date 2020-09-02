import { Resolver, Query, Mutation, Arg, FieldResolver, Root } from "type-graphql";
import { BookingService } from "../services/BookingService";
import { Booking } from "../entities/Booking";
import { CreateBookingType } from "../types/CreateBooking";
import { UpdateBookingType } from "../types/UpdateBooking";
import { ApartmentService } from "../services/ApartmentService";

@Resolver(() => Booking)
export class BookingResolver {
    constructor(
        private readonly bookingService = new BookingService(),
        private readonly apartmentService = new ApartmentService()
    ) { }

    @Query(() => [Booking], { name: 'bookings' })
    async getAll() {
        const data = await this.bookingService.findAll();
        return data;
    }

    @Query(() => Booking, { name: 'booking' })
    async getOne(@Arg('id') id: string) {
        const data = await this.bookingService.findOne(id)
        return data;
    }

    @FieldResolver()
    async apartment(@Root() booking: Booking) {
        //@ts-ignore
        return await this.apartmentService.findOne(booking._doc.apartment_id);
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