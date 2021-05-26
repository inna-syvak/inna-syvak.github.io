$(document).ready(function(){
	$('.slider').slick({
		centerMode: true,
		centerPadding: '30px',
		slidesToShow: 3,
		infinite: false,
		initialSlide:1,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 3
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			}
		}
		]
	});

});