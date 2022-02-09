let custo = 50;
let venda = 100;

let custoTotal = custo + (0.2*custo);
let lucro = venda - custoTotal;

if (custo < 0 || venda < 0) {
    console.log('Algum valor menor que zero.')
} else {
    console.log('Lucro ao vender 1000 produtos: ', lucro*1000);
}