import { OrderModel } from "../entities/Order";
import { CreateOrderType } from "../types/CreateOrder";
import { UpdateOrderType } from "../types/UpdateOrder";

export class OrderService {
    constructor(private readonly orderModel = OrderModel) { }

    async findAll() {
        return this.orderModel.find({});
    }

    async findOne(id: string) {
        return this.orderModel.findById(id);
    }

    async create(createOrderData: CreateOrderType) {
        const newApartment = new this.orderModel(createOrderData);
        return await newApartment.save();
    }

    async updateOne(id: string, updateOrderData: UpdateOrderType) {
        await this.orderModel.findByIdAndUpdate(id, updateOrderData);
        return await this.orderModel.findById(id);
    }

    async deleteOne(id: string) {
        return this.orderModel.findByIdAndDelete(id);
    }
}