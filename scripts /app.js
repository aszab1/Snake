// * Elements
// Start button DOM element: startButton (.start class)
const startBtn = document.getElementById('start')
// Grid (const grid = document.queryselector(.grid))
const grid = document.querySelector('.grid')
// score display (.score class)
const scoreSpan = document.getElementById('scoreSpan')
// Cells (const cells [])
const cells = []
const colors = ['yellow', 'red'] 

// potentially - high-score (class)

// * Variables
// snake  / initial position
const startSnakePos = 189 
let currentSnakePos = [startSnakePos]
// food  /intial position 
const startFoodPos = 45
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
// uses a loop to create cellCount number of cells 
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
function addSnake(headPos){
  cells[headPos].classList.add('snake')
  currentSnakePos.forEach(pos => {
    if (headPos !== pos) {
      cells[pos].classList.remove('snake')
      cells[pos].classList.add('yellow')

    }
  }) 
}

// food 
function addFood(position){
  cells[position].classList.add('food')
}

// * Execution 

//function to move snake
//first check if gameActive - if false, return from the function
function moveSnake() { 
  if (!gameActive) return

  // calculates the the head's next position based on its currentSnakesPos and the direction its moving
  const head = currentSnakePos[currentSnakePos.length - 1] + direction 
  //snake collision 
  // checks if the head is out of the grid boundaries ( >= cellCount)
  if (head < 0 || head >= cellCount || 
  //right border collision
  (direction === 1 && head % width === 0) || 
  //left border collision
  (direction === -1 && head % width === width - 1) || 
  // collides with own body
  cells[head].classList.contains('snake')) {
    endGame() 
    return 
  }
  //add new head position to the currentSnakePos array, representing the snakes body
  currentSnakePos.push(head)
  
  //checks if cell and  head position contains food class. if it does, snake ate food
  if (cells[head].classList.contains('food')) { 
    // update score by 1
    score++ 
    // update scoreSpan
    scoreSpan.textContent = score 
    // remove food class from cell
    cells[head].classList.remove('food') 
    //call addFood function to add new food using the getrandomFoodposition
    addFood(getRandomFoodPosition())
    //clear existing interval time
    clearInterval(gameInterval)
    // increase speed by 5ms after each food eaten starting at 200
    gameInterval = setInterval(moveSnake, 200 - (score * 5))
  } else {
    // remove tail position from currentSnakePos array and assign it to tail
    const tail = currentSnakePos.shift()
    // remove the snake class from the cell at the previous tail pos
    cells[tail].classList.remove('snake', 'yellow')
  }
  // add the snake class to the new head position 
  addSnake(head)
  
}


//function to generate a random food position on the grid

function getRandomFoodPosition() {
  let foodPosition 
  do {
    foodPosition = Math.floor(Math.random() * cellCount)
  } while (
    // making sure the food position doesn't overlap with the snake 
    currentSnakePos.includes(foodPosition) ||
    cells[foodPosition].classList.contains('food')) 

  return foodPosition
}
//function endGame 
// stopping the game interval and displaying final score
function endGame() {
  gameActive = false
  clearInterval(gameInterval)
  alert(`Game over!!\nFinal score: ${score}`)

  // resetting the snake's inital position, direction, score 
  currentSnakePos = startSnakePos
  direction = 1
  score = 0
  scoreSpan.textContent = 0

  //removing snake and food classes from all cells 
  cells.forEach((cell) => {
    cell.classList.remove('snake', 'food')
    //added
    cell.style.backgroundColor = ''
  })
  addSnake(currentSnakePos)
  addFood(startFoodPos)
}

//function for direction 
//handles the direction change of the snake based on the key pressed 
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

// * Event Listeners 

startBtn.addEventListener('click', () => {
  if (!gameActive) {
    gameActive = true
    gameInterval = setInterval(moveSnake, 200)
  }
})



document.addEventListener('keydown', changeDirection)


// * Page Load 
//createGrid()