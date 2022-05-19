/*
OBJETOS
Dadis que possuem propriedades e valores que definem suas caacterísticas.deve ser declarado entre caves{}.

ex:imagine uma xícara azul.Ela tem cor, pode ter vários tamanhos e funções.Pode ser declarada assim:

let xicara = {cor:'azul', tamanho:'p',funcao:'tomarCafe' 
}

console.log(xicara)
*/
let object = {
  string: 'palavra',
  number: 1,
  boolean: true,
  array: ['array'],
  objectInterno: { objectInterno: 'obejeto interno' }
}
console.log(object)

//ACESSAR AS PROPRIEDADES DO OBJECT

console.log(object.boolean)

console.log(object.objectInterno)

console.log(object.string)

//DESESTRUTURACAO DE OBJETO PRIMEIRA FORMA

var string = object.string
console.log(string)

var array = object.array
console.log(array)

// DESESTRUTURAÇÃO DE OBJETO SEGUNDA FORMA

var { string, objectInterno, array, boolean } = object
console.log(string, objectInterno, array, boolean)
