import { Resolver, Query, Arg, Mutation } from "type-graphql";
import { VoucherService } from "../services/VoucherService";
import { Voucher } from "../entities/Voucher";
import { CreateVoucherType } from "../types/CreateVoucher";
import { UpdateVoucherType } from "../types/UpdateVoucher";

@Resolver()
export class VoucherResolver {
    constructor(private readonly voucherService = new VoucherService()) { }

    @Query(() => [Voucher], { name: 'vouchers' })
    async getAll() {
        const data = await this.voucherService.findAll();
        return data;
    }

    @Query(() => Voucher, { name: 'voucher' })
    async getOne(@Arg('id') id: string) {
        return await this.voucherService.findOne(id);
    }

    @Mutation(() => Voucher, { name: 'createVoucher' })
    async create(@Arg('voucher') createVoucherData: CreateVoucherType) {
        return this.voucherService.create(createVoucherData);
    }

    @Mutation(() => Voucher, { name: 'updateVoucher' })
    async updateOne(@Arg('id') id: string, @Arg('voucher') updateVoucherData: UpdateVoucherType) {
        return this.voucherService.updateOne(id, updateVoucherData);
    }

    @Mutation(() => Voucher, { name: 'deleteVoucher' })
    async deleteOne(@Arg('id') id: string) {
        return this.voucherService.deleteOne(id);
    }
}