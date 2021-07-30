import Coupon from "./Coupon";
import Cpf from "./Cpf";
import OrderItem from "./OrderItem";
import Shipping from "./Shipping";

export default class Order {
    cpf: Cpf;
    items: OrderItem[];
    coupon: Coupon | undefined;
    shipping: Shipping;

    constructor (cpf: string, height: number, length: number, depth: number, weight: number, distance: number) {
        this.cpf = new Cpf(cpf);
        this.shipping = new Shipping(height, length, depth, weight, distance)
        this.items = [];
    }

    addItem (description: string, price: number, quantity: number) {
        this.items.push(new OrderItem(description, price, quantity));
    }

    addCoupon (coupon: Coupon) {
        this.coupon = coupon;
    }

    getTotal () {
        let total = 0;
        for (const orderItem of this.items) {
            total += orderItem.getTotal();
        }
        if (this.coupon) {
            total -= (total * this.coupon.percentage)/100;
        }
        return total + this.shipping.getShippingValue();
    }
}
