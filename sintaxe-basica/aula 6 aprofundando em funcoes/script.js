//TIPOS DE FUNÇÃO

//Declarativas- tem nome obrigatoriomente

function funcao() {
  console.log('Sou uma mensagem de função declarativa')
}

funcao()

//EXPRESSÕES DE FUNÇÕES
//São funções atribuídas à expressões. A nomeação das funções por expressão é opcional.

//com nomeação

var funcao = function funcaoDeExpresaõ() {
  console.log('Sou uma mensagem de feunção de expressão')
}

funcao()

// sem nomeação

let objetivo = function () {
  console.log('Aprender Js e ganhar 8k')
}

objetivo()

// ARROW FUNCTION

/*São funções de expressão de sintaxe curta,Arrow Function sempre seram anônimas, e portanto não  poderam ser nomeadas. deve ser declarada com (), seguida de => e depois de {} */

var funcao = () => {
  console.log('Sou uma arrow function')
}
funcao()
