
class Arithmetic 
{ 
     Number1:number;
     Number2:number;
     Number3:number;   
  
    
      constructor(value:number,value2:number) 
        { 
         this.Number1 = value 
	 this.Number2 = value2
	}  
 
    
    display():void 
     {
	   
      console.log("\n First value : "+this.Number1,"\n second value:"+this.Number2)
     
      
    
	 
    }
	
    add():number
	{
	
	return this.Number1+this.Number2;	
	
	} 
     
     
    mul():number
	{
	

	return this.Number1*this.Number2;
	
	} 
   
    div():number
	{
	return this.Number1/this.Number2;
	} 
	
     
    sub():number 
	{
	return this.Number1-this.Number2;
	} 
 }

 var obj1 = new Arithmetic(10,20);
 var obj2 = new Arithmetic(5,10);
 obj1.display();
 obj2.display();
 

 var iret:number,ret:number;
var ch=0;
	
	while(1)
	{
	  ch++;
				
switch(ch)
{
	case 1:
	{
		
		iret=obj1.add();
		 ret=obj2.add();
		console.log("\n1.Addition is :"+iret);
		console.log("\n2.Addition is :"+ret);
				
		break;
	}
	
	case 2:
	{
		
		iret=obj1.sub();
		ret=obj2.sub();	
		console.log("\n1.Substraction is :"+iret);
		console.log("\n2.Substraction is :"+ret);
		break;
	}
	case 3:
	{
		iret=obj1.mul();
		ret=obj2.mul();
		console.log("\n1.Multiplication is :"+iret);
		console.log("\n2.Multiplication is :"+ret);
		break;	
	}
	case 4:
	{
		iret=obj1.div();
		ret=obj2.div();
		console.log("\n1.Division is :"+iret);
		console.log("\n2.Division is :"+ret);
		break;
	}


}
	if(ch==4)
		{
			break;	
		}

}




