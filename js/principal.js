//Alterando o título da página
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//obtendo os dados do paciente Paulo
//obtendo a tr do primeiro paciente
var trPaciente = document.querySelector("#primeiro-paciente");
//obtendo a td do paciente
var tdPeso = trPaciente.querySelector(".info-peso");
//obtendo o peso contido na td
var peso = tdPeso.textContent;
//obtendo a td do paciente
var tdAltura = trPaciente.querySelector(".info-altura");
//obtendo a altura do paciente
var altura = tdAltura.textContent;


var tdImc = trPaciente.querySelector(".info-imc");


var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 1000) {
    tdImc.textContent = "Peso inválido!";
    pesoEhValido = false;
}

if (altura <= 0 || altura >= 3) {
    tdImc.textContent = "Altura inválida!";
    pesoEhValido = false;
}

if (pesoEhValido  && alturaEhValida) {
    //calculando o imc
    var imc = peso / (altura * altura);

    //inserindo o resultado dentro do HTML
    tdImc.textContent = imc;
}





