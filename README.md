# ReadMe The Rainforest Snake project

**Description**

Snake is a single-player game where the player earns points by guiding the snake to eat food randomly placed on the game board. Each item of food the snake eats the longer it grows. The game is over if the snake hits the edge of the board, or itself. To make things even more challenging, the snake increases speed the longer it gets!

The aim of the game is to stay alive as long as possible.

The game features sound effects that can be toggled on/off and stores the high score in local storage.

**Deployment link**

**[https://aszab1.github.io/Snake/](https://aszab1.github.io/Snake/)**

**Getting Started/Code Installation**

To run the game locally: 



* Clone  repo
* Open index.html in a browser 

Alternatively, you can play the deployed version by clicking on the link in the deployment link section**.  **

**Timeframe**

I had one week to build a grid-based snake game using HTML, CSS and JavaScript. My version of snake is played in the rainforest, the player controls the snake with the keyboard arrow buttons.

**Technologies Used**

**HTML**



* Header 
* Start and audio buttons
* Header for grid

**CSS**



* Styling of elements 
* Adding snake head and body 

**JavaScript** 



* Creating Grid 
* Creating Game logic 
* Click event to start game
* keyUp event to move snake
* Play and Pause sound

**Brief**

The requirements for the game were: 

* The snake should be able to eat food to grow bigger

* The game should end when the snake hits the wall or itself

* Snake speeds up as it eats more

**Planning**

This was my first project / attempt at creating a game. I started by browsing the web for images of rainforest snakes and backgrounds. 

Based my snake on this image: 



<img width="500" alt="G8G-jRopTdMMeIhao2Ivje0IdLraXwPhWdgp0qhU_7QCMmGjjJ_qpqVt6ATiB2nF219hkcgcqHz_J3GmMwXDDtT65RsvHwjgeS1SojIX1XOTblvL_cCUI4NJtoEKQ1M-ybzS3zt54zzogSqubM1pT-A" src="https://github.com/aszab1/Snake/assets/145586216/9f3d9fab-2d12-4267-abdb-98c38d9269c1">





I chose the background from [this website](https://www.freepik.com/search?format=search&query=forest-night-scene-with-different-wild-animals).

In the planning phase of the project, I utilised Excalidraw to create a detailed wireframe for the snake game. My primary goal was to design a user interface that was both simple and intuitive, ensuring an enjoyable gaming experience even for first-time players. To achieve this, I focused on a minimalistic layout that would facilitate easy navigation and clear display of all necessary game elements.

The wireframe outlined a straightforward design. Central to the layout was the game grid, the main area where the snake's movement and gameplay would occur. 

Above the grid, I allocated space for the score and high-score displays. At the top, I incorporated a simple ‘Start' button.



![Wx7Pic9w2KiwsRKyWUI0bzTE2qWPIopDyoNrKxPt4DT2LeEj5LZh-aCmVxEOVAfHGbfv342TkWZzqpnMzGUwy2xcN7Y2UdQYRffd0OaaX5H76BL9vY3-FRqZQQ621-T-y_nJZY7W6GxjZTaUHmlvMIU](https://github.com/aszab1/Snake/assets/145586216/d6af5184-bb91-4ad6-9698-257a8f17b3ce)




**Build/Code Process**

First I added the grid in JavaScript by creating div elements in a loop:



<img width="650" alt="hnlMxcXu_N8MpehIj_KrY7Xnw75wGW1FCBWae69m252B32ZftHypGvHhBbfH7_mtrim4LpjqM57K7ZOAJ8xtDyUI2bdejRFIeFrya6WzkH17TCVaXolfyDP0ZcGCtluS_N9FVh08H0NdBNYjpCV__Wc" src="https://github.com/aszab1/Snake/assets/145586216/2bcebb06-42c4-412a-9bf2-5d96ca7d0f58">



The above also shows the initial snake and food position added to the grid. 

The addSnake function:



* adds the snake class to the div at the given head position
* loops through the snake body positions and adds the appropriate colour classes 




<img width="523" alt="ifg2JQ5kwjOSYRVquOvQpJgCtkhInbI0sSa8BavyPoA7KazPCpOOlH1rDMuLereMWTWyqnyUeouQqmTTXLNKyy8Nviehq3nc-IpRi-IutgEsy0lpGLA9bAR5m0maMQuFB5QPtrFOR_BNkpG1z3ndTI4" src="https://github.com/aszab1/Snake/assets/145586216/630126f4-eae8-4b39-a276-90f7defb424c">




The changeDirection function updates direction based on arrow key presses: 

The initial direction of the snake is ‘1’, meaning the snake will start moving to the right.



<img width="552" alt="6O90BYtlXwjDs_Po1OAaUR42MU-dkauTNL1J_xgAXlhmOhvnSt7aE46EUGKqK5INNlQIbX53h2G1U81s6AgVZR8usJumifJmwpJ_8zOkUVGjCruYz8hdcdZyAp4bxt-EN9l22jfd1jFAH-vE3fp5Zdk" src="https://github.com/aszab1/Snake/assets/145586216/6b485f2f-efec-48d8-b111-061e26f5fdc6">




The moveSnake function:



* The snake’s movement is handled by removing the tail cells and adding a new head cell based on direction.
* Collisions are detected by checking the new head position against the grid boundaries and the snake’s body: 



<img width="777" alt="XsRdI60Ye7rFMq-WKYT2V2hqW8DydEZzTxvk_0YYAOa-lPBodbjKjgyPF6ma5hR_Sbg_iW6JNdiNobxTcmOOxAZQ0jQDAZn_vwE2gOGNfGv_e422URX1FhKC0ut6bm-V6-izAW6yFK96ILgPlQGphbA" src="https://github.com/aszab1/Snake/assets/145586216/9f9293d4-9014-4c6b-a5be-d77d42407c83">


 



* Increases score if food eaten 
* Speeds up game after food eaten 



<img width="520" alt="wSgZoicwdeuJk8qdJxbirHNfBV5d3kINPuBRrfzg5YFH2kHX8tByxxAhCZQjoNM9KljVvjU06n_fRj9TWo-0we1O06RDnGtpA4SbE9dkkb5-MzhfdZs0pof2t377boxNjprnIOripB20MAU3P75Qv-c" src="https://github.com/aszab1/Snake/assets/145586216/cd3fd4f9-9998-4c03-91e1-7a76a4ad4ae8">




I also  created: 



* getRandomFoodPosition to generate a random position for the food, which is the frog image added in CSS
* An endGame function which stops the game loop and resets game state
* A highScore function which is saved in local storage
* toggleSound which plays / pauses the background sound. I have only added this function the last day.



<img width="432" alt="PRuVNAMqtLyyATArJAv9GZsnommFJ6mW163DCtNmPy9lF0rcuBRZOXZCQSDDlfc1Wuxs06a9r0wIJCsOO-wS4i2NjvHUF_W_--Ih5HlIP7QiWTOwQakGmISiUs6vdFgNWYSPWKAR5Nam4P1qMraGbRg" src="https://github.com/aszab1/Snake/assets/145586216/9709f729-615d-404c-a511-dcadd7736962">



**Challenges**

Being my first ever coding project, I did find developing this entire snake game from scratch to be quite challenging at times. 

When I initially got the snake moving around the screen, an issue arose with the snake’s appearance. The snake’s body was incorrectly represented by a series of snake heads. To resolve this, I had to modify the addSnake() function to correctly append new body segments with the appropriate graphics.

Additionally, I am still working on fine-tuning the colour scheme to better match my original vision. 

Implementing the high score functionality also posed some difficulties earlier on. Originally, I had incorrectly placed the code to update the high score within the moveSnake() function. However, I later realised the proper place for this was instead inside the endGame() function, which is only triggered when the game concludes. 

**Wins**



* Developed core game logic from scratch in JavaScript to move snake, detect collisions, grow snake by eating food, and end game when snake hits wall or itself 
* Created and appended new DOM elements dynamically to display growing snake body and food elements 
* Practised effective use of iteration, conditional statements, DOM manipulation, events, and other core programming concepts

**Key Learnings/Takeaways**



* Learned how to create a grid in JavaScript 
* Learned to implement collision detection 
* Managing the growth of the snake
* Learned how to use play() and pause() functions to control audio

**Bugs**

As mentioned before, the colour of the body is not how I planned it to be. The colours are meant to alternate, and they do for a split second then change. 

**Future Improvements**



* Fix the colours of the snake’s body
* Add responsive design, so it’s mobile friendly 
* Add multiplayer mode
* Add difficulty levels
