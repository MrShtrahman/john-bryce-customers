const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader');
const express = require('express');
const bodyParser = require('body-parser');

// Load the gRPC proto file
const protoPath = 'protos/customer.proto';
const packageDefinition = protoLoader.loadSync(protoPath);
const proto = grpc.loadPackageDefinition(packageDefinition).myapp;

// Create the gRPC client
const coreAddress = 'localhost:50051'; // Replace with the address of your core project
const coreClient = new proto.CustomerService(coreAddress, grpc.credentials.createInsecure());

// Create the Express app
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

  // Update customer endpoint
  app.put('/customers/:id', (req, res) => {
    const { id } = req.params;
    const { name, address, phoneNumber, email } = req.body;
  
    const updateRequest = {
      id,
      name,
      address,
      phoneNumber,
      email,
    };
  
    coreClient.updateCustomer(updateRequest, (error, response) => {
      if (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
        return;
      }
      res.send(response);
    });
  });

  app.delete('/customers/:id', (req, res) => {
    const { id } = req.params;
  
    const deleteRequest = {
      id,
    };
  
    coreClient.deleteCustomer(deleteRequest, (error, response) => {
      if (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
        return;
      }
  
      // Check the success field in the response to determine if the delete operation was successful
      if (response.success) {
        res.send('Customer deleted successfully');
      } else {
        res.status(500).send('Failed to delete customer');
      }
    });
  });
  
  
  // Start the Express server
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });