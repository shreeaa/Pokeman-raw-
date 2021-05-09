class Game {
  constructor(){

  }

   getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      //pokemon of player1
      var p1ref = await database.ref('players/player1/pokemon').once("value");
      if(p1ref.exists()){
        selection = p1ref.val();
        console.log(selection)
        Player.getPlayerInfo();
      }

      //pokemon of player2
    var p2ref = await database.ref('players/player2/pokemon').once("value");
    if(p2ref.exists()){
      selection2 = p2ref.val();
      console.log(selection2)
      Player.getPlayerInfo();
    }


      form = new Form()
      form.display();
     }

     choose_Pokemon();

    // creating sprites and adding images 
    car1 = createSprite(displayWidth/2,200);
    car1.addImage("player1",selection1);
    
    if(selection===snorlax){
      car1.scale = 0.03
    }else{
      car1.scale = 0.2
    }
    car2 = createSprite(displayWidth/2,displayHeight - 200);
    car2.addImage("player2",selection3);
    
    if(selection2===snorlax){
      car2.scale = 0.03
    }else{
      car2.scale = 0.2
    }

    cars = [car1, car2];

  
  }

  play(){
    form.hide();

    // here we are using player class to cal the function beacuse its a static function
    Player.getPlayerInfo();
    // its a non-static function it is called through individual players
    player.getCarsEnd();

    if(allPlayers !== undefined){
     
      background(backgroundImage);

      ash = createSprite(displayWidth/2, 100);
      ash.scale = 0.1;
      ash.addImage("ash1",ashi);
      gary = createSprite(displayWidth/2,700);
      gary.scale = 0.1;
      gary.addImage("gary1",garyi);
    
      // Adding the track image
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = displayWidth/2;
      var y = -200;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

       y = y +  400
        cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          cars[index - 1].shapeColor = "red";
       
        }
       
      }

    }


    damage_count();

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }
    // Making game to end
    if(player.distance > 4220){
         gameState = 2
         player.rank += 1;
         Player.updateCarsEnd(player.rank)
         textSize(35);
         fill("white");
         text("Rank : " + player.rank , displayWidth/2 - 50 , displayHeight/2 );
    }
    drawSprites();
    text("Life Left : " + allPlayers.player2.life, 50 , 100);
    text("Life Left : " + allPlayers.player1.life, 50 , 700);
    textSize(35);
    fill("white");
    text("Rank : " + player.rank , displayWidth/2 - 50 , displayHeight/2 );
  }
  end(){
    console.log("Game Ended");
    console.log(player.rank);
  }
}
// static functions are linked to the entire class and not individual objects 