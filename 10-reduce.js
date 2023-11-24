// 10-reduce.js

import cursos from "./modulos/cursos.js";

/* reduce (reduzir, redução)
passa por elementos de um array (usando uma função de callback com parâmetros, e um parâmetro com valor inicial) 
e retorna um unico valor/resultado. Pode ser ùtil para operações matem,aticas que geram um unico resultado.  */

// exemplo 1
const valores = [10, 5, 50, 200, 1000];
const total = valores.reduce(
    (acumulador, valor) => {
        return acumulador + valor
    }, 0
);

console.log(valores);
console.log("\n");
console.log(total);

// sem reduce

let acumuladora = 0;

for (let i = 0; i < valores.length; i++) {
    // soma e atribui
    acumuladora += valores[i];
}

console.log(acumuladora);

// sem reduce com for/of
let acumuladora2 = 0

for (let valor of valores) {
    acumuladora2 += valor;
}
console.log(acumuladora2);
console.log("---------------------");

// Exercicio 
let precoTotal = cursos
    .filter(curso => curso.categoria === "Front-end" || curso.categoria === "Back-End")
    .reduce(
        (acumulador, curso) =>    acumulador + curso.preco , 0);


console.log(precoTotal);


