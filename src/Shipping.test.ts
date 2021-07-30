import Shipping from "./Shipping";

test('Deve calcular o valor do frete com base na distância (analisando o CEP de origem e destino), as dimensões (altura, largura e profundidade em cm) e o peso dos produtos (em kg)', () => {
   
    const shippingCamera = new Shipping(20, 15, 10, 1, 1000)
    const shippingValueCamera = shippingCamera.getShippingValue()

    expect(shippingValueCamera).toBe(10)

    const shippingGuitar = new Shipping(100, 30, 10, 3, 1000)
    const shippingValueGuitar = shippingGuitar.getShippingValue()

    expect(shippingValueGuitar).toBe(30)

    const shippingFridge = new Shipping(200, 100, 50, 40, 1000)
    const shippingValueFridge = shippingFridge.getShippingValue()

    expect(shippingValueFridge).toBe(400)
});