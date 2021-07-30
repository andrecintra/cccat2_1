export default class Coupon {
    code: string;
    percentage: number;
    validity: Date | undefined;

    constructor (code: string, percentage: number, validity?: Date) {
        this.code = code;
        this.percentage = percentage;
        this.validity = validity
    }

    isCouponValid() {
        return this.validity && this.validity >= new Date()
    }
}
