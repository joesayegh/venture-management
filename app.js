///////////////////////////////////////
// NAV
///////////////////////////////////////
var navToggle = document.querySelector(".nav-toggle");
var navIcon = document.querySelector(".navicon");
var primaryNavWrapper = document.querySelector(".primary-nav-wrapper");

navToggle.addEventListener("click", function () {
	this.classList.toggle("active");
	navIcon.classList.toggle("fixed");
	primaryNavWrapper.classList.toggle("open");

	var currentStatus = this.getAttribute("aria-expanded");
	if (currentStatus == "true") {
		// it's currently open, now closed
		this.setAttribute("aria-expanded", "false");
	} else {
		// it's currently closed, now open
		this.setAttribute("aria-expanded", "true");
	}
});

var primaryNavLinks = document.querySelectorAll(".primary-nav-wrapper li a");

for (var i = 0; i < primaryNavLinks.length; i++) {
	primaryNavLinks[i].addEventListener("click", function () {
		// console.log('clicked');
		navToggle.classList.toggle("active");
		navIcon.classList.toggle("fixed");
		primaryNavWrapper.classList.toggle("open");

		var currentStatus = this.getAttribute("aria-expanded");
		if (currentStatus == "true") {
			// it's currently open, now closed
			this.setAttribute("aria-expanded", "false");
		} else {
			// it's currently closed, now open
			this.setAttribute("aria-expanded", "true");
		}
	});
}

///////////////////////////////////////
// SMOOTH SCROLL
///////////////////////////////////////
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1100,
	speedAsDuration: true,
});

///////////////////////////////////////
// AOS
///////////////////////////////////////
// INITIALIZE
AOS.init();

///////////////////////////////////////
// SWIPER
///////////////////////////////////////
// HERO
const swiperHero = new Swiper(".swiper-hero", {
	// Optional parameters
	// direction: "vertical",
	loop: true,

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	// And if we need scrollbar
	// scrollbar: {
	// 	el: ".swiper-scrollbar",
	// },
});

// TRUSTED BY
const swiperTrustedBy = new Swiper(".swiper-trusted-by", {
	// grabCursor: true,
	loop: true,
	autoplay: {
		delay: 1,
		disableOnInteraction: false,
	},
	// ON MOBILE (SMALLEST WIDTH)
	slidesPerView: 2,
	spaceBetween: 60,
	speed: 4000,
	breakpoints: {
		// when window width is >= 500px
		500: {
			slidesPerView: 3,
		},
		// when window width is >= 640px
		640: {
			slidesPerView: 4,
		},
		// when window width is >= 768px
		768: {
			slidesPerView: 5,
		},
		// when window width is >= 960px
		960: {
			slidesPerView: 6,
		},
		// when window width is >= 1024px
		1024: {
			slidesPerView: 7,
		},
		// when window width is >= 1280px
		1280: {
			slidesPerView: 8,
		},
		// when window width is >= 1920px
		1920: {
			slidesPerView: 9,
		},
		// when window width is >= 2048px
		2048: {
			slidesPerView: 12,
		},
	},
});

///////////////////////////////////////
// YEAR IN THE FOOTER
///////////////////////////////////////
const date = document.querySelector("#date");
const currentYear = new Date().getFullYear();
date.textContent = currentYear;
