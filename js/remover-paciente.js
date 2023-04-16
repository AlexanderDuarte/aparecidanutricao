var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {

    var alvo = event.target;
    var paiDoAlvo = alvo.parentNode;
    paiDoAlvo.classList.add("fade-out");


    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

});