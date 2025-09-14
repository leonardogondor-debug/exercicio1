function pesoaltura() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    let imc = peso / (altura * altura);
    let imcformatado = imc.toFixed(2);

    document.getElementById("resultado").textContent = "seu imc é " + imcformatado;

    if (imc < 18.5) {
        document.getElementById("classificacao").textContent = "você está abaixo do peso";
    }
    else if (imc < 24.9) {
        document.getElementById("classificacao").textContent = "você está com o peso normal";
    }
    else if (imc < 29.9) {
        document.getElementById("classificacao").textContent = "você está com sobrepeso";
    }
}