// =========================================================
// CLÍNICA FRAYOL — menu mobile
// Antes: ~40 linhas com timeout, checkbox e 3 listeners.
// Agora: um botão que liga/desliga a classe "aberto".
// =========================================================

const btnMenu = document.querySelector('#btnMenu');
const menu = document.querySelector('#menu');
const linksMenu = document.querySelectorAll('.menu__link');

// Abre ou fecha o menu
function alternarMenu(abrir) {
    menu.classList.toggle('aberto', abrir);
    btnMenu.setAttribute('aria-expanded', abrir);
    btnMenu.setAttribute('aria-label', abrir ? 'Fechar menu' : 'Abrir menu');

    // Impede a página de rolar por trás do menu aberto
    document.body.style.overflow = abrir ? 'hidden' : '';
}

// Clique no hambúrguer
btnMenu.addEventListener('click', () => {
    const estaAberto = menu.classList.contains('aberto');
    alternarMenu(!estaAberto);
});

// Clicou em um link do menu: fecha
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
