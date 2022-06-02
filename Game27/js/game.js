'use strict'
const game = new Phaser.Game(500, 500, Phaser.AUTO, 'game-canvas', { preload, create, update })

let player1
let A
let D
let space
let platforms
let coins

function preload() {
    game.load.spritesheet('p1','pictures/backgrounds/dude.png',285 / 9 , 42)
    game.load.image('platform','pictures/backgrounds/platform.png')
    game.load.image('bg','pictures/backgrounds/desert.png')
    game.load.spritesheet('coin','pictures/backgrounds/coin.png',1198 / 5, 704 / 2)
}
    
function create() {
    createWorld()
    createButtons()
    //console.log(coins.length)
}

function createWorld(){
    game.stage.backgroundColor = 'rgb(68, 136, 170)';
    game.world.setBounds(0, 0, 20000, 500)
    createPlayer()
    game.camera.follow(player1, Phaser.Camera.FOLLOW_PLATFORMER, 0.1, 0.1)
    
    platforms = game.add.group()
    platforms.enableBody = true

    coins = game.add.group()
    coins.enableBody = true

    for(let x = 0; x < game.world.width; x += game.rnd.integerInRange(120, 400)){
        let y = game.rnd.integerInRange(100, 350)
        platforms.create(x,y,'platform')
        coins.create(x + 70,y - 80,'coin')
    }
    
    platforms.forEach(function(p){
        p.scale.setTo(0.2);
        p.body.immovable = true
    })

    coins.forEach(function(coin){
        coin.scale.setTo(0.2)
        coin.animations.add('coin-animations' , [0,1,2,3,4,5,6,7,8,9] , 13 ,true)
        coin.animations.play('coin-animations')
    })
}

function update(){ 
    movePlayer();
    console.log(coins.length)
}

function createButtons(){
    A = game.input.keyboard.addKey(Phaser.Keyboard.A)
    D = game.input.keyboard.addKey(Phaser.Keyboard.D)
    space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
}

function createPlayer(){
    player1 = game.add.sprite(0,0  ,'p1')
    player1.frame = 4
    player1.scale.setTo(1.5)
    player1.animations.add('left-move',[0,1,2,3],8,true)
    player1.animations.add('right-move',[5,6,7,8],8,true)
    game.physics.arcade.enable(player1)
    player1.body.collideWorldBounds = true
    player1.body.gravity.y = 250
    player1.body.bounce.y = 0.2
}

function movePlayer(){
    if(A.isDown){
        player1.animations.play('left-move')
        player1.body.velocity.x = -300
   }else if(D.isDown){   
        player1.body.velocity.x = 300
        player1.animations.play('right-move')
   }else{
        player1.body.velocity.x = 0
        player1.animations.stop()
   }

   let flag = game.physics.arcade.collide(player1,platforms)

   if(space.isDown && flag){
        player1.body.velocity.y = -200
        player1.frame = 4
   }

   game.physics.arcade.collide(player1, coins, function(player1,currentCoin){
        currentCoin.destroy()
   })
}

 
/*
function isTouchGround(){
   let flag =  game.physics.arcade.collide(player1,ground);
   if(space.isDown && flag){
        player1.body.velocity.y = -300
        player1.frame = 4
   }
}

function isTouchCoin(){
    game.physics.arcade.collide(player1, coins, function(p,currentCoin){
        currentCoin.destroy()
    })
}
*/












