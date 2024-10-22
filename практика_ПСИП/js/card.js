let items_crd = [];

fetch('js/data-cart.json')
  .then(response => response.json())
  .then(data => {
    items_crd = data;
    console.log(items_crd);
    // Доступ к данным
    console.log(items_crd[0].title); // Карточка 1

    let htmlData = '';

    items_crd.forEach(item => {
      htmlData += `<div class="crd">`;
      htmlData += `<span class="crd-title">${item.title}</span>`;
      htmlData += `<img src="${item.img}" alt="">`;
      htmlData += `<p class="crd-price">Цена ${item.price}</p>`;
      htmlData += `</div>`;
    });

    document.getElementById('crd-main').innerHTML = htmlData;
  })
  .catch(error => console.error('Ошибка:', error));




// карточка с выбором
var clickCount = 0;
document.getElementById('myButton').addEventListener('click', function() {
  var select = document.getElementById('mySelect');
  var paragraph = document.getElementById('myParagraph');
  var div1 = document.getElementById('div1');
  var div2 = document.getElementById('div2');
  var div3 = document.getElementById('div3');
  select.innerHTML = ''; // очищаем select
  var options = [];
  var text = '';

  switch (clickCount % 3) {
    case 0:
      options = ['9 класс', '11 класс'];
      text = 'Выбрать класс';
      div1.style.opacity = '0.25';
      div3.style.opacity = '0.25';
      div2.style.opacity = '1';
      break;
    case 1:
      options = ['VK', 'INST'];
      text = 'Способ связи с вами';
      div2.style.opacity = '0.25';
      div1.style.opacity = '0.25';
      div3.style.opacity = '1';
      break;
    case 2:
      options = ['Математика', 'Физика'];
      text = 'Выбрать предмет';
      div2.style.opacity = '0.25';
      div3.style.opacity = '0.25';

      div1.style.opacity = '1';
      break;
  }  

  for (var i = 0; i < options.length; i++) {
    var option = document.createElement('option');
    option.text = options[i];
    option.value = i + 1;
    select.add(option);
  }

  paragraph.textContent = text;

  clickCount++;
});

// бургер меню
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
})



// кнопка вверх

$(document).ready(function(){
  // При нажатии на кнопку
  $('#backToTopButton').click(function(){
    // Анимированное перемещение вверх
    $('html, body').animate({scrollTop: 0}, 'slow');
  });
});
// Показать или скрыть кнопку при прокрутке
$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
    $('#backToTopButton').fadeIn();
  } else {
    $('#backToTopButton').fadeOut();
  }
});

// модульное окно
$(document).ready(function($) {
	$('.box-1__cnt-2__btn').click(function() {
		$('.popup-fade').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});



// маска ввода
$(function(){
  //2. Получить элемент, к которому необходимо добавить маску
  $("#phone").mask("8(999) 999-9999");
});

// показать больше кнопка
function myreadMoreFunction() {
  let dots = document.getElementById("dots-1");
  let moreText = document.getElementById("more-1");
  let btnText = document.getElementById("myReadBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Показать больше";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Показать меньше";
    moreText.style.display = "block";
  }
}


// маска ввода
$(function(){
  //2. Получить элемент, к которому необходимо добавить маску
  $("#phone-form").mask("+375(99) 999-99-99");
});
const formCard = document.getElementById('form-val');
const deleteCookiesButton = document.getElementById('delete-cookies');

formCard.addEventListener('submit', AlertD);
deleteCookiesButton.addEventListener('click', clearCookies);

function delLoc(){
  window.localStorage.clear();
if (localStorage.getItem('formData') === null) {
  alert('Данные удалены');
} else {
  alert('Данные существуют');
}

}


function AlertD(event) {
  let isValid = true;

    // Имя
    const firstName = document.getElementById('firstn');
    const firstNameError = document.getElementById('firstnError');
    const cyrillicPattern = /^[\u0400-\u04FF]+$/;
    if (firstName.value.trim() === '' || !cyrillicPattern.test(firstName.value.trim())) {
        firstNameError.textContent = 'Имя обязательно для заполнения на русском';
        isValid = false;
    } else {
        firstNameError.textContent = '';
    }

    // Фамилия
    const lastName = document.getElementById('twon');
    const lastNameError = document.getElementById('twonError');
    const lastNamePattern = /^[а-яё]+(?:[ -]{1}[а-яё]*)?$/i;
    if (lastName.value.trim() === '' || !lastNamePattern.test(lastName.value)) {
        lastNameError.textContent = 'Фамилия обязательна для заполнения и тольок на русском';
        isValid = false;
    } else {
        lastNameError.textContent = '';
    }

    // Отчество
    const middleName = document.getElementById('freen');
    const middleNameError = document.getElementById('freenError');
    if (middleName.value.trim() === '' || !cyrillicPattern.test(middleName.value.trim())) {
        middleNameError.textContent = 'Отчество обязательно для заполнения на русском';
        isValid = false;
    } else {
        middleNameError.textContent = '';
    }

    // Email
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value) || email.value.trim()==='') {
        emailError.textContent = 'Введите корректный email';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Телефон
    const phone = document.getElementById('phone-form');
    const phoneError = document.getElementById('phoneError');
    // const phonePattern = /^\+375\s?\(?(29|25|33|44)\)?\s?\d{3}-\d{2}-\d{2}$/;
    const phonePattern = /^\+375\(\d{2}\) \d{3}-\d{2}-\d{2}$/;

    if (!phonePattern.test(phone.value)) {
        phoneError.textContent = 'Введите корректный номер телефона';
        isValid = false;
    } else {
        phoneError.textContent = '';
    }

    const checkboxes = document.querySelectorAll('.myCheckbox');
const checkboxError = document.getElementById('checkboxError');
let isChecked = false;

checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
        isChecked = true;
    }
});

if (!isChecked) {
    checkboxError.textContent = 'Необходимо выбрать хотя бы один пункт';
    isValid = false;
} else {
    checkboxError.textContent = '';
}

const selectForm = document.getElementById('sel-form');
const selectError = document.getElementById('selectError');

if (selectForm.value === '1') {
    selectError.textContent = 'Необходимо выбрать преподавателя';
    isValid = false;
} else {
    selectError.textContent = '';
}


  // Если форма не валидна, предотвратить отправку
  if (!isValid) {
      event.preventDefault();
  } else{
    event.preventDefault();
// Получаем выбранный элемент из выпадающего списка
var selectElement1 = document.getElementById('sel-form');
var selectedOption = selectElement1.options[selectElement1.selectedIndex].text;

// Создаем объект FormData
const myFormDate = new FormData(formCard);

// Преобразуем FormData в объект
let formDataObj = {};
myFormDate.forEach((value, key) => {
  formDataObj[key] = value;
});

// Сохраняем данные формы в cookie
setCookie('formData', JSON.stringify(formDataObj), 7);
setCookie('selectedOption', selectedOption, 7);

// Сохраняем данные в Local Storage
// Преобразование объекта в строку JSON и сохранение в localStorage
localStorage.setItem('formData', JSON.stringify(formDataObj));

// Извлечение объекта из localStorage и преобразование обратно в объект
let retrievedData = JSON.parse(localStorage.getItem('formData'));

// Выводим данные для проверки
for (let [key, value] of Object.entries(formDataObj)) {
  alert(`${key}: ${value}`);
}
alert('Преподаватель: ' + selectedOption);
}
  }
  
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function clearCookies() {
  const cookies = document.cookie.split(";");

  for (let cookie of cookies) {
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
  }
  alert('Все cookies удалены');
}






