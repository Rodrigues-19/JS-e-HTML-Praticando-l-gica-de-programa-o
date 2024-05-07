// A função recebe como parâmetro/argumento o texto nome. Porém nome não é definido, então se tentar chamar a função com os parênteses vazios, ela será indefinida, Undefined.
// Para que ela funcione corretamente, é necessário que inclua dentro dos parênteses da chamada da função um nome, aí sim ela será executada. 
function imprimirNome(nome) {
    console.log (nome)
}
imprimirNome("Gabriel Rodrigues");

//Não recebe nenhum argumento, logo assim que a função é chamada, ela executa no HTML a função de pular uma linha.
function pulaLinha() {
    document.write("<br>")
}
pulaLinha();

// Função com return:
// Repare que o return faz o computador armazenar o valor da multiplicação, de forma que ele possa ser exibido depois, quando chamado.
// Outra coisa importante é que a função está sendo executada quando chamamos a variável mulriplicacao1 no console.log. Pois a função foi "armazenada na variável multiplicacao1"
function multiplicaDoisNumeros(a, b) {
    var multiplica = a * b;
    return multiplica;

}
var multiplicacao1 = multiplicaDoisNumeros(parseInt(prompt("Insira o primeiro número")), prompt("Insira o segundo número"));
console.log(multiplicacao1);