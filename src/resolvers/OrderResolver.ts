import { Resolver, Query, Arg, Mutation, FieldResolver } from "type-graphql";
import { OrderService } from "../services/OrderService";
import { Order } from "../entities/Order";
import { CreateOrderType } from "../types/CreateOrder";
import { UpdateOrderType } from "../types/UpdateOrder";

@Resolver()
export class OrderResolver {
    constructor(private readonly orderService: OrderService) { }

    @Query(() => [Order], { name: 'orders' })
    async getAll() {
        const data = await this.orderService.findAll();
        return data;
    }

    @Query(() => Order, { name: 'order' })
    async getOne(@Arg('id') id: string) {
        return await this.orderService.findOne(id);
    }

    @Mutation(() => Order, { name: 'createOrder' })
    async create(@Arg('order') createOrderData: CreateOrderType) {
        return this.orderService.create(createOrderData);
    }

    @Mutation(() => Order, { name: 'updateOrder' })
    async updateOne(@Arg('id') id: string, @Arg('order') updateOrderData: UpdateOrderType) {
        return this.orderService.updateOne(id, updateOrderData);
    }

    @Mutation(() => Order, { name: 'deleteOrder' })
    async deleteOne(@Arg('id') id: string) {
        return this.orderService.deleteOne(id);
    }
}