const pessoa = {
    nome: 'Matheus',
    sobrenome: 'Carvalho',
    idade: 28,
    endereco: {
        rua: 'Av Brasil',
        numero: 30

    }
};
// Atribuição via desestruturação
const {nome, sobrenome, ...resto} = pessoa;
console.log(nome);
console.log(resto);
