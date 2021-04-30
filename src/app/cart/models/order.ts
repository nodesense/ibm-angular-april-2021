// order.ts

import { CartItem } from "./cart-item";

export class Order {
    public name:string;
    public email: string;
    public items: CartItem[];
}