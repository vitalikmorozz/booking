import { BookingModel } from "../entities/Booking";
import { CreateBookingType } from "../types/CreateBooking";
import { UpdateBookingType } from "../types/UpdateBooking";

export class BookingService {
    constructor(private readonly bookingModel = BookingModel) { }

    async findAll() {
        return this.bookingModel.find({});
    }

    async findOne(id: string) {
        return this.bookingModel.findById(id);
    }

    async create(createBookingData: CreateBookingType) {
        const newBooking = new this.bookingModel(createBookingData);
        return await newBooking.save();
    }

    async updateOne(id: string, updateBookingData: UpdateBookingType) {
        await this.bookingModel.findByIdAndUpdate(id, updateBookingData);
        return await this.bookingModel.findById(id);
    }

    async deleteOne(id: string) {
        return this.bookingModel.findByIdAndDelete(id);
    }
}