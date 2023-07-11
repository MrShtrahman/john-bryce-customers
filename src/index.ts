import { connect } from 'mongoose';

const uri = 'mongodb+srv://m001-student:SWdyWD0uSWhiKg3J@sandbox.wqxih.mongodb.net/customers';

(async () => {
    try {
        await connect(uri);
        console.info('connected to db :)');
    } catch (error) {
        console.error('Cannot connect to DB: ', error.message)
    }
})();



interface Customer {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: Address;
  paymentMethod: PaymentMethod;
  isConfirmed: boolean;
  createdAt: Date;
}

interface Address {
    street: string,
    city: string,
    state: string,
    postalCode: string
}

enum PaymentMethod {
    credit_card = 'credit_card',
    debit_card = 'debit_card',
    paypal = 'paypal',
    cash_on_delivery = 'cash_on_delivery',
    bit = 'bit',
    paybox = 'paybox',
    gift_card = 'gift_card',
    gold_bars = 'gold_bars'
}

export class CustomerService {
  private customers: Customer[];
  
  constructor() {
    this.customers = [];
  }
  
  // Create a new customer
  createCustomer(customer: Customer): Customer {
    // return newCustomer;
  }
  
  // Read a single customer by ID
  getCustomerById(id: string): Customer | undefined {
    // return 
  }
  
  // Update an existing customer's details
  updateCustomer(customer: Customer): Customer | undefined {
    const customer = this.getCustomerById(id);
    
    if (customer) {
      customer.name = name;
      customer.email = email;
      return customer;
    }
    
    return undefined;
  }
  
  // Remove a customer
  removeCustomer(id: number): boolean {
    const index = this.customers.findIndex(customer => customer.id === id);
    
    if (index !== -1) {
      this.customers.splice(index, 1);
      return true;
    }
    
    return false;
  }
}

// Example usage
const customerService = new CustomerService();

// Create a new customer
const john: Customer = { firstName: "Oren", lastName: "Maya", email: "orenmaya@com", phone: "1111", 
    address: { street: "Bney Ayish", city: "Netanya", state: "Israel", postalCode: "1111" }, 
    paymentMethod: PaymentMethod.bit, isConfirmed: true, createdAt: new Date() };
const newCustomer = customerService.createCustomer(john);
console.log("Created customer:", newCustomer);

// Read a single customer by ID
const foundCustomer = customerService.getCustomerById("1234");
console.log("Found customer:", foundCustomer);

// Update a customer
const updatedCustomer = customerService.updateCustomer(1, "John Smith", "john.smith@example.com");
console.log("Updated customer:", updatedCustomer);

// Remove a customer
const isRemoved = customerService.removeCustomer(1);
console.log("Is removed:", isRemoved);