class Slingshot {
  constructor(body, anchor) {
    var options = {
      bodyA: body,
      pointB: anchor,
      stiffness: 0.001,
      length: 10,
    };

    this.bodyA = body;
    this.pointB = anchor;
    this.Slingshot = Constraint.create(options);
    World.add(world, this.Slingshot);
  }

  display() {
    if (this.Slingshot.bodyA) {
      var pointA = this.bodyA.position;
      var pointB = this.pointB;

      strokeWeight(2);
      //stroke(240,240,240);
      line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
  }
  fly() {
    //World.remove(world,this.rope)
    this.Slingshot.bodyA = null;
  }
}
