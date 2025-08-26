/* ------------------------------ Array Method ------------------------------ */
const studentName = ["Joko", "Andi", "Siti", "Aminah"];

// Property length untuk mencari panjang array
console.log(studentName.length);

// Method findIndex untuk mencari index suatu element
const andiIndex = studentName.findIndex(function (value, index) {
  if (value === "Andi") {
    return true;
  }
});

console.log(andiIndex);
console.log(studentName.indexOf("Andi"));

/* ------------------------------ Object Method ----------------------------- */
// key
const people = {
  name: "Christopher",
  age: 100,
  gender: "Male",
};

console.log(Object.keys(people));
console.log(Object.values(people));
