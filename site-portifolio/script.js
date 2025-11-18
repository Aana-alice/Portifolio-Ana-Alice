// Menu toggle para mobile
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Animações com ScrollReveal
ScrollReveal().reveal('.container', { delay: 200, distance: '50px', origin: 'bottom' });
ScrollReveal().reveal('.skill', { delay: 300, interval: 100, distance: '30px', origin: 'left' });
ScrollReveal().reveal('.project', { delay: 300, interval: 150, distance: '30px', origin: 'right' });
ScrollReveal().reveal('form', { delay: 400, distance: '50px', origin: 'bottom' });

// Animações "líquidas" com Anime.js
// Flutuação suave em ícones de habilidades
anime({
    targets: '.skill i',
    translateY: [-10, 10],
    duration: 2000,
    easing: 'easeInOutSine',
    loop: true,
    direction: 'alternate'
});

// Ondulação em projetos
anime({
    targets: '.project',
    scale: [1, 1.02],
    duration: 3000,
    easing: 'easeInOutQuad',
    loop: true,
    direction: 'alternate'
});

// Flutuação no botão do hero
anime({
    targets: '.btn',
    translateY: [-5, 5],
    duration: 2500,
    easing: 'easeInOutSine',
    loop: true,
    direction: 'alternate'
});