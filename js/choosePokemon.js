function choose_Pokemon(){
    //pokemon of player1
    if( selection ==="charlizard"){
        selection1 = loadImage(charlizard1);
        
        flamethrower = createSprite(width/2 + 200 , 100 , 100 , 50);
        flamethrower.addImage("flamethrower",flamethrowerI);
        firespin = createSprite(width/2 + 400 , 100 , 100 , 50);
        firespin.addImage("firespin",firespinI);
      }
      if(selection ==="pikachu"){
        selection1 = loadImage(pikachu1);
  
        thunderbolt = createSprite(width/2 + 200 , 100 , 100 , 50);
        thunderbolt.addImage("thunderbolt",thunderboltI);
        quickattack = createSprite(width/2 + 400 , 100 , 100 , 50);
        quickattack.addImage("quickattack",quickattackI);
  
      }
      if(selection ==="blastois"){
        selection1 = loadImage(blastois1);
        
        watergun = createSprite(width/2 + 200 , 100 , 100 , 50);
        watergun.addImage("watergun",watergunI);
        hydropump = createSprite(width/2 + 400 , 100 , 100 , 50);
        hydropump.addImage("hydropump",hydropumpI);
      }
      if(selection ==="snorlax"){
        selection1 = loadImage(snorlax1);
        
        hyperbeam = createSprite(width/2 + 200 , 100 , 100 , 50);
        hyperbeam.addImage("hyperbeam",hyperbeamI);
        surf = createSprite(width/2 + 400 , 100 , 100 , 50);
        surf.addImage("surf",surfI);
      }
      if(selection ==="venusaur"){
        selection1 = loadImage(venusaur1);
        
        vinewhip = createSprite(width/2 + 200 , 100 , 100 , 50);
        vinewhip.addImage("vinewhip",vinewhipI);
        razorleaf = createSprite(width/2 + 400 , 100 , 100 , 50);
        razorleaf.addImage("razorleaf",razorleafI);
      }
      
      //pokemon of player2
      if( selection2 ==="charlizard"){
        selection3 = loadImage(charlizard1);
        
        flamethrower = createSprite(width/2 + 200 , 700 , 100 , 50);
        flamethrower.addImage("flamethrower",flamethrowerI);
        firespin = createSprite(width/2 + 400 , 700 , 100 , 50);
        firespin.addImage("firespin",firespinI);
        
      }
      if(selection2 ==="pikachu"){
        selection3 = loadImage(pikachu1);
        
        thunderbolt = createSprite(width/2 + 200 , 700 , 100 , 50);
        thunderbolt.addImage("thunderbolt",thunderboltI);
        quickattack = createSprite(width/2 + 400 , 700 , 100 , 50);
        quickattack.addImage("quickattack",quickattackI);
      }
      if(selection2 ==="blastois"){
        selection3 = loadImage(blastois1);
  
        watergun = createSprite(width/2 + 200 , 700 , 100 , 50);
        watergun.addImage("watergun",watergunI);
        hydropump = createSprite(width/2 + 400 , 700 , 100 , 50);
        hydropump.addImage("hydropump",hydropumpI);
        
      }
      if(selection2 ==="snorlax"){
        selection3 = loadImage(snorlax1);
        
        hyperbeam = createSprite(width/2 + 200 , 700 , 100 , 50);
        hyperbeam.addImage("hyperbeam",hyperbeamI);
        surf = createSprite(width/2 + 400 , 700 , 100 , 50);
        surf.addImage("surf",surfI);
  
      }
      if(selection2 ==="venusaur"){
        selection3 = loadImage(venusaur1);
  
        vinewhip = createSprite(width/2 + 200 , 700 , 100 , 50);
        vinewhip.addImage("vinewhip",vinewhipI);
        razorleaf  = createSprite(width/2 + 400 , 700 , 100 , 50);
        razorleaf.addImage("razorleaf",razorleafI);
  
      }
    }