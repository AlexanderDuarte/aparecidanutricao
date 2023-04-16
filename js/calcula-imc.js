var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");



for (i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    

    
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    var tdImc = paciente.querySelector(".info-imc");

    
    if (!pesoEhValido) {
        
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }
    
    if (!alturaEhValida) {
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc
    }
}




function validaPeso(peso){
    if(peso > 0 && peso < 1000){
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura){
    if(altura > 0 && altura < 3.00){
        return true;
    } else{
        return false;
    }
}

function calculaImc(peso, altura){
    imc = 0;
    imc = peso / (altura*altura);
    return imc.toFixed(2);
}

