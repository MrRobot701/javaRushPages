let maxScrollWidth;
window.addEventListener("resize", resizeHeader);
window.addEventListener("load", resizeHeader);

function resizeHeader() {
    let headerContainer = document.getElementById("headerContainer");
    let columnContainer = document.getElementById("headerInnerContainer");
    let avatar = document.getElementById("avatar");

    let maxWidth = maxScrollWidth ? maxScrollWidth : headerContainer.scrollWidth;

    if (headerContainer.classList.contains("normalFlow") && maxWidth <= headerContainer.clientWidth) {
        changeHeaderDisplay(["normalFlow"], ["flexContainer"], [headerContainer, columnContainer]);
        avatar.classList.add("avatar");
    } else if (maxWidth > headerContainer.clientWidth) {
        if (!maxScrollWidth) {
            maxScrollWidth = headerContainer.scrollWidth;
        }
        changeHeaderDisplay(["flexContainer"], ["normalFlow"], [headerContainer, columnContainer]);
        avatar.classList.remove("avatar");
    }
}
function changeHeaderDisplay(classesToRemove, classesToAdd, elements) {
    for (let element of elements) {
        for (let classToRemove of classesToRemove) {
            element.classList.remove(classToRemove);
        }
        for (let classToAdd of classesToAdd) {
            element.classList.add(classToAdd);
        }
    }
}