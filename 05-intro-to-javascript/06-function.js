// Buat function-nya terlebih dahulu
function sayHi(name) {
  return "Hiiiiii" + " " + name;
}

// Panggil function-nya
console.log(sayHi("John"));
console.log(sayHi("Irsyad"));
console.log("Hiiiii");

/*
function functionName(parameter) {
  code to be executed
}

functionName(argument)
*/

/* --------------------------------- EXAMPLE -------------------------------- */
console.log(1_000_000 - 50_000 - (1_000_000 * 10) / 100);
console.log(5_000_000 - 10_000 - (1_000_000 * 5) / 100);
console.log(5_000_000 - 10_000 - (1_000_000 * 5) / 100);
console.log(5_000_000 - 10_000 - (1_000_000 * 5) / 100);
console.log(5_000_000 - 10_000 - (1_000_000 * 5) / 100);
console.log(5_000_000 - 10_000 - (1_000_000 * 5) / 100);

function calculateDiscount(originalPrice, coupunNominal, discountNominal) {
  return (
    originalPrice - coupunNominal - (originalPrice * discountNominal) / 100
  );
}

console.log(calculateDiscount(5000, 1000, 15));
console.log(calculateDiscount(15_000, 0, 0));

/* ----------------------------- LET VS FUNCTION ---------------------------- */
let originalPrice = 5000;
let coupunNominal = 1000;
let discountNominal = 15;
let result1 =
  originalPrice - coupunNominal - (originalPrice * discountNominal) / 100;

console.log(result1);

originalPrice = 15_000;
coupunNominal = 0;
discountNominal = 0;
let result2 =
  originalPrice - coupunNominal - (originalPrice * discountNominal) / 100;

console.log(result2);

/* ---------------------------------- NOTES --------------------------------- */
function additional(number1, number2) {
  const result = number1 + number2;

  return result;
}

console.log(additional(10, 20));
