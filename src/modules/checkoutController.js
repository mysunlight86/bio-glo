export default function(buttonSelector, formSelector, collectData) {
  function cleanupForm() {
    document.querySelectorAll(`${formSelector} input[type=hidden]`)
      .forEach(element => element.remove());
  }

  function appendInput(name, value) {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    input.value = value;
    document.querySelector(formSelector).append(input);
  }

  function onButtonClick() {
    cleanupForm();
    const data = collectData();
    for (const name of Object.keys(data)) {
      appendInput(name, data[name]);
    }
  }

  const buttons = document.querySelectorAll(buttonSelector);
  buttons.forEach(btn => btn.addEventListener('click', onButtonClick));

  return function destroy() {
    buttons.forEach(btn => btn.removeEventListener('click', onButtonClick));
  };
}
