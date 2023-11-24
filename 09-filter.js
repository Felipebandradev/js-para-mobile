// 09-filter.js

import cursos from "./modulos/cursos.js";

/* filter (filtrar) 
Passa por elementos de um array (usando uma função callback) e retornar valores de acordo com uma ou mais condições gerando um novo array. */

// Exemplo 01
const vendas = [1500,3000,1000,500,750,5000,2000];
const meta = 1000;

// gerando um array com os valores que bateram a meta

const vendasAcimaDaMeta = vendas.filter(venda =>   venda >= meta);

console.log(vendasAcimaDaMeta);

// Exemplo 02

const alunos = [
    "Nicolas", "Eliel", "André", 
    "Kaue", "Barbosa", "Aline", 
    "Melissa","Marina", "Mônica",
    "Marcelo"
];

// Filtrando Aluno que começam com "M" e terminam com "o" 
// obs: Faz diferença se usar maiúsculas ou minusculas

const resultados = alunos.filter( aluno =>  aluno.startsWith("M") && aluno.endsWith("o")
    // aluno.startsWith("M") || aluno.startsWith("m")

);

console.log(resultados);

console.log("--------------------------------");

/* Filtrando cursos */

console.log(cursos);
// Filtrando por cursos da Categoria Design

const cursoDesign = cursos.filter( curso => curso.categoria === "Design");

console.log(cursoDesign);

// Filtrando por cursos que não são de design

const cursosMenosDesign = cursos.filter( curso => curso.categoria !== "Design");

console.log(cursosMenosDesign);

const cursoFrontMobal = cursos.filter(curso => curso.categoria === "Front-End" || "Mobile" &&  curso.preco > 600)

console.log(cursoFrontMobal);