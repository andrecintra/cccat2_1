import Coupon from "./Coupon";
import Order from "./Order"

export default class PlaceOrder {
    coupons: Coupon[];
    orders: Order[];

    DIFFERENCE_IN_DAYS = 1
    shippingDistance: number;

    constructor () {
        let validCouponDate = new Date();
        validCouponDate.setDate(validCouponDate.getDate() + this.DIFFERENCE_IN_DAYS);
        let invalidCouponDate = new Date();
        invalidCouponDate.setDate(invalidCouponDate.getDate() - this.DIFFERENCE_IN_DAYS);
        this.coupons = [
            new Coupon("VALE20", 20, validCouponDate),
            new Coupon("VALE40", 40, invalidCouponDate)
        ];
        this.orders = [];
        this.shippingDistance = 1000
    }

    execute (input: any) {
        const order = new Order(input.cpf, input.height, input.length, input.depth, input.weight, this.shippingDistance);
        for (const item of input.items) {
            order.addItem(item.description, item.price, item.quantity);
        }
        if (input.coupon) {
            const coupon = this.coupons.find(coupon => coupon.code === input.coupon);
            if (coupon?.isCouponValid()) order.addCoupon(coupon);
        }
        const total = order.getTotal();
        this.orders.push(order);
        return {
            total
        };
    }
}
