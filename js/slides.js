$(function () {
	$('.img-slider').slick({
		slidesToShow:3,
		infinite: true,
		slidesToScroll:1,
		centerMode: true,
		prevArrow: $("#arrow-prev"),
		nextArrow: $("#arrow-next"),
		responsive:[
			{
				breakpoint: 700,
				settings:{
					slidesToShow:1
				}
			}
		]
		
	});

	$('.img-slider').on('afterChange', function(){
		$("#img-name").text($(".slick-center").data("-name") );
	});
})