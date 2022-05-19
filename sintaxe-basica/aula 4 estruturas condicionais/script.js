/*
var jogador1 = 1
var jogador2 = 1
var placar

if (jogador1 > 0) {
  console.log('Jogador1 marcou ponto')
} else if (jogador2 > 0) {
  console.log('Jogador2 marcou ponto')
} else {
  console.log('Ninguém marcou ponto')
}

//ANINHAMENTO DE IF

var jogador3 = 0
var jogador4 = 2
var placar

if (jogador3 != -1) {
  if (jogador3 > 0) {
    console.log('Jogador3 marcou ponto')
  } else if (jogador4 > 0) {
    console.log('Jogador4 marcou ponto')
  } else {
    console.log('Ninguém marcou ponto')
  }
}

//IF TERNÁRIO
var jogador5 = 0
var jogador6 = 1
var placar

jogador5 != -1 && jogador6 != -1
  ? console.log('Os jogadores são válidos')
  : console.log('Os jogadores são inválidos')

if (jogador5 > 0) {
  console.log('Jogador5 marcou ponto')
} else if (jogador6 > 0) {
  console.log('Jogador6 marcou ponto')
} else {
  console.log('Ninguém marcou ponto')
}

//MELHORANDO O CÓDIGO

var jogador7 = 0
var jogador8 = 1
var placar

jogador5 != -1 && jogador6 != -1
  ? console.log('Os jogadores são válidos')
  : console.log('Os jogadores são inválidos')

//usando if
if (jogador7 > 0 && jogador8 == 0) {
  console.log('Jogador7 marcou ponto')
  placar = jogador7 > jogador8
}
//usando  else if
else if (jogador8 > 0 && jogador7 == 0) {
  console.log('Jogador8 marcou ponto')
  placar = jogador8 > jogador7
}
//usando else
else {
  console.log('Ninguém marcou ponto')
}

//SWITCH CASE

var jogador9 = 0
var jogador10 = 0
var placar

switch (placar) {
  case (placar = jogador9 > jogador10):
    console.log('Jogador9 ganhou')
    break

  case (placar = jogador10 > jogador9):
    console.log('Jogador10 ganhou')

    break
  default:
    console.log('Ninguém ganhou')
}

*/
// Resumo

var jogador1 = 0
var jogador2 = 0
var placar

jogador1 != -1 && jogador2 != -1
  ? console.log('Os jogadores são válidos')
  : console.log('Os jogadores são inválidos')

//usando if
if (jogador1 > 0 && jogador2 == 0) {
  console.log('Jogador1 marcou ponto')
  placar = jogador1 > jogador2
}
//usando  else if
else if (jogador2 > 0 && jogador1 == 0) {
  console.log('Jogador2 marcou ponto')
  placar = jogador2 > jogador1
}
//usando else
else {
  console.log('Ninguém marcou ponto')
}

switch (placar) {
  case (placar = jogador1 > jogador2):
    console.log('Jogador1 ganhou')
    break

  case (placar = jogador2 > jogador1):
    console.log('Jogador2 ganhou')

    break
  default:
    console.log('Ninguém ganhou')
}
