let slider;
var strokeNum;
var red1;
var orange;
var yellow;
var green1;
var blue1;
var pink;
var purple;
var black;
var grey;

function setup() {
	createCanvas(windowWidth-20, windowHeight-20);
  background('white');
  slider = createSlider(1, 40, 10);
  slider.position(10, 10);
  slider.style('width', '120px');
  red1 = createNewButton('red',15,30);
  orange = createNewButton('darkorange',50,30);
  yellow = createNewButton('yellow',85,30);
  green1 = createNewButton('green',15,65);
  blue1 = createNewButton('blue',50,65);
  pink = createNewButton('deeppink',85,65);
  purple = createNewButton('purple',15,100);
  black = createNewButton('black',50,100);
  grey = createNewButton('grey',85,100);
  red1.drawRect();
  orange.drawRect();
  yellow.drawRect();
  green1.drawRect();
  blue1.drawRect();
  pink.drawRect();
  purple.drawRect();
  black.drawRect();
  grey.drawRect();
  stroke('black');
}

function draw() {
  strokeNum = slider.value();
  strokeWeight(strokeNum);
  if(mouseIsPressed && onSlider(mouseX,mouseY) == false){
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function onSlider(x,y){
  if(y < 130 + strokeNum/2 && x < 125 + strokeNum/2){
    return true;
  }
    return false;
}

function mousePressed(){
  if(red1.clicked()){
    red1.swapColor();
  }
  if(orange.clicked()){
    orange.swapColor();
  }
  if(yellow.clicked()){
    yellow.swapColor();
  }
  if(green1.clicked()){
    green1.swapColor();
  }
  if(blue1.clicked()){
    blue1.swapColor();
  }
  if(pink.clicked()){
    pink.swapColor();
  }
  if(purple.clicked()){
    purple.swapColor();
  }
  if(black.clicked()){
    black.swapColor();
  }
  if(grey.clicked()){
    grey.swapColor();
  }
}

