
// Settings
let canvas

let vidaNave = 100;

// Player 
var player;

let notebookOpened = false;

let notebookBox;

// Fases
let menuBackground;
let game;
let ajuda;

let notebookScreen;

var menuScene = true;
var gameScene = false;
var ajudaScene = false;
var instructionScene = false;
var creditScene = false;

// Images
let spaceShip;
let ajudaBackground;
let instructionsBackground;
let creditsBackground;

// Sounds
let musicTheme;

// - FUNÇÕES - //

function setup() {
  // Settings
  canvas = createCanvas(1320, 840);


  // Backgrounds
  // Scenes
  game = new gameFase;
  ajuda = new ajudaFase;

  // Player
  player = new playerUser;
}

function preload() {
  // Images
  menuBackground = loadImage('https://i.imgur.com/BmwsSSC.png');
  spaceShip = loadImage('https://i.imgur.com/5PT7Iz7.png');

  instructionsBackground = loadImage('https://i.imgur.com/vVc0fIy.png');
  creditsBackground = loadImage('https://i.imgur.com/cOIv9br.png');

  ajudaBackground = loadImage('https://i.imgur.com/pivK0QW.png');

  
  notebookScreen = loadImage('https://i.imgur.com/aSBElji.png');
}

function draw() {
  if (gameScene == true) {
    background(spaceShip);
    
    player.playerMovement();
    player.playerInteraction();
    
    if(notebookOpened == true){
      background(spaceShip);
      
      player.playerMovement();
      player.playerInteraction();
      
      background(notebookScreen, 0, 0, 1340, 840);
    }
  }
  mainMenu = menuBackground.get(menuBackground.width / 2, menuBackground.height / 2);
  menuScene1();
}

//  - SCENES - //

// Menu
var menuScene1 = function() {
  if (menuScene == true) {
    menuActive = true;
    background(menuBackground);

    //     BOTÃO INSTRUÇÕES
    instructionButton = createButton('');
    instructionButton.style('background-color', 'rgba(0,0,0,0)');
    instructionButton.style('border', 'rgba(0,0,0,0)');
    instructionButton.style('outline', 'none');
    instructionButton.style('cursor', 'pointer');
    instructionButton.size(250, 70);
    instructionButton.position(460, 620);
    instructionButton.mousePressed(instructions);

    //     BOTÃO CRÉDITOS
    creditsButton = createButton('');
    creditsButton.style('background-color', 'rgba(0,0,0,0)');
    creditsButton.style('outline', 'none');
    creditsButton.style('cursor', 'pointer');
    creditsButton.style('border', 'rgba(0,0,0,0)');
    creditsButton.size(160, 60);
    creditsButton.position(720, 620);
    creditsButton.mousePressed(credits);

    return;
  } else {
    if (menuScene == false) {
      menuActive = false;
      return;
    }
  }
}

// Instruções
var instructions = function() {

    image(instructionsBackground, 0, 0, 1340, 840);

    instructionScene = true;
    menuScene = false;
  creditsButton.mousePressed();

}

// Crédits
var credits = function() {
  
  image(creditsBackground, 0, 0, 1340, 840);

  creditScene = true;
  menuScene = false;

  instructionButton.mousePressed();
}

// Ajuda
var gameFaseScene1 = function() {
  if (ajudaScene == true) {
    image(ajudaBackground, 0, 0, 1340, 840);

    menuScene = false;
    return;
  } else {
    if (ajudaScene == false) {
      menuScene = true;
      return;
    }
  }

}

// Fase
var gameFaseScene2 = function() {
  if (gameScene == true) {
    background(spaceShip, 0, 0, windowWidth, windowHeight);
    background(0);
    
    menuScene = false;
    instructionButton.mousePressed();
    creditsButton.mousePressed();
    return;
  } else {
    if (gameScene == false) {
      menuScene = true;
      return;
    }
  }

}


// INTERAÇÕES

var notebookInteract = function() {
  if(notebookOpened == true){
    background(notebookScreen);
  } else if(notebookOpened == false){
    background(0);
  }
}

//QUESTÕES 

var responderQuestoes = function() {
  let inp = createInput('');
  inp.input(myInputEvent);
}

// - EVENTS - //

function keyPressed() {
  //   JOGAR
  if (menuScene == true && keyCode == "74") {
    gameScene = true;
    print('games');
  }

  //   AJUDA
  if (menuScene == true && keyCode == "65") {
    ajudaScene = true;
    print('ajuda');
  }

  //   VOLTAR DO AJUDA PARA MENU
  if (ajudaScene == true && keyCode == '27') {
    ajudaScene = false;
    menuScene = true;
  }

  //   VOLTAR DO JOGO PARA O MENU
  if (gameScene == true && keyCode == '8') {
    gameScene = false;
    menuScene = true;
  }

  //   VOLTAR DO Instruction PARA O MENU
  if (instructionScene == true && keyCode == '27') {
    instructionScene = false;
    menuScene = true;
  }
  
  //   VOLTAR DO Credits PARA O MENU
  if (creditScene == true && keyCode == '27') {
    creditScene = false;
    menuScene = true;
  }

  // MOVIMENTAÇÃO DO JOGADOR
  if (gameScene == true) {
    if (keyCode == "87" || keyCode == "38") {
      player.moveUp = true;
    }
    if (keyCode == "65" || keyCode == "37") {
      player.moveLeft = true;
    }
    if (keyCode == "68" || keyCode == "39") {
      player.moveRight = true;
    }
    if (keyCode == "83" || keyCode == "40") {
      player.moveBottom = true;
    }
  }
    if(notebookOpened == true){
      player.moveBottom = false;
      player.moveRight = false;
      player.moveLeft = false;
      player.moveUp = false;
    }

  
  
  //  INTERAÇÃO DO JOGADOR
  if(notebookInteraction == true){
    if(keyCode == "69"){
      notebookOpened = true;
      notebookInteract();
      console.log('abriu notebook')
    } 
    if(notebookOpened == true && keyCode == "27"){
      notebookOpened = false;
      notebookInteract();
      console.log('fechou notebook');
    }
  } else {
    notebookOpened = false;
    console.log('notebook fechado');
  }

}

function keyReleased() {
  if (menuActive == true && keyCode == "74") {
    gameFaseScene2();
  }
  if (menuActive == true && keyCode == "65") {
    gameFaseScene1();
  }

  if (gameScene == true) {
    if (keyCode == "87" || keyCode == "38") {
      player.moveUp = false;
    }
    if (keyCode == "65" || keyCode == "37") {
      player.moveLeft = false;
    }
    if (keyCode == "68" || keyCode == "39") {
      player.moveRight = false;
    }
    if (keyCode == "83" || keyCode == "40") {
      player.moveBottom = false;
    }
  }
}