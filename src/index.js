import toggleModal from './modules/toggleModal';
import accordion from './modules/accordion';
import { calc, collectData } from './modules/calc';
import sendForm from './modules/sendForm';
import moreBlocks from './modules/moreBlocks';
import checkoutController from './modules/checkoutController';


checkoutController('.call-btn.construct-btn', '#form11', collectData);
checkoutController('.discount-btn', '#form11', () => ({ total: "33500" }));

toggleModal('.call-btn:not(.construct-btn)', '.popup-call');
toggleModal('.call-btn.construct-btn', '.popup-discount');
toggleModal('.discount-btn', '.popup-discount');
toggleModal('.check-btn', '.popup-check');
toggleModal('.consultation-btn', '.popup-consultation');

accordion('accordion');
accordion('accordion-two');
calc();
sendForm();
moreBlocks();
