function pesoaltura() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    let imc = peso / (altura * altura);
    let resultado = imc.toFixed(2);

    if (imc < 18.5) {
        
    }
}