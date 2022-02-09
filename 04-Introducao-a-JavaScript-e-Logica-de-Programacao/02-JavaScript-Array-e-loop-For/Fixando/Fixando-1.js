let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

let indexOfPortffolio = menu.indexOf('Portfólio');

console.log(indexOfPortffolio);

menu.push('Contato');

for (let index = 0; index < menu.length; index += 1) {
    console.log(menu[index]);
}
