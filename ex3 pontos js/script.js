//Parte 1 do exercício

let salarios = [1800, 1900, 2100, 2200, 2400, 2150, 2500, 2550, 2300, 2000];
let salarioscomaumento = salarios.map(salario => {
    if (salario <= 2000) {
        return salario * 1.15;  // aumento de 15%
    } else {
        return salario * 1.10;  // aumento de 10%
    }
});

console.log(salarioscomaumento);

//Parte 2 do exercício

let salariossuperiores = salarioscomaumento.filter(salario => salario > 2500);
console.log(`Os salários superiores a 2500 são: ${salariossuperiores}`);

//Parte 3 do exercício

let somasalarios = salariossuperiores.reduce((acumulador, salarioatual) => acumulador + salarioatual, 0);
console.log(`A soma dos salários é ${somasalarios}`);
