/* Script for opening questions */
function openQuestion(param) {
    console.log("test!");
    icon = document.getElementById(param+"-icon");
    element = document.getElementById(param);
    header = document.getElementById(param+"-header");
    body = document.getElementById(param+"-body");
    
    if (element.classList.contains("closed")) {
        // Open question
        element.classList.remove("closed");
        icon.classList.remove("icon-closed");
        body.classList.remove("body-closed");
    } else {
        // Close question
        element.classList.add("closed");
        icon.classList.add("icon-closed");
        body.classList.add("body-closed");
    }

}