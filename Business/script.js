addEventListener('DOMContentLoaded', () => {
  // бургер меню

  let burgerBtn = document.querySelector('.btn-burger');
  let closeBtn = document.querySelector('.btn-close');
  let modal = document.querySelector('.burger-modal');

  burgerBtn.addEventListener('click', () => {
    modal.classList.add('active');
  });
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  let btnAccept = document.querySelector('.btn-accept');
  let btnDecline = document.querySelector('.btn-decline');
  let cookiesClose = document.querySelector('.cookies-close path');
  let cookies = document.querySelector('.cookies');
  let btnsContact = document.querySelectorAll('.btn-contact');

  btnAccept.addEventListener('click', () => {
    cookies.classList.add('active');
  });
  btnDecline.addEventListener('click', () => {
    cookies.classList.add('active');
  });
  cookiesClose.addEventListener('click', () => {
    cookies.classList.add('active');
  });

  // проверка полей в модальном окне

  let nameInput = document.querySelector('#name');
  let nameError = document.querySelector('.error-name');

  let phoneInput = document.querySelector('#phone');
  let phoneError = document.querySelector('.error-phone');

  let emailInput = document.querySelector('#email');
  let emailError = document.querySelector('.error-email');

  let formBtn = document.querySelector('.form-btn');
  let form = document.querySelector('#form');
  let closeModal = document.querySelector('.close-modal');
  let formSuccess = document.querySelector('.modal__contact-success');
  let contactModal = document.querySelector('.contact-modal');
  let modalContent = document.querySelector('.modal__content');
  let btnSuper = document.querySelector('.btn-super');

  function checkValid() {
    let isValid = true;
    if (!nameInput.value) {
      nameError.textContent = 'This field is required.';
      nameInput.style.borderColor = '#ec1211';
      isValid = false;
    } else {
      nameError.textContent = '';
      nameInput.style.borderColor = '#f1f1f1';
    }
    if (!phoneInput.value) {
      phoneError.textContent = 'This field is required.';
      phoneInput.style.borderColor = '#ec1211';
      isValid = false;
    } else {
      phoneError.textContent = '';
      phoneInput.style.borderColor = '#f1f1f1';
    }
    if (!emailInput.value) {
      emailError.textContent = 'This field is required.';
      emailInput.style.borderColor = '#ec1211';
      isValid = false;
    } else {
      emailError.textContent = '';
      emailInput.style.borderColor = '#f1f1f1';
    }

    return isValid;
  }
  nameInput.addEventListener('input', checkValid);
  phoneInput.addEventListener('input', checkValid);
  emailInput.addEventListener('input', checkValid);

  form.addEventListener('submit', function (event) {
    event.preventDefault();
  });

  form.addEventListener('input', function () {
    formBtn.disabled = !checkValid();
  });

  formBtn.addEventListener('click', () => {
    form.style.display = 'none';
    formSuccess.style.display = 'flex';
  });

  closeModal.addEventListener('click', () => {
    contactModal.classList.remove('active');
    modalContent.classList.remove('active');
    form.style.display = 'block';
    formSuccess.style.display = 'none';
  });
  btnSuper.addEventListener('click', () => {
    contactModal.classList.remove('active');
    modalContent.classList.remove('active');
    form.style.display = 'block';
    formSuccess.style.display = 'none';
  });

  btnsContact.forEach((btn) => {
    btn.addEventListener('click', () => {
      contactModal.classList.add('active');
      modalContent.classList.add('active');
      form.style.display = 'block';
      formSuccess.style.display = 'none';
    });
  });

  // подключение маски в телефон
  $('#phone').mask('+7 (999) 999-99-99');
});

// закреп шапки
window.addEventListener('scroll', function () {
  let block = document.querySelector('.header__wrapper-logo');

  let blockOffset = block.offsetTop;
  let scrollPosition = window.pageYOffset;

  if (scrollPosition <= blockOffset) {
    block.style.position = 'relative';
  } else {
    block.style.position = 'fixed';
    block.style.top = '0';
  }
});
