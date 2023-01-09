'use strict';

//Make Navbar Transparent when it is on the top//
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

//handle scrolling when tapping on the navbar menu
const navbarMenu =document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
 const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

//handle click on ''contact me' button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
 scrollIntoView('#contact');

})

//스크롤링이 내려가면 투명하게 변하기 make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeheight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=> {
  home.style.opacity = 1 - window.scrollY / homeheight
})

//show 'arrow up' button when scrolling down
const arrowUp = document.querySelector('.arrow-up')
document.addEventListener('scroll', ()=> {
  if(window.scrollY > homeheight / 2) {
    arrowUp.classList.add('visible');
  } else {
arrowUp.classList.remove('visible')
  }
});
//handle click on the 'arrow up' button
arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
});








function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: 'smooth'});
}


