// Armazena os dados da pessoa
const nome = "Silvano";
const sexo = "M";
const idade = 48;
const contribuicao = 34;

// Exibe os dados da pessoa
console.log(`Dados do contribuinte = Nome: ${nome}, Sexo: ${sexo}, Idade: ${idade}, Contribuição: ${contribuicao} anos`);

// Armazena os requisitos minimos para o sexo feminino
const contribuicaoMinFeminino = 30;
const resultMinFeminino = 85;

// Armazena os requisitos minimos para o sexo feminino
const contribuicaoMinMasculino = 35;
const resultMinMasculino = 95;

// Verifica se a pessoa é do sexo feminino
if (sexo === "F") {
  // Pessoa do sexo feminino

  // Verifica se a pessoa possui o tempo minimo de contribuição
  if (contribuicao >= contribuicaoMinFeminino) {
    console.log(`${nome}, você possui o tempo minimo de contribuicao, vamos para a próxima etapa ...`);

    // Realiza soma da idade e do tempo de contribuição
    const resultSoma = idade + contribuicao;  

    // Verifica se a pessoa de encaixa no requisito 85 da regra "85/95"
    if (resultSoma >= resultMinFeminino) {
      // Exibe feedbak positivo
      console.log(`Parabéns, ${nome}! Você pode se aposentar.`);
    } else {
      // Exibe feedbak negativo e explicativo
      console.log(`${nome}, a soma da sua idade e seu tempo de contribuição é de ${resultSoma} e o mínimo é de ${resultMinFeminino}, portanto você ainda não pode se aposentar.`);
    }
    
  } else {
    // Exibe feedbak negativo e explicativo
    const anosFaltantes = contribuicaoMinFeminino - contribuicao;
    var textAnosFaltantes = "anos"
    // Verifica se o valor de anos faltantes é igual a 1 para exibir texto no singular
    if (anosFaltantes === 1) {
      var textAnosFaltantes = "ano"
    }
    console.log(`${nome}, você possui ${contribuicao} anos de contribuicao`);
    console.log(`O tempo mínimo de contribuicao para mulheres é de ${contribuicaoMinFeminino} anos, portanto, ainda não pode se aposentar.`);
    console.log(`Não desanime tente novamente daqui a ${anosFaltantes} ${textAnosFaltantes}.` );
  }

} else {
  // Pessoa do sexo masculino

  // Verifica se a pessoa possui o tempo minimo de contribuição
  if (contribuicao >= contribuicaoMinMasculino) {
    console.log(`${nome}, você possui o tempo minimo de contribuicao, vamos para a próxima etapa ...`);

    // Realiza soma da idade e do tempo de contribuição
    const resultSoma = idade + contribuicao;  

    // Verifica se a pessoa de encaixa no requisito 85 da regra "85/95"
    if (resultSoma >= resultMinMasculino) {
      // Exibe feedbak positivo
      console.log(`Parabéns, ${nome}! Você pode se aposentar.`);
    } else {
      // Exibe feedbak negativo e explicativo
      console.log(`${nome}, a soma da sua idade e seu tempo de contribuição é de ${resultSoma} e o mínimo é de ${resultMinMasculino}, portanto você ainda não pode se aposentar.`);
    }
    
  } else {
    // Exibe feedbak negativo e explicativo
    const anosFaltantes = contribuicaoMinMasculino - contribuicao;
    // Verifica se o valor de anos faltantes é igual a 1 para exibir texto no singular
    var textAnosFaltantes = "anos"
    if (anosFaltantes === 1) {
      var textAnosFaltantes = "ano"
    }
    console.log(`${nome}, você possui ${contribuicao} anos de contribuicao`);
    console.log(`O tempo mínimo de contribuicao para homens é de ${contribuicaoMinMasculino} anos, portanto, ainda não pode se aposentar.`);
    console.log(`Não desanime tente novamente daqui a ${anosFaltantes} ${textAnosFaltantes}.`);
  }

}