class Game{
    constructor(){}

        //Read the gameState from database 
       getState(){
            var gameStateRef = database.ref('gameState');
            gameStateRef.on("value",function(data){
              //  stores the value into the variable gameState
                gameState = data.val();
            })
        }

        //update the gameState into the gameState index in the database
        update(state){
            database.ref('/').update(
                {
                    gameState : state
                }
                );
        }
    
        //Displays the form during the gameState=0 
        start(){
            if(gameState == 0){
               player = new Player();
               player.getCount();
                form = new Form();
               form.display();
            }
       }
}
