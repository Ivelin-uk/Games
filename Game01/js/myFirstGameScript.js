'use strict'
const game = new Phaser.Game(800, 800, Phaser.AUTO, 'myFirstGame', { preload, create, update })

function preload() {
    game.load.image("bg","images/gameBg.jpg");
    game.load.image("google","images/google.png");
    game.load.image("monster1","images/monster1.png");
}

function create() {
    game.stage.backgroundColor = "#6cad7d";
    let m1 = game.add.sprite(0,0,"monster1");
    console.log(m1.width);
    console.log(m1.height);

    let m2 = game.add.sprite(225,0,"monster1");
    let m3 = game.add.sprite(450,225,"monster1");
    let m4 = game.add.sprite(m1.width * 3,m1.height * 2,"monster1");
}

function update() {

}