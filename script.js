// Função para rolar até o topo da página
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Exibir o botão apenas quando o id da seção atual não for "Inicio"
window.onscroll = function() {
    let button = document.getElementById('backToTopBtn');
    let homeSection = document.getElementById('Inicio');
    let servicosSection = document.getElementById('Servicos');
    let homePosition = homeSection.getBoundingClientRect().top;
    let servicosPosition = servicosSection.getBoundingClientRect().top;

    if (homePosition < 0 || homePosition >= window.innerHeight) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
};


function menuShow() {
    const navList = document.querySelector('.nav-list');
    const closeBtn = document.querySelector('.close-btn');
    const body = document.body;
  
    if (navList.classList.contains('active')) {
      navList.classList.remove('active');
      closeBtn.style.display = 'none';
      body.classList.remove('menu-active');
    } else {
      navList.classList.add('active');
      if (window.innerWidth <= 720) {
        closeBtn.style.display = 'block';
      }
      body.classList.add('menu-active');
    }
  }
  
  // Adicionar um event listener para os links de navegação para fechar o menu e redirecionar
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const navList = document.querySelector('.nav-list');
      if (window.innerWidth <= 720) {
        menuShow();
      } else {
        navList.classList.remove('active');
        document.body.classList.remove('menu-active');
        document.querySelector('.close-btn').style.display = 'none';
      }
    });
  });
  
  // Adicionar um event listener para redimensionamento da janela para garantir que o botão de fechar esteja oculto quando a largura for maior que 720px
  window.addEventListener('resize', () => {
    const closeBtn = document.querySelector('.close-btn');
    if (window.innerWidth > 720) {
      closeBtn.style.display = 'none';
    }
  });



  function formatPhoneNumber(event) {
    let input = event.target;
    let value = input.value.replace(/\D/g, '');

    if (input.id === 'phone' && value.length > 10) {
        value = value.slice(0, 10);
    } else if (input.id === 'mobile' && value.length > 11) {
        value = value.slice(0, 11);
    }

    if (input.id === 'phone') {
        value = value.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
    } else if (input.id === 'mobile') {
        value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    }

    input.value = value;
}

document.getElementById('phone').addEventListener('input', formatPhoneNumber);
document.getElementById('mobile').addEventListener('input', formatPhoneNumber);

function validateForm() {
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    if (!emailPattern.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return false;
    }

    return true;
}
  
