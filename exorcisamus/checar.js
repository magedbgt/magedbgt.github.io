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
		const questions = [];
		questions[0] = document.getElementById("q1").value;
		questions[1] = document.getElementById("q2").value;
		questions[2] = document.getElementById("q3").value;
		questions[3] = document.getElementById("q4").value;
		questions[4] = document.getElementById("q5").value;
		questions[5] = document.getElementById("q6").value;
		questions[6] = document.getElementById("q7").value;
		questions[7] = document.getElementById("q8").value;
		questions[8] = document.getElementById("q9").value;
		questions[9] = document.getElementById("q10").value;

	//answers
		const ans = [];
		ans[0] = "d";
		ans[1] = "c";
		ans[2] = "d";
		ans[3] = "c";
		ans[4] = "a";
		ans[5] = "a";
		ans[6] = "c";
		ans[7] = "a";
		ans[8] = "b";
		ans[9] = "a";

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

			//	result.style.visibility = "visible";
				quizz.style.display = "none";
				msg.innerHTML = messages[n];
				nota.innerHTML = "Nota: "+correct * 10 + "%" ;
				alpacaimg.src = alpacas [n];
			}
			score();
		}
}
