class launcher{
    constructor(body,sling){
        var option={
            bodyA: body,
            pointB: sling,
            stiffness: 0.004,
            length: 1
        }
        
        this.bodyA = body
        this.pointB = sling
        this.launch = Constraint.create(option)
        World.add(world,this.launch)
        }
        fly()
        {
            this.launch.bodyA = null;
        }
        attach(body){
            this.launch.bodyA = body;
        }
        display()
        {
            fill("white")
            if(this.launch.bodyA)
            {
                var pointA = this.bodyA.position;
                var pointB = this.pointB
    
                strokeWeight(3);
                line(pointA.x,pointA.y,pointB.x,pointB.y);
            }
        }
    }
    