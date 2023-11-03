// * Elements
// Start button DOM element: startButton (.start class)
const startBtn = document.getElementById('start')
// Grid (const grid = document.queryselector(.grid))
const grid = document.querySelector('.grid')
// Cells (const cells [])
const cells = []
// Initial speed of snake 

// direction
// potentially - score display (.score class)
// potentially - high-score (class)

// * Variables
// snake  / initial position
// food  /intial position 
// gameInterval
// Is game active? - boolean (let gameActive - false)
// potentially Start score at 0
// 

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
    cell.innerText = i
    cell.id = i 
    cell.classList.add('cell')
    // set width and height of the div cells
    cell.style.width = `${100 / width}%`
    cell.style.height = `${100 / width}%`
    
    grid.append(cell)
    cells.push(cell)
  }
}
createGrid()

// Function to update the grid with the starting snake and food position
// add snake (poss .forEach)
// food (poss const = foodIdx)

// * Executions
// Click start button to start the game;  
// check if gamesactive - reset if not,  
// set game interval to inital speed 
// function to move the snake - const head  /  set direction up, down, left, right
// if head is touching food - push food to head poss if/else / if checkCollision()  endGame /reset

// function to generate random food positions (with Math.floor(Math.random))
// function , let foodposition = ,

// function to check for collision (wall and self)
// function checkCollision ()

// function to end the game 
// function endGame () clearInterval=gameinterval
// alert Game over (and potentially score)

// fuction to reset game 
// snake, food position, direction, displayGrid ()
//  potentially score / update high-score 




//  * EventListeners
// Start button: click --> startGame function
// keyboard input - (document.addEvenlistener)



// * Page Load 
//createGrid()