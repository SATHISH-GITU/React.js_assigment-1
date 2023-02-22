import React from 'react';
import ReactDOM from 'react-dom/client';

class Pro extends React.Component{
   constructor(props){
       super(props);
       this.state={
           r:"Welcome ",
           t:"To ",
           e:" React Js Sathish Kumar ",
           i:" Enjoy Your React JS"
       }
   }
     Changes=()=>{
     this.setState({r:"Hi",t:"Sathish",e:" How Are u",i:"Full Stack Web Developement"})
    }
    Changes1=()=>{
        this.setState({r:"I",t:"Love",e:" Coading ",i:" Java, Full Stack , Python"})
       }
       Changes2=()=>{
        this.setState({r:" Iam",t:"From",e:" Department ",i:" of Mechanical Engineering"})
       }
       Changes3=()=>{
        this.setState({r:" Build ",t:" Your",e:" WebDesign",i:" Now-All The Best"})
       }
       Changes4=()=>{
        this.setState({r:" Iam",t:" In",e:" Full Stack Training",i:" By Prograd Technologies"})
       }
       Changes5=()=>{
        this.setState({r:" Iam ",t:"From",e:" St Josephs College Of Engineering ",i:" Chennai"})
       }
    render(){
        var side=this.props.s;
        var peri=12*side;
        return(
            <>
            <button id='but'  onClick={this.Changes} >MAGIC 1</button>
            <button id='but'  onClick={this.Changes1} >MAGIC 2</button>
            <button id='but'  onClick={this.Changes2} >MAGIC 3</button>
            <button id='but' onClick={this.Changes3} >MAGIC 4</button>
            <button id='but' onClick={this.Changes4} >MAGIC 5</button>
            <button id='but' onClick={this.Changes5} >MAGIC 6</button>

            <h1 id='heapify' > Click The Above button To Enjoy The Majic Effect  </h1>
            <h1 id='mams' ><mark>{this.state.r+this.state.t+this.state.e+this.state.i}</mark></h1>
            </>
            
        );
            
    }
}
export default Pro;