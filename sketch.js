var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, powerCoinImage2, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles;
var cars = [];
var blastImage;
var energyImg
var powerCoins2

function preload() {
  backgroundImage = loadImage("Assets/Background for Start.png");
  car1_img = loadImage("Assets/John.png");
  car2_img = loadImage("Assets/Aurthur.png");
  track = loadImage("Assets/Background for Start.png");
  fuelImage = loadImage("Assets/Lightning Bolt.png");
  powerCoinImage = loadImage("Assets/Money.png");
  powerCoinImage2 = loadImage("Assets/Peaky Hat.png");
  obstacle1Image = loadImage("Assets/Bomb.png");
  obstacle2Image = loadImage("Assets/Bomb.png");
  lifeImage = loadImage("Assets/Heart (Life).png");
  blastImage = loadImage("Assets/Dead.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}