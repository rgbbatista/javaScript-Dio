//onmouseover para trocar o texto usando alert

function trocar() {
  alert('Já passei e mudei o texto no alert')
}
/*
//Mudar o texto de fato através do innerHTML
function trocar1() {
  document.getElementById('mudartexto').innerHTML =
    'Já passei e mudei o texto com innerHTML'
}

function voltar1() {
  document.getElementById('mudartexto').innerHTML = 'Passe o mouse aqui!'
}
*/
//Usando This e Elemento

function trocar1(elemento) {
  elemento.innerHTML = 'Já passei e mudei o texto com innerHTML'
}

function voltar1(elemento) {
  elemento.innerHTML = 'Passe o mouse aqui!'
}
