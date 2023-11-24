// 10-reduce.js

/* reduce (reduzir, redução)
passa por elementos de um array (usando uma função de callback com parâmetros, e um parâmetro com valor inicial) 
e retorna um unico valor/resultado. Pode ser ùtil para operações matem,aticas que geram um unico resultado.  */

// exemplo 1
const valores = [10, 5, 50,200, 1000];
const total = valores.reduce(
    (acumulador, valor) =>{
        return acumulador+valor
    }, 0
);

console.log(valores);
console.log("\n");
console.log(total);

// sem reduce

let acumuladora = 0;

for ( ){

}