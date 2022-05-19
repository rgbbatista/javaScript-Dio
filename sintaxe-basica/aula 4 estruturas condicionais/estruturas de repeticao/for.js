let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5']

let object = {
  propriedade1: 'valor1',
  propriedade2: 'valor2',
  propriedade3: 'valor3'
}

// For executa uma instrução até que ela seja false

for (let indice = 0; indice < array.length; indice++) {
  console.log(indice)
}

// for in executa uma repetição apartir de uma propriedade

for (let i in array) {
  console.log(i)
}
// for in com object

for (i in object) {
  console.log(i)
}
// for of executa a repetição apartir de um valor

for (i of array) {
  console.log(i)
}

//for of com object- não funciona com objetos pois as variedades variam, se eu quiser pegar o valor mesmo assim pode, mas cada caracteres vai ser impresso em linha diferente
for (i of object.propriedade2) {
  console.log(i)
}
