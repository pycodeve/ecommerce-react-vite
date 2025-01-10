/**
 * This function calculates total price of a new order
 * @param {Array} products cartProducts
 * @returns {Number} 
 */
export const totalPrice = (products) => {
    let acc = 0;
    products.forEach(product => acc += product.price)
    return acc;
}