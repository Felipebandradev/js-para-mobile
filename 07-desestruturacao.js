// 07-desestruturacao.js

/* Destructuring ou Desestruturação
Extrair os Dados de Array e objetos para variaveis/constantes
individuais */

// Destructuring em Arrays

const alunos = ["Tanaka", "Zimbo", "Melissa", "Aline","Moura", "ValeskaGPT"];

// const [tanaka, zimbo, melissa, aline, moura, valeskaGPT] = alunos;

const valeskaGPT = alunos[5];
const zimbo = alunos[1];
const  melissa = alunos[2];

console.log(valeskaGPT);
console.log(zimbo);
console.log(melissa);

const unidades = ["Penha", "Itaquera", "Tatuapé", "São Miguel"];
            // pulando itaquera
const [penha, , tatuape, smp] = unidades;

console.log("--------------------------------------------");

console.log(penha);
console.log(smp);
console.log(tatuape);