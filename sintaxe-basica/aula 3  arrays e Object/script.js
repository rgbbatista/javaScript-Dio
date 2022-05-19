// O QUE SÃO VETORES OU ARRAYS

var array = ['string', 1, true]
console.log(array)

//ARRAYS PODE GUARDAR VÁRIOS TIPOS DE DADOS

var array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']]

console.log(array)

//acessar o índice do array
console.log(array[2])

// MANIPULANDO ARRAYS
//forEach - itera um array

array.forEach(function (item, index) {
  console.log(item, index)
})
/*"imprimiu o array junto com o índice" o forEach faz uma repetição pra cada item ou índice dentro de um array
===============================*/

//push add item no final do array

array.push('novo item')
console.log(array)

//pop remove item no final do array
array.pop()
console.log(array)

//shift remove item no inicio do array
array.shift()
console.log(array)

//unshift add item no inicio do array
array.unshift('string')
console.log(array)

// indexOf retorna o indice de um valor
console.log(array.indexOf(true))

// splice remove o substitui um item pelo índice

/*array.splice(0, 3)
console.log(array)*/

//slice retorna uma parte de um array existente

let novoArray = array.slice(0, 3)
console.log(novoArray)
