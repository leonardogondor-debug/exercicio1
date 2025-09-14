function pesoaltura() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    let imc = peso / (altura * altura);
    let resultado = imc.toFixed(2);

    if (imc < 18.5) {
        document.getElementById(classificao).textContent ="voce esta abaixo do peso";
    }
    else if (imc < 24.9) {
        document.getElementById(classificacao).textContent ="voce esta com o peso normal";
    }
    else if (imc < 29.9) {
        document.getElementById(classificacao).textContent ="voce esta com sobrepeso";
    }
}