const sendForm = () => {
  const errorMessage = 'Что то пошло не так...';
  const successMassage = 'Спасибо! Мы скоро с вами свяжемся';
  const downloadMessage = 'Загрузка...';

  const showMessage = (
    form,
    message,
    timeout
  ) => {
    form.querySelectorAll('.status-message').forEach(element => element.parentNode.removeChild(element));
    const element = document.createElement('div');
    element.className = 'status-message';
    element.style.cssText = 'font-size: 2rem; color: #000;';
    element.innerHTML = message;
    form.appendChild(element);
    if (timeout) {
      setTimeout(() => {
        element.parentNode.removeChild(element);
      }, timeout);
    }
  };

  const postData = dataForm => {
    const requestBody = {};
    dataForm.forEach((val, key) => requestBody[key] = val);
    return fetch('../server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
  };

  const validators = {
    'user_name': /^[а-я]+$/i,
    'user_quest': /^[а-я\s]+$/i,
    'user_phone': /^\+\d{11}$/
  };

  /*
    Returns:
      null => all OK
      [wrong_field] => error
    */
  const validateForm = (arrInput, validators) => {
    const errors = [];

    arrInput.forEach((value, key) => {
      if (!validators[key].test(value)) {
        errors.push(key);
      }
    });
    return errors.length ? errors : null;
  };

  const onSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const inputFields = form.querySelectorAll('input');

    showMessage(form, downloadMessage);

    const formData = new FormData(form);
    if (validateForm(formData, validators) !== null) {
      showMessage(form, errorMessage);
      return;
    }

    postData(formData)
      .then(response => {
        if (response.status !== 200) {
          throw new Error('status network is not 200');
        }
        showMessage(form, successMassage, 3000);
      })
      .catch(error => {
        showMessage(form, errorMessage);
        console.error(error);
      })
      .finally(() => {
        inputFields.forEach(elem => {
          elem.value = '';
          elem.classList.remove('success');
        });
      });
  };

  document.body.addEventListener('click', event => {
    const target = event.target.closest('form');
    if (target === null) {
      return;
    } else {
      target.addEventListener('submit', onSubmit);
    }
  });
};

export default sendForm;