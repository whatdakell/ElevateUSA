
jQuery(function($) {
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
	$( ".popup" ).wrapInner( "<div class='new_wrap' />");

	$(".no_row").click( function() { //click event of the button
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
jQuery(function($) {
$(document).ready(function() {
	$('.tile_click').each(function(i) {
		$(this).attr('data-tab', i);
		$(this).attr('id', i);
	});

	$('.tab-content').each(function(i) {
		$(this).attr('data-tab', i);
	});
	$('.tile_click').click(function() {
		$('.tab-content').removeClass('current');
		var tab_id = $(this).attr('data-tab');
		$('.tile_click').removeClass('current');
		var d = $('.tab-content').get(tab_id);
		console.log(d);
		$(d).removeClass('current');
		$(d).addClass('current');
		$(this).addClass('current');
	});

});
});
//
// jQuery(function($) {
// 	$(document).ready(function() {
// 		$('.simple_slider').each(function() {
// 			$(this).appendTo('.s-owl-carousel');
// 		});
// 		var sowl = $('.s-owl-carousel');
// 		sowl.owlCarousel({
// 			// loop:true,
// 			// margin:10,
// 			rewindNav: false,
// 			nav: true,
// 			items: 1,
// 		});
// 		var owl = $('.owl-carousel');
// 		var items;
// 	var item;
// 		$('.horizontal_slider').each(function() {
// 		  $(this).appendTo('.owl-carousel');
// 		});
// 		owl.owlCarousel({
//
// 				nav:true,
// 				// margin:10,
// 				items:1,
// 				rewindNav: false,
// 						rtl:true,
//
//
//
// 				onChanged: callback,
// 		});
// 		function callback(e) {
// 			 items = e.item.count;     // Number of items
// 			 item = e.item.index;     // Position of the current item
// 	 }
// 	 owl.on('mousewheel', '.owl-stage', function (e) {
//
// 					 if (e.deltaY < 0) {
// 									owl.trigger('next.owl');
// 												// e.preventDefault();
// 					 } else {
// 						 owl.trigger('prev.owl');
// 					 }
// 					 // console.log(item);
// 					 // if (item + 1 === items) {
// 					 // 				 e.preventDefault();
// 					 // 				 console.log("asdfdsaf");
// 					 // 				 return false;
// 						//
// 					 // 		 }
// 					 // e.preventDefault();
// 				 });
// 	});
// });

jQuery(function($) {
$(document).ready(function() {
	$('#AZ').click(function(event){
	    $('html, body').animate({
	        scrollTop: $('#Ariz').offset().top
	    }, 500);
	    event.preventDefault();
	});
$('#NV').click(function(event){
    $('html, body').animate({
        scrollTop: $('#Neveda').offset().top
    }, 500);
    event.preventDefault();
});
$('#DENVER').click(function(event){
    $('html, body').animate({
        scrollTop: $('#Denver').offset().top
    }, 500);
    event.preventDefault();
});
$('#IN').click(function(event){
    $('html, body').animate({
        scrollTop: $('#Indi').offset().top
    }, 500);
    event.preventDefault();
});
$('#NE').click(function(event){
    $('html, body').animate({
        scrollTop: $('#Mass').offset().top
    }, 500);
    event.preventDefault();
});
$('#NYC').click(function(event){
    $('html, body').animate({
        scrollTop: $('#Newyork').offset().top
    }, 500);
    event.preventDefault();
});
$('#FL').click(function(event){
    $('html, body').animate({
        scrollTop: $('#Flord').offset().top
    }, 500);
    event.preventDefault();
});
});
});

// jQuery(function($) {
// $(document).ready(function() {
//
// 	$('.tab-content').each(function() {
// 		$(this).appendTo('.respsonsive_owl');
// 	});
// 		var rowl = $('.respsonsive_owl');
// rowl.owlCarousel({
// loop:true,
// margin:10,
// slideSpeed : 300,
// 		 paginationSpeed : 400,
// 		 singleItem:true,
// // rewindNav: false,
// nav:true,
// items:1,
// });
// });
// });
// jQuery(function($) {
// $(document).ready(function() {
//
// 	$('.simple_slider').each(function() {
// 		$(this).appendTo('.s-owl-carousel');
// 	});
// 		var sowl = $('.s-owl-carousel');
// sowl.owlCarousel({
// // loop:true,
// // margin:10,
// slideSpeed : 300,
// 		 paginationSpeed : 400,
// 		 singleItem:true,
// rewindNav: false,
// nav:true,
// items:1,
// });
// });
//
//
//
// });


jQuery(function($) {
	$(document).ready(function() {
		$('.social-feed-text').appendTo('.name');
});
		$(document).ready(function() {
			$('.social-feed-text').appendTo('.name');
			$('.social-feed-text').each(function() {
			  $(this).appendTo('.name');
					// $(this).attr('id', i);

			});


			var winHeight = $(window).height();
			  $('.owl-controls').css({ 'height': winHeight});

$('.horizontal_slider').each(function() {
  $(this).appendTo('.owl-carousel');
		// $(this).attr('id', i);

});
$('.owl-stage .owl-item').each(function(i) {
	$(this).attr('data-hash', i);
	$(this).attr('id', i);
});

$('.owl-carousel').addClass('.owl-theme');
	var owl = $('.owl-carousel');
	var items;
var item;
	owl.owlCarousel({

	    nav:true,
			 navText : ["",""],
			    smartSpeed :900,
	    // margin:10,
			loop: true,
			items:1,
			dots:true,
			// rewindNav: true,
       // navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],


		  onChanged: callback,
	});

 function callback(e) {
    items = e.item.count;     // Number of items
    item = e.item.index;     // Position of the current item
}
function next(){
	          owl.trigger('next.owl');
						console.log("next");
}
function prev(){
	          owl.trigger('prev.owl');
						console.log("next");
}
owl.bind('mousewheel', function () {
    // console.log(new Date().getTime());
});
	// owl.on('mousewheel', '.owl-stage', function (e) {
	//         if (e.deltaY < 0) {
	// 										 	setTimeout(next, 600);
	//         } else {
	//           setTimeout(prev, 600);
	//         }
	// 				 // e.preventDefault();
	//       });


	});

});