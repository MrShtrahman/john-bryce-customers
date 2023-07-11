import express, { Request, Response } from 'express';
import { CustomerService } from '../index';

const app = express();
const port = 3000;

let service: CustomerService = new CustomerService();

// Endpoint for getting a Customer by id
app.get('/customer/:id', (req: Request, res: Response) => {
  res.send(service.getCustomerById(req.params.id));
});

// Endpoint for creating a new Customer
app.post('/customer', (req: Request, res: Response) => {
  res.send(service.createCustomer(req.params.customer));
});

// Endpoint for updating an existing Customer
app.patch('/customer', (req: Request, res: Response) => {
    res.send(service.updateCustomer(req.params.customer));
});

// Endpoint for deleting an existing Customer
app.delete('/customer', (req: Request, res: Response) => {
    res.send(service.removeCustomer(req.params.id));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});