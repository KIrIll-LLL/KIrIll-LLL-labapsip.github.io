class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.player = new Player(this.canvas.width / 2, this.canvas.height - 50);
        this.obstacles = [];
        this.score = 0;
        this.gameOver = false;
    }

    start() {
        this.spawnObstacle();
        this.update();
    }

    spawnObstacle() {
        if (!this.gameOver) {
            this.obstacles.push(new Obstacle(Math.random() * this.canvas.width, 0));
            setTimeout(() => this.spawnObstacle(), 1000);
        }
    }

    update() {
        if (!this.gameOver) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.player.draw(this.ctx);
            this.obstacles.forEach((obstacle, index) => {
                obstacle.update();
                obstacle.draw(this.ctx);
                if (obstacle.y > this.canvas.height) {
                    this.obstacles.splice(index, 1);
                    this.score++;
                }
                if (this.player.collidesWith(obstacle)) {
                    this.gameOver = true;
                    alert('Game Over! Your score: ' + this.score);
                }
            });
            requestAnimationFrame(() => this.update());
        }
    }
}

class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.speed = 10;
        window.addEventListener('keydown', (e) => this.move(e));
    }

    draw(ctx) {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    move(event) {
        switch (event.key) {
            case 'ArrowLeft':
                this.x -= this.speed;
                break;
            case 'ArrowRight':
                this.x += this.speed;
                break;
        }
    }

    collidesWith(obstacle) {
        return !(this.x > obstacle.x + obstacle.width ||
                 this.x + this.width < obstacle.x ||
                 this.y > obstacle.y + obstacle.height ||
                 this.y + this.height < obstacle.y);
    }
}

class Obstacle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.speed = 5;
    }

    update() {
        this.y += this.speed;
    }

    draw(ctx) {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

window.onload = () => {
    const startButton = document.getElementById('startButton');
    const gameCanvas = document.getElementById('gameCanvas');
    const game = new Game('gameCanvas');

    startButton.addEventListener('click', () => {
        startButton.style.display = 'none';
        gameCanvas.style.display = 'block';
        game.start();
    });
};
