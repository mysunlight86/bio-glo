import toggleModal from './modules/toggleModal';
import accordion from './modules/accordion';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

toggleModal('.call-btn', '.popup-call');
toggleModal('.discount-btn', '.popup-discount');
toggleModal('.check-btn', '.popup-check');
accordion('accordion');
accordion('accordion-two');
calc();
sendForm();
