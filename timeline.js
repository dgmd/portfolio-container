// Utility function to grab style properties when unset
function getStyleProp(elem, prop){
    if(window.getComputedStyle)
        return window.getComputedStyle(elem, null).getPropertyValue(prop);
    else if(elem.currentStyle) return elem.currentStyle[prop]; //IE
}

// 20ms event loop to update a global mouseX, mouseY position and handle scroll detection
var mouseX = null;
var mouseY = null;
var scrollTimeline = null;
var updateInterval = 10;
var scrolling = false;

window.onmousemove = function(event) {
	mouseX = event.clientX;
	mouseY = event.clientY;
	if (!scrollTimeline) {
		scrollTimeline = window.setInterval(scroll, updateInterval);
	}
};

// Global access to all the project li's
var projects = document.querySelectorAll('#timeline li.project');
projects = Array.prototype.slice.call(projects);
for (i = 0; i < projects.length; i++) {
	projects[i].onmouseover = slide; // Slide via highlight
}

// Global access to the timeline container
var timeline = document.querySelector("#timeline");
timeline.onmouseout = unslide; // Undo slides when out of timeline


function scroll(event) {
	var buffer = window.innerWidth/4;

	var distanceToCenter = Math.abs(window.innerWidth/2-mouseX);
	var speed = distanceToCenter/(window.innerWidth/2);
	if (mouseX < buffer) {
		scrolling = true;
		scrollLeft(speed);
	}
	else if ((window.innerWidth - mouseX) < buffer) {
		scrolling = true;
		scrollRight(speed);
	}
	else {
		scrolling = false;
		window.clearInterval(scrollTimeline);
		scrollTimeline = null;
	}
}

function scrollLeft(speed) {
	scrollRight(speed*-1);
}

function scrollRight(speed) {
	var leftPixels = parseInt(getStyleProp(timeline, 'left'), 10);
	var toShift = Math.pow(speed,3)*updateInterval;
	var newLeft = leftPixels - toShift;

	if (newLeft >= -1400 && newLeft  <= 0) {
		timeline.style.left = newLeft + 'px';
	}
}

function slide(event)
{
	for (i = 0; i < projects.length; i++) {
		if (i <= projects.indexOf(this)) {
			projects[i].classList.add("slideLeft");
			projects[i].classList.remove("slideRight");
		}
		else {
			projects[i].classList.add("slideRight");
			projects[i].classList.remove("slideLeft");
		}
	}
}

function unslide(event) {
	for (i = 0; i < projects.length; i++) {
		projects[i].classList.remove("slideRight");
		projects[i].classList.remove("slideLeft");
	}
}