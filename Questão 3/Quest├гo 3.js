
function carregaCSVRemoto(){
  
  var arquivo = 'https://raw.githubusercontent.com/VictorBrasil/JS/master/dados.csv';

  $.get(arquivo, function( dados ) {

    var dadosLinhas = dados.split(/\r\n|\n/);
    var dadosLista = "";
    
    for (var i=1; i<=150; i++) {
     var data = dadosLinhas[i].split(',');
    var nome = data[5];
    var localização = data[6];
    var cidade = data[13];
    var bairro = data[2];
    var NomeRedeWIFI = data[14];

    dadosLista += criaElementoLista([nome, localização, cidade, bairro, NomeRedeWIFI]);
    }
    document.getElementById("lista").innerHTML = dadosLista;
  });
}
function criaElementoLista(dados){
  
 var item_lista = '<li class="mdl-list__item mdl-list__item--three-line">';
     item_lista += '<span class="mdl-list__item-primary-content">';
     item_lista += '<i class="material-icons mdl-list__item-avatar">person</i>';
     item_lista += '<span>'+ dados[0] +'</span>';
     item_lista += '<span class="mdl-list__item-text-body">';
     item_lista += dados[1];
     item_lista += '</span></span></li>'; 
  
 return item_lista;
}
