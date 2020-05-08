const sections = [
    ['criar', 'desenhar', 'observar', 'desenvolver', 'estudar']
  ];
//elementos a mudar
const atividade = document.getElementById('atividade');

const atividade_ = new TextScramble(atividade);

const elEvent = [atividade_];

setTimeout(function(){
  next(sections[0], elEvent[0]);
}, 5000)

setTimeout(typeWriter, 2000); 