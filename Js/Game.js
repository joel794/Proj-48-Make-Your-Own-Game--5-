class Game {
    constructor(){

    }
    
    getState(){
        var gameStateRef= database.ref('gameState');
        gameStateRef.on("value",(data)=>{
            gameState=data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState:state
        })
    }

    async start(){
        if (gameState===0){
            player=new Player();
             
             var playerCountRef= await database.ref('playerCount').once("value");

             if (playerCountRef.exists()) {
                 playerCount=playerCountRef.val();
                 player.getCount();
             }

             form= new Form();
             form.display();
        }   

        car1=createSprite(250,21450,50,50);
        car1.addImage(car1I);
        car1.scale=0.2;
      
        car2=createSprite(450,21450,50,50);
        car2.addImage(car2I);
        car2.scale=1;
      
        car3=createSprite(650,21450,50,50);
        car3.addImage(car3I);
        car3.scale=0.7;
      
        car4=createSprite(850,21450,50,50);
        car4.addImage(car4I);
        car4.scale=0.6;
        
        car5=createSprite(1050,21450,50,50);
        car5.addImage(car5I);
        car5.scale=1.2;
      
        car6=createSprite(1250,21450,50,50);
        car6.addImage(car6I);
        car6.scale=0.65;
      
        car7=createSprite(1450,21450,50,50);
        car7.addImage(car7I);
        car7.scale=0.75;
     
        cars = [car1, car2, car3, car4, car5, car6, car7];
    }

    play(){
            form.hide();
            Player.getPlayerInfo();
            player.getCarsAtEnd();
            
            if (allPlayers!=undefined) {
                background("Brown")
                image(trackI,0,-displayHeight*4,displayWidth,displayHeight*5);

                var index = 0;
                var x= 150;
                var y;

                for(var plr in allPlayers){
                index+=1;
                x+=200;
                y=displayHeight-allPlayers[plr].distance;
                cars[index-1].x=x;
                cars[index-1].y=y;

                if (index===player.index) {
                    fill("red");
                    ellipse(x,y,50,50);
                    cars[index-1].shapeColor="red";

                    camera.position.x=displayWidth/2;
                    camera.position.y=cars[index-1].y
                }
                } 
            }

            if (keyIsDown(UP_ARROW ) && player.index!==null ) {
                player.distance+=10;
                player.update();
                
            }
            drawSprites();
    }



}