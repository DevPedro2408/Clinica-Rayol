const menuHamburguer = document.querySelector("#menu-hamburguer")
const lista = document.querySelector(".lista")
const exit = document.querySelector(".exitHamburguer")

menuHamburguer.addEventListener("click", () => {
    if(lista.classList.contains("show")) {
        lista.classList.remove("show")
        exit.classList.remove("exitShow")
    } else {
        setTimeout(() => {
            lista.classList.add("show")
            exit.classList.add("exitShow")
        }, 250)
    }
})


function atualizarLinkContato() {
    const linkContato = document.querySelector('.contatoHeader a');

    if (window.innerWidth <= 1000) {
        // Quando a largura for 1243px ou menor, usar contato2
        linkContato.setAttribute('href', '#contato');
    } else {
        // Quando for maior que 1243px, usar contato
        linkContato.setAttribute('href', '#contato2');
    }
}

// Atualiza ao carregar a página
atualizarLinkContato();

// Atualiza ao redimensionar a janela
window.addEventListener('resize', atualizarLinkContato);


const links = document.querySelectorAll('.links');

links.forEach(link => {
link.addEventListener('click', () => {
    menuHamburguer.checked = false;
    lista.classList.remove("show")
    exit.classList.remove("exitShow")
});
});