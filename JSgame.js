//       Клик, начало игры, исчезновение кнопки, белый блок центральный

var $start = document.querySelector('#start')
var $game = document.querySelector('#game')
var $time = document.querySelector('#time')
var $timeHeader = document.querySelector('#time-header')
var $resultHeader = document.querySelector('#result-header')
var $result = document.querySelector('#result')
var $gameTime = document.querySelector('#game-time')



$start.addEventListener('click',startGame)
$game.addEventListener('click', handleBlockClick)
$gameTime.addEventListener('input', setGameTime)

//            Функции скрытия и появления
function show($el) {
$el.classList.remove('hide')

}

function hide($el) {
 $el.classList.add('hide')
}

var score = 0
var isGameStarted = false

function startGame() {
    score = 0
    setGameTime()
    $gameTime.setAttribute('disabled', 'true')
    isGameStarted = true
    $game.style.backgroundColor = '#ff0'
    hide($start)
//        Таймер
var interval = setInterval(function() {
var time = parseFloat($time.textContent)
    console.log('interval', $time.textContent)
if (time <= 0) {
    clearInterval(interval)
    endGame()
    } else {
    $time.textContent = (time - 0.1).toFixed(1)
 }
}, 100)
    renderBox()
}
//    Создание блока
function handleBlockClick(event) {
    if (!isGameStarted) {
    return
  }

  if (event.target.dataset.box) {
    score++
    renderBox()
  }
}
//    Подсчет очков
function setGameScore() {
    $result.textContent = score.toString()
}

function setGameTime() {
    var time = parseInt($gameTime.value)
    $time.textContent = time.toFixed(1)
    show($timeHeader)
    hide($resultHeader)
}
//      End Game
function endGame() {
    isGameStarted = false
    setGameScore()
    $gameTime.removeAttribute('disabled')
    show($start)
    $game.style.backgroundColor = '#ccc'
    $game.innerHTML = ''
    hide($timeHeader)
    show($resultHeader)
    
}
//          Генерация случайного цвета
function generateColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16)
  }

function renderBox() {
    console.log(getRandom(30, 100))
    $game.innerHTML = ''
    var box = document.createElement('div')
    var boxSize = getRandom(30, 100)
    var gameSize = $game.getBoundingClientRect()
    var maxTop = gameSize.height - boxSize
    var maxLeft = gameSize.width - boxSize
    console.log(gameSize)

    box.style.height = box.style.width = boxSize + 'px'
    box.style.position = 'absolute'
    box.style.backgroundColor = generateColor()
    box.style.top = getRandom(0, maxTop) + 'px'
    box.style.left = getRandom(0, maxLeft) + 'px'
    box.style.cursor = 'pointer'
    box.setAttribute('data-box', true)

    $game.insertAdjacentElement('afterbegin', box)
}


//                                         Динамика квадрата

function getRandom(min, max) {

 return Math.floor(Math.random() * (max - min) + min)
}
