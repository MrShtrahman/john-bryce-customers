import { PaymentMethod } from "src/enums/payment-methods";

export interface Customer {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    paymentMethod: PaymentMethod;
    isConfirmed: boolean
}