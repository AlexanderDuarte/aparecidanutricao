//declarando as variáveis que carregam o formuláio e o botao
var form = document.querySelector("#form-adiciona");
var botaoAdicionar = document.querySelector("#adicionar-paciente");

//adicionando vento ao botão usando função anonima
botaoAdicionar.addEventListener("click", function (event) {

   //chamada de função que previne comportamento padrao do formulario
   event.preventDefault();

   //obtendo o objeto paciente com dados do formulario como propriedade
   var paciente = obtemPacienteDoFormulario(form);
   var pacienteTr = montaTr(paciente);

   //craindo a variável tabela que se refere à tabela da página
   var tabela = document.querySelector("#tabela-pacientes");

   //inserindo a TR dentro da tabela
   tabela.appendChild(pacienteTr);

   form.reset();

});

function obtemPacienteDoFormulario(form) {

   var paciente = {
      nome: form.nome.value,
      peso: form.peso.value,
      altura: form.altura.value,
      gordura: form.gordura.value,
      imc: calculaImc(form.peso.value, form.altura.value)


   }

   return paciente;
}


function montaTr(paciente) {
   var pacienteTr = document.createElement("tr");
   pacienteTr.classList.add("paciente");

   //inserindo as celulas da tabela na TR criada
   pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
   pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
   pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
   pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
   pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

   return pacienteTr;
}

function montaTd(dado, classe){
   var td = document.createElement("td");
   td.textContent = dado;
   td.classList.add(classe);
   return td;
}