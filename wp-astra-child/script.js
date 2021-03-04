console.log("Astra Child Theme JS is running!");

document.addEventListener("DOMContentLoaded", function () {
    console.log("The DOM is ready!");

// Her starter smooth scroll funktionen 

( function( $ ) {
  $(document).on('click', 'a[href*="#"]:not([href="#"])', function(e) {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var hashStr = this.hash.slice(1);
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + hashStr +']');
      if (target.length) {
        $('html, body').animate({ scrollTop: target.offset().top }, 1000);
        window.location.hash = hashStr;
        return false;
        e.preventDefault();
      }
    }
  });
}(jQuery));

// Smooth scroll slut

});