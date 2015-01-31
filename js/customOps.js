//------------------------------------------------------------------------------------------
/*This script responds the the SCREEN-SLIDE-BUTTON.
    -On button click - isOpen class is toggled
    -calls getBlacOutHeight() and toggles bar-background if applicable
    -calls changeDirectionIcon and changes icon as appropriate*/
$(function() {
    $('#head1').on('click', 'a.contact-slide-button', function(event) {
        $('.content').toggleClass('isOpen');
            changeDirectionIcon();
            if (getBlackOutHeight()){
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
    $('#head1').on('click', 'a.home-button', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1000, 'easeInOutCirc');
        // console.log(test4());
                    // console.log($('#soc-6').offsetTop());

        event.preventDefault();
    });
});
$(function() {
    $('#head1').on('click', 'a.about-button', function(event) {
        scroll("about-container");
    });
});
$(function() {
    $('#head1').on('click', 'a.skills-button', function(event) {
        scroll("fs-skills-section");
    });
});
$(function() {
    $('#head1').on('click', 'a.project-button', function(event) {
        scroll("projects-section");
    });
});
$(function() {
    $('#head1').on('click', 'a.social-button', function(event) {
        scroll("fs-social-section");
    });
});
$(function() {
    $('#head1').on('click', 'a.resume-button', function(event) {
        scroll("resume-section");
    });
});
function scroll(target){
	var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: top_of_element(target) - 75
        }, 1000, 'easeInOutCirc');
        // console.log(test4());
                    // console.log($('#soc-6').offsetTop());

        event.preventDefault();
}

//------------------------------------------------------------------------------------------
//FILLS DOM (according to screen size) on each WINDOW LOAD OR RESIZE
$(window).load(function(){
	fillDOM();
	setHeights();
	if (!getBlackOutHeight()){
		document.getElementById('bar-inner').className += ' bar-background';
	}
});

$(window).resize(function(){
	fillDOM();
	setHeights();
	if (!getBlackOutHeight()){
		document.getElementById('bar-inner').className += ' bar-background';
	}
	//calling fillDOM() on window resize will reset the navbar 
	//on full size screen where bar has effects (fade-in and arrow movement)
	//this can throw it off (only until next resize or refresh)
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

//ORIGINAL DIRECTION CODE - NON-FUNC on MOZILLA
// $(window).bind('mousewheel', function(event) {
//     if (event.originalEvent.wheelDelta >= 0) {
//         direction = "up";
//     }
// });


//checks for scrolling and performs actions eachtime
//*This currently throws an error when refreshing or loading when not at 
//*exact top of screen but recovers as soon as scroll occurs
//*can be avoided by setting speed lower
//-continuously repositions mobile menu just off screen
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

//ajax script uses Mandrill to send an email when contact-button is clicked
function sendMessageForm(nameInput, mailInput, messageInput){
	var htmlField = "Name: " + $(nameInput).val() + "\nEmail: " + $(mailInput).val() + "\nMessage: " + $(messageInput).val();

            $.ajax({
              type: "POST",
              url: "https://mandrillapp.com/api/1.0/messages/send.json",
              data: {
                'key': 't23aFSNXdET5iENOvL4jWg',
                'message': {
                  'from_email': 'rycsmith@gmail.com',
                  'to': [
                      {
                        'email': 'rycsmith@gmail.com',
                        'name': 'Ryan',
                        'type': 'to'
                      }
                    ],
                  'autotext': 'true',
                  'subject': "Email from your website.",
                  'html': htmlField
                }
              }
             })
}
//------------------------------------------------------------------------------------------
//SOCIAL FADE-IN
//fades in a row of elements based on waypoint

jQuery(function($) {
		$('#social-row').waypoint(function() {
			
				$('#soc-1').fadeIn( 500 );
				$('#soc-2').fadeIn( 1000 );
				$('#soc-3').fadeIn( 1500 );
				$('#soc-4').fadeIn( 2000 );
				$('#soc-5').fadeIn( 2500 );
				$('#soc-6').fadeIn( 3000 );
				$('#soc-7').fadeIn( 3500 );
		},
		{
			offset: '75%',
			triggerOnce: true
		});
 
});

//MOBILE SOCIAL FADE-IN
jQuery(function($) {
		$("#proj-9").waypoint(function() {
			if ($(window).width() < 768){
				$('#mb-soc-1').fadeIn( 1500 );
				$('#mb-soc-2').fadeIn( 2000 );
				$('#mb-soc-3').fadeIn( 2500 );
				$('#mb-soc-4').fadeIn( 3000 );
				$('#mb-soc-5').fadeIn( 3500 );
				$('#mb-soc-6').fadeIn( 4000 );
				$('#mb-soc-7').fadeIn( 4500 );
			}
		},
		{
			offset: '1%',
			triggerOnce: true
		});
 
});

//------------------------------------------------------------------------------------------
//NAV-BAR FADE-IN FUNC (BASED ON SCREEN SIZE)
//this transition is handled in 2 different ways for reference
//---1 -- takes an element with no background and adds a class with background
//---2 -- changes the style of the element directly

jQuery(function($) {
 	var winWidth= $(window).width();
 	//one problem here is that winWidth is not always the most current, it seems to be
 	//establish only at load
 	//---only provides fade-in effects for full screen version ---
 	if (winWidth > 767){
		$('#main-container').waypoint(function() {
			if (direction === "down"){
				// $('.appear').fadeIn( 1500 );
				document.getElementById('bar-inner').className += ' bar-background';
				mcWay = false;
			}
			if (direction === "up"){
				document.getElementById('bar-inner').className -= ' bar-background';
				mcWay = true;
			}
		},
		{
			offset: '50%',
			// triggerOnce: true
		});
	}
});

//------------------------------------------------------------------------------------------
//POSITION MAJOR ELEMENTS BASED ON SCREEN SIZE 
function setHeights(){
	var winWidth= $(window).width();
	//if screen bigger than 767 positions main-container below slider
	if (winWidth > 767){
		document.getElementById('slider-container').style.top = "0px";
		var sliderHeight = $('#slider-container').outerHeight(true);
		var nameFloatHeight = $('#floating-container').outerHeight(true);
		var nameFloatPosition = ((sliderHeight / 2) - (nameFloatHeight/2));
		document.getElementById('floating-container').style.top = nameFloatPosition+ "px";
		document.getElementById('main-container').style.top = (sliderHeight - nameFloatHeight) + "px";
	}
	else{
		//original placement of main-container needs work
		//right now being messed up by image load time
		document.getElementById('main-container').style.top = "200px";
	}
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
//------------------------------------------------------------------------------------------
//This function will use variable saved in dom-variables.js to fill the dom based on screen size
function fillDOM(){
	//by keeping this variable here rather than global I can be sure it will update before each function call
	var winWidth= $(window).width();
	if (winWidth > 767){
		// $('#sidebar').html(FSsidebar);
		$('#head1').html(FSnavbar);
		$('#floating-container').html(FSfloatingContainer);
		document.getElementById('slider-container').style.display = "block";
		document.getElementById('sidebar').style.display = "block";
		$('#head2').empty();
		$('#about-container').html(FSabout);
		document.getElementById('mb-message-form').style.display = "none";
		document.getElementById('mb-skills-section').style.display = "none";
		document.getElementById('fs-skills-section').style.display = "block";
		document.getElementById('mb-social-section').style.display = "none";
		document.getElementById('fs-social-section').style.display = "block";
		// $('#slider-container').html(FScarousel);

	}
	else {
		$('#sidebar').html(FSsidebar);
		$('#head1').html(MBnavbar);
		$('#mobile-menu-holder').html(MBmenu);
		$('#floating-container').html(MBfloatingContainer);
		$('#main-container').prepend('<a NAME="HOME">');
		$('#head2').append(MBimage);
		$('#about-container').html(MBabout);
		document.getElementById('slider-container').style.display = "none";
		document.getElementById('sidebar').style.display = "none";
		document.getElementById('mb-message-form').style.display = "block";
		document.getElementById('fs-skills-section').style.display = "none";
		document.getElementById('mb-skills-section').style.display = "block";
		document.getElementById('fs-social-section').style.display = "none";
		document.getElementById('mb-social-section').style.display = "block";
	}
}

//------------------------------------------------------------------------------------------
//FUNCTION RETURNS T/F WHETHER FS-NAV-BAR BACKGROUND MUST BE ADDED BASED ON POSITIONING
function getBlackOutHeight(){
	if ($(window).scrollTop() - top_of_element("main-container") < -174){
		return true;
	}
	else
		return false;
}

