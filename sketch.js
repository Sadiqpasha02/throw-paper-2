//WHITEHATJR PROJECT 25 CLASS 25
//CRUMPLED BALLS VOL 2 - 12-11-2020

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var OrDustbin, OrDustbinImage;

function preload() {
    OrDustbinImage = loadImage("dustbingreen CPro25.png");
}

function setup() {
    createCanvas(1350, 600);

    OrDustbin = createSprite(1025, 420, 80, 80);
    OrDustbin.addImage(OrDustbinImage);
    OrDustbin.scale=0.9;

    engine = Engine.create();
    world = engine.world;

    OriginGround = new Ground(width/2, 585, 1350, 30);

    OriginPaper = new Paper(300, 550, 70);

    LDustbin = new Dustbin(920, 420, 20, 300);
    RDustbin = new Dustbin(1130, 420, 20, 300);
    UDustbin = new Dustbin(1025, 560, 220, 20);

}

function draw () {
    background(color(0, 255, 255));
    Engine.update(engine);

    OriginGround.display();
    OriginPaper.display();

    LDustbin.display();
    RDustbin.display();
    UDustbin.display();

    drawSprites();

    fill(color(0, 0, 125));
    textSize(20)
    textFont("Georgia");
    text("Press SPACE to throw the paper", 530, 100);

}

function keyPressed() {
    if (keyDown("SPACE")) {
        Matter.Body.applyForce(OriginPaper.body, OriginPaper.body.position, {x:790, y:-920});
    }
}