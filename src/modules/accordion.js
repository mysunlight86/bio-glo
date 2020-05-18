const accordion = accordionId => {
  const accordionBlock = document.getElementById(accordionId);
  accordionBlock.addEventListener('click', event => {
    event.preventDefault();

    const panel = event.target.closest('.panel-default');
    console.log(panel.querySelector('.panel-collapse').querySelectorAll('span'));
    if (panel.querySelector('.panel-collapse').classList.contains('in')) {
      const btnNext = panel.querySelector('.construct-btn');
      if (!btnNext) return;

      if (event.target.closest('.construct-btn') !== null &&
      accordionBlock.querySelector(btnNext.getAttribute('href')) !== null) {
        accordionBlock.querySelectorAll('.panel-collapse').forEach(elem => elem.classList.remove('in'));
        accordionBlock.querySelector(btnNext.getAttribute('href')).classList.add('in');
        console.log(event.target.closest('.construct-btn'));
        console.log(accordionBlock.querySelector(btnNext.getAttribute('href')));
        return;
      }
      return;
    } else {
      accordionBlock.querySelectorAll('.panel-collapse').forEach(elem => elem.classList.remove('in'));
      panel.querySelector('.panel-collapse').classList.add('in');
      return;
    }
  });
};

export default accordion;
