$(document).ready(function(){

    $('.header-main-content-img').click(function(){

        $('.formulario')[0].style.display = "block"
    })


    $('#btn-cancel').click(function(){

        $('.formulario')[0].style.display = "none"
    })

    $('#btn-add').click(function(ev){

        ev.preventDefault()

        let nome_tarefa = $('#tarefa').val()
        let data_fim_tarefa = $('#data-termino-tarefa').val()

        if (!data_fim_tarefa){
            data_fim_tarefa = "-"
        }

        let deadline = ""

        let dt_init = new Date()
        let inicio_tarefa = dt_init.toLocaleDateString()

        if (data_fim_tarefa.length > 1){
            
            let data_expiracao = data_fim_tarefa.split("-")
            deadline = `${data_expiracao[2]}/${data_expiracao[1]}/${data_expiracao[0]}`
        }

        let contador = $('#lista-de-tarefas-nome li').length + 1

        $('#lista-de-tarefas-nome').append(`<li>${nome_tarefa}</li>`)
        $('#lista-de-tarefas-datainicial').append(`<li>${inicio_tarefa}</li>`)
        $('#lista-de-tarefas-dataTermino').append(`<li>${data_fim_tarefa}</li>`)
        $('#lista-de-tarefas-status').append(`<li>${contador}</li>`)
        
        $('#tarefa').val("")
        $('#data-termino-tarefa').val("")

        $('.formulario')[0].style.display = "none"
    })

    $(document).on('click', '#lista-de-tarefas-nome li', (event) => {

        let marcador = $(event.target).css('text-decoration-line')
        console.log(marcador)

        if (marcador == "none"){
            $(event.target).css('text-decoration', 'line-through dotted rgb(255, 0, 0)')
        } else {
            $(event.target).css('text-decoration', 'none')
        }
        
    })


})