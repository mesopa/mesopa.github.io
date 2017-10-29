$(document).ready(function() {
  $('#fullpage').fullpage({
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['MeSopa', 'Playground Moments', 'Pop Secret', 'Handcrafted Art', 'Danny Bukenov', 'Tasty Bakery', 'Pol Garcia Blades', 'Find Me'],
    responsiveWidth: 1100
  });

  $('#move-to').on('click', function(event){
    event.preventDefault();
    $.fn.fullpage.moveTo('slide2', 1);
  });
});