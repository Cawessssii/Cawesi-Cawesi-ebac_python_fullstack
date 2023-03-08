$(document).ready(function(){

    $("#nome").mouseleave(function(){

        let caracter = $("#nome").val()

        console.log(caracter)

        if ( caracter.length > 0) {
            $(".box_form_label_nome").css('top', "0")
        } else {
            $(".box_form_label_nome").css('top', "20px")
        }
    });

    $("#email").change(function(){

        let caracter = $("#email").val()

        if ( caracter.length > 0) {
            $(".box_form_label_email").css('top', "0")
        } else {
            $(".box_form_label_email").css('top', "20px")
        }
    });

    $("#cpf").change(function(){

        let caracter = $("#cpf").val()

        if ( caracter.length > 0) {
            $(".box_form_label_cpf").css('top', "0")
        } else {
            $(".box_form_label_cpf").css('top', "20px")
        }
    });

    $('#cpf').mask('000.000.000-00');

    $('#telefone').mouseenter(function(){
        let tipo_telefone = $('#tipo_telefone').val()
        console.log(tipo_telefone)

        if (tipo_telefone == "celular") {
            $('#telefone').mask('(00) 0 0000-0000')
        } else {
            $('#telefone').mask('(00) 0000-0000')
        }
    });

});