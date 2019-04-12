//Make the DIV element draggagle:
var works = document.querySelectorAll(".work-widget");

works.forEach(function(el) {
    dragElement(el);
});

var langSwitcher = document.querySelectorAll(".lang-switcher a"),
    notDefaultLang = document.querySelector(".lang-switcher a:not(.active)"),
    defaultLang = document.querySelector(".lang-switcher a.active");

notDefaultLang.addEventListener("mouseout", function (e) {
    defaultLang.classList.add("active");
    notDefaultLang.classList.remove("active");
});

notDefaultLang.addEventListener("mouseover", function() {
    notDefaultLang.classList.add("active");
    defaultLang.classList.remove("active");
});

var viewSwitcher = document.querySelectorAll(".view-switcher span");

Array.from(viewSwitcher).forEach(function (view) {
    view.addEventListener("click", function (e) {
        if (e.target === viewSwitcher[0]) {
            viewSwitcher[0].classList.add("active");
            viewSwitcher[1].classList.remove("active");
         } else {
            viewSwitcher[0].classList.remove("active");
            viewSwitcher[1].classList.add("active");
         }
    });
});


function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}