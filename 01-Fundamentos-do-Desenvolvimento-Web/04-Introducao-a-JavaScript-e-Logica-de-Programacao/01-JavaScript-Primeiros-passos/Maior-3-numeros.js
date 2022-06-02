let a = 10;
let b = 30;
let c = 40;

if (a > b && a > c) {
  console.log("Maior (a): ", a);
} else if (b > a && b > c) {
  console.log("Maior (b): ", b);
} else if (c > a && c > b) {
  console.log("Maior (c): ", c);
} else {
  console.log("Dois ou mais números iguais.");
}
