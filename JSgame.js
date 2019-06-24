//                                     Клик, начало игры, исчезновение кнопки, белый блок центральный

var $start = document.querySelector('#start')
var $game = document.querySelector('#game')

$start.addEventListener('click',startGame)
$game.addEventListener('click', handleBlockClick)

var score = 0

function startGame() {
    $game.style.backgroundColor = '#fff'
    $start.classList.add('hide')
    renderBox()
}
//                                     Создание блока
function handleBlockClick(event) {
  if (event.target.dataset.box) {
      score++
      renderBox()
  }
}

function renderBox() {
    $game.innerHTML = ''
    var box = document.createElement('div')

    box.style.height = box.style.width = '50px'
    box.style.position = 'absolute'
    box.style.backgroundColor = '#000'
    box.style.top = '50px'
    box.style.left = '70px'
    box.style.cursor = 'pointer'
    box.setAttribute('data-box', true)

    $game.insertAdjacentElement('afterbegin', box)
}


