import React, { Component } from "react";
import FuncCompo from "./FuncCompo";
import CompoClass from "./CompoClass";


class Buttonhandle extends Component{
    constructor(){
        super();
        this.state={
           bol:1,
           count:1,
        }
    }
     handleBol=()=>{
        console.log(this.state.bol);

        this.setState(
            {
               bol:this.state.bol+1,
            }

        )
        console.log(this.state.bol);
     }
     handleClass=()=>{
        console.log(this.state.count);

        this.setState(
            {
               count:this.state.count+1,
            }

        )
        console.log(this.state.count);
     }
    render()
    {
        return(
            <>
            {/* <button onClick={()=>{this.setState(this.state.count+1)}}>Increment</button> */}
           <div className="button_main">
           <button onClick={this.handleBol}>Click to see Functonal Component</button>
            <button onClick={this.handleClass}>Click to see Class Component</button>
              
           </div>
              <div className="mainbox">
              <div className=" a">{this.state.bol%2!==0 ?  "": <FuncCompo/>}</div>
            <div className=" b">{this.state.count%2!==0 ? "" : <CompoClass/>}</div>
              </div>
           
            </>
        )
    }
}
export default Buttonhandle;