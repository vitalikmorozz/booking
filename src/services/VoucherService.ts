import { VoucherModel } from "../entities/Voucher";
import { CreateVoucherType } from "../types/CreateVoucher";
import { UpdateVoucherType } from "../types/UpdateVoucher";

export class VoucherService {
    constructor(private readonly voucherModel = VoucherModel) { }

    async findAll() {
        return this.voucherModel.find({});
    }

    async findOne(id: string) {
        return this.voucherModel.findById(id);
    }

    async create(createVoucherData: CreateVoucherType) {
        const newVoucher = new this.voucherModel(createVoucherData);
        return await newVoucher.save();
    }

    async updateOne(id: string, updateVoucherData: UpdateVoucherType) {
        await this.voucherModel.findByIdAndUpdate(id, updateVoucherData);
        return await this.voucherModel.findById(id);
    }

    async deleteOne(id: string) {
        return this.voucherModel.findByIdAndDelete(id);
    }
}