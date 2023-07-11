import { Controller, Get, Patch, Post, Delete, Body } from '@nestjs/common';
import { ICustomer } from './schema';
import { CustomerService } from './services/customer.service';

@Controller()
export class AppController {
  constructor(private readonly customerService: CustomerService) {}

    @Patch("/Update")
    async updateCustomer(@Body() customer: ICustomer): Promise<ICustomer> {
        return await this.customerService.updateCustomer(customer);
    }
  
    @Get("/GetById")
    async getCustomerById(@Body() id: string): Promise<ICustomer> {
        return await this.customerService.getCustomerById(id);
    }

    @Get("/GetByName")
    async getCustomerByName(@Body() name: string): Promise<ICustomer> {
        return await this.customerService.getCustomerById(name);
    }

    @Post("/Create")
    async createCustomer(@Body() customer: ICustomer): Promise<ICustomer> {
        return await this.customerService.createCustomer(customer);
    }

    @Delete("/Delete")
    async deleteCustomer(@Body() customer: ICustomer): Promise<ICustomer> {
        return await this.customerService.createCustomer(customer);
    }
}
