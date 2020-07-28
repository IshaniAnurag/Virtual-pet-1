//Create variables here
var dog,happydog;
var database;
var foodS,foodStock;
var dogimg1,dogimg2;


function preload()
{
  //load images here
  dogimg1=loadImage("images/dogImg.png");
  dogimg2=loadImage("images/dogImg1.png");

}

function setup() {
  database=firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
	createCanvas(500, 500);
   dog=createSprite(250,250,50,50);
   dog.addImage(dogimg1);
   dog.scale=0.25;


}


function draw() {  
  background (46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogimg2);

  }

  drawSprites();
  //add styles here
textSize(20);
fill("white");
stroke("white");
text("FoodStock:"+foodS,150,100)
text("NOTE:press UP ARROW to feed your pet",50,400);

}


function readStock(data){
  foodS=data.val();

}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    food:x
  })

}