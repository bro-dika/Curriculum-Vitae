/* === HAMBURGER === */
const ham = document.getElementById('hamburger');
const menu = document.getElementById('menu');

ham.onclick = () => {
  ham.classList.toggle('active');
  menu.classList.toggle('show');
};

/* === NAVBAR SHRINK === */
const nav = document.getElementById('navbar');
window.addEventListener('scroll', ()=>{
  if(window.scrollY > 40) nav.classList.add('shrink');
  else nav.classList.remove('shrink');
});

/* === FADE & STAGGER === */
const fades = document.querySelectorAll('.fade');
const cards = document.querySelectorAll('.card'); // hanya dideklarasikan sekali

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
},{threshold:0.2});

fades.forEach(el => observer.observe(el));
cards.forEach((card, i)=>{
  card.style.transitionDelay = (i * 0.15) + 's';
  observer.observe(card);
});

/* === 3D TILT === */
cards.forEach(card => {
 card.addEventListener('mousemove', e => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width/2;
  const centerY = rect.height/2;
  const rotateX = ((y - centerY) / centerY) * -10;
  const rotateY = ((x - centerX) / centerX) * 10;
  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
 });
 card.addEventListener('mouseleave', ()=>{
  card.style.transform = "rotateX(0) rotateY(0)";
 });
});

/* === TYPING TRIGGER (Jika ada elemen typing) === */
const typing = document.querySelector('.typing');
if(typing){
  setTimeout(()=> typing.classList.add('run'), 500);
}
