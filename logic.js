const arg_input = document.querySelector('.arg-input');
const arg_output = document.querySelector('.arg-output_res');
const list = document.querySelector('.list')

const tr_input = document.querySelector('.tr-input');
const tr_output = document.querySelector('.tr-output_res');

const showBtn = document.querySelector('.show')


showBtn.addEventListener('click', () => {
  showBtn.classList.contains('active') ?
    hiddenMenu() : showMenu()
})


let percent;


let usd = 111;



function floor(price) {
  let enterPrice = Number(price)
  const lastNum = Number(enterPrice.toString().split('').pop())

  switch (lastNum) {
    case 1:
      enterPrice += 4
      break;
    case 2:
      enterPrice += 3
      break;
    case 3:
      enterPrice += 2
      break;
    case 4:
      enterPrice += 1
      break;
    case 6:
      enterPrice += 4
      break;
    case 7:
      enterPrice += 3
      break;
    case 8:
      enterPrice += 2
      break;
    case 9:
      enterPrice += 1
      break;
    default:
      enterPrice
      break;
  }
  return enterPrice;
}

function resultArg() {
  let a = 0;
  const value = Number(arg_input.value)
  a = resSwitсhArg(value)
  const valuePercent = value * 1.7
  const rub = valuePercent * usd
  const res = rub + a
  arg_output.innerHTML = floor(res.toFixed())
}

function resultTr() {
  const value = Number(tr_input.value) + .1
  const res = value * usd
  const finishRes = res + resSwitсhTr(tr_input.value)
  tr_output.innerHTML = floor(finishRes.toFixed())
}



function resSwitсhArg(value) {
  let a;

  if (value <= 0.2) {
    a = 300
  } else if (value > 0.2 && value <= 1) {
    a = 380
  } else if (value > 1 && value <= 3) {
    a = 400
  } else if (value > 3 && value <= 5) {
    a = 400
  } else if (value > 5 && value <= 10) {
    a = 350
  } else if (value > 10 && value <= 15) {
    a = 450
  } else if (value > 15 && value <= 20) {
    a = 450
  } else if (value > 20 && value <= 25) {
    a = 550
  } else if (value > 25) {
    a = 500
  }
  return a
}


function resSwitсhTr(value) {
  let a;

  if (value <= 1) {
    a = 110
  } else if (value > 1 && value <= 5) {
    a = 110
  } else if (value > 5 && value <= 10) {
    a = 100
  } else if (value > 10 && value <= 15) {
    a = 100
  } else if (value > 15 && value <= 20) {
    a = 130
  } else if (value > 20 && value <= 25) {
    a = 100
  } else if (value > 25) {
    a = 100
  }
  return a
}


arg_input.oninput = resultArg

tr_input.oninput = resultTr


function resultFromListArg(price) {
  let a = 0;
  const value = Number(price) * 1.7
  a = resSwitсhArg(value)
  const rub = value * usd + 50
  const finishRes = rub + a
  return floor(finishRes.toFixed())
}

function resultFromListTr(price) {
  const value = Number(price) + .1
  const res = value * usd + 50
  const finishRes = res + resSwitсhTr(value)

  return floor(finishRes.toFixed())
}
// 
function showMenu() {
  showBtn.classList.add('active')
  list.classList.add('active');
  showBtn.innerHTML = 'Скрыть Список'
  showBtn.style.background = 'red'

}

function hiddenMenu() {
  showBtn.classList.remove('active')
  list.classList.remove('active');
  showBtn.innerHTML = 'Показать Список'
  showBtn.style.background = 'greenyellow'
}



