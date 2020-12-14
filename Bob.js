class Bob {
    constructor(x,y,d ){
        var ball_options ={
            isStatic:true,
            restitution: 0.3,
            friction: 0.5,
            density: 1,
             
        }
        this.x = x;
        this.y = y;
        this.d = d;
       this.body=Bodies.circle(x,y,d/2,ball_options);
       World.add(world,this.body);


    }
    display(){
        var pos= this.body.position ;
       
        push()
        translate(pos.x,pos.y);
        fill(244,0,69);
        strokeWeight(2);
        stroke("black");
        ellipseMode(RADIUS);
        ellipse (0,0, this.d/2, this.d/2 );
       pop()
    }


}