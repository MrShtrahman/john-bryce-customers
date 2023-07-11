import { Injectable, Body } from '@nestjs/common';
import { ICustomer } from 'src/schema';
import { AxiosResponse, AxiosError } from 'axios';
import { Observable, firstValueFrom, catchError } from 'rxjs';
import {HttpService} from "@nestjs/axios";
import { Axios } from "axios"
@Injectable()
export class CustomerService {
    constructor(private readonly httpService: HttpService) {}

    async updateCustomer(customer: ICustomer): Promise<ICustomer> {
        const updateRoute = "idk";
            const { data } = await firstValueFrom(this.httpService.patch(updateRoute, {customer}).pipe(catchError((error: AxiosError) => {
                console.error(error.response.data);
                throw error;
              })))
            return data;
    }

    async createCustomer(customer: ICustomer): Promise<ICustomer> {
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

    async getCustomerById(id: string): Promise<ICustomer> {
        const getByIdRoute = "idk";
        const { data } = await firstValueFrom(this.httpService.get(getByIdRoute, {data: {id}}).pipe(catchError((error: AxiosError) => {
            console.error(error.response.data);
            throw error;
          })))
        return data;
    }
    
    async getCustomerByName(id: string): Promise<ICustomer> {
        const getByNameRoute = "idk";
        const { data } = await firstValueFrom(this.httpService.get(getByNameRoute,{data: {id}}).pipe(catchError((error: AxiosError) => {
            console.error(error.response.data);
            throw error;
          })))
        return data;
    }
}
