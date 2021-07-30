export default class Shipping {
    height: number
    length: number
    depth: number
    weight: number
    distance: number

    DENSITY_CONST = 100
    MINIMUM_SHIPPING_VALUE = 10
    VOLUME_CONST = 1000000

    constructor (height: number, length: number, depth: number, weight: number, distance: number) {
      this.height = height
      this.length = length
      this.depth = depth
      this.weight = weight
      this.distance = distance
    }

    getShippingValue() {
        const volume = (this.height * this.length * this.depth) / this.VOLUME_CONST
        const density = this.weight / volume
        const shippingValue = this.distance * volume * (density / this.DENSITY_CONST)
        return shippingValue > this.MINIMUM_SHIPPING_VALUE ? shippingValue : this.MINIMUM_SHIPPING_VALUE
    }

   
}
