// Vous pouvez ajuster la vitesse ou ajouter des interactions si nécessaire
document.addEventListener('DOMContentLoaded', function() {
    const logosTrack = document.querySelector('.logos-track');
    const logos = document.querySelectorAll('.logos-track img');

    // Dupliquer les logos pour un effet infini fluide
    logosTrack.innerHTML += logosTrack.innerHTML;
});