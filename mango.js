class Mango{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction : 0.1,
			}
		this.x = x;
		this.y = y;
		this.r = r
		this.image = loadImage("mango.png")
		this.body = Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var mPos = this.body.position;	
		push()
		translate(mPos.x, mPos.y);
		rotate(this.body.angle)
		imageMode(CENTER);
		image(this.image, 0,0,this.r,this.r)
		pop()
    }
}