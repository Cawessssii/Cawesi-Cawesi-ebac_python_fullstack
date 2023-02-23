
const validador = document.getElementById('form-validador');

function validarNumeros(numero1, numero2){
    if (numero2 > numero1){
        return true;
    } {
        return false;
    }
    
}


validador.addEventListener('submit', function(e){
    e.preventDefault();

    const num1 = document.getElementById('numero-1');
    let numero1 = Number(num1.value)

    const num2 = document.getElementById('numero-2');
    let numero2 = Number(num2.value)
    
    console.log(numero1, numero2)

    let msg_print = document.getElementById('msgRetorno')

    let status_validacao = "";

    console.log(validarNumeros(numero1, numero2))

    if (validarNumeros(numero1, numero2)){
        
        status_validacao = `Status Validação: Ótimo, <b>${numero2}</b> é maior que <b>${numero1}</b> - &#128516;`
        msg_print.style.display = "Block";
        msg_print.innerHTML = status_validacao;
        num1.value = "";
        num2.value = "";

    } else {

        status_validacao = `Status Validação: Ohhh, não foi desta vez, <b>${numero2}</b> é menor que <b>${numero1}</b> - &#128531;`;
        msg_print.style.display = "Block";
        msg_print.innerHTML = status_validacao;
        num1.value = "";
        num2.value = "";
    }
})


