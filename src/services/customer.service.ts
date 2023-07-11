import { Injectable, Body } from '@nestjs/common';
import { Customer } from '../types/customer';
import { HttpService } from '@nestjs/axios/dist';
import { AxiosResponse, AxiosError } from 'axios';
import { Observable, firstValueFrom, catchError } from 'rxjs';

@Injectable()
export class CustomerService {
    constructor(private readonly httpService: HttpService) {}

    async updateCustomer(customer: Customer): Promise<Customer> {
        const updateRoute = "idk";
            const { data } = await firstValueFrom(this.httpService.patch(updateRoute, {customer}).pipe(catchError((error: AxiosError) => {
                console.error(error.response.data);
                throw error;
              })))
            return data;
    }

    async createCustomer(customer: Customer): Promise<Customer> {
        const createRoute = "idk";
        const { data } = await firstValueFrom(this.httpService.post(createRoute, {customer}).pipe(catchError((error: AxiosError) => {
            console.error(error.response.data);
            throw error;
          })))
        return data;
    }

    async deleteCustomer(id: string): Promise<boolean> {
        const deleteRoute = "idk";
        const { data } = await firstValueFrom(this.httpService.post(deleteRoute, {id}).pipe(catchError((error: AxiosError) => {
            console.error(error.response.data);
            throw error;
          })))
        return data;
    }

    async getCustomerById(id: string): Promise<Customer> {
        const getByIdRoute = "idk";
        const { data } = await firstValueFrom(this.httpService.get(getByIdRoute, {data: {id}}).pipe(catchError((error: AxiosError) => {
            console.error(error.response.data);
            throw error;
          })))
        return data;
    }
    
    async getCustomerByName(id: string): Promise<Customer> {
        const getByNameRoute = "idk";
        const { data } = await firstValueFrom(this.httpService.get(getByNameRoute,{data: {id}}).pipe(catchError((error: AxiosError) => {
            console.error(error.response.data);
            throw error;
          })))
        return data;
    }
}
