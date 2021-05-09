class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = 0;
    this.life=100
    //this.life1 = 100;
    //this.life2 = 100;
    this.pokemon = "optional";
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance ,
      pokemon : this.pokemon,
      life : this.life  
    });
    
  }
  // updateLife1(){
  //   //if(this.index ===1){
  //     var playerIndex1 = "players/player" + 1;
  //     database.ref(playerIndex1).set({
  //       life1 : this.life1
  //     })
  //  // }
  
  // }
  //  updateLife2(){
  //     // if(this.index ===2){
  //       var playerIndex2 = "players/player" + 2;
  //       database.ref(playerIndex2).set({
  //         life2 : this.life2
  //       })
  //     // }
  //  }

  //  getlife1(){
  //   var playerIndex1 = "players/player" + 1;
  //    database.ref(playerIndex1).on("value",(data)=>{
  //        this.life1 = data.val();
  //    } )
  //  }

  //  getlife2(){
  //   var playerIndex2 = "players/player" + 2;
  //   database.ref(playerIndex2).on("value",(data)=>{
  //       this.life2 = data.val();
  //   } )
  // }

  static getPlayerInfo(){
    
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  getCarsEnd(){
    database.ref('carsEnd').on("value" , (data)=>{
      this.rank = data.val();
    })
  }

  static updateCarsEnd(rank){
     database.ref('/').update({carsEnd : rank})    
  }  
}
