# ryancharlessmith.com
Source HTML/CSS/JS for my personal website ryancharlessmith.com.

This is the first version of this site. There are a few more things I'd like to do such as slow-scrolling around the page from the navigation bar links and better postioning of the jumps on different size screens. Improvements to come!

This site was built using HTML, CSS and JavaScript. It is entirely my design and did not employ any pre-made templates.

In order to optimize this site for mobile, I built a dynamic DOM from which elements are added, removed and hidden to achieve two distinct layouts based on screen size. This is achieved using a fillDOM() function that runs each time the page is loaded or the window is resized. It will enter the mobile version anytime the window width falls below 768px (it was designed to be thumb-friendly so I think the mobile version best achieves its style goals and utility when viewed on a phone - portrait style).

The CSS is based off of the Bootstrap framework and is supplemented by my own stylesheets customStyle.css and MBcustomStyles.css. The latter contains a handful of supplements specific to the mobile layout.

This site uses the jQuery 1.11.2 library as well as the following few plugins:

1- prefixfree from Lea Verou - link: https://github.com/LeaVerou/prefixfree. This attempts to cut down on the number of redundant css prefixes needed for cross-browser compatibility.
2- waypoints from Caleb Troughton - link: https://github.com/imakewebthings/waypoints. This provides the capability to invoke scripts based on the location of elements on the page during scrolling.
3- I also use a single function borrowed with some modification from Mohammad Hamza Dhamiya's plugin JQPanels to service the mobile version's menu which appears and exits from the top of the screen - link: https://github.com/bloggerever/jQPanels. The plugin is very useful but I chose not to include the entire script as it powers two other movement styles I did not use.

There are a few JS scripts in index.html to handle button clicks and call other functions. The modal classes I am using were taken with some adaptation from a udacity.com tutorial. The rest of my JS is contained in customOps.js. There are various functions that power most of the effects of the site and handle things such as positioning of containers during page load and window resizing. Elements used in filDOM() are saved as string variables in a file called dom-variables.js.

I had some trouble running python scripts to send email via Gmail from the current server and am using a cool service called Mandrill (I think from the mail chimp guys) to relay the ajax POST scripts connected to the contact form. They provide API keys and handle server side scripts to forward (free up to 1000 emails or so).

One last note, the site uses basic Google Analytics fed from Google's snippet in the head.