/*==  our speceliaty slider ==*/
var cc = $('#featured_video_slider');
cc.owlCarousel({
	autoplay:false,
    loop:true,
    nav:true,
	dots:false,
	margin:20,
	navText: [ '<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>' ],
	
	responsive : {
    // breakpoint from 0 up
   0:{
            items:1,
            nav:true
        },
    // breakpoint from 480 up
   480:{
            items:1,
            nav:true	
        },
    // breakpoint from 768 up
    768:{
            items:2,
            nav:true
        },
	// breakpoint from 992 up
    992:{
            items:2,
            nav:true
        },
		1200:{
            items:3,
            nav:true
        },

}
});
/*==  search_doctor_slider ==*/
var cc = $('#search_doctor_slider');
cc.owlCarousel({
	autoplay:false,
    loop:true,
    nav:true,
	dots:false,
	margin:20,
	navText: [ '<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>' ],
	
	responsive : {
    // breakpoint from 0 up
   0:{
            items:1,
            nav:true
        },
    // breakpoint from 480 up
   480:{
            items:1,
            nav:true	
        },
    // breakpoint from 768 up
    768:{
            items:2,
            nav:true
        },
	// breakpoint from 992 up
    992:{
            items:2,
            nav:true
        },
		1200:{
            items:2,
            nav:true
        },

}
});

/*==  panel_expert_slider ==*/
var cc = $('#panel_expert_slider');
cc.owlCarousel({
	autoplay:false,
    loop:true,
    nav:true,
	dots:true,
	margin:20,
	navText: [ '<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>' ],
	
	responsive : {
    // breakpoint from 0 up
   0:{
            items:1,
            nav:true
        },
    // breakpoint from 480 up
   480:{
            items:1,
            nav:true	
        },
    // breakpoint from 768 up
    768:{
            items:2,
            nav:true
        },
	// breakpoint from 992 up
    992:{
            items:2,
            nav:true
        },

}
});

/*==  panel_expert_slider ==*/
var cc = $('#our_leader_slider');
cc.owlCarousel({
	autoplay:false,
    loop:true,
    nav:true,
	dots:false,
	margin:0,
	navText: [ '<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>' ],
	
	responsive : {
    // breakpoint from 0 up
   0:{
            items:1,
            nav:false
        },
    // breakpoint from 480 up
   480:{
            items:1,
            nav:false	
        },
    // breakpoint from 768 up
    768:{
            items:2,
            nav:false
        },
	// breakpoint from 992 up
    992:{
            items:3,
            nav:false
        },

}
});

/*==== for stick header =====*/
jQuery(function(){
    createSticky(jQuery("#sticky-wrap"));
});

function createSticky(sticky) {
    if (typeof sticky != "undefined") {

        var pos = sticky.offset().top ,
            win = jQuery(window);

        win.on("scroll", function() {

            if( win.scrollTop() > pos ) {
                sticky.addClass("stickyhead");
            } else {
                sticky.removeClass("stickyhead");
            }           
        });         
    }
}

//Side menu
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


//Video Popup
$(function(){
$(".videoPop").videoPopup({
	autoplay: 1,
	controlsColor: 'white',
	showVideoInformations: 0,
	width: 1000,
	customOptions: {
		rel: 0,
		end: 60
	}
});
});

//for Datepicker 
$(function () {
  $("#datepicker").datepicker({ 
        autoclose: true, 
        todayHighlight: true
  }).datepicker('update', new Date());
});

wow = new WOW(
	   {
	   animateClass: 'animated',
	   offset:       200
	   }
	   );
	   wow.init();
//Scroll top
jQuery(document).ready(function(){
	jQuery(window).scroll(function(){
	if (jQuery(this).scrollTop() > 100) {
	jQuery('#scrollup').fadeIn();
	} else {
	jQuery('#scrollup').fadeOut();
	}
	});
	jQuery('#scrollup').click(function(){
	jQuery("html, body").animate({ scrollTop: 0 }, 400);
	return false;
	});
	});