var canvas;
var music;
var cube
var box1; box2; box3; box4;
var edge;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    

    //create 4 different surfaces
    box1 = createSprite(100,585,170,20)
    box1.shapeColor = "orange"
    box2 = createSprite(300,585,170,20)
    box2.shapeColor = "blue"
    box3 = createSprite(500,585,170,20)
    box3.shapeColor = "pink"
    box4 = createSprite(700,585,170,20)
    box4.shapeColor = "green"
    //create box sprite and give velocity
    cube = createSprite(random(20,750),300,40,40);
    cube.shapeColor = "white"
    cube.velocityY = 5
}

function draw() {
    background("grey");
    music.play();
    //create edgeSprite
    edge = createEdgeSprites();
    cube.collide(edge);

text(mouseX+","+mouseY,mouseX,mouseY)

    //add condition to check if box touching surface and make it box
    if (box1.isTouching(cube)){
        cube.shapeColor = "orange";
        cube.velocityY = 0;
        
    }
    if (box2.isTouching(cube)){
        cube.shapeColor = "blue";
        ball.velocityY = 0;
       
        
    }
    if (box3.isTouching(cube)){
        cube.shapeColor = "pink";
        cube.velocityY = 0;
       
        
    }
    if (box4.isTouching(cube)){
        cube.shapeColor = "green";
        cube.velocityY = 0;
       
    }
    drawSprites();
}
