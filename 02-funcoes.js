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


function exercio01(  valor1, valor2){
 var resultado =   valor1 - valor2; 
  return resultado;
}

var valor1 = 10;
var valor2 = 8;
var valor4 = 20;
var valor3 = 38;

console.log(exercio01(valor1, valor2));
console.log(exercio01(valor3, valor4));
