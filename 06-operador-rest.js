// 06-operador-rest.js

/* Conceito
usando o ... como "rest operator"
podemos mesclar uma lista de parâmetros/argumentos
para uma função */

const ciencia = ["Tesla", "Einstens", "Newton", "Darwin"];

const artistas = ["Bea Duarte", "Lou Garcia", "Mc Sofia", "Ozzy", "John Lennon", "Ananda"];
                    
                     //rest
const classificar = (...parametro) => {
    return parametro.sort();
};


// chamada
console.log( classificar(...ciencia) );
console.log( classificar(...artistas) );