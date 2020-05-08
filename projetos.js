
const sections = [
                    ['#Projetos'],
                  ];
//elementos a mudar
const work = document.getElementById('work');

const work_ = new TextScramble(work);

elEvent = [work_];

setTimeout(function(){
  next(sections[0], elEvent[0]);
}, 1000)

//mostra projetos
const parag = "</p><p class='left'>";
const nomes_projetos = ['Borgato Advocacia Mobile', 'Exorcisamus Mobile', 'Most Valuable Timer Mobile', 'Gefro Mobile'];

const hash_projetos = ['#2019 #blogger #html5 #css3 #js', 
  '#2019 #blogger #html5 #css3 #js', 
  '#2019 #pwa #github #js #html5 #css3', 
  '#2019 #github #html5 #css3'
];

const link_projetos = [
  'https://www.borgatoadvocacia.com.br',
  'https://www.exorcisamus.com',
  'https://mostvaluabletimer.com/',
  'https://www.gefro.com.br'
];

const src_projetos = [
  'img/ba-mob.jpeg',
  'img/exorcisamus-mob.jpeg',
  'img/mvt-mob.jpeg',
  'img/gefro-mob.jpeg'
];

const src_proj_body = [
  '../img/ba-desktop.jpg',
  '../img/exorcisamus-desktop.jpg',
  '../img/mvt-desktop.jpg',
  '../img/gefro-desktop.jpg'
];

const descricoes_projetos = [
  'Site para o escritório Borgato Advocacia em Jaú.',
  'Blog de guias e notícias para Arcebispos Exorcistas no jogo Ragnarok Online.'+parag+'De minha autoria.',
  'Timer auxiliar para caçada de MVPs e farm de instâncias no jogo Ragnarok Online.'+parag+'De minha autoria.'+parag+'Disponível na web e em pwa.',
  'Site para a GEFRO - Assessoria e Consultoria em Manutenção e Controle de Frotas.'
];

function showProjeto(el){
  let panel = document.getElementById('projetos_sites'),
  imagemP = document.getElementById('imagem_projeto'),
  linkP = document.getElementById('link_projeto'),
  descP = document.getElementById('projeto_p'),
  hashP = document.getElementById('hashtag_projeto');
  let index = el.name;
  let body_proj = document.getElementById('body_proj');
  let section_work = document.getElementById('section_work');

  panel.classList.remove('seen');
  // panel.style.opacity = '0';
  setTimeout(function(){
    imagemP.src = src_projetos[index];
    imagemP.alt = nomes_projetos[index];
    hashP.innerHTML = hash_projetos[index];
    linkP.href = link_projetos[index];
    descP.innerHTML = descricoes_projetos[index];
    section_work.style.backgroundImage = 'linear-gradient(rgba(22, 22, 22, 1), rgba(22, 22, 22, 0.8), rgba(22, 22, 22, 0.5),rgba(22, 22, 22, 0))';
    body_proj.style.backgroundImage = 'linear-gradient(rgba(22, 22, 22, 0.7), rgba(22, 22, 22, 0.99)), url('+src_proj_body[index]+')';
    panel.classList.add('seen');
  }, 700);
}

window.addEventListener('load', function(){
  const projLogos = document.getElementsByClassName('proj');

  for(let i = 0; i<projLogos.length; i++){
    projLogos[i].addEventListener('click', function(){showProjeto(this);}, false);
  }
}, false);