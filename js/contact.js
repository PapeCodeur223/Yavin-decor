// Validation du formulaire
(() => {
    'use strict';

    // Récupérer tous les formulaires auxquels appliquer la validation
    const forms = document.querySelectorAll('.needs-validation');

    // Boucler sur les formulaires et empêcher la soumission si invalide
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  })();