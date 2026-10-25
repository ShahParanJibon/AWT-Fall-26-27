
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { OrderService } from "./order.service";
import {
  CreateOrderDto,
  UpdateOrderDto,
} from "./dto/order.dto";

@Controller("orders")
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
  ) {}

  @Get()
  async getOrders() {
    return await this.orderService.getOrders();
  }

  @Get(":id")
  async getOrder(@Param("id") id: string) {
    return await this.orderService.getOrder(id);
  }

  @Post()
  async createOrder(@Body() dto: CreateOrderDto) {
    return await this.orderService.createOrder(dto);
  }

  @Patch(":id")
  async updateOrder(
    @Param("id") id: string,
    @Body() dto: UpdateOrderDto,
  ) {
    return await this.orderService.updateOrder(id, dto);
  }

  @Delete(":id")
  async deleteOrder(@Param("id") id: string) {
    return await this.orderService.deleteOrder(id);
  }
}
