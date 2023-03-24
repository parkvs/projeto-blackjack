/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

const bemVindo = `Bem-vindo(a) ao jogo de blackjack`
console.log(bemVindo);
if(confirm(`Quer iniciar uma nova rodada?`)){

const carta1Pessoa = comprarCarta()
const carta2Pessoa = comprarCarta()
const resultadoPessoa = (carta1Pessoa.valor + carta2Pessoa.valor)

const carta1Computador = comprarCarta()
const carta2Computador = comprarCarta()
const resultadoComputador = (carta1Computador.valor + carta2Computador.valor )

const usuario = `Usuário - cartas : ${carta1Pessoa.texto} ${carta2Pessoa.texto} - pontuação ${resultadoPessoa}`
console.log(usuario);

const computador = `Computador - cartas : ${carta1Computador.texto} ${carta2Computador.texto} - pontuação ${resultadoComputador}`
console.log(computador);

if(resultadoPessoa === 21 && resultadoPessoa <=21 || resultadoPessoa > resultadoComputador ){
   console.log(`O Usuário ganhou!`);
}else if(resultadoComputador === 21 || resultadoComputador <=21 || resultadoComputador > resultadoPessoa ){
   console.log(`O Computador ganhou!`);
}else if(resultadoComputador === resultadoPessoa){
   console.log(`Empate!`);
}else if(resultadoComputador > 21){
   console.log(`O Usuário Ganhou!`);
}else if(resultadoPessoa > 21){
   console.log(`O computador Ganhou!`);
}
}else{
   console.log(`O jogo acabou!`);
}