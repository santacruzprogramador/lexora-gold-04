/* ********** Menu **********
   Esta función autoejecutable (IIFE) escucha los clics en los enlaces del menú.
   Cuando el usuario hace clic en un <a>, se desmarca el checkbox (#menu-toggle),
   lo que provoca que el menú hamburguesa se cierre automáticamente.
*/
((d) => {
  const menuLinks = d.querySelectorAll('.menu a');
  const menuToggle = d.getElementById('menu-toggle');

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.checked = false; // desmarca el checkbox → cierra menú
    });
  });
})(document);
