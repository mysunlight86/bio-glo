const toggleModal = (clickSelector, modalSelector) => {
  const clickElem = document.querySelectorAll(clickSelector);
  const windowModal = document.querySelector(modalSelector);

  // show popup
  clickElem.forEach(elem => elem.addEventListener('click', event => {
    event.preventDefault();
    windowModal.style.display = 'block';
  }));

  // hide popup
  windowModal.addEventListener('click', event => {
    let target = event.target;

    if (target.classList.contains('popup-close')) {
      windowModal.style.display = 'none';
    } else {
      target = target.closest('.popup-content');

      if (!target) {
        windowModal.style.display = 'none';
      }
    }
  });
};

export default toggleModal;
