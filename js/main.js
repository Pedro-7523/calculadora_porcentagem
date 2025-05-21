function calcular_porcentagem() {

    let btn = document.getElementById("enviar");

    btn.addEventListener("click", function (event) {
        event.preventDefault();

        let number = parseFloat(document.getElementById("num").value);
        let porcentagem = parseFloat(document.getElementById("porcentagem").value);

        let r = document.getElementById("resposta");

        if (isNaN(number) || isNaN(porcentagem) || number <= 0 || porcentagem <= 0) {
            r.innerHTML = "Por favor, insira valores válidos.";
            return; 
        }
        

        let calc = number * (porcentagem / 100);

        r.innerHTML = porcentagem + "% de " + number + " é " + calc.toFixed(2);
    });
}

calcular_porcentagem();