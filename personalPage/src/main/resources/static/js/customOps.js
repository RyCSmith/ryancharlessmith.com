//------------------------------------------------------------------------------------------
/*This script responds the the SCREEN-SLIDE-BUTTON.
    -On button click - isOpen class is toggled
    -toggles bar-background if applicable
    -calls changeDirectionIcon and changes icon as appropriate*/
$(function() {
    $('#contact-slide-button').click(function() {
        $('.content').toggleClass('isOpen');
            changeDirectionIcon();
            if ($(window).scrollTop() < 51){
                $('#bar-inner').toggleClass('bar-background');
            }
    });
});
//------------------------------------------------------------------------------------------
//Returns top of element passed in as argument in relation to finite position on page
function top_of_element(elm_arg){
	var element = document.getElementById(elm_arg); //replace elementId with your element's Id.
	var rect = element.getBoundingClientRect();
	var elementTop; //x and y
	var scrollTop = document.documentElement.scrollTop?
	                document.documentElement.scrollTop:document.body.scrollTop;
	elementTop = rect.top+scrollTop;
	return elementTop;
}
//------------------------------------------------------------------------------------------
//SCROLLING FUNCTIONS - power fs-nav-bar scroll functions based on postion on page
$(function() {
    $('#headFS').on('click', 'a.home-button', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1000, 'easeInOutCirc');
        event.preventDefault();
    });
});
$(function() {
    $('#headFS').on('click', 'a.about-button', function(event) {
	    scroll("about-container-fs");
    });
});
$(function() {
    $('#headFS').on('click', 'a.skills-button', function(event) {
        scroll("fs-skills-section");
    });
});
$(function() {
    $('#headFS').on('click', 'a.project-button', function(event) {
        scroll("projects-section");
    });
});
$(function() {
    $('#headFS').on('click', 'a.social-button', function(event) {
        scroll("fs-social-section");
    });
});
$(function() {
    $('#headFS').on('click', 'a.resume-button', function(event) {
        scroll("resume-section");
    });
});
function scroll(target){
	var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: top_of_element(target) - 75
        }, 1000, 'easeInOutCirc');
        event.preventDefault();
}

//------------------------------------------------------------------------------------------
//Sets bar background based on scroll height
function set_bar_background() {
    var window_top = $(window).scrollTop();
    if (window_top > 50) {
	    document.getElementById('bar-inner').className += ' bar-background';
	} else {
		document.getElementById('bar-inner').className -= ' bar-background';
	}
}
$( window ).resize(function() {
	set_bar_background();
});
$(function () {
    $(window).scroll(set_bar_background);
    set_bar_background();
});
$(window).load(function(){
	set_bar_background();
});


//------------------------------------------------------------------------------------------
//Taken from panelscript by bloggerever, fuels mobile menu movement
$(function(){
	var o=$('.overlayp'), ob=$('.overlay'), m=$('.main'), panel=$('.panel');
	  panel.css('min-height',m.outerHeight());
	  
	ob.click(function(){
	  o.toggleClass('active');
	});
});

//------------------------------------------------------------------------------------------
//BACKGROUND POSITIONING functions

//DIRECTION - holds scroll direction in var "direction"
//DOMMouseScroll binds Mozilla wheel
var direction = "down";
var lastCoord = 0;
$(window).bind('mousewheel DOMMouseScroll', function(event) {
    if ($(window).scrollTop() > lastCoord) {
    	direction = "down";
    	lastCoord = $(window).scrollTop();
    }
    else {
    	direction = "up";
    	lastCoord = $(window).scrollTop();
    }
});
var scrollTimeout = null;
$(window).scroll(function(){
    if (scrollTimeout) clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function(){
	    if ($(window).width() < 768){
	    	document.getElementById('menu-overlay').style.top = $(window).scrollTop() + "px";
	    	closeMenu();
		}
    },1);
});

//closes the mobile menu only if it is already open
//this will close the menu when scrolling resumes
function closeMenu(){
	if ($('.overlayp').hasClass('active')){
		$('.overlayp').toggleClass('active');
	}
}

//------------------------------------------------------------------------------------------
//CONTACT-FORM functions - removes and adds buttons and updates text based on actions
function updateContactFormSent(nameInput, mailInput, messageInput, contactButton, newContactButton){
	$(nameInput).val("");
	$(mailInput).val("");
	$(messageInput).val("Your message was sent successfully.");
	document.getElementById(contactButton).className += ' disappear';
	document.getElementById(newContactButton).className -= ' disappear';
}

function resetContactForm(nameInput, mailInput, messageInput, contactButton, newContactButton){
	$(nameInput).val("");
	$(mailInput).val("");
	$(messageInput).val("");
	document.getElementById(contactButton).className -= ' disappear';
	document.getElementById(newContactButton).className += ' disappear';
}

function sendMessageForm(nameInput, mailInput, messageInput){
	$.ajax({
		type: "POST",
		url: "/receivemail",
		data: {
			'name' : $(nameInput).val(),
			'email' : $(mailInput).val(),
			'message' : $(messageInput).val()
		},
		success : function(json) {
            console.log("success");
        },
        error : function(xhr,errmsg,err) {
            console.log(errmsg);
            console.log(xhr.status + ": " + xhr.responseText); 
        }
	});
}


//------------------------------------------------------------------------------------------
// FS SPINNER FUNCTIONS
//SKILLS-top-row spinner
jQuery(function($) {
 
	$('#top-row').waypoint(function() {
		$('.top-row-image').toggleClass( 'animate' );
	},
	{
		offset: '65%',
		triggerOnce: true
	});
 
});
//SKILLS-second-row spinner
jQuery(function($) {
 
	$('#second-row').waypoint(function() {
		$('.second-row-image').toggleClass( 'animate' );
	},
	{
		offset: '65%',
		triggerOnce: true
	});
 
});
//SKILLS-third-row spinner
jQuery(function($) {
 
	$('#third-row').waypoint(function() {
		$('.third-row-image').toggleClass( 'animate' );
	},
	{
		offset: '65%',
		triggerOnce: true
	});
 
});
//------------------------------------------------------------------------------------------
// MOBILE SPINNER FUNCTIONS
jQuery(function($) {
 
	$('#mb-top-row').waypoint(function() {
		$('.mb-top-row-image').toggleClass( 'animate' );
	},
	{
		offset: '65%',
		triggerOnce: true
	});
 
});
jQuery(function($) {
 
	$('#mb-second-row').waypoint(function() {
		$('.mb-second-row-image').toggleClass( 'animate' );
	},
	{
		offset: '65%',
		triggerOnce: true
	});
 
});
jQuery(function($) {
 
	$('#mb-third-row').waypoint(function() {
		$('.mb-third-row-image').toggleClass( 'animate' );
	},
	{
		offset: '65%',
		triggerOnce: true
	});
 
});
jQuery(function($) {
 
	$('#mb-fourth-row').waypoint(function() {
		$('.mb-fourth-row-image').toggleClass( 'animate' );
	},
	{
		offset: '65%',
		triggerOnce: true
	});
 
});
jQuery(function($) {
 
	$('#mb-fifth-row').waypoint(function() {
		$('.mb-fifth-row-image').toggleClass( 'animate' );
	},
	{
		offset: '65%',
		triggerOnce: true
	});
 
});


//SIDE-SLIDER-ICON-this changes the contact icons as side panel is exposed and covered
function changeDirectionIcon(){
	if ($('#slide-button').hasClass('glyphicon glyphicon-arrow-left')){
		document.getElementById('slide-button').className -= ' glyphicon glyphicon-arrow-left';
		document.getElementById('slide-button').className += ' glyphicon glyphicon-arrow-right';
		document.getElementById('slide-button-2').className -= ' glyphicon glyphicon-arrow-left';
		document.getElementById('slide-button-2').className += ' glyphicon glyphicon-arrow-right';
	}
	else {
		document.getElementById('slide-button').className -= ' glyphicon glyphicon-arrow-right';
		document.getElementById('slide-button').className += ' glyphicon glyphicon-arrow-left';
		document.getElementById('slide-button-2').className -= ' glyphicon glyphicon-arrow-right';
		document.getElementById('slide-button-2').className += ' glyphicon glyphicon-arrow-left';
		//contact form is reset anytime the side panel is closed
		resetContactForm("#name-input", "#mail-input", "#message-input", 'contact-button', 'contact-button-new');
	}
}

//------------------------------------------------------------------------------------------
//PROJECTS-FOCUS - changes opacity based on mouseover events
function mouseOnProjOpacity(proj){
	var projArray = ["proj-1", "proj-2", "proj-3", "proj-4", "proj-5", "proj-6", "proj-7", "proj-8", "proj-9"];
	var index = projArray.indexOf(proj);
	if (index > -1) {
    	projArray.splice(index, 1);
	}
	for (count in projArray){
		document.getElementById(projArray[count]).style.opacity = "0.2";
	}
}

function mouseOffProjOpacity(){
	var projArray = ["proj-1", "proj-2", "proj-3", "proj-4", "proj-5", "proj-6", "proj-7", "proj-8", "proj-9"];
	for (count in projArray){
		document.getElementById(projArray[count]).style.opacity = "1.0";
	}
}

