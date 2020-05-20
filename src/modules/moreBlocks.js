const moreBlocks = () => {
  const sentenceSection = document.querySelector('.sentence');
  const sentenceBlocks = document.querySelectorAll('.col-sm-6');

  sentenceSection.addEventListener('click', event => {
    const target = event.target;

    if (target.closest('.add-sentence-btn') !== null) {
      for (let i = 6; i <= 8; i++) {
        sentenceBlocks[i].classList.remove('visible-sm-block');
        sentenceBlocks[i].classList.remove('hidden');
      }
      sentenceSection.querySelector('.add-sentence-btn').style.display = 'none';

      console.log(target);
    }
  });
};

export default moreBlocks;
