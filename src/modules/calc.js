const calc = () => {
  const calcBlock = document.getElementById('accordion');
  const calcType = document.getElementById('myonoffswitch');
  const calcSquare = document.querySelectorAll('.expand');
  const wellBottom = document.getElementById('myonoffswitch-two');
  const calcResult = document.getElementById('calc-result');

  const countSum = () => {
    let total = 0;
    const typeValue = calcType.checked ? 1 : 2;
    const price = typeValue === 1 ? 10000 : 15000;
    const squareValue1 = calcSquare[0].options[calcSquare[0].selectedIndex].value;
    const countValue1 = calcSquare[1].options[calcSquare[1].selectedIndex].value;
    const squareValue2 = calcSquare[2].options[calcSquare[2].selectedIndex].value;
    const countValue2 = calcSquare[3].options[calcSquare[3].selectedIndex].value;
    let squareValue = 0;
    let countValue = 0;
    const isWellBottom = wellBottom.checked;

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

    if (calcType.checked) {
      if (isWellBottom) {
        total += 1000;
      }
    } else {
      if (isWellBottom) {
        total += 2000;
      }
    }

    calcResult.value = total;
  };

  calcBlock.addEventListener('change', event => {
    const target = event.target;
    if (target.matches('select') || target.matches('input')) {
      countSum();
    }
  });

};

export default calc;
