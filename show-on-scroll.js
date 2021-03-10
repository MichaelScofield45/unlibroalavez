var scroll = window.requestAnimationFrame || function(callback) {window.setTimeout
            (1000/60)}; // Ask the browser to update the screen, if after a certain time an animation is not detected, stop requesting.

var elementsToShow = document.querySelectorAll('.show-on-scroll'); // Select all elements with the show on scroll class.

function loop() { // Create a loop for adding the is-visible class to all objects that fulfill the isElementInViewport function.
    elementsToShow.forEach(function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
    } else {
        element.classList.remove('is-visible');
    }
    });
    scroll(loop);
}

function isElementInViewport(el) { // Function that detects whether an element is within the bounding box of the user's screen.
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0 && rect.bottom >= 0) 
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight)
            && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >=0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}

loop(); // Loop all the contents of the previous two functions.
