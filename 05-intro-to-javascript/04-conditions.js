if (false) {
  console.log("Hore");
  console.log("Merdeka");
} else {
  console.log("Huu");
  console.log("Merdeka??");
}

/*
if (condition) {
  kode yang akan di-execute ketika condition true
} else {
  kode yang akan di-execute ketika condition false  
}
*/

const password = "secret";

// if only
if (password === "superdupersecret") {
  console.log("Secret information");
}

// if else
if (password === "superdupersecret") {
  console.log("Secret information");
} else {
  console.log("You are unauthorized");
}

// if else if else
if (password === "superdupersecret") {
  console.log("Secret information");
} else if (password === "secret") {
  console.log("Not so secret information");
} else {
  console.log("You are unauthorized");
}
