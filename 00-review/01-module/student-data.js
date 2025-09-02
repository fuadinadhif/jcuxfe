// name export
export const studentData = { name: "John Doe", age: 14, address: "DKI" };
export const citizenData = { name: "Fulan" };

// default export
const employeeData = { name: "Charles", salary: 10_000, position: "Manager" };
export default employeeData;

/* ------------------------- name vs default export ------------------------- */
// 1. name export cukup ditulis `export saja` kalau default export harus tambahan `export default`-nya
// 2. name export boleh dibuat berkali-kali, kalau default export cuma boleh satu kali
