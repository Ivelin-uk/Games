'use strict'
const game = new Phaser.Game(800, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })

let leftButton;
let rightButton;
let upButton;
let downButton;
let player;
let explosion;

function preload() {
    game.load.image('bg','pictures/backgrounds/background-sky (1).png')
    game.load.spritesheet('guy','pictures/spriteSheet/guy.900x920.8x4.png',900/8,920/4)
    game.load.spritesheet('exp','pictures/spriteSheet/explosion.320x320.5x5.png', 320 / 5, 320 / 5)
}
    
function create() {
    createBackground()
    createPlayer()
    createButtons()
    createExplosion()
}

function update(){
    movingPleyer();
    if(cheakTouching()){
        explosion.x = Math.floor(Math.random() * game.width)
        explosion.y = Math.floor(Math.random() * game.height)
    }
}

function cheakTouching(){
    let halfWidthPlayer =  player.width / 2;
    let halfWidthExp =  explosion.width / 2;
    let halfHeightPlayer =  player.height / 2;
    let halfHeightExp =  explosion.height / 2;

    if(Math.abs(player.x - explosion.x) < halfWidthPlayer + halfWidthExp && 
        Math.abs(player.y - explosion.y) < halfHeightPlayer + halfHeightExp){
        return true;
    } else{
        return false;
    }
}

function movingPleyer(){ 
    if(leftButton.isDown){
        player.animations.play("left")
        player.x -= 7
    }else if(rightButton.isDown){
        player.animations.play("right")
        player.x += 7
    }

    if(upButton.isDown){
        player.animations.play("up")
        player.y -= 7
    }else if(downButton.isDown){
        player.animations.play("down")
        player.y += 7
    }

    if(!leftButton.isDown && !rightButton.isDown && !upButton.isDown && !downButton.isDown){
        player.animations.stop()
    }
}

function createExplosion(){
    explosion =  game.add.sprite(400,400, 'exp');
    explosion.anchor.setTo(0.5);
    explosion.animations.add("fire",[],35,true);
    explosion.animations.play('fire')
}

function createButtons(){
    leftButton = game.input.keyboard.addKey(Phaser.Keyboard.LEFT)
    rightButton = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT)
    upButton = game.input.keyboard.addKey(Phaser.Keyboard.UP)
    downButton = game.input.keyboard.addKey(Phaser.Keyboard.DOWN)
}

function createBackground(){
    let bg = game.add.image(0,0,'bg')
    bg.scale.setTo(0.5)
}

function createPlayer(){
    player = game.add.sprite(150,150, 'guy')
    player.anchor.setTo(0.5);
    player.animations.add("up",[0,1,2,3,4,5,6,7],15,true);
    player.animations.add("down",[8,9,10,11,12,13,14,15],15,true);
    player.animations.add("right",[16,17,18,19,20,21,22,23],15,true);
    player.animations.add("left",[24,25,26,27,28,29,30,31],15,true);
}




