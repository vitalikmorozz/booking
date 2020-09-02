import { Resolver, Query, Arg, Mutation } from "type-graphql";
import { ApartmentService } from '../services/ApartmentService';
import { Apartment } from "../entities/Apartment";
import { CreateApartmentType } from "../types/CreateApartment";
import { UpdateApartmentType } from "../types/UpdateApartment";

@Resolver()
export class ApartmentResolver {
    constructor(private readonly apartmentService = new ApartmentService()) { }

    @Query(() => [Apartment], { name: 'apartments' })
    async getAll() {
        const data = await this.apartmentService.findAll();
        return data;
    }

    @Query(() => Apartment, { name: 'apartment' })
    async getOne(@Arg('id') id: string) {
        return await this.apartmentService.findOne(id);
    }

    @Mutation(() => Apartment, { name: 'createApartment' })
    async create(@Arg('apartment') createApartmentData: CreateApartmentType) {
        return this.apartmentService.create(createApartmentData);
    }

    @Mutation(() => Apartment, { name: 'updateApartment' })
    async updateOne(@Arg('id') id: string, @Arg('apartment') updateApartmentData: UpdateApartmentType) {
        return this.apartmentService.updateOne(id, updateApartmentData);
    }

    @Mutation(() => Apartment, { name: 'deleteApartment' })
    async deleteOne(@Arg('id') id: string) {
        return this.apartmentService.deleteOne(id);
    }
}