var backgroundImg,bikeImg,coinImg,obstacleImg;
var bike;
function preload{
backgroundImg = loadImage("background.jpeg");
bikeImg = loadImage("Bike.png");
coinimg = loadImage("Coin.png");
obstacleImg = loadImage("Obstacle.png")
}

    function setup(){
createCanvas(1000,500);
bike.createSprite(950,300,50,50);
bike.addImage(bikeImg);
bike.scale = 0.5;


}
function draw(){
    background(backgroundImg);
    drawSprites();
}
