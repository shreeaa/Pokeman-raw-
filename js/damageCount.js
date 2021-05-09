function damage_count(){

    
    if (player.index === 1) {
         if(selection ==="charlizard"){
            if(mousePressedOver(firespin)
            ||mousePressedOver(flamethrower)){
            life1-=Math.round(random(20,70));
            console.log(life1)
            //player.update();
            player.life= life1   ;
                database.ref('players/player1').update({
                    life:player.life
                })
            }
        }
    }
  
    else if(player.index === 2){
        if(selection2 ==="pikachu"){
            if(mousePressedOver(thunderbolt)
            ||mousePressedOver(quickattack)){
            life2-=Math.round(random(20,70));
            console.log(life2)
            player.life= life2   ;
                database.ref('players/player2').update({
                    life:player.life
                })
            }    
        }        
    }
}