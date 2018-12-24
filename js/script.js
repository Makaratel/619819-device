var popupLetter = document.querySelector('.popup-letter');
var formOpen = document.querySelector('.contacts__btn');
var formClose = popupLetter.querySelector('.popup-letter__button');
var popupMap = document.querySelector('.popup-map');
var mapOpen = document.querySelector('.contacts__link');
var mapClose = popupMap.querySelector('.popup-map__button');
var form = document.querySelector('.popup-letter__form');
var formName = form.querySelector('[name = surname]');

formOpen.addEventListener('click', function(evt){
	evt.preventDefault();
	popupLetter.classList.add('popup--show');
})

formClose.addEventListener('click', function(){
	popupLetter.classList.remove('popup--show');
	popupLetter.classList.remove('popup--error');
})

mapOpen.addEventListener('click', function(evt){
	evt.preventDefault();
	popupMap.classList.add('popup--show');
})

mapClose.addEventListener('click', function(){
	popupMap.classList.remove('popup--show');
})

form.addEventListener('submit', function(evt){
	if(formName.value.length < 3 || /\d/.test(formName.value)){
		evt.preventDefault();
		popupLetter.classList.add('popup--error');
		formName.classList.add('invalid');
	}
})
	