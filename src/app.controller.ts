import { Controller, Get, Patch, Post, Delete, Body } from '@nestjs/common';
import { ICustomer } from './schema';

import { createCustomer, deleteCustomer, getCustomerById, getCustomerByName, updateCustomer } from './DAL';


@Controller()
export class AppController {
  constructor() {}

    @Patch("/Update")
    async updateCustomer(@Body() customer: ICustomer): Promise<boolean> {
        return await updateCustomer(customer);
    }
  
    @Get("/GetById")
    async getCustomerById(@Body() req: { id: string }): Promise<ICustomer> {
        return await getCustomerById(req.id);
    }

    @Get("/GetByName")
    async getCustomerByName(@Body() req: { firstName: string, lastName: string }): Promise<ICustomer[]> {
        return await getCustomerByName(req.firstName, req.lastName);
    }

    @Post("/Create")
    async createCustomer(@Body() customer: ICustomer): Promise<boolean> {
        return await createCustomer(customer);
    }

    @Delete("/Delete")
    async deleteCustomer(@Body() req: { id: string }): Promise<boolean> {
        return await deleteCustomer(req.id);
    }
}
