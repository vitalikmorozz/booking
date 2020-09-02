import { ApartmentModel } from "../entities/Apartment";
import { CreateApartmentType } from "../types/CreateApartment";
import { UpdateApartmentType } from "../types/UpdateApartment";

export class ApartmentService {
    constructor(private readonly apartmentModel = ApartmentModel) { }

    async findAll() {
        return this.apartmentModel.find({});
    }

    async findOne(id: string) {
        return this.apartmentModel.findById(id);
    }

    async create(createApartmentData: CreateApartmentType) {
        const newApartment = new this.apartmentModel(createApartmentData);
        return await newApartment.save();
    }

    async updateOne(id: string, updateApartmentData: UpdateApartmentType) {
        await this.apartmentModel.findByIdAndUpdate(id, updateApartmentData);
        return await this.apartmentModel.findById(id);
    }

    async deleteOne(id: string) {
        return this.apartmentModel.findByIdAndDelete(id);
    }
}