var  database;
var playerCount , form , player , game , gameState = 0;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(400,400);

  game = new Game();
  game.getState();
  game.start();
  


}

function draw(){

  
  
}

