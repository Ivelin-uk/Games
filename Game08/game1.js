'use strict'
const game = new Phaser.Game(500, 500, Phaser.AUTO, 'game-canvas', { preload, create, update })
let m1;
let keyUp;
let keyDown;
let keyLeft;
let keyRight;
let move = 5;

function preload() {
    game.load.image('m1','pictures/m1.png')
    game.stage.backgroundColor = "#4488AA";
}

function create() {
    m1 = game.add.sprite(50,50,'m1')
    console.log(m1);
    //console.log(m1.x);
    //console.log(m1.y);
    //m1.scale.x = 2;s
    //m1.scale.y = 2;
    //m1.scale.setTo(2,2);
    //m1.scale.setTo(2);
    m1.scale.setTo(0.2);
    keyUp = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    keyDown = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    keyLeft = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    keyRight = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    
}

function update() {
    if(keyUp.isDown){
        //console.log("down");
        //m1.y--;
        m1.y -= move;
    }

    if(keyDown.isDown){
        m1.y += move;
    }

    if(keyLeft.isDown){
        m1.x -= move;
    }

    if(keyRight.isDown){
        m1.x += move;
    }
}