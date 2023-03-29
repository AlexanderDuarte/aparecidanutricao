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

//declarando as variáveis que carregam o formuláio e o botao
var form = document.querySelector("#form-adiciona");
var botaoAdicionar = document.querySelector("#adicionar-paciente");

//adicionando vento ao botão usando função anonima
 botaoAdicionar.addEventListener("click", function(event){

    //chamada de função que previne comportamento padrao do formulario
    event.preventDefault();

    //obtendo variáveis com valores inseridos no formulario
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
    var imc = 0;

    //Criando os elementos HTML para serem preenchidos
    var pacienteTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    //preenchendo os elementos criados com os valores inseridos no formulario
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = imc;

    //Adicionando as classes aos novos elementos criados
    nomeTd.classList.add("info-nome");
    pesoTd.classList.add("info-peso");
    alturaTd.classList.add("info-altura");
    gorduraTd.classList.add("info-gordura");
    imcTd.classList.add("info-imc");

    //inserindo as celulas da tabela na TR criada
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    
    //craindo a variável tabela que se refere à tabela da página
    var tabela = document.querySelector("#tabela-pacientes");

    //inserindo a TR dentro da tabela
    tabela.appendChild(pacienteTr);

    console.log(pacienteTr.querySelectorAll("td").length);

 });