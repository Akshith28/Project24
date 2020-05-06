class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
     this.body = Bodies.rectangle(x,y,width,height,options);
     
     World.add(world, this.body);
     this.width = width;
     this.height = height;
    
    };

    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rect(0,0,this.width,this.height);
      pop();
      arc(70, height-65, 90, 100, PI , TWO_PI);
      rect(20,height-65,100,20);
      rect(20,height-45,100,20);

    };
}
