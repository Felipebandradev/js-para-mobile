// 02-funcoes.js


/* Formas tradicionais */

// sintaxe anônima associada á variavel/constante

// obs: cuidado com a ordem, já que nesta sintaxe a 
// função PRIMEIRO precisa ser declarada para somente depois
// ser chamada/executada
const exemplo1 = function(){
    console.log("Função anônima!");
};

exemplo1();

/* Sintaxe declarada/nomeada 

Obs.: nesta sintaxe, você pode chamar a função
antes ou depois de declará-la. Portanto, a ordem
não import
*/

exemplo2();
function exemplo2(){
    console.log("Função nomeada!");
};

/* Exercícios
01) Crie uma função (qualquer sintaxe) que receba dois valores numérico, calcule a diferença entre eles e retorne o resultado. 

02) Chame está função duas vezes passando valores diferentes e guardando os resultados em variáveis de escopo global.

03) Mostre os valores processados pela funçao no terminal. */


// function exercio01(  valor1, valor2){
//   return   valor1 - valor2;   
// }




// let  resultado1 = exercio01(10, 8);
// let resultado2 = exercio01(11, 20);

// console.log(Math.abs(resultado1),",",Math.abs(resultado2));

// refatorando

const calculaDiferenca  = (valor1, valor2) => Math.abs(valor1 - valor2);

let  resultado1 = calculaDiferenca(20, 8);
let resultado2 = calculaDiferenca(4, 20);

console.log(resultado1,",",resultado2);

/* Função Arrow Funtion */

const exemplo3 = () => {
    console.log("Arrow Function!!");
};

exemplo3();

// const saudacao = (cliente) => {
//     console.log("Olá " + cliente);
// };

// omitir os parênteses do parâmetro (SOMENTE QUANDO FOR UM)

// const saudacao = cliente => {
//     console.log("Olá "+ cliente);
// };

// omitir as chaves {} (SOMENTE QUANDO FOR UMA ÚNICA INTRUÇÃO)


const saudacao = cliente => console.log("Olá "+ cliente);

saudacao("Beltrano");
saudacao("Ciclano");

const calculaMetade = valor => console.log(valor/2); 

calculaMetade(330);
calculaMetade(404);

console.log("-----------------------------------------")

const exercio02 = pessoa => console.log( pessoa.toUpperCase());

exercio02("bruno");
exercio02("moura");
exercio02("valeska");




