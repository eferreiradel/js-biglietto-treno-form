let userKm = 10;
let userAge = "5";

const basePrice = 1 * userKm;

// minor 12 discount
let minorDiscount = (basePrice / 100) * 20;
minorDiscount.toFixed(2);

// over 65 discount
let seniorDiscount = (basePrice / 100) * 40;
seniorDiscount.toFixed(2);

if (userAge <= 12) {
  console.log(basePrice - minorDiscount);
} else if (userAge >= 65) {
  console.log(basePrice - seniorDiscount);
} else {
  console.log(basePrice);
}
