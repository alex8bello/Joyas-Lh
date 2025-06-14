// var didScroll;
// var lastScrollTop = 0;
// var delta = 5;
// var navbarHeight = $('footer').outerHeight();

// $(window).scroll(function(event) {
//   didScroll = true;
// });

// setInterval(function() {
//   if (didScroll) {
//     hasScrolled();
//     didScroll = false;
//   }
// }, 250);

// function hasScrolled() {
//   var st = $(this).scrollTop();

//   // Make sure they scroll more than delta
//   if (Math.abs(lastScrollTop - st) <= delta)
//     return;

//   // If they scrolled down and are past the navbar, add class .nav-up.
//   // This is necessary so you never see what is "behind" the navbar.
//   if (st > lastScrollTop && st > navbarHeight) {
//     // Scroll Down
//     $('footer').removeClass('nav-down').addClass('nav-up');
//   } else {
//     // Scroll Up
//     if (st + $(window).height() < $(document).height()) {
//       $('footer').removeClass('nav-up').addClass('nav-down');
//     }
//   }

//   lastScrollTop = st;
// }


// document.addEventListener("DOMContentLoaded", function() {
//   const footer = document.querySelector('footer');

//   // Verifica que el footer existe
//   if (footer) {
//       console.log("Footer encontrado.");

//       // Detecta si el usuario está al final de la página
//       window.addEventListener("scroll", function() {
//           const scrolledToBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;

//           if (scrolledToBottom) {
//               console.log("Usuario al final de la página, mostrando footer.");
//               footer.classList.add('visible'); // Muestra el footer
//           } else {
//               footer.classList.remove('visible'); // Oculta el footer si sube
//           }
//       });
//   } else {
//       console.error("No se encontró el elemento 'footer'.");
//   }
// });



ScrollReveal().reveal(".gallery > div", {
  delay: 200,
  distance: "50px",
  interval: 100,
  origin: "bottom",
  scale: 0.9,
});