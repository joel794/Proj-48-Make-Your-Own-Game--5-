const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var player;
var form;
var allPlayers=[];

var car1, car2,car3,car4,car5,car6,car7, cars;
var car1I,car2I,car3I,car4I,car5I,car6I,car7I;
var track,trackI;

var gameState = 0;
var playerCount;
var distance = 0;

function preload() {

   trackI=loadImage("Images/Track.jpg");

   car1I=loadImage("Images/Car 1.png");
   car2I=loadImage("Images/Car 2.png");
   car3I=loadImage("Images/Car 3.png");
   car4I=loadImage("Images/Car 4.png");
   car5I=loadImage("Images/Car 5.png");
   car6I=loadImage("Images/Car 6.png");
   car7I=loadImage("Images/Car 7.png");
}

function setup() {
  createCanvas(displayWidth-20,displayHeight*20);

  database=firebase.database();

  game=new Game();
  game.getState();
  game.start();


}

function draw() {
 
  if (playerCount===7) {
    game.update(1)
  }

  if (gameState===1) {
    clear()
    game.play()
  }

  //if (gameState===2) {
  //game.end();
  //}
  

}