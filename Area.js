import React from "react";
class Area1 extends React.Component{
    render(){
        var a=5;
        var b=10;
        var h=6;
        return(
            <div>
                 <h1>Area Of The Trapezoid : </h1>
                ((a+b)/h)
            </div>
            
            )
    }
}
class Area2 extends React.Component{
    render(){
        var B=10;
        var H=6;
        return(
           <div>
                <h1>Area Of The Parallelogram :</h1>
                (B*H)
           </div>
            )
    }
}
class Area3 extends React.Component{
    render(){
        var a=5;
        return(
            <div>
                <h1>Area Of The Square:</h1>
              (a*a)
            </div>
            
            )
    }
}

class Area4 extends React.Component{
    render(){
        var pi=3.14;
        var r=10;
        return(
            <div>
                <h1>Area of The Circle:</h1>
               (pi*r*r)
            </div>
        )    
}
}
export  {Area1};
export  {Area2};
export  {Area3};
export  {Area4};