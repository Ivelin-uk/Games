'use strict'

const game = new Phaser.Game(500, 500, Phaser.AUTO, 'game-canvas', { preload, create, update })

let d1
let d2
let d3
let d4

let A
let D
let space
let platforms
let coins

function preload() {
    game.load.image('bg','pictures/backgrounds/desert.png') 
    //let firstName = "Ivan"
    //let lastName = "Ivanov"
    //let age = 40
    //let fullInfo = "FirstName: " + firstName + " LastName: " + lastName + " age: " + age
    //let fullInfo = `FirstName: ${firstName} LastName: ${lastName} Age ${age}`
    //console.log(fullInfo)
    for(let i = 1; i <= 4; i++){
        game.load.spritesheet(`d${i}`,`pictures/dinos/dino${i}.png`, 576/24, 24) 
    }
    //game.load.spritesheet('d1','pictures/dino/dino1.png',576/24, 24) 
    //game.load.spritesheet('d1','pictures/dino/dino1.png',576/24, 24) 
    //game.load.spritesheet('d1','pictures/dino/dino1.png',576/24, 24) 
}
    
function create() {
    //d1 = game.add.sprite(0,0,"d1")
    //d2 = game.add.image(0,100,"d2")
    //d3 = game.add.image(0,200,"d3")
    //d4 = game.add.image(0,300,"d4")
    game.time.events.loop(Phaser.Timer.SECOND, createOject, this)
}

function update(){ 

}


function createOject(){
    console.log("Time")
    let x = game.rnd.integerInRange(0, game.width)
    let y = 0
    let numberDino = game.rnd.integerInRange(1, 4)
    let dino = game.add.sprite(x, y, `d${numberDino}`)
    dino.scale.setTo(3)
    game.physics.arcade.enable(dino)
    dino.body.gravity.y = 250
}















