import { Schema, model } from 'mongoose';

export interface ICustomer {
    _id?: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address?: Address;
    paymentMethod: PaymentMethod;
    isConfirmed: boolean;
    createdAt?: Date;
  }
  
export interface Address {
    street: string,
    city: string,
    state: string,
    postalCode: string
}

export enum PaymentMethod {
    credit_card = 'credit_card',
    debit_card = 'debit_card',
    paypal = 'paypal',
    cash_on_delivery = 'cash_on_delivery',
    bit = 'bit',
    paybox = 'paybox',
    gift_card = 'gift_card',
    gold_bars = 'gold_bars'
}

export const customerSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    street: String,
    city: String,
    state: String,
    postalCode: String
  },
  paymentMethod: {
    type: String,
    enum: Object.values(PaymentMethod),
    required: true
  },
  isConfirmed: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const Customer = model('Customer', customerSchema);