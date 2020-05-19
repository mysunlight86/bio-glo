const accordion = accordionId => {
  const toggleSwitch = elem => {
    if (elem.checked) {
      elem.checked = false;
    } else {
      elem.checked = true;
    }
  };
  const accordionBlock = document.getElementById(accordionId);
  const myOnOffSwitch = document.getElementById('myonoffswitch');
  const myOnOffSwitchTwo = document.getElementById('myonoffswitch-two');
  accordionBlock.addEventListener('click', event => {
    event.preventDefault();

    const panel = event.target.closest('.panel-default');
    const btnNext = panel.querySelector('.construct-btn');
    if (panel.querySelector('.panel-collapse').classList.contains('in')) {

      if (!btnNext) {
        return;
      }

      if (event.target.closest('.construct-btn') !== null &&
      accordionBlock.querySelector(btnNext.getAttribute('href')) !== null) {
        accordionBlock.querySelectorAll('.panel-collapse').forEach(elem => elem.classList.remove('in'));
        accordionBlock.querySelector(btnNext.getAttribute('href')).classList.add('in');

        if (accordionBlock.querySelector(btnNext.getAttribute('href')).getAttribute('id') === 'collapseTwo') {
          // const panelBody = accordionBlock.querySelector(btnNext.getAttribute('href')).children[0];
          const panelBody = accordionBlock.querySelector(btnNext.getAttribute('href')).querySelector('.panel-body');
          if (myOnOffSwitch.checked) {
            for (let i = 3; i <= 5; i++) {
              accordionBlock.querySelector(btnNext.getAttribute('href')).children[0].children[i].style.display = 'none';
            }
          } else {
            panelBody.children[3].style.display = 'block';
            panelBody.children[4].style.display = 'inline-block';
            panelBody.children[5].style.display = 'inline-block';
          }
        }
        return;
      }

      if (event.target.closest('.onoffswitch') !== null && event.target.closest('#collapseOne') !== null) {
        toggleSwitch(myOnOffSwitch);
        return;
      }

      if (event.target.closest('.onoffswitch') !== null && event.target.closest('#collapseThree') !== null) {
        toggleSwitch(myOnOffSwitchTwo);
        return;
      }

      return;
    } else {
      accordionBlock.querySelectorAll('.panel-collapse').forEach(elem => elem.classList.remove('in'));
      panel.querySelector('.panel-collapse').classList.add('in');
      if (panel.querySelector('.panel-collapse').getAttribute('id') === 'collapseTwo') {
        if (myOnOffSwitch.checked) {
          for (let i = 3; i <= 5; i++) {
            panel.querySelector('.panel-body').children[i].style.display = 'none';
          }
        } else {
          panel.querySelector('.panel-body').children[3].style.display = 'block';
          panel.querySelector('.panel-body').children[4].style.display = 'inline-block';
          panel.querySelector('.panel-body').children[5].style.display = 'inline-block';
        }
      }
      return;
    }
  });
};

export default accordion;
