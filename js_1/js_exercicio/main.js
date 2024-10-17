function compararNumeros() {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    if (numero1 === "" || numero2 === "") {
        document.getElementById("resultado").textContent = "Por favor, preencha todos os campos.";
        return; 
    }

    numero1 = Number(numero1);
    numero2 = Number(numero2);

    if (numero1 > numero2) {
        document.getElementById("resultado").textContent = "Erro.";
    } else if (numero2 > numero1) {
        document.getElementById("resultado").textContent = "Sucesso.";
    } else {
        document.getElementById("resultado").textContent = "São iguais.";
    }
}