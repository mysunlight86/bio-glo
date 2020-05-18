const accordion = () => {
  const accordionTwo = document.getElementById('accordion-two');
  accordionTwo.addEventListener('click', event => {
    event.preventDefault();
    const target = event.target.closest('.panel-default');
    if (target.querySelector('.panel-collapse').classList.contains('in')) {
      return;
    } else {
      accordionTwo.querySelectorAll('.panel-collapse').forEach(elem => elem.classList.remove('in'));
      target.querySelector('.panel-collapse').classList.add('in');
      return;
    }
  });
};

export default accordion;
