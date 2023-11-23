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

console.log("--------------------------------------------");

const [tesla, eisten, newton] = ["Tesla", "Eisten", "Newton"]

console.log(tesla);
console.log(eisten);
console.log(newton);

console.log("--------------------------------------------");

const recursos = [
    ["Notebook", "Tv Oled", "Computador Desktop"],
    texto =>  texto.toUpperCase()
];

console.log(recursos);

const [produtos, converter] = recursos;

console.log(produtos[1]);

for( const produto of produtos){
    console.log("Produto: "+converter(produto));
}


console.log("--------------------------------------------");

/* Destructuring em objetos */

const pessoa = {
    nome: "Moura",
    idade:19,
    bairro: "Penha",
    situacao:"crítica"
};

const {nome,  bairro, situacao} = pessoa;

console.log(`O aluno ${nome} está em situação ${situacao} no curso`);
console.log(`Mora na ${bairro} e mesmo assim sempre atrasa...`);

// Criando apelido(aliasses) para a propriedade codigo
const { codigo: pedido, cursos, preco} = {codigo: "123abc", cursos: ["Figma", "Node.Js"], preco: 1000}

console.log("Nº do Pedido: "+pedido); // pedido é apelido
console.log("Cursos: "+cursos);
console.log("Valor: R$"+preco+",00");

console.log("-------------------");

// Destructuring para parâmetros de função

const dadosFilme = ({titulo, ano}) => console.log(`Filme: ${titulo} - Ano de Lançamento: ${ano} `);

const filme1 ={
    titulo: "Vingadores",
    ano:2012
}

const filme2 = {
    titulo: "Barbie",
    ano: "2023"
}



dadosFilme(filme1);
dadosFilme(filme2);