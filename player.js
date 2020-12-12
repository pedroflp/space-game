var playerWalk = [];
var contador = 0;
var tempo = 0;

var notebookInteraction;

function playerUser() {

  playerWalk[0] = loadImage('https://i.imgur.com/4T4K8RQ.png');
  playerWalk[1] = loadImage('https://i.imgur.com/d5BMjyi.png');
  playerWalk[2] = loadImage('https://i.imgur.com/owmd2BA.png');
  playerWalk[3] = loadImage('https://i.imgur.com/iD3iwvI.png');
  playerWalk[4] = loadImage('https://i.imgur.com/vBbTOiV.png');
  playerWalk[5] = loadImage('https://i.imgur.com/GYpV1oR.png');
  playerWalk[6] = loadImage('https://i.imgur.com/NQ3BAgr.png');
  playerWalk[7] = loadImage('https://i.imgur.com/p31j3Ym.png');
  playerWalk[8] = loadImage('https://i.imgur.com/WJCaF3s.png');
  playerWalk[9] = loadImage('https://i.imgur.com/TdtZshH.png');
  playerWalk[10] = loadImage('https://i.imgur.com/GykzC1f.png');
  playerWalk[11] = loadImage('https://i.imgur.com/EanZeBF.png');
  playerWalk[12] = loadImage('https://i.imgur.com/WzGoqgS.png');

  this.x = windowWidth / 3;
  this.y = windowHeight / 2;
  this.pWidth = 40;
  this.pHeight = 70;

  this.moveUp = false;
  this.moveLeft = false;
  this.moveRight = false;
  this.moveBottom = false;

  this.moveSpeed = 2;

  this.playerMovement = function() {

    if (this.moveUp == true) {
      this.y -= this.moveSpeed;
      if(tempo > 3){
        contador++;
        tempo = 0;
      }
      tempo++;

    }
    if (this.moveLeft == true) {
      this.x -= this.moveSpeed;
      if(tempo > 3){
        contador++;
        tempo = 0;
      }
      tempo++;
    }
    if (this.moveRight == true) {
      this.x += this.moveSpeed;
      if(tempo > 3){
        contador++;
        tempo = 0;
      }
      tempo++;
    }
    if (this.moveBottom == true) {
      this.y += this.moveSpeed;
      if(tempo > 3){
        contador++;
        tempo = 0;
      }
      tempo++;
    }
    
    
    // COLISÃO COM NAVE
    
    if (this.x < 415) {
      this.x += this.moveSpeed;
    }
    
    if (this.x > 865) {
      this.x -= this.moveSpeed;
      
    }
    
    if (this.y < 280){
      this.y += this.moveSpeed;
    }
    
    if (this.y > 540) {
      this.y -= this.moveSpeed;
    }
    
    if(this.x < 590 && this.y < 340){
      if(this.x > 550 && this.y < 340) {
        this.x += this.moveSpeed;

      } else {
        this.y += this.moveSpeed;
      }
    }
    

    
    //  WALK ANIMATION   

    if (this.moveUp == true || this.moveRight == true || this.moveLeft == true || this.moveBottom == true) {
      image(playerWalk[contador % 12], this.x, this.y, 40, 70);
    } else {
        image(playerWalk[0], this.x, this.y, 40, 70);
    }
    

  }
  
//   VERIFICAÇÃO SE ESTÁ PERTO DO NOTEBOOK
  this.playerInteraction = function() {
    if(this.x > 500 && this.x < 595 && this.y > 290 && this.y < 360){
      notebookInteraction = true;
    } else {
      notebookInteraction = false;
    }
  }
}