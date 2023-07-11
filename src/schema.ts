import { Schema, model } from 'mongoose';

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

const customerSchema = new Schema({
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
