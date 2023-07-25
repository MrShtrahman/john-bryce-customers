import { Customer, ICustomer } from '../schema';

export const getCustomerById = async (id: string) : Promise<ICustomer> => {
    try {
        console.log('id :>> ', id);
        const customerToFind = await Customer.findById<ICustomer>(id);
        return customerToFind;
    } catch (error) {
        console.error(`Cannot find customer by id ${id}: ${error.message}`)
    }
}

export const getCustomerByName = async (firstName: string, lastName: string): Promise<ICustomer[]> => {
    try {
        const customersToFind = await Customer.find<ICustomer>({ $and: [{ firstName }, { lastName }] });
        return customersToFind;
    } catch (error) {
        console.error(`Cannot find customer by name ${firstName} ${lastName}: ${error.message}`)
    }
}

export const deleteCustomer = async (id: string): Promise<boolean> => {
    try {
        await Customer.findByIdAndDelete(id);
        return true;
    } catch (error) {
        console.error(`Cannot delete customer by id ${id}: ${error.message}`);
        return false;
    }
}

export const createCustomer = async (customer: ICustomer) => {
    const customerToAdd = new Customer(customer);

    try {
        await customerToAdd.save();
        return true;
    } catch (error) {
        console.error(`Cannot save ${customerToAdd.firstName} ${customerToAdd.lastName}: ${error.message}`)
        return false;
    }
}

export const updateCustomer = async (customer: ICustomer): Promise<boolean> => {
    try {
        await Customer.findByIdAndUpdate(customer._id, customer);
        return true;
    } catch (error) {
        console.error(`Cannot update ${customer.firstName} ${customer.lastName}: ${error.message}`);
        return false;
    }
}