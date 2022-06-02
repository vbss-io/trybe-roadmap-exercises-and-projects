let a = 120;
let b = 30;
let c = 30;

if (a <= 0 || b <= 0 || c <= 0) {
  console.log("Ângulo com valor inválido.");
} else {
  if (a + b + c == 180) {
    console.log(true);
  } else {
    console.log(false);
  }
}
