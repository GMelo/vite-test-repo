// math.js
export function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

export function calculateDiscount(price, discountPercentage) {
  if (price < 0 || discountPercentage < 0 || discountPercentage > 100) {
    throw new Error('Invalid price or discount');
  }
  return price - (price * (discountPercentage / 100));
}
