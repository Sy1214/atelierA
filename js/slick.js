

$(function () {
	$('.autoplay').slick({
		autoplay: true,
		dots: true,
		arrows: true,
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					//   arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					//   arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 2
				}
			}
		]
	});
});