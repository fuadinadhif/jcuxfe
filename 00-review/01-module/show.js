// named import
import { studentData, citizenData } from "./student-data.js";

// default import
import dataSukaSukaSaya from "./student-data.js";

console.log(studentData.name);
console.log(dataSukaSukaSaya.salary);

/* ------------------------- name vs default import ------------------------- */
// 1. name import harus dibungkus {}, default import tidak
// 2. name import namanya harus sama dengan nama export-nya, default import tidak
