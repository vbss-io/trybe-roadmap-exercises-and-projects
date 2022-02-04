let salarioBruto = 3000;

salarioBruto = salarioBruto.toFixed(2);

let salarioBase, inss, iR, salarioLiquido;
let aliquotaMax = 570.88;

if (salarioBruto <= 1556.94) {
    inss = (salarioBruto*0.08).toFixed(2);
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
    inss = (salarioBruto*0.09).toFixed(2);
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
    inss = (salarioBruto*0.11).toFixed(2);
} else if (salarioBruto > 5189.82) {
    inss = aliquotaMax;
};

salarioBase = (salarioBruto - inss).toFixed(2);

if (salarioBase <= 1903.98) {
    iR = 0;
} else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
    iR = ((salarioBase*0.075)-142.80).toFixed(2);
} else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
    iR = ((salarioBase*0.15)-354.80).toFixed(2);
} else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
    iR = ((salarioBase*0.225)-636.13).toFixed(2);
} else if (salarioBase > 4664.68) {
    iR = ((salarioBase*0.275)-869.36).toFixed(2);
}
 
salarioLiquido = (salarioBase - iR).toFixed(2);

console.log("Salário Bruto: ", salarioBruto);
console.log("INSS: ", inss);
console.log("Salário Base", salarioBase);
console.log("Imposto de Renda", iR);
console.log("Salário Líquido", salarioLiquido);
