// Adiciona a classe 'visible' quando o elemento entra na tela
const images = document.querySelectorAll('.image');

function checkVisibility() {
    images.forEach(image => {
        const rect = image.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            image.classList.add('visible');
        }
    });
}

// Verifica a visibilidade quando o usuário rolar a página
window.addEventListener('scroll', checkVisibility);

// Chama a função para garantir que a animação aconteça logo ao carregar a página
checkVisibility();

console.log("JavaScript está funcionando!");
