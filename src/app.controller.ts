import { Controller, Get, Patch, Post, Delete, Body } from '@nestjs/common';
import { Customer } from './types/customer';
import { CustomerService } from './services/customer.service';

@Controller()
export class AppController {
  constructor(private readonly customerService: CustomerService) {}

    @Patch()
    async updateCustomer(@Body() customer: Customer): Promise<Customer> {
        return await this.customerService.updateCustomer(customer);
    }
  
    @Get()
    async getCustomerById(@Body() id: string): Promise<Customer> {
        return await this.customerService.getCustomerById(id);
    }

    @Get()
    async getCustomerName(@Body() name: string): Promise<Customer> {
        return await this.customerService.getCustomerById(name);
    }

    @Post()
    async createCustomer(@Body() customer: Customer): Promise<Customer> {
        return await this.customerService.createCustomer(customer);
    }

    @Delete()
    async deleteCustomer(@Body() customer: Customer): Promise<Customer> {
        return await this.customerService.createCustomer(customer);
    }
}
