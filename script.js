// Função para rolar até o topo da página
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Exibir o botão apenas quando o id da seção atual não for "Home"
window.onscroll = function() {
    let button = document.getElementById('backToTopBtn');
    let homeSection = document.getElementById('Home');
    let servicosSection = document.getElementById('Servicos');
    let homePosition = homeSection.getBoundingClientRect().top;
    let servicosPosition = servicosSection.getBoundingClientRect().top;

    if (homePosition < 0 || homePosition >= window.innerHeight) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
};
