import { connect } from 'mongoose';
import { createCustomer, updateCustomer, deleteCustomer, getCustomerById, getCustomerByName } from '../src/DAL';
import { ICustomer } from './schema';

const uri = 'mongodb+srv://m001-student:SWdyWD0uSWhiKg3J@sandbox.wqxih.mongodb.net/customers';

(async () => {
    try {
        await connect(uri);
        console.info('connected to db :)');
    } catch (error) {
        console.error('Cannot connect to DB: ', error.message)
    }
})();

export class CustomerService {

  constructor() {

  }
  
  // Create a new customer
  createCustomer_callDAL(customer: ICustomer) {
    createCustomer(customer);
  }
  
  // Read a single customer by ID
  async getCustomerById_callDAL(id: string): Promise<ICustomer> {
    return await getCustomerById(id);
  }

  // Read a single customer by name
  async getCustomerByName_callDAL(firstName: string, lastName: string): Promise<Array<ICustomer>> {
    return await getCustomerByName(firstName, lastName);
  }
  
  // Update an existing customer's details
  updateCustomer_callDAL(customer: ICustomer) {
    updateCustomer(customer);
  }
  
  // Remove a customer
  removeCustomer_callDAL(id: string) {
    deleteCustomer(id);
  }
};