$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
      '<div class="slider-navigation-left slider-navigation"><</div>',
      '<div class="slider-navigation-right slider-navigation">></div>'
    ],
    responsive: {
      0: {
        nav: false
      },
      767: {
        nav: true
      }
    }
  });

  $('#menu-toggle').click(function () {
      $('#mobile-navigation').addClass('open');
  });
  $('#close-menu').click(function () {
      $('#mobile-navigation').removeClass('open');
  });
  $('.paket .btn-green').click(function () {
      $('.paket').removeClass('open')
      var parent = $(this).parents('.paket')
      $(parent).addClass('open')
  });
  $('.about .tab-title').click(function (e){
    var activeNumber = e.target.dataset.number
    $('.about .tab-title').removeClass('active')
    $('.about .tab-title[data-number="' + activeNumber + '"]').addClass('active');
    $('.about .tabs-content').removeClass('show');
    $('.about .tabs-content[data-number="' + activeNumber + '"]').addClass('show');
  })

  $(".scroll-link").click(function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top - 120}, 1500);
  });
  $('#open-video').click(function () {
    $('#video-modal').addClass('show');
  });
  $('#video-modal-overlay').click(function () {
    $('.video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    $('#video-modal').removeClass('show');
  });
});