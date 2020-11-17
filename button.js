function createNewButton(color,x,y) {
  const obj = {};
  obj.color = color;
  obj.x = x;
  obj.y = y;
  obj.drawRect = function() {
    fill(obj.color);
    noStroke();
    rect(obj.x,obj.y,25,25);
  };
  obj.clicked = function(){
    if(mouseX > obj.x && mouseX < obj.x +25 && mouseY > obj.y && mouseY < obj.y +25){
      return true;
    }
    return false;
  };
  obj.swapColor = function(){
    stroke(obj.color);
  };
  return obj;
}

