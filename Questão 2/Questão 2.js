

    function CriarLista(dados){

     var item_lista = '<li class="l2">';
         item_lista += '<span class="s3">';
         item_lista += '<i class="i2">person</i>';
         item_lista += '<span>'+ dados[0] +'</span>';
         item_lista += '<span class="sp">';
         item_lista += dados[1];
         item_lista += '</span></span></li>'; 
         return item_lista;
    }

    function CarregarXML(){

      urlxml = 'https://raw.githubusercontent.com/ryganon/linguagens-script/master/projetos/dashboard-lite/tecnologia_uol.xml';

      $.get(urlxml, function(dados){
        AnalisaXML(dados);
      });
    }
    function AnalisaXML(xml){

      dadosLista = "";
      
      xmlDoc = $.parseXML(xml);
      $xml = $(xmlDoc);
      $filmes = $xml.find("item");
      
      $filmes.each(function(){
        titulo = $(this).find('title').text();
        descricao = $(this).find('description').text();
        datapub = $(this).find('pubDate').text();
        dadosLista += CriarLista([titulo, descricao]);
      });
      document.getElementById("projeto_lista").innerHTML = dadosLista;
    }
