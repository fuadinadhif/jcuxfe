/* ---------------------------- Equal Comparison ---------------------------- */
// === strict/triple equal: akan membandingan kedua value apa adanya
console.log(1 === "1");
console.log(5 === 5);
console.log(3 === 4);

// == loose/double equal: akan mencoba menyamakan tipe data kedua valuenya terlebih dahulu
console.log(1 == "1");

/* ------------------------- Greater Than Comparison ------------------------ */
console.log(10 > 10);
console.log(10 > "100");
console.log(10 > 1);

/* -------------------- Greater Than Or Equal Comparison -------------------- */
console.log(10 >= 10);
console.log(10 >= "100");
console.log(10 >= 1);

/* -------------------------- Less Than Comparison -------------------------- */
console.log(100 < 1000);
console.log(100 < 100);

/* --------------------------- Less Than Or Equal --------------------------- */
console.log(100 <= 1000);
console.log(100 <= 100);

/* -------------------------- Not Equal Comparison -------------------------- */
console.log(100 !== 100);
console.log(1 !== 5);
console.log(null !== undefined);
console.log("Joko" !== "joko");
