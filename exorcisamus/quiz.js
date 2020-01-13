let questionsId = [];
function populateQuestions(number){
  for (let i = 1; i < number+1; i++) {
    questionsId.push('q'+i);
  }

  for (var i = 0; i < questionsId.length; i++) {
    let value = localStorage.getItem(questionsId[i]),
    el = document.getElementById(questionsId[i]);
    el.addEventListener('change', function(){saveAns();}, false );
    if (value != null) {
      el.value = value;
    }
  }
}

function saveAns(){
  for (let i = 0; i < questionsId.length; i++) {
    let value = document.getElementById(questionsId[i]).value;
    localStorage.setItem(questionsId[i], value);
  }
};

window.addEventListener('load', function(){populateQuestions(10);}, false );

function quizInit() {
	let quizz = document.getElementById("quiz"),
	quizIntro = document.getElementById("quizIntro"),
	buttonShowQuiz = document.getElementById("buttonShowQuiz");

	quizz.style.display = "block";
	quizIntro.style.display = "none";
	buttonShowQuiz.style.display = "none";
}

function certDisplay(){
	let certPrint = document.getElementById("certPrint"),
	buttonPrint = document.getElementById("buttonPrint"),
	gerar = document.getElementById("btnGerar");
	gerar.style.display = "none";
	certPrint.style.display = "block";
	buttonPrint.style.display = "block";
}

function check(){

	//respostas
		let questions = [];
		for (let i = 0; i < questionsId.length; i++) {
			questions.push(document.getElementById(questionsId[i]).value);
		}

	//answers
		const ans = ["d","c","d","c","a","a","c","a","b","b"];
		let emp = "empty",
		correct = 0;

		if(questions.includes(emp)){
			alert('Responda todas as perguntas.');

		}else {
			function score() {
				for (let i = 0; i < questions.length; i++) {
					if (questions[i] == ans[i]) {
						correct++;
						}
					}

				const messages = ["A Alpaca está tão radiante com esse resultado que disse que você merece um certificado 8)",
				 "A Alpaca ficou levemente motivada com esse resultado, mas sugere que você tente de novo!",
				 "Eita, aparentemente a Alpaca ficou triste com esse resultado e fugiu :C Tente de novo!"],

				 alpacas = ["https://magedbgt.github.io/exorcisamus/svg/alpaca2.svg", "https://magedbgt.github.io/exorcisamus/svg/alpaca1.svg", "https://magedbgt.github.io/exorcisamus/svg/noalpaca.svg"];

				let n,
			//	var result = document.getElementById("result");
			 	msg = document.getElementById("message"),
			 	alpacaimg = document.getElementById("alpacaimg"),
			 	quizz = document.getElementById("quiz"),
			 	nota = document.getElementById("nota"),
			 	gerar = document.getElementById("btnGerar");


				if (correct >= 7) {
					n = 0;
					gerar.style.display = "block";
				} else	if (correct > 3 && correct < 7) {
					n = 1;
				} else {
					n = 2;
				}

				quizz.style.display = "none";
				msg.innerHTML = messages[n];
				nota.innerHTML = "Nota: " + correct * 10 + "%" ;
				alpacaimg.src = alpacas[n];
			}
			score();
		}
}

function printCert(certPrint) {
   let certificado = document.getElementById(certPrint).innerHTML,
   certificado_ = document.body.innerHTML;

   document.body.innerHTML = certificado;

   window.print();

   document.body.innerHTML = certificado_;
}
