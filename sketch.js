
var dog,dogimg,happyDog,database,foods,lastFed,foodStack;
var feed,addFood;
var foodObj;
function preload()
{
	//load images here
  dogimg   = loadImage("images/dogimg.png");
  happyDog = loadImage("images/dogimg1.png");
}

function setup() {
  database=firebase.database();
	createCanvas(1000,500);

  foodObj =new Food();

  dog = createSprite(800,220,150,150);
  dog.addImage(dogimg);
  dog.scale=0.15;
  
  feed = createButton("Feed the Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood =createButton("Add Food")
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}


function draw() {  
 
  background("green");

  foodObj.display();

  feedTime = database.ref("Feedtime");
  feedTime.on("value",function(data){
   lastFed = data.val();
  })

    fill(255);
    textSize(20);
    if( lastFed >= 12)
    {
      text("Last Feed: "+lastFed % 12 +"PM",350,30);
    }
    else if(lastFed == 0)
    {
      text("Last Feed: 12AM",350,30);
    
    }
     else{
       text("Last Feed:"+lastFed+"AM",350,30)
     }
    drawSprites();
}

function readStock(data){
  foodS = data.val();
  foodObj.updateFoodStock(foodS);
}

function feedDog(){
  dog.addImage(happyDog);
  foodObj.updateFoodStock(foodObj.getFoodStock()-1) 
  database.ref('/').update({
  Food:foodObj.getFoodStock(),
  FeedTime:hour()
})
}

function addFoods()
{
  foodS ++;
  database.ref('/').update({
    Food:foodS
  })
} 