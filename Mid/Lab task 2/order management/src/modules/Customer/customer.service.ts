
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Customer } from "./entities/customer.entity";
import { Repository } from "typeorm";
import {
  CreateCustomerDto,
  UpdateCustomerDto,
} from "./dto/customer.dto";

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  async getCustomers() {
    try {
      const customers = await this.customerRepository.find();
      return customers;
    } catch (error) {
      throw error;
    }
  }

  async getCustomer(id: string) {
    try {
      const customer = await this.customerRepository.findOne({
        where: { id: id },
      });

      if (!customer) {
        throw new NotFoundException("Customer with ID not found");
      }

      return customer;
    } catch (error) {
      throw error;
    }
  }

  async createCustomer(dto: CreateCustomerDto) {
    try {
      const response = this.customerRepository.create(dto);
      return await this.customerRepository.save(response);
    } catch (error) {
      throw error;
    }
  }

  async updateCustomer(id: string, dto: UpdateCustomerDto) {
    try {
      const customer = await this.customerRepository.findOne({
        where: { id: id },
      });

      if (!customer) {
        throw new NotFoundException("Customer with ID not found");
      }

      Object.assign(customer, dto);
      return await this.customerRepository.save(customer);
    } catch (error) {
      throw error;
    }
  }

  async deleteCustomer(id: string) {
    try {
      const customer = await this.customerRepository.findOne({
        where: { id: id },
      });

      if (!customer) {
        throw new NotFoundException("Customer with ID not found");
      }

      return await this.customerRepository.delete({ id: id });
    } catch (error) {
      throw error;
    }
  }
}
