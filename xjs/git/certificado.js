 //Variaveis Primordiais Globais
  var nomecurso,cargahoraria,aproveitamento;
  var cidade,mesinicio,mesencerramento;
  var cursoinicio,cursoencerramento;
  var anoemissao,certverso_chk;
  //Variaveis do editor
  var area,area1,area2,area3;
  
  //NICK EDITOR
  bkLib.onDomLoaded(function() {

   area = new nicEditor({fullPanel : true,maxHeight : 200}).panelInstance('area');
    area1 = new nicEditor({fullPanel : true,maxHeight : 200}).panelInstance('area1');
    area2 = new nicEditor({fullPanel : true,maxHeight : 200}).panelInstance('area2');
    area3 = new nicEditor({fullPanel : true,maxHeight : 200}).panelInstance('area3');
  });
  //]]>
var sf,ss,st;
sf =0;
ss =0;
st =0;
function ocultarnomes(){
   $('#first').toggle()
   if(sf =0){
   document.getElementById('first').style.width = "100%"
    sf =1;
   }else{
   document.getElementById('first').style.width = "33.3%"
    sf =0;
   }
  
  
}

function ocultarcpf(){
   $('#second').toggle()
   if(ss =0){
   document.getElementById('second').style.width = "100%"
    ss =1;
   }else{
   document.getElementById('second').style.width = "33.3%"
    ss =0;
   }
  
   
}

function ocultarconteudo(){
   $('#third').toggle()
    if(st =0){
   document.getElementById('third').style.width = "100%"
    st =1;
   }else{
   document.getElementById('third').style.width = "33.3%"
    st =0;
   }
  
}

function exibirtudo(){
   $('#first,#second,#third').toggle()
    document.getElementById('embol').style.height = "450px;"

}

function desab(){
area.removeInstance('area');
area1.removeInstance('area1');
area2.removeInstance('area2');
area3.removeInstance('area3');
}

function hab(){
 area = new nicEditor({fullPanel : true}).panelInstance('area');
 area1 = new nicEditor({fullPanel : true}).panelInstance('area1');
 area2 = new nicEditor({fullPanel : true}).panelInstance('area2');
 area3 = new nicEditor({fullPanel : true}).panelInstance('area3');
}

function redim(){
 document.getElementById('first').style.width = "33.3%"
 document.getElementById('second').style.width = "33.3%"
 document.getElementById('third').style.width = "33.3%"

 
 document.getElementById('area').style.width = "100%"
 document.getElementById('area1').style.width = "100%"
 document.getElementById('area2').style.width = "100%"
 document.getElementById('area').style.height = "200px"
 document.getElementById('area1').style.height = "200px"
 document.getElementById('area2').style.height = "200px"
 
 

 
 document.getElementById('embol').style.height = "450px;"


}

// FIM NICK EDITOR


// SOFTWARE


// Pega os valores inseridos nos campos de texto
function capturardados(){
nomecurso = document.getElementById("curso").value;
cargahoraria = document.getElementById("cargahoraria").value;
aproveitamento = document.getElementById("aproveitamento").value;
cidade = document.getElementById("cidade").value;
mesinicio = document.getElementById("mesinicio").value;
mesencerramento = document.getElementById("mesencerramento").value;
cursoinicio = document.getElementById("cursoinicio").value;
cursoencerramento = document.getElementById("cursoencerramento").value;
anoemissao = document.getElementById("anoemissao").value;
//certverso_chk = document.getElementById("certverso_chk").value;
//alert(nomecurso + "|" + cargahoraria + "|" + aproveitamento + "% |" + cidade + "|" + mesinicio + "|" + mesencerramento + "|" + cursoinicio + "|" + cursoencerramento + "|" + anoemissao + "|" + certverso_chk);
}

//verificar se campos são vazios
function verificar(){
capturardados();
if(nomecurso == null || nomecurso==""){
alert("Preencha [NOME DO CURSO ] campo vazio ou nulo !! confira o campo.");
}else{

if(cargahoraria == null || cargahoraria==""){
alert("Preencha [CARGA HORARIA] campo vazio ou nulo !! confira o campo.");
}else{

if(aproveitamento == null || aproveitamento==""){
alert("Preencha [APROVEITAMENTO] campo vazio ou nulo !! confira o campo.");
}else{

if(cursoinicio == null || cursoinicio==""){
alert("Preencha [CURSO DATA DE INICIO] campo vazio ou nulo !! confira o campo.");
}else{


if(cursoencerramento== null || cursoencerramento==""){
alert("Preencha [CURSO ENCERRAMENTOs] campo vazio ou nulo !! confira o campo.");
}else{
//alert("Dados preenchidos gerando certificados!" + "\n" + "Sistemas Soluções Enfermagem ~ 2023" + "\n" + "Versão: 1.36 por MS Dev");
desab();
certificadogen();
}}}}}

}//verificar fim

var cpfanterior,nomeanterior;
function certificadogen(){
  //Variaveis do Certificado
    var nomes = $("#area").val();
    var txtcpf = $("#area1").val();
    var frente = $("#area2").val();
    var verso = $("#area3").val();
	//ALTERAÇÃO DE VALORES FIXOS DE EMISSÃO DE CERTIFICADO
	frente = frente.replace("$[CURSO]", nomecurso);
	frente = frente.replace("$[APROVEITAMENTO]", aproveitamento);
	frente = frente.replace("$[CARGA_HORARIA]", cargahoraria);
	frente = frente.replace("$[MES_INICIO]", mesinicio);
	frente = frente.replace("$[MES_FIM]", mesencerramento);
	frente = frente.replace("$[DATA_INICIO]", cursoinicio);
	frente = frente.replace("$[DATA_FIM]", cursoencerramento);
	frente = frente.replace("$[ANO_EMISSAO]", anoemissao);
	//var lines = area.value.replace(/\r\n/g,"\n").split("\n"); //Vetor alternativo
  //verificando dados
    var linhaenviar = nomes.split("\n");
    var vetor = txtcpf.split("\n"); //esse e o textarea do qual quero criar o array [Vetor] quebra linha a linha e faz virar um vetor
    var index = 0;
    
    var comp = linhaenviar.length >= vetor.length;
    var maior = comp ? linhaenviar : vetor;

	 var divElement = document.createElement("canvas");  // private scope
	  divElement.style='border:1px solid black; '
   divElement.setAttribute("id", "myCanvas");  
   divElement.setAttribute("width", "3508");  
   divElement.setAttribute("height", "2481"); 
	
    maior.forEach(function(value, i){
      var arrayvetor = comp ? (vetor[i] != null ? vetor[i] : ''): value;
      var linha = !comp ? (linhaenviar[i] != null ? linhaenviar[i] : ''): value;
      var nomelst,cpflst;
      setTimeout(
         function(){
            /// console.log(linha+" / "+arrayvetor);
			//Verifica se vai ou não usar o verso na emissão do certificado define o tipo de pdf
			 nomelst = linha; // Nome do Aluno por linha
			 cpflst = arrayvetor; // CPF do aluno por linha
			 // SUBSTITUI NOME E CPF DO ALUNO PARA O ATUAL
			 frente = frente.replace("$[ALUNO]", nomelst);
			 frente = frente.replace("$[CPF]", cpflst);
			 
			 if (document.getElementById("certverso_chk").checked) {
				//Marcado (SIM) PDF de pagina multipla
				//alert("chegou sim aqui com verso");
				//alert(nomelst);
				//alert(cpflst + "cpf");
				
				 
   //divElement.id = "myCanvas";  
 
   //divElement.innerHTML = '';  
   document.body.appendChild(divElement);
      
	const renderThisHtml ='<div style="margin-top:26%; text-align: justify; margin-left:3%; margin-right:3%; text-align-last: center;">'+ frente + '</div>';
     const butMakeItLargerForStackOverflowDemoPurposes = `<span style="font-size: 90px; top:0px;">${renderThisHtml}</span>`;
     renderHtmlToCanvas( document.getElementById( 'myCanvas' ), butMakeItLargerForStackOverflowDemoPurposes );

function renderHtmlToCanvas( canvas, html ) {

    const ctx = canvas.getContext( '2d' );

    const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${canvas.width}" height="${canvas.height}">
<foreignObject width="100%" height="100%">
    <div xmlns="http://www.w3.org/1999/xhtml">${html}</div>
</foreignObject>
</svg>`;

    const svgBlob = new Blob( [svg], { type: 'image/svg+xml;charset=utf-8' } );
    const svgObjectUrl = URL.createObjectURL( svgBlob );

    const bgimg = new Image();
    const tempImg = new Image();
    tempImg.addEventListener( 'load', function() {
	     ctx.drawImage( bgimg, 0, 0, divElement.width, divElement.height);
        ctx.drawImage( tempImg, 0, 0 );
		ctx.font = "70px Arial";
		const date = new Date().toLocaleDateString('pt-PT'); 
		ctx.fillText(cidade + ", " + date , 2300, 1600);
        URL.revokeObjectURL( svgObjectUrl );
    } );
   
    bgimg.src = 'img/modelo.jpg'
    tempImg.src = svgObjectUrl;
		
}

//Salva o Arquivo
var imgData = canvas.toDataURL('image/jpeg');
var pdf = new jsPDF('landscape');
pdf.addImage(imgData, 'JPEG', 0, 0, 1350, 750);
var rnd = Math.floor(Math.random() * 100) + 1;
//const date = new Date().toLocaleString(); 
pdf.save(nomelst + "_Certificado" + rnd + date + ".pdf");



/*
let a= document.createElement('a');
a.target= '_blank';
a.href= divElement.toDataURL('image/jpg');
a.click();
*/
//document.body.removeChild(divElement);
				
			
				/*
			var doc = new jsPDF();
			doc.fromHTML("");
			doc.save("arquivo");*/
			 }else {
			   //Marcado (Não) PDF de pagina Unica
			    alert("chegou sim sem");
				alert(nomelst);
				alert(cpflst + "cpf");
			 }

			
			//cerversofim
          //Aqui podemos trabalhar
      }, 10 * index);
    index = index + 0;
    })
  }



