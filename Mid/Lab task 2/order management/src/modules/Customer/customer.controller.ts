
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { CustomerService } from "./customer.service";
import {
  CreateCustomerDto,
  UpdateCustomerDto,
} from "./dto/customer.dto";

@Controller("customers")
export class CustomerController {
  constructor(
    private readonly customerService: CustomerService,
  ) {}

  @Get()
  async getCustomers() {
    return await this.customerService.getCustomers();
  }

  @Get(":id")
  async getCustomer(@Param("id") id: string) {
    return await this.customerService.getCustomer(id);
  }

  @Post()
  async createCustomer(@Body() dto: CreateCustomerDto) {
    return await this.customerService.createCustomer(dto);
  }

  @Patch(":id")
  async updateCustomer(
    @Param("id") id: string,
    @Body() dto: UpdateCustomerDto,
  ) {
    return await this.customerService.updateCustomer(id, dto);
  }

  @Delete(":id")
  async deleteCustomer(@Param("id") id: string) {
    return await this.customerService.deleteCustomer(id);
  }
}
