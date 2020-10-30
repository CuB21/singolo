'use strict';

const menuList = document.querySelector('.menu-list');
menuList.addEventListener('click', (event) => {
    const activeElement = document.querySelector('.menu-active');
    activeElement.classList.remove('menu-active');
    const newActive = event.target;
    newActive.classList.add('menu-active');
})

var slides = document.querySelectorAll('.slider-images');
var currentSlide = 0;
var isEnabled = true;

function changeSlide(number) {
  currentSlide = (number + slides.length) % slides.length;
}

function closeSlide(direction) {
  isEnabled = false;
  slides[currentSlide].classList.add(direction);
  slides[currentSlide].addEventListener('animationend', function() {
    this.classList.remove('slider-images--active', direction);
  })
}

function showSlide(direction) {
  slides[currentSlide].classList.add('slider-images--next', direction);
  slides[currentSlide].addEventListener('animationend', function() {
    this.classList.remove('slider-images--next', direction);
    this.classList.add('slider-images--active');
    isEnabled = true;
  })
}

function nextSlide(number) {
  closeSlide('to-left');
  changeSlide(number + 1);
  showSlide('from-right');
}

function previousSlide(number) {
  closeSlide('to-right');
  changeSlide(number - 1);
  showSlide('from-left');
}

var buttonLeft = document.querySelector('.slider-left');
var buttonRight = document.querySelector('.slider-right');

buttonLeft.addEventListener('click', function() {
  if (isEnabled) {
    previousSlide(currentSlide);
  }
});

buttonRight.addEventListener('click', function() {
  if (isEnabled) {
    nextSlide(currentSlide);
  }
});

const phone1List = document.querySelectorAll('.slider-image1-back');
phone1List.forEach((phone)=>  phone.addEventListener('click', (e)=> {
    const mainImage1 = e.target.parentNode.querySelector('.slider-image1-main');
    if (mainImage1.classList.contains('slider-image-disactive')) {
        mainImage1.classList.remove('slider-image-disactive');
    } else {
        mainImage1.classList.add('slider-image-disactive');
    } 
    })
);

const phone2List = document.querySelectorAll('.slider-image2-back');
phone2List.forEach((phone)=> phone.addEventListener('click', (e)=> {
    const mainImage2 = e.target.parentNode.querySelector('.slider-image2-main');
    if (mainImage2.classList.contains('slider-image-disactive')) {
        mainImage2.classList.remove('slider-image-disactive');
    } else {
        mainImage2.classList.add('slider-image-disactive');
    }
}));

const imageList = document.querySelector('.portfolio-images-list');

const buttonList = document.querySelector('.portfolio-list-button');
buttonList.addEventListener('click', (event) => {
    const activeButton = document.querySelector('.button-active');
    activeButton.classList.remove('button-active');
    const newActiveButton = event.target;
    newActiveButton.classList.add('button-active');
        for (let i = imageList.children.length; i >= 0; i--) {
            imageList.appendChild(imageList.children[Math.random() * i | 0]);
        }
})

imageList.addEventListener('click', (e) => {
    const activeImage = document.querySelector('.portfollio-full-active');
        if (imageList.contains(activeImage)) {
            activeImage.classList.remove('portfollio-full-active');
        }
        e.target.parentNode.classList.add('portfollio-full-active');
    });

    const submitButton = document.querySelector('.submit-button');
    const formFirst = document.querySelector('.form-main');

    submitButton.addEventListener('click', (e) => {
        if (formFirst.elements[0].checkValidity() && formFirst.elements[1].checkValidity()) {
            e.preventDefault();
        
            const popup = document.createElement('div');
            popup.id = "popup";
            document.body.append(popup);

            const closeButton = document.createElement('button');
            closeButton.id = 'closeButton';
            closeButton.innerHTML = "OK";
            closeButton.addEventListener('click', ()=>{
                popup.parentNode.removeChild(popup);
            })
            popup.append(closeButton);

            const headerPopup = document.createElement('p');
            headerPopup.className = "text-popup";
            headerPopup.innerHTML = "Письмо отправлено";
            popup.append(headerPopup);

            const form = e.target.parentNode;
            const subject = form.elements[2].value;
            const description = form.elements[3].value;

            const topicPopup = document.createElement('p');
            topicPopup.className = "text-popup";

            if (subject.length === 0) {
                topicPopup.innerHTML = "Без темы";
            } else {
                topicPopup.innerHTML = "Тема: " +subject;
            }
            popup.append(topicPopup);

            const describePopup = document.createElement('p');
            describePopup.className = "text-popup";

            if (description.length === 0) {
                describePopup.innerHTML = "Без описания";
            } else {
                describePopup.innerHTML = "Описание: " +description;
            }
            popup.append(describePopup);
            form.reset();
        }   
    })


    const menuButton = document.querySelector('.menu-button');
    
    menuButton.addEventListener('click', () => {
      if (menuButton.classList.contains('menu-button--active')) {
        menuButton.classList.remove('menu-button--active');
        menuList.classList.remove('menu-list--active');
      } else {
        menuButton.classList.add('menu-button--active');
        menuList.classList.add('menu-list--active');
      }
    });
