jQuery(function($) {
	if ($(window).width() <= 630) {
		// do your stuff

		$('.advisory_board_text').appendTo('.et_pb_toggle_content');
		$('.advisory_board_title').appendTo('.et_pb_toggle_title');
	}
	$(document).ready(function() {
		$("button").click(function() {
			$("input:text").val("Glenn Quagmire");
		});
	});

	$(document).ready(function() {

		$(".no_row").each(function(i) {
			$(this).attr('data-id', i);
		});
		$(".popup").each(function(i) {
			$(this).removeClass('.et_pb_row');
			// $(this).removeClass('.worrksfdvs');
			// $(this).appendTo('.our_team');
			$(this).removeClass('.et_pb_row');
			$(this).addClass("item" + i);

			//click event of the button
		});
		$(".popup").wrapInner("<div class='new_wrap' />");

		$(".no_row").click(function() { //click event of the button
			$('.popup').removeClass('.et_pb_row');
			console.log(this);
			var item_id = $(this).attr('data-id');
			console.log(item_id);

			$('.item' + item_id).show();
		});

		$(".popup .close").on("click", function() { //click event of the close button in popup
			$(".popup").hide(); //hide popup
		});
	});
});





// function scrollTo(hash) {
// 	location.hash = "#" + hash;
// }
// location.hash = "#" + hash;
jQuery(function($) {
	$(document).ready(function() {

		// $(document).ready(function() {
		// if (window.location.hash) {
		// 	var hash = window.location.hash;
		// 	$('html, body').animate({
		// 		scrollTop: $(hash).offset().top
		// 	}, 500);
		// }
		// $('.et_pb_more_button').click(function(event) {
		// 	$('html, body').animate({
		// 		scrollTop: $('#custom_o').offset().top
		// 	}, 500);
		// 	event.preventDefault();
		// });
	});
});




// if (window.location.pathname == "/sucess-stories/") {
// 	console.log("that");
// 	var newhash = location.hash.split('')[1];
// 	$('.tile_click').removeClass('current');
// 	$('.tile_click').eq(parseInt(newhash, 10)).trigger('click');
// 	var d = $('.tab-content').get(newhash);
// 	console.log(d);
//
// 	$(d).removeClass('current');
// 	$(d).addClass('current');
// 	setTimeout(function() {
//
// 		$('html, body').animate({
// 			scrollTop: $(".tile_click").offset().top
// 		}, 2000);
// 	});
// }

jQuery(function($) {
	$(document).ready(function() {

		$('.tile_click').each(function(i) {
			$(this).attr('data-tab', i);
			// $(this).attr('id', i);
		});

		$('.tab-content').each(function(i) {
			$(this).attr('data-tab', i);
			// $(this).attr('id', i);
			$(this).appendTo('.testing_click');
		});




		$('.tile_click').click(function() {
			$('.tab-content').removeClass('current');
			var tab_id = $(this).attr('data-tab');
			// var tab_id = $(this).attr('id');
			$('.tile_click').removeClass('current');
			var d = $('.tab-content').get(tab_id);
			console.log(d);
			$(d).removeClass('current');
			// window.location.hash = d;
			$(d).addClass('current');
			$(this).addClass('current');

		});

	});
});









jQuery(function($) {

	$(document).ready(function() {
		$('#recurring').click(function(event) {
			console.log("f");
			$('span.arrow_down').addClass("down");
			if ($('span.arrow_down').hasClass("down")) {
				console.log("f");
				$(this).removeClass("down");
			}
		});
		$('#move_down').click(function(event) {
			console.log("hel");
			$('html, body').animate({
				scrollTop: $('#kelly').offset().top
			}, 500);
			event.preventDefault();
		});
		$('#AZ').click(function(event) {
			$('html, body').animate({
				scrollTop: $('#Ariz').offset().top
			}, 500);
			event.preventDefault();
		});
		$('#NV').click(function(event) {
			$('html, body').animate({
				scrollTop: $('#Neveda').offset().top
			}, 500);
			event.preventDefault();
		});
		$('#DENVER').click(function(event) {
			$('html, body').animate({
				scrollTop: $('#Denver').offset().top
			}, 500);
			event.preventDefault();
		});
		$('#IN').click(function(event) {
			$('html, body').animate({
				scrollTop: $('#Indi').offset().top
			}, 500);
			event.preventDefault();
		});
		$('#NE').click(function(event) {
			$('html, body').animate({
				scrollTop: $('#Mass').offset().top
			}, 500);
			event.preventDefault();
		});
		$('#NYC').click(function(event) {
			$('html, body').animate({
				scrollTop: $('#Newyork').offset().top
			}, 500);
			event.preventDefault();
		});
		$('#FL').click(function(event) {
			$('html, body').animate({
				scrollTop: $('#Flord').offset().top
			}, 500);
			event.preventDefault();
		});
	});
});
jQuery(function($) {
	function movedown() {

		$('html, body').animate({
			scrollTop: $("#custom_o").offset().top
		}, 2000);

	}


	$(document).ready(function() {
		// function movedown() {
		//
		// 	$('html, body').animate({
		// 		scrollTop: $("#custom_o").offset().top
		// 	}, 2000);
		//
		// }

		$('.horizontal_slider').each(function() {
			$(this).appendTo('.owl-carousel').wrapAll("<div class='item' />");
		});

		$('.item').each(function(i) {
			$(this).attr('data-hash', i);
			// $(this).attr('id', 'slide-' + i);
		});


		// window.location.hash = "";
		// $(function() {
		// 	var hash = parseInt(location.hash.replace('#', ''), 10);
		//
		//
		//
		// 	if (window.location.hash) {
		// 		setTimeout(function() {
		// 			if (typeof hash === 'number') {
		// 				$('html, body').animate({
		// 					scrollTop: $("#custom_o").offset().top
		// 				}, 2000);
		// 			}
		// 		}, 150);
		//
		//
		//
		// 	} else {
		// 		console.log("abc");
		//
		// 	}
		//
		// });


		$(function() {
			function movedown() {

				$('html, body').animate({
					scrollTop: $("#custom_o").offset().top
				}, 2000);

			}
			$("#move_down").click(function() {
				console.log("hel");
				$('html, body').animate({
					scrollTop: $("#custom_o").offset().top
				}, 2000);
			});
			var hash = parseInt(location.hash.replace('#', ''), 10);



			if (window.location.hash) {

				if (window.location.pathname == "/our-programs/") {
					setTimeout(function() {
						if (typeof hash === 'number') {
							$('html, body').animate({
								scrollTop: $("#custom_o").offset().top
							}, 2000);
						}
					}, 150);
				}


				if (window.location.pathname == "/success-stories/") {
					console.log("that");
					var newhash = location.hash.split('')[1];
					$('.tile_click').removeClass('current');
					$('.tile_click').eq(parseInt(newhash, 10)).trigger('click');
					var d = $('.tab-content').get(newhash);
					console.log(d);

					$(d).removeClass('current');
					$(d).addClass('current');
					setTimeout(function() {

						$('html, body').animate({
							scrollTop: $(".tile_click").offset().top
						}, 2000);
					});
				}

			} else {
				console.log("abc");

			}

		});

		// $(function() {
		// 	var hash = parseInt(location.hash.replace('#', ''), 10);
		// 	// hash = hash.split('-')[2];
		// 	if (window.location.hash) {
		// 		if (window.location.pathname == "/sucess-stories/") {
		// 			console.log("that");
		// 			setTimeout(function() {
		//
		// 				$('html, body').animate({
		// 					scrollTop: $(".tile_click").offset().top
		// 				}, 2000);
		// 			});
		// 		}
		//
		// 	} else {
		// 		console.log("abc");
		//
		// 	}
		//
		// });

		// <div id="foo"></div>


		var owl = $('.owl-carousel');
		// var items;
		// var item;
		$('.owl-carousel').owlCarousel({
			items: 1,
			loop: false,
			// mouseDrag: false,
			// touchDrag: false,
			center: true,
			margin: 10,
			URLhashListener: true,
			autoplayHoverPause: true,
			startPosition: 'URLHash'
		});
		// $('.item').each(function(i) {
		// 	$(this).attr('data-hash', i);
		// 	// $(this).attr('id', i);
		// });

		// $('#fwork').click(function() {
		// 	console.log("work");
		// 	 owl.jumpTo(3);
		// 	// $('.owl-carousel').trigger('to.owl.carousel', 3);
		// });

		// owl.owlCarousel({
		// 	items: 1,
		// 	loop: false,
		// 	center: true,
		// 	mouseDrag: false,
		// 	touchDrag: false,
		// 	margin: 10,
		// 	callbacks: true,
		// 	URLhashListener: true,
		// 	// autoplay: false,
		// 	autoplayHoverPause: true,
		// 	startPosition: 'URLHash',
		//
		// 	// nav: true,
		// 	// navText: ["", ""],
		// 	// smartSpeed: 900,
		// 	// margin:10,
		// 	// URLhashListener: true,
		// 	// loop: false,
		// 	// items: 1,
		// 	// URLhashListener: true,
		// 	// autoplayHoverPause: true,
		// 	// startPosition: 'URLHash',
		// 	dots: true,
		// });
		// owl.on('changed.owl.carousel', function(property) {
		// 	var current = property.item.index;
		// 	window.location.hash = current + 1;
		// });
		// owl.on('changed.owl.carousel', function(event) {
		// 	location.hash = 'slide' + event.property.value;
		// });

		function callback(e) {
			items = e.item.count; // Number of items
			item = e.item.index; // Position of the current item
		}

		function next() {
			owl.trigger('next.owl');
			console.log("next");
		}

		function prev() {
			owl.trigger('prev.owl');
			console.log("next");
		}



	});

});