$(document).ready(function(){

    $('form').submit(function(ev){
        ev.preventDefault();

        let nomeTarefa = $('#nometarefa').val();

        $('#itens-lista').append(`<li>${nomeTarefa}</li>`);

        $('#nometarefa').val("");
    });

    
    $(document).on("click", '#itens-lista > li', (event) => {

        let marcacao = $(event.target).css('text-decoration-line');

        if (marcacao == "none") {
            $(event.target).css('text-decoration', 'line-through dotted rgb(255, 0, 0)');
        } else {
            $(event.target).css('text-decoration', 'none');
        };
    });

});