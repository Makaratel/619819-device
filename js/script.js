var popupLetter = document.querySelector('.popup-letter');

var formOpen = document.querySelector('.contacts__btn');
formOpen.addEventListener('click', function(evt){
	evt.preventDefault();
	popupLetter.classList.add('popup--show');
})

var formClose = popupLetter.querySelector('.popup-letter__button');
formClose.addEventListener('click', function(){
	popupLetter.classList.remove('popup--show');
})


var popupMap = document.querySelector('.popup-map');

var mapOpen = document.querySelector('.contacts__link');
mapOpen.addEventListener('click', function(evt){
	evt.preventDefault();
	popupMap.classList.add('popup--show');
})

var mapClose = popupMap.querySelector('.popup-map__button');
mapClose.addEventListener('click', function(){
	popupMap.classList.remove('popup--show');
})