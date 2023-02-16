let page = document.querySelector('.page');
let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let form = document.querySelector('.popup__form')
let closeButton = document.querySelector('.popup__close-button');
let nameInput = document.querySelector('.popup__input_profile_name');
let profileName = document.querySelector('.profile__name');
let jobInput = document.querySelector('.popup__input_profile_job');
let profileJob = document.querySelector('.profile__job');

editButton.addEventListener('click', function () {
	popup.classList.add('popup_opened');
	page.classList.add('page_no-scroll');
	nameInput.value = profileName.textContent;
	jobInput.value = profileJob.textContent;
});

function popupClose() {
	popup.classList.remove('popup_opened');
	page.classList.remove('page_no-scroll');
}
closeButton.addEventListener('click', popupClose);
popup.addEventListener('click', function (e) {
	if (e.target === popup) {
		popupClose();
	}
});

function formSubmitHandler(evt) {
	evt.preventDefault();
	profileName.textContent = nameInput.value;
	profileJob.textContent = jobInput.value;
	popupClose();
}

form.addEventListener('submit', formSubmitHandler);