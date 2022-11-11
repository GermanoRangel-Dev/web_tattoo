function mostrarImagem(img){
  var imagemGrande = document.getElementById("imagemAumentada");
  imagemGrande.src=img.src;
  imagemGrande.parentElement.style.display='block';
}

function imagemEsquerda(){
  var btnEsquerda = document.getElementsByClassName("btnEsquerda");
  btnEsquerda.src=img.src;
  btnEsquerda.parentElement.style.display='block';
}
function imagemDireita(){
  var btnDireita = document.getElementsByClassName("btnDireita");
  btnDireita.src=img.src;
  btnDireita.parentElement.style.display='block';
}

var scrollAtual = 0;
$('#btnEsquerda, #btnDireita').click(fazerScroll);

function fazerScroll(e) {
    var direcao = e.target.id == 'btnDireita' ? 1 : -1;
    $('#galeria').animate({
        scrollLeft: scrollAtual += 200 * direcao
    }, 1000);
}
