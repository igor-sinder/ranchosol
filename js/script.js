document.addEventListener('DOMContentLoaded', () => {
    // Lógica para o menu responsivo (hambúrguer)
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Fechar o menu ao clicar em um link (para mobile)
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

    // Atualizar o ano no rodapé
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Adicionar classe 'active' ao link da página atual na navegação (opcional)
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.main-nav ul li a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
    
    // Lógica para a galeria de imagens do produto (nas páginas de detalhe)
    const mainProductImage = document.querySelector('.main-product-image');
    const thumbnailGallery = document.querySelector('.thumbnail-gallery');

    if (mainProductImage && thumbnailGallery) {
        const thumbnails = thumbnailGallery.querySelectorAll('img');

        // Define a primeira miniatura como ativa ao carregar
        if (thumbnails.length > 0) {
            thumbnails[0].classList.add('active');
        }

        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                // Remove a classe 'active' de todas as miniaturas
                thumbnails.forEach(t => t.classList.remove('active'));

                // Adiciona a classe 'active' na miniatura clicada
                thumbnail.classList.add('active');

                // Muda a imagem principal para a imagem da miniatura clicada
                mainProductImage.src = thumbnail.src;
            });
        });
    }


});
