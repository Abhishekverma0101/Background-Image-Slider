var next = document.getElementById("next");
var prev = document.getElementById("previous");
var backgroundImg = document.getElementById("background");
let no = 0;
// let func = () => {
var divElements = document.getElementsByClassName("carousel-item");

// Ensure there is at least one element in the HTMLCollection
let func = () => {
    console.log(no);
    var divElement = divElements[no];
    var imgElements = divElement.querySelectorAll("img");
    console.log(imgElements);
    if (divElements.length > 0) {
        // Optionally, log the src attributes of each img element
        imgElements.forEach(function (imgElement) {
            console.log(imgElement.getAttribute("src"));
            backgroundImg.style.background = `url('${imgElement.getAttribute(
                "src"
            )}') no-repeat center center/cover`;
        });
    } else {
        console.log("No active carousel item found.");
    }
};
func();

next.addEventListener("click", () => {
    if (no < 2) {
        no++;
        func();
    } else {
        no = 0;
        func();
    }
});

prev.addEventListener("click", () => {
    if (no > 0) {
        no--;
        func();
    } else {
        no = 2;
        func();
    }

});
