document.addEventListener('DOMContentLoaded', function () {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const carousel = card.querySelector('.carousel');
        const images = carousel.querySelectorAll('.carousel-image');
        const prevButton = card.querySelector('.carousel-prev');
        const nextButton = card.querySelector('.carousel-next');
        let currentIndex = 0;

        // Afficher l'image active
        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.remove('active');
                if (i === index) {
                    img.classList.add('active');
                }
            });
        }

        // Passer à l'image précédente
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
            showImage(currentIndex);
        });

        // Passer à l'image suivante
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
            showImage(currentIndex);
        });

        // Initialiser la première image
        showImage(currentIndex);
    });
});


// Pour le header 
let currentIndex = 0;
const images = document.querySelectorAll('.carrousel-image');

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

// Optionnel: Défilement automatique
setInterval(nextImage, 5000); // Change d'image toutes les 5 secondes