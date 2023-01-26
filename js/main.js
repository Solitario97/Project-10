
let swiper1 =	document.querySelector(".slider-container"),
		swiper2	=	document.querySelector(".swiper-container"),
		burger	=	document.querySelector(".burger"),
		close		=	document.querySelector(".menu__close"),
		menu		=	document.querySelector(".menu"),
		playButtonsFirst	=	document.querySelectorAll(".main-slider__play");

let swiperSlider2 = new Swiper (swiper2, {
	centeredSlides: true,
	slidesPerView: 1,
	loop: true,
	spaceBetween: 10,
	effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
	effect:	"fade",
	navigation: {
    nextEl: '.btn-left',
    prevEl: '.btn-right',
  },
});

let swiperSlider1 = new Swiper (swiper1, {
	centeredSlides: true,
	slidesPerView: "auto",
	loop: true,
	spaceBetween: 105,
});

burger.addEventListener("click", () =>{
  menu.classList.add("menu--visible"),
	burger.classList.add("burger--hidden");
});
close.addEventListener("click", () =>{
	menu.classList.remove("menu--visible"),
	burger.classList.remove("burger--hidden");
  });

playButtonsFirst.forEach((el) => {
	el.addEventListener('click', (e) => {
		let video = e.currentTarget.closest('.main-slider__media').querySelector('video');
		video.play();
		e.currentTarget.style.display = 'none';
		setTimeout(() => {
			video.volume = 0.5;
		}, 1000);
	});
});
