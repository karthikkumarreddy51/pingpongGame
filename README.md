
# PIN Pong Game with Obstacles

## Setup Instructions
1. **Clone the repository to your local machine:**
   
   git clone https://github.com/karthikkumarreddy51/pingpongGame.git

Navigate to the backend directory and install the required Python dependencies:


cd backend
pip install -r requirements.txt
Frontend Setup:

Ensure you have no issues loading the index.html file in any modern browser.
Run the Flask server (backend):


python app.py


##    Play the game:

Open your browser and navigate to http://localhost:5000/ to start playing the game.
How to Run the Game
Control the paddles:

Player 1 (left paddle) is controlled by the W (up) and S (down) keys.
Player 2 (right paddle) is controlled by the Up Arrow (up) and Down Arrow (down) keys.


## Game Mechanics:

The ball will bounce off the top and bottom walls and the paddles.
If the ball crosses the left or right boundary, a point is scored for the respective player.
Two square obstacles are placed randomly within the playing field and will cause the ball to bounce off them when hit.
Objective:

Try to keep the ball within the field and prevent the opponent from scoring by blocking the ball with the paddles.
  
##  Technical Choices
Backend (Flask & Socket.IO): I used Flask to create the server for handling the game logic and Socket.IO for real-time communication between the backend and frontend.
Frontend (HTML5 Canvas): The game utilizes the HTML5 Canvas element to draw the game objects such as the ball, paddles, and obstacles. The canvas is updated in real-time using JavaScript.
Socket.IO: This library allows us to update the game state in real time for both players.
JavaScript: JavaScript is used for handling user input (keyboard controls) and updating the game state in the browser.
##  Known Limitations
Single Browser, Local Multiplayer: The game is designed for two players using the same machine and browser. It doesn't support remote multiplayer or playing on different machines.
No Score Reset: The game doesn't automatically reset the score or start a new round when a player reaches a specific score.
No Game Over Screen: A "game over" screen or feature hasn't been implemented due to time constraints. The game will continue indefinitely unless manually stopped.
No Advanced AI: The game lacks an AI opponent. Both players must control the paddles themselves.
