function soma(n1, n2) {
  return n1 + n2
}
alert(soma(3, 5))

function setReplace(frase, nome, novoNome) {
  return frase.replace(nome, novoNome)
}
alert(setReplace('Sou Dev Full Stack', 'Full Stack', 'Mobile'))

// vallidar idade

function validarIdade(idade) {
  var validar

  if (idade >= 18) {
    validar = true
  } else {
    validar = false
  }

  if (validar == true) {
    alert('Você é maior de idade pode entrar.')
  } else {
    alert('Menor de Idade! Só com os pais.')
  }
  return validar
}
var idade = prompt('Qual a sua idade?')
alert(validarIdade(idade))
