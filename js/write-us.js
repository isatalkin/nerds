var link = document.querySelector(".mailto");
var popup = document.querySelector(".write-us");
var close = document.querySelector(".write-us-close");

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("write-us-show");
    });

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("write-us-show");
    });