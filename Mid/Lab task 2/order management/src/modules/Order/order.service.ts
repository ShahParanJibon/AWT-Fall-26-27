
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Order } from "./entities/order.entity";
import { Repository } from "typeorm";
import {
  CreateOrderDto,
  UpdateOrderDto,
} from "./dto/order.dto";

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async getOrders() {
    try {
      const orders = await this.orderRepository.find();
      return orders;
    } catch (error) {
      throw error;
    }
  }

  async getOrder(id: string) {
    try {
      const order = await this.orderRepository.findOne({
        where: { id: id },
      });

      if (!order) {
        throw new NotFoundException("Order with ID not found");
      }

      return order;
    } catch (error) {
      throw error;
    }
  }

  async createOrder(dto: CreateOrderDto) {
    try {
      const response = this.orderRepository.create(dto);
      return await this.orderRepository.save(response);
    } catch (error) {
      throw error;
    }
  }

  async updateOrder(id: string, dto: UpdateOrderDto) {
    try {
      const order = await this.orderRepository.findOne({
        where: { id: id },
      });

      if (!order) {
        throw new NotFoundException("Order with ID not found");
      }

      Object.assign(order, dto);
      return await this.orderRepository.save(order);
    } catch (error) {
      throw error;
    }
  }

  async deleteOrder(id: string) {
    try {
      const order = await this.orderRepository.findOne({
        where: { id: id },
      });

      if (!order) {
        throw new NotFoundException("Order with ID not found");
      }

      return await this.orderRepository.delete({ id: id });
    } catch (error) {
      throw error;
    }
  }
}
