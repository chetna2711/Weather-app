import React from "react";


const Cal = () => {


    const calculater = document.querySelector(".main-part");
    const keys = document.querySelector("button");

    const writeNum = (e) => {
       
    }

  
    return(
        <>
        
        <div className="cal">
            <div >
                 <input type="num" className="display" />
            </div>

            <div className="main-part">
                <button className="num" onClick={writeNum}>7</button>
                <button className="num">8</button>
                <button className="num">9</button>
                <button className="sign">/</button>
                <button className="num">4</button>
                <button className="num">5</button>
                <button className="num">6</button>
                <button className="sign">*</button>
                <button className="num">1</button>
                <button className="num">2</button>
                <button className="num">3</button>
                <button className="sign">-</button>
                <button className="num">.</button>
                <button className="num">0</button>
                <button className="sign">+</button>
                <button className="clr" id="clr">C</button>  
                <button className="equal" id="equal">=</button>

            </div>
        </div>
        
        </>
    )
}

export default Cal;