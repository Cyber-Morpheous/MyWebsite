var deviceHeight = window.innerHeight;
console.log(deviceHeight);

var HeadingDiv = document.getElementsByClassName("heading-div");
console.log(HeadingDiv);

for (let index = 0; index < HeadingDiv.length; index++) {
    HeadingDiv[index].style.height = deviceHeight + "px";
}

var HelloLengthinPercentage = 0.13263
var dynamic_height = deviceHeight * HelloLengthinPercentage
var hellos = document.getElementsByClassName("content__container")
for (let index = 0; index < hellos.length; index++) {
    hellos[index].style.height = dynamic_height + "px";
}

var ListElement = document.getElementsByClassName("content__container__list__item")

for (let index = 0; index < ListElement.length; index++) {
    ListElement[index].style.lineHeight = dynamic_height + "px";
    ListElement[index].style.fontSize = dynamic_height + "px";
    ListElement[index].style.fontWeight = (6 * dynamic_height) + "px";
}