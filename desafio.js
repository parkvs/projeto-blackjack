// Inicializa as mãos dos jogadores
let johnConnor = []
let skynet = []

// Mensagem de boas-vindas
alert("Bem-vindo(a) ao jogo de Blackjack!")

// Confirmação para iniciar uma nova rodada
let iniciarJogo = confirm("Quer iniciar uma nova rodada?")

if(iniciarJogo){

   // Loop para garantir que nenhuma mão comece com dois ases
   let cartasCertas = false
   while (!cartasCertas){

      // Cada jogador recebe duas cartas
      johnConnor.push(comprarCarta())
      johnConnor.push(comprarCarta())

      skynet.push(comprarCarta())
      skynet.push(comprarCarta())

      // Se um jogador recebe dois ases, as cartas são descartadas e o loop começa novamente
      if ((johnConnor[0].valor === 11 && johnConnor[1].valor === 11) ||
         (skynet[0].valor === 11 && skynet[1].valor === 11)) {
            johnConnor = []
            skynet = []

         } else {
         cartasCertas = true
      }
   }

   // Loop para a vez do jogador
   let aceitaMaisUma = true
   while(aceitaMaisUma){

      // Mostra as cartas do jogador e a carta visível da Skynet
      let textos = ""
      let placar = 0

      for (let carta of johnConnor){
         textos += carta.texto + " "
         placar += carta.valor
      }

      // Se o jogador ultrapassar 21 pontos, sua vez acaba automaticamente
      if (placar > 21){
         aceitaMaisUma = false
      } else {

         // Pergunta ao jogador se ele quer comprar mais uma carta
         let roubouDoMonte = confirm(
            `Suas cartas são ${textos}. A carta revelada da Skynet é ${skynet[0].texto}.` +
            "\n"+ 
            "Deseja comprar mais uma carta?"
         )
      
         // Se o jogador quiser comprar mais uma carta, ele recebe uma
         if (roubouDoMonte){
            johnConnor.push(comprarCarta())
         } else {
            aceitaMaisUma = false
         }
      }
   }

   // Loop para a vez da Skynet
   let placarSkynet = 0
   let placarJohnConnor = 0
   let textosSkynet = ""
   let textosJohnConnor = ""

   for (let carta of skynet){
      placarSkynet += carta.valor
      textosSkynet += carta.texto + " "
   }
   for (let carta of johnConnor){
      placarJohnConnor += carta.valor
      textosJohnConnor += carta.texto + " "
   }

   // A Skynet compra cartas até ultrapassar a pontuação do jogador ou ultrapassar 21 placar
   if (placarJohnConnor <= 21){
      while (placarSkynet < placarJohnConnor && placarSkynet <= 21){
         skynet.push(comprarCarta())
         placarSkynet = 0
         textosSkynet = ""

         for (let carta of skynet){
            placarSkynet += carta.valor
            textosSkynet += carta.texto + " "
         }
      }
   }
  
   // Determina o vencedor da partida
let resultado = ""

if (placarJohnConnor > placarSkynet && placarJohnConnor <= 21){
resultado = "John Connor ganhou, a humanidade está salva!"
}else if (placarSkynet > placarJohnConnor && placarSkynet <= 21){
resultado = "A Skynet ganhou, é o fim."
}else if (placarSkynet > 21 && placarJohnConnor <= 21){
resultado = "John Connor ganhou, a humanidade está salva!"
}else if (placarJohnConnor > 21 && placarSkynet <= 21){
resultado = "A Skynet ganhou, é o fim."
}else {
resultado = "Empate!"
}

// Exibe o resultado da partida
alert(
`John Connor - Cartas: ${textosJohnConnor} - Pontuação: ${placarJohnConnor}\n` +

`Skynet - Cartas: ${textosSkynet} - Pontuação: ${placarSkynet}\n` +
resultado
)

} else {
alert("O jogo acabou.")
}