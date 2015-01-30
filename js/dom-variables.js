//in this variable list fs will refer to full site and mb to mobile

var FSsidebar = '<form name="message-form" id="message-form"><div id="contact-label">CONTACT</div><div id="contact-label-text">To contact me by email, please fill out the form below:</div><p><label id="name-label">NAME: </label><br><input id="name-input" type="text" name="name"></p><p><label>EMAIL:</label><br><input id="mail-input" type="text"></p><p><label>MESSAGE:</label><br><textarea id="message-input"></textarea></p><button type="button" id="contact-button">SEND</button><button type="button" id="contact-button-new" class="disappear">SEND NEW MESSAGE</button></form>';
var FSnavbar = '<div id="bar-wrap"><div id="bar-inner"><div class="container"><div class="row"><div class="col-md-12 text-uppercase text-justified"><ul id="nav"><li><a href="#HOME"><span class="glyphicon glyphicon-home" aria-hidden="true"></span></a></li><li><a href="#ABOUT">About</a></li><li><a href="#SKILLS">Skills</a></li><li><a href="#PROJECTS">Projects</a></li><li><a href="#SOCIAL">Social</a></li><li><a href="#RESUME">Resume</a></li><li><a class="contact-slide-button"><span id="slide-button" class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>Contact<span id="slide-button-2" class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span></a></li></ul></div></div></div></div></div>';
var MBnavbar = '<div class="container" id="head-container"><div class="row" id="head-row"><a href="#HOME"><div class="col-xs-2 head-col"><span class="glyphicon glyphicon-home head-center-elm" aria-hidden="true"></span></div></a><div class="col-xs-8 text-uppercase head-center-elm head-col">RYAN SMITH</div><a class="menu-button" class="overlay head-col"><div class="col-xs-2 text-uppercase text-justified head-col"><span class="head-center-elm glyphicon glyphicon-align-justify" aria-hidden="true"></span></div></a></div></div>';
var FSfloatingContainer = '<a NAME="HOME"></a><div class="row"><div class="col-md-12"><div id="inner-float">RYAN SMITH</div></div></div>';
var MBfloatingContainer = '';
var MBmenu = '<div id="menu-overlay" class="overlayp panel"><div id="spacer-div"></div><div class="container"><div class="row" id="menu-row"><a href="#ABOUT" class="overlay"><div class="col-xs-12 mb-menu-col">ABOUT</div></a><a href="#SKILLS" class="overlay"><div class="col-xs-12 mb-menu-col">SKILLS</div></a><a href="#PROJECTS" class="overlay"><div class="col-xs-12 mb-menu-col">PROJECTS</div></a><a href="#SOCIAL2" class="overlay"><div class="col-xs-12 mb-menu-col">SOCIAL</div></a><a href="#RESUME" class="overlay"><div class="col-xs-12 mb-menu-col">RESUME</div></a><a href="#CONTACT" class="overlay"><div class="col-xs-12 mb-menu-col">CONTACT</div></a></div></div></div>';
var FScarousel = '<div id="carousel-example-generic" class="carousel slide" data-ride="carousel"><ol class="carousel-indicators"><li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li><li data-target="#carousel-example-generic" data-slide-to="1"></li><li data-target="#carousel-example-generic" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="item active"><img src="images/glades1.jpg" alt="..."></div><div class="item"><img src="images/cabin1.jpg" alt="..."></div><div class="item"><img src="images/cabin2.jpg" alt="..."></div></div><a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a><a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a></div>';
var MBspacer = '<div id="spacer">spacer</div>'
var MBimage = '<img id="mbimage" src="images/cabin-scaled.jpg" alt="cabin photo">';
var FSabout = '<div class="row" id="about-section"><div class="col-md-4" id="profile-pic-box"><img id="profile-pic" class="img-responsive image-limiter" src="images/profile-pic.png" alt="profile pic"></div><div class="col-md-8"><h1>ABOUT</h1><div id="profile text" class="text-justify"><p>Hi and welcome! Thanks for checking out my page. I built this site to provide some information about my skills, interests, projects and past experiences, as well as to showcase some of my abilities in HTML, CSS and JavaScript.</p><p>I’m currently a first year computer science student in the Master of Computer and Information Technology program (MCIT) at the University of Pennsylvania (expected graduation May 2016). Before coming to Penn I worked in both the social services and world languages fields, teaching Spanish in a number of settings and spending two and a half years as an Employment Specialist at a vocational training service for individuals with developmental disabilities.</p><p>Outside of my studies I enjoy backcountry camping, travel, home brewing, craft coffee and all things computer science. There are a couple of pictures from past trips on the slider above.</p><p>Please feel free to get in touch (contact button above) with any questions about the MCIT program, Philly, CS, etc. or just to connect.</p><p>For details about this site and its design check out the info in the Projects section below.</p></div></div></div>';
var MBabout = '<div class="row" id="mb-about-top-row"><div class="col-xs-6 text-center"><div id="mb-title-name">RYAN SMITH</div></div><div class="col-xs-6" id="mb-profile-pic-box"><img id="mb-profile-pic" class="img-responsive image-limiter" src="images/profile-pic.png" alt="profile pic"></div></div><div class="row"><div class="col-xs-12"><h1>ABOUT</h1><div id="profile text" class="text-justify"><p>Hi and welcome! Thanks for checking out my page. I built this site to provide some information about my skills, interests, projects and past experiences, as well as to showcase some of my abilities in HTML, CSS and JavaScript.</p><p>I’m currently a first year computer science student in the Master of Computer and Information Technology program (MCIT) at the University of Pennsylvania (expected graduation May 2016). Before coming to Penn I worked in both the social services and world languages fields, teaching Spanish in a number of settings and spending two and a half years as an Employment Specialist at a vocational training service for individuals with developmental disabilities.</p><p>Outside of my studies I enjoy backcountry camping, travel, home brewing, craft coffee and all things computer science.</p><p>Please feel free to get in touch (contact form below) with any questions about the MCIT program, Philly, CS, etc. or just to connect.</p><p>For details about this site and its design check out the info in the Projects section below.</p></div></div></div>';
// BACKUP MBNAVBAR - var MBnavbar = '<div class="container" id="head-container"><div class="row" id="head-row"><div class="col-xs-2 head-col"><a href="#HOME"><span class="glyphicon glyphicon-home head-center-elm" aria-hidden="true"></span></a></div><div class="col-xs-8 text-uppercase head-center-elm">RYAN SMITH</div><div class="col-xs-2 text-uppercase text-justified"><a class="menu-button" class="overlay head-col"><span class="head-center-elm glyphicon glyphicon-align-justify" aria-hidden="true"></span></a></div></div></div>';
// BACKUP MBMENU - var MBmenu = '<div id="menu-overlay" class="overlayp panel"><div id="spacer-div"></div><div class="container"><div class="row" id="menu-row"><a href="#ABOUT" class="overlay"><div class="col-xs-12 mb-menu-col">ABOUT</div></a><a href="#SKILLS" class="overlay"><div class="col-xs-12 mb-menu-col">SKILLS</div></a><a href="#PROJECTS" class="overlay"><div class="col-xs-12 mb-menu-col">PROJECTS</div></a><a href="#SOCIAL" class="overlay"><div class="col-xs-12 mb-menu-col">SOCIAL</div></a><a href="#RESUME" class="overlay"><div class="col-xs-12 mb-menu-col">RESUME</div></a><a href="#CONTACT" class="mb-menu-contact-button"><div class="col-xs-12 mb-menu-col">CONTACT</div></a></div></div></div>';
// var MBskillsSection = '<div class="row category-header"><a NAME="SKILLS"></a><h1>SKILLS</h1></div><div class="row" id="mb-top-row"><div class="col-xs-4"><img class="img-responsive image-limiter circle-image mb-top-row-image" src="images/java.jpg" alt="profile pic"></div><div class="col-xs-4"><img class="img-responsive image-limiter circle-image mb-top-row-image" src="images/python.jpg" alt="profile pic"></div><div class="col-xs-4"><img class="img-responsive image-limiter circle-image mb-top-row-image" src="images/c.jpg" alt="profile pic"></div></div><div class="row" id="mb-second-row"><div class="col-xs-4"><img class="img-responsive image-limiter circle-image mb-second-row-image" src="images/css.jpg" alt="profile pic"></div><div class="col-xs-4"><img class="img-responsive image-limiter circle-image mb-second-row-image" src="images/js.jpg" alt="profile pic"></div><div class="col-xs-4"><img class="img-responsive image-limiter circle-image mb-second-row-image" src="images/html.jpg" alt="profile pic"></div></div><div class="row" id="mb-third-row"><div class="col-xs-4"><img class="img-responsive image-limiter circle-image mb-third-row-image" src="images/bootstrap.jpg" alt="profile pic"></div><div class="col-xs-4"><img class="img-responsive image-limiter circle-image mb-third-row-image" src="images/git.jpg" alt="profile pic"></div><div class="col-xs-4"><img class="img-responsive image-limiter circle-image mb-third-row-image" src="images/jquery.jpg" alt="profile pic"></div></div><div class="row" id="mb-fourth-row"><div class="col-xs-4"><img class="img-responsive image-limiter circle-image mb-fourth-row-image" src="images/magento.jpg" alt="profile pic"></div><div class="col-xs-4"><img class="img-responsive image-limiter circle-image mb-fourth-row-image" src="images/spanish.jpg" alt="profile pic"></div><div class="col-xs-4"><img class="img-responsive image-limiter circle-image mb-fourth-row-image" src="images/portuguese.jpg" alt="profile pic"></div></div><div class="row" id="mb-fifth-row"><div class="col-xs-4"><img class="img-responsive image-limiter circle-image mb-fifth-row-image" src="images/gimp.jpg" alt="profile pic"></div><div class="col-xs-4"><img class="img-responsive image-limiter circle-image mb-fifth-row-image" src="images/holder_image.jpg" alt="profile pic"></div></div>';

