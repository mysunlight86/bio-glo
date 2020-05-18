import toggleModal from './modules/toggleModal';
import accordion from './modules/accordion';
import sendForm from './modules/sendForm';

toggleModal('.call-btn', '.popup-call');
toggleModal('.discount-btn', '.popup-discount');
accordion();
sendForm();
