var slideIndex = 0;
var reviewIndex = 0;
showSlides();
showReviews();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName( "slide" );
  for ( i = 0; i < slides.length; i++ ) {
    slides[ i ].style.display = "none";
  }
  slideIndex++;
  if ( slideIndex > slides.length ) {
    slideIndex = 1
  }
  slides[ slideIndex - 1 ].style.display = "block";
  setTimeout( showSlides, 5000 );
}

function showReviews() {
  var i;
  var reviews = document.getElementsByClassName( "review" );
  for ( i = 0; i < reviews.length; i++ ) {
    reviews[ i ].style.display = "none";
  }
  reviewIndex++;
  if ( reviewIndex > reviews.length ) {
    reviewIndex = 1
  }
  reviews[ reviewIndex - 1 ].style.display = "block";
  setTimeout( showReviews, 7500 );
}