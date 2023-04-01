window.onload =  function(){
    let qtd_images = document.getElementsByClassName('img_box_galeria');
    
    let campo_qtd_images = document.getElementById('qtd_img');

    campo_qtd_images.innerText = `${qtd_images.length} Foto(s).`;
};