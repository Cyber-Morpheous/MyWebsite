var deviceHeight = window.innerHeight;
console.log(deviceHeight);

//var HeadingDiv = document.getElementsByClassName("heading-div");
//console.log(HeadingDiv);

//for (let index = 0; index < HeadingDiv.length; index++) {
//    HeadingDiv[index].style.height = deviceHeight + "px";
//}

//var HelloLengthinPercentage = 0.13263
//var dynamic_height = deviceHeight * HelloLengthinPercentage

document.addEventListener("DOMContentLoaded", function() {
    var aboutMeSection = document.querySelector(".about-me-section");
    var animationTriggered = false;

    function animateAboutMeSection() {
        var sectionPosition = aboutMeSection.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (sectionPosition < windowHeight && !animationTriggered) {
            aboutMeSection.classList.add("animate");
            animationTriggered = true;
        } else if (sectionPosition >= windowHeight && animationTriggered) {
            aboutMeSection.classList.remove("animate");
            animationTriggered = false;
        }
    }

    window.addEventListener("scroll", animateAboutMeSection);
});

