var header = document.querySelector(".header");
var nav = document.querySelector(".nav");
var toggler = document.querySelector(".header__toggler");
var scrollChange = 10;

const on__slideInDown = (e) => e.classList.add("animation__slideInDown");
const off__slideInDown = (e) => e.classList.remove("animation__slideInDown");
const on__slideOutUp = (e) => e.classList.add("animation__slideOutUp");
const off__slideOutUp = (e) => e.classList.remove("animation__slideOutUp");
const on__active = (e) => e.classList.add("active");
const off__active = (e) => e.classList.remove("active");
const on__fixed = (e) => e.classList.add("fixed");
const off__fixed = (e) => e.classList.remove("fixed");
const off__none = (e) => e.classList.remove("d_none");

window.addEventListener('scroll', (e) => { 
  scrollpos = window.scrollY;
  if (scrollpos >= scrollChange) { on__fixed(header); on__fixed(nav); }
  else if(scrollpos < scrollChange) { off__fixed(header); off__fixed(nav); }
  else { e.preventDefault(); }
});

toggler.addEventListener('click', (e) => {
  if( nav.classList.contains('d_none') ) { off__none(nav); on__slideInDown(nav); on__active(toggler); }
  else if( nav.classList.contains('animation__slideInDown') ) { off__slideInDown(nav); on__slideOutUp(nav); off__active(toggler); }
  else if( nav.classList.contains('animation__slideOutUp') ) { off__slideOutUp(nav); on__slideInDown(nav); on__active(toggler); }
  else { e.preventDefault(); }
});

nav.addEventListener('click', (e) => {
  if( nav.classList.contains('animation__slideInDown') ) { off__slideInDown(nav); on__slideOutUp(nav); off__active(toggler); }
  else { e.preventDefault(); }
});