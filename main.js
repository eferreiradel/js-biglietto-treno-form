let userKm = 15;
let userAge = 45;

const basePrice = 0.24 * userKm;

// minor 12 discount
let minorDiscount = (basePrice / 100) * 20;

// over 65 discount
let seniorDiscount = (basePrice / 100) * 40;

if (userAge <= 12) {
  console.log(basePrice - minorDiscount.toFixed(2));
} else if (userAge >= 65) {
  console.log(basePrice - seniorDiscount.toFixed(2));
} else {
  console.log(basePrice.toFixed(2));
}
