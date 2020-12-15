class Rope {
    constructor(bodyA,bodyB,offsetX,offsetY){

      this.offsetX= offsetX 
      this.offsetY= offsetY
 
     
    var options = {
      
        bodyA : bodyA,
        bodyB : bodyB,
        pointB : {x:this.offsetX, y:this.offsetY},
        stiffness : 1,
        length : 130

    }
    this.rope = Constraint.create(options);
    
    
    World.add(world,this.rope);
    }
    
     
    display(){
       
    
      var posA = this.rope.bodyA.position;
      var posB = this.rope.bodyB.position;

      fill(255,0,0)
      strokeWeight(2);
      line(posA.x,posA.y, posB.x+this.offsetX ,posB.y+this.offsetY);
    
      
      
    
    }
    
    
    
    
    
    
    }