//Alterando o título da página
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//obtendo um array de todos os pacientes com a classe .paciente e atribuindo à variavel pacientes
var pacientes = document.querySelectorAll(".paciente");

//loop que percorre todos os itens do array pacientes
for (i = 0; i < pacientes.length; i++) {

    //declara a variavel paciente e atribui à variavel paciente[i]
    //para facilitar a escrita do codigo
    var paciente = pacientes[i];

    //obtém dos dados de peso e altura do paciente
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;

    //define as variáveis de validação de peso e altura
    var pesoEhValido = true;
    var alturaEhValida = true;

    //condicional que verifica se o peso é valido
    if (peso <= 0 || peso >= 1000) {
        //altera o texto da tabela celula IMC informando o erro
        paciente.querySelector(".info-imc").textContent = "Peso inválido";
        //declara como falsa a validade do peso
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido");
    }
    //condicional que verifica se a altura é valida
    if (altura <= 0 || altura >= 3) {
        //altera o texto da tabela celula IMC informando o erro
        paciente.querySelector(".info-imc").textContent = "Altura inválida";
        //declara como falsa a validade da altura
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido");
    }

    //condicao que confere se peso e altura são simultaneamente válidas
    if (pesoEhValido && alturaEhValida) {
        //calculando o imc
        var imc = peso / (altura * altura);

        //inserindo o resultado dentro do HTML na celula IMC
        paciente.querySelector(".info-imc").textContent = imc.toFixed(2);
    }
}







