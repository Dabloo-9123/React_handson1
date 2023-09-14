import React from "react";


function FuncCompo(){
    return(
        <>
         <div className="child">
            <h2>This is created using Functional Component</h2>
            <p className="para">This is done by External css</p>
            <p style={{color:"red"}}>This is done by using inline css</p>
        </div>
        </>
    )
}
export default FuncCompo;