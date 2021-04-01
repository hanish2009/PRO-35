var ball;
var database,positions;

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

function setup(){
database = firebase.database()

    createCanvas(1000,600);
    ball=createSprite(250,450,150,150);
  ball.addAnimation("hotAirBalloon",balloonImage1);
  ball.scale=0.5;
var locNode = database.ref("Ball/positions")
locNode.on("value",readOp,showError)

}

function draw(){
  background(bg);


    if(keyDown(LEFT_ARROW)){
        ball.addAnimation("hotAirBalloon",balloonImage2);
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        ball.addAnimation("hotAirBalloon",balloonImage2);    
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        ball.addAnimation("hotAirBalloon",balloonImage2);    
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        ball.addAnimation("hotAirBalloon",balloonImage2);
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){

database.ref("Ball/positions").set({
    x:positions.x + x,
    y:positions.y + y
})



    //ball.x = ball.x + x;
    //ball.y = ball.y + y;
}
function readOp(data){
    positions = data.val()
    ball.x = positions.x
    ball.y = positions.y
}
function showError(){
    console.log("error")
}