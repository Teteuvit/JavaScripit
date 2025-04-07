// Atribuição via desestruturação
// ... rest, ... spread

const numeros = [2, 3, 4, 5, 6];
let [a, b , c, ...resto] = numeros;
console.log(a, b, c);
console.log(resto);

// array de arrays
// indices          0          1          2
//               0  1  2    0  1  2    0  1  2
const listas = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [lista1, lista2, lista3] = listas;
console.log(lista2[1]);