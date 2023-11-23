// 08-map.js
import cursos from "./modulos/cursos.js";

/* map (mapear, mapeia - transformar em outra coisa)
Passa por elementos de um array e realiza operações 
em cada um deles atraves de uma função (callback) gerando um novo */

//Exemplo 1
const numeros = [10, 20, 5, 12, 333, 50];
const numerosDobrados = numeros.map(
    numero => numero * 2 
);

for (const numerosDobrado of numerosDobrados ){
    console.log(numerosDobrado);
}

console.log("----------------");

console.log(cursos);

// Exemplo 2: Gerar um novo Array apenas com os nomes dos cursos
const titulos = cursos.map( curso =>  curso.titulo);

console.log(titulos);

/* Exercicio  
Use o map para gerar um novo array APENAS com os preços
calculados com um desconto de 10%.

Como calcular?
-Opção 1: valor - valor * 0.10
-Opção 2: valor * 0.9               

E mostre no console.*/

const blackFriday = cursos.map(
    curso => {
        let desconto = curso.preco * 0.10;
        let precoFinal = Math.abs(desconto - curso.preco);
        return ["Preço: R$"+curso.preco+",00", "Desconto: R$"+desconto+",00", "Preço com deconto: R$"+precoFinal+",00"]
    }
);

console.log(blackFriday);