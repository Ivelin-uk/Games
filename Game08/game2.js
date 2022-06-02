'use strict'
const game = new Phaser.Game(500, 500, Phaser.AUTO, 'game-canvas', { preload, create, update })
let mouse
let r = Phaser.Math.between(0, 255)
let g = Phaser.Math.between(0, 255)
let b = Phaser.Math.between(0, 255)

function preload() {
    
}

function create() {
    //game.stage.backgroundColor = 'rgb(50, 50, 50)'
    mouse = game.input.mousePointer
    //let color = 'rgb(' + r + ',' + g + ',' + b +')'
    let color = `rgb(${r},${g},${b})`
    game.stage.backgroundColor = color
}

function update() {
    if(mouse.leftButton.isDown){
        r = Phaser.Math.between(0, 255)
        g = Phaser.Math.between(0, 255)
        b = Phaser.Math.between(0, 255)
        let color = `rgb(${r},${g},${b})`
        game.stage.backgroundColor = color
    }
}