export function collectData() {
  const calcType = document.getElementById('myonoffswitch');
  const calcSquare = document.querySelectorAll('.expand');
  const wellBottom = document.getElementById('myonoffswitch-two');
  const calcResult = document.getElementById('calc-result');
  return {
    typeValue: calcType.checked ? 1 : 2,
    squareValue1: calcSquare[0].options[calcSquare[0].selectedIndex].value,
    countValue1: calcSquare[1].options[calcSquare[1].selectedIndex].value,
    squareValue2: calcSquare[2].options[calcSquare[2].selectedIndex].value,
    countValue2: calcSquare[3].options[calcSquare[3].selectedIndex].value,
    isWellBottom: wellBottom.checked,
    total: calcResult.value
  };
}

export const calc = () => {
  const calcBlock = document.getElementById('accordion');
  const calcResult = document.getElementById('calc-result');

  const countSum = () => {

    const {
      typeValue,
      squareValue1,
      countValue1,
      squareValue2,
      countValue2,
      isWellBottom
    } = collectData();

    let total = 0;
    const price = typeValue === 1 ? 10000 : 15000;
    let squareValue = 0;
    let countValue = 0;

    if (typeValue === 1) {
      if (squareValue1 === '2') {
        squareValue += price / 5;
      }
    } else {
      if (squareValue1 === '2') {
        squareValue += price / 5;
      }
      if (squareValue2 === '2') {
        squareValue += price / 5;
      }
    }

    if (typeValue === 1) {
      switch (countValue1) {
      case '2':
        countValue += price * 3 / 10;
        break;
      case '3':
        countValue += price / 2;
        break;
      }
    } else {
      switch (countValue1) {
      case '2':
        countValue += price * 3 / 10;
        break;
      case '3':
        countValue += price / 2;
        break;
      }
      switch (countValue2) {
      case '2':
        countValue += price * 3 / 10;
        break;
      case '3':
        countValue += price / 2;
        break;
      }
    }

    total = Math.floor(price + squareValue + countValue);

    if (typeValue === 1) {
      if (isWellBottom) {
        total += 1000;
      }
    } else {
      if (isWellBottom) {
        total += 2000;
      }
    }

    // calcResult.value = total;
    // Digit counter
    let count = 1;
    const idInterval = setInterval(() => {
      const step = total / 37.5;
      calcResult.value = count;

      if (count < total) {
        count += step;
        calcResult.value = Math.floor(count);
      } else {
        clearInterval(idInterval);
        count = total;
        calcResult.value = count;
      }
    });
  };

  calcBlock.addEventListener('change', event => {
    const target = event.target;
    if (target.matches('select') || target.matches('input')) {
      countSum();
    }
  });
};
