
let swiper1 =	document.querySelector(".slider-container"),
		swiper2	=	document.querySelector(".swiper-container"),
		burger	=	document.querySelector(".burger"),
		close		=	document.querySelector(".menu__close"),
		menu		=	document.querySelector(".menu"),
		playButtonsFirst	=	document.querySelectorAll(".main-slider__play"),
		playButtonsSlide	=	document.querySelectorAll(".slide-play");

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
swiperSlider2.on("transitionEnd", function ()	{
	let videos	=	document.querySelectorAll(".first__slider video");
	videos.forEach((el)	=>	{
		el.pause();
		el.currentTime = 0;
	})
	playButtonsFirst.forEach((el)	=>	{
		el.style.display	=	"block";
	});
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


let swiperSlider1 = new Swiper (swiper1, {
	centeredSlides: true,
	slidesPerView: "auto",
	loop: true,
	spaceBetween: 105,

});

swiperSlider1.on("transitionEnd", function ()	{
	let videos	=	document.querySelectorAll(".swiper-wrapper video");
	videos.forEach((el)	=>	{
		el.pause();
		el.currentTime = 0;
	})
	playButtonsSlide.forEach((el)	=>	{
		el.style.display	=	"block";
	});
});
playButtonsSlide.forEach((el) => {
	el.addEventListener('click', (e) => {
		let video = e.currentTarget.closest('.swiper-slide').querySelector('video');
		video.play();
		e.currentTarget.style.display = 'none';
		setTimeout(() => {
			video.volume = 0.5;
		}, 1000);
	});
});



burger.addEventListener("click", () =>{
  menu.classList.add("menu--visible"),
	burger.classList.add("burger--hidden");
});
close.addEventListener("click", () =>{
	menu.classList.remove("menu--visible"),
	burger.classList.remove("burger--hidden");
});


/* // inputMask */
let selector = document.querySelectorAll('input[type=tel]');

let im = new Inputmask('+7 (999) 999-99-99');

im.mask(selector);


/* // validate forms */
let validateForms = function(selector, rules) {

	new window.JustValidate(selector, {
		rules: rules,
		submitHandler: function (form, values, ajax) {
			var formData = new FormData(form);

			var xhr = new XMLHttpRequest();


			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {

					if (xhr.status === 200) {
						console.log('Отправлено!');
					} else {

					}
				}
			};

			// Add any event handlers here...
			xhr.open('POST', "mail.php", true);
            xhr.send(formData);

            form.reset();
		},
	});
};

var audio=document.querySelector("audio");
audio.volume=0.3;


validateForms('.newsletter__form', { email: { required: true, email: true }, tel: { required: true } });
validateForms('.subs-form', { email: { required: true, email: true } });
