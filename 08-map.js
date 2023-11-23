// 08-map.js

/* map (mapear, mapeia - transformar em outra coisa)
Passa por elementos de um array e realiza operações 
em cada um deles atraves de uma função gerando um novo */

//Exemplo 1
const numeros = [10, 20, 5, 12, 333, 50];
const numerosDobrados = numeros.map(
    numero => numero * 2 
);

for (const numerosDobrado of numerosDobrados ){
    console.log(numerosDobrado);
}