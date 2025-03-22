function navbarScroll() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-sticky'); // Ajoute la classe au scroll
        } else {
            navbar.classList.remove('navbar-sticky'); // Retire la classe si on remonte
        }
    });
}


navbarScroll();

function incrementStats() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach((counter) => {
        counter.innerText = 0;

        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const c = +counter.innerText;

            // Calculer l'incrément en fonction de la différence entre la cible et la valeur actuelle
            const increment = target / 200;

            if (c < target) {
                // Ajouter l'incrément à la valeur actuelle
                counter.innerText = Math.ceil(c + increment);
                setTimeout(updateCounter, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
}

// document.addEventListener('DOMContentLoaded', navbarScroll);
document.addEventListener('DOMContentLoaded', incrementStats);