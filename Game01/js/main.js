'use strict'
const game = new Phaser.Game(800, 800, Phaser.AUTO, 'game', { preload, create, update })

function preload() {
    game.load.image("bg","images/gameBg.jpg");
    game.load.image("google","images/google.png");
    game.load.image("monster1","images/monster1.png");
}

function create() {
    //game.stage.backgroundColor = "#2BF5A9"
    //let bg1 = game.add.sprite(0,0,"bg")
    //bg1.width = 400;
    //bg1.height = 400;

    let pic1 = game.add.sprite(0,0,"google");
    console.log("width x: " + pic1.width);
    console.log("height y: " + pic1.height);
    pic1.scale.x = 0.2;
    pic1.scale.y = 0.2;
    console.log("width x: " + pic1.width);
    console.log("height y: " + pic1.height);

    let m1 = game.add.sprite(400,400,"monster1");
    console.log("width x: " + m1.width);
    console.log("height y: " + m1.height);
    //m1.scale.x = 2;
    //m1.scale.y = 2;
    m1.scale.setTo(0.2);
    console.log("width x: " + m1.width);
    console.log("height y: " + m1.height);
    


}

function update() {

}