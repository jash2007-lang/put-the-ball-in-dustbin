class Paper {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          restitution: 0.2,
          friction: 0.3,
          density: 1.2
      }
      this.image = loadImage("ball 5.jpg")
      this.body = Bodies.circle(x,y,r,options);
      this.r = r;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      
      image(this.image,pos.x, pos.y, this.r*3, this.r*3);
    }
  };