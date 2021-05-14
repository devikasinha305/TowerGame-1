class Catapult{
    constructor(bodyA, pointB){

    var catapult_options = {
    bodyA: bodyA,
    pointB: pointB,
    stiffness: 0.04,
    length: 1
    }

    this.pointB = pointB;
    this.bodyA = bodyA;
    this.catapult = Constraint.create(catapult_options);
    World.add(world, this.catapult);
    }
    attach(body){
       this.catapult.bodyA = body;
    }

 fly(){
    this.catapult.bodyA = null;
 }
 
 display(){
    if(this.catapult.bodyA){
    var pointA = this.catapult.bodyA.position;
    var pointB = this.pointB; 
    strokeWeight(3);
    fill("white");
    line(pointA.x, pointA.y, pointB.x, pointB.y);
    }  
 }
}