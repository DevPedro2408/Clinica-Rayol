// =========================================================
// CLÍNICA FRAYOL — scripts da página
// 1) Menu mobile   2) Sombra no cabeçalho ao rolar
// 3) Animação dos elementos ao aparecerem na tela   4) Ano do rodapé
// =========================================================

const cabecalho = document.querySelector('#cabecalho');
const btnMenu = document.querySelector('#btnMenu');
const menu = document.querySelector('#menu');
const linksMenu = document.querySelectorAll('.menu a');

// ---------- 1) Menu mobile ----------
// Abre ou fecha o menu (abrir = true / false)
function alternarMenu(abrir) {
    menu.classList.toggle('aberto', abrir);
    btnMenu.setAttribute('aria-expanded', abrir);
    btnMenu.setAttribute('aria-label', abrir ? 'Fechar menu' : 'Abrir menu');

    // Impede a página de rolar por trás do menu aberto
    document.body.style.overflow = abrir ? 'hidden' : '';
}

btnMenu.addEventListener('click', () => {
    const estaAberto = menu.classList.contains('aberto');
    alternarMenu(!estaAberto);
});

// Clicou em qualquer link do menu: fecha
linksMenu.forEach((link) => {
    link.addEventListener('click', () => alternarMenu(false));
});

// Tecla ESC fecha o menu
document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape') alternarMenu(false);
});

// Se a tela crescer para desktop com o menu aberto, reseta tudo
window.addEventListener('resize', () => {
    if (window.innerWidth >= 1000) alternarMenu(false);
});

// ---------- 2) Sombra no cabeçalho ao rolar ----------
function atualizarCabecalho() {
    cabecalho.classList.toggle('cabecalho--rolou', window.scrollY > 10);
}

window.addEventListener('scroll', atualizarCabecalho, { passive: true });
atualizarCabecalho();

// ---------- 3) Animação ao aparecer na tela ----------
// O IntersectionObserver avisa quando um elemento entra na tela
const elementos = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visivel');
                observador.unobserve(entrada.target); // anima só uma vez
            }
        });
    }, { threshold: 0.15 });

    elementos.forEach((el) => observador.observe(el));
} else {
    // Navegador antigo: mostra tudo de uma vez
    elementos.forEach((el) => el.classList.add('visivel'));
}

// ---------- 4) Ano do rodapé sempre atualizado ----------
document.querySelector('#ano').textContent = new Date().getFullYear();
