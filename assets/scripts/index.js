const navSlide = () => {
  const burger = document.querySelector( '.burger' );
  const nav = document.querySelector( '.nav-links' );
  const navLinks = document.querySelectorAll( '.nav-links li' );

  burger.addEventListener( 'click', () => {
    nav.classList.toggle( 'nav-active' );
    navLinks.forEach( ( link, index ) => {
      if ( link.style.animation ) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .5}s`;
      }
    } );

    burger.classList.toggle( 'toggle' );
  } );

  nav.addEventListener( 'click', () => {
    nav.classList.toggle( 'nav-active' );
    navLinks.forEach( ( link, index ) => {
      if ( link.style.animation ) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .5}s`;
      }
    } );

    burger.classList.toggle( 'toggle' );
  } );
}

$( document ).ready( function () {

  $( "a" ).on( 'click', function ( event ) {


    if ( this.hash !== "" ) {
      event.preventDefault();

      var hash = this.hash;

      $( 'html, body' ).animate( {
        scrollTop: $( hash ).offset().top
      }, 800, function () {


        window.location.hash = hash;
      } );
    }
  } );
} );

navSlide();

AOS.init();