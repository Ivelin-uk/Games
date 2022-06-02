'use strict'
const game = new Phaser.Game(800, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })
let mouse;

function preload() {
    
}

function create() {
    mouse = game.input.mousePointer;
    let input = this.input;
    console.log(input);
}

function update() {
    if(mouse.x > game.width / 2){
        game.stage.backgroundColor = 'rgb(66,66,66)';
    }else{
        game.stage.backgroundColor = 'rgb(10,20,60)';
    }
}