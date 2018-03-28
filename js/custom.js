var headshot = document.querySelector(".footer img");
var expandableTxt = document.querySelectorAll(".expandable-txt");
var expandableHeading = document.querySelectorAll(".web-txt span");
var all = document.querySelectorAll("*");


headshot.addEventListener("click", function() {
	for (var i = 0; i < all.length; i++) {
		all[i].classList.toggle("rainbows");
	}
});


for (var i = 0; i < expandableTxt.length; i++) {
	
	expandableTxt[i].addEventListener("click", function() {
		this.classList.toggle("expanded");
	});
	// expandableTxt[i].addEventListener("mouseover", function() {
	// 	this.classList.add("expanded");
	// });
	// expandableTxt[i].addEventListener("mouseout", function() {
	// 	this.classList.remove("expanded");
	// });
};

for (var i = 0; i < expandableHeading.length; i++) {
	
	expandableHeading[i].addEventListener("click", function() {
		this.textContent === "More Details" ? this.textContent = "Less Details" : this.textContent = "More Details";
	});

};


