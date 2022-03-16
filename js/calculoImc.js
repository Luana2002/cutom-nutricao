var titulo = document.querySelector(".titulo");
titulo.textContent = "Cutom Nutrição";

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes)

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i]

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent
    var tdimc = paciente.querySelector(".info-imc");

    var pesoEValido = validaPeso(peso);
    var alturaEvalida = validaAltura(altura);

    if (!pesoEValido) {
        pesoEValido = false
        tdimc.textContent = "Peso Inválido!"
        paciente.classList.add("paciente-invalido")
    }

    if (!alturaEvalida) {
        alert("Altura inválida!")
        alturaEvalida = false
        tdimc.textContent = "Altura inválida!"
        paciente.classList.add("paciente-invalido")

    }



    if (alturaEvalida && pesoEValido) {
        var imc = calculoimc(peso, altura);
        tdimc.textContent = imc;
    }
}

function validaPeso(peso) {
    if (peso > 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura > 0 && altura <= 4.00) {
        return true;
    } else {
        return false;
    }
}


function calculoimc(peso, altura) {
    var imc = 0
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}
