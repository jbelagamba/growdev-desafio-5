// Armazena os dados do contribuinte
const contribuinte = {
  nome: "Silvana", 
  sexo: "F",
  idade: 48, 
  contribuicao: 45
};

// Armazena os requisitos mínimos para o sexo feminino
const fem = { 
  contribuicaoMin: 30, 
  resultMin: 85 
};

// Armazena os requisitos mínimos para o sexo masculino
const masc = { 
  contribuicaoMin: 35,  
  resultMin: 95
};

// Monta função que valida aposentadoria para amboas os sexos
function validaAponsentadoria(sexo) {

  //Logs só pra verificar setudo está retornando como o esperado
  console.log(contribuinte);
  console.log(`Tempo minimo de contribuição: ${sexo.contribuicaoMin} anos`);
  console.log(`Resultado minimo: ${sexo.resultMin}`);
  console.log("========================================================");
  
  // Verifica se o contribuinte possui o tempo minimo de contribuição
  if (contribuinte.contribuicao >= sexo.contribuicaoMin) {
    console.log(`${contribuinte.nome}, você possui o tempo minimo de contribuicao, vamos para a próxima etapa.`);

    // Realiza soma da idade e do tempo de contribuição
    const resultSoma = contribuinte.idade + contribuinte.contribuicao;  
    console.log(`A soma da sua idade e seu tempo de contribuição é de ${resultSoma} e o mínimo é de ${sexo.resultMin}`);

    // Verifica se a pessoa se encaixa no requisito da regra "85/95"
    if (resultSoma >= sexo.resultMin) {
      console.log(`Parabéns, ${contribuinte.nome}! Você pode se aposentar.`);
    } else {
      console.log(`${contribuinte.nome}, você ainda não pode se aposentar.`);
    }

  } else {

    // Identifica o tempo faltante 
    const tempoFaltante = sexo.contribuicaoMin - contribuinte.contribuicao;
    var textTempoFaltante = "anos"
    // Verifica se o tempo faltante é igual a 1 para exibir texto no singular
    if (tempoFaltante === 1) {
      var textTempoFaltante = "ano"
    }

    console.log(`${contribuinte.nome}, você possui ${contribuinte.contribuicao} anos de contribuicao`);
    console.log(`O tempo mínimo de contribuicao é de ${sexo.contribuicaoMin} anos, portanto, ainda não pode se aposentar.`);
    console.log(`Não desanime tente novamente daqui a ${tempoFaltante} ${textTempoFaltante}.`);
  }

}

// Verifica se contribuinte é do sexo feminino ou masculino
if (contribuinte.sexo === "F") {
  // Realiza validação com requisitos para o sexo feminino
  validaAponsentadoria(fem);
} else {
  // Realiza validação com requisitos para o sexo masculino
  validaAponsentadoria(masc);
}