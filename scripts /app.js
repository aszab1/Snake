// * Elements
// Start button DOM element: startButton (.start class)
const startBtn = document.getElementById('start')
// Grid (const grid = document.queryselector(.grid))
const grid = document.querySelector('.grid')
// score display (.score class)
const scoreSpan = document.getElementById('scoreSpan')
// Cells (const cells [])
const cells = []

// potentially - high-score (class)

// * Variables
// snake  / initial position
const startSnakePos = 189 
let currentSnakePos = [startSnakePos]
// food  /intial position 
let startFoodPos = 45
// direction start on the right
let direction = 1
// gameInterval
let gameInterval = 0
// Is game active? - boolean (let gameActive - false)
let gameActive = false
// Start score at 0
let score = 0



// * Grid 
// Making the grid in JS 
// width (this will be both the width and the height const width = )
const width = 20
// cellcount - represents the number of cells in the grid (const cellCount = width * width)
const cellCount = width * width
// function to create all the grid cells and append them to the existing grid 
function createGrid(){
  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement('div')
    cell.id = i
    cell.classList.add('cell')
    // set width and height of the div cells
    cell.style.width = `${100 / width}%`
    cell.style.height = `${100 / width}%`
    
    grid.appendChild(cell)
    cells.push(cell)
  }
  addSnake(startSnakePos)
  addFood(startFoodPos)
}
createGrid()



// Function to update the grid with the starting snake and food position
// add snake 
function addSnake(position){
  cells[position].classList.add('snake')
}
// food 
function addFood(position){
  cells[position].classList.add('food')
}
//function to move snake
function moveSnake() { 
  if (!gameActive) return

  //snake collision 
  const head = currentSnakePos[currentSnakePos.length - 1] + direction 

  if (head < 0 || head >= cellCount || 
  //right border collision
  (direction === 1 && head % width === 0) || 
  //left border collision
  (direction === -1 && head % width === width - 1) || 
  cells[head].classList.contains('snake')) {
    endGame() 
    return 
  }
  currentSnakePos.push(head)
  
  if (cells[head].classList.contains('food')) { 
    score++ 
    scoreSpan.textContent = score 
    cells[head].classList.remove('food') 
    addFood(getrandomFoodPosition())
    //increase speed by 5ms after each food eaten starting at 200
    clearInterval(gameInterval)
    gameInterval = setInterval(moveSnake, 200 - (score * 5))
  } else {
    const tail = currentSnakePos.shift()
    cells[tail].classList.remove('snake')
  }
  cells[head].classList.add('snake')
}
console.log(moveSnake)

function getrandomFoodPosition() {
  let foodPosition 
  do {
    foodPosition = Math.floor(Math.random() * cellCount)
  } while (
    currentSnakePos.includes(foodPosition) ||
    cells[foodPosition].classList.contains('food')) 

  return foodPosition
}

function endGame() {
  gameActive = false
  clearInterval(gameInterval)
  alert(`Game over! Final score: ${score}`)

  currentSnakePos = startSnakePos
  direction = 1
  score = 0
  scoreSpan.textContent = 0

  cells.forEach((cell) => cell.classList.remove('snake', 'food'))
  addSnake(currentSnakePos)
  addFood(startFoodPos)
}

function changeDirection(evt) {
  const key = evt.code
  if (key === 'ArrowUp' && direction !== width) {
    direction = -width
  } else if (key === 'ArrowDown' && direction !== -width) {
    direction = width
  } else if (key === 'ArrowLeft' && direction !== 1) {
    direction = -1
  } else if (key === 'ArrowRight' && direction !== -1) {
    direction = 1
  }
}


startBtn.addEventListener('click', () => {
  if (!gameActive) {
    gameActive = true
    gameInterval = setInterval(moveSnake, 200)
  }
})



document.addEventListener('keydown', changeDirection)


// * Page Load 
//createGrid()