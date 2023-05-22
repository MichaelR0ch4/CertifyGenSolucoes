

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

    maior.forEach(function(value, i){
      var arrayvetor = comp ? (vetor[i] != null ? vetor[i] : ''): value;
      var linha = !comp ? (linhaenviar[i] != null ? linhaenviar[i] : ''): value;
      var nomelst,cpflst;
      setTimeout(
         function(){
            /// console.log(linha+" / "+arrayvetor);
			//Verifica se vai ou não usar o verso na emissão do certificado define o tipo de pdf
			 nomelst = linha; // Nome do Aluno por linha
			 cpflst = linha; // CPF do aluno por linha
			 // SUBSTITUI NOME E CPF DO ALUNO PARA O ATUAL
			 frente = frente.replace("$[ALUNO]", nomelst);
			 frente = frente.replace("$[CPF]", cpflst);
			 alert(nomelst);
			 alert(cpflst);
			if(certverso_chk == "sim"){
			// Criar um PDF de duas paginas
			var doc = new jsPDF();
			doc.fromHTML("");
			doc.save("arquivo");
			alert("le com verso");
			}else{
			/// Criar um PDF de pagina unica
			alert("chegou até aqui");
			}
			//cerversofim
          //Aqui podemos trabalhar
      }, 10 * index);
    index = index + 0;
    })
  }
