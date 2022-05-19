//InnerHTML
document.getElementById('texto').innerHTML =
  'Meu primeiro texto <b>JS<b> usando innerHTML.'

//document.write foi usado direto do script html na linha 37

//Alert

alert('Oi! isso é um alerta JavaScript')

//console.log

console.log('Oi! isso é um console.log')

//==================
//Usando função onclick com alert
function clicar() {
  alert('Obrigado por Clicar, você usou a função onclick')
}

//innerHTML
function clicar2() {
  document.getElementById('butao2').innerHTML =
    'Aqui você está usando a função getElementById(innerHTML) para escrever no parágrafo'
}

console.log(document.getElementById('texto'))

//direcionar para outra página
// abre outra guia com window.open
function clicar3() {
  window.open('https://web.dio.me/home')
}

function clicar4() {
  document.getElementById('botao4').innerHTML = 'Digital Innovation One'
}

function redirecionar() {
  window.open('https://web.dio.me/home')
}

//abre na mesma guia window.location.href
function clicar5() {
  window.location.href = 'https://web.dio.me/home'
}
