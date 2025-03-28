// ? :  (condição) ? 'Valor para verdadeiro' : 'Valor para falso'
const pontuacaoUsuario = 1001;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';
console.log(nivelUsuario);

//Settando um valor padrao.
const corUsuario = null;
const corPadrao = corUsuario || 'Preta';


/*if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP');
}   else {
    console.log('Usuário Normal');

    }*/

