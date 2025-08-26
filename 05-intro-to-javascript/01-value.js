/* ------------------------- Value Type / Data Type ------------------------- */
/* ----------------- Primitive Value / Primitive Data Types ----------------- */
// Number
10;
12;
123;
10000;
1_000_000_000_000;
1000000000000;

// String
("1234");
("Hello everybody");
("My age is 30");
("+628789097010");

// Boolean
false;
true;

// Null
null;

// Undefined
undefined;

/* --------------------------- Non Primitive Value -------------------------- */
// Object
const firstName = "Norman";
const lastName = "Ndaru";
const age = 25;
const address = "Bogor";

const userData = {
  address: null, // reguler property
  lastName: "Tanjung", // reguler property
  firstName: "Putri", // reguler property
  age: 28, // reguler property

  sayIdentity: function () {
    "My name is Putri Tanjung and I live in Tendean";
    123;
    null;
    false;

    return 100 + 5;
  }, // method property
};

/*
{
  key: value
}
*/

console.log(age);
console.log(address);
console.log(userData.address);
console.log(userData.firstName);
console.log(userData.sayIdentity());

// Array
const playlist = [
  "Indonesia Raya",
  "Mejikuhibiniu",
  "Garam & Madu",
  "Tabola-bole",
];
console.log(playlist[0]);
console.log(playlist[2]);

/*
[value1, value2, value3]
*/

/* ---------------------------- Check Value Type ---------------------------- */
console.log(typeof 123);
console.log(typeof "abcd");
console.log(typeof null);
console.log(typeof undefined);
console.log("Hello-hello Bandung");
