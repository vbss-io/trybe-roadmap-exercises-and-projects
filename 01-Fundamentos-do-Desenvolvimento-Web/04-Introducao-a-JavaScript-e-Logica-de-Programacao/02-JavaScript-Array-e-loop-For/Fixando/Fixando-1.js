let menu = ["Home", "Serviços", "Portfólio", "Links"];
let menuServices = menu[1];

console.log(menuServices);

let indexOfPortfolio = menu.indexOf("Portfólio");

console.log(indexOfPortfolio);

menu.push("Contato");

for (let index = 0; index < menu.length; index += 1) {
  console.log(menu[index]);
}
