/*Images 6 ( index: 0 1 2 3 4 5 )

Length =6 */

let slideno = 0;

/* Previous and Next Buttons*/

function controller(x) {
    slideno = slideno + x;
    slideshow(slideno);
}

slideshow(slideno);
/* Auto Slide */
setInterval(auto, 2000);
var counter = 0;
function auto() {
    var autoslides = document.getElementsByClassName("slide");
    for (var all of autoslides) {
        all.style.display = "none";
    }

    autoslides[counter].style.display = "block";
    counter++;
        if (counter == autoslides.length) {
        counter = 0;
    }

}

/* Slideshow function*/

function slideshow(num) {
    var slides = document.getElementsByClassName("slide");
/*moves slide back to ‘0’ when it reaches to the End of the slides*/
    if (num == slides.length) {
        slideno = 0;
        num = 0;
    }

    /*moves slides backwads with the previous button*/
    if (num < 0) {
        slideno = slides.length - 1;
        num = slides.length - 1;
    }

    /* Bydefault made all slides display none*/

    for (var all of slides) {
        all.style.display = "none";
    }

    /* To display image at [0] bydeafulat*/

    /*Will display slide with the value in “num” variable*/
    slides[num].style.display = "block";

}