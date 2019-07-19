class Circle
{
   radious:number 
   PI:number=3.14;
   area:number
	
	constructor( value:number)
	{	
		this.radious = value;	
	}
	
    Aarea()
	{
		this.area =this.radious*this.radious*this.PI;
	}
		
    dis()
	{
	console.log("value of area is\t"+this.area)
	}	
}


var obj2 =new Circle(5);
var obj1 =new Circle(10);	

obj1.Aarea();
obj1.dis();

obj2.Aarea();
obj2.dis();
