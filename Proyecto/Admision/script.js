document.addEventListener("DOMContentLoaded", function() {
  // Función para manejar los menu links
  const menuLinks = document.querySelectorAll('.menu-link');
  const menuBlocks = document.querySelectorAll('.menu-block');

  menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Evitar el comportamiento por defecto del enlace

      const targetId = this.getAttribute('data-target');

      menuLinks.forEach(link => link.classList.remove('active'));
      this.classList.add('active');

      menuBlocks.forEach(block => {
        block.classList.remove('active');
        if (block.id === targetId) {
          block.classList.add('active');
        }
      });
    });
  });

  // Mostrar el primer bloque por defecto
  if (menuLinks.length > 0) {
    menuLinks[0].classList.add('active');
    document.getElementById(menuLinks[0].getAttribute('data-target')).classList.add('active');
  }

  // Función para manejar los toggle buttons
  var toggleButtons = document.querySelectorAll(".toggle-button");
  toggleButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      var toggleContent = button.nextElementSibling;
      toggleContent.style.display = toggleContent.style.display === "block"? "none" : "block";
    });
  });
});