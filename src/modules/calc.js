// export const question = document.querySelector('input[name="user_quest"]').value;
export function questData() {
  const questInput = document.querySelector('input[name="user_quest"]');
  return {
    'user_quest': questInput.value
  };
}

export function collectData() {
  const calcType = document.getElementById('myonoffswitch');
  const calcSquare = document.querySelectorAll('.expand');
  const wellBottom = document.getElementById('myonoffswitch-two');
  const distInput = document.getElementById('distance');
  const calcResult = document.getElementById('calc-result');
  return {
    'well_type': calcType.checked ? 1 : 2,
    'well_diameter_single_circuit': calcSquare[0].options[calcSquare[0].selectedIndex].value,
    'well_count_single_circuit': calcSquare[1].options[calcSquare[1].selectedIndex].value,
    'well_diameter_double_circuit': calcSquare[2].options[calcSquare[2].selectedIndex].value,
    'well_count_double_circuit': calcSquare[3].options[calcSquare[3].selectedIndex].value,
    'is_well_bottom': wellBottom.checked,
    'distance': distInput.value,
    'calc_result': calcResult.value
  };
}

export const calc = () => {
  const calcBlock = document.getElementById('accordion');
  const calcResult = document.getElementById('calc-result');

  const countSum = () => {

    const {
      'well_type': typeValue,
      'well_diameter_single_circuit': squareValue1,
      'well_count_single_circuit': countValue1,
      'well_diameter_double_circuit': squareValue2,
      'well_count_double_circuit': countValue2,
      'is_well_bottom': isWellBottom
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

    calcResult.value = total;
  };

  calcBlock.addEventListener('change', event => {
    const target = event.target;
    if (target.matches('select') || target.matches('input')) {
      countSum();
    }
  });
};
