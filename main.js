let change = document.getElementById('change'),
name = 'Maria Eugênia',
speed = 200,
i, t = 0;

window.addEventListener('load', typeWriter, false);

function typeWriter() {
  let txt = name;
  if (t < txt.length) {
    change.innerHTML += txt.charAt(t);
    t++;
    setTimeout(typeWriter, speed);
  }
}
