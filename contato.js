const sections = [
    ['#Contato'],
  ];
//elementos a mudar
const contact = document.getElementById('contact');

const contact_ = new TextScramble(contact);

const elEvent = [contact_];

setTimeout(function(){
next(sections[0], elEvent[0]);
}, 1000)

