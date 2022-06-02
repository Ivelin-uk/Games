'use strict'
const game = new Phaser.Game(800, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })
let keyUp;
let keyDown;
let keyLeft;
let keyRight;
let pleyer1;
let move = 5;
let positionXtext;
let positionYtext;
let r;
let b;
let g;


function preload() {
    game.load.image('bg2', 'pictures/bg2.png')
    game.load.spritesheet('p2', 'pictures/p2.png', 480 / 8, 240 / 4);
}

function create() {

    game.stage.backgroundColor = "#4488AA"
    //let bg = game.add.image(0,0,'bg2');
    //bg.width = game.width
    //bg.height = game.height
    pleyer1 = game.add.sprite(game.width / 2, game.height / 2, 'p2')
    //console.log(pleyer1.width);
    //console.log(pleyer1.height);
    pleyer1.scale.setTo(2)
    //pleyer1.anchor.x = 0.5;
    //pleyer1.anchor.y = 0.5;
    //pleyer1.anchor.setTo(0.5);
    //console.log(pleyer1.width);
    //console.log(pleyer1.height);
    let framesLeft = [8, 9, 10, 11, 12, 13, 14, 15];
    pleyer1.animations.add('right', framesLeft, 15, true)
    pleyer1.animations.add('left', framesLeft, 15, true)
    pleyer1.animations.add('up', [24, 25, 25, 26, 27, 28, 29, 30, 31], 15, true)
    pleyer1.animations.add('down', [0, 1, 2, 3, 4, 5, 6, 7], 15, true)
    pleyer1.animations.add('down-right', [5, 25, 6, 15, 9, 86, 30], 15, true)
    //pleyer1.animations.play("left");
    //a1.play();
    //console.log(pleyer1);
    keyUp = game.input.keyboard.addKey(Phaser.Keyboard.UP)
    keyDown = game.input.keyboard.addKey(Phaser.Keyboard.DOWN)
    keyLeft = game.input.keyboard.addKey(Phaser.Keyboard.LEFT)
    keyRight = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT)
    //R = game.input.keyboard.addKey(Phaser.Keyboard.R);   

    //mouse
    positionXtext = game.add.text(50, 50, "", { font: "65px Arial", fill: "#ff0044" });
    positionYtext = game.add.text(50, 150, "", { font: "65px Arial", fill: "#ff0044" });

}


function update() {
    if (keyRight.isDown) {
        pleyer1.x += 5
        console.log("right")
        pleyer1.animations.play('right')
        //aR.play();
    } else if (keyLeft.isDown) {
        pleyer1.x -= 5;
        console.log("left")
        pleyer1.animations.play('left')
    } else if (keyUp.isDown) {
        pleyer1.y -= 5;
        console.log("up")
        pleyer1.animations.play('up')
    } else if (keyDown.isDown) {
        pleyer1.y += 5;
        console.log("down")
        pleyer1.animations.play('down')
    } else {
        pleyer1.animations.stop();
        pleyer1.frame = 0;
    }

    let mouseXpositionRound = Math.round(game.input.mousePointer.x)
    positionXtext.text = "X:" + mouseXpositionRound

    let mouseYpositionRound = Math.round(game.input.mousePointer.y)
    positionYtext.text = "Y:" + mouseYpositionRound


    if (pleyer1.x > game.width / 2) {
        //r = Phaser.Math.between(0, 255)
        //g = Phaser.Math.between(0, 255)
        //b = Phaser.Math.between(0, 255)
        //let color = `rgb(${r},${g},${b})`
        game.stage.backgroundColor = "#202020";
    } else {
        game.stage.backgroundColor = "#909090";
    }
}