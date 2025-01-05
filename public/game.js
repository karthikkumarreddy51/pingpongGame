const canvas = document.getElementById('pong');
const ctx = canvas.getContext('2d');

// Game Variables
let ballRadius = 10;
let x = canvas.width / 2;
let y = canvas.height / 2;
let dx = 4;
let dy = 4;

const paddleHeight = 75;
const paddleWidth = 10;
let paddle1Y = (canvas.height - paddleHeight) / 2;
let paddle2Y = (canvas.height - paddleHeight) / 2;
let player1Score = 0;
let player2Score = 0;

const upArrow = 38;
const downArrow = 40;
const wKey = 87;
const sKey = 83;

// Obstacle Variables
let obstacles = [
    { x: Math.random() * (canvas.width - 30), y: Math.random() * (canvas.height - 30), width: 30, height: 30 },
    { x: Math.random() * (canvas.width - 30), y: Math.random() * (canvas.height - 30), width: 30, height: 30 }
];

// Control the paddles
document.addEventListener('keydown', (event) => {
    // Player 1 controls (W and S keys)
    if (event.keyCode === wKey && paddle1Y > 0) {
        paddle1Y -= 20;
    }
    if (event.keyCode === sKey && paddle1Y < canvas.height - paddleHeight) {
        paddle1Y += 20;
    }
    
    // Player 2 controls (Up and Down Arrow)
    if (event.keyCode === upArrow && paddle2Y > 0) {
        paddle2Y -= 20;
    }
    if (event.keyCode === downArrow && paddle2Y < canvas.height - paddleHeight) {
        paddle2Y += 20;
    }
});

// Ball movement
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.closePath();
}

function drawPaddles() {
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, paddle1Y, paddleWidth, paddleHeight);  // Left paddle
    ctx.fillRect(canvas.width - paddleWidth, paddle2Y, paddleWidth, paddleHeight);  // Right paddle
}

function drawObstacles() {
    ctx.fillStyle = '#f00';
    obstacles.forEach((obstacle) => {
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    });
}

function drawScore() {
    ctx.font = '16px Arial';
    ctx.fillStyle = '#fff';
    ctx.fillText('Player 1: ' + player1Score, 20, 20);
    ctx.fillText('Player 2: ' + player2Score, canvas.width - 120, 20);
}

function ballMove() {
    x += dx;
    y += dy;

    // Ball collision with top and bottom walls
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }

    // Ball collision with paddles
    if (x + dx < paddleWidth && y > paddle1Y && y < paddle1Y + paddleHeight) {
        dx = -dx;
    }

    if (x + dx > canvas.width - paddleWidth && y > paddle2Y && y < paddle2Y + paddleHeight) {
        dx = -dx;
    }

    // Ball collision with obstacles
    obstacles.forEach((obstacle) => {
        if (x + dx > obstacle.x && x + dx < obstacle.x + obstacle.width && y + dy > obstacle.y && y + dy < obstacle.y + obstacle.height) {
            dx = -dx;
            dy = -dy;
        }
    });

    // Scoring System: Ball goes out of bounds
    if (x + dx > canvas.width) {
        player1Score++;
        resetBall();
    } else if (x + dx < 0) {
        player2Score++;
        resetBall();
    }
}

function resetBall() {
    x = canvas.width / 2;
    y = canvas.height / 2;
    dx = -dx;
    dy = 4;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddles();
    drawObstacles();
    drawScore();
    ballMove();
}

setInterval(draw, 1000 / 60); // 60 FPS
