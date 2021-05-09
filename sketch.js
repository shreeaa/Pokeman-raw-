var chalizard;
var venusaur;
var pikachu;
var blastois;
var snorlax;

//selection of pokemon per player
var selection,selection1,selection2,selection3;

//attacks and images
var flamethrower ,flamethrowerI, firespin, firespinI;
var hyperbeame,hyperbeameI , surf , surfI;
var thunderbolt ,thunderboltI, quickattack, quickattackI;
var razorleaf,razorleafI , vinewhip , vinewhipI;
var watergun, watergunI, hydropump, hydropumpI;

var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var life1 = 1000;
var life2 = 1000;
var life = 1000;
var r=0
var path1;
var path2;

var power;
var power2;

//class objects
var form, player, game;
var cars, car1, car2;

//player
var ash,ashi;
var gary,garyi;

//loading path of pokemon images
charlizard1 = ("./Images/Charlizard.png");
pikachu1 = ("./Images/Pikachu.png");
snorlax1 = ("./Images/snorlax.png");
venusaur1 = ("./Images/Venusaur.png");
blastois1 = ("./Images/Blastoise.png");
   


function preload(){
  backgroundImage = loadImage("./Images/Pokemon Stadium.jpg");
  ashi = loadImage("./Images/Ash.png");
  garyi = loadImage("./Images/Gary.png");

  //images for attacks
   watergunI = loadImage("./Images/watergunI.png");
   vinewhipI = loadImage("./Images/vinewhipI.png");
   razorleafI = loadImage("Images/razorleafI.png");
   thunderboltI = loadImage("Images/thunderboltI2.png");
   surfI = loadImage("./Images/surfI.png");
   hydropumpI = loadImage("./Images/hydropumpI.png");
   quickattackI = loadImage("./Images/quickattackI.png");  
   firespinI = loadImage("./Images/firespinI.png");
   flamethrowerI = loadImage("./Images/flamethrowerI.png");
   hyperbeamI = loadImage("./Images/hyperbeamI.png"); 
}
function setup(){
    createCanvas(displayWidth,displayHeight);
 
    // options = createSprite(displayWidth/2,displayHeight/2,200,600);
     //options.shapeColor("White");

     canvas = createCanvas(displayWidth - 20, displayHeight-30);
     database = firebase.database();
     game = new Game();
     game.getState();
     game.start();
      
     

}
function draw(){

 background(backgroundImage);

 if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  // changing gamestate to end
  if(gameState === 2){
     game.end(); 
     this.result.html("Hello " + player.name + "!!! Your rank is "+ player.rank);
     this.result.position(displayWidth/2 - 70, displayHeight/4); 
  }
   
    
}