
function Jogador(nome,forma){
	this.nome = nome;
	this.forma = forma;
}
var jogador1,jogador2;
var jogadorAtual;
var formas = ['X', 'O'];
var index = null;
var ponto1 = 0;
var ponto2 = 0;
var ponto = 0;
var nome1;


var tabuleiro = new Array(9);

  
	var nomeJogador1 = document.getElementById('jogador1').value;
	var nomeJogador2 = document.getElementById('jogador2').value;
	jogador1 = new Jogador(nomeJogador1, 0); //X
	jogador2 = new Jogador(nomeJogador2, 1); //O
	localStorage.setItem('nome1',nomeJogador1);
	localStorage.setItem('nome2',nomeJogador2);
	jogadorAtual = jogador1;

	//JOGADOR ATUAL
	document.getElementById('jogadorAtual').innerHTML = 'Jogador atual:  ' + jogadorAtual.nome;

	
	function Start(){
		window.location.reload();
		window.localStorage.clear();
		console.log('teste');
		localStorage.removeItem('total');
		localStorage.removeItem('placar-1');
		localStorage.removeItem('placar-2');
		localStorage.removeItem('pontos1');
		localStorage.removeItem('pontos2');

	}	

	function reset() { 
		window.location.reload();	
		
	}

	
	var melhor = document.querySelector('input[name="typeradio"]:checked').value;
	document.getElementById('Jogador1-placar').innerHTML = localStorage.nome1;
	document.getElementById('Jogador2-placar').innerHTML = localStorage.nome2;
	document.getElementById('melhor').innerHTML = 'Melhor de: ' + melhor;
	localStorage.setItem('cont',melhor); 
	c = JSON.parse(localStorage.getItem('cont'));
	Number(c);


	 function Atual() {
		document.getElementById('jogadorAtual').innerHTML = 'Jogador atual:  ' + jogadorAtual.nome;
	}


 	function tabuleiroIsFilled() {
		var preenchidos = 0;
		for(var i = 0; i < tabuleiro.length; i++)
				if(tabuleiro[i]	!= undefined) 
					preenchidos++;
					return preenchidos == tabuleiro.length;
	}

	var j;
	var j2;
	var t;
	var c;
	var t2;



	function marcado(ponto){

		if (ponto === 1) {
			 ponto1 = document.getElementById('placar-1').value;
			 ponto1 ++;
			 localStorage.setItem('pontos1',JSON.stringify(ponto1));
			 document.getElementById('placar-1').value = localStorage.pontos1;
			  teste();
		}
		if (ponto === 2) {
			ponto2 = document.getElementById('placar-2').value;
			ponto2 ++;
		 	localStorage.setItem('pontos2',JSON.stringify(ponto2));
			document.getElementById('placar-2').value = localStorage.pontos2;
			teste();
		}		
	}


function teste(){
		j = JSON.parse(localStorage.getItem('pontos1'));
		 Number(j);
		j2 = JSON.parse(localStorage.getItem('pontos2'));
		Number(j2);
		t = j+j2;
		Number(t);
		localStorage.setItem('total',JSON.stringify(t));
		t2 = JSON.parse(localStorage.getItem('total'));
		

		if (c == "1" && t2 == "1" && j > j2){
		//	console.log('Jogador ' + jogador1.nome + ' É O GRANDE VENCEDOR!!!');
			alert (jogador1.nome + ' É O GRANDE VENCEDOR!!!');	
			window.localStorage.clear();
			document.getElementById('placar-1').value = 0;
			document.getElementById('placar-2').value = 0;
			window.location.href='#main';
		}
		if (c == "1" && t2 == "1" && j2 > j) {
		//	console.log('Jogador ' + jogador2.nome + ' É O GRANDE VENCEDOR!!!');
			alert (jogador2.nome + ' É O GRANDE VENCEDOR!!!');
			window.localStorage.clear();
			document.getElementById('placar-1').value = 0;
			document.getElementById('placar-2').value = 0;
			window.location.href='#main';

		}
		if (c == "3" && t2 == "3" && j > j2) {
		//	console.log('Jogador ' + jogador1.nome + ' É O GRANDE VENCEDOR!!!');
			alert (jogador1.nome + ' É O GRANDE VENCEDOR!!!');
			window.localStorage.clear();
			document.getElementById('placar-1').value = 0;
			document.getElementById('placar-2').value = 0;
			window.location.href='#main';
		}
		if (c == "3" && t2 == "3" && j2 > j) {
		//	console.log('Jogador ' + jogador2.nome + ' É O GRANDE VENCEDOR!!!');
			alert (jogador2.nome + ' É O GRANDE VENCEDOR!!!');
			window.localStorage.clear();
			document.getElementById('placar-1').value = 0;
			document.getElementById('placar-2').value = 0;
			window.location.href='#main';
		}
		if (c == "5" && t2 == "5" && j > j2) {
			//console.log('Jogador ' + jogador1.nome + ' É O GRANDE VENCEDOR!!!');
			alert (jogador1.nome + ' É O GRANDE VENCEDOR!!!');
			window.localStorage.clear();
			document.getElementById('placar-1').value = 0;
			document.getElementById('placar-2').value = 0;
			window.location.href='#main';
		}
		if (c == "5" && t2 == "5" && j2 > j) {
		//	console.log('Jogador ' + jogador2.nome + ' É O GRANDE VENCEDOR!!!');
			alert (jogador2.nome + ' É O GRANDE VENCEDOR!!!');
			window.localStorage.clear();
			document.getElementById('placar-1').value = 0;
			document.getElementById('placar-2').value = 0;
			window.location.href='#main';
		}
		
		
	}

	

	function Linha(){
		for (var i = 0; i < 7;i += 3) {
			if (tabuleiro[i] == 'X' && tabuleiro[i+1] =='X' && tabuleiro[i + 2] =='X') {
				alert (jogador1.nome + ' VENCEU ESSA RODADA!!!');
				marcado(1);		
				reset();
						
				
				}
				if ( tabuleiro[i] == 'O' && tabuleiro[i + 1] == 'O' && tabuleiro[i + 2] == 'O' ) {
					alert (jogador2.nome + ' VENCEU ESSA RODADA!!!');
					marcado(2);
					reset();
					
				}
			}
		}

	function Coluna() {
			for( var i = 0; i < 3; i++) {
				if ( tabuleiro[i] == 'X' && tabuleiro[i + 3] == 'X' && tabuleiro[i + 6] == 'X' ) { 
					alert (jogador1.nome + ' VENCEU ESSA RODADA!!!');
					marcado(1);
					reset();
				
				}
				if ( tabuleiro[i] == 'O' && tabuleiro[i + 3] == 'O' && tabuleiro[i + 6] == 'O' ) {
					alert (jogador2.nome + ' VENCEU ESSA RODADA!!!');
					marcado(2);
					reset();
					
				}
			}
		}

		function Diagonal() {
			if ( (tabuleiro[0] == 'X' && tabuleiro[4] == 'X' && tabuleiro[8] == 'X') ||
	 			 (tabuleiro[2] == 'X' && tabuleiro[4] == 'X' && tabuleiro[6] == 'X')) {
					alert (jogador1.nome + ' VENCEU ESSA RODADA!!!');
				marcado(1);
			reset();
			} else if ( (tabuleiro[0] == 'O' && tabuleiro[4] == 'O' && tabuleiro[8] == 'O') ||
					 (tabuleiro[2] == 'O' && tabuleiro[4] == 'O' && tabuleiro[6] == 'O') ) {
					alert (jogador2.nome + ' VENCEU ESSA RODADA!!!');
					marcado(2);
				reset();
			} 
		}	
		
		
		  function setOnCeil (cel, pos) { 
				if(tabuleiro[pos] == undefined) {
					cel.innerHTML = formas[jogadorAtual.forma];
					tabuleiro[pos] = formas[jogadorAtual.forma];

					//define o jogador da rodada
					(jogadorAtual.forma == 0) ? jogadorAtual = jogador2 : jogadorAtual = jogador1;
					Atual();
					
				} else alert('Selecionar uma Opção Valida');

				Linha();
				Coluna();
				Diagonal();
	
				if ( tabuleiroIsFilled() ) {
					alert ('Deu Velha');
					reset();
				}	
			}

		