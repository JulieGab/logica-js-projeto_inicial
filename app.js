alert('Bem vindo ao jogo do número secreto!');
// Adicione um console.log para verificar o valor de "chute" após a entrada do usuário
let chute = prompt('Escolha um número entre 1 e 10');
console.log('Vamor do chute: ', chute);

let numeroSecreto = 4;

// Adicione um console.log para verificar a comparação entre "chute" e "numeroSecreto"
console.log('Resultado da comparação:', chute == numeroSecreto);
if (chute == numeroSecreto) {
alert(`Isso aí, você descobriu o número secreto ${numeroSecreto}`);
} else {
    // Adicione um console.log para verificar o valor de "numeroSecreto" quando o jogador erra
    console.log('Valor do número secreto:', numeroSecreto);
    alert("Você errou :(");
}
