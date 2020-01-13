let questionsId = [];
function populateQuestions(number){
  for (let i = 1; i < number+1; i++) {
    questionsId.push('q'+number);
  }

  for (var i = 1; i < questionsId.length +1; i++) {
    let value = localStorage.getIem(questionsId[i]),
    el = document.getElementById(questionsId[i]);
    el.addEventListener('change', function(){saveAns();}, false );
    if (value != null) {
      el.value = value;
    }
  }
}
//
// if (localStorage.q1) {
//   document.getElementById('q1').value = localStorage.q1;
// }
// if (localStorage.q2) {
//   document.getElementById('q2').value = localStorage.q2;
// }
// if (localStorage.q3) {
//   document.getElementById('q3').value = localStorage.q3;
// }
// if (localStorage.q4) {
//   document.getElementById('q4').value = localStorage.q4;
// }
// if (localStorage.q5) {
//   document.getElementById('q5').value = localStorage.q5;
// }
// if (localStorage.q6) {
//   document.getElementById('q6').value = localStorage.q6;
// }
// if (localStorage.q7) {
//   document.getElementById('q7').value = localStorage.q7;
// }
// if (localStorage.q8) {
//   document.getElementById('q8').value = localStorage.q8;
// }
// if (localStorage.q9) {
//   document.getElementById('q9').value = localStorage.q9;
// }
// if (localStorage.q10) {
//   document.getElementById('q10').value = localStorage.q10;
// }

function saveAns(){
  for (let i = 1; i < questionsId.length +1; i++) {
    let value = document.getElementById(questionsId[i]).value;
    localStorage.setItem(questionsId[i], value);
  // }
  // let q1 = document.getElementById('q1').value,
  // q2 = document.getElementById('q2').value,
  // q3 = document.getElementById('q3').value,
  // q4 = document.getElementById('q4').value,
  // q5 = document.getElementById('q5').value,
  // q6 = document.getElementById('q6').value,
  // q7 = document.getElementById('q7').value,
  // q8 = document.getElementById('q8').value,
  // q9 = document.getElementById('q9').value,
  // q10 = document.getElementById('q10').value;
  // localStorage.setItem('q1', q1);
  // localStorage.setItem('q2', q2);
  // localStorage.setItem('q3', q3);
  // localStorage.setItem('q4', q4);
  // localStorage.setItem('q5', q5);
  // localStorage.setItem('q6', q6);
  // localStorage.setItem('q7', q7);
  // localStorage.setItem('q8', q8);
  // localStorage.setItem('q9', q9);
  // localStorage.setItem('q10', q10);
};

window.addEventListener('load', function(){populateQuestions(10);}, false );
